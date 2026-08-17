// Transforma uma transcrição em JSON de um relatório do FM num relatório do site.
//
// Corre com:
//     node scripts/report_build.js <transcricao.json>            # valida e imprime
//     node scripts/report_build.js <transcricao.json> --diff     # compara com o que está nos dados
//
// Porque é que existe: a transcrição à mão escrevia os golos como texto corrido,
// "71' W. Sule J. Pršir", sem separador entre marcador e assistente e sem dizer
// qual dos dois marcou. Isso obrigava a adivinhar onde parte o nome e deixava a
// ordem à mercê de como o FM desenha o ecrã — que espelha a coluna da direita.
// Aqui a transcrição diz `scorer` e `assist` por extenso, e o que sai já não
// depende de nenhuma heurística.
//
// O JSON de entrada:
//
// {
//   "date":    "Sábado 1 de Novembro de 2025",
//   "teams":   { "home": "Hajduk Split", "away": "HNK Gorica" },
//   "score":   { "home": 1, "away": 1 },
//   "stadium": "Poljud",
//   "weather": "Calmo",
//   "playerOfMatch": { "name": "Šimun Hrgović", "rating": "7,91" },
//   "coaches": { "home": "Gonzalo García", "away": "Miguel Cardoso" },
//   "lineups": {
//     "home": { "formation": "4-3-3 DM",
//               "rows": [[{ "number": "10", "name": "Livaja", "rating": "7,8",
//                           "pos": "AR", "goal": true }], ...] },
//     "away": { ... }
//   },
//   "events": {
//     "home": [{ "minute": "90+1", "scorer": "M. Livaja" }],
//     "away": [{ "minute": "71", "scorer": "W. Sule", "assist": "J. Pršir" }]
//   },
//   "stats": [["Posse", "59%", "41%"], ...]
// }
//
// `goal: true` nas linhas é a leitura das bolas desenhadas no campo, e tem de
// ser lida do campo e não do evento: é a segunda opinião que apanha uma troca
// entre marcador e assistente. Um evento pode ainda levar "penalty": true,
// "ownGoal": true ou "sendOff": true.

const fs = require("fs");
const path = require("path");
const { loadLeagueData } = require("./load-league-data");

const MESES = { Janeiro: "Jan", Fevereiro: "Fev", Março: "Mar", Abril: "Abr", Maio: "Mai",
    Junho: "Jun", Julho: "Jul", Agosto: "Ago", Setembro: "Set", Outubro: "Out",
    Novembro: "Nov", Dezembro: "Dez" };

const ROTULOS_STATS = ["Posse", "Remates", "Remates à Baliza", "xG", "PADPAD",
    "Oportunidades Flagrantes", "Cantos", "Passes Completados", "Cruzamentos Completados",
    "Faltas", "Cartões amarelos", "Cartões vermelhos", "Distância Percorrida", "Classificação Média"];

function stripDiacritics(text) {
    return String(text).normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function nameKey(name) {
    let tokens = stripDiacritics(String(name || "").trim()).split(/\s+/);
    if (tokens.length > 1 && /^\p{Lu}\.$/u.test(tokens[0])) tokens = tokens.slice(1);
    return tokens.join(" ").toLowerCase();
}

function surnameKey(name) {
    return nameKey(name).split(" ").pop() || "";
}

// "Sábado 1 de Novembro de 2025" -> { dia: "1", mes: "Nov", ano: "2025" }
function readDate(texto) {
    let m = String(texto || "").match(/(\d{1,2})\s+de\s+(\p{L}+)\s+de\s+(\d{4})/u);
    if (!m) return null;
    let mes = MESES[m[2]] || MESES[m[2][0].toUpperCase() + m[2].slice(1).toLowerCase()];
    return mes ? { dia: m[1], mes, ano: m[3] } : null;
}

function jsString(value) {
    return `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function eventoJs(evento) {
    if (evento.sendOff) return `sendOffEvent(${jsString(evento.minute)}, ${jsString(evento.player || evento.scorer)})`;
    let extras = [];
    if (evento.assist) extras.push(`assist: ${jsString(evento.assist)}`);
    if (evento.penalty) extras.push("penalty: true");
    if (evento.ownGoal) extras.push("ownGoal: true");
    let cauda = extras.length ? `, { ${extras.join(", ")} }` : "";
    return `goalEvent(${jsString(evento.minute)}, ${jsString(evento.scorer)}${cauda})`;
}

function jogadorJs(jogador) {
    let args = [jsString(jogador.number ?? ""), jsString(jogador.name),
        jsString(jogador.rating ?? ""), jsString(jogador.pos ?? "")];
    if (jogador.goal) args.push("true");
    return `reportPlayer(${args.join(", ")})`;
}

function relatorioJs(t, fixtureKey) {
    let lado = (side) => {
        let l = t.lineups[side];
        let linhas = l.rows.map((linha) => `                [${linha.map(jogadorJs).join(", ")}]`).join(",\n");
        return `reportFormation(${jsString(l.formation)}, [\n${linhas}\n            ])`;
    };
    let eventos = (side) => (t.events[side] || []).map(eventoJs).join(", ");
    let stats = t.stats.map(([r, c, f]) => `            [${jsString(r)}, ${jsString(c)}, ${jsString(f)}]`).join(",\n");

    return `    {
        fixtureKey: ${jsString(fixtureKey)},
        date: ${jsString(t.date)},
        stadium: ${jsString(t.stadium)},
        weather: ${jsString(t.weather)},
        playerOfMatch: ${jsString(t.playerOfMatch.name)},
        rating: ${jsString(t.playerOfMatch.rating)},
        coaches: { home: ${jsString(t.coaches.home)}, away: ${jsString(t.coaches.away)} },
        formations: {
            home: ${lado("home")},
            away: ${lado("away")}
        },
        events: {
            home: [${eventos("home")}],
            away: [${eventos("away")}]
        },
        stats: reportStats([
${stats}
        ])
    }`;
}

function validar(t, dados, fixture) {
    let erros = [];
    let avisos = [];

    ["date", "teams", "score", "stadium", "weather", "playerOfMatch", "coaches", "lineups", "events", "stats"]
        .forEach((campo) => { if (t[campo] === undefined) erros.push(`falta o campo "${campo}"`); });
    if (erros.length) return { erros, avisos };

    if (!fixture) {
        erros.push(`não há nenhum jogo com esta data e estas equipas`
            + ` — um relatório cujo fixtureKey não bate certo é descartado em silêncio`);
        return { erros, avisos };
    }

    if (fixture.home !== t.teams.home || fixture.away !== t.teams.away) {
        erros.push(`equipas trocadas: o jogo é ${fixture.home} x ${fixture.away}`);
    }
    if (Number.isFinite(fixture.homeGoals)
        && (fixture.homeGoals !== t.score.home || fixture.awayGoals !== t.score.away)) {
        erros.push(`resultado ${t.score.home}-${t.score.away} contra `
            + `${fixture.homeGoals}-${fixture.awayGoals} na lista de jogos`);
    }

    let rotulos = t.stats.map((linha) => linha[0]);
    ROTULOS_STATS.forEach((rotulo) => {
        if (!rotulos.includes(rotulo)) avisos.push(`falta a estatística "${rotulo}"`);
    });

    let league = dados.leagues.find((l) => (l.fixtures || []).includes(fixture));
    let squads = league ? dados.buildSquadIndex(league) : null;

    ["home", "away"].forEach((side) => {
        let equipa = t.teams[side];
        let linha = t.lineups[side];
        if (!linha?.rows?.length) { erros.push(`falta o onze de ${equipa}`); return; }

        let jogadores = linha.rows.flat();
        if (jogadores.length !== 11) avisos.push(`${equipa} tem ${jogadores.length} jogadores, não 11`);

        let porNumero = new Map();
        jogadores.forEach((j) => {
            if (!j.number) return;
            if (!porNumero.has(j.number)) porNumero.set(j.number, []);
            porNumero.get(j.number).push(j.name);
        });
        porNumero.forEach((quem, numero) => {
            if (quem.length > 1) {
                erros.push(`${equipa} tem o número ${numero} em ${quem.join(" e ")}`
                    + ` — o desenho da camisola costuma tapar o primeiro dígito`);
            }
        });

        let defesas = linha.rows.slice(-2)[0]?.length;
        let primeiro = Number(String(linha.formation || "").match(/\d/)?.[0]);
        if (Number.isFinite(primeiro) && Number.isFinite(defesas) && primeiro !== defesas) {
            avisos.push(`${equipa}: a formação diz "${linha.formation}" mas a linha defensiva tem ${defesas}`);
        }

        let eventos = t.events[side] || [];
        let golos = eventos.filter((e) => !e.sendOff);
        let esperados = side === "home" ? t.score.home : t.score.away;
        if (golos.length !== esperados) {
            erros.push(`${equipa}: ${golos.length} golo(s) na lista de eventos para ${esperados} no resultado`);
        }

        // A bola no campo é a segunda leitura de quem marcou. Se ela e os eventos
        // discordarem, um dos dois foi lido mal - e é exatamente aqui que a troca
        // entre marcador e assistente se denuncia, antes de entrar nos dados.
        //
        // Os eventos escrevem "I. Tavares" onde o campo escreve "Iuri Tavares",
        // por isso compara-se pelo nome inteiro ou pelo apelido, como faz o
        // índice de planteis do stats-core.js.
        let mesmoJogador = (a, b) => nameKey(a) === nameKey(b) || surnameKey(a) === surnameKey(b);
        let comBola = jogadores.filter((j) => j.goal).map((j) => j.name);
        let marcadores = golos.filter((e) => !e.ownGoal).map((e) => e.scorer);

        comBola.forEach((quem) => {
            if (!marcadores.some((m) => mesmoJogador(m, quem))) {
                erros.push(`${equipa}: ${quem} tem bola no campo mas não marca em nenhum evento`);
            }
        });
        marcadores.forEach((quem) => {
            let titular = jogadores.some((j) => mesmoJogador(j.name, quem));
            if (titular && !comBola.some((b) => mesmoJogador(b, quem))) {
                erros.push(`${equipa}: ${quem} marca num evento mas não tem bola no campo`);
            }
        });

        // Um jogador que marque num golo e assista noutro tem bola no campo com
        // toda a razão, por isso só conta quem apareça como assistente e não
        // marque nada.
        let assistentes = golos.map((e) => e.assist).filter(Boolean);
        assistentes.forEach((quem) => {
            if (comBola.some((b) => mesmoJogador(b, quem)) && !marcadores.some((m) => mesmoJogador(m, quem))) {
                erros.push(`${equipa}: ${quem} aparece só como assistente mas tem bola no campo`
                    + ` — é o sinal de que marcador e assistente estão trocados`);
            }
        });

        if (squads) {
            let squad = squads.get(equipa);
            [...marcadores, ...assistentes].forEach((quem) => {
                if (jogadores.some((j) => mesmoJogador(j.name, quem))) return;
                let conhecido = squad
                    && (squad.byName.has(nameKey(quem)) || squad.bySurname.has(surnameKey(quem)));
                if (!conhecido) avisos.push(`${equipa}: "${quem}" não é titular nem aparece noutro relatório`);
            });
        }

        let entrada = (league?.tabela || []).find((l) => l.equipa === equipa);
        if (entrada?.jogador) {
            let habitual = new Map();
            (league.fixtures || []).forEach((f) => {
                ["home", "away"].forEach((s) => {
                    if (f[s] !== equipa || !f.report?.coaches?.[s]) return;
                    let c = f.report.coaches[s];
                    habitual.set(c, (habitual.get(c) || 0) + 1);
                });
            });
            let mais = [...habitual.entries()].sort((a, b) => b[1] - a[1])[0];
            if (mais && mais[0] !== t.coaches[side]) {
                avisos.push(`${equipa} é de um humano (${entrada.jogador}) e está com "${t.coaches[side]}",`
                    + ` quando o normal é "${mais[0]}" — o FM mostra o adjunto quando o treinador sai`);
            }
        }
    });

    return { erros, avisos };
}

function eventoTexto(evento) {
    if (evento.sendOff) return `${evento.minute}' ${evento.player || evento.scorer} (expulso)`;
    let cauda = [evento.assist ? `assist. ${evento.assist}` : "", evento.penalty ? "pen" : "",
        evento.ownGoal ? "a.g." : ""].filter(Boolean).join(", ");
    return `${evento.minute}' ${evento.scorer}${cauda ? ` (${cauda})` : ""}`;
}

function diff(t, fixture, dados) {
    let atual = fixture?.report;
    if (!atual) { console.log("Não há relatório nos dados para este jogo: tudo o que vem no JSON é novo."); return; }

    console.log(`\n=== diferenças para ${fixture.fixtureKey} ===`);
    let linhas = [];
    let comparar = (rotulo, antes, depois) => {
        if (String(antes ?? "") !== String(depois ?? "")) linhas.push(`  ${rotulo}\n    dados: ${antes}\n    JSON : ${depois}`);
    };
    comparar("estádio", atual.stadium, t.stadium);
    comparar("tempo", atual.weather, t.weather);
    comparar("homem do jogo", `${atual.playerOfMatch} ${atual.rating}`, `${t.playerOfMatch.name} ${t.playerOfMatch.rating}`);
    comparar("treinador casa", atual.coaches?.home, t.coaches.home);
    comparar("treinador fora", atual.coaches?.away, t.coaches.away);

    ["home", "away"].forEach((side) => {
        let formacaoAntes = atual.formations?.[side];
        let nomeAntes = typeof formacaoAntes === "object" ? formacaoAntes?.name : formacaoAntes;
        comparar(`formação ${side}`, nomeAntes, t.lineups[side].formation);

        let antesJogadores = new Map();
        (typeof formacaoAntes === "object" ? formacaoAntes.players || [] : []).flat()
            .forEach((j) => antesJogadores.set(nameKey(j.name), j));

        t.lineups[side].rows.flat().forEach((j) => {
            let velho = antesJogadores.get(nameKey(j.name));
            antesJogadores.delete(nameKey(j.name));
            if (!velho) { linhas.push(`  ${fixture[side]}: ${j.name} é novo na ficha`); return; }
            let mudou = [];
            if (String(velho.number ?? "") !== String(j.number ?? "")) mudou.push(`nº ${velho.number} -> ${j.number}`);
            if (String(velho.rating ?? "") !== String(j.rating ?? "")) mudou.push(`nota ${velho.rating} -> ${j.rating}`);
            if (String(velho.pos ?? "") !== String(j.pos ?? "")) mudou.push(`pos ${velho.pos} -> ${j.pos}`);
            if (!!velho.goal !== !!j.goal) mudou.push(`bola ${velho.goal ? "sim" : "não"} -> ${j.goal ? "sim" : "não"}`);
            if (mudou.length) linhas.push(`  ${fixture[side]}: ${j.name} — ${mudou.join(", ")}`);
        });
        antesJogadores.forEach((j) => linhas.push(`  ${fixture[side]}: ${j.name} deixou de aparecer na ficha`));

        let antes = (atual.events?.[side] || []).map((e) => {
            let p = dados.readGoalEvent(e);
            if (p.structured) return eventoTexto(e);
            let squad = dados.buildSquadIndex(dados.leagues.find((l) => (l.fixtures || []).includes(fixture))).get(fixture[side]);
            if (p.sendOff) return `${p.minute}' ${p.name} (expulso)`;
            if (p.ownGoal) return `${p.minute}' ${p.name} (a.g.)`;
            let { reading } = dados.splitScorerAndAssist(p.name, squad);
            return `${p.minute}' ${reading?.scorer ?? p.name}${reading?.assist ? ` (assist. ${reading.assist})` : ""}`;
        });
        let depois = (t.events[side] || []).map(eventoTexto);
        if (antes.join(" | ") !== depois.join(" | ")) {
            linhas.push(`  eventos ${side} (${fixture[side]})\n    dados: ${antes.join(" | ") || "—"}`
                + `\n    JSON : ${depois.join(" | ") || "—"}`);
        }
    });

    // As catorze linhas de estatística também entram no diff: sem isto, uma posse
    // ou um xG mal lidos passavam despercebidos e o --diff dizia "nenhuma".
    let statsAntes = new Map((atual.stats || []).map((linha) => [linha.label, linha]));
    (t.stats || []).forEach(([rotulo, casa, fora]) => {
        let velho = statsAntes.get(rotulo);
        statsAntes.delete(rotulo);
        if (!velho) { linhas.push(`  estatística "${rotulo}" é nova`); return; }
        if (String(velho.home) !== String(casa) || String(velho.away) !== String(fora)) {
            linhas.push(`  ${rotulo}\n    dados: ${velho.home} / ${velho.away}\n    JSON : ${casa} / ${fora}`);
        }
    });
    statsAntes.forEach((linha, rotulo) => linhas.push(`  estatística "${rotulo}" deixou de aparecer`));

    console.log(linhas.length ? linhas.join("\n") : "  nenhuma.");
}

// Escreve o relatório no ficheiro certo. Substituir um bloco que já existe é a
// operação normal; até aqui era feita à mão, com um script improvisado de cada
// vez, e partiu-se duas vezes — os ficheiros misturam `compactReport(...)` com
// objetos literais, e as duas formas fecham em sítios diferentes.
function acharBloco(texto, fixtureKey) {
    let i = texto.indexOf(`"${fixtureKey}"`);
    if (i < 0) return null;

    let aberturaObj = texto.lastIndexOf("\n    {", i);
    let aberturaCr = texto.lastIndexOf("\n    compactReport(", i);
    let usaCr = aberturaCr > aberturaObj;
    let inicio = (usaCr ? aberturaCr : aberturaObj) + 1;
    let [abre, fecha] = usaCr ? ["(", ")"] : ["{", "}"];

    let j = texto.indexOf(abre, inicio);
    let nivel = 0;
    while (j < texto.length) {
        if (texto[j] === abre) nivel++;
        else if (texto[j] === fecha && --nivel === 0) break;
        j++;
    }
    let fim = j + 1;
    if (texto[fim] === ",") fim++;
    return { inicio, fim };
}

const FICHEIRO_RELATORIOS = "js/data/croatia-reports.js";

function escrever(t, fixtureKey, destinoPedido) {
    let pasta = path.join(__dirname, "..", "js", "data");
    // Sem hífen a seguir a "reports": os relatórios estão todos no
    // croatia-reports.js, e a procura tem de o apanhar. Se não apanhar, um
    // relatório que já existe cai no ramo do relatório novo e é acrescentado
    // outra vez — fica lá duas vezes e o Map do wiring guarda o último.
    let ficheiros = fs.readdirSync(pasta).filter((f) => /^croatia-reports.*\.js$/.test(f));
    let bloco = relatorioJs(t, fixtureKey);

    let alvo = ficheiros.find((f) => fs.readFileSync(path.join(pasta, f), "utf8").includes(`"${fixtureKey}"`));
    if (alvo) {
        let caminho = path.join(pasta, alvo);
        let texto = fs.readFileSync(caminho, "utf8");
        let sitio = acharBloco(texto, fixtureKey);
        fs.writeFileSync(caminho, texto.slice(0, sitio.inicio) + bloco + "," + texto.slice(sitio.fim));
        return { ficheiro: alvo, novo: false };
    }

    let destino = destinoPedido || FICHEIRO_RELATORIOS;
    let caminho = path.join(__dirname, "..", destino);
    if (!fs.existsSync(caminho)) {
        throw new Error(`é um relatório novo e ${destino} não existe:`
            + " junta --para <ficheiro> para dizer onde pô-lo");
    }
    let texto = fs.readFileSync(caminho, "utf8");
    let fecho = texto.lastIndexOf("\n];");
    if (fecho < 0) throw new Error(`não encontrei o fim do array em ${destino}`);
    let antes = texto.slice(0, fecho);
    let virgula = antes.trimEnd().endsWith(",") ? "" : ",";
    fs.writeFileSync(caminho, antes + virgula + "\n" + bloco + texto.slice(fecho));
    return { ficheiro: path.basename(destino), novo: true };
}

function main() {
    let caminho = process.argv[2];
    if (!caminho) {
        console.error("Uso: node scripts/report_build.js <transcricao.json> [--diff] [--write [--para <ficheiro>]]");
        process.exit(2);
    }

    let t = JSON.parse(fs.readFileSync(path.resolve(caminho), "utf8"));
    let dados = loadLeagueData();

    let data = readDate(t.date);
    // A chave não se constrói a partir da data por extenso: o createFixtureKey()
    // do site escreve sempre o ano 2025, mesmo nos jogos de 2026, por isso um
    // "28 de Fevereiro de 2026" daria uma chave que não existe. Procura-se o jogo
    // pelo dia, mês e equipas, e usa-se a chave que ele já tem.
    let fixture = data && t.teams
        ? dados.leagues.flatMap((l) => l.fixtures || []).find((f) =>
            f.home === t.teams.home
            && f.away === t.teams.away
            && String(f.date || "").trim() === `${Number(data.dia)} ${data.mes}`)
        : null;

    let fixtureKey = fixture?.fixtureKey || null;

    let { erros, avisos } = validar(t, dados, fixture);

    console.log(`fixtureKey: ${fixtureKey || "(não consegui construir — verifica a data)"}`);
    erros.forEach((linha) => console.log(`  ERRO  ${linha}`));
    avisos.forEach((linha) => console.log(`  AVISO ${linha}`));
    if (!erros.length && !avisos.length) console.log("  sem reparos.");

    if (process.argv.includes("--diff")) diff(t, fixture, dados);

    if (erros.length) {
        console.error("\nNão escrevo o relatório com erros por resolver.");
        process.exit(1);
    }

    if (!process.argv.includes("--write")) {
        console.log(`\n--- relatório para colar no ${FICHEIRO_RELATORIOS} ---\n`);
        console.log(relatorioJs(t, fixtureKey) + ",");
        return;
    }

    let destino = process.argv[process.argv.indexOf("--para") + 1];
    let { ficheiro, novo } = escrever(t, fixtureKey, process.argv.includes("--para") ? destino : null);
    console.log(`\n${novo ? "acrescentado a" : "substituído em"} js/data/${ficheiro}`);
}

main();

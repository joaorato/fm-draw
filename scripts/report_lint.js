// Confere um relatório de jogo contra tudo o que os dados já sabem.
//
// Corre com:
//     node scripts/report_lint.js 2025-11-01-hajduk-split-hnk-gorica
//     node scripts/report_lint.js --all
//
// O validate_goals.js responde a uma pergunta só: leram-se tantos golos quantos
// o resultado diz. Isso não apanha um nome partido no sítio errado nem um número
// de camisola mal lido, porque nenhuma das duas coisas muda a contagem. É o que
// este script faz: compara o relatório novo com os relatórios que já existem e
// com a ficha de jogo do próprio relatório, e diz onde é que discordam.
//
// ERRO  = está errado, corrige antes de seguir.
// AVISO = pode estar certo, mas confirma no ecrã do FM antes de aceitar.

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadLeagueData } = require("./load-league-data");

// js/ui/match-report.js só declara funções, por isso corre fora do browser sem
// mais nada à volta. Carrega-se para poder comparar o que a ficha do site mostra
// com o que a lista de marcadores conta.
function loadReportRenderer(root) {
    try {
        let source = fs.readFileSync(path.join(root, "js/ui/match-report.js"), "utf8");
        let context = vm.createContext({ console, document: undefined, window: undefined });
        vm.runInContext(source, context, { filename: "js/ui/match-report.js" });
        if (typeof context.parseMatchReportEvent !== "function") return null;
        return context;
    } catch (erro) {
        console.error(`Não consegui carregar js/ui/match-report.js (${erro.message});`
            + " a comparação entre os dois leitores fica de fora.");
        return null;
    }
}

function stripDiacritics(text) {
    return String(text).normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function nameKey(name) {
    let tokens = stripDiacritics(String(name).trim()).split(/\s+/);
    if (tokens.length > 1 && /^\p{Lu}\.$/u.test(tokens[0])) tokens = tokens.slice(1);
    return tokens.join(" ").toLowerCase();
}

function surnameKey(name) {
    return nameKey(name).split(" ").pop() || "";
}

function lineupPlayers(formation) {
    if (!formation || typeof formation !== "object" || !Array.isArray(formation.players)) return null;
    return formation.players.flat();
}

// Um índice do que os outros relatórios já dizem: que números cada jogador usou,
// que nomes cada clube já teve, e que treinador aparece normalmente em cada clube.
function buildReference(league) {
    let numbers = new Map();   // "equipa|jogador" -> Map(numero -> vezes)
    let names = new Map();     // equipa -> Map(apelido -> Set(nomes completos))
    let coaches = new Map();   // equipa -> Map(treinador -> vezes)

    (league.fixtures || []).forEach((fixture) => {
        if (!fixture.report) return;

        ["home", "away"].forEach((side) => {
            let team = fixture[side];
            let coach = fixture.report.coaches?.[side];
            if (coach) {
                if (!coaches.has(team)) coaches.set(team, new Map());
                let tally = coaches.get(team);
                tally.set(coach, (tally.get(coach) || 0) + 1);
            }

            let players = lineupPlayers(fixture.report.formations?.[side]);
            if (!players) return;

            players.forEach((player) => {
                if (!player?.name) return;

                let key = `${team}|${nameKey(player.name)}`;
                if (!numbers.has(key)) numbers.set(key, new Map());
                if (player.number) {
                    let tally = numbers.get(key);
                    tally.set(player.number, (tally.get(player.number) || 0) + 1);
                }

                if (!names.has(team)) names.set(team, new Map());
                let bySurname = names.get(team);
                let surname = surnameKey(player.name);
                if (!bySurname.has(surname)) bySurname.set(surname, new Set());
                bySurname.get(surname).add(player.name);
            });
        });
    });

    (league.transfers || []).forEach((transfer) => {
        [transfer.to, transfer.from].forEach((team) => {
            if (!team || !transfer.player) return;
            if (!names.has(team)) names.set(team, new Map());
            let bySurname = names.get(team);
            let surname = surnameKey(transfer.player);
            if (!bySurname.has(surname)) bySurname.set(surname, new Set());
            bySurname.get(surname).add(transfer.player);
        });
    });

    return { numbers, names, coaches };
}

function usualCoach(reference, team, exclude) {
    let tally = reference.coaches.get(team);
    if (!tally) return null;

    let best = null;
    tally.forEach((count, coach) => {
        if (coach === exclude) count -= 1;
        if (count > 0 && (!best || count > best.count)) best = { coach, count };
    });
    return best;
}

function eventoLegivel(event) {
    if (event && typeof event === "object") {
        return `${event.minute}' ${event.scorer}${event.assist ? ` (assist. ${event.assist})` : ""}`;
    }
    return String(event);
}

function checkFixture(league, fixture, helpers, reference, renderer) {
    let { buildSquadIndex, readGoalEvent, splitScorerAndAssist, orderLegacyEventNames } = helpers;
    let squads = buildSquadIndex(league);
    let report = fixture.report;
    let erros = [];
    let avisos = [];

    let lidos = { home: 0, away: 0 };

    ["home", "away"].forEach((side) => {
        let team = fixture[side];
        let players = lineupPlayers(report.formations?.[side]);
        let formationName = report.formations?.[side]?.name || report.formations?.[side];

        // --- eventos ---
        let marcou = new Set((players || []).filter((p) => p.goal).map((p) => nameKey(p.name)));
        let titular = new Set((players || []).map((p) => nameKey(p.name)));
        let lidosComAssistencia = [];

        (report.events?.[side] || []).forEach((event) => {
            let parsed = readGoalEvent(event);
            if (parsed.sendOff) return;

            lidos[side]++;
            if (parsed.ownGoal) return;

            let { reading, readings } = splitScorerAndAssist(parsed.name, squads.get(team));
            if (!reading) {
                erros.push(readings.length
                    ? `evento ambíguo em ${team}: "${event}" pode ler-se `
                      + readings.map((r) => `[${r.scorer} | ${r.assist ?? "—"}]`).join(" ou ")
                    : `evento sem leitura em ${team}: "${event}"`);
                return;
            }

            // A ficha do site e a lista de marcadores leem o mesmo evento por
            // caminhos diferentes. Enquanto discordaram, uma delas mostrou o
            // jogador errado em todos os golos da equipa visitante.
            if (renderer && players) {
                let nomes = renderer.getFormationPlayerNames(report.formations[side]);
                let daFicha = renderer.parseMatchReportEvent(event, nomes);
                if (daFicha.type === "goal" && nameKey(daFicha.scorer) !== nameKey(reading.scorer)) {
                    erros.push(`os dois leitores discordam em ${team}: "${event}" — `
                        + `stats-core.js diz ${reading.scorer}, match-report.js diz ${daFicha.scorer}`);
                }
            }

            if (!reading.assist || !marcou.size) return;
            // O site lê o lado visitante espelhado nos eventos antigos: confere-se
            // contra o que o site mostra, não contra a ordem crua da string.
            let ordered = orderLegacyEventNames(reading, side);
            lidosComAssistencia.push({
                event,
                scorer: ordered.scorer,
                assist: ordered.assist,
                structured: !!parsed.structured
            });
        });

        // --- ordem do evento contra as bolas da ficha ---
        //
        // Só se reporta a contradição direta: a bola está no segundo nome e não
        // no primeiro. Isso não se pode ter escrito a partir do evento, por isso
        // é prova. O contrário — a bola no primeiro nome — não prova nada, porque
        // pode ter sido deduzida desse mesmo primeiro nome.
        lidosComAssistencia.forEach(({ event, scorer, assist, structured }) => {
            if (marcou.has(nameKey(scorer)) || !marcou.has(nameKey(assist))) return;

            // Num relatório novo as bolas foram lidas do campo e os eventos do
            // painel, por isso uma discordância é um erro de transcrição.
            if (structured) {
                erros.push(`${team}: "${eventoLegivel(event)}" dá o golo a ${scorer},`
                    + ` mas a bola no campo está em ${assist}`);
                return;
            }

            // Num relatório antigo não se sabe qual das duas leituras está errada.
            // As bolas de vários deles foram deduzidas do próprio evento em vez de
            // lidas do ecrã, por isso isto marca o jogo para voltar a passar pela
            // captura, não o evento para corrigir à mão.
            avisos.push(`${team}: "${event}" dá o golo a ${scorer} mas a bola no campo está`
                + ` em ${assist} — relatório no formato antigo, vale a pena voltar a passá-lo`
                + ` com o report_build.js`);
        });

        // Mais bolas do que golos quer dizer que uma delas está mal transcrita,
        // e é por essas que a comparação evento a evento se engana.
        let golosDoLado = side === "home" ? fixture.homeGoals : fixture.awayGoals;
        if (marcou.size && Number.isFinite(golosDoLado) && marcou.size > golosDoLado) {
            avisos.push(`${team} tem ${marcou.size} jogadores com bola na ficha para ${golosDoLado} golo(s)`
                + ` — uma das bolas está a mais`);
        }

        if (!players) return;

        // --- onze ---
        if (players.length !== 11) {
            avisos.push(`${team} tem ${players.length} jogadores na ficha, não 11`);
        }

        let porNumero = new Map();
        players.forEach((player) => {
            if (!player.number) return;
            if (!porNumero.has(player.number)) porNumero.set(player.number, []);
            porNumero.get(player.number).push(player.name);
        });
        porNumero.forEach((quem, numero) => {
            if (quem.length > 1) {
                avisos.push(`${team} tem o número ${numero} em dois jogadores: ${quem.join(" e ")}`
                    + ` — um deles pode ter um dígito tapado pela camisola`);
            }
        });

        // --- números e nomes contra o resto da época ---
        players.forEach((player) => {
            if (!player?.name) return;

            let key = `${fixture[side]}|${nameKey(player.name)}`;
            let tally = reference.numbers.get(key);
            if (player.number && tally) {
                let outros = [...tally.entries()].filter(([numero]) => numero !== player.number);
                let aqui = tally.get(player.number) || 0;
                if (outros.length && aqui <= 1) {
                    avisos.push(`${team}: ${player.name} está com o número ${player.number}, `
                        + `mas noutros relatórios usa ${outros.map(([n, c]) => `${n} (${c}x)`).join(", ")}`);
                }
            }

            let bySurname = reference.names.get(team);
            let conhecidos = bySurname?.get(surnameKey(player.name));
            if (!conhecidos || (conhecidos.size === 1 && conhecidos.has(player.name) && !tally)) {
                avisos.push(`${team}: ${player.name} não aparece em mais nenhum relatório nem transferência`
                    + ` — confirma a grafia`);
            }
        });

        // --- formação contra o desenho ---
        let defesas = report.formations?.[side]?.players?.slice(-2)[0]?.length;
        let primeiroNumero = Number(String(formationName || "").match(/\d/)?.[0]);
        if (Number.isFinite(primeiroNumero) && Number.isFinite(defesas) && primeiroNumero !== defesas) {
            avisos.push(`${team}: a formação diz "${formationName}" mas a linha defensiva tem ${defesas} jogadores`);
        }

        // --- treinador ---
        let entradaTabela = (league.tabela || []).find((linha) => linha.equipa === team);
        let coach = report.coaches?.[side];
        if (entradaTabela?.jogador && coach) {
            let habitual = usualCoach(reference, team, coach);
            if (habitual && habitual.coach !== coach) {
                avisos.push(`${team} é de um humano (${entradaTabela.jogador}) e está com o treinador `
                    + `"${coach}", quando o normal é "${habitual.coach}" (${habitual.count}x)`
                    + ` — o FM mostra o adjunto quando o treinador sai antes do fim`);
            }
        }
    });

    // --- golos contra o placar ---
    if (Number.isFinite(fixture.homeGoals) && Number.isFinite(fixture.awayGoals)) {
        if (lidos.home !== fixture.homeGoals || lidos.away !== fixture.awayGoals) {
            erros.push(`golos lidos ${lidos.home}-${lidos.away} contra o resultado `
                + `${fixture.homeGoals}-${fixture.awayGoals}`);
        }
    }

    return { erros, avisos };
}

function main() {
    let alvo = process.argv[2];
    if (!alvo) {
        console.error("Uso: node scripts/report_lint.js <fixtureKey> | --all");
        process.exit(2);
    }

    let dados = loadLeagueData();
    let helpers = dados;
    let renderer = loadReportRenderer(dados.root);
    let totalErros = 0;
    let totalAvisos = 0;
    let vistos = 0;

    dados.leagues.forEach((league) => {
        if (!league.golos) return;
        let reference = buildReference(league);

        let fixtures = (league.fixtures || []).filter((fixture) => {
            if (!fixture.report) return false;
            return alvo === "--all" || fixture.fixtureKey === alvo;
        });

        fixtures.forEach((fixture) => {
            vistos++;
            let { erros, avisos } = checkFixture(league, fixture, helpers, reference, renderer);
            totalErros += erros.length;
            totalAvisos += avisos.length;
            if (!erros.length && !avisos.length) {
                if (alvo !== "--all") console.log(`${fixture.fixtureKey}: sem reparos.`);
                return;
            }

            console.log(`\n${fixture.fixtureKey}  (J${fixture.round}  ${fixture.home} `
                + `${fixture.homeGoals}-${fixture.awayGoals} ${fixture.away})`);
            erros.forEach((linha) => console.log(`  ERRO  ${linha}`));
            avisos.forEach((linha) => console.log(`  AVISO ${linha}`));
        });
    });

    if (!vistos) {
        console.error(`Não encontrei nenhum relatório para "${alvo}".`);
        console.error("Um relatório cujo fixtureKey não bate certo com nenhum jogo é descartado em silêncio.");
        process.exit(1);
    }

    console.log(`\n${vistos} relatório(s) verificado(s): ${totalErros} erro(s), ${totalAvisos} aviso(s).`);
    if (totalErros) process.exit(1);
}

main();

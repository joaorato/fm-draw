// Estatísticas de jogadores a partir dos relatórios de jogo. Como em
// standings-core.js e scoring-core.js, nada aqui é específico de uma liga:
// recebe uma liga e devolve marcadores e assistências.
//
// O problema todo está na forma como um golo é escrito: "90+3' M. Rog L. Belcar"
// é minuto, marcador e assistente sem nada a separar os dois nomes. Não há
// separador para procurar, por isso a divisão é decidida contra o plantel da
// equipa. O que não tiver leitura única é reportado, nunca adivinhado.

const INITIAL_TOKEN = /^\p{Lu}\.$/u;
const EVENT_MINUTE = /^(\d+(?:\+\d+)?)'\s*/;
const EVENT_SEND_OFF = /\s*\bexpuls\w*\s*$/i;
const EVENT_PENALTY = /\s*\bpen\s*$/i;
// Os autogolos aparecem escritos das duas maneiras: "a.g." e "(AG)".
const EVENT_OWN_GOAL = /\s*(a\.\s*g\.|\(ag\))\s*$/i;

function stripDiacritics(text) {
    return String(text).normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// A inicial da frente não identifica ninguém: "A. Hoxha" e "Hoxha" são o mesmo jogador.
function playerNameTokens(name) {
    let tokens = String(name).trim().split(/\s+/);
    if (tokens.length > 1 && INITIAL_TOKEN.test(tokens[0])) tokens = tokens.slice(1);
    return tokens;
}

function normalizePlayerKey(name) {
    return stripDiacritics(playerNameTokens(name).join(" ")).toLowerCase();
}

function playerSurnameKey(name) {
    return stripDiacritics(playerNameTokens(name).pop() || "").toLowerCase();
}

// Um nome tem no máximo uma inicial, e só à frente. É isto que impede
// "J. Filipović J. Pršir" de passar por um nome só.
function isWellFormedPlayerName(text) {
    let tokens = String(text).trim().split(/\s+/);
    if (!tokens.length || tokens.length > 3) return false;

    let initials = tokens.filter((token) => INITIAL_TOKEN.test(token));
    if (initials.length > 1) return false;
    if (initials.length === 1 && !INITIAL_TOKEN.test(tokens[0])) return false;

    return tokens.length - initials.length >= 1;
}

// "X. Apelido" é inequívoco mesmo sem plantel nenhum.
function isAbbreviatedPlayerName(text) {
    let tokens = String(text).trim().split(/\s+/);
    return tokens.length === 2 && INITIAL_TOKEN.test(tokens[0]);
}

function buildSquadIndex(league) {
    let squads = new Map();

    let register = (equipa, name) => {
        if (!equipa || !name) return;
        if (!squads.has(equipa)) squads.set(equipa, { byName: new Map(), bySurname: new Map() });

        let squad = squads.get(equipa);
        let nameKey = normalizePlayerKey(name);
        let surnameKey = playerSurnameKey(name);

        if (!squad.byName.has(nameKey)) squad.byName.set(nameKey, name);
        if (!squad.bySurname.has(surnameKey)) squad.bySurname.set(surnameKey, new Set());
        squad.bySurname.get(surnameKey).add(nameKey);
    };

    (league.fixtures || []).forEach((fixture) => {
        let formations = fixture.report?.formations;
        // Só os relatórios antigos trazem plantel: nos outros formations é só o nome do desenho.
        if (!formations || typeof formations.home !== "object") return;

        ["home", "away"].forEach((side) => {
            (formations[side]?.players || []).forEach((row) => {
                row.forEach((player) => register(fixture[side], player.name));
            });
        });
    });

    // Quem saiu a meio da época marcou golos antes de sair, por isso uma
    // transferência regista o jogador nos dois clubes.
    (league.transfers || []).forEach((transfer) => {
        register(transfer.to, transfer.player);
        register(transfer.from, transfer.player);
    });

    return squads;
}

function isKnownSquadPlayer(squad, text) {
    if (!squad) return false;
    if (squad.byName.has(normalizePlayerKey(text))) return true;

    // Os planteis escrevem "Dantas" onde os eventos escrevem "Tiago Dantas".
    // O apelido chega, desde que só um jogador daquele plantel o use.
    let matches = squad.bySurname.get(playerSurnameKey(text));
    return !!matches && matches.size === 1;
}

// Um evento vem numa de duas formas. A antiga é uma string, "71' W. Sule
// J. Pršir", que é preciso partir contra o plantel e cuja ordem já esteve
// trocada em jogos inteiros. A nova é um objeto de `goalEvent()`, que diz por
// extenso quem marcou e quem assistiu: não há o que partir nem o que inferir.
// Relatórios novos usam a nova; a antiga fica a funcionar para os que já existem.
function readGoalEvent(text) {
    if (text && typeof text === "object") {
        let scorer = text.sendOff ? text.player : text.scorer;
        return {
            minute: text.minute ?? "",
            name: scorer || "",
            scorer: scorer || "",
            assist: text.assist ?? null,
            penalty: !!text.penalty,
            ownGoal: !!text.ownGoal,
            sendOff: !!text.sendOff,
            structured: true
        };
    }

    let raw = String(text).trim();
    let minuteMatch = raw.match(EVENT_MINUTE);
    let body = raw.replace(EVENT_MINUTE, "").trim();

    let sendOff = EVENT_SEND_OFF.test(body);
    let penalty = EVENT_PENALTY.test(body);
    let ownGoal = EVENT_OWN_GOAL.test(body);

    let name = body
        .replace(EVENT_SEND_OFF, "")
        .replace(EVENT_OWN_GOAL, "")
        .replace(EVENT_PENALTY, "")
        .trim();

    return { minute: minuteMatch ? minuteMatch[1] : "", name, penalty, ownGoal, sendOff };
}

// Cada leitura possível vale pontos: 2 por metade reconhecida no plantel,
// 1 por metade aceite só pela forma. Ganha a mais forte; empate não se desempata.
function readingsForGoalEvent(name, squad) {
    let admit = (text) => {
        if (!isWellFormedPlayerName(text)) return 0;
        if (isKnownSquadPlayer(squad, text)) return 2;
        return isAbbreviatedPlayerName(text) ? 1 : 0;
    };

    let whole = String(name).trim();
    let tokens = whole.split(/\s+/);
    let readings = [];

    let wholeStrength = admit(whole);
    if (wholeStrength) readings.push({ scorer: whole, assist: null, strength: wholeStrength });

    for (let index = 1; index < tokens.length; index++) {
        let scorer = tokens.slice(0, index).join(" ");
        let assist = tokens.slice(index).join(" ");
        let scorerStrength = admit(scorer);
        let assistStrength = admit(assist);
        if (scorerStrength && assistStrength) {
            readings.push({ scorer, assist, strength: scorerStrength + assistStrength });
        }
    }

    return readings;
}

function splitScorerAndAssist(name, squad) {
    let readings = readingsForGoalEvent(name, squad);
    let best = Math.max(...readings.map((reading) => reading.strength), 0);
    let winners = readings.filter((reading) => reading.strength === best);

    return { reading: winners.length === 1 ? winners[0] : null, readings: winners };
}

function buildGoalRecords(league, options = {}) {
    let isLeagueMatch = options.isLeagueMatch || (() => true);
    let squads = buildSquadIndex(league);
    let records = [];
    let unresolved = [];
    let ambiguous = [];

    (league.fixtures || []).forEach((fixture) => {
        if (!fixture.report || !isLeagueMatch(fixture)) return;

        ["home", "away"].forEach((side) => {
            (fixture.report.events?.[side] || []).forEach((event) => {
                let parsed = readGoalEvent(event);
                // Os cartões vermelhos vivem na mesma lista que os golos.
                if (parsed.sendOff) return;

                let team = fixture[side];

                if (parsed.ownGoal) {
                    // O autogolo é listado do lado que beneficia: conta para a
                    // equipa, mas não entra na lista de marcadores.
                    records.push({ fixture, team, scorer: parsed.name, assist: null, penalty: false, ownGoal: true });
                    return;
                }

                // O evento estruturado já traz os dois nomes separados.
                if (parsed.structured) {
                    records.push({
                        fixture,
                        team,
                        scorer: parsed.scorer,
                        assist: parsed.assist,
                        penalty: parsed.penalty,
                        ownGoal: false
                    });
                    return;
                }

                let { reading, readings } = splitScorerAndAssist(parsed.name, squads.get(team));
                if (!reading) {
                    (readings.length ? ambiguous : unresolved).push({ fixture, team, event, readings });
                    return;
                }

                records.push({
                    fixture,
                    team,
                    scorer: reading.scorer,
                    assist: reading.assist,
                    penalty: parsed.penalty,
                    ownGoal: false
                });
            });
        });
    });

    return { records, unresolved, ambiguous };
}

// A identidade de um jogador é a equipa mais o nome normalizado, e a equipa
// faz falta: sem ela "A. Jurić" do Rijeka e "S. Jurić" do Varaždin dão a mesma
// chave e somam golos um ao outro. Com ela continuam a juntar-se as variantes
// do mesmo jogador — "Hoxha" e "A. Hoxha", "Petrovič" e "Petrović" — porque
// essas partilham equipa.
function buildPlayerRankings(records) {
    let goals = new Map();
    let assists = new Map();

    let add = (table, name, team) => {
        let key = `${team}|${normalizePlayerKey(name)}`;
        if (!table.has(key)) table.set(key, { nome: name, equipa: team, total: 0, penaltis: 0 });

        let entry = table.get(key);
        entry.total++;
        // Fica a forma mais completa que aparecer: "A. Hoxha" em vez de "Hoxha".
        if (name.length > entry.nome.length) entry.nome = name;
        return entry;
    };

    records.forEach((record) => {
        if (!record.ownGoal) {
            let entry = add(goals, record.scorer, record.team);
            if (record.penalty) entry.penaltis++;
        }
        if (record.assist) add(assists, record.assist, record.team);
    });

    let finish = (table) => [...table.values()]
        .sort((a, b) => b.total - a.total || a.nome.localeCompare(b.nome, "pt"));

    return { marcadores: finish(goals), assistentes: finish(assists) };
}

// Confirma que se leram tantos golos quantos os que o resultado diz. Repare-se
// no que isto prova e no que não prova: garante o número certo de golos, não
// que um nome foi dividido no sítio certo.
function validateGoalRecords(league, records, options = {}) {
    let isLeagueMatch = options.isLeagueMatch || (() => true);
    let counts = new Map();

    records.forEach((record) => {
        if (!counts.has(record.fixture)) counts.set(record.fixture, { home: 0, away: 0 });
        let entry = counts.get(record.fixture);
        if (record.team === record.fixture.home) entry.home++;
        else if (record.team === record.fixture.away) entry.away++;
    });

    let mismatches = [];
    (league.fixtures || []).forEach((fixture) => {
        if (!fixture.report || !isLeagueMatch(fixture)) return;
        if (!Number.isFinite(fixture.homeGoals) || !Number.isFinite(fixture.awayGoals)) return;

        let entry = counts.get(fixture) || { home: 0, away: 0 };
        if (entry.home !== fixture.homeGoals || entry.away !== fixture.awayGoals) {
            mismatches.push({
                fixture,
                placar: `${fixture.homeGoals}-${fixture.awayGoals}`,
                lidos: `${entry.home}-${entry.away}`
            });
        }
    });

    return mismatches;
}

// A equipa da jornada não pode ler o campo `pos`: códigos como "CJA" servem
// dois papéis por completo diferentes (Construtor de Jogo Avançado ou Aberto)
// e não há como distinguir sem mais contexto. O sinal fiável é a ordem das
// linhas do onze, que é sempre do ataque para o guarda-redes: a última linha
// é sempre o guarda-redes, a primeira é sempre a linha mais avançada, e tudo
// o que fica entre as duas é meio-campo.
function getFormationTierRows(formation) {
    let rows = formation.players;
    let gk = rows[rows.length - 1] || [];
    let outfieldRows = rows.slice(0, -1);

    if (!outfieldRows.length) return { gk, fwd: [], mid: [], def: [] };
    if (outfieldRows.length === 1) return { gk, fwd: [], mid: outfieldRows[0], def: [] };

    let fwd = outfieldRows[0];
    let def = outfieldRows[outfieldRows.length - 1];
    let mid = outfieldRows.slice(1, -1).flat();
    return { gk, fwd, mid, def };
}

function parseMatchRating(rating) {
    let value = Number.parseFloat(String(rating ?? "").replace(",", "."));
    return Number.isFinite(value) ? value : null;
}

function collectRoundAppearances(league, round, isLeagueMatch) {
    let pools = { gk: [], def: [], mid: [], fwd: [] };

    (league.fixtures || []).forEach((fixture) => {
        if (!isLeagueMatch(fixture) || fixture.round !== round || !fixture.report) return;

        ["home", "away"].forEach((side) => {
            let formation = fixture.report.formations?.[side];
            if (!hasDetailedFormation(formation)) return;

            let team = fixture[side];
            let tiers = getFormationTierRows(formation);

            let pushRow = (row, tier) => {
                row.forEach((player) => {
                    let rating = parseMatchRating(player.rating);
                    if (rating === null || !player.name) return;
                    pools[tier].push({ name: player.name, number: player.number, rating, team, tier });
                });
            };

            if (tiers.gk.length === 1) pushRow(tiers.gk, "gk");
            pushRow(tiers.def, "def");
            pushRow(tiers.mid, "mid");
            pushRow(tiers.fwd, "fwd");
        });
    });

    return pools;
}

function sortAppearancesForDirection(pool, direction) {
    let sign = direction === "worst" ? 1 : -1;
    return [...pool].sort((a, b) =>
        sign * (a.rating - b.rating) ||
        a.team.localeCompare(b.team, "pt") ||
        a.name.localeCompare(b.name, "pt")
    );
}

function sumRatings(players) {
    return players.reduce((total, player) => total + player.rating, 0);
}

// Esquemas reais, não uma otimização livre sobre todas as somas possíveis:
// cada trinca é (defesas, médios, avançados), a somar sempre 10.
const LEAGUE_XI_SHAPES = [
    [5, 3, 2], [5, 4, 1], [4, 5, 1], [4, 4, 2], [4, 3, 3], [4, 2, 4], [3, 5, 2], [3, 4, 3]
];

function buildRoundXi(league, round, direction, options = {}) {
    let isLeagueMatch = options.isLeagueMatch || (() => true);
    let pools = collectRoundAppearances(league, round, isLeagueMatch);

    let gk = sortAppearancesForDirection(pools.gk, direction)[0] || null;
    if (!gk) return null;

    let best = null;
    LEAGUE_XI_SHAPES.forEach(([defCount, midCount, fwdCount]) => {
        if (pools.def.length < defCount || pools.mid.length < midCount || pools.fwd.length < fwdCount) return;

        let def = sortAppearancesForDirection(pools.def, direction).slice(0, defCount);
        let mid = sortAppearancesForDirection(pools.mid, direction).slice(0, midCount);
        let fwd = sortAppearancesForDirection(pools.fwd, direction).slice(0, fwdCount);
        let total = sumRatings(def) + sumRatings(mid) + sumRatings(fwd);

        let better = !best || (direction === "worst" ? total < best.total : total > best.total);
        if (better) best = { shape: [defCount, midCount, fwdCount], def, mid, fwd, total };
    });

    if (!best) return null;
    return { round, direction, gk, def: best.def, mid: best.mid, fwd: best.fwd, shape: best.shape };
}

// Uma jornada só entra no seletor se houver pelo menos um esquema viável -
// "best" e "worst" só mudam quem se escolhe dentro de cada linha, nunca se
// há gente suficiente para preencher alguma.
function getFeasibleLeagueXiRounds(league, options = {}) {
    let isLeagueMatch = options.isLeagueMatch || (() => true);
    let rounds = [...new Set((league.fixtures || []).filter(isLeagueMatch).map((fixture) => fixture.round))];
    return rounds.filter((round) => buildRoundXi(league, round, "best", options) !== null);
}

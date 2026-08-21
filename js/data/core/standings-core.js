// Cálculo de classificações a partir da lista de jogos.
// Nada aqui é específico de uma liga: as regras de desempate de cada país
// são declaradas em dados (ver croatiaRegras em croatia-table.js).

function getFixtureOutcome(fixture, teamName) {
    if (!fixture || (fixture.home !== teamName && fixture.away !== teamName)) return null;
    if (!Number.isFinite(fixture.homeGoals) || !Number.isFinite(fixture.awayGoals)) return null;

    let isHome = fixture.home === teamName;
    let goalsFor = isHome ? fixture.homeGoals : fixture.awayGoals;
    let goalsAgainst = isHome ? fixture.awayGoals : fixture.homeGoals;

    return {
        isHome,
        goalsFor,
        goalsAgainst,
        result: goalsFor > goalsAgainst ? "V" : goalsFor < goalsAgainst ? "D" : "E"
    };
}

function buildStandingsFromFixtures(fixtures, teamNames, options = {}) {
    let isLeagueMatch = options.isLeagueMatch || (() => true);
    let pontosVitoria = options.pontosVitoria ?? 3;
    let pontosEmpate = options.pontosEmpate ?? 1;

    let rows = new Map(teamNames.map((equipa) => [equipa, { equipa, j: 0, v: 0, e: 0, d: 0, gm: 0, gs: 0, dg: 0, pts: 0 }]));

    fixtures.forEach((fixture) => {
        if (!isLeagueMatch(fixture)) return;

        let home = rows.get(fixture.home);
        let away = rows.get(fixture.away);
        if (!home || !away) return;

        // Sem resultado (jogo por disputar ou adiado) não conta para nada.
        let outcome = getFixtureOutcome(fixture, fixture.home);
        if (!outcome) return;

        home.j++;
        away.j++;
        home.gm += outcome.goalsFor;
        home.gs += outcome.goalsAgainst;
        away.gm += outcome.goalsAgainst;
        away.gs += outcome.goalsFor;

        if (outcome.result === "V") {
            home.v++;
            away.d++;
            home.pts += pontosVitoria;
        } else if (outcome.result === "D") {
            away.v++;
            home.d++;
            away.pts += pontosVitoria;
        } else {
            home.e++;
            away.e++;
            home.pts += pontosEmpate;
            away.pts += pontosEmpate;
        }
    });

    return [...rows.values()].map((row) => ({ ...row, dg: row.gm - row.gs }));
}

// Vocabulário em que se escrevem as regras de desempate de cada liga.
// Os critérios "h2h" usam a mini-tabela do confronto directo, construída
// só quando alguma regra a pede.
const standingsCriteria = {
    dg: (a, b) => b.dg - a.dg,
    gm: (a, b) => b.gm - a.gm,
    gs: (a, b) => a.gs - b.gs,
    h2hPts: (a, b, ctx) => ctx.mini(b).pts - ctx.mini(a).pts,
    h2hDg: (a, b, ctx) => ctx.mini(b).dg - ctx.mini(a).dg,
    h2hGm: (a, b, ctx) => ctx.mini(b).gm - ctx.mini(a).gm,
    equipa: (a, b) => a.equipa.localeCompare(b.equipa)
};

const DESEMPATE_PADRAO = ["dg", "gm", "equipa"];

function isSeasonComplete(fixtures, isLeagueMatch = () => true) {
    let jogos = fixtures.filter((fixture) => isLeagueMatch(fixture) && fixture.status !== "postponed");
    return jogos.length > 0 && jogos.every((fixture) => Number.isFinite(fixture.homeGoals) && Number.isFinite(fixture.awayGoals));
}

function sortTiedGroup(group, chain, fixtures, isLeagueMatch, leagueName) {
    if (group.length < 2) return group;

    let names = group.map((row) => row.equipa);
    let miniTable = null;
    let ctx = {
        mini(row) {
            if (!miniTable) {
                miniTable = new Map(buildStandingsFromFixtures(fixtures, names, {
                    isLeagueMatch: (fixture) => isLeagueMatch(fixture) && names.includes(fixture.home) && names.includes(fixture.away)
                }).map((entry) => [entry.equipa, entry]));
            }
            return miniTable.get(row.equipa);
        }
    };

    return [...group].sort((a, b) => {
        for (let name of chain) {
            let criterion = standingsCriteria[name];
            if (!criterion) {
                console.warn(`[${leagueName}] critério de desempate desconhecido: "${name}" — ignorado.`);
                continue;
            }
            let diff = criterion(a, b, ctx);
            if (diff) return diff;
        }
        return 0;
    });
}

function sortStandings(rows, fixtures, regras = {}, options = {}) {
    let isLeagueMatch = options.isLeagueMatch || (() => true);
    let leagueName = options.leagueName || "Liga";
    let terminada = options.seasonComplete ?? isSeasonComplete(fixtures, isLeagueMatch);
    let chain = (terminada && regras.desempateFinal) || regras.desempate || DESEMPATE_PADRAO;

    let groups = new Map();
    rows.forEach((row) => {
        if (!groups.has(row.pts)) groups.set(row.pts, []);
        groups.get(row.pts).push(row);
    });

    return [...groups.keys()]
        .sort((a, b) => b - a)
        .flatMap((pts) => sortTiedGroup(groups.get(pts), chain, fixtures, isLeagueMatch, leagueName));
}

// A classificação lida do FM manda na ordem — é a única fonte que conhece o
// desempate real do jogo. As regras acima servem para confirmar, e qualquer
// divergência (pontos ou ordem) é reportada em vez de ser resolvida em silêncio.
function applyStandingsSnapshot(rows, snapshot, leagueName = "Liga") {
    if (!snapshot?.length) return rows.map((row, index) => ({ ...row, pos: index + 1 }));

    let porNome = new Map(rows.map((row) => [row.equipa, row]));
    let ordenadas = [];

    snapshot.forEach(([equipa, pontos]) => {
        let row = porNome.get(equipa);
        if (!row) {
            console.warn(`[${leagueName}] "${equipa}" aparece na classificação do FM mas não está na lista de equipas.`);
            return;
        }
        if (Number.isFinite(pontos) && row.pts !== pontos) {
            console.warn(`[${leagueName}] ${equipa}: o FM diz ${pontos} pontos, os jogos dão ${row.pts} — confere os resultados da última sessão.`);
        }
        ordenadas.push(row);
        porNome.delete(equipa);
    });

    porNome.forEach((row) => {
        console.warn(`[${leagueName}] ${row.equipa} não aparece na classificação do FM — fica no fim da tabela.`);
        ordenadas.push(row);
    });

    let calculada = rows.map((row) => row.equipa).join(" > ");
    let doFM = ordenadas.map((row) => row.equipa).join(" > ");
    if (calculada !== doFM) {
        console.warn(`[${leagueName}] a ordem do FM não coincide com a das regras de desempate:\n  FM        : ${doFM}\n  Calculado : ${calculada}`);
    }

    return ordenadas.map((row, index) => ({ ...row, pos: index + 1 }));
}

// A classificação como estava ao fim de cada jornada: a mesma conta de sempre,
// repetida com os jogos até cada corte. Continua sem saber nada de liga nenhuma —
// quem chama é que diz quais são os jogos da liga e quais as regras de desempate.
function buildStandingsHistory(fixtures, teamNames, options = {}) {
    let isLeagueMatch = options.isLeagueMatch || (() => true);
    let regras = options.regras || {};
    let leagueName = options.leagueName || "Liga";

    // Onde acaba cada jornada: o índice do seu último jogo já com resultado.
    // A lista está por ordem cronológica, por isso a ordem de inserção do Map já
    // é a ordem em que as jornadas foram jogadas — os jogos em atraso e os
    // antecipados incluídos, porque estão escritos onde foram mesmo jogados.
    let cortes = new Map();
    fixtures.forEach((fixture, index) => {
        if (!isLeagueMatch(fixture)) return;
        if (!getFixtureOutcome(fixture, fixture.home)) return;
        cortes.set(fixture.round, index);
    });

    // Um prefixo tem sempre todos os jogos disputados, por isso isSeasonComplete()
    // diria que sim a qualquer jornada e trocava para o desempate final logo à
    // terceira. A época só está terminada olhando para a lista inteira, e mesmo
    // aí isso só vale no último frame.
    let terminada = isSeasonComplete(fixtures, isLeagueMatch);
    let entradas = [...cortes.entries()];

    return entradas.map(([round, index], frameIndex) => {
        let ultimo = frameIndex === entradas.length - 1;
        let jogados = fixtures.slice(0, index + 1);
        let rows = sortStandings(
            buildStandingsFromFixtures(jogados, teamNames, { isLeagueMatch }),
            jogados,
            regras,
            { isLeagueMatch, leagueName, seasonComplete: ultimo && terminada }
        );

        return {
            round,
            label: fixtures[index].roundLabel || `Jornada ${round}`,
            date: fixtures[index].date,
            // A tabela do FM é a classificação final e mais nada: aplicada a meio
            // da época arrastava a ordem do fim para a jornada 3.
            rows: ultimo
                ? applyStandingsSnapshot(rows, options.snapshot, leagueName)
                : rows.map((row, posIndex) => ({ ...row, pos: posIndex + 1 }))
        };
    });
}

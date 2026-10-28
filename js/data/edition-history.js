const emgEditions = [
    { id: "all", nome: "Histórico EMG", estado: "Todas as edições" },
    { id: "fm26", nome: "FM26", estado: "Edição concluída" },
    { id: "fm27", nome: "FM27", estado: "À espera do primeiro sorteio" }
];

function getEditionLeagues(editionId) {
    return leagues.filter((league) => editionId === "all" || league.editionId === editionId);
}

function getEditionFixtures(editionId, leagueId = "all", humanOnly = false) {
    return getEditionLeagues(editionId).filter((league) => leagueId === "all" || league.id === leagueId)
        .flatMap((league) => league.fixtures.flatMap((fixture, index) => {
            if (!getFixtureOutcome(fixture, fixture.home)) return [];
            const homeCoach = league.tabela.find((team) => team.equipa === fixture.home)?.jogador || null;
            const awayCoach = league.tabela.find((team) => team.equipa === fixture.away)?.jogador || null;
            if (humanOnly && !homeCoach && !awayCoach) return [];
            return [{ league, fixture, index, homeCoach, awayCoach }];
        }));
}

function buildCoachHeadToHead(editionId, first, second, leagueId = "all") {
    const matches = getEditionFixtures(editionId, leagueId).filter((match) =>
        (match.homeCoach === first && match.awayCoach === second)
        || (match.homeCoach === second && match.awayCoach === first));
    const totals = { matches: matches.length, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 };
    for (const match of matches) {
        const team = match.homeCoach === first ? match.fixture.home : match.fixture.away;
        const outcome = getFixtureOutcome(match.fixture, team);
        totals.goalsFor += outcome.goalsFor;
        totals.goalsAgainst += outcome.goalsAgainst;
        totals[outcome.result === "V" ? "wins" : outcome.result === "D" ? "losses" : "draws"]++;
    }
    const biggestWin = (coach) => {
        const wins = matches.filter((match) => {
            const team = match.homeCoach === coach ? match.fixture.home : match.fixture.away;
            return getFixtureOutcome(match.fixture, team).result === "V";
        });
        const margin = Math.max(0, ...wins.map(({ fixture }) => Math.abs(fixture.homeGoals - fixture.awayGoals)));
        return wins.filter(({ fixture }) => Math.abs(fixture.homeGoals - fixture.awayGoals) === margin);
    };
    return { ...totals, records: matches, firstWins: biggestWin(first), secondWins: biggestWin(second) };
}

function getHistoryMatchLeaders(matches, metric) {
    if (!matches.length) return [];
    const maximum = Math.max(...matches.map(metric));
    return matches.filter((match) => metric(match) === maximum);
}

function getHistoryTitleDecision(league) {
    if (!league.evolucao || league.status !== "completed") return null;
    const champion = league.tabela.find((team) => team.pos === 1);
    if (!champion) return null;
    const fixtures = league.fixtures.filter(league.evolucao.isLeagueMatch);
    const teams = league.tabela.map((team) => team.equipa);
    const scheduled = new Map(teams.map((team) => [team, fixtures.filter((fixture) => fixture.home === team || fixture.away === team)
        .filter((fixture) => fixture.status !== "postponed").length]));
    const played = [];
    for (const fixture of fixtures) {
        if (!getFixtureOutcome(fixture, fixture.home)) continue;
        played.push(fixture);
        const rows = buildStandingsFromFixtures(played, teams);
        const leader = rows.find((row) => row.equipa === champion.equipa);
        if (rows.every((row) => row === leader || leader.pts > row.pts + (scheduled.get(row.equipa) - row.j) * 3)) {
            return { league, fixture, champion };
        }
    }
    return null;
}

function buildEditionRetrospective(editionId) {
    const competitions = getEditionLeagues(editionId);
    const matches = getEditionFixtures(editionId);
    const humanMatches = matches.filter((match) => match.homeCoach || match.awayCoach);
    const surprises = competitions.filter((league) => !league.torneio).flatMap((league) => league.tabela
        .filter((team) => team.jogador && Number.isFinite(team.prevista) && Number.isFinite(team.pos))
        .map((team) => ({ league, team, gain: team.prevista - team.pos })));
    const bestGain = Math.max(0, ...surprises.map((entry) => entry.gain));
    const runs = [];
    const teamStats = [];
    for (const league of competitions) {
        for (const team of league.tabela.filter((entry) => entry.jogador)) {
            // A tabela final escocesa é completa; o calendário não serve para sequências.
            if (league.id === "scotland") {
                teamStats.push({ league, team, games: team.j, gf: team.gm, ga: team.gs });
                continue;
            }
            const fixtures = league.fixtures.filter((fixture) => league.torneio || league.golos?.isLeagueMatch(fixture));
            const played = fixtures.flatMap((fixture) => {
                const outcome = getFixtureOutcome(fixture, team.equipa);
                return outcome ? [{ fixture, ...outcome }] : [];
            });
            if (!played.length) continue;
            teamStats.push({ league, team, games: played.length, gf: played.reduce((sum, match) => sum + match.goalsFor, 0), ga: played.reduce((sum, match) => sum + match.goalsAgainst, 0) });
            for (const result of ["V", "D"]) {
                let current = [];
                for (const match of played) {
                    current = match.result === result ? [...current, match] : [];
                    if (current.length) runs.push({ league, team, result, length: current.length, start: current[0].fixture, end: match.fixture });
                }
            }
        }
    }
    const longestRuns = (result) => {
        const eligible = runs.filter((run) => run.result === result);
        const maximum = Math.max(0, ...eligible.map((run) => run.length));
        return eligible.filter((run) => run.length === maximum);
    };
    return {
        competitions, matches, humanMatches,
        goals: matches.reduce((sum, { fixture }) => sum + fixture.homeGoals + fixture.awayGoals, 0),
        reports: matches.filter(({ fixture }) => fixture.report).length,
        biggestWins: getHistoryMatchLeaders(humanMatches, ({ fixture }) => Math.abs(fixture.homeGoals - fixture.awayGoals)),
        chaotic: getHistoryMatchLeaders(humanMatches, ({ fixture }) => fixture.homeGoals + fixture.awayGoals),
        surprises: surprises.filter((entry) => bestGain > 0 && entry.gain === bestGain),
        winningRuns: longestRuns("V"), losingRuns: longestRuns("D"), teamStats,
        titleDecisions: competitions.map(getHistoryTitleDecision).filter(Boolean)
    };
}

const croatiaMatchReports = [...croatiaRoundOneReports, ...croatiaRoundTwoReports, ...croatiaRoundThreeReports, ...croatiaRoundFourReports, ...croatiaRoundFiveReports, ...croatiaRoundSixReports, ...croatiaRoundSevenReports, ...croatiaRoundEightReports, ...croatiaRoundNineReports, ...croatiaRoundTenReports, ...croatiaRoundElevenReports, ...croatiaCupFirstRoundReports, ...croatiaRecentReports];
const croatiaMatchReportsByFixtureKey = new Map(croatiaMatchReports.map((report) => [report.fixtureKey, report]));

assignLeagueFixtureRounds(croatiaFixtures, { teamNames: croatiaSeedTable.map((entry) => entry.equipa) });

croatiaFixtures.forEach((fixture) => {
    fixture.report = croatiaMatchReportsByFixtureKey.get(fixture.fixtureKey) || null;
    if (fixture.report) {
        fixture.report.id = fixture.report.fixtureKey;
        fixture.report.fixture = fixture;
    }
});

function getCroatiaFixtureDateLabel(fixture) {
    let day = String(fixture?.date || "").match(/\d+/)?.[0] || "";
    let month = fixture?.month || "";
    return day && month ? `${day} de ${month}` : fixture?.date || "";
}

function getCroatiaFixtureTeamLogo(teamName) {
    return getCroatiaSeedEntry(teamName)?.logo || "";
}

function getTeamFixtureFormDetail(fixture, teamName) {
    let hasResult = Number.isFinite(fixture.homeGoals) && Number.isFinite(fixture.awayGoals);
    let isLeagueMatch = String(fixture.competition || "").startsWith("HNL");
    if (!isLeagueMatch || !hasResult || (fixture.home !== teamName && fixture.away !== teamName)) return null;

    let isHome = fixture.home === teamName;
    let goalsFor = isHome ? fixture.homeGoals : fixture.awayGoals;
    let goalsAgainst = isHome ? fixture.awayGoals : fixture.homeGoals;
    let result = goalsFor > goalsAgainst ? "V" : goalsFor < goalsAgainst ? "D" : "E";

    return {
        result,
        date: getCroatiaFixtureDateLabel(fixture),
        competition: fixture.competition,
        home: fixture.home,
        away: fixture.away,
        homeLogo: getCroatiaFixtureTeamLogo(fixture.home),
        awayLogo: getCroatiaFixtureTeamLogo(fixture.away),
        score: getFixtureScoreLabel(fixture)
    };
}

function getTeamFormDetailsFromFixtures(fixtures, teamName, limit = 5) {
    return fixtures
        .map((fixture) => getTeamFixtureFormDetail(fixture, teamName))
        .filter(Boolean)
        .slice(-limit);
}

function getTeamResultGroupsFromFixtures(fixtures, teamName) {
    return fixtures
        .map((fixture) => getTeamFixtureFormDetail(fixture, teamName))
        .filter(Boolean)
        .reduce((groups, detail) => {
            groups[detail.result].push(detail);
            return groups;
        }, { V: [], E: [], D: [] });
}


const croatiaMatchReports = [...croatiaRoundOneReports, ...croatiaRoundTwoReports, ...croatiaRoundThreeReports, ...croatiaRoundFourReports, ...croatiaRoundFiveReports, ...croatiaRoundSixReports, ...croatiaRoundSevenReports, ...croatiaRoundEightReports, ...croatiaRoundNineReports, ...croatiaRoundTenReports, ...croatiaRoundElevenReports, ...croatiaRoundTwelveReports, ...croatiaCupFirstRoundReports, ...croatiaRecentReports];
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

function isCroatiaLeagueMatch(fixture) {
    return String(fixture.competition || "").startsWith("HNL");
}

function getTeamFixtureFormDetail(fixture, teamName) {
    if (!isCroatiaLeagueMatch(fixture)) return null;

    // Mesma definição de "o que este jogo valeu para esta equipa" que a
    // classificação usa, para que a tabela e os pontinhos de forma nunca divirjam.
    let outcome = getFixtureOutcome(fixture, teamName);
    if (!outcome) return null;

    return {
        result: outcome.result,
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


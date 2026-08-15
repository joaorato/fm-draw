const fixtureMonthNumbers = {
    Jan: "01",
    Fev: "02",
    Mar: "03",
    Abr: "04",
    Mai: "05",
    Jun: "06",
    Jul: "07",
    Ago: "08",
    Set: "09",
    Out: "10",
    Nov: "11",
    Dez: "12"
};

function slugifyFixturePart(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[’']/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function createFixtureKey(date, home, away, year = "2025") {
    let [dayRaw, monthRaw] = String(date || "").trim().split(/\s+/);
    let day = String(Number.parseInt(dayRaw, 10) || 0).padStart(2, "0");
    let month = fixtureMonthNumbers[monthRaw] || "00";
    return `${year}-${month}-${day}-${slugifyFixturePart(home)}-${slugifyFixturePart(away)}`;
}

function createLeagueMatch(month, competition, date, home, score, away, options = {}) {
    let fixtureKey = createFixtureKey(date, home, away);
    if (score.trim() === "-") {
        return { fixtureKey, month, competition, date, home, away, homeGoals: null, awayGoals: null, ...options };
    }

    let [homeGoals, awayGoals] = score.split("-").map((value) => Number(value.trim()));
    return { fixtureKey, month, competition, date, home, away, homeGoals, awayGoals, ...options };
}

function getFixtureScoreLabel(fixture) {
    if (fixture.displayScore) return fixture.displayScore;
    let hasResult = Number.isFinite(fixture.homeGoals) && Number.isFinite(fixture.awayGoals);
    if (hasResult) return `${fixture.homeGoals}-${fixture.awayGoals}`;
    return fixture.status === "postponed" ? "Adiado" : "-";
}

function assignLeagueFixtureRounds(fixtures, options = {}) {
    let teamsPerFixture = 2;
    let teamCount = options.teamCount || options.teamNames?.length || new Set(fixtures.flatMap((fixture) => [fixture.home, fixture.away])).size;
    let defaultRoundSize = Math.max(1, Math.ceil(teamCount / teamsPerFixture));
    let matchesPerRound = options.matchesPerRound || defaultRoundSize;
    let roundCounter = options.startRound || 1;
    let roundMatchCounter = 0;

    fixtures.forEach((fixture) => {
        if (fixture.roundKey) {
            fixture.round = fixture.roundKey;
            if (fixture.advanceRoundCounter) {
                let explicitRound = Number.parseInt(fixture.roundKey, 10);
                if (Number.isFinite(explicitRound)) {
                    roundCounter = Math.max(roundCounter, explicitRound + 1);
                    roundMatchCounter = 0;
                }
            }
            return;
        }

        fixture.round = roundCounter;
        roundMatchCounter++;
        if (roundMatchCounter >= matchesPerRound) {
            roundCounter++;
            roundMatchCounter = 0;
        }
    });
}


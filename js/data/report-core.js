function reportPlayer(number, name, rating, pos, goal = false) {
    return goal ? { number, name, rating, pos, goal: true } : { number, name, rating, pos };
}

function reportFormation(name, players) {
    return { name, players };
}

function reportStats(rows) {
    return rows.map(([label, home, away]) => ({ label, home, away }));
}

function compactReport(fixtureKey, date, stadium, weather, playerOfMatch, rating, coaches, formations, events, stats) {
    return {
        fixtureKey,
        date,
        stadium,
        weather,
        playerOfMatch,
        rating,
        coaches,
        formations,
        events,
        stats: reportStats(stats)
    };
}


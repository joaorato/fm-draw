function reportPlayer(number, name, rating, pos, goal = false) {
    return goal ? { number, name, rating, pos, goal: true } : { number, name, rating, pos };
}

// Um golo escrito por extenso, em vez da string "71' W. Sule J. Pršir".
//
// A string não tem separador entre marcador e assistente, por isso quem a lê tem
// de adivinhar onde parte o nome, e não diz de todo qual dos dois marcou: isso
// vinha da ordem, e a ordem estava trocada em todos os jogos em que a coluna da
// direita do FM foi copiada como aparece no ecrã. Aqui os dois campos têm nome,
// por isso não há nada para inferir nem nada para trocar.
function goalEvent(minute, scorer, options = {}) {
    return {
        minute: String(minute),
        scorer,
        assist: options.assist ?? null,
        penalty: !!options.penalty,
        ownGoal: !!options.ownGoal
    };
}

function sendOffEvent(minute, player) {
    return { minute: String(minute), player, sendOff: true };
}

function reportFormation(name, players) {
    return { name, players };
}

function hasDetailedFormation(formation) {
    return Boolean(formation && typeof formation !== "string" && formation.players?.some((row) => row.some((player) => player?.name || player?.number || player?.rating)));
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


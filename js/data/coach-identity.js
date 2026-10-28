// Apenas jogos publicados: não misturar a carreira histórica com calendários parciais.
function buildCoachIdentityRecords(editionId) {
    const fixtures = getEditionFixtures(editionId);
    return coachProfiles.map((coach) => {
        const records = fixtures.filter((record) => record.homeCoach === coach.nome || record.awayCoach === coach.nome);
        const totals = { matches: records.length, wins: 0, draws: 0, cleanSheets: 0, goalsFor: 0, goalsAgainst: 0 };
        for (const record of records) {
            const team = record.homeCoach === coach.nome ? record.fixture.home : record.fixture.away;
            const outcome = getFixtureOutcome(record.fixture, team);
            totals.wins += Number(outcome.result === "V");
            totals.draws += Number(outcome.result === "E");
            totals.cleanSheets += Number(outcome.goalsAgainst === 0);
            totals.goalsFor += outcome.goalsFor;
            totals.goalsAgainst += outcome.goalsAgainst;
        }
        return { coach, ...totals };
    });
}

function buildCoachIdentity(coach, editionId) {
    const records = buildCoachIdentityRecords(editionId);
    const totals = records.find((entry) => entry.coach.id === coach.id);
    const peers = records.filter((entry) => entry.matches >= 20);
    const traits = [
        { key: "wins", title: "Hábito de ganhar", description: "O apito final costuma dar-lhe razão." },
        { key: "cleanSheets", title: "Porta fechada", description: "Para marcar aqui, é preciso insistir." },
        { key: "goalsFor", title: "Ataque com assinatura", description: "O melhor argumento aparece no marcador." },
        { key: "draws", title: "Pacto de não agressão", description: "Dividir os pontos também deixa uma marca." },
        { key: "spectacle", title: "Espetáculo garantido", description: "Há golos nas duas balizas. Sossego, nem por isso." }
    ];
    const rate = (entry, key) => (key === "spectacle" ? entry.goalsFor + entry.goalsAgainst : entry[key]) / (entry.matches || 1);
    let fame = null;
    if (totals.matches >= 20) {
        // Comparar desvios dentro da mesma métrica, sem misturar golos e percentagens.
        const candidates = traits.filter((trait) => rate(totals, trait.key) > 0
            && (trait.key !== "spectacle" || totals.goalsAgainst / totals.matches >= 1.5));
        fame = candidates.map((trait) => {
            const values = peers.map((entry) => rate(entry, trait.key));
            const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
            const deviation = Math.sqrt(values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length);
            return { ...trait, score: deviation ? (rate(totals, trait.key) - mean) / deviation : 0 };
        }).sort((a, b) => b.score - a.score)[0];
    }
    const rivals = coachProfiles.filter((entry) => entry.id !== coach.id).map((rival) => ({
        coach: rival, ...buildCoachHeadToHead(editionId, coach.nome, rival.nome)
    })).filter((entry) => entry.matches >= 5);
    const balance = (entry) => (entry.wins - entry.losses) / entry.matches;
    const strongest = rivals.filter((entry) => entry.wins > entry.losses).sort((a, b) => balance(b) - balance(a) || b.matches - a.matches || a.coach.nome.localeCompare(b.coach.nome, "pt"))[0] || null;
    const weakest = rivals.filter((entry) => entry.losses > entry.wins).sort((a, b) => balance(a) - balance(b) || b.matches - a.matches || a.coach.nome.localeCompare(b.coach.nome, "pt"))[0] || null;
    return { totals, fame, strongest, weakest };
}

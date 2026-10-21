// coachStats conserva a base histórica anterior à Croácia. Não se recalcula
// a Escócia: os jogos publicados dessa época estão incompletos.
// Carregar depois de leagues.js, que já contém as equipas e os resultados.
function buildCoachCareerStats(coach) {
    const base = coachStats[coach.id];
    if (!base) return null;
    const stats = { ...base };
    const resultLabels = { V: "Jogos Vencidos", E: "Jogos Empatados", D: "Jogos Perdidos" };

    for (const league of leagues.filter((entry) => entry.id === "croatia" || entry.id === "mundial")) {
        const team = league.tabela.find((entry) => entry.jogador === coach.nome);
        if (!team) continue;

        for (const fixture of league.fixtures) {
            // getFixtureOutcome ignora jogos sem resultado e mantém os empates
            // decididos nos penáltis como empates, sem somar os golos do desempate.
            const outcome = getFixtureOutcome(fixture, team.equipa);
            if (!outcome) continue;
            stats["Jogos Disputados"]++;
            stats[resultLabels[outcome.result]]++;
            stats["Golos Marcados"] += outcome.goalsFor;
            stats["Golos Sofridos"] += outcome.goalsAgainst;
        }

        if (league.status !== "completed") continue;
        stats["Taças"] += (league.tacas || []).filter((trophy) => trophy.jogador === coach.nome
            && (trophy.tipo.startsWith("Vencedor") || trophy.tipo === "Campeão do Mundo")).length;
        if (!league.torneio) {
            if (team.pos === 1) stats["Vit. na Liga"]++;
            if (team.zone === "relegated") stats["Despromoções"]++;
        }
    }

    stats["Diferença de Golos"] = stats["Golos Marcados"] - stats["Golos Sofridos"];
    stats["% de Vitórias"] = `${stats["Jogos Disputados"] ? Math.floor(stats["Jogos Vencidos"] / stats["Jogos Disputados"] * 100) : 0}%`;
    return stats;
}

const coachCareerStats = Object.fromEntries(coachProfiles.map((coach) => [coach.id, buildCoachCareerStats(coach)]));

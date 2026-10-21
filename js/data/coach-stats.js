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

// A Escócia conserva os destaques de época escritos em coachProfileExtras.
// Croácia e Mundial usam apenas os golos e as notas dos relatórios publicados.
function buildCoachPlayerHighlights(league) {
    const squads = buildSquadIndex(league);
    const goals = buildGoalRecords(league);
    const rankings = buildPlayerRankings(goals.records);
    const highlights = {};

    for (const team of league.tabela.filter((entry) => entry.jogador)) {
        const ratings = new Map();
        let ratedMatches = 0;
        let playedMatches = 0;
        let reportedMatches = 0;
        for (const fixture of league.fixtures) {
            if (!getFixtureOutcome(fixture, team.equipa)) continue;
            playedMatches++;
            if (!fixture.report) continue;
            reportedMatches++;
            const side = fixture.home === team.equipa ? "home" : "away";
            const players = (fixture.report.formations?.[side]?.players || []).flat();
            const rated = players.filter((player) => player.name && parseMatchRating(player.rating) > 0);
            if (!rated.length) continue;
            ratedMatches++;
            const seen = new Set();
            for (const player of rated) {
                const squad = squads.get(team.equipa);
                const surnameMatches = squad?.bySurname.get(playerSurnameKey(player.name));
                const key = surnameMatches?.size === 1
                    ? [...surnameMatches][0] : normalizePlayerKey(player.name);
                if (seen.has(key)) continue;
                seen.add(key);
                if (!ratings.has(key)) ratings.set(key, { name: player.name, sum: 0, matches: 0 });
                const entry = ratings.get(key);
                if (player.name.length > entry.name.length) entry.name = player.name;
                entry.sum += parseMatchRating(player.rating);
                entry.matches++;
            }
        }

        const minimum = Math.ceil(ratedMatches / 2);
        const best = [...ratings.values()]
            .filter((entry) => entry.matches >= minimum)
            .map((entry) => ({ ...entry, average: Math.round(entry.sum / entry.matches * 100) / 100 }))
            .sort((a, b) => b.average - a.average || a.name.localeCompare(b.name, "pt"));
        const scorers = rankings.marcadores.filter((entry) => entry.equipa === team.equipa);
        const context = `${league.id === "croatia" ? "Croácia · Liga e Taça" : league.nome} · ${team.equipa}`;
        const ratingNote = `Média nos onzes publicados · mínimo ${minimum} jogos com nota · ${ratedMatches}/${playedMatches} jogos com notas`;
        const goalNote = `Golos nos relatórios publicados · ${reportedMatches}/${playedMatches} jogos com relatório`;
        highlights[team.jogador] = {
            rating: {
                context,
                value: best.filter((entry) => entry.average === best[0].average)
                    .map((entry) => `${entry.name} - ${entry.average.toFixed(2).replace(".", ",")} | ${entry.matches}J`).join("\n") || "Sem notas suficientes",
                meta: ratingNote
            },
            scorer: {
                context,
                value: scorers.filter((entry) => entry.total === scorers[0].total)
                    .map((entry) => `${entry.nome} - ${entry.total}G`).join("\n") || "Sem golos registados",
                meta: goalNote
            }
        };
    }
    return highlights;
}

const coachPlayerHighlights = Object.fromEntries(leagues
    .filter((league) => league.id === "croatia" || league.id === "mundial")
    .map((league) => [league.id, buildCoachPlayerHighlights(league)]));

function getCoachLegacy(coach) {
    const historical = coachProfileExtras[coach.id]?.legacy;
    return ["rating", "scorer"].map((key) => {
        const performances = [];
        if (historical?.[key]) {
            const team = leagues.find((league) => league.id === "scotland")?.tabela.find((entry) => entry.jogador === coach.nome);
            performances.push({ ...historical[key], context: `Liga Escocesa${team ? ` · ${team.equipa}` : ""}` });
        }
        for (const leagueId of ["croatia", "mundial"]) {
            const entry = coachPlayerHighlights[leagueId]?.[coach.nome]?.[key];
            if (entry) performances.push(entry);
        }
        return { label: key === "rating" ? "Melhor Jogador" : "Melhor Marcador", performances };
    });
}

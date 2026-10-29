// coachStats conserva a base histórica anterior à Croácia. Não se recalcula
// a Escócia: os jogos publicados dessa época estão incompletos.
// Carregar depois de leagues.js, que já contém as equipas e os resultados.
// Nome curto de cada competição nos seletores do perfil, igual ao do palmarés.
const coachCompetitionNames = { scotland: "Escócia", croatia: "Croácia", mundial: "Mundial" };

function getCoachCompetitionContext(leagueId, coachName) {
    const league = leagues.find((entry) => entry.id === leagueId);
    const team = league?.tabela.find((entry) => entry.jogador === coachName);
    return `${coachCompetitionNames[leagueId] || league?.nome || leagueId}${team ? ` · ${team.equipa}` : ""}`;
}

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
        const context = getCoachCompetitionContext(league.id, team.jogador);
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
        if (historical?.[key]) performances.push({ ...historical[key], context: getCoachCompetitionContext("scotland", coach.nome) });
        for (const leagueId of ["croatia", "mundial"]) {
            const entry = coachPlayerHighlights[leagueId]?.[coach.nome]?.[key];
            if (entry) performances.push(entry);
        }
        return { label: key === "rating" ? "Melhor Jogador" : "Melhor Marcador", performances };
    });
}

// Só resultados publicados; os desempates por penáltis não somam golos.
function buildCoachNarrative(league, coach) {
    const team = league.tabela.find((entry) => entry.jogador === coach.nome);
    const labels = ["Maior Vítima", "Maior Vitória", "Pior Derrota", "Némesis", "Jogo Mais Caótico"];
    const matches = team ? league.fixtures.flatMap((fixture) => {
        const outcome = getFixtureOutcome(fixture, team.equipa);
        return outcome ? [{ ...outcome, fixture, opponent: outcome.isHome ? fixture.away : fixture.home }] : [];
    }) : [];
    if (!matches.length) {
        return labels.map((label) => ({ label, value: team ? "Sem jogos disputados" : "Sem participação", meta: "" }));
    }

    const opponents = new Map();
    for (const match of matches) {
        if (!opponents.has(match.opponent)) opponents.set(match.opponent, { name: match.opponent, gf: 0, ga: 0, V: 0, E: 0, D: 0 });
        const entry = opponents.get(match.opponent);
        entry.gf += match.goalsFor;
        entry.ga += match.goalsAgainst;
        entry[match.result]++;
    }
    const aggregates = [...opponents.values()];
    const mostGoals = Math.max(...aggregates.map((entry) => entry.gf));
    const victims = aggregates.filter((entry) => entry.gf === mostGoals && entry.gf > 0);
    const worstBalance = Math.min(...aggregates.map((entry) => entry.gf - entry.ga));
    const nemeses = aggregates.filter((entry) => entry.gf - entry.ga === worstBalance && worstBalance < 0);
    const matchHighlight = (label, candidates, metric, description, tieBreak = () => 0, preferHome = false) => {
        if (!candidates.length) return { label, value: label === "Maior Vitória" ? "Sem vitórias" : "Sem derrotas", meta: "Nos resultados publicados" };
        const maximum = Math.max(...candidates.map(metric));
        let tied = candidates.filter((match) => metric(match) === maximum);
        if (preferHome && tied.some((match) => match.isHome)) tied = tied.filter((match) => match.isHome);
        const bestTieBreak = Math.max(...tied.map(tieBreak));
        const selected = tied.filter((match) => tieBreak(match) === bestTieBreak);
        return {
            label,
            value: selected.map((match) => `${match.goalsFor}-${match.goalsAgainst} vs ${match.opponent}`).join("\n"),
            meta: `${description}\n${selected.map((match) => `${match.fixture.date} · ${match.fixture.competition}${match.fixture.displayScore?.includes("p ") ? " · decidido nos penáltis" : ""}`).join("\n")}`
        };
    };
    return [
        { label: labels[0], value: victims.map((entry) => entry.name).join("\n") || "Sem golos marcados", meta: victims.length ? `${mostGoals} golos marcados · maior total por adversário` : "Nos resultados publicados" },
        matchHighlight(labels[1], matches.filter((match) => match.result === "V"), (match) => match.goalsFor - match.goalsAgainst, "Maior diferença de golos · desempate por golos marcados", (match) => match.goalsFor),
        matchHighlight(labels[2], matches.filter((match) => match.result === "D"), (match) => match.goalsAgainst - match.goalsFor,
            league.id === "mundial" ? "Maior diferença de golos · desempate por golos sofridos · campo neutro" : "Maior diferença de golos · prioridade em casa, depois golos sofridos",
            (match) => match.goalsAgainst, league.id !== "mundial"),
        {
            label: labels[3],
            value: nemeses.map((entry) => entry.name).join("\n") || "Sem saldo negativo",
            meta: nemeses.map((entry) => `${entry.name}: saldo ${entry.gf}-${entry.ga} · ${entry.V}V ${entry.E}E ${entry.D}D`).join("\n") || "Nenhum adversário com vantagem no agregado"
        },
        matchHighlight(labels[4], matches, (match) => match.goalsFor + match.goalsAgainst, "Maior total de golos no mesmo jogo")
    ];
}

function getCoachNarrative(coach) {
    const historical = coachProfileExtras[coach.id]?.narrative;
    const keys = ["victim", "biggestWin", "worstLoss", "nemesis", "chaotic"];
    const competitions = [];
    if (historical) competitions.push({ context: getCoachCompetitionContext("scotland", coach.nome), items: keys.map((key) => historical[key]) });
    for (const leagueId of ["croatia", "mundial"]) {
        const league = leagues.find((entry) => entry.id === leagueId);
        if (!league) continue;
        competitions.push({
            context: getCoachCompetitionContext(leagueId, coach.nome),
            items: buildCoachNarrative(league, coach)
        });
    }
    return keys.map((key, index) => ({
        label: competitions.find((competition) => competition.items[index])?.items[index].label || "A recolher",
        performances: competitions.flatMap((competition) => competition.items[index] ? [{ ...competition.items[index], context: competition.context }] : [])
    }));
}

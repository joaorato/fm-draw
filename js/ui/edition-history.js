let selectedEditionId = "all";
let headToHeadFirst = "";
let headToHeadSecond = "";
let headToHeadLeague = "all";
const HEAD_TO_HEAD_STORAGE_KEY = "emg-head-to-head-coaches";

function restoreHeadToHead() {
    headToHeadFirst = "";
    headToHeadSecond = "";
    try {
        const saved = JSON.parse(localStorage.getItem(HEAD_TO_HEAD_STORAGE_KEY));
        headToHeadFirst = coachProfiles.find((coach) => coach.id === saved?.first)?.nome || "";
        headToHeadSecond = coachProfiles.find((coach) => coach.id === saved?.second && coach.nome !== headToHeadFirst)?.nome || "";
    } catch (_) {}
}

function persistHeadToHead() {
    try {
        localStorage.setItem(HEAD_TO_HEAD_STORAGE_KEY, JSON.stringify({
            first: getCoachByShortName(headToHeadFirst)?.id || "",
            second: getCoachByShortName(headToHeadSecond)?.id || ""
        }));
    } catch (_) {}
}

function getSelectedEdition() {
    return selectedEditionId;
}

function getSelectedEditionName() {
    return emgEditions.find((edition) => edition.id === selectedEditionId).nome;
}

function renderEditionEmpty(copy) {
    return `<div class="edition-empty"><span class="history-kicker">${escapeAttribute(getSelectedEditionName())}</span><h3>O próximo capítulo está por escrever</h3><p>${escapeAttribute(copy)}</p><button type="button" class="history-button" onclick="selectEdition('fm26')">Revisitar o FM26</button></div>`;
}

function renderEditionSelector() {
    document.getElementById("editionSelector").innerHTML = `
        <span class="edition-caption">Edição</span>
        <div class="edition-tabs" role="group" aria-label="Edição do Football Manager">
            ${emgEditions.map((edition) => `<button type="button" onclick="selectEdition('${edition.id}')" aria-pressed="${edition.id === selectedEditionId}">${edition.nome}</button>`).join("")}
        </div>
        <span class="edition-status">${emgEditions.find((edition) => edition.id === selectedEditionId).estado}</span>`;
    document.getElementById("generalEditionLabel").textContent = `Pontos · ${getSelectedEditionName()}`;
    document.getElementById("historyTitle").textContent = selectedEditionId === "all" ? "A história EMG em números" : `${getSelectedEditionName()} em números`;
}

function selectEdition(editionId) {
    if (!emgEditions.some((edition) => edition.id === editionId)) return;
    selectedEditionId = editionId;
    headToHeadLeague = "all";
    stopLeagueLiveAutoAdvance();
    removeStandingsTooltip();
    // Não deixar um modal da edição anterior aberto por cima da seleção nova.
    closeCoachModal();
    getMusicElement()?.pause();
    renderEditionSelector();
    syncGeneralScoreModes();
    renderGeneralTable();
    renderLeagueSelector();
    renderDrawSelector();
    renderEditionHome();
    renderEditionHistory();
    renderHeadToHead();
}

function historyMatchMarkup(match) {
    const { league, fixture } = match;
    return `<button type="button" class="history-match" data-history-league="${escapeAttribute(league.id)}" data-history-fixture="${escapeAttribute(fixture.fixtureKey)}">
        <span class="history-match-teams">${escapeAttribute(fixture.home)} <strong>${escapeAttribute(getFixtureScoreLabel(fixture))}</strong> ${escapeAttribute(fixture.away)}</span>
        <span class="history-note">${escapeAttribute(league.nome)} · ${escapeAttribute(fixture.date)} · ${escapeAttribute(fixture.competition)}${fixture.note ? ` · ${escapeAttribute(fixture.note)}` : ""}</span>
        <span class="history-match-action">${fixture.report ? "Ver relatório ↗" : "Ver no calendário ↗"}</span>
    </button>`;
}

function bindHistoryMatches(root) {
    root.querySelectorAll("[data-history-fixture]").forEach((button) => button.addEventListener("click", () => {
        const league = leagues.find((entry) => entry.id === button.dataset.historyLeague);
        const fixture = league?.fixtures.find((entry) => entry.fixtureKey === button.dataset.historyFixture);
        if (!fixture) return;
        if (fixture.report) openMatchReport(fixture.report.id);
        else {
            setActiveTab("past");
            selectMainLeague(league.id);
            selectLeagueCalendarRound(league.id, league.fixtureGroupBy === "round" ? String(fixture.round) : fixture.month);
            document.querySelector(".league-calendar")?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }));
    bindCoachLinks(root);
}

function historyMatchGroup(title, matches, note = "") {
    return `<article class="history-card"><h3>${title}</h3>${note ? `<p class="history-note">${note}</p>` : ""}${matches.length
        ? `${historyMatchMarkup(matches[0])}${matches.length > 1 ? `<details class="history-more"><summary>Mais ${matches.length - 1} jogos empatados</summary>${matches.slice(1).map(historyMatchMarkup).join("")}</details>` : ""}`
        : `<p class="history-note">${title.startsWith("Maior vitória") ? "Sem vitórias registadas neste confronto." : "Sem jogos registados."}</p>`}</article>`;
}

function getHistoryChampion(league) {
    if (league.status !== "completed") return null;
    if (!league.torneio) return league.tabela.find((team) => team.pos === 1);
    const final = league.fixtures.find((fixture) => fixture.round === "final");
    if (!final || !getFixtureOutcome(final, final.home)) return null;
    const winner = final.homeGoals === final.awayGoals ? final.winner : final.homeGoals > final.awayGoals ? "home" : "away";
    return winner ? league.tabela.find((team) => team.equipa === final[winner]) : null;
}

function openHistoryCompetition(leagueId) {
    setActiveTab("past");
    selectMainLeague(leagueId);
}

function renderEditionHome() {
    const root = document.getElementById("editionHome");
    const editionLeagues = getEditionLeagues(selectedEditionId);
    if (!editionLeagues.length) {
        root.innerHTML = renderEditionEmpty("Nova edição, nova classificação. O histórico do FM26 fica guardado e os pontos do FM27 começam do zero.");
        return;
    }
    const standings = buildGeneralStandings(editionLeagues).sort((a, b) => b.concluidas - a.concluidas);
    const recap = buildEditionRetrospective(selectedEditionId);
    root.innerHTML = `
        <div class="history-heading"><span class="history-kicker">${getSelectedEditionName()} · ${editionLeagues.every((league) => league.status === "completed") ? "Classificação final" : "Edição em curso"}</span>
            <h1>Liga EMG: O Juízo Final</h1>
            <p>Uns levam os títulos. Outros levam as desculpas.</p></div>
        <div class="history-actions"><button type="button" class="history-button" onclick="setActiveTab('general')">Classificação final</button></div>
        <div class="history-podium">${standings.slice(0, 3).map((entry) => {
            const rank = 1 + standings.filter((other) => other.concluidas > entry.concluidas).length;
            return `<article class="history-card history-podium-card" data-rank="${rank}"><span class="history-kicker">${rank}.º lugar${rank === 1 ? " · Classificação EMG" : ""}</span>${getCoachLinkMarkup(entry.jogador)}<strong class="history-points ${getPointsClass(entry.concluidas)}">${formatPoints(entry.concluidas)} <small>pts</small></strong></article>`;
        }).join("")}</div>
        <div class="history-actions"><button type="button" class="history-button primary" onclick="setActiveTab('summary')">${getSelectedEditionName()} em números ↗</button><button type="button" class="history-button history-feature-button" onclick="openHeadToHead()"><span class="history-feature-badge">Novo</span>Confrontos diretos</button></div>
        <div class="history-champions">${editionLeagues.map((league) => {
            const champion = getHistoryChampion(league);
            return `<button type="button" class="history-card history-champion" onclick="openHistoryCompetition('${league.id}')">${league.championArtwork ? `<img class="history-champion-artwork" src="${escapeAttribute(league.championArtwork)}" alt="" aria-hidden="true">` : ""}<span class="history-kicker">${escapeAttribute(league.nome)}</span><strong>${escapeAttribute(champion?.equipa || "Por decidir")}</strong><span class="history-note">${champion ? `Campeão · ${escapeAttribute(champion.jogador || "Treinador PC")}` : league.statusLabel} ↗</span></button>`;
        }).join("")}</div>
        <div class="history-grid home-highlights">${historyMatchGroup("Uma goleada para recordar", recap.biggestWins, "Maior diferença de golos nos jogos com participação EMG.")}${historyMatchGroup("Um jogo para rever", recap.chaotic, "Maior total de golos nos jogos com participação EMG.")}</div>`;
    bindHistoryMatches(root);
}

function openHeadToHead() {
    if (getTabFromHash() !== "summary") setActiveTab("summary");
    document.getElementById("headToHead")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateHeadToHead(field, value) {
    if (field === "first") {
        if (value && (!getCoachByShortName(value) || value === headToHeadSecond)) return;
        headToHeadFirst = value;
    } else if (field === "second") {
        if (value && (!getCoachByShortName(value) || value === headToHeadFirst)) return;
        headToHeadSecond = value;
    } else headToHeadLeague = value;
    persistHeadToHead();
    renderHeadToHead();
}

function swapHeadToHead() {
    [headToHeadFirst, headToHeadSecond] = [headToHeadSecond, headToHeadFirst];
    persistHeadToHead();
    renderHeadToHead();
    document.querySelector(".h2h-swap")?.focus();
}

function renderHeadToHeadPortrait(name, side) {
    const coach = getCoachByShortName(name);
    if (!coach) return "";
    const media = resolveCoachMedia(coach);
    const photo = media.cardPhoto;
    if (!photo) return "";
    return `<img class="h2h-portrait h2h-portrait-${side}" src="${escapeAttribute(photo)}" alt="" aria-hidden="true" loading="lazy">`;
}

function renderHeadToHead() {
    const root = document.getElementById("headToHead");
    const editionLeagues = getEditionLeagues(selectedEditionId);
    if (!editionLeagues.length) {
        root.innerHTML = renderEditionEmpty("Os confrontos do FM27 começam quando houver jogos registados.");
        return;
    }
    const options = (selected, excluded) => `<option value=""${selected ? "" : " selected"}>Escolher treinador</option>` + [...coachProfiles].filter((coach) => coach.nome !== excluded).sort((a, b) => a.nome.localeCompare(b.nome, "pt")).map((coach) => `<option${selected === coach.nome ? " selected" : ""} value="${escapeAttribute(coach.nome)}">${escapeAttribute(coach.nome)}</option>`).join("");
    const hasPair = Boolean(headToHeadFirst && headToHeadSecond);
    const stats = hasPair ? buildCoachHeadToHead(selectedEditionId, headToHeadFirst, headToHeadSecond, headToHeadLeague) : null;
    const max = Math.max(1, stats?.matches || 0);
    root.innerHTML = `
        <div class="history-heading panel-head"><div><span class="history-kicker">Rivalidades · ${getSelectedEditionName()}</span><h2>Frente a frente</h2><p>Escolhe dois treinadores e revisita os confrontos entre eles.</p></div><button type="button" class="history-button" onclick="document.getElementById('summaryView').scrollIntoView({ behavior: 'smooth', block: 'start' })">Voltar aos números ↑</button></div>
        <div class="history-filters"><label>Treinador<select onchange="updateHeadToHead('first', this.value)">${options(headToHeadFirst, headToHeadSecond)}</select></label><button type="button" class="history-button h2h-swap" onclick="swapHeadToHead()" aria-label="Trocar lados dos treinadores" title="Trocar lados">⇄</button><label>Adversário<select onchange="updateHeadToHead('second', this.value)">${options(headToHeadSecond, headToHeadFirst)}</select></label><label>Competição<select onchange="updateHeadToHead('league', this.value)"><option value="all">Todas as competições</option>${editionLeagues.map((league) => `<option value="${league.id}"${headToHeadLeague === league.id ? " selected" : ""}>${escapeAttribute(league.nome)}</option>`).join("")}</select></label></div>
        ${hasPair ? `<div class="h2h-scoreboard">${renderHeadToHeadPortrait(headToHeadFirst, "left")}${renderHeadToHeadPortrait(headToHeadSecond, "right")}<div>${getCoachLinkMarkup(headToHeadFirst)}<strong>${stats.wins}</strong><span>vitórias</span><small>${stats.goalsFor} golos</small></div><div><span>${stats.matches} jogos</span><strong>${stats.draws}</strong><span>empates</span></div><div>${getCoachLinkMarkup(headToHeadSecond)}<strong>${stats.losses}</strong><span>vitórias</span><small>${stats.goalsAgainst} golos</small></div></div>
        <div class="h2h-balance" aria-hidden="true"><span style="flex:${stats.wins / max}"></span><span style="flex:${stats.draws / max}"></span><span style="flex:${stats.losses / max}"></span></div>
        <p class="history-note">Só contam confrontos registados entre os dois treinadores. Os desempates por penáltis mantêm o empate no registo V/E/D; o vencedor do desempate é indicado no jogo. A Escócia tem um calendário parcial.</p>
        ${stats.matches ? `<div class="history-grid">${historyMatchGroup(`Maior vitória · ${escapeAttribute(headToHeadFirst)}`, stats.firstWins)}${historyMatchGroup(`Maior vitória · ${escapeAttribute(headToHeadSecond)}`, stats.secondWins)}</div><details class="history-card history-more" open><summary>Todos os confrontos · ${stats.matches}</summary><div class="history-match-list">${[...stats.records].sort((a, b) => a.league === b.league ? b.index - a.index : editionLeagues.indexOf(a.league) - editionLeagues.indexOf(b.league)).map(historyMatchMarkup).join("")}</div></details>` : `<div class="history-card"><p>Ainda não há confrontos registados entre estes treinadores nesta seleção.</p></div>`}` : `<div class="history-card"><p>Escolhe os dois treinadores para ver o frente a frente.</p></div>`}`;
    bindHistoryMatches(root);
}

function renderEditionHistory() {
    const root = document.getElementById("editionHistory");
    const recap = buildEditionRetrospective(selectedEditionId);
    if (!recap.competitions.length) {
        root.innerHTML = renderEditionEmpty("Os recordes e os momentos do FM27 vão nascer dos resultados da nova edição.");
        return;
    }
    const runCard = (title, runs) => `<article class="history-card"><h3>${title}</h3>${runs.map((run) => `<p><strong>${run.length} jogos · ${getCoachLinkMarkup(run.team.jogador)}</strong><br><span class="history-note">${escapeAttribute(run.team.equipa)} · ${escapeAttribute(run.league.nome)}<br>${run.start.date} a ${run.end.date}</span></p>`).join("") || `<p class="history-note">Sem sequências registadas.</p>`}</article>`;
    root.innerHTML = `
        <div class="history-totals">${[[recap.competitions.length, "competições"], [recap.matches.length, "resultados registados"], [recap.goals, "golos nos jogos registados"], [recap.reports, "relatórios de jogo"]].map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>
        <p class="history-note">Resultados registados, sem golos de desempates por penáltis. Escócia: calendário parcial e sem relatórios; os restantes jogos publicados e as tabelas finais são preservados.</p>
        <div class="history-grid">${historyMatchGroup("Maior goleada", recap.biggestWins, "Diferença de golos · jogos com participação EMG.")}${historyMatchGroup("Jogo com mais golos", recap.chaotic, "Soma dos golos das duas equipas · jogos com participação EMG.")}
        <article class="history-card"><h3>Maior surpresa</h3>${recap.surprises.map(({ league, team, gain }) => `<p>${getCoachLinkMarkup(team.jogador)}<br><strong>+${gain} lugares face à previsão</strong><br><span class="history-note">${team.equipa} · ${league.nome} · previsto ${team.prevista}.º → ${team.pos}.º</span></p>`).join("") || "Sem subidas face à previsão."}</article>
        ${runCard("Maior série de vitórias", recap.winningRuns)}${runCard("Maior série de derrotas", recap.losingRuns)}</div>
        <p class="history-note">Sequências dos treinadores EMG: apenas jogos da liga na Croácia e jogos do Mundial. A Escócia fica de fora por ter calendário parcial. Datas referem-se ao calendário do save.</p>
        <h2 class="history-section-title">Ataques e defesas por competição</h2><p class="history-note">Entre equipas de treinadores EMG. Na Escócia e na Croácia conta a tabela da liga; no Mundial, o torneio completo. Médias por jogo, com empates preservados.</p>
        <div class="history-champions">${recap.competitions.map((league) => {
            const entries = recap.teamStats.filter((entry) => entry.league === league && entry.games > 0);
            const attack = Math.max(...entries.map((entry) => entry.gf / entry.games));
            const defense = Math.min(...entries.map((entry) => entry.ga / entry.games));
            const leaders = (key, maximum) => entries.filter((entry) => Math.abs(entry[key] / entry.games - maximum) < 0.000001).map((entry) => `${escapeAttribute(entry.team.jogador)} · ${(entry[key] / entry.games).toFixed(2).replace(".", ",")} por jogo (${entry[key]}/${entry.games}J)`).join("<br>");
            return `<article class="history-card"><span class="history-kicker">${league.nome}</span><h3>Melhor ataque</h3><p>${leaders("gf", attack) || "Sem dados"}</p><h3>Melhor defesa</h3><p>${leaders("ga", defense) || "Sem dados"}</p></article>`;
        }).join("")}</div>
        <h2 class="history-section-title">Jogos de decisão</h2><div class="history-grid">${recap.titleDecisions.map((match) => historyMatchGroup(`${escapeAttribute(match.league.nome)} · Título assegurado`, [match], `${escapeAttribute(match.champion.equipa)} já somava mais pontos do que qualquer rival poderia alcançar. Critério estrito, sem antecipar desempates.`)).join("")}
        ${recap.competitions.filter((league) => !league.torneio && recap.matches.some((match) => match.league === league && match.fixture.round === "cup-final")).map((league) => historyMatchGroup(`${escapeAttribute(league.nome)} · Finais de taças`, recap.matches.filter((match) => match.league === league && match.fixture.round === "cup-final"))).join("")}
        ${recap.competitions.filter((league) => league.torneio).map((league) => historyMatchGroup(`${escapeAttribute(league.nome)} · Pódio`, recap.matches.filter((match) => match.league === league && ["final", "3p"].includes(match.fixture.round)), "Os jogos que decidiram o título e o terceiro lugar.")).join("")}
        ${recap.competitions.filter((league) => league.torneio).map((league) => historyMatchGroup(`${escapeAttribute(league.nome)} · Eliminações EMG`, recap.humanMatches.filter((match) => {
            if (match.league !== league || !["r32", "r16", "qf", "sf"].includes(match.fixture.round)) return false;
            const fixture = match.fixture;
            const loser = fixture.homeGoals === fixture.awayGoals ? (fixture.winner === "home" ? "away" : fixture.winner === "away" ? "home" : null) : fixture.homeGoals < fixture.awayGoals ? "home" : "away";
            return loser && (loser === "home" ? match.homeCoach : match.awayCoach);
        }), "Derrotas nas eliminatórias; a fase de grupos pode decidir-se por vários resultados.")).join("")}</div>`;
    bindHistoryMatches(root);
}

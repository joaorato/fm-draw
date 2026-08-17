function getMatchReportById(reportId) {
    return leagues
        .flatMap((league) => league.fixtures || [])
        .map((fixture) => fixture.report)
        .find((report) => report?.id === reportId) || null;
}

function getReportTeamMarkup(report, side) {
    let fixture = report.fixture;
    let teamName = side === "home" ? fixture.home : fixture.away;
    let league = leagues.find((entry) => entry.fixtures?.includes(fixture));
    let team = league ? getLeagueTeamEntry(league, teamName) : null;
    let logo = league ? getLeagueTeamLogo(league, teamName) : "";
    let logoMarkup = logo ? `<img src="${logo}" alt="${teamName}" class="match-report-team-logo">` : "";
    return `
        <div class="match-report-team match-report-team-${side}">
            ${side === "away" ? logoMarkup : ""}
            <div>
                <strong>${teamName}</strong>
                <span>${report.coaches?.[side] || team?.jogador || "PC"}</span>
            </div>
            ${side === "home" ? logoMarkup : ""}
        </div>
    `;
}

function getReportStatNumber(value) {
    let normalized = String(value).replace("%", "").replace(",", ".").replace(/[^\d.-]/g, "");
    let parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
}

function renderMatchReportStats(report) {
    return report.stats.map((stat) => {
        let homeValue = getReportStatNumber(stat.home);
        let awayValue = getReportStatNumber(stat.away);
        let total = homeValue + awayValue || 1;
        let homeWidth = Math.max(4, (homeValue / total) * 100);
        let awayWidth = Math.max(4, (awayValue / total) * 100);
        return `
            <div class="match-report-stat">
                <div class="match-report-stat-label">${stat.label}</div>
                <div class="match-report-stat-row">
                    <span>${stat.home}</span>
                    <div class="match-report-bars" aria-hidden="true">
                        <i class="home" style="width:${homeWidth}%"></i>
                        <i class="away" style="width:${awayWidth}%"></i>
                    </div>
                    <span>${stat.away}</span>
                </div>
            </div>
        `;
    }).join("");
}

function getFormationPlayerNames(formation = {}) {
    return (formation.players || [])
        .flat()
        .map((player) => player?.name)
        .filter(Boolean)
        .sort((a, b) => b.length - a.length);
}

function escapeRegExp(value = "") {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getEventNameVariants(name = "") {
    let cleanName = String(name).replace(/\s+/g, " ").trim();
    if (!cleanName) return [];

    let parts = cleanName.split(" ").filter(Boolean);
    let lastName = parts[parts.length - 1] || "";
    let variants = [cleanName];
    if (parts.length > 1 && lastName) {
        variants.push(`${parts[0].charAt(0)}. ${lastName}`);
    }
    if (lastName) variants.push(lastName);

    return [...new Set(variants)].filter(Boolean);
}

// Num evento em string o marcador é o primeiro nome, dos dois lados. É o que o
// formato diz, é o que o js/data/stats-core.js lê, e os dois têm de continuar a
// dizer o mesmo — o `scripts/report_lint.js` falha se alguma vez discordarem.
//
// Que fique claro o que isto não é: não é uma garantia de que o nome está certo.
// A coluna da direita do FM aparece espelhada no ecrã e foi copiada ora de uma
// maneira ora da outra, às vezes dentro do mesmo jogo — no Vukovar-Varaždin da
// jornada 3 três dos quatro golos estavam bem e um estava trocado. Não há regra
// que arrume isso; arruma-se voltando a passar o jogo pela captura, e aí o
// relatório passa a usar `goalEvent()` e não chega sequer aqui.
function getEventEdgePerson(body = "") {
    let parts = body.split(/\s+/).filter(Boolean);
    if (parts.length <= 2) return body.trim();

    return parts.slice(0, 2).join(" ");
}

function matchEventEdgeName(body = "", playerNames = []) {
    let candidates = playerNames
        .flatMap((name) => getEventNameVariants(name))
        .sort((a, b) => b.length - a.length);

    return candidates.find((name) => {
        let escaped = escapeRegExp(name);
        return new RegExp(`^${escaped}(?:\\s|$)`, "iu").test(body);
    }) || "";
}

function parseMatchReportEvent(event = "", playerNames = []) {
    // Evento estruturado (`goalEvent()` / `sendOffEvent()`): já vem com marcador
    // e assistente separados, não há nada para interpretar.
    if (event && typeof event === "object") {
        if (event.sendOff) return { minute: event.minute, scorer: event.player, assist: "Expulso", type: "red" };
        if (event.ownGoal) return { minute: event.minute, scorer: event.scorer, assist: "Autogolo", type: "own-goal" };
        return {
            minute: event.minute,
            scorer: event.scorer,
            assist: event.assist || (event.penalty ? "Penálti" : ""),
            type: event.penalty ? "penalty" : "goal"
        };
    }

    const eventMatch = event.match(/^(\d+(?:\+\d+)?)'\s+(.+)$/);
    if (!eventMatch) {
        return { minute: "", scorer: event, assist: "", type: "goal" };
    }

    const [, minute, body] = eventMatch;
    if (/\bexpulso\b/i.test(body)) {
        return { minute, scorer: body.replace(/\s*expulso\s*/i, "").trim(), assist: "Expulso", type: "red" };
    }

    if (/(^|\s)a\.g\.(\s|$)/i.test(body) || body.includes("(AG)")) {
        return { minute, scorer: body.replace(/\s*a\.g\.\s*/i, "").replace(/\s*\(AG\)\s*/g, "").trim(), assist: "Autogolo", type: "own-goal" };
    }

    if (/\bpen\b/i.test(body)) {
        return { minute, scorer: body.replace(/\s*pen\s*/i, "").trim(), assist: "Penálti", type: "penalty" };
    }

    const knownScorer = matchEventEdgeName(body, playerNames);
    if (knownScorer) {
        let scorerMatch = body.match(new RegExp(`^(${escapeRegExp(knownScorer)})(?:\\s|$)`, "iu"));
        let scorer = scorerMatch?.[1] || knownScorer;
        let edgeScorer = getEventEdgePerson(body);
        if (!knownScorer.includes(" ") && edgeScorer.toLowerCase().endsWith(knownScorer.toLowerCase())) {
            scorer = edgeScorer;
        }
        return { minute, scorer, assist: body.slice(scorer.length).trim(), type: "goal" };
    }

    const scorer = getEventEdgePerson(body);
    const assist = body.slice(scorer.length).trim();

    return {
        minute,
        scorer,
        assist,
        type: "goal"
    };
}

function normalizePlayerName(value = "") {
    return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\p{L}\p{N}\s.]/gu, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

function getPlayerGoalKeys(value = "") {
    let normalized = normalizePlayerName(value);
    if (!normalized) return [];
    let parts = normalized.split(" ").filter(Boolean);
    let lastName = parts[parts.length - 1] || "";
    return [...new Set([normalized, lastName].filter(Boolean))];
}

function getScorerNames(report, side) {
    let formation = getReportFormation(report, side);
    let playerNames = getFormationPlayerNames(formation);
    let scorerKeys = new Set();
    (report.events?.[side] || [])
        .map((event) => parseMatchReportEvent(event, playerNames))
        .filter((event) => event.type === "goal" || event.type === "penalty")
        .forEach((event) => {
            getPlayerGoalKeys(event.scorer).forEach((key) => scorerKeys.add(key));
        });
    return scorerKeys;
}

function renderMatchReportEvents(events = [], formation = {}) {
    if (!events.length) {
        return `<span class="match-report-empty">Sem golos</span>`;
    }

    const playerNames = getFormationPlayerNames(formation);
    return events.map((event) => {
        const parsed = parseMatchReportEvent(event, playerNames);
        const detail = parsed.assist
            ? (parsed.type === "goal" ? `Assist. ${parsed.assist}` : parsed.assist)
            : "";
        return `
            <span class="match-report-goal match-report-goal-${parsed.type}">
                <i aria-hidden="true">${parsed.type === "red" ? "■" : parsed.type === "own-goal" ? "↺" : "⚽"}</i>
                <span class="match-report-goal-minute">${parsed.minute}'</span>
                <span class="match-report-goal-main">
                    <b>${parsed.scorer}</b>
                    ${detail ? `<em>${detail}</em>` : ""}
                </span>
            </span>
        `;
    }).join("");
}

const matchFormationLayouts = {
    "4-3-3 DM": [["PL"], ["E", "D"], ["MC", "MC"], ["MD"], ["DE", "DC", "DC", "DD"], ["GR"]],
    "4-2-3-1": [["PL"], ["E", "MO", "D"], ["MC", "MC"], ["DE", "DC", "DC", "DD"], ["GR"]],
    "3-4-2-1": [["PL"], ["MO", "MO"], ["ME", "MC", "MC", "MD"], ["DC", "DC", "DC"], ["GR"]],
    "3-4-1-2": [["PL", "PL"], ["MO"], ["ME", "MC", "MC", "MD"], ["DC", "DC", "DC"], ["GR"]],
    "4-3-1-2": [["PL", "PL"], ["MO"], ["MC", "MC", "MC"], ["DE", "DC", "DC", "DD"], ["GR"]]
};

function getFormationPlayerPosition(player) {
    return (typeof player === "string" ? player : player?.pos || "").toUpperCase();
}

function inferThreeCenterBackFormationName(formation) {
    let rows = formation?.players || [];
    if (rows.length < 4) return formation?.name;

    let defenseRow = rows[rows.length - 2] || [];
    let centerBackPositions = new Set(["DC", "CC"]);
    let hasThreeCenterBacks = defenseRow.length === 3
        && defenseRow.every((player) => centerBackPositions.has(getFormationPlayerPosition(player)));

    if (!hasThreeCenterBacks) return formation?.name;

    let outfieldRows = rows.slice(0, -1);
    let shape = [defenseRow.length, ...outfieldRows.slice(0, -1).map((row) => row.length).reverse()];
    return shape.join("-");
}

function hasDetailedFormation(formation) {
    return Boolean(formation && typeof formation !== "string" && formation.players?.some((row) => row.some((player) => player?.name || player?.number || player?.rating)));
}

function getFallbackDetailedFormation(report, side) {
    let fixture = report.fixture;
    if (!fixture) return null;

    let teamName = side === "home" ? fixture.home : fixture.away;
    let league = leagues.find((entry) => entry.fixtures?.includes(fixture));
    let fixtures = league?.fixtures || [];
    let currentIndex = fixtures.indexOf(fixture);
    let candidates = fixtures
        .map((candidateFixture, index) => {
            let candidateReport = candidateFixture.report;
            if (!candidateReport || candidateReport === report) return null;

            let candidateSide = candidateFixture.home === teamName ? "home" : candidateFixture.away === teamName ? "away" : null;
            if (!candidateSide) return null;

            let candidateFormation = candidateReport.formations?.[candidateSide];
            if (!hasDetailedFormation(candidateFormation)) return null;

            let distance = currentIndex >= 0 ? Math.abs(index - currentIndex) : index;
            return { formation: candidateFormation, distance };
        })
        .filter(Boolean)
        .sort((a, b) => a.distance - b.distance);

    return candidates[0]?.formation || null;
}

function getReportFormation(report, side) {
    let formation = report.formations?.[side];
    if (!formation) return { name: "Sem dados", players: [] };
    if (typeof formation === "string") {
        let fallbackFormation = getFallbackDetailedFormation(report, side);
        if (fallbackFormation) {
            return {
                name: formation || inferThreeCenterBackFormationName(fallbackFormation) || fallbackFormation.name || "Sem dados",
                players: fallbackFormation.players || []
            };
        }

        return {
            name: formation,
            players: matchFormationLayouts[formation] || []
        };
    }
    return {
        name: inferThreeCenterBackFormationName(formation) || formation.name || "Sem dados",
        players: formation.players || []
    };
}

function renderFormationPlayer(player, scorers = new Set()) {
    if (!player) return "";
    if (typeof player === "string") {
        player = { pos: player };
    }

    let hasDetails = player.name || player.number || player.rating;
    let number = player.number || "";
    let name = player.name || "";
    let rating = player.rating || "";
    let position = player.pos || "";
    let hasGoal = name ? getPlayerGoalKeys(name).some((key) => scorers.has(key)) : Boolean(player.goal);

    if (!hasDetails) {
        return `<span class="match-report-player-node is-placeholder"><span class="match-report-player-pos-only">${position}</span></span>`;
    }

    return `
        <span class="match-report-player-node" title="${[number ? `#${number}` : "", name, position, rating].filter(Boolean).join(" · ")}">
            ${hasGoal ? `<span class="match-report-player-goal" aria-hidden="true">⚽</span>` : ""}
            <span class="match-report-shirt">${number}</span>
            <span class="match-report-player-badge">
                ${rating ? `<b>${rating}</b>` : ""}
                ${position ? `<em>${position}</em>` : ""}
            </span>
            ${name ? `<span class="match-report-player-name">${name}</span>` : ""}
        </span>
    `;
}

function renderFormationPitch(report, side) {
    let formation = getReportFormation(report, side);
    let rows = formation.players;
    let scorers = getScorerNames(report, side);
    if (!rows.length) {
        return `<div class="match-report-pitch match-report-pitch-empty"><span class="match-report-empty">Formação detalhada indisponível</span></div>`;
    }
    let totalRows = rows.length;
    return `
        <div class="match-report-pitch match-report-pitch-${side}">
            ${rows.map((row, index) => `
                <div class="match-report-pitch-row match-report-pitch-row-${index + 1}" style="--row-count:${row.length}; --row-index:${index + 1}; --total-rows:${totalRows};">
                    ${row.map((player) => renderFormationPlayer(player, scorers)).join("")}
                </div>
            `).join("")}
        </div>
    `;
}

function renderFormationTeamHeader(report, side) {
    let fixture = report.fixture;
    let teamName = side === "home" ? fixture.home : fixture.away;
    let league = leagues.find((entry) => entry.fixtures?.includes(fixture));
    let team = league ? getLeagueTeamEntry(league, teamName) : null;
    let formation = getReportFormation(report, side);
    let logo = league ? getLeagueTeamLogo(league, teamName) : "";
    let logoMarkup = logo ? `<img src="${logo}" alt="${teamName}">` : "";
    return `
        <div class="match-report-tactic-head">
            <span>${logoMarkup}${teamName}</span>
            <strong>${formation.name}</strong>
        </div>
    `;
}

function renderMatchReportTacticCard(report, side) {
    if (!report.formations) return "";
    return `
        <section class="match-report-tactic-card match-report-tactic-card-${side}" aria-label="Formação ${side === "home" ? "da equipa da casa" : "da equipa visitante"}">
            ${renderFormationTeamHeader(report, side)}
            ${renderFormationPitch(report, side)}
        </section>
    `;
}

function openMatchReport(reportId) {
    let report = getMatchReportById(reportId);
    if (!report) return;

    closeMatchReport();

    let fixture = report.fixture;
    let score = getFixtureScoreLabel(fixture);
    let competition = report.competition || fixture.competition || "Hrvatska nogometna liga";
    let modal = document.createElement("div");
    modal.id = "matchReportModal";
    modal.className = "match-report-modal";
    modal.innerHTML = `
        <div class="match-report-backdrop" onclick="closeMatchReport()"></div>
        <article class="match-report-dialog" role="dialog" aria-modal="true" aria-label="Relatório do jogo">
            <button class="match-report-close" type="button" onclick="closeMatchReport()" aria-label="Fechar relatório">&times;</button>
            <header class="match-report-hero">
                <span class="match-report-league">${competition}</span>
                <div class="match-report-scoreline">
                    ${getReportTeamMarkup(report, "home")}
                    <strong class="match-report-score">${score}</strong>
                    ${getReportTeamMarkup(report, "away")}
                </div>
                <div class="match-report-meta">
                    <span>${report.date}</span>
                    <span>${report.stadium}</span>
                    <span>${report.weather}</span>
                    <span class="match-report-mvp">&#9733; ${report.playerOfMatch} <b>${report.rating}</b></span>
                </div>
            </header>
            <div class="match-report-body">
                ${renderMatchReportTacticCard(report, "home")}
                <div class="match-report-center">
                    <section class="match-report-card match-report-events">
                        <h3>Eventos do jogo</h3>
                        <div class="match-report-events-grid">
                            <div class="match-report-events-team match-report-events-team-home">${renderMatchReportEvents(report.events.home, getReportFormation(report, "home"))}</div>
                            <div class="match-report-events-team match-report-events-team-away">${renderMatchReportEvents(report.events.away, getReportFormation(report, "away"))}</div>
                        </div>
                    </section>
                    <section class="match-report-card match-report-data">
                        <h3>Dados do jogo</h3>
                        ${renderMatchReportStats(report)}
                    </section>
                </div>
                ${renderMatchReportTacticCard(report, "away")}
            </div>
        </article>
    `;
    document.body.appendChild(modal);
    document.body.classList.add("modal-open");
}

function closeMatchReport() {
    let modal = document.getElementById("matchReportModal");
    if (!modal) return;
    modal.remove();
    if (!document.getElementById("coachModal") || document.getElementById("coachModal").hidden) {
        document.body.classList.remove("modal-open");
    }
}

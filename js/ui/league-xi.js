let activeLeagueXiRound = {};
let activeLeagueXiDirection = {};

// x maior = mais perto da própria baliza, seguindo a convenção já usada em
// scotlandLeagueMerits.teamOfYear (guarda-redes ~92, defesas ~72-76, meio
// ~48-50, ataque ~18-22). y reparte-se pelo número de jogadores daquela linha.
const LEAGUE_XI_TIER_X = { gk: 90, def: 72, mid: 48, fwd: 20 };
const LEAGUE_XI_TIER_ROLE = { gk: "GR", def: "DEF", mid: "MED", fwd: "AV" };

function formatXiRating(rating) {
    return rating.toFixed(1).replace(".", ",");
}

function layoutXiRow(players, tier) {
    let x = LEAGUE_XI_TIER_X[tier];
    let role = LEAGUE_XI_TIER_ROLE[tier];
    return players.map((player, index) => ({
        name: player.name,
        number: player.number,
        team: player.team,
        rating: formatXiRating(player.rating),
        role,
        x,
        y: (100 / (players.length + 1)) * (index + 1)
    }));
}

function layoutRoundXi(xi) {
    return [
        ...layoutXiRow([xi.gk], "gk"),
        ...layoutXiRow(xi.def, "def"),
        ...layoutXiRow(xi.mid, "mid"),
        ...layoutXiRow(xi.fwd, "fwd")
    ];
}

function getLeagueXiRoundLabel(league, round) {
    let fixture = league.fixtures.find((entry) => entry.round === round);
    return fixture?.roundLabel || `Jornada ${round}`;
}

function renderLeagueXiRoundSelect(league, rounds, selectedRound) {
    let options = rounds.map((round) => `
        <option value="${escapeAttribute(String(round))}" ${round === selectedRound ? "selected" : ""}>
            ${escapeAttribute(getLeagueXiRoundLabel(league, round))}
        </option>
    `).join("");

    return `
        <select class="league-xi-select" onchange="selectLeagueXiRound('${league.id}', this.value)" aria-label="Escolher jornada">
            ${options}
        </select>
    `;
}

function renderLeagueXiDirectionToggle(league, direction) {
    return `
        <div class="league-xi-toggle" role="group" aria-label="Melhor ou pior onze da jornada">
            <button class="league-xi-toggle-btn ${direction === "best" ? "active" : ""}" type="button"
                aria-pressed="${direction === "best" ? "true" : "false"}"
                onclick="selectLeagueXiDirection('${league.id}', 'best')">Team of the Week</button>
            <button class="league-xi-toggle-btn ${direction === "worst" ? "active" : ""}" type="button"
                aria-pressed="${direction === "worst" ? "true" : "false"}"
                onclick="selectLeagueXiDirection('${league.id}', 'worst')">Team of the Weak</button>
        </div>
    `;
}

function renderLeagueXiInfoTip() {
    return `
        <span class="league-xi-info-tip" tabindex="0" role="button" title="" aria-label="Sobre estes dados">i
            <template class="standings-tooltip-template">
                <span class="score-breakdown-tooltip league-xi-info-tooltip" role="tooltip">
                    Só se sabe a nota de quem começou o jogo: o relatório do FM não mostra a nota
                    de quem entrou do banco. Só entram jornadas com onzes detalhados transcritos.
                </span>
            </template>
        </span>
    `;
}

function renderLeagueXiBody(league) {
    let rounds = getFeasibleLeagueXiRounds(league, league.equipaJornada);
    let round = activeLeagueXiRound[league.id];
    let direction = activeLeagueXiDirection[league.id] || "best";

    let xi = buildRoundXi(league, round, direction, league.equipaJornada);
    let pitch = xi
        ? renderXiPitch(layoutRoundXi(xi))
        : `<div class="league-toty-pitch league-xi-pitch-empty"><span class="match-report-empty">Sem dados para esta jornada</span></div>`;

    return `
        <div class="league-xi-body">
            <div class="league-xi-controls">
                ${renderLeagueXiRoundSelect(league, rounds, round)}
                ${renderLeagueXiDirectionToggle(league, direction)}
                ${renderLeagueXiInfoTip()}
            </div>
            <div class="league-toty-panel">
                ${pitch}
            </div>
        </div>
    `;
}

function refreshLeagueXiBody(league) {
    let modal = document.getElementById("leagueXiModal");
    let body = modal?.querySelector(".league-xi-body");
    if (!body) return;

    body.outerHTML = renderLeagueXiBody(league);
    bindFloatingTooltips(modal, ".league-xi-info-tip");
}

function selectLeagueXiRound(leagueId, roundValue) {
    let league = leagues.find((entry) => entry.id === leagueId);
    if (!league) return;

    let rounds = getFeasibleLeagueXiRounds(league, league.equipaJornada);
    activeLeagueXiRound[leagueId] = rounds.find((round) => String(round) === roundValue) ?? rounds[rounds.length - 1];
    refreshLeagueXiBody(league);
}

function selectLeagueXiDirection(leagueId, direction) {
    let league = leagues.find((entry) => entry.id === leagueId);
    if (!league) return;

    activeLeagueXiDirection[leagueId] = direction;
    refreshLeagueXiBody(league);
}

function openLeagueXi(leagueId) {
    let league = leagues.find((entry) => entry.id === leagueId);
    if (!league?.equipaJornada) return;

    let rounds = getFeasibleLeagueXiRounds(league, league.equipaJornada);
    if (!rounds.length) return;

    closeLeagueXi();

    if (activeLeagueXiRound[leagueId] === undefined) activeLeagueXiRound[leagueId] = rounds[rounds.length - 1];
    if (activeLeagueXiDirection[leagueId] === undefined) activeLeagueXiDirection[leagueId] = "best";

    let modal = document.createElement("div");
    modal.id = "leagueXiModal";
    modal.className = "league-xi-modal";
    modal.innerHTML = `
        <div class="league-xi-backdrop" onclick="closeLeagueXi()"></div>
        <article class="league-xi-dialog" role="dialog" aria-modal="true" aria-label="Team of the Week">
            <button class="league-xi-close" type="button" onclick="closeLeagueXi()" aria-label="Fechar">&times;</button>
            <header class="league-xi-head">
                <span class="league-xi-kicker">${escapeAttribute(league.nome)} · ${escapeAttribute(league.epoca)}</span>
                <h3 class="league-xi-title">Team of the Week</h3>
            </header>
            ${renderLeagueXiBody(league)}
        </article>
    `;

    document.body.appendChild(modal);
    openOverlay(modal, { onEscape: closeLeagueXi });
    bindFloatingTooltips(modal, ".league-xi-info-tip");
}

function closeLeagueXi() {
    let modal = document.getElementById("leagueXiModal");
    if (!modal) return;

    closeOverlay(modal);
}

function renderLeagueXiTrigger(league) {
    if (!league.equipaJornada) return "";
    return `
        <button class="league-chip league-xi-trigger" type="button" onclick="openLeagueXi('${league.id}')">
            Team of the Week
        </button>
    `;
}

let activeLeagueId = (leagues.find((league) => league.status === "live") || leagues[0]).id;

function renderLeagueSelector() {
    let selector = document.getElementById("leagueSelector");
    if (!selector) return;

    let activeLeague = leagues.find((league) => league.id === activeLeagueId) || leagues[0];
    activeLeagueId = activeLeague.id;

    let options = leagues.map((league) => {
        let label = league.statusLabel ? `${league.nome} — ${league.statusLabel}` : league.nome;
        return `
            <button
                class="league-main-option ${league.id === activeLeague.id ? "active" : ""}"
                type="button"
                onclick="selectMainLeague('${league.id}')"
                aria-pressed="${league.id === activeLeague.id ? "true" : "false"}"
            >
                ${label}
            </button>
        `;
    }).join("");

    let activeLabel = activeLeague.statusLabel ? `${activeLeague.nome} — ${activeLeague.statusLabel}` : activeLeague.nome;
    selector.innerHTML = `
        <div class="league-main-select-wrap">
            <button class="league-main-select" type="button" onclick="toggleMainLeagueMenu()" aria-expanded="false" aria-label="Escolher liga">
                ${activeLabel}
            </button>
            <div class="league-main-menu">
                ${options}
            </div>
        </div>
    `;

    renderLeague(activeLeague.id);
}

function closeMainLeagueMenu() {
    let menu = document.querySelector(".league-main-select-wrap.open");
    if (!menu) return;
    menu.classList.remove("open");
    menu.querySelector(".league-main-select")?.setAttribute("aria-expanded", "false");
}

function toggleMainLeagueMenu() {
    let menu = document.querySelector(".league-main-select-wrap");
    if (!menu) return;
    let willOpen = !menu.classList.contains("open");
    closeMainLeagueMenu();
    if (willOpen) {
        menu.classList.add("open");
        menu.querySelector(".league-main-select")?.setAttribute("aria-expanded", "true");
    }
}

function selectMainLeague(leagueId) {
    activeLeagueId = leagueId;
    closeMainLeagueMenu();
    renderLeagueSelector();
}

function getLeagueTeamEntry(league, teamName) {
    return league.tabela.find((entry) => entry.equipa === teamName) || null;
}

function getLeagueTeamLogo(league, teamName) {
    let entry = getLeagueTeamEntry(league, teamName);
    return entry?.logo || league?.extraTeamLogos?.[teamName] || "";
}

function renderLeagueTeamName(league, teamName, extraClass = "") {
    let entry = getLeagueTeamEntry(league, teamName);
    let coach = entry?.jogador;
    let coachMarkup = coach ? getCoachLinkMarkup(coach, "league-match-coach-link") : `<span class="league-match-coach-empty">PC</span>`;
    let logo = getLeagueTeamLogo(league, teamName);
    let logoMarkup = logo ? `<img src="${logo}" alt="${teamName}" class="league-match-logo" loading="lazy">` : "";
    return `
        <span class="league-match-team ${extraClass}">
            <span class="league-match-club-row">
                ${logoMarkup}
                <span class="league-match-club">${teamName}</span>
            </span>
            <span class="league-match-coach">${coachMarkup}</span>
        </span>
    `;
}

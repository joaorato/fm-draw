let activeLeagueCalendarRound = {};

function getFixtureDateSortValue(fixture) {
    let [dayRaw, monthRaw] = String(fixture.date || "").trim().split(/\s+/);
    let day = Number.parseInt(dayRaw, 10) || 0;
    let month = Number.parseInt(fixtureMonthNumbers[monthRaw], 10) || 0;
    let year = month >= 7 ? 2025 : 2026;
    return Date.UTC(year, Math.max(0, month - 1), day);
}

function getFixtureDateRangeLabel(matches) {
    let dates = [...new Map(matches
        .filter((fixture) => fixture.date)
        .sort((a, b) => getFixtureDateSortValue(a) - getFixtureDateSortValue(b))
        .map((fixture) => [fixture.date, fixture.date])
    ).values()];

    if (!dates.length) return "";
    if (dates.length === 1) return dates[0];
    return `${dates[0]} - ${dates[dates.length - 1]}`;
}

function getCalendarGroupLabel(label, matches) {
    let range = getFixtureDateRangeLabel(matches);
    return range ? `${label} · ${range}` : label;
}

function getLeagueCalendarGroups(league) {
    let groupByRound = league.fixtureGroupBy === "round";
    return groupByRound
        ? [...new Set(league.fixtures.map((fixture) => fixture.round))].map((round) => {
            let matches = league.fixtures.filter((fixture) => fixture.round === round);
            let baseLabel = matches[0]?.roundLabel || `Jornada ${round}`;
            return {
                key: String(round),
                label: getCalendarGroupLabel(baseLabel, matches),
                matches
            };
        })
        : (league.fixtureMonths || [...new Set(league.fixtures.map((fixture) => fixture.month))]).map((month) => {
            let matches = league.fixtures.filter((fixture) => fixture.month === month);
            return {
                key: String(month),
                label: getCalendarGroupLabel(month, matches),
                matches
            };
        });
}

function renderLeagueCalendarRoundSelect(league, groups) {
    if (!groups.length) return "";

    let selectedRound = activeLeagueCalendarRound[league.id] || "all";
    if (selectedRound !== "all" && !groups.some((group) => group.key === selectedRound)) {
        selectedRound = "all";
        activeLeagueCalendarRound[league.id] = "all";
    }

    let options = groups.map((group) => `
        <option value="${group.key}" ${group.key === selectedRound ? "selected" : ""}>
            ${group.label}
        </option>
    `).join("");

    return `
        <label class="league-calendar-filter">
            <span>${league.fixtureGroupBy === "round" ? "Jornada" : "Período"}</span>
            <select class="league-calendar-select" onchange="selectLeagueCalendarRound('${league.id}', this.value)" aria-label="Escolher jornada do calendário">
                <option value="all" ${selectedRound === "all" ? "selected" : ""}>Todas</option>
                ${options}
            </select>
        </label>
    `;
}

function selectLeagueCalendarRound(leagueId, roundKey) {
    let previousRound = activeLeagueCalendarRound[leagueId] || "all";
    let nextRound = roundKey || "all";
    activeLeagueCalendarRound[leagueId] = nextRound;
    renderLeague(leagueId);
    // Ao voltar a "Todas", manter a vista na jornada que estava selecionada
    if (nextRound === "all" && previousRound !== "all") {
        scrollLeagueCalendarToGroup(previousRound);
    }
}

function scrollLeagueCalendarToGroup(groupKey) {
    let container = document.getElementById("leaguePanel")?.querySelector(".league-calendar-scroll");
    if (!container) return;
    let target = [...container.querySelectorAll("[data-calendar-group]")]
        .find((block) => block.dataset.calendarGroup === String(groupKey));
    if (!target) return;
    let padding = Number.parseFloat(getComputedStyle(container).paddingTop) || 0;
    container.scrollTop += target.getBoundingClientRect().top - container.getBoundingClientRect().top - padding;
}

function renderLeagueCalendar(league) {
    if (!league.fixtures?.length) return "";
    let groups = getLeagueCalendarGroups(league);
    let selectedRound = activeLeagueCalendarRound[league.id] || "all";
    if (selectedRound !== "all" && !groups.some((group) => group.key === selectedRound)) {
        selectedRound = "all";
        activeLeagueCalendarRound[league.id] = "all";
    }
    let visibleGroups = selectedRound === "all"
        ? groups
        : groups.filter((group) => group.key === selectedRound);

    let monthBlocks = visibleGroups.map((group) => {
        let matches = group.matches;
        if (!matches.length) return "";
        let rows = matches.map((fixture) => {
            let hasResult = Number.isFinite(fixture.homeGoals) && Number.isFinite(fixture.awayGoals);
            let homeWinner = (hasResult && fixture.homeGoals > fixture.awayGoals) || fixture.winner === "home" ? "winner" : "";
            let awayWinner = (hasResult && fixture.awayGoals > fixture.homeGoals) || fixture.winner === "away" ? "winner" : "";
            let isPostponed = fixture.status === "postponed";
            let scoreLabel = getFixtureScoreLabel(fixture);
            let scoreMarkup = fixture.report
                ? `<button class="league-fixture-score is-clickable" type="button" onclick="openMatchReport('${fixture.report.id}')" title="Ver estatísticas do jogo">${scoreLabel}</button>`
                : `<span class="league-fixture-score ${hasResult ? "is-result" : ""} ${isPostponed ? "is-postponed" : ""}">${scoreLabel}</span>`;
            let noteMarkup = fixture.note ? `<div class="league-fixture-note">${fixture.note}</div>` : "";
            return `
                <div class="league-fixture-row">
                    <div class="league-fixture-meta">
                        <span>${fixture.date}</span>
                        <span>${fixture.competition}</span>
                    </div>
                    <div class="league-fixture-match">
                        ${renderLeagueTeamName(league, fixture.home, homeWinner)}
                        ${scoreMarkup}
                        ${renderLeagueTeamName(league, fixture.away, awayWinner)}
                    </div>
                    ${noteMarkup}
                </div>
            `;
        }).join("");

        return `
            <div class="league-fixture-month" data-calendar-group="${group.key}">
                <div class="league-fixture-month-title">${group.label}</div>
                <div class="league-fixture-list">${rows}</div>
            </div>
        `;
    }).join("");

    return `
        <section class="league-side-card league-calendar-card">
            <div class="league-side-head league-calendar-head">
                <strong>Calendário</strong>
                ${renderLeagueCalendarRoundSelect(league, groups)}
            </div>
            <div class="league-calendar-scroll">${monthBlocks}</div>
        </section>
    `;
}

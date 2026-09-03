function renderLeagueLowerPanel(league) {
    let content = [
        renderLeagueLiveCards(league),
        renderLeagueLowerTabs(league),
        renderLeagueAwards(league),
        renderLeagueTeamOfYear(league),
        renderLeagueCalendar(league)
    ].filter(Boolean).join("");

    if (!content) return "";

    return `
        <div class="league-lower-grid">
            ${content}
        </div>
    `;
}

function refreshLeagueLowerPanel(leagueId, options = {}) {
    let league = leagues.find((entry) => entry.id === leagueId);
    let panel = document.getElementById("leaguePanel");
    let livePanel = panel?.querySelector(`[data-league-live-panel="${leagueId}"]`);
    if (!league || !panel || !livePanel) {
        renderLeague(leagueId);
        return;
    }

    livePanel.outerHTML = renderLeagueLiveCards(league);
    if (options.restartAuto) scheduleLeagueLiveAutoAdvance(league);
}

function renderLeagueSideStats(league) {
    if (!league.sideStats?.length) return "";

    let panels = league.sideStats.map((stat, index) => {
        let rows = stat.rows.map((row) => {
            let teamEntry = getLeagueTeamEntry(league, row.team);
            let metric = index === 0 ? row.xgm : row.gls;
            let extra = index === 0 ? row.gls : row.perGame;

            return `
                <div class="side-stat-row">
                    <span class="side-stat-pos">${row.pos}</span>
                    <span class="side-stat-team" title="${row.team}">
                        ${teamEntry?.logo ? `<img src="${teamEntry.logo}" alt="${row.team}" class="side-stat-logo" loading="lazy">` : ""}
                        <span>${row.team}</span>
                    </span>
                    <strong>${metric}</strong>
                    <span>${row.jgs}</span>
                    <span>${extra}</span>
                    <span>${row.leaguePos}</span>
                </div>
            `;
        }).join("");

        return `
            <article class="side-stat-table ${index === 0 ? "active" : ""}" data-side-stat-panel="${index}" data-side-stat-title="${stat.title}">
                <div class="side-stat-head">
                    ${stat.columns.map((column) => `<span title="${column}">${column}</span>`).join("")}
                </div>
                <div class="side-stat-body">${rows}</div>
            </article>
        `;
    }).join("");

    return `
        <section class="league-side-stats">
            <div class="side-stats-head">
                <h3 class="side-stats-title">Estatísticas da Liga</h3>
                <div class="side-stat-controls" aria-label="Escolher estatística">
                    <button class="side-stat-arrow" type="button" data-side-stat-direction="-1" aria-label="Estatística anterior">‹</button>
                    <span class="side-stat-current" title="${league.sideStats[0].title}">${league.sideStats[0].title}</span>
                    <button class="side-stat-arrow" type="button" data-side-stat-direction="1" aria-label="Estatística seguinte">›</button>
                </div>
            </div>
            ${panels}
        </section>
    `;
}

function setupLeagueSideStats(scope = document) {
    scope.querySelectorAll(".league-side-stats").forEach((container) => {
        let panels = [...container.querySelectorAll(".side-stat-table")];
        let label = container.querySelector(".side-stat-current");
        let currentIndex = panels.findIndex((panel) => panel.classList.contains("active"));
        if (currentIndex < 0) currentIndex = 0;

        let setActivePanel = (index) => {
            currentIndex = (index + panels.length) % panels.length;
            panels.forEach((panel, panelIndex) => {
                let active = panelIndex === currentIndex;
                panel.classList.toggle("active", active);
                if (active && label) {
                    label.textContent = panel.dataset.sideStatTitle || "";
                    label.title = panel.dataset.sideStatTitle || "";
                }
            });
        };

        panels.forEach((panel, index) => {
            if (index === currentIndex && label) {
                label.textContent = panel.dataset.sideStatTitle || "";
                label.title = panel.dataset.sideStatTitle || "";
            }
        });

        container.querySelectorAll(".side-stat-arrow").forEach((button) => {
            button.addEventListener("click", () => {
                setActivePanel(currentIndex + Number(button.dataset.sideStatDirection || 1));
            });
        });
    });
}

function renderLeague(leagueId) {
    let league = leagues.find((l) => l.id === leagueId);
    let panel = document.getElementById("leaguePanel");
    let isLive = league.status === "live";
    // Uma liga concluída com cobertura completa dos jogos (a Croácia tem fixtures
    // e relatórios da época toda) mantém a coluna Form e os totais V/E/D
    // clicáveis; uma sem isso (a Escócia) fica com números simples.
    let hasMatchRecords = league.tabela.some((entry) => entry.resultGroups || entry.formDetails?.length);
    let showForm = isLive || hasMatchRecords;
    let transferScrollTop = panel.querySelector(".league-transfers-scroll")?.scrollTop || 0;
    let calendarScrollTop = panel.querySelector(".league-calendar-scroll")?.scrollTop || 0;

    let rows = "";
    league.tabela.forEach((entry) => {
        let playerMarkup = entry.jogador
            ? `<div class="standings-player-cell" data-col="4"><div class="standings-player">${getCoachLinkMarkup(entry.jogador, "standings-player-link")}</div></div>`
            : `<div class="standings-player-cell" data-col="4"><div class="standings-player empty">PC</div></div>`;
        let emgMarkup = entry.emgPontos === null
            ? `<div class="standings-points-cell" data-col="14"><div class="standings-points neutral">--</div></div>`
            : `<div class="standings-points-cell" data-col="14"><div class="standings-points ${getPointsClass(entry.emgPontos)}">${formatPoints(entry.emgPontos)}</div></div>`;
        let formMarkup = showForm
            ? `<div class="standings-form-cell" data-col="15">${renderFormDots(entry.form, entry.formDetails)}</div>`
            : "";
        let infState = entry.inf === "↑" ? "up" : entry.inf === "↓" ? "down" : "";

        rows += `
            <div class="standings-row ${showForm ? "has-form" : ""} ${entry.zone ? `zone-${entry.zone}` : ""}">
                <div class="standings-cell-center standings-pos" data-col="1">${entry.pos}</div>
                <div class="standings-cell-center standings-inf ${infState}" data-col="2">${entry.inf}</div>
                <div class="standings-team" data-col="3">
                    <img class="standings-team-logo" src="${entry.logo}" alt="${entry.equipa}">
                    <div class="standings-team-stack">
                        <span class="standings-team-name">${entry.equipa}</span>
                        <span class="standings-team-sub">Classificação Final</span>
                    </div>
                </div>
                ${playerMarkup}
                <div class="standings-cell-center" data-col="5">${entry.j}</div>
                ${showForm ? renderResultRecordCell(entry, "V", entry.v, 6) : `<div class="standings-cell-center" data-col="6">${entry.v}</div>`}
                ${showForm ? renderResultRecordCell(entry, "E", entry.e, 7) : `<div class="standings-cell-center" data-col="7">${entry.e}</div>`}
                ${showForm ? renderResultRecordCell(entry, "D", entry.d, 8) : `<div class="standings-cell-center" data-col="8">${entry.d}</div>`}
                <div class="standings-cell-center" data-col="9">${entry.gm}</div>
                <div class="standings-cell-center" data-col="10">${entry.gs}</div>
                <div class="standings-cell-center" data-col="11">${entry.dg}</div>
                <div class="standings-cell-center" data-col="12">${entry.pts}</div>
                <div class="standings-cell-center" data-col="13">${entry.prevista}</div>
                ${emgMarkup}
                ${formMarkup}
            </div>
        `;
    });

    let bonuses = calcBonuses(league);
    let bonusRows = bonuses.map((b) => `
        <div class="bonus-row">
            <div class="bonus-player">${getCoachLinkMarkup(b.jogador, "bonus-player-link")}</div>
            <div class="bonus-tipo">${b.tipo}</div>
            <div class="bonus-pontos ${getPointsClass(b.pontos)}">${formatPoints(b.pontos)}</div>
        </div>
    `).join("");

    panel.innerHTML = `
        <div class="panel-head">
            <div>
                <h2 class="panel-title">${league.nome}</h2>
                <p class="panel-copy">${league.descricao}</p>
            </div>
        </div>
        <div class="league-toolbar">
            <div class="league-chip">
                <img class="league-chip-logo" src="${league.logo}" alt="${league.logoAlt}">
            </div>
            ${league.statusLabel ? `<div class="league-chip league-status-chip ${league.status === "live" ? "live" : "completed"}">${league.statusLabel}</div>` : ""}
            <div class="league-chip muted">${league.epoca}</div>
            <div class="league-chip muted">Fórmula: ${league.formula}</div>
            ${isLive ? `
                <div class="league-live-tip">
                    <button class="info-tip league-info-tip" type="button" aria-label="Explicação da liga em curso">
                        <span class="info-tip-icon">i</span>
                    </button>
                    <div class="league-live-popover">
                        <div class="formula-section">
                            <div class="formula-heading">Liga em curso</div>
                            <div class="formula-line">A classificação da Croácia é atualizada por sessão.</div>
                            <div class="formula-line">A coluna <strong>Form</strong> mostra os últimos 5 jogos: V, E ou D.</div>
                            <div class="formula-line">A coluna <strong>EMG</strong> é uma projeção: a fórmula aplicada à posição de hoje.</div>
                            <div class="formula-line">Na Classificação Geral a projeção leva também os bónus de posição.</div>
                        </div>
                        <div class="formula-section">
                            <div class="formula-heading">Bónus</div>
                            <div class="formula-list">
                                <div>Campeão da Liga: <strong>+10</strong></div>
                                <div>Melhor humano (não acumula se for campeão): <strong>+5</strong></div>
                                <div>Vencedores de Taças: <strong>+5</strong></div>
                                <div>Finalistas de Taças: <strong>+2</strong></div>
                                <div>Vencedor de competição Europeia: <strong>+3</strong></div>
                            </div>
                        </div>
                        <div class="formula-section">
                            <div class="formula-heading">Penalizações</div>
                            <div class="formula-list">
                                <div>Último classificado: <strong>-5</strong></div>
                                <div>Pior humano (não acumula se for último): <strong>-2</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            ` : ""}
            ${renderLeagueRaceTrigger(league)}
            ${renderLeagueXiTrigger(league)}
        </div>
        <div class="league-season-layout ${isLive ? "live" : ""}">
            <div class="league-main-column">
                <div class="league-table-wrap">
                    <div class="standings-standings">
                        <div class="standings-row header ${showForm ? "has-form" : ""}">
                            <div data-col="1">Pos</div>
                            <div data-col="2">Inf</div>
                            <div data-col="3">Equipa</div>
                            <div data-col="4">Jogador</div>
                            <div data-col="5">J</div>
                            <div data-col="6">V</div>
                            <div data-col="7">E</div>
                            <div data-col="8">D</div>
                            <div data-col="9">GM</div>
                            <div data-col="10">GS</div>
                            <div data-col="11">DG</div>
                            <div data-col="12">Pts</div>
                            <div data-col="13">Prev.</div>
                            <div data-col="14">EMG</div>
                            ${showForm ? `<div data-col="15">Form</div>` : ""}
                        </div>
                        ${rows}
                    </div>
                </div>
            </div>
            ${isLive ? "" : `<aside class="league-bonuses-column">
                <div class="bonuses-section">
                    <h3 class="bonuses-title">Bónus e Penalizações</h3>
                    <div class="bonuses-list">
                        <div class="bonus-row header">
                            <div>Jogador</div>
                            <div>Motivo</div>
                            <div>Pontos</div>
                        </div>
                        ${bonusRows}
                    </div>
                </div>
                ${renderLeagueSideStats(league)}
            </aside>`}
        </div>
        ${renderLeagueLowerPanel(league)}
    `;

    setupLeagueSideStats(panel);
    setupStandingsColumnHover(panel);
    setupStandingsFloatingTooltips(panel);
    setupLeagueScorerTooltips(panel);
    let transferScroll = panel.querySelector(".league-transfers-scroll");
    if (transferScroll) transferScroll.scrollTop = transferScrollTop;
    let calendarScroll = panel.querySelector(".league-calendar-scroll");
    if (calendarScroll) calendarScroll.scrollTop = calendarScrollTop;
    scheduleLeagueLiveAutoAdvance(league);
    bindCoachLinks(panel);
}

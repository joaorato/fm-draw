// Numa liga em curso isto é uma projeção: a mesma conta, feita sobre a
// classificação de hoje em vez da final.
function calcBonuses(league) {
    return [...calcCupBonuses(league.tacas), ...calcPositionBonuses(league.tabela)];
}

// De onde vêm os pontos de cada jogador, liga a liga: a linha da posição e uma
// linha por bónus. Os totais das colunas são a soma disto, para que o que a
// tooltip mostra e o que a tabela conta não possam divergir.
function buildLeagueBreakdown(filtro) {
    let breakdown = {};

    let addLinha = (jogador, league, label, pontos) => {
        if (!jogador) return;
        if (!breakdown[jogador]) breakdown[jogador] = [];
        let grupo = breakdown[jogador].find((entry) => entry.liga === league.nome);
        if (!grupo) {
            // Na tooltip do total aparecem as duas ligas: a marca diz qual delas ainda pode mudar.
            grupo = { liga: league.nome, projecao: league.status !== "completed", linhas: [] };
            breakdown[jogador].push(grupo);
        }
        grupo.linhas.push({ label, pontos });
    };

    leagues.filter(filtro).forEach((league) => {
        league.scores.forEach((score) => {
            addLinha(score.jogador, league, `${score.equipa} · ${score.prevista}.º → ${score.final}.º`, score.pontos);
        });
        calcBonuses(league).forEach((bonus) => addLinha(bonus.jogador, league, bonus.tipo, bonus.pontos));
    });

    return breakdown;
}

function sumBreakdown(grupos) {
    return (grupos || []).reduce((total, grupo) => total + grupo.linhas.reduce((soma, linha) => soma + linha.pontos, 0), 0);
}

function rankPlayers(entries, campo, campoPos) {
    return [...entries]
        .sort((a, b) => b[campo] - a[campo] || a.jogador.localeCompare(b.jogador))
        .map((entry, index) => ({ ...entry, [campoPos]: index + 1 }));
}

// Duas leituras da mesma tabela: só o que está fechado, e o mesmo mais a época
// em curso projectada. A seta de cada jogador é a diferença entre as duas.
const generalStandings = (() => {
    let concluidas = buildLeagueBreakdown((league) => league.status === "completed");
    let projecao = buildLeagueBreakdown((league) => league.status !== "completed");

    let entries = [...new Set([...Object.keys(concluidas), ...Object.keys(projecao)])].map((jogador) => ({
        jogador,
        concluidas: sumBreakdown(concluidas[jogador]),
        projecao: sumBreakdown(projecao[jogador]),
        total: sumBreakdown(concluidas[jogador]) + sumBreakdown(projecao[jogador]),
        detalheConcluidas: concluidas[jogador] || [],
        detalheProjecao: projecao[jogador] || []
    }));

    let porConcluidas = new Map(rankPlayers(entries, "concluidas", "posConcluidas").map((entry) => [entry.jogador, entry.posConcluidas]));

    return rankPlayers(entries, "total", "posTotal").map((entry) => ({
        ...entry,
        posConcluidas: porConcluidas.get(entry.jogador),
        inf: porConcluidas.get(entry.jogador) - entry.posTotal
    }));
})();

const hasLiveLeague = leagues.some((league) => league.status !== "completed");
let generalScoreMode = hasLiveLeague ? "projecao" : "concluidas";

function setupFormulaPopover() {
    let button = document.getElementById("formulaTipBtn");
    let popover = document.getElementById("formulaPopover");

    if (!button || !popover || button.dataset.bound === "true") return;

    function closePopover() {
        popover.hidden = true;
        button.setAttribute("aria-expanded", "false");
    }

    button.addEventListener("click", (event) => {
        event.stopPropagation();
        let willOpen = popover.hidden;
        popover.hidden = !willOpen;
        button.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    document.addEventListener("click", (event) => {
        if (popover.hidden) return;
        if (!popover.contains(event.target) && !button.contains(event.target)) {
            closePopover();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closePopover();
        }
    });

    button.dataset.bound = "true";
}

function setupStandingsColumnHover(scope = document) {
    let standings = scope.querySelector(".standings-standings");
    if (!standings || standings.dataset.hoverBound === "true") return;

    let cells = standings.querySelectorAll("[data-col]");
    let activeCol = null;

    function setActiveColumn(col) {
        if (activeCol === col) return;
        activeCol = col;
        cells.forEach((cell) => {
            cell.classList.toggle("column-hover", cell.dataset.col === col);
        });
    }

    function clearActiveColumn() {
        activeCol = null;
        cells.forEach((cell) => cell.classList.remove("column-hover"));
    }

    standings.addEventListener("pointermove", (event) => {
        let cell = event.target.closest("[data-col]");
        if (!cell || !standings.contains(cell)) {
            clearActiveColumn();
            return;
        }

        setActiveColumn(cell.dataset.col);
    });

    standings.addEventListener("pointerleave", clearActiveColumn);
    standings.addEventListener("focusin", (event) => {
        let cell = event.target.closest("[data-col]");
        if (cell && standings.contains(cell)) {
            setActiveColumn(cell.dataset.col);
        }
    });
    standings.addEventListener("focusout", (event) => {
        if (!standings.contains(event.relatedTarget)) clearActiveColumn();
    });

    standings.dataset.hoverBound = "true";
}

let activeStandingsTooltip = null;
let activeStandingsTooltipAnchor = null;

function removeStandingsTooltip() {
    if (activeStandingsTooltip) {
        activeStandingsTooltip.remove();
        activeStandingsTooltip = null;
    }
    activeStandingsTooltipAnchor = null;
}

function positionStandingsTooltip() {
    if (!activeStandingsTooltip || !activeStandingsTooltipAnchor) return;

    let anchorRect = activeStandingsTooltipAnchor.getBoundingClientRect();
    let tooltipRect = activeStandingsTooltip.getBoundingClientRect();
    let gap = activeStandingsTooltip.classList.contains("standings-record-tooltip") ? 14 : 12;
    let preferBelow = activeStandingsTooltip.classList.contains("standings-record-tooltip");
    let left = anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2;
    let top = preferBelow ? anchorRect.bottom + gap : anchorRect.top - tooltipRect.height - gap;

    if (top < 12) top = anchorRect.bottom + gap;
    if (top + tooltipRect.height > window.innerHeight - 12) {
        top = Math.max(12, anchorRect.top - tooltipRect.height - gap);
    }

    left = Math.max(12, Math.min(left, window.innerWidth - tooltipRect.width - 12));
    activeStandingsTooltip.style.left = `${left}px`;
    activeStandingsTooltip.style.top = `${top}px`;
}

function showStandingsTooltip(anchor) {
    let template = anchor?.querySelector(":scope > .standings-tooltip-template");
    if (!template?.content?.firstElementChild) return;

    removeStandingsTooltip();
    activeStandingsTooltipAnchor = anchor;
    activeStandingsTooltip = template.content.firstElementChild.cloneNode(true);
    activeStandingsTooltip.classList.add("is-floating");
    document.body.appendChild(activeStandingsTooltip);
    positionStandingsTooltip();
    requestAnimationFrame(() => activeStandingsTooltip?.classList.add("is-visible"));
}

// Delegação no contentor, por isso é ligada uma vez e sobrevive a cada re-render
// do conteúdo lá dentro.
function bindFloatingTooltips(root, anchorSelector) {
    if (!root || root.dataset.tooltipBound === "true") return;

    let getAnchor = (target) => target.closest(anchorSelector);

    root.addEventListener("pointerover", (event) => {
        let anchor = getAnchor(event.target);
        if (!anchor || !root.contains(anchor) || anchor === activeStandingsTooltipAnchor) return;
        showStandingsTooltip(anchor);
    });

    root.addEventListener("pointerout", (event) => {
        let anchor = getAnchor(event.target);
        if (!anchor || !root.contains(anchor)) return;
        if (event.relatedTarget && anchor.contains(event.relatedTarget)) return;
        removeStandingsTooltip();
    });

    root.addEventListener("focusin", (event) => {
        let anchor = getAnchor(event.target);
        if (anchor && root.contains(anchor)) showStandingsTooltip(anchor);
    });

    root.addEventListener("focusout", (event) => {
        let anchor = getAnchor(event.target);
        if (!anchor || !root.contains(anchor)) return;
        removeStandingsTooltip();
    });

    window.addEventListener("scroll", positionStandingsTooltip, true);
    window.addEventListener("resize", positionStandingsTooltip);
    root.dataset.tooltipBound = "true";
}

function setupStandingsFloatingTooltips(scope = document) {
    bindFloatingTooltips(scope.querySelector(".standings-standings"), ".standings-form-dot[tabindex], .standings-record-cell.has-tooltip");
}

function formatGeneralInf(inf) {
    if (inf > 0) return { simbolo: `▲${inf}`, estado: "up" };
    if (inf < 0) return { simbolo: `▼${-inf}`, estado: "down" };
    return { simbolo: "--", estado: "" };
}

function renderScoreBreakdownTooltip(grupos, rotulo, total) {
    if (!grupos.length) return "";

    let secoes = grupos.map((grupo) => `
        <span class="score-breakdown-liga">
            ${escapeAttribute(grupo.liga)}
            ${grupo.projecao ? `<em>projeção</em>` : ""}
        </span>
        <span class="score-breakdown-list">
            ${grupo.linhas.map((linha) => `
                <span class="score-breakdown-item">
                    <span class="score-breakdown-label">${escapeAttribute(linha.label)}</span>
                    <span class="score-breakdown-points ${getPointsClass(linha.pontos)}">${formatPoints(linha.pontos)}</span>
                </span>
            `).join("")}
        </span>
    `).join("");

    return `
        <template class="standings-tooltip-template">
            <span class="score-breakdown-tooltip" role="tooltip">
                ${secoes}
                <span class="score-breakdown-item total">
                    <span class="score-breakdown-label">${escapeAttribute(rotulo)}</span>
                    <span class="score-breakdown-points ${getPointsClass(total)}">${formatPoints(total)}</span>
                </span>
            </span>
        </template>
    `;
}

function renderGeneralPointsCell(grupos, rotulo, total, extraClasses = "") {
    let tooltip = renderScoreBreakdownTooltip(grupos, rotulo, total);
    let interactive = tooltip ? ` tabindex="0" aria-label="${escapeAttribute(`${rotulo}: ${formatPoints(total)}. Ver de onde vêm os pontos.`)}"` : "";

    return `
        <div class="score-points ${extraClasses} ${getPointsClass(total)} ${tooltip ? "has-tooltip" : ""}"${interactive}>
            <span class="score-mobile-label">${escapeAttribute(rotulo)}</span>
            <span>${formatPoints(total)}</span>
            ${tooltip}
        </div>
    `;
}

function renderGeneralTable() {
    let scoreTable = document.getElementById("scoreTable");
    let comProjecao = generalScoreMode === "projecao" && hasLiveLeague;

    scoreTable.className = `score-table general ${comProjecao ? "with-projection" : ""}`;
    scoreTable.innerHTML = comProjecao
        ? `
            <div class="score-row header">
                <div>#</div>
                <div>Inf</div>
                <div data-col="4">Jogador</div>
                <div>Concluídas</div>
                <div>Projeção</div>
                <div>Total</div>
            </div>
        `
        : `
            <div class="score-row header">
                <div>#</div>
                <div data-col="4">Jogador</div>
                <div>Pontos</div>
            </div>
        `;

    let ordenados = comProjecao
        ? generalStandings
        : [...generalStandings].sort((a, b) => a.posConcluidas - b.posConcluidas);

    ordenados.forEach((entry) => {
        let row = document.createElement("div");
        row.className = "score-row";
        let jogadorCell = `
            <div class="score-cell">
                <span class="score-mobile-label">Jogador</span>
                <span class="score-player">${getCoachLinkMarkup(entry.jogador, "score-player-link")}</span>
            </div>
        `;

        if (comProjecao) {
            let inf = formatGeneralInf(entry.inf);
            row.innerHTML = `
                <div class="score-rank">${entry.posTotal}</div>
                <div class="score-inf ${inf.estado}" title="Efeito da época em curso na classificação geral">
                    <span class="score-mobile-label">Inf</span>
                    <span class="score-inf-value">${inf.simbolo}</span>
                </div>
                ${jogadorCell}
                ${renderGeneralPointsCell(entry.detalheConcluidas, "Concluídas", entry.concluidas, "muted")}
                ${renderGeneralPointsCell(entry.detalheProjecao, "Projeção", entry.projecao, "projecao")}
                ${renderGeneralPointsCell([...entry.detalheConcluidas, ...entry.detalheProjecao], "Total", entry.total)}
            `;
        } else {
            row.innerHTML = `
                <div class="score-rank">${entry.posConcluidas}</div>
                ${jogadorCell}
                ${renderGeneralPointsCell(entry.detalheConcluidas, "Pontos", entry.concluidas)}
            `;
        }

        scoreTable.appendChild(row);
    });

    bindCoachLinks(scoreTable);
    bindFloatingTooltips(scoreTable, ".score-points.has-tooltip");
}

function syncGeneralScoreModes() {
    let tabs = document.getElementById("scoreModeTabs");
    if (!tabs) return;

    // Sem liga em curso não há nada a projectar: fica só a tabela oficial.
    tabs.hidden = !hasLiveLeague;
    tabs.querySelectorAll(".score-mode-tab").forEach((tab) => {
        let active = tab.dataset.scoreMode === generalScoreMode;
        tab.classList.toggle("active", active);
        tab.setAttribute("aria-pressed", active ? "true" : "false");
    });
}

function setGeneralScoreMode(mode) {
    generalScoreMode = mode;
    syncGeneralScoreModes();
    renderGeneralTable();
}

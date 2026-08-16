// Cartão de separadores do painel inferior: transferências e o quadro de
// marcadores e assistências. A barra de separadores faz de título do cartão.
//
// As tabelas são derivadas dos relatórios de jogo por stats-core.js. Não há
// nada aqui escrito à mão: por sessão escrevem-se os resultados e os relatórios,
// e estas listas seguem atrás.

const LEAGUE_SCORER_ROWS = 10;

let activeLeagueLowerTab = "golos";
let leagueGoalsCache = {};
let leagueTransfersScrollTop = 0;

function getLeagueGoalStats(league) {
    if (!league?.golos) return null;
    if (leagueGoalsCache[league.id]) return leagueGoalsCache[league.id];

    let { records, unresolved, ambiguous } = buildGoalRecords(league, league.golos);
    let mismatches = validateGoalRecords(league, records, league.golos);

    // Se a leitura dos eventos não bater certo com os resultados, diz-se aqui
    // em vez de mostrar uma tabela errada com ar de certa.
    if (unresolved.length || ambiguous.length || mismatches.length) {
        console.warn(`[golos] ${league.id}: ${unresolved.length} por resolver, ${ambiguous.length} ambíguos, ${mismatches.length} jogos em desacordo com o resultado.`);
        unresolved.forEach((item) => console.warn(`[golos] sem leitura: "${item.event}" (${item.team})`));
        ambiguous.forEach((item) => console.warn(`[golos] leitura ambígua: "${item.event}" (${item.team})`));
        mismatches.forEach((item) => console.warn(`[golos] ${item.fixture.home} ${item.placar} ${item.fixture.away}: lidos ${item.lidos}`));
    }

    leagueGoalsCache[league.id] = { records, rankings: buildPlayerRankings(records) };
    return leagueGoalsCache[league.id];
}

function getLeagueLowerTabs(league) {
    let tabs = [];
    if (league.golos) tabs.push({ id: "golos", label: "Golos e Assistências" });
    if (league.transfers?.length) tabs.push({ id: "transferencias", label: "Transferências" });
    return tabs;
}

function getActiveLeagueLowerTab(league) {
    let tabs = getLeagueLowerTabs(league);
    if (!tabs.length) return null;
    return tabs.some((tab) => tab.id === activeLeagueLowerTab) ? activeLeagueLowerTab : tabs[0].id;
}

function setLeagueLowerTab(leagueId, tabId) {
    let league = leagues.find((entry) => entry.id === leagueId);
    let card = document.querySelector(`[data-league-lower-tabs="${leagueId}"]`);

    // A lista de transferências é longa: guarda-se onde ia para a devolver ao
    // mesmo sítio quando se voltar ao separador.
    let scroll = card?.querySelector(".league-transfers-scroll");
    if (scroll) leagueTransfersScrollTop = scroll.scrollTop;

    activeLeagueLowerTab = tabId;

    if (!league || !card) {
        renderLeague(leagueId);
        return;
    }

    card.outerHTML = renderLeagueLowerTabs(league);

    let novo = document.querySelector(`[data-league-lower-tabs="${leagueId}"]`);
    let restored = novo?.querySelector(".league-transfers-scroll");
    if (restored) restored.scrollTop = leagueTransfersScrollTop;
    setupLeagueScorerTooltips(novo || document);
}

// Reaproveita o tooltip flutuante da classificação em vez de montar um segundo.
// Liga-se na grelha, que contém as duas listas: uma só delas deixava a outra sem.
function setupLeagueScorerTooltips(scope = document) {
    bindFloatingTooltips(scope.querySelector(".league-scorers-grid"), ".league-scorer-more");
}

// Quem ficou de fora com o mesmo número do último visível não desaparece sem
// explicação: fica um "+N" na última linha que os mostra ao passar o rato.
function renderLeagueScorerTie(league, tied, unidade) {
    let rotulo = `Mais ${tied.length} com ${tied[0].total} ${unidade}`;
    let linhas = tied.map((row) => {
        let logo = getLeagueTeamLogo(league, row.equipa);
        return `
            <span class="league-scorer-tie-item">
                ${logo
                    ? `<img src="${logo}" alt="${escapeAttribute(row.equipa)}" class="league-scorer-tie-logo" loading="lazy">`
                    : `<span class="league-scorer-tie-logo"></span>`}
                <span class="league-scorer-tie-name">${row.nome}</span>
                <strong>${row.total}</strong>
            </span>
        `;
    }).join("");

    // title="" impede o title da linha de aparecer por cima deste tooltip.
    return `
        <span class="league-scorer-more" tabindex="0" role="button" title="" aria-label="${escapeAttribute(rotulo)}">+${tied.length}
            <template class="standings-tooltip-template">
                <span class="score-breakdown-tooltip league-scorer-tie-tooltip" role="tooltip">
                    <span class="league-scorer-tie-head">${escapeAttribute(rotulo)}</span>
                    ${linhas}
                </span>
            </template>
        </span>
    `;
}

function renderLeagueScorerList(league, titulo, rows, unidade) {
    if (!rows.length) {
        return `
            <div class="league-scorer-list">
                <div class="league-scorer-head">${titulo}</div>
                <div class="league-scorer-empty">Sem registos.</div>
            </div>
        `;
    }

    let visiveis = rows.slice(0, LEAGUE_SCORER_ROWS);
    let ultimo = visiveis[visiveis.length - 1];
    let empatados = rows.slice(LEAGUE_SCORER_ROWS).filter((row) => row.total === ultimo.total);

    let items = visiveis.map((row, index) => {
        let entry = getLeagueTeamEntry(league, row.equipa);
        let logo = getLeagueTeamLogo(league, row.equipa);
        let treinador = entry?.jogador ? ` · ${entry.jogador}` : "";
        let penaltis = row.penaltis ? ` · ${row.penaltis} de penálti` : "";
        let rowTitle = escapeAttribute(`${row.nome} · ${row.equipa}${treinador} · ${row.total} ${unidade}${penaltis}`);
        let extra = index === visiveis.length - 1 && empatados.length
            ? renderLeagueScorerTie(league, empatados, unidade)
            : "";

        return `
            <div class="league-scorer-row" title="${rowTitle}">
                <span class="league-scorer-pos">${index + 1}</span>
                ${logo
                    ? `<img src="${logo}" alt="${escapeAttribute(row.equipa)}" class="league-scorer-logo" loading="lazy">`
                    : `<span class="league-scorer-logo"></span>`}
                <span class="league-scorer-name">
                    <span class="league-scorer-name-text">${row.nome}</span>
                    ${extra}
                </span>
                <strong class="league-scorer-total">${row.total}</strong>
            </div>
        `;
    }).join("");

    return `
        <div class="league-scorer-list">
            <div class="league-scorer-head">${titulo}</div>
            <div class="league-scorer-rows">${items}</div>
        </div>
    `;
}

function renderLeagueScorers(league) {
    let stats = getLeagueGoalStats(league);
    if (!stats) return `<div class="league-scorer-empty">Sem relatórios de jogo nesta liga.</div>`;

    return `
        <div class="league-scorers-grid">
            ${renderLeagueScorerList(league, "Golos", stats.rankings.marcadores, "golos")}
            ${renderLeagueScorerList(league, "Assistências", stats.rankings.assistentes, "assistências")}
        </div>
    `;
}

function renderLeagueLowerTabs(league) {
    let tabs = getLeagueLowerTabs(league);
    if (!tabs.length) return "";

    let active = getActiveLeagueLowerTab(league);
    let strip = tabs.map((tab) => `
        <button class="league-tab ${tab.id === active ? "active" : ""}" type="button"
            onclick="setLeagueLowerTab('${league.id}', '${tab.id}')"
            aria-pressed="${tab.id === active ? "true" : "false"}">${tab.label}</button>
    `).join("");

    let body = active === "golos" ? renderLeagueScorers(league) : renderLeagueTransfers(league);

    return `
        <section class="league-side-card league-transfers-card" data-league-lower-tabs="${league.id}">
            <div class="league-tab-strip" role="group" aria-label="Painéis da liga">${strip}</div>
            ${body}
        </section>
    `;
}

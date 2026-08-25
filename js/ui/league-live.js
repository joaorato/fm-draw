let activeLeagueLivePage = {};
let activeLeagueNewsIndex = {};

let leagueLiveAutoTimer = null;
let pausedLeagueLivePages = new Set();

const LEAGUE_LIVE_AUTO_MS = 7000;

function renderFormTeamForTooltip(name, logo) {
    let logoMarkup = logo ? `<img src="${escapeAttribute(logo)}" alt="${escapeAttribute(name)}">` : "";
    return `
        <span class="standings-form-tooltip-team" title="${escapeAttribute(name)}">
            ${logoMarkup}
            <span>${escapeAttribute(name)}</span>
        </span>
    `;
}

function renderFormTooltip(detail) {
    if (!detail) return "";

    return `
        <template class="standings-tooltip-template">
            <span class="standings-form-tooltip" role="tooltip">
            <span class="standings-form-tooltip-date">${escapeAttribute(detail.date)}</span>
            <span class="standings-form-tooltip-match">
                ${renderFormTeamForTooltip(detail.home, detail.homeLogo)}
                <strong>${escapeAttribute(detail.score)}</strong>
                ${renderFormTeamForTooltip(detail.away, detail.awayLogo)}
            </span>
            </span>
        </template>
    `;
}

function getResultGroupMeta(type) {
    let key = String(type || "").toUpperCase();
    if (key === "V") return { className: "win", label: "Vitórias", singular: "vitória" };
    if (key === "E") return { className: "draw", label: "Empates", singular: "empate" };
    return { className: "loss", label: "Derrotas", singular: "derrota" };
}

function renderResultGroupItem(detail, teamName, meta) {
    let isHome = detail.home === teamName;
    let opponent = isHome ? detail.away : detail.home;
    let opponentLogo = isHome ? detail.awayLogo : detail.homeLogo;
    let logoMarkup = opponentLogo ? `<img src="${escapeAttribute(opponentLogo)}" alt="${escapeAttribute(opponent)}">` : "";

    return `
        <span class="standings-record-tooltip-item">
            <span class="standings-record-score ${meta.className}">
                <i></i>
                ${escapeAttribute(detail.score)}
            </span>
            <span class="standings-record-opponent" title="${escapeAttribute(opponent)}">
                ${logoMarkup}
                <span>${escapeAttribute(opponent)}</span>
            </span>
        </span>
    `;
}

function renderResultGroupTooltip(entry, type) {
    let meta = getResultGroupMeta(type);
    let items = entry.resultGroups?.[type] || [];
    if (!items.length) return "";

    return `
        <template class="standings-tooltip-template">
            <span class="standings-record-tooltip" role="tooltip">
            <span class="standings-record-tooltip-head">
                <span class="standings-record-team">
                    <img src="${escapeAttribute(entry.logo)}" alt="${escapeAttribute(entry.equipa)}">
                    <span>
                        <strong>${escapeAttribute(entry.equipa)}</strong>
                        <small>${items.length} ${items.length === 1 ? meta.singular : meta.label.toLowerCase()}</small>
                    </span>
                </span>
            </span>
            <span class="standings-record-tooltip-list">
                ${items.map((detail) => renderResultGroupItem(detail, entry.equipa, meta)).join("")}
            </span>
            </span>
        </template>
    `;
}

function renderResultRecordCell(entry, type, value, col) {
    let items = entry.resultGroups?.[type] || [];
    let meta = getResultGroupMeta(type);
    let ariaLabel = items.length ? ` aria-label="${escapeAttribute(`${entry.equipa}: ${items.length} ${items.length === 1 ? meta.singular : meta.label.toLowerCase()}`)}"` : "";
    let tabIndex = items.length ? ` tabindex="0"` : "";

    return `
        <div class="standings-cell-center standings-record-cell ${items.length ? "has-tooltip" : ""}" data-col="${col}"${tabIndex}${ariaLabel}>
            ${value}
            ${renderResultGroupTooltip(entry, type)}
        </div>
    `;
}

function renderFormDots(form = [], details = []) {
    let normalized = [...form].slice(-5);
    let normalizedDetails = [...details].slice(-5);
    while (normalized.length < 5) normalized.unshift("-");
    while (normalizedDetails.length < 5) normalizedDetails.unshift(null);

    return `
        <div class="standings-form">
            ${normalized.map((result, index) => {
                let detail = normalizedDetails[index];
                let key = String(detail?.result || result).toUpperCase();
                let label = key === "W" ? "V" : key === "L" ? "D" : key;
                let className = key === "W" || key === "V" ? "win" : key === "E" ? "draw" : key === "L" || key === "D" ? "loss" : "empty";
                let ariaLabel = detail ? ` aria-label="${escapeAttribute(`${label} - ${detail.home} ${detail.score} ${detail.away}, ${detail.date}`)}"` : "";
                let tabIndex = detail ? ` tabindex="0"` : "";
                return `<span class="standings-form-dot ${className}"${tabIndex}${ariaLabel}>${label === "-" ? "" : label}${renderFormTooltip(detail)}</span>`;
            }).join("")}
        </div>
    `;
}

function renderLeagueAwards(league) {
    if (!league.merits?.awards?.length) return "";
    let awards = league.merits.awards.map((award) => `
        <div class="league-award-card">
            <div class="league-award-label">${award.label}</div>
            <div class="league-award-name">${award.name}</div>
            <div class="league-award-meta">${award.team} · ${award.meta}</div>
        </div>
    `).join("");

    return `
        <section class="league-side-card league-awards-card">
            <div class="league-side-head">
                <span>Elite da época</span>
                <strong>Méritos</strong>
            </div>
            <div class="league-awards-grid">${awards}</div>
        </section>
    `;
}

// Pitch partilhado por qualquer painel que mostre um onze sobre um campo:
// hoje o Team of the Year (dados de autor) e a Equipa da Jornada (calculada).
// `rating` é opcional - só aparece quando o chamador o define.
function renderXiPitch(players) {
    let nodes = players.map((player) => `
        <div class="league-toty-player" style="--x: ${player.x}%; --y: ${player.y}%;">
            <div class="league-toty-shirt">${player.number}</div>
            <div class="league-toty-name">${player.name}</div>
            ${player.rating != null ? `<div class="league-toty-rating">${player.rating}</div>` : ""}
            <div class="league-toty-meta">${player.role} · ${player.team}</div>
        </div>
    `).join("");

    return `
        <div class="league-toty-pitch">
            <div class="league-toty-lines" aria-hidden="true">
                <span class="league-toty-halfway"></span>
                <span class="league-toty-centre-circle"></span>
                <span class="league-toty-box league-toty-box-left"></span>
                <span class="league-toty-box league-toty-box-right"></span>
                <span class="league-toty-small-box league-toty-small-box-left"></span>
                <span class="league-toty-small-box league-toty-small-box-right"></span>
            </div>
            ${nodes}
        </div>
    `;
}

function renderLeagueTeamOfYear(league) {
    if (!league.merits?.teamOfYear?.length) return "";

    return `
        <section class="league-side-card league-toty-card">
            <div class="league-side-head">
                <span>Onze ideal</span>
                <strong>Team of the Year</strong>
            </div>
            <div class="league-toty-panel">
                ${renderXiPitch(league.merits.teamOfYear)}
            </div>
        </section>
    `;
}

function getLeagueNewsVisual(article) {
    let image = article.image || "assets/treinadores/painatal/painatal_new.webp";
    let visual = article.visual || {};
    let type = visual.type || (
        image.includes("supersport_hnl") ? "logo" :
        image.includes("hugo_profile3") ? "portrait" :
        "photo"
    );

    let cardPosition = visual.cardPosition || (type === "logo" ? "72% 42%" : type === "portrait" ? "72% 42%" : "50% top");
    let cardSize = visual.cardSize || (type === "logo" ? "min(44%, 300px) auto" : type === "portrait" ? "cover" : "auto 100%");
    let articlePosition = visual.articlePosition || (type === "logo" ? "50% 58px" : type === "portrait" ? "68% 42%" : "60% center");
    let articleSize = visual.articleSize || (type === "logo" ? "min(31%, 300px) auto" : "cover");

    return {
        image,
        type,
        cardClass: [
            type === "logo" ? "is-logo-news" : "",
            type === "portrait" ? "is-portrait-news" : "",
            cardSize === "cover" ? "is-cover-news" : ""
        ].filter(Boolean).join(" "),
        articleClass: [
            type === "logo" ? "is-logo-bg" : "",
            type !== "logo" && articleSize === "cover" ? "is-photo-cover" : "",
            visual.readability === "strong" ? "is-high-contrast-news" : ""
        ].filter(Boolean).join(" "),
        style: [
            `--news-bg: url('${image}')`,
            `--news-card-position: ${cardPosition}`,
            `--news-card-size: ${cardSize}`,
            `--news-article-position: ${articlePosition}`,
            `--news-article-size: ${articleSize}`
        ].join("; ")
    };
}

function renderLeagueLiveCards(league) {
    if (league.livePages?.length) {
        let defaultPage = league.livePages.find((page) => page.id === "noticias") || league.livePages[0];
        let activePage = defaultPage;
        let newsItems = activePage.news || [];
        let activeNewsIndex = Math.min(activeLeagueNewsIndex[league.id] || 0, Math.max(newsItems.length - 1, 0));
        let activeNews = newsItems[activeNewsIndex] || activePage;
        let displayPage = activeNews;
        let visual = getLeagueNewsVisual(displayPage);
        let liveNewsClass = visual.cardClass;
        liveNewsClass = liveNewsClass ? ` ${liveNewsClass}` : "";
        let previewTitle = displayPage.cardTitle || displayPage.title;
        let title = displayPage.highlight
            ? previewTitle.replace(displayPage.highlight, `<span>${displayPage.highlight}</span>`)
            : previewTitle;
        let previewCopy = displayPage.previewCopy ?? displayPage.copy;
        let copyBlocks = Array.isArray(previewCopy) ? previewCopy : [previewCopy].filter(Boolean);
        let copyMarkup = copyBlocks.map((paragraph) => `<p class="league-live-page-copy">${paragraph}</p>`).join("");
        let previewQuote = displayPage.previewQuote ?? displayPage.quote;
        let quoteMarkup = previewQuote
            ? `
                <aside class="league-news-quote">
                    <span>“</span>
                    <p>${previewQuote}</p>
                    ${displayPage.quoteBy ? `<strong>— ${displayPage.quoteBy}</strong>` : ""}
                </aside>
            `
            : "";
        let newsControls = newsItems.length > 1
            ? `
                <div class="league-news-carousel">
                    <button class="league-news-arrow" type="button" onclick="event.stopPropagation(); stepLeagueNews('${league.id}', -1)" aria-label="Notícia anterior">‹</button>
                    <div class="league-news-dots" aria-label="Indicador de notícias">
                        ${newsItems.map((_, index) => `
                            <button
                                class="league-news-dot ${index === activeNewsIndex ? "active" : ""}"
                                type="button"
                                onclick="event.stopPropagation(); selectLeagueNews('${league.id}', ${index})"
                                aria-label="Ver notícia ${index + 1}"
                                aria-pressed="${index === activeNewsIndex ? "true" : "false"}"
                            ></button>
                        `).join("")}
                    </div>
                    <button class="league-news-arrow" type="button" onclick="event.stopPropagation(); stepLeagueNews('${league.id}', 1)" aria-label="Notícia seguinte">›</button>
                </div>
            `
            : "";

        return `
            <section class="league-side-card league-live-panel-card" data-league-live-panel="${league.id}">
                <div class="league-side-head centered">
                    <strong>Notícias</strong>
                </div>
                <article class="league-live-page is-news${liveNewsClass}" style="${visual.style}" data-live-page="noticias" onclick="openLeagueNewsArticle('${league.id}', ${activeNewsIndex})" onkeydown="if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); openLeagueNewsArticle('${league.id}', ${activeNewsIndex}); }" role="button" tabindex="0" aria-label="Abrir notícia completa">
                    <div class="league-live-page-content">
                        <div class="league-live-page-kicker">
                            <span class="league-live-status-dot"></span>
                            <span>${displayPage.eyebrow}</span>
                        </div>
                        <div class="league-live-page-title">${title}</div>
                        ${copyMarkup}
                        <span class="league-news-read-more">${displayPage.readMoreLabel || "Ler artigo completo"}</span>
                    </div>
                    ${quoteMarkup}
                    ${newsControls}
                </article>
            </section>
        `;
    }

    if (!league.liveCards?.length) return "";
    let cards = league.liveCards.map((card) => `
        <div class="league-live-card">
            <div class="league-live-label">${card.label}</div>
            <div class="league-live-value">${card.value}</div>
            <div class="league-live-meta">${card.meta}</div>
        </div>
    `).join("");

    return `
        <section class="league-side-card league-live-panel-card" data-league-live-panel="${league.id}">
            <div class="league-side-head">
                <span>Dashboard vivo</span>
                <strong>Época Atual</strong>
            </div>
            <div class="league-live-grid">${cards}</div>
        </section>
    `;
}

function setLeagueLivePage(leagueId, pageId) {
    pausedLeagueLivePages.delete(leagueId);
    activeLeagueLivePage[leagueId] = pageId;
    refreshLeagueLowerPanel(leagueId, { restartAuto: true });
}

function closeLeagueLiveMenus() {
    document.querySelectorAll(".league-live-select-wrap.open").forEach((menu) => {
        menu.classList.remove("open");
        menu.querySelector(".league-live-select")?.setAttribute("aria-expanded", "false");
    });
}

function toggleLeagueLiveMenu(leagueId) {
    let menu = document.querySelector(`[data-live-menu="${leagueId}"]`)?.closest(".league-live-select-wrap");
    if (!menu) return;

    let willOpen = !menu.classList.contains("open");
    closeLeagueLiveMenus();

    if (willOpen) {
        pausedLeagueLivePages.add(leagueId);
        if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
        menu.classList.add("open");
        menu.querySelector(".league-live-select")?.setAttribute("aria-expanded", "true");
    }
}

function selectLeagueLivePage(leagueId, pageId) {
    closeLeagueLiveMenus();
    setLeagueLivePage(leagueId, pageId);
}

function selectLeagueNews(leagueId, index) {
    let league = leagues.find((entry) => entry.id === leagueId);
    let newsPage = league?.livePages?.find((page) => page.id === "noticias");
    if (!newsPage?.news?.length) return;

    pausedLeagueLivePages.add(leagueId);
    if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
    activeLeagueLivePage[leagueId] = "noticias";
    activeLeagueNewsIndex[leagueId] = Math.max(0, Math.min(index, newsPage.news.length - 1));
    refreshLeagueLowerPanel(leagueId);
}

function stepLeagueNews(leagueId, direction = 1) {
    let league = leagues.find((entry) => entry.id === leagueId);
    let newsPage = league?.livePages?.find((page) => page.id === "noticias");
    if (!newsPage?.news?.length) return;

    let currentIndex = activeLeagueNewsIndex[leagueId] || 0;
    let nextIndex = (currentIndex + Number(direction || 1) + newsPage.news.length) % newsPage.news.length;
    selectLeagueNews(leagueId, nextIndex);
}

function getLeagueNewsArticle(leagueId, index) {
    let league = leagues.find((entry) => entry.id === leagueId);
    let newsPage = league?.livePages?.find((page) => page.id === "noticias");
    if (!newsPage?.news?.length) return null;

    let safeIndex = Math.max(0, Math.min(Number(index) || 0, newsPage.news.length - 1));
    return {
        league,
        article: newsPage.news[safeIndex],
        index: safeIndex,
        total: newsPage.news.length
    };
}

function renderLeagueNewsCopy(copy) {
    let blocks = Array.isArray(copy) ? copy : [copy].filter(Boolean);
    return blocks.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function openLeagueNewsArticle(leagueId, index) {
    let newsData = getLeagueNewsArticle(leagueId, index);
    if (!newsData) return;

    let { article, index: activeIndex, total } = newsData;
    let visual = getLeagueNewsVisual(article);
    let copyBlocks = Array.isArray(article.copy) ? article.copy : [article.copy].filter(Boolean);
    let articleModifiers = [
        visual.articleClass,
        copyBlocks.length > 4 ? "is-long-read" : ""
    ].filter(Boolean).join(" ");
    let articleClass = `league-news-article-dialog${articleModifiers ? ` ${articleModifiers}` : ""}`;
    let articleTitle = article.articleTitle || article.title;
    let title = article.highlight
        ? articleTitle.replace(article.highlight, `<span>${article.highlight}</span>`)
        : articleTitle;
    let introCopyMarkup = renderLeagueNewsCopy(copyBlocks.slice(0, 1));
    let sideCopyMarkup = renderLeagueNewsCopy(copyBlocks.slice(1));
    let quoteMarkup = article.quote
        ? `
            <aside class="league-news-article-quote">
                <span>“</span>
                <p>${article.quote}</p>
                ${article.quoteBy ? `<strong>— ${article.quoteBy}</strong>` : ""}
            </aside>
        `
        : "";
    let sideMarkup = sideCopyMarkup || quoteMarkup
        ? `
            <div class="league-news-article-side">
                ${sideCopyMarkup ? `<div class="league-news-article-side-text">${sideCopyMarkup}</div>` : ""}
                ${quoteMarkup}
            </div>
        `
        : "";
    let articleDots = total > 1
        ? `
            <div class="league-news-article-dots" aria-label="Indicador de notícias">
                ${Array.from({ length: total }, (_, dotIndex) => `
                    <button
                        class="league-news-dot ${dotIndex === activeIndex ? "active" : ""}"
                        type="button"
                        onclick="openLeagueNewsArticle('${leagueId}', ${dotIndex})"
                        aria-label="Ver notícia ${dotIndex + 1}"
                        aria-pressed="${dotIndex === activeIndex ? "true" : "false"}"
                    ></button>
                `).join("")}
            </div>
        `
        : "";
    let articleArrows = total > 1
        ? `
            <div class="league-news-article-carousel">
                <button class="league-news-article-arrow" type="button" onclick="openLeagueNewsArticle('${leagueId}', ${(activeIndex - 1 + total) % total})" aria-label="Notícia anterior">‹</button>
                <button class="league-news-article-arrow" type="button" onclick="openLeagueNewsArticle('${leagueId}', ${(activeIndex + 1) % total})" aria-label="Notícia seguinte">›</button>
            </div>
        `
        : "";

    pausedLeagueLivePages.add(leagueId);
    if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
    activeLeagueLivePage[leagueId] = "noticias";
    activeLeagueNewsIndex[leagueId] = activeIndex;

    let existingModal = document.getElementById("leagueNewsArticleModal");
    if (existingModal) closeOverlay(existingModal);

    let modal = document.createElement("div");
    modal.id = "leagueNewsArticleModal";
    modal.className = "league-news-article-modal";
    modal.innerHTML = `
        <div class="league-news-article-backdrop" onclick="closeLeagueNewsArticle()"></div>
        <article class="${articleClass}" style="${visual.style}">
            <button class="league-news-article-close" type="button" onclick="closeLeagueNewsArticle()" aria-label="Fechar notícia">×</button>
            <section class="league-news-article-body">
                <div class="league-news-article-copy">
                    <div class="league-live-page-kicker">
                        <span class="league-live-status-dot"></span>
                        <span>${article.eyebrow || "Sala de imprensa"}</span>
                    </div>
                    <h2 class="league-news-article-title">${title}</h2>
                    <div class="league-news-article-divider"></div>
                    <div class="league-news-article-text">
                        ${introCopyMarkup}
                    </div>
                </div>
                ${sideMarkup}
            </section>
            ${articleDots}
        </article>
        ${articleArrows}
    `;

    document.body.appendChild(modal);
    openOverlay(modal, { onEscape: closeLeagueNewsArticle });
}

function closeLeagueNewsArticle() {
    let modal = document.getElementById("leagueNewsArticleModal");
    if (!modal) return;
    closeOverlay(modal);
}

function stepLeagueLivePage(leagueId, direction = 1) {
    let league = leagues.find((entry) => entry.id === leagueId);
    if (!league?.livePages?.length) return;

    let currentPageId = activeLeagueLivePage[league.id] || league.livePages[0].id;
    let currentIndex = league.livePages.findIndex((page) => page.id === currentPageId);
    let nextIndex = (currentIndex + Number(direction || 1) + league.livePages.length) % league.livePages.length;
    pausedLeagueLivePages.delete(league.id);
    activeLeagueLivePage[league.id] = league.livePages[nextIndex].id;
    renderLeague(league.id);
}

function pauseLeagueLiveCarousel(leagueId) {
    pausedLeagueLivePages.add(leagueId);
    if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
}

document.addEventListener("click", (event) => {
    if (!event.target.closest(".league-live-select-wrap")) {
        closeLeagueLiveMenus();
    }
    if (!event.target.closest(".league-main-select-wrap")) {
        closeMainLeagueMenu();
    }
});

function scheduleLeagueLiveAutoAdvance(league) {
    if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
    let newsPage = league.livePages?.find((page) => page.id === "noticias");
    if (!newsPage?.news || newsPage.news.length < 2) return;
    if (pausedLeagueLivePages.has(league.id)) return;

    leagueLiveAutoTimer = setTimeout(() => {
        if (document.hidden) {
            scheduleLeagueLiveAutoAdvance(league);
            return;
        }
        if (pausedLeagueLivePages.has(league.id)) return;

        let currentIndex = activeLeagueNewsIndex[league.id] || 0;
        activeLeagueLivePage[league.id] = "noticias";
        activeLeagueNewsIndex[league.id] = (currentIndex + 1 + newsPage.news.length) % newsPage.news.length;
        refreshLeagueLowerPanel(league.id, { restartAuto: true });
    }, LEAGUE_LIVE_AUTO_MS);
}

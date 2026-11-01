// Conquistas no perfil do treinador: a grelha de treze emblemas por baixo da
// Identidade e o painel de detalhe do que estiver aberto.
//
// As contagens vêm de js/data/coach-achievements.js e são globais. A seleção
// de edição do perfil (coachStatsScope) não muda o tier: só acrescenta quanto
// essa edição deu e filtra a lista de provas.

let activeCoachAchievement = null;

function getAchievementIcon(id, tierId) {
    return `assets/achievements/${id}/${tierId}.webp`;
}

// Antes da Madeira mostra-se o ícone da Madeira apagado, para se ver o que há
// por ganhar.
function renderAchievementIcon(achievement, className) {
    let { definition, tier } = achievement;
    let tierId = tier?.id || achievementTiers[0].id;
    return `<img src="${getAchievementIcon(definition.id, tierId)}" alt="" class="${className}${tier ? "" : " is-locked"}" loading="lazy">`;
}

function formatAchievementCount(achievement) {
    return achievement.proximo === null
        ? `${achievement.total}`
        : `${achievement.total} / ${achievement.proximo}`;
}

function getAchievementScopeLabel(editionId) {
    return emgEditions.find((edition) => edition.id === editionId)?.nome || editionId.toUpperCase();
}

function renderAchievementTile(achievement, editionId) {
    let { definition, tier, porEdicao } = achievement;
    let ativo = activeCoachAchievement === definition.id;
    let daEdicao = editionId !== "all" ? porEdicao[editionId] || 0 : null;
    let largura = Math.round(achievement.progresso * 100);

    return `
        <button type="button" class="coach-achievement-tile${ativo ? " is-active" : ""}${tier ? "" : " is-locked"}"
            data-tier="${tier?.id || "nenhum"}" aria-pressed="${ativo}"
            onclick="toggleCoachAchievement('${definition.id}')">
            ${renderAchievementIcon(achievement, "coach-achievement-icon")}
            <span class="coach-achievement-name">${definition.nome}</span>
            <span class="coach-achievement-tier">${tier ? tier.nome : "Por desbloquear"}</span>
            <span class="coach-achievement-bar" aria-hidden="true"><span style="width: ${largura}%"></span></span>
            <span class="coach-achievement-count">${formatAchievementCount(achievement)}</span>
            ${daEdicao !== null ? `<span class="coach-achievement-edition">+${daEdicao} em ${getAchievementScopeLabel(editionId)}</span>` : ""}
        </button>
    `;
}

function renderAchievementLadder(achievement) {
    let { definition, nivel } = achievement;
    return `
        <ol class="coach-achievement-ladder">
            ${achievementTiers.map((tier, index) => `
                <li class="${index <= nivel ? "is-reached" : ""}${index === nivel ? " is-current" : ""}" title="${tier.nome}: ${definition.limites[index]}">
                    <img src="${getAchievementIcon(definition.id, tier.id)}" alt="${tier.nome}" loading="lazy">
                    <span>${definition.limites[index]}</span>
                </li>
            `).join("")}
        </ol>
    `;
}

// Uma linha por prova: o jogo (que abre o relatório quando o há), a jornada do
// Team of the Week ou o prémio.
function renderAchievementProof(prova) {
    let { league, fixture, quantidade, detalhe } = prova;
    let competicao = coachCompetitionNames[league.id] || league.nome;
    let vezes = quantidade > 1 ? `<span class="coach-achievement-proof-amount">×${quantidade}</span>` : "";
    let nota = detalhe ? `<small>${escapeAttribute(detalhe)}</small>` : "";

    if (fixture) {
        let jogo = `${escapeAttribute(fixture.home)} <strong>${escapeAttribute(getFixtureScoreLabel(fixture))}</strong> ${escapeAttribute(fixture.away)}`;
        let meta = `${competicao} · ${escapeAttribute(fixture.date || "")} · ${escapeAttribute(fixture.competition || "")}`;
        let corpo = `<span class="coach-achievement-proof-main">${jogo}${vezes}</span><span class="coach-achievement-proof-meta">${meta}</span>${nota}`;
        return fixture.report
            ? `<li><button type="button" class="coach-achievement-proof is-clickable" onclick="openMatchReport('${fixture.report.id}')" title="Ver relatório">${corpo}</button></li>`
            : `<li><div class="coach-achievement-proof">${corpo}</div></li>`;
    }

    let titulo = prova.award
        ? `${escapeAttribute(prova.award)} · ${escapeAttribute(detalhe)}`
        : `Jornada ${escapeAttribute(String(prova.round))}${vezes}`;
    let meta = prova.award ? `${competicao} · ${escapeAttribute(prova.equipa)}` : competicao;
    return `<li><div class="coach-achievement-proof"><span class="coach-achievement-proof-main">${titulo}</span><span class="coach-achievement-proof-meta">${meta}</span>${prova.award ? "" : nota}</div></li>`;
}

function renderAchievementDetail(achievement, editionId) {
    let { definition, tier, porEdicao } = achievement;
    let provas = achievement.provas.filter((prova) => editionId === "all" || prova.league.editionId === editionId);
    let edicoes = Object.entries(porEdicao)
        .map(([id, valor]) => `${getAchievementScopeLabel(id)}: ${valor}`).join(" · ");

    return `
        <article class="coach-achievement-detail" data-tier="${tier?.id || "nenhum"}">
            <header class="coach-achievement-detail-head">
                ${renderAchievementIcon(achievement, "coach-achievement-detail-icon")}
                <div>
                    <span class="coach-identity-label">Conquista</span>
                    <h5>${definition.nome}</h5>
                    <p>${definition.descricao}</p>
                    ${edicoes ? `<small>${edicoes}</small>` : ""}
                </div>
                <button type="button" class="coach-achievement-close" onclick="toggleCoachAchievement('${definition.id}')" aria-label="Fechar detalhe">&times;</button>
            </header>
            ${renderAchievementLadder(achievement)}
            <div class="coach-achievement-proofs">
                <span class="coach-identity-label">${editionId === "all" ? "De onde vem" : `De onde vem · ${getAchievementScopeLabel(editionId)}`}</span>
                ${provas.length
                    ? `<ul>${provas.map(renderAchievementProof).join("")}</ul>`
                    : `<p class="coach-achievement-empty">Nada a contar${editionId === "all" ? "" : " nesta edição"}.</p>`}
            </div>
        </article>
    `;
}

function renderCoachAchievementsMarkup(coach) {
    let editionId = coachStatsScope;
    let achievements = buildCoachAchievements(coach);
    if (!achievements.length) return "";

    let ativa = achievements.find((achievement) => achievement.definition.id === activeCoachAchievement);

    return `
        <section class="coach-stats-section coach-achievements-section" data-coach-achievements="${coach.id}">
            <h4 class="coach-stats-section-title">Conquistas</h4>
            <div class="coach-achievements-grid">
                ${achievements.map((achievement) => renderAchievementTile(achievement, editionId)).join("")}
            </div>
            ${ativa ? renderAchievementDetail(ativa, editionId) : ""}
        </section>
    `;
}

function toggleCoachAchievement(id) {
    activeCoachAchievement = activeCoachAchievement === id ? null : id;
    let section = document.querySelector("[data-coach-achievements]");
    let coach = getCoachById(selectedCoachId);
    if (!section || !coach) return;
    section.outerHTML = renderCoachAchievementsMarkup(coach);
    if (activeCoachAchievement) {
        document.querySelector(".coach-achievement-detail")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

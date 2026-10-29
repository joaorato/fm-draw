const coachByShortName = Object.fromEntries(coachProfiles.map((coach) => [coach.nome, coach]));
let selectedCoachId = coachProfiles[0].id;
let coachStatsScope = "all";

function getCoachMarkup(coach) {
    let initials = coach.nome.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    let mediaAssets = resolveCoachMedia(coach);
    let media = mediaAssets.cardPhoto
        ? `
            <div class="coach-card-gallery">
                <img src="${mediaAssets.cardPhoto}" alt="${coach.nome}" class="coach-card-photo coach-card-photo-main" draggable="false">
            </div>
        `
        : `<div class="coach-card-placeholder">${initials}</div>`;

    return `
        <div class="coach-card-glow"></div>
        <div class="coach-card-media">${media}</div>
        <div class="coach-card-content">
            <div class="coach-card-name">${coach.nome}</div>
        </div>
    `;
}

function syncCoachCards() {
    let rail = document.getElementById("coachesRail");
    if (!rail) return;
    rail.querySelectorAll(".coach-card").forEach((card) => {
        let selected = card.dataset.coachId === selectedCoachId;
        card.classList.toggle("active", selected);
        card.setAttribute("aria-pressed", selected ? "true" : "false");
    });
}

function selectCoach(id, shouldCenter = true) {
    selectedCoachId = id;
    syncCoachCards();

    if (!shouldCenter) return;
    let rail = document.getElementById("coachesRail");
    let activeCard = rail ? rail.querySelector(`.coach-card[data-coach-id="${id}"]`) : null;
    if (rail && activeCard) {
        activeCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
}

function getCoachById(id) {
    return coachProfiles.find((entry) => entry.id === id) || coachProfiles[0];
}

function getCoachByShortName(name) {
    return coachByShortName[name] || null;
}

function getCoachIndex(id) {
    return getRankedCoaches().findIndex((entry) => entry.id === id);
}

function getRankedCoaches() {
    const standings = buildGeneralStandings(leagues);
    const positions = new Map(standings.map((entry) => [entry.jogador, entry.posTotal]));
    return [...coachProfiles].sort((a, b) => (positions.get(a.nome) || Infinity) - (positions.get(b.nome) || Infinity));
}

function getAdjacentCoachId(id, direction) {
    let coaches = getRankedCoaches();
    let currentIndex = getCoachIndex(id);
    if (currentIndex === -1) return coaches[0].id;
    let nextIndex = (currentIndex + direction + coaches.length) % coaches.length;
    return coaches[nextIndex].id;
}

function getCoachLinkMarkup(name, className = "") {
    let coach = getCoachByShortName(name);
    if (!coach) return name || "PC";
    let safeClass = className ? ` ${className}` : "";
    return `<button class="coach-link${safeClass}" type="button" data-coach-id="${coach.id}">${coach.nome}</button>`;
}

function resolveCoachMedia(coach) {
    let folder = coach.assetFolder;
    let files = coachAssetFiles[folder] || [];
    let statsFiles = files.filter((file) => file.toLowerCase().includes("stats"));
    let usableFiles = files.filter((file) => {
        let name = file.toLowerCase();
        return !name.includes("teste") && !name.includes("stats");
    });

    let keywordCardFiles = usableFiles.filter((file) => file.toLowerCase().includes("card"));
    let keywordProfileFiles = usableFiles.filter((file) => file.toLowerCase().includes("profile"));

    let cardFile = keywordCardFiles[0] || usableFiles[0] || null;
    let profileFiles = keywordProfileFiles;
    if (coach.profilePhoto && usableFiles.includes(coach.profilePhoto)) {
        profileFiles = [
            coach.profilePhoto,
            ...profileFiles.filter((file) => file !== coach.profilePhoto)
        ];
    }

    if (!profileFiles.length) {
        profileFiles = usableFiles.filter((file) => file !== cardFile);
    }
    if (!profileFiles.length && cardFile) {
        profileFiles = [cardFile];
    }

    return {
        cardPhoto: cardFile ? `assets/treinadores/${folder}/${cardFile}` : "",
        profilePhotos: profileFiles.map((file) => `assets/treinadores/${folder}/${file}`),
        statsPhoto: statsFiles[0] ? `assets/treinadores/${folder}/${statsFiles[0]}` : ""
    };
}

function getCoachStats(coach) {
    if (coachStatsScope === "fm27") return null;
    return coachCareerStats[coach.id] || null;
}

function renderCoachJourney(coach) {
    const entries = [...leagues].reverse().flatMap((league) => {
        const team = league.tabela.find((entry) => entry.jogador === coach.nome);
        if (!team) return [];
        const result = league.id === "mundial" ? getWorldCupTeamStatus(team.equipa).texto
            : `${team.pos}.º lugar${league.status === "completed" ? "" : " · Em curso"}`;
        return `<li><img src="${escapeAttribute(team.logo || league.logo)}" alt="" loading="lazy"><div><span>${escapeAttribute(league.nome)} · ${escapeAttribute((league.editionId || "").toUpperCase())}</span><strong>${escapeAttribute(team.equipa)}</strong><small>${escapeAttribute(result)}</small></div></li>`;
    });
    return `<h4>Percurso EMG</h4><ol>${entries.join("")}</ol><button type="button" class="history-button coach-compare-button" onclick="compareCoach('${escapeAttribute(coach.id)}')">Comparar treinador ↗</button>`;
}

function compareCoach(id) {
    const coach = getCoachById(id);
    closeCoachModal();
    if (getSelectedEdition() !== "all") selectEdition("all");
    headToHeadFirst = coach.nome;
    if (headToHeadSecond === coach.nome) {
        headToHeadSecond = "";
    }
    headToHeadLeague = "all";
    persistHeadToHead();
    renderHeadToHead();
    openHeadToHead();
}

function setCoachStatsScope(scope) {
    coachStatsScope = ["all", "fm26", "fm27"].includes(scope) ? scope : "all";
    renderCoachModal(getCoachById(selectedCoachId));
    setupCoachModalGallery();
    setupPalmaresFlagInteraction();
    requestAnimationFrame(() => fitNarrativeNames(document.getElementById("coachModal")));
}

function getCoachPhotoPosition(coach, photoPath) {
    let file = photoPath.split("/").pop();
    return coach.profilePhotoPositions?.[file] || "center";
}

function renderCoachStatsMarkup(coach) {
    let stats = getCoachStats(coach);
    let scopeMarkup = `<label class="coach-stats-scope"><span class="coach-stats-scope-label">Estatísticas</span><select onchange="setCoachStatsScope(this.value)">${["all", "fm26", "fm27"].map((id) => `<option value="${id}"${coachStatsScope === id ? " selected" : ""}>${id === "all" ? "Histórico EMG" : id.toUpperCase()}</option>`).join("")}</select></label>`;
    return scopeMarkup + (stats
        ? `
            <div class="coach-modal-stats-grid">
                ${Object.entries(stats).map(([label, value]) => `
                    <div class="coach-stat-card">
                        <div class="coach-stat-label">${label}</div>
                        <div class="coach-stat-value">${value}</div>
                    </div>
                `).join("")}
            </div>
        `
        : `<div class="coach-modal-stats-empty">Ainda não há jogos nem troféus nesta edição. A carreira EMG continua disponível no seletor.</div>`);
}

function renderCoachStatsWideMarkup(coach) {
    if (coachStatsScope === "fm27") {
        return `<div class="coach-modal-stats-empty">O palmarés, a narrativa e o legado desta edição começam com as primeiras competições.</div>`;
    }
    let stats = getCoachStats(coach);
    let extras = coachProfileExtras[coach.id];
    let trophyMarkup = renderCoachTrophyCabinet(coach);
    let narrative = getCoachNarrative(coach);
    let legacy = getCoachLegacy(coach);
    // Um só seletor de competição para a Narrativa e o Legado.
    let competitions = [...new Set([...narrative, ...legacy].flatMap((item) => (item.performances?.length ? item.performances : [item])
        .map((performance) => performance.context || "Sem competição registada")))];
    let narrativeMarkup = renderCoachInsightGrid("Narrativa", narrative, competitions);
    let legacyMarkup = renderCoachInsightGrid("Legado", legacy, competitions);
    let identityMarkup = renderCoachIdentityMarkup(coach);

    if (!stats && !extras) {
        return `<div class="coach-modal-stats-empty">Stats em breve</div>`;
    }

    return `${trophyMarkup}${renderCoachCompetitionPicker(competitions)}${narrativeMarkup}${legacyMarkup}${identityMarkup}`;
}

function renderCoachIdentityMarkup(coach) {
    const editionId = coachStatsScope;
    const identity = buildCoachIdentity(coach, editionId);
    const { totals, fame } = identity;
    const authored = coachProfileExtras[coach.id]?.identity;
    const number = (value) => value.toLocaleString("pt-PT", { maximumFractionDigits: 2 });
    const percent = (value) => `${Math.round(value / (totals.matches || 1) * 100)}%`;
    const evidence = !fame ? "Mínimo de 20 jogos registados para atribuir uma fama." : {
        wins: `${totals.wins} vitórias em ${totals.matches} jogos · ${percent(totals.wins)}`,
        cleanSheets: `${totals.cleanSheets} jogos sem sofrer em ${totals.matches} · ${percent(totals.cleanSheets)}`,
        goalsFor: `${number(totals.goalsFor / totals.matches)} golos marcados por jogo · ${totals.goalsFor} golos`,
        draws: `${totals.draws} empates em ${totals.matches} jogos · ${percent(totals.draws)}`,
        spectacle: `${number((totals.goalsFor + totals.goalsAgainst) / totals.matches)} golos por jogo · marcados e sofridos`
    }[fame.key];
    const rivalry = (entry, label) => entry ? `<button type="button" class="coach-identity-rival" onclick="openCoachIdentityRivalry('${escapeAttribute(coach.id)}', '${escapeAttribute(entry.coach.id)}')"><span>${label}</span><strong>${escapeAttribute(entry.coach.nome)} ↗</strong><small>${entry.wins}V · ${entry.draws}E · ${entry.losses}D em ${entry.matches} jogos</small></button>` : "";
    return `<section class="coach-stats-section coach-identity-section">
        <h4 class="coach-stats-section-title">Identidade</h4>
        <div class="coach-identity-grid">
            <article class="coach-identity-card">
                <span class="coach-identity-label">A fama · pelos resultados</span>
                <details class="coach-identity-proof"><summary><strong>${fame ? fame.title : "Uma história por escrever"}</strong><span>Ver fundamento ↓</span></summary><p>O traço com maior desvio acima da média dos treinadores na mesma seleção, entre vitórias, jogos sem sofrer, golos marcados, empates e golos totais por jogo. Cada taxa usa os jogos registados de cada treinador; mínimo de 20 jogos. “Espetáculo garantido” exige também pelo menos 1,5 golos sofridos por jogo.</p></details>
                <p>${fame ? fame.description : "Ainda faltam jogos para os números ganharem personalidade."}</p>
                <strong class="coach-identity-evidence">${evidence}</strong>
                ${(identity.strongest || identity.weakest) ? `<div class="coach-identity-rivals">${rivalry(identity.strongest, "Onde faz estragos")}${rivalry(identity.weakest, "Onde a coisa complica")}</div>` : ""}
            </article>
            <article class="coach-identity-card">
                <span class="coach-identity-label">O estilo · assinatura do perfil</span>
                <h5>${escapeAttribute(authored?.specialty?.value || "Identidade por definir")}</h5>
                <p>${escapeAttribute(authored?.tactical?.value || "A assinatura tática ainda não foi definida.")}</p>
                <span class="coach-identity-editorial">Descrição editorial · não inferida dos resultados</span>
                ${totals.matches ? `<strong class="coach-identity-evidence">${number(totals.goalsFor / totals.matches)} marcados · ${number(totals.goalsAgainst / totals.matches)} sofridos por jogo</strong><small>O que aconteceu em campo, independentemente do estilo.</small>` : ""}
            </article>
        </div>
        <p class="coach-identity-source">${totals.matches} jogos publicados · ${editionId === "all" ? "Histórico EMG" : editionId.toUpperCase()}. Inclui ligas e taças. Escócia: calendário parcial. Os penáltis de desempate não contam como golos nem alteram o registo V/E/D. Confrontos destacados: mínimo de 5 jogos; saldo de vitórias e derrotas por jogo.</p>
    </section>`;
}

function openCoachIdentityRivalry(coachId, rivalId) {
    const editionId = coachStatsScope;
    closeCoachModal();
    if (getSelectedEdition() !== editionId) selectEdition(editionId);
    headToHeadFirst = getCoachById(coachId).nome;
    headToHeadSecond = getCoachById(rivalId).nome;
    headToHeadLeague = "all";
    persistHeadToHead();
    renderHeadToHead();
    openHeadToHead();
}

function renderCoachTrophyCabinet(coach) {
    let extras = coachProfileExtras[coach.id] || {};
    let trophyCounts = extras.trophyCounts || {};
    let defaultVisibleKeys = {
        escocia: ["league", "league-cup", "cup"]
    };
    let flagsMarkup = Object.entries(palmaresCountries).map(([countryKey, country]) => {
        let disabled = !country.available;
        let counts = trophyCounts[countryKey] || {};
        let worldCupTeam = countryKey === "mundial"
            ? worldCupEquipas.find((entry) => entry.jogador === coach.nome)
            : null;
        let result = worldCupTeam ? {
            team: worldCupTeam.equipa,
            text: getWorldCupTeamStatus(worldCupTeam.equipa).texto
        } : null;
        let leagueId = { escocia: "scotland", croacia: "croatia" }[countryKey];
        let leagueTeam = leagueId
            ? leagues.find((league) => league.id === leagueId)?.tabela.find((entry) => entry.jogador === coach.nome)
            : null;
        let leagueResult = leagueTeam ? {
            team: leagueTeam.equipa,
            text: leagueTeam.pos === 1 ? "Campeão" : `${leagueTeam.pos}.º lugar`
        } : null;
        let visibleKeys = extras.trophyVisibility?.[countryKey] || defaultVisibleKeys[countryKey] || country.items.map((t) => t.key);
        let items = country.items
            .filter((t) => visibleKeys.includes(t.key))
            .map((t) => ({ ...t, count: counts[t.key] || 0, result: result || (t.key === "league" ? leagueResult : null) }));
        return `
            <div class="coach-palmares-flag-item${disabled ? " coach-palmares-flag-item--disabled" : ""}"
                 data-country="${countryKey}"
                 data-available="${country.available}"
                 data-trophies='${JSON.stringify(items)}'>
                <img class="coach-palmares-flag-img${country.flagFit === "contain" ? " coach-palmares-flag-img--contain" : ""}" src="${country.flag}" alt="${country.label}" loading="lazy">
                <div class="coach-palmares-flag-label">${country.label}</div>
                ${disabled ? `<div class="coach-palmares-coming-soon">Coming soon!</div>` : ""}
            </div>
        `;
    }).join("");

    return `
        <div class="coach-stats-section">
            <div class="coach-stats-section-title">Palmarés</div>
            <div class="coach-palmares-flags-rail">
                ${flagsMarkup}
            </div>
            <div class="coach-palmares-trophies-panel" id="palmaresTrophiesPanel"></div>
        </div>
    `;
}

function renderTrophySlotsMarkup(items) {
    return items.map((trophy) => {
        // Sem lockedIcon fica o próprio icon, que .coach-trophy-img.locked põe a cinzento.
        let imgSrc = trophy.icon ? (trophy.count > 0 ? trophy.icon : trophy.lockedIcon || trophy.icon) : "";
        let lightboxSrc = trophy.count > 0
            ? (trophy.cabinetImage || trophy.icon || "")
            : (trophy.lockedClickableImage || "");
        let clickable = lightboxSrc ? `data-trophy-img="${lightboxSrc}" data-trophy-label="${trophy.label}"` : "";
        return `
        <div class="coach-trophy-slot coach-trophy-slot--${trophy.key}${trophy.count > 0 ? " unlocked" : ""}"${clickable ? ` ${clickable} style="cursor:pointer"` : ""}>
            <div class="coach-trophy-icon" aria-hidden="true">
                ${imgSrc
                    ? `<img src="${imgSrc}" alt="" class="coach-trophy-img${trophy.count > 0 ? " unlocked" : " locked"}" loading="lazy">`
                    : `<svg viewBox="0 0 24 24" fill="none">
                        <path d="M8 4h8v3c0 2.8-1.7 5.3-4 6.4C9.7 12.3 8 9.8 8 7V4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                        <path d="M9 18h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                        <path d="M10 14h4v4h-4z" fill="currentColor" opacity="0.18"/>
                        <path d="M6 5H4c0 2.4 1.2 4 3 4.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                        <path d="M18 5h2c0 2.4-1.2 4-3 4.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                    </svg>`
                }
            </div>
            <div class="coach-trophy-label">${trophy.label}</div>
            <div class="coach-trophy-count">${trophy.count > 0 ? `x${trophy.count}` : "—"}</div>
            ${trophy.result ? `<div class="coach-trophy-result"><span>${trophy.result.team}</span><span>${trophy.result.text}</span></div>` : ""}
        </div>
    `}).join("");
}

let activePalmaresCountry = null;

function setupPalmaresFlagInteraction() {
    let modal = document.getElementById("coachModal");
    if (!modal) return;
    let flags = modal.querySelectorAll(".coach-palmares-flag-item:not(.coach-palmares-flag-item--disabled)");
    let panel = modal.querySelector("#palmaresTrophiesPanel");
    if (!panel) return;

    function expandFlag(flag) {
        modal.querySelectorAll(".coach-palmares-flag-item.active").forEach((f) => f.classList.remove("active"));
        flag.classList.add("active");
        activePalmaresCountry = flag.dataset.country;
        let items = JSON.parse(flag.dataset.trophies || "[]");
        panel.innerHTML = `<div class="coach-trophy-cabinet">${renderTrophySlotsMarkup(items)}</div>`;
        panel.classList.add("expanded");

        panel.querySelectorAll(".coach-trophy-slot[data-trophy-img]").forEach((slot) => {
            slot.addEventListener("click", () => {
                openTrophyLightbox(slot.dataset.trophyImg, slot.dataset.trophyLabel);
            });
        });
    }

    flags.forEach((flag) => {
        flag.addEventListener("click", () => {
            let wasActive = flag.classList.contains("active");

            modal.querySelectorAll(".coach-palmares-flag-item.active").forEach((f) => f.classList.remove("active"));

            if (wasActive) {
                panel.classList.remove("expanded");
                activePalmaresCountry = null;
                panel.addEventListener("transitionend", function handler() {
                    if (!panel.classList.contains("expanded")) panel.innerHTML = "";
                    panel.removeEventListener("transitionend", handler);
                });
                return;
            }

            expandFlag(flag);
        });
    });

    if (activePalmaresCountry) {
        let remembered = modal.querySelector(`.coach-palmares-flag-item[data-country="${activePalmaresCountry}"][data-available="true"]`);
        if (remembered) expandFlag(remembered);
    }
}

function openTrophyLightbox(src, label) {
    closeTrophyLightbox();

    let lightbox = document.createElement("div");
    lightbox.id = "trophyLightbox";
    lightbox.className = "trophy-lightbox";
    lightbox.innerHTML = `
        <div class="trophy-lightbox-backdrop"></div>
        <div class="trophy-lightbox-content">
            <img src="${src}" alt="${label}">
            <div class="trophy-lightbox-label">${label}</div>
        </div>
    `;
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", closeTrophyLightbox);

    openOverlay(lightbox, { onEscape: closeTrophyLightbox });
}

function closeTrophyLightbox() {
    let lightbox = document.getElementById("trophyLightbox");
    if (!lightbox) return;
    closeOverlay(lightbox);
}

function renderCoachCompetitionPicker(competitions) {
    if (!competitions.length) return "";
    return `
        <div class="coach-stats-section coach-stats-section--competicao">
            <details class="coach-legacy-picker">
                <summary class="coach-legacy-select" aria-label="Escolher competição">
                    <span class="coach-legacy-picker-heading"><span class="coach-legacy-picker-label">Competição</span><span class="coach-legacy-picker-value">${escapeAttribute(competitions[0])}</span></span>
                    <span class="coach-legacy-picker-arrow" aria-hidden="true">⌄</span>
                </summary>
                <div class="coach-legacy-menu" aria-label="Competições">
                    ${competitions.map((competition, index) => `<button type="button" class="coach-legacy-option" data-competition-index="${index}" aria-pressed="${index === 0}"><span>${escapeAttribute(competition)}</span><span class="coach-legacy-option-check" aria-hidden="true">✓</span></button>`).join("")}
                </div>
            </details>
        </div>
    `;
}

function renderCoachInsightGrid(title, items, competitions = []) {
    let hasItems = items.length > 0;
    let sectionSlug = String(title || "").toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");
    let safeItems = hasItems
        ? items
        : (coachInsightPlaceholders[title] || [
            { label: "A recolher", value: "A recolher", meta: "Sem dados ainda" },
            { label: "A recolher", value: "A recolher", meta: "Sem dados ainda" }
        ]);

    let renderLegacyStats = (statsText) => {
        let stats = String(statsText || "")
            .split("|")
            .map((part) => part.trim())
            .filter(Boolean);
        if (!stats.length) return "";

        let formatLegacyStat = (stat, index) => {
            let cleaned = String(stat || "").trim();
            let isRating = index === 0 && /^\d+([.,]\d+)?$/.test(cleaned);
            if (isRating) {
                return {
                    className: "coach-legacy-stat-chip coach-legacy-stat-chip--rating",
                    label: "Média",
                    value: cleaned,
                    secondary: ""
                };
            }

            let goalsMatch = cleaned.match(/^(\d+)\s*G$/i);
            if (goalsMatch) {
                return {
                    className: "coach-legacy-stat-chip",
                    label: "Golos",
                    value: goalsMatch[1],
                    secondary: ""
                };
            }

            let assistsMatch = cleaned.match(/^(\d+)\s*A$/i);
            if (assistsMatch) {
                return {
                    className: "coach-legacy-stat-chip",
                    label: "Assist.",
                    value: assistsMatch[1],
                    secondary: ""
                };
            }

            let gamesMatch = cleaned.match(/^(\d+)(?:\((\d+)\))?\s*J$/i);
            if (gamesMatch) {
                return {
                    className: "coach-legacy-stat-chip coach-legacy-stat-chip--games",
                    label: "Jogos",
                    value: gamesMatch[1],
                    secondary: gamesMatch[2] ? `(${gamesMatch[2]})` : ""
                };
            }

            return {
                className: "coach-legacy-stat-chip",
                label: "",
                value: cleaned,
                secondary: ""
            };
        };

        return `
            <div class="coach-legacy-stats">
                ${stats.map((stat, index) => {
                    let parsed = formatLegacyStat(stat, index);
                    let label = parsed.label ? `<span class="coach-legacy-stat-prefix">${parsed.label}</span>` : "";
                    let secondary = parsed.secondary ? `<span class="coach-legacy-stat-secondary">${parsed.secondary}</span>` : "";
                    return `<span class="${parsed.className}">${label}<span class="coach-legacy-stat-value">${parsed.value}</span>${secondary}</span>`;
                }).join("")}
            </div>
        `;
    };

    let renderNarrativeTarget = (teamName) => {
        let name = String(teamName || "").trim();
        let team = leagues.flatMap((league) => league.tabela).find((entry) => entry.equipa === name && entry.jogador);
        let coachInfo = team ? { coachName: team.jogador } : coachByNarrativeTeam[name];
        if (!coachInfo) return null;
        let coach = getCoachByShortName(coachInfo.coachName);
        if (!coach) return null;
        return `<span class="coach-narrative-target">${getCoachLinkMarkup(coach.nome, "coach-narrative-link")}</span>`;
    };

    let renderNarrativeOpponents = (line, separatorRegex, separatorLabel) => {
        let parts = String(line || "").split(separatorRegex).map((part) => part.trim()).filter(Boolean);
        if (!parts.length) return "";
        let rendered = parts.map((part) => renderNarrativeTarget(part) || part);
        return `<div class="coach-insight-line">${rendered.join(`<span class="coach-narrative-separator">${separatorLabel}</span>`)}</div>`;
    };

    let renderNarrativeValue = (item) => {
        let input = String(item?.value || "");
        if (!input) return "";
        let valueLines = input.split("\n").filter(Boolean);
        let label = String(item?.label || "");

        if (/Maior Vítima|Némesis/i.test(label)) {
            return valueLines.map((line) => renderNarrativeOpponents(line, /\s+e\s+/, "e")).join("");
        }

        if (/Maior Vitória|Pior Derrota|Jogo Mais Caótico/i.test(label)) {
            return valueLines.map((line) => {
                let segments = line.split(/\s+ou\s+/).map((segment) => segment.trim()).filter(Boolean);
                return segments.map((segment) => {
                    let match = segment.match(/^(.+?)\s+vs\s+(.+)$/i);
                    if (!match) {
                        return `<div class="coach-insight-line">${segment}</div>`;
                    }
                    let score = match[1].trim();
                    let opponent = match[2].trim();
                    let target = renderNarrativeTarget(opponent)
                        || `<span class="coach-narrative-team">${escapeAttribute(opponent)}</span>`;
                    return `
                        <div class="coach-insight-line coach-insight-line--match">
                            <span class="coach-narrative-match-target">${target}</span>
                            <span class="coach-narrative-score">
                                <span class="coach-narrative-score-label">Resultado</span>
                                <span class="coach-narrative-score-value">${score}</span>
                            </span>
                        </div>
                    `;
                }).join("");
            }).join("");
        }

        return valueLines.map((line) => `<div class="coach-insight-line">${line}</div>`).join("");
    };

    let renderLegacyContent = (item) => {
        let lines = String(item.value || "").split("\n").filter(Boolean);
        let blocks = lines.map((line) => {
            let parts = line.split(" - ");
            let name = parts.shift() || "";
            let inlineStats = parts.length ? parts.join(" - ") : "";
            return `
                <div class="coach-legacy-player-block">
                    <div class="coach-insight-line"><span class="coach-insight-player">${name}</span></div>
                    ${inlineStats ? renderLegacyStats(inlineStats) : ""}
                </div>
            `;
        }).join("");

        let hasInlineStats = lines.some((line) => line.includes(" - "));
        let footerStats = !hasInlineStats && String(item.meta || "").includes("|")
            ? renderLegacyStats(item.meta)
            : "";
        let note = String(item.meta || "").includes("|") ? "" : String(item.meta || "").replace(/\n/g, "<br>");

        return `
            ${item.context ? `<div class="coach-legacy-context">${item.context}</div>` : ""}
            <div class="coach-insight-value coach-insight-value--legacy">${blocks}</div>
            ${footerStats}
            ${note ? `<div class="coach-insight-meta coach-insight-meta--legacy-note">${note}</div>` : ""}
        `;
    };

    let hasCompetitionPicker = sectionSlug === "legado" || sectionSlug === "narrativa";
    let legacyCompetitions = hasCompetitionPicker ? competitions : [];

    let renderLegacyCard = (item) => {
        let performances = item.performances?.length ? item.performances : [item];
        return `
            <div class="coach-insight-card${hasItems ? "" : " empty"}">
                <div class="coach-insight-label"><span>${item.label}</span></div>
                <div class="coach-legacy-results">
                    ${legacyCompetitions.map((competition, index) => {
                        let performance = performances.find((entry) => (entry.context || "Sem competição registada") === competition);
                        let content = { ...(performance || { value: "Sem dados nesta competição" }), context: "" };
                        return `<div class="coach-legacy-performance" data-competition-index="${index}"${index ? " hidden" : ""}>${sectionSlug === "narrativa"
                            ? `<div class="coach-insight-value">${renderNarrativeValue({ ...content, label: item.label })}</div><div class="coach-insight-meta">${String(content.meta || "").replace(/\n/g, "<br>")}</div>`
                            : renderLegacyContent(content)}</div>`;
                    }).join("")}
                </div>
            </div>
        `;
    };

    let renderValue = (value) => {
        let lines = String(value).split("\n");
        return lines.map((line) => {
            let parts = line.split(" - ");
            if (parts.length > 1) {
                let [name, ...rest] = parts;
                return `<div class="coach-insight-line"><span class="coach-insight-player">${name}</span><span class="coach-insight-inline-meta"> - ${rest.join(" - ")}</span></div>`;
            }
            return `<div class="coach-insight-line">${line}</div>`;
        }).join("");
    };

    return `
        <div class="coach-stats-section coach-stats-section--${sectionSlug}">
            <div class="coach-stats-section-title">${title}</div>
            <div class="coach-insight-grid coach-insight-grid--${sectionSlug}">
                ${safeItems.map((item) => hasCompetitionPicker
                    ? renderLegacyCard(item)
                    : `
                        <div class="coach-insight-card${hasItems ? "" : " empty"}">
                            <div class="coach-insight-label"><span>${item.label}</span></div>
                            <div class="coach-insight-value">${sectionSlug === "narrativa" ? renderNarrativeValue(item) : renderValue(item.value)}</div>
                            <div class="coach-insight-meta">${String(item.meta || "").replace(/\n/g, "<br>")}</div>
                        </div>
                    `
                ).join("")}
            </div>
        </div>
    `;
}

function formatCoachDescription(text) {
    return text
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .map((paragraph) => `<p class="coach-modal-paragraph">${paragraph.replace(/\n/g, "<br>")}</p>`)
        .join("");
}

function setCoachModalView(view) {
    let presentationTab = document.getElementById("coachModalTabPresentation");
    let statsTab = document.getElementById("coachModalTabStats");
    let presentationPanel = document.getElementById("coachModalPresentation");
    let statsPanel = document.getElementById("coachModalStats");
    let statsWide = document.getElementById("coachModalStatsWide");
    let isStats = view === "stats";
    const journey = document.getElementById("coachModalJourney");
    if (journey) journey.hidden = isStats;

    presentationTab?.classList.toggle("active", !isStats);
    presentationTab?.setAttribute("aria-selected", isStats ? "false" : "true");
    statsTab?.classList.toggle("active", isStats);
    statsTab?.setAttribute("aria-selected", isStats ? "true" : "false");

    presentationPanel?.classList.toggle("active", !isStats);
    if (presentationPanel) presentationPanel.hidden = isStats;
    statsPanel?.classList.toggle("active", isStats);
    if (statsPanel) statsPanel.hidden = !isStats;
    statsWide?.classList.toggle("active", isStats);
    if (statsWide) statsWide.hidden = !isStats;

    if (isStats) {
        requestAnimationFrame(() => fitNarrativeNames(document.getElementById("coachModal")));
    }
}

function fitNarrativeNames(scope = document) {
    if (!scope) return;
    scope.querySelectorAll(".coach-narrative-link").forEach((link) => {
        link.style.fontSize = "";
        link.style.letterSpacing = "";
        let target = link.closest(".coach-narrative-match-target") || link.parentElement;
        if (!target) return;
        let availableWidth = target.clientWidth;
        if (!availableWidth) return;

        const sizes = [13, 12, 11, 10, 9];
        link.style.fontSize = `${sizes[0]}px`;

        for (let i = 1; i < sizes.length && link.scrollWidth > availableWidth; i += 1) {
            link.style.fontSize = `${sizes[i]}px`;
        }

        if (link.scrollWidth > availableWidth) {
            link.style.letterSpacing = "0px";
        }
    });
}

function renderCoachModal(coach) {
    let initials = coach.nome.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    let mediaAssets = resolveCoachMedia(coach);
    let images = mediaAssets.profilePhotos;
    let imagePositions = Object.fromEntries(images.map((image) => [image, getCoachPhotoPosition(coach, image)]));
    let media = images.length
        ? `
            <div class="coach-modal-gallery" data-photo-index="0">
                ${images.length > 1 ? `<button class="coach-modal-photo-nav prev" type="button" aria-label="Foto anterior de ${coach.nome}">‹</button>` : ""}
                <img src="${images[0]}" alt="${coach.nome}" class="coach-card-photo coach-modal-photo-main" style="object-position: ${imagePositions[images[0]]};" draggable="false">
                ${images.length > 1 ? `<button class="coach-modal-photo-nav next" type="button" aria-label="Foto seguinte de ${coach.nome}">›</button>` : ""}
            </div>
        `
        : `<div class="coach-card-placeholder">${initials}</div>`;

    let mediaEl = document.getElementById("coachModalMedia");
    mediaEl.innerHTML = media;
    mediaEl.dataset.images = JSON.stringify(images);
    mediaEl.dataset.imagePositions = JSON.stringify(imagePositions);
    document.getElementById("coachModalJourney").innerHTML = renderCoachJourney(coach);
    document.getElementById("coachModalName").textContent = coach.nomePerfil || coach.nome;
    document.getElementById("coachModalRole").textContent = coach.cargo;
    document.getElementById("coachModalDescription").innerHTML = formatCoachDescription(coach.descricao);
    document.getElementById("coachModalHighlight").textContent = coach.destaque;
    document.getElementById("coachModalStatsName").textContent = coach.nomePerfil || coach.nome;

    let statsMediaEl = document.getElementById("coachModalStatsMedia");
    if (statsMediaEl) {
        statsMediaEl.innerHTML = renderCoachStatsMarkup(coach);
    }
    let statsWideEl = document.getElementById("coachModalStatsWideContent");
    if (statsWideEl) {
        statsWideEl.innerHTML = renderCoachStatsWideMarkup(coach);
        bindCoachLinks(statsWideEl);
        statsWideEl.querySelectorAll(".coach-legacy-picker").forEach((picker) => {
            picker.querySelectorAll(".coach-legacy-option").forEach((option) => {
                option.addEventListener("click", () => {
                    statsWideEl.querySelectorAll(".coach-legacy-performance").forEach((performance) => {
                        performance.hidden = performance.dataset.competitionIndex !== option.dataset.competitionIndex;
                    });
                    picker.querySelector(".coach-legacy-picker-value").textContent = option.firstElementChild.textContent;
                    picker.querySelectorAll(".coach-legacy-option").forEach((entry) => entry.setAttribute("aria-pressed", String(entry === option)));
                    picker.open = false;
                    picker.querySelector("summary").focus();
                    requestAnimationFrame(() => fitNarrativeNames(statsWideEl));
                });
            });
            picker.addEventListener("focusout", () => {
                requestAnimationFrame(() => {
                    if (!picker.contains(document.activeElement)) picker.open = false;
                });
            });
            picker.addEventListener("keydown", (event) => {
                if (event.key !== "Escape" || !picker.open) return;
                event.stopPropagation();
                picker.open = false;
                picker.querySelector("summary").focus();
            });
        });
    }

}

function openCoachModal(id, preserveTab) {
    let currentView = preserveTab && document.getElementById("coachModalTabStats")?.classList.contains("active") ? "stats" : "presentation";
    let coach = getCoachById(id);
    coachStatsScope = "all";
    selectCoach(id);
    renderCoachModal(coach);
    setCoachModalView(currentView);
    setupCoachModalGallery();
    setupPalmaresFlagInteraction();
    openOverlay(document.getElementById("coachModal"), { show: "hidden", onEscape: closeCoachModal });
    requestAnimationFrame(() => fitNarrativeNames(document.getElementById("coachModal")));
}

function closeCoachModal() {
    let modal = document.getElementById("coachModal");
    if (!modal) return;
    closeOverlay(modal, { show: "hidden" });
}

function setupCoachModal() {
    let modal = document.getElementById("coachModal");
    let closeBtn = document.getElementById("coachModalClose");
    let backdrop = document.getElementById("coachModalBackdrop");
    let presentationTab = document.getElementById("coachModalTabPresentation");
    let statsTab = document.getElementById("coachModalTabStats");
    let prevCoachBtn = document.getElementById("coachModalPrevCoach");
    let nextCoachBtn = document.getElementById("coachModalNextCoach");

    if (!modal || modal.dataset.bound === "true") return;

    closeBtn?.addEventListener("click", closeCoachModal);
    backdrop?.addEventListener("click", closeCoachModal);

    presentationTab?.addEventListener("click", () => setCoachModalView("presentation"));
    statsTab?.addEventListener("click", () => setCoachModalView("stats"));
    prevCoachBtn?.addEventListener("click", () => openCoachModal(getAdjacentCoachId(selectedCoachId, -1), true));
    nextCoachBtn?.addEventListener("click", () => openCoachModal(getAdjacentCoachId(selectedCoachId, 1), true));

    modal.dataset.bound = "true";
}

function setupCoachRailDrag() {
    let rail = document.getElementById("coachesRail");
    if (!rail || rail.dataset.dragBound === "true") return;

    rail.addEventListener("dragstart", (event) => {
        if (event.target instanceof HTMLImageElement) {
            event.preventDefault();
        }
    });

    let isPointerDown = false;
    let dragActive = false;
    let axisLocked = false;
    let dragAllowed = false;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let lastX = 0;
    let lastMoveTime = 0;
    let velocity = 0;
    let momentumFrame = null;

    function stopMomentum() {
        if (momentumFrame !== null) {
            cancelAnimationFrame(momentumFrame);
            momentumFrame = null;
        }
    }

    function startMomentum() {
        stopMomentum();
        function step() {
            velocity *= 0.95;
            if (Math.abs(velocity) < 0.04) {
                momentumFrame = null;
                return;
            }
            rail.scrollLeft -= velocity * 18;
            momentumFrame = requestAnimationFrame(step);
        }
        momentumFrame = requestAnimationFrame(step);
    }

    rail.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        stopMomentum();
        isPointerDown = true;
        dragActive = false;
        axisLocked = false;
        dragAllowed = false;
        startX = event.clientX;
        startY = event.clientY;
        startScrollLeft = rail.scrollLeft;
        lastX = event.clientX;
        lastMoveTime = performance.now();
        velocity = 0;
    });

    rail.addEventListener("pointermove", (event) => {
        if (!isPointerDown) return;
        let delta = event.clientX - startX;
        let deltaY = event.clientY - startY;
        let now = performance.now();
        let dt = Math.max(now - lastMoveTime, 1);

        if (!axisLocked) {
            if (Math.abs(delta) > 6 || Math.abs(deltaY) > 6) {
                axisLocked = true;
                dragAllowed = Math.abs(delta) > Math.abs(deltaY);
                if (dragAllowed) {
                    rail.classList.add("is-dragging");
                    rail.setPointerCapture?.(event.pointerId);
                }
            }
        }

        if (!dragAllowed) {
            if (axisLocked) {
                isPointerDown = false;
            }
            return;
        }

        dragActive = true;
        rail.scrollLeft = startScrollLeft - delta;
        let instantVelocity = (event.clientX - lastX) / dt;
        velocity = velocity * 0.72 + instantVelocity * 0.28;
        lastX = event.clientX;
        lastMoveTime = now;
    });

    function stopDrag(event) {
        if (!isPointerDown) return;
        isPointerDown = false;
        rail.classList.remove("is-dragging");
        if (dragAllowed) {
            rail.releasePointerCapture?.(event.pointerId);
        }
        if (dragActive) {
            startMomentum();
        }
        requestAnimationFrame(() => {
            rail.dataset.dragging = dragActive ? "true" : "false";
            setTimeout(() => {
                rail.dataset.dragging = "false";
            }, 0);
        });
    }

    rail.addEventListener("pointerup", stopDrag);
    rail.addEventListener("pointercancel", stopDrag);
    rail.addEventListener("pointerleave", (event) => {
        if (isPointerDown) {
            stopDrag(event);
        }
    });

    rail.dataset.dragBound = "true";
}

function setupCoachModalGallery() {
    let mediaEl = document.getElementById("coachModalMedia");
    if (!mediaEl) return;

    let prevTrigger = mediaEl.querySelector(".coach-modal-photo-nav.prev");
    let nextTrigger = mediaEl.querySelector(".coach-modal-photo-nav.next");
    let image = mediaEl.querySelector(".coach-modal-photo-main");
    if (!image) return;

    let images = [];
    let imagePositions = {};
    try {
        images = JSON.parse(mediaEl.dataset.images || "[]");
        imagePositions = JSON.parse(mediaEl.dataset.imagePositions || "{}");
    } catch (_) {
        images = [];
        imagePositions = {};
    }
    image.addEventListener("click", () => {
        openPhotoLightbox(image.src, image.alt);
    });

    if (images.length <= 1) return;

    function setImageByIndex(nextIndex) {
        let gallery = mediaEl.querySelector(".coach-modal-gallery");
        if (gallery) {
            gallery.dataset.photoIndex = String(nextIndex);
        }
        image.src = images[nextIndex];
        image.style.objectPosition = imagePositions[images[nextIndex]] || "center";
    }

    prevTrigger?.addEventListener("click", (event) => {
        event.stopPropagation();
        let gallery = mediaEl.querySelector(".coach-modal-gallery");
        let currentIndex = Number(gallery?.dataset.photoIndex || 0);
        let nextIndex = (currentIndex - 1 + images.length) % images.length;
        setImageByIndex(nextIndex);
    });

    nextTrigger?.addEventListener("click", (event) => {
        event.stopPropagation();
        let gallery = mediaEl.querySelector(".coach-modal-gallery");
        let currentIndex = Number(gallery?.dataset.photoIndex || 0);
        let nextIndex = (currentIndex + 1) % images.length;
        setImageByIndex(nextIndex);
    });
}

function openPhotoLightbox(src, alt) {
    let lightbox = document.getElementById("photoLightbox");
    let img = document.getElementById("photoLightboxImg");
    if (!lightbox || !img) return;
    img.src = src;
    img.alt = alt || "";
    openOverlay(lightbox, { show: "class", onEscape: closePhotoLightbox });
}

function closePhotoLightbox() {
    let lightbox = document.getElementById("photoLightbox");
    if (!lightbox) return;
    closeOverlay(lightbox, { show: "class" });
}

function setupPhotoLightbox() {
    let lightbox = document.getElementById("photoLightbox");
    if (!lightbox || lightbox.dataset.bound === "true") return;

    lightbox.querySelector(".photo-lightbox-backdrop")?.addEventListener("click", closePhotoLightbox);
    lightbox.querySelector(".photo-lightbox-img")?.addEventListener("click", closePhotoLightbox);

    lightbox.dataset.bound = "true";
}

function renderCoachCards() {
    let rail = document.getElementById("coachesRail");
    if (!rail) return;

    const nav = document.querySelector(".nav");
    const panel = document.querySelector(".coaches-panel");
    if (nav && panel && !panel.dataset.alignmentBound) {
        const syncHeadingWidth = () => panel.style.setProperty("--main-nav-width", `${nav.getBoundingClientRect().width}px`);
        new ResizeObserver(syncHeadingWidth).observe(nav);
        syncHeadingWidth();
        panel.dataset.alignmentBound = "true";
    }

    rail.innerHTML = getRankedCoaches().map((coach) => `
        <div class="coach-card" role="button" tabindex="0" data-coach-id="${coach.id}" aria-pressed="false">
            ${getCoachMarkup(coach)}
        </div>
    `).join("");

    rail.querySelectorAll(".coach-card").forEach((card) => {
        card.addEventListener("click", () => {
            if (rail.dataset.dragging === "true") return;
            openCoachModal(card.dataset.coachId);
        });
        card.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            if (rail.dataset.dragging === "true") return;
            openCoachModal(card.dataset.coachId);
        });
    });

    setupCoachRailDrag();
    setupCoachModal();
    setupPhotoLightbox();
    selectCoach(selectedCoachId, false);
}

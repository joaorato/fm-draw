const coachByShortName = Object.fromEntries(coachProfiles.map((coach) => [coach.nome, coach]));
let selectedCoachId = coachProfiles[0].id;

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
    return coachProfiles.findIndex((entry) => entry.id === id);
}

function getAdjacentCoachId(id, direction) {
    let currentIndex = getCoachIndex(id);
    if (currentIndex === -1) return coachProfiles[0].id;
    let nextIndex = (currentIndex + direction + coachProfiles.length) % coachProfiles.length;
    return coachProfiles[nextIndex].id;
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
    return coachStats[coach.id] || null;
}

function renderCoachStatsMarkup(coach) {
    let stats = getCoachStats(coach);
    return stats
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
        : `<div class="coach-modal-stats-empty">Stats em breve</div>`;
}

function renderCoachStatsWideMarkup(coach) {
    let stats = getCoachStats(coach);
    let extras = coachProfileExtras[coach.id];
    let trophyMarkup = renderCoachTrophyCabinet(coach);
    let narrativeMarkup = renderCoachInsightGrid(
        "Narrativa",
        extras?.narrative
            ? [
                extras.narrative.victim,
                extras.narrative.biggestWin,
                extras.narrative.worstLoss,
                extras.narrative.nemesis,
                extras.narrative.chaotic
            ].filter(Boolean)
            : []
    );
    let legacyMarkup = renderCoachInsightGrid("Legado", extras?.legacy ? [extras.legacy.rating, extras.legacy.scorer] : []);
    let identityMarkup = renderCoachInsightGrid("Identidade", extras?.identity ? [extras.identity.specialty, extras.identity.tactical] : []);

    if (!stats && !extras) {
        return `<div class="coach-modal-stats-empty">Stats em breve</div>`;
    }

    return `${trophyMarkup}${narrativeMarkup}${legacyMarkup}${identityMarkup}`;
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
        let visibleKeys = extras.trophyVisibility?.[countryKey] || defaultVisibleKeys[countryKey] || country.items.map((t) => t.key);
        let items = country.items
            .filter((t) => visibleKeys.includes(t.key))
            .map((t) => ({ ...t, count: counts[t.key] || 0 }));
        return `
            <div class="coach-palmares-flag-item${disabled ? " coach-palmares-flag-item--disabled" : ""}"
                 data-country="${countryKey}"
                 data-available="${country.available}"
                 data-trophies='${JSON.stringify(items)}'>
                <img class="coach-palmares-flag-img" src="${country.flag}" alt="${country.label}" loading="lazy">
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
        let imgSrc = trophy.icon ? (trophy.count > 0 ? trophy.icon : trophy.lockedIcon) : "";
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

function renderCoachInsightGrid(title, items) {
    let hasItems = items.length > 0;
    let sectionSlug = String(title || "").toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");
    let placeholderBySection = {
        "Narrativa": [
            { label: "Maior Vítima", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Maior Vitória", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Pior Derrota", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Némesis", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Jogo Mais Caótico", value: "A recolher", meta: "Sem dados ainda" }
        ],
        "Legado": [
            { label: "Melhor Jogador", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Melhor Marcador", value: "A recolher", meta: "Sem dados ainda" }
        ],
        "Identidade": [
            { label: "Especialidade", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Assinatura Tática", value: "A recolher", meta: "Sem dados ainda" }
        ]
    };
    let safeItems = hasItems
        ? items
        : (placeholderBySection[title] || [
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
        let coachInfo = coachByNarrativeTeam[String(teamName || "").trim()];
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
                    let target = renderNarrativeTarget(match[2].trim());
                    if (!target) {
                        return `<div class="coach-insight-line">${segment}</div>`;
                    }
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

    let renderLegacyCard = (item) => {
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
            <div class="coach-insight-card${hasItems ? "" : " empty"}">
                <div class="coach-insight-label"><span>${item.label}</span></div>
                <div class="coach-insight-value coach-insight-value--legacy">${blocks}</div>
                ${footerStats}
                ${note ? `<div class="coach-insight-meta coach-insight-meta--legacy-note">${note}</div>` : ""}
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
                ${safeItems.map((item) => sectionSlug === "legado"
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
    let media = images.length
        ? `
            <div class="coach-modal-gallery" data-photo-index="0">
                ${images.length > 1 ? `<button class="coach-modal-photo-nav prev" type="button" aria-label="Foto anterior de ${coach.nome}">‹</button>` : ""}
                <img src="${images[0]}" alt="${coach.nome}" class="coach-card-photo coach-modal-photo-main" draggable="false">
                ${images.length > 1 ? `<button class="coach-modal-photo-nav next" type="button" aria-label="Foto seguinte de ${coach.nome}">›</button>` : ""}
            </div>
        `
        : `<div class="coach-card-placeholder">${initials}</div>`;

    let mediaEl = document.getElementById("coachModalMedia");
    mediaEl.innerHTML = media;
    mediaEl.dataset.images = JSON.stringify(images);
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
    }

}

function openCoachModal(id, preserveTab) {
    let currentView = preserveTab && document.getElementById("coachModalTabStats")?.classList.contains("active") ? "stats" : "presentation";
    let coach = getCoachById(id);
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
    try {
        images = JSON.parse(mediaEl.dataset.images || "[]");
    } catch (_) {
        images = [];
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

    rail.innerHTML = coachProfiles.map((coach) => `
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

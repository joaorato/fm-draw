function calcBonuses(league) {
    if (league.status === "live") {
        return league.bonuses || [];
    }

    let bonuses = [];
    let tabela = league.tabela;

    // Cup and European bonuses (hardcoded per league)
    league.tacas.forEach((taca) => {
        if (taca.jogador) {
            bonuses.push({ jogador: taca.jogador, tipo: taca.tipo, pontos: taca.pontos });
        }
    });

    // Champion: human team in 1st place
    let campeao = tabela.find((e) => e.pos === 1);
    if (campeao && campeao.jogador) {
        bonuses.push({ jogador: campeao.jogador, tipo: "Campeão da liga", pontos: 10 });
    }

    // Best human (only if not champion)
    let humanEntries = tabela.filter((e) => e.jogador);
    let melhorHumano = humanEntries[0];
    if (melhorHumano && melhorHumano.pos !== 1) {
        bonuses.push({ jogador: melhorHumano.jogador, tipo: "Melhor humano na liga", pontos: 5 });
    }

    // Last place: human team in last position
    let ultimo = tabela[tabela.length - 1];
    if (ultimo && ultimo.jogador) {
        bonuses.push({ jogador: ultimo.jogador, tipo: "Último classificado na liga", pontos: -5 });
    }

    // Worst human (only if not last place)
    let piorHumano = humanEntries[humanEntries.length - 1];
    if (piorHumano && piorHumano.pos !== tabela.length) {
        bonuses.push({ jogador: piorHumano.jogador, tipo: "Pior humano na liga", pontos: -2 });
    }

    return bonuses;
}

const generalScores = leagues
    .filter((league) => league.status === "completed")
    .flatMap((league) => [...league.scores, ...calcBonuses(league)])
    .reduce((acc, entry) => {
        let existing = acc.find((e) => e.jogador === entry.jogador);
        if (existing) {
            existing.pontos += entry.pontos;
        } else {
            acc.push({ jogador: entry.jogador, pontos: entry.pontos });
        }
        return acc;
    }, [])
    .sort((a, b) => b.pontos - a.pontos || a.jogador.localeCompare(b.jogador));

let shuffledTeams = [];
let shuffledPlayers = [];
let remainingTeams = [];
let remainingPlayers = [];
let currentRound = 0;
let resultados = [];

const DRAW_COMPLETED = true;

// Resultado do sorteio já realizado. Vem da seed table da liga em curso — quando
// houver novo sorteio, basta trocar croatiaSeedTable pela seed table da liga nova.
const FINAL_RESULTS = croatiaSeedTable
    .filter((entry) => entry.jogador)
    .map((entry) => ({
        jogador: entry.jogador,
        equipa: entry.equipa,
        img: entry.logo,
        rank: entry.prevista
    }));

const coachByShortName = Object.fromEntries(coachProfiles.map((coach) => [coach.nome, coach]));
const coachByNarrativeTeam = {
    "Aberdeen": { coachName: "Gonçalo", team: "Aberdeen" },
    "Hibernian": { coachName: "Rato", team: "Hibernian" },
    "Dundee": { coachName: "Nabais", team: "Dundee" },
    "Hearts": { coachName: "Cardoso", team: "Hearts" },
    "Falkirk": { coachName: "Hugo", team: "Falkirk" },
    "Kilmarnock": { coachName: "Chico", team: "Kilmarnock" },
    "Dundee Utd": { coachName: "Gamy", team: "Dundee Utd" },
    "Livingston": { coachName: "Painatal", team: "Livingston" }
};
let selectedCoachId = coachProfiles[0].id;
let activeLeagueLivePage = {};
let activeLeagueNewsIndex = {};
let activeLeagueCalendarRound = {};
let leagueLiveAutoTimer = null;
let pausedLeagueLivePages = new Set();
let activeLeagueId = "croatia";

const TOTAL_ROUNDS = jogadores.length;
const ITEM_WIDTH_TEAM = 126;
const ITEM_WIDTH_PLAYER = 164;
const SPIN_DURATION = 7000;
const TEAM_SPIN_LOOPS = 5;
const PLAYER_SPIN_LOOPS = 6;
const LEAGUE_LIVE_AUTO_MS = 7000;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getViewportWidth() {
    return Math.min(680, window.innerWidth * 0.92);
}

function scrollToElement(element) {
    setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function normalizeLoopX(x, cycleWidth) {
    let normalized = x;
    while (normalized <= -cycleWidth) {
        normalized += cycleWidth;
    }
    return normalized;
}

function buildLoopedRouletteItems(items, itemWidth, viewportWidth, spinLoops) {
    let cycleWidth = items.length * itemWidth;
    let minCopiesForViewport = Math.ceil((viewportWidth + cycleWidth) / cycleWidth);
    let copies = Math.max(3, spinLoops + 2, minCopiesForViewport);
    let repeatedItems = [];

    for (let i = 0; i < copies; i++) {
        repeatedItems.push(...items);
    }

    return { repeatedItems, cycleWidth };
}

function highlightWinner(strip, baseIndex) {
    strip.querySelectorAll(`[data-base-index="${baseIndex}"]`).forEach((item) => {
        item.classList.add("winner");
    });
}

function animateRoulette(strip, cycleWidth, finalX, duration, onComplete) {
    let startTime = null;
    let done = false;
    let settledX = normalizeLoopX(finalX, cycleWidth);

    function finish() {
        if (done) return;
        done = true;
        strip.style.transform = `translateX(${settledX}px)`;
        strip.style.willChange = "auto";
        onComplete();
    }

    function frame(timestamp) {
        if (done) return;

        if (startTime === null) {
            startTime = timestamp;
        }

        let elapsed = timestamp - startTime;
        let progress = Math.min(elapsed / duration, 1);
        let eased = easeOutCubic(progress);
        let currentX = normalizeLoopX(finalX * eased, cycleWidth);

        strip.style.transform = `translateX(${currentX}px)`;

        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            finish();
        }
    }

    requestAnimationFrame(frame);
    setTimeout(finish, duration + 120);
}

let musicStarted = false;
let isMuted = false;
const MUTE_STORAGE_KEY = "fm-draw-muted";

function getMusicElement() {
    return document.getElementById("bgmusic");
}

function syncMuteButton() {
    let btn = document.getElementById("muteBtn");
    if (btn) {
        btn.classList.toggle("is-muted", isMuted);
    }
}

function applyMuteState() {
    let music = getMusicElement();
    if (!music) return;
    music.muted = isMuted;
    syncMuteButton();
}

function persistMuteState() {
    try {
        sessionStorage.setItem(MUTE_STORAGE_KEY, String(isMuted));
    } catch (_) {}
}

function restoreMuteState() {
    try {
        isMuted = sessionStorage.getItem(MUTE_STORAGE_KEY) === "true";
    } catch (_) {
        isMuted = false;
    }
    applyMuteState();
}

function tryPlayDrawMusic() {
    if (DRAW_COMPLETED) return;
    let music = getMusicElement();
    if (!music) return;

    music.volume = 0.5;
    music.muted = isMuted;

    let attempt = music.play();
    if (attempt && typeof attempt.then === "function") {
        attempt
            .then(() => {
                musicStarted = true;
            })
            .catch(() => {
                musicStarted = false;
            });
    } else {
        musicStarted = !music.paused;
    }
}

function syncDrawMusic() {
    let music = getMusicElement();
    if (!music) return;

    applyMuteState();

    if (getTabFromHash() === "draw") {
        tryPlayDrawMusic();
    } else {
        music.pause();
    }
}

function bindMusicRecovery() {
    ["pointerdown", "touchstart", "keydown"].forEach((eventName) => {
        document.addEventListener(eventName, () => {
            if (getTabFromHash() === "draw") {
                let music = getMusicElement();
                if (music && music.paused && !isMuted) {
                    tryPlayDrawMusic();
                }
            }
        }, { passive: true });
    });

    window.addEventListener("pageshow", () => {
        if (getTabFromHash() === "draw") {
            syncDrawMusic();
        }
    });

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && getTabFromHash() === "draw") {
            syncDrawMusic();
        }
    });
}

function toggleMute() {
    isMuted = !isMuted;
    applyMuteState();
    persistMuteState();

    if (!isMuted && getTabFromHash() === "draw") {
        tryPlayDrawMusic();
    }
}

const TAB_HASHES = { home: "#home", draw: "#sorteio", coaches: "#treinadores", general: "#classificacao", past: "#ligas" };
const HASH_TO_TAB = Object.fromEntries(Object.entries(TAB_HASHES).map(([tab, hash]) => [hash, tab]));

function setActiveTab(tab, pushState) {
    let isHome = tab === "home";
    let isDraw = tab === "draw";
    let isCoaches = tab === "coaches";
    let isGeneral = tab === "general";
    let isPast = tab === "past";

    document.getElementById("homeView").classList.toggle("active", isHome);
    document.getElementById("drawView").classList.toggle("active", isDraw);
    document.getElementById("coachesView").classList.toggle("active", isCoaches);
    document.getElementById("generalView").classList.toggle("active", isGeneral);
    document.getElementById("pastView").classList.toggle("active", isPast);

    document.getElementById("homeTabBtn").classList.toggle("active", isHome);
    document.getElementById("drawTabBtn").classList.toggle("active", isDraw);
    document.getElementById("coachesTabBtn").classList.toggle("active", isCoaches);
    document.getElementById("generalTabBtn").classList.toggle("active", isGeneral);
    document.getElementById("pastTabBtn").classList.toggle("active", isPast);

    if (isDraw) {
        if (DRAW_COMPLETED) {
            showCompletedDraw();
        } else {
            tryPlayDrawMusic();
        }
    } else {
        let music = getMusicElement();
        if (music) {
            music.pause();
        }
    }

    if (pushState !== false) {
        history.pushState(null, "", TAB_HASHES[tab] || "#home");
    }
}

function getTabFromHash() {
    return HASH_TO_TAB[location.hash] || "home";
}

window.addEventListener("popstate", () => setActiveTab(getTabFromHash(), false));

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

const palmaresCountries = {
    croacia: {
        flag: "assets/flags/croatia.webp",
        label: "Croácia",
        available: false,
        items: []
    },
    escocia: {
        flag: "assets/flags/scotland.webp",
        label: "Escócia",
        available: true,
        items: [
            {
                key: "league",
                label: "Liga Escocesa",
                icon: "assets/logos/trophy_cabinet/escocia/williamhillpremiership.png",
                lockedIcon: "assets/logos/trophy_cabinet/escocia/williamhillpremiership_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/escocia/Williamhillpremiership_locked_clickable.png"
            },
            {
                key: "league-cup",
                label: "Taça da Liga Escocesa",
                icon: "assets/logos/trophy_cabinet/escocia/premiersports.png",
                lockedIcon: "assets/logos/trophy_cabinet/escocia/premiersports_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/escocia/Premiersports_locked_clickable.png",
                cabinetImage: "assets/logos/trophy_cabinet/escocia/Premiersports_cabinet.png"
            },
            {
                key: "cup",
                label: "Taça Escocesa",
                icon: "assets/logos/trophy_cabinet/escocia/scottishgascup.png",
                lockedIcon: "assets/logos/trophy_cabinet/escocia/scottishgascup_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/escocia/ScottishGasCup_locked_clickable.png",
                cabinetImage: "assets/logos/trophy_cabinet/escocia/ScottishGasCup_cabinet.png"
            },
            {
                key: "europa",
                label: "UEFA Europe League",
                icon: "assets/logos/trophy_cabinet/UEFA/europe league/UefaEuropeLeague.png",
                lockedIcon: "assets/logos/trophy_cabinet/UEFA/europe league/UefaEuropeLeague_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/UEFA/europe league/UefaEuropeLeague_locked_clickable.png"
            },
            {
                key: "conference",
                label: "UEFA Conference League",
                icon: "assets/logos/trophy_cabinet/UEFA/conference league/UEFAConference.png",
                lockedIcon: "assets/logos/trophy_cabinet/UEFA/conference league/UefaConference_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/UEFA/conference league/UefaConference_locked_clickable.png"
            },
            {
                key: "champions",
                label: "UEFA Champions League",
                icon: "assets/logos/trophy_cabinet/UEFA/champions league/UefaChampionsLeague.png",
                lockedIcon: "assets/logos/trophy_cabinet/UEFA/champions league/UefaChampionsLeague_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/UEFA/champions league/UefaChampionsLeague_locked_clickable.png"
            }
        ]
    }
};

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
    let existing = document.getElementById("trophyLightbox");
    if (existing) existing.remove();

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

    lightbox.addEventListener("click", () => lightbox.remove());
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
    document.getElementById("coachModal").hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => fitNarrativeNames(document.getElementById("coachModal")));
}

function closeCoachModal() {
    let modal = document.getElementById("coachModal");
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
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
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.hidden) {
            closeCoachModal();
        }
    });

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
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePhotoLightbox() {
    let lightbox = document.getElementById("photoLightbox");
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

function setupPhotoLightbox() {
    let lightbox = document.getElementById("photoLightbox");
    if (!lightbox || lightbox.dataset.bound === "true") return;

    lightbox.querySelector(".photo-lightbox-backdrop")?.addEventListener("click", closePhotoLightbox);
    lightbox.querySelector(".photo-lightbox-img")?.addEventListener("click", closePhotoLightbox);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closePhotoLightbox();
        }
    });

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

function setupStandingsFloatingTooltips(scope = document) {
    let standings = scope.querySelector(".standings-standings");
    if (!standings || standings.dataset.tooltipBound === "true") return;

    let getAnchor = (target) => target.closest(".standings-form-dot[tabindex], .standings-record-cell.has-tooltip");

    standings.addEventListener("pointerover", (event) => {
        let anchor = getAnchor(event.target);
        if (!anchor || !standings.contains(anchor) || anchor === activeStandingsTooltipAnchor) return;
        showStandingsTooltip(anchor);
    });

    standings.addEventListener("pointerout", (event) => {
        let anchor = getAnchor(event.target);
        if (!anchor || !standings.contains(anchor)) return;
        if (event.relatedTarget && anchor.contains(event.relatedTarget)) return;
        removeStandingsTooltip();
    });

    standings.addEventListener("focusin", (event) => {
        let anchor = getAnchor(event.target);
        if (anchor && standings.contains(anchor)) showStandingsTooltip(anchor);
    });

    standings.addEventListener("focusout", (event) => {
        let anchor = getAnchor(event.target);
        if (!anchor || !standings.contains(anchor)) return;
        removeStandingsTooltip();
    });

    window.addEventListener("scroll", positionStandingsTooltip, true);
    window.addEventListener("resize", positionStandingsTooltip);
    standings.dataset.tooltipBound = "true";
}

function formatPoints(points) {
    return points > 0 ? `+${points}` : `${points}`;
}

function getPointsClass(points) {
    if (points > 0) return "positive";
    if (points < 0) return "negative";
    return "neutral";
}

function renderGeneralTable() {
    let scoreTable = document.getElementById("scoreTable");

    scoreTable.innerHTML = `
        <div class="score-row header">
            <div>#</div>
            <div data-col="4">Jogador</div>
            <div>Pontos</div>
        </div>
    `;

    generalScores.forEach((entry, index) => {
        let row = document.createElement("div");
        row.className = "score-row";
        row.innerHTML = `
            <div class="score-rank">${index + 1}</div>
            <div class="score-cell">
                <span class="score-mobile-label">Jogador</span>
                <span class="score-player">${getCoachLinkMarkup(entry.jogador, "score-player-link")}</span>
            </div>
            <div class="score-points ${getPointsClass(entry.pontos)}">${formatPoints(entry.pontos)}</div>
        `;
        scoreTable.appendChild(row);
    });

    bindCoachLinks(scoreTable);
}

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

function getMatchReportById(reportId) {
    return leagues
        .flatMap((league) => league.fixtures || [])
        .map((fixture) => fixture.report)
        .find((report) => report?.id === reportId) || null;
}

function getReportTeamMarkup(report, side) {
    let fixture = report.fixture;
    let teamName = side === "home" ? fixture.home : fixture.away;
    let league = leagues.find((entry) => entry.fixtures?.includes(fixture));
    let team = league ? getLeagueTeamEntry(league, teamName) : null;
    let logo = league ? getLeagueTeamLogo(league, teamName) : "";
    let logoMarkup = logo ? `<img src="${logo}" alt="${teamName}" class="match-report-team-logo">` : "";
    return `
        <div class="match-report-team match-report-team-${side}">
            ${side === "away" ? logoMarkup : ""}
            <div>
                <strong>${teamName}</strong>
                <span>${report.coaches?.[side] || team?.jogador || "PC"}</span>
            </div>
            ${side === "home" ? logoMarkup : ""}
        </div>
    `;
}

function getReportStatNumber(value) {
    let normalized = String(value).replace("%", "").replace(",", ".").replace(/[^\d.-]/g, "");
    let parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
}

function renderMatchReportStats(report) {
    return report.stats.map((stat) => {
        let homeValue = getReportStatNumber(stat.home);
        let awayValue = getReportStatNumber(stat.away);
        let total = homeValue + awayValue || 1;
        let homeWidth = Math.max(4, (homeValue / total) * 100);
        let awayWidth = Math.max(4, (awayValue / total) * 100);
        return `
            <div class="match-report-stat">
                <div class="match-report-stat-label">${stat.label}</div>
                <div class="match-report-stat-row">
                    <span>${stat.home}</span>
                    <div class="match-report-bars" aria-hidden="true">
                        <i class="home" style="width:${homeWidth}%"></i>
                        <i class="away" style="width:${awayWidth}%"></i>
                    </div>
                    <span>${stat.away}</span>
                </div>
            </div>
        `;
    }).join("");
}

function getFormationPlayerNames(formation = {}) {
    return (formation.players || [])
        .flat()
        .map((player) => player?.name)
        .filter(Boolean)
        .sort((a, b) => b.length - a.length);
}

function escapeRegExp(value = "") {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getEventNameVariants(name = "") {
    let cleanName = String(name).replace(/\s+/g, " ").trim();
    if (!cleanName) return [];

    let parts = cleanName.split(" ").filter(Boolean);
    let lastName = parts[parts.length - 1] || "";
    let variants = [cleanName];
    if (parts.length > 1 && lastName) {
        variants.push(`${parts[0].charAt(0)}. ${lastName}`);
    }
    if (lastName) variants.push(lastName);

    return [...new Set(variants)].filter(Boolean);
}

function getEventEdgePerson(body = "", side = "home") {
    let parts = body.split(/\s+/).filter(Boolean);
    if (parts.length <= 2) return body.trim();

    if (side === "away") {
        let lastTwo = parts.slice(-2);
        if (/^\p{L}\.$/u.test(lastTwo[0])) return lastTwo.join(" ");
        return parts.slice(-2).join(" ");
    }

    let firstTwo = parts.slice(0, 2);
    if (/^\p{L}\.$/u.test(firstTwo[0])) return firstTwo.join(" ");
    return firstTwo.join(" ");
}

function matchEventEdgeName(body = "", playerNames = [], side = "home") {
    let candidates = playerNames
        .flatMap((name) => getEventNameVariants(name))
        .sort((a, b) => b.length - a.length);

    return candidates.find((name) => {
        let escaped = escapeRegExp(name);
        let pattern = side === "away"
            ? new RegExp(`(?:^|\\s)${escaped}$`, "iu")
            : new RegExp(`^${escaped}(?:\\s|$)`, "iu");
        return pattern.test(body);
    }) || "";
}

function parseMatchReportEvent(event = "", playerNames = [], side = "home") {
    const eventMatch = event.match(/^(\d+(?:\+\d+)?)'\s+(.+)$/);
    if (!eventMatch) {
        return { minute: "", scorer: event, assist: "", type: "goal" };
    }

    const [, minute, body] = eventMatch;
    if (/\bexpulso\b/i.test(body)) {
        return { minute, scorer: body.replace(/\s*expulso\s*/i, "").trim(), assist: "Expulso", type: "red" };
    }

    if (/(^|\s)a\.g\.(\s|$)/i.test(body) || body.includes("(AG)")) {
        return { minute, scorer: body.replace(/\s*a\.g\.\s*/i, "").replace(/\s*\(AG\)\s*/g, "").trim(), assist: "Autogolo", type: "own-goal" };
    }

    if (/\bpen\b/i.test(body)) {
        return { minute, scorer: body.replace(/\s*pen\s*/i, "").trim(), assist: "Penálti", type: "penalty" };
    }

    const knownScorer = matchEventEdgeName(body, playerNames, side);
    if (knownScorer) {
        let scorerMatch = side === "away"
            ? body.match(new RegExp(`(?:^|\\s)(${escapeRegExp(knownScorer)})$`, "iu"))
            : body.match(new RegExp(`^(${escapeRegExp(knownScorer)})(?:\\s|$)`, "iu"));
        let scorer = scorerMatch?.[1] || knownScorer;
        let edgeScorer = getEventEdgePerson(body, side);
        if (!knownScorer.includes(" ") && edgeScorer.toLowerCase().endsWith(knownScorer.toLowerCase())) {
            scorer = edgeScorer;
        }
        let assist = side === "away"
            ? body.slice(0, body.length - scorer.length).trim()
            : body.slice(scorer.length).trim();
        return {
            minute,
            scorer,
            assist,
            type: "goal"
        };
    }

    const scorer = getEventEdgePerson(body, side);
    const assist = side === "away"
        ? body.slice(0, body.length - scorer.length).trim()
        : body.slice(scorer.length).trim();

    return {
        minute,
        scorer,
        assist,
        type: "goal"
    };
}

function normalizePlayerName(value = "") {
    return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\p{L}\p{N}\s.]/gu, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

function getPlayerGoalKeys(value = "") {
    let normalized = normalizePlayerName(value);
    if (!normalized) return [];
    let parts = normalized.split(" ").filter(Boolean);
    let lastName = parts[parts.length - 1] || "";
    return [...new Set([normalized, lastName].filter(Boolean))];
}

function getScorerNames(report, side) {
    let formation = getReportFormation(report, side);
    let playerNames = getFormationPlayerNames(formation);
    let scorerKeys = new Set();
    (report.events?.[side] || [])
        .map((event) => parseMatchReportEvent(event, playerNames, side))
        .filter((event) => event.type === "goal" || event.type === "penalty")
        .forEach((event) => {
            getPlayerGoalKeys(event.scorer).forEach((key) => scorerKeys.add(key));
        });
    return scorerKeys;
}

function renderMatchReportEvents(events = [], formation = {}, side = "home") {
    if (!events.length) {
        return `<span class="match-report-empty">Sem golos</span>`;
    }

    const playerNames = getFormationPlayerNames(formation);
    return events.map((event) => {
        const parsed = parseMatchReportEvent(event, playerNames, side);
        const detail = parsed.assist
            ? (parsed.type === "goal" ? `Assist. ${parsed.assist}` : parsed.assist)
            : "";
        return `
            <span class="match-report-goal match-report-goal-${parsed.type}">
                <i aria-hidden="true">${parsed.type === "red" ? "■" : parsed.type === "own-goal" ? "↺" : "⚽"}</i>
                <span class="match-report-goal-minute">${parsed.minute}'</span>
                <span class="match-report-goal-main">
                    <b>${parsed.scorer}</b>
                    ${detail ? `<em>${detail}</em>` : ""}
                </span>
            </span>
        `;
    }).join("");
}

const matchFormationLayouts = {
    "4-3-3 DM": [["PL"], ["E", "D"], ["MC", "MC"], ["MD"], ["DE", "DC", "DC", "DD"], ["GR"]],
    "4-2-3-1": [["PL"], ["E", "MO", "D"], ["MC", "MC"], ["DE", "DC", "DC", "DD"], ["GR"]],
    "3-4-2-1": [["PL"], ["MO", "MO"], ["ME", "MC", "MC", "MD"], ["DC", "DC", "DC"], ["GR"]],
    "3-4-1-2": [["PL", "PL"], ["MO"], ["ME", "MC", "MC", "MD"], ["DC", "DC", "DC"], ["GR"]],
    "4-3-1-2": [["PL", "PL"], ["MO"], ["MC", "MC", "MC"], ["DE", "DC", "DC", "DD"], ["GR"]]
};

function getFormationPlayerPosition(player) {
    return (typeof player === "string" ? player : player?.pos || "").toUpperCase();
}

function inferThreeCenterBackFormationName(formation) {
    let rows = formation?.players || [];
    if (rows.length < 4) return formation?.name;

    let defenseRow = rows[rows.length - 2] || [];
    let centerBackPositions = new Set(["DC", "CC"]);
    let hasThreeCenterBacks = defenseRow.length === 3
        && defenseRow.every((player) => centerBackPositions.has(getFormationPlayerPosition(player)));

    if (!hasThreeCenterBacks) return formation?.name;

    let outfieldRows = rows.slice(0, -1);
    let shape = [defenseRow.length, ...outfieldRows.slice(0, -1).map((row) => row.length).reverse()];
    return shape.join("-");
}

function hasDetailedFormation(formation) {
    return Boolean(formation && typeof formation !== "string" && formation.players?.some((row) => row.some((player) => player?.name || player?.number || player?.rating)));
}

function getFallbackDetailedFormation(report, side) {
    let fixture = report.fixture;
    if (!fixture) return null;

    let teamName = side === "home" ? fixture.home : fixture.away;
    let league = leagues.find((entry) => entry.fixtures?.includes(fixture));
    let fixtures = league?.fixtures || [];
    let currentIndex = fixtures.indexOf(fixture);
    let candidates = fixtures
        .map((candidateFixture, index) => {
            let candidateReport = candidateFixture.report;
            if (!candidateReport || candidateReport === report) return null;

            let candidateSide = candidateFixture.home === teamName ? "home" : candidateFixture.away === teamName ? "away" : null;
            if (!candidateSide) return null;

            let candidateFormation = candidateReport.formations?.[candidateSide];
            if (!hasDetailedFormation(candidateFormation)) return null;

            let distance = currentIndex >= 0 ? Math.abs(index - currentIndex) : index;
            return { formation: candidateFormation, distance };
        })
        .filter(Boolean)
        .sort((a, b) => a.distance - b.distance);

    return candidates[0]?.formation || null;
}

function getReportFormation(report, side) {
    let formation = report.formations?.[side];
    if (!formation) return { name: "Sem dados", players: [] };
    if (typeof formation === "string") {
        let fallbackFormation = getFallbackDetailedFormation(report, side);
        if (fallbackFormation) {
            return {
                name: formation || inferThreeCenterBackFormationName(fallbackFormation) || fallbackFormation.name || "Sem dados",
                players: fallbackFormation.players || []
            };
        }

        return {
            name: formation,
            players: matchFormationLayouts[formation] || []
        };
    }
    return {
        name: inferThreeCenterBackFormationName(formation) || formation.name || "Sem dados",
        players: formation.players || []
    };
}

function renderFormationPlayer(player, scorers = new Set()) {
    if (!player) return "";
    if (typeof player === "string") {
        player = { pos: player };
    }

    let hasDetails = player.name || player.number || player.rating;
    let number = player.number || "";
    let name = player.name || "";
    let rating = player.rating || "";
    let position = player.pos || "";
    let hasGoal = name ? getPlayerGoalKeys(name).some((key) => scorers.has(key)) : Boolean(player.goal);

    if (!hasDetails) {
        return `<span class="match-report-player-node is-placeholder"><span class="match-report-player-pos-only">${position}</span></span>`;
    }

    return `
        <span class="match-report-player-node" title="${[number ? `#${number}` : "", name, position, rating].filter(Boolean).join(" · ")}">
            ${hasGoal ? `<span class="match-report-player-goal" aria-hidden="true">⚽</span>` : ""}
            <span class="match-report-shirt">${number}</span>
            <span class="match-report-player-badge">
                ${rating ? `<b>${rating}</b>` : ""}
                ${position ? `<em>${position}</em>` : ""}
            </span>
            ${name ? `<span class="match-report-player-name">${name}</span>` : ""}
        </span>
    `;
}

function renderFormationPitch(report, side) {
    let formation = getReportFormation(report, side);
    let rows = formation.players;
    let scorers = getScorerNames(report, side);
    if (!rows.length) {
        return `<div class="match-report-pitch match-report-pitch-empty"><span class="match-report-empty">Formação detalhada indisponível</span></div>`;
    }
    let totalRows = rows.length;
    return `
        <div class="match-report-pitch match-report-pitch-${side}">
            ${rows.map((row, index) => `
                <div class="match-report-pitch-row match-report-pitch-row-${index + 1}" style="--row-count:${row.length}; --row-index:${index + 1}; --total-rows:${totalRows};">
                    ${row.map((player) => renderFormationPlayer(player, scorers)).join("")}
                </div>
            `).join("")}
        </div>
    `;
}

function renderFormationTeamHeader(report, side) {
    let fixture = report.fixture;
    let teamName = side === "home" ? fixture.home : fixture.away;
    let league = leagues.find((entry) => entry.fixtures?.includes(fixture));
    let team = league ? getLeagueTeamEntry(league, teamName) : null;
    let formation = getReportFormation(report, side);
    let logo = league ? getLeagueTeamLogo(league, teamName) : "";
    let logoMarkup = logo ? `<img src="${logo}" alt="${teamName}">` : "";
    return `
        <div class="match-report-tactic-head">
            <span>${logoMarkup}${teamName}</span>
            <strong>${formation.name}</strong>
        </div>
    `;
}

function renderMatchReportTacticCard(report, side) {
    if (!report.formations) return "";
    return `
        <section class="match-report-tactic-card match-report-tactic-card-${side}" aria-label="Formação ${side === "home" ? "da equipa da casa" : "da equipa visitante"}">
            ${renderFormationTeamHeader(report, side)}
            ${renderFormationPitch(report, side)}
        </section>
    `;
}

function openMatchReport(reportId) {
    let report = getMatchReportById(reportId);
    if (!report) return;

    closeMatchReport();

    let fixture = report.fixture;
    let score = getFixtureScoreLabel(fixture);
    let competition = report.competition || fixture.competition || "Hrvatska nogometna liga";
    let modal = document.createElement("div");
    modal.id = "matchReportModal";
    modal.className = "match-report-modal";
    modal.innerHTML = `
        <div class="match-report-backdrop" onclick="closeMatchReport()"></div>
        <article class="match-report-dialog" role="dialog" aria-modal="true" aria-label="Relatório do jogo">
            <button class="match-report-close" type="button" onclick="closeMatchReport()" aria-label="Fechar relatório">&times;</button>
            <header class="match-report-hero">
                <span class="match-report-league">${competition}</span>
                <div class="match-report-scoreline">
                    ${getReportTeamMarkup(report, "home")}
                    <strong class="match-report-score">${score}</strong>
                    ${getReportTeamMarkup(report, "away")}
                </div>
                <div class="match-report-meta">
                    <span>${report.date}</span>
                    <span>${report.stadium}</span>
                    <span>${report.weather}</span>
                    <span class="match-report-mvp">&#9733; ${report.playerOfMatch} <b>${report.rating}</b></span>
                </div>
            </header>
            <div class="match-report-body">
                ${renderMatchReportTacticCard(report, "home")}
                <div class="match-report-center">
                    <section class="match-report-card match-report-events">
                        <h3>Eventos do jogo</h3>
                        <div class="match-report-events-grid">
                            <div class="match-report-events-team match-report-events-team-home">${renderMatchReportEvents(report.events.home, getReportFormation(report, "home"), "home")}</div>
                            <div class="match-report-events-team match-report-events-team-away">${renderMatchReportEvents(report.events.away, getReportFormation(report, "away"), "away")}</div>
                        </div>
                    </section>
                    <section class="match-report-card match-report-data">
                        <h3>Dados do jogo</h3>
                        ${renderMatchReportStats(report)}
                    </section>
                </div>
                ${renderMatchReportTacticCard(report, "away")}
            </div>
        </article>
    `;
    document.body.appendChild(modal);
    document.body.classList.add("modal-open");
}

function closeMatchReport() {
    let modal = document.getElementById("matchReportModal");
    if (!modal) return;
    modal.remove();
    if (!document.getElementById("coachModal") || document.getElementById("coachModal").hidden) {
        document.body.classList.remove("modal-open");
    }
}

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

function renderLeagueTeamOfYear(league) {
    if (!league.merits?.teamOfYear?.length) return "";
    let teamOfYear = league.merits.teamOfYear.map((player) => `
        <div class="league-toty-player" style="--x: ${player.x}%; --y: ${player.y}%;">
            <div class="league-toty-shirt">${player.number}</div>
            <div class="league-toty-name">${player.name}</div>
            <div class="league-toty-meta">${player.role} · ${player.team}</div>
        </div>
    `).join("");

    return `
        <section class="league-side-card league-toty-card">
            <div class="league-side-head">
                <span>Onze ideal</span>
                <strong>Team of the Year</strong>
            </div>
            <div class="league-toty-panel">
                <div class="league-toty-pitch">
                    <div class="league-toty-lines" aria-hidden="true">
                        <span class="league-toty-halfway"></span>
                        <span class="league-toty-centre-circle"></span>
                        <span class="league-toty-box league-toty-box-left"></span>
                        <span class="league-toty-box league-toty-box-right"></span>
                        <span class="league-toty-small-box league-toty-small-box-left"></span>
                        <span class="league-toty-small-box league-toty-small-box-right"></span>
                    </div>
                    ${teamOfYear}
                </div>
            </div>
        </section>
    `;
}

function getLeagueNewsVisual(article) {
    let image = article.image || "assets/treinadores/painatal/painatal_new.png";
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
    existingModal?.remove();

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
    document.body.classList.add("modal-open");
}

function closeLeagueNewsArticle() {
    let modal = document.getElementById("leagueNewsArticleModal");
    if (!modal) return;
    modal.remove();
    if (!document.getElementById("matchReportModal") && (!document.getElementById("coachModal") || document.getElementById("coachModal").hidden)) {
        document.body.classList.remove("modal-open");
    }
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

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.getElementById("leagueNewsArticleModal")) {
        closeLeagueNewsArticle();
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

function renderTransferClub(league, clubName) {
    if (!clubName) {
        return `<span class="league-transfer-club-name muted" title="Sem clube">Sem clube</span>`;
    }

    let entry = getLeagueTeamEntry(league, clubName);
    let clubTitle = escapeAttribute(clubName);
    let logo = entry?.logo || transferClubLogos[clubName];
    if (logo) {
        return `
            <span class="league-transfer-club-cell league-transfer-club-cell--logo-only" title="${clubTitle}">
                <img src="${logo}" alt="${clubName}" class="league-transfer-team-logo" loading="lazy">
            </span>
        `;
    }

    return `
        <span class="league-transfer-club-cell">
            <span class="league-transfer-club-name" title="${clubTitle}">${clubName}</span>
        </span>
    `;
}

function formatTransferValue(value) {
    return String(value || "")
        .replace(/Empréstimo/g, "Emp.")
        .replace(/Emp\\. -/g, "Emp. ·");
}

function escapeAttribute(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function renderLeagueTransfers(league) {
    if (!league.transfers?.length) return "";
    let humanTeams = new Set((league.tabela || []).filter((entry) => entry.jogador).map((entry) => entry.equipa));
    let parseDate = (date) => {
        let [day, month, year] = String(date).split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
    };
    let rows = [...league.transfers]
        .sort((a, b) => parseDate(b.date) - parseDate(a.date))
        .map((item) => {
            let isIncoming = humanTeams.has(item.to);
            let type = isIncoming ? "Entrada" : "Saída";
            let playerTitle = escapeAttribute(item.player);
            let valueTitle = escapeAttribute(item.value);
            let routeTitle = escapeAttribute(`${item.from || "Sem clube"} → ${item.to || "Sem clube"}`);
            let rowTitle = escapeAttribute(`${item.date} · ${item.player} · ${item.from || "Sem clube"} → ${item.to || "Sem clube"} · ${item.value}`);

            return `
                <div class="league-transfer-row ${isIncoming ? "incoming" : "outgoing"}" title="${rowTitle}">
                    <div class="league-transfer-date">${item.date}</div>
                    <div class="league-transfer-player">
                        <div class="league-transfer-player-name" title="${playerTitle}">${item.player}</div>
                        <div class="league-transfer-type">${type}</div>
                    </div>
                    <div class="league-transfer-route" title="${routeTitle}">
                        ${renderTransferClub(league, item.from)}
                        <span class="league-transfer-arrow">→</span>
                        ${renderTransferClub(league, item.to)}
                    </div>
                    <div class="league-transfer-value" title="${valueTitle}">${formatTransferValue(item.value)}</div>
                </div>
            `;
        }).join("");

    return `
        <section class="league-side-card league-transfers-card">
            <div class="league-side-head centered league-transfers-head">
                <strong>Transferências</strong>
                <div class="league-transfer-window is-closed" title="Janela de transferências fechada">
                    <span>Mercado</span>
                    <b>Fechado</b>
                </div>
            </div>
            <div class="league-transfer-table-head">
                <span>Data</span>
                <span>Jogador</span>
                <span>Movimento</span>
                <span>Valor</span>
            </div>
            <div class="league-transfers-scroll">${rows}</div>
        </section>
    `;
}

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

function renderLeagueLowerPanel(league) {
    let content = [
        renderLeagueLiveCards(league),
        renderLeagueTransfers(league),
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
        let formMarkup = isLive
            ? `<div class="standings-form-cell" data-col="15">${renderFormDots(entry.form, entry.formDetails)}</div>`
            : "";
        let infState = entry.inf === "↑" ? "up" : entry.inf === "↓" ? "down" : "";

        rows += `
            <div class="standings-row ${isLive ? "live" : ""} ${entry.zone ? `zone-${entry.zone}` : ""}">
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
                ${isLive ? renderResultRecordCell(entry, "V", entry.v, 6) : `<div class="standings-cell-center" data-col="6">${entry.v}</div>`}
                ${isLive ? renderResultRecordCell(entry, "E", entry.e, 7) : `<div class="standings-cell-center" data-col="7">${entry.e}</div>`}
                ${isLive ? renderResultRecordCell(entry, "D", entry.d, 8) : `<div class="standings-cell-center" data-col="8">${entry.d}</div>`}
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
                            <div class="formula-line">Os bónus finais só entram quando a época terminar.</div>
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
        </div>
        <div class="league-season-layout ${isLive ? "live" : ""}">
            <div class="league-main-column">
                <div class="league-table-wrap">
                    <div class="standings-standings">
                        <div class="standings-row header ${isLive ? "live" : ""}">
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
                            ${isLive ? `<div data-col="15">Form</div>` : ""}
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
    let transferScroll = panel.querySelector(".league-transfers-scroll");
    if (transferScroll) transferScroll.scrollTop = transferScrollTop;
    let calendarScroll = panel.querySelector(".league-calendar-scroll");
    if (calendarScroll) calendarScroll.scrollTop = calendarScrollTop;
    scheduleLeagueLiveAutoAdvance(league);
    bindCoachLinks(panel);
}

function bindCoachLinks(scope = document) {
    scope.querySelectorAll(".coach-link").forEach((link) => {
        if (link.dataset.bound === "true") return;
        link.addEventListener("click", () => {
            let coachId = link.dataset.coachId;
            openCoachModal(coachId);
        });
        link.dataset.bound = "true";
    });
}

function start() {
    let btn = document.getElementById("drawBtn");
    btn.disabled = true;
    btn.innerText = "A decorrer...";

    shuffledTeams = [...equipas];
    shuffledPlayers = [...jogadores];
    shuffle(shuffledTeams);
    shuffle(shuffledPlayers);

    remainingTeams = [...shuffledTeams];
    remainingPlayers = [...shuffledPlayers];
    currentRound = 0;
    resultados = [];

    document.getElementById("current").innerHTML = "";
    document.getElementById("table").innerHTML = "";

    showRemainingSidebars(true);
    updateRemainingSidebars();
    startTeamRoulette();
}

function spinRoulette(parent, items, targetIndex, itemWidth, spinLoops, renderItem, onLanded) {
    let vpWidth = getViewportWidth();
    let { repeatedItems, cycleWidth } = buildLoopedRouletteItems(items, itemWidth, vpWidth, spinLoops);

    let container = document.createElement("div");
    container.className = "roulette-container";

    let marker = document.createElement("div");
    marker.className = "roulette-marker";
    container.appendChild(marker);

    let viewport = document.createElement("div");
    viewport.className = "roulette-viewport";

    let strip = document.createElement("div");
    strip.className = "roulette-strip";

    repeatedItems.forEach((entry, index) => {
        let item = renderItem(entry);
        item.dataset.baseIndex = index % items.length;
        strip.appendChild(item);
    });

    viewport.appendChild(strip);
    container.appendChild(viewport);
    parent.appendChild(container);
    scrollToElement(container);

    let randomOffset = (Math.random() - 0.5) * (itemWidth - 2);
    let fullCycleWidth = TOTAL_ROUNDS * itemWidth;
    let totalDistance = spinLoops * fullCycleWidth;
    let adjustedLoops = Math.ceil(totalDistance / cycleWidth);
    let finalX = -((adjustedLoops * cycleWidth) + (targetIndex * itemWidth)) + (vpWidth / 2) - (itemWidth / 2) + randomOffset;

    animateRoulette(strip, cycleWidth, finalX, SPIN_DURATION, () => {
        highlightWinner(strip, targetIndex);
        onLanded();
    });
}

function updateRemainingSidebars() {
    let teamsEl = document.getElementById("remainingTeams");
    let playersEl = document.getElementById("remainingPlayers");

    let remainingTeamNames = remainingTeams.map((t) => t.nome);
    let remainingPlayerNames = [...remainingPlayers];

    teamsEl.innerHTML = `<div class="remaining-title">Equipas</div>` +
        [...equipas].sort((a, b) => a.rank - b.rank).map((team) => {
            let used = !remainingTeamNames.includes(team.nome);
            return `<div class="remaining-chip${used ? " used" : ""}"><img class="remaining-chip-logo" src="${team.img}" alt="${team.nome}"><span>${team.nome}</span></div>`;
        }).join("");

    playersEl.innerHTML = `<div class="remaining-title">Jogadores</div>` +
        jogadores.map((player) => {
            let used = !remainingPlayerNames.includes(player);
            return `<div class="remaining-chip${used ? " used" : ""}">${player}</div>`;
        }).join("");
}

function showRemainingSidebars(visible) {
    document.getElementById("remainingTeams").classList.toggle("active", visible);
    document.getElementById("remainingPlayers").classList.toggle("active", visible);
}

function startTeamRoulette() {
    let current = document.getElementById("current");
    current.innerHTML = "";

    let targetTeam = shuffledTeams[currentRound];
    let items = [...remainingTeams];
    let targetIndex = items.findIndex((team) => team.nome === targetTeam.nome);

    let roundInfo = document.createElement("div");
    roundInfo.className = "round-info";
    roundInfo.textContent = `Sorteio ${currentRound + 1} / ${TOTAL_ROUNDS}`;
    current.appendChild(roundInfo);

    spinRoulette(current, items, targetIndex, ITEM_WIDTH_TEAM, TEAM_SPIN_LOOPS, (team) => {
        let item = document.createElement("div");
        item.className = "roulette-item";
        let image = document.createElement("img");
        image.src = team.img;
        image.alt = team.nome;
        item.appendChild(image);
        return item;
    }, () => {
        remainingTeams = remainingTeams.filter((item) => item.nome !== targetTeam.nome);
        updateRemainingSidebars();
        onTeamLanded(targetTeam);
    });
}

function onTeamLanded(team) {
    let current = document.getElementById("current");

    let info = document.createElement("div");
    info.className = "team-info";
    info.innerHTML = `
        <img class="logo-big" src="${team.img}" alt="${team.nome}">
        <div class="team-name-big">${team.nome}</div>
        <div class="team-rank">Classificação prevista: ${team.rank}<sup>&ordm;</sup></div>
    `;

    current.appendChild(info);
    scrollToElement(info);

    let button = document.createElement("button");
    button.className = "action-btn gold";
    button.textContent = "Sortear Jogador";
    button.onclick = () => {
        button.remove();
        startPlayerRoulette(team);
    };

    current.appendChild(button);
}

function startPlayerRoulette(team) {
    let current = document.getElementById("current");
    let targetPlayer = shuffledPlayers[currentRound];
    let items = [...remainingPlayers];
    let targetIndex = items.findIndex((player) => player === targetPlayer);

    spinRoulette(current, items, targetIndex, ITEM_WIDTH_PLAYER, PLAYER_SPIN_LOOPS, (player) => {
        let item = document.createElement("div");
        item.className = "roulette-item name-item";
        item.textContent = player;
        return item;
    }, () => onPlayerLanded(team, targetPlayer));
}

function onPlayerLanded(team, player) {
    let current = document.getElementById("current");

    let reveal = document.createElement("div");
    reveal.className = "final-reveal";
    reveal.innerHTML = `
        <div class="final-logo-wrap">
            <img src="${team.img}" alt="${team.nome}">
        </div>
        <div class="final-team-name">${team.nome}</div>
        <div class="final-player-label">Jogador Sorteado</div>
        <div class="final-player-name">${player}</div>
    `;
    current.appendChild(reveal);
    scrollToElement(reveal);

    resultados.push({
        equipa: team.nome,
        jogador: player,
        rank: team.rank,
        img: team.img
    });

    remainingPlayers = remainingPlayers.filter((item) => item !== player);
    currentRound++;
    updateRemainingSidebars();

    let button = document.createElement("button");
    button.className = "action-btn";

    if (currentRound < TOTAL_ROUNDS) {
        button.textContent = "Próxima Equipa";
        button.onclick = () => {
            let started = false;
            function beginNext() {
                if (started) return;
                started = true;
                clearInterval(checkScroll);
                startTeamRoulette();
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
            let checkScroll = setInterval(() => {
                let rect = { top: window.scrollY };
                if (rect.top <= 5) beginNext();
            }, 50);
            setTimeout(beginNext, 1500);
        };
    } else {
        button.textContent = "Ver Resultados";
        button.onclick = () => showResults();
    }

    current.appendChild(button);
}

function showCompletedDraw() {
    document.getElementById("drawBtn").style.display = "none";
    document.getElementById("muteBtn").style.display = "none";
    showRemainingSidebars(false);
    resultados = [...FINAL_RESULTS];
    showResults();
}

function showResults() {
    showRemainingSidebars(false);
    let current = document.getElementById("current");
    let table = document.getElementById("table");

    current.innerHTML = "<h2 class=\"panel-title\">Resultados Finais</h2>";
    table.innerHTML = "";

    resultados.sort((a, b) => a.rank - b.rank);

    resultados.forEach((entry) => {
        let row = document.createElement("div");
        row.className = "row";
        row.innerHTML = `
            <div class="table-rank">${entry.rank}&ordm;</div>
            <div class="table-match">
                <div class="table-player">${getCoachLinkMarkup(entry.jogador, "results-player-link")}</div>
                <span class="table-connector" aria-hidden="true"></span>
                <div class="table-team">
                    <img class="table-logo" src="${entry.img}" alt="${entry.equipa}">
                    <span class="table-team-name">${entry.equipa}</span>
                </div>
            </div>
        `;
        table.appendChild(row);
    });

    bindCoachLinks(table);

    if (DISCORD_WEBHOOK) {
        let shareBtn = document.createElement("button");
        shareBtn.className = "action-btn gold";
        shareBtn.textContent = "Partilhar";
        shareBtn.onclick = () => shareToDiscord(shareBtn);
        table.appendChild(shareBtn);
    }

    scrollToElement(table);
    document.getElementById("drawBtn").innerText = "Sorteio Terminado";
}

const DISCORD_WEBHOOK = "";

async function shareToDiscord(btn) {
    btn.disabled = true;
    btn.textContent = "A enviar...";

    try {
        let panel = document.querySelector("#drawView .page-panel");
        let canvas = await capturePanel(panel);

        let blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

        let form = new FormData();
        form.append("file", blob, "sorteio.png");
        form.append("payload_json", JSON.stringify({
            content: "Sorteio concluído! Aqui estão os resultados:"
        }));

        let response = await fetch(DISCORD_WEBHOOK, { method: "POST", body: form });

        if (response.ok) {
            btn.textContent = "Enviado!";
        } else {
            console.error("Discord webhook error:", response.status, await response.text());
            btn.textContent = "Erro ao enviar";
            setTimeout(() => {
                btn.textContent = "Partilhar";
                btn.disabled = false;
            }, 3000);
        }
    } catch (e) {
        console.error("Discord share error:", e);
        btn.textContent = "Erro ao enviar";
        setTimeout(() => {
            btn.textContent = "Partilhar";
            btn.disabled = false;
        }, 3000);
    }
}

function imageToDataURL(img) {
    let c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    c.getContext("2d").drawImage(img, 0, 0);
    return c.toDataURL("image/png");
}

const HTML2CANVAS_SRC = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
let html2canvasLoader = null;

// Carregado só quando alguém carrega em "Partilhar", para não pesar em todas as visitas.
function loadHtml2Canvas() {
    if (window.html2canvas) {
        return Promise.resolve(window.html2canvas);
    }
    if (!html2canvasLoader) {
        html2canvasLoader = new Promise((resolve, reject) => {
            let script = document.createElement("script");
            script.src = HTML2CANVAS_SRC;
            script.onload = () => resolve(window.html2canvas);
            script.onerror = () => {
                html2canvasLoader = null;
                reject(new Error("Não foi possível carregar o html2canvas"));
            };
            document.head.appendChild(script);
        });
    }
    return html2canvasLoader;
}

async function capturePanel(panel) {
    let render = await loadHtml2Canvas();

    let images = panel.querySelectorAll("img");
    let originals = [];
    images.forEach((img) => {
        originals.push(img.src);
        try { img.src = imageToDataURL(img); } catch (_) {}
    });

    let canvas = await render(panel, { backgroundColor: "#02071b", scale: 2 });

    images.forEach((img, i) => { img.src = originals[i]; });
    return canvas;
}

function toggleFullscreen() {
    const btn = document.getElementById("fullscreenBtn");
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            btn.classList.add("is-fullscreen");
        }).catch(() => {});
    } else {
        document.exitFullscreen().then(() => {
            btn.classList.remove("is-fullscreen");
        }).catch(() => {});
    }
}

document.addEventListener("fullscreenchange", () => {
    const btn = document.getElementById("fullscreenBtn");
    btn.classList.toggle("is-fullscreen", !!document.fullscreenElement);
});

renderGeneralTable();
renderLeagueSelector();
renderCoachCards();
setupFormulaPopover();
restoreMuteState();
bindMusicRecovery();
setActiveTab(getTabFromHash());




const jogadores = [
    "Gonçalo", "Rato", "Chico", "Nabais",
    "Gamy", "Painatal", "Cardoso", "Hugo"
];

const coachProfiles = [
    {
        id: "goncalo",
        nome: "Gonçalo",
        cargo: "O estratega metódico",
        tag: "Táctica, disciplina e aquela aura de quem já abriu três separadores de scouting antes do save começar.",
        descricao: "Gonçalo entra em cada época com ar de quem já tem o plano A, B e C preparados. Quando o caos começa, é um dos que mais rapidamente transforma pressão em organização.",
        destaque: "Joga melhor quando o save começa a ficar sério.",
        foto: ""
    },
    {
        id: "rato",
        nome: "Rato",
        cargo: "O underdog killer",
        tag: "Perigoso com equipas médias, ainda mais perigoso quando o subestimam.",
        descricao: "Rato tem aquele perfil de manager que cresce com o contexto competitivo. Gosta do desafio, aceita o caos e costuma sacar campanhas acima do que a previsão prometia.",
        destaque: "Especialista em superar expectativas.",
        foto: "assets/Treinadores/Rato/Rato1.png",
        fotos: [
            "assets/Treinadores/Rato/Rato1.png",
            "assets/Treinadores/Rato/Rato2.png"
        ]
    },
    {
        id: "chico",
        nome: "Chico",
        cargo: "O gestor cerebral",
        tag: "Menos barulho, mais controlo. Vai somando pontos enquanto os outros ainda estão a discutir scouting.",
        descricao: "Chico é o tipo de treinador que parece tranquilo, mas por baixo está a otimizar tudo. Não precisa de grandes foguetes para se manter competitivo e consistente.",
        destaque: "Consistência e cabeça fria nas decisões.",
        foto: ""
    },
    {
        id: "nabais",
        nome: "Nabais",
        cargo: "O caos criativo",
        tag: "Energia de wildcard puro, mas com talento suficiente para transformar caos em espetáculo.",
        descricao: "Nabais vive melhor quando o save deixa margem para improviso. É imprevisível, divertido e perigoso precisamente porque nunca parece jogar da forma mais óbvia.",
        destaque: "O manager que pode partir o guião da época.",
        foto: ""
    },
    {
        id: "gamy",
        nome: "Gamy",
        cargo: "O provocador oficial",
        tag: "Traz confiança, trash talk e vontade real de transformar qualquer sorteio numa storyline.",
        descricao: "Gamy joga tanto o save como a narrativa à volta dele. Quando começa a ganhar embalo, é dos treinadores que melhor sabe capitalizar momentum e mexer com o grupo.",
        destaque: "Quando aquece, toda a liga sente.",
        foto: ""
    },
    {
        id: "painatal",
        nome: "Painatal",
        cargo: "O sobrevivente teimoso",
        tag: "Pode sofrer, pode ranger, mas nunca sai de cena sem luta.",
        descricao: "Painatal tem aquele perfil resiliente que encaixa muito bem em ligas longas. Mesmo quando a tabela aperta, raramente deixa de procurar uma forma de virar a narrativa.",
        destaque: "Mentalidade de resistência competitiva.",
        foto: ""
    },
    {
        id: "cardoso",
        nome: "Cardoso",
        cargo: "O técnico de detalhes",
        tag: "Foco, leitura de jogo e gosto por controlar as pequenas margens.",
        descricao: "Cardoso costuma destacar-se nas nuances: preparação, contexto e timing. Não precisa do save mais vistoso para ser dos mais difíceis de bater.",
        destaque: "Pequenas decisões, grande impacto.",
        foto: ""
    },
    {
        id: "hugo",
        nome: "Hugo",
        cargo: "O acelerador da mesa",
        tag: "Vai atrás da vantagem sem medo e adora meter intensidade competitiva em cima do save.",
        descricao: "Hugo traz urgência e irreverência ao campeonato. É o tipo de manager que força a liga a reagir, porque raramente entra numa época para ser figurante.",
        destaque: "Intensidade alta do início ao fim.",
        foto: ""
    }
];

const equipas = [
    { nome: "HNK Rijeka", img: "assets/logos/croacia/Rijeka.png", rank: 3 },
    { nome: "NK Osijek", img: "assets/logos/croacia/Osijek.png", rank: 4 },
    { nome: "NK Lokomotiva", img: "assets/logos/croacia/NK_Lokomotiva.png", rank: 5 },
    { nome: "NK Slaven Belupo", img: "assets/logos/croacia/SLAVEN.png", rank: 8 },
    { nome: "NK Istra 1961", img: "assets/logos/croacia/ISTRA.png", rank: 6 },
    { nome: "HNK Gorica", img: "assets/logos/croacia/GORICA.png", rank: 9 },
    { nome: "HNK Vukovar", img: "assets/logos/croacia/HNKVUKOVAR.png", rank: 10 },
    { nome: "NK Varaždin", img: "assets/logos/croacia/Varazdin.png", rank: 7 }
];

const scotlandSeasonScores = [
    { jogador: "Nabais", equipa: "Dundee", prevista: 10, final: 4 },
    { jogador: "Gonçalo", equipa: "Aberdeen", prevista: 6, final: 3 },
    { jogador: "Hugo", equipa: "Falkirk", prevista: 11, final: 8 },
    { jogador: "Rato", equipa: "Hibernian", prevista: 4, final: 2 },
    { jogador: "Chico", equipa: "Kilmarnock", prevista: 9, final: 9 },
    { jogador: "Painatal", equipa: "Livingston", prevista: 12, final: 12 },
    { jogador: "Gamy", equipa: "Dundee Utd", prevista: 7, final: 10 },
    { jogador: "Cardoso", equipa: "Hearts", prevista: 3, final: 7 }
].map((entry) => ({
    ...entry,
    pontos: (entry.prevista - entry.final) * 3
})).sort((a, b) => b.pontos - a.pontos || a.final - b.final);

const leagues = [
    {
        id: "scotland",
        nome: "Liga Escocesa",
        descricao: "Classificação final completa da Premiership, com dados da liga, jogador EMG associado e pontos pela fórmula da época.",
        logo: "assets/logos/escocia/SPFL_logo,_William_Hill.png",
        logoAlt: "William Hill Premiership",
        epoca: "Época 24/25",
        formula: "(prevista - final) × 3",
        scores: scotlandSeasonScores,
        tacas: [
            { tipo: "Vencedor da Taça da Liga", jogador: "Gonçalo", pontos: 5 },
            { tipo: "Finalista da Taça da Liga", jogador: null, pontos: 2 },
            { tipo: "Vencedor da Taça", jogador: "Gonçalo", pontos: 5 },
            { tipo: "Finalista da Taça", jogador: null, pontos: 2 },
            { tipo: "Vencedor de competição europeia", jogador: null, pontos: 3 }
        ],
        tabela: [
            { pos: 1, inf: "C", equipa: "Rangers", logo: "assets/logos/escocia/Rangers_FC_logo.svg.png", jogador: null, j: 38, v: 22, e: 10, d: 6, gm: 84, gs: 41, dg: 43, pts: 76, prevista: 2, zone: "championship" },
            { pos: 2, inf: "--", equipa: "Hibernian", logo: "assets/logos/escocia/Hibernian_FC_logo.svg.png", jogador: "Rato", j: 38, v: 23, e: 4, d: 11, gm: 85, gs: 57, dg: 28, pts: 73, prevista: 4, zone: "championship" },
            { pos: 3, inf: "--", equipa: "Aberdeen", logo: "assets/logos/escocia/Aberdeen_F.C._logo_2014.svg.png", jogador: "Gonçalo", j: 38, v: 21, e: 9, d: 8, gm: 74, gs: 45, dg: 29, pts: 72, prevista: 6, zone: "europe" },
            { pos: 4, inf: "--", equipa: "Dundee", logo: "assets/logos/escocia/Dundee_FC_crest.svg.png", jogador: "Nabais", j: 38, v: 17, e: 9, d: 12, gm: 61, gs: 55, dg: 6, pts: 60, prevista: 10, zone: "europe" },
            { pos: 5, inf: "--", equipa: "Celtic", logo: "assets/logos/escocia/Celtic_FC_logo.png", jogador: null, j: 38, v: 17, e: 8, d: 13, gm: 70, gs: 47, dg: 23, pts: 59, prevista: 1, zone: "" },
            { pos: 6, inf: "--", equipa: "St. Mirren", logo: "assets/logos/escocia/St_Mirren_FC_crest.svg.png", jogador: null, j: 38, v: 15, e: 10, d: 13, gm: 52, gs: 53, dg: -1, pts: 55, prevista: 8, zone: "" },
            { pos: 7, inf: "--", equipa: "Hearts", logo: "assets/logos/escocia/Heart_of_Midlothian_FC_logo.png", jogador: "Cardoso", j: 38, v: 16, e: 7, d: 15, gm: 76, gs: 74, dg: 2, pts: 55, prevista: 3, zone: "" },
            { pos: 8, inf: "--", equipa: "Falkirk", logo: "assets/logos/escocia/Falkirk_FC_logo.png", jogador: "Hugo", j: 38, v: 14, e: 11, d: 13, gm: 65, gs: 62, dg: 3, pts: 53, prevista: 11, zone: "" },
            { pos: 9, inf: "--", equipa: "Kilmarnock", logo: "assets/logos/escocia/KilmarnockLogo.png", jogador: "Chico", j: 38, v: 14, e: 7, d: 17, gm: 51, gs: 64, dg: -13, pts: 49, prevista: 9, zone: "" },
            { pos: 10, inf: "--", equipa: "Dundee Utd", logo: "assets/logos/escocia/Dundee_United_FC_logo.png", jogador: "Gamy", j: 38, v: 14, e: 6, d: 18, gm: 60, gs: 71, dg: -11, pts: 48, prevista: 7, zone: "" },
            { pos: 11, inf: "PI", equipa: "Motherwell", logo: "assets/logos/escocia/Motherwell_FC_crest.svg.png", jogador: null, j: 38, v: 4, e: 8, d: 26, gm: 30, gs: 80, dg: -50, pts: 20, prevista: 5, zone: "playoff" },
            { pos: 12, inf: "D", equipa: "Livingston", logo: "assets/logos/escocia/Livingston_FC_club_badge_new.png", jogador: "Painatal", j: 38, v: 4, e: 5, d: 29, gm: 41, gs: 101, dg: -60, pts: 17, prevista: 12, zone: "relegated" }
        ].map((entry) => {
            let emgEntry = scotlandSeasonScores.find((score) => score.equipa === entry.equipa);
            return { ...entry, emgPontos: emgEntry ? emgEntry.pontos : null };
        })
    }
];

function calcBonuses(league) {
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
let selectedCoachId = coachProfiles[0].id;

const TOTAL_ROUNDS = jogadores.length;
const ITEM_WIDTH_TEAM = 126;
const ITEM_WIDTH_PLAYER = 164;
const SPIN_DURATION = 7000;
const TEAM_SPIN_LOOPS = 5;
const PLAYER_SPIN_LOOPS = 6;

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
        tryPlayDrawMusic();
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
    let images = Array.isArray(coach.fotos) && coach.fotos.length ? coach.fotos : (coach.foto ? [coach.foto] : []);
    let media = images.length
        ? `
            <div class="coach-card-gallery" data-photo-count="${images.length}" data-photo-index="0">
                <img src="${images[0]}" alt="${coach.nome}" class="coach-card-photo coach-card-photo-main">
                ${images.length > 1 ? `
                    <button class="coach-card-next" type="button" aria-label="Trocar foto de ${coach.nome}">›</button>
                ` : ""}
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

function renderCoachModal(coach) {
    let initials = coach.nome.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    let media = coach.foto
        ? `<img src="${coach.foto}" alt="${coach.nome}" class="coach-card-photo">`
        : `<div class="coach-card-placeholder">${initials}</div>`;

    document.getElementById("coachModalMedia").innerHTML = media;
    document.getElementById("coachModalName").textContent = coach.nome;
    document.getElementById("coachModalRole").textContent = coach.cargo;
    document.getElementById("coachModalTag").textContent = coach.tag;
    document.getElementById("coachModalDescription").textContent = coach.descricao;
    document.getElementById("coachModalHighlight").textContent = coach.destaque;
}

function openCoachModal(id) {
    let coach = getCoachById(id);
    selectCoach(id);
    renderCoachModal(coach);
    document.getElementById("coachModal").hidden = false;
    document.body.classList.add("modal-open");
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

    if (!modal || modal.dataset.bound === "true") return;

    closeBtn?.addEventListener("click", closeCoachModal);
    backdrop?.addEventListener("click", closeCoachModal);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.hidden) {
            closeCoachModal();
        }
    });

    modal.dataset.bound = "true";
}

function setupCoachRailDrag() {
    let rail = document.getElementById("coachesRail");
    if (!rail || rail.dataset.dragBound === "true") return;

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
            velocity *= 0.94;
            if (Math.abs(velocity) < 0.08) {
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
            if (Math.abs(delta) > 8 || Math.abs(deltaY) > 8) {
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
        velocity = (event.clientX - lastX) / dt;
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

function setupCoachPhotoSwitches() {
    document.querySelectorAll(".coach-card-gallery").forEach((gallery) => {
        if (gallery.dataset.bound === "true") return;

        let card = gallery.closest(".coach-card");
        let coach = getCoachById(card?.dataset.coachId || "");
        let images = Array.isArray(coach.fotos) && coach.fotos.length ? coach.fotos : (coach.foto ? [coach.foto] : []);
        let trigger = gallery.querySelector(".coach-card-next");
        let image = gallery.querySelector(".coach-card-photo-main");

        if (!trigger || !image || images.length <= 1) {
            gallery.dataset.bound = "true";
            return;
        }

        trigger.addEventListener("click", (event) => {
            event.stopPropagation();
            let currentIndex = Number(gallery.dataset.photoIndex || 0);
            let nextIndex = (currentIndex + 1) % images.length;
            gallery.dataset.photoIndex = String(nextIndex);
            image.src = images[nextIndex];
        });

        gallery.dataset.bound = "true";
    });
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
    setupCoachPhotoSwitches();
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
                <span class="score-player">${entry.jogador}</span>
            </div>
            <div class="score-points ${getPointsClass(entry.pontos)}">${formatPoints(entry.pontos)}</div>
        `;
        scoreTable.appendChild(row);
    });
}

function renderLeagueSelector() {
    let select = document.getElementById("leagueSelect");
    select.innerHTML = "";
    leagues.forEach((league) => {
        let option = document.createElement("option");
        option.value = league.id;
        option.textContent = league.nome;
        select.appendChild(option);
    });
    renderLeague(leagues[0].id);
}

function renderLeague(leagueId) {
    let league = leagues.find((l) => l.id === leagueId);
    let panel = document.getElementById("leaguePanel");

    let rows = "";
    league.tabela.forEach((entry) => {
        let playerMarkup = entry.jogador
            ? `<div class="standings-player-cell" data-col="4"><div class="standings-player">${entry.jogador}</div></div>`
            : `<div class="standings-player-cell" data-col="4"><div class="standings-player empty">PC</div></div>`;
        let emgMarkup = entry.emgPontos === null
            ? `<div class="standings-points-cell" data-col="14"><div class="standings-points neutral">--</div></div>`
            : `<div class="standings-points-cell" data-col="14"><div class="standings-points ${getPointsClass(entry.emgPontos)}">${formatPoints(entry.emgPontos)}</div></div>`;

        rows += `
            <div class="standings-row ${entry.zone ? `zone-${entry.zone}` : ""}">
                <div class="standings-cell-center standings-pos" data-col="1">${entry.pos}</div>
                <div class="standings-cell-center standings-inf" data-col="2">${entry.inf}</div>
                <div class="standings-team" data-col="3">
                    <img class="standings-team-logo" src="${entry.logo}" alt="${entry.equipa}">
                    <div class="standings-team-stack">
                        <span class="standings-team-name">${entry.equipa}</span>
                        <span class="standings-team-sub">Classificação Final</span>
                    </div>
                </div>
                ${playerMarkup}
                <div class="standings-cell-center" data-col="5">${entry.j}</div>
                <div class="standings-cell-center" data-col="6">${entry.v}</div>
                <div class="standings-cell-center" data-col="7">${entry.e}</div>
                <div class="standings-cell-center" data-col="8">${entry.d}</div>
                <div class="standings-cell-center" data-col="9">${entry.gm}</div>
                <div class="standings-cell-center" data-col="10">${entry.gs}</div>
                <div class="standings-cell-center" data-col="11">${entry.dg}</div>
                <div class="standings-cell-center" data-col="12">${entry.pts}</div>
                <div class="standings-cell-center" data-col="13">${entry.prevista}</div>
                ${emgMarkup}
            </div>
        `;
    });

    let bonuses = calcBonuses(league);
    let bonusRows = bonuses.map((b) => `
        <div class="bonus-row">
            <div class="bonus-player">${b.jogador}</div>
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
            <div class="league-chip muted">${league.epoca}</div>
            <div class="league-chip muted">Fórmula: ${league.formula}</div>
        </div>
        <div class="league-table-wrap">
            <div class="standings-standings">
                <div class="standings-row header">
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
                </div>
                ${rows}
            </div>
        </div>
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
    `;

    setupStandingsColumnHover(panel);
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
                <div class="table-player">${entry.jogador}</div>
                <span class="table-connector" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M7 12H17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                        <path d="M12 7L17 12L12 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <div class="table-team">
                    <img class="table-logo" src="${entry.img}" alt="${entry.equipa}">
                    <span class="table-team-name">${entry.equipa}</span>
                </div>
            </div>
        `;
        table.appendChild(row);
    });

    let shareBtn = document.createElement("button");
    shareBtn.className = "action-btn gold";
    shareBtn.textContent = "Partilhar";
    shareBtn.onclick = () => shareToDiscord(shareBtn);
    table.appendChild(shareBtn);

    scrollToElement(table);
    document.getElementById("drawBtn").innerText = "Sorteio Terminado";
}

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1493234921198850148/NHvFhAmrc7GTThsXfzNUwrLgNwSbzqI6JkztqApSaPF_a8-S8FW1YJGWlr_QtJtSAS3g";

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

async function capturePanel(panel) {
    let images = panel.querySelectorAll("img");
    let originals = [];
    images.forEach((img) => {
        originals.push(img.src);
        try { img.src = imageToDataURL(img); } catch (_) {}
    });

    let canvas = await html2canvas(panel, { backgroundColor: "#02071b", scale: 2 });

    images.forEach((img, i) => { img.src = originals[i]; });
    return canvas;
}

renderGeneralTable();
renderLeagueSelector();
renderCoachCards();
setupFormulaPopover();
restoreMuteState();
bindMusicRecovery();
setActiveTab(getTabFromHash());


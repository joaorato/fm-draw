let musicStarted = false;
let isMuted = false;
const MUTE_STORAGE_KEY = "fm-draw-muted";

function getMusicElement() {
    return document.getElementById("bgmusic");
}

// Há um botão de som por sorteio, por isso isto anda por classe e não por id:
// dois ids iguais não são válidos e só o primeiro responderia.
function syncMuteButton() {
    document.querySelectorAll(".mute-btn").forEach((btn) => {
        btn.classList.toggle("is-muted", isMuted);
    });
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

// A faixa é uma por sorteio, não uma por aba: os dois sorteios vivem na mesma
// aba e a escolha está no activeDrawId (js/ui/draw-selector.js). O <audio> é um
// só, muda-se-lhe o src.
//
// Começa no que está escrito no index.html, para a primeira reprodução do
// sorteio da Croácia não voltar a atribuir o mesmo src e reiniciar a faixa.
let currentDrawTrack = "./assets/audio/ucl.mp3";

function getDrawTrack(tab) {
    return (tab || getTabFromHash()) === "draw" ? getActiveDraw().track : null;
}

function isDrawTabCompleted() {
    return getActiveDraw().completed();
}

// O tab vem por argumento porque o setActiveTab chama isto antes do
// history.pushState: nessa altura o location.hash ainda é o da aba anterior.
function tryPlayDrawMusic(tab) {
    let track = getDrawTrack(tab);
    if (!track || isDrawTabCompleted()) return;

    let music = getMusicElement();
    if (!music) return;

    if (currentDrawTrack !== track) {
        currentDrawTrack = track;
        music.src = track;
    }

    music.volume = 0.13;
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

    // Trocar para um sorteio já concluído tem de parar a faixa do anterior, e
    // não só deixar de tocar a nova.
    if (getDrawTrack() && !isDrawTabCompleted()) {
        tryPlayDrawMusic();
    } else {
        music.pause();
    }
}

function bindMusicRecovery() {
    ["pointerdown", "touchstart", "keydown"].forEach((eventName) => {
        document.addEventListener(eventName, () => {
            if (getDrawTrack()) {
                let music = getMusicElement();
                if (music && music.paused && !isMuted) {
                    tryPlayDrawMusic();
                }
            }
        }, { passive: true });
    });

    window.addEventListener("pageshow", () => {
        if (getDrawTrack()) {
            syncDrawMusic();
        }
    });

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && getDrawTrack()) {
            syncDrawMusic();
        }
    });
}

function toggleMute() {
    isMuted = !isMuted;
    applyMuteState();
    persistMuteState();

    if (!isMuted && getDrawTrack()) {
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
        // O renderDrawSelector mostra o sorteio escolhido e manda-o desenhar-se.
        renderDrawSelector();
        tryPlayDrawMusic(tab);
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

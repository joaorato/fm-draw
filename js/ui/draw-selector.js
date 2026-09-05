// Escolha entre os sorteios da aba Sorteios. Espelha o js/ui/league-selector.js
// e reaproveita as classes .league-main-* do menu das ligas, para haver um só
// desenho de dropdown no site.
//
// Carrega depois do draw.js e do draw-groups.js: o activeDrawId abaixo é código
// de carregamento e lê as flags DRAW_COMPLETED e WORLDCUP_DRAW_COMPLETED, que
// só existem depois desses dois ficheiros correrem.
const draws = [
    {
        id: "croatia",
        nome: "Liga Croata",
        statusLabel: "2025/26",
        slot: "croatiaDrawSlot",
        track: "./assets/audio/ucl.mp3",
        completed: () => DRAW_COMPLETED,
        render: () => { if (DRAW_COMPLETED) showCompletedDraw(); }
    },
    {
        id: "mundial",
        nome: "Mundial 2026",
        statusLabel: "por sortear",
        slot: "wcDrawSlot",
        track: "./assets/audio/mundial.mp3",
        completed: () => WORLDCUP_DRAW_COMPLETED,
        render: () => renderWorldCupDraw()
    }
];

// Abre no sorteio que ainda falta fazer; se estiverem todos feitos, no mais
// recente.
let activeDrawId = (draws.find((draw) => !draw.completed()) || draws[draws.length - 1]).id;

function getActiveDraw() {
    return draws.find((draw) => draw.id === activeDrawId) || draws[draws.length - 1];
}

function renderDrawSelector() {
    let selector = document.getElementById("drawSelector");
    if (!selector) return;

    let active = getActiveDraw();
    activeDrawId = active.id;

    let options = draws.map((draw) => `
        <button
            class="league-main-option ${draw.id === active.id ? "active" : ""}"
            type="button"
            onclick="selectDraw('${draw.id}')"
            aria-pressed="${draw.id === active.id ? "true" : "false"}"
        >
            ${draw.nome} — ${draw.statusLabel}
        </button>
    `).join("");

    selector.innerHTML = `
        <div class="league-main-select-wrap">
            <button class="league-main-select" type="button" onclick="toggleDrawMenu()" aria-expanded="false" aria-label="Escolher sorteio">
                ${active.nome} — ${active.statusLabel}
            </button>
            <div class="league-main-menu">
                ${options}
            </div>
        </div>
    `;

    draws.forEach((draw) => {
        document.getElementById(draw.slot)?.classList.toggle("active", draw.id === active.id);
    });

    active.render();
}

function toggleDrawMenu() {
    let wrap = document.querySelector("#drawSelector .league-main-select-wrap");
    if (!wrap) return;
    let willOpen = !wrap.classList.contains("open");
    closeMainLeagueMenu();
    if (willOpen) {
        wrap.classList.add("open");
        wrap.querySelector(".league-main-select")?.setAttribute("aria-expanded", "true");
    }
}

function selectDraw(drawId) {
    activeDrawId = drawId;
    closeMainLeagueMenu();
    renderDrawSelector();
    syncDrawMusic();
}

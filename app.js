const jogadores = [
    "Goncalo", "Rato", "Chico", "Nabais",
    "Gamy", "Painatal", "Cardoso", "Hugo"
];

const equipas = [
    { nome: "HNK Rijeka", img: "assets/logos/croacia/Rijeka.png", rank: 3 },
    { nome: "NK Osijek", img: "assets/logos/croacia/Osijek.png", rank: 4 },
    { nome: "NK Lokomotiva", img: "assets/logos/croacia/NK LokomotivA.png", rank: 5 },
    { nome: "NK Slaven Belupo", img: "assets/logos/croacia/SLAVEN.png", rank: 8 },
    { nome: "NK Istra 1961", img: "assets/logos/croacia/ISTRA.png", rank: 6 },
    { nome: "HNK Gorica", img: "assets/logos/croacia/GORICA.png", rank: 9 },
    { nome: "HNK Vukovar", img: "assets/logos/croacia/HNKVUKOVAR.png", rank: 10 },
    { nome: "NK Varazdin", img: "assets/logos/croacia/Varazdin.png", rank: 7 }
];

const scotlandSeasonScores = [
    { jogador: "Nabais", equipa: "Dundee", prevista: 10, final: 4 },
    { jogador: "Goncalo", equipa: "Aberdeen", prevista: 6, final: 3 },
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

const scotlandLeagueTable = [
    { pos: 1, inf: "C", equipa: "Rangers", logo: "assets/logos/escocia/Rangers_FC_logo.svg.png", jogador: null, j: 38, v: 22, e: 10, d: 6, gm: 84, gs: 41, dg: 43, pts: 76, prevista: 2, form: ["L", "L", "L", "D", "W"], zone: "championship" },
    { pos: 2, inf: "--", equipa: "Hibernian", logo: "assets/logos/escocia/Hibernian_FC_logo.svg.png", jogador: "Rato", j: 38, v: 23, e: 4, d: 11, gm: 85, gs: 57, dg: 28, pts: 73, prevista: 4, form: ["L", "W", "W", "W", "L"], zone: "championship" },
    { pos: 3, inf: "--", equipa: "Aberdeen", logo: "assets/logos/escocia/Aberdeen_F.C._logo_2014.svg.png", jogador: "Goncalo", j: 38, v: 21, e: 9, d: 8, gm: 74, gs: 45, dg: 29, pts: 72, prevista: 6, form: ["L", "W", "L", "L", "W"], zone: "europe" },
    { pos: 4, inf: "--", equipa: "Dundee", logo: "assets/logos/escocia/Dundee_FC_crest.svg.png", jogador: "Nabais", j: 38, v: 17, e: 9, d: 12, gm: 61, gs: 55, dg: 6, pts: 60, prevista: 10, form: ["W", "L", "W", "D", "D"], zone: "europe" },
    { pos: 5, inf: "--", equipa: "Celtic", logo: "assets/logos/escocia/Celtic_FC_logo.png", jogador: null, j: 38, v: 17, e: 8, d: 13, gm: 70, gs: 47, dg: 23, pts: 59, prevista: 1, form: ["W", "W", "L", "W", "D"], zone: "" },
    { pos: 6, inf: "--", equipa: "St. Mirren", logo: "assets/logos/escocia/St_Mirren_FC_crest.svg.png", jogador: null, j: 38, v: 15, e: 10, d: 13, gm: 52, gs: 53, dg: -1, pts: 55, prevista: 8, form: ["L", "D", "D", "L", "L"], zone: "" },
    { pos: 7, inf: "--", equipa: "Hearts", logo: "assets/logos/escocia/Heart_of_Midlothian_FC_logo.png", jogador: "Cardoso", j: 38, v: 16, e: 7, d: 15, gm: 76, gs: 74, dg: 2, pts: 55, prevista: 3, form: ["L", "L", "L", "W", "W"], zone: "" },
    { pos: 8, inf: "--", equipa: "Falkirk", logo: "assets/logos/escocia/Falkirk_FC_logo.png", jogador: "Hugo", j: 38, v: 14, e: 11, d: 13, gm: 65, gs: 62, dg: 3, pts: 53, prevista: 11, form: ["L", "D", "W", "W", "W"], zone: "" },
    { pos: 9, inf: "--", equipa: "Kilmarnock", logo: "assets/logos/escocia/KilmarnockLogo.png", jogador: "Chico", j: 38, v: 14, e: 7, d: 17, gm: 51, gs: 64, dg: -13, pts: 49, prevista: 9, form: ["W", "D", "W", "W", "L"], zone: "" },
    { pos: 10, inf: "--", equipa: "Dundee Utd", logo: "assets/logos/escocia/Dundee_United_FC_logo.png", jogador: "Gamy", j: 38, v: 14, e: 6, d: 18, gm: 60, gs: 71, dg: -11, pts: 48, prevista: 7, form: ["W", "W", "L", "L", "W"], zone: "" },
    { pos: 11, inf: "PI", equipa: "Motherwell", logo: "assets/logos/escocia/Motherwell_FC_crest.svg.png", jogador: null, j: 38, v: 4, e: 8, d: 26, gm: 30, gs: 80, dg: -50, pts: 20, prevista: 5, form: ["W", "W", "W", "L", "L"], zone: "playoff" },
    { pos: 12, inf: "D", equipa: "Livingston", logo: "assets/logos/escocia/Livingston_FC_club_badge_new.png", jogador: "Painatal", j: 38, v: 4, e: 5, d: 29, gm: 41, gs: 101, dg: -60, pts: 17, prevista: 12, form: ["L", "L", "L", "L", "L"], zone: "relegated" }
].map((entry) => {
    let emgEntry = scotlandSeasonScores.find((score) => score.equipa === entry.equipa);

    return {
        ...entry,
        emgPontos: emgEntry ? emgEntry.pontos : null
    };
});

const generalScores = scotlandSeasonScores
    .map((entry) => ({ jogador: entry.jogador, pontos: entry.pontos }))
    .sort((a, b) => b.pontos - a.pontos || a.jogador.localeCompare(b.jogador));

let shuffledTeams = [];
let shuffledPlayers = [];
let remainingTeams = [];
let remainingPlayers = [];
let currentRound = 0;
let resultados = [];

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

function setActiveTab(tab) {
    let isHome = tab === "home";
    let isDraw = tab === "draw";
    let isGeneral = tab === "general";
    let isPast = tab === "past";

    document.getElementById("homeView").classList.toggle("active", isHome);
    document.getElementById("drawView").classList.toggle("active", isDraw);
    document.getElementById("generalView").classList.toggle("active", isGeneral);
    document.getElementById("pastView").classList.toggle("active", isPast);

    document.getElementById("homeTabBtn").classList.toggle("active", isHome);
    document.getElementById("drawTabBtn").classList.toggle("active", isDraw);
    document.getElementById("generalTabBtn").classList.toggle("active", isGeneral);
    document.getElementById("pastTabBtn").classList.toggle("active", isPast);

    let music = document.getElementById("bgmusic");
    if (isDraw) {
        music.volume = 0.5;
        music.play().catch(() => {});
        musicStarted = true;
    } else {
        music.pause();
    }
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
            <div>Jogador</div>
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

function renderScotlandTable() {
    let scotlandTable = document.getElementById("scotlandTable");

    scotlandTable.innerHTML = `
        <div class="scotland-row header">
            <div>Pos</div>
            <div>Inf</div>
            <div>Equipa</div>
            <div>Jogador</div>
            <div>J</div>
            <div>V</div>
            <div>E</div>
            <div>D</div>
            <div>GM</div>
            <div>GS</div>
            <div>DG</div>
            <div>Pts</div>
            <div>Prev.</div>
            <div>EMG</div>
        </div>
    `;

    scotlandLeagueTable.forEach((entry) => {
        let row = document.createElement("div");
        row.className = `scotland-row ${entry.zone ? `zone-${entry.zone}` : ""}`.trim();
        let playerMarkup = entry.jogador
            ? `<div class="scotland-player">${entry.jogador}</div>`
            : `<div class="scotland-player empty">PC</div>`;
        let emgMarkup = entry.emgPontos === null
            ? `<div class="scotland-points neutral">--</div>`
            : `<div class="scotland-points ${getPointsClass(entry.emgPontos)}">${formatPoints(entry.emgPontos)}</div>`;

        row.innerHTML = `
            <div class="scotland-cell-center scotland-pos">${entry.pos}</div>
            <div class="scotland-cell-center scotland-inf">${entry.inf}</div>
            <div class="scotland-team">
                <img class="scotland-team-logo" src="${entry.logo}" alt="${entry.equipa}">
                <div class="scotland-team-stack">
                    <span class="scotland-team-name">${entry.equipa}</span>
                    <span class="scotland-team-sub">Classificacao Final</span>
                </div>
            </div>
            ${playerMarkup}
            <div class="scotland-cell-center">${entry.j}</div>
            <div class="scotland-cell-center">${entry.v}</div>
            <div class="scotland-cell-center">${entry.e}</div>
            <div class="scotland-cell-center">${entry.d}</div>
            <div class="scotland-cell-center">${entry.gm}</div>
            <div class="scotland-cell-center">${entry.gs}</div>
            <div class="scotland-cell-center">${entry.dg}</div>
            <div class="scotland-cell-center">${entry.pts}</div>
            <div class="scotland-cell-center">${entry.prevista}</div>
            ${emgMarkup}
        `;
        scotlandTable.appendChild(row);
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

    startTeamRoulette();
}

function startTeamRoulette() {
    let current = document.getElementById("current");
    current.innerHTML = "";

    let targetTeam = shuffledTeams[currentRound];
    let vpWidth = getViewportWidth();
    let items = [...remainingTeams];
    let targetIndex = items.findIndex((team) => team.nome === targetTeam.nome);
    let { repeatedItems, cycleWidth } = buildLoopedRouletteItems(items, ITEM_WIDTH_TEAM, vpWidth, TEAM_SPIN_LOOPS);

    let roundInfo = document.createElement("div");
    roundInfo.className = "round-info";
    roundInfo.textContent = `Sorteio ${currentRound + 1} / ${TOTAL_ROUNDS}`;
    current.appendChild(roundInfo);

    let container = document.createElement("div");
    container.className = "roulette-container";

    let marker = document.createElement("div");
    marker.className = "roulette-marker";
    container.appendChild(marker);

    let viewport = document.createElement("div");
    viewport.className = "roulette-viewport";

    let strip = document.createElement("div");
    strip.className = "roulette-strip";

    repeatedItems.forEach((team, index) => {
        let item = document.createElement("div");
        item.className = "roulette-item";
        item.dataset.baseIndex = index % items.length;

        let image = document.createElement("img");
        image.src = team.img;
        image.alt = team.nome;

        item.appendChild(image);
        strip.appendChild(item);
    });

    viewport.appendChild(strip);
    container.appendChild(viewport);
    current.appendChild(container);
    scrollToElement(container);

    let finalX = -((TEAM_SPIN_LOOPS * cycleWidth) + (targetIndex * ITEM_WIDTH_TEAM)) + (vpWidth / 2) - (ITEM_WIDTH_TEAM / 2);

    animateRoulette(strip, cycleWidth, finalX, SPIN_DURATION, () => {
        highlightWinner(strip, targetIndex);
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
        <div class="team-rank">Classificacao prevista: ${team.rank}o</div>
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
    let vpWidth = getViewportWidth();
    let items = [...remainingPlayers];
    let targetIndex = items.findIndex((player) => player === targetPlayer);
    let { repeatedItems, cycleWidth } = buildLoopedRouletteItems(items, ITEM_WIDTH_PLAYER, vpWidth, PLAYER_SPIN_LOOPS);

    let container = document.createElement("div");
    container.className = "roulette-container";

    let marker = document.createElement("div");
    marker.className = "roulette-marker";
    container.appendChild(marker);

    let viewport = document.createElement("div");
    viewport.className = "roulette-viewport";

    let strip = document.createElement("div");
    strip.className = "roulette-strip";

    repeatedItems.forEach((player, index) => {
        let item = document.createElement("div");
        item.className = "roulette-item name-item";
        item.dataset.baseIndex = index % items.length;
        item.textContent = player;
        strip.appendChild(item);
    });

    viewport.appendChild(strip);
    container.appendChild(viewport);
    current.appendChild(container);
    scrollToElement(container);

    let finalX = -((PLAYER_SPIN_LOOPS * cycleWidth) + (targetIndex * ITEM_WIDTH_PLAYER)) + (vpWidth / 2) - (ITEM_WIDTH_PLAYER / 2);

    animateRoulette(strip, cycleWidth, finalX, SPIN_DURATION, () => {
        highlightWinner(strip, targetIndex);
        onPlayerLanded(team, targetPlayer);
    });
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

    remainingTeams = remainingTeams.filter((item) => item.nome !== team.nome);
    remainingPlayers = remainingPlayers.filter((item) => item !== player);
    currentRound++;

    let button = document.createElement("button");
    button.className = "action-btn";

    if (currentRound < TOTAL_ROUNDS) {
        button.textContent = "Proxima Equipa";
        button.onclick = () => startTeamRoulette();
    } else {
        button.textContent = "Ver Resultados";
        button.onclick = () => showResults();
    }

    current.appendChild(button);
}

function showResults() {
    let current = document.getElementById("current");
    let table = document.getElementById("table");

    current.innerHTML = "<h2 class=\"panel-title\">Resultados Finais</h2>";
    table.innerHTML = "";

    resultados.sort((a, b) => a.rank - b.rank);

    resultados.forEach((entry) => {
        let row = document.createElement("div");
        row.className = "row";
        row.innerHTML = `
            <div class="table-rank">${entry.rank}o</div>
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

    scrollToElement(table);
    document.getElementById("drawBtn").innerText = "Sorteio Terminado";
}

renderGeneralTable();
renderScotlandTable();

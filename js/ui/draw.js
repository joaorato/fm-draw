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

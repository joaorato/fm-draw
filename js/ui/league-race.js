// Gráfico de evolução da classificação: uma linha por equipa, a posição jornada
// a jornada. Só aparece nas ligas que declaram "evolucao" em leagues.js.
//
// Sobre as cores: cada equipa tem a cor do clube, escrita em "cor" na tabela da
// liga. É a cor que as pessoas já conhecem — o Istra é amarelo, o Hajduk é
// vermelho — e por isso não precisa de legenda para se perceber.
//
// O que isso custa, e foi aceite de olhos abertos: as cores de clube não foram
// escolhidas para se distinguirem umas das outras. Nesta liga há quatro azuis e
// três vermelhos, e três equipas de cor escura que sozinhas não se veriam neste
// fundo. Daí duas coisas que não se devem tirar: o halo claro por baixo de cada
// linha, que é o que faz o preto da Lokomotiva ler como preto em vez de
// desaparecer, e o facto de nada aqui se identificar só pela cor — cada linha
// acaba no emblema, a legenda tem emblema e treinador, e passar o rato por cima
// de uma equipa apaga as outras.

let raceLeagueId = null;
let raceFrameIndex = 0;
let racePinned = new Set();
let racePlaying = false;
let raceAutoTimer = null;
let raceHistoryCache = {};
let raceSeriesByLeague = {};

const RACE_STEP_MS = 900;
const RACE_FALLBACK_COLOR = "#8593ad";
const RACE_GEOMETRY = { top: 26, right: 36, bottom: 44, left: 48, lane: 34, step: 26 };

function getRaceTeamColor(league, equipa) {
    return getLeagueTeamEntry(league, equipa)?.cor || RACE_FALLBACK_COLOR;
}

function getLeagueRaceHistory(league) {
    if (raceHistoryCache[league.id]) return raceHistoryCache[league.id];

    let config = league.evolucao;
    raceHistoryCache[league.id] = buildStandingsHistory(league.fixtures, config.equipas, {
        isLeagueMatch: config.isLeagueMatch,
        regras: config.regras,
        leagueName: league.nome,
        snapshot: config.snapshot
    });
    return raceHistoryCache[league.id];
}

function getRaceRoundShortLabel(round) {
    let numero = Number.parseInt(round, 10);
    if (!Number.isFinite(numero)) return String(round);
    // As jornadas com chave de texto são jogos em atraso ou antecipados: mesmo
    // número, outro momento. O asterisco evita dois "J8" iguais no eixo.
    return typeof round === "number" ? `J${numero}` : `J${numero}*`;
}

function getRaceX(frameIndex) {
    return RACE_GEOMETRY.left + frameIndex * RACE_GEOMETRY.step;
}

function getRaceY(pos) {
    return RACE_GEOMETRY.top + (pos - 0.5) * RACE_GEOMETRY.lane;
}

// Uma série por equipa: a posição em cada frame, mais o comprimento acumulado da
// linha até cada frame. É esse comprimento que faz a linha desenhar-se aos poucos,
// via stroke-dashoffset, em vez de saltar de jornada em jornada.
function buildRaceSeries(frames, teamNames) {
    return teamNames.map((equipa) => {
        let positions = [];
        let ultima = null;

        frames.forEach((frame) => {
            let row = frame.rows.find((entry) => entry.equipa === equipa);
            ultima = row ? row.pos : ultima;
            positions.push(ultima);
        });

        let points = positions.map((pos, index) => [getRaceX(index), getRaceY(pos)]);
        let lengths = [0];
        for (let index = 1; index < points.length; index++) {
            let dx = points[index][0] - points[index - 1][0];
            let dy = points[index][1] - points[index - 1][1];
            lengths.push(lengths[index - 1] + Math.sqrt(dx * dx + dy * dy));
        }

        return {
            equipa,
            slug: slugifyFixturePart(equipa),
            positions,
            points,
            lengths,
            total: lengths[lengths.length - 1] || 0,
            d: points.map(([x, y], index) => `${index ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ")
        };
    });
}

function renderLeagueRaceChart(league, frames, series) {
    let width = RACE_GEOMETRY.left + Math.max(1, frames.length - 1) * RACE_GEOMETRY.step + RACE_GEOMETRY.right;
    let lugares = league.evolucao.equipas.length;
    let height = RACE_GEOMETRY.top + lugares * RACE_GEOMETRY.lane + RACE_GEOMETRY.bottom;
    let plotRight = width - RACE_GEOMETRY.right;

    let zonas = Object.entries(league.evolucao.zonas || {}).map(([pos, zona]) => `
        <rect class="league-race-zone zone-${zona}"
            x="${RACE_GEOMETRY.left - 12}" y="${getRaceY(Number(pos)) - RACE_GEOMETRY.lane / 2}"
            width="${plotRight - RACE_GEOMETRY.left + 18}" height="${RACE_GEOMETRY.lane}"></rect>
    `).join("");

    let lanes = Array.from({ length: lugares }, (item, index) => {
        let pos = index + 1;
        return `
            <line class="league-race-lane" x1="${RACE_GEOMETRY.left - 12}" y1="${getRaceY(pos)}" x2="${plotRight + 6}" y2="${getRaceY(pos)}"></line>
            <text class="league-race-axis-pos" x="${RACE_GEOMETRY.left - 22}" y="${getRaceY(pos)}">${pos}</text>
        `;
    }).join("");

    // Os rótulos vão de 5 em 5 jornadas, mas contadas pelo número da jornada e não
    // pela ordem dos frames: senão um jogo em atraso calhava a um rótulo e o eixo
    // lia-se J11, J8, J20, como se a época andasse para trás. As jornadas fora de
    // sítio ficam sem rótulo — quando são a jornada actual, o cabeçalho di-lo.
    let rotulados = new Set([0, frames.length - 1]);
    frames.forEach((frame, index) => {
        if (typeof frame.round === "number" && frame.round % 5 === 0) rotulados.add(index);
    });

    let ticks = [...rotulados].sort((a, b) => a - b).map((index) => `
        <text class="league-race-axis-round" x="${getRaceX(index)}" y="${height - RACE_GEOMETRY.bottom + 24}">${getRaceRoundShortLabel(frames[index].round)}</text>
    `).join("");

    // A cor de cada equipa não muda ao longo do gráfico, por isso fica escrita
    // aqui uma vez e a animação só mexe no traço que já está desenhado.
    let dash = (serie) => `stroke-dasharray: ${serie.total.toFixed(1)}; stroke-dashoffset: ${serie.total.toFixed(1)};`;

    // Os halos vão todos num grupo à parte, por baixo de todas as linhas. Se
    // fossem par a par, o halo de uma equipa passava por cima da linha de outra.
    let halos = series.map((serie) => `
        <path class="league-race-halo" data-race-team="${serie.slug}" d="${serie.d}" style="${dash(serie)}"></path>
    `).join("");

    let paths = series.map((serie) => `
        <path class="league-race-line" data-race-team="${serie.slug}"
            d="${serie.d}" style="--race-color: ${getRaceTeamColor(league, serie.equipa)}; ${dash(serie)}"></path>
    `).join("");

    let badges = series.map((serie) => {
        let logo = getLeagueTeamLogo(league, serie.equipa);
        let logoMarkup = logo
            ? `<image href="${escapeAttribute(logo)}" x="-11" y="-11" width="22" height="22" preserveAspectRatio="xMidYMid meet"></image>`
            : "";
        return `
            <g class="league-race-badge" data-race-team="${serie.slug}" tabindex="0" role="button"
                aria-label="${escapeAttribute(serie.equipa)}" style="--race-color: ${getRaceTeamColor(league, serie.equipa)}; transform: translate(${getRaceX(0)}px, ${getRaceY(serie.positions[0]).toFixed(1)}px);">
                <circle class="league-race-badge-halo" r="15.5"></circle>
                <circle class="league-race-badge-ring" r="14"></circle>
                ${logoMarkup}
            </g>
        `;
    }).join("");

    return `
        <svg class="league-race-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet"
            role="img" aria-label="Posição de cada equipa em cada jornada da ${escapeAttribute(league.nome)}">
            <g class="league-race-zones">${zonas}</g>
            <g class="league-race-lanes">${lanes}</g>
            <g class="league-race-axis">${ticks}</g>
            <g class="league-race-halos">${halos}</g>
            <g class="league-race-lines">${paths}</g>
            <g class="league-race-badges">${badges}</g>
        </svg>
    `;
}

function renderLeagueRaceLegend(league, frames) {
    let rows = league.evolucao.equipas.map((equipa) => {
        let entry = getLeagueTeamEntry(league, equipa);
        let logo = getLeagueTeamLogo(league, equipa);
        let slug = slugifyFixturePart(equipa);
        let treinador = entry?.jogador
            ? `<span class="league-race-legend-coach">${escapeAttribute(entry.jogador)}</span>`
            : `<span class="league-race-legend-coach empty">PC</span>`;

        return `
            <button class="league-race-legend-row" type="button" data-race-team="${slug}" aria-pressed="false"
                style="--race-color: ${getRaceTeamColor(league, equipa)};">
                <span class="league-race-legend-swatch"></span>
                <span class="league-race-legend-pos"></span>
                ${logo ? `<img class="league-race-legend-logo" src="${escapeAttribute(logo)}" alt="" loading="lazy">` : ""}
                <span class="league-race-legend-team">
                    <span class="league-race-legend-name">${escapeAttribute(equipa)}</span>
                    ${treinador}
                </span>
                <span class="league-race-legend-j"></span>
                <span class="league-race-legend-pts"></span>
            </button>
        `;
    }).join("");

    return `
        <aside class="league-race-legend">
            <div class="league-race-legend-head">
                <span>Pos</span>
                <span>Equipa</span>
                <span>J</span>
                <span>Pts</span>
            </div>
            <div class="league-race-legend-rows" style="--race-rows: ${league.evolucao.equipas.length};">${rows}</div>
            <p class="league-race-hint">Cada cor é de um treinador. Passa o rato por uma equipa para a destacar, ou carrega para a fixar.</p>
        </aside>
    `;
}

// Pinta o frame actual: revela as linhas até aqui, move os emblemas e reordena a
// legenda. Corre a cada jornada, por isso mexe no DOM que já existe em vez de
// voltar a escrever o painel todo.
function applyLeagueRaceFrame() {
    let modal = document.getElementById("leagueRaceModal");
    let league = leagues.find((entry) => entry.id === raceLeagueId);
    if (!modal || !league) return;

    let frames = getLeagueRaceHistory(league);
    let frame = frames[raceFrameIndex];
    if (!frame) return;

    let series = raceSeriesByLeague[league.id];
    modal.classList.toggle("has-pins", racePinned.size > 0);

    modal.querySelector(".league-race-frame-label").textContent = frame.label;
    modal.querySelector(".league-race-frame-date").textContent = frame.date || "";
    modal.querySelector(".league-race-counter").textContent = `${raceFrameIndex + 1} / ${frames.length}`;

    let scrubber = modal.querySelector(".league-race-scrubber");
    if (Number(scrubber.value) !== raceFrameIndex) scrubber.value = String(raceFrameIndex);

    series.forEach((serie) => {
        let fixada = racePinned.has(serie.equipa);

        // A linha e o halo por baixo dela revelam-se juntos, senão via-se a
        // sombra da jornada seguinte antes da própria linha lá chegar.
        let offset = String((serie.total - serie.lengths[raceFrameIndex]).toFixed(1));
        modal.querySelectorAll(`.league-race-line[data-race-team="${serie.slug}"], .league-race-halo[data-race-team="${serie.slug}"]`).forEach((path) => {
            path.style.strokeDashoffset = offset;
            path.classList.toggle("is-pinned", fixada);
        });

        let badge = modal.querySelector(`.league-race-badge[data-race-team="${serie.slug}"]`);
        if (badge) {
            badge.style.transform = `translate(${getRaceX(raceFrameIndex)}px, ${getRaceY(serie.positions[raceFrameIndex]).toFixed(1)}px)`;
            badge.classList.toggle("is-pinned", fixada);
        }
    });

    frame.rows.forEach((row) => {
        let slug = slugifyFixturePart(row.equipa);
        let legendRow = modal.querySelector(`.league-race-legend-row[data-race-team="${slug}"]`);
        if (!legendRow) return;

        let fixada = racePinned.has(row.equipa);
        // O passo vem do CSS (--race-row-step) para a altura do contentor e o
        // salto das linhas não poderem discordar.
        legendRow.style.transform = `translateY(calc(var(--race-row-step) * ${row.pos - 1}))`;
        legendRow.classList.toggle("is-pinned", fixada);
        legendRow.setAttribute("aria-pressed", fixada ? "true" : "false");
        legendRow.querySelector(".league-race-legend-pos").textContent = row.pos;
        legendRow.querySelector(".league-race-legend-j").textContent = row.j;
        legendRow.querySelector(".league-race-legend-pts").textContent = row.pts;
    });
}

function setLeagueRaceFrame(index) {
    let league = leagues.find((entry) => entry.id === raceLeagueId);
    if (!league) return;

    let frames = getLeagueRaceHistory(league);
    raceFrameIndex = Math.max(0, Math.min(index, frames.length - 1));
    applyLeagueRaceFrame();
}

function pauseLeagueRace() {
    if (raceAutoTimer) clearTimeout(raceAutoTimer);
    raceAutoTimer = null;
    racePlaying = false;
    syncLeagueRacePlayButton();
}

function syncLeagueRacePlayButton() {
    let button = document.querySelector(".league-race-play");
    if (!button) return;
    button.textContent = racePlaying ? "❚❚" : "▶";
    button.setAttribute("aria-label", racePlaying ? "Pausa" : "Reproduzir");
}

// Mesmo padrão do carrossel de notícias: um setTimeout que se volta a marcar a si
// próprio, e que salta a jornada sem avançar quando o separador está escondido.
function scheduleLeagueRaceAdvance() {
    if (raceAutoTimer) clearTimeout(raceAutoTimer);
    if (!racePlaying) return;

    raceAutoTimer = setTimeout(() => {
        if (!racePlaying) return;
        if (document.hidden) {
            scheduleLeagueRaceAdvance();
            return;
        }

        let league = leagues.find((entry) => entry.id === raceLeagueId);
        let frames = league ? getLeagueRaceHistory(league) : [];
        if (raceFrameIndex >= frames.length - 1) {
            pauseLeagueRace();
            return;
        }

        setLeagueRaceFrame(raceFrameIndex + 1);
        scheduleLeagueRaceAdvance();
    }, RACE_STEP_MS);
}

function toggleLeagueRacePlay() {
    let league = leagues.find((entry) => entry.id === raceLeagueId);
    if (!league) return;

    if (racePlaying) {
        pauseLeagueRace();
        return;
    }

    // Carregar em play no fim recomeça do princípio, senão não acontecia nada.
    let frames = getLeagueRaceHistory(league);
    if (raceFrameIndex >= frames.length - 1) setLeagueRaceFrame(0);

    racePlaying = true;
    syncLeagueRacePlayButton();
    scheduleLeagueRaceAdvance();
}

function stepLeagueRace(direction) {
    pauseLeagueRace();
    setLeagueRaceFrame(raceFrameIndex + Number(direction || 1));
}

function scrubLeagueRace(value) {
    pauseLeagueRace();
    setLeagueRaceFrame(Number(value));
}

// Fixar não muda a cor de ninguém: só apaga quem não está fixado, para se poder
// seguir uma ou duas equipas no meio do novelo sem ter o rato em cima.
function toggleLeagueRaceTeam(slug) {
    let league = leagues.find((entry) => entry.id === raceLeagueId);
    let serie = raceSeriesByLeague[league?.id]?.find((entry) => entry.slug === slug);
    if (!serie) return;

    if (racePinned.has(serie.equipa)) {
        racePinned.delete(serie.equipa);
    } else {
        racePinned.add(serie.equipa);
    }

    applyLeagueRaceFrame();
}

function setLeagueRaceHover(slug) {
    let modal = document.getElementById("leagueRaceModal");
    if (!modal) return;
    modal.querySelectorAll("[data-race-team]").forEach((node) => {
        node.classList.toggle("is-hovered", Boolean(slug) && node.dataset.raceTeam === slug);
    });
    modal.classList.toggle("has-hover", Boolean(slug));
}

function bindLeagueRaceEvents(modal) {
    modal.querySelector(".league-race-play").addEventListener("click", toggleLeagueRacePlay);
    modal.querySelectorAll(".league-race-step").forEach((button) => {
        button.addEventListener("click", () => stepLeagueRace(button.dataset.raceStep));
    });
    modal.querySelector(".league-race-scrubber").addEventListener("input", (event) => scrubLeagueRace(event.target.value));

    // Fixar uma equipa é escolher o que se vê, não quando. Só os controlos de
    // tempo — play, setas, barra — é que param a animação.
    modal.addEventListener("click", (event) => {
        let target = event.target.closest(".league-race-legend-row, .league-race-badge");
        if (!target) return;
        toggleLeagueRaceTeam(target.dataset.raceTeam);
    });

    modal.addEventListener("pointerover", (event) => {
        let target = event.target.closest("[data-race-team]");
        setLeagueRaceHover(target?.dataset.raceTeam || "");
    });
    modal.addEventListener("pointerleave", () => setLeagueRaceHover(""));
    modal.addEventListener("focusin", (event) => {
        let target = event.target.closest("[data-race-team]");
        setLeagueRaceHover(target?.dataset.raceTeam || "");
    });

    modal.querySelectorAll(".league-race-badge").forEach((badge) => {
        badge.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            toggleLeagueRaceTeam(badge.dataset.raceTeam);
        });
    });
}

function openLeagueRace(leagueId) {
    let league = leagues.find((entry) => entry.id === leagueId);
    if (!league?.evolucao) return;

    closeLeagueRace();

    let frames = getLeagueRaceHistory(league);
    if (!frames.length) return;

    raceLeagueId = leagueId;
    raceFrameIndex = 0;
    raceSeriesByLeague[leagueId] = raceSeriesByLeague[leagueId] || buildRaceSeries(frames, league.evolucao.equipas);

    // Abre com todas à vista: a cor já distingue, fixar é para quando se quer
    // seguir uma em particular.
    racePinned = new Set();

    let modal = document.createElement("div");
    modal.id = "leagueRaceModal";
    modal.className = "league-race-modal";
    modal.innerHTML = `
        <div class="league-race-backdrop" onclick="closeLeagueRace()"></div>
        <article class="league-race-dialog" role="dialog" aria-modal="true" aria-label="Evolução da classificação">
            <button class="league-race-close" type="button" onclick="closeLeagueRace()" aria-label="Fechar evolução">&times;</button>
            <header class="league-race-head">
                <div>
                    <span class="league-race-kicker">${escapeAttribute(league.nome)} · ${escapeAttribute(league.epoca)}</span>
                    <h3 class="league-race-title">Evolução da classificação</h3>
                </div>
                <div class="league-race-frame">
                    <strong class="league-race-frame-label"></strong>
                    <span class="league-race-frame-date"></span>
                </div>
            </header>
            <div class="league-race-body">
                <div class="league-race-chart">${renderLeagueRaceChart(league, frames, raceSeriesByLeague[leagueId])}</div>
                ${renderLeagueRaceLegend(league, frames)}
            </div>
            <div class="league-race-controls">
                <button class="league-race-play" type="button" aria-label="Reproduzir">&#9654;</button>
                <button class="league-race-step" type="button" data-race-step="-1" aria-label="Jornada anterior">&lsaquo;</button>
                <input class="league-race-scrubber" type="range" min="0" max="${frames.length - 1}" value="0" step="1" aria-label="Escolher jornada">
                <button class="league-race-step" type="button" data-race-step="1" aria-label="Jornada seguinte">&rsaquo;</button>
                <span class="league-race-counter"></span>
            </div>
        </article>
    `;

    document.body.appendChild(modal);
    openOverlay(modal, { onEscape: closeLeagueRace });
    bindLeagueRaceEvents(modal);
    applyLeagueRaceFrame();
    syncLeagueRacePlayButton();

    // Um frame de espera antes de começar, para as transições CSS terem de onde partir.
    requestAnimationFrame(() => {
        if (document.getElementById("leagueRaceModal")) toggleLeagueRacePlay();
    });
}

function closeLeagueRace() {
    let modal = document.getElementById("leagueRaceModal");
    if (!modal) return;

    pauseLeagueRace();
    closeOverlay(modal);
    raceLeagueId = null;
}

function renderLeagueRaceTrigger(league) {
    if (!league.evolucao) return "";
    return `
        <button class="league-chip league-race-trigger" type="button" onclick="openLeagueRace('${league.id}')">
            Evolução da classificação
        </button>
    `;
}

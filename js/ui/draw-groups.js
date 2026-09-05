// Cerimónia do sorteio dos grupos do Mundial. É uma cerimónia diferente da do
// js/ui/draw.js e não lhe toca: só reutiliza a roleta (spinRoulette,
// scrollToElement, highlightWinner), que vive no scope global partilhado.
//
// O modelo é "um ecrã, um condutor": quem partilha o ecrã escreve todas as
// escolhas em campos mascarados, por isso a sala vê pontos e não letras. O
// próprio mascaramento é o compromisso — o condutor preenche e sela a linha
// dele à frente de toda a gente, antes de receber qualquer DM, e a partir daí
// não pode adaptar a escolha ao que os outros escolheram.

let wcPhase = "setup";        // setup | resume | picks | reveal | conflicts | teams | done
let wcRound = 1;
let wcDriver = "";
let wcGroupOwners = {};       // { "A": "Rato" }
let wcRoundPicks = {};        // { "Rato": "C" }, só a ronda a decorrer
let wcSealed = false;         // a escolha do condutor nesta ronda já está selada
let wcConflictQueue = [];     // ids dos grupos disputados por resolver, por ordem
let wcConflictWinner = null;  // vencedor já sorteado do conflito a decorrer
let wcTeamPicks = {};         // { "Rato": "Brasil" }
let wcReopened = "";          // jogador cuja linha foi reaberta
let wcReopenedSaw = 0;        // quantas escolhas dos outros já estavam recebidas nessa altura
let wcResumePhase = "";       // fase guardada, à espera que se escolha retomar
let wcStateLoaded = false;

const WORLDCUP_STORAGE_KEY = "fm-draw-worldcup";

/* ---------- estado guardado ---------- */

// localStorage e não sessionStorage: o sessionStorage aguenta um refresh mas não
// um separador fechado nem um browser que rebenta, e a noite do sorteio não se
// repete.
function readWorldCupState() {
    try {
        let raw = localStorage.getItem(WORLDCUP_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (_) {
        return null;
    }
}

function saveWorldCupState() {
    try {
        localStorage.setItem(WORLDCUP_STORAGE_KEY, JSON.stringify({
            wcPhase, wcRound, wcDriver, wcGroupOwners, wcRoundPicks,
            wcSealed, wcConflictQueue, wcConflictWinner, wcTeamPicks, wcReopened, wcReopenedSaw
        }));
    } catch (_) {}
}

function clearWorldCupState() {
    try {
        localStorage.removeItem(WORLDCUP_STORAGE_KEY);
    } catch (_) {}
}

function applyWorldCupState(saved) {
    wcPhase = saved.wcPhase || "setup";
    wcRound = saved.wcRound || 1;
    wcDriver = saved.wcDriver || "";
    wcGroupOwners = saved.wcGroupOwners || {};
    wcRoundPicks = saved.wcRoundPicks || {};
    wcSealed = saved.wcSealed === true;
    wcConflictQueue = saved.wcConflictQueue || [];
    wcConflictWinner = saved.wcConflictWinner || null;
    wcTeamPicks = saved.wcTeamPicks || {};
    wcReopened = saved.wcReopened || "";
    wcReopenedSaw = saved.wcReopenedSaw || 0;
}

function resetWorldCupDraw() {
    wcPhase = "setup";
    wcRound = 1;
    wcDriver = "";
    wcGroupOwners = {};
    wcRoundPicks = {};
    wcSealed = false;
    wcConflictQueue = [];
    wcConflictWinner = null;
    wcTeamPicks = {};
    wcReopened = "";
    wcReopenedSaw = 0;
    wcResumePhase = "";
    clearWorldCupState();
}

/* ---------- consultas ---------- */

function getWcAssignedPlayers() {
    return Object.values(wcGroupOwners);
}

function getWcUnassignedPlayers() {
    let assigned = getWcAssignedPlayers();
    return jogadores.filter((player) => !assigned.includes(player));
}

function getWcAvailableGroups() {
    return worldCupGroupIds.filter((id) => !wcGroupOwners[id]);
}

function getWcGroupOfPlayer(player) {
    return worldCupGroupIds.find((id) => wcGroupOwners[id] === player) || "";
}

// Agrupa as escolhas desta ronda por grupo, pela ordem A..L.
function getWcPicksByGroup() {
    let byGroup = {};
    worldCupGroupIds.forEach((id) => {
        let pickers = Object.keys(wcRoundPicks).filter((player) => wcRoundPicks[player] === id);
        if (pickers.length) byGroup[id] = pickers;
    });
    return byGroup;
}

function wcDriverIsPicking() {
    return getWcUnassignedPlayers().includes(wcDriver);
}

// Enquanto o condutor não selar a escolha dele, mais nenhuma linha aceita
// escrita. Se já tiver grupo, não há nada para selar.
function wcRowsUnlocked() {
    return !wcDriverIsPicking() || wcSealed;
}

/* ---------- render ---------- */

function renderWorldCupDraw() {
    if (!wcStateLoaded) {
        wcStateLoaded = true;
        let saved = readWorldCupState();
        if (saved && saved.wcPhase && saved.wcPhase !== "setup") {
            applyWorldCupState(saved);
            if (wcPhase !== "done") {
                wcResumePhase = wcPhase;
                wcPhase = "resume";
            }
        }
    }

    if (WORLDCUP_DRAW_COMPLETED) {
        renderWcBoard();
        renderWcCompleted();
        return;
    }

    renderWcBoard();
    renderWcStage();
}

function wcGroupStateClass(id) {
    if (wcGroupOwners[id]) return "is-owned";
    if (wcPhase === "done") return "is-unused";
    if (wcPhase === "reveal" || wcPhase === "conflicts") {
        let pickers = Object.keys(wcRoundPicks).filter((player) => wcRoundPicks[player] === id);
        if (pickers.length > 1) return "is-conflict";
        if (pickers.length === 1) return "is-picked";
    }
    return "is-free";
}

function renderWcBoard() {
    let board = document.getElementById("wcBoard");
    if (!board) return;

    let showPicks = wcPhase === "reveal" || wcPhase === "conflicts";

    board.innerHTML = worldCupGroups.map((grupo) => {
        let owner = wcGroupOwners[grupo.id];
        let pickers = showPicks
            ? Object.keys(wcRoundPicks).filter((player) => wcRoundPicks[player] === grupo.id)
            : [];

        let teams = grupo.equipas.map((equipa) => {
            let chosenBy = Object.keys(wcTeamPicks).find((player) => wcTeamPicks[player] === equipa.nome);
            let taken = chosenBy ? " is-taken" : "";
            return `<li class="wc-team${taken}">
                <img class="wc-flag" src="${escapeAttribute(equipa.bandeira)}" alt="${escapeAttribute(equipa.nome)}" width="22" height="22">
                <span class="wc-team-name">${equipa.nome}</span>
            </li>`;
        }).join("");

        let chips = pickers.length
            ? `<div class="wc-group-picks">${pickers.map((player) => `<span class="wc-chip">${player}</span>`).join("")}</div>`
            : "";

        let ownerLine = owner
            ? `<span class="wc-group-owner">${owner}</span>`
            : (wcPhase === "done" ? `<span class="wc-group-owner wc-group-unused">não utilizado</span>` : "");

        return `<article class="wc-group ${wcGroupStateClass(grupo.id)}" data-group="${grupo.id}">
            <header class="wc-group-head">
                <span class="wc-group-letter">${grupo.id}</span>
                ${ownerLine}
            </header>
            <ul class="wc-group-teams">${teams}</ul>
            ${chips}
        </article>`;
    }).join("");
}

function renderWcStage() {
    let stage = document.getElementById("wcStage");
    if (!stage) return;

    if (wcPhase === "setup") return renderWcSetup(stage);
    if (wcPhase === "resume") return renderWcResume(stage);
    if (wcPhase === "picks") return renderWcPicks(stage);
    if (wcPhase === "reveal") return renderWcReveal(stage);
    if (wcPhase === "conflicts") return renderWcConflict(stage);
    if (wcPhase === "teams") return renderWcTeamPick(stage);
    if (wcPhase === "done") return renderWcResult(stage);
}

function renderWcSetup(stage) {
    stage.innerHTML = `
        <div class="wc-panel">
            <h3 class="wc-panel-title">Antes de começar</h3>
            <p class="wc-panel-copy">Quem está a partilhar o ecrã escreve todas as escolhas. Tem de selar a
            sua, à frente de toda a gente, antes de abrir as DMs.</p>
            <label class="wc-field">
                <span>Quem está a partilhar o ecrã?</span>
                <select id="wcDriverSelect" class="wc-select">
                    ${jogadores.map((player) => `<option value="${escapeAttribute(player)}">${player}</option>`).join("")}
                </select>
            </label>
            <button class="action-btn gold" type="button" onclick="wcStartDraw()">Começar Sorteio</button>
        </div>`;
}

function renderWcResume(stage) {
    stage.innerHTML = `
        <div class="wc-panel">
            <h3 class="wc-panel-title">Sorteio por terminar</h3>
            <p class="wc-panel-copy">Há um sorteio a meio guardado neste browser, na ronda ${wcRound}.
            Retomar mantém tudo o que já foi selado.</p>
            <div class="wc-actions">
                <button class="action-btn gold" type="button" onclick="wcResume()">Retomar sorteio</button>
                <button class="action-btn" type="button" onclick="wcRestart()">Recomeçar</button>
            </div>
        </div>`;
}

function renderWcPicks(stage) {
    let players = getWcUnassignedPlayers();
    let driverPicking = wcDriverIsPicking();
    let unlocked = wcRowsUnlocked();
    let ordered = driverPicking ? [wcDriver, ...players.filter((p) => p !== wcDriver)] : players;
    let ready = players.every((player) => wcRoundPicks[player]);

    let rows = ordered.map((player) => {
        let isDriver = player === wcDriver && driverPicking;
        let filled = Boolean(wcRoundPicks[player]);
        let sealed = isDriver && wcSealed;
        let disabled = sealed || (!isDriver && !unlocked);

        let status = sealed ? `<span class="wc-status is-sealed">selada</span>`
            : filled ? `<span class="wc-status is-filled">recebido</span>`
            : `<span class="wc-status">à espera</span>`;

        let sealBtn = !isDriver ? ""
            : wcSealed
                ? `<button class="wc-fix-btn" type="button" onclick="wcUnsealDriverPick()">Reabrir</button>`
                : `<button class="wc-seal-btn" type="button" onclick="wcSealDriverPick()" ${filled ? "" : "disabled"}>Selar escolha</button>`;

        return `<div class="wc-row${isDriver ? " is-driver" : ""}${disabled ? " is-disabled" : ""}">
            <span class="wc-row-name">${player}${isDriver ? ` <span class="wc-row-tag">tu</span>` : ""}</span>
            <input class="wc-pick-input" type="password" inputmode="latin" autocomplete="off"
                   maxlength="1" aria-label="Escolha de ${escapeAttribute(player)}"
                   data-player="${escapeAttribute(player)}" ${disabled ? "disabled" : ""}>
            ${sealBtn}
            ${status}
        </div>`;
    }).join("");

    let hint = driverPicking && !wcSealed
        ? `<p class="wc-panel-copy">Escreve a tua letra e sela. As outras linhas só abrem depois disso.</p>`
        : `<p class="wc-panel-copy">Escreve as letras à medida que as DMs chegam. O ecrã nunca mostra a letra.</p>`;

    // O número interessa: reabrir sem mais nenhuma escolha no ecrã é corrigir um
    // erro de dedo, reabrir com sete à vista é outra coisa. O painel diz qual foi.
    let warning = wcReopened
        ? `<p class="wc-warning">Escolha de ${wcReopened} reaberta${wcReopenedSaw
            ? `, com ${wcReopenedSaw} ${wcReopenedSaw === 1 ? "escolha já recebida" : "escolhas já recebidas"}`
            : ", antes de chegar qualquer outra"}.</p>`
        : "";

    stage.innerHTML = `
        <div class="wc-panel">
            <h3 class="wc-panel-title">Escolhas &middot; ronda ${wcRound}</h3>
            ${hint}
            ${warning}
            <div class="wc-rows">${rows}</div>
            <div class="wc-actions">
                <button class="action-btn gold" type="button" onclick="wcReveal()" ${ready ? "" : "disabled"}>Revelar</button>
            </div>
        </div>`;

    bindWcPickInputs(stage);
}

// Só passam letras de grupos ainda livres. Uma letra inválida simplesmente não
// entra, em vez de aparecer um erro: um erro visível diria à sala alguma coisa
// sobre a escolha daquele jogador.
function bindWcPickInputs(scope) {
    let available = getWcAvailableGroups();

    scope.querySelectorAll(".wc-pick-input").forEach((input) => {
        let player = input.dataset.player;
        if (wcRoundPicks[player]) input.value = wcRoundPicks[player];

        input.addEventListener("input", () => {
            let letter = String(input.value || "").trim().toUpperCase().slice(-1);

            if (letter && available.includes(letter)) {
                wcRoundPicks[player] = letter;
                input.value = letter;
            } else {
                delete wcRoundPicks[player];
                input.value = "";
            }

            saveWorldCupState();
            refreshWcPickControls(scope);
        });
    });
}

// Actualiza só os botões e os estados das linhas, para não recriar os inputs
// (e perder o foco) a cada tecla.
function refreshWcPickControls(scope) {
    let players = getWcUnassignedPlayers();
    let ready = players.every((player) => wcRoundPicks[player]);

    let revealBtn = scope.querySelector(".wc-actions .action-btn");
    if (revealBtn) revealBtn.disabled = !ready;

    let sealBtn = scope.querySelector(".wc-seal-btn");
    if (sealBtn) sealBtn.disabled = !wcRoundPicks[wcDriver];

    scope.querySelectorAll(".wc-row").forEach((row) => {
        let input = row.querySelector(".wc-pick-input");
        let status = row.querySelector(".wc-status");
        if (!input || !status) return;
        if (status.classList.contains("is-sealed")) return;
        let filled = Boolean(wcRoundPicks[input.dataset.player]);
        status.classList.toggle("is-filled", filled);
        status.textContent = filled ? "recebido" : "à espera";
    });
}

function renderWcReveal(stage) {
    let byGroup = getWcPicksByGroup();
    let conflicts = Object.keys(byGroup).filter((id) => byGroup[id].length > 1);
    let solo = Object.keys(byGroup).filter((id) => byGroup[id].length === 1);

    let summary = conflicts.length
        ? `${conflicts.length} ${conflicts.length === 1 ? "grupo disputado" : "grupos disputados"}: ${conflicts.join(", ")}.`
        : "Nenhum grupo repetido.";

    let rows = Object.keys(wcRoundPicks).map((player) => `
        <div class="wc-reveal-row">
            <span class="wc-row-name">${player}</span>
            <span class="wc-reveal-letter">${wcRoundPicks[player]}</span>
            <button class="wc-fix-btn" type="button" onclick="wcReopenRow('${escapeAttribute(player)}')">corrigir</button>
        </div>`).join("");

    stage.innerHTML = `
        <div class="wc-panel">
            <h3 class="wc-panel-title">Escolhas reveladas &middot; ronda ${wcRound}</h3>
            <p class="wc-panel-copy">${summary} ${solo.length ? `Sem disputa: ${solo.join(", ")}.` : ""}</p>
            <p class="wc-panel-copy">Confirmem que cada linha está certa antes de continuar.</p>
            <div class="wc-reveal-rows">${rows}</div>
            <div class="wc-actions">
                <button class="action-btn gold" type="button" onclick="wcConfirmReveal()">Confirmam? Continuar</button>
            </div>
        </div>`;
}

function renderWcConflict(stage) {
    let groupId = wcConflictQueue[0];
    let grupo = getWorldCupGroup(groupId);
    let pickers = Object.keys(wcRoundPicks).filter((player) => wcRoundPicks[player] === groupId);

    if (wcConflictWinner) {
        let losers = pickers.filter((player) => player !== wcConflictWinner);
        stage.innerHTML = `
            <div class="wc-panel">
                <h3 class="wc-panel-title">${grupo.nome}</h3>
                <div class="wc-winner">
                    <span class="wc-winner-label">Fica com o grupo</span>
                    <span class="wc-winner-name">${wcConflictWinner}</span>
                </div>
                <p class="wc-panel-copy">${losers.length ? `${losers.join(", ")} ${losers.length === 1 ? "volta" : "voltam"} ao lote.` : ""}</p>
                <div class="wc-actions">
                    <button class="action-btn gold" type="button" onclick="wcAfterConflict()">Continuar</button>
                </div>
            </div>`;
        return;
    }

    stage.innerHTML = `
        <div class="wc-panel">
            <h3 class="wc-panel-title">${grupo.nome} &middot; ${pickers.length} jogadores</h3>
            <p class="wc-panel-copy">${pickers.join(", ")}</p>
            <div class="wc-actions">
                <button class="action-btn gold" type="button" id="wcSpinBtn" onclick="wcSpinConflict()">Sortear ${grupo.nome}</button>
            </div>
            <div class="wc-roulette" id="wcRoulette"></div>
        </div>`;
}

function renderWcTeamPick(stage) {
    let groupId = worldCupGroupIds.find((id) => wcGroupOwners[id] && !wcTeamPicks[wcGroupOwners[id]]);

    if (!groupId) {
        wcPhase = "done";
        saveWorldCupState();
        renderWorldCupDraw();
        return;
    }

    let grupo = getWorldCupGroup(groupId);
    let player = wcGroupOwners[groupId];

    let cards = grupo.equipas.map((equipa) => `
        <button class="wc-team-card" type="button" onclick="wcPickTeam('${escapeAttribute(equipa.nome)}')">
            <img class="wc-team-flag" src="${escapeAttribute(equipa.bandeira)}" alt="${escapeAttribute(equipa.nome)}" width="48" height="48">
            <span class="wc-team-card-name">${equipa.nome}</span>
            <span class="wc-team-card-code">${equipa.codigo}</span>
        </button>`).join("");

    stage.innerHTML = `
        <div class="wc-panel">
            <h3 class="wc-panel-title">${grupo.nome} &middot; ${player} escolhe</h3>
            <p class="wc-panel-copy">Sem disputa possível: o grupo já é só dele.</p>
            <div class="wc-team-cards">${cards}</div>
        </div>`;
}

function buildWcResults() {
    return worldCupGroupIds
        .filter((id) => wcGroupOwners[id])
        .map((id) => {
            let player = wcGroupOwners[id];
            let equipa = getWorldCupTeam(id, wcTeamPicks[player]);
            return {
                jogador: player,
                grupo: id,
                equipa: equipa ? equipa.nome : "",
                codigo: equipa ? equipa.codigo : "",
                bandeira: equipa ? equipa.bandeira : ""
            };
        });
}

function renderWcResultTable(results, extra = "") {
    let rows = results.map((entry) => `
        <div class="row">
            <div class="table-rank">${entry.grupo}</div>
            <div class="table-match">
                <div class="table-player">${getCoachLinkMarkup(entry.jogador, "results-player-link")}</div>
                <span class="table-connector" aria-hidden="true"></span>
                <div class="table-team">
                    <img class="table-logo" src="${escapeAttribute(entry.bandeira)}" alt="${escapeAttribute(entry.equipa)}">
                    <span class="table-team-name">${entry.equipa}</span>
                </div>
            </div>
        </div>`).join("");

    return `<div class="wc-panel">
        <h3 class="wc-panel-title">Resultados Finais</h3>
        <div class="table wc-result-table">${rows}</div>
        ${extra}
    </div>`;
}

function renderWcResult(stage) {
    let results = buildWcResults();
    stage.innerHTML = renderWcResultTable(results, `
        <div class="wc-actions">
            <button class="action-btn gold" type="button" onclick="wcCopyResult()">Copiar resultado</button>
            <button class="action-btn" type="button" onclick="wcRestart()">Recomeçar</button>
        </div>
        <div class="wc-copy-out" id="wcCopyOut" hidden></div>`);
    bindCoachLinks(stage);
}

function renderWcCompleted() {
    let stage = document.getElementById("wcStage");
    if (!stage) return;
    stage.innerHTML = renderWcResultTable(worldCupDrawResults);
    bindCoachLinks(stage);
}

/* ---------- transições ---------- */

function wcStartDraw() {
    let select = document.getElementById("wcDriverSelect");
    wcDriver = select ? select.value : jogadores[0];
    wcRound = 1;
    wcGroupOwners = {};
    wcRoundPicks = {};
    wcSealed = false;
    wcTeamPicks = {};
    wcReopened = "";
    wcReopenedSaw = 0;
    wcPhase = "picks";
    saveWorldCupState();
    renderWorldCupDraw();
}

// Volta exactamente à fase guardada. As únicas que não se retomam tal e qual
// são as que dependem de uma animação a meio: um conflito por sortear reaparece
// no botão "Sortear", não a girar.
function wcResume() {
    let fases = ["picks", "reveal", "conflicts", "teams"];
    wcPhase = fases.includes(wcResumePhase) ? wcResumePhase
        : wcConflictQueue.length ? "conflicts"
        : getWcUnassignedPlayers().length ? "picks"
        : "teams";
    wcResumePhase = "";
    saveWorldCupState();
    renderWorldCupDraw();
}

function wcRestart() {
    resetWorldCupDraw();
    renderWorldCupDraw();
}

function wcSealDriverPick() {
    if (!wcRoundPicks[wcDriver]) return;
    wcSealed = true;
    saveWorldCupState();
    renderWorldCupDraw();
}

function wcReveal() {
    let players = getWcUnassignedPlayers();
    if (!players.every((player) => wcRoundPicks[player])) return;
    wcReopened = "";
    wcReopenedSaw = 0;
    wcPhase = "reveal";
    saveWorldCupState();
    renderWorldCupDraw();
}

// Reabrir uma linha depois da revelação é sempre visível: a linha volta a
// aparecer vazia e o painel diz de quem é. Se for a do condutor, ele já viu as
// escolhas dos outros, e é por isso que isto tem de dar nas vistas.
function wcReopenRow(player) {
    wcReopenedSaw = Object.keys(wcRoundPicks).filter((p) => p !== player).length;
    delete wcRoundPicks[player];
    if (player === wcDriver) wcSealed = false;
    wcReopened = player;
    wcPhase = "picks";
    saveWorldCupState();
    renderWorldCupDraw();
}

// Tirar o selo antes da revelação, para o caso honesto de o condutor ter
// escrito a letra errada. Volta a trancar as outras linhas até selar de novo,
// que é o que mantém a ordem: primeiro a escolha dele, depois as dos outros.
function wcUnsealDriverPick() {
    if (!wcSealed) return;
    wcReopenedSaw = Object.keys(wcRoundPicks).filter((p) => p !== wcDriver).length;
    wcSealed = false;
    delete wcRoundPicks[wcDriver];
    wcReopened = wcDriver;
    saveWorldCupState();
    renderWorldCupDraw();
}

function wcConfirmReveal() {
    let byGroup = getWcPicksByGroup();

    Object.keys(byGroup).forEach((id) => {
        if (byGroup[id].length === 1) wcGroupOwners[id] = byGroup[id][0];
    });

    wcConflictQueue = Object.keys(byGroup).filter((id) => byGroup[id].length > 1);
    wcConflictWinner = null;

    if (wcConflictQueue.length) {
        wcPhase = "conflicts";
        saveWorldCupState();
        renderWorldCupDraw();
        return;
    }

    wcAdvanceRound();
}

function wcSpinConflict() {
    let groupId = wcConflictQueue[0];
    let pickers = Object.keys(wcRoundPicks).filter((player) => wcRoundPicks[player] === groupId);
    let target = Math.floor(Math.random() * pickers.length);
    let parent = document.getElementById("wcRoulette");
    if (!parent) return;

    // A roleta demora sete segundos. Sem isto, um segundo clique durante a
    // animação lançava um segundo sorteio e saíam dois vencedores.
    let btn = document.getElementById("wcSpinBtn");
    if (btn) {
        if (btn.disabled) return;
        btn.disabled = true;
        btn.textContent = "A sortear...";
    }

    spinRoulette(parent, pickers, target, ITEM_WIDTH_PLAYER, PLAYER_SPIN_LOOPS, (player) => {
        let item = document.createElement("div");
        item.className = "roulette-item name-item";
        item.textContent = player;
        return item;
    }, () => {
        wcConflictWinner = pickers[target];
        wcGroupOwners[groupId] = wcConflictWinner;
        saveWorldCupState();
        renderWorldCupDraw();
    });
}

function wcAfterConflict() {
    wcConflictQueue = wcConflictQueue.slice(1);
    wcConflictWinner = null;

    if (wcConflictQueue.length) {
        saveWorldCupState();
        renderWorldCupDraw();
        return;
    }

    wcAdvanceRound();
}

// Cada ronda atribui sempre pelo menos um grupo, por isso isto termina em oito
// rondas no pior caso. Com 12 grupos para 8 jogadores há sempre pelo menos 4
// grupos livres, logo nenhuma ronda pode ficar sem saída.
function wcAdvanceRound() {
    wcRoundPicks = {};
    wcSealed = false;
    wcReopened = "";
    wcReopenedSaw = 0;
    wcConflictQueue = [];
    wcConflictWinner = null;

    if (getWcUnassignedPlayers().length) {
        wcRound++;
        wcPhase = "picks";
    } else {
        wcPhase = "teams";
    }

    saveWorldCupState();
    renderWorldCupDraw();
}

function wcPickTeam(teamName) {
    let groupId = worldCupGroupIds.find((id) => wcGroupOwners[id] && !wcTeamPicks[wcGroupOwners[id]]);
    if (!groupId) return;
    wcTeamPicks[wcGroupOwners[groupId]] = teamName;
    saveWorldCupState();
    renderWorldCupDraw();
}

/* ---------- exportar ---------- */

function buildWorldCupResultLiteral() {
    let results = buildWcResults();
    let entries = results.map((entry) => `    { jogador: "${entry.jogador}", grupo: "${entry.grupo}", equipa: "${entry.equipa}", codigo: "${entry.codigo}", bandeira: "${entry.bandeira}" }`);
    return `const WORLDCUP_DRAW_COMPLETED = true;\n\nconst worldCupDrawResults = [\n${entries.join(",\n")}\n];\n`;
}

function wcCopyResult() {
    let text = buildWorldCupResultLiteral();
    let out = document.getElementById("wcCopyOut");

    let showFallback = () => {
        if (!out) return;
        out.hidden = false;
        out.innerHTML = `<p class="wc-panel-copy">Copia daqui para js/data/worldcup/worldcup-draw.js:</p>
            <textarea class="wc-copy-text" rows="12" readonly></textarea>`;
        let area = out.querySelector(".wc-copy-text");
        area.value = text;
        area.focus();
        area.select();
    };

    // O clipboard precisa de contexto seguro e falha quando a página é aberta
    // como file://, por isso há sempre o textarea como saída.
    try {
        navigator.clipboard.writeText(text).then(() => {
            if (out) {
                out.hidden = false;
                out.innerHTML = `<p class="wc-panel-copy">Resultado copiado. Cola em js/data/worldcup/worldcup-draw.js.</p>`;
            }
        }).catch(showFallback);
    } catch (_) {
        showFallback();
    }
}

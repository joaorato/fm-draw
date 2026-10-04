// A vista de um torneio (`torneio: true`, hoje só o Mundial) na aba Ligas. Um
// torneio não tem tabela de liga, por isso renderLeague() entrega-lhe o painel
// inteiro: as selecoes dos jogadores, os 12 grupos, os melhores terceiros e o
// quadro a eliminar. O calendário, golos e assistências e a Equipa da Jornada
// são os mesmos das ligas e vêm de renderLeagueLowerPanel().
//
// Não guarda estado: tudo o que mostra sai de worldcup-standings.js, que por
// sua vez sai dos jogos.

function renderWorldCupFlag(logo, nome) {
    return logo
        ? `<img class="league-wc-flag" src="${logo}" alt="${escapeAttribute(nome)}" loading="lazy">`
        : `<span class="league-wc-flag empty" aria-hidden="true"></span>`;
}

/* ---------- as selecoes dos jogadores ---------- */

function renderWorldCupPlayers() {
    let selecoes = worldCupEquipas
        .filter((entry) => entry.jogador)
        .map((entry) => ({ entry, estado: getWorldCupTeamStatus(entry.equipa) }));

    // Pódio primeiro, depois quem ainda está em prova, depois os eliminados.
    let podioOrdem = { campeao: 0, vice: 1, terceiro: 2 };
    let ordem = (item) => item.estado.lugar ? podioOrdem[item.estado.lugar] : item.estado.emProva ? 3 : 4;
    selecoes.sort((a, b) => ordem(a) - ordem(b)
        || a.entry.grupo.localeCompare(b.entry.grupo)
        || a.entry.jogador.localeCompare(b.entry.jogador));

    let cards = selecoes.map(({ entry, estado }) => {
        let premio = estado.lugar ? worldCupPremios[estado.lugar] : null;
        let classes = ["league-wc-player", estado.emProva ? "" : "is-out", estado.lugar ? `podium-${estado.lugar}` : ""]
            .filter(Boolean).join(" ");
        return `
            <article class="${classes}">
                ${renderWorldCupFlag(entry.logo, entry.equipa)}
                <div class="league-wc-player-copy">
                    <span class="league-wc-player-team">${entry.equipa}</span>
                    <span class="league-wc-player-coach">${getCoachLinkMarkup(entry.jogador, "league-wc-coach")}</span>
                    <span class="league-wc-player-status">${estado.texto}</span>
                </div>
                ${premio ? `<span class="league-wc-player-points ${getPointsClass(premio.pontos)}">${formatPoints(premio.pontos)}</span>` : ""}
            </article>
        `;
    }).join("");

    return `
        <section class="league-wc-card">
            <div class="league-wc-head">
                <strong>Seleções EMG</strong>
                <span>Só o pódio pontua</span>
            </div>
            <div class="league-wc-players">${cards}</div>
        </section>
    `;
}

/* ---------- fase de grupos ---------- */

function getWorldCupGroupRowZone(grupo, row) {
    if (row.pos <= 2) return "direct";
    if (row.pos !== 3) return "";
    let terceiro = worldCupThirdPlaced.find((linha) => linha.equipa === row.equipa);
    if (!worldCupGroupStageComplete) return "third";
    return terceiro?.apurado ? "third-in" : "";
}

function renderWorldCupGroup(grupo) {
    let rows = grupo.rows.map((row) => {
        let zona = getWorldCupGroupRowZone(grupo, row);
        let jogador = row.jogador
            ? `<span class="league-wc-row-coach">${getCoachLinkMarkup(row.jogador, "league-wc-coach")}</span>`
            : "";
        return `
            <div class="league-wc-row ${row.jogador ? "is-human" : ""} ${zona ? `zone-${zona}` : ""}">
                <span class="league-wc-pos">${row.pos}</span>
                <span class="league-wc-team">
                    ${renderWorldCupFlag(row.logo, row.equipa)}
                    <span class="league-wc-team-stack">
                        <span class="league-wc-team-name">${row.equipa}</span>
                        ${jogador}
                    </span>
                </span>
                <span>${row.j}</span>
                <span>${row.v}</span>
                <span>${row.e}</span>
                <span>${row.d}</span>
                <span>${row.dg > 0 ? `+${row.dg}` : row.dg}</span>
                <strong>${row.pts}</strong>
            </div>
        `;
    }).join("");

    return `
        <article class="league-wc-group ${grupo.concluido ? "is-complete" : ""}">
            <div class="league-wc-group-head">
                <strong>${grupo.nome}</strong>
                <span>${grupo.concluido ? "Concluído" : "A decorrer"}</span>
            </div>
            <div class="league-wc-row header">
                <span>#</span><span>Seleção</span><span>J</span><span>V</span><span>E</span><span>D</span><span>DG</span><span>Pts</span>
            </div>
            ${rows}
        </article>
    `;
}

function renderWorldCupGroups() {
    return `
        <section class="league-wc-card">
            <div class="league-wc-head">
                <strong>Fase de Grupos</strong>
                <span>Passam os 2 primeiros de cada grupo e os 8 melhores terceiros</span>
            </div>
            <div class="league-wc-groups">${worldCupGroupTables.map(renderWorldCupGroup).join("")}</div>
        </section>
    `;
}

function renderWorldCupThirds() {
    let rows = worldCupThirdPlaced.map((row, index) => {
        let estado = row.apurado ? "Apurado" : worldCupGroupStageComplete ? "Fora" : "Provisório";
        let jogador = row.jogador
            ? `<span class="league-wc-row-coach">${getCoachLinkMarkup(row.jogador, "league-wc-coach")}</span>`
            : "";
        return `
            <div class="league-wc-third ${row.jogador ? "is-human" : ""} ${row.apurado ? "is-in" : ""} ${index === 7 ? "cut-line" : ""}">
                <span class="league-wc-pos">${row.pos}</span>
                <span class="league-wc-team">
                    ${renderWorldCupFlag(row.logo, row.equipa)}
                    <span class="league-wc-team-stack">
                        <span class="league-wc-team-name">${row.equipa}</span>
                        ${jogador}
                    </span>
                </span>
                <span>Grupo ${row.grupo}</span>
                <span>${row.j}</span>
                <span>${row.dg > 0 ? `+${row.dg}` : row.dg}</span>
                <span>${row.gm}</span>
                <strong>${row.pts}</strong>
                <span class="league-wc-third-state ${row.apurado ? "in" : worldCupGroupStageComplete ? "out" : ""}">${estado}</span>
            </div>
        `;
    }).join("");

    return `
        <section class="league-wc-card">
            <div class="league-wc-head">
                <strong>Melhores terceiros</strong>
                <span>${worldCupGroupStageComplete ? "Ordem final" : "Ordem provisória: só fecha quando os 12 grupos acabarem"}</span>
            </div>
            <div class="league-wc-thirds">
                <div class="league-wc-third header">
                    <span>#</span><span>Seleção</span><span>Grupo</span><span>J</span><span>DG</span><span>GM</span><span>Pts</span><span>Estado</span>
                </div>
                ${rows}
            </div>
        </section>
    `;
}

/* ---------- quadro a eliminar ---------- */

// Um lado de um jogo do quadro, em código ("1E", "3:ABCDF", "V74"): a seleção,
// se já se sabe qual é, e o texto a mostrar enquanto não se souber. Os 1.º e 2.º
// resolvem-se assim que o grupo fecha, mesmo antes de o jogo estar escrito nos
// dados. Os terceiros não: depende da tabela da FIFA que decide qual vai para onde.
function resolveWorldCupSlot(code) {
    let tipo = code[0];

    if (tipo === "1" || tipo === "2") {
        let grupo = worldCupGroupTables.find((tabela) => tabela.id === code[1]);
        let row = grupo?.concluido ? grupo.rows[Number(tipo) - 1] : null;
        return { equipa: row?.equipa || null, texto: `${tipo}.º Grupo ${code[1]}` };
    }

    if (tipo === "3") {
        return { equipa: null, texto: `3.º (${code.slice(2).split("").join("/")})` };
    }

    let jogo = Number(code.slice(1));
    let fixture = getWorldCupFixtureByNumber(jogo);
    let equipa = tipo === "V" ? getWorldCupFixtureWinner(fixture) : getWorldCupFixtureLoser(fixture);
    return { equipa, texto: `${tipo === "V" ? "Vencedor" : "Derrotado"} do jogo ${jogo}` };
}

function renderWorldCupBracketSide(side, isWinner) {
    let entry = side.equipa ? getWorldCupTeamEntry(side.equipa) : null;
    let jogador = entry?.jogador ? `<span class="league-wc-match-coach">${entry.jogador}</span>` : "";
    let score = Number.isFinite(side.golos) ? side.golos : "";
    return `
        <div class="league-wc-match-side ${isWinner ? "winner" : ""} ${entry?.jogador ? "is-human" : ""} ${side.equipa ? "" : "pending"}">
            ${renderWorldCupFlag(entry?.logo, side.equipa || "")}
            <span class="league-wc-match-name">${side.equipa || side.texto}</span>
            ${jogador}
            <strong class="league-wc-match-score">${score}</strong>
        </div>
    `;
}

function renderWorldCupBracketMatch(slot) {
    let fixture = getWorldCupFixtureByNumber(slot.jogo);
    let sides = fixture
        ? [{ equipa: fixture.home, golos: fixture.homeGoals }, { equipa: fixture.away, golos: fixture.awayGoals }]
        : slot.lados.map((code) => resolveWorldCupSlot(code));
    let winner = getWorldCupFixtureWinner(fixture);

    // Um jogo decidido nos penáltis tem de o dizer: os golos de cada lado são
    // iguais e o vencedor só se vê pela linha a negrito.
    let nota = fixture?.note || (String(fixture?.displayScore || "").startsWith("p") ? "Nos penáltis" : "");
    let meta = `<span class="league-wc-match-meta">Jogo ${slot.jogo}${fixture?.date ? ` · ${fixture.date}` : ""}${nota ? ` · ${nota}` : ""}</span>`;
    let body = `${meta}${sides.map((side) => renderWorldCupBracketSide(side, Boolean(winner) && side.equipa === winner)).join("")}`;

    return fixture?.report
        ? `<button class="league-wc-match is-clickable" type="button" onclick="openMatchReport('${fixture.report.id}')" title="Ver estatísticas do jogo">${body}</button>`
        : `<div class="league-wc-match ${fixture ? "" : "is-open"}">${body}</div>`;
}

// As duas metades do quadro, cada uma como colunas de fora para dentro (dos
// dezasseis-avos até à meia-final), na ordem em que os jogos alimentam o
// seguinte: é isso que alinha cada jogo com o ponto médio dos dois que o
// alimentam. Tudo sai de worldCupBracket, não de uma lista escrita aqui.
function getWorldCupBracketLayout() {
    let porJogo = new Map(worldCupBracket.map((slot) => [slot.jogo, slot]));
    let alimentadores = (slot) => slot.lados
        .filter((code) => code[0] === "V")
        .map((code) => porJogo.get(Number(code.slice(1))));

    let metade = (raiz) => {
        let niveis = [[raiz]];
        for (;;) {
            let seguinte = niveis[niveis.length - 1].flatMap(alimentadores);
            if (!seguinte.length) break;
            niveis.push(seguinte);
        }
        return niveis;
    };

    let final = porJogo.get(104);
    let [esquerda, direita] = alimentadores(final).map(metade);
    return { final, terceiroLugar: porJogo.get(103), esquerda: [...esquerda].reverse(), direita };
}

function renderWorldCupBracketColumn(slots) {
    let ronda = worldCupRondas.find((item) => item.key === slots[0].ronda);
    return `
        <div class="league-wc-bracket-col">
            <div class="league-wc-bracket-title">${ronda.curto}</div>
            <div class="league-wc-bracket-matches">${slots.map(renderWorldCupBracketMatch).join("")}</div>
        </div>
    `;
}

function renderWorldCupBracket() {
    let { final, terceiroLugar, esquerda, direita } = getWorldCupBracketLayout();
    let columns = [
        ...esquerda.map(renderWorldCupBracketColumn),
        renderWorldCupBracketColumn([final]),
        ...direita.map(renderWorldCupBracketColumn)
    ].join("");

    return `
        <section class="league-wc-card">
            <div class="league-wc-head">
                <strong>Quadro a eliminar</strong>
                <span>Os jogos aparecem quando se sabe quem joga</span>
            </div>
            <div class="league-wc-bracket-scroll">
                <div class="league-wc-bracket">${columns}</div>
            </div>
            <div class="league-wc-third-place">
                <div class="league-wc-bracket-title">Jogo do 3.º lugar</div>
                ${renderWorldCupBracketMatch(terceiroLugar)}
            </div>
        </section>
    `;
}

/* ---------- o painel ---------- */

function renderTournament(league, panel) {
    let calendarScrollTop = panel.querySelector(".league-calendar-scroll")?.scrollTop || 0;

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
            <div class="league-chip muted">${league.formula}</div>
            ${renderLeagueXiTrigger(league)}
        </div>
        <div class="league-wc">
            ${renderWorldCupPlayers()}
            ${renderWorldCupGroups()}
            ${renderWorldCupThirds()}
            ${renderWorldCupBracket()}
        </div>
        ${renderLeagueLowerPanel(league)}
    `;

    setupLeagueScorerTooltips(panel);
    let calendarScroll = panel.querySelector(".league-calendar-scroll");
    if (calendarScroll) calendarScroll.scrollTop = calendarScrollTop;
    scheduleLeagueLiveAutoAdvance(league);
    bindCoachLinks(panel);
}

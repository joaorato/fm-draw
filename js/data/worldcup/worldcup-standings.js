// Tudo o que o Mundial mostra e que se calcula a partir dos jogos em
// worldcup-fixtures.js: as tabelas dos grupos, os melhores terceiros, o pódio e
// os pontos da Liga EMG. Nada disto se escreve à mão.
// Corre depois de worldcup-table.js (regras, premios) e worldcup-reports.js.

assignLeagueFixtureRounds(worldCupFixtures, { teamNames: worldCupEquipas.map((entry) => entry.equipa) });
linkReportsToFixtures(worldCupFixtures, worldCupMatchReports);

function isWorldCupMatch(fixture) {
    return String(fixture.competition || "").startsWith("Mundial");
}

function isWorldCupGroupMatch(fixture) {
    return Boolean(fixture.grupo);
}

function hasWorldCupResult(fixture) {
    return Number.isFinite(fixture.homeGoals) && Number.isFinite(fixture.awayGoals);
}

// Quem passou: o que marcou mais golos, ou, num empate (prolongamento e
// penáltis), o `winner` que o jogo declara. Null enquanto não houver resultado.
function getWorldCupFixtureWinner(fixture) {
    if (!fixture || !hasWorldCupResult(fixture)) return null;
    if (fixture.homeGoals !== fixture.awayGoals) return fixture.homeGoals > fixture.awayGoals ? fixture.home : fixture.away;
    if (fixture.winner === "home") return fixture.home;
    if (fixture.winner === "away") return fixture.away;
    return null;
}

function getWorldCupFixtureLoser(fixture) {
    let winner = getWorldCupFixtureWinner(fixture);
    if (!winner) return null;
    return winner === fixture.home ? fixture.away : fixture.home;
}

function getWorldCupFixtureByNumber(matchNumber) {
    return worldCupFixtures.find((fixture) => fixture.matchNumber === matchNumber) || null;
}

/* ---------- fase de grupos ---------- */

function buildWorldCupGroupTable(grupo) {
    let nomes = grupo.equipas.map((equipa) => equipa.nome);
    let leagueName = `Mundial · ${grupo.nome}`;
    let isGroupMatch = (fixture) => fixture.grupo === grupo.id;

    let rows = sortStandings(
        buildStandingsFromFixtures(worldCupFixtures, nomes, { isLeagueMatch: isGroupMatch }),
        worldCupFixtures,
        worldCupRegras,
        { isLeagueMatch: isGroupMatch, leagueName }
    );

    return applyStandingsSnapshot(rows, worldCupClassificacaoFM[grupo.id], leagueName).map((row) => ({
        ...row,
        ...getWorldCupTeamEntry(row.equipa)
    }));
}

const worldCupGroupTables = worldCupGroups.map((grupo) => ({
    id: grupo.id,
    nome: grupo.nome,
    // Um grupo está fechado quando os seus 6 jogos têm resultado.
    concluido: worldCupFixtures.filter((fixture) => fixture.grupo === grupo.id && hasWorldCupResult(fixture)).length === 6,
    rows: buildWorldCupGroupTable(grupo)
}));

const worldCupGroupStageComplete = worldCupGroupTables.every((grupo) => grupo.concluido);

// Os 12 terceiros por ordem; só os 8 primeiros seguem em frente. Enquanto algum
// grupo não estiver fechado a ordem é provisória e `apurado` fica a falso para
// todos: ninguém está apurado como terceiro antes de os 12 acabarem.
const worldCupThirdPlaced = (() => {
    let terceiros = worldCupGroupTables.map((grupo) => ({ ...grupo.rows[2], concluido: grupo.concluido }));
    let ordenados = sortStandings(terceiros, worldCupFixtures, worldCupRegrasTerceiros, { leagueName: "Mundial · terceiros" });
    return ordenados.map((row, index) => ({
        ...row,
        pos: index + 1,
        apurado: worldCupGroupStageComplete && index < 8
    }));
})();

/* ---------- pódio e pontos ---------- */

// Campeão e vice saem da final, o terceiro do jogo do 3.º lugar. Cada lugar fica
// null até o jogo ter um vencedor.
function getWorldCupPodium() {
    let final = worldCupFixtures.find((fixture) => fixture.round === "final");
    let terceiroLugar = worldCupFixtures.find((fixture) => fixture.round === "3p");
    return {
        campeao: getWorldCupFixtureWinner(final),
        vice: getWorldCupFixtureLoser(final),
        terceiro: getWorldCupFixtureWinner(terceiroLugar)
    };
}

const worldCupPodium = getWorldCupPodium();
const worldCupConcluido = Boolean(worldCupPodium.campeao && worldCupPodium.terceiro);

// Os pontos da Liga EMG para calcCupBonuses(): só entra um lugar que já está
// decidido, por isso o Mundial vale 0 até à final.
const worldCupTacas = Object.entries(worldCupPremios)
    .filter(([lugar]) => worldCupPodium[lugar])
    .map(([lugar, premio]) => ({
        tipo: premio.tipo,
        jogador: getWorldCupTeamEntry(worldCupPodium[lugar])?.jogador || null,
        pontos: premio.pontos
    }));

/* ---------- onde está cada seleção ---------- */

// O texto do estado de uma seleção, e se ainda está em prova. Na fase de grupos
// diz onde está na tabela; depois de os grupos fecharem, quem não ficou nos dois
// primeiros nem entre os 8 melhores terceiros está eliminado; a partir daí vê-se
// pelos jogos do quadro até onde chegou ou onde caiu.
function getWorldCupTeamStatus(teamName) {
    let podium = worldCupPodium;
    if (podium.campeao === teamName) return { texto: "Campeão do Mundo", emProva: false, lugar: "campeao" };
    if (podium.vice === teamName) return { texto: "Vice-campeão do Mundo", emProva: false, lugar: "vice" };
    if (podium.terceiro === teamName) return { texto: "3.º lugar", emProva: false, lugar: "terceiro" };

    let jogosDoQuadro = worldCupFixtures
        .filter((fixture) => fixture.matchNumber && (fixture.home === teamName || fixture.away === teamName));

    if (jogosDoQuadro.length) {
        let ultimo = jogosDoQuadro[jogosDoQuadro.length - 1];
        let indice = worldCupRondas.findIndex((ronda) => ronda.key === ultimo.round);
        let ronda = worldCupRondas[indice];
        let vencedor = getWorldCupFixtureWinner(ultimo);

        if (!vencedor) return { texto: `Em campo · ${ronda.curto}`, emProva: true };
        if (ultimo.round === "3p") return { texto: "4.º lugar", emProva: false };
        if (vencedor === teamName) {
            // Venceu o último jogo que se conhece: está na ronda seguinte, ainda por jogar.
            let seguinte = ultimo.round === "sf" ? worldCupRondas.find((item) => item.key === "final") : worldCupRondas[indice + 1];
            return { texto: `Apurada · ${seguinte.curto}`, emProva: true };
        }
        // Perder a meia-final leva ao jogo do 3.º lugar, que ainda dá pontos.
        if (ultimo.round === "sf") return { texto: "Apurada · 3.º lugar", emProva: true };
        return { texto: `Eliminada · ${ronda.curto}`, emProva: false };
    }

    let entry = getWorldCupTeamEntry(teamName);
    let grupo = worldCupGroupTables.find((tabela) => tabela.id === entry?.grupo);
    let row = grupo?.rows.find((linha) => linha.equipa === teamName);
    if (!row) return { texto: "", emProva: true };

    if (worldCupGroupStageComplete) {
        let terceiro = worldCupThirdPlaced.find((linha) => linha.equipa === teamName);
        let apurada = row.pos <= 2 || Boolean(terceiro?.apurado);
        return apurada
            ? { texto: `${grupo.nome} · ${row.pos}.º · apurada`, emProva: true }
            : { texto: "Eliminada · Fase de Grupos", emProva: false };
    }

    if (!row.j) return { texto: `${grupo.nome} · por jogar`, emProva: true };
    return { texto: `${grupo.nome} · ${row.pos}.º · ${row.pts} pts`, emProva: true };
}

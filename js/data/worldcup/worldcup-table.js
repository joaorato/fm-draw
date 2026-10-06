// Configuração editorial do Mundial 2026. A classificação dos grupos não se
// escreve aqui: sai dos resultados, em worldcup-standings.js, como a da Croácia.

// As 48 seleções, derivadas dos grupos e do sorteio da Liga EMG. `logo` é a
// bandeira, para o calendário e a ficha de jogo acharem seleção e jogador pela
// mesma função que acha clubes (getLeagueTeamEntry).
const worldCupEquipas = worldCupGroups.flatMap((grupo) => grupo.equipas.map((equipa) => ({
    equipa: equipa.nome,
    codigo: equipa.codigo,
    logo: equipa.bandeira,
    grupo: grupo.id,
    jogador: worldCupDrawResults
        .find((resultado) => resultado.equipa === equipa.nome && !worldCupDesistentes.includes(resultado.jogador))?.jogador || null
})));

function getWorldCupTeamEntry(teamName) {
    return worldCupEquipas.find((entry) => entry.equipa === teamName) || null;
}

// Desempate dentro de um grupo, pela ordem do regulamento da FIFA de 2026: o
// confronto directo vem antes da diferença de golos geral. Faltam a conduta
// (fair play) e o ranking da FIFA, que os resultados não trazem: se uma tabela
// do FM discordar de um empate assim, cola-a em worldCupClassificacaoFM.
const worldCupRegras = {
    desempate: ["h2hPts", "h2hDg", "h2hGm", "dg", "gm", "equipa"]
};

// Os terceiros classificam-se entre si por pontos, diferença de golos e golos
// marcados (não há confronto directo entre grupos diferentes).
const worldCupRegrasTerceiros = {
    desempate: ["dg", "gm", "equipa"]
};

// Conferência opcional contra o FM, por grupo: vazio = a tabela sai dos
// resultados. Cola a tabela do FM de um grupo pela ordem em que lá aparece,
// ["Equipa", pontos], e ela passa a mandar na ordem e avisa na consola de cada
// ponto que não bata certo. Depois de conferido, pode voltar a vazio.
//   { C: [["Brasil", 7], ["Marrocos", 6], ...] }
const worldCupClassificacaoFM = {};

// O que vale cada lugar do pódio. Só estes três lugares pontuam.
const worldCupPremios = {
    campeao: { tipo: "Campeão do Mundo", pontos: 10 },
    vice: { tipo: "Vice-campeão do Mundo", pontos: 5 },
    terceiro: { tipo: "3.º lugar no Mundial", pontos: 2 }
};

// As rondas por ordem. `jogos` é quantos jogos tem a ronda inteira; `roundKey`
// é o que cada jogo declara em createLeagueMatch.
const worldCupRondas = [
    { key: "g1", label: "Fase de Grupos · Jornada 1", curto: "Jornada 1", competition: "Fase de Grupos", jogos: 24 },
    { key: "g2", label: "Fase de Grupos · Jornada 2", curto: "Jornada 2", competition: "Fase de Grupos", jogos: 24 },
    { key: "g3", label: "Fase de Grupos · Jornada 3", curto: "Jornada 3", competition: "Fase de Grupos", jogos: 24 },
    { key: "r32", label: "Dezasseis-avos de final", curto: "16 avos", competition: "Dezasseis-avos de final", jogos: 16 },
    { key: "r16", label: "Oitavos de final", curto: "Oitavos", competition: "Oitavos de final", jogos: 8 },
    { key: "qf", label: "Quartos de final", curto: "Quartos", competition: "Quartos de final", jogos: 4 },
    { key: "sf", label: "Meias-finais", curto: "Meias-finais", competition: "Meias-finais", jogos: 2 },
    { key: "3p", label: "Jogo do 3.º lugar", curto: "3.º lugar", competition: "Jogo do 3.º lugar", jogos: 1 },
    { key: "final", label: "Final", curto: "Final", competition: "Final", jogos: 1 }
];

// A árvore do quadro a eliminar, com a numeração oficial da FIFA (jogos 73 a
// 104). Cada lado é um código:
//   "1E"     1.º do Grupo E            "2A"   2.º do Grupo A
//   "3:ABCDF" um dos terceiros dos grupos A, B, C, D ou F (qual, só se sabe
//             depois da fase de grupos, pela tabela da FIFA)
//   "V74"    vencedor do jogo 74       "P101" derrotado do jogo 101
// Os jogos só entram em worldcup-fixtures.js quando se sabe quem joga, com
// `matchNumber` igual ao número daqui: é assim que o quadro os encontra.
const worldCupBracket = [
    { jogo: 73, ronda: "r32", lados: ["2A", "2B"] },
    { jogo: 74, ronda: "r32", lados: ["1E", "3:ABCDF"] },
    { jogo: 75, ronda: "r32", lados: ["1F", "2C"] },
    { jogo: 76, ronda: "r32", lados: ["1C", "2F"] },
    { jogo: 77, ronda: "r32", lados: ["1I", "3:CDFGH"] },
    { jogo: 78, ronda: "r32", lados: ["2E", "2I"] },
    { jogo: 79, ronda: "r32", lados: ["1A", "3:CEFHI"] },
    { jogo: 80, ronda: "r32", lados: ["1L", "3:EHIJK"] },
    { jogo: 81, ronda: "r32", lados: ["1D", "3:BEFIJ"] },
    { jogo: 82, ronda: "r32", lados: ["1G", "3:AEHIJ"] },
    { jogo: 83, ronda: "r32", lados: ["2K", "2L"] },
    { jogo: 84, ronda: "r32", lados: ["1H", "2J"] },
    { jogo: 85, ronda: "r32", lados: ["1B", "3:EFGIJ"] },
    { jogo: 86, ronda: "r32", lados: ["1J", "2H"] },
    { jogo: 87, ronda: "r32", lados: ["1K", "3:DEIJL"] },
    { jogo: 88, ronda: "r32", lados: ["2D", "2G"] },
    { jogo: 89, ronda: "r16", lados: ["V74", "V77"] },
    { jogo: 90, ronda: "r16", lados: ["V73", "V75"] },
    { jogo: 91, ronda: "r16", lados: ["V76", "V78"] },
    { jogo: 92, ronda: "r16", lados: ["V79", "V80"] },
    { jogo: 93, ronda: "r16", lados: ["V83", "V84"] },
    { jogo: 94, ronda: "r16", lados: ["V81", "V82"] },
    { jogo: 95, ronda: "r16", lados: ["V86", "V88"] },
    { jogo: 96, ronda: "r16", lados: ["V85", "V87"] },
    { jogo: 97, ronda: "qf", lados: ["V89", "V90"] },
    { jogo: 98, ronda: "qf", lados: ["V93", "V94"] },
    { jogo: 99, ronda: "qf", lados: ["V91", "V92"] },
    { jogo: 100, ronda: "qf", lados: ["V95", "V96"] },
    { jogo: 101, ronda: "sf", lados: ["V97", "V98"] },
    { jogo: 102, ronda: "sf", lados: ["V99", "V100"] },
    { jogo: 103, ronda: "3p", lados: ["P101", "P102"] },
    { jogo: 104, ronda: "final", lados: ["V101", "V102"] }
];

const worldCupFixtureMonths = ["Junho", "Julho"];

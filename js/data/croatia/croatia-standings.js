// A classificação da Liga Croata é calculada a partir dos resultados em
// croatia-fixtures.js — não se escreve nenhum destes números à mão.
// Corre depois de croatia-wiring.js porque precisa dos jogos e dos helpers de forma.

const croatiaEquipas = croatiaSeedTable.map((entry) => entry.equipa);

// Histórico jornada a jornada, usado para as setas ↑ ↓ — ver
// getStandingsMovement() em standings-core.js.
const croatiaHistory = buildStandingsHistory(croatiaFixtures, croatiaEquipas, {
    isLeagueMatch: isCroatiaLeagueMatch,
    regras: croatiaRegras,
    leagueName: "Liga Croata",
    snapshot: croatiaClassificacaoFM
});

const croatiaCurrentTable = applyStandingsSnapshot(
    sortStandings(
        buildStandingsFromFixtures(croatiaFixtures, croatiaEquipas, { isLeagueMatch: isCroatiaLeagueMatch }),
        croatiaFixtures,
        croatiaRegras,
        { isLeagueMatch: isCroatiaLeagueMatch, leagueName: "Liga Croata" }
    ),
    croatiaClassificacaoFM,
    "Liga Croata"
).map((row) => ({
    ...row,
    ...getCroatiaSeedEntry(row.equipa),
    inf: getStandingsMovement(croatiaHistory, row.equipa),
    zone: croatiaZonas[row.pos] || "",
    form: getTeamFormDetailsFromFixtures(croatiaFixtures, row.equipa).map((detail) => detail.result)
}));

// Projeção: a fórmula da época aplicada à posição de hoje. Enquanto a liga
// estiver em curso estes pontos mudam a cada jornada — não são o resultado final.
const croatiaSeasonScores = calcTableScores(croatiaCurrentTable);

// A classificação da Liga Croata é calculada a partir dos resultados em
// croatia-fixtures.js — não se escreve nenhum destes números à mão.
// Corre depois de croatia-wiring.js porque precisa dos jogos e dos helpers de forma.

const croatiaEquipas = croatiaSeedTable.map((entry) => entry.equipa);

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
    zone: croatiaZonas[row.pos] || "",
    form: getTeamFormDetailsFromFixtures(croatiaFixtures, row.equipa).map((detail) => detail.result)
}));

const croatiaSeasonScores = croatiaCurrentTable
    .filter((entry) => entry.jogador)
    .map((entry) => ({
        jogador: entry.jogador,
        equipa: entry.equipa,
        prevista: entry.prevista,
        final: entry.prevista,
        pontos: 0
    }));

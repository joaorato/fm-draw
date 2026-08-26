// A classificação da Liga Croata é calculada a partir dos resultados em
// croatia-fixtures.js — não se escreve nenhum destes números à mão.
// Corre depois de croatia-wiring.js porque precisa dos jogos e dos helpers de forma.

const croatiaEquipas = croatiaSeedTable.map((entry) => entry.equipa);

// As setas ↑ ↓: a posição de cada equipa hoje contra a que tinha antes do seu
// último jogo. Não é a jornada do calendário — o jogo em atraso faz equipas
// diferentes chegarem ao seu próprio último jogo em jornadas diferentes do
// calendário — por isso o corte segue os jogos de cada equipa, não o número de
// jornada.
const croatiaHistory = buildStandingsHistory(croatiaFixtures, croatiaEquipas, {
    isLeagueMatch: isCroatiaLeagueMatch,
    regras: croatiaRegras,
    leagueName: "Liga Croata",
    snapshot: croatiaClassificacaoFM
});

function getCroatiaInf(equipa) {
    let anterior = null;
    let atual = null;
    croatiaHistory.forEach((frame) => {
        let row = frame.rows.find((entry) => entry.equipa === equipa);
        if (!row) return;
        if (!atual || atual.j !== row.j) {
            anterior = atual;
            atual = row;
        }
    });
    if (!anterior || anterior.pos === atual.pos) return "--";
    return anterior.pos > atual.pos ? "↑" : "↓";
}

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
    inf: getCroatiaInf(row.equipa),
    zone: croatiaZonas[row.pos] || "",
    form: getTeamFormDetailsFromFixtures(croatiaFixtures, row.equipa).map((detail) => detail.result)
}));

// Projeção: a fórmula da época aplicada à posição de hoje. Enquanto a liga
// estiver em curso estes pontos mudam a cada jornada — não são o resultado final.
const croatiaSeasonScores = calcTableScores(croatiaCurrentTable);

// Pontuação EMG a partir de uma classificação. Como em standings-core.js, nada
// aqui é específico de uma liga: recebe uma tabela e devolve pontos.
//
// Numa liga concluída estes números são o resultado da época. Numa liga em curso
// são a mesma conta aplicada à posição de hoje — ou seja, uma projeção.

function calcSeasonPoints(prevista, final) {
    return (prevista - final) * 3;
}

function calcTableScores(tabela) {
    return tabela
        .filter((entry) => entry.jogador)
        .map((entry) => ({
            jogador: entry.jogador,
            equipa: entry.equipa,
            prevista: entry.prevista,
            final: entry.pos,
            pontos: calcSeasonPoints(entry.prevista, entry.pos)
        }));
}

function calcCupBonuses(tacas) {
    return (tacas || [])
        .filter((taca) => taca.jogador)
        .map((taca) => ({ jogador: taca.jogador, tipo: taca.tipo, pontos: taca.pontos }));
}

// Campeão e último não acumulam com melhor e pior humano: quem é campeão já
// levou os +10, quem é último já levou os -5.
function calcPositionBonuses(tabela) {
    let bonuses = [];
    let humanEntries = tabela.filter((entry) => entry.jogador);

    let campeao = tabela.find((entry) => entry.pos === 1);
    if (campeao && campeao.jogador) {
        bonuses.push({ jogador: campeao.jogador, tipo: "Campeão da liga", pontos: 10 });
    }

    let melhorHumano = humanEntries[0];
    if (melhorHumano && melhorHumano.pos !== 1) {
        bonuses.push({ jogador: melhorHumano.jogador, tipo: "Melhor humano na liga", pontos: 5 });
    }

    let ultimo = tabela[tabela.length - 1];
    if (ultimo && ultimo.jogador) {
        bonuses.push({ jogador: ultimo.jogador, tipo: "Último classificado na liga", pontos: -5 });
    }

    let piorHumano = humanEntries[humanEntries.length - 1];
    if (piorHumano && piorHumano.pos !== tabela.length) {
        bonuses.push({ jogador: piorHumano.jogador, tipo: "Pior humano na liga", pontos: -2 });
    }

    return bonuses;
}

// Dois nomes que parecem ser o mesmo jogador escrito de maneiras diferentes.
//
// O print do FM escreve o mesmo jogador de formas diferentes conforme o sítio:
// "Edmilson Jr." no campo e "Edmilson Junior" nos eventos, "Inao.C" e
// "C. Inao Oulaï", "Feras" e "F. Al-Brikan", "Urunov" e "O'runov". Nenhuma
// comparação exata apanha isto, e o resultado é um jogador contado como dois
// nos marcadores e nas assistências. O report_build.js e o report_lint.js usam
// esta função para o apontar.
//
// Só olha para palavras com 4 letras ou mais. Duas palavras estão relacionadas se
// são iguais, se uma é o início da outra ("Aramba..." e "Arambarri") ou se, com 6
// letras ou mais, diferem numa letra ("Urunov" e "O'runov"). Tem de haver par para
// todas as palavras do nome mais curto.
//
// Não prova que seja o mesmo jogador: dois jogadores da mesma seleção podem
// partilhar o apelido ("Lopes Cabral" e "Jovane Cabral"). Por isso só serve para
// AVISO, e quem o lê confere no ecrã (número, posição) antes de uniformizar.

const SUBSTITUICOES = { "ß": "ss", "ø": "o", "đ": "d", "ł": "l", "æ": "ae", "œ": "oe" };

function palavras(nome) {
    return String(nome || "")
        .normalize("NFD").replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .replace(/[ßøđłæœ]/g, (c) => SUBSTITUICOES[c])
        .replace(/['’`]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .split(" ")
        .filter((p) => p.length >= 4);
}

function diferemNumaLetra(a, b) {
    if (Math.abs(a.length - b.length) > 1) return false;
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1);
    let [curta, longa] = a.length < b.length ? [a, b] : [b, a];
    return curta.slice(i) === longa.slice(i + 1);
}

function palavrasRelacionadas(x, y) {
    return x === y
        || x.startsWith(y)
        || y.startsWith(x)
        || (x.length >= 6 && y.length >= 6 && diferemNumaLetra(x, y));
}

// Todas as palavras do nome mais curto têm de ter par no mais comprido. Partilhar só
// o nome próprio não chega: "João Félix" e "João Neves" são dois jogadores.
function parecemMesmoJogador(a, b) {
    let pa = palavras(a);
    let pb = palavras(b);
    let [curta, longa] = pa.length <= pb.length ? [pa, pb] : [pb, pa];
    if (!curta.length) return false;
    return curta.every((x) => longa.some((y) => palavrasRelacionadas(x, y)));
}

module.exports = { parecemMesmoJogador };

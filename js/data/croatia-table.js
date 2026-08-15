const croatiaSeedTable = [
    { equipa: "Dinamo Zagreb", logo: "assets/logos/teams/croacia/dinamo_zagreb_logo.png", jogador: null, prevista: 1 },
    { equipa: "Hajduk Split", logo: "assets/logos/teams/croacia/hajduksplit.png", jogador: null, prevista: 2 },
    { equipa: "HNK Rijeka", logo: "assets/logos/teams/croacia/rijeka.png", jogador: "Gonçalo", prevista: 3 },
    { equipa: "NK Osijek", logo: "assets/logos/teams/croacia/osijek.png", jogador: "Gamy", prevista: 4 },
    { equipa: "NK Lokomotiva", logo: "assets/logos/teams/croacia/nk_lokomotiva.png", jogador: "Painatal", prevista: 5 },
    { equipa: "NK Istra 1961", logo: "assets/logos/teams/croacia/istra.png", jogador: "Rato", prevista: 6 },
    { equipa: "NK Varaždin", logo: "assets/logos/teams/croacia/varazdin.png", jogador: "Nabais", prevista: 7 },
    { equipa: "NK Slaven Belupo", logo: "assets/logos/teams/croacia/slaven.png", jogador: "Chico", prevista: 8 },
    { equipa: "HNK Gorica", logo: "assets/logos/teams/croacia/gorica.png", jogador: "Cardoso", prevista: 9 },
    { equipa: "HNK Vukovar", logo: "assets/logos/teams/croacia/hnkvukovar.png", jogador: "Hugo", prevista: 10 }
];

function getCroatiaSeedEntry(teamName) {
    return croatiaSeedTable.find((entry) => entry.equipa === teamName) || null;
}

const croatiaCurrentTable = [
    { pos: 1, inf: "--", equipa: "HNK Rijeka", j: 28, v: 18, e: 6, d: 4, gm: 68, gs: 35, dg: 33, pts: 60, form: ["V", "E", "E", "V", "D"], zone: "championship" },
    { pos: 2, inf: "--", equipa: "Dinamo Zagreb", j: 27, v: 17, e: 6, d: 4, gm: 53, gs: 27, dg: 26, pts: 57, form: ["V", "D", "V", "V", "V"], zone: "europe" },
    { pos: 3, inf: "--", equipa: "NK Osijek", j: 28, v: 13, e: 5, d: 10, gm: 51, gs: 41, dg: 10, pts: 44, form: ["V", "E", "V", "V", "E"], zone: "europe" },
    { pos: 4, inf: "--", equipa: "NK Varaždin", j: 27, v: 13, e: 4, d: 10, gm: 58, gs: 49, dg: 9, pts: 43, form: ["D", "E", "V", "D", "V"] },
    { pos: 5, inf: "--", equipa: "HNK Gorica", j: 27, v: 10, e: 10, d: 7, gm: 36, gs: 31, dg: 5, pts: 40, form: ["E", "V", "E", "E", "E"] },
    { pos: 6, inf: "--", equipa: "HNK Vukovar", j: 28, v: 11, e: 5, d: 12, gm: 43, gs: 44, dg: -1, pts: 38, form: ["V", "E", "D", "D", "D"] },
    { pos: 7, inf: "--", equipa: "NK Istra 1961", j: 28, v: 9, e: 9, d: 10, gm: 38, gs: 42, dg: -4, pts: 36, form: ["E", "V", "V", "E", "V"] },
    { pos: 8, inf: "↑", equipa: "Hajduk Split", j: 28, v: 4, e: 11, d: 13, gm: 29, gs: 41, dg: -12, pts: 23, form: ["D", "E", "D", "V", "E"] },
    { pos: 9, inf: "↓", equipa: "NK Lokomotiva", j: 27, v: 5, e: 7, d: 15, gm: 37, gs: 66, dg: -29, pts: 22, form: ["D", "D", "D", "D", "D"] },
    { pos: 10, inf: "--", equipa: "NK Slaven Belupo", j: 28, v: 2, e: 9, d: 17, gm: 29, gs: 66, dg: -37, pts: 15, form: ["D", "D", "D", "D", "E"], zone: "relegated" }
].map((row) => ({ ...row, ...getCroatiaSeedEntry(row.equipa) }));

const croatiaSeasonScores = croatiaCurrentTable
    .filter((entry) => entry.jogador)
    .map((entry) => ({
        jogador: entry.jogador,
        equipa: entry.equipa,
        prevista: entry.prevista,
        final: entry.prevista,
        pontos: 0
    }));

const croatiaFixtureMonths = ["Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio"];


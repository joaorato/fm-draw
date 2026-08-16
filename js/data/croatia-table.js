// Dados editoriais da Liga Croata. A classificação em si não se escreve aqui:
// é calculada a partir de croatiaFixtures em croatia-standings.js.
// O campo "inf" (as setas ↑ ↓) é uma nota nossa, não sai de conta nenhuma.
const croatiaSeedTable = [
    { equipa: "Dinamo Zagreb", logo: "assets/logos/teams/croacia/dinamo_zagreb_logo.png", jogador: null, prevista: 1, inf: "--" },
    { equipa: "Hajduk Split", logo: "assets/logos/teams/croacia/hajduksplit.png", jogador: null, prevista: 2, inf: "↑" },
    { equipa: "HNK Rijeka", logo: "assets/logos/teams/croacia/rijeka.png", jogador: "Gonçalo", prevista: 3, inf: "--" },
    { equipa: "NK Osijek", logo: "assets/logos/teams/croacia/osijek.png", jogador: "Gamy", prevista: 4, inf: "--" },
    { equipa: "NK Lokomotiva", logo: "assets/logos/teams/croacia/nk_lokomotiva.png", jogador: "Painatal", prevista: 5, inf: "↓" },
    { equipa: "NK Istra 1961", logo: "assets/logos/teams/croacia/istra.png", jogador: "Rato", prevista: 6, inf: "--" },
    { equipa: "NK Varaždin", logo: "assets/logos/teams/croacia/varazdin.png", jogador: "Nabais", prevista: 7, inf: "--" },
    { equipa: "NK Slaven Belupo", logo: "assets/logos/teams/croacia/slaven.png", jogador: "Chico", prevista: 8, inf: "--" },
    { equipa: "HNK Gorica", logo: "assets/logos/teams/croacia/gorica.png", jogador: "Cardoso", prevista: 9, inf: "--" },
    { equipa: "HNK Vukovar", logo: "assets/logos/teams/croacia/hnkvukovar.png", jogador: "Hugo", prevista: 10, inf: "--" }
];

// Zonas por posição — assim acompanham quem lá está, em vez de ficarem
// coladas a uma equipa e desactualizarem-se à primeira subida ou descida.
const croatiaZonas = {
    1: "championship",
    2: "europe",
    3: "europe",
    10: "relegated"
};

// Regras de desempate da SuperSport HNL: diferença de golos durante a época,
// confronto directo depois de disputada a última jornada.
// Outra liga = outra cadeia, sem mexer em standings-core.js.
const croatiaRegras = {
    desempate: ["dg", "gm", "equipa"],
    desempateFinal: ["h2hPts", "h2hDg", "dg", "gm", "equipa"]
};

// Conferência opcional contra o FM: vazio = a tabela sai inteira dos resultados.
// Se alguma vez a classificação do site não bater certo com a do jogo — tipicamente
// um empate em que o FM desempata de outra maneira — cola aqui a tabela do FM pela
// ordem em que lá aparece, ["Equipa", pontos]. Passa a mandar na ordem e avisa na
// consola em cada ponto que não bata certo. Depois de conferido, pode voltar a vazio.
const croatiaClassificacaoFM = [];

function getCroatiaSeedEntry(teamName) {
    return croatiaSeedTable.find((entry) => entry.equipa === teamName) || null;
}

const croatiaFixtureMonths = ["Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio"];


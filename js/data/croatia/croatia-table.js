// Dados editoriais da Liga Croata. A classificação em si não se escreve aqui:
// é calculada a partir de croatiaFixtures em croatia-standings.js. O mesmo vale
// para o campo "inf" (as setas ↑ ↓): é derivado ali, do último jogo de cada
// equipa, e não se escreve à mão nesta tabela.
// "cor" é a cor do clube, usada no gráfico de evolução. É do clube e não do
// treinador de propósito: toda a gente sabe que o Istra é amarelo, ninguém sabe
// de cor que o Rato é laranja. A liga seguinte traz as cores das equipas dela.
// As escuras (o preto da Lokomotiva, o azul do Dinamo) quase não se distinguem
// do fundo do site — quem trata disso é o halo desenhado por baixo das linhas
// em js/ui/league-race.js, e não uma cor mais clara aqui.
const croatiaSeedTable = [
    { equipa: "Dinamo Zagreb", logo: "assets/logos/teams/croacia/dinamo_zagreb_logo.webp", jogador: null, prevista: 1, cor: "#16337f" },
    { equipa: "Hajduk Split", logo: "assets/logos/teams/croacia/hajduksplit.webp", jogador: null, prevista: 2, cor: "#e02b1d" },
    { equipa: "HNK Rijeka", logo: "assets/logos/teams/croacia/rijeka.webp", jogador: "Gonçalo", prevista: 3, cor: "#ffffff" },
    { equipa: "NK Osijek", logo: "assets/logos/teams/croacia/osijek.webp", jogador: "Gamy", prevista: 4, cor: "#7ec8ea" },
    { equipa: "NK Lokomotiva", logo: "assets/logos/teams/croacia/nk_lokomotiva.webp", jogador: "Painatal", prevista: 5, cor: "#171a22" },
    { equipa: "NK Istra 1961", logo: "assets/logos/teams/croacia/istra.webp", jogador: "Rato", prevista: 6, cor: "#f7cf1a" },
    { equipa: "NK Varaždin", logo: "assets/logos/teams/croacia/varazdin.webp", jogador: "Nabais", prevista: 7, cor: "#d6ecfb" },
    { equipa: "NK Slaven Belupo", logo: "assets/logos/teams/croacia/slaven.webp", jogador: "Chico", prevista: 8, cor: "#2b6fd6" },
    { equipa: "HNK Gorica", logo: "assets/logos/teams/croacia/gorica.webp", jogador: "Cardoso", prevista: 9, cor: "#8e1c2a" },
    { equipa: "HNK Vukovar", logo: "assets/logos/teams/croacia/hnkvukovar.webp", jogador: "Hugo", prevista: 10, cor: "#f4979b" }
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


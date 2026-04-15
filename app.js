const jogadores = [
    "Gonçalo", "Rato", "Chico", "Nabais",
    "Gamy", "Painatal", "Cardoso", "Hugo"
];

const coachProfiles = [
    {
        id: "goncalo",
        nome: "Gonçalo",
        nomePerfil: "Zép Jóbes",
        cargo: "O predador de taças",
        
        descricao: "Sou José Empregos. No futebol, chamam-me Zép Jóbes — e não é por estética, é por impacto. Enquanto muitos seguem ideias, eu crio-as.\n\nComecei onde poucos olham: nos parques. Abordava crianças aleatórias, pois via potencial. Muitos achavam estranho eu falar com crianças que não conhecia de lado nenhum, mas foi para mim o inicio de uma vocação.\n\nNo Real de Massamá, ultrapassei a formação cedo demais. Fiquei porque quis. Porque nem todos estão prontos para subir comigo. Ainda hoje observo jovens — não necessariamente para identificar talento, mas porque gosto de os ver correr. \n\nEstagiei com Guardiola. Ele viu em mim aquilo que o resto demorou a perceber: inevitabilidade e o verdadeiro futuro do futebol internacional. O Aberdeen apostou em mim e eu respondi com troféus. Duas taças. Mata-mata? Não é pressão, é rotina. Por isso me chamam “O Predador de Taças”.\n\nAgora falam da Croácia como um passo atrás. Engraçado. Dizem sempre isso antes de eu chegar… e depois chamam-lhe revolução.\n\nEu não sigo o jogo.\nO jogo adapta-se a mim.\n\nNão sou um treinador.\nSou o padrão que os outros tentam alcançar. \n\nEu sou Zép Jóbes.",
        destaque: "\"O que gosto mais do que ganhar taças? Abordar crianças em parques públicos.\"",
        assetFolder: "Gonçalo"
    },
    {
        id: "rato",
        nome: "Rato",
        nomePerfil: "João Pedro Rato",
        cargo: "O penetrador (de defesas)",

        descricao: "As origens de João Pedro Rato são tudo menos convencionais. Muito antes dos relvados e das conferências de imprensa, passou uma fase curiosa da sua vida no Mónaco, onde trabalhou como arrumador de carros de luxo no icónico Hotel Monte Carlo. Foi aí que, num momento aparentemente banal, estacionou o G-Wagon de Leonardo Jardim. Entre uma chave entregue e uma troca de palavras, nasceu uma conversa improvável que mudaria tudo. Jardim recomendou-lhe vivamente o seu curso de Udemy entitulado “1-2 bem trabalhado”. Rato comprou. Estudou. Obsessivamente. E foi aí que começou a sua nova paixão.\n\nMas a teoria rapidamente deu lugar à prática — e de forma pouco ortodoxa. Durante os seus caóticos meses de Erasmus em Helsínquia, João Pedro Rato entrou diretamente no mundo do futebol sénior ao assumir funções no AC Balls. Ninguém sabe bem como: há quem diga que foi por falta de treinador, outros juram que foi apenas por ser Português, e Portugueses lá são exóticos e percebem do futebol. A verdade é que funcionou. O AC Balls começou a jogar futebol… e que futebol.\n\nA sua entrada no futebol britânico prende-se por um nome algo inusitado: Topi Keskinen, um extremo finlandês. Conheceram-se numa sauna completamente nus e suados, após um jogo do Balls a que Topi tinha assistido. A conversa fluiu, e não só. E assim, Rato, com cunha de Topi, consegue uma entrevista com o Aberdeen FC, clube do velocista louro, esbelto e muito bem equipado.\n\nNo entanto, qual Eusébio chegado de Lourenço Marques, é prontamente desviado no aeroporto por uma limosine forrada a verde garrafa. O Hibernian tinha sabido da sua chegada e não podia deixar fugir este talento para um rival.\n\n A história da temporada fala por si: golos e mais golos, domínio sobre os rivais da cidade e um lugar na tão esperada Champions League para os Hibs.\n\n No entanto, farto da chuva e do frio, Rato decidiu que era hora de um novo desafio. A Croácia, com o seu clima mais ameno permitirá que dispa a sua gabardine e mostre o quão entusiasmante o seu futebol pode ser.",
        destaque: "\"O meu futebol é como a sauna: muito suor e muita (mas mesmo muita) diversão.\"",
        assetFolder: "Rato"
    },
    {
        id: "chico",
        nome: "Chico",
        nomePerfil: "Francisco Pinto",
        cargo: "O TRATOR TÁTICO",
        tag: "Menos barulho, mais controlo. Vai somando pontos enquanto os outros ainda estão a discutir scouting.",
        descricao: "Tenho um grande apetite por futebol… e por títulos.\n\nAcredito num futebol energético e livre, mas exijo disciplina e rigor dos meus jogadores. Em troca, dou-lhes espaço para que a criatividade floresça e para que possam atingir o seu verdadeiro potencial.\n\nSou pragmático e ambicioso. Encaro todos os desafios sem medo — e isso reflete-se na atitude da minha equipa em campo. Independentemente do adversário ou das circunstâncias, acredito sempre que há uma forma de vencer.\n\nNão me prendo a uma única formação. A minha tática é aquela que melhor potencia os jogadores que tenho. Pode ser um 4-3-3, um 5-2-1-2 ou um 4-4-2 — o importante é adaptar-me para tirar o máximo rendimento da equipa.\n\nAs minhas ideias são influenciadas por treinadores como Klopp, Jorge Jesus e Bielsa, mas a minha filosofia é simples: os jogadores cometem erros, e cabe-nos provocá-los. Para isso, procuro uma pressão alta e intensa.\n\nCom bola, dou liberdade. Quero que os meus jogadores joguem de acordo com os seus pontos fortes, que os criativos criem e que os avançados sigam o seu instinto. Não gosto de limitar decisões — acredito que o futebol também se faz de liberdade dentro de uma estrutura.",
        destaque: "\"Se comprometerem-se comigo, o vosso legado será imortalizado na história do futebol.\"",
        assetFolder: "Chico"
    },
    {
        id: "nabais",
        nome: "Nabais",
        nomePerfil: "João Nabais",
        cargo: "Prodígio milagreiro",
        descricao: "Vim de uma aldeia tão pequena que até as ovelhas ficavam aborrecidas. Em criança, treinava a correr atrás de galinhas e a discutir com uma baliza que estava sempre torta. De alguma forma, à base de teimosia, táticas duvidosas e litros absurdos de chá, acabei na Escócia como treinador de alto nível. Ainda hoje ninguém percebe muito bem como.\n\nE aqui estou eu, a gritar instruções à chuva como se tivesse nascido para isto — a prova de que se pode sair do nada e chegar a algum lado… mesmo sem fazer grande ideia do que se está a fazer.",
        destaque: "\"Um pastor não escolhe o rebanho… mas escolhe até onde ele pode chegar.\"",
        assetFolder: "Nabais"
    },
    {
        id: "gamy",
        nome: "Gamy",
        nomePerfil: "Gamy Chambelito",
        cargo: "O REI DO MERCADO",
        tag: "Traz confiança, trash talk e vontade real de transformar qualquer sorteio numa storyline.",
        descricao: "Sou o Gamy Chambelito, nascido no Entroncamento, onde dei os primeiros passos no futebol — ainda longe dos holofotes, mas já com uma personalidade impossível de ignorar.\n\nDepois de me destacar a nível local, dei o salto para Leiria, onde comecei a chamar a atenção pela minha leitura de jogo e, sobretudo, pela forma como ajusto equipas durante as partidas. Mas nunca fui de ficar confortável: a ambição levou-me mais longe e emigrei para a Bélgica, onde assumi os sub-23 do Royal Saint-Gilloise.\n\nFoi aí que comecei realmente a construir o meu nome. Entre resultados consistentes e um estilo comunicativo provocador, conquistei jogadores e dirigentes — muito também pela minha capacidade negocial, assumindo um papel ativo nas transferências.\n\nEsse impacto abriu-me as portas do Dundee United. Entrei forte, com uma identidade clara: intensidade, ajustes táticos constantes e muito “trash talk” para mexer com qualquer adversário.\n\nMas nem tudo foi perfeito. Uma fase pessoal complicada afetou a minha ética de trabalho, refletindo-se nos resultados e acabando por levar à minha saída após uma época abaixo do esperado.\n\nAgora, procuro redenção na Liga Croata. Quero relançar a minha carreira e provar que o meu talento nunca desapareceu. Ainda não se sabe que clube vou liderar — mas uma coisa é certa: onde eu chegar, vou deixar marca.\n\nCarismático, provocador e mestre nas negociações — dentro ou fora de campo, nunca passo despercebido.",
        destaque: "\"Se não ganhamos no campo, ganhamos na negociação.\"",
        assetFolder: "Gamy"
    },
    {
        id: "painatal",
        nome: "Painatal",
        nomePerfil: "Pai Natal",
        cargo: "O Desertor de serviço",
        descricao: "Houve uma altura em que me chamavam de tudo… menos vencedor. Sou o Pai Natal, treinador guineense conhecido não pelas vitórias, mas pela minha criatividade no fracasso.\n\nA minha carreira começou depois de perder uma aposta. Disse que conseguia treinar melhor do que qualquer um — alguém respondeu: “Duvido.” No dia seguinte, já estava de apito ao pescoço… e sem plano nenhum.\n\nNos primeiros jogos, a minha equipa inovava: ninguém sabia bem em que posição jogava. O guarda-redes aparecia no ataque, o avançado defendia cantos… e eu chamava a isso “futebol imprevisível”. Perdíamos sempre, mas confundíamos tanto o adversário que, às vezes, até tinham pena de nós.\n\nMesmo assim, nunca desanimei. Dava palestras motivacionais do género:\n“Hoje podemos perder… mas vamos perder com estilo!”\n\nE, contra todas as probabilidades, comecei a subir na carreira. Porquê? Porque os clubes achavam que ninguém podia ser tão mau — devia ser estratégia avançada.\n\nUm dia, ganhei um jogo… porque o outro treinador faltou. Fui promovido.\n\nHoje, sou um nome conhecido nas ruas da Croácia — não porque me queiram, mas porque ninguém quer ficar comigo. Dizem que sou um fenómeno: o único treinador que nunca acabou uma época.\n\nE quando me perguntam qual é o segredo do sucesso, respondo sempre:\n“Persistência… e um bocado de sorte… principalmente a sorte. E contratar africanos, também.”",
        destaque: "\"Vencer é opcional, perder é mandatório.\"",
        assetFolder: "Painatal"
    },
    {
        id: "cardoso",
        nome: "Cardoso",
        nomePerfil: "Miguel Cardoso",
        cargo: "Atacante agressivo",
        
        descricao: "Desde pequeno, no Cacém, o futebol nunca foi só um jogo. Era refúgio, rotina, identidade. Cresci a jogar em pelados, bolas gastas e sonhos grandes demais para o tamanho da cidade. Como muitos miúdos, quis ser jogador. E fui, durante anos lutei, treinei, sacrifiquei. Mas no fundo, havia sempre outra voz. Eu não queria só jogar, queria perceber o jogo.\n\nQuando a carreira de jogador começou a perder força, não foi o fim. Foi o início. Tirei cursos, estudei tática, analisei jogos até altas horas. Enquanto outros viam futebol, eu desmontava-o.\n\nA oportunidade surgiu longe de casa, no Heart of Midlothian. O primeiro grande salto, a primeira prova real. Mas o futebol não perdoa romantismos. A época foi um desastre. Resultados maus, balneário instável, decisões que hoje sei que tomaria de forma diferente. Foi duro. Muito duro. Houve dúvidas, houve críticas, houve noites em que pensei desistir.\n\nAgora surge um novo capítulo na Croácia. Não é um passo atrás, é um recomeço consciente. Um sítio onde posso reconstruir, aplicar tudo o que aprendi, errar menos e crescer mais.\n\nPorque o sonho nunca foi só jogar futebol.",
        destaque: "\" Defender? O que é isso?\"",
        assetFolder: "Cardoso"
    },
    {
        id: "hugo",
        nome: "Hugo",
        nomePerfil: "Hugo Macedo",
        cargo: "O Batoteiro de Competição",
        
        descricao: "Não nasci treinador… acho que virei por acidente.\n\nLembro-me perfeitamente: estava numa aula de educação física, mais preocupado em não me cansar muito, quando olho para um grupo de miúdos a jogar. E não era um jogo qualquer — aquilo parecia futebol a sério, com passes, entreajuda, espírito de equipa… quase digno de FC Barcelona. Foi aí que pensei: “Espera… isto até é bonito.”\n\nO mais irónico? Na altura, eu era campeão em França… mas em voleibol. Saltava mais do que corria, e sinceramente dava menos trabalho. Mas a verdade é que o futebol sempre esteve ali, a puxar por mim.\n\nSou benfiquista daqueles a sério, dos que sofrem mais do que celebram. O sonho? Um dia treinar o SL Benfica… mesmo sabendo que isso vem com um pacote completo de pressão, nervos e anos de vida perdidos.\n\nDecidi complicar a minha vida e mudei-me para o futebol. Passei pelo Falkirk FC, na Escócia, onde fiz uma excelente época — e onde, entre nós, ainda estou a tentar perceber metade do que dizem.\n\nHoje sou treinador de futebol. Não sei se foi a decisão mais fácil… mas de certeza foi a mais divertida.",
        destaque: "\" O meu streamer é melhor que o teu.\"",
        assetFolder: "Hugo"
    }
];

const coachAssetFiles = {
    "Gonçalo": [
        "gonçalo_card.png",
        "gonçalo_profile.png",
        "gonçalo_profile2.png",
        "gonçalo_profile3.png",
        "gonçalo_profile4.png",
        "teste_gonçalo.png",
        "teste_gonçalo2.png",
        "teste_gonçalo3.png",
        "stats_treinador_gonçalo.png"
    ],
    "Rato": [
        "Rato_card.png",
        "rato_profile.png",
        "rato_profile2.png",
        "rato_profile4.png",
        "stats_treinador_rato.png"
    ],
    "Chico": [
        "Chico_card.png",
        "Chico_profile.png",
        "chico_profile2.png",
        "chico_profile3.png",
        "ChicoOficial2.png",
        "stats_treinador_chico.png"
    ],
    "Nabais": [
        "nabais_card.png",
        "Nabais_profile_png.png",
        "nabais_profile1.png",
        "Nabais_profile2.png",
        "stats_treinador_nabais.png"
    ],
    "Gamy": [
        "Game_card.png",
        "gamy_profile.png",
        "gamy_profile2.png",
        "GamyOficial2.png",
        "stats_treinador_gamy.png"
    ],
    "Painatal": [
        "Painatal_card.png",
        "painatal_profile.png",
        "painatal_profile1.png",
        "painatal_profile2.png",
        "painatal_profile3.png",
        "stats_treinador_painatal.png"
    ],
    "Cardoso": [
        "Cardoso_card.png",
        "Cardoso_profile.png",
        "Cardoso2_profile.png",
        "stats_treinador_cardoso.png"
    ],
    "Hugo": [
        "hugo_card.png",
        "Hugo_profile.png",
        "Hugo_profile2.png",
        "hugo_profile3.png",
        "stats_treinador_hugo.png"
    ]
};

const coachStats = {
    "goncalo": {
        "Jogos Disputados": 61,
        "Jogos Vencidos": 37,
        "Jogos Empatados": 11,
        "Jogos Perdidos": 13,
        "Golos Marcados": 127,
        "Golos Sofridos": 77,
        "Diferença de Golos": 50,
        "% de Vitórias": "60%",
        "Taças": 2,
        "Vit. na Liga": 0,
        "Promoções": 0,
        "Despromoções": 0
    },
    "rato": {
        "Jogos Disputados": 61,
        "Jogos Vencidos": 36,
        "Jogos Empatados": 7,
        "Jogos Perdidos": 18,
        "Golos Marcados": 143,
        "Golos Sofridos": 94,
        "Diferença de Golos": 49,
        "% de Vitórias": "59%",
        "Taças": 0,
        "Vit. na Liga": 0,
        "Promoções": 0,
        "Despromoções": 0
    },
    "chico": {
        "Jogos Disputados": 42,
        "Jogos Vencidos": 18,
        "Jogos Empatados": 7,
        "Jogos Perdidos": 17,
        "Golos Marcados": 57,
        "Golos Sofridos": 63,
        "Diferença de Golos": -6,
        "% de Vitórias": "42%",
        "Taças": 0,
        "Vit. na Liga": 0,
        "Promoções": 0,
        "Despromoções": 0
    },
    "nabais": {
        "Jogos Disputados": 44,
        "Jogos Vencidos": 21,
        "Jogos Empatados": 9,
        "Jogos Perdidos": 14,
        "Golos Marcados": 81,
        "Golos Sofridos": 66,
        "Diferença de Golos": 15,
        "% de Vitórias": "47%",
        "Taças": 0,
        "Vit. na Liga": 0,
        "Promoções": 0,
        "Despromoções": 0
    },
    "gamy": {
        "Jogos Disputados": 28,
        "Jogos Vencidos": 12,
        "Jogos Empatados": 5,
        "Jogos Perdidos": 11,
        "Golos Marcados": 54,
        "Golos Sofridos": 61,
        "Diferença de Golos": -7,
        "% de Vitórias": "42%",
        "Taças": 0,
        "Vit. na Liga": 0,
        "Promoções": 0,
        "Despromoções": 0
    },
    "painatal": {
        "Jogos Disputados": 22,
        "Jogos Vencidos": 9,
        "Jogos Empatados": 4,
        "Jogos Perdidos": 9,
        "Golos Marcados": 33,
        "Golos Sofridos": 47,
        "Diferença de Golos": -14,
        "% de Vitórias": "40%",
        "Taças": 0,
        "Vit. na Liga": 0,
        "Promoções": 0,
        "Despromoções": 1
    },
    "cardoso": {
        "Jogos Disputados": 38,
        "Jogos Vencidos": 17,
        "Jogos Empatados": 7,
        "Jogos Perdidos": 14,
        "Golos Marcados": 86,
        "Golos Sofridos": 70,
        "Diferença de Golos": 16,
        "% de Vitórias": "44%",
        "Taças": 0,
        "Vit. na Liga": 0,
        "Promoções": 0,
        "Despromoções": 0
    },
    "hugo": {
        "Jogos Disputados": 36,
        "Jogos Vencidos": 15,
        "Jogos Empatados": 8,
        "Jogos Perdidos": 13,
        "Golos Marcados": 59,
        "Golos Sofridos": 51,
        "Diferença de Golos": 8,
        "% de Vitórias": "41%",
        "Taças": 0,
        "Vit. na Liga": 0,
        "Promoções": 0,
        "Despromoções": 0
    }
};

const equipas = [
    { nome: "HNK Rijeka", img: "assets/logos/croacia/Rijeka.png", rank: 3 },
    { nome: "NK Osijek", img: "assets/logos/croacia/Osijek.png", rank: 4 },
    { nome: "NK Lokomotiva", img: "assets/logos/croacia/NK_Lokomotiva.png", rank: 5 },
    { nome: "NK Slaven Belupo", img: "assets/logos/croacia/SLAVEN.png", rank: 8 },
    { nome: "NK Istra 1961", img: "assets/logos/croacia/ISTRA.png", rank: 6 },
    { nome: "HNK Gorica", img: "assets/logos/croacia/GORICA.png", rank: 9 },
    { nome: "HNK Vukovar", img: "assets/logos/croacia/HNKVUKOVAR.png", rank: 10 },
    { nome: "NK Varaždin", img: "assets/logos/croacia/Varazdin.png", rank: 7 }
];

const scotlandSeasonScores = [
    { jogador: "Nabais", equipa: "Dundee", prevista: 10, final: 4 },
    { jogador: "Gonçalo", equipa: "Aberdeen", prevista: 6, final: 3 },
    { jogador: "Hugo", equipa: "Falkirk", prevista: 11, final: 8 },
    { jogador: "Rato", equipa: "Hibernian", prevista: 4, final: 2 },
    { jogador: "Chico", equipa: "Kilmarnock", prevista: 9, final: 9 },
    { jogador: "Painatal", equipa: "Livingston", prevista: 12, final: 12 },
    { jogador: "Gamy", equipa: "Dundee Utd", prevista: 7, final: 10 },
    { jogador: "Cardoso", equipa: "Hearts", prevista: 3, final: 7 }
].map((entry) => ({
    ...entry,
    pontos: (entry.prevista - entry.final) * 3
})).sort((a, b) => b.pontos - a.pontos || a.final - b.final);

const leagues = [
    {
        id: "scotland",
        nome: "Liga Escocesa",
        descricao: "Classificação final completa da Premiership, com dados da liga, jogador EMG associado e pontos pela fórmula da época.",
        logo: "assets/logos/escocia/SPFL_logo,_William_Hill.png",
        logoAlt: "William Hill Premiership",
        epoca: "Época 25/26",
        formula: "(prevista - final) × 3",
        scores: scotlandSeasonScores,
        tacas: [
            { tipo: "Vencedor da Taça da Liga", jogador: "Gonçalo", pontos: 5 },
            { tipo: "Finalista da Taça da Liga", jogador: null, pontos: 2 },
            { tipo: "Vencedor da Taça", jogador: "Gonçalo", pontos: 5 },
            { tipo: "Finalista da Taça", jogador: null, pontos: 2 },
            { tipo: "Vencedor de competição europeia", jogador: null, pontos: 3 }
        ],
        tabela: [
            { pos: 1, inf: "C", equipa: "Rangers", logo: "assets/logos/escocia/Rangers_FC_logo.svg.png", jogador: null, j: 38, v: 22, e: 10, d: 6, gm: 84, gs: 41, dg: 43, pts: 76, prevista: 2, zone: "championship" },
            { pos: 2, inf: "--", equipa: "Hibernian", logo: "assets/logos/escocia/Hibernian_FC_logo.svg.png", jogador: "Rato", j: 38, v: 23, e: 4, d: 11, gm: 85, gs: 57, dg: 28, pts: 73, prevista: 4, zone: "championship" },
            { pos: 3, inf: "--", equipa: "Aberdeen", logo: "assets/logos/escocia/Aberdeen_F.C._logo_2014.svg.png", jogador: "Gonçalo", j: 38, v: 21, e: 9, d: 8, gm: 74, gs: 45, dg: 29, pts: 72, prevista: 6, zone: "europe" },
            { pos: 4, inf: "--", equipa: "Dundee", logo: "assets/logos/escocia/Dundee_FC_crest.svg.png", jogador: "Nabais", j: 38, v: 17, e: 9, d: 12, gm: 61, gs: 55, dg: 6, pts: 60, prevista: 10, zone: "europe" },
            { pos: 5, inf: "--", equipa: "Celtic", logo: "assets/logos/escocia/Celtic_FC_logo.png", jogador: null, j: 38, v: 17, e: 8, d: 13, gm: 70, gs: 47, dg: 23, pts: 59, prevista: 1, zone: "" },
            { pos: 6, inf: "--", equipa: "St. Mirren", logo: "assets/logos/escocia/St_Mirren_FC_crest.svg.png", jogador: null, j: 38, v: 15, e: 10, d: 13, gm: 52, gs: 53, dg: -1, pts: 55, prevista: 8, zone: "" },
            { pos: 7, inf: "--", equipa: "Hearts", logo: "assets/logos/escocia/Heart_of_Midlothian_FC_logo.png", jogador: "Cardoso", j: 38, v: 16, e: 7, d: 15, gm: 76, gs: 74, dg: 2, pts: 55, prevista: 3, zone: "" },
            { pos: 8, inf: "--", equipa: "Falkirk", logo: "assets/logos/escocia/Falkirk_FC_logo.png", jogador: "Hugo", j: 38, v: 14, e: 11, d: 13, gm: 65, gs: 62, dg: 3, pts: 53, prevista: 11, zone: "" },
            { pos: 9, inf: "--", equipa: "Kilmarnock", logo: "assets/logos/escocia/KilmarnockLogo.png", jogador: "Chico", j: 38, v: 14, e: 7, d: 17, gm: 51, gs: 64, dg: -13, pts: 49, prevista: 9, zone: "" },
            { pos: 10, inf: "--", equipa: "Dundee Utd", logo: "assets/logos/escocia/Dundee_United_FC_logo.png", jogador: "Gamy", j: 38, v: 14, e: 6, d: 18, gm: 60, gs: 71, dg: -11, pts: 48, prevista: 7, zone: "" },
            { pos: 11, inf: "PI", equipa: "Motherwell", logo: "assets/logos/escocia/Motherwell_FC_crest.svg.png", jogador: null, j: 38, v: 4, e: 8, d: 26, gm: 30, gs: 80, dg: -50, pts: 20, prevista: 5, zone: "playoff" },
            { pos: 12, inf: "D", equipa: "Livingston", logo: "assets/logos/escocia/Livingston_FC_club_badge_new.png", jogador: "Painatal", j: 38, v: 4, e: 5, d: 29, gm: 41, gs: 101, dg: -60, pts: 17, prevista: 12, zone: "relegated" }
        ].map((entry) => {
            let emgEntry = scotlandSeasonScores.find((score) => score.equipa === entry.equipa);
            return { ...entry, emgPontos: emgEntry ? emgEntry.pontos : null };
        })
    }
];

function calcBonuses(league) {
    let bonuses = [];
    let tabela = league.tabela;

    // Cup and European bonuses (hardcoded per league)
    league.tacas.forEach((taca) => {
        if (taca.jogador) {
            bonuses.push({ jogador: taca.jogador, tipo: taca.tipo, pontos: taca.pontos });
        }
    });

    // Champion: human team in 1st place
    let campeao = tabela.find((e) => e.pos === 1);
    if (campeao && campeao.jogador) {
        bonuses.push({ jogador: campeao.jogador, tipo: "Campeão da liga", pontos: 10 });
    }

    // Best human (only if not champion)
    let humanEntries = tabela.filter((e) => e.jogador);
    let melhorHumano = humanEntries[0];
    if (melhorHumano && melhorHumano.pos !== 1) {
        bonuses.push({ jogador: melhorHumano.jogador, tipo: "Melhor humano na liga", pontos: 5 });
    }

    // Last place: human team in last position
    let ultimo = tabela[tabela.length - 1];
    if (ultimo && ultimo.jogador) {
        bonuses.push({ jogador: ultimo.jogador, tipo: "Último classificado na liga", pontos: -5 });
    }

    // Worst human (only if not last place)
    let piorHumano = humanEntries[humanEntries.length - 1];
    if (piorHumano && piorHumano.pos !== tabela.length) {
        bonuses.push({ jogador: piorHumano.jogador, tipo: "Pior humano na liga", pontos: -2 });
    }

    return bonuses;
}

const generalScores = leagues
    .flatMap((league) => [...league.scores, ...calcBonuses(league)])
    .reduce((acc, entry) => {
        let existing = acc.find((e) => e.jogador === entry.jogador);
        if (existing) {
            existing.pontos += entry.pontos;
        } else {
            acc.push({ jogador: entry.jogador, pontos: entry.pontos });
        }
        return acc;
    }, [])
    .sort((a, b) => b.pontos - a.pontos || a.jogador.localeCompare(b.jogador));

let shuffledTeams = [];
let shuffledPlayers = [];
let remainingTeams = [];
let remainingPlayers = [];
let currentRound = 0;
let resultados = [];
const coachByShortName = Object.fromEntries(coachProfiles.map((coach) => [coach.nome, coach]));
let selectedCoachId = coachProfiles[0].id;

const TOTAL_ROUNDS = jogadores.length;
const ITEM_WIDTH_TEAM = 126;
const ITEM_WIDTH_PLAYER = 164;
const SPIN_DURATION = 7000;
const TEAM_SPIN_LOOPS = 5;
const PLAYER_SPIN_LOOPS = 6;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getViewportWidth() {
    return Math.min(680, window.innerWidth * 0.92);
}

function scrollToElement(element) {
    setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function normalizeLoopX(x, cycleWidth) {
    let normalized = x;
    while (normalized <= -cycleWidth) {
        normalized += cycleWidth;
    }
    return normalized;
}

function buildLoopedRouletteItems(items, itemWidth, viewportWidth, spinLoops) {
    let cycleWidth = items.length * itemWidth;
    let minCopiesForViewport = Math.ceil((viewportWidth + cycleWidth) / cycleWidth);
    let copies = Math.max(3, spinLoops + 2, minCopiesForViewport);
    let repeatedItems = [];

    for (let i = 0; i < copies; i++) {
        repeatedItems.push(...items);
    }

    return { repeatedItems, cycleWidth };
}

function highlightWinner(strip, baseIndex) {
    strip.querySelectorAll(`[data-base-index="${baseIndex}"]`).forEach((item) => {
        item.classList.add("winner");
    });
}

function animateRoulette(strip, cycleWidth, finalX, duration, onComplete) {
    let startTime = null;
    let done = false;
    let settledX = normalizeLoopX(finalX, cycleWidth);

    function finish() {
        if (done) return;
        done = true;
        strip.style.transform = `translateX(${settledX}px)`;
        strip.style.willChange = "auto";
        onComplete();
    }

    function frame(timestamp) {
        if (done) return;

        if (startTime === null) {
            startTime = timestamp;
        }

        let elapsed = timestamp - startTime;
        let progress = Math.min(elapsed / duration, 1);
        let eased = easeOutCubic(progress);
        let currentX = normalizeLoopX(finalX * eased, cycleWidth);

        strip.style.transform = `translateX(${currentX}px)`;

        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            finish();
        }
    }

    requestAnimationFrame(frame);
    setTimeout(finish, duration + 120);
}

let musicStarted = false;
let isMuted = false;
const MUTE_STORAGE_KEY = "fm-draw-muted";

function getMusicElement() {
    return document.getElementById("bgmusic");
}

function syncMuteButton() {
    let btn = document.getElementById("muteBtn");
    if (btn) {
        btn.classList.toggle("is-muted", isMuted);
    }
}

function applyMuteState() {
    let music = getMusicElement();
    if (!music) return;
    music.muted = isMuted;
    syncMuteButton();
}

function persistMuteState() {
    try {
        sessionStorage.setItem(MUTE_STORAGE_KEY, String(isMuted));
    } catch (_) {}
}

function restoreMuteState() {
    try {
        isMuted = sessionStorage.getItem(MUTE_STORAGE_KEY) === "true";
    } catch (_) {
        isMuted = false;
    }
    applyMuteState();
}

function tryPlayDrawMusic() {
    let music = getMusicElement();
    if (!music) return;

    music.volume = 0.5;
    music.muted = isMuted;

    let attempt = music.play();
    if (attempt && typeof attempt.then === "function") {
        attempt
            .then(() => {
                musicStarted = true;
            })
            .catch(() => {
                musicStarted = false;
            });
    } else {
        musicStarted = !music.paused;
    }
}

function syncDrawMusic() {
    let music = getMusicElement();
    if (!music) return;

    applyMuteState();

    if (getTabFromHash() === "draw") {
        tryPlayDrawMusic();
    } else {
        music.pause();
    }
}

function bindMusicRecovery() {
    ["pointerdown", "touchstart", "keydown"].forEach((eventName) => {
        document.addEventListener(eventName, () => {
            if (getTabFromHash() === "draw") {
                let music = getMusicElement();
                if (music && music.paused && !isMuted) {
                    tryPlayDrawMusic();
                }
            }
        }, { passive: true });
    });

    window.addEventListener("pageshow", () => {
        if (getTabFromHash() === "draw") {
            syncDrawMusic();
        }
    });

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && getTabFromHash() === "draw") {
            syncDrawMusic();
        }
    });
}

function toggleMute() {
    isMuted = !isMuted;
    applyMuteState();
    persistMuteState();

    if (!isMuted && getTabFromHash() === "draw") {
        tryPlayDrawMusic();
    }
}

const TAB_HASHES = { home: "#home", draw: "#sorteio", coaches: "#treinadores", general: "#classificacao", past: "#ligas" };
const HASH_TO_TAB = Object.fromEntries(Object.entries(TAB_HASHES).map(([tab, hash]) => [hash, tab]));

function setActiveTab(tab, pushState) {
    let isHome = tab === "home";
    let isDraw = tab === "draw";
    let isCoaches = tab === "coaches";
    let isGeneral = tab === "general";
    let isPast = tab === "past";

    document.getElementById("homeView").classList.toggle("active", isHome);
    document.getElementById("drawView").classList.toggle("active", isDraw);
    document.getElementById("coachesView").classList.toggle("active", isCoaches);
    document.getElementById("generalView").classList.toggle("active", isGeneral);
    document.getElementById("pastView").classList.toggle("active", isPast);

    document.getElementById("homeTabBtn").classList.toggle("active", isHome);
    document.getElementById("drawTabBtn").classList.toggle("active", isDraw);
    document.getElementById("coachesTabBtn").classList.toggle("active", isCoaches);
    document.getElementById("generalTabBtn").classList.toggle("active", isGeneral);
    document.getElementById("pastTabBtn").classList.toggle("active", isPast);

    if (isDraw) {
        tryPlayDrawMusic();
    } else {
        let music = getMusicElement();
        if (music) {
            music.pause();
        }
    }

    if (pushState !== false) {
        history.pushState(null, "", TAB_HASHES[tab] || "#home");
    }
}

function getTabFromHash() {
    return HASH_TO_TAB[location.hash] || "home";
}

window.addEventListener("popstate", () => setActiveTab(getTabFromHash(), false));

function getCoachMarkup(coach) {
    let initials = coach.nome.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    let mediaAssets = resolveCoachMedia(coach);
    let media = mediaAssets.cardPhoto
        ? `
            <div class="coach-card-gallery">
                <img src="${mediaAssets.cardPhoto}" alt="${coach.nome}" class="coach-card-photo coach-card-photo-main" draggable="false">
            </div>
        `
        : `<div class="coach-card-placeholder">${initials}</div>`;

    return `
        <div class="coach-card-glow"></div>
        <div class="coach-card-media">${media}</div>
        <div class="coach-card-content">
            <div class="coach-card-name">${coach.nome}</div>
        </div>
    `;
}

function syncCoachCards() {
    let rail = document.getElementById("coachesRail");
    if (!rail) return;
    rail.querySelectorAll(".coach-card").forEach((card) => {
        let selected = card.dataset.coachId === selectedCoachId;
        card.classList.toggle("active", selected);
        card.setAttribute("aria-pressed", selected ? "true" : "false");
    });
}

function selectCoach(id, shouldCenter = true) {
    selectedCoachId = id;
    syncCoachCards();

    if (!shouldCenter) return;
    let rail = document.getElementById("coachesRail");
    let activeCard = rail ? rail.querySelector(`.coach-card[data-coach-id="${id}"]`) : null;
    if (rail && activeCard) {
        activeCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
}

function getCoachById(id) {
    return coachProfiles.find((entry) => entry.id === id) || coachProfiles[0];
}

function getCoachByShortName(name) {
    return coachByShortName[name] || null;
}

function getCoachIndex(id) {
    return coachProfiles.findIndex((entry) => entry.id === id);
}

function getAdjacentCoachId(id, direction) {
    let currentIndex = getCoachIndex(id);
    if (currentIndex === -1) return coachProfiles[0].id;
    let nextIndex = (currentIndex + direction + coachProfiles.length) % coachProfiles.length;
    return coachProfiles[nextIndex].id;
}

function getCoachLinkMarkup(name, className = "") {
    let coach = getCoachByShortName(name);
    if (!coach) return name || "PC";
    let safeClass = className ? ` ${className}` : "";
    return `<button class="coach-link${safeClass}" type="button" data-coach-id="${coach.id}">${coach.nome}</button>`;
}

function resolveCoachMedia(coach) {
    let folder = coach.assetFolder;
    let files = coachAssetFiles[folder] || [];
    let statsFiles = files.filter((file) => file.toLowerCase().includes("stats"));
    let usableFiles = files.filter((file) => {
        let name = file.toLowerCase();
        return !name.includes("teste") && !name.includes("stats");
    });

    let keywordCardFiles = usableFiles.filter((file) => file.toLowerCase().includes("card"));
    let keywordProfileFiles = usableFiles.filter((file) => file.toLowerCase().includes("profile"));

    let cardFile = keywordCardFiles[0] || usableFiles[0] || null;
    let profileFiles = keywordProfileFiles;

    if (!profileFiles.length) {
        profileFiles = usableFiles.filter((file) => file !== cardFile);
    }
    if (!profileFiles.length && cardFile) {
        profileFiles = [cardFile];
    }

    return {
        cardPhoto: cardFile ? `assets/Treinadores/${folder}/${cardFile}` : "",
        profilePhotos: profileFiles.map((file) => `assets/Treinadores/${folder}/${file}`),
        statsPhoto: statsFiles[0] ? `assets/Treinadores/${folder}/${statsFiles[0]}` : ""
    };
}

function getCoachStats(coach) {
    return coachStats[coach.id] || null;
}

function renderCoachStatsMarkup(coach) {
    let stats = getCoachStats(coach);
    if (!stats) {
        return `<div class="coach-modal-stats-empty">Stats em breve</div>`;
    }

    return `
        <div class="coach-modal-stats-grid">
            ${Object.entries(stats).map(([label, value]) => `
                <div class="coach-stat-card">
                    <div class="coach-stat-label">${label}</div>
                    <div class="coach-stat-value">${value}</div>
                </div>
            `).join("")}
        </div>
    `;
}

function formatCoachDescription(text) {
    return text
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .map((paragraph) => `<p class="coach-modal-paragraph">${paragraph.replace(/\n/g, "<br>")}</p>`)
        .join("");
}

function setCoachModalView(view) {
    let presentationTab = document.getElementById("coachModalTabPresentation");
    let statsTab = document.getElementById("coachModalTabStats");
    let presentationPanel = document.getElementById("coachModalPresentation");
    let statsPanel = document.getElementById("coachModalStats");
    let isStats = view === "stats";

    presentationTab?.classList.toggle("active", !isStats);
    presentationTab?.setAttribute("aria-selected", isStats ? "false" : "true");
    statsTab?.classList.toggle("active", isStats);
    statsTab?.setAttribute("aria-selected", isStats ? "true" : "false");

    presentationPanel?.classList.toggle("active", !isStats);
    if (presentationPanel) presentationPanel.hidden = isStats;
    statsPanel?.classList.toggle("active", isStats);
    if (statsPanel) statsPanel.hidden = !isStats;
}

function renderCoachModal(coach) {
    let initials = coach.nome.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    let mediaAssets = resolveCoachMedia(coach);
    let images = mediaAssets.profilePhotos;
    let media = images.length
        ? `
            <div class="coach-modal-gallery" data-photo-index="0">
                ${images.length > 1 ? `<button class="coach-modal-photo-nav prev" type="button" aria-label="Foto anterior de ${coach.nome}">‹</button>` : ""}
                <img src="${images[0]}" alt="${coach.nome}" class="coach-card-photo coach-modal-photo-main" draggable="false">
                ${images.length > 1 ? `<button class="coach-modal-photo-nav next" type="button" aria-label="Foto seguinte de ${coach.nome}">›</button>` : ""}
            </div>
        `
        : `<div class="coach-card-placeholder">${initials}</div>`;

    let mediaEl = document.getElementById("coachModalMedia");
    mediaEl.innerHTML = media;
    mediaEl.dataset.images = JSON.stringify(images);
    document.getElementById("coachModalName").textContent = coach.nomePerfil || coach.nome;
    document.getElementById("coachModalRole").textContent = coach.cargo;
    document.getElementById("coachModalDescription").innerHTML = formatCoachDescription(coach.descricao);
    document.getElementById("coachModalHighlight").textContent = coach.destaque;
    document.getElementById("coachModalStatsName").textContent = coach.nomePerfil || coach.nome;

    let statsMediaEl = document.getElementById("coachModalStatsMedia");
    if (statsMediaEl) {
        statsMediaEl.innerHTML = renderCoachStatsMarkup(coach);
    }

}

function openCoachModal(id, preserveTab) {
    let currentView = preserveTab && document.getElementById("coachModalTabStats")?.classList.contains("active") ? "stats" : "presentation";
    let coach = getCoachById(id);
    selectCoach(id);
    renderCoachModal(coach);
    setCoachModalView(currentView);
    setupCoachModalGallery();
    document.getElementById("coachModal").hidden = false;
    document.body.classList.add("modal-open");
}

function closeCoachModal() {
    let modal = document.getElementById("coachModal");
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
}

function setupCoachModal() {
    let modal = document.getElementById("coachModal");
    let closeBtn = document.getElementById("coachModalClose");
    let backdrop = document.getElementById("coachModalBackdrop");
    let presentationTab = document.getElementById("coachModalTabPresentation");
    let statsTab = document.getElementById("coachModalTabStats");
    let prevCoachBtn = document.getElementById("coachModalPrevCoach");
    let nextCoachBtn = document.getElementById("coachModalNextCoach");

    if (!modal || modal.dataset.bound === "true") return;

    closeBtn?.addEventListener("click", closeCoachModal);
    backdrop?.addEventListener("click", closeCoachModal);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.hidden) {
            closeCoachModal();
        }
    });

    presentationTab?.addEventListener("click", () => setCoachModalView("presentation"));
    statsTab?.addEventListener("click", () => setCoachModalView("stats"));
    prevCoachBtn?.addEventListener("click", () => openCoachModal(getAdjacentCoachId(selectedCoachId, -1), true));
    nextCoachBtn?.addEventListener("click", () => openCoachModal(getAdjacentCoachId(selectedCoachId, 1), true));

    modal.dataset.bound = "true";
}

function setupCoachRailDrag() {
    let rail = document.getElementById("coachesRail");
    if (!rail || rail.dataset.dragBound === "true") return;

    rail.addEventListener("dragstart", (event) => {
        if (event.target instanceof HTMLImageElement) {
            event.preventDefault();
        }
    });

    let isPointerDown = false;
    let dragActive = false;
    let axisLocked = false;
    let dragAllowed = false;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let lastX = 0;
    let lastMoveTime = 0;
    let velocity = 0;
    let momentumFrame = null;

    function stopMomentum() {
        if (momentumFrame !== null) {
            cancelAnimationFrame(momentumFrame);
            momentumFrame = null;
        }
    }

    function startMomentum() {
        stopMomentum();
        function step() {
            velocity *= 0.95;
            if (Math.abs(velocity) < 0.04) {
                momentumFrame = null;
                return;
            }
            rail.scrollLeft -= velocity * 18;
            momentumFrame = requestAnimationFrame(step);
        }
        momentumFrame = requestAnimationFrame(step);
    }

    rail.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        stopMomentum();
        isPointerDown = true;
        dragActive = false;
        axisLocked = false;
        dragAllowed = false;
        startX = event.clientX;
        startY = event.clientY;
        startScrollLeft = rail.scrollLeft;
        lastX = event.clientX;
        lastMoveTime = performance.now();
        velocity = 0;
    });

    rail.addEventListener("pointermove", (event) => {
        if (!isPointerDown) return;
        let delta = event.clientX - startX;
        let deltaY = event.clientY - startY;
        let now = performance.now();
        let dt = Math.max(now - lastMoveTime, 1);

        if (!axisLocked) {
            if (Math.abs(delta) > 6 || Math.abs(deltaY) > 6) {
                axisLocked = true;
                dragAllowed = Math.abs(delta) > Math.abs(deltaY);
                if (dragAllowed) {
                    rail.classList.add("is-dragging");
                    rail.setPointerCapture?.(event.pointerId);
                }
            }
        }

        if (!dragAllowed) {
            if (axisLocked) {
                isPointerDown = false;
            }
            return;
        }

        dragActive = true;
        rail.scrollLeft = startScrollLeft - delta;
        let instantVelocity = (event.clientX - lastX) / dt;
        velocity = velocity * 0.72 + instantVelocity * 0.28;
        lastX = event.clientX;
        lastMoveTime = now;
    });

    function stopDrag(event) {
        if (!isPointerDown) return;
        isPointerDown = false;
        rail.classList.remove("is-dragging");
        if (dragAllowed) {
            rail.releasePointerCapture?.(event.pointerId);
        }
        if (dragActive) {
            startMomentum();
        }
        requestAnimationFrame(() => {
            rail.dataset.dragging = dragActive ? "true" : "false";
            setTimeout(() => {
                rail.dataset.dragging = "false";
            }, 0);
        });
    }

    rail.addEventListener("pointerup", stopDrag);
    rail.addEventListener("pointercancel", stopDrag);
    rail.addEventListener("pointerleave", (event) => {
        if (isPointerDown) {
            stopDrag(event);
        }
    });

    rail.dataset.dragBound = "true";
}

function setupCoachModalGallery() {
    let mediaEl = document.getElementById("coachModalMedia");
    if (!mediaEl) return;

    let prevTrigger = mediaEl.querySelector(".coach-modal-photo-nav.prev");
    let nextTrigger = mediaEl.querySelector(".coach-modal-photo-nav.next");
    let image = mediaEl.querySelector(".coach-modal-photo-main");
    if (!image) return;

    let images = [];
    try {
        images = JSON.parse(mediaEl.dataset.images || "[]");
    } catch (_) {
        images = [];
    }
    image.addEventListener("click", () => {
        openPhotoLightbox(image.src, image.alt);
    });

    if (images.length <= 1) return;

    function setImageByIndex(nextIndex) {
        let gallery = mediaEl.querySelector(".coach-modal-gallery");
        if (gallery) {
            gallery.dataset.photoIndex = String(nextIndex);
        }
        image.src = images[nextIndex];
    }

    prevTrigger?.addEventListener("click", (event) => {
        event.stopPropagation();
        let gallery = mediaEl.querySelector(".coach-modal-gallery");
        let currentIndex = Number(gallery?.dataset.photoIndex || 0);
        let nextIndex = (currentIndex - 1 + images.length) % images.length;
        setImageByIndex(nextIndex);
    });

    nextTrigger?.addEventListener("click", (event) => {
        event.stopPropagation();
        let gallery = mediaEl.querySelector(".coach-modal-gallery");
        let currentIndex = Number(gallery?.dataset.photoIndex || 0);
        let nextIndex = (currentIndex + 1) % images.length;
        setImageByIndex(nextIndex);
    });
}

function openPhotoLightbox(src, alt) {
    let lightbox = document.getElementById("photoLightbox");
    let img = document.getElementById("photoLightboxImg");
    if (!lightbox || !img) return;
    img.src = src;
    img.alt = alt || "";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePhotoLightbox() {
    let lightbox = document.getElementById("photoLightbox");
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

function setupPhotoLightbox() {
    let lightbox = document.getElementById("photoLightbox");
    if (!lightbox || lightbox.dataset.bound === "true") return;

    lightbox.querySelector(".photo-lightbox-backdrop")?.addEventListener("click", closePhotoLightbox);
    lightbox.querySelector(".photo-lightbox-img")?.addEventListener("click", closePhotoLightbox);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closePhotoLightbox();
        }
    });

    lightbox.dataset.bound = "true";
}

function renderCoachCards() {
    let rail = document.getElementById("coachesRail");
    if (!rail) return;

    rail.innerHTML = coachProfiles.map((coach) => `
        <div class="coach-card" role="button" tabindex="0" data-coach-id="${coach.id}" aria-pressed="false">
            ${getCoachMarkup(coach)}
        </div>
    `).join("");

    rail.querySelectorAll(".coach-card").forEach((card) => {
        card.addEventListener("click", () => {
            if (rail.dataset.dragging === "true") return;
            openCoachModal(card.dataset.coachId);
        });
        card.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            if (rail.dataset.dragging === "true") return;
            openCoachModal(card.dataset.coachId);
        });
    });

    setupCoachRailDrag();
    setupCoachModal();
    setupPhotoLightbox();
    selectCoach(selectedCoachId, false);
}

function setupFormulaPopover() {
    let button = document.getElementById("formulaTipBtn");
    let popover = document.getElementById("formulaPopover");

    if (!button || !popover || button.dataset.bound === "true") return;

    function closePopover() {
        popover.hidden = true;
        button.setAttribute("aria-expanded", "false");
    }

    button.addEventListener("click", (event) => {
        event.stopPropagation();
        let willOpen = popover.hidden;
        popover.hidden = !willOpen;
        button.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    document.addEventListener("click", (event) => {
        if (popover.hidden) return;
        if (!popover.contains(event.target) && !button.contains(event.target)) {
            closePopover();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closePopover();
        }
    });

    button.dataset.bound = "true";
}

function setupStandingsColumnHover(scope = document) {
    let standings = scope.querySelector(".standings-standings");
    if (!standings || standings.dataset.hoverBound === "true") return;

    let cells = standings.querySelectorAll("[data-col]");
    let activeCol = null;

    function setActiveColumn(col) {
        if (activeCol === col) return;
        activeCol = col;
        cells.forEach((cell) => {
            cell.classList.toggle("column-hover", cell.dataset.col === col);
        });
    }

    function clearActiveColumn() {
        activeCol = null;
        cells.forEach((cell) => cell.classList.remove("column-hover"));
    }

    standings.addEventListener("pointermove", (event) => {
        let cell = event.target.closest("[data-col]");
        if (!cell || !standings.contains(cell)) {
            clearActiveColumn();
            return;
        }

        setActiveColumn(cell.dataset.col);
    });

    standings.addEventListener("pointerleave", clearActiveColumn);
    standings.addEventListener("focusin", (event) => {
        let cell = event.target.closest("[data-col]");
        if (cell && standings.contains(cell)) {
            setActiveColumn(cell.dataset.col);
        }
    });
    standings.addEventListener("focusout", (event) => {
        if (!standings.contains(event.relatedTarget)) clearActiveColumn();
    });

    standings.dataset.hoverBound = "true";
}

function formatPoints(points) {
    return points > 0 ? `+${points}` : `${points}`;
}

function getPointsClass(points) {
    if (points > 0) return "positive";
    if (points < 0) return "negative";
    return "neutral";
}

function renderGeneralTable() {
    let scoreTable = document.getElementById("scoreTable");

    scoreTable.innerHTML = `
        <div class="score-row header">
            <div>#</div>
            <div data-col="4">Jogador</div>
            <div>Pontos</div>
        </div>
    `;

    generalScores.forEach((entry, index) => {
        let row = document.createElement("div");
        row.className = "score-row";
        row.innerHTML = `
            <div class="score-rank">${index + 1}</div>
            <div class="score-cell">
                <span class="score-mobile-label">Jogador</span>
                <span class="score-player">${getCoachLinkMarkup(entry.jogador, "score-player-link")}</span>
            </div>
            <div class="score-points ${getPointsClass(entry.pontos)}">${formatPoints(entry.pontos)}</div>
        `;
        scoreTable.appendChild(row);
    });

    bindCoachLinks(scoreTable);
}

function renderLeagueSelector() {
    let select = document.getElementById("leagueSelect");
    select.innerHTML = "";
    leagues.forEach((league) => {
        let option = document.createElement("option");
        option.value = league.id;
        option.textContent = league.nome;
        select.appendChild(option);
    });
    renderLeague(leagues[0].id);
}

function renderLeague(leagueId) {
    let league = leagues.find((l) => l.id === leagueId);
    let panel = document.getElementById("leaguePanel");

    let rows = "";
    league.tabela.forEach((entry) => {
        let playerMarkup = entry.jogador
            ? `<div class="standings-player-cell" data-col="4"><div class="standings-player">${getCoachLinkMarkup(entry.jogador, "standings-player-link")}</div></div>`
            : `<div class="standings-player-cell" data-col="4"><div class="standings-player empty">PC</div></div>`;
        let emgMarkup = entry.emgPontos === null
            ? `<div class="standings-points-cell" data-col="14"><div class="standings-points neutral">--</div></div>`
            : `<div class="standings-points-cell" data-col="14"><div class="standings-points ${getPointsClass(entry.emgPontos)}">${formatPoints(entry.emgPontos)}</div></div>`;

        rows += `
            <div class="standings-row ${entry.zone ? `zone-${entry.zone}` : ""}">
                <div class="standings-cell-center standings-pos" data-col="1">${entry.pos}</div>
                <div class="standings-cell-center standings-inf" data-col="2">${entry.inf}</div>
                <div class="standings-team" data-col="3">
                    <img class="standings-team-logo" src="${entry.logo}" alt="${entry.equipa}">
                    <div class="standings-team-stack">
                        <span class="standings-team-name">${entry.equipa}</span>
                        <span class="standings-team-sub">Classificação Final</span>
                    </div>
                </div>
                ${playerMarkup}
                <div class="standings-cell-center" data-col="5">${entry.j}</div>
                <div class="standings-cell-center" data-col="6">${entry.v}</div>
                <div class="standings-cell-center" data-col="7">${entry.e}</div>
                <div class="standings-cell-center" data-col="8">${entry.d}</div>
                <div class="standings-cell-center" data-col="9">${entry.gm}</div>
                <div class="standings-cell-center" data-col="10">${entry.gs}</div>
                <div class="standings-cell-center" data-col="11">${entry.dg}</div>
                <div class="standings-cell-center" data-col="12">${entry.pts}</div>
                <div class="standings-cell-center" data-col="13">${entry.prevista}</div>
                ${emgMarkup}
            </div>
        `;
    });

    let bonuses = calcBonuses(league);
    let bonusRows = bonuses.map((b) => `
        <div class="bonus-row">
            <div class="bonus-player">${getCoachLinkMarkup(b.jogador, "bonus-player-link")}</div>
            <div class="bonus-tipo">${b.tipo}</div>
            <div class="bonus-pontos ${getPointsClass(b.pontos)}">${formatPoints(b.pontos)}</div>
        </div>
    `).join("");

    panel.innerHTML = `
        <div class="panel-head">
            <div>
                <h2 class="panel-title">${league.nome}</h2>
                <p class="panel-copy">${league.descricao}</p>
            </div>
        </div>
        <div class="league-toolbar">
            <div class="league-chip">
                <img class="league-chip-logo" src="${league.logo}" alt="${league.logoAlt}">
            </div>
            <div class="league-chip muted">${league.epoca}</div>
            <div class="league-chip muted">Fórmula: ${league.formula}</div>
        </div>
        <div class="league-table-wrap">
            <div class="standings-standings">
                <div class="standings-row header">
                    <div data-col="1">Pos</div>
                    <div data-col="2">Inf</div>
                    <div data-col="3">Equipa</div>
                    <div data-col="4">Jogador</div>
                    <div data-col="5">J</div>
                    <div data-col="6">V</div>
                    <div data-col="7">E</div>
                    <div data-col="8">D</div>
                    <div data-col="9">GM</div>
                    <div data-col="10">GS</div>
                    <div data-col="11">DG</div>
                    <div data-col="12">Pts</div>
                    <div data-col="13">Prev.</div>
                    <div data-col="14">EMG</div>
                </div>
                ${rows}
            </div>
        </div>
        <div class="bonuses-section">
            <h3 class="bonuses-title">Bónus e Penalizações</h3>
            <div class="bonuses-list">
                <div class="bonus-row header">
                    <div>Jogador</div>
                    <div>Motivo</div>
                    <div>Pontos</div>
                </div>
                ${bonusRows}
            </div>
        </div>
    `;

    setupStandingsColumnHover(panel);
    bindCoachLinks(panel);
}

function bindCoachLinks(scope = document) {
    scope.querySelectorAll(".coach-link").forEach((link) => {
        if (link.dataset.bound === "true") return;
        link.addEventListener("click", () => {
            let coachId = link.dataset.coachId;
            openCoachModal(coachId);
        });
        link.dataset.bound = "true";
    });
}

function start() {
    let btn = document.getElementById("drawBtn");
    btn.disabled = true;
    btn.innerText = "A decorrer...";

    shuffledTeams = [...equipas];
    shuffledPlayers = [...jogadores];
    shuffle(shuffledTeams);
    shuffle(shuffledPlayers);

    remainingTeams = [...shuffledTeams];
    remainingPlayers = [...shuffledPlayers];
    currentRound = 0;
    resultados = [];

    document.getElementById("current").innerHTML = "";
    document.getElementById("table").innerHTML = "";

    showRemainingSidebars(true);
    updateRemainingSidebars();
    startTeamRoulette();
}

function spinRoulette(parent, items, targetIndex, itemWidth, spinLoops, renderItem, onLanded) {
    let vpWidth = getViewportWidth();
    let { repeatedItems, cycleWidth } = buildLoopedRouletteItems(items, itemWidth, vpWidth, spinLoops);

    let container = document.createElement("div");
    container.className = "roulette-container";

    let marker = document.createElement("div");
    marker.className = "roulette-marker";
    container.appendChild(marker);

    let viewport = document.createElement("div");
    viewport.className = "roulette-viewport";

    let strip = document.createElement("div");
    strip.className = "roulette-strip";

    repeatedItems.forEach((entry, index) => {
        let item = renderItem(entry);
        item.dataset.baseIndex = index % items.length;
        strip.appendChild(item);
    });

    viewport.appendChild(strip);
    container.appendChild(viewport);
    parent.appendChild(container);
    scrollToElement(container);

    let randomOffset = (Math.random() - 0.5) * (itemWidth - 2);
    let fullCycleWidth = TOTAL_ROUNDS * itemWidth;
    let totalDistance = spinLoops * fullCycleWidth;
    let adjustedLoops = Math.ceil(totalDistance / cycleWidth);
    let finalX = -((adjustedLoops * cycleWidth) + (targetIndex * itemWidth)) + (vpWidth / 2) - (itemWidth / 2) + randomOffset;

    animateRoulette(strip, cycleWidth, finalX, SPIN_DURATION, () => {
        highlightWinner(strip, targetIndex);
        onLanded();
    });
}

function updateRemainingSidebars() {
    let teamsEl = document.getElementById("remainingTeams");
    let playersEl = document.getElementById("remainingPlayers");

    let remainingTeamNames = remainingTeams.map((t) => t.nome);
    let remainingPlayerNames = [...remainingPlayers];

    teamsEl.innerHTML = `<div class="remaining-title">Equipas</div>` +
        [...equipas].sort((a, b) => a.rank - b.rank).map((team) => {
            let used = !remainingTeamNames.includes(team.nome);
            return `<div class="remaining-chip${used ? " used" : ""}"><img class="remaining-chip-logo" src="${team.img}" alt="${team.nome}"><span>${team.nome}</span></div>`;
        }).join("");

    playersEl.innerHTML = `<div class="remaining-title">Jogadores</div>` +
        jogadores.map((player) => {
            let used = !remainingPlayerNames.includes(player);
            return `<div class="remaining-chip${used ? " used" : ""}">${player}</div>`;
        }).join("");
}

function showRemainingSidebars(visible) {
    document.getElementById("remainingTeams").classList.toggle("active", visible);
    document.getElementById("remainingPlayers").classList.toggle("active", visible);
}

function startTeamRoulette() {
    let current = document.getElementById("current");
    current.innerHTML = "";

    let targetTeam = shuffledTeams[currentRound];
    let items = [...remainingTeams];
    let targetIndex = items.findIndex((team) => team.nome === targetTeam.nome);

    let roundInfo = document.createElement("div");
    roundInfo.className = "round-info";
    roundInfo.textContent = `Sorteio ${currentRound + 1} / ${TOTAL_ROUNDS}`;
    current.appendChild(roundInfo);

    spinRoulette(current, items, targetIndex, ITEM_WIDTH_TEAM, TEAM_SPIN_LOOPS, (team) => {
        let item = document.createElement("div");
        item.className = "roulette-item";
        let image = document.createElement("img");
        image.src = team.img;
        image.alt = team.nome;
        item.appendChild(image);
        return item;
    }, () => {
        remainingTeams = remainingTeams.filter((item) => item.nome !== targetTeam.nome);
        updateRemainingSidebars();
        onTeamLanded(targetTeam);
    });
}

function onTeamLanded(team) {
    let current = document.getElementById("current");

    let info = document.createElement("div");
    info.className = "team-info";
    info.innerHTML = `
        <img class="logo-big" src="${team.img}" alt="${team.nome}">
        <div class="team-name-big">${team.nome}</div>
        <div class="team-rank">Classificação prevista: ${team.rank}<sup>&ordm;</sup></div>
    `;

    current.appendChild(info);
    scrollToElement(info);

    let button = document.createElement("button");
    button.className = "action-btn gold";
    button.textContent = "Sortear Jogador";
    button.onclick = () => {
        button.remove();
        startPlayerRoulette(team);
    };

    current.appendChild(button);
}

function startPlayerRoulette(team) {
    let current = document.getElementById("current");
    let targetPlayer = shuffledPlayers[currentRound];
    let items = [...remainingPlayers];
    let targetIndex = items.findIndex((player) => player === targetPlayer);

    spinRoulette(current, items, targetIndex, ITEM_WIDTH_PLAYER, PLAYER_SPIN_LOOPS, (player) => {
        let item = document.createElement("div");
        item.className = "roulette-item name-item";
        item.textContent = player;
        return item;
    }, () => onPlayerLanded(team, targetPlayer));
}

function onPlayerLanded(team, player) {
    let current = document.getElementById("current");

    let reveal = document.createElement("div");
    reveal.className = "final-reveal";
    reveal.innerHTML = `
        <div class="final-logo-wrap">
            <img src="${team.img}" alt="${team.nome}">
        </div>
        <div class="final-team-name">${team.nome}</div>
        <div class="final-player-label">Jogador Sorteado</div>
        <div class="final-player-name">${player}</div>
    `;
    current.appendChild(reveal);
    scrollToElement(reveal);

    resultados.push({
        equipa: team.nome,
        jogador: player,
        rank: team.rank,
        img: team.img
    });

    remainingPlayers = remainingPlayers.filter((item) => item !== player);
    currentRound++;
    updateRemainingSidebars();

    let button = document.createElement("button");
    button.className = "action-btn";

    if (currentRound < TOTAL_ROUNDS) {
        button.textContent = "Próxima Equipa";
        button.onclick = () => {
            let started = false;
            function beginNext() {
                if (started) return;
                started = true;
                clearInterval(checkScroll);
                startTeamRoulette();
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
            let checkScroll = setInterval(() => {
                let rect = { top: window.scrollY };
                if (rect.top <= 5) beginNext();
            }, 50);
            setTimeout(beginNext, 1500);
        };
    } else {
        button.textContent = "Ver Resultados";
        button.onclick = () => showResults();
    }

    current.appendChild(button);
}

function showResults() {
    showRemainingSidebars(false);
    let current = document.getElementById("current");
    let table = document.getElementById("table");

    current.innerHTML = "<h2 class=\"panel-title\">Resultados Finais</h2>";
    table.innerHTML = "";

    resultados.sort((a, b) => a.rank - b.rank);

    resultados.forEach((entry) => {
        let row = document.createElement("div");
        row.className = "row";
        row.innerHTML = `
            <div class="table-rank">${entry.rank}&ordm;</div>
            <div class="table-match">
                <div class="table-player">${entry.jogador}</div>
                <span class="table-connector" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M7 12H17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                        <path d="M12 7L17 12L12 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <div class="table-team">
                    <img class="table-logo" src="${entry.img}" alt="${entry.equipa}">
                    <span class="table-team-name">${entry.equipa}</span>
                </div>
            </div>
        `;
        table.appendChild(row);
    });

    let shareBtn = document.createElement("button");
    shareBtn.className = "action-btn gold";
    shareBtn.textContent = "Partilhar";
    shareBtn.onclick = () => shareToDiscord(shareBtn);
    table.appendChild(shareBtn);

    scrollToElement(table);
    document.getElementById("drawBtn").innerText = "Sorteio Terminado";
}

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1493234921198850148/NHvFhAmrc7GTThsXfzNUwrLgNwSbzqI6JkztqApSaPF_a8-S8FW1YJGWlr_QtJtSAS3g";

async function shareToDiscord(btn) {
    btn.disabled = true;
    btn.textContent = "A enviar...";

    try {
        let panel = document.querySelector("#drawView .page-panel");
        let canvas = await capturePanel(panel);

        let blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

        let form = new FormData();
        form.append("file", blob, "sorteio.png");
        form.append("payload_json", JSON.stringify({
            content: "Sorteio concluído! Aqui estão os resultados:"
        }));

        let response = await fetch(DISCORD_WEBHOOK, { method: "POST", body: form });

        if (response.ok) {
            btn.textContent = "Enviado!";
        } else {
            console.error("Discord webhook error:", response.status, await response.text());
            btn.textContent = "Erro ao enviar";
            setTimeout(() => {
                btn.textContent = "Partilhar";
                btn.disabled = false;
            }, 3000);
        }
    } catch (e) {
        console.error("Discord share error:", e);
        btn.textContent = "Erro ao enviar";
        setTimeout(() => {
            btn.textContent = "Partilhar";
            btn.disabled = false;
        }, 3000);
    }
}

function imageToDataURL(img) {
    let c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    c.getContext("2d").drawImage(img, 0, 0);
    return c.toDataURL("image/png");
}

async function capturePanel(panel) {
    let images = panel.querySelectorAll("img");
    let originals = [];
    images.forEach((img) => {
        originals.push(img.src);
        try { img.src = imageToDataURL(img); } catch (_) {}
    });

    let canvas = await html2canvas(panel, { backgroundColor: "#02071b", scale: 2 });

    images.forEach((img, i) => { img.src = originals[i]; });
    return canvas;
}

renderGeneralTable();
renderLeagueSelector();
renderCoachCards();
setupFormulaPopover();
restoreMuteState();
bindMusicRecovery();
setActiveTab(getTabFromHash());




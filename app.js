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
        assetFolder: "goncalo"
    },
    {
        id: "rato",
        nome: "Rato",
        nomePerfil: "João Pedro Rato",
        cargo: "O penetrador (de defesas)",

        descricao: "As minhas origens são tudo menos convencionais. Muito antes dos relvados e das conferências de imprensa, passei uma fase curiosa da minha vida no Mónaco, onde trabalhei como arrumador de carros de luxo no icónico Hotel Monte Carlo. Foi aí que, num momento aparentemente banal, estacionei o G-Wagon de Leonardo Jardim. Entre uma chave entregue e uma troca de palavras, nasceu uma conversa improvável que mudaria tudo. Jardim recomendou-me vivamente o seu curso de Udemy entitulado “1-2 bem trabalhado”. Comprei. Estudei. Obsessivamente. E foi aí que começou a minha nova paixão.\n\nMas a teoria rapidamente deu lugar à prática — e de forma pouco ortodoxa. Durante os meus caóticos meses de Erasmus em Helsínquia, entrei diretamente no mundo do futebol sénior ao assumir funções no AC Balls. Ninguém sabe bem como: há quem diga que foi por falta de treinador, outros juram que foi apenas por ser português, e portugueses lá são exóticos e percebem do futebol. A verdade é que funcionou. O AC Balls começou a jogar futebol… e que futebol.\n\nA minha entrada no futebol britânico prende-se por um nome algo inusitado: Topi Keskinen, um extremo finlandês. Conhecemo-nos numa sauna completamente nus e suados, após um jogo do Balls a que o Topi tinha assistido. A conversa fluiu, e não só. E assim, com cunha do Topi, consegui uma entrevista com o Aberdeen FC, clube do velocista louro, esbelto e muito bem equipado.\n\nNo entanto, qual Eusébio chegado de Lourenço Marques, fui prontamente desviado no aeroporto por uma limosine forrada a verde garrafa. O Hibernian tinha sabido da minha chegada e não podia deixar fugir este talento para um rival.\n\nA história da temporada fala por si: golos e mais golos, domínio sobre os rivais da cidade e um lugar na tão esperada Champions League para os Hibs.\n\nNo entanto, farto da chuva e do frio, decidi que era hora de um novo desafio. A Croácia, com o seu clima mais ameno, permitirá que dispa a minha gabardine e mostre o quão entusiasmante o meu futebol pode ser.",
        destaque: "\"O meu futebol é como a sauna: muito suor e muita (mas mesmo muita) diversão.\"",
        assetFolder: "rato"
    },
    {
        id: "chico",
        nome: "Chico",
        nomePerfil: "Francisco Pinto",
        cargo: "O TRATOR TÁTICO",
        tag: "Menos barulho, mais controlo. Vai somando pontos enquanto os outros ainda estão a discutir scouting.",
        descricao: "Tenho um grande apetite por futebol… e por títulos.\n\nAcredito num futebol energético e livre, mas exijo disciplina e rigor dos meus jogadores. Em troca, dou-lhes espaço para que a criatividade floresça e para que possam atingir o seu verdadeiro potencial.\n\nSou pragmático e ambicioso. Encaro todos os desafios sem medo — e isso reflete-se na atitude da minha equipa em campo. Independentemente do adversário ou das circunstâncias, acredito sempre que há uma forma de vencer.\n\nNão me prendo a uma única formação. A minha tática é aquela que melhor potencia os jogadores que tenho. Pode ser um 4-3-3, um 5-2-1-2 ou um 4-4-2 — o importante é adaptar-me para tirar o máximo rendimento da equipa.\n\nAs minhas ideias são influenciadas por treinadores como Klopp, Jorge Jesus e Bielsa, mas a minha filosofia é simples: os jogadores cometem erros, e cabe-nos provocá-los. Para isso, procuro uma pressão alta e intensa.\n\nCom bola, dou liberdade. Quero que os meus jogadores joguem de acordo com os seus pontos fortes, que os criativos criem e que os avançados sigam o seu instinto. Não gosto de limitar decisões — acredito que o futebol também se faz de liberdade dentro de uma estrutura.",
        destaque: "\"Se comprometerem-se comigo, o vosso legado será imortalizado na história do futebol.\"",
        assetFolder: "chico"
    },
    {
        id: "nabais",
        nome: "Nabais",
        nomePerfil: "João Nabais",
        cargo: "Prodígio milagreiro",
        descricao: "Vim de uma aldeia tão pequena que até as ovelhas ficavam aborrecidas. Em criança, treinava a correr atrás de galinhas e a discutir com uma baliza que estava sempre torta. De alguma forma, à base de teimosia, táticas duvidosas e litros absurdos de chá, acabei na Escócia como treinador de alto nível. Ainda hoje ninguém percebe muito bem como.\n\nE aqui estou eu, a gritar instruções à chuva como se tivesse nascido para isto — a prova de que se pode sair do nada e chegar a algum lado… mesmo sem fazer grande ideia do que se está a fazer.",
        destaque: "\"Um pastor não escolhe o rebanho… mas escolhe até onde ele pode chegar.\"",
        assetFolder: "nabais"
    },
    {
        id: "gamy",
        nome: "Gamy",
        nomePerfil: "Gamy Chambelito",
        cargo: "O REI DO MERCADO",
        tag: "Traz confiança, trash talk e vontade real de transformar qualquer sorteio numa storyline.",
        descricao: "Sou o Gamy Chambelito, nascido no Entroncamento, onde dei os primeiros passos no futebol — ainda longe dos holofotes, mas já com uma personalidade impossível de ignorar.\n\nDepois de me destacar a nível local, dei o salto para Leiria, onde comecei a chamar a atenção pela minha leitura de jogo e, sobretudo, pela forma como ajusto equipas durante as partidas. Mas nunca fui de ficar confortável: a ambição levou-me mais longe e emigrei para a Bélgica, onde assumi os sub-23 do Royal Saint-Gilloise.\n\nFoi aí que comecei realmente a construir o meu nome. Entre resultados consistentes e um estilo comunicativo provocador, conquistei jogadores e dirigentes — muito também pela minha capacidade negocial, assumindo um papel ativo nas transferências.\n\nEsse impacto abriu-me as portas do Dundee United. Entrei forte, com uma identidade clara: intensidade, ajustes táticos constantes e muito “trash talk” para mexer com qualquer adversário.\n\nMas nem tudo foi perfeito. Uma fase pessoal complicada afetou a minha ética de trabalho, refletindo-se nos resultados e acabando por levar à minha saída após uma época abaixo do esperado.\n\nAgora, procuro redenção na Liga Croata. Quero relançar a minha carreira e provar que o meu talento nunca desapareceu. Ainda não se sabe que clube vou liderar — mas uma coisa é certa: onde eu chegar, vou deixar marca.\n\nCarismático, provocador e mestre nas negociações — dentro ou fora de campo, nunca passo despercebido.",
        destaque: "\"Se não ganhamos no campo, ganhamos na negociação.\"",
        assetFolder: "gamy"
    },
    {
        id: "painatal",
        nome: "Painatal",
        nomePerfil: "Pai Natal",
        cargo: "O Desertor de serviço",
        descricao: "Houve uma altura em que me chamavam de tudo… menos vencedor. Sou o Pai Natal, treinador guineense conhecido não pelas vitórias, mas pela minha criatividade no fracasso.\n\nA minha carreira começou depois de perder uma aposta. Disse que conseguia treinar melhor do que qualquer um — alguém respondeu: “Duvido.” No dia seguinte, já estava de apito ao pescoço… e sem plano nenhum.\n\nNos primeiros jogos, a minha equipa inovava: ninguém sabia bem em que posição jogava. O guarda-redes aparecia no ataque, o avançado defendia cantos… e eu chamava a isso “futebol imprevisível”. Perdíamos sempre, mas confundíamos tanto o adversário que, às vezes, até tinham pena de nós.\n\nMesmo assim, nunca desanimei. Dava palestras motivacionais do género:\n“Hoje podemos perder… mas vamos perder com estilo!”\n\nE, contra todas as probabilidades, comecei a subir na carreira. Porquê? Porque os clubes achavam que ninguém podia ser tão mau — devia ser estratégia avançada.\n\nUm dia, ganhei um jogo… porque o outro treinador faltou. Fui promovido.\n\nHoje, sou um nome conhecido nas ruas da Croácia — não porque me queiram, mas porque ninguém quer ficar comigo. Dizem que sou um fenómeno: o único treinador que nunca acabou uma época.\n\nE quando me perguntam qual é o segredo do sucesso, respondo sempre:\n“Persistência… e um bocado de sorte… principalmente a sorte. E contratar africanos, também.”",
        destaque: "\"Vencer é opcional, perder é mandatório.\"",
        assetFolder: "painatal"
    },
    {
        id: "cardoso",
        nome: "Cardoso",
        nomePerfil: "Miguel Cardoso",
        cargo: "Atacante agressivo",
        
        descricao: "Desde pequeno, no Cacém, o futebol nunca foi só um jogo. Era refúgio, rotina, identidade. Cresci a jogar em pelados, bolas gastas e sonhos grandes demais para o tamanho da cidade. Como muitos miúdos, quis ser jogador. E fui, durante anos lutei, treinei, sacrifiquei. Mas no fundo, havia sempre outra voz. Eu não queria só jogar, queria perceber o jogo.\n\nQuando a carreira de jogador começou a perder força, não foi o fim. Foi o início. Tirei cursos, estudei tática, analisei jogos até altas horas. Enquanto outros viam futebol, eu desmontava-o.\n\nA oportunidade surgiu longe de casa, no Heart of Midlothian. O primeiro grande salto, a primeira prova real. Mas o futebol não perdoa romantismos. A época foi um desastre. Resultados maus, balneário instável, decisões que hoje sei que tomaria de forma diferente. Foi duro. Muito duro. Houve dúvidas, houve críticas, houve noites em que pensei desistir.\n\nAgora surge um novo capítulo na Croácia. Não é um passo atrás, é um recomeço consciente. Um sítio onde posso reconstruir, aplicar tudo o que aprendi, errar menos e crescer mais.\n\nPorque o sonho nunca foi só jogar futebol.",
        destaque: "\" Defender? O que é isso?\"",
        assetFolder: "cardoso"
    },
    {
        id: "hugo",
        nome: "Hugo",
        nomePerfil: "Hugo Macedo",
        cargo: "O Batoteiro de Competição",
        
        descricao: "Não nasci treinador… acho que virei por acidente.\n\nLembro-me perfeitamente: estava numa aula de educação física, mais preocupado em não me cansar muito, quando olho para um grupo de miúdos a jogar. E não era um jogo qualquer — aquilo parecia futebol a sério, com passes, entreajuda, espírito de equipa… quase digno de FC Barcelona. Foi aí que pensei: “Espera… isto até é bonito.”\n\nO mais irónico? Na altura, eu era campeão em França… mas em voleibol. Saltava mais do que corria, e sinceramente dava menos trabalho. Mas a verdade é que o futebol sempre esteve ali, a puxar por mim.\n\nSou benfiquista daqueles a sério, dos que sofrem mais do que celebram. O sonho? Um dia treinar o SL Benfica… mesmo sabendo que isso vem com um pacote completo de pressão, nervos e anos de vida perdidos.\n\nDecidi complicar a minha vida e mudei-me para o futebol. Passei pelo Falkirk FC, na Escócia, onde fiz uma excelente época — e onde, entre nós, ainda estou a tentar perceber metade do que dizem.\n\nHoje sou treinador de futebol. Não sei se foi a decisão mais fácil… mas de certeza foi a mais divertida.",
        destaque: "\" O meu streamer é melhor que o teu.\"",
        assetFolder: "hugo"
    }
];

const coachAssetFiles = {
    "goncalo": [
        "goncalo_card.png",
        "goncalo_profile.png",
        "goncalo_profile2.png",
        "goncalo_profile3.png",
        "zepjobsrijeka_profile.png",
        "zeprijeka2_profile.png",
        "teste_goncalo.png",
        "teste_goncalo2.png",
        "teste_goncalo3.png",
        "stats_treinador_goncalo.png"
    ],
    "rato": [
        "rato_card.png",
        "rato_profile.png",
        "rato_profile2.png",
        "rato_profile5.png",
        "rato_profile6.png",
        "stats_treinador_rato.png"
    ],
    "chico": [
        "chico_card.png",
        "chico_profile.png",
        "chico_profile2.png",
        "chico_profile3.png",
        "chicooficial2.png",
        "stats_treinador_chico.png"
    ],
    "nabais": [
        "nabais_card.png",
        "nabais_profile_png.png",
        "nabais_profile1.png",
        "nabais_profile2.png",
        "stats_treinador_nabais.png"
    ],
    "gamy": [
        "game_card.png",
        "gamy_profile.png",
        "gamy_profile2.png",
        "gamy_profile3.png",
        "gamy_profile4.png",
        "gamyoficial2.png",
        "stats_treinador_gamy.png"
    ],
    "painatal": [
        "painatal_card.png",
        "painatal_profile.png",
        "painatal_profile1.png",
        "painatal_profile2.png",
        "painatal_profile3.png",
        "stats_treinador_painatal.png"
    ],
    "cardoso": [
        "cardoso_card.png",
        "cardoso_profile.png",
        "cardoso2_profile.png",
        "cardoso_profile4.png",
        "cardoso_profile5.png",
        "stats_treinador_cardoso.png"
    ],
    "hugo": [
        "hugo_card.png",
        "hugo_profile.png",
        "hugo_profile2.png",
        "hugo_profile3.png",
        "hugo_profile4.png",
        "hugo_profile5.png",
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

const coachProfileExtras = {
    goncalo: {
        trophyCounts: {
            escocia: { "league-cup": 1, "cup": 1 }
        },
        trophyVisibility: {
            escocia: ["league", "league-cup", "cup", "europa", "conference"]
        },
        narrative: {
            victim: { label: "Maior Vítima", value: "Dundee Utd", meta: "17 golos marcados" },
            biggestWin: { label: "Maior Vitória", value: "5-0 vs Dundee Utd", meta: "Exibição mais autoritária da época" },
            worstLoss: { label: "Pior Derrota", value: "1-3 vs Dundee", meta: "Resultado mais pesado em termos competitivos" },
            nemesis: { label: "Némesis", value: "Dundee", meta: "Saldo agregado 5-6 · Registo 1V 1E 2D" },
            chaotic: { label: "Jogo Mais Caótico", value: "7-3 vs Dundee Utd", meta: "Noite total de caos ofensivo" }
        },
        legacy: {
            rating: { label: "Melhor Jogador", value: "William Osula", meta: "7,10 | 15G | 2A | 23J" },
            scorer: { label: "Melhor Marcador", value: "José Campaña", meta: "16G | 34(13)J" }
        },
        identity: {
            specialty: { label: "Especialidade", value: "Jogos a eliminar" },
            tactical: { label: "Assinatura Tática", value: "Pressão alta, circulação rápida" }
        }
    },
    rato: {
        trophyVisibility: {
            escocia: ["league", "league-cup", "cup", "europa", "conference"]
        },
        narrative: {
            victim: { label: "Maior Vítima", value: "Livingston", meta: "20 golos marcados" },
            biggestWin: { label: "Maior Vitória", value: "7-2 vs Hearts", meta: "Sete golos num recital ofensivo" },
            worstLoss: { label: "Pior Derrota", value: "0-4 vs Dundee", meta: "Derrota mais pesada da campanha" },
            nemesis: { label: "Némesis", value: "Dundee", meta: "Saldo agregado 5-7 · Registo 2V 0E 2D" },
            chaotic: { label: "Jogo Mais Caótico", value: "4-4 vs Livingston", meta: "Escolhido pelo volume ofensivo dos dois lados" }
        },
        legacy: {
            rating: {
                label: "Melhor Jogador",
                value: "Kieran Bowie - 7,11 | 34G | 5A | 46(8)J\nRocky Bushiri - 7,11 | 2G | 0A | 42(3)J",
                meta: "Empate na melhor média"
            },
            scorer: { label: "Melhor Marcador", value: "Kieran Bowie", meta: "34G | 46(8)J" }
        },
        identity: {
            specialty: { label: "Especialidade", value: "Output ofensivo" },
            tactical: { label: "Assinatura Tática", value: "Pressão alta, elevado volume ofensivo e finalização" }
        }
    },
    chico: {
        narrative: {
            victim: { label: "Maior Vítima", value: "Dundee Utd", meta: "10 golos marcados" },
            biggestWin: { label: "Maior Vitória", value: "5-2 vs Falkirk\n5-2 vs Dundee Utd", meta: "Duas vitórias máximas em noite de ataque solto" },
            worstLoss: { label: "Pior Derrota", value: "0-5 vs Falkirk", meta: "Derrota mais dura da época" },
            nemesis: { label: "Némesis", value: "Hearts", meta: "Saldo agregado 3-10 · Registo 0V 1E 3D" },
            chaotic: { label: "Jogo Mais Caótico", value: "5-2 vs Falkirk\n5-2 vs Dundee Utd", meta: "Empate técnico entre dois jogos loucos" }
        },
        legacy: {
            rating: { label: "Melhor Jogador", value: "Marcus Dackers", meta: "7,24 | 23G | 5A | 37(1)J" },
            scorer: { label: "Melhor Marcador", value: "Marcus Dackers", meta: "23G | 37(1)J" }
        },
        identity: {
            specialty: { label: "Especialidade", value: "Adaptar-se aos seus atletas" },
            tactical: { label: "Assinatura Tática", value: "Jogo de corredores com avançado alvo" }
        }
    },
    nabais: {
        narrative: {
            victim: { label: "Maior Vítima", value: "Livingston", meta: "8 golos marcados" },
            biggestWin: { label: "Maior Vitória", value: "4-0 vs Hibernian\n4-0 vs Kilmarnock", meta: "Duas exibições máximas sem sofrer" },
            worstLoss: { label: "Pior Derrota", value: "0-5 vs Falkirk", meta: "Queda mais pesada da campanha" },
            nemesis: { label: "Némesis", value: "Falkirk", meta: "Saldo agregado 3-7 · Registo 1V 1E 1D" },
            chaotic: { label: "Jogo Mais Caótico", value: "3-4 vs Dundee Utd", meta: "Jogo partido e decidido nos detalhes" }
        },
        legacy: {
            rating: {
                label: "Melhor Jogador",
                value: "Charlie Reilly - 7,07 | 8G | 7A | 21(7)J\nImari Samuels - 7,07 | 0G | 7A | 21(10)J",
                meta: "Empate na melhor média"
            },
            scorer: { label: "Melhor Marcador", value: "Joe Westley", meta: "12G | 30(5)J" }
        },
        identity: {
            specialty: { label: "Especialidade", value: "Extrair o máximo dos atletas" },
            tactical: { label: "Assinatura Tática", value: "Bolas paradas e utilização das entrelinhas" }
        }
    },
    cardoso: {
        narrative: {
            victim: { label: "Maior Vítima", value: "Dundee Utd", meta: "20 golos marcados" },
            biggestWin: { label: "Maior Vitória", value: "5-0 vs Dundee Utd", meta: "Noite de domínio total no último terço" },
            worstLoss: { label: "Pior Derrota", value: "2-7 vs Hibernian", meta: "Também sofreu um 0-5 frente ao Dundee Utd" },
            nemesis: { label: "Némesis", value: "Hibernian", meta: "Saldo agregado 6-14 · Registo 0V 0E 3D" },
            chaotic: { label: "Jogo Mais Caótico", value: "6-4 vs Dundee Utd", meta: "Dez golos em puro descontrolo ofensivo" }
        },
        legacy: {
            rating: { label: "Melhor Jogador", value: "Cláudio Braga", meta: "7,24 | 23G | 6A | 32(7)J" },
            scorer: { label: "Melhor Marcador", value: "Lawrence Shankland", meta: "25G | 33(2)J" }
        },
        identity: {
            specialty: { label: "Especialidade", value: "Futebol ultra-ofensivo" },
            tactical: { label: "Assinatura Tática", value: "Construção de jogo ofensivo, com ênfase em meio-campo combativo e avançados móveis" }
        }
    },
    hugo: {
        narrative: {
            victim: { label: "Maior Vítima", value: "Kilmarnock", meta: "11 golos marcados" },
            biggestWin: { label: "Maior Vitória", value: "5-0 vs Dundee\n5-0 vs Kilmarnock", meta: "Duas noites perfeitas, sem sofrer" },
            worstLoss: { label: "Pior Derrota", value: "2-5 vs Kilmarnock", meta: "Também perdeu 1-4 frente ao Dundee Utd" },
            nemesis: { label: "Némesis", value: "Aberdeen", meta: "Saldo agregado 9-12 · Registo 0V 2E 2D" },
            chaotic: { label: "Jogo Mais Caótico", value: "2-5 vs Kilmarnock", meta: "Partida aberta e desequilibrada até ao fim" }
        },
        legacy: {
            rating: { label: "Melhor Jogador", value: "Ross MacIver", meta: "7,06 | 26G | 4A | 40(1)J" },
            scorer: { label: "Melhor Marcador", value: "Ross MacIver", meta: "26G | 40(1)J" }
        },
        identity: {
            specialty: { label: "Especialidade", value: "Análise de vídeo" },
            tactical: { label: "Assinatura Tática", value: "Equipas jovens e ajustes táticos constantes" }
        }
    },
    gamy: {
        narrative: {
            victim: { label: "Maior Vítima", value: "Falkirk", meta: "11 golos marcados" },
            biggestWin: { label: "Maior Vitória", value: "4-1 vs Falkirk", meta: "Versão mais letal da equipa em toda a época" },
            worstLoss: { label: "Pior Derrota", value: "0-5 vs Aberdeen\n0-5 vs Hearts", meta: "Noites em que tudo correu ao contrário" },
            nemesis: { label: "Némesis", value: "Aberdeen", meta: "Saldo agregado 4-17 · Registo 1V 0E 4D" },
            chaotic: { label: "Jogo Mais Caótico", value: "4-6 vs Hearts\n3-7 vs Aberdeen", meta: "Dois festivais de golos impossíveis de controlar" }
        },
        legacy: {
            rating: { label: "Melhor Jogador", value: "Julius Eskesen", meta: "7,02 | 9G | 6A | 24(10)J" },
            scorer: {
                label: "Melhor Marcador",
                value: "Julius Eskesen - 9G | 24(10)J\nZac Sapsford - 9G | 33(9)J",
                meta: "Empate no melhor marcador, mas Eskesen tem melhor média de golos por jogo"
            }
        },
        identity: {
            specialty: { label: "Especialidade", value: "Mercado e criatividade" },
            tactical: { label: "Assinatura Tática", value: "Ajustes táticos e formações imprevisíveis" }
        }
    },
    painatal: {
        narrative: {
            victim: { label: "Maior Vítima", value: "Hibernian", meta: "10 golos marcados" },
            biggestWin: { label: "Maior Vitória", value: "2-0 vs Dundee Utd", meta: "Vitória mais limpa da campanha" },
            worstLoss: { label: "Pior Derrota", value: "1-5 vs Hearts\n2-6 vs Hibernian", meta: "O 2-6 aconteceu por duas vezes" },
            nemesis: { label: "Némesis", value: "Hibernian", meta: "Saldo agregado 10-20 · Registo 0V 1E 3D" },
            chaotic: { label: "Jogo Mais Caótico", value: "4-4 vs Hibernian\n2-6 vs Hibernian", meta: "A rivalidade mais descontrolada da época" }
        },
        legacy: {
            rating: { label: "Melhor Jogador", value: "Jeremy Bokila", meta: "6,96 | 15G | 2A | 26(8)J" },
            scorer: { label: "Melhor Marcador", value: "Jeremy Bokila", meta: "15G | 26(8)J" }
        },
        identity: {
            specialty: { label: "Especialidade", value: "Recrutamento no continente Africano" },
            tactical: { label: "Assinatura Tática", value: "Exploração das costas da defesa adversária com velocistas" }
        }
    }
};

const equipas = [
    { nome: "HNK Rijeka", img: "assets/logos/teams/croacia/rijeka.png", rank: 3 },
    { nome: "NK Osijek", img: "assets/logos/teams/croacia/osijek.png", rank: 4 },
    { nome: "NK Lokomotiva", img: "assets/logos/teams/croacia/nk_lokomotiva.png", rank: 5 },
    { nome: "NK Slaven Belupo", img: "assets/logos/teams/croacia/slaven.png", rank: 8 },
    { nome: "NK Istra 1961", img: "assets/logos/teams/croacia/istra.png", rank: 6 },
    { nome: "HNK Gorica", img: "assets/logos/teams/croacia/gorica.png", rank: 9 },
    { nome: "HNK Vukovar", img: "assets/logos/teams/croacia/hnkvukovar.png", rank: 10 },
    { nome: "NK Varaždin", img: "assets/logos/teams/croacia/varazdin.png", rank: 7 }
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

const fixtureMonthNumbers = {
    Jan: "01",
    Fev: "02",
    Mar: "03",
    Abr: "04",
    Mai: "05",
    Jun: "06",
    Jul: "07",
    Ago: "08",
    Set: "09",
    Out: "10",
    Nov: "11",
    Dez: "12"
};

function slugifyFixturePart(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[’']/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function createFixtureKey(date, home, away, year = "2025") {
    let [dayRaw, monthRaw] = String(date || "").trim().split(/\s+/);
    let day = String(Number.parseInt(dayRaw, 10) || 0).padStart(2, "0");
    let month = fixtureMonthNumbers[monthRaw] || "00";
    return `${year}-${month}-${day}-${slugifyFixturePart(home)}-${slugifyFixturePart(away)}`;
}

function createLeagueMatch(month, competition, date, home, score, away) {
    let fixtureKey = createFixtureKey(date, home, away);
    if (score.trim() === "-") {
        return { fixtureKey, month, competition, date, home, away, homeGoals: null, awayGoals: null };
    }

    let [homeGoals, awayGoals] = score.split("-").map((value) => Number(value.trim()));
    return { fixtureKey, month, competition, date, home, away, homeGoals, awayGoals };
}

const scotlandFixtureMonths = ["Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio"];

const scotlandFixtures = [
    createLeagueMatch("Julho", "Taça da Liga", "15 Jul", "Falkirk", "0-0", "Livingston"),
    createLeagueMatch("Agosto", "Premiership", "2 Ago", "Kilmarnock", "3-1", "Livingston"),
    createLeagueMatch("Agosto", "Premiership", "3 Ago", "Dundee", "1-2", "Hibernian"),
    createLeagueMatch("Agosto", "Premiership", "3 Ago", "Falkirk", "1-4", "Dundee Utd"),
    createLeagueMatch("Agosto", "Premiership", "4 Ago", "Hearts", "1-3", "Aberdeen"),
    createLeagueMatch("Agosto", "Premiership", "8 Ago", "Livingston", "2-2", "Falkirk"),
    createLeagueMatch("Agosto", "Premiership", "10 Ago", "Hibernian", "0-1", "Kilmarnock"),
    createLeagueMatch("Agosto", "Premiership", "11 Ago", "Dundee Utd", "1-4", "Hearts"),
    createLeagueMatch("Agosto", "Premiership", "21 Ago", "Aberdeen", "3-1", "Falkirk"),
    createLeagueMatch("Agosto", "Premiership", "23 Ago", "Kilmarnock", "0-0", "Dundee"),
    createLeagueMatch("Agosto", "Premiership", "24 Ago", "Dundee Utd", "0-3", "Aberdeen"),
    createLeagueMatch("Agosto", "Premiership", "25 Ago", "Falkirk", "1-0", "Hibernian"),
    createLeagueMatch("Agosto", "Premiership", "30 Ago", "Livingston", "1-5", "Hearts"),
    createLeagueMatch("Agosto", "Premiership", "31 Ago", "Dundee Utd", "0-1", "Dundee"),
    createLeagueMatch("Agosto", "Taça da Liga", "17 Ago", "Livingston", "4-4", "Hibernian"),
    createLeagueMatch("Agosto", "Taça da Liga", "17 Ago", "Hearts", "2-4", "Dundee Utd"),
    createLeagueMatch("Setembro", "Premiership", "13 Set", "Hibernian", "1-2", "Dundee Utd"),
    createLeagueMatch("Setembro", "Premiership", "15 Set", "Aberdeen", "3-1", "Livingston"),
    createLeagueMatch("Setembro", "Premiership", "26 Set", "Hearts", "2-1", "Falkirk"),
    createLeagueMatch("Setembro", "Premiership", "27 Set", "Dundee Utd", "2-2", "Kilmarnock"),
    createLeagueMatch("Setembro", "Taça da Liga", "19 Set", "Dundee Utd", "0-2", "Aberdeen"),
    createLeagueMatch("Outubro", "Premiership", "4 Out", "Dundee Utd", "1-0", "Livingston"),
    createLeagueMatch("Outubro", "Premiership", "5 Out", "Hearts", "2-7", "Hibernian"),
    createLeagueMatch("Outubro", "Premiership", "5 Out", "Aberdeen", "2-0", "Dundee"),
    createLeagueMatch("Outubro", "Premiership", "17 Out", "Hibernian", "6-2", "Livingston"),
    createLeagueMatch("Outubro", "Premiership", "20 Out", "Kilmarnock", "1-4", "Hearts"),
    createLeagueMatch("Outubro", "Premiership", "25 Out", "Falkirk", "0-1", "Dundee"),
    createLeagueMatch("Outubro", "Premiership", "26 Out", "Aberdeen", "0-0", "Hibernian"),
    createLeagueMatch("Outubro", "Premiership", "29 Out", "Dundee", "2-2", "Livingston"),
    createLeagueMatch("Outubro", "Premiership", "29 Out", "Kilmarnock", "0-0", "Aberdeen"),
    createLeagueMatch("Novembro", "Premiership", "1 Nov", "Hearts", "2-3", "Dundee"),
    createLeagueMatch("Novembro", "Taça da Liga", "2 Nov", "Aberdeen", "3-1", "Kilmarnock"),
    createLeagueMatch("Novembro", "Premiership", "5 Nov", "Falkirk", "5-0", "Kilmarnock"),
    createLeagueMatch("Novembro", "Premiership", "7 Nov", "Falkirk", "1-0", "Livingston"),
    createLeagueMatch("Novembro", "Premiership", "9 Nov", "Hearts", "6-4", "Dundee Utd"),
    createLeagueMatch("Novembro", "Premiership", "21 Nov", "Aberdeen", "0-0", "Hearts"),
    createLeagueMatch("Novembro", "Premiership", "22 Nov", "Hibernian", "2-0", "Dundee"),
    createLeagueMatch("Novembro", "Premiership", "22 Nov", "Dundee Utd", "2-1", "Falkirk"),
    createLeagueMatch("Novembro", "Premiership", "29 Nov", "Kilmarnock", "1-0", "Dundee Utd"),
    createLeagueMatch("Novembro", "Premiership", "30 Nov", "Livingston", "1-1", "Aberdeen"),
    createLeagueMatch("Dezembro", "Premiership", "3 Dez", "Livingston", "2-6", "Hibernian"),
    createLeagueMatch("Dezembro", "Premiership", "3 Dez", "Hearts", "3-0", "Kilmarnock"),
    createLeagueMatch("Dezembro", "Premiership", "6 Dez", "Dundee", "3-1", "Aberdeen"),
    createLeagueMatch("Dezembro", "Premiership", "8 Dez", "Hibernian", "1-1", "Falkirk"),
    createLeagueMatch("Dezembro", "Premiership", "12 Dez", "Livingston", "1-3", "Dundee"),
    createLeagueMatch("Dezembro", "Premiership", "19 Dez", "Kilmarnock", "5-2", "Falkirk"),
    createLeagueMatch("Dezembro", "Premiership", "21 Dez", "Dundee Utd", "2-4", "Hibernian"),
    createLeagueMatch("Dezembro", "Premiership", "27 Dez", "Dundee", "2-2", "Falkirk"),
    createLeagueMatch("Dezembro", "Premiership", "27 Dez", "Hibernian", "3-1", "Hearts"),
    createLeagueMatch("Dezembro", "Premiership", "27 Dez", "Aberdeen", "0-1", "Dundee Utd"),
    createLeagueMatch("Dezembro", "Premiership", "30 Dez", "Falkirk", "1-3", "Hearts"),
    createLeagueMatch("Dezembro", "Premiership", "30 Dez", "Dundee", "4-0", "Kilmarnock"),
    createLeagueMatch("Dezembro", "Premiership", "30 Dez", "Hibernian", "1-2", "Aberdeen"),
    createLeagueMatch("Dezembro", "Premiership", "30 Dez", "Dundee Utd", "0-2", "Livingston"),
    createLeagueMatch("Janeiro", "Premiership", "3 Jan", "Falkirk", "3-3", "Aberdeen"),
    createLeagueMatch("Janeiro", "Premiership", "3 Jan", "Kilmarnock", "0-2", "Hibernian"),
    createLeagueMatch("Janeiro", "Premiership", "3 Jan", "Hearts", "4-1", "Livingston"),
    createLeagueMatch("Janeiro", "Premiership", "3 Jan", "Dundee Utd", "1-1", "Dundee"),
    createLeagueMatch("Janeiro", "Premiership", "6 Jan", "Aberdeen", "1-0", "Kilmarnock"),
    createLeagueMatch("Janeiro", "Premiership", "10 Jan", "Dundee", "1-0", "Hearts"),
    createLeagueMatch("Janeiro", "Premiership", "10 Jan", "Livingston", "0-2", "Kilmarnock"),
    createLeagueMatch("Janeiro", "Premiership", "23 Jan", "Falkirk", "1-3", "Hibernian"),
    createLeagueMatch("Janeiro", "Premiership", "24 Jan", "Aberdeen", "3-0", "Livingston"),
    createLeagueMatch("Janeiro", "Premiership", "30 Jan", "Kilmarnock", "0-3", "Aberdeen"),
    createLeagueMatch("Janeiro", "Premiership", "31 Jan", "Dundee Utd", "2-3", "Hearts"),
    createLeagueMatch("Janeiro", "Taça da Escócia", "17 Jan", "Hibernian", "1-0", "Kilmarnock"),
    createLeagueMatch("Janeiro", "Taça da Escócia", "17 Jan", "Dundee", "3-4", "Dundee Utd"),
    createLeagueMatch("Fevereiro", "Premiership", "4 Fev", "Hibernian", "6-2", "Dundee Utd"),
    createLeagueMatch("Fevereiro", "Premiership", "4 Fev", "Livingston", "1-0", "Falkirk"),
    createLeagueMatch("Fevereiro", "Premiership", "11 Fev", "Falkirk", "5-0", "Dundee"),
    createLeagueMatch("Fevereiro", "Premiership", "11 Fev", "Dundee Utd", "0-5", "Aberdeen"),
    createLeagueMatch("Fevereiro", "Premiership", "11 Fev", "Hearts", "3-4", "Hibernian"),
    createLeagueMatch("Fevereiro", "Premiership", "14 Fev", "Dundee", "3-2", "Livingston"),
    createLeagueMatch("Fevereiro", "Premiership", "14 Fev", "Falkirk", "3-3", "Dundee Utd"),
    createLeagueMatch("Fevereiro", "Premiership", "21 Fev", "Aberdeen", "0-1", "Dundee"),
    createLeagueMatch("Fevereiro", "Premiership", "21 Fev", "Hearts", "2-1", "Falkirk"),
    createLeagueMatch("Fevereiro", "Premiership", "21 Fev", "Kilmarnock", "2-2", "Dundee Utd"),
    createLeagueMatch("Fevereiro", "Premiership", "28 Fev", "Hearts", "0-3", "Aberdeen"),
    createLeagueMatch("Fevereiro", "Premiership", "28 Fev", "Falkirk", "3-0", "Kilmarnock"),
    createLeagueMatch("Fevereiro", "Taça da Escócia", "7 Fev", "Aberdeen", "7-3", "Dundee Utd"),
    createLeagueMatch("Março", "Premiership", "1 Mar", "Dundee", "2-1", "Hibernian"),
    createLeagueMatch("Março", "Premiership", "14 Mar", "Dundee", "2-1", "Dundee Utd"),
    createLeagueMatch("Março", "Premiership", "14 Mar", "Kilmarnock", "1-1", "Hearts"),
    createLeagueMatch("Março", "Premiership", "15 Mar", "Hibernian", "4-2", "Livingston"),
    createLeagueMatch("Março", "Premiership", "16 Mar", "Aberdeen", "3-3", "Falkirk"),
    createLeagueMatch("Março", "Premiership", "21 Mar", "Hearts", "1-1", "Dundee"),
    createLeagueMatch("Março", "Premiership", "21 Mar", "Livingston", "1-0", "Kilmarnock"),
    createLeagueMatch("Abril", "Premiership", "3 Abr", "Hibernian", "2-1", "Kilmarnock"),
    createLeagueMatch("Abril", "Premiership", "6 Abr", "Livingston", "2-2", "Hearts"),
    createLeagueMatch("Abril", "Premiership", "11 Abr", "Kilmarnock", "0-1", "Dundee"),
    createLeagueMatch("Abril", "Premiership", "11 Abr", "Aberdeen", "3-2", "Hibernian"),
    createLeagueMatch("Abril", "Premiership", "11 Abr", "Dundee Utd", "3-1", "Livingston"),
    createLeagueMatch("Abril", "Premiership", "25 Abr", "Dundee Utd", "0-5", "Hearts"),
    createLeagueMatch("Abril", "Premiership", "25 Abr", "Livingston", "1-3", "Kilmarnock"),
    createLeagueMatch("Abril", "Premiership", "26 Abr", "Hibernian", "0-4", "Dundee"),
    createLeagueMatch("Abril", "Conference League", "9 Abr", "Aberdeen", "1-2", "Hibernian"),
    createLeagueMatch("Abril", "Conference League", "16 Abr", "Hibernian", "2-4", "Aberdeen"),
    createLeagueMatch("Abril", "Taça da Escócia", "21 Abr", "Falkirk", "2-3", "Aberdeen"),
    createLeagueMatch("Maio", "Premiership - Top", "3 Mai", "Hibernian", "4-3", "Aberdeen"),
    createLeagueMatch("Maio", "Premiership - Top", "10 Mai", "Dundee", "2-2", "Aberdeen"),
    createLeagueMatch("Maio", "Premiership - Bottom", "2 Mai", "Kilmarnock", "1-1", "Falkirk"),
    createLeagueMatch("Maio", "Premiership - Bottom", "2 Mai", "Livingston", "0-2", "Dundee Utd"),
    createLeagueMatch("Maio", "Premiership - Bottom", "9 Mai", "Falkirk", "2-1", "Hearts"),
    createLeagueMatch("Maio", "Premiership - Bottom", "9 Mai", "Kilmarnock", "5-2", "Dundee Utd"),
    createLeagueMatch("Maio", "Premiership - Bottom", "13 Mai", "Hearts", "4-2", "Livingston"),
    createLeagueMatch("Maio", "Premiership - Bottom", "13 Mai", "Dundee Utd", "2-3", "Falkirk"),
    createLeagueMatch("Maio", "Premiership - Bottom", "16 Mai", "Falkirk", "4-2", "Livingston"),
    createLeagueMatch("Maio", "Premiership - Bottom", "16 Mai", "Hearts", "2-1", "Kilmarnock")
];

const scotlandLeagueMerits = {
    awards: [
        { label: "Melhor jogador da liga", name: "Cláudio Braga", team: "Hearts", meta: "7,28 média · 8 clM · 8 MeC" },
        { label: "Melhor marcador", name: "Kieron Bowie", team: "Hibernian", meta: "27 golos · 37 presenças" },
        { label: "Melhor assistente", name: "Martin Boyle", team: "Hibernian", meta: "13 assistências" },
        { label: "Melhor defesa", name: "Auston Trusty", team: "Celtic", meta: "Referência defensiva" },
        { label: "Melhor médio", name: "Mikey Moore", team: "Rangers", meta: "Motor do meio-campo" },
        { label: "Melhor guarda-redes", name: "Dimitar Mitov", team: "Aberdeen", meta: "Guarda-redes do ano" }
    ],
    teamOfYear: [
        { name: "Dimitar Mitov", number: 1, role: "GR", team: "Aberdeen", x: 92, y: 50 },
        { name: "Rocky Bushiri", number: 33, role: "DC", team: "Hibernian", x: 73, y: 30 },
        { name: "Auston Trusty", number: 6, role: "DC", team: "Celtic", x: 76, y: 50 },
        { name: "Mats Knoester", number: 5, role: "DC", team: "Aberdeen", x: 73, y: 70 },
        { name: "Martin Boyle", number: 10, role: "MD", team: "Hibernian", x: 50, y: 20 },
        { name: "Topi Keskinen", number: 81, role: "MC", team: "Aberdeen", x: 48, y: 40 },
        { name: "Kieran Dowell", number: 20, role: "MC", team: "Rangers", x: 48, y: 60 },
        { name: "Mikey Moore", number: 47, role: "ME", team: "Rangers", x: 50, y: 80 },
        { name: "Youssef Chermiti", number: 9, role: "PL", team: "Rangers", x: 22, y: 30 },
        { name: "Kieron Bowie", number: 9, role: "PL", team: "Hibernian", x: 18, y: 50 },
        { name: "Cláudio Braga", number: 10, role: "PL", team: "Hearts", x: 22, y: 70 }
    ]
};

const scotlandSideStats = [
    {
        title: "Golos Esperados (xG) a Favor",
        columns: ["Pos", "Equipa", "xGM", "Jgs", "Gls", "Pos. Liga"],
        rows: [
            { pos: "1", team: "Aberdeen", xgm: "86,23", jgs: "38", gls: "74", leaguePos: "3" },
            { pos: "2", team: "Hibernian", xgm: "74,49", jgs: "38", gls: "85", leaguePos: "2" },
            { pos: "3", team: "Dundee", xgm: "67,72", jgs: "38", gls: "61", leaguePos: "4" },
            { pos: "4º", team: "Rangers", xgm: "67,59", jgs: "38", gls: "84", leaguePos: "1" },
            { pos: "5º", team: "Celtic", xgm: "60,33", jgs: "38", gls: "70", leaguePos: "5" },
            { pos: "6º", team: "Falkirk", xgm: "59,80", jgs: "38", gls: "65", leaguePos: "8" },
            { pos: "7º", team: "Hearts", xgm: "56,87", jgs: "38", gls: "76", leaguePos: "7" },
            { pos: "8º", team: "Kilmarnock", xgm: "54,06", jgs: "38", gls: "51", leaguePos: "9" },
            { pos: "9º", team: "Dundee Utd", xgm: "51,45", jgs: "38", gls: "60", leaguePos: "10" },
            { pos: "10º", team: "St. Mirren", xgm: "48,86", jgs: "38", gls: "52", leaguePos: "6" },
            { pos: "11º", team: "Livingston", xgm: "33,64", jgs: "38", gls: "41", leaguePos: "12" },
            { pos: "12º", team: "Motherwell", xgm: "30,34", jgs: "38", gls: "30", leaguePos: "11" }
        ]
    },
    {
        title: "Golos",
        columns: ["Pos", "Equipa", "Gls", "Jgs", "Gl/Jog", "Pos. Liga"],
        rows: [
            { pos: "1", team: "Hibernian", gls: "85", jgs: "38", perGame: "2,24", leaguePos: "2" },
            { pos: "2", team: "Rangers", gls: "84", jgs: "38", perGame: "2,21", leaguePos: "1" },
            { pos: "3", team: "Hearts", gls: "76", jgs: "38", perGame: "2,00", leaguePos: "7" },
            { pos: "4º", team: "Aberdeen", gls: "74", jgs: "38", perGame: "1,95", leaguePos: "3" },
            { pos: "5º", team: "Celtic", gls: "70", jgs: "38", perGame: "1,84", leaguePos: "5" },
            { pos: "6º", team: "Falkirk", gls: "65", jgs: "38", perGame: "1,71", leaguePos: "8" },
            { pos: "7º", team: "Dundee", gls: "61", jgs: "38", perGame: "1,61", leaguePos: "4" },
            { pos: "8º", team: "Dundee Utd", gls: "60", jgs: "38", perGame: "1,58", leaguePos: "10" },
            { pos: "9º", team: "St. Mirren", gls: "52", jgs: "38", perGame: "1,37", leaguePos: "6" },
            { pos: "10º", team: "Kilmarnock", gls: "51", jgs: "38", perGame: "1,34", leaguePos: "9" },
            { pos: "11º", team: "Livingston", gls: "41", jgs: "38", perGame: "1,08", leaguePos: "12" },
            { pos: "12º", team: "Motherwell", gls: "30", jgs: "38", perGame: "0,79", leaguePos: "11" }
        ]
    }
];

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
    { pos: 1, inf: "--", equipa: "HNK Rijeka", j: 5, v: 3, e: 1, d: 1, gm: 8, gs: 5, dg: 3, pts: 10, form: ["V", "E", "V", "V", "D"] },
    { pos: 2, inf: "--", equipa: "Dinamo Zagreb", j: 5, v: 2, e: 3, d: 0, gm: 6, gs: 2, dg: 4, pts: 9, form: ["E", "E", "V", "V", "E"] },
    { pos: 3, inf: "↑", equipa: "HNK Vukovar", j: 5, v: 3, e: 0, d: 2, gm: 12, gs: 9, dg: 3, pts: 9, form: ["V", "D", "D", "V", "V"] },
    { pos: 4, inf: "↓", equipa: "NK Varaždin", j: 5, v: 3, e: 0, d: 2, gm: 12, gs: 9, dg: 3, pts: 9, form: ["D", "V", "V", "D", "V"] },
    { pos: 5, inf: "--", equipa: "Hajduk Split", j: 5, v: 1, e: 3, d: 1, gm: 7, gs: 8, dg: -1, pts: 6, form: ["V", "E", "E", "D", "E"] },
    { pos: 6, inf: "--", equipa: "NK Osijek", j: 5, v: 1, e: 2, d: 2, gm: 4, gs: 5, dg: -1, pts: 5, form: ["E", "V", "D", "D", "E"] },
    { pos: 7, inf: "--", equipa: "NK Slaven Belupo", j: 5, v: 1, e: 2, d: 2, gm: 6, gs: 10, dg: -4, pts: 5, form: ["D", "E", "D", "V", "E"] },
    { pos: 8, inf: "--", equipa: "NK Istra 1961", j: 5, v: 0, e: 4, d: 1, gm: 5, gs: 6, dg: -1, pts: 4, form: ["E", "E", "E", "D", "E"] },
    { pos: 9, inf: "--", equipa: "NK Lokomotiva", j: 5, v: 0, e: 4, d: 1, gm: 7, gs: 9, dg: -2, pts: 4, form: ["D", "E", "E", "E", "E"] },
    { pos: 10, inf: "--", equipa: "HNK Gorica", j: 5, v: 0, e: 3, d: 2, gm: 4, gs: 8, dg: -4, pts: 3, form: ["E", "D", "E", "E", "D"] }
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

const croatiaFixtures = [
    createLeagueMatch("Agosto", "HNL", "2 Ago", "Dinamo Zagreb", "0-0", "NK Istra 1961"),
    createLeagueMatch("Agosto", "HNL", "2 Ago", "HNK Gorica", "1-1", "NK Osijek"),
    createLeagueMatch("Agosto", "HNL", "2 Ago", "Hajduk Split", "3-2", "NK Varaždin"),
    createLeagueMatch("Agosto", "HNL", "2 Ago", "HNK Rijeka", "3-1", "NK Lokomotiva"),
    createLeagueMatch("Agosto", "HNL", "2 Ago", "HNK Vukovar", "4-0", "NK Slaven Belupo"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Istra 1961", "1-1", "HNK Rijeka"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Lokomotiva", "2-2", "Hajduk Split"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Osijek", "2-1", "HNK Vukovar"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Slaven Belupo", "1-1", "Dinamo Zagreb"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Varaždin", "3-0", "HNK Gorica"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "Dinamo Zagreb", "1-0", "NK Osijek"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "HNK Gorica", "1-1", "Hajduk Split"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "NK Istra 1961", "2-2", "NK Lokomotiva"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "HNK Rijeka", "2-1", "NK Slaven Belupo"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "HNK Vukovar", "2-5", "NK Varaždin"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "Hajduk Split", "1-3", "HNK Vukovar"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "NK Lokomotiva", "1-1", "HNK Gorica"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "NK Osijek", "1-2", "HNK Rijeka"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "NK Slaven Belupo", "3-2", "NK Istra 1961"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "NK Varaždin", "1-4", "Dinamo Zagreb"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "Dinamo Zagreb", "0-0", "Hajduk Split"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "NK Istra 1961", "0-0", "NK Osijek"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "HNK Rijeka", "0-1", "NK Varaždin"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "NK Slaven Belupo", "1-1", "NK Lokomotiva"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "HNK Vukovar", "2-1", "HNK Gorica"),
    createLeagueMatch("Setembro", "HNL", "13 Set", "HNK Gorica", "-", "Dinamo Zagreb"),
    createLeagueMatch("Setembro", "HNL", "13 Set", "Hajduk Split", "-", "HNK Rijeka"),
    createLeagueMatch("Setembro", "HNL", "13 Set", "NK Lokomotiva", "-", "HNK Vukovar"),
    createLeagueMatch("Setembro", "HNL", "13 Set", "NK Osijek", "-", "NK Slaven Belupo"),
    createLeagueMatch("Setembro", "HNL", "13 Set", "NK Varaždin", "-", "NK Istra 1961"),
    createLeagueMatch("Setembro", "HNL", "20 Set", "Dinamo Zagreb", "-", "HNK Vukovar"),
    createLeagueMatch("Setembro", "HNL", "20 Set", "NK Istra 1961", "-", "Hajduk Split"),
    createLeagueMatch("Setembro", "HNL", "20 Set", "NK Osijek", "-", "NK Lokomotiva"),
    createLeagueMatch("Setembro", "HNL", "20 Set", "HNK Rijeka", "-", "HNK Gorica"),
    createLeagueMatch("Setembro", "HNL", "20 Set", "NK Slaven Belupo", "-", "NK Varaždin"),
    createLeagueMatch("Setembro", "HNL", "27 Set", "HNK Gorica", "-", "NK Istra 1961"),
    createLeagueMatch("Setembro", "HNL", "27 Set", "Hajduk Split", "-", "NK Slaven Belupo"),
    createLeagueMatch("Setembro", "HNL", "27 Set", "NK Lokomotiva", "-", "Dinamo Zagreb"),
    createLeagueMatch("Setembro", "HNL", "27 Set", "NK Varaždin", "-", "NK Osijek"),
    createLeagueMatch("Setembro", "HNL", "27 Set", "HNK Vukovar", "-", "HNK Rijeka"),
    createLeagueMatch("Outubro", "HNL", "4 Out", "NK Istra 1961", "-", "HNK Vukovar"),
    createLeagueMatch("Outubro", "HNL", "4 Out", "NK Lokomotiva", "-", "NK Varaždin"),
    createLeagueMatch("Outubro", "HNL", "4 Out", "NK Osijek", "-", "Hajduk Split"),
    createLeagueMatch("Outubro", "HNL", "4 Out", "HNK Rijeka", "-", "Dinamo Zagreb"),
    createLeagueMatch("Outubro", "HNL", "4 Out", "NK Slaven Belupo", "-", "HNK Gorica"),
    createLeagueMatch("Outubro", "HNL", "18 Out", "Dinamo Zagreb", "-", "NK Slaven Belupo"),
    createLeagueMatch("Outubro", "HNL", "18 Out", "HNK Gorica", "-", "NK Varaždin"),
    createLeagueMatch("Outubro", "HNL", "18 Out", "Hajduk Split", "-", "NK Lokomotiva"),
    createLeagueMatch("Outubro", "HNL", "18 Out", "HNK Rijeka", "-", "NK Istra 1961"),
    createLeagueMatch("Outubro", "HNL", "18 Out", "HNK Vukovar", "-", "NK Osijek"),
    createLeagueMatch("Outubro", "HNL", "25 Out", "NK Istra 1961", "-", "Dinamo Zagreb"),
    createLeagueMatch("Outubro", "HNL", "25 Out", "NK Lokomotiva", "-", "HNK Rijeka"),
    createLeagueMatch("Outubro", "HNL", "25 Out", "NK Osijek", "-", "HNK Gorica"),
    createLeagueMatch("Outubro", "HNL", "25 Out", "NK Slaven Belupo", "-", "HNK Vukovar"),
    createLeagueMatch("Outubro", "HNL", "25 Out", "NK Varaždin", "-", "Hajduk Split"),
    createLeagueMatch("Novembro", "HNL", "1 Nov", "Hajduk Split", "-", "HNK Gorica"),
    createLeagueMatch("Novembro", "HNL", "1 Nov", "NK Lokomotiva", "-", "NK Istra 1961"),
    createLeagueMatch("Novembro", "HNL", "1 Nov", "NK Osijek", "-", "Dinamo Zagreb"),
    createLeagueMatch("Novembro", "HNL", "1 Nov", "NK Slaven Belupo", "-", "HNK Rijeka"),
    createLeagueMatch("Novembro", "HNL", "1 Nov", "NK Varaždin", "-", "HNK Vukovar"),
    createLeagueMatch("Novembro", "HNL", "8 Nov", "Dinamo Zagreb", "-", "NK Varaždin"),
    createLeagueMatch("Novembro", "HNL", "8 Nov", "HNK Gorica", "-", "NK Lokomotiva"),
    createLeagueMatch("Novembro", "HNL", "8 Nov", "NK Istra 1961", "-", "NK Slaven Belupo"),
    createLeagueMatch("Novembro", "HNL", "8 Nov", "HNK Rijeka", "-", "NK Osijek"),
    createLeagueMatch("Novembro", "HNL", "8 Nov", "HNK Vukovar", "-", "Hajduk Split"),
    createLeagueMatch("Novembro", "HNL", "22 Nov", "HNK Gorica", "-", "HNK Vukovar"),
    createLeagueMatch("Novembro", "HNL", "22 Nov", "Hajduk Split", "-", "Dinamo Zagreb"),
    createLeagueMatch("Novembro", "HNL", "22 Nov", "NK Lokomotiva", "-", "NK Slaven Belupo"),
    createLeagueMatch("Novembro", "HNL", "22 Nov", "NK Osijek", "-", "NK Istra 1961"),
    createLeagueMatch("Novembro", "HNL", "22 Nov", "NK Varaždin", "-", "HNK Rijeka"),
    createLeagueMatch("Novembro", "HNL", "29 Nov", "Dinamo Zagreb", "-", "HNK Gorica"),
    createLeagueMatch("Novembro", "HNL", "29 Nov", "NK Istra 1961", "-", "NK Varaždin"),
    createLeagueMatch("Novembro", "HNL", "29 Nov", "HNK Rijeka", "-", "Hajduk Split"),
    createLeagueMatch("Novembro", "HNL", "29 Nov", "NK Slaven Belupo", "-", "NK Osijek"),
    createLeagueMatch("Novembro", "HNL", "29 Nov", "HNK Vukovar", "-", "NK Lokomotiva"),
    createLeagueMatch("Dezembro", "HNL", "6 Dez", "HNK Gorica", "-", "HNK Rijeka"),
    createLeagueMatch("Dezembro", "HNL", "6 Dez", "Hajduk Split", "-", "NK Istra 1961"),
    createLeagueMatch("Dezembro", "HNL", "6 Dez", "NK Lokomotiva", "-", "NK Osijek"),
    createLeagueMatch("Dezembro", "HNL", "6 Dez", "NK Varaždin", "-", "NK Slaven Belupo"),
    createLeagueMatch("Dezembro", "HNL", "6 Dez", "HNK Vukovar", "-", "Dinamo Zagreb"),
    createLeagueMatch("Dezembro", "HNL", "13 Dez", "Dinamo Zagreb", "-", "NK Lokomotiva"),
    createLeagueMatch("Dezembro", "HNL", "13 Dez", "NK Istra 1961", "-", "HNK Gorica"),
    createLeagueMatch("Dezembro", "HNL", "13 Dez", "NK Osijek", "-", "NK Varaždin"),
    createLeagueMatch("Dezembro", "HNL", "13 Dez", "HNK Rijeka", "-", "HNK Vukovar"),
    createLeagueMatch("Dezembro", "HNL", "13 Dez", "NK Slaven Belupo", "-", "Hajduk Split"),
    createLeagueMatch("Dezembro", "HNL", "20 Dez", "Dinamo Zagreb", "-", "HNK Rijeka"),
    createLeagueMatch("Dezembro", "HNL", "20 Dez", "HNK Gorica", "-", "NK Slaven Belupo"),
    createLeagueMatch("Dezembro", "HNL", "20 Dez", "Hajduk Split", "-", "NK Osijek"),
    createLeagueMatch("Dezembro", "HNL", "20 Dez", "NK Varaždin", "-", "NK Lokomotiva"),
    createLeagueMatch("Dezembro", "HNL", "20 Dez", "HNK Vukovar", "-", "NK Istra 1961"),
    createLeagueMatch("Janeiro", "HNL", "24 Jan", "NK Istra 1961", "-", "HNK Rijeka"),
    createLeagueMatch("Janeiro", "HNL", "24 Jan", "NK Lokomotiva", "-", "Hajduk Split"),
    createLeagueMatch("Janeiro", "HNL", "24 Jan", "NK Osijek", "-", "HNK Vukovar"),
    createLeagueMatch("Janeiro", "HNL", "24 Jan", "NK Slaven Belupo", "-", "Dinamo Zagreb"),
    createLeagueMatch("Janeiro", "HNL", "24 Jan", "NK Varaždin", "-", "HNK Gorica"),
    createLeagueMatch("Janeiro", "HNL", "31 Jan", "Dinamo Zagreb", "-", "NK Istra 1961"),
    createLeagueMatch("Janeiro", "HNL", "31 Jan", "HNK Gorica", "-", "NK Osijek"),
    createLeagueMatch("Janeiro", "HNL", "31 Jan", "Hajduk Split", "-", "NK Varaždin"),
    createLeagueMatch("Janeiro", "HNL", "31 Jan", "HNK Rijeka", "-", "NK Lokomotiva"),
    createLeagueMatch("Janeiro", "HNL", "31 Jan", "HNK Vukovar", "-", "NK Slaven Belupo"),
    createLeagueMatch("Fevereiro", "HNL", "7 Fev", "Dinamo Zagreb", "-", "NK Osijek"),
    createLeagueMatch("Fevereiro", "HNL", "7 Fev", "HNK Gorica", "-", "Hajduk Split"),
    createLeagueMatch("Fevereiro", "HNL", "7 Fev", "NK Istra 1961", "-", "NK Lokomotiva"),
    createLeagueMatch("Fevereiro", "HNL", "7 Fev", "HNK Rijeka", "-", "NK Slaven Belupo"),
    createLeagueMatch("Fevereiro", "HNL", "7 Fev", "HNK Vukovar", "-", "NK Varaždin"),
    createLeagueMatch("Fevereiro", "HNL", "14 Fev", "Hajduk Split", "-", "HNK Vukovar"),
    createLeagueMatch("Fevereiro", "HNL", "14 Fev", "NK Lokomotiva", "-", "HNK Gorica"),
    createLeagueMatch("Fevereiro", "HNL", "14 Fev", "NK Osijek", "-", "HNK Rijeka"),
    createLeagueMatch("Fevereiro", "HNL", "14 Fev", "NK Slaven Belupo", "-", "NK Istra 1961"),
    createLeagueMatch("Fevereiro", "HNL", "14 Fev", "NK Varaždin", "-", "Dinamo Zagreb"),
    createLeagueMatch("Fevereiro", "HNL", "21 Fev", "Dinamo Zagreb", "-", "Hajduk Split"),
    createLeagueMatch("Fevereiro", "HNL", "21 Fev", "NK Istra 1961", "-", "NK Osijek"),
    createLeagueMatch("Fevereiro", "HNL", "21 Fev", "HNK Rijeka", "-", "NK Varaždin"),
    createLeagueMatch("Fevereiro", "HNL", "21 Fev", "NK Slaven Belupo", "-", "NK Lokomotiva"),
    createLeagueMatch("Fevereiro", "HNL", "21 Fev", "HNK Vukovar", "-", "HNK Gorica"),
    createLeagueMatch("Fevereiro", "HNL", "28 Fev", "HNK Gorica", "-", "Dinamo Zagreb"),
    createLeagueMatch("Fevereiro", "HNL", "28 Fev", "Hajduk Split", "-", "HNK Rijeka"),
    createLeagueMatch("Fevereiro", "HNL", "28 Fev", "NK Lokomotiva", "-", "HNK Vukovar"),
    createLeagueMatch("Fevereiro", "HNL", "28 Fev", "NK Osijek", "-", "NK Slaven Belupo"),
    createLeagueMatch("Fevereiro", "HNL", "28 Fev", "NK Varaždin", "-", "NK Istra 1961"),
    createLeagueMatch("Março", "HNL", "7 Mar", "Dinamo Zagreb", "-", "HNK Vukovar"),
    createLeagueMatch("Março", "HNL", "7 Mar", "NK Istra 1961", "-", "Hajduk Split"),
    createLeagueMatch("Março", "HNL", "7 Mar", "NK Osijek", "-", "NK Lokomotiva"),
    createLeagueMatch("Março", "HNL", "7 Mar", "HNK Rijeka", "-", "HNK Gorica"),
    createLeagueMatch("Março", "HNL", "7 Mar", "NK Slaven Belupo", "-", "NK Varaždin"),
    createLeagueMatch("Março", "HNL", "14 Mar", "HNK Gorica", "-", "NK Istra 1961"),
    createLeagueMatch("Março", "HNL", "14 Mar", "Hajduk Split", "-", "NK Slaven Belupo"),
    createLeagueMatch("Março", "HNL", "14 Mar", "NK Lokomotiva", "-", "Dinamo Zagreb"),
    createLeagueMatch("Março", "HNL", "14 Mar", "NK Varaždin", "-", "NK Osijek"),
    createLeagueMatch("Março", "HNL", "14 Mar", "HNK Vukovar", "-", "HNK Rijeka"),
    createLeagueMatch("Março", "HNL", "21 Mar", "NK Istra 1961", "-", "HNK Vukovar"),
    createLeagueMatch("Março", "HNL", "21 Mar", "NK Lokomotiva", "-", "NK Varaždin"),
    createLeagueMatch("Março", "HNL", "21 Mar", "NK Osijek", "-", "Hajduk Split"),
    createLeagueMatch("Março", "HNL", "21 Mar", "HNK Rijeka", "-", "Dinamo Zagreb"),
    createLeagueMatch("Março", "HNL", "21 Mar", "NK Slaven Belupo", "-", "HNK Gorica"),
    createLeagueMatch("Abril", "HNL", "4 Abr", "Dinamo Zagreb", "-", "NK Slaven Belupo"),
    createLeagueMatch("Abril", "HNL", "4 Abr", "HNK Gorica", "-", "NK Varaždin"),
    createLeagueMatch("Abril", "HNL", "4 Abr", "Hajduk Split", "-", "NK Lokomotiva"),
    createLeagueMatch("Abril", "HNL", "4 Abr", "HNK Rijeka", "-", "NK Istra 1961"),
    createLeagueMatch("Abril", "HNL", "4 Abr", "HNK Vukovar", "-", "NK Osijek"),
    createLeagueMatch("Abril", "HNL", "11 Abr", "NK Istra 1961", "-", "Dinamo Zagreb"),
    createLeagueMatch("Abril", "HNL", "11 Abr", "NK Lokomotiva", "-", "HNK Rijeka"),
    createLeagueMatch("Abril", "HNL", "11 Abr", "NK Osijek", "-", "HNK Gorica"),
    createLeagueMatch("Abril", "HNL", "11 Abr", "NK Slaven Belupo", "-", "HNK Vukovar"),
    createLeagueMatch("Abril", "HNL", "11 Abr", "NK Varaždin", "-", "Hajduk Split"),
    createLeagueMatch("Abril", "HNL", "18 Abr", "Hajduk Split", "-", "HNK Gorica"),
    createLeagueMatch("Abril", "HNL", "18 Abr", "NK Lokomotiva", "-", "NK Istra 1961"),
    createLeagueMatch("Abril", "HNL", "18 Abr", "NK Osijek", "-", "Dinamo Zagreb"),
    createLeagueMatch("Abril", "HNL", "18 Abr", "NK Slaven Belupo", "-", "HNK Rijeka"),
    createLeagueMatch("Abril", "HNL", "18 Abr", "NK Varaždin", "-", "HNK Vukovar"),
    createLeagueMatch("Abril", "HNL", "22 Abr", "Dinamo Zagreb", "-", "NK Varaždin"),
    createLeagueMatch("Abril", "HNL", "22 Abr", "HNK Gorica", "-", "NK Lokomotiva"),
    createLeagueMatch("Abril", "HNL", "22 Abr", "NK Istra 1961", "-", "NK Slaven Belupo"),
    createLeagueMatch("Abril", "HNL", "22 Abr", "HNK Rijeka", "-", "NK Osijek"),
    createLeagueMatch("Abril", "HNL", "22 Abr", "HNK Vukovar", "-", "Hajduk Split"),
    createLeagueMatch("Abril", "HNL", "25 Abr", "HNK Gorica", "-", "HNK Vukovar"),
    createLeagueMatch("Abril", "HNL", "25 Abr", "Hajduk Split", "-", "Dinamo Zagreb"),
    createLeagueMatch("Abril", "HNL", "25 Abr", "NK Lokomotiva", "-", "NK Slaven Belupo"),
    createLeagueMatch("Abril", "HNL", "25 Abr", "NK Osijek", "-", "NK Istra 1961"),
    createLeagueMatch("Abril", "HNL", "25 Abr", "NK Varaždin", "-", "HNK Rijeka"),
    createLeagueMatch("Maio", "HNL", "2 Mai", "Dinamo Zagreb", "-", "HNK Gorica"),
    createLeagueMatch("Maio", "HNL", "2 Mai", "NK Istra 1961", "-", "NK Varaždin"),
    createLeagueMatch("Maio", "HNL", "2 Mai", "HNK Rijeka", "-", "Hajduk Split"),
    createLeagueMatch("Maio", "HNL", "2 Mai", "NK Slaven Belupo", "-", "NK Osijek"),
    createLeagueMatch("Maio", "HNL", "2 Mai", "HNK Vukovar", "-", "NK Lokomotiva"),
    createLeagueMatch("Maio", "HNL", "9 Mai", "HNK Gorica", "-", "HNK Rijeka"),
    createLeagueMatch("Maio", "HNL", "9 Mai", "Hajduk Split", "-", "NK Istra 1961"),
    createLeagueMatch("Maio", "HNL", "9 Mai", "NK Lokomotiva", "-", "NK Osijek"),
    createLeagueMatch("Maio", "HNL", "9 Mai", "NK Varaždin", "-", "NK Slaven Belupo"),
    createLeagueMatch("Maio", "HNL", "9 Mai", "HNK Vukovar", "-", "Dinamo Zagreb"),
    createLeagueMatch("Maio", "HNL", "16 Mai", "Dinamo Zagreb", "-", "NK Lokomotiva"),
    createLeagueMatch("Maio", "HNL", "16 Mai", "NK Istra 1961", "-", "HNK Gorica"),
    createLeagueMatch("Maio", "HNL", "16 Mai", "NK Osijek", "-", "NK Varaždin"),
    createLeagueMatch("Maio", "HNL", "16 Mai", "HNK Rijeka", "-", "HNK Vukovar"),
    createLeagueMatch("Maio", "HNL", "16 Mai", "NK Slaven Belupo", "-", "Hajduk Split"),
    createLeagueMatch("Maio", "HNL", "23 Mai", "Dinamo Zagreb", "-", "HNK Rijeka"),
    createLeagueMatch("Maio", "HNL", "23 Mai", "HNK Gorica", "-", "NK Slaven Belupo"),
    createLeagueMatch("Maio", "HNL", "23 Mai", "Hajduk Split", "-", "NK Osijek"),
    createLeagueMatch("Maio", "HNL", "23 Mai", "NK Varaždin", "-", "NK Lokomotiva"),
    createLeagueMatch("Maio", "HNL", "23 Mai", "HNK Vukovar", "-", "NK Istra 1961")
];

const croatiaRoundOneReports = [
    {
        fixtureKey: "2025-08-02-dinamo-zagreb-nk-istra-1961",
        date: "Sábado 2 de Agosto de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Franko Kolić",
        rating: "7,65",
        coaches: { home: "M. Kovačević", away: "João Pedro Rato" },
        formations: {
            home: {
                name: "4-3-3 DM",
                players: [
                    [{ number: "9", name: "Dion Beljo", rating: "6,3", pos: "AvR" }],
                    [{ number: "10", name: "Vidović", rating: "6,6", pos: "EAI" }, { number: "30", name: "Topić", rating: "6,3", pos: "EAI" }],
                    [{ number: "27", name: "Mišić", rating: "6,8", pos: "MC" }, { number: "14", name: "Soldo", rating: "6,8", pos: "MC" }],
                    [{ number: "4", name: "Bennacer", rating: "7,2", pos: "CJR" }],
                    [{ number: "22", name: "Pérez Vinlöf", rating: "6,8", pos: "AI" }, { number: "26", name: "McKenna", rating: "6,9", pos: "CC" }, { number: "36", name: "Domínguez", rating: "6,7", pos: "CC" }, { number: "25", name: "Valinčić", rating: "6,5", pos: "AI" }],
                    [{ number: "40", name: "Livaković", rating: "7,1", pos: "GR" }]
                ]
            },
            away: {
                name: "4-2-3-1",
                players: [
                    [{ number: "9", name: "Prevljak", rating: "6,4", pos: "AAE" }],
                    [{ number: "11", name: "Goričan", rating: "6,5", pos: "AA" }, { number: "17", name: "Frederiksen", rating: "6,3", pos: "SA" }, { number: "7", name: "Rozić", rating: "6,3", pos: "Ex" }],
                    [{ number: "10", name: "Lončar", rating: "7,0", pos: "MAA" }, { number: "5", name: "Radošević", rating: "7,0", pos: "MD" }],
                    [{ number: "26", name: "Heister", rating: "6,4", pos: "AI" }, { number: "8", name: "Maurić", rating: "6,8", pos: "CC" }, { number: "3", name: "Nasraoui", rating: "6,6", pos: "DC" }, { number: "97", name: "Kadusić", rating: "6,6", pos: "AI" }],
                    [{ number: "1", name: "Kolić", rating: "7,7", pos: "GR" }]
                ]
            }
        },
        events: { home: [], away: [] },
        stats: [
            { label: "Posse", home: "49%", away: "51%" },
            { label: "Remates", home: "17", away: "8" },
            { label: "Remates à Baliza", home: "8", away: "5" },
            { label: "xG", home: "1,01", away: "0,21" },
            { label: "PADPAD", home: "26,94", away: "28,08" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "12", away: "6" },
            { label: "Passes Completados", home: "90%", away: "88%" },
            { label: "Cruzamentos Completados", home: "18%", away: "13%" },
            { label: "Faltas", home: "8", away: "9" },
            { label: "Cartões amarelos", home: "0", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "119", away: "119" },
            { label: "Classificação Média", home: "6,7", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-08-02-hnk-gorica-nk-osijek",
        date: "Sábado 2 de Agosto de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Tempestuoso",
        playerOfMatch: "Jakov Filipović",
        rating: "7,68",
        coaches: { home: "Miguel Cardoso", away: "Gamy Chambelito" },
        formations: {
            home: {
                name: "4-3-3 DM",
                players: [
                    [{ number: "18", name: "Fiolić", rating: "6,2", pos: "Ex" }, { number: "24", name: "Pavičić", rating: "6,7", pos: "MO" }, { number: "20", name: "Vrzić", rating: "6,4", pos: "Ex" }],
                    [{ number: "10", name: "Pršir", rating: "6,6", pos: "CJA" }, { number: "7", name: "Bakić", rating: "6,4", pos: "ME" }],
                    [{ number: "36", name: "Kavelj", rating: "6,5", pos: "CJR" }],
                    [{ number: "19", name: "Čabraja", rating: "6,2", pos: "AI" }, { number: "4", name: "J. Filipović", rating: "7,7", pos: "DC", goal: true }, { number: "45", name: "Perić", rating: "6,5", pos: "CP" }, { number: "9", name: "Bogojević", rating: "6,7", pos: "AI" }],
                    [{ number: "21", name: "Matijaš", rating: "6,3", pos: "GRC" }]
                ]
            },
            away: {
                name: "4-2-3-1",
                players: [
                    [{ number: "39", name: "Bukvić", rating: "6,5", pos: "AvR" }],
                    [{ number: "11", name: "Omerović", rating: "7,0", pos: "CL", goal: true }, { number: "16", name: "Petrusenko", rating: "6,8", pos: "ME" }, { number: "17", name: "Jakupović", rating: "6,2", pos: "CJA" }],
                    [{ number: "6", name: "Nico Gaitán", rating: "6,4", pos: "CJA" }],
                    [{ number: "38", name: "Čolina", rating: "6,8", pos: "AI" }, { number: "23", name: "Vrbančić", rating: "6,5", pos: "MD" }, { number: "29", name: "Karačić", rating: "6,2", pos: "AI" }],
                    [{ number: "26", name: "Jelenić", rating: "6,8", pos: "CC" }, { number: "15", name: "Mersinaj", rating: "7,1", pos: "DC" }],
                    [{ number: "31", name: "Malenica", rating: "6,8", pos: "GR" }]
                ]
            }
        },
        events: {
            home: ["61' J. Filipović J. Pršir"],
            away: ["30' N. Omerović"]
        },
        stats: [
            { label: "Posse", home: "31%", away: "69%" },
            { label: "Remates", home: "10", away: "13" },
            { label: "Remates à Baliza", home: "7", away: "4" },
            { label: "xG", home: "0,73", away: "0,55" },
            { label: "PADPAD", home: "24,40", away: "10,77" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "4", away: "6" },
            { label: "Passes Completados", home: "84%", away: "90%" },
            { label: "Cruzamentos Completados", home: "25%", away: "12%" },
            { label: "Faltas", home: "7", away: "16" },
            { label: "Cartões amarelos", home: "1", away: "3" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "120", away: "121" },
            { label: "Classificação Média", home: "6,6", away: "6,6" }
        ]
    },
    {
        fixtureKey: "2025-08-02-hajduk-split-nk-varazdin",
        date: "Sábado 2 de Agosto de 2025",
        stadium: "Stadion Poljud",
        weather: "Calmo",
        playerOfMatch: "Ante Rebić",
        rating: "9,08",
        coaches: { home: "Gonzalo Garcia", away: "João Nabais" },
        formations: {
            home: {
                name: "4-3-3 DM",
                players: [
                    [{ number: "10", name: "Livaja", rating: "8,0", pos: "AR", goal: true }],
                    [{ number: "9", name: "A. Rebić", rating: "9,1", pos: "EAI", goal: true }, { number: "11", name: "Šego", rating: "7,2", pos: "EAI" }],
                    [{ number: "23", name: "Krovinović", rating: "6,9", pos: "MC" }, { number: "21", name: "Pukštas", rating: "6,9", pos: "ME" }],
                    [{ number: "6", name: "Hugo G.", rating: "6,5", pos: "MD" }],
                    [{ number: "32", name: "Hrgović", rating: "7,2", pos: "AI" }, { number: "14", name: "Raçi", rating: "6,7", pos: "CC" }, { number: "15", name: "Marešić", rating: "7,0", pos: "CC" }, { number: "8", name: "Sigur", rating: "6,7", pos: "DL" }],
                    [{ number: "13", name: "Ivušić", rating: "6,6", pos: "GRC" }]
                ]
            },
            away: {
                name: "4-2-3-1",
                players: [
                    [{ number: "10", name: "Biró", rating: "6,5", pos: "AR" }],
                    [{ number: "7", name: "Vuk", rating: "6,2", pos: "Ex" }, { number: "27", name: "Latković", rating: "6,7", pos: "CJA" }, { number: "12", name: "Bočkaj", rating: "6,9", pos: "AI" }],
                    [{ number: "8", name: "Duvnjak", rating: "7,4", pos: "CJR", goal: true }, { number: "24", name: "Marina", rating: "6,3", pos: "MAA" }],
                    [{ number: "3", name: "Sikošek", rating: "6,3", pos: "AI" }, { number: "44", name: "Barać", rating: "7,2", pos: "DC", goal: true }, { number: "16", name: "Tepšić", rating: "6,3", pos: "CC" }, { number: "23", name: "Maglica", rating: "7,3", pos: "AI", goal: true }],
                    [{ number: "1", name: "Zelenika", rating: "6,8", pos: "GR" }]
                ]
            }
        },
        events: {
            home: ["8' M. Livaja M. Šego", "70' A. Rebić Š. Hrgović", "90+4' A. Rebić M. Livaja"],
            away: ["21' F. Maglica T. Duvnjak", "75' P. Bočkaj M. Barać"]
        },
        stats: [
            { label: "Posse", home: "61%", away: "39%" },
            { label: "Remates", home: "23", away: "8" },
            { label: "Remates à Baliza", home: "10", away: "4" },
            { label: "xG", home: "1,67", away: "0,77" },
            { label: "PADPAD", home: "17,24", away: "22,86" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "14", away: "4" },
            { label: "Passes Completados", home: "92%", away: "86%" },
            { label: "Cruzamentos Completados", home: "16%", away: "8%" },
            { label: "Faltas", home: "12", away: "7" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "119", away: "119" },
            { label: "Classificação Média", home: "7,1", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-08-02-hnk-rijeka-nk-lokomotiva",
        date: "Sábado 2 de Agosto de 2025",
        stadium: "Rujevica",
        weather: "Brisa",
        playerOfMatch: "Tiago Dantas",
        rating: "8,72",
        coaches: { home: "Zép Jóbes", away: "P. Natal" },
        formations: {
            home: {
                name: "3-4-2-1",
                players: [
                    [{ number: "9", name: "Duje Čop", rating: "6,5", pos: "AvR" }],
                    [{ number: "10", name: "Fruk", rating: "6,9", pos: "ME" }, { number: "26", name: "Dantas", rating: "8,7", pos: "MO", goal: true }],
                    [{ number: "34", name: "Devetak", rating: "6,7", pos: "AI" }, { number: "21", name: "Lacoux", rating: "6,7", pos: "MD" }, { number: "11", name: "André", rating: "7,7", pos: "CJR", goal: true }, { number: "22", name: "Oreč", rating: "7,7", pos: "AI" }],
                    [{ number: "51", name: "Husić", rating: "6,9", pos: "DC" }, { number: "6", name: "Radeljić", rating: "7,1", pos: "DC" }, { number: "45", name: "Majstorović", rating: "6,7", pos: "DC" }],
                    [{ number: "13", name: "Zlomislić", rating: "6,6", pos: "GR" }]
                ]
            },
            away: {
                name: "4-2-3-1",
                players: [
                    [{ number: "19", name: "Rui Pedro", rating: "6,1", pos: "AC" }],
                    [{ number: "6", name: "Stojaković", rating: "6,7", pos: "AA", goal: true }, { number: "22", name: "Trajkovski", rating: "6,2", pos: "MO" }, { number: "27", name: "Córdoba", rating: "6,6", pos: "AA" }],
                    [{ number: "68", name: "Antolić", rating: "6,5", pos: "MC" }, { number: "14", name: "Belcar", rating: "6,4", pos: "MC" }],
                    [{ number: "34", name: "Pajač", rating: "6,2", pos: "AI" }, { number: "21", name: "Sigali", rating: "6,7", pos: "CC" }, { number: "11", name: "Kolinger", rating: "6,4", pos: "DC" }, { number: "22", name: "Vešović", rating: "6,7", pos: "AI" }],
                    [{ number: "12", name: "Posavec", rating: "6,5", pos: "GR" }]
                ]
            }
        },
        events: {
            home: ["5' Tiago Dantas A. Oreč", "12' Tiago Dantas T. Fruk", "28' André Tiago Dantas"],
            away: ["46' M. Šitum A. Stojaković"]
        },
        stats: [
            { label: "Posse", home: "50%", away: "50%" },
            { label: "Remates", home: "12", away: "13" },
            { label: "Remates à Baliza", home: "7", away: "4" },
            { label: "xG", home: "1,54", away: "0,98" },
            { label: "PADPAD", home: "22,39", away: "35,55" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "4", away: "3" },
            { label: "Passes Completados", home: "92%", away: "87%" },
            { label: "Cruzamentos Completados", home: "15%", away: "36%" },
            { label: "Faltas", home: "13", away: "12" },
            { label: "Cartões amarelos", home: "2", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "115", away: "114" },
            { label: "Classificação Média", home: "7,1", away: "6,5" }
        ]
    },
    {
        fixtureKey: "2025-08-02-hnk-vukovar-nk-slaven-belupo",
        date: "Sábado 2 de Agosto de 2025",
        stadium: "Stadion HNK Cibalia",
        weather: "Calmo",
        playerOfMatch: "Mario Tićinović",
        rating: "9,81",
        coaches: { home: "Hugo Macedo", away: "Francisco Pinto" },
        formations: {
            home: {
                name: "3-4-1-2",
                players: [
                    [{ number: "21", name: "Puljić", rating: "8,0", pos: "AAE", goal: true }, { number: "9", name: "Kulušić", rating: "9,1", pos: "AC", goal: true }],
                    [{ number: "10", name: "Gonzalez", rating: "7,4", pos: "CL" }],
                    [{ number: "3", name: "Bosec", rating: "7,2", pos: "AI" }, { number: "13", name: "Čaić", rating: "6,5", pos: "MD" }, { number: "18", name: "Antolković", rating: "7,1", pos: "MAA" }, { number: "91", name: "Tićinović", rating: "9,8", pos: "AI", goal: true }],
                    [{ number: "5", name: "Elez", rating: "6,9", pos: "CC" }, { number: "34", name: "Tadić", rating: "7,2", pos: "DC" }, { number: "4", name: "Mitrović", rating: "7,3", pos: "CC" }],
                    [{ number: "14", name: "Pintol", rating: "7,3", pos: "GR" }]
                ]
            },
            away: {
                name: "4-3-1-2",
                players: [
                    [{ number: "90", name: "Nestorovski", rating: "6,3", pos: "AR" }, { number: "7", name: "Dabro", rating: "6,4", pos: "AC" }],
                    [{ number: "15", name: "Čubelić", rating: "6,1", pos: "MO" }],
                    [{ number: "3", name: "Jakir", rating: "6,1", pos: "AI" }, { number: "21", name: "Crepulja", rating: "5,9", pos: "CJR" }, { number: "8", name: "Mrowca", rating: "6,1", pos: "MD" }, { number: "18", name: "Krušelj", rating: "6,5", pos: "AI" }],
                    [{ number: "4", name: "Ković", rating: "6,5", pos: "CC" }, { number: "6", name: "Božić", rating: "6,8", pos: "CC" }, { number: "2", name: "Međimorec", rating: "6,7", pos: "DC" }],
                    [{ number: "", name: "Hadžikić", rating: "6,5", pos: "GR" }]
                ]
            }
        },
        events: {
            home: ["25' J. Puljić L. Kulušić", "39' L. Kulušić M. Tićinović", "57' L. Kulušić J. Puljić", "90+3' M. Tićinović R. Gonzalez"],
            away: []
        },
        stats: [
            { label: "Posse", home: "46%", away: "54%" },
            { label: "Remates", home: "18", away: "9" },
            { label: "Remates à Baliza", home: "9", away: "4" },
            { label: "xG", home: "2,25", away: "0,57" },
            { label: "PADPAD", home: "24,11", away: "12,92" },
            { label: "Oportunidades Flagrantes", home: "2", away: "0" },
            { label: "Cantos", home: "9", away: "5" },
            { label: "Passes Completados", home: "86%", away: "87%" },
            { label: "Cruzamentos Completados", home: "22%", away: "25%" },
            { label: "Faltas", home: "13", away: "9" },
            { label: "Cartões amarelos", home: "2", away: "4" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "123", away: "119" },
            { label: "Classificação Média", home: "7,6", away: "6,4" }
        ]
    }
];

const croatiaRoundTwoReports = [
    {
        fixtureKey: "2025-08-09-nk-istra-1961-hnk-rijeka",
        date: "Sábado 9 de Agosto de 2025",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Silvio Goričan",
        rating: "7,33",
        coaches: { home: "João Pedro Rato", away: "Zép Jóbes" },
        formations: {
            home: {
                name: "4-2-3-1",
                players: [
                    [{ number: "9", name: "Prevljak", rating: "7,0", pos: "AAE", goal: true }],
                    [{ number: "11", name: "Goričan", rating: "7,3", pos: "AA" }, { number: "17", name: "Frederiksen", rating: "6,2", pos: "SA" }, { number: "7", name: "Rozić", rating: "6,3", pos: "Ex" }],
                    [{ number: "10", name: "Lončar", rating: "6,6", pos: "MAA" }, { number: "5", name: "Radošević", rating: "6,9", pos: "MD" }],
                    [{ number: "26", name: "Heister", rating: "6,2", pos: "AI" }, { number: "8", name: "Maurić", rating: "6,6", pos: "CC" }, { number: "3", name: "Nasraoui", rating: "6,6", pos: "DC" }, { number: "97", name: "Kadusić", rating: "6,4", pos: "AI" }],
                    [{ number: "1", name: "Kolić", rating: "6,7", pos: "GR" }]
                ]
            },
            away: {
                name: "4-2-3-1",
                players: [
                    [{ number: "10", name: "Fruk", rating: "6,6", pos: "AvR" }],
                    [{ number: "14", name: "Gojak", rating: "7,2", pos: "ME", goal: true }, { number: "26", name: "Dantas", rating: "6,9", pos: "MO" }],
                    [{ number: "34", name: "Devetak", rating: "6,5", pos: "AI" }, { number: "21", name: "Lacoux", rating: "7,0", pos: "MD" }, { number: "11", name: "André", rating: "6,8", pos: "CJR" }, { number: "23", name: "Lasickas", rating: "7,0", pos: "AI" }],
                    [{ number: "51", name: "Husić", rating: "6,8", pos: "DC" }, { number: "6", name: "Radeljić", rating: "6,7", pos: "DC" }, { number: "45", name: "Majstorović", rating: "6,8", pos: "DC" }],
                    [{ number: "13", name: "Zlomislić", rating: "6,9", pos: "GR" }]
                ]
            }
        },
        events: {
            home: ["58' S. Prevljak S. Goričan"],
            away: ["19' A. Gojak Tiago Dantas"]
        },
        stats: [
            { label: "Posse", home: "38%", away: "62%" },
            { label: "Remates", home: "9", away: "9" },
            { label: "Remates à Baliza", home: "7", away: "4" },
            { label: "xG", home: "0,82", away: "0,78" },
            { label: "PADPAD", home: "30,06", away: "29,33" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "6", away: "2" },
            { label: "Passes Completados", home: "88%", away: "92%" },
            { label: "Cruzamentos Completados", home: "9%", away: "5%" },
            { label: "Faltas", home: "12", away: "9" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "125", away: "124" },
            { label: "Classificação Média", home: "6,6", away: "6,8" }
        ]
    },
    {
        fixtureKey: "2025-08-09-nk-lokomotiva-hajduk-split",
        date: "Sábado 9 de Agosto de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Michele Šego",
        rating: "7,82",
        coaches: { home: "P. Natal", away: "Gonzalo García" },
        formations: {
            home: {
                name: "4-2-3-1",
                players: [
                    [{ number: "19", name: "Rui Pedro", rating: "6,8", pos: "AC", goal: true }],
                    [{ number: "9", name: "Redmond", rating: "6,2", pos: "AA" }, { number: "7", name: "Trajkovski", rating: "6,5", pos: "MO" }, { number: "27", name: "Córdoba", rating: "6,9", pos: "AA", goal: true }],
                    [{ number: "68", name: "Antolić", rating: "6,8", pos: "MC" }, { number: "69", name: "Rog", rating: "6,9", pos: "MC" }],
                    [{ number: "22", name: "Leovac", rating: "6,6", pos: "AI" }, { number: "14", name: "Sigali", rating: "6,6", pos: "CC" }, { number: "15", name: "Kolinger", rating: "6,7", pos: "DC" }, { number: "8", name: "Vešović", rating: "6,9", pos: "AI" }],
                    [{ number: "1", name: "Posavec", rating: "7,5", pos: "GR" }]
                ]
            },
            away: {
                name: "4-3-3 DM",
                players: [
                    [{ number: "10", name: "Livaja", rating: "7,1", pos: "AR", goal: true }],
                    [{ number: "9", name: "A. Rebić", rating: "6,9", pos: "EAI" }, { number: "11", name: "Šego", rating: "7,8", pos: "EAI" }],
                    [{ number: "7", name: "Kalik", rating: "7,0", pos: "MC" }, { number: "23", name: "Krovinović", rating: "7,7", pos: "MO", goal: true }],
                    [{ number: "6", name: "Hugo G.", rating: "6,5", pos: "MD" }],
                    [{ number: "32", name: "Hrgović", rating: "6,5", pos: "AI" }, { number: "14", name: "Raçi", rating: "6,6", pos: "CC" }, { number: "15", name: "Marešić", rating: "6,6", pos: "CC" }, { number: "8", name: "Sigur", rating: "6,7", pos: "DL" }],
                    [{ number: "13", name: "Ivušić", rating: "6,3", pos: "GRC" }]
                ]
            }
        },
        events: {
            home: ["38' Rui Pedro M. Vešović", "41' J. Córdoba D. Antolić"],
            away: ["4' F. Krovinović A. Kalik", "58' M. Livaja M. Šego"]
        },
        stats: [
            { label: "Posse", home: "54%", away: "46%" },
            { label: "Remates", home: "7", away: "17" },
            { label: "Remates à Baliza", home: "5", away: "11" },
            { label: "xG", home: "0,61", away: "1,10" },
            { label: "PADPAD", home: "18,86", away: "27,33" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "1", away: "9" },
            { label: "Passes Completados", home: "89%", away: "91%" },
            { label: "Cruzamentos Completados", home: "40%", away: "17%" },
            { label: "Faltas", home: "13", away: "12" },
            { label: "Cartões amarelos", home: "1", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "114", away: "118" },
            { label: "Classificação Média", home: "6,8", away: "6,8" }
        ]
    },
    {
        fixtureKey: "2025-08-09-nk-osijek-hnk-vukovar",
        date: "Sábado 9 de Agosto de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Juan Moreno",
        rating: "7,42",
        coaches: { home: "Gamy Chambelito", away: "Hugo Macedo" },
        formations: {
            home: {
                name: "4-2-3-1",
                players: [
                    [{ number: "17", name: "Jakupović", rating: "6,1", pos: "AvR" }],
                    [{ number: "6", name: "Nico Gaitán", rating: "6,3", pos: "CL" }, { number: "99", name: "Teklić", rating: "6,7", pos: "ME" }, { number: "10", name: "Shopov", rating: "6,3", pos: "CJA" }],
                    [{ number: "23", name: "Vrbančić", rating: "6,6", pos: "CJA" }],
                    [{ number: "38", name: "Čolina", rating: "7,1", pos: "AI" }, { number: "16", name: "Petrusenko", rating: "7,1", pos: "MD" }, { number: "29", name: "Karačić", rating: "7,3", pos: "AI", goal: true }],
                    [{ number: "26", name: "Jelenić", rating: "6,7", pos: "CC" }, { number: "15", name: "Mersinaj", rating: "6,9", pos: "DC" }],
                    [{ number: "31", name: "Malenica", rating: "6,6", pos: "GR" }]
                ]
            },
            away: {
                name: "4-3-1-2",
                players: [
                    [{ number: "21", name: "Puljić", rating: "7,1", pos: "AAE", goal: true }, { number: "9", name: "Kulušić", rating: "6,4", pos: "AC" }],
                    [{ number: "10", name: "Gonzalez", rating: "6,0", pos: "CL" }],
                    [{ number: "3", name: "Bosec", rating: "7,0", pos: "AI" }, { number: "13", name: "Čaić", rating: "6,4", pos: "MD" }, { number: "18", name: "Antolković", rating: "6,4", pos: "MAA" }, { number: "91", name: "Tićinović", rating: "6,5", pos: "AI" }],
                    [{ number: "5", name: "Elez", rating: "6,7", pos: "CC" }, { number: "34", name: "Tadić", rating: "6,4", pos: "DC" }, { number: "4", name: "Mitrović", rating: "7,1", pos: "CC" }],
                    [{ number: "1", name: "Bulat", rating: "6,6", pos: "GR" }]
                ]
            }
        },
        events: {
            home: ["4' M. Tadić (AG)", "43' F. Karačić O. Petrusenko"],
            away: ["46' J. Puljić J. Moreno"]
        },
        stats: [
            { label: "Posse", home: "61%", away: "39%" },
            { label: "Remates", home: "16", away: "8" },
            { label: "Remates à Baliza", home: "3", away: "3" },
            { label: "xG", home: "1,22", away: "1,43" },
            { label: "PADPAD", home: "20,40", away: "17,85" },
            { label: "Oportunidades Flagrantes", home: "1", away: "2" },
            { label: "Cantos", home: "7", away: "3" },
            { label: "Passes Completados", home: "85%", away: "81%" },
            { label: "Cruzamentos Completados", home: "18%", away: "12%" },
            { label: "Faltas", home: "16", away: "18" },
            { label: "Cartões amarelos", home: "2", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "123", away: "125" },
            { label: "Classificação Média", home: "6,7", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-08-09-nk-slaven-belupo-dinamo-zagreb",
        date: "Sábado 9 de Agosto de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Ivan Božić",
        rating: "7,76",
        coaches: { home: "Francisco Pinto", away: "M. Kovačević" },
        formations: {
            home: {
                name: "4-3-1-2",
                players: [
                    [{ number: "90", name: "Nestorovski", rating: "6,9", pos: "AR" }, { number: "7", name: "Dabro", rating: "6,7", pos: "AC" }],
                    [{ number: "15", name: "Čubelić", rating: "6,3", pos: "MO" }],
                    [{ number: "3", name: "Jakir", rating: "6,7", pos: "AI" }, { number: "21", name: "Crepulja", rating: "6,8", pos: "CJR" }, { number: "8", name: "Mrowca", rating: "7,5", pos: "MD" }, { number: "18", name: "Krušelj", rating: "6,3", pos: "AI" }],
                    [{ number: "4", name: "Ković", rating: "7,2", pos: "CC" }, { number: "6", name: "Božić", rating: "6,6", pos: "CC", goal: true }, { number: "2", name: "Međimorec", rating: "7,1", pos: "DC" }],
                    [{ number: "1", name: "Hadžikić", rating: "6,8", pos: "GR" }]
                ]
            },
            away: {
                name: "4-3-3 DM",
                players: [
                    [{ number: "9", name: "Dion Beljo", rating: "6,6", pos: "AvR" }],
                    [{ number: "11", name: "Hoxha", rating: "6,4", pos: "EAI" }, { number: "30", name: "Topić", rating: "6,4", pos: "EAI" }],
                    [{ number: "27", name: "Mišić", rating: "6,6", pos: "MC" }, { number: "8", name: "Zajc", rating: "7,7", pos: "MC", goal: true }],
                    [{ number: "4", name: "Bennacer", rating: "6,9", pos: "MD" }],
                    [{ number: "22", name: "Pérez Vinlöf", rating: "6,9", pos: "AI" }, { number: "26", name: "McKenna", rating: "6,9", pos: "CC" }, { number: "36", name: "Domínguez", rating: "6,6", pos: "CC" }, { number: "25", name: "Valinčić", rating: "6,4", pos: "AI" }],
                    [{ number: "40", name: "Livaković", rating: "6,5", pos: "GR" }]
                ]
            }
        },
        events: {
            home: ["73' I. Božić I. Nestorovski"],
            away: ["56' M. Zajc"]
        },
        stats: [
            { label: "Posse", home: "62%", away: "38%" },
            { label: "Remates", home: "10", away: "16" },
            { label: "Remates à Baliza", home: "2", away: "6" },
            { label: "xG", home: "0,84", away: "1,18" },
            { label: "PADPAD", home: "13,00", away: "25,91" },
            { label: "Oportunidades Flagrantes", home: "0", away: "1" },
            { label: "Cantos", home: "7", away: "9" },
            { label: "Passes Completados", home: "89%", away: "86%" },
            { label: "Cruzamentos Completados", home: "10%", away: "14%" },
            { label: "Faltas", home: "4", away: "8" },
            { label: "Cartões amarelos", home: "1", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "128", away: "129" },
            { label: "Classificação Média", home: "6,8", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-08-09-nk-varazdin-hnk-gorica",
        date: "Sábado 9 de Agosto de 2025",
        stadium: "Anđelko Herjavec",
        weather: "Calmo",
        playerOfMatch: "Aleksa Latković",
        rating: "8,30",
        coaches: { home: "João Nabais", away: "Miguel Cardoso" },
        formations: {
            home: {
                name: "4-2-3-1",
                players: [
                    [{ number: "9", name: "Jurić", rating: "6,4", pos: "AR" }],
                    [{ number: "7", name: "Vuk", rating: "6,8", pos: "Ex" }, { number: "27", name: "Latković", rating: "8,3", pos: "CJA" }, { number: "12", name: "Bočkaj", rating: "7,0", pos: "AI" }],
                    [{ number: "8", name: "Duvnjak", rating: "7,3", pos: "CJR" }, { number: "6", name: "Puclin", rating: "7,7", pos: "MAA", goal: true }],
                    [{ number: "3", name: "Sikošek", rating: "6,5", pos: "AI" }, { number: "44", name: "Barać", rating: "7,1", pos: "DC" }, { number: "16", name: "Tepšić", rating: "7,0", pos: "CC" }, { number: "23", name: "Maglica", rating: "7,5", pos: "AI" }],
                    [{ number: "1", name: "Zelenika", rating: "7,3", pos: "GR" }]
                ]
            },
            away: {
                name: "4-3-3 DM",
                players: [
                    [{ number: "18", name: "Fiolić", rating: "6,7", pos: "Ex" }, { number: "24", name: "Pavičić", rating: "5,7", pos: "MO" }, { number: "20", name: "Vrzić", rating: "5,7", pos: "Ex" }],
                    [{ number: "10", name: "Pršir", rating: "6,1", pos: "CJA" }, { number: "7", name: "Bakić", rating: "6,4", pos: "ME" }],
                    [{ number: "36", name: "Kavelj", rating: "6,4", pos: "CJR" }],
                    [{ number: "19", name: "Čabraja", rating: "6,4", pos: "AI" }, { number: "4", name: "J. Filipović", rating: "6,3", pos: "DC" }, { number: "45", name: "Perić", rating: "6,3", pos: "CP" }, { number: "9", name: "Bogojević", rating: "5,9", pos: "AI" }],
                    [{ number: "44", name: "Matijaš", rating: "6,6", pos: "GRC" }]
                ]
            }
        },
        events: {
            home: ["14' D. Puclin A. Latković", "80' B. Biró A. Latković", "86' B. Biró I. Tavares"],
            away: []
        },
        stats: [
            { label: "Posse", home: "65%", away: "35%" },
            { label: "Remates", home: "21", away: "9" },
            { label: "Remates à Baliza", home: "10", away: "3" },
            { label: "xG", home: "2,23", away: "0,56" },
            { label: "PADPAD", home: "14,53", away: "28,69" },
            { label: "Oportunidades Flagrantes", home: "2", away: "0" },
            { label: "Cantos", home: "6", away: "5" },
            { label: "Passes Completados", home: "91%", away: "83%" },
            { label: "Cruzamentos Completados", home: "23%", away: "25%" },
            { label: "Faltas", home: "8", away: "18" },
            { label: "Cartões amarelos", home: "0", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "114", away: "113" },
            { label: "Classificação Média", home: "7,2", away: "6,2" }
        ]
    }
];

function reportPlayer(number, name, rating, pos, goal = false) {
    return goal ? { number, name, rating, pos, goal: true } : { number, name, rating, pos };
}

function reportFormation(name, players) {
    return { name, players };
}

const croatiaRoundThreeReports = [
    {
        fixtureKey: "2025-08-16-dinamo-zagreb-nk-osijek",
        date: "Sábado 16 de Agosto de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Marko Malenica",
        rating: "7,62",
        coaches: { home: "M. Kovačević", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "6,8", "AvR")],
                [reportPlayer("11", "Hoxha", "6,7", "EAI"), reportPlayer("7", "Stojković", "7,2", "EAI", true)],
                [reportPlayer("27", "Mišić", "7,1", "MC"), reportPlayer("8", "Zajc", "6,3", "MC")],
                [reportPlayer("4", "Bennacer", "7,1", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "6,9", "AI"), reportPlayer("26", "McKenna", "7,4", "CC"), reportPlayer("36", "Domínguez", "7,3", "CC"), reportPlayer("25", "Valinčić", "7,3", "AI")],
                [reportPlayer("40", "Livaković", "7,2", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("10", "Shopov", "6,4", "AAE")],
                [reportPlayer("6", "Nico Gaitán", "6,2", "AA"), reportPlayer("99", "Teklić", "6,3", "CJA"), reportPlayer("23", "Vrbančić", "6,7", "EAI")],
                [reportPlayer("17", "Jakupović", "6,0", "MC"), reportPlayer("16", "Petrusenko", "6,8", "MC")],
                [reportPlayer("38", "Čolina", "6,5", "AI"), reportPlayer("26", "Jelenić", "7,0", "DC"), reportPlayer("15", "Mersinaj", "6,7", "DC"), reportPlayer("29", "Karačić", "6,2", "AI")],
                [reportPlayer("31", "Malenica", "7,6", "GR")]
            ])
        },
        events: {
            home: ["37' L. Stojković M. Valinčić"],
            away: []
        },
        stats: [
            { label: "Posse", home: "45%", away: "55%" },
            { label: "Remates", home: "15", away: "6" },
            { label: "Remates à Baliza", home: "9", away: "1" },
            { label: "xG", home: "1,44", away: "0,23" },
            { label: "PADPAD", home: "18,72", away: "15,89" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "5", away: "7" },
            { label: "Passes Completados", home: "87%", away: "88%" },
            { label: "Cruzamentos Completados", home: "38%", away: "2%" },
            { label: "Faltas", home: "5", away: "14" },
            { label: "Cartões amarelos", home: "1", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "124", away: "128" },
            { label: "Classificação Média", home: "7,0", away: "6,6" }
        ]
    },
    {
        fixtureKey: "2025-08-16-hnk-gorica-hajduk-split",
        date: "Sábado 16 de Agosto de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Davor Matijaš",
        rating: "8,29",
        coaches: { home: "D. Mojstrović", away: "Gonzalo Garcia" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("64", "Epailly", "7,4", "Ex", true), reportPlayer("11", "Šule", "6,2", "MO"), reportPlayer("8", "Pozo", "6,6", "Ex")],
                [reportPlayer("18", "Fiolić", "6,4", "CJA"), reportPlayer("36", "Kavelj", "6,7", "ME")],
                [reportPlayer("10", "Pršir", "6,5", "CJR")],
                [reportPlayer("19", "Čabraja", "7,5", "AI"), reportPlayer("5", "Leš", "6,8", "DC"), reportPlayer("4", "J. Filipović", "6,7", "CP"), reportPlayer("45", "Perić", "6,6", "AI")],
                [reportPlayer("1", "Matijaš", "8,3", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("13", "Elis", "6,1", "AR")],
                [reportPlayer("9", "A. Rebić", "6,8", "EAI"), reportPlayer("24", "Bamba", "7,2", "EAI")],
                [reportPlayer("23", "Krovinović", "6,8", "MC"), reportPlayer("21", "Pukštas", "7,7", "ME", true)],
                [reportPlayer("6", "Hugo G.", "7,1", "MD")],
                [reportPlayer("32", "Hrgović", "6,9", "AI"), reportPlayer("14", "Raçi", "7,0", "CC"), reportPlayer("15", "Marešić", "6,7", "CC"), reportPlayer("38", "Hodak", "6,4", "DL")],
                [reportPlayer("13", "Ivušić", "6,6", "GRC")]
            ])
        },
        events: {
            home: ["25' T. Epailly M. Čabraja"],
            away: ["74' R. Pukštas A. Sanyang"]
        },
        stats: [
            { label: "Posse", home: "51%", away: "49%" },
            { label: "Remates", home: "7", away: "25" },
            { label: "Remates à Baliza", home: "1", away: "15" },
            { label: "xG", home: "0,55", away: "2,51" },
            { label: "PADPAD", home: "43,44", away: "24,19" },
            { label: "Oportunidades Flagrantes", home: "1", away: "2" },
            { label: "Cantos", home: "4", away: "9" },
            { label: "Passes Completados", home: "89%", away: "90%" },
            { label: "Cruzamentos Completados", home: "18%", away: "20%" },
            { label: "Faltas", home: "11", away: "6" },
            { label: "Cartões amarelos", home: "3", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "125", away: "126" },
            { label: "Classificação Média", home: "6,8", away: "6,8" }
        ]
    },
    {
        fixtureKey: "2025-08-16-nk-istra-1961-nk-lokomotiva",
        date: "Sábado 16 de Agosto de 2025",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Silvio Goričan",
        rating: "7,82",
        coaches: { home: "João Pedro Rato", away: "P. Natal" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,3", "AAE")],
                [reportPlayer("11", "Goričan", "7,8", "AA", true), reportPlayer("17", "Frederiksen", "6,2", "AA"), reportPlayer("7", "Rozić", "6,3", "Ex")],
                [reportPlayer("10", "Lončar", "7,1", "MAA"), reportPlayer("5", "Radošević", "6,5", "MD")],
                [reportPlayer("26", "Heister", "6,9", "AI"), reportPlayer("4", "Johnston", "6,5", "CC"), reportPlayer("3", "Nasraoui", "7,2", "DC", true), reportPlayer("97", "Kadusić", "6,7", "AI")],
                [reportPlayer("1", "Kolić", "6,4", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("10", "Rui Pedro", "6,5", "AvR")],
                [reportPlayer("11", "Redmond", "6,3", "AA"), reportPlayer("7", "Trajkovski", "6,7", "CL"), reportPlayer("77", "Córdoba", "7,5", "AA", true)],
                [reportPlayer("8", "Belcar", "6,7", "CJA"), reportPlayer("30", "Rog", "7,0", "MD")],
                [reportPlayer("3", "Leovac", "6,9", "AI"), reportPlayer("5", "Sigali", "6,5", "CC"), reportPlayer("6", "Kolinger", "6,5", "DC"), reportPlayer("2", "Vešović", "6,4", "AI")],
                [reportPlayer("12", "Posavec", "6,8", "GR")]
            ])
        },
        events: {
            home: ["9' M. Nasraoui V. Rozić", "90+6' S. Goričan"],
            away: ["49' M. Rog J. Córdoba", "60' M. Leovac A. Stojaković"]
        },
        stats: [
            { label: "Posse", home: "46%", away: "54%" },
            { label: "Remates", home: "15", away: "11" },
            { label: "Remates à Baliza", home: "7", away: "6" },
            { label: "xG", home: "1,37", away: "1,37" },
            { label: "PADPAD", home: "20,41", away: "26,64" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "11", away: "7" },
            { label: "Passes Completados", home: "89%", away: "88%" },
            { label: "Cruzamentos Completados", home: "16%", away: "17%" },
            { label: "Faltas", home: "12", away: "8" },
            { label: "Cartões amarelos", home: "1", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "126", away: "124" },
            { label: "Classificação Média", home: "6,7", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-08-16-hnk-rijeka-nk-slaven-belupo",
        date: "Sábado 16 de Agosto de 2025",
        stadium: "Rujevica",
        weather: "Brisa",
        playerOfMatch: "Amer Gojak",
        rating: "7,59",
        coaches: { home: "Zép Jóbes", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("10", "Fruk", "7,0", "AAE"), reportPlayer("77", "Jurić", "8,2", "AvR", true)],
                [reportPlayer("14", "Gojak", "8,1", "ME", true), reportPlayer("26", "Dantas", "6,9", "ME")],
                [reportPlayer("34", "Devetak", "6,7", "AP"), reportPlayer("21", "Lacoux", "7,0", "MD"), reportPlayer("11", "André", "7,0", "MAA", true), reportPlayer("22", "Oreč", "6,7", "AI")],
                [reportPlayer("6", "Radeljić", "7,2", "DC"), reportPlayer("45", "Majstorović", "6,7", "DC")],
                [reportPlayer("13", "Zlomislić", "6,6", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("90", "Nestorovski", "6,7", "AR"), reportPlayer("7", "Dabro", "6,4", "AAE")],
                [reportPlayer("15", "Čubelić", "6,9", "MO", true)],
                [reportPlayer("3", "Jakir", "7,1", "AI"), reportPlayer("21", "Crepulja", "7,1", "CJR"), reportPlayer("8", "Mrowca", "6,8", "MD"), reportPlayer("18", "Krušelj", "6,9", "AI")],
                [reportPlayer("4", "Kovicić", "6,7", "CC"), reportPlayer("6", "Božić", "6,5", "CC"), reportPlayer("2", "Medimorec", "6,6", "DC")],
                [reportPlayer("1", "Hadžikić", "6,3", "GR")]
            ])
        },
        events: {
            home: ["26' André", "35' A. Gojak T. Fruk"],
            away: ["12' I. Čubelić A. Jakir"]
        },
        stats: [
            { label: "Posse", home: "43%", away: "57%" },
            { label: "Remates", home: "4", away: "16" },
            { label: "Remates à Baliza", home: "3", away: "6" },
            { label: "xG", home: "0,62", away: "1,71" },
            { label: "PADPAD", home: "24,36", away: "13,38" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "4", away: "9" },
            { label: "Passes Completados", home: "86%", away: "89%" },
            { label: "Cruzamentos Completados", home: "5%", away: "17%" },
            { label: "Faltas", home: "12", away: "12" },
            { label: "Cartões amarelos", home: "0", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "114", away: "120" },
            { label: "Classificação Média", home: "6,9", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-08-16-hnk-vukovar-nk-varazdin",
        date: "Sábado 16 de Agosto de 2025",
        stadium: "Stadion HNK Cibalia",
        weather: "Calmo",
        playerOfMatch: "Aleksa Latković",
        rating: "8,62",
        coaches: { home: "Hugo Macedo", away: "João Nabais" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("21", "Puljić", "6,0", "AAE")],
                [reportPlayer("11", "Moreno", "6,1", "AI"), reportPlayer("10", "Gonzalez", "6,9", "MO", true), reportPlayer("35", "Kaúa Valente", "6,3", "Ex")],
                [reportPlayer("13", "Čaić", "6,7", "MAA"), reportPlayer("18", "Antolković", "6,4", "MD")],
                [reportPlayer("91", "Tićinović", "7,3", "AI"), reportPlayer("5", "Elez", "6,5", "DC"), reportPlayer("12", "Živković", "6,3", "DC"), reportPlayer("4", "Mitrović", "6,2", "DL")],
                [reportPlayer("14", "Pintol", "6,3", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Jurić", "6,6", "AAE")],
                [reportPlayer("38", "Iuri Tavares", "7,6", "AI", true), reportPlayer("27", "Latković", "8,6", "SA", true), reportPlayer("22", "Mamić", "6,7", "Ex")],
                [reportPlayer("8", "Duvnjak", "6,7", "CJR"), reportPlayer("24", "Marina", "7,3", "MD")],
                [reportPlayer("3", "Sikošek", "7,4", "AI", true), reportPlayer("44", "Barać", "7,3", "DC", true), reportPlayer("16", "Tepšić", "6,6", "CC"), reportPlayer("23", "Maglica", "6,6", "DL")],
                [reportPlayer("1", "Zelenika", "7,3", "GR")]
            ])
        },
        events: {
            home: ["64' L. Kulušić M. Tićinović", "88' R. Gonzalez P. Horvat"],
            away: ["28' I. Tavares L. Mamić", "45+1' A. Latković", "54' G. Sikošek A. Latković", "83' G. Sikošek M. Marina", "90+5' M. Barać P. Bočkaj"]
        },
        stats: [
            { label: "Posse", home: "55%", away: "45%" },
            { label: "Remates", home: "10", away: "18" },
            { label: "Remates à Baliza", home: "5", away: "9" },
            { label: "xG", home: "1,14", away: "1,31" },
            { label: "PADPAD", home: "46,67", away: "87,75" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "6", away: "4" },
            { label: "Passes Completados", home: "90%", away: "88%" },
            { label: "Cruzamentos Completados", home: "16%", away: "29%" },
            { label: "Faltas", home: "22", away: "12" },
            { label: "Cartões amarelos", home: "4", away: "3" },
            { label: "Cartões vermelhos", home: "1", away: "0" },
            { label: "Distância Percorrida", home: "117", away: "120" },
            { label: "Classificação Média", home: "6,5", away: "7,1" }
        ]
    }
];

const croatiaRoundFourReports = [
    {
        fixtureKey: "2025-08-23-hajduk-split-hnk-vukovar",
        date: "Sábado 23 de Agosto de 2025",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Jakov Puljić",
        rating: "7,46",
        coaches: { home: "Gonzalo Garcia", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "A. Rebić", "6,2", "AR")],
                [reportPlayer("11", "Šego", "6,5", "EAI"), reportPlayer("24", "Bamba", "6,7", "EAI")],
                [reportPlayer("23", "Krovinović", "6,7", "MC"), reportPlayer("21", "Pukštas", "7,2", "ME", true)],
                [reportPlayer("6", "Hugo G.", "6,7", "MD")],
                [reportPlayer("32", "Hrgović", "7,0", "AI"), reportPlayer("14", "Raçi", "6,5", "CC"), reportPlayer("15", "Marešić", "6,6", "CC"), reportPlayer("8", "Sigur", "6,6", "DL")],
                [reportPlayer("13", "Ivušić", "6,3", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("21", "Puljić", "7,5", "AAE", true)],
                [reportPlayer("8", "Horvat", "7,1", "AI"), reportPlayer("10", "Gonzalez", "7,4", "MO", true), reportPlayer("36", "Butić", "7,1", "Ex")],
                [reportPlayer("77", "Shabani", "6,7", "MAA"), reportPlayer("15", "Gurlica", "7,4", "MD")],
                [reportPlayer("7", "Kerim Çalhan.", "6,8", "AI"), reportPlayer("5", "Elez", "7,2", "DC"), reportPlayer("4", "Mitrović", "7,3", "DC"), reportPlayer("3", "Bosec", "7,0", "DL")],
                [reportPlayer("1", "Bulat", "7,4", "GR")]
            ])
        },
        events: {
            home: ["14' R. Pukštas"],
            away: ["13' R. Gonzalez", "74' J. Puljić P. Horvat", "80' J. Puljić A. Jurilj"]
        },
        stats: [
            { label: "Posse", home: "57%", away: "43%" },
            { label: "Remates", home: "14", away: "11" },
            { label: "Remates à Baliza", home: "7", away: "6" },
            { label: "xG", home: "1,20", away: "1,55" },
            { label: "PADPAD", home: "27,75", away: "17,67" },
            { label: "Oportunidades Flagrantes", home: "0", away: "1" },
            { label: "Cantos", home: "5", away: "2" },
            { label: "Passes Completados", home: "89%", away: "87%" },
            { label: "Cruzamentos Completados", home: "28%", away: "15%" },
            { label: "Faltas", home: "4", away: "9" },
            { label: "Cartões amarelos", home: "1", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "129", away: "129" },
            { label: "Classificação Média", home: "6,6", away: "7,2" }
        ]
    },
    {
        fixtureKey: "2025-08-23-nk-lokomotiva-hnk-gorica",
        date: "Sábado 23 de Agosto de 2025",
        stadium: "Maksimir",
        weather: "Tempestuoso",
        playerOfMatch: "Ognjen Bakić",
        rating: "7,89",
        coaches: { home: "P. Natal", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("44", "Trajkovski", "6,4", "AvR")],
                [reportPlayer("7", "Redmond", "6,4", "AA"), reportPlayer("10", "Rui Pedro", "6,5", "CL"), reportPlayer("77", "Córdoba", "7,0", "AA", true)],
                [reportPlayer("8", "Belcar", "7,4", "CJA"), reportPlayer("30", "Rog", "6,9", "MD")],
                [reportPlayer("3", "Pajač", "7,0", "AI"), reportPlayer("5", "Sigali", "6,9", "CC"), reportPlayer("6", "Kolinger", "7,0", "DC"), reportPlayer("2", "Vešović", "6,6", "AI")],
                [reportPlayer("12", "Posavec", "6,9", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("18", "Fiolić", "6,3", "Ex"), reportPlayer("24", "Pavičić", "7,3", "MO", true), reportPlayer("20", "Vrzić", "6,1", "Ex")],
                [reportPlayer("10", "Pršir", "6,3", "CJA"), reportPlayer("7", "Bakić", "7,9", "ME")],
                [reportPlayer("36", "Kavelj", "6,4", "CJR")],
                [reportPlayer("19", "Čabraja", "6,4", "AI"), reportPlayer("4", "J. Filipović", "7,2", "DC"), reportPlayer("45", "Perić", "6,8", "CP"), reportPlayer("22", "Trontelj", "6,4", "AI")],
                [reportPlayer("1", "Matijaš", "6,3", "GRC")]
            ])
        },
        events: {
            home: ["2' J. Córdoba"],
            away: ["8' O. Bakić D. Pavičić"]
        },
        stats: [
            { label: "Posse", home: "78%", away: "22%" },
            { label: "Remates", home: "21", away: "13" },
            { label: "Remates à Baliza", home: "4", away: "7" },
            { label: "xG", home: "1,24", away: "1,10" },
            { label: "PADPAD", home: "10,48", away: "49,36" },
            { label: "Oportunidades Flagrantes", home: "1", away: "1" },
            { label: "Cantos", home: "5", away: "7" },
            { label: "Passes Completados", home: "91%", away: "77%" },
            { label: "Cruzamentos Completados", home: "18%", away: "30%" },
            { label: "Faltas", home: "7", away: "9" },
            { label: "Cartões amarelos", home: "1", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "118", away: "120" },
            { label: "Classificação Média", home: "6,8", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-08-23-nk-osijek-hnk-rijeka",
        date: "Sábado 23 de Agosto de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Ante Matej Jurić",
        rating: "8,24",
        coaches: { home: "N. Petrović", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Jakupović", "6,5", "AAE")],
                [reportPlayer("11", "Omerović", "6,4", "AA"), reportPlayer("6", "Petrusenko", "6,3", "CJA"), reportPlayer("39", "Bukvić", "6,5", "EAI")],
                [reportPlayer("10", "Shopov", "6,6", "MC"), reportPlayer("23", "Vrbančić", "6,4", "MC")],
                [reportPlayer("38", "Čolina", "6,5", "AI"), reportPlayer("26", "Jelenić", "6,8", "DC"), reportPlayer("15", "Mersinaj", "7,4", "DC", true), reportPlayer("29", "Karačić", "6,4", "AI")],
                [reportPlayer("31", "Malenica", "6,8", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("10", "Fruk", "7,0", "AAE"), reportPlayer("77", "Jurić", "8,2", "AvR", true)],
                [reportPlayer("14", "Gojak", "8,1", "ME", true), reportPlayer("26", "Dantas", "6,9", "ME")],
                [reportPlayer("34", "Devetak", "6,6", "AP"), reportPlayer("21", "Lacoux", "7,0", "MD"), reportPlayer("11", "André", "7,0", "MAA"), reportPlayer("23", "Lasickas", "6,5", "AI")],
                [reportPlayer("6", "Radeljić", "7,0", "DC"), reportPlayer("45", "Majstorović", "6,6", "DC")],
                [reportPlayer("13", "Zlomislić", "7,0", "GR")]
            ])
        },
        events: {
            home: ["79' J. Mersinaj N. Gaitán"],
            away: ["8' A. Gojak A. Jurić", "27' A. Gojak A. Jurić"]
        },
        stats: [
            { label: "Posse", home: "39%", away: "61%" },
            { label: "Remates", home: "12", away: "14" },
            { label: "Remates à Baliza", home: "8", away: "7" },
            { label: "xG", home: "0,82", away: "1,91" },
            { label: "PADPAD", home: "18,86", away: "15,72" },
            { label: "Oportunidades Flagrantes", home: "0", away: "1" },
            { label: "Cantos", home: "5", away: "10" },
            { label: "Passes Completados", home: "84%", away: "86%" },
            { label: "Cruzamentos Completados", home: "23%", away: "31%" },
            { label: "Faltas", home: "12", away: "11" },
            { label: "Cartões amarelos", home: "2", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "123", away: "125" },
            { label: "Classificação Média", home: "6,7", away: "7,1" }
        ]
    },
    {
        fixtureKey: "2025-08-23-nk-slaven-belupo-nk-istra-1961",
        date: "Sábado 23 de Agosto de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Marko Dabro",
        rating: "8,69",
        coaches: { home: "Francisco Pinto", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("90", "Nestorovski", "7,5", "AR", true), reportPlayer("7", "Dabro", "8,7", "AAE", true)],
                [reportPlayer("15", "Čubelić", "6,3", "MO")],
                [reportPlayer("3", "Jakir", "6,7", "AI"), reportPlayer("21", "Crepulja", "7,3", "CJR"), reportPlayer("8", "Mrowca", "7,7", "MD", true), reportPlayer("18", "Krušelj", "6,8", "AI")],
                [reportPlayer("4", "Kovicić", "6,6", "CC"), reportPlayer("6", "Božić", "6,9", "CC"), reportPlayer("2", "Medimorec", "6,7", "DC")],
                [reportPlayer("1", "Hadžikić", "6,4", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "8,2", "AAE", true), reportPlayer("17", "Frederiksen", "6,1", "AA")],
                [reportPlayer("11", "Goričan", "6,2", "AA"), reportPlayer("7", "Rozić", "6,3", "Ex")],
                [reportPlayer("10", "Lončar", "6,4", "MAA"), reportPlayer("5", "Radošević", "6,7", "MD")],
                [reportPlayer("26", "Heister", "6,8", "AI"), reportPlayer("4", "Johnston", "6,5", "CC"), reportPlayer("3", "Nasraoui", "6,6", "DC"), reportPlayer("97", "Kadusić", "6,2", "AI")],
                [reportPlayer("1", "Kolić", "6,4", "GR")]
            ])
        },
        events: {
            home: ["9' S. Mrowca L. Crepulja", "54' I. Nestorovski M. Dabro", "90+2' M. Dabro J. Mitrović"],
            away: ["44' M. Heister S. Prevljak", "84' A. Obando S. Prevljak"]
        },
        stats: [
            { label: "Posse", home: "60%", away: "40%" },
            { label: "Remates", home: "12", away: "8" },
            { label: "Remates à Baliza", home: "7", away: "3" },
            { label: "xG", home: "1,22", away: "0,52" },
            { label: "PADPAD", home: "25,57", away: "30,12" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "8", away: "3" },
            { label: "Passes Completados", home: "92%", away: "87%" },
            { label: "Cruzamentos Completados", home: "12%", away: "2%" },
            { label: "Faltas", home: "10", away: "7" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "135", away: "136" },
            { label: "Classificação Média", home: "7,1", away: "6,6" }
        ]
    },
    {
        fixtureKey: "2025-08-23-nk-varazdin-dinamo-zagreb",
        date: "Sábado 23 de Agosto de 2025",
        stadium: "Anđelko Herjavec",
        weather: "Brisa",
        playerOfMatch: "Arbër Hoxha",
        rating: "9,28",
        coaches: { home: "João Nabais", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("38", "Iuri Tavares", "6,2", "AAE")],
                [reportPlayer("7", "Vuk", "6,2", "AI"), reportPlayer("27", "Latković", "7,4", "SA"), reportPlayer("22", "Mamić", "7,0", "Ex", true)],
                [reportPlayer("8", "Duvnjak", "6,7", "CJR"), reportPlayer("24", "Marina", "6,3", "MD")],
                [reportPlayer("3", "Sikošek", "6,3", "AI"), reportPlayer("44", "Barać", "6,6", "DC"), reportPlayer("16", "Tepšić", "6,4", "CC"), reportPlayer("23", "Maglica", "6,8", "DL")],
                [reportPlayer("1", "Zelenika", "6,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,4", "AvR", true)],
                [reportPlayer("11", "Hoxha", "9,3", "EAI"), reportPlayer("7", "Stojković", "6,8", "EAI")],
                [reportPlayer("27", "Mišić", "7,6", "MC", true), reportPlayer("8", "Zajc", "8,1", "MC", true)],
                [reportPlayer("4", "Bennacer", "6,7", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "6,6", "AI"), reportPlayer("28", "Théophile-Cat.", "6,9", "CC"), reportPlayer("36", "Domínguez", "7,4", "CC"), reportPlayer("25", "Valinčić", "7,0", "AI", true)],
                [reportPlayer("40", "Livaković", "6,8", "GR")]
            ])
        },
        events: {
            home: ["61' L. Mamić A. Latković"],
            away: ["37' M. Valinčić Dion Beljo", "49' J. Mišić A. Hoxha", "54' M. Zajc A. Hoxha", "70' M. Zajc A. Hoxha"]
        },
        stats: [
            { label: "Posse", home: "43%", away: "57%" },
            { label: "Remates", home: "11", away: "14" },
            { label: "Remates à Baliza", home: "5", away: "7" },
            { label: "xG", home: "0,98", away: "0,78" },
            { label: "PADPAD", home: "20,32", away: "23,29" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "4", away: "7" },
            { label: "Passes Completados", home: "85%", away: "91%" },
            { label: "Cruzamentos Completados", home: "19%", away: "12%" },
            { label: "Faltas", home: "6", away: "10" },
            { label: "Cartões amarelos", home: "0", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "130", away: "125" },
            { label: "Classificação Média", home: "6,6", away: "7,3" }
        ]
    }
];

const croatiaRoundFiveReports = [
    {
        fixtureKey: "2025-08-30-dinamo-zagreb-hajduk-split",
        date: "Sábado 30 de Agosto de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Ron Raçi",
        rating: "7,39",
        coaches: { home: "M. Kovačević", away: "Gonzalo Garcia" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "6,2", "AvR")],
                [reportPlayer("11", "Hoxha", "6,5", "EAI"), reportPlayer("7", "Stojković", "6,3", "EAI")],
                [reportPlayer("27", "Mišić", "7,3", "MC"), reportPlayer("8", "Zajc", "6,3", "MC")],
                [reportPlayer("4", "Bennacer", "7,0", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "6,5", "AI"), reportPlayer("26", "McKenna", "6,8", "CC"), reportPlayer("36", "Domínguez", "7,0", "CC"), reportPlayer("25", "Valinčić", "6,5", "AI")],
                [reportPlayer("40", "Livaković", "7,1", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,9", "AR")],
                [reportPlayer("9", "A. Rebić", "6,1", "EAI"), reportPlayer("11", "Šego", "6,7", "EAI")],
                [reportPlayer("23", "Krovinović", "6,9", "MC"), reportPlayer("21", "Pukštas", "6,7", "ME")],
                [reportPlayer("6", "Hugo G.", "7,0", "MD")],
                [reportPlayer("32", "Hrgović", "6,8", "AI"), reportPlayer("14", "Raçi", "7,4", "CC"), reportPlayer("15", "Marešić", "7,3", "CC"), reportPlayer("8", "Sigur", "6,5", "DL")],
                [reportPlayer("13", "Ivušić", "7,0", "GRC")]
            ])
        },
        events: { home: [], away: [] },
        stats: [
            { label: "Posse", home: "37%", away: "63%" },
            { label: "Remates", home: "10", away: "14" },
            { label: "Remates à Baliza", home: "4", away: "5" },
            { label: "xG", home: "0,61", away: "0,82" },
            { label: "PADPAD", home: "21,36", away: "27,23" },
            { label: "Oportunidades Flagrantes", home: "0", away: "1" },
            { label: "Cantos", home: "3", away: "8" },
            { label: "Passes Completados", home: "88%", away: "91%" },
            { label: "Cruzamentos Completados", home: "5%", away: "20%" },
            { label: "Faltas", home: "9", away: "8" },
            { label: "Cartões amarelos", home: "3", away: "3" },
            { label: "Cartões vermelhos", home: "0", away: "1" },
            { label: "Distância Percorrida", home: "114", away: "115" },
            { label: "Classificação Média", home: "6,7", away: "6,8" }
        ]
    },
    {
        fixtureKey: "2025-08-30-nk-istra-1961-nk-osijek",
        date: "Sábado 30 de Agosto de 2025",
        stadium: "Aldo Drosina",
        weather: "Tempestuoso",
        playerOfMatch: "Jan Hlapičić",
        rating: "8,24",
        coaches: { home: "João Pedro Rato", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,6", "AAE"), reportPlayer("12", "Obando", "6,7", "AA")],
                [reportPlayer("11", "Goričan", "6,5", "AA"), reportPlayer("7", "Rozić", "6,5", "Ex")],
                [reportPlayer("10", "Lončar", "6,6", "MAA"), reportPlayer("5", "Radošević", "7,2", "MD")],
                [reportPlayer("26", "Heister", "6,4", "AI"), reportPlayer("4", "Johnston", "7,0", "CC"), reportPlayer("3", "Nasraoui", "7,3", "DC"), reportPlayer("97", "Kadusić", "6,8", "AI")],
                [reportPlayer("1", "Kolić", "7,3", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Jakupović", "6,5", "AAE")],
                [reportPlayer("11", "Omerović", "6,4", "AA"), reportPlayer("6", "Nico Gaitán", "6,5", "CJA"), reportPlayer("7", "Tugarev", "6,7", "EAI")],
                [reportPlayer("16", "Petrusenko", "6,8", "MC"), reportPlayer("23", "Vrbančić", "6,6", "MC")],
                [reportPlayer("38", "Čolina", "7,1", "AI"), reportPlayer("26", "Jelenić", "7,2", "DC"), reportPlayer("33", "Hasić", "7,5", "DC"), reportPlayer("29", "Karačić", "7,2", "AI")],
                [reportPlayer("98", "Hlapičić", "8,2", "GR")]
            ])
        },
        events: { home: [], away: [] },
        stats: [
            { label: "Posse", home: "46%", away: "54%" },
            { label: "Remates", home: "18", away: "13" },
            { label: "Remates à Baliza", home: "7", away: "4" },
            { label: "xG", home: "1,67", away: "1,23" },
            { label: "PADPAD", home: "14,83", away: "21,38" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "11", away: "14" },
            { label: "Passes Completados", home: "84%", away: "85%" },
            { label: "Cruzamentos Completados", home: "16%", away: "6%" },
            { label: "Faltas", home: "13", away: "9" },
            { label: "Cartões amarelos", home: "2", away: "3" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "128", away: "129" },
            { label: "Classificação Média", home: "6,8", away: "6,9" }
        ]
    },
    {
        fixtureKey: "2025-08-30-hnk-rijeka-nk-varazdin",
        date: "Sábado 30 de Agosto de 2025",
        stadium: "Rujevica",
        weather: "Brisa",
        playerOfMatch: "David Puclin",
        rating: "7,68",
        coaches: { home: "Zép Jóbes", away: "João Nabais" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("10", "Fruk", "6,2", "AAE"), reportPlayer("77", "Jurić", "6,3", "AvR")],
                [reportPlayer("26", "Dantas", "6,4", "ME"), reportPlayer("14", "Gojak", "6,4", "ME")],
                [reportPlayer("3", "Jean Carlos", "6,5", "AP"), reportPlayer("21", "Lacoux", "6,7", "MD"), reportPlayer("11", "André", "6,5", "MAA"), reportPlayer("23", "Lasickas", "6,4", "AI")],
                [reportPlayer("6", "Radeljić", "7,1", "DC"), reportPlayer("45", "Majstorović", "6,7", "DC")],
                [reportPlayer("13", "Zlomislić", "7,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("17", "Mamut", "6,3", "AAE")],
                [reportPlayer("7", "Vuk", "7,3", "AI"), reportPlayer("27", "Latković", "6,2", "SA"), reportPlayer("22", "Mamić", "6,7", "Ex")],
                [reportPlayer("8", "Duvnjak", "7,0", "CJR"), reportPlayer("6", "Puclin", "7,7", "MD", true)],
                [reportPlayer("15", "Jacob", "6,2", "AI"), reportPlayer("44", "Barać", "7,0", "DC"), reportPlayer("16", "Tepšić", "7,1", "CC"), reportPlayer("23", "Maglica", "6,9", "DL")],
                [reportPlayer("1", "Zelenika", "7,3", "GR")]
            ])
        },
        events: {
            home: [],
            away: ["37' D. Puclin M. Vuk"]
        },
        stats: [
            { label: "Posse", home: "62%", away: "38%" },
            { label: "Remates", home: "10", away: "13" },
            { label: "Remates à Baliza", home: "3", away: "6" },
            { label: "xG", home: "1,07", away: "1,44" },
            { label: "PADPAD", home: "14,00", away: "17,33" },
            { label: "Oportunidades Flagrantes", home: "0", away: "1" },
            { label: "Cantos", home: "6", away: "7" },
            { label: "Passes Completados", home: "87%", away: "83%" },
            { label: "Cruzamentos Completados", home: "24%", away: "10%" },
            { label: "Faltas", home: "11", away: "5" },
            { label: "Cartões amarelos", home: "2", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "124", away: "125" },
            { label: "Classificação Média", home: "6,6", away: "6,9" }
        ]
    },
    {
        fixtureKey: "2025-08-30-nk-slaven-belupo-nk-lokomotiva",
        date: "Sábado 30 de Agosto de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Filip Jović",
        rating: "8,06",
        coaches: { home: "Francisco Pinto", away: "P. Natal" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("90", "Nestorovski", "6,5", "AR"), reportPlayer("7", "Dabro", "6,3", "AAE")],
                [reportPlayer("15", "Čubelić", "7,0", "MO")],
                [reportPlayer("3", "Jakir", "6,3", "AI"), reportPlayer("10", "Caimacov", "6,9", "CJR"), reportPlayer("8", "Mrowca", "6,4", "MD"), reportPlayer("18", "Krušelj", "6,5", "AI")],
                [reportPlayer("4", "Kovicić", "6,7", "CC"), reportPlayer("6", "Božić", "6,4", "CC"), reportPlayer("2", "Medimorec", "6,7", "DC")],
                [reportPlayer("1", "Hadžikić", "6,5", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("10", "Rui Pedro", "6,4", "AvR")],
                [reportPlayer("7", "Trajkovski", "6,4", "AA"), reportPlayer("80", "Redmond", "6,8", "CL", true), reportPlayer("37", "Córdoba", "6,4", "AA")],
                [reportPlayer("28", "Belcar", "6,4", "CJA"), reportPlayer("40", "McCarthy", "6,3", "MD")],
                [reportPlayer("17", "Pajač", "6,8", "AI"), reportPlayer("4", "Sigali", "6,6", "CC"), reportPlayer("20", "Kolinger", "7,1", "DC"), reportPlayer("23", "Vešović", "7,0", "AI")],
                [reportPlayer("12", "Posavec", "6,8", "GR")]
            ])
        },
        events: {
            home: ["65' F. Jović"],
            away: ["15' N. Redmond D. Kolinger"]
        },
        stats: [
            { label: "Posse", home: "51%", away: "49%" },
            { label: "Remates", home: "8", away: "12" },
            { label: "Remates à Baliza", home: "3", away: "4" },
            { label: "xG", home: "1,24", away: "0,81" },
            { label: "PADPAD", home: "19,45", away: "17,62" },
            { label: "Oportunidades Flagrantes", home: "2", away: "0" },
            { label: "Cantos", home: "3", away: "6" },
            { label: "Passes Completados", home: "89%", away: "87%" },
            { label: "Cruzamentos Completados", home: "17%", away: "21%" },
            { label: "Faltas", home: "12", away: "13" },
            { label: "Cartões amarelos", home: "1", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "126", away: "128" },
            { label: "Classificação Média", home: "6,7", away: "6,6" }
        ]
    },
    {
        fixtureKey: "2025-08-30-hnk-vukovar-hnk-gorica",
        date: "Sábado 30 de Agosto de 2025",
        stadium: "Stadion HNK Cibalia",
        weather: "Vento Forte",
        playerOfMatch: "Robin Gonzalez",
        rating: "7,69",
        coaches: { home: "Hugo Macedo", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("21", "Puljić", "6,5", "AAE")],
                [reportPlayer("8", "Horvat", "7,3", "AI"), reportPlayer("10", "Gonzalez", "7,7", "MO", true), reportPlayer("36", "Butić", "7,4", "Ex")],
                [reportPlayer("77", "Shabani", "7,1", "MAA"), reportPlayer("23", "Matić", "6,6", "MD")],
                [reportPlayer("3", "Bosec", "7,7", "AI"), reportPlayer("5", "Elez", "7,5", "DC"), reportPlayer("4", "Mitrović", "6,8", "DC"), reportPlayer("91", "Tićinović", "6,8", "DL")],
                [reportPlayer("1", "Bulat", "6,7", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("18", "Fiolić", "7,5", "Ex", true), reportPlayer("24", "Pavičić", "5,9", "MO"), reportPlayer("20", "Vrzić", "6,5", "Ex")],
                [reportPlayer("10", "Pršir", "7,1", "CJA"), reportPlayer("7", "Bakić", "6,8", "ME")],
                [reportPlayer("36", "Kavelj", "6,8", "CJR")],
                [reportPlayer("19", "Čabraja", "6,2", "AI"), reportPlayer("4", "J. Filipović", "6,5", "DC"), reportPlayer("45", "Perić", "6,4", "CP"), reportPlayer("22", "Trontelj", "6,1", "AI")],
                [reportPlayer("1", "Matijaš", "6,5", "GRC")]
            ])
        },
        events: {
            home: ["36' R. Gonzalez Š. Butić", "58' P. Horvat A. Bosec"],
            away: ["11' I. Fiolić J. Pršir"]
        },
        stats: [
            { label: "Posse", home: "61%", away: "39%" },
            { label: "Remates", home: "20", away: "17" },
            { label: "Remates à Baliza", home: "8", away: "7" },
            { label: "xG", home: "1,85", away: "1,94" },
            { label: "PADPAD", home: "20,06", away: "30,57" },
            { label: "Oportunidades Flagrantes", home: "2", away: "1" },
            { label: "Cantos", home: "7", away: "8" },
            { label: "Passes Completados", home: "91%", away: "83%" },
            { label: "Cruzamentos Completados", home: "10%", away: "16%" },
            { label: "Faltas", home: "5", away: "8" },
            { label: "Cartões amarelos", home: "0", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "127", away: "125" },
            { label: "Classificação Média", home: "7,1", away: "6,6" }
        ]
    }
];

const croatiaMatchReports = [...croatiaRoundOneReports, ...croatiaRoundTwoReports, ...croatiaRoundThreeReports, ...croatiaRoundFourReports, ...croatiaRoundFiveReports];
const croatiaMatchReportsByFixtureKey = new Map(croatiaMatchReports.map((report) => [report.fixtureKey, report]));

croatiaFixtures.forEach((fixture, index) => {
    fixture.round = Math.floor(index / 5) + 1;
    fixture.report = croatiaMatchReportsByFixtureKey.get(fixture.fixtureKey) || null;
    if (fixture.report) {
        fixture.report.id = fixture.report.fixtureKey;
        fixture.report.fixture = fixture;
    }
});

const croatiaTransfers = [
    { date: "28/08/2025", player: "L. Đikić", from: "HNK Rijeka", to: "Olympiacos", value: "60m € (135m €)" },
    { date: "28/08/2025", player: "E. Nabiullin", from: "", to: "NK Osijek", value: "Livre" },
    { date: "28/08/2025", player: "R. Cerić", from: "HNK Rijeka", to: "Olympiacos", value: "125m €" },
    { date: "26/08/2025", player: "J. McCarthy", from: "", to: "NK Lokomotiva", value: "Livre" },
    { date: "24/08/2025", player: "I. Smith", from: "Man City", to: "NK Lokomotiva", value: "Empréstimo" },
    { date: "23/08/2025", player: "I. Kutia", from: "Hajduk Split", to: "Jadran Poreč", value: "Empréstimo - 1,7m €" },
    { date: "19/08/2025", player: "M. Jacob", from: "Hull City", to: "NK Varaždin", value: "Empréstimo - 24m €" },
    { date: "16/08/2025", player: "I. Barić", from: "NK Osijek", to: "Zrinski Osječko 1664", value: "Empréstimo" },
    { date: "14/08/2025", player: "T. O'Connor", from: "Wrexham", to: "NK Istra 1961", value: "750m €" },
    { date: "13/08/2025", player: "A. Elis", from: "", to: "Hajduk Split", value: "Livre" },
    { date: "13/08/2025", player: "R. Coly", from: "", to: "NK Osijek", value: "Livre" },
    { date: "13/08/2025", player: "D. Godec", from: "NK Lokomotiva", to: "Hajduk Split", value: "100m € (160m €)" },
    { date: "11/08/2025", player: "Emre Kutlu", from: "", to: "HNK Vukovar", value: "Livre" },
    { date: "09/08/2025", player: "G. Johnston", from: "Bolton", to: "NK Istra 1961", value: "2,1M €" },
    { date: "07/08/2025", player: "C. Ilić", from: "", to: "NK Osijek", value: "Livre" },
    { date: "06/08/2025", player: "N. Radnić", from: "Dinamo Zagreb", to: "Slavonija", value: "Empréstimo" },
    { date: "06/08/2025", player: "M. Gradel", from: "", to: "NK Osijek", value: "Livre" },
    { date: "05/08/2025", player: "R. Tugarev", from: "", to: "NK Osijek", value: "Livre" },
    { date: "05/08/2025", player: "B. Matić", from: "", to: "HNK Vukovar", value: "Livre" },
    { date: "05/08/2025", player: "Jean Carlos", from: "Raków Częstochowa", to: "HNK Rijeka", value: "775m €" },
    { date: "04/08/2025", player: "N. Redmond", from: "", to: "NK Lokomotiva", value: "Livre" },
    { date: "03/08/2025", player: "D. Pintarić", from: "NK Varaždin", to: "BSK Bijelo Brdo", value: "Empréstimo" },
    { date: "02/08/2025", player: "D. Ereiz", from: "Karlovac 1919", to: "NK Slaven Belupo", value: "Empréstimo" },
    { date: "02/08/2025", player: "J. Moreno", from: "", to: "HNK Vukovar", value: "Livre" },
    { date: "01/08/2025", player: "I. Marić", from: "", to: "HNK Vukovar", value: "Livre" },
    { date: "01/08/2025", player: "D. Melnjak", from: "Hajduk Split", to: "Gaziantep FK", value: "145m € (175m €)" },
    { date: "30/07/2025", player: "J. Ziković", from: "NK Istra 1961", to: "Novigrad 1947", value: "Empréstimo - 1,7m €" },
    { date: "28/07/2025", player: "P. Antolković", from: "Sesvete", to: "HNK Vukovar", value: "Empréstimo" },
    { date: "28/07/2025", player: "L. Posinković", from: "NK Varaždin", to: "Velež Mostar", value: "Empréstimo" },
    { date: "26/07/2025", player: "G. Rukavina", from: "HNK Rijeka", to: "AC Reggiana", value: "170m €" },
    { date: "26/07/2025", player: "D. Legbo", from: "HNK Rijeka", to: "HJK", value: "57m €" },
    { date: "25/07/2025", player: "K. Kelly", from: "Liverpool", to: "HNK Vukovar", value: "Empréstimo" },
    { date: "25/07/2025", player: "P. Andrić", from: "NK Lokomotiva", to: "LASK", value: "450m € (500m €)" },
    { date: "25/07/2025", player: "S. Mrowca", from: "", to: "NK Slaven Belupo", value: "Livre" },
    { date: "24/07/2025", player: "L. Pitt", from: "Liverpool", to: "HNK Vukovar", value: "Empréstimo" },
    { date: "24/07/2025", player: "F. Jazvić", from: "", to: "NK Slaven Belupo", value: "Livre" },
    { date: "24/07/2025", player: "M. Gagulić", from: "NK Osijek", to: "Dugopolje", value: "Empréstimo" },
    { date: "24/07/2025", player: "I. Ribar", from: "Rudeš", to: "HNK Vukovar", value: "Empréstimo" },
    { date: "23/07/2025", player: "T. Blackett", from: "", to: "HNK Rijeka", value: "Livre" },
    { date: "22/07/2025", player: "Vágner", from: "", to: "HNK Rijeka", value: "Livre" },
    { date: "22/07/2025", player: "G. Stepinac", from: "Karlovac 1919", to: "NK Slaven Belupo", value: "Empréstimo" },
    { date: "21/07/2025", player: "L. Ratshukudu", from: "NK Slaven Belupo", to: "Highbury FC", value: "Empréstimo" },
    { date: "21/07/2025", player: "S. Miettinen", from: "NK Istra 1961", to: "AC Horsens", value: "140m € (175m €)" },
    { date: "20/07/2025", player: "André", from: "Corinthians", to: "HNK Rijeka", value: "Empréstimo - 150m €" },
    { date: "20/07/2025", player: "T. Lacoux", from: "Újpest", to: "HNK Rijeka", value: "850m €" },
    { date: "19/07/2025", player: "B. Biró", from: "Kisvárda", to: "NK Varaždin", value: "Empréstimo" },
    { date: "18/07/2025", player: "M. Mitrović", from: "", to: "HNK Vukovar", value: "Livre" },
    { date: "17/07/2025", player: "Rui Pedro", from: "", to: "NK Lokomotiva", value: "Livre" },
    { date: "16/07/2025", player: "L. Islić", from: "", to: "NK Slaven Belupo", value: "Livre" },
    { date: "16/07/2025", player: "F. Taraba", from: "NK Istra 1961", to: "Juventus", value: "4M €" },
    { date: "15/07/2025", player: "N. Gaitán", from: "", to: "NK Osijek", value: "Livre" },
    { date: "15/07/2025", player: "A. Boršić", from: "NK Varaždin", to: "Deportivo La Coruña", value: "245m € (300m €)" },
    { date: "14/07/2025", player: "R. Ćosić", from: "", to: "NK Slaven Belupo", value: "Livre" },
    { date: "13/07/2025", player: "R. Tanashchuk", from: "", to: "NK Istra 1961", value: "Livre" },
    { date: "11/07/2025", player: "P. Horvat", from: "Dinamo Zagreb", to: "HNK Vukovar", value: "Empréstimo" },
    { date: "10/07/2025", player: "I. Dabo", from: "Shakhtar", to: "NK Istra 1961", value: "Empréstimo" },
    { date: "09/07/2025", player: "I. Canjuga", from: "NK Varaždin", to: "Rudeš", value: "Empréstimo" },
    { date: "08/07/2025", player: "T. Kralevski", from: "NK Lokomotiva", to: "Jarun", value: "Empréstimo - 310 €" },
    { date: "06/07/2025", player: "Paizinho", from: "NK Varaždin", to: "CR Caála", value: "Empréstimo" },
    { date: "06/07/2025", player: "S. Habek", from: "NK Varaždin", to: "Zrinski Osječko 1664", value: "Empréstimo" },
    { date: "05/07/2025", player: "I. Beviakva", from: "HNK Rijeka", to: "Orijent", value: "Empréstimo" },
    { date: "03/07/2025", player: "F. Jagarčec", from: "NK Varaždin", to: "Zrinski Osječko 1664", value: "Empréstimo" },
    { date: "01/07/2025", player: "G. Kovačević", from: "Dinamo Zagreb", to: "NK Lokomotiva", value: "Empréstimo" },
    { date: "30/06/2025", player: "J. Córdoba", from: "Dinamo Zagreb", to: "NK Lokomotiva", value: "Empréstimo" }
];

const leagues = [
    {
        id: "croatia",
        status: "live",
        statusLabel: "Em curso",
        nome: "Liga Croata",
        descricao: "Dashboard vivo da nova liga EMG na Croácia. A classificação, sessões e métricas vão sendo atualizadas após cada noite de jogos.",
        logo: "assets/logos/teams/croacia/supersport_hnl.png",
        logoAlt: "SuperSport HNL",
        epoca: "Época 26/27",
        formula: "(prevista - final) × 3",
        scores: croatiaSeasonScores,
        fixtures: croatiaFixtures,
        fixtureMonths: croatiaFixtureMonths,
        fixtureGroupBy: "round",
        tacas: [],
        liveCards: [
            { label: "Estado", value: "Liga em curso", meta: "Pronta para updates por sessão" },
            { label: "Última sessão", value: "A recolher", meta: "Resultados ainda por inserir" },
            { label: "Calendário", value: "36 jornadas", meta: "Fixture list carregada para a época completa" }
        ],
        livePages: [
            {
                id: "noticias",
                label: "Notícias",
                news: [
                    {
                        eyebrow: "EMG Croácia",
                        title: "Istra empata aos 90+6 e instala o caos",
                        articleTitle: "Istra empata aos 90+6 e a polémica volta a perseguir Rato",
                        highlight: "Istra",
                        previewCopy: [
                            "<strong>Pula, 17 de Agosto</strong> — O <span class=\"news-inline-highlight\">NK Istra 1961</span> empatou frente ao <span class=\"news-inline-highlight\">NK Lokomotiva Zagreb</span> aos 90+6... apesar de apenas terem sido dados 5 minutos de compensação.",
                            "O treinador do Lokomotiva, Painatal, terminou o jogo absolutamente furioso e terá perguntado à equipa de arbitragem: <span class=\"news-inline-highlight\">“Vocês estavam à espera do terceiro?”</span>"
                        ],
                        previewQuote: "",
                        copy: [
                            "<strong>Pula, 17 de Agosto</strong> — O empate tardio do <span class=\"news-inline-highlight\">NK Istra 1961</span> frente ao <span class=\"news-inline-highlight\">NK Lokomotiva Zagreb</span> já é um dos momentos mais polémicos do arranque da temporada croata.",
                            "O golo surgiu aos 90+6, apesar de apenas cinco minutos de compensação terem sido mostrados pelo quarto árbitro, e reacendeu imediatamente as eternas suspeitas que parecem acompanhar as equipas treinadas por João Rato desde os tempos da Escócia.",
                            "Ao longo das últimas épocas, vários episódios caricatos acabaram por criar uma aura quase mística à volta do treinador português: golos em claro fora de jogo que passaram despercebidos, penalties extremamente “interpretativos”, descontos inesperadamente longos e um número estatisticamente curioso de ressaltos aos 90 minutos.",
                            "No caso do encontro desta noite, o Lokomotiva vencia por 2-1 até ao minuto 95, altura em que os jogadores começaram naturalmente a gerir posse e a baixar linhas, acreditando que o apito final estava iminente.",
                            "Só que... aparentemente ainda faltava jogar.",
                            "O Istra lançou mais um ataque já depois dos cinco minutos regulamentares e acabou por chegar ao empate, mergulhando o estádio num misto de euforia e confusão absoluta.",
                            "Depois do apito final, Painatal continuou explosivo a pedir explicações ao árbitro e, já na conferência de imprensa, não escondeu a irritação: <span class=\"news-inline-highlight\">“Se era para jogar até o Istra marcar, podiam ter avisado antes. Tínhamos poupado tempo a todos.”</span>",
                            "Pouco depois, já mais calmo, acrescentou: <span class=\"news-inline-highlight\">“Não estou a dizer nada. Só acho curioso que estas coisas aconteçam tantas vezes ao mesmo treinador.”</span>",
                            "Do lado do Istra, João Rato recusou qualquer polémica: <span class=\"news-inline-highlight\">“O árbitro deu o tempo que entendeu necessário. Nós jogámos até ao fim.”</span>",
                            "Ainda assim, vários jornalistas presentes notaram um sorriso discreto do treinador enquanto abandonava a sala de imprensa.",
                            "Entretanto, a liga já confirmou que não existe qualquer investigação em curso relacionada com a arbitragem do encontro, apesar da crescente pressão mediática em torno do caso."
                        ],
                        image: "assets/treinadores/painatal/painatal_news2.png",
                        visual: {
                            type: "photo",
                            cardPosition: "58% 42%",
                            cardSize: "cover",
                            articlePosition: "60% center",
                            articleSize: "cover"
                        },
                        quote: "O problema não é jogar até aos 96. O problema é nunca sabermos quando acaba.",
                        quoteBy: "Painatal"
                    },
                    {
                        eyebrow: "Arranque da liga",
                        title: "Croácia abre novo capítulo",
                        highlight: "Croácia",
                        copy: [
                            "<strong>Zagreb, 1 de Agosto</strong> — A <span class=\"news-inline-highlight\">Liga EMG</span> troca a Escócia pela Croácia depois de uma época que deixou rivalidades abertas, treinadores expostos e a sensação de que quase ninguém saiu exatamente igual. O novo campeonato chega com menos margem para desculpas e com oito projetos a tentar provar que aprenderam alguma coisa.",
                            "Zép entra na Rijeka com estatuto de candidato e pressão para confirmar favoritismo. Rato pega no Istra 1961 como quem procura uma equipa incómoda, capaz de roubar pontos a qualquer um. Chico quer dar identidade ao Slaven Belupo, Nabais tenta transformar o Varaždin numa ameaça real e Gamy aparece no Osijek com ambição suficiente para mexer cedo na tabela.",
                            "Painatal tem no Lokomotiva uma oportunidade para reescrever a narrativa depois dos altos e baixos anteriores. Cardoso procura estabilidade no Gorica, enquanto Hugo chega ao Vukovar como um dos nomes mais imprevisíveis do grupo. A experiência escocesa fica como aviso: reputação ajuda a começar, mas na Liga EMG só os resultados sustentam a conversa."
                        ],
                        image: "assets/logos/teams/croacia/supersport_hnl.png",
                        visual: {
                            type: "logo",
                            cardPosition: "72% 42%",
                            cardSize: "min(44%, 300px) auto",
                            articlePosition: "50% 58px",
                            articleSize: "min(31%, 300px) auto"
                        },
                        quote: "A Croácia vai mostrar quem trouxe lições da Escócia e quem trouxe só histórias.",
                        quoteBy: "Redação EMG"
                    },
                    {
                        eyebrow: "Sala de imprensa",
                        title: "Hugo Macedo assume o Vukovar",
                        highlight: "Hugo Macedo",
                        previewCopy: [
                            "<strong>Vukovar, 20 de Julho</strong> — O <span class=\"news-inline-highlight\">HNK Vukovar 1991</span> oficializou <span class=\"news-inline-highlight\">Hugo Macedo</span> como novo treinador principal. Conhecido pelo detalhe táctico quase obsessivo, o técnico português promete trazer um futebol moderno, agressivo e carregado de... instruções.",
                            "Nos bastidores, fala-se de um modelo de jogo particularmente exigente para os laterais."
                        ],
                        previewQuote: "",
                        copy: [
                            "<strong>Vukovar, 20 de Julho</strong> — O <span class=\"news-inline-highlight\">HNK Vukovar 1991</span> apresentou oficialmente <span class=\"news-inline-highlight\">Hugo Macedo</span> como novo treinador da equipa principal, numa contratação que promete trazer intensidade, preparação detalhada e uma quantidade preocupante de sliders mexidos antes de cada jogo.",
                            "Depois de uma passagem pela Escócia marcada por uma evolução tática “repentina”, Hugo chega à Croácia já com reputação de ser um dos treinadores mais dedicados da EMG no que toca a análise de vídeo. Segundo fontes próximas da equipa técnica, o novo treinador passa horas a estudar futebol internacional, tendências modernas e “conteúdo educativo altamente específico”.",
                            "A direção do Vukovar acredita que encontrou um técnico capaz de elevar imediatamente o nível competitivo da equipa: <span class=\"news-inline-highlight\">“O mister Hugo está sempre atualizado. Às vezes até demais.”</span>",
                            "Jogadores que já participaram nos primeiros treinos admitem alguma dificuldade em acompanhar todas as indicações tácticas, especialmente os laterais, que aparentemente recebem mais instruções individuais do que o resto da equipa junto.",
                            "Um elemento do balneário revelou: <span class=\"news-inline-highlight\">“O lateral esquerdo tem literalmente uma folha A4 só para ele.”</span>",
                            "Entre as ordens dadas aos corredores defensivos estarão instruções como subir mais, subir menos, cruzar cedo, cruzar atrasado, temporizar, pressionar mais, pressionar menos, fechar dentro, abrir na linha e “ser criativo mas disciplinado”.",
                            "Questionado sobre algumas dessas decisões tácticas durante a apresentação, Hugo Macedo mostrou-se surpreendido: <span class=\"news-inline-highlight\">“Sinceramente nem me lembro de ter colocado metade dessas instruções. O meu adjunto às vezes gosta de explorar opções.”</span>",
                            "A resposta gerou alguns sorrisos entre jornalistas presentes, sobretudo porque o treinador ficou conhecido na Escócia por utilizar praticamente todas as instruções de equipa disponíveis ao mesmo tempo, criando aquilo que um antigo jogador descreveu como <span class=\"news-inline-highlight\">“um futebol impossível de prever. Inclusive para nós.”</span>",
                            "Apesar das inevitáveis brincadeiras, existe curiosidade genuína para perceber o impacto do técnico português na Croácia. Até porque, independentemente das críticas, Hugo continua a apresentar uma impressionante capacidade de aparecer constantemente alinhado com as tendências mais recentes do futebol europeu.",
                            "Nos bastidores do Vukovar já se comenta que o treinador pediu três monitores extra para análise, acesso permanente à sala de vídeo e uma internet “minimamente capaz de aguentar 4K”.",
                            "A estreia oficial está marcada para as próximas semanas, num jogo onde muitos adeptos estarão atentos não só ao resultado... mas também ao número de instruções individuais atribuídas aos laterais."
                        ],
                        image: "assets/treinadores/hugo/hugo_profile3.png",
                        visual: {
                            type: "portrait",
                            cardPosition: "72% 42%",
                            cardSize: "cover",
                            articlePosition: "68% 42%",
                            articleSize: "cover"
                        },
                        quote: "Hoje em dia o futebol evolui muito rápido. Temos de estudar constantemente.",
                        quoteBy: "Hugo Macedo"
                    },
                    {
                        eyebrow: "Sala de imprensa",
                        title: "Rui Pedro assina pelo Lokomotiva",
                        highlight: "Rui Pedro",
                        copy: [
                            "<strong>Zagreb, 18 de Julho</strong> — Está confirmado. <span class=\"news-inline-highlight\">Rui Pedro</span> é o mais recente reforço do <span class=\"news-inline-highlight\">NK Lokomotiva Zagreb</span>, num negócio fechado nas últimas horas que já começa a agitar o mercado da Liga Croata.",
                            "O avançado português chega com estatuto de contratação forte, depois de uma época marcada pela consistência ofensiva e por momentos decisivos."
                        ],
                        image: "assets/treinadores/painatal/painatal_new.png",
                        visual: { type: "photo" },
                        quote: "É um projeto ambicioso. Quero deixar marca desde o primeiro jogo.",
                        quoteBy: "Rui Pedro"
                    }
                ]
            },
            {
                id: "treinador-mes",
                label: "Treinador do mês",
                eyebrow: "Destaque mensal",
                title: "Por atribuir",
                copy: "Quando houver dados suficientes, esta página pode destacar o treinador do mês com registo, momento-chave e mini narrativa.",
                items: ["Registo", "Momento-chave", "Quote da imprensa"]
            }
        ],
        transfers: croatiaTransfers,
        tabela: croatiaCurrentTable.map((entry) => ({
            pos: entry.pos,
            inf: entry.inf,
            equipa: entry.equipa,
            logo: entry.logo,
            jogador: entry.jogador,
            j: entry.j,
            v: entry.v,
            e: entry.e,
            d: entry.d,
            gm: entry.gm,
            gs: entry.gs,
            dg: entry.dg,
            pts: entry.pts,
            prevista: entry.prevista,
            emgPontos: entry.jogador ? 0 : null,
            form: entry.form,
            zone: ""
        }))
    },
    {
        id: "scotland",
        status: "completed",
        statusLabel: "Concluída",
        nome: "Liga Escocesa",
        descricao: "Classificação final completa da Premiership, com dados da liga, jogador EMG associado e pontos pela fórmula da época.",
        logo: "assets/logos/teams/escocia/spfl.png",
        logoAlt: "William Hill Premiership",
        epoca: "Época 25/26",
        formula: "(prevista - final) × 3",
        scores: scotlandSeasonScores,
        fixtures: scotlandFixtures,
        fixtureMonths: scotlandFixtureMonths,
        merits: scotlandLeagueMerits,
        sideStats: scotlandSideStats,
        tacas: [
            { tipo: "Vencedor da Taça da Liga", jogador: "Gonçalo", pontos: 5 },
            { tipo: "Finalista da Taça da Liga", jogador: null, pontos: 2 },
            { tipo: "Vencedor da Taça", jogador: "Gonçalo", pontos: 5 },
            { tipo: "Finalista da Taça", jogador: null, pontos: 2 },
            { tipo: "Vencedor de competição europeia", jogador: null, pontos: 3 }
        ],
        tabela: [
            { pos: 1, inf: "C", equipa: "Rangers", logo: "assets/logos/teams/escocia/rangers.png", jogador: null, j: 38, v: 22, e: 10, d: 6, gm: 84, gs: 41, dg: 43, pts: 76, prevista: 2, zone: "championship" },
            { pos: 2, inf: "--", equipa: "Hibernian", logo: "assets/logos/teams/escocia/hibernian.png", jogador: "Rato", j: 38, v: 23, e: 4, d: 11, gm: 85, gs: 57, dg: 28, pts: 73, prevista: 4, zone: "championship" },
            { pos: 3, inf: "--", equipa: "Aberdeen", logo: "assets/logos/teams/escocia/aberdeen.png", jogador: "Gonçalo", j: 38, v: 21, e: 9, d: 8, gm: 74, gs: 45, dg: 29, pts: 72, prevista: 6, zone: "europe" },
            { pos: 4, inf: "--", equipa: "Dundee", logo: "assets/logos/teams/escocia/dundee.png", jogador: "Nabais", j: 38, v: 17, e: 9, d: 12, gm: 61, gs: 55, dg: 6, pts: 60, prevista: 10, zone: "europe" },
            { pos: 5, inf: "--", equipa: "Celtic", logo: "assets/logos/teams/escocia/celtic.png", jogador: null, j: 38, v: 17, e: 8, d: 13, gm: 70, gs: 47, dg: 23, pts: 59, prevista: 1, zone: "" },
            { pos: 6, inf: "--", equipa: "St. Mirren", logo: "assets/logos/teams/escocia/st_mirren.png", jogador: null, j: 38, v: 15, e: 10, d: 13, gm: 52, gs: 53, dg: -1, pts: 55, prevista: 8, zone: "" },
            { pos: 7, inf: "--", equipa: "Hearts", logo: "assets/logos/teams/escocia/hearts.png", jogador: "Cardoso", j: 38, v: 16, e: 7, d: 15, gm: 76, gs: 74, dg: 2, pts: 55, prevista: 3, zone: "" },
            { pos: 8, inf: "--", equipa: "Falkirk", logo: "assets/logos/teams/escocia/falkirk.png", jogador: "Hugo", j: 38, v: 14, e: 11, d: 13, gm: 65, gs: 62, dg: 3, pts: 53, prevista: 11, zone: "" },
            { pos: 9, inf: "--", equipa: "Kilmarnock", logo: "assets/logos/teams/escocia/kilmarnock.png", jogador: "Chico", j: 38, v: 14, e: 7, d: 17, gm: 51, gs: 64, dg: -13, pts: 49, prevista: 9, zone: "" },
            { pos: 10, inf: "--", equipa: "Dundee Utd", logo: "assets/logos/teams/escocia/dundee_united.png", jogador: "Gamy", j: 38, v: 14, e: 6, d: 18, gm: 60, gs: 71, dg: -11, pts: 48, prevista: 7, zone: "" },
            { pos: 11, inf: "PI", equipa: "Motherwell", logo: "assets/logos/teams/escocia/motherwell.png", jogador: null, j: 38, v: 4, e: 8, d: 26, gm: 30, gs: 80, dg: -50, pts: 20, prevista: 5, zone: "playoff" },
            { pos: 12, inf: "D", equipa: "Livingston", logo: "assets/logos/teams/escocia/livingston.png", jogador: "Painatal", j: 38, v: 4, e: 5, d: 29, gm: 41, gs: 101, dg: -60, pts: 17, prevista: 12, zone: "relegated" }
        ].map((entry) => {
            let emgEntry = scotlandSeasonScores.find((score) => score.equipa === entry.equipa);
            return { ...entry, emgPontos: emgEntry ? emgEntry.pontos : null };
        })
    }
];

function calcBonuses(league) {
    if (league.status === "live") {
        return league.bonuses || [];
    }

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
    .filter((league) => league.status === "completed")
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

const DRAW_COMPLETED = true;

const FINAL_RESULTS = [
    { jogador: "Gonçalo",  equipa: "HNK Rijeka",      img: "assets/logos/teams/croacia/rijeka.png",        rank: 3 },
    { jogador: "Gamy",     equipa: "NK Osijek",        img: "assets/logos/teams/croacia/osijek.png",        rank: 4 },
    { jogador: "Painatal", equipa: "NK Lokomotiva",    img: "assets/logos/teams/croacia/nk_lokomotiva.png", rank: 5 },
    { jogador: "Rato",     equipa: "NK Istra 1961",    img: "assets/logos/teams/croacia/istra.png",         rank: 6 },
    { jogador: "Nabais",   equipa: "NK Varaždin",      img: "assets/logos/teams/croacia/varazdin.png",      rank: 7 },
    { jogador: "Chico",    equipa: "NK Slaven Belupo", img: "assets/logos/teams/croacia/slaven.png",        rank: 8 },
    { jogador: "Cardoso",  equipa: "HNK Gorica",       img: "assets/logos/teams/croacia/gorica.png",        rank: 9 },
    { jogador: "Hugo",     equipa: "HNK Vukovar",      img: "assets/logos/teams/croacia/hnkvukovar.png",    rank: 10 }
];

const coachByShortName = Object.fromEntries(coachProfiles.map((coach) => [coach.nome, coach]));
const coachByNarrativeTeam = {
    "Aberdeen": { coachName: "Gonçalo", team: "Aberdeen" },
    "Hibernian": { coachName: "Rato", team: "Hibernian" },
    "Dundee": { coachName: "Nabais", team: "Dundee" },
    "Hearts": { coachName: "Cardoso", team: "Hearts" },
    "Falkirk": { coachName: "Hugo", team: "Falkirk" },
    "Kilmarnock": { coachName: "Chico", team: "Kilmarnock" },
    "Dundee Utd": { coachName: "Gamy", team: "Dundee Utd" },
    "Livingston": { coachName: "Painatal", team: "Livingston" }
};
let selectedCoachId = coachProfiles[0].id;
let activeLeagueLivePage = {};
let activeLeagueNewsIndex = {};
let leagueLiveAutoTimer = null;
let pausedLeagueLivePages = new Set();
let activeLeagueId = "croacia";

const TOTAL_ROUNDS = jogadores.length;
const ITEM_WIDTH_TEAM = 126;
const ITEM_WIDTH_PLAYER = 164;
const SPIN_DURATION = 7000;
const TEAM_SPIN_LOOPS = 5;
const PLAYER_SPIN_LOOPS = 6;
const LEAGUE_LIVE_AUTO_MS = 11000;

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
    if (DRAW_COMPLETED) return;
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
        if (DRAW_COMPLETED) {
            showCompletedDraw();
        } else {
            tryPlayDrawMusic();
        }
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
        cardPhoto: cardFile ? `assets/treinadores/${folder}/${cardFile}` : "",
        profilePhotos: profileFiles.map((file) => `assets/treinadores/${folder}/${file}`),
        statsPhoto: statsFiles[0] ? `assets/treinadores/${folder}/${statsFiles[0]}` : ""
    };
}

function getCoachStats(coach) {
    return coachStats[coach.id] || null;
}

function renderCoachStatsMarkup(coach) {
    let stats = getCoachStats(coach);
    return stats
        ? `
            <div class="coach-modal-stats-grid">
                ${Object.entries(stats).map(([label, value]) => `
                    <div class="coach-stat-card">
                        <div class="coach-stat-label">${label}</div>
                        <div class="coach-stat-value">${value}</div>
                    </div>
                `).join("")}
            </div>
        `
        : `<div class="coach-modal-stats-empty">Stats em breve</div>`;
}

function renderCoachStatsWideMarkup(coach) {
    let stats = getCoachStats(coach);
    let extras = coachProfileExtras[coach.id];
    let trophyMarkup = renderCoachTrophyCabinet(coach);
    let narrativeMarkup = renderCoachInsightGrid(
        "Narrativa",
        extras?.narrative
            ? [
                extras.narrative.victim,
                extras.narrative.biggestWin,
                extras.narrative.worstLoss,
                extras.narrative.nemesis,
                extras.narrative.chaotic
            ].filter(Boolean)
            : []
    );
    let legacyMarkup = renderCoachInsightGrid("Legado", extras?.legacy ? [extras.legacy.rating, extras.legacy.scorer] : []);
    let identityMarkup = renderCoachInsightGrid("Identidade", extras?.identity ? [extras.identity.specialty, extras.identity.tactical] : []);

    if (!stats && !extras) {
        return `<div class="coach-modal-stats-empty">Stats em breve</div>`;
    }

    return `${trophyMarkup}${narrativeMarkup}${legacyMarkup}${identityMarkup}`;
}

const palmaresCountries = {
    croacia: {
        flag: "assets/flags/croatia.webp",
        label: "Croácia",
        available: false,
        items: []
    },
    escocia: {
        flag: "assets/flags/scotland.webp",
        label: "Escócia",
        available: true,
        items: [
            {
                key: "league",
                label: "Liga Escocesa",
                icon: "assets/logos/trophy_cabinet/escocia/williamhillpremiership.png",
                lockedIcon: "assets/logos/trophy_cabinet/escocia/williamhillpremiership_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/escocia/Williamhillpremiership_locked_clickable.png"
            },
            {
                key: "league-cup",
                label: "Taça da Liga Escocesa",
                icon: "assets/logos/trophy_cabinet/escocia/premiersports.png",
                lockedIcon: "assets/logos/trophy_cabinet/escocia/premiersports_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/escocia/Premiersports_locked_clickable.png",
                cabinetImage: "assets/logos/trophy_cabinet/escocia/Premiersports_cabinet.png"
            },
            {
                key: "cup",
                label: "Taça Escocesa",
                icon: "assets/logos/trophy_cabinet/escocia/scottishgascup.png",
                lockedIcon: "assets/logos/trophy_cabinet/escocia/scottishgascup_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/escocia/ScottishGasCup_locked_clickable.png",
                cabinetImage: "assets/logos/trophy_cabinet/escocia/ScottishGasCup_cabinet.png"
            },
            {
                key: "europa",
                label: "UEFA Europe League",
                icon: "assets/logos/trophy_cabinet/UEFA/europe league/UefaEuropeLeague.png",
                lockedIcon: "assets/logos/trophy_cabinet/UEFA/europe league/UefaEuropeLeague_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/UEFA/europe league/UefaEuropeLeague_locked_clickable.png"
            },
            {
                key: "conference",
                label: "UEFA Conference League",
                icon: "assets/logos/trophy_cabinet/UEFA/conference league/UEFAConference.png",
                lockedIcon: "assets/logos/trophy_cabinet/UEFA/conference league/UefaConference_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/UEFA/conference league/UefaConference_locked_clickable.png"
            },
            {
                key: "champions",
                label: "UEFA Champions League",
                icon: "assets/logos/trophy_cabinet/UEFA/champions league/UefaChampionsLeague.png",
                lockedIcon: "assets/logos/trophy_cabinet/UEFA/champions league/UefaChampionsLeague_locked.png",
                lockedClickableImage: "assets/logos/trophy_cabinet/UEFA/champions league/UefaChampionsLeague_locked_clickable.png"
            }
        ]
    }
};

function renderCoachTrophyCabinet(coach) {
    let extras = coachProfileExtras[coach.id] || {};
    let trophyCounts = extras.trophyCounts || {};
    let defaultVisibleKeys = {
        escocia: ["league", "league-cup", "cup"]
    };
    let flagsMarkup = Object.entries(palmaresCountries).map(([countryKey, country]) => {
        let disabled = !country.available;
        let counts = trophyCounts[countryKey] || {};
        let visibleKeys = extras.trophyVisibility?.[countryKey] || defaultVisibleKeys[countryKey] || country.items.map((t) => t.key);
        let items = country.items
            .filter((t) => visibleKeys.includes(t.key))
            .map((t) => ({ ...t, count: counts[t.key] || 0 }));
        return `
            <div class="coach-palmares-flag-item${disabled ? " coach-palmares-flag-item--disabled" : ""}"
                 data-country="${countryKey}"
                 data-available="${country.available}"
                 data-trophies='${JSON.stringify(items)}'>
                <img class="coach-palmares-flag-img" src="${country.flag}" alt="${country.label}" loading="lazy">
                <div class="coach-palmares-flag-label">${country.label}</div>
                ${disabled ? `<div class="coach-palmares-coming-soon">Coming soon!</div>` : ""}
            </div>
        `;
    }).join("");

    return `
        <div class="coach-stats-section">
            <div class="coach-stats-section-title">Palmarés</div>
            <div class="coach-palmares-flags-rail">
                ${flagsMarkup}
            </div>
            <div class="coach-palmares-trophies-panel" id="palmaresTrophiesPanel"></div>
        </div>
    `;
}

function renderTrophySlotsMarkup(items) {
    return items.map((trophy) => {
        let imgSrc = trophy.icon ? (trophy.count > 0 ? trophy.icon : trophy.lockedIcon) : "";
        let lightboxSrc = trophy.count > 0
            ? (trophy.cabinetImage || trophy.icon || "")
            : (trophy.lockedClickableImage || "");
        let clickable = lightboxSrc ? `data-trophy-img="${lightboxSrc}" data-trophy-label="${trophy.label}"` : "";
        return `
        <div class="coach-trophy-slot coach-trophy-slot--${trophy.key}${trophy.count > 0 ? " unlocked" : ""}"${clickable ? ` ${clickable} style="cursor:pointer"` : ""}>
            <div class="coach-trophy-icon" aria-hidden="true">
                ${imgSrc
                    ? `<img src="${imgSrc}" alt="" class="coach-trophy-img${trophy.count > 0 ? " unlocked" : " locked"}" loading="lazy">`
                    : `<svg viewBox="0 0 24 24" fill="none">
                        <path d="M8 4h8v3c0 2.8-1.7 5.3-4 6.4C9.7 12.3 8 9.8 8 7V4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                        <path d="M9 18h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                        <path d="M10 14h4v4h-4z" fill="currentColor" opacity="0.18"/>
                        <path d="M6 5H4c0 2.4 1.2 4 3 4.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                        <path d="M18 5h2c0 2.4-1.2 4-3 4.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                    </svg>`
                }
            </div>
            <div class="coach-trophy-label">${trophy.label}</div>
            <div class="coach-trophy-count">${trophy.count > 0 ? `x${trophy.count}` : "—"}</div>
        </div>
    `}).join("");
}

let activePalmaresCountry = null;

function setupPalmaresFlagInteraction() {
    let modal = document.getElementById("coachModal");
    if (!modal) return;
    let flags = modal.querySelectorAll(".coach-palmares-flag-item:not(.coach-palmares-flag-item--disabled)");
    let panel = modal.querySelector("#palmaresTrophiesPanel");
    if (!panel) return;

    function expandFlag(flag) {
        modal.querySelectorAll(".coach-palmares-flag-item.active").forEach((f) => f.classList.remove("active"));
        flag.classList.add("active");
        activePalmaresCountry = flag.dataset.country;
        let items = JSON.parse(flag.dataset.trophies || "[]");
        panel.innerHTML = `<div class="coach-trophy-cabinet">${renderTrophySlotsMarkup(items)}</div>`;
        panel.classList.add("expanded");

        panel.querySelectorAll(".coach-trophy-slot[data-trophy-img]").forEach((slot) => {
            slot.addEventListener("click", () => {
                openTrophyLightbox(slot.dataset.trophyImg, slot.dataset.trophyLabel);
            });
        });
    }

    flags.forEach((flag) => {
        flag.addEventListener("click", () => {
            let wasActive = flag.classList.contains("active");

            modal.querySelectorAll(".coach-palmares-flag-item.active").forEach((f) => f.classList.remove("active"));

            if (wasActive) {
                panel.classList.remove("expanded");
                activePalmaresCountry = null;
                panel.addEventListener("transitionend", function handler() {
                    if (!panel.classList.contains("expanded")) panel.innerHTML = "";
                    panel.removeEventListener("transitionend", handler);
                });
                return;
            }

            expandFlag(flag);
        });
    });

    if (activePalmaresCountry) {
        let remembered = modal.querySelector(`.coach-palmares-flag-item[data-country="${activePalmaresCountry}"][data-available="true"]`);
        if (remembered) expandFlag(remembered);
    }
}

function openTrophyLightbox(src, label) {
    let existing = document.getElementById("trophyLightbox");
    if (existing) existing.remove();

    let lightbox = document.createElement("div");
    lightbox.id = "trophyLightbox";
    lightbox.className = "trophy-lightbox";
    lightbox.innerHTML = `
        <div class="trophy-lightbox-backdrop"></div>
        <div class="trophy-lightbox-content">
            <img src="${src}" alt="${label}">
            <div class="trophy-lightbox-label">${label}</div>
        </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", () => lightbox.remove());
}

function renderCoachInsightGrid(title, items) {
    let hasItems = items.length > 0;
    let sectionSlug = String(title || "").toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");
    let placeholderBySection = {
        "Narrativa": [
            { label: "Maior Vítima", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Maior Vitória", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Pior Derrota", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Némesis", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Jogo Mais Caótico", value: "A recolher", meta: "Sem dados ainda" }
        ],
        "Legado": [
            { label: "Melhor Jogador", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Melhor Marcador", value: "A recolher", meta: "Sem dados ainda" }
        ],
        "Identidade": [
            { label: "Especialidade", value: "A recolher", meta: "Sem dados ainda" },
            { label: "Assinatura Tática", value: "A recolher", meta: "Sem dados ainda" }
        ]
    };
    let safeItems = hasItems
        ? items
        : (placeholderBySection[title] || [
            { label: "A recolher", value: "A recolher", meta: "Sem dados ainda" },
            { label: "A recolher", value: "A recolher", meta: "Sem dados ainda" }
        ]);

    let renderLegacyStats = (statsText) => {
        let stats = String(statsText || "")
            .split("|")
            .map((part) => part.trim())
            .filter(Boolean);
        if (!stats.length) return "";

        let formatLegacyStat = (stat, index) => {
            let cleaned = String(stat || "").trim();
            let isRating = index === 0 && /^\d+([.,]\d+)?$/.test(cleaned);
            if (isRating) {
                return {
                    className: "coach-legacy-stat-chip coach-legacy-stat-chip--rating",
                    label: "Média",
                    value: cleaned,
                    secondary: ""
                };
            }

            let goalsMatch = cleaned.match(/^(\d+)\s*G$/i);
            if (goalsMatch) {
                return {
                    className: "coach-legacy-stat-chip",
                    label: "Golos",
                    value: goalsMatch[1],
                    secondary: ""
                };
            }

            let assistsMatch = cleaned.match(/^(\d+)\s*A$/i);
            if (assistsMatch) {
                return {
                    className: "coach-legacy-stat-chip",
                    label: "Assist.",
                    value: assistsMatch[1],
                    secondary: ""
                };
            }

            let gamesMatch = cleaned.match(/^(\d+)(?:\((\d+)\))?\s*J$/i);
            if (gamesMatch) {
                return {
                    className: "coach-legacy-stat-chip coach-legacy-stat-chip--games",
                    label: "Jogos",
                    value: gamesMatch[1],
                    secondary: gamesMatch[2] ? `(${gamesMatch[2]})` : ""
                };
            }

            return {
                className: "coach-legacy-stat-chip",
                label: "",
                value: cleaned,
                secondary: ""
            };
        };

        return `
            <div class="coach-legacy-stats">
                ${stats.map((stat, index) => {
                    let parsed = formatLegacyStat(stat, index);
                    let label = parsed.label ? `<span class="coach-legacy-stat-prefix">${parsed.label}</span>` : "";
                    let secondary = parsed.secondary ? `<span class="coach-legacy-stat-secondary">${parsed.secondary}</span>` : "";
                    return `<span class="${parsed.className}">${label}<span class="coach-legacy-stat-value">${parsed.value}</span>${secondary}</span>`;
                }).join("")}
            </div>
        `;
    };

    let renderNarrativeTarget = (teamName) => {
        let coachInfo = coachByNarrativeTeam[String(teamName || "").trim()];
        if (!coachInfo) return null;
        let coach = getCoachByShortName(coachInfo.coachName);
        if (!coach) return null;
        return `<span class="coach-narrative-target">${getCoachLinkMarkup(coach.nome, "coach-narrative-link")}</span>`;
    };

    let renderNarrativeOpponents = (line, separatorRegex, separatorLabel) => {
        let parts = String(line || "").split(separatorRegex).map((part) => part.trim()).filter(Boolean);
        if (!parts.length) return "";
        let rendered = parts.map((part) => renderNarrativeTarget(part) || part);
        return `<div class="coach-insight-line">${rendered.join(`<span class="coach-narrative-separator">${separatorLabel}</span>`)}</div>`;
    };

    let renderNarrativeValue = (item) => {
        let input = String(item?.value || "");
        if (!input) return "";
        let valueLines = input.split("\n").filter(Boolean);
        let label = String(item?.label || "");

        if (/Maior Vítima|Némesis/i.test(label)) {
            return valueLines.map((line) => renderNarrativeOpponents(line, /\s+e\s+/, "e")).join("");
        }

        if (/Maior Vitória|Pior Derrota|Jogo Mais Caótico/i.test(label)) {
            return valueLines.map((line) => {
                let segments = line.split(/\s+ou\s+/).map((segment) => segment.trim()).filter(Boolean);
                return segments.map((segment) => {
                    let match = segment.match(/^(.+?)\s+vs\s+(.+)$/i);
                    if (!match) {
                        return `<div class="coach-insight-line">${segment}</div>`;
                    }
                    let score = match[1].trim();
                    let target = renderNarrativeTarget(match[2].trim());
                    if (!target) {
                        return `<div class="coach-insight-line">${segment}</div>`;
                    }
                    return `
                        <div class="coach-insight-line coach-insight-line--match">
                            <span class="coach-narrative-match-target">${target}</span>
                            <span class="coach-narrative-score">
                                <span class="coach-narrative-score-label">Resultado</span>
                                <span class="coach-narrative-score-value">${score}</span>
                            </span>
                        </div>
                    `;
                }).join("");
            }).join("");
        }

        return valueLines.map((line) => `<div class="coach-insight-line">${line}</div>`).join("");
    };

    let renderLegacyCard = (item) => {
        let lines = String(item.value || "").split("\n").filter(Boolean);
        let blocks = lines.map((line) => {
            let parts = line.split(" - ");
            let name = parts.shift() || "";
            let inlineStats = parts.length ? parts.join(" - ") : "";
            return `
                <div class="coach-legacy-player-block">
                    <div class="coach-insight-line"><span class="coach-insight-player">${name}</span></div>
                    ${inlineStats ? renderLegacyStats(inlineStats) : ""}
                </div>
            `;
        }).join("");

        let hasInlineStats = lines.some((line) => line.includes(" - "));
        let footerStats = !hasInlineStats && String(item.meta || "").includes("|")
            ? renderLegacyStats(item.meta)
            : "";
        let note = String(item.meta || "").includes("|") ? "" : String(item.meta || "").replace(/\n/g, "<br>");

        return `
            <div class="coach-insight-card${hasItems ? "" : " empty"}">
                <div class="coach-insight-label"><span>${item.label}</span></div>
                <div class="coach-insight-value coach-insight-value--legacy">${blocks}</div>
                ${footerStats}
                ${note ? `<div class="coach-insight-meta coach-insight-meta--legacy-note">${note}</div>` : ""}
            </div>
        `;
    };

    let renderValue = (value) => {
        let lines = String(value).split("\n");
        return lines.map((line) => {
            let parts = line.split(" - ");
            if (parts.length > 1) {
                let [name, ...rest] = parts;
                return `<div class="coach-insight-line"><span class="coach-insight-player">${name}</span><span class="coach-insight-inline-meta"> - ${rest.join(" - ")}</span></div>`;
            }
            return `<div class="coach-insight-line">${line}</div>`;
        }).join("");
    };

    return `
        <div class="coach-stats-section coach-stats-section--${sectionSlug}">
            <div class="coach-stats-section-title">${title}</div>
            <div class="coach-insight-grid coach-insight-grid--${sectionSlug}">
                ${safeItems.map((item) => sectionSlug === "legado"
                    ? renderLegacyCard(item)
                    : `
                        <div class="coach-insight-card${hasItems ? "" : " empty"}">
                            <div class="coach-insight-label"><span>${item.label}</span></div>
                            <div class="coach-insight-value">${sectionSlug === "narrativa" ? renderNarrativeValue(item) : renderValue(item.value)}</div>
                            <div class="coach-insight-meta">${String(item.meta || "").replace(/\n/g, "<br>")}</div>
                        </div>
                    `
                ).join("")}
            </div>
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
    let statsWide = document.getElementById("coachModalStatsWide");
    let isStats = view === "stats";

    presentationTab?.classList.toggle("active", !isStats);
    presentationTab?.setAttribute("aria-selected", isStats ? "false" : "true");
    statsTab?.classList.toggle("active", isStats);
    statsTab?.setAttribute("aria-selected", isStats ? "true" : "false");

    presentationPanel?.classList.toggle("active", !isStats);
    if (presentationPanel) presentationPanel.hidden = isStats;
    statsPanel?.classList.toggle("active", isStats);
    if (statsPanel) statsPanel.hidden = !isStats;
    statsWide?.classList.toggle("active", isStats);
    if (statsWide) statsWide.hidden = !isStats;

    if (isStats) {
        requestAnimationFrame(() => fitNarrativeNames(document.getElementById("coachModal")));
    }
}

function fitNarrativeNames(scope = document) {
    if (!scope) return;
    scope.querySelectorAll(".coach-narrative-link").forEach((link) => {
        link.style.fontSize = "";
        link.style.letterSpacing = "";
        let target = link.closest(".coach-narrative-match-target") || link.parentElement;
        if (!target) return;
        let availableWidth = target.clientWidth;
        if (!availableWidth) return;

        const sizes = [13, 12, 11, 10, 9];
        link.style.fontSize = `${sizes[0]}px`;

        for (let i = 1; i < sizes.length && link.scrollWidth > availableWidth; i += 1) {
            link.style.fontSize = `${sizes[i]}px`;
        }

        if (link.scrollWidth > availableWidth) {
            link.style.letterSpacing = "0px";
        }
    });
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
    let statsWideEl = document.getElementById("coachModalStatsWideContent");
    if (statsWideEl) {
        statsWideEl.innerHTML = renderCoachStatsWideMarkup(coach);
        bindCoachLinks(statsWideEl);
    }

}

function openCoachModal(id, preserveTab) {
    let currentView = preserveTab && document.getElementById("coachModalTabStats")?.classList.contains("active") ? "stats" : "presentation";
    let coach = getCoachById(id);
    selectCoach(id);
    renderCoachModal(coach);
    setCoachModalView(currentView);
    setupCoachModalGallery();
    setupPalmaresFlagInteraction();
    document.getElementById("coachModal").hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => fitNarrativeNames(document.getElementById("coachModal")));
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
    let selector = document.getElementById("leagueSelector");
    if (!selector) return;

    let activeLeague = leagues.find((league) => league.id === activeLeagueId) || leagues[0];
    activeLeagueId = activeLeague.id;

    let options = leagues.map((league) => {
        let label = league.statusLabel ? `${league.nome} — ${league.statusLabel}` : league.nome;
        return `
            <button
                class="league-main-option ${league.id === activeLeague.id ? "active" : ""}"
                type="button"
                onclick="selectMainLeague('${league.id}')"
                aria-pressed="${league.id === activeLeague.id ? "true" : "false"}"
            >
                ${label}
            </button>
        `;
    }).join("");

    let activeLabel = activeLeague.statusLabel ? `${activeLeague.nome} — ${activeLeague.statusLabel}` : activeLeague.nome;
    selector.innerHTML = `
        <div class="league-main-select-wrap">
            <button class="league-main-select" type="button" onclick="toggleMainLeagueMenu()" aria-expanded="false" aria-label="Escolher liga">
                ${activeLabel}
            </button>
            <div class="league-main-menu">
                ${options}
            </div>
        </div>
    `;

    renderLeague(activeLeague.id);
}

function closeMainLeagueMenu() {
    let menu = document.querySelector(".league-main-select-wrap.open");
    if (!menu) return;
    menu.classList.remove("open");
    menu.querySelector(".league-main-select")?.setAttribute("aria-expanded", "false");
}

function toggleMainLeagueMenu() {
    let menu = document.querySelector(".league-main-select-wrap");
    if (!menu) return;
    let willOpen = !menu.classList.contains("open");
    closeMainLeagueMenu();
    if (willOpen) {
        menu.classList.add("open");
        menu.querySelector(".league-main-select")?.setAttribute("aria-expanded", "true");
    }
}

function selectMainLeague(leagueId) {
    activeLeagueId = leagueId;
    closeMainLeagueMenu();
    renderLeagueSelector();
}

function getLeagueTeamEntry(league, teamName) {
    return league.tabela.find((entry) => entry.equipa === teamName) || null;
}

function renderLeagueTeamName(league, teamName, extraClass = "") {
    let entry = getLeagueTeamEntry(league, teamName);
    let coach = entry?.jogador;
    let coachMarkup = coach ? getCoachLinkMarkup(coach, "league-match-coach-link") : `<span class="league-match-coach-empty">PC</span>`;
    let logoMarkup = entry?.logo ? `<img src="${entry.logo}" alt="${teamName}" class="league-match-logo" loading="lazy">` : "";
    return `
        <span class="league-match-team ${extraClass}">
            <span class="league-match-club-row">
                ${logoMarkup}
                <span class="league-match-club">${teamName}</span>
            </span>
            <span class="league-match-coach">${coachMarkup}</span>
        </span>
    `;
}

function getMatchReportById(reportId) {
    return leagues
        .flatMap((league) => league.fixtures || [])
        .map((fixture) => fixture.report)
        .find((report) => report?.id === reportId) || null;
}

function getReportTeamMarkup(report, side) {
    let fixture = report.fixture;
    let teamName = side === "home" ? fixture.home : fixture.away;
    let league = leagues.find((entry) => entry.fixtures?.includes(fixture));
    let team = league ? getLeagueTeamEntry(league, teamName) : null;
    let logoMarkup = team?.logo ? `<img src="${team.logo}" alt="${teamName}" class="match-report-team-logo">` : "";
    return `
        <div class="match-report-team match-report-team-${side}">
            ${side === "away" ? logoMarkup : ""}
            <div>
                <strong>${teamName}</strong>
                <span>${report.coaches?.[side] || team?.jogador || "PC"}</span>
            </div>
            ${side === "home" ? logoMarkup : ""}
        </div>
    `;
}

function getReportStatNumber(value) {
    let normalized = String(value).replace("%", "").replace(",", ".").replace(/[^\d.-]/g, "");
    let parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
}

function renderMatchReportStats(report) {
    return report.stats.map((stat) => {
        let homeValue = getReportStatNumber(stat.home);
        let awayValue = getReportStatNumber(stat.away);
        let total = homeValue + awayValue || 1;
        let homeWidth = Math.max(4, (homeValue / total) * 100);
        let awayWidth = Math.max(4, (awayValue / total) * 100);
        return `
            <div class="match-report-stat">
                <div class="match-report-stat-label">${stat.label}</div>
                <div class="match-report-stat-row">
                    <span>${stat.home}</span>
                    <div class="match-report-bars" aria-hidden="true">
                        <i class="home" style="width:${homeWidth}%"></i>
                        <i class="away" style="width:${awayWidth}%"></i>
                    </div>
                    <span>${stat.away}</span>
                </div>
            </div>
        `;
    }).join("");
}

function getFormationPlayerNames(formation = {}) {
    return (formation.players || [])
        .flat()
        .map((player) => player?.name)
        .filter(Boolean)
        .sort((a, b) => b.length - a.length);
}

function parseMatchReportEvent(event = "", playerNames = []) {
    const eventMatch = event.match(/^(\d+(?:\+\d+)?)'\s+(.+)$/);
    if (!eventMatch) {
        return { minute: "", scorer: event, assist: "" };
    }

    const [, minute, body] = eventMatch;
    if (body.includes("(AG)")) {
        return { minute, scorer: body.replace(/\s*\(AG\)\s*/g, ""), assist: "Autogolo" };
    }

    const knownScorer = playerNames.find((name) => body === name || body.startsWith(`${name} `));
    if (knownScorer) {
        return {
            minute,
            scorer: knownScorer,
            assist: body.slice(knownScorer.length).trim()
        };
    }

    const parts = body.split(/\s+/);
    if (parts.length <= 2) {
        return { minute, scorer: body, assist: "" };
    }

    return {
        minute,
        scorer: parts.slice(0, 2).join(" "),
        assist: parts.slice(2).join(" ")
    };
}

function renderMatchReportEvents(events = [], formation = {}) {
    if (!events.length) {
        return `<span class="match-report-empty">Sem golos</span>`;
    }

    const playerNames = getFormationPlayerNames(formation);
    return events.map((event) => {
        const parsed = parseMatchReportEvent(event, playerNames);
        return `
            <span class="match-report-goal">
                <i aria-hidden="true">⚽</i>
                <span class="match-report-goal-minute">${parsed.minute}'</span>
                <span class="match-report-goal-main">
                    <b>${parsed.scorer}</b>
                    ${parsed.assist ? `<em>Assist. ${parsed.assist}</em>` : ""}
                </span>
            </span>
        `;
    }).join("");
}

const matchFormationLayouts = {
    "4-3-3 DM": [["PL"], ["E", "D"], ["MC", "MC"], ["MD"], ["DE", "DC", "DC", "DD"], ["GR"]],
    "4-2-3-1": [["PL"], ["E", "MO", "D"], ["MC", "MC"], ["DE", "DC", "DC", "DD"], ["GR"]],
    "3-4-2-1": [["PL"], ["MO", "MO"], ["ME", "MC", "MC", "MD"], ["DC", "DC", "DC"], ["GR"]],
    "3-4-1-2": [["PL", "PL"], ["MO"], ["ME", "MC", "MC", "MD"], ["DC", "DC", "DC"], ["GR"]],
    "4-3-1-2": [["PL", "PL"], ["MO"], ["MC", "MC", "MC"], ["DE", "DC", "DC", "DD"], ["GR"]]
};

function getFormationPlayerPosition(player) {
    return (typeof player === "string" ? player : player?.pos || "").toUpperCase();
}

function inferThreeCenterBackFormationName(formation) {
    let rows = formation?.players || [];
    if (rows.length < 4) return formation?.name;

    let defenseRow = rows[rows.length - 2] || [];
    let centerBackPositions = new Set(["DC", "CC"]);
    let hasThreeCenterBacks = defenseRow.length === 3
        && defenseRow.every((player) => centerBackPositions.has(getFormationPlayerPosition(player)));

    if (!hasThreeCenterBacks) return formation?.name;

    let outfieldRows = rows.slice(0, -1);
    let shape = [defenseRow.length, ...outfieldRows.slice(0, -1).map((row) => row.length).reverse()];
    return shape.join("-");
}

function getReportFormation(report, side) {
    let formation = report.formations?.[side];
    if (!formation) return { name: "Sem dados", players: [] };
    if (typeof formation === "string") {
        return {
            name: formation,
            players: (matchFormationLayouts[formation] || [[formation]]).map((row) => row.map((pos) => ({ pos })))
        };
    }
    return {
        name: inferThreeCenterBackFormationName(formation) || formation.name || "Sem dados",
        players: formation.players || []
    };
}

function renderFormationPlayer(player) {
    if (!player) return "";
    if (typeof player === "string") {
        player = { pos: player };
    }

    let hasDetails = player.name || player.number || player.rating;
    let number = player.number || "";
    let name = player.name || "";
    let rating = player.rating || "";
    let position = player.pos || "";

    if (!hasDetails) {
        return `<span class="match-report-player-node is-placeholder"><span class="match-report-player-pos-only">${position}</span></span>`;
    }

    return `
        <span class="match-report-player-node" title="${[number ? `#${number}` : "", name, position, rating].filter(Boolean).join(" · ")}">
            ${player.goal ? `<span class="match-report-player-goal" aria-hidden="true">⚽</span>` : ""}
            <span class="match-report-shirt">${number}</span>
            <span class="match-report-player-badge">
                ${rating ? `<b>${rating}</b>` : ""}
                ${position ? `<em>${position}</em>` : ""}
            </span>
            ${name ? `<span class="match-report-player-name">${name}</span>` : ""}
        </span>
    `;
}

function renderFormationPitch(report, side) {
    let formation = getReportFormation(report, side);
    let rows = formation.players;
    let totalRows = rows.length;
    return `
        <div class="match-report-pitch match-report-pitch-${side}">
            ${rows.map((row, index) => `
                <div class="match-report-pitch-row match-report-pitch-row-${index + 1}" style="--row-count:${row.length}; --row-index:${index + 1}; --total-rows:${totalRows};">
                    ${row.map((player) => renderFormationPlayer(player)).join("")}
                </div>
            `).join("")}
        </div>
    `;
}

function renderFormationTeamHeader(report, side) {
    let fixture = report.fixture;
    let teamName = side === "home" ? fixture.home : fixture.away;
    let league = leagues.find((entry) => entry.fixtures?.includes(fixture));
    let team = league ? getLeagueTeamEntry(league, teamName) : null;
    let formation = getReportFormation(report, side);
    let logoMarkup = team?.logo ? `<img src="${team.logo}" alt="${teamName}">` : "";
    return `
        <div class="match-report-tactic-head">
            <span>${logoMarkup}${teamName}</span>
            <strong>${formation.name}</strong>
        </div>
    `;
}

function renderMatchReportTacticCard(report, side) {
    if (!report.formations) return "";
    return `
        <section class="match-report-tactic-card match-report-tactic-card-${side}" aria-label="Formação ${side === "home" ? "da equipa da casa" : "da equipa visitante"}">
            ${renderFormationTeamHeader(report, side)}
            ${renderFormationPitch(report, side)}
        </section>
    `;
}

function openMatchReport(reportId) {
    let report = getMatchReportById(reportId);
    if (!report) return;

    closeMatchReport();

    let fixture = report.fixture;
    let score = `${fixture.homeGoals}-${fixture.awayGoals}`;
    let modal = document.createElement("div");
    modal.id = "matchReportModal";
    modal.className = "match-report-modal";
    modal.innerHTML = `
        <div class="match-report-backdrop" onclick="closeMatchReport()"></div>
        <article class="match-report-dialog" role="dialog" aria-modal="true" aria-label="Relatório do jogo">
            <button class="match-report-close" type="button" onclick="closeMatchReport()" aria-label="Fechar relatório">&times;</button>
            <header class="match-report-hero">
                <span class="match-report-league">Hrvatska nogometna liga</span>
                <div class="match-report-scoreline">
                    ${getReportTeamMarkup(report, "home")}
                    <strong class="match-report-score">${score}</strong>
                    ${getReportTeamMarkup(report, "away")}
                </div>
                <div class="match-report-meta">
                    <span>${report.date}</span>
                    <span>${report.stadium}</span>
                    <span>${report.weather}</span>
                    <span class="match-report-mvp">&#9733; ${report.playerOfMatch} <b>${report.rating}</b></span>
                </div>
            </header>
            <div class="match-report-body">
                ${renderMatchReportTacticCard(report, "home")}
                <div class="match-report-center">
                    <section class="match-report-card match-report-events">
                        <h3>Eventos do jogo</h3>
                        <div class="match-report-events-grid">
                            <div>${renderMatchReportEvents(report.events.home, report.formations?.home)}</div>
                            <div>${renderMatchReportEvents(report.events.away, report.formations?.away)}</div>
                        </div>
                    </section>
                    <section class="match-report-card match-report-data">
                        <h3>Dados do jogo</h3>
                        ${renderMatchReportStats(report)}
                    </section>
                </div>
                ${renderMatchReportTacticCard(report, "away")}
            </div>
        </article>
    `;
    document.body.appendChild(modal);
    document.body.classList.add("modal-open");
}

function closeMatchReport() {
    let modal = document.getElementById("matchReportModal");
    if (!modal) return;
    modal.remove();
    if (!document.getElementById("coachModal") || document.getElementById("coachModal").hidden) {
        document.body.classList.remove("modal-open");
    }
}

function renderFormDots(form = []) {
    let normalized = [...form].slice(-5);
    while (normalized.length < 5) normalized.unshift("-");

    return `
        <div class="standings-form">
            ${normalized.map((result) => {
                let key = String(result).toUpperCase();
                let label = key === "W" ? "V" : key === "L" ? "D" : key;
                let className = key === "W" || key === "V" ? "win" : key === "E" ? "draw" : key === "L" || key === "D" ? "loss" : "empty";
                return `<span class="standings-form-dot ${className}">${label === "-" ? "" : label}</span>`;
            }).join("")}
        </div>
    `;
}

function renderLeagueAwards(league) {
    if (!league.merits?.awards?.length) return "";
    let awards = league.merits.awards.map((award) => `
        <div class="league-award-card">
            <div class="league-award-label">${award.label}</div>
            <div class="league-award-name">${award.name}</div>
            <div class="league-award-meta">${award.team} · ${award.meta}</div>
        </div>
    `).join("");

    return `
        <section class="league-side-card league-awards-card">
            <div class="league-side-head">
                <span>Elite da época</span>
                <strong>Méritos</strong>
            </div>
            <div class="league-awards-grid">${awards}</div>
        </section>
    `;
}

function renderLeagueTeamOfYear(league) {
    if (!league.merits?.teamOfYear?.length) return "";
    let teamOfYear = league.merits.teamOfYear.map((player) => `
        <div class="league-toty-player" style="--x: ${player.x}%; --y: ${player.y}%;">
            <div class="league-toty-shirt">${player.number}</div>
            <div class="league-toty-name">${player.name}</div>
            <div class="league-toty-meta">${player.role} · ${player.team}</div>
        </div>
    `).join("");

    return `
        <section class="league-side-card league-toty-card">
            <div class="league-side-head">
                <span>Onze ideal</span>
                <strong>Team of the Year</strong>
            </div>
            <div class="league-toty-panel">
                <div class="league-toty-pitch">
                    <div class="league-toty-lines" aria-hidden="true">
                        <span class="league-toty-halfway"></span>
                        <span class="league-toty-centre-circle"></span>
                        <span class="league-toty-box league-toty-box-left"></span>
                        <span class="league-toty-box league-toty-box-right"></span>
                        <span class="league-toty-small-box league-toty-small-box-left"></span>
                        <span class="league-toty-small-box league-toty-small-box-right"></span>
                    </div>
                    ${teamOfYear}
                </div>
            </div>
        </section>
    `;
}

function getLeagueNewsVisual(article) {
    let image = article.image || "assets/treinadores/painatal/painatal_new.png";
    let visual = article.visual || {};
    let type = visual.type || (
        image.includes("supersport_hnl") ? "logo" :
        image.includes("hugo_profile3") ? "portrait" :
        "photo"
    );

    let cardPosition = visual.cardPosition || (type === "logo" ? "72% 42%" : type === "portrait" ? "72% 42%" : "50% top");
    let cardSize = visual.cardSize || (type === "logo" ? "min(44%, 300px) auto" : type === "portrait" ? "cover" : "auto 100%");
    let articlePosition = visual.articlePosition || (type === "logo" ? "50% 58px" : type === "portrait" ? "68% 42%" : "60% center");
    let articleSize = visual.articleSize || (type === "logo" ? "min(31%, 300px) auto" : "cover");

    return {
        image,
        type,
        cardClass: [
            type === "logo" ? "is-logo-news" : "",
            type === "portrait" ? "is-portrait-news" : "",
            cardSize === "cover" ? "is-cover-news" : ""
        ].filter(Boolean).join(" "),
        articleClass: [
            type === "logo" ? "is-logo-bg" : "",
            type !== "logo" && articleSize === "cover" ? "is-photo-cover" : ""
        ].filter(Boolean).join(" "),
        style: [
            `--news-bg: url('${image}')`,
            `--news-card-position: ${cardPosition}`,
            `--news-card-size: ${cardSize}`,
            `--news-article-position: ${articlePosition}`,
            `--news-article-size: ${articleSize}`
        ].join("; ")
    };
}

function renderLeagueLiveCards(league) {
    if (league.livePages?.length) {
        let defaultPage = league.livePages.find((page) => page.id === "noticias") || league.livePages[0];
        let activePage = defaultPage;
        let newsItems = activePage.news || [];
        let activeNewsIndex = Math.min(activeLeagueNewsIndex[league.id] || 0, Math.max(newsItems.length - 1, 0));
        let activeNews = newsItems[activeNewsIndex] || activePage;
        let displayPage = activeNews;
        let visual = getLeagueNewsVisual(displayPage);
        let liveNewsClass = visual.cardClass;
        liveNewsClass = liveNewsClass ? ` ${liveNewsClass}` : "";
        let title = displayPage.highlight
            ? displayPage.title.replace(displayPage.highlight, `<span>${displayPage.highlight}</span>`)
            : displayPage.title;
        let previewCopy = displayPage.previewCopy ?? displayPage.copy;
        let copyBlocks = Array.isArray(previewCopy) ? previewCopy : [previewCopy].filter(Boolean);
        let copyMarkup = copyBlocks.map((paragraph) => `<p class="league-live-page-copy">${paragraph}</p>`).join("");
        let previewQuote = displayPage.previewQuote ?? displayPage.quote;
        let quoteMarkup = previewQuote
            ? `
                <aside class="league-news-quote">
                    <span>“</span>
                    <p>${previewQuote}</p>
                    ${displayPage.quoteBy ? `<strong>— ${displayPage.quoteBy}</strong>` : ""}
                </aside>
            `
            : "";
        let newsControls = newsItems.length > 1
            ? `
                <div class="league-news-carousel">
                    <button class="league-news-arrow" type="button" onclick="event.stopPropagation(); stepLeagueNews('${league.id}', -1)" aria-label="Notícia anterior">‹</button>
                    <div class="league-news-dots" aria-label="Indicador de notícias">
                        ${newsItems.map((_, index) => `
                            <button
                                class="league-news-dot ${index === activeNewsIndex ? "active" : ""}"
                                type="button"
                                onclick="event.stopPropagation(); selectLeagueNews('${league.id}', ${index})"
                                aria-label="Ver notícia ${index + 1}"
                                aria-pressed="${index === activeNewsIndex ? "true" : "false"}"
                            ></button>
                        `).join("")}
                    </div>
                    <button class="league-news-arrow" type="button" onclick="event.stopPropagation(); stepLeagueNews('${league.id}', 1)" aria-label="Notícia seguinte">›</button>
                </div>
            `
            : "";

        return `
            <section class="league-side-card league-live-panel-card">
                <div class="league-side-head centered">
                    <strong>Notícias</strong>
                </div>
                <article class="league-live-page is-news${liveNewsClass}" style="${visual.style}" data-live-page="noticias" onclick="openLeagueNewsArticle('${league.id}', ${activeNewsIndex})" onkeydown="if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); openLeagueNewsArticle('${league.id}', ${activeNewsIndex}); }" role="button" tabindex="0" aria-label="Abrir notícia completa">
                    <div class="league-live-page-content">
                        <div class="league-live-page-kicker">
                            <span class="league-live-status-dot"></span>
                            <span>${displayPage.eyebrow}</span>
                        </div>
                        <div class="league-live-page-title">${title}</div>
                        ${copyMarkup}
                        <span class="league-news-read-more">Ler artigo completo</span>
                    </div>
                    ${quoteMarkup}
                    ${newsControls}
                </article>
            </section>
        `;
    }

    if (!league.liveCards?.length) return "";
    let cards = league.liveCards.map((card) => `
        <div class="league-live-card">
            <div class="league-live-label">${card.label}</div>
            <div class="league-live-value">${card.value}</div>
            <div class="league-live-meta">${card.meta}</div>
        </div>
    `).join("");

    return `
        <section class="league-side-card league-live-panel-card">
            <div class="league-side-head">
                <span>Dashboard vivo</span>
                <strong>Época Atual</strong>
            </div>
            <div class="league-live-grid">${cards}</div>
        </section>
    `;
}

function setLeagueLivePage(leagueId, pageId) {
    pausedLeagueLivePages.delete(leagueId);
    activeLeagueLivePage[leagueId] = pageId;
    renderLeague(leagueId);
}

function closeLeagueLiveMenus() {
    document.querySelectorAll(".league-live-select-wrap.open").forEach((menu) => {
        menu.classList.remove("open");
        menu.querySelector(".league-live-select")?.setAttribute("aria-expanded", "false");
    });
}

function toggleLeagueLiveMenu(leagueId) {
    let menu = document.querySelector(`[data-live-menu="${leagueId}"]`)?.closest(".league-live-select-wrap");
    if (!menu) return;

    let willOpen = !menu.classList.contains("open");
    closeLeagueLiveMenus();

    if (willOpen) {
        pausedLeagueLivePages.add(leagueId);
        if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
        menu.classList.add("open");
        menu.querySelector(".league-live-select")?.setAttribute("aria-expanded", "true");
    }
}

function selectLeagueLivePage(leagueId, pageId) {
    closeLeagueLiveMenus();
    setLeagueLivePage(leagueId, pageId);
}

function selectLeagueNews(leagueId, index) {
    let league = leagues.find((entry) => entry.id === leagueId);
    let newsPage = league?.livePages?.find((page) => page.id === "noticias");
    if (!newsPage?.news?.length) return;

    pausedLeagueLivePages.add(leagueId);
    if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
    activeLeagueLivePage[leagueId] = "noticias";
    activeLeagueNewsIndex[leagueId] = Math.max(0, Math.min(index, newsPage.news.length - 1));
    renderLeague(leagueId);
}

function stepLeagueNews(leagueId, direction = 1) {
    let league = leagues.find((entry) => entry.id === leagueId);
    let newsPage = league?.livePages?.find((page) => page.id === "noticias");
    if (!newsPage?.news?.length) return;

    let currentIndex = activeLeagueNewsIndex[leagueId] || 0;
    let nextIndex = (currentIndex + Number(direction || 1) + newsPage.news.length) % newsPage.news.length;
    selectLeagueNews(leagueId, nextIndex);
}

function getLeagueNewsArticle(leagueId, index) {
    let league = leagues.find((entry) => entry.id === leagueId);
    let newsPage = league?.livePages?.find((page) => page.id === "noticias");
    if (!newsPage?.news?.length) return null;

    let safeIndex = Math.max(0, Math.min(Number(index) || 0, newsPage.news.length - 1));
    return {
        league,
        article: newsPage.news[safeIndex],
        index: safeIndex,
        total: newsPage.news.length
    };
}

function renderLeagueNewsCopy(copy) {
    let blocks = Array.isArray(copy) ? copy : [copy].filter(Boolean);
    return blocks.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function openLeagueNewsArticle(leagueId, index) {
    let newsData = getLeagueNewsArticle(leagueId, index);
    if (!newsData) return;

    let { article, index: activeIndex, total } = newsData;
    let visual = getLeagueNewsVisual(article);
    let copyBlocks = Array.isArray(article.copy) ? article.copy : [article.copy].filter(Boolean);
    let articleModifiers = [
        visual.articleClass,
        copyBlocks.length > 4 ? "is-long-read" : ""
    ].filter(Boolean).join(" ");
    let articleClass = `league-news-article-dialog${articleModifiers ? ` ${articleModifiers}` : ""}`;
    let articleTitle = article.articleTitle || article.title;
    let title = article.highlight
        ? articleTitle.replace(article.highlight, `<span>${article.highlight}</span>`)
        : articleTitle;
    let introCopyMarkup = renderLeagueNewsCopy(copyBlocks.slice(0, 1));
    let sideCopyMarkup = renderLeagueNewsCopy(copyBlocks.slice(1));
    let quoteMarkup = article.quote
        ? `
            <aside class="league-news-article-quote">
                <span>“</span>
                <p>${article.quote}</p>
                ${article.quoteBy ? `<strong>— ${article.quoteBy}</strong>` : ""}
            </aside>
        `
        : "";
    let sideMarkup = sideCopyMarkup || quoteMarkup
        ? `
            <div class="league-news-article-side">
                ${sideCopyMarkup ? `<div class="league-news-article-side-text">${sideCopyMarkup}</div>` : ""}
                ${quoteMarkup}
            </div>
        `
        : "";
    let articleControls = total > 1
        ? `
            <div class="league-news-article-carousel">
                <button class="league-news-article-arrow" type="button" onclick="openLeagueNewsArticle('${leagueId}', ${(activeIndex - 1 + total) % total})" aria-label="Notícia anterior">‹</button>
                <div class="league-news-article-dots" aria-label="Indicador de notícias">
                    ${Array.from({ length: total }, (_, dotIndex) => `
                        <button
                            class="league-news-dot ${dotIndex === activeIndex ? "active" : ""}"
                            type="button"
                            onclick="openLeagueNewsArticle('${leagueId}', ${dotIndex})"
                            aria-label="Ver notícia ${dotIndex + 1}"
                            aria-pressed="${dotIndex === activeIndex ? "true" : "false"}"
                        ></button>
                    `).join("")}
                </div>
                <button class="league-news-article-arrow" type="button" onclick="openLeagueNewsArticle('${leagueId}', ${(activeIndex + 1) % total})" aria-label="Notícia seguinte">›</button>
            </div>
        `
        : "";

    pausedLeagueLivePages.add(leagueId);
    if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
    activeLeagueLivePage[leagueId] = "noticias";
    activeLeagueNewsIndex[leagueId] = activeIndex;

    let existingModal = document.getElementById("leagueNewsArticleModal");
    existingModal?.remove();

    let modal = document.createElement("div");
    modal.id = "leagueNewsArticleModal";
    modal.className = "league-news-article-modal";
    modal.innerHTML = `
        <div class="league-news-article-backdrop" onclick="closeLeagueNewsArticle()"></div>
        <article class="${articleClass}" style="${visual.style}">
            <button class="league-news-article-close" type="button" onclick="closeLeagueNewsArticle()" aria-label="Fechar notícia">×</button>
            <section class="league-news-article-body">
                <div class="league-news-article-copy">
                    <div class="league-live-page-kicker">
                        <span class="league-live-status-dot"></span>
                        <span>${article.eyebrow || "Sala de imprensa"}</span>
                    </div>
                    <h2 class="league-news-article-title">${title}</h2>
                    <div class="league-news-article-divider"></div>
                    <div class="league-news-article-text">
                        ${introCopyMarkup}
                    </div>
                </div>
                ${sideMarkup}
                ${articleControls}
            </section>
        </article>
    `;

    document.body.appendChild(modal);
    document.body.classList.add("modal-open");
}

function closeLeagueNewsArticle() {
    let modal = document.getElementById("leagueNewsArticleModal");
    if (!modal) return;
    modal.remove();
    if (!document.getElementById("matchReportModal") && (!document.getElementById("coachModal") || document.getElementById("coachModal").hidden)) {
        document.body.classList.remove("modal-open");
    }
}

function stepLeagueLivePage(leagueId, direction = 1) {
    let league = leagues.find((entry) => entry.id === leagueId);
    if (!league?.livePages?.length) return;

    let currentPageId = activeLeagueLivePage[league.id] || league.livePages[0].id;
    let currentIndex = league.livePages.findIndex((page) => page.id === currentPageId);
    let nextIndex = (currentIndex + Number(direction || 1) + league.livePages.length) % league.livePages.length;
    pausedLeagueLivePages.delete(league.id);
    activeLeagueLivePage[league.id] = league.livePages[nextIndex].id;
    renderLeague(league.id);
}

function pauseLeagueLiveCarousel(leagueId) {
    pausedLeagueLivePages.add(leagueId);
    if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
}

document.addEventListener("click", (event) => {
    if (!event.target.closest(".league-live-select-wrap")) {
        closeLeagueLiveMenus();
    }
    if (!event.target.closest(".league-main-select-wrap")) {
        closeMainLeagueMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.getElementById("leagueNewsArticleModal")) {
        closeLeagueNewsArticle();
    }
});

function scheduleLeagueLiveAutoAdvance(league) {
    if (leagueLiveAutoTimer) clearTimeout(leagueLiveAutoTimer);
    let newsPage = league.livePages?.find((page) => page.id === "noticias");
    if (!newsPage?.news || newsPage.news.length < 2) return;
    if (pausedLeagueLivePages.has(league.id)) return;

    leagueLiveAutoTimer = setTimeout(() => {
        if (document.hidden) {
            scheduleLeagueLiveAutoAdvance(league);
            return;
        }
        if (pausedLeagueLivePages.has(league.id)) return;

        let currentIndex = activeLeagueNewsIndex[league.id] || 0;
        activeLeagueLivePage[league.id] = "noticias";
        activeLeagueNewsIndex[league.id] = (currentIndex + 1 + newsPage.news.length) % newsPage.news.length;
        renderLeague(league.id);
    }, LEAGUE_LIVE_AUTO_MS);
}

function renderTransferClub(league, clubName) {
    if (!clubName) {
        return `<span class="league-transfer-club-name muted" title="Sem clube">Sem clube</span>`;
    }

    let entry = getLeagueTeamEntry(league, clubName);
    let clubTitle = escapeAttribute(clubName);
    if (entry?.logo) {
        return `
            <span class="league-transfer-club-cell league-transfer-club-cell--logo-only" title="${clubTitle}">
                <img src="${entry.logo}" alt="${clubName}" class="league-transfer-team-logo" loading="lazy">
            </span>
        `;
    }

    return `
        <span class="league-transfer-club-cell">
            <span class="league-transfer-club-name" title="${clubTitle}">${clubName}</span>
        </span>
    `;
}

function formatTransferValue(value) {
    return String(value || "")
        .replace(/Empréstimo/g, "Emp.")
        .replace(/Emp\\. -/g, "Emp. ·");
}

function escapeAttribute(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function renderLeagueTransfers(league) {
    if (!league.transfers?.length) return "";
    let humanTeams = new Set((league.tabela || []).filter((entry) => entry.jogador).map((entry) => entry.equipa));
    let parseDate = (date) => {
        let [day, month, year] = String(date).split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
    };
    let rows = [...league.transfers]
        .sort((a, b) => parseDate(b.date) - parseDate(a.date))
        .map((item) => {
            let isIncoming = humanTeams.has(item.to);
            let type = isIncoming ? "Entrada" : "Saída";
            let playerTitle = escapeAttribute(item.player);
            let valueTitle = escapeAttribute(item.value);
            let routeTitle = escapeAttribute(`${item.from || "Sem clube"} → ${item.to || "Sem clube"}`);
            let rowTitle = escapeAttribute(`${item.date} · ${item.player} · ${item.from || "Sem clube"} → ${item.to || "Sem clube"} · ${item.value}`);

            return `
                <div class="league-transfer-row ${isIncoming ? "incoming" : "outgoing"}" title="${rowTitle}">
                    <div class="league-transfer-date">${item.date}</div>
                    <div class="league-transfer-player">
                        <div class="league-transfer-player-name" title="${playerTitle}">${item.player}</div>
                        <div class="league-transfer-type">${type}</div>
                    </div>
                    <div class="league-transfer-route" title="${routeTitle}">
                        ${renderTransferClub(league, item.from)}
                        <span class="league-transfer-arrow">→</span>
                        ${renderTransferClub(league, item.to)}
                    </div>
                    <div class="league-transfer-value" title="${valueTitle}">${formatTransferValue(item.value)}</div>
                </div>
            `;
        }).join("");

    return `
        <section class="league-side-card league-transfers-card">
            <div class="league-side-head centered league-transfers-head">
                <strong>Transferências</strong>
                <div class="league-transfer-window is-open" title="Janela de transferências aberta até 01/09">
                    <span>Janela aberta</span>
                    <b>Fecha 01/09</b>
                </div>
            </div>
            <div class="league-transfer-table-head">
                <span>Data</span>
                <span>Jogador</span>
                <span>Movimento</span>
                <span>Valor</span>
            </div>
            <div class="league-transfers-scroll">${rows}</div>
        </section>
    `;
}

function renderLeagueCalendar(league) {
    if (!league.fixtures?.length) return "";
    let groupByRound = league.fixtureGroupBy === "round";
    let groups = groupByRound
        ? [...new Set(league.fixtures.map((fixture) => fixture.round))].map((round) => ({
            key: round,
            label: `Jornada ${round}`,
            matches: league.fixtures.filter((fixture) => fixture.round === round)
        }))
        : (league.fixtureMonths || [...new Set(league.fixtures.map((fixture) => fixture.month))]).map((month) => ({
            key: month,
            label: month,
            matches: league.fixtures.filter((fixture) => fixture.month === month)
        }));

    let monthBlocks = groups.map((group) => {
        let matches = group.matches;
        if (!matches.length) return "";
        let rows = matches.map((fixture) => {
            let hasResult = Number.isFinite(fixture.homeGoals) && Number.isFinite(fixture.awayGoals);
            let homeWinner = hasResult && fixture.homeGoals > fixture.awayGoals ? "winner" : "";
            let awayWinner = hasResult && fixture.awayGoals > fixture.homeGoals ? "winner" : "";
            let scoreLabel = hasResult ? `${fixture.homeGoals}-${fixture.awayGoals}` : "-";
            let scoreMarkup = fixture.report
                ? `<button class="league-fixture-score is-clickable" type="button" onclick="openMatchReport('${fixture.report.id}')" title="Ver estatísticas do jogo">${scoreLabel}</button>`
                : `<span class="league-fixture-score ${hasResult ? "is-result" : ""}">${scoreLabel}</span>`;
            return `
                <div class="league-fixture-row">
                    <div class="league-fixture-meta">
                        <span>${fixture.date}</span>
                        <span>${fixture.competition}</span>
                    </div>
                    <div class="league-fixture-match">
                        ${renderLeagueTeamName(league, fixture.home, homeWinner)}
                        ${scoreMarkup}
                        ${renderLeagueTeamName(league, fixture.away, awayWinner)}
                    </div>
                </div>
            `;
        }).join("");

        return `
            <div class="league-fixture-month">
                <div class="league-fixture-month-title">${group.label}</div>
                <div class="league-fixture-list">${rows}</div>
            </div>
        `;
    }).join("");

    return `
        <section class="league-side-card league-calendar-card">
            <div class="league-side-head centered">
                <strong>Calendário</strong>
            </div>
            <div class="league-calendar-scroll">${monthBlocks}</div>
        </section>
    `;
}

function renderLeagueLowerPanel(league) {
    let content = [
        renderLeagueLiveCards(league),
        renderLeagueTransfers(league),
        renderLeagueAwards(league),
        renderLeagueTeamOfYear(league),
        renderLeagueCalendar(league)
    ].filter(Boolean).join("");

    if (!content) return "";

    return `
        <div class="league-lower-grid">
            ${content}
        </div>
    `;
}

function renderLeagueSideStats(league) {
    if (!league.sideStats?.length) return "";

    let panels = league.sideStats.map((stat, index) => {
        let rows = stat.rows.map((row) => {
            let teamEntry = getLeagueTeamEntry(league, row.team);
            let metric = index === 0 ? row.xgm : row.gls;
            let extra = index === 0 ? row.gls : row.perGame;

            return `
                <div class="side-stat-row">
                    <span class="side-stat-pos">${row.pos}</span>
                    <span class="side-stat-team" title="${row.team}">
                        ${teamEntry?.logo ? `<img src="${teamEntry.logo}" alt="${row.team}" class="side-stat-logo" loading="lazy">` : ""}
                        <span>${row.team}</span>
                    </span>
                    <strong>${metric}</strong>
                    <span>${row.jgs}</span>
                    <span>${extra}</span>
                    <span>${row.leaguePos}</span>
                </div>
            `;
        }).join("");

        return `
            <article class="side-stat-table ${index === 0 ? "active" : ""}" data-side-stat-panel="${index}" data-side-stat-title="${stat.title}">
                <div class="side-stat-head">
                    ${stat.columns.map((column) => `<span title="${column}">${column}</span>`).join("")}
                </div>
                <div class="side-stat-body">${rows}</div>
            </article>
        `;
    }).join("");

    return `
        <section class="league-side-stats">
            <div class="side-stats-head">
                <h3 class="side-stats-title">Estatísticas da Liga</h3>
                <div class="side-stat-controls" aria-label="Escolher estatística">
                    <button class="side-stat-arrow" type="button" data-side-stat-direction="-1" aria-label="Estatística anterior">‹</button>
                    <span class="side-stat-current" title="${league.sideStats[0].title}">${league.sideStats[0].title}</span>
                    <button class="side-stat-arrow" type="button" data-side-stat-direction="1" aria-label="Estatística seguinte">›</button>
                </div>
            </div>
            ${panels}
        </section>
    `;
}

function setupLeagueSideStats(scope = document) {
    scope.querySelectorAll(".league-side-stats").forEach((container) => {
        let panels = [...container.querySelectorAll(".side-stat-table")];
        let label = container.querySelector(".side-stat-current");
        let currentIndex = panels.findIndex((panel) => panel.classList.contains("active"));
        if (currentIndex < 0) currentIndex = 0;

        let setActivePanel = (index) => {
            currentIndex = (index + panels.length) % panels.length;
            panels.forEach((panel, panelIndex) => {
                let active = panelIndex === currentIndex;
                panel.classList.toggle("active", active);
                if (active && label) {
                    label.textContent = panel.dataset.sideStatTitle || "";
                    label.title = panel.dataset.sideStatTitle || "";
                }
            });
        };

        panels.forEach((panel, index) => {
            if (index === currentIndex && label) {
                label.textContent = panel.dataset.sideStatTitle || "";
                label.title = panel.dataset.sideStatTitle || "";
            }
        });

        container.querySelectorAll(".side-stat-arrow").forEach((button) => {
            button.addEventListener("click", () => {
                setActivePanel(currentIndex + Number(button.dataset.sideStatDirection || 1));
            });
        });
    });
}

function renderLeague(leagueId) {
    let league = leagues.find((l) => l.id === leagueId);
    let panel = document.getElementById("leaguePanel");
    let isLive = league.status === "live";
    let transferScrollTop = panel.querySelector(".league-transfers-scroll")?.scrollTop || 0;
    let calendarScrollTop = panel.querySelector(".league-calendar-scroll")?.scrollTop || 0;

    let rows = "";
    league.tabela.forEach((entry) => {
        let playerMarkup = entry.jogador
            ? `<div class="standings-player-cell" data-col="4"><div class="standings-player">${getCoachLinkMarkup(entry.jogador, "standings-player-link")}</div></div>`
            : `<div class="standings-player-cell" data-col="4"><div class="standings-player empty">PC</div></div>`;
        let emgMarkup = entry.emgPontos === null
            ? `<div class="standings-points-cell" data-col="14"><div class="standings-points neutral">--</div></div>`
            : `<div class="standings-points-cell" data-col="14"><div class="standings-points ${getPointsClass(entry.emgPontos)}">${formatPoints(entry.emgPontos)}</div></div>`;
        let formMarkup = isLive
            ? `<div class="standings-form-cell" data-col="15">${renderFormDots(entry.form)}</div>`
            : "";
        let infState = entry.inf === "↑" ? "up" : entry.inf === "↓" ? "down" : "";

        rows += `
            <div class="standings-row ${isLive ? "live" : ""} ${entry.zone ? `zone-${entry.zone}` : ""}">
                <div class="standings-cell-center standings-pos" data-col="1">${entry.pos}</div>
                <div class="standings-cell-center standings-inf ${infState}" data-col="2">${entry.inf}</div>
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
                ${formMarkup}
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
            ${league.statusLabel ? `<div class="league-chip league-status-chip ${league.status === "live" ? "live" : "completed"}">${league.statusLabel}</div>` : ""}
            <div class="league-chip muted">${league.epoca}</div>
            <div class="league-chip muted">Fórmula: ${league.formula}</div>
            ${isLive ? `
                <div class="league-live-tip">
                    <button class="info-tip league-info-tip" type="button" aria-label="Explicação da liga em curso">
                        <span class="info-tip-icon">i</span>
                    </button>
                    <div class="league-live-popover">
                        <div class="formula-section">
                            <div class="formula-heading">Liga em curso</div>
                            <div class="formula-line">A classificação da Croácia é atualizada por sessão.</div>
                            <div class="formula-line">A coluna <strong>Form</strong> mostra os últimos 5 jogos: V, E ou D.</div>
                            <div class="formula-line">Os bónus finais só entram quando a época terminar.</div>
                        </div>
                        <div class="formula-section">
                            <div class="formula-heading">Bónus</div>
                            <div class="formula-list">
                                <div>Campeão da Liga: <strong>+10</strong></div>
                                <div>Melhor humano (não acumula se for campeão): <strong>+5</strong></div>
                                <div>Vencedores de Taças: <strong>+5</strong></div>
                                <div>Finalistas de Taças: <strong>+2</strong></div>
                                <div>Vencedor de competição Europeia: <strong>+3</strong></div>
                            </div>
                        </div>
                        <div class="formula-section">
                            <div class="formula-heading">Penalizações</div>
                            <div class="formula-list">
                                <div>Último classificado: <strong>-5</strong></div>
                                <div>Pior humano (não acumula se for último): <strong>-2</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            ` : ""}
        </div>
        <div class="league-season-layout ${isLive ? "live" : ""}">
            <div class="league-main-column">
                <div class="league-table-wrap">
                    <div class="standings-standings">
                        <div class="standings-row header ${isLive ? "live" : ""}">
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
                            ${isLive ? `<div data-col="15">Form</div>` : ""}
                        </div>
                        ${rows}
                    </div>
                </div>
            </div>
            ${isLive ? "" : `<aside class="league-bonuses-column">
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
                ${renderLeagueSideStats(league)}
            </aside>`}
        </div>
        ${renderLeagueLowerPanel(league)}
    `;

    setupLeagueSideStats(panel);
    let transferScroll = panel.querySelector(".league-transfers-scroll");
    if (transferScroll) transferScroll.scrollTop = transferScrollTop;
    let calendarScroll = panel.querySelector(".league-calendar-scroll");
    if (calendarScroll) calendarScroll.scrollTop = calendarScrollTop;
    scheduleLeagueLiveAutoAdvance(league);
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

function showCompletedDraw() {
    document.getElementById("drawBtn").style.display = "none";
    document.getElementById("muteBtn").style.display = "none";
    showRemainingSidebars(false);
    resultados = [...FINAL_RESULTS];
    showResults();
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
                <div class="table-player">${getCoachLinkMarkup(entry.jogador, "results-player-link")}</div>
                <span class="table-connector" aria-hidden="true"></span>
                <div class="table-team">
                    <img class="table-logo" src="${entry.img}" alt="${entry.equipa}">
                    <span class="table-team-name">${entry.equipa}</span>
                </div>
            </div>
        `;
        table.appendChild(row);
    });

    bindCoachLinks(table);

    if (DISCORD_WEBHOOK) {
        let shareBtn = document.createElement("button");
        shareBtn.className = "action-btn gold";
        shareBtn.textContent = "Partilhar";
        shareBtn.onclick = () => shareToDiscord(shareBtn);
        table.appendChild(shareBtn);
    }

    scrollToElement(table);
    document.getElementById("drawBtn").innerText = "Sorteio Terminado";
}

const DISCORD_WEBHOOK = "";

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

function toggleFullscreen() {
    const btn = document.getElementById("fullscreenBtn");
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            btn.classList.add("is-fullscreen");
        }).catch(() => {});
    } else {
        document.exitFullscreen().then(() => {
            btn.classList.remove("is-fullscreen");
        }).catch(() => {});
    }
}

document.addEventListener("fullscreenchange", () => {
    const btn = document.getElementById("fullscreenBtn");
    btn.classList.toggle("is-fullscreen", !!document.fullscreenElement);
});

renderGeneralTable();
renderLeagueSelector();
renderCoachCards();
setupFormulaPopover();
restoreMuteState();
bindMusicRecovery();
setActiveTab(getTabFromHash());




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

function createLeagueMatch(month, competition, date, home, score, away) {
    if (score.trim() === "-") {
        return { month, competition, date, home, away, homeGoals: null, awayGoals: null };
    }

    let [homeGoals, awayGoals] = score.split("-").map((value) => Number(value.trim()));
    return { month, competition, date, home, away, homeGoals, awayGoals };
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

const croatiaAlphabeticalTable = [...croatiaSeedTable].sort((a, b) => {
    let clean = (team) => team.equipa.replace(/^(HNK|NK)\s+/i, "");
    return clean(a).localeCompare(clean(b), "pt", { sensitivity: "base" });
});

const croatiaSeasonScores = croatiaSeedTable
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
    createLeagueMatch("Agosto", "HNL", "2 Ago", "Dinamo Zagreb", "-", "NK Istra 1961"),
    createLeagueMatch("Agosto", "HNL", "2 Ago", "HNK Gorica", "-", "NK Osijek"),
    createLeagueMatch("Agosto", "HNL", "2 Ago", "Hajduk Split", "-", "NK Varaždin"),
    createLeagueMatch("Agosto", "HNL", "2 Ago", "HNK Rijeka", "-", "NK Lokomotiva"),
    createLeagueMatch("Agosto", "HNL", "2 Ago", "HNK Vukovar", "-", "NK Slaven Belupo"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Istra 1961", "-", "HNK Rijeka"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Lokomotiva", "-", "Hajduk Split"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Osijek", "-", "HNK Vukovar"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Slaven Belupo", "-", "Dinamo Zagreb"),
    createLeagueMatch("Agosto", "HNL", "9 Ago", "NK Varaždin", "-", "HNK Gorica"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "Dinamo Zagreb", "-", "NK Osijek"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "HNK Gorica", "-", "Hajduk Split"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "NK Istra 1961", "-", "NK Lokomotiva"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "HNK Rijeka", "-", "NK Slaven Belupo"),
    createLeagueMatch("Agosto", "HNL", "16 Ago", "HNK Vukovar", "-", "NK Varaždin"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "Hajduk Split", "-", "HNK Vukovar"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "NK Lokomotiva", "-", "HNK Gorica"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "NK Osijek", "-", "HNK Rijeka"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "NK Slaven Belupo", "-", "NK Istra 1961"),
    createLeagueMatch("Agosto", "HNL", "23 Ago", "NK Varaždin", "-", "Dinamo Zagreb"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "Dinamo Zagreb", "-", "Hajduk Split"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "NK Istra 1961", "-", "NK Osijek"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "HNK Rijeka", "-", "NK Varaždin"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "NK Slaven Belupo", "-", "NK Lokomotiva"),
    createLeagueMatch("Agosto", "HNL", "30 Ago", "HNK Vukovar", "-", "HNK Gorica"),
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

croatiaFixtures.forEach((fixture, index) => {
    fixture.round = Math.floor(index / 5) + 1;
});

const croatiaTransfers = [
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
        formula: "(prevista - atual) × 3",
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
                id: "recentes",
                label: "Resultados recentes",
                eyebrow: "Última sessão",
                title: "A recolher",
                copy: "Quando começarem a entrar resultados, esta página mostra os jogos mais recentes da Liga Croata sem obrigar o utilizador a procurar no calendário.",
                items: ["Último resultado", "Jogo da noite", "Maior surpresa"]
            },
            {
                id: "noticias",
                label: "Notícias",
                eyebrow: "Sala de imprensa",
                title: "Mercado aberto",
                copy: "Espaço para pequenas manchetes, provocações e storylines da save. A ideia é transformar cada sessão num resumo rápido e fácil de acompanhar.",
                items: ["Rumores", "Conferências", "Tensão entre treinadores"]
            },
            {
                id: "estatisticas",
                label: "Estatísticas da Liga",
                eyebrow: "Data hub",
                title: "Números da época",
                copy: "Aqui entram métricas gerais da competição: golos, média por jogo, melhor ataque, melhor defesa e tendências da forma recente.",
                items: ["Golos totais", "Melhor ataque", "Melhor defesa"]
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
        tabela: croatiaAlphabeticalTable.map((entry, index) => ({
            pos: index + 1,
            inf: "--",
            equipa: entry.equipa,
            logo: entry.logo,
            jogador: entry.jogador,
            j: 0,
            v: 0,
            e: 0,
            d: 0,
            gm: 0,
            gs: 0,
            dg: 0,
            pts: 0,
            prevista: entry.prevista,
            emgPontos: entry.jogador ? 0 : null,
            form: [],
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
    let select = document.getElementById("leagueSelect");
    select.innerHTML = "";
    leagues.forEach((league) => {
        let option = document.createElement("option");
        option.value = league.id;
        option.textContent = league.statusLabel ? `${league.nome} — ${league.statusLabel}` : league.nome;
        select.appendChild(option);
    });
    renderLeague(leagues[0].id);
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

function renderLeagueLiveCards(league) {
    if (league.livePages?.length) {
        let activePageId = activeLeagueLivePage[league.id] || league.livePages[0].id;
        let activePage = league.livePages.find((page) => page.id === activePageId) || league.livePages[0];
        let tabs = league.livePages.map((page) => `
            <button
                class="league-live-tab ${page.id === activePage.id ? "active" : ""}"
                type="button"
                onclick="setLeagueLivePage('${league.id}', '${page.id}')"
                aria-pressed="${page.id === activePage.id ? "true" : "false"}"
            >
                ${page.label}
            </button>
        `).join("");
        let items = (activePage.items || []).map((item) => `<span>${item}</span>`).join("");

        return `
            <section class="league-side-card league-live-panel-card">
                <div class="league-side-head centered">
                    <strong>Época Atual</strong>
                </div>
                <div class="league-live-tabs" role="tablist" aria-label="Páginas da época atual">${tabs}</div>
                <div class="league-live-page">
                    <div class="league-live-page-eyebrow">${activePage.eyebrow}</div>
                    <div class="league-live-page-title">${activePage.title}</div>
                    <p class="league-live-page-copy">${activePage.copy}</p>
                    <div class="league-live-page-tags">${items}</div>
                </div>
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
    activeLeagueLivePage[leagueId] = pageId;
    renderLeague(leagueId);
}

function renderTransferClub(league, clubName) {
    if (!clubName) {
        return `<span class="league-transfer-club-name muted">Sem clube</span>`;
    }

    let entry = getLeagueTeamEntry(league, clubName);
    if (entry?.logo) {
        return `
            <span class="league-transfer-club-cell league-transfer-club-cell--logo-only" title="${clubName}">
                <img src="${entry.logo}" alt="${clubName}" class="league-transfer-team-logo" loading="lazy">
            </span>
        `;
    }

    return `
        <span class="league-transfer-club-cell">
            <span class="league-transfer-club-name" title="${clubName}">${clubName}</span>
        </span>
    `;
}

function formatTransferValue(value) {
    return String(value || "")
        .replace(/Empréstimo/g, "Emp.")
        .replace(/Emp\\. -/g, "Emp. ·");
}

function renderLeagueTransfers(league) {
    if (!league.transfers?.length) return "";
    let humanTeams = new Set((league.tabela || []).filter((entry) => entry.jogador).map((entry) => entry.equipa));
    let rows = league.transfers.map((item) => {
        let isIncoming = humanTeams.has(item.to);
        let type = isIncoming ? "Entrada" : "Saída";

        return `
            <div class="league-transfer-row ${isIncoming ? "incoming" : "outgoing"}">
                <div class="league-transfer-date">${item.date}</div>
                <div class="league-transfer-player">
                    <div class="league-transfer-player-name" title="${item.player}">${item.player}</div>
                    <div class="league-transfer-type">${type}</div>
                </div>
                <div class="league-transfer-route">
                    ${renderTransferClub(league, item.from)}
                    <span class="league-transfer-arrow">→</span>
                    ${renderTransferClub(league, item.to)}
                </div>
                <div class="league-transfer-value" title="${item.value}">${formatTransferValue(item.value)}</div>
            </div>
        `;
    }).join("");

    return `
        <section class="league-side-card league-transfers-card">
            <div class="league-side-head centered">
                <strong>Transferências</strong>
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
            return `
                <div class="league-fixture-row">
                    <div class="league-fixture-meta">
                        <span>${fixture.date}</span>
                        <span>${fixture.competition}</span>
                    </div>
                    <div class="league-fixture-match">
                        ${renderLeagueTeamName(league, fixture.home, homeWinner)}
                        <span class="league-fixture-score">${scoreLabel}</span>
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

function renderLeague(leagueId) {
    let league = leagues.find((l) => l.id === leagueId);
    let panel = document.getElementById("leaguePanel");
    let isLive = league.status === "live";

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

        rows += `
            <div class="standings-row ${isLive ? "live" : ""} ${entry.zone ? `zone-${entry.zone}` : ""}">
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
            </aside>`}
        </div>
        ${renderLeagueLowerPanel(league)}
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




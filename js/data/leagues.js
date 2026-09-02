const leagues = [
    {
        id: "croatia",
        status: "live",
        statusLabel: "Em curso",
        nome: "Liga Croata",
        descricao: "Dashboard vivo da nova liga EMG na Croácia. A classificação, sessões e métricas vão sendo atualizadas após cada noite de jogos.",
        logo: "assets/logos/teams/croacia/supersport_hnl.webp",
        logoAlt: "SuperSport HNL",
        epoca: "Época 25/26",
        formula: "(prevista - final) × 3",
        scores: croatiaSeasonScores,
        fixtures: croatiaFixtures,
        fixtureMonths: croatiaFixtureMonths,
        fixtureGroupBy: "round",
        // Declarar isto é o que dá o gráfico de evolução a uma liga. Só faz
        // sentido onde a lista de jogos cobre a liga toda: a Escócia não declara
        // porque só lá estão os jogos entre as 8 equipas dos humanos.
        evolucao: {
            equipas: croatiaEquipas,
            isLeagueMatch: isCroatiaLeagueMatch,
            regras: croatiaRegras,
            zonas: croatiaZonas,
            snapshot: croatiaClassificacaoFM
        },
        // Declarar isto é o que dá o painel de golos e assistências a uma liga.
        // Vale a mesma ressalva da evolução: a Escócia não declara porque não
        // tem relatórios nenhuns e a lista de jogos só cobre as 8 equipas dos humanos.
        golos: {
            isLeagueMatch: isCroatiaLeagueMatch
        },
        // Declarar isto dá o "Equipa da Jornada" / "Equipa Fraca da Jornada" a uma
        // liga. Vale a mesma ressalva do golos: precisa de relatórios com onzes
        // detalhados, e a Escócia não tem nenhum.
        equipaJornada: {
            isLeagueMatch: isCroatiaLeagueMatch
        },
        extraTeamLogos: croatiaCupTeamLogos,
        tacas: [
            { tipo: "Vencedor da Taça", jogador: "Gonçalo", pontos: 5 },
            { tipo: "Finalista da Taça", jogador: "Hugo", pontos: 2 }
        ],
        liveCards: [
            { label: "Estado", value: "Liga em curso", meta: "Pronta para updates por sessão" },
            { label: "Última sessão", value: "Jornada 27", meta: "Resultados até 22 Mar inseridos" },
            { label: "Calendário", value: "36 jornadas", meta: "Fixture list carregada para a época completa" }
        ],
        livePages: croatiaLivePages,
        transfers: croatiaTransfers,
        tabela: croatiaCurrentTable.map((entry) => {
            let emgEntry = croatiaSeasonScores.find((score) => score.equipa === entry.equipa);
            return {
                pos: entry.pos,
                inf: entry.inf,
                equipa: entry.equipa,
                logo: entry.logo,
                cor: entry.cor,
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
                emgPontos: emgEntry ? emgEntry.pontos : null,
                form: entry.form,
                formDetails: getTeamFormDetailsFromFixtures(croatiaFixtures, entry.equipa),
                resultGroups: getTeamResultGroupsFromFixtures(croatiaFixtures, entry.equipa),
                zone: entry.zone || ""
            };
        })
    },
    {
        id: "scotland",
        status: "completed",
        statusLabel: "Concluída",
        nome: "Liga Escocesa",
        descricao: "Classificação final completa da Premiership, com dados da liga, jogador EMG associado e pontos pela fórmula da época.",
        logo: "assets/logos/teams/escocia/spfl.webp",
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
            { pos: 1, inf: "C", equipa: "Rangers", logo: "assets/logos/teams/escocia/rangers.webp", jogador: null, j: 38, v: 22, e: 10, d: 6, gm: 84, gs: 41, dg: 43, pts: 76, prevista: 2, zone: "championship" },
            { pos: 2, inf: "--", equipa: "Hibernian", logo: "assets/logos/teams/escocia/hibernian.webp", jogador: "Rato", j: 38, v: 23, e: 4, d: 11, gm: 85, gs: 57, dg: 28, pts: 73, prevista: 4, zone: "championship" },
            { pos: 3, inf: "--", equipa: "Aberdeen", logo: "assets/logos/teams/escocia/aberdeen.webp", jogador: "Gonçalo", j: 38, v: 21, e: 9, d: 8, gm: 74, gs: 45, dg: 29, pts: 72, prevista: 6, zone: "europe" },
            { pos: 4, inf: "--", equipa: "Dundee", logo: "assets/logos/teams/escocia/dundee.webp", jogador: "Nabais", j: 38, v: 17, e: 9, d: 12, gm: 61, gs: 55, dg: 6, pts: 60, prevista: 10, zone: "europe" },
            { pos: 5, inf: "--", equipa: "Celtic", logo: "assets/logos/teams/escocia/celtic.webp", jogador: null, j: 38, v: 17, e: 8, d: 13, gm: 70, gs: 47, dg: 23, pts: 59, prevista: 1, zone: "" },
            { pos: 6, inf: "--", equipa: "St. Mirren", logo: "assets/logos/teams/escocia/st_mirren.webp", jogador: null, j: 38, v: 15, e: 10, d: 13, gm: 52, gs: 53, dg: -1, pts: 55, prevista: 8, zone: "" },
            { pos: 7, inf: "--", equipa: "Hearts", logo: "assets/logos/teams/escocia/hearts.webp", jogador: "Cardoso", j: 38, v: 16, e: 7, d: 15, gm: 76, gs: 74, dg: 2, pts: 55, prevista: 3, zone: "" },
            { pos: 8, inf: "--", equipa: "Falkirk", logo: "assets/logos/teams/escocia/falkirk.webp", jogador: "Hugo", j: 38, v: 14, e: 11, d: 13, gm: 65, gs: 62, dg: 3, pts: 53, prevista: 11, zone: "" },
            { pos: 9, inf: "--", equipa: "Kilmarnock", logo: "assets/logos/teams/escocia/kilmarnock.webp", jogador: "Chico", j: 38, v: 14, e: 7, d: 17, gm: 51, gs: 64, dg: -13, pts: 49, prevista: 9, zone: "" },
            { pos: 10, inf: "--", equipa: "Dundee Utd", logo: "assets/logos/teams/escocia/dundee_united.webp", jogador: "Gamy", j: 38, v: 14, e: 6, d: 18, gm: 60, gs: 71, dg: -11, pts: 48, prevista: 7, zone: "" },
            { pos: 11, inf: "PI", equipa: "Motherwell", logo: "assets/logos/teams/escocia/motherwell.webp", jogador: null, j: 38, v: 4, e: 8, d: 26, gm: 30, gs: 80, dg: -50, pts: 20, prevista: 5, zone: "playoff" },
            { pos: 12, inf: "D", equipa: "Livingston", logo: "assets/logos/teams/escocia/livingston.webp", jogador: "Painatal", j: 38, v: 4, e: 5, d: 29, gm: 41, gs: 101, dg: -60, pts: 17, prevista: 12, zone: "relegated" }
        ].map((entry) => {
            let emgEntry = scotlandSeasonScores.find((score) => score.equipa === entry.equipa);
            return { ...entry, emgPontos: emgEntry ? emgEntry.pontos : null };
        })
    }
];

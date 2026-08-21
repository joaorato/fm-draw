// Todos os relatórios de jogo da Croácia, num ficheiro só.
//
// Ligam-se aos jogos pelo `fixtureKey` no croatia-wiring.js, e é por aí que o
// site os encontra: a ordem aqui dentro não é lida por ninguém. Quem escreve um
// bloco é o `scripts/report_build.js`, a partir de uma transcrição em JSON.
const croatiaMatchReports = [
    {
        fixtureKey: "2025-08-02-dinamo-zagreb-nk-istra-1961",
        date: "Sábado 2 de Agosto de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Franko Kolić",
        rating: "7,65",
        coaches: { home: "M. Kovačević", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "6,3", "AvR")],
                [reportPlayer("10", "Vidović", "6,6", "EAI"), reportPlayer("30", "Topić", "6,3", "EAI")],
                [reportPlayer("27", "Mišić", "6,8", "MC"), reportPlayer("14", "Soldo", "6,8", "MC")],
                [reportPlayer("4", "Bennacer", "7,2", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,8", "AI"), reportPlayer("26", "McKenna", "6,9", "CC"), reportPlayer("36", "Domínguez", "6,7", "CC"), reportPlayer("25", "Valinčić", "6,5", "AI")],
                [reportPlayer("40", "Livaković", "7,1", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,4", "AC")],
                [reportPlayer("11", "Goričan", "6,5", "AA"), reportPlayer("17", "Frederiksen", "6,3", "MO"), reportPlayer("7", "Rozić", "6,3", "EAI")],
                [reportPlayer("10", "Lončar", "7,0", "MD"), reportPlayer("5", "Radošević", "7,0", "CJR")],
                [reportPlayer("26", "Heister", "6,4", "AI"), reportPlayer("8", "Maurić", "6,8", "CC"), reportPlayer("3", "Nasraoui", "6,6", "DC"), reportPlayer("97", "Kadušić", "6,6", "AI")],
                [reportPlayer("1", "Kolić", "7,7", "GRC")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "49%", "51%"],
            ["Remates", "17", "8"],
            ["Remates à Baliza", "8", "5"],
            ["xG", "1,01", "0,21"],
            ["PADPAD", "26,94", "28,08"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "12", "6"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "18%", "13%"],
            ["Faltas", "8", "9"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "119"],
            ["Classificação Média", "6,7", "6,7"]
        ])
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
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("24", "Pavičić", "6,7", "Ex"), reportPlayer("18", "Fiolić", "6,2", "ME"), reportPlayer("20", "Vrzić", "6,4", "Ex")],
                [reportPlayer("10", "Pršir", "6,6", "CJA"), reportPlayer("7", "Bakić", "6,4", "ME")],
                [reportPlayer("36", "Kavelj", "6,5", "MD")],
                [reportPlayer("19", "Čabraja", "6,2", "AI"), reportPlayer("4", "J. Filipović", "7,7", "DC", true), reportPlayer("45", "Perić", "6,5", "CP"), reportPlayer("9", "Bogojević", "6,7", "AI")],
                [reportPlayer("71", "Matijaš", "6,3", "GRC")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "6,2", "AR")],
                [reportPlayer("38", "Čolina", "6,8", "MO"), reportPlayer("11", "Omerović", "7,0", "MO", true)],
                [reportPlayer("6", "Nico Gaitán", "6,4", "MAI"), reportPlayer("23", "Vrbančić", "6,5", "MC"), reportPlayer("29", "Karačić", "6,2", "MAI")],
                [reportPlayer("39", "Bukvić", "6,5", "Pi")],
                [reportPlayer("26", "Jelenić", "6,8", "CP"), reportPlayer("16", "Petrusenko", "6,8", "CP"), reportPlayer("15", "Mersinaj", "7,1", "CP")],
                [reportPlayer("31", "Malenica", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("61", "J. Filipović", { assist: "J. Pršir" })],
            away: [goalEvent("30", "N. Omerović")]
        },
        stats: reportStats([
            ["Posse", "31%", "69%"],
            ["Remates", "10", "13"],
            ["Remates à Baliza", "7", "4"],
            ["xG", "0,73", "0,55"],
            ["PADPAD", "24,40", "10,77"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "4", "6"],
            ["Passes Completados", "84%", "90%"],
            ["Cruzamentos Completados", "25%", "12%"],
            ["Faltas", "7", "16"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "120", "121"],
            ["Classificação Média", "6,6", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-08-02-hajduk-split-nk-varazdin",
        date: "Sábado 2 de Agosto de 2025",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Ante Rebić",
        rating: "9,08",
        coaches: { home: "Gonzalo García", away: "João Nabais" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "8,0", "AR", true)],
                [reportPlayer("9", "A. Rebić", "9,1", "EAI", true), reportPlayer("11", "Šego", "7,2", "EAI")],
                [reportPlayer("23", "Krovinović", "6,9", "MC"), reportPlayer("21", "Pukstas", "6,9", "ME")],
                [reportPlayer("6", "Hugo G.", "6,5", "MD")],
                [reportPlayer("32", "Hrgović", "7,2", "AI"), reportPlayer("14", "Raçi", "6,7", "CC"), reportPlayer("15", "Marešić", "7,0", "CC"), reportPlayer("8", "Sigur", "6,7", "DL")],
                [reportPlayer("1", "Ivušić", "6,6", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("10", "Biró", "6,5", "AR")],
                [reportPlayer("7", "Vuk", "6,2", "AI"), reportPlayer("27", "Latković", "6,7", "SA"), reportPlayer("12", "Bočkaj", "6,9", "Ex")],
                [reportPlayer("8", "Duvnjak", "7,4", "CJR", true), reportPlayer("24", "Marina", "6,3", "CJA")],
                [reportPlayer("3", "Sikošek", "6,3", "AI"), reportPlayer("44", "Barać", "7,2", "DC", true), reportPlayer("16", "Tepšić", "6,3", "CC"), reportPlayer("23", "Maglica", "7,3", "DL")],
                [reportPlayer("1", "Zelenika", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("8", "M. Livaja", { assist: "M. Šego" }), goalEvent("70", "A. Rebić", { assist: "Š. Hrgović" }), goalEvent("90+4", "A. Rebić", { assist: "M. Livaja" })],
            away: [goalEvent("21", "T. Duvnjak", { assist: "F. Maglica" }), goalEvent("75", "M. Barać", { assist: "P. Bočkaj" })]
        },
        stats: reportStats([
            ["Posse", "61%", "39%"],
            ["Remates", "23", "8"],
            ["Remates à Baliza", "10", "4"],
            ["xG", "1,67", "0,77"],
            ["PADPAD", "17,24", "22,86"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "14", "4"],
            ["Passes Completados", "92%", "86%"],
            ["Cruzamentos Completados", "16%", "8%"],
            ["Faltas", "12", "7"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "119"],
            ["Classificação Média", "7,1", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-08-02-hnk-rijeka-nk-lokomotiva",
        date: "Sábado 2 de Agosto de 2025",
        stadium: "Rujevica",
        weather: "Brisa",
        playerOfMatch: "Tiago Dantas",
        rating: "8,72",
        coaches: { home: "Zép Jóbes", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("51", "Husić", "6,9", "AR")],
                [reportPlayer("9", "Duje Čop", "6,5", "ME"), reportPlayer("10", "Fruk", "6,9", "MO")],
                [reportPlayer("11", "André", "7,7", "MC", true)],
                [reportPlayer("21", "Lacoux", "6,7", "MD"), reportPlayer("26", "Dantas", "8,7", "CJR", true)],
                [reportPlayer("34", "Devetak", "6,7", "AI"), reportPlayer("6", "Radeljić", "7,1", "CC"), reportPlayer("45", "Majstorović", "6,7", "CC"), reportPlayer("22", "Oreč", "7,7", "AI")],
                [reportPlayer("13", "Zlomislić", "6,6", "GR")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("10", "Rui Pedro", "6,1", "AAE"), reportPlayer("15", "Stojaković", "6,7", "AvR", true)],
                [reportPlayer("8", "Antolić", "6,5", "MC"), reportPlayer("28", "Belcar", "6,4", "CJA"), reportPlayer("7", "Trajkovski", "6,2", "MC")],
                [reportPlayer("17", "Pajač", "6,2", "AI"), reportPlayer("23", "Vešović", "6,7", "AI")],
                [reportPlayer("4", "Sigali", "6,7", "DC"), reportPlayer("37", "Córdoba", "6,6", "CP"), reportPlayer("20", "Kolinger", "6,4", "CP")],
                [reportPlayer("12", "Posavec", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("5", "Tiago Dantas", { assist: "A. Oreč" }), goalEvent("12", "Tiago Dantas", { assist: "T. Fruk" }), goalEvent("28", "André", { assist: "Tiago Dantas" })],
            away: [goalEvent("46", "A. Stojaković", { assist: "M. Šitum" })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "12", "13"],
            ["Remates à Baliza", "7", "4"],
            ["xG", "1,54", "0,98"],
            ["PADPAD", "22,39", "35,55"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "4", "3"],
            ["Passes Completados", "92%", "87%"],
            ["Cruzamentos Completados", "15%", "36%"],
            ["Faltas", "13", "12"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "115", "114"],
            ["Classificação Média", "7,1", "6,5"]
        ])
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
            home: reportFormation("3-4-2-1", [
                [reportPlayer("9", "Kulušić", "9,1", "AAE", true)],
                [reportPlayer("18", "Antolković", "7,1", "MO"), reportPlayer("21", "Puljić", "8,0", "MO", true)],
                [reportPlayer("3", "Bosec", "7,2", "AI"), reportPlayer("13", "Čaić", "6,5", "MD"), reportPlayer("10", "Gonzalez", "7,4", "CJR"), reportPlayer("91", "Tićinović", "9,8", "AI", true)],
                [reportPlayer("5", "Elez", "6,9", "CC"), reportPlayer("34", "Tadić", "7,2", "CC"), reportPlayer("4", "Mitrović", "7,3", "CC")],
                [reportPlayer("14", "Pintol", "7,3", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "6,4", "AA"), reportPlayer("6", "Božić", "6,8", "AR")],
                [reportPlayer("15", "Ćubelić", "6,1", "EAI"), reportPlayer("90", "Nestorovski", "6,3", "Ex")],
                [reportPlayer("21", "Crepulja", "5,9", "MD"), reportPlayer("8", "Mrowca", "6,1", "CJA")],
                [reportPlayer("3", "Jakir", "6,1", "AI"), reportPlayer("4", "Kovačić", "6,5", "DC"), reportPlayer("2", "Međimorec", "6,7", "CC"), reportPlayer("18", "Krušelj", "6,5", "DL")],
                [reportPlayer("31", "Hadžikić", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("25", "J. Puljić", { assist: "L. Kulušić" }), goalEvent("39", "L. Kulušić", { assist: "M. Tićinović" }), goalEvent("57", "L. Kulušić", { assist: "J. Puljić" }), goalEvent("90+3", "M. Tićinović", { assist: "R. Gonzalez" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "46%", "54%"],
            ["Remates", "18", "9"],
            ["Remates à Baliza", "9", "4"],
            ["xG", "2,25", "0,57"],
            ["PADPAD", "24,11", "12,92"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "9", "5"],
            ["Passes Completados", "86%", "87%"],
            ["Cruzamentos Completados", "22%", "25%"],
            ["Faltas", "13", "9"],
            ["Cartões amarelos", "2", "4"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "119"],
            ["Classificação Média", "7,6", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-08-09-nk-istra-1961-hnk-rijeka",
        date: "Sábado 9 de Agosto de 2025",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Silvio Goričan",
        rating: "7,33",
        coaches: { home: "João Pedro Rato", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "7,0", "AC", true)],
                [reportPlayer("11", "Goričan", "7,3", "AA"), reportPlayer("17", "Frederiksen", "6,2", "MO"), reportPlayer("7", "Rozić", "6,3", "EAI")],
                [reportPlayer("10", "Lončar", "6,6", "MD"), reportPlayer("5", "Radošević", "6,9", "CJR")],
                [reportPlayer("26", "Heister", "6,2", "AI"), reportPlayer("8", "Maurić", "6,6", "CC"), reportPlayer("3", "Nasraoui", "6,6", "DC"), reportPlayer("97", "Kadušić", "6,4", "AI")],
                [reportPlayer("1", "Kolić", "6,7", "GRC")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("51", "Husić", "6,8", "AR")],
                [reportPlayer("10", "Fruk", "6,6", "ME"), reportPlayer("14", "Gojak", "7,2", "MO", true)],
                [reportPlayer("11", "André", "6,8", "MC")],
                [reportPlayer("21", "Lacoux", "7,0", "MD"), reportPlayer("26", "Dantas", "6,9", "CJR")],
                [reportPlayer("34", "Devetak", "6,5", "AI"), reportPlayer("6", "Radeljić", "6,7", "CC"), reportPlayer("45", "Majstorović", "6,8", "CC"), reportPlayer("23", "Lasickas", "7,0", "AI")],
                [reportPlayer("13", "Zlomislić", "6,9", "GR")]
            ])
        },
        events: {
            home: [goalEvent("58", "S. Prevljak", { assist: "S. Goričan" })],
            away: [goalEvent("19", "A. Gojak", { assist: "Tiago Dantas" })]
        },
        stats: reportStats([
            ["Posse", "38%", "62%"],
            ["Remates", "9", "9"],
            ["Remates à Baliza", "7", "4"],
            ["xG", "0,82", "0,78"],
            ["PADPAD", "30,06", "29,33"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "6", "2"],
            ["Passes Completados", "88%", "92%"],
            ["Cruzamentos Completados", "9%", "5%"],
            ["Faltas", "12", "9"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "124"],
            ["Classificação Média", "6,6", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-08-09-nk-lokomotiva-hajduk-split",
        date: "Sábado 9 de Agosto de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Michele Šego",
        rating: "7,82",
        coaches: { home: "Pai Natal", away: "Gonzalo García" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("10", "Rui Pedro", "6,8", "AAE", true), reportPlayer("80", "Redmond", "6,2", "AvR")],
                [reportPlayer("8", "Antolić", "6,8", "MC"), reportPlayer("26", "Rog", "6,9", "CJA"), reportPlayer("7", "Trajkovski", "6,5", "MC")],
                [reportPlayer("22", "Leovac", "6,6", "AI"), reportPlayer("23", "Vešović", "6,9", "AI")],
                [reportPlayer("4", "Sigali", "6,6", "DC"), reportPlayer("37", "Córdoba", "6,9", "CP", true), reportPlayer("20", "Kolinger", "6,7", "CP")],
                [reportPlayer("12", "Posavec", "7,5", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "7,1", "AR")],
                [reportPlayer("9", "A. Rebić", "6,9", "EAI"), reportPlayer("11", "Šego", "7,8", "EAI", true)],
                [reportPlayer("7", "Kalik", "7,0", "MC"), reportPlayer("23", "Krovinović", "7,4", "MO", true)],
                [reportPlayer("6", "Hugo G.", "6,5", "MD")],
                [reportPlayer("32", "Hrgović", "6,5", "AI"), reportPlayer("14", "Raçi", "6,6", "CC"), reportPlayer("15", "Marešić", "6,6", "CC"), reportPlayer("8", "Sigur", "6,7", "DL")],
                [reportPlayer("1", "Ivušić", "6,3", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("38", "Rui Pedro", { assist: "M. Vešović" }), goalEvent("41", "J. Córdoba", { assist: "D. Antolić" })],
            away: [goalEvent("4", "F. Krovinović", { assist: "A. Kalik" }), goalEvent("58", "M. Šego", { assist: "M. Livaja" })]
        },
        stats: reportStats([
            ["Posse", "54%", "46%"],
            ["Remates", "7", "17"],
            ["Remates à Baliza", "5", "11"],
            ["xG", "0,61", "1,10"],
            ["PADPAD", "18,86", "27,33"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "1", "9"],
            ["Passes Completados", "89%", "91%"],
            ["Cruzamentos Completados", "40%", "17%"],
            ["Faltas", "13", "12"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "114", "118"],
            ["Classificação Média", "6,8", "6,8"]
        ])
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
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("10", "Shopov", "6,3", "AR")],
                [reportPlayer("38", "Čolina", "7,1", "MO"), reportPlayer("6", "Nico Gaitán", "6,3", "MO")],
                [reportPlayer("23", "Vrbančić", "6,6", "MAI"), reportPlayer("16", "Petrusenko", "7,1", "MC"), reportPlayer("29", "Karačić", "7,3", "MAI", true)],
                [reportPlayer("17", "Jakupović", "6,1", "Pi")],
                [reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("99", "Teklić", "6,7", "CP"), reportPlayer("15", "Mersinaj", "6,9", "CP")],
                [reportPlayer("31", "Malenica", "6,6", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("9", "Kulušić", "6,4", "AAE")],
                [reportPlayer("18", "Antolković", "6,4", "MO"), reportPlayer("21", "Puljić", "7,1", "MO")],
                [reportPlayer("3", "Bosec", "7,0", "AI"), reportPlayer("13", "Čaić", "6,4", "MD"), reportPlayer("10", "Gonzalez", "6,0", "CJR"), reportPlayer("91", "Tićinović", "6,5", "AI")],
                [reportPlayer("5", "Elez", "6,7", "CC"), reportPlayer("34", "Tadić", "6,4", "CC"), reportPlayer("4", "Mitrović", "7,1", "CC")],
                [reportPlayer("1", "Bulat", "6,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("4", "M. Tadić", { ownGoal: true }), goalEvent("43", "F. Karačić", { assist: "O. Petrusenko" })],
            away: [goalEvent("46", "J. Moreno", { assist: "J. Puljić" })]
        },
        stats: reportStats([
            ["Posse", "61%", "39%"],
            ["Remates", "16", "8"],
            ["Remates à Baliza", "3", "3"],
            ["xG", "1,22", "1,43"],
            ["PADPAD", "20,40", "17,85"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "7", "3"],
            ["Passes Completados", "85%", "81%"],
            ["Cruzamentos Completados", "18%", "12%"],
            ["Faltas", "16", "18"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "125"],
            ["Classificação Média", "6,7", "6,7"]
        ])
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
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "6,7", "AA"), reportPlayer("6", "Božić", "6,6", "AR")],
                [reportPlayer("15", "Ćubelić", "6,3", "EAI"), reportPlayer("90", "Nestorovski", "6,9", "Ex")],
                [reportPlayer("21", "Crepulja", "6,8", "MD"), reportPlayer("8", "Mrowca", "7,5", "CJA")],
                [reportPlayer("3", "Jakir", "6,7", "AI"), reportPlayer("4", "Kovačić", "7,2", "DC"), reportPlayer("2", "Međimorec", "7,1", "CC"), reportPlayer("18", "Krušelj", "6,3", "DL")],
                [reportPlayer("31", "Hadžikić", "6,8", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "6,6", "AvR")],
                [reportPlayer("11", "Hoxha", "6,4", "EAI"), reportPlayer("30", "Topić", "6,4", "EAI")],
                [reportPlayer("27", "Mišić", "6,6", "MC"), reportPlayer("8", "Zajc", "7,7", "MC", true)],
                [reportPlayer("4", "Bennacer", "6,9", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "6,9", "AI"), reportPlayer("26", "McKenna", "6,9", "CC"), reportPlayer("36", "Domínguez", "6,6", "CC"), reportPlayer("25", "Valinčić", "6,4", "AI")],
                [reportPlayer("40", "Livaković", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("73", "I. Božić", { assist: "I. Nestorovski" })],
            away: [goalEvent("56", "M. Zajc")]
        },
        stats: reportStats([
            ["Posse", "62%", "38%"],
            ["Remates", "10", "16"],
            ["Remates à Baliza", "2", "6"],
            ["xG", "0,84", "1,18"],
            ["PADPAD", "13,00", "25,91"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "7", "9"],
            ["Passes Completados", "89%", "86%"],
            ["Cruzamentos Completados", "10%", "14%"],
            ["Faltas", "4", "8"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "128", "129"],
            ["Classificação Média", "6,8", "6,7"]
        ])
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
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Jurić", "6,4", "AR")],
                [reportPlayer("7", "Vuk", "6,8", "AI"), reportPlayer("27", "Latković", "8,3", "SA"), reportPlayer("12", "Bočkaj", "7,0", "Ex")],
                [reportPlayer("8", "Duvnjak", "7,3", "CJR"), reportPlayer("6", "Puclin", "7,7", "CJA", true)],
                [reportPlayer("3", "Sikošek", "6,5", "AI"), reportPlayer("44", "Barać", "7,1", "DC"), reportPlayer("16", "Tepšić", "7,0", "CC"), reportPlayer("23", "Maglica", "7,5", "DL")],
                [reportPlayer("1", "Zelenika", "7,3", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("24", "Pavičić", "5,7", "Ex"), reportPlayer("18", "Fiolić", "6,7", "ME"), reportPlayer("20", "Vrzić", "5,7", "Ex")],
                [reportPlayer("10", "Pršir", "6,1", "CJA"), reportPlayer("7", "Bakić", "6,4", "ME")],
                [reportPlayer("36", "Kavelj", "6,4", "MD")],
                [reportPlayer("19", "Čabraja", "6,4", "AI"), reportPlayer("4", "J. Filipović", "6,3", "DC"), reportPlayer("45", "Perić", "6,3", "CP"), reportPlayer("9", "Bogojević", "5,9", "AI")],
                [reportPlayer("71", "Matijaš", "6,6", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("14", "D. Puclin", { assist: "A. Latković" }), goalEvent("80", "B. Biró", { assist: "A. Latković" }), goalEvent("86", "B. Biró", { assist: "I. Tavares" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "65%", "35%"],
            ["Remates", "21", "9"],
            ["Remates à Baliza", "10", "3"],
            ["xG", "2,23", "0,56"],
            ["PADPAD", "14,53", "28,69"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "6", "5"],
            ["Passes Completados", "91%", "83%"],
            ["Cruzamentos Completados", "23%", "25%"],
            ["Faltas", "8", "18"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "114", "113"],
            ["Classificação Média", "7,2", "6,2"]
        ])
    },
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
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("10", "Shopov", "6,4", "AR")],
                [reportPlayer("38", "Čolina", "6,5", "MO"), reportPlayer("6", "Nico Gaitán", "6,2", "MO")],
                [reportPlayer("23", "Vrbančić", "6,7", "MAI"), reportPlayer("16", "Petrusenko", "6,8", "MC"), reportPlayer("29", "Karačić", "6,2", "MAI")],
                [reportPlayer("17", "Jakupović", "6,0", "Pi")],
                [reportPlayer("26", "Jelenić", "7,0", "CP"), reportPlayer("99", "Teklić", "6,3", "CP"), reportPlayer("15", "Mersinaj", "6,7", "CP")],
                [reportPlayer("31", "Malenica", "7,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("37", "L. Stojković", { assist: "M. Valinčić" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "45%", "55%"],
            ["Remates", "15", "6"],
            ["Remates à Baliza", "9", "1"],
            ["xG", "1,44", "0,23"],
            ["PADPAD", "18,72", "15,89"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "5", "7"],
            ["Passes Completados", "87%", "88%"],
            ["Cruzamentos Completados", "38%", "2%"],
            ["Faltas", "5", "14"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "128"],
            ["Classificação Média", "7,0", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-08-16-hnk-gorica-hajduk-split",
        date: "Sábado 16 de Agosto de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Davor Matijaš",
        rating: "8,29",
        coaches: { home: "Miguel Cardoso", away: "Gonzalo García" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("11", "Sule", "6,2", "Ex"), reportPlayer("64", "Epailly", "7,4", "ME", true), reportPlayer("8", "Pozo", "6,6", "Ex")],
                [reportPlayer("18", "Fiolić", "6,4", "CJA"), reportPlayer("36", "Kavelj", "6,7", "ME")],
                [reportPlayer("10", "Pršir", "6,5", "MD")],
                [reportPlayer("19", "Čabraja", "7,5", "AI"), reportPlayer("5", "Leš", "6,8", "DC"), reportPlayer("4", "J. Filipović", "6,7", "CP"), reportPlayer("45", "Perić", "6,6", "AI")],
                [reportPlayer("71", "Matijaš", "8,3", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("13", "Elis", "6,1", "AR")],
                [reportPlayer("9", "A. Rebić", "6,8", "EAI"), reportPlayer("24", "Bamba", "7,2", "EAI", true)],
                [reportPlayer("23", "Krovinović", "6,8", "MC"), reportPlayer("21", "Pukstas", "7,7", "ME")],
                [reportPlayer("6", "Hugo G.", "7,1", "MD")],
                [reportPlayer("32", "Hrgović", "6,9", "AI"), reportPlayer("14", "Raçi", "7,0", "CC"), reportPlayer("15", "Marešić", "6,7", "CC"), reportPlayer("38", "Hodak", "6,4", "DL")],
                [reportPlayer("1", "Ivušić", "6,6", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("25", "T. Epailly", { assist: "M. Čabraja" })],
            away: [goalEvent("74", "Bamba", { assist: "R. Pukstas" })]
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "7", "25"],
            ["Remates à Baliza", "1", "15"],
            ["xG", "0,55", "2,51"],
            ["PADPAD", "43,44", "24,19"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "4", "9"],
            ["Passes Completados", "89%", "90%"],
            ["Cruzamentos Completados", "18%", "20%"],
            ["Faltas", "11", "6"],
            ["Cartões amarelos", "3", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "126"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-08-16-nk-istra-1961-nk-lokomotiva",
        date: "Sábado 16 de Agosto de 2025",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Silvio Goričan",
        rating: "7,82",
        coaches: { home: "João Pedro Rato", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Previjak", "6,3", "AC")],
                [reportPlayer("11", "Goričan", "7,8", "AA", true), reportPlayer("17", "Frederiksen", "6,2", "MO"), reportPlayer("7", "Rozić", "6,3", "EAI")],
                [reportPlayer("10", "Lončar", "7,1", "MD"), reportPlayer("5", "Radošević", "6,5", "CJR")],
                [reportPlayer("26", "Heister", "6,9", "AI"), reportPlayer("4", "Johnston", "6,5", "CC"), reportPlayer("3", "Nasraoui", "7,2", "DC", true), reportPlayer("97", "Kadušić", "6,7", "AI")],
                [reportPlayer("1", "Kolić", "6,4", "GRC")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("10", "Rui Pedro", "6,5", "AAE"), reportPlayer("80", "Redmond", "6,3", "AvR")],
                [reportPlayer("28", "Belcar", "6,7", "MC"), reportPlayer("26", "Rog", "7,0", "CJA"), reportPlayer("7", "Trajkovski", "6,7", "MC")],
                [reportPlayer("22", "Leovac", "6,9", "AI"), reportPlayer("23", "Vešović", "6,4", "AI")],
                [reportPlayer("4", "Sigali", "6,5", "DC"), reportPlayer("37", "Córdoba", "7,5", "CP", true), reportPlayer("20", "Kolinger", "6,5", "CP")],
                [reportPlayer("12", "Posavec", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("9", "M. Nasraoui", { assist: "V. Rozić" }), goalEvent("90+6", "S. Goričan")],
            away: [goalEvent("49", "J. Córdoba", { assist: "M. Rog" }), goalEvent("60", "A. Stojaković", { assist: "M. Leovac" })]
        },
        stats: reportStats([
            ["Posse", "46%", "54%"],
            ["Remates", "15", "11"],
            ["Remates à Baliza", "7", "6"],
            ["xG", "1,37", "1,37"],
            ["PADPAD", "20,41", "26,64"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "11", "7"],
            ["Passes Completados", "89%", "88%"],
            ["Cruzamentos Completados", "16%", "17%"],
            ["Faltas", "12", "8"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "126", "124"],
            ["Classificação Média", "6,7", "6,7"]
        ])
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
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "6,5", "AR")],
                [reportPlayer("10", "Fruk", "7,0", "ME"), reportPlayer("14", "Gojak", "7,6", "MO", true)],
                [reportPlayer("11", "André", "7,0", "MC", true)],
                [reportPlayer("21", "Lacoux", "6,8", "MD"), reportPlayer("26", "Dantas", "6,5", "CJR")],
                [reportPlayer("34", "Devetak", "6,7", "AI"), reportPlayer("6", "Radeljić", "7,2", "CC"), reportPlayer("45", "Majstorović", "6,7", "CC"), reportPlayer("22", "Oreč", "6,7", "AI")],
                [reportPlayer("13", "Zlomislić", "6,6", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "6,4", "AA"), reportPlayer("6", "Božić", "6,5", "AR")],
                [reportPlayer("15", "Ćubelić", "6,9", "EAI", true), reportPlayer("90", "Nestorovski", "6,7", "Ex")],
                [reportPlayer("21", "Crepulja", "7,1", "MD"), reportPlayer("8", "Mrowca", "6,8", "CJA")],
                [reportPlayer("3", "Jakir", "7,1", "AI"), reportPlayer("4", "Kovačić", "6,7", "DC"), reportPlayer("2", "Međimorec", "6,6", "CC"), reportPlayer("18", "Krušelj", "6,9", "DL")],
                [reportPlayer("31", "Hadžikić", "6,3", "GR")]
            ])
        },
        events: {
            home: [goalEvent("26", "André"), goalEvent("35", "A. Gojak", { assist: "T. Fruk" })],
            away: [goalEvent("12", "I. Ćubelić", { assist: "A. Jakir" })]
        },
        stats: reportStats([
            ["Posse", "43%", "57%"],
            ["Remates", "4", "16"],
            ["Remates à Baliza", "3", "6"],
            ["xG", "0,62", "1,71"],
            ["PADPAD", "24,36", "13,38"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "4", "9"],
            ["Passes Completados", "86%", "89%"],
            ["Cruzamentos Completados", "5%", "17%"],
            ["Faltas", "12", "12"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "114", "120"],
            ["Classificação Média", "6,9", "6,7"]
        ])
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
            home: reportFormation("3-4-2-1", [
                [reportPlayer("11", "Moreno", "6,1", "AAE")],
                [reportPlayer("18", "Antolković", "6,4", "MO"), reportPlayer("21", "Puljić", "6,0", "MO")],
                [reportPlayer("35", "Kauã Valente", "6,3", "AI"), reportPlayer("13", "Čaić", "6,7", "MD"), reportPlayer("10", "Gonzalez", "6,9", "CJR", true), reportPlayer("91", "Tićinović", "7,3", "AI")],
                [reportPlayer("5", "Elez", "6,5", "CC"), reportPlayer("12", "Živković", "6,3", "CC"), reportPlayer("4", "Mitrović", "6,2", "CC")],
                [reportPlayer("14", "Pintol", "6,3", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Jurić", "6,6", "AR")],
                [reportPlayer("38", "Iuri Tavares", "7,6", "AI", true), reportPlayer("27", "Latković", "8,6", "SA", true), reportPlayer("22", "Mamić", "6,7", "Ex")],
                [reportPlayer("8", "Duvnjak", "6,7", "CJR"), reportPlayer("24", "Marina", "7,3", "CJA")],
                [reportPlayer("3", "Sikošek", "7,4", "AI", true), reportPlayer("44", "Barać", "7,3", "DC", true), reportPlayer("16", "Tepšić", "6,6", "CC"), reportPlayer("23", "Maglica", "6,6", "DL")],
                [reportPlayer("1", "Zelenika", "7,3", "GR")]
            ])
        },
        events: {
            home: [goalEvent("64", "L. Kulušić", { assist: "M. Tićinović" }), sendOffEvent("69", "M. Tićinović"), goalEvent("88", "R. Gonzalez", { assist: "P. Horvat" })],
            away: [goalEvent("28", "I. Tavares", { assist: "L. Mamić" }), goalEvent("45+1", "A. Latković"), goalEvent("54", "A. Latković", { assist: "G. Sikošek" }), goalEvent("83", "G. Sikošek", { assist: "M. Marina" }), goalEvent("90+5", "M. Barać", { assist: "P. Bočkaj" })]
        },
        stats: reportStats([
            ["Posse", "55%", "45%"],
            ["Remates", "10", "18"],
            ["Remates à Baliza", "5", "9"],
            ["xG", "1,14", "1,31"],
            ["PADPAD", "46,67", "87,75"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "6", "4"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "16%", "29%"],
            ["Faltas", "22", "12"],
            ["Cartões amarelos", "4", "3"],
            ["Cartões vermelhos", "1", "0"],
            ["Distância Percorrida", "117", "120"],
            ["Classificação Média", "6,5", "7,1"]
        ])
    },
    {
        fixtureKey: "2025-08-23-hajduk-split-hnk-vukovar",
        date: "Sábado 23 de Agosto de 2025",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Jakov Puljić",
        rating: "7,46",
        coaches: { home: "Gonzalo García", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "A. Rebić", "6,2", "AR")],
                [reportPlayer("11", "Šego", "6,5", "EAI"), reportPlayer("24", "Bamba", "6,7", "EAI")],
                [reportPlayer("23", "Krovinović", "6,7", "MC"), reportPlayer("21", "Pukstas", "7,2", "ME", true)],
                [reportPlayer("6", "Hugo G.", "6,7", "MD")],
                [reportPlayer("32", "Hrgović", "7,0", "AI"), reportPlayer("14", "Raçi", "6,5", "CC"), reportPlayer("15", "Marešić", "6,6", "CC"), reportPlayer("8", "Sigur", "6,6", "DL")],
                [reportPlayer("1", "Ivušić", "6,3", "GRC")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("8", "Horvat", "7,1", "AAE", true)],
                [reportPlayer("15", "Gurlica", "7,4", "MO"), reportPlayer("21", "Puljić", "7,5", "MO")],
                [reportPlayer("36", "Butić", "7,1", "AI"), reportPlayer("77", "Shabani", "6,7", "MD"), reportPlayer("10", "Gonzalez", "7,4", "CJR", true), reportPlayer("7", "Kerim Çalhanoğlu", "6,8", "AI")],
                [reportPlayer("5", "Elez", "7,2", "CC"), reportPlayer("4", "Mitrović", "7,3", "CC"), reportPlayer("3", "Bosec", "7,0", "CC")],
                [reportPlayer("1", "Bulat", "7,4", "GR")]
            ])
        },
        events: {
            home: [goalEvent("14", "R. Pukstas")],
            away: [goalEvent("13", "R. Gonzalez"), goalEvent("74", "P. Horvat", { assist: "J. Puljić" }), goalEvent("80", "A. Jurilj", { assist: "J. Puljić" })]
        },
        stats: reportStats([
            ["Posse", "57%", "43%"],
            ["Remates", "14", "11"],
            ["Remates à Baliza", "7", "6"],
            ["xG", "1,20", "1,55"],
            ["PADPAD", "27,75", "17,67"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "5", "2"],
            ["Passes Completados", "89%", "87%"],
            ["Cruzamentos Completados", "28%", "15%"],
            ["Faltas", "4", "9"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "129", "129"],
            ["Classificação Média", "6,6", "7,2"]
        ])
    },
    {
        fixtureKey: "2025-08-23-nk-lokomotiva-hnk-gorica",
        date: "Sábado 23 de Agosto de 2025",
        stadium: "Maksimir",
        weather: "Tempestuoso",
        playerOfMatch: "Ognjen Bakić",
        rating: "7,89",
        coaches: { home: "Pai Natal", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "6,4", "AAE"), reportPlayer("80", "Redmond", "6,4", "AvR")],
                [reportPlayer("28", "Belcar", "7,4", "MC"), reportPlayer("26", "Rog", "6,9", "CJA"), reportPlayer("10", "Rui Pedro", "6,5", "MC")],
                [reportPlayer("17", "Pajač", "7,0", "AI"), reportPlayer("23", "Vešović", "6,6", "AI")],
                [reportPlayer("4", "Sigali", "6,9", "DC"), reportPlayer("37", "Córdoba", "7,0", "CP", true), reportPlayer("20", "Kolinger", "7,0", "CP")],
                [reportPlayer("12", "Posavec", "6,9", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("24", "Pavičić", "7,3", "Ex", true), reportPlayer("18", "Fiolić", "6,3", "ME"), reportPlayer("20", "Vrzić", "6,1", "Ex")],
                [reportPlayer("10", "Pršir", "6,3", "CJA"), reportPlayer("7", "Bakić", "7,9", "ME")],
                [reportPlayer("36", "Kavelj", "6,4", "MD")],
                [reportPlayer("19", "Čabraja", "6,4", "AI"), reportPlayer("4", "J. Filipović", "7,2", "DC"), reportPlayer("45", "Perić", "6,8", "CP"), reportPlayer("22", "Trontelj", "6,4", "AI")],
                [reportPlayer("71", "Matijaš", "6,3", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("2", "J. Córdoba")],
            away: [goalEvent("8", "D. Pavičić", { assist: "O. Bakić" })]
        },
        stats: reportStats([
            ["Posse", "78%", "22%"],
            ["Remates", "21", "13"],
            ["Remates à Baliza", "4", "7"],
            ["xG", "1,24", "1,10"],
            ["PADPAD", "10,48", "49,36"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "5", "7"],
            ["Passes Completados", "91%", "77%"],
            ["Cruzamentos Completados", "18%", "30%"],
            ["Faltas", "7", "9"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "118", "120"],
            ["Classificação Média", "6,8", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-08-23-nk-osijek-hnk-rijeka",
        date: "Sábado 23 de Agosto de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Ante Matej Jurić",
        rating: "8,24",
        coaches: { home: "Gamy Chambelito", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "6,5", "AR")],
                [reportPlayer("38", "Čolina", "6,5", "MO"), reportPlayer("11", "Omerović", "6,4", "MO")],
                [reportPlayer("39", "Bukvić", "6,5", "MAI"), reportPlayer("23", "Vrbančić", "6,4", "MC"), reportPlayer("29", "Karačić", "6,4", "MAI")],
                [reportPlayer("10", "Shopov", "6,6", "Pi")],
                [reportPlayer("26", "Jelenić", "6,8", "CP"), reportPlayer("16", "Petrusenko", "6,3", "CP"), reportPlayer("15", "Mersinaj", "7,4", "CP", true)],
                [reportPlayer("31", "Malenica", "6,8", "GR")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "8,2", "AR", true)],
                [reportPlayer("10", "Fruk", "7,0", "ME"), reportPlayer("14", "Gojak", "8,1", "MO")],
                [reportPlayer("11", "André", "6,8", "MC")],
                [reportPlayer("21", "Lacoux", "7,0", "MD"), reportPlayer("26", "Dantas", "6,9", "CJR")],
                [reportPlayer("34", "Devetak", "6,6", "AI"), reportPlayer("6", "Radeljić", "7,0", "CC"), reportPlayer("45", "Majstorović", "6,6", "CC"), reportPlayer("23", "Lasickas", "6,5", "AI")],
                [reportPlayer("13", "Zlomislić", "7,0", "GR")]
            ])
        },
        events: {
            home: [goalEvent("79", "J. Mersinaj", { assist: "N. Gaitán" })],
            away: [goalEvent("8", "A. Jurić", { assist: "A. Gojak" }), goalEvent("27", "A. Jurić", { assist: "A. Gojak" })]
        },
        stats: reportStats([
            ["Posse", "39%", "61%"],
            ["Remates", "12", "14"],
            ["Remates à Baliza", "8", "7"],
            ["xG", "0,82", "1,91"],
            ["PADPAD", "18,86", "15,72"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "5", "10"],
            ["Passes Completados", "84%", "86%"],
            ["Cruzamentos Completados", "23%", "31%"],
            ["Faltas", "12", "11"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "125"],
            ["Classificação Média", "6,7", "7,1"]
        ])
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
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "8,7", "AA", true), reportPlayer("6", "Božić", "6,9", "AR")],
                [reportPlayer("15", "Ćubelić", "6,3", "EAI"), reportPlayer("90", "Nestorovski", "7,5", "Ex", true)],
                [reportPlayer("21", "Crepulja", "7,3", "MD"), reportPlayer("8", "Mrowca", "7,7", "CJA", true)],
                [reportPlayer("3", "Jakir", "6,7", "AI"), reportPlayer("4", "Kovačić", "6,6", "DC"), reportPlayer("2", "Međimorec", "6,7", "CC"), reportPlayer("18", "Krušelj", "6,8", "DL")],
                [reportPlayer("31", "Hadžikić", "6,4", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "8,2", "AC", true)],
                [reportPlayer("11", "Goričan", "6,2", "AA"), reportPlayer("17", "Frederiksen", "6,1", "MO"), reportPlayer("7", "Rozić", "6,3", "EAI")],
                [reportPlayer("10", "Lončar", "6,4", "MD"), reportPlayer("5", "Radošević", "6,7", "CJR")],
                [reportPlayer("26", "Heister", "6,8", "AI"), reportPlayer("4", "Johnston", "6,5", "CC"), reportPlayer("3", "Nasraoui", "6,6", "DC"), reportPlayer("97", "Kadušić", "6,2", "AI")],
                [reportPlayer("1", "Kolić", "6,4", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("9", "S. Mrowca", { assist: "L. Crepulja" }), goalEvent("54", "I. Nestorovski", { assist: "M. Dabro" }), goalEvent("90+2", "M. Dabro", { assist: "J. Mitrović" })],
            away: [goalEvent("44", "S. Prevljak", { assist: "M. Heister" }), goalEvent("84", "S. Prevljak", { assist: "A. Obando" })]
        },
        stats: reportStats([
            ["Posse", "60%", "40%"],
            ["Remates", "12", "8"],
            ["Remates à Baliza", "7", "3"],
            ["xG", "1,22", "0,52"],
            ["PADPAD", "25,57", "30,12"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "8", "3"],
            ["Passes Completados", "92%", "87%"],
            ["Cruzamentos Completados", "12%", "2%"],
            ["Faltas", "10", "7"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "135", "136"],
            ["Classificação Média", "7,1", "6,6"]
        ])
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
            home: reportFormation("4-2-3-1", [
                [reportPlayer("38", "Iuri Tavares", "6,2", "AR")],
                [reportPlayer("7", "Vuk", "6,2", "AI"), reportPlayer("27", "Latković", "7,4", "SA"), reportPlayer("22", "Mamić", "7,0", "Ex", true)],
                [reportPlayer("8", "Duvnjak", "6,7", "CJR"), reportPlayer("24", "Marina", "6,3", "CJA")],
                [reportPlayer("3", "Sikošek", "6,3", "AI"), reportPlayer("44", "Barać", "6,6", "DC"), reportPlayer("16", "Tepšić", "6,4", "CC"), reportPlayer("23", "Maglica", "6,8", "DL")],
                [reportPlayer("1", "Zelenika", "6,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,4", "AvR", true)],
                [reportPlayer("11", "Hoxha", "9,3", "EAI", true), reportPlayer("7", "Stojković", "6,8", "EAI")],
                [reportPlayer("27", "Mišić", "7,6", "MC"), reportPlayer("8", "Zajc", "8,1", "MC")],
                [reportPlayer("4", "Bennacer", "6,7", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "6,6", "AI"), reportPlayer("28", "Théophile-Cat.", "6,9", "CC"), reportPlayer("36", "Domínguez", "7,4", "CC"), reportPlayer("25", "Valinčić", "7,0", "AI")],
                [reportPlayer("40", "Livaković", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("61", "L. Mamić", { assist: "A. Latković" })],
            away: [goalEvent("37", "Dion Beljo", { assist: "M. Valinčić" }), goalEvent("49", "A. Hoxha", { assist: "J. Mišić" }), goalEvent("54", "A. Hoxha", { assist: "M. Zajc" }), goalEvent("70", "A. Hoxha", { assist: "M. Zajc" })]
        },
        stats: reportStats([
            ["Posse", "43%", "57%"],
            ["Remates", "11", "14"],
            ["Remates à Baliza", "5", "7"],
            ["xG", "0,98", "0,78"],
            ["PADPAD", "20,32", "23,29"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "4", "7"],
            ["Passes Completados", "85%", "91%"],
            ["Cruzamentos Completados", "19%", "12%"],
            ["Faltas", "6", "10"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "130", "125"],
            ["Classificação Média", "6,6", "7,3"]
        ])
    },
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
                [reportPlayer("23", "Krovinović", "6,9", "MC"), reportPlayer("21", "Pukstas", "6,7", "ME")],
                [reportPlayer("6", "Hugo G.", "7,0", "MD")],
                [reportPlayer("32", "Hrgović", "6,8", "AI"), reportPlayer("14", "Raçi", "7,4", "CC"), reportPlayer("15", "Marešić", "7,3", "CC"), reportPlayer("8", "Sigur", "6,5", "DL")],
                [reportPlayer("1", "Ivušić", "7,0", "GRC")]
            ])
        },
        events: { home: [], away: [] },
        stats: reportStats([
            ["Posse", "37%", "63%"],
            ["Remates", "10", "14"],
            ["Remates à Baliza", "4", "5"],
            ["xG", "0,61", "0,82"],
            ["PADPAD", "21,36", "27,23"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "3", "8"],
            ["Passes Completados", "88%", "91%"],
            ["Cruzamentos Completados", "5%", "20%"],
            ["Faltas", "9", "8"],
            ["Cartões amarelos", "3", "3"],
            ["Cartões vermelhos", "0", "1"],
            ["Distância Percorrida", "114", "115"],
            ["Classificação Média", "6,7", "6,8"]
        ])
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
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("9", "Prevljak", "6,6", "AAE"), reportPlayer("12", "Obando", "6,7", "AA")],
                [reportPlayer("11", "Goričan", "6,5", "AA"), reportPlayer("7", "Rozić", "6,5", "Ex")],
                [reportPlayer("10", "Lončar", "6,6", "MAA"), reportPlayer("5", "Radošević", "7,2", "MD")],
                [reportPlayer("26", "Heister", "6,4", "AI"), reportPlayer("4", "Johnston", "7,0", "CC"), reportPlayer("3", "Nasraoui", "7,3", "DC"), reportPlayer("97", "Kadušić", "6,8", "AI")],
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
        stats: reportStats([
            ["Posse", "46%", "54%"],
            ["Remates", "18", "13"],
            ["Remates à Baliza", "7", "4"],
            ["xG", "1,67", "1,23"],
            ["PADPAD", "14,83", "21,38"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "11", "14"],
            ["Passes Completados", "84%", "85%"],
            ["Cruzamentos Completados", "16%", "6%"],
            ["Faltas", "13", "9"],
            ["Cartões amarelos", "2", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "128", "129"],
            ["Classificação Média", "6,8", "6,9"]
        ])
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
            home: reportFormation("4-2-2-2", [
                [reportPlayer("10", "Fruk", "6,2", "AAE"), reportPlayer("77", "Jurić", "6,3", "AvR")],
                [reportPlayer("26", "Dantas", "6,4", "ME"), reportPlayer("14", "Gojak", "6,4", "ME")],
                [reportPlayer("3", "Jean Carlos", "6,5", "AP"), reportPlayer("21", "Lacoux", "6,7", "MD"), reportPlayer("11", "André", "6,5", "MAA"), reportPlayer("23", "Lasickas", "6,4", "AI")],
                [reportPlayer("6", "Radeljić", "7,1", "DC"), reportPlayer("45", "Majstorović", "6,7", "DC")],
                [reportPlayer("13", "Zlomislić", "7,0", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,3", "AAE")],
                [reportPlayer("7", "Vuk", "7,3", "AI", true), reportPlayer("27", "Latković", "6,2", "SA"), reportPlayer("22", "Mamić", "6,7", "Ex")],
                [reportPlayer("8", "Duvnjak", "7,0", "CJR"), reportPlayer("6", "Puclin", "7,7", "MD")],
                [reportPlayer("15", "Jacob", "6,2", "AI"), reportPlayer("44", "Barać", "7,0", "DC"), reportPlayer("16", "Tepšić", "7,1", "CC"), reportPlayer("23", "Maglica", "6,9", "DL")],
                [reportPlayer("1", "Zelenika", "7,3", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("37", "M. Vuk", { assist: "D. Puclin" })]
        },
        stats: reportStats([
            ["Posse", "62%", "38%"],
            ["Remates", "10", "13"],
            ["Remates à Baliza", "3", "6"],
            ["xG", "1,07", "1,44"],
            ["PADPAD", "14,00", "17,33"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "6", "7"],
            ["Passes Completados", "87%", "83%"],
            ["Cruzamentos Completados", "24%", "10%"],
            ["Faltas", "11", "5"],
            ["Cartões amarelos", "2", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "125"],
            ["Classificação Média", "6,6", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-08-30-nk-slaven-belupo-nk-lokomotiva",
        date: "Sábado 30 de Agosto de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Filip Jović",
        rating: "8,06",
        coaches: { home: "Francisco Pinto", away: "Pai Natal" },
        formations: {
            home: reportFormation("3-4-1-2", [
                [reportPlayer("90", "Nestorovski", "6,5", "AR"), reportPlayer("7", "Dabro", "6,3", "AAE")],
                [reportPlayer("15", "Ćubelić", "7,0", "MO")],
                [reportPlayer("3", "Jakir", "6,3", "AI"), reportPlayer("10", "Caimacov", "6,9", "CJR"), reportPlayer("8", "Mrowca", "6,4", "MD"), reportPlayer("18", "Krušelj", "6,5", "AI")],
                [reportPlayer("4", "Kovačić", "6,7", "CC"), reportPlayer("6", "Božić", "6,4", "CC"), reportPlayer("2", "Medimorec", "6,7", "DC")],
                [reportPlayer("31", "Hadžikić", "6,5", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("10", "Rui Pedro", "6,4", "AvR")],
                [reportPlayer("7", "Trajkovski", "6,4", "AA"), reportPlayer("80", "Redmond", "6,8", "CL"), reportPlayer("37", "Córdoba", "6,4", "AA")],
                [reportPlayer("28", "Belcar", "6,4", "CJA"), reportPlayer("40", "McCarthy", "6,3", "MD")],
                [reportPlayer("17", "Pajač", "6,8", "AI"), reportPlayer("4", "Sigali", "6,6", "CC"), reportPlayer("20", "Kolinger", "7,1", "DC", true), reportPlayer("23", "Vešović", "7,0", "AI")],
                [reportPlayer("12", "Posavec", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("65", "F. Jović")],
            away: [goalEvent("15", "D. Kolinger", { assist: "N. Redmond" })]
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "8", "12"],
            ["Remates à Baliza", "3", "4"],
            ["xG", "1,24", "0,81"],
            ["PADPAD", "19,45", "17,62"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "3", "6"],
            ["Passes Completados", "89%", "87%"],
            ["Cruzamentos Completados", "17%", "21%"],
            ["Faltas", "12", "13"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "126", "128"],
            ["Classificação Média", "6,7", "6,6"]
        ])
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
                [reportPlayer("8", "Horvat", "7,3", "AI", true), reportPlayer("10", "Gonzalez", "7,7", "MO", true), reportPlayer("36", "Butić", "7,4", "Ex")],
                [reportPlayer("77", "Shabani", "7,1", "MAA"), reportPlayer("23", "Matić", "6,6", "MD")],
                [reportPlayer("3", "Bosec", "7,7", "AI"), reportPlayer("5", "Elez", "7,5", "DC"), reportPlayer("4", "Mitrović", "6,8", "DC"), reportPlayer("91", "Tićinović", "6,8", "DL")],
                [reportPlayer("1", "Bulat", "6,7", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("18", "Fiolić", "7,5", "Ex"), reportPlayer("24", "Pavičić", "5,9", "MO"), reportPlayer("20", "Vrzić", "6,5", "Ex")],
                [reportPlayer("10", "Pršir", "7,1", "CJA", true), reportPlayer("7", "Bakić", "6,8", "ME")],
                [reportPlayer("36", "Kavelj", "6,8", "CJR")],
                [reportPlayer("19", "Čabraja", "6,2", "AI"), reportPlayer("4", "J. Filipović", "6,5", "DC"), reportPlayer("45", "Perić", "6,4", "CP"), reportPlayer("22", "Trontelj", "6,1", "AI")],
                [reportPlayer("71", "Matijaš", "6,5", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("36", "R. Gonzalez", { assist: "Š. Butić" }), goalEvent("58", "P. Horvat", { assist: "A. Bosec" })],
            away: [goalEvent("11", "J. Pršir", { assist: "I. Fiolić" })]
        },
        stats: reportStats([
            ["Posse", "61%", "39%"],
            ["Remates", "20", "17"],
            ["Remates à Baliza", "8", "7"],
            ["xG", "1,85", "1,94"],
            ["PADPAD", "20,06", "30,57"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "7", "8"],
            ["Passes Completados", "91%", "83%"],
            ["Cruzamentos Completados", "10%", "16%"],
            ["Faltas", "5", "8"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "125"],
            ["Classificação Média", "7,1", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-09-13-hnk-gorica-dinamo-zagreb",
        date: "Sábado 13 de Setembro de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Stefan Perić",
        rating: "8,04",
        coaches: { home: "Miguel Cardoso", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("24", "Pavičić", "8,0", "Ex", true), reportPlayer("18", "Fiolić", "6,6", "MO"), reportPlayer("20", "Vrzić", "6,9", "Ex")],
                [reportPlayer("7", "Bakić", "6,4", "CJA"), reportPlayer("8", "Pozo", "7,4", "ME", true)],
                [reportPlayer("36", "Kavelj", "6,8", "CJR")],
                [reportPlayer("19", "Čabraja", "6,5", "AI"), reportPlayer("4", "J. Filipović", "7,6", "DC"), reportPlayer("45", "Perić", "8,0", "CP"), reportPlayer("22", "Trontelj", "6,9", "AI")],
                [reportPlayer("71", "Matijaš", "7,3", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "5,9", "AvR")],
                [reportPlayer("11", "Hoxha", "6,5", "EAI"), reportPlayer("7", "Stojković", "7,0", "EAI")],
                [reportPlayer("27", "Mišić", "6,6", "MC"), reportPlayer("8", "Zajc", "6,6", "MC")],
                [reportPlayer("4", "Bennacer", "6,8", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "7,4", "AI"), reportPlayer("28", "Théophile-C.", "6,5", "CC"), reportPlayer("36", "Domínguez", "6,9", "CC"), reportPlayer("25", "Valinčić", "6,9", "AI")],
                [reportPlayer("40", "Livaković", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("12", "D. Pavičić", { assist: "L. Vrzić" }), goalEvent("22", "I. Pozo", { assist: "D. Pavičić" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "37%", "63%"],
            ["Remates", "8", "20"],
            ["Remates à Baliza", "4", "4"],
            ["xG", "0,93", "1,98"],
            ["PADPAD", "25,21", "10,85"],
            ["Oportunidades Flagrantes", "2", "3"],
            ["Cantos", "3", "8"],
            ["Passes Completados", "87%", "90%"],
            ["Cruzamentos Completados", "20%", "23%"],
            ["Faltas", "7", "8"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "120", "117"],
            ["Classificação Média", "7,1", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-09-13-hajduk-split-hnk-rijeka",
        date: "Sábado 13 de Setembro de 2025",
        stadium: "Poljud",
        weather: "Tempestuoso",
        playerOfMatch: "Marko Livaja",
        rating: "8,01",
        coaches: { home: "Gonzalo Garcia", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "8,0", "AR", true)],
                [reportPlayer("11", "Šego", "7,5", "EAI", true), reportPlayer("30", "Almena", "6,7", "EAI")],
                [reportPlayer("23", "Krovinović", "7,0", "MC"), reportPlayer("21", "Pukstas", "6,4", "ME")],
                [reportPlayer("6", "Hugo G.", "6,6", "MD")],
                [reportPlayer("3", "Auer", "6,7", "AI"), reportPlayer("14", "Raçi", "7,2", "CC"), reportPlayer("15", "Marešić", "6,4", "CC"), reportPlayer("38", "Hodak", "6,5", "DL")],
                [reportPlayer("1", "Ivušić", "6,8", "GRC")]
            ]),
            away: reportFormation("4-1-2-1-2", [
                [reportPlayer("7", "Keita Baldé", "6,7", "AAE"), reportPlayer("27", "Ambrose", "6,7", "AvR")],
                [reportPlayer("10", "Fruk", "6,8", "CL")],
                [reportPlayer("26", "Dantas", "7,6", "CJA", true), reportPlayer("11", "André", "6,9", "MC")],
                [reportPlayer("15", "Martínez T.", "6,5", "Pi")],
                [reportPlayer("34", "Devotak", "6,3", "AI"), reportPlayer("53", "Emirhan", "6,6", "CC"), reportPlayer("4", "Andrade", "6,8", "CC"), reportPlayer("3", "Jean Carlos", "6,7", "AI")],
                [reportPlayer("1", "Letica", "7,9", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("58", "M. Šego", { assist: "M. Livaja" }), goalEvent("90+4", "M. Livaja", { assist: "A. Kalik" })],
            away: [goalEvent("39", "Tiago Dantas"), goalEvent("90+3", "Tiago Dantas", { assist: "D. Petrovič" })]
        },
        stats: reportStats([
            ["Posse", "55%", "45%"],
            ["Remates", "16", "13"],
            ["Remates à Baliza", "11", "8"],
            ["xG", "1,46", "1,31"],
            ["PADPAD", "26,50", "19,25"],
            ["Oportunidades Flagrantes", "3", "1"],
            ["Cantos", "11", "6"],
            ["Passes Completados", "91%", "87%"],
            ["Cruzamentos Completados", "9%", "13%"],
            ["Faltas", "8", "19"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "124"],
            ["Classificação Média", "6,9", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-09-13-nk-lokomotiva-hnk-vukovar",
        date: "Sábado 13 de Setembro de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Aleksandar Trajkovski",
        rating: "9,29",
        coaches: { home: "Pai Natal", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("10", "Rui Pedro", "6,7", "AAE"), reportPlayer("7", "Trajkovski", "9,3", "AvR", true)],
                [reportPlayer("28", "Belcar", "6,7", "MC"), reportPlayer("15", "Stojaković", "6,7", "MC"), reportPlayer("37", "Córdoba", "8,0", "MC")],
                [reportPlayer("17", "Pajač", "7,5", "AP", true), reportPlayer("23", "Vešović", "6,1", "AP")],
                [reportPlayer("4", "Sigali", "6,4", "DC"), reportPlayer("40", "McCarthy", "6,6", "CC"), reportPlayer("20", "Kolinger", "6,6", "DC")],
                [reportPlayer("12", "Posavec", "6,5", "GR")]
            ]),
            away: reportFormation("3-3-2-2", [
                [reportPlayer("21", "Puljić", "6,7", "F9"), reportPlayer("8", "Horvat", "6,6", "AAE")],
                [reportPlayer("13", "Čaić", "7,2", "MC"), reportPlayer("77", "Shabani", "7,6", "MO", true)],
                [reportPlayer("10", "Gonzalez", "7,6", "AI", true), reportPlayer("23", "Matić", "6,4", "MD"), reportPlayer("3", "Bosec", "7,2", "AI")],
                [reportPlayer("5", "Elez", "6,9", "CC", true), reportPlayer("4", "Mitrović", "7,7", "DC", true), reportPlayer("91", "Tićinović", "8,3", "CC")],
                [reportPlayer("42", "Daković", "7,1", "GR")]
            ])
        },
        events: {
            home: [goalEvent("4", "A. Trajkovski", { assist: "J. Córdoba" }), goalEvent("22", "A. Trajkovski", { assist: "Rui Pedro" }), goalEvent("51", "M. Pajač", { assist: "A. Trajkovski" })],
            away: [goalEvent("6", "M. Mitrović", { assist: "E. Shabani" }), goalEvent("36", "J. Elez"), goalEvent("79", "E. Shabani", { assist: "Š. Butić" }), goalEvent("85", "R. Gonzalez", { assist: "M. Tićinović" })]
        },
        stats: reportStats([
            ["Posse", "63%", "37%"],
            ["Remates", "23", "22"],
            ["Remates à Baliza", "10", "10"],
            ["xG", "2,58", "3,89"],
            ["PADPAD", "23,42", "25,71"],
            ["Oportunidades Flagrantes", "2", "4"],
            ["Cantos", "12", "9"],
            ["Passes Completados", "90%", "87%"],
            ["Cruzamentos Completados", "27%", "28%"],
            ["Faltas", "12", "6"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "121"],
            ["Classificação Média", "7,0", "7,2"]
        ])
    },
    {
        fixtureKey: "2025-09-13-nk-osijek-nk-slaven-belupo",
        date: "Sábado 13 de Setembro de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Marko Malenica",
        rating: "7,64",
        coaches: { home: "Gamy Chambelito", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("17", "Jakupović", "7,0", "AAE", true), reportPlayer("6", "Nico Gaitán", "6,8", "F9"), reportPlayer("11", "Omerović", "7,3", "AAE", true)],
                [reportPlayer("7", "Tugarev", "6,2", "MO"), reportPlayer("16", "Petrusenko", "7,0", "MO")],
                [reportPlayer("9", "Touré", "6,3", "Pi")],
                [reportPlayer("38", "Čolina", "7,2", "AI"), reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("15", "Mersinaj", "6,5", "CP"), reportPlayer("29", "Karačić", "6,7", "AI")],
                [reportPlayer("31", "Malenica", "7,6", "GR")]
            ]),
            away: reportFormation("3-3-2-2", [
                [reportPlayer("7", "Dabro", "6,6", "AR"), reportPlayer("6", "Božić", "6,5", "AAE")],
                [reportPlayer("15", "Ćubelić", "7,4", "ME", true), reportPlayer("90", "Nestorovski", "6,9", "CJA")],
                [reportPlayer("3", "Jakir", "6,4", "AI"), reportPlayer("21", "Crepulja", "6,3", "MD"), reportPlayer("18", "Krušelj", "6,6", "AI")],
                [reportPlayer("4", "Kovačić", "6,5", "DC"), reportPlayer("22", "Šimunović", "6,4", "DC"), reportPlayer("2", "Medimorec", "6,4", "CC")],
                [reportPlayer("31", "Hadžikić", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("18", "A. Jakupović"), goalEvent("85", "N. Omerović", { assist: "D. Čolina" })],
            away: [goalEvent("55", "I. Ćubelić", { assist: "I. Nestorovski" })]
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "11", "13"],
            ["Remates à Baliza", "7", "8"],
            ["xG", "1,56", "2,19"],
            ["PADPAD", "14,74", "20,57"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "9", "6"],
            ["Passes Completados", "85%", "88%"],
            ["Cruzamentos Completados", "13%", "19%"],
            ["Faltas", "11", "21"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "116", "114"],
            ["Classificação Média", "6,8", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-09-13-nk-varazdin-nk-istra-1961",
        date: "Sábado 13 de Setembro de 2025",
        stadium: "Anđelko Herjavec",
        weather: "Calmo",
        playerOfMatch: "Stjepan Lončar",
        rating: "7,59",
        coaches: { home: "João Nabais", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("38", "Iuri Tavares", "6,3", "AR")],
                [reportPlayer("7", "Vuk", "7,1", "AI"), reportPlayer("27", "Latković", "6,7", "MO"), reportPlayer("18", "Gaprindashvili", "6,4", "Ex")],
                [reportPlayer("8", "Duvnjak", "6,8", "CJR", true), reportPlayer("24", "Marina", "6,3", "MD")],
                [reportPlayer("15", "Jacob", "6,8", "AI"), reportPlayer("44", "Barać", "6,3", "DC"), reportPlayer("16", "Tepšić", "6,5", "CC"), reportPlayer("23", "Maglica", "6,8", "DL")],
                [reportPlayer("1", "Zelenika", "5,9", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("9", "Prevljak", "6,9", "AAE", true), reportPlayer("12", "Obando", "7,3", "AR")],
                [reportPlayer("11", "Goričan", "6,8", "AA"), reportPlayer("7", "Rozić", "6,3", "Ex")],
                [reportPlayer("10", "Lončar", "7,6", "MAA", true), reportPlayer("5", "Radošević", "6,8", "MD")],
                [reportPlayer("26", "Heister", "6,4", "AI"), reportPlayer("4", "Johnston", "6,7", "CC"), reportPlayer("3", "Nasraoui", "6,9", "DC"), reportPlayer("97", "Kadušić", "6,8", "AI")],
                [reportPlayer("1", "Kolić", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("55", "T. Duvnjak", { assist: "T. Gaprindashvili" })],
            away: [goalEvent("11", "S. Prevljak", { assist: "A. Obando" }), goalEvent("54", "S. Lončar", { assist: "S. Goričan" })]
        },
        stats: reportStats([
            ["Posse", "44%", "56%"],
            ["Remates", "16", "10"],
            ["Remates à Baliza", "6", "3"],
            ["xG", "2,08", "0,67"],
            ["PADPAD", "21,00", "31,40"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "7", "5"],
            ["Passes Completados", "84%", "89%"],
            ["Cruzamentos Completados", "24%", "20%"],
            ["Faltas", "5", "6"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "118"],
            ["Classificação Média", "6,6", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-09-20-dinamo-zagreb-hnk-vukovar",
        date: "Sábado 20 de Setembro de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Lovre Kulušić",
        rating: "8,28",
        coaches: { home: "M. Kovačević", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("30", "Topić", "6,1", "AAE")],
                [reportPlayer("10", "Vidović", "6,5", "EAI"), reportPlayer("7", "Stojković", "6,4", "EAI")],
                [reportPlayer("14", "Soldo", "6,6", "MC"), reportPlayer("8", "Zajc", "6,7", "MC")],
                [reportPlayer("27", "Mišić", "6,5", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,7", "AI"), reportPlayer("15", "Galešić", "6,5", "CC"), reportPlayer("36", "Domínguez", "6,3", "CC"), reportPlayer("25", "Valinčić", "6,1", "AI")],
                [reportPlayer("40", "Livaković", "6,4", "GR")]
            ]),
            away: reportFormation("3-3-2-2", [
                [reportPlayer("9", "Kulušić", "8,3", "F9", true), reportPlayer("10", "Gonzalez", "6,7", "AAE")],
                [reportPlayer("21", "Puljić", "7,3", "MC", true), reportPlayer("23", "Matić", "7,1", "MO")],
                [reportPlayer("3", "Bosec", "6,8", "AI"), reportPlayer("77", "Shabani", "7,1", "MD"), reportPlayer("91", "Tićinović", "7,3", "AI")],
                [reportPlayer("5", "Elez", "7,7", "CC"), reportPlayer("4", "Mitrović", "7,6", "DC"), reportPlayer("12", "Živković", "7,0", "CC")],
                [reportPlayer("42", "Daković", "7,3", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("19", "J. Puljić", { assist: "L. Kulušić" }), goalEvent("77", "L. Kulušić", { assist: "J. Elez" })]
        },
        stats: reportStats([
            ["Posse", "43%", "57%"],
            ["Remates", "8", "11"],
            ["Remates à Baliza", "3", "7"],
            ["xG", "0,39", "0,68"],
            ["PADPAD", "26,40", "20,47"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "6", "9"],
            ["Passes Completados", "87%", "90%"],
            ["Cruzamentos Completados", "7%", "3%"],
            ["Faltas", "8", "12"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "121"],
            ["Classificação Média", "6,4", "7,3"]
        ])
    },
    {
        fixtureKey: "2025-09-20-nk-istra-1961-hajduk-split",
        date: "Sábado 20 de Setembro de 2025",
        stadium: "Aldo Drosina",
        weather: "Brisa",
        playerOfMatch: "Silvio Goričan",
        rating: "7,79",
        coaches: { home: "João Pedro Rato", away: "Gonzalo García" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("9", "Prevljak", "6,8", "AAE"), reportPlayer("12", "Obando", "7,3", "AR", true)],
                [reportPlayer("11", "Goričan", "7,8", "AA"), reportPlayer("17", "Frederiksen", "7,5", "CJA", true)],
                [reportPlayer("10", "Lončar", "6,9", "MAA"), reportPlayer("5", "Radošević", "6,8", "MD")],
                [reportPlayer("26", "Heister", "6,8", "AI"), reportPlayer("4", "Johnston", "7,1", "CC"), reportPlayer("3", "Nasraoui", "6,8", "DC"), reportPlayer("97", "Kadušić", "7,2", "AI")],
                [reportPlayer("1", "Kolić", "7,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,3", "AR")],
                [reportPlayer("11", "Šego", "6,5", "EAI"), reportPlayer("30", "Almena", "6,9", "EAI", true)],
                [reportPlayer("7", "Kalik", "7,1", "MC"), reportPlayer("21", "Pukstas", "6,7", "MC")],
                [reportPlayer("23", "Krovinović", "6,6", "MD")],
                [reportPlayer("32", "Hrgović", "6,3", "AI"), reportPlayer("14", "Raçi", "6,7", "CC"), reportPlayer("15", "Marešić", "6,7", "CC"), reportPlayer("38", "Hodak", "6,7", "AI")],
                [reportPlayer("1", "Ivušić", "7,5", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("40", "A. Obando", { assist: "S. Goričan" }), goalEvent("59", "E. Frederiksen", { assist: "A. Kadušić" })],
            away: [goalEvent("22", "I. Almena", { assist: "L. Hodak" })]
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "24", "8"],
            ["Remates à Baliza", "7", "3"],
            ["xG", "3,37", "0,26"],
            ["PADPAD", "21,45", "27,47"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "12", "3"],
            ["Passes Completados", "91%", "87%"],
            ["Cruzamentos Completados", "31%", "11%"],
            ["Faltas", "6", "9"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "121"],
            ["Classificação Média", "7,1", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-09-20-nk-osijek-nk-lokomotiva",
        date: "Sábado 20 de Setembro de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Arnel Jakupović",
        rating: "9,20",
        coaches: { home: "Gamy Chambelito", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("18", "Farkaš", "6,8", "AAE"), reportPlayer("16", "Petrusenko", "6,9", "F9"), reportPlayer("41", "Mejía", "7,4", "AAE")],
                [reportPlayer("9", "Touré", "7,3", "MO"), reportPlayer("17", "Jakupović", "9,2", "MO", true)],
                [reportPlayer("99", "Teklić", "7,9", "Pi", true)],
                [reportPlayer("38", "Čolina", "7,4", "AI", true), reportPlayer("26", "Jelenić", "7,2", "CP"), reportPlayer("15", "Mersinaj", "7,1", "CP"), reportPlayer("29", "Karačić", "7,7", "AI")],
                [reportPlayer("31", "Malenica", "7,6", "GR")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("10", "Rui Pedro", "6,2", "AAE"), reportPlayer("7", "Trajkovski", "6,3", "AvR")],
                [reportPlayer("26", "Rog", "6,7", "MC"), reportPlayer("15", "Stojaković", "5,8", "MC"), reportPlayer("37", "Córdoba", "5,5", "MC")],
                [reportPlayer("17", "Pajač", "6,9", "AP", true), reportPlayer("13", "Boune", "7,0", "AP")],
                [reportPlayer("16", "Dajčer", "6,4", "DC"), reportPlayer("40", "McCarthy", "6,4", "CC"), reportPlayer("20", "Kolinger", "6,7", "DC")],
                [reportPlayer("12", "Posavec", "6,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("3", "T. Teklić", { assist: "A. Jakupović" }), goalEvent("18", "A. Jakupović", { assist: "T. Teklić" }), goalEvent("30", "D. Čolina", { assist: "F. Karačić" }), goalEvent("43", "A. Jakupović", { assist: "D. Mejía" }), goalEvent("70", "N. Omerović", { assist: "L. Vrbančić" })],
            away: [goalEvent("56", "M. Pajač", { assist: "A. Trajkovski" })]
        },
        stats: reportStats([
            ["Posse", "54%", "46%"],
            ["Remates", "20", "20"],
            ["Remates à Baliza", "11", "8"],
            ["xG", "3,01", "1,66"],
            ["PADPAD", "11,48", "21,69"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "7", "13"],
            ["Passes Completados", "88%", "85%"],
            ["Cruzamentos Completados", "24%", "24%"],
            ["Faltas", "8", "11"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "128", "125"],
            ["Classificação Média", "7,5", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-09-20-hnk-rijeka-hnk-gorica",
        date: "Sábado 20 de Setembro de 2025",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Ante Matej Jurić",
        rating: "7,77",
        coaches: { home: "Zép Jóbes", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-1-2-1-2", [
                [reportPlayer("7", "Keita Baldé", "6,4", "AAE"), reportPlayer("8", "Petrovič", "7,1", "AvR")],
                [reportPlayer("10", "Fruk", "6,3", "CL")],
                [reportPlayer("26", "Dantas", "6,4", "CJA"), reportPlayer("11", "André", "6,9", "MC")],
                [reportPlayer("15", "Martínez T.", "7,1", "Pi")],
                [reportPlayer("34", "Devotak", "7,2", "AI"), reportPlayer("53", "Emirhan", "6,8", "CC"), reportPlayer("4", "Andrade", "7,0", "CC"), reportPlayer("23", "Lasickas", "6,3", "AI")],
                [reportPlayer("1", "Letica", "6,8", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("24", "Pavičić", "6,4", "Ex"), reportPlayer("18", "Fiolić", "6,2", "MO"), reportPlayer("20", "Vrzić", "6,1", "Ex")],
                [reportPlayer("7", "Bakić", "6,6", "CJA"), reportPlayer("8", "Pozo", "6,3", "ME")],
                [reportPlayer("36", "Kavelj", "6,3", "CJR")],
                [reportPlayer("19", "Čabraja", "6,3", "AI"), reportPlayer("4", "J. Filipović", "7,4", "DC", true), reportPlayer("45", "Perić", "6,2", "CP"), reportPlayer("22", "Trontelj", "6,4", "AI")],
                [reportPlayer("71", "Matijaš", "6,4", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("63", "A. Jurić", { assist: "M. Ndockyt" })],
            away: [goalEvent("12", "J. Filipović", { assist: "I. Fiolić" })]
        },
        stats: reportStats([
            ["Posse", "74%", "26%"],
            ["Remates", "19", "6"],
            ["Remates à Baliza", "5", "3"],
            ["xG", "1,54", "0,43"],
            ["PADPAD", "8,00", "29,92"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "6", "5"],
            ["Passes Completados", "91%", "75%"],
            ["Cruzamentos Completados", "5%", "17%"],
            ["Faltas", "9", "15"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "116", "113"],
            ["Classificação Média", "6,8", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-09-20-nk-slaven-belupo-nk-varazdin",
        date: "Sábado 20 de Setembro de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Aleksa Latković",
        rating: "7,99",
        coaches: { home: "Francisco Pinto", away: "João Nabais" },
        formations: {
            home: reportFormation("3-3-2-2", [
                [reportPlayer("7", "Dabro", "6,6", "AR"), reportPlayer("90", "Nestorovski", "6,2", "AAE")],
                [reportPlayer("15", "Ćubelić", "6,2", "ME"), reportPlayer("22", "Šimunović", "6,6", "CJA")],
                [reportPlayer("3", "Jakir", "6,4", "AI"), reportPlayer("21", "Crepulja", "6,2", "MD"), reportPlayer("27", "Grgić", "6,2", "AI")],
                [reportPlayer("4", "Kovačić", "7,4", "DC", true), reportPlayer("6", "Božić", "6,6", "DC"), reportPlayer("2", "Medimorec", "6,6", "CC")],
                [reportPlayer("31", "Hadžikić", "7,0", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,5", "AR")],
                [reportPlayer("7", "Vuk", "7,4", "AI"), reportPlayer("27", "Latković", "8,0", "MO", true), reportPlayer("18", "Gaprindashvili", "6,9", "Ex")],
                [reportPlayer("8", "Duvnjak", "7,0", "CJR"), reportPlayer("6", "Puclin", "7,2", "MD")],
                [reportPlayer("3", "Sikošek", "6,6", "AI"), reportPlayer("44", "Barać", "6,8", "DC"), reportPlayer("16", "Tepšić", "6,8", "CC"), reportPlayer("23", "Maglica", "6,5", "DL")],
                [reportPlayer("1", "Zelenika", "6,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("85", "D. Kovačić", { assist: "M. Caimacov" })],
            away: [goalEvent("11", "A. Latković", { assist: "M. Vuk" }), goalEvent("68", "B. Biró", { assist: "A. Latković" }), goalEvent("90+2", "I. Tavares", { assist: "L. Mamić" })]
        },
        stats: reportStats([
            ["Posse", "57%", "43%"],
            ["Remates", "8", "23"],
            ["Remates à Baliza", "4", "11"],
            ["xG", "0,40", "1,69"],
            ["PADPAD", "15,00", "21,33"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "5", "11"],
            ["Passes Completados", "86%", "84%"],
            ["Cruzamentos Completados", "26%", "20%"],
            ["Faltas", "9", "7"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "129"],
            ["Classificação Média", "6,6", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-09-27-hnk-gorica-nk-istra-1961",
        date: "Sábado 27 de Setembro de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Davor Matijaš",
        rating: "8,73",
        coaches: { home: "Miguel Cardoso", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,9", "Ex"), reportPlayer("18", "Fiolić", "7,4", "MO", true), reportPlayer("9", "Bogojević", "5,9", "Ex")],
                [reportPlayer("8", "Pozo", "6,8", "CJA"), reportPlayer("24", "Pavičić", "6,6", "ME")],
                [reportPlayer("7", "Bakić", "7,4", "CJR")],
                [reportPlayer("5", "Leš", "6,8", "AI"), reportPlayer("4", "J. Filipović", "7,6", "DC"), reportPlayer("45", "Perić", "7,3", "CP"), reportPlayer("22", "Trontelj", "6,7", "AI")],
                [reportPlayer("71", "Matijaš", "8,7", "GRC")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("9", "Prevljak", "6,3", "AAE"), reportPlayer("12", "Obando", "6,4", "AR")],
                [reportPlayer("11", "Goričan", "6,4", "AA"), reportPlayer("17", "Frederiksen", "6,6", "CJA")],
                [reportPlayer("10", "Lončar", "6,5", "MAA"), reportPlayer("5", "Radošević", "6,1", "MD")],
                [reportPlayer("26", "Heister", "6,9", "AI"), reportPlayer("4", "Johnston", "6,9", "CC"), reportPlayer("3", "Nasraoui", "6,7", "DC"), reportPlayer("97", "Kadušić", "7,1", "AI")],
                [reportPlayer("1", "Kolić", "6,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("34", "I. Fiolić", { assist: "O. Bakić" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "42%", "58%"],
            ["Remates", "9", "17"],
            ["Remates à Baliza", "5", "9"],
            ["xG", "1,31", "1,92"],
            ["PADPAD", "29,79", "15,64"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "3", "12"],
            ["Passes Completados", "85%", "88%"],
            ["Cruzamentos Completados", "8%", "25%"],
            ["Faltas", "6", "11"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "126", "125"],
            ["Classificação Média", "7,1", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-09-27-hajduk-split-nk-slaven-belupo",
        date: "Sábado 27 de Setembro de 2025",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Adrion Pajaziti",
        rating: "7,58",
        coaches: { home: "Gonzalo García", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,8", "AR", true)],
                [reportPlayer("9", "A. Rebić", "6,3", "EAI"), reportPlayer("30", "Almena", "6,9", "EAI")],
                [reportPlayer("21", "Pukstas", "6,7", "MC"), reportPlayer("23", "Krovinović", "6,5", "MO")],
                [reportPlayer("6", "Hugo G.", "6,5", "MD")],
                [reportPlayer("32", "Hrgović", "6,7", "AI"), reportPlayer("14", "Raçi", "6,7", "CC"), reportPlayer("15", "Marešić", "7,1", "CC"), reportPlayer("38", "Hodak", "6,7", "DL")],
                [reportPlayer("33", "Silić", "6,4", "GR")]
            ]),
            away: reportFormation("3-3-2-2", [
                [reportPlayer("7", "Dabro", "7,4", "AR", true), reportPlayer("90", "Nestorovski", "6,7", "AAE")],
                [reportPlayer("15", "Ćubelić", "6,4", "ME"), reportPlayer("21", "Crepulja", "7,0", "CJA")],
                [reportPlayer("3", "Jakir", "6,9", "AI"), reportPlayer("8", "Mrowca", "7,1", "MD"), reportPlayer("27", "Grgić", "6,6", "AI")],
                [reportPlayer("4", "Kovačić", "7,2", "DC"), reportPlayer("10", "Caimacov", "6,7", "DC"), reportPlayer("6", "Božić", "6,9", "CC")],
                [reportPlayer("31", "Hadžikić", "6,7", "GR")]
            ])
        },
        events: {
            home: [goalEvent("70", "M. Livaja")],
            away: [goalEvent("71", "M. Dabro", { assist: "L. Crepulja" })]
        },
        stats: reportStats([
            ["Posse", "46%", "54%"],
            ["Remates", "22", "6"],
            ["Remates à Baliza", "6", "3"],
            ["xG", "2,61", "0,50"],
            ["PADPAD", "29,00", "15,77"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "14", "3"],
            ["Passes Completados", "92%", "90%"],
            ["Cruzamentos Completados", "20%", "0%"],
            ["Faltas", "9", "10"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "126", "121"],
            ["Classificação Média", "6,7", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-09-27-nk-varazdin-nk-osijek",
        date: "Sábado 27 de Setembro de 2025",
        stadium: "Anđelko Herjavec",
        weather: "Calmo",
        playerOfMatch: "Mateo Barać",
        rating: "8,44",
        coaches: { home: "João Nabais", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Jurić", "7,4", "AR", true)],
                [reportPlayer("38", "Iuri Tavares", "6,7", "AI"), reportPlayer("27", "Latković", "6,4", "MO"), reportPlayer("18", "Gaprindashvili", "7,0", "Ex")],
                [reportPlayer("8", "Duvnjak", "7,0", "CJR", true), reportPlayer("24", "Marina", "6,6", "MD")],
                [reportPlayer("3", "Sikošek", "6,4", "AI"), reportPlayer("44", "Barać", "8,4", "DC", true), reportPlayer("16", "Tepšić", "6,9", "CC"), reportPlayer("23", "Maglica", "6,7", "DL")],
                [reportPlayer("1", "Zelenika", "7,5", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("99", "Teklić", "6,8", "AAE", true), reportPlayer("16", "Petrusenko", "6,7", "F9"), reportPlayer("23", "Vrbančić", "7,1", "AAE")],
                [reportPlayer("9", "Touré", "6,4", "MO"), reportPlayer("17", "Jakupović", "6,1", "MO")],
                [reportPlayer("18", "Farkaš", "6,5", "Pi")],
                [reportPlayer("38", "Čolina", "6,6", "AI"), reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("15", "Mersinaj", "6,6", "CP"), reportPlayer("29", "Karačić", "6,0", "AI")],
                [reportPlayer("31", "Malenica", "6,7", "GR")]
            ])
        },
        events: {
            home: [goalEvent("64", "S. Jurić", { assist: "M. Vuk" }), goalEvent("67", "T. Duvnjak", { assist: "M. Vuk" }), goalEvent("73", "M. Barać", { assist: "P. Bočkaj" }), goalEvent("86", "M. Barać")],
            away: [goalEvent("8", "T. Teklić", { assist: "L. Vrbančić" })]
        },
        stats: reportStats([
            ["Posse", "30%", "70%"],
            ["Remates", "21", "10"],
            ["Remates à Baliza", "10", "6"],
            ["xG", "2,90", "1,65"],
            ["PADPAD", "25,56", "9,33"],
            ["Oportunidades Flagrantes", "3", "1"],
            ["Cantos", "8", "6"],
            ["Passes Completados", "74%", "88%"],
            ["Cruzamentos Completados", "41%", "22%"],
            ["Faltas", "6", "14"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "117", "118"],
            ["Classificação Média", "7,1", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-09-27-hnk-vukovar-hnk-rijeka",
        date: "Sábado 27 de Setembro de 2025",
        stadium: "Stadion HNK Cibalia",
        weather: "Brisa",
        playerOfMatch: "Justas Lasickas",
        rating: "8,53",
        coaches: { home: "Hugo Macedo", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("3-3-2-2", [
                [reportPlayer("21", "Puljić", "5,8", "F9"), reportPlayer("10", "Gonzalez", "6,2", "AAE")],
                [reportPlayer("9", "Kulušić", "6,4", "MC"), reportPlayer("77", "Shabani", "6,2", "MO")],
                [reportPlayer("3", "Bosec", "6,2", "AI"), reportPlayer("18", "Antolković", "6,4", "MD"), reportPlayer("91", "Tićinović", "7,2", "AI")],
                [reportPlayer("5", "Elez", "6,6", "CC"), reportPlayer("12", "Živković", "6,5", "DC"), reportPlayer("4", "Mitrović", "6,6", "CC")],
                [reportPlayer("42", "Daković", "7,2", "GR")]
            ]),
            away: reportFormation("4-1-2-1-2", [
                [reportPlayer("7", "Keita Baldé", "7,5", "AAE", true), reportPlayer("77", "Jurić", "6,5", "AvR")],
                [reportPlayer("10", "Fruk", "6,9", "CL")],
                [reportPlayer("26", "Dantas", "6,7", "CJA"), reportPlayer("8", "Petrovič", "6,9", "MC")],
                [reportPlayer("15", "Martínez T.", "7,0", "Pi")],
                [reportPlayer("34", "Devetak", "7,8", "AI", true), reportPlayer("6", "Radeljić", "7,4", "CC"), reportPlayer("4", "Andrade", "7,4", "CC"), reportPlayer("23", "Lasickas", "8,5", "AI")],
                [reportPlayer("1", "Letica", "7,4", "GRC")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("11", "M. Devetak", { assist: "T. Fruk" }), goalEvent("74", "K. Baldé", { assist: "J. Lasickas" })]
        },
        stats: reportStats([
            ["Posse", "40%", "60%"],
            ["Remates", "8", "11"],
            ["Remates à Baliza", "0", "7"],
            ["xG", "1,13", "1,40"],
            ["PADPAD", "16,57", "29,92"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "3", "4"],
            ["Passes Completados", "90%", "92%"],
            ["Cruzamentos Completados", "20%", "28%"],
            ["Faltas", "14", "16"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "135", "136"],
            ["Classificação Média", "6,5", "7,3"]
        ])
    },
    {
        fixtureKey: "2025-10-04-nk-istra-1961-hnk-vukovar",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Aldo Drosina",
        weather: "Vento Forte",
        playerOfMatch: "Mohamed Nasraoui",
        rating: "7,43",
        coaches: { home: "João Pedro Rato", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,4", "AAE")],
                [reportPlayer("11", "Goričan", "6,9", "AA"), reportPlayer("23", "Štulac", "6,4", "MO"), reportPlayer("17", "Frederiksen", "6,6", "CJA")],
                [reportPlayer("10", "Lončar", "6,6", "MD"), reportPlayer("5", "Radošević", "7,0", "CJR")],
                [reportPlayer("26", "Heister", "7,0", "AI"), reportPlayer("4", "Johnston", "6,7", "CC"), reportPlayer("3", "Nasraoui", "7,4", "DC"), reportPlayer("97", "Kadušić", "6,9", "AI")],
                [reportPlayer("1", "Kolić", "7,2", "GRC")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("11", "Moreno", "6,4", "AAE")],
                [reportPlayer("10", "Gonzalez", "6,3", "MO"), reportPlayer("21", "Puljić", "6,4", "MO")],
                [reportPlayer("7", "Kerim Çalhanoğlu", "6,5", "AI"), reportPlayer("23", "Matić", "6,4", "MD"), reportPlayer("77", "Shabani", "6,4", "CJR"), reportPlayer("3", "Bosec", "7,0", "AI")],
                [reportPlayer("5", "Elez", "6,8", "CC"), reportPlayer("12", "Živković", "6,7", "CC"), reportPlayer("4", "Mitrović", "7,0", "CC")],
                [reportPlayer("42", "Đaković", "7,1", "GR")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "58%", "42%"],
            ["Remates", "13", "8"],
            ["Remates à Baliza", "5", "3"],
            ["xG", "1,31", "0,46"],
            ["PADPAD", "15,82", "19,81"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "5", "8"],
            ["Passes Completados", "88%", "83%"],
            ["Cruzamentos Completados", "26%", "6%"],
            ["Faltas", "7", "8"],
            ["Cartões amarelos", "1", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "124"],
            ["Classificação Média", "6,8", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-10-04-nk-lokomotiva-nk-varazdin",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Bence Biró",
        rating: "8,04",
        coaches: { home: "Pai Natal", away: "João Nabais" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "6,4", "AAE"), reportPlayer("15", "Stojaković", "8,0", "AvR", true)],
                [reportPlayer("28", "Belcar", "6,7", "MC"), reportPlayer("26", "Rog", "7,4", "CJA", true), reportPlayer("40", "McCarthy", "6,4", "MC")],
                [reportPlayer("17", "Pajač", "6,8", "AI"), reportPlayer("23", "Vešović", "7,3", "AI")],
                [reportPlayer("4", "Sigali", "6,6", "DC"), reportPlayer("25", "Kamenović", "6,7", "CP"), reportPlayer("20", "Kolinger", "6,9", "CP")],
                [reportPlayer("1", "Hendija", "6,7", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Jurić", "6,2", "AR")],
                [reportPlayer("7", "Vuk", "6,5", "AI"), reportPlayer("10", "Biró", "8,0", "SA", true), reportPlayer("18", "Gaprindashvili", "7,9", "Ex")],
                [reportPlayer("8", "Duvnjak", "7,1", "CJR"), reportPlayer("24", "Marina", "6,5", "CJA")],
                [reportPlayer("3", "Sikošek", "6,9", "AI"), reportPlayer("44", "Barać", "7,3", "DC", true), reportPlayer("16", "Tepšić", "6,5", "CC"), reportPlayer("23", "Maglica", "7,5", "DL", true)],
                [reportPlayer("1", "Zelenika", "6,1", "GR")]
            ])
        },
        events: {
            home: [goalEvent("34", "M. Rog"), goalEvent("44", "A. Stojaković", { assist: "M. Vešović" }), goalEvent("67", "A. Stojaković", { assist: "J. Córdoba" })],
            away: [goalEvent("12", "M. Barać", { assist: "G. Sikošek" }), goalEvent("55", "F. Maglica", { assist: "T. Duvnjak" }), goalEvent("78", "B. Biró", { assist: "T. Gaprindashvili" })]
        },
        stats: reportStats([
            ["Posse", "59%", "41%"],
            ["Remates", "9", "19"],
            ["Remates à Baliza", "4", "8"],
            ["xG", "2,42", "2,93"],
            ["PADPAD", "18,56", "20,09"],
            ["Oportunidades Flagrantes", "3", "3"],
            ["Cantos", "6", "7"],
            ["Passes Completados", "90%", "85%"],
            ["Cruzamentos Completados", "13%", "37%"],
            ["Faltas", "12", "11"],
            ["Cartões amarelos", "4", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "126"],
            ["Classificação Média", "6,9", "7,0"]
        ])
    },
    {
        fixtureKey: "2025-10-04-nk-osijek-hajduk-split",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Opus Arena",
        weather: "Vento Forte",
        playerOfMatch: "Arnel Jakupović",
        rating: "7,89",
        coaches: { home: "Gamy Chambelito", away: "Gonzalo García" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("20", "Gradel", "7,3", "AR", true)],
                [reportPlayer("38", "Čolina", "7,2", "MO"), reportPlayer("17", "Jakupović", "7,9", "MO", true)],
                [reportPlayer("23", "Vrbančić", "6,5", "MAI"), reportPlayer("9", "Touré", "6,5", "MC"), reportPlayer("29", "Karačić", "7,0", "MAI")],
                [reportPlayer("99", "Teklić", "6,2", "Pi")],
                [reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("21", "Bubanja", "6,6", "CP"), reportPlayer("15", "Mersinaj", "6,6", "CP")],
                [reportPlayer("31", "Malenica", "6,5", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,9", "AR", true)],
                [reportPlayer("9", "A. Rebić", "6,1", "EAI"), reportPlayer("11", "Šego", "6,2", "EAI")],
                [reportPlayer("23", "Krovinović", "6,5", "MC"), reportPlayer("21", "Pukstas", "6,2", "ME")],
                [reportPlayer("6", "Hugo G.", "6,1", "MD")],
                [reportPlayer("32", "Hrgović", "6,4", "AI"), reportPlayer("14", "Raçi", "6,6", "CC"), reportPlayer("15", "Marešić", "6,5", "CC"), reportPlayer("38", "Hodak", "6,5", "DL")],
                [reportPlayer("33", "Silić", "6,9", "GR")]
            ])
        },
        events: {
            home: [goalEvent("31", "M. Gradel", { assist: "F. Karačić" }), goalEvent("45+3", "A. Jakupović"), goalEvent("90+3", "K. Ademi", { assist: "N. Farkaš" })],
            away: [goalEvent("58", "M. Livaja", { assist: "I. Almena" })]
        },
        stats: reportStats([
            ["Posse", "48%", "52%"],
            ["Remates", "16", "8"],
            ["Remates à Baliza", "11", "4"],
            ["xG", "2,16", "0,22"],
            ["PADPAD", "19,00", "21,00"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "8", "6"],
            ["Passes Completados", "88%", "90%"],
            ["Cruzamentos Completados", "27%", "12%"],
            ["Faltas", "11", "14"],
            ["Cartões amarelos", "1", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "128", "120"],
            ["Classificação Média", "6,8", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-10-04-hnk-rijeka-dinamo-zagreb",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Rujevica",
        weather: "Vento Forte",
        playerOfMatch: "Keita Baldé",
        rating: "9,57",
        coaches: { home: "Zép Jóbes", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("7", "Keita Baldé", "9,6", "AR", true)],
                [reportPlayer("77", "Jurić", "7,7", "ME"), reportPlayer("10", "Fruk", "7,8", "MO", true)],
                [reportPlayer("8", "Petrovič", "6,8", "MC")],
                [reportPlayer("15", "Martínez T.", "6,9", "MD"), reportPlayer("26", "Dantas", "7,4", "CJR")],
                [reportPlayer("34", "Devetak", "6,9", "AI"), reportPlayer("6", "Radeljić", "7,3", "CC"), reportPlayer("4", "Andrade", "6,9", "CC"), reportPlayer("23", "Lasickas", "7,0", "AI")],
                [reportPlayer("1", "Letica", "7,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,1", "AvR", true)],
                [reportPlayer("10", "Vidović", "6,6", "EAI"), reportPlayer("30", "Topić", "7,6", "EAI")],
                [reportPlayer("27", "Mišić", "6,0", "MC"), reportPlayer("8", "Zajc", "6,6", "MC")],
                [reportPlayer("4", "Bennacer", "6,7", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,2", "AI"), reportPlayer("26", "McKenna", "6,6", "CC"), reportPlayer("15", "Galešić", "6,0", "CC"), reportPlayer("25", "Valinčić", "6,5", "AI")],
                [reportPlayer("40", "Livaković", "7,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("20", "K. Baldé", { assist: "T. Fruk" }), goalEvent("22", "K. Baldé", { assist: "A. Jurić" }), goalEvent("24", "T. Fruk")],
            away: [goalEvent("26", "Dion Beljo", { assist: "F. Topić" }), sendOffEvent("69", "J. Mišić")]
        },
        stats: reportStats([
            ["Posse", "62%", "38%"],
            ["Remates", "26", "11"],
            ["Remates à Baliza", "16", "7"],
            ["xG", "4,22", "1,16"],
            ["PADPAD", "14,09", "24,29"],
            ["Oportunidades Flagrantes", "3", "1"],
            ["Cantos", "16", "11"],
            ["Passes Completados", "90%", "86%"],
            ["Cruzamentos Completados", "23%", "17%"],
            ["Faltas", "11", "9"],
            ["Cartões amarelos", "4", "0"],
            ["Cartões vermelhos", "0", "1"],
            ["Distância Percorrida", "127", "123"],
            ["Classificação Média", "7,4", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-10-04-nk-slaven-belupo-hnk-gorica",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Bruno Bogojević",
        rating: "9,30",
        coaches: { home: "Francisco Pinto", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "6,2", "AA"), reportPlayer("90", "Nestorovski", "6,4", "AR")],
                [reportPlayer("15", "Ćubelić", "6,4", "EAI"), reportPlayer("21", "Crepulja", "6,4", "Ex")],
                [reportPlayer("8", "Mrowca", "6,6", "MD"), reportPlayer("10", "Caimacov", "6,6", "CJA")],
                [reportPlayer("3", "Jakir", "7,4", "AI"), reportPlayer("4", "Kovačić", "6,2", "DC"), reportPlayer("6", "Božić", "6,5", "CC"), reportPlayer("18", "Krušelj", "6,3", "DL")],
                [reportPlayer("31", "Hadžikić", "6,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,3", "Ex"), reportPlayer("18", "Fiolić", "6,6", "ME"), reportPlayer("9", "Bogojević", "9,3", "Ex", true)],
                [reportPlayer("8", "Pozo", "7,4", "CJA"), reportPlayer("24", "Pavičić", "6,4", "ME")],
                [reportPlayer("7", "Bakić", "6,6", "MD")],
                [reportPlayer("5", "Leš", "6,3", "AI"), reportPlayer("4", "J. Filipović", "7,4", "DC"), reportPlayer("45", "Perić", "6,8", "CP"), reportPlayer("22", "Trontelj", "6,5", "AI")],
                [reportPlayer("71", "Matijaš", "7,7", "GRC")]
            ])
        },
        events: {
            home: [sendOffEvent("75", "T. Božić")],
            away: [goalEvent("45+2", "B. Bogojević"), goalEvent("66", "B. Bogojević", { assist: "I. Pozo" }), goalEvent("77", "T. Epailly", { assist: "B. Bogojević" })]
        },
        stats: reportStats([
            ["Posse", "69%", "31%"],
            ["Remates", "11", "6"],
            ["Remates à Baliza", "5", "5"],
            ["xG", "1,17", "1,31"],
            ["PADPAD", "13,65", "33,38"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "5", "4"],
            ["Passes Completados", "92%", "83%"],
            ["Cruzamentos Completados", "11%", "8%"],
            ["Faltas", "13", "11"],
            ["Cartões amarelos", "2", "2"],
            ["Cartões vermelhos", "1", "0"],
            ["Distância Percorrida", "117", "122"],
            ["Classificação Média", "6,4", "7,1"]
        ])
    },
    {
        fixtureKey: "2025-10-18-dinamo-zagreb-nk-slaven-belupo",
        date: "Sábado 18 de Outubro de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Dion Beljo",
        rating: "8,29",
        coaches: { home: "M. Kovačević", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "8,3", "AvR", true)],
                [reportPlayer("11", "Hoxha", "7,2", "EAI", true), reportPlayer("30", "Topić", "6,5", "EAI")],
                [reportPlayer("7", "Stojković", "7,1", "MC"), reportPlayer("8", "Zajc", "7,6", "MC")],
                [reportPlayer("4", "Bennacer", "6,5", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "6,6", "AI"), reportPlayer("26", "McKenna", "7,1", "CC"), reportPlayer("36", "Domínguez", "6,9", "CC"), reportPlayer("25", "Valinčić", "7,7", "AI")],
                [reportPlayer("40", "Livaković", "7,0", "GR")]
            ]),
            away: reportFormation("3-3-2-2", [
                [reportPlayer("90", "Nestorovski", "6,6", "AR"), reportPlayer("7", "Dabro", "6,5", "AAE")],
                [reportPlayer("21", "Crepulja", "7,2", "ME"), reportPlayer("15", "Ćubelić", "6,3", "CJA")],
                [reportPlayer("3", "Jakir", "6,1", "AI"), reportPlayer("8", "Mrowca", "6,7", "MD"), reportPlayer("18", "Krušelj", "7,0", "AI")],
                [reportPlayer("24", "Stepinac", "6,5", "DC"), reportPlayer("2", "Međimorec", "6,0", "DC"), reportPlayer("4", "Kovačić", "6,8", "CC")],
                [reportPlayer("31", "Hadžikić", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("55", "A. Hoxha", { assist: "M. Valinčić" }), goalEvent("65", "Dion Beljo", { assist: "L. Stojković" }), goalEvent("79", "Dion Beljo", { assist: "M. Zajc" })],
            away: [goalEvent("45+1", "I. Božić", { assist: "L. Crepulja" })]
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "21", "6"],
            ["Remates à Baliza", "10", "2"],
            ["xG", "2,25", "1,32"],
            ["PADPAD", "18,38", "16,29"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "11", "5"],
            ["Passes Completados", "92%", "89%"],
            ["Cruzamentos Completados", "32%", "11%"],
            ["Faltas", "8", "10"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "118", "116"],
            ["Classificação Média", "7,1", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-10-18-hnk-gorica-nk-varazdin",
        date: "Sábado 18 de Outubro de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Domagoj Pavičić",
        rating: "7,53",
        coaches: { home: "Miguel Cardoso", away: "João Nabais" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "7,3", "Ex", true), reportPlayer("10", "Pršir", "7,3", "MO", true), reportPlayer("9", "Bogojević", "6,5", "Ex")],
                [reportPlayer("8", "Pozo", "7,5", "CJA"), reportPlayer("24", "Pavičić", "7,5", "ME")],
                [reportPlayer("7", "Bakić", "6,1", "CJR")],
                [reportPlayer("19", "Čabraja", "7,4", "AI"), reportPlayer("4", "J. Filipović", "7,3", "DC"), reportPlayer("45", "Perić", "7,0", "CP"), reportPlayer("22", "Trontelj", "6,6", "AI")],
                [reportPlayer("71", "Matijaš", "7,3", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Jurić", "6,3", "AR")],
                [reportPlayer("7", "Vuk", "6,2", "AI"), reportPlayer("27", "Latković", "6,4", "MO"), reportPlayer("18", "Gaprindashvili", "6,2", "Ex")],
                [reportPlayer("8", "Duvnjak", "6,5", "CJR"), reportPlayer("6", "Puclin", "6,4", "MD")],
                [reportPlayer("3", "Sikošek", "6,3", "AI"), reportPlayer("44", "Barać", "6,4", "DC"), reportPlayer("16", "Tepšić", "6,7", "CC"), reportPlayer("23", "Maglica", "6,6", "DL")],
                [reportPlayer("1", "Zelenika", "6,7", "GR")]
            ])
        },
        events: {
            home: [goalEvent("10", "L. Vrzić"), goalEvent("33", "J. Pršir", { assist: "D. Pavičić" }), goalEvent("82", "W. Sule", { assist: "I. Pozo" }), sendOffEvent("88", "Bakić")],
            away: []
        },
        stats: reportStats([
            ["Posse", "40%", "60%"],
            ["Remates", "15", "11"],
            ["Remates à Baliza", "9", "2"],
            ["xG", "1,83", "0,48"],
            ["PADPAD", "18,73", "12,37"],
            ["Oportunidades Flagrantes", "3", "0"],
            ["Cantos", "4", "1"],
            ["Passes Completados", "82%", "87%"],
            ["Cruzamentos Completados", "17%", "5%"],
            ["Faltas", "9", "6"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "1", "0"],
            ["Distância Percorrida", "121", "123"],
            ["Classificação Média", "7,1", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-10-18-hajduk-split-nk-lokomotiva",
        date: "Sábado 18 de Outubro de 2025",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Marko Rog",
        rating: "7,75",
        coaches: { home: "Gonzalo García", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,8", "AR", true)],
                [reportPlayer("9", "A. Rebić", "6,7", "EAI"), reportPlayer("11", "Šego", "6,4", "EAI")],
                [reportPlayer("21", "Pukstas", "6,5", "MC"), reportPlayer("23", "Krovinović", "6,2", "MO")],
                [reportPlayer("6", "Hugo G.", "6,9", "MD")],
                [reportPlayer("3", "Auer", "7,1", "AI"), reportPlayer("14", "Raçi", "6,4", "CC"), reportPlayer("15", "Marešić", "6,3", "CC"), reportPlayer("55", "Šumelj", "6,7", "DL")],
                [reportPlayer("33", "Silić", "6,2", "GR")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "7,0", "AAE", true), reportPlayer("15", "Stojaković", "7,2", "AC")],
                [reportPlayer("40", "McCarthy", "6,7", "MC"), reportPlayer("28", "Belcar", "7,2", "MC"), reportPlayer("26", "Rog", "7,8", "MC", true)],
                [reportPlayer("17", "Pajač", "6,9", "AP"), reportPlayer("23", "Vešović", "6,6", "AP")],
                [reportPlayer("4", "Sigali", "6,7", "DC"), reportPlayer("16", "Dajčer", "6,6", "CC"), reportPlayer("20", "Kolinger", "6,9", "DC")],
                [reportPlayer("12", "Posavec", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("58", "M. Livaja", { assist: "V. Šumelj" })],
            away: [goalEvent("19", "A. Trajkovski", { assist: "A. Stojaković" }), goalEvent("28", "M. Rog")]
        },
        stats: reportStats([
            ["Posse", "40%", "60%"],
            ["Remates", "11", "8"],
            ["Remates à Baliza", "4", "4"],
            ["xG", "1,39", "1,18"],
            ["PADPAD", "18,59", "14,58"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "5", "8"],
            ["Passes Completados", "89%", "90%"],
            ["Cruzamentos Completados", "24%", "7%"],
            ["Faltas", "9", "11"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "116"],
            ["Classificação Média", "6,6", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-10-18-hnk-rijeka-nk-istra-1961",
        date: "Sábado 18 de Outubro de 2025",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Mladen Devetak",
        rating: "9,21",
        coaches: { home: "Zép Jóbes", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-1-2-1-2", [
                [reportPlayer("7", "Keita Baldé", "6,3", "AAE"), reportPlayer("27", "Ambrose", "6,5", "AvR")],
                [reportPlayer("10", "Fruk", "6,5", "CL")],
                [reportPlayer("26", "Dantas", "6,8", "CJA"), reportPlayer("8", "Petrovič", "7,4", "MC")],
                [reportPlayer("15", "Martínez T.", "7,0", "Pi")],
                [reportPlayer("34", "Devetak", "9,2", "AI", true), reportPlayer("6", "Radeljić", "8,1", "CC"), reportPlayer("4", "Andrade", "7,0", "CC"), reportPlayer("23", "Lasickas", "7,1", "AI")],
                [reportPlayer("1", "Letica", "7,3", "GRC")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("9", "Prevljak", "6,3", "AAE"), reportPlayer("14", "Tóth", "6,3", "AR")],
                [reportPlayer("11", "Goričan", "7,0", "AA"), reportPlayer("17", "Frederiksen", "6,6", "CJA")],
                [reportPlayer("10", "Lončar", "6,5", "MAA"), reportPlayer("5", "Radošević", "6,7", "MD")],
                [reportPlayer("26", "Heister", "6,4", "AI"), reportPlayer("4", "Johnston", "6,6", "CC"), reportPlayer("3", "Nasraoui", "6,4", "DC"), reportPlayer("97", "Kadušić", "6,6", "AI")],
                [reportPlayer("1", "Kolić", "7,3", "GR")]
            ])
        },
        events: {
            home: [goalEvent("69", "A. Jurić", { assist: "A. Oreč" }), goalEvent("78", "S. Vignato", { assist: "M. Devetak" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "58%", "42%"],
            ["Remates", "21", "8"],
            ["Remates à Baliza", "12", "2"],
            ["xG", "2,16", "1,40"],
            ["PADPAD", "10,88", "30,64"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "9", "7"],
            ["Passes Completados", "89%", "86%"],
            ["Cruzamentos Completados", "40%", "16%"],
            ["Faltas", "6", "9"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "128", "128"],
            ["Classificação Média", "7,3", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-10-18-hnk-vukovar-nk-osijek",
        date: "Sábado 18 de Outubro de 2025",
        stadium: "Stadion HNK Cibalia",
        weather: "Calmo",
        playerOfMatch: "Yannick Touré",
        rating: "8,77",
        coaches: { home: "Hugo Macedo", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("3-3-2-2", [
                [reportPlayer("10", "Gonzalez", "6,6", "F9", true), reportPlayer("21", "Puljić", "6,9", "AAE", true)],
                [reportPlayer("77", "Shabani", "6,5", "MC"), reportPlayer("40", "Landel", "6,2", "MO")],
                [reportPlayer("7", "Kerim Çalhanoğlu", "6,4", "AI"), reportPlayer("23", "Matić", "6,4", "MD"), reportPlayer("16", "Pavičić", "6,1", "AI")],
                [reportPlayer("12", "Živković", "6,5", "CC"), reportPlayer("4", "Mitrović", "6,6", "DC"), reportPlayer("5", "Elez", "6,7", "CC")],
                [reportPlayer("42", "Đaković", "6,5", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("20", "Gradel", "7,1", "AAE", true), reportPlayer("17", "Jakupović", "8,8", "F9", true), reportPlayer("34", "Matković", "7,9", "AAE", true)],
                [reportPlayer("10", "Shopov", "6,8", "MO"), reportPlayer("23", "Vrbančić", "6,9", "MO", true)],
                [reportPlayer("16", "Petrusenko", "6,9", "Pi")],
                [reportPlayer("38", "Čolina", "7,3", "AI"), reportPlayer("26", "Jelenić", "7,4", "CP"), reportPlayer("15", "Mersinaj", "6,8", "CP"), reportPlayer("29", "Karačić", "7,3", "AI")],
                [reportPlayer("31", "Malenica", "7,1", "GR")]
            ])
        },
        events: {
            home: [goalEvent("53", "J. Puljić", { assist: "Š. Butić" }), goalEvent("73", "R. Gonzalez", { assist: "Š. Butić" })],
            away: [goalEvent("22", "A. Matković", { assist: "S. Shopov" }), goalEvent("48", "A. Jakupović", { penalty: true }), goalEvent("67", "A. Jakupović", { assist: "M. Gradel" }), goalEvent("80", "Y. Touré", { assist: "A. Jakupović" }), goalEvent("83", "Y. Touré", { assist: "L. Vrbančić" })]
        },
        stats: reportStats([
            ["Posse", "46%", "54%"],
            ["Remates", "13", "17"],
            ["Remates à Baliza", "8", "9"],
            ["xG", "1,12", "2,89"],
            ["PADPAD", "25,77", "19,93"],
            ["Oportunidades Flagrantes", "0", "3"],
            ["Cantos", "9", "8"],
            ["Passes Completados", "83%", "86%"],
            ["Cruzamentos Completados", "10%", "31%"],
            ["Faltas", "10", "8"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "127"],
            ["Classificação Média", "6,6", "7,3"]
        ])
    },
    {
        fixtureKey: "2025-10-25-nk-istra-1961-dinamo-zagreb",
        date: "Sábado 25 de Outubro de 2025",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Scott McKenna",
        rating: "7,66",
        coaches: { home: "João Pedro Rato", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("9", "Prevljak", "6,4", "AAE"), reportPlayer("14", "Tóth", "7,3", "AR", true)],
                [reportPlayer("11", "Goričan", "6,5", "AA"), reportPlayer("17", "Frederiksen", "6,7", "CJA")],
                [reportPlayer("23", "Štulac", "6,7", "MD"), reportPlayer("5", "Radošević", "6,4", "CJR")],
                [reportPlayer("26", "Heister", "6,5", "AI"), reportPlayer("4", "Johnston", "6,3", "CC"), reportPlayer("3", "Nasraoui", "6,7", "DC"), reportPlayer("97", "Kadušić", "6,7", "AI")],
                [reportPlayer("1", "Kolić", "6,4", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "6,7", "AvR")],
                [reportPlayer("11", "Hoxha", "7,4", "EAI", true), reportPlayer("30", "Topić", "6,6", "EAI")],
                [reportPlayer("27", "Mišić", "6,7", "MC"), reportPlayer("8", "Zajc", "7,5", "ME")],
                [reportPlayer("4", "Bennacer", "7,1", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,7", "DL"), reportPlayer("26", "McKenna", "7,7", "CC", true), reportPlayer("15", "Galešić", "7,2", "CC"), reportPlayer("25", "Valinčić", "6,6", "AI")],
                [reportPlayer("40", "Livaković", "7,2", "GR")]
            ])
        },
        events: {
            home: [goalEvent("4", "B. Tóth", { assist: "A. Kadušić" })],
            away: [goalEvent("14", "S. McKenna", { assist: "M. Zajc" }), goalEvent("29", "A. Hoxha", { assist: "M. Zajc" }), goalEvent("77", "B. Goda", { assist: "I. Bennacer" })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "15", "11"],
            ["Remates à Baliza", "10", "8"],
            ["xG", "1,25", "0,69"],
            ["PADPAD", "33,07", "28,36"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "11", "6"],
            ["Passes Completados", "91%", "91%"],
            ["Cruzamentos Completados", "12%", "25%"],
            ["Faltas", "7", "7"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "132", "127"],
            ["Classificação Média", "6,6", "7,0"]
        ])
    },
    {
        fixtureKey: "2025-10-25-nk-lokomotiva-hnk-rijeka",
        date: "Sábado 25 de Outubro de 2025",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Rui Pedro",
        rating: "9,37",
        coaches: { home: "Pai Natal", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "7,2", "AAE"), reportPlayer("10", "Rui Pedro", "9,4", "F9", true)],
                [reportPlayer("40", "McCarthy", "6,8", "MC"), reportPlayer("28", "Belcar", "6,6", "MC"), reportPlayer("26", "Rog", "6,8", "MC")],
                [reportPlayer("17", "Pajač", "6,5", "AP"), reportPlayer("23", "Vešović", "7,4", "AP")],
                [reportPlayer("4", "Sigali", "6,4", "DC"), reportPlayer("16", "Dajčer", "7,1", "CC"), reportPlayer("20", "Kolinger", "6,5", "DC")],
                [reportPlayer("12", "Posavec", "7,2", "GR")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "6,5", "AE")],
                [reportPlayer("10", "Fruk", "6,3", "Ex"), reportPlayer("7", "Keita Baldé", "6,9", "Ex", true)],
                [reportPlayer("8", "Petrovič", "6,5", "MC")],
                [reportPlayer("15", "Martínez T.", "6,9", "MD"), reportPlayer("26", "Dantas", "6,3", "MD")],
                [reportPlayer("34", "Devetak", "6,8", "DL"), reportPlayer("6", "Radeljić", "6,7", "DC"), reportPlayer("4", "Andrade", "6,6", "DC"), reportPlayer("23", "Lasickas", "7,1", "DL")],
                [reportPlayer("1", "Letica", "6,2", "GRL")]
            ])
        },
        events: {
            home: [goalEvent("5", "Rui Pedro"), goalEvent("7", "Rui Pedro"), goalEvent("32", "Rui Pedro", { assist: "M. Vešović" })],
            away: [goalEvent("33", "K. Baldé", { assist: "J. Lasickas" })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "19", "16"],
            ["Remates à Baliza", "8", "7"],
            ["xG", "2,09", "2,03"],
            ["PADPAD", "26,91", "16,95"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "12", "8"],
            ["Passes Completados", "89%", "87%"],
            ["Cruzamentos Completados", "27%", "42%"],
            ["Faltas", "12", "19"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "114", "119"],
            ["Classificação Média", "7,1", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-10-25-nk-osijek-hnk-gorica",
        date: "Sábado 25 de Outubro de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Luka Vrbančić",
        rating: "8,02",
        coaches: { home: "Gamy Chambelito", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("9", "Touré", "7,4", "F9"), reportPlayer("17", "Jakupović", "7,4", "AAE", true), reportPlayer("34", "Matković", "7,6", "AAE", true)],
                [reportPlayer("10", "Shopov", "6,3", "MO"), reportPlayer("23", "Vrbančić", "8,0", "MO", true)],
                [reportPlayer("16", "Petrusenko", "6,7", "Pi")],
                [reportPlayer("38", "Čolina", "7,7", "AI"), reportPlayer("26", "Jelenić", "7,3", "CP"), reportPlayer("33", "Hasić", "7,1", "CP"), reportPlayer("29", "Karačić", "7,3", "AI")],
                [reportPlayer("31", "Malenica", "7,5", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,2", "Ex"), reportPlayer("10", "Pršir", "6,2", "ME"), reportPlayer("9", "Bogojević", "6,0", "Ex")],
                [reportPlayer("8", "Pozo", "6,4", "CJA"), reportPlayer("24", "Pavičić", "6,1", "ME")],
                [reportPlayer("36", "Kavelj", "6,3", "CJR")],
                [reportPlayer("19", "Čabraja", "6,1", "AI"), reportPlayer("4", "J. Filipović", "6,5", "DC"), reportPlayer("5", "Leš", "6,5", "CP"), reportPlayer("22", "Trontelj", "6,6", "AI")],
                [reportPlayer("71", "Matijaš", "6,9", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("5", "A. Matković", { assist: "L. Vrbančić" }), goalEvent("31", "A. Jakupović", { penalty: true }), goalEvent("90", "M. Gradel", { assist: "L. Vrbančić" })],
            away: [sendOffEvent("28", "B. Bogojević")]
        },
        stats: reportStats([
            ["Posse", "63%", "37%"],
            ["Remates", "23", "5"],
            ["Remates à Baliza", "12", "2"],
            ["xG", "2,99", "0,16"],
            ["PADPAD", "10,07", "26,75"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "14", "4"],
            ["Passes Completados", "89%", "78%"],
            ["Cruzamentos Completados", "22%", "9%"],
            ["Faltas", "5", "11"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "1"],
            ["Distância Percorrida", "130", "120"],
            ["Classificação Média", "7,3", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-10-25-nk-slaven-belupo-hnk-vukovar",
        date: "Sábado 25 de Outubro de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Brisa",
        playerOfMatch: "Šimun Butić",
        rating: "8,51",
        coaches: { home: "Francisco Pinto", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("3-4-1-2", [
                [reportPlayer("21", "Crepulja", "6,6", "AR"), reportPlayer("90", "Nestorovski", "6,2", "AAE")],
                [reportPlayer("15", "Ćubelić", "6,7", "CJA")],
                [reportPlayer("3", "Jakir", "6,6", "AI"), reportPlayer("8", "Mrowca", "6,6", "MAA"), reportPlayer("10", "Caimacov", "6,8", "MD"), reportPlayer("18", "Krušelj", "6,9", "AI")],
                [reportPlayer("17", "Ćosić", "6,3", "CC"), reportPlayer("6", "Božić", "6,7", "DC", true), reportPlayer("4", "Kovačić", "6,4", "CC")],
                [reportPlayer("31", "Hadžikić", "6,6", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("9", "Kulušić", "6,6", "AAE")],
                [reportPlayer("21", "Puljić", "7,4", "AI"), reportPlayer("7", "Kerim Çalhan.", "6,6", "AI")],
                [reportPlayer("10", "Gonzalez", "7,0", "ME"), reportPlayer("15", "Gurlica", "6,9", "CJA")],
                [reportPlayer("23", "Matić", "6,4", "MD")],
                [reportPlayer("91", "Tićinović", "7,3", "AI", true), reportPlayer("4", "Mitrović", "6,9", "DC"), reportPlayer("12", "Živković", "6,7", "DC"), reportPlayer("5", "Elez", "6,6", "AI")],
                [reportPlayer("42", "Đaković", "7,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("18", "I. Božić", { assist: "I. Ćubelić" })],
            away: [goalEvent("21", "M. Tićinović"), goalEvent("69", "Š. Butić", { assist: "J. Puljić" }), goalEvent("79", "Š. Butić", { assist: "J. Moreno" })]
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "10", "14"],
            ["Remates à Baliza", "5", "9"],
            ["xG", "1,19", "1,31"],
            ["PADPAD", "18,05", "19,74"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "5", "10"],
            ["Passes Completados", "88%", "87%"],
            ["Cruzamentos Completados", "17%", "13%"],
            ["Faltas", "19", "6"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "128"],
            ["Classificação Média", "6,6", "7,0"]
        ])
    },
    {
        fixtureKey: "2025-10-25-nk-varazdin-hajduk-split",
        date: "Sábado 25 de Outubro de 2025",
        stadium: "Anđelko Herjavec",
        weather: "Calmo",
        playerOfMatch: "Gregor Sikošek",
        rating: "7,91",
        coaches: { home: "João Nabais", away: "Gonzalo García" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,2", "AR")],
                [reportPlayer("22", "Mamić", "6,5", "AI"), reportPlayer("27", "Latković", "6,7", "MO"), reportPlayer("18", "Gaprindashvili", "6,5", "Ex")],
                [reportPlayer("8", "Duvnjak", "6,6", "CJR"), reportPlayer("6", "Puclin", "7,2", "CJA")],
                [reportPlayer("3", "Sikošek", "7,9", "AI", true), reportPlayer("44", "Barać", "7,1", "DC"), reportPlayer("16", "Tepšić", "6,8", "CC"), reportPlayer("23", "Maglica", "7,6", "DL")],
                [reportPlayer("1", "Zelenika", "7,4", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,5", "AR")],
                [reportPlayer("9", "A. Rebić", "6,4", "EAI"), reportPlayer("11", "Šego", "6,7", "EAI")],
                [reportPlayer("7", "Kalik", "6,8", "MC"), reportPlayer("21", "Pukstas", "6,4", "MC")],
                [reportPlayer("23", "Krovinović", "6,4", "MD")],
                [reportPlayer("3", "Auer", "6,9", "AI"), reportPlayer("14", "Raçi", "6,8", "CC"), reportPlayer("15", "Marešić", "6,4", "CC"), reportPlayer("55", "Hrastović", "6,5", "AI")],
                [reportPlayer("33", "Silić", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("14", "G. Sikošek", { assist: "D. Puclin" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "41%", "59%"],
            ["Remates", "12", "9"],
            ["Remates à Baliza", "6", "4"],
            ["xG", "1,57", "0,51"],
            ["PADPAD", "28,11", "17,74"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "6", "4"],
            ["Passes Completados", "89%", "91%"],
            ["Cruzamentos Completados", "28%", "16%"],
            ["Faltas", "12", "11"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "116"],
            ["Classificação Média", "7,0", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-11-01-hajduk-split-hnk-gorica",
        date: "Sábado 1 de Novembro de 2025",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Šimun Hrgović",
        rating: "7,91",
        coaches: { home: "Gonzalo García", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                    [reportPlayer("10", "Livaja", "7,8", "AR", true)],
                    [reportPlayer("9", "A. Rebić", "6,2", "EAI"), reportPlayer("30", "Almena", "6,6", "EAI")],
                    [reportPlayer("23", "Krovinović", "7,0", "MC"), reportPlayer("21", "Pukstas", "6,7", "MC")],
                    [reportPlayer("6", "Hugo G.", "6,8", "MD")],
                    [reportPlayer("3", "Auer", "6,7", "AI"), reportPlayer("14", "Raçi", "6,9", "CC"), reportPlayer("15", "Marešić", "6,6", "CC"), reportPlayer("32", "Hrgović", "7,9", "AI")],
                    [reportPlayer("33", "Silić", "6,6", "GR")]
                ]),
            away: reportFormation("4-3-3 DM", [
                    [reportPlayer("50", "Erceg", "6,3", "Ex"), reportPlayer("64", "Epailly", "6,4", "ME"), reportPlayer("8", "Pozo", "6,6", "Ex")],
                    [reportPlayer("10", "Pršir", "7,1", "CJA"), reportPlayer("7", "Bakić", "6,4", "ME")],
                    [reportPlayer("18", "Fiolić", "6,3", "MD")],
                    [reportPlayer("19", "Čabraja", "6,7", "AI"), reportPlayer("5", "Leš", "6,6", "DC"), reportPlayer("4", "J. Filipović", "6,7", "CP"), reportPlayer("22", "Trontelj", "6,5", "AI")],
                    [reportPlayer("71", "Matijaš", "7,0", "GRC")]
                ])
        },
        events: {
            home: [goalEvent("90+1", "M. Livaja")],
            away: [goalEvent("71", "W. Sule", { assist: "J. Pršir" })]
        },
        stats: reportStats([
            ["Posse", "59%", "41%"],
            ["Remates", "25", "6"],
            ["Remates à Baliza", "9", "2"],
            ["xG", "3,11", "0,65"],
            ["PADPAD", "14,88", "40,64"],
            ["Oportunidades Flagrantes", "4", "0"],
            ["Cantos", "15", "3"],
            ["Passes Completados", "91%", "85%"],
            ["Cruzamentos Completados", "19%", "10%"],
            ["Faltas", "7", "13"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "120"],
            ["Classificação Média", "6,9", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-11-01-nk-lokomotiva-nk-istra-1961",
        date: "Sábado 1 de Novembro de 2025",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Aleksandar Trajkovski",
        rating: "8,18",
        coaches: { home: "Pai Natal", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("10", "Rui Pedro", "7,1", "AAE", true), reportPlayer("7", "Trajkovski", "8,2", "AvR", true)],
                [reportPlayer("28", "Belcar", "6,7", "MC"), reportPlayer("40", "McCarthy", "7,0", "CJA"), reportPlayer("80", "Redmond", "6,5", "MC")],
                [reportPlayer("17", "Pajač", "7,0", "AI"), reportPlayer("23", "Vešović", "6,4", "AI")],
                [reportPlayer("16", "Dajčer", "7,1", "DC"), reportPlayer("37", "Córdoba", "7,4", "CP"), reportPlayer("20", "Kolinger", "7,4", "CP")],
                [reportPlayer("12", "Posavec", "7,3", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "5,9", "AC")],
                [reportPlayer("7", "Rozić", "6,3", "AA"), reportPlayer("20", "Ahmeti", "6,4", "MO"), reportPlayer("21", "Dabo", "6,1", "EAI")],
                [reportPlayer("8", "Maurić", "6,8", "MD"), reportPlayer("5", "Radošević", "6,8", "CJR")],
                [reportPlayer("26", "Heister", "6,6", "AI"), reportPlayer("4", "Johnston", "6,9", "CC"), reportPlayer("3", "Nasraoui", "6,5", "DC"), reportPlayer("97", "Kadušić", "6,2", "AI")],
                [reportPlayer("1", "Kolić", "6,2", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("14", "Rui Pedro"), goalEvent("62", "A. Trajkovski"), goalEvent("84", "A. Trajkovski")],
            away: []
        },
        stats: reportStats([
            ["Posse", "63%", "37%"],
            ["Remates", "15", "8"],
            ["Remates à Baliza", "6", "3"],
            ["xG", "2,59", "0,31"],
            ["PADPAD", "17,29", "20,04"],
            ["Oportunidades Flagrantes", "3", "0"],
            ["Cantos", "9", "2"],
            ["Passes Completados", "88%", "82%"],
            ["Cruzamentos Completados", "21%", "3%"],
            ["Faltas", "9", "8"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "122"],
            ["Classificação Média", "7,1", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-11-01-nk-osijek-dinamo-zagreb",
        date: "Sábado 1 de Novembro de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Matteo Pérez Vinlöf",
        rating: "8,01",
        coaches: { home: "Gamy Chambelito", away: "M. Kovačević" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "6,7", "AR")],
                [reportPlayer("38", "Čolina", "6,7", "MO"), reportPlayer("11", "Omerović", "7,0", "MO")],
                [reportPlayer("39", "Bukvić", "6,2", "MAI"), reportPlayer("23", "Vrbančić", "6,4", "MC"), reportPlayer("27", "Mikić", "7,3", "MAI", true)],
                [reportPlayer("24", "Ilić", "7,2", "Pi")],
                [reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("16", "Petrusenko", "6,8", "CP"), reportPlayer("15", "Mersinaj", "7,0", "CP")],
                [reportPlayer("31", "Malenica", "5,9", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,4", "AvR", true)],
                [reportPlayer("11", "Hoxha", "6,9", "EAI"), reportPlayer("21", "Lisica", "7,3", "EAI", true)],
                [reportPlayer("27", "Mišić", "6,7", "MC"), reportPlayer("7", "Stojković", "7,5", "MC")],
                [reportPlayer("8", "Zajc", "6,8", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "8,0", "AI"), reportPlayer("26", "McKenna", "6,4", "CC"), reportPlayer("28", "Théophile-C.", "6,9", "CC"), reportPlayer("25", "Valinčić", "6,2", "AI")],
                [reportPlayer("40", "Livaković", "6,7", "GR")]
            ])
        },
        events: {
            home: [goalEvent("70", "N. Mikić", { assist: "M. Gradel" })],
            away: [goalEvent("33", "M. Lisica", { assist: "L. Stojković" }), goalEvent("35", "Dion Beljo", { assist: "M. Pérez Vinlöf" })]
        },
        stats: reportStats([
            ["Posse", "67%", "33%"],
            ["Remates", "14", "10"],
            ["Remates à Baliza", "4", "5"],
            ["xG", "1,30", "1,62"],
            ["PADPAD", "18,56", "46,23"],
            ["Oportunidades Flagrantes", "0", "2"],
            ["Cantos", "7", "6"],
            ["Passes Completados", "93%", "89%"],
            ["Cruzamentos Completados", "24%", "13%"],
            ["Faltas", "13", "9"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "127"],
            ["Classificação Média", "6,7", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-11-01-nk-slaven-belupo-hnk-rijeka",
        date: "Sábado 1 de Novembro de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Brisa",
        playerOfMatch: "Merveil Ndockyt",
        rating: "8,48",
        coaches: { home: "Francisco Pinto", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("90", "Nestorovski", "6,3", "AA"), reportPlayer("11", "Mitrović", "6,3", "AR")],
                [reportPlayer("23", "Lepinjica", "6,4", "EAI"), reportPlayer("27", "Grgić", "6,3", "Ex")],
                [reportPlayer("22", "Šimunović", "6,4", "MD"), reportPlayer("21", "Crepulja", "6,6", "CJA")],
                [reportPlayer("24", "Stepinac", "6,4", "AI"), reportPlayer("5", "Katalinić", "7,0", "DC"), reportPlayer("2", "Međimorec", "6,9", "CC"), reportPlayer("18", "Krušelj", "6,2", "DL")],
                [reportPlayer("31", "Hadžikić", "7,7", "GR")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("7", "Keita Baldé", "7,7", "AR", true)],
                [reportPlayer("20", "Ndockyt", "8,5", "ME", true), reportPlayer("10", "Fruk", "7,0", "MO")],
                [reportPlayer("8", "Petrovič", "7,1", "MC")],
                [reportPlayer("15", "Martínez T.", "6,7", "MD"), reportPlayer("11", "André", "7,0", "CJR")],
                [reportPlayer("94", "Blackett", "7,8", "AI"), reportPlayer("53", "Emirhan", "7,5", "CC"), reportPlayer("4", "Andrade", "7,3", "CC"), reportPlayer("23", "Lasickas", "7,9", "AI")],
                [reportPlayer("1", "Letica", "7,2", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("29", "K. Baldé", { assist: "T. Blackett" }), goalEvent("61", "M. Ndockyt", { assist: "D. Petrovič" })]
        },
        stats: reportStats([
            ["Posse", "41%", "59%"],
            ["Remates", "4", "24"],
            ["Remates à Baliza", "2", "11"],
            ["xG", "0,12", "3,26"],
            ["PADPAD", "30,67", "11,97"],
            ["Oportunidades Flagrantes", "0", "3"],
            ["Cantos", "1", "18"],
            ["Passes Completados", "85%", "91%"],
            ["Cruzamentos Completados", "18%", "21%"],
            ["Faltas", "8", "13"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "132"],
            ["Classificação Média", "6,6", "7,4"]
        ])
    },
    {
        fixtureKey: "2025-11-01-nk-varazdin-hnk-vukovar",
        date: "Sábado 1 de Novembro de 2025",
        stadium: "Anđelko Herjavec",
        weather: "Vento Forte",
        playerOfMatch: "Antonio Đaković",
        rating: "7,98",
        coaches: { home: "João Nabais", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("22", "Mamić", "6,5", "AR")],
                [reportPlayer("38", "Iuri Tavares", "6,3", "AI"), reportPlayer("8", "Duvnjak", "7,1", "SA"), reportPlayer("7", "Vuk", "6,7", "Ex")],
                [reportPlayer("11", "Brajković", "6,6", "CJR"), reportPlayer("14", "Ilinković", "7,4", "CJA")],
                [reportPlayer("15", "Jacob", "6,1", "AI"), reportPlayer("44", "Barać", "7,0", "DC"), reportPlayer("16", "Tepšić", "7,2", "CC"), reportPlayer("23", "Maglica", "6,4", "DL")],
                [reportPlayer("33", "Silić", "6,2", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("10", "Gonzalez", "6,3", "AAE")],
                [reportPlayer("6", "Biljan", "6,5", "MO"), reportPlayer("21", "Puljić", "7,0", "MO")],
                [reportPlayer("22", "Kelly", "7,2", "AI"), reportPlayer("77", "Shabani", "6,8", "MD"), reportPlayer("36", "Butić", "6,3", "CJR"), reportPlayer("7", "Kerim Çalhanoğlu", "7,9", "AI")],
                [reportPlayer("15", "Gurlica", "7,6", "CC"), reportPlayer("5", "Elez", "7,4", "CC"), reportPlayer("91", "Tićinović", "7,1", "CC")],
                [reportPlayer("42", "Đaković", "8,0", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("62", "L. Kulušić", { assist: "J. Puljić" }), goalEvent("73", "G. Landel", { assist: "Kerim Çalhanoğlu" })]
        },
        stats: reportStats([
            ["Posse", "63%", "37%"],
            ["Remates", "16", "13"],
            ["Remates à Baliza", "9", "5"],
            ["xG", "1,19", "0,72"],
            ["PADPAD", "11,94", "23,32"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "9", "6"],
            ["Passes Completados", "88%", "84%"],
            ["Cruzamentos Completados", "52%", "13%"],
            ["Faltas", "6", "7"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "126", "124"],
            ["Classificação Média", "6,7", "7,1"]
        ])
    },
    {
        fixtureKey: "2025-09-24-bjelovar-hnk-rijeka",
        competition: "Hrvatski nogometni kup",
        date: "Quarta-feira 24 de Setembro de 2025",
        stadium: "Novi Gradski stadion",
        weather: "Calmo",
        playerOfMatch: "Merveil Ndockyt",
        rating: "10,00",
        coaches: { home: "T. Bradić", away: "Zép Jóbes" },
        formations: { home: "4-2-3-1", away: "3-4-2-1" },
        events: {
            home: ["57' F. Medić T. Turčin"],
            away: ["4' A. Oreč M. Ndockyt", "5' T. Morchiladze Vágner", "41' Vágner D. Adu-Adjei", "56' A. Oreč M. Ndockyt", "85' S. Vignato M. Ndockyt"]
        },
        stats: [
            { label: "Posse", home: "44%", away: "56%" },
            { label: "Remates", home: "11", away: "13" },
            { label: "Remates à Baliza", home: "5", away: "8" },
            { label: "xG", home: "1,19", away: "2,63" },
            { label: "PADPAD", home: "22,33", away: "19,79" },
            { label: "Oportunidades Flagrantes", home: "0", away: "2" },
            { label: "Cantos", home: "1", away: "5" },
            { label: "Passes Completados", home: "87%", away: "89%" },
            { label: "Cruzamentos Completados", home: "16%", away: "33%" },
            { label: "Faltas", home: "6", away: "10" },
            { label: "Cartões amarelos", home: "2", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "129", away: "135" },
            { label: "Classificação Média", home: "6,5", away: "7,4" }
        ]
    },
    {
        fixtureKey: "2025-09-24-mladost-zdralovi-nk-slaven-belupo",
        competition: "Hrvatski nogometni kup",
        date: "Quarta-feira 24 de Setembro de 2025",
        stadium: "Brdo",
        weather: "Calmo",
        playerOfMatch: "Marko Dabro",
        rating: "7,84",
        coaches: { home: "Ž. Mlešnjak", away: "Francisco Pinto" },
        formations: { home: "4-3-3 DM", away: "4-2-3-1" },
        events: { home: [], away: ["14' S. Mrowca M. Dabro", "21' M. Dabro I. Ćubelić"] },
        stats: [
            { label: "Posse", home: "42%", away: "58%" },
            { label: "Remates", home: "6", away: "13" },
            { label: "Remates à Baliza", home: "1", away: "8" },
            { label: "xG", home: "0,22", away: "1,13" },
            { label: "PADPAD", home: "28,80", away: "18,16" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "7", away: "10" },
            { label: "Passes Completados", home: "85%", away: "88%" },
            { label: "Cruzamentos Completados", home: "5%", away: "22%" },
            { label: "Faltas", home: "8", away: "12" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "117", away: "117" },
            { label: "Classificação Média", home: "6,4", away: "7,1" }
        ]
    },
    {
        fixtureKey: "2025-09-24-uljanik-nk-varazdin",
        competition: "Hrvatski nogometni kup",
        date: "Quarta-feira 24 de Setembro de 2025",
        stadium: "Veruda",
        weather: "Calmo",
        playerOfMatch: "Luka Mamić",
        rating: "10,00",
        coaches: { home: "S. Banović", away: "João Nabais" },
        formations: { home: "4-3-3 DM", away: "4-3-3 DM" },
        events: {
            home: ["31' L. Maružin A. Moslavac", "55' R. Perić-Komšić S. Ukich"],
            away: ["1' B. Biró S. Jurić", "7' B. Biró", "18' R. Brajković B. Biró", "20' S. Jurić L. Mamić", "22' G. Sikošek M. Barać", "60' S. Lesjak L. Mamić", "63' L. Mamić B. Biró"]
        },
        stats: [
            { label: "Posse", home: "54%", away: "46%" },
            { label: "Remates", home: "12", away: "24" },
            { label: "Remates à Baliza", home: "4", away: "14" },
            { label: "xG", home: "0,92", away: "4,41" },
            { label: "PADPAD", home: "20,12", away: "18,95" },
            { label: "Oportunidades Flagrantes", home: "0", away: "4" },
            { label: "Cantos", home: "6", away: "11" },
            { label: "Passes Completados", home: "85%", away: "85%" },
            { label: "Cruzamentos Completados", home: "9%", away: "41%" },
            { label: "Faltas", home: "10", away: "7" },
            { label: "Cartões amarelos", home: "1", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "114", away: "118" },
            { label: "Classificação Média", home: "6,5", away: "7,7" }
        ]
    },
    {
        fixtureKey: "2025-09-24-polet-smnm-hnk-gorica",
        competition: "Hrvatski nogometni kup",
        date: "Quarta-feira 24 de Setembro de 2025",
        stadium: "NK Polet",
        weather: "Tempestuoso",
        playerOfMatch: "Jakov Filipović",
        rating: "8,09",
        coaches: { home: "", away: "Miguel Cardoso" },
        formations: { home: "4-2-3-1", away: "4-3-3 DM" },
        events: {
            home: ["10' M. Šarić A. Škojo"],
            away: ["4' D. Pavičić", "6' B. Bogojević W. Sule", "25' W. Sule L. Vrzić", "47' L. Vrzić J. Filipović", "57' T. Epailliy A. Kavelj"]
        },
        stats: [
            { label: "Posse", home: "53%", away: "47%" },
            { label: "Remates", home: "6", away: "22" },
            { label: "Remates à Baliza", home: "2", away: "15" },
            { label: "xG", home: "0,70", away: "2,17" },
            { label: "PADPAD", home: "17,32", away: "18,08" },
            { label: "Oportunidades Flagrantes", home: "1", away: "2" },
            { label: "Cantos", home: "1", away: "10" },
            { label: "Passes Completados", home: "77%", away: "84%" },
            { label: "Cruzamentos Completados", home: "28%", away: "23%" },
            { label: "Faltas", home: "4", away: "3" },
            { label: "Cartões amarelos", home: "1", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "115", away: "127" },
            { label: "Classificação Média", home: "6,4", away: "7,2" }
        ]
    },
    {
        fixtureKey: "2025-09-24-marsonia-nk-istra-1961",
        competition: "Hrvatski nogometni kup",
        date: "Quarta-feira 24 de Setembro de 2025",
        stadium: "Stanko Vlainić - Dida",
        weather: "Calmo",
        playerOfMatch: "Barna Tóth",
        rating: "7,73",
        coaches: { home: "D. Bognar", away: "João Pedro Rato" },
        formations: { home: "4-3-1-2", away: "4-2-3-1" },
        events: { home: [], away: ["24' D. Jastrzembski B. Tóth", "31' V. Rozić E. Frederiksen"] },
        stats: [
            { label: "Posse", home: "40%", away: "60%" },
            { label: "Remates", home: "6", away: "23" },
            { label: "Remates à Baliza", home: "2", away: "7" },
            { label: "xG", home: "0,27", away: "2,32" },
            { label: "PADPAD", home: "41,67", away: "10,58" },
            { label: "Oportunidades Flagrantes", home: "0", away: "1" },
            { label: "Cantos", home: "0", away: "14" },
            { label: "Passes Completados", home: "83%", away: "88%" },
            { label: "Cruzamentos Completados", home: "21%", away: "23%" },
            { label: "Faltas", home: "9", away: "4" },
            { label: "Cartões amarelos", home: "2", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "109", away: "114" },
            { label: "Classificação Média", home: "6,4", away: "7,3" }
        ]
    },
    {
        fixtureKey: "2025-09-24-radnik-krizevci-hnk-vukovar",
        competition: "Hrvatski nogometni kup",
        date: "Quarta-feira 24 de Setembro de 2025",
        stadium: "Gradski stadion Križevci",
        weather: "Brisa",
        playerOfMatch: "Patrik Horvat",
        rating: "8,16",
        coaches: { home: "M. Vodanović", away: "Hugo Macedo" },
        formations: { home: "4-3-3 DM", away: "4-2-3-1" },
        events: { home: ["77' S. Tsuboi Š. Grgić"], away: ["8' E. Shabani P. Horvat", "43' Š. Butić J. Moreno"] },
        stats: [
            { label: "Posse", home: "54%", away: "46%" },
            { label: "Remates", home: "7", away: "15" },
            { label: "Remates à Baliza", home: "2", away: "9" },
            { label: "xG", home: "0,84", away: "2,44" },
            { label: "PADPAD", home: "18,70", away: "19,56" },
            { label: "Oportunidades Flagrantes", home: "1", away: "4" },
            { label: "Cantos", home: "1", away: "7" },
            { label: "Passes Completados", home: "81%", away: "82%" },
            { label: "Cruzamentos Completados", home: "4%", away: "16%" },
            { label: "Faltas", home: "4", away: "11" },
            { label: "Cartões amarelos", home: "1", away: "2" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "126", away: "129" },
            { label: "Classificação Média", home: "6,6", away: "6,9" }
        ]
    },
    {
        fixtureKey: "2025-09-24-tomislav-da-nk-lokomotiva",
        competition: "Hrvatski nogometni kup",
        date: "Quarta-feira 24 de Setembro de 2025",
        stadium: "Tomislav Buhač",
        weather: "Calmo",
        playerOfMatch: "Marko Vešović",
        rating: "9,09",
        coaches: { home: "B. Brnjić", away: "Pai Natal" },
        formations: { home: "4-3-3 DM", away: "3-4-1-2" },
        events: {
            home: [],
            away: ["29' D. Kolinger M. Vešović", "30' A. Trajkovski A. Stojaković", "37' M. Vešović M. Pajač", "44' L. Belcar A. Trajkovski", "85' A. Stojaković J. McCarthy"]
        },
        stats: [
            { label: "Posse", home: "45%", away: "55%" },
            { label: "Remates", home: "4", away: "17" },
            { label: "Remates à Baliza", home: "1", away: "8" },
            { label: "xG", home: "0,15", away: "2,30" },
            { label: "PADPAD", home: "28,83", away: "20,71" },
            { label: "Oportunidades Flagrantes", home: "0", away: "2" },
            { label: "Cantos", home: "1", away: "7" },
            { label: "Passes Completados", home: "85%", away: "89%" },
            { label: "Cruzamentos Completados", home: "0%", away: "34%" },
            { label: "Faltas", home: "10", away: "11" },
            { label: "Cartões amarelos", home: "3", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "112", away: "115" },
            { label: "Classificação Média", home: "6,1", away: "7,7" }
        ]
    },
    {
        fixtureKey: "2025-09-24-karlovac-1919-nk-osijek",
        competition: "Hrvatski nogometni kup",
        date: "Quarta-feira 24 de Setembro de 2025",
        stadium: "Branko Čavlović-Čavlek",
        weather: "Brisa",
        playerOfMatch: "Arnel Jakupović",
        rating: "8,50",
        coaches: { home: "I. Pamić", away: "Gamy Chambelito" },
        formations: { home: "4-3-3 DM", away: "4-2-3-1" },
        events: { home: ["40' D. Šimunić Z. Pamić"], away: ["67' N. Omerović A. Jakupović"] },
        stats: [
            { label: "Posse", home: "41%", away: "59%" },
            { label: "Remates", home: "20", away: "13" },
            { label: "Remates à Baliza", home: "6", away: "5" },
            { label: "xG", home: "1,45", away: "1,86" },
            { label: "PADPAD", home: "23,45", away: "15,96" },
            { label: "Oportunidades Flagrantes", home: "0", away: "2" },
            { label: "Cantos", home: "16", away: "5" },
            { label: "Passes Completados", home: "79%", away: "83%" },
            { label: "Cruzamentos Completados", home: "5%", away: "17%" },
            { label: "Faltas", home: "13", away: "17" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "1", away: "0" },
            { label: "Distância Percorrida", home: "170", away: "181" },
            { label: "Classificação Média", home: "6,7", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-11-08-dinamo-zagreb-nk-varazdin",
        date: "Sábado 8 de Novembro de 2025",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Dion Beljo",
        rating: "8,35",
        coaches: { home: "M. Kovačević", away: "João Nabais" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "8,4", "AvR", true)],
                [reportPlayer("11", "Hoxha", "7,1", "EAI"), reportPlayer("30", "Topić", "6,7", "EAI")],
                [reportPlayer("27", "Mišić", "6,8", "MC"), reportPlayer("8", "Zajc", "6,7", "ME")],
                [reportPlayer("4", "Bennacer", "6,5", "CJR")],
                [reportPlayer("3", "Goda", "7,0", "DL"), reportPlayer("26", "McKenna", "7,2", "CC"), reportPlayer("15", "Galešić", "7,4", "CC"), reportPlayer("25", "Valinčić", "8,0", "AI")],
                [reportPlayer("40", "Livaković", "7,2", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Jurić", "6,3", "AR")],
                [reportPlayer("7", "Vuk", "6,6", "AI"), reportPlayer("27", "Latković", "6,6", "SA"), reportPlayer("18", "Gaprindashvili", "6,3", "Ex")],
                [reportPlayer("8", "Duvnjak", "6,8", "CJR"), reportPlayer("6", "Puclin", "6,6", "CJA")],
                [reportPlayer("3", "Sikošek", "6,2", "AI"), reportPlayer("44", "Barać", "6,4", "DC"), reportPlayer("16", "Tepšić", "6,2", "CC"), reportPlayer("23", "Maglica", "6,9", "DL")],
                [reportPlayer("33", "Silić", "6,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("1", "Dion Beljo", { assist: "A. Hoxha" }), goalEvent("59", "Dion Beljo", { assist: "M. Valinčić" }), goalEvent("70", "F. Maglica", { ownGoal: true })],
            away: []
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "13", "19"],
            ["Remates à Baliza", "7", "5"],
            ["xG", "1,29", "1,38"],
            ["PADPAD", "38,00", "18,61"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "6", "10"],
            ["Passes Completados", "88%", "91%"],
            ["Cruzamentos Completados", "38%", "20%"],
            ["Faltas", "14", "7"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "117", "123"],
            ["Classificação Média", "7,2", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-11-08-hnk-gorica-nk-lokomotiva",
        date: "Sábado 8 de Novembro de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Vento Forte",
        playerOfMatch: "Domagoj Antolić",
        rating: "8,17",
        coaches: { home: "Miguel Cardoso", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,4", "Ex"), reportPlayer("10", "Pršir", "6,1", "ME"), reportPlayer("9", "Bogojević", "6,2", "Ex")],
                [reportPlayer("8", "Pozo", "6,4", "CJA"), reportPlayer("24", "Pavičić", "5,9", "ME")],
                [reportPlayer("36", "Kavelj", "6,4", "MD")],
                [reportPlayer("19", "Čabraja", "6,6", "AI"), reportPlayer("4", "J. Filipović", "6,4", "DC"), reportPlayer("5", "Leš", "6,3", "CP"), reportPlayer("22", "Trontelj", "5,9", "AI")],
                [reportPlayer("71", "Matijaš", "6,5", "GRC")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "6,4", "AAE"), reportPlayer("28", "Belcar", "7,5", "AvR")],
                [reportPlayer("26", "Rog", "7,9", "MC", true), reportPlayer("8", "Antolić", "8,2", "CJA"), reportPlayer("16", "Dajčer", "7,5", "MC")],
                [reportPlayer("17", "Pajač", "7,1", "AI"), reportPlayer("23", "Vešović", "7,7", "AI")],
                [reportPlayer("4", "Sigali", "7,6", "DC"), reportPlayer("10", "Rui Pedro", "7,5", "CP", true), reportPlayer("20", "Kolinger", "7,5", "CP")],
                [reportPlayer("12", "Posavec", "7,4", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("53", "Rui Pedro", { assist: "D. Antolić" }), goalEvent("90+3", "M. Rog", { assist: "L. Belcar" })]
        },
        stats: reportStats([
            ["Posse", "36%", "64%"],
            ["Remates", "9", "14"],
            ["Remates à Baliza", "1", "4"],
            ["xG", "0,55", "1,60"],
            ["PADPAD", "30,43", "12,08"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "6", "4"],
            ["Passes Completados", "83%", "92%"],
            ["Cruzamentos Completados", "21%", "18%"],
            ["Faltas", "14", "7"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "117", "113"],
            ["Classificação Média", "6,3", "7,4"]
        ])
    },
    {
        fixtureKey: "2025-11-08-nk-istra-1961-nk-slaven-belupo",
        date: "Sábado 8 de Novembro de 2025",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Smail Prevljak",
        rating: "7,68",
        coaches: { home: "João Pedro Rato", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("9", "Prevljak", "7,7", "AAE", true), reportPlayer("14", "Tóth", "6,8", "AR")],
                [reportPlayer("11", "Goričan", "7,3", "AA"), reportPlayer("7", "Rozić", "6,3", "EAI")],
                [reportPlayer("23", "Štulac", "6,5", "MD"), reportPlayer("5", "Radošević", "6,6", "CJR")],
                [reportPlayer("26", "Heister", "6,4", "AI"), reportPlayer("4", "Johnston", "6,7", "CC"), reportPlayer("3", "Nasraoui", "6,7", "DC"), reportPlayer("24", "Hrvatin", "6,3", "AI")],
                [reportPlayer("1", "Kolić", "6,7", "GRC")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("90", "Nestorovski", "7,6", "AA", true), reportPlayer("17", "Ćosić", "6,6", "AR")],
                [reportPlayer("15", "Ćubelić", "7,3", "EAI"), reportPlayer("7", "Dabro", "6,6", "Ex")],
                [reportPlayer("21", "Crepulja", "6,7", "MD"), reportPlayer("8", "Mrowca", "6,5", "CJA")],
                [reportPlayer("3", "Jakir", "6,7", "AI"), reportPlayer("5", "Katalinić", "6,5", "DC"), reportPlayer("4", "Kovačić", "6,8", "CC"), reportPlayer("18", "Krušelj", "6,5", "DL")],
                [reportPlayer("31", "Hadžikić", "7,0", "GR")]
            ])
        },
        events: {
            home: [goalEvent("82", "S. Prevljak", { assist: "D. Đurić" })],
            away: [goalEvent("3", "I. Nestorovski", { assist: "I. Ćubelić" })]
        },
        stats: reportStats([
            ["Posse", "49%", "51%"],
            ["Remates", "16", "10"],
            ["Remates à Baliza", "7", "5"],
            ["xG", "1,28", "0,98"],
            ["PADPAD", "23,42", "24,06"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "4", "4"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "22%", "35%"],
            ["Faltas", "10", "13"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "120"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-11-08-hnk-rijeka-nk-osijek",
        date: "Sábado 8 de Novembro de 2025",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Ante Matej Jurić",
        rating: "7,84",
        coaches: { home: "Zép Jóbes", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("7", "Keita Baldé", "7,3", "AR")],
                [reportPlayer("77", "Jurić", "7,8", "ME", true), reportPlayer("10", "Fruk", "6,7", "MO")],
                [reportPlayer("8", "Petrovič", "7,6", "MC")],
                [reportPlayer("15", "Martínez T.", "6,8", "MD"), reportPlayer("26", "Dantas", "7,8", "CJR", true)],
                [reportPlayer("34", "Devetak", "6,9", "AI"), reportPlayer("53", "Emirhan", "6,6", "CC"), reportPlayer("4", "Andrade", "6,9", "CC"), reportPlayer("23", "Lasickas", "7,0", "AI")],
                [reportPlayer("1", "Letica", "7,4", "GR")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("9", "Touré", "6,5", "AR")],
                [reportPlayer("38", "Čolina", "6,5", "MO"), reportPlayer("34", "Matković", "6,0", "MO")],
                [reportPlayer("99", "Teklić", "6,5", "MAI"), reportPlayer("17", "Jakupović", "6,2", "MC"), reportPlayer("29", "Karačić", "6,5", "MAI")],
                [reportPlayer("23", "Vrbančić", "6,1", "Pi")],
                [reportPlayer("26", "Jelenić", "6,2", "CP"), reportPlayer("16", "Petrusenko", "6,6", "CP"), reportPlayer("33", "Hasić", "6,5", "CP")],
                [reportPlayer("31", "Malenica", "6,7", "GR")]
            ])
        },
        events: {
            home: [goalEvent("51", "A. Jurić", { assist: "J. Lasickas" }), goalEvent("55", "Tiago Dantas", { assist: "D. Petrovič" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "56%", "44%"],
            ["Remates", "19", "10"],
            ["Remates à Baliza", "6", "3"],
            ["xG", "1,79", "0,79"],
            ["PADPAD", "15,85", "15,87"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "11", "5"],
            ["Passes Completados", "90%", "86%"],
            ["Cruzamentos Completados", "31%", "13%"],
            ["Faltas", "18", "19"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "118", "121"],
            ["Classificação Média", "7,2", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-11-08-hnk-vukovar-hajduk-split",
        date: "Sábado 8 de Novembro de 2025",
        stadium: "Stadion HNK Cibalia",
        weather: "Calmo",
        playerOfMatch: "Ante Rebić",
        rating: "7,56",
        coaches: { home: "Hugo Macedo", away: "Gonzalo García" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("8", "Horvat", "6,5", "AAE")],
                [reportPlayer("77", "Shabani", "7,1", "MO"), reportPlayer("21", "Puljić", "6,3", "MO")],
                [reportPlayer("36", "Butić", "6,9", "AI"), reportPlayer("23", "Matić", "6,6", "MD"), reportPlayer("10", "Gonzalez", "6,7", "CJR"), reportPlayer("7", "Kerim Çalhanoğlu", "6,8", "AI")],
                [reportPlayer("5", "Elez", "6,9", "CC", true), reportPlayer("12", "Živković", "6,7", "CC"), reportPlayer("91", "Tićinović", "6,9", "CC")],
                [reportPlayer("42", "Đaković", "6,7", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,3", "AR")],
                [reportPlayer("9", "A. Rebić", "7,6", "EAI", true), reportPlayer("30", "Almena", "6,9", "EAI")],
                [reportPlayer("23", "Krovinović", "6,6", "MO"), reportPlayer("21", "Pukstas", "7,1", "MC")],
                [reportPlayer("6", "Hugo G.", "6,5", "MD")],
                [reportPlayer("3", "Auer", "7,4", "DL"), reportPlayer("14", "Raçi", "6,5", "CC"), reportPlayer("15", "Marešić", "6,7", "CC"), reportPlayer("32", "Hrgović", "7,1", "AI")],
                [reportPlayer("33", "Silić", "7,0", "GR")]
            ])
        },
        events: {
            home: [goalEvent("89", "J. Elez")],
            away: [goalEvent("67", "A. Rebić", { assist: "Š. Hrgović" })]
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "16", "15"],
            ["Remates à Baliza", "7", "7"],
            ["xG", "2,57", "0,79"],
            ["PADPAD", "21,30", "15,68"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "8", "8"],
            ["Passes Completados", "91%", "91%"],
            ["Cruzamentos Completados", "15%", "20%"],
            ["Faltas", "5", "13"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "125"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-11-22-hajduk-split-dinamo-zagreb",
        date: "Sábado 22 de Novembro de 2025",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Scott McKenna",
        rating: "7,25",
        coaches: { home: "Gonzalo García", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "A. Rebić", "6,2", "AR")],
                [reportPlayer("11", "Šego", "6,9", "EAI"), reportPlayer("30", "Almena", "6,6", "EAI")],
                [reportPlayer("21", "Pukstas", "7,0", "MC"), reportPlayer("23", "Krovinović", "6,9", "MO")],
                [reportPlayer("6", "Hugo G.", "6,4", "MD")],
                [reportPlayer("32", "Hrgović", "6,4", "AI"), reportPlayer("14", "Raçi", "7,1", "CC"), reportPlayer("15", "Marešić", "7,2", "CC"), reportPlayer("38", "Hodak", "7,0", "DL")],
                [reportPlayer("33", "Silić", "7,1", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "6,5", "AvR")],
                [reportPlayer("10", "Vidović", "6,7", "EAI"), reportPlayer("30", "Topić", "6,8", "EAI")],
                [reportPlayer("27", "Mišić", "6,6", "MC"), reportPlayer("8", "Zajc", "6,5", "ME")],
                [reportPlayer("4", "Bennacer", "6,9", "CJR")],
                [reportPlayer("3", "Goda", "7,2", "DL"), reportPlayer("26", "McKenna", "7,3", "CC"), reportPlayer("36", "Domínguez", "6,8", "CC"), reportPlayer("25", "Valinčić", "6,6", "AI")],
                [reportPlayer("40", "Livaković", "7,2", "GR")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "59%", "41%"],
            ["Remates", "10", "10"],
            ["Remates à Baliza", "4", "4"],
            ["xG", "0,59", "0,44"],
            ["PADPAD", "18,65", "16,27"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "6", "7"],
            ["Passes Completados", "89%", "86%"],
            ["Cruzamentos Completados", "5%", "13%"],
            ["Faltas", "5", "12"],
            ["Cartões amarelos", "1", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "126"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-11-22-hnk-gorica-hnk-vukovar",
        date: "Sábado 22 de Novembro de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Iker Pozo",
        rating: "7,76",
        coaches: { home: "Miguel Cardoso", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("64", "Epailly", "6,7", "Ex"), reportPlayer("10", "Pršir", "6,0", "ME"), reportPlayer("9", "Bogojević", "6,3", "Ex")],
                [reportPlayer("8", "Pozo", "7,8", "CJA", true), reportPlayer("7", "Bakić", "6,4", "ME")],
                [reportPlayer("36", "Kavelj", "7,4", "MD")],
                [reportPlayer("19", "Čabraja", "6,5", "AI"), reportPlayer("4", "J. Filipović", "6,9", "DC"), reportPlayer("5", "Leš", "6,8", "CP"), reportPlayer("32", "Duraković", "6,4", "AI")],
                [reportPlayer("71", "Matijaš", "7,7", "GRC")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("77", "Shabani", "6,8", "AAE")],
                [reportPlayer("13", "Čaić", "6,6", "MO"), reportPlayer("21", "Puljić", "6,4", "MO")],
                [reportPlayer("50", "Špoljarić", "6,9", "AI"), reportPlayer("15", "Gurlica", "6,9", "MD"), reportPlayer("10", "Gonzalez", "6,4", "CJR"), reportPlayer("7", "Kerim Çalhanoğlu", "6,6", "AI")],
                [reportPlayer("5", "Elez", "7,2", "CC"), reportPlayer("4", "Mitrović", "6,4", "CC"), reportPlayer("91", "Tićinović", "7,2", "CC")],
                [reportPlayer("42", "Đaković", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("4", "I. Pozo", { assist: "A. Kavelj" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "33%", "67%"],
            ["Remates", "9", "15"],
            ["Remates à Baliza", "3", "7"],
            ["xG", "1,20", "1,11"],
            ["PADPAD", "27,69", "16,59"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "7", "14"],
            ["Passes Completados", "82%", "89%"],
            ["Cruzamentos Completados", "7%", "23%"],
            ["Faltas", "17", "6"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "126"],
            ["Classificação Média", "6,8", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-11-22-nk-lokomotiva-nk-slaven-belupo",
        date: "Sábado 22 de Novembro de 2025",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Krunoslav Hendija",
        rating: "7,40",
        coaches: { home: "Pai Natal", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "6,3", "AAE"), reportPlayer("10", "Rui Pedro", "6,0", "AvR")],
                [reportPlayer("26", "Rog", "7,2", "MC"), reportPlayer("8", "Antolić", "6,7", "CJA"), reportPlayer("28", "Belcar", "6,8", "MC")],
                [reportPlayer("17", "Pajač", "6,7", "AI"), reportPlayer("23", "Vešović", "6,5", "AI")],
                [reportPlayer("4", "Sigali", "7,3", "DC"), reportPlayer("16", "Dajčer", "6,5", "CP"), reportPlayer("20", "Kolinger", "7,2", "CP")],
                [reportPlayer("1", "Hendija", "7,4", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("90", "Nestorovski", "7,0", "AA"), reportPlayer("17", "Ćosić", "7,4", "AR")],
                [reportPlayer("15", "Ćubelić", "6,3", "EAI"), reportPlayer("7", "Dabro", "6,2", "Ex")],
                [reportPlayer("21", "Crepulja", "6,5", "MD"), reportPlayer("8", "Mrowca", "6,6", "CJA")],
                [reportPlayer("3", "Jakir", "6,5", "AI"), reportPlayer("5", "Katalinić", "7,0", "DC"), reportPlayer("4", "Kovačić", "7,3", "CC"), reportPlayer("18", "Krušelj", "6,5", "DL")],
                [reportPlayer("31", "Hadžikić", "7,4", "GR")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "16", "5"],
            ["Remates à Baliza", "7", "2"],
            ["xG", "0,69", "0,64"],
            ["PADPAD", "16,35", "14,05"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "8", "3"],
            ["Passes Completados", "89%", "87%"],
            ["Cruzamentos Completados", "14%", "21%"],
            ["Faltas", "10", "19"],
            ["Cartões amarelos", "3", "5"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "120"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-11-22-nk-osijek-nk-istra-1961",
        date: "Sábado 22 de Novembro de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Marcel Heister",
        rating: "8,78",
        coaches: { home: "Gamy Chambelito", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("9", "Touré", "6,3", "AR")],
                [reportPlayer("38", "Čolina", "6,9", "MO"), reportPlayer("34", "Matković", "6,3", "MO")],
                [reportPlayer("20", "Gradel", "7,7", "MAI"), reportPlayer("17", "Jakupović", "7,3", "MC", true), reportPlayer("29", "Karačić", "6,5", "MAI")],
                [reportPlayer("11", "Omerović", "6,1", "Pi")],
                [reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("21", "Bubanja", "6,8", "CP"), reportPlayer("33", "Hasić", "6,4", "CP")],
                [reportPlayer("31", "Malenica", "7,3", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("9", "Prevljak", "7,2", "AAE", true), reportPlayer("14", "Tóth", "6,6", "AR")],
                [reportPlayer("11", "Goričan", "6,4", "AA"), reportPlayer("17", "Frederiksen", "6,5", "CJA")],
                [reportPlayer("10", "Lončar", "6,4", "MD"), reportPlayer("5", "Radošević", "6,6", "CJR")],
                [reportPlayer("26", "Heister", "8,8", "AI"), reportPlayer("4", "Johnston", "6,6", "CC"), reportPlayer("3", "Nasraoui", "6,5", "DC"), reportPlayer("97", "Kadušić", "6,9", "AI")],
                [reportPlayer("1", "Kolić", "6,5", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("85", "A. Jakupović", { assist: "M. Gradel" })],
            away: [goalEvent("15", "S. Prevljak", { assist: "M. Heister" })]
        },
        stats: reportStats([
            ["Posse", "56%", "44%"],
            ["Remates", "10", "14"],
            ["Remates à Baliza", "1", "9"],
            ["xG", "1,15", "2,19"],
            ["PADPAD", "18,73", "16,48"],
            ["Oportunidades Flagrantes", "2", "2"],
            ["Cantos", "4", "9"],
            ["Passes Completados", "88%", "86%"],
            ["Cruzamentos Completados", "17%", "25%"],
            ["Faltas", "12", "14"],
            ["Cartões amarelos", "0", "4"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "133", "127"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-11-22-nk-varazdin-hnk-rijeka",
        date: "Sábado 22 de Novembro de 2025",
        stadium: "Anđelko Herjavec",
        weather: "Vento Forte",
        playerOfMatch: "Keita Baldé",
        rating: "8,20",
        coaches: { home: "João Nabais", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "7,5", "AR", true)],
                [reportPlayer("7", "Vuk", "7,1", "AI", true), reportPlayer("10", "Biró", "7,0", "SA", true), reportPlayer("18", "Gaprindashvili", "7,9", "Ex")],
                [reportPlayer("24", "Marina", "6,6", "CJR"), reportPlayer("8", "Duvnjak", "6,6", "CJA")],
                [reportPlayer("15", "Jacob", "7,9", "AI"), reportPlayer("44", "Barać", "7,6", "DC", true), reportPlayer("16", "Tepšić", "6,7", "CC"), reportPlayer("23", "Maglica", "6,7", "DL")],
                [reportPlayer("33", "Silić", "7,5", "GR")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "7,9", "AR", true)],
                [reportPlayer("7", "Keita Baldé", "8,2", "ME", true), reportPlayer("27", "Ambrose", "7,0", "MO")],
                [reportPlayer("8", "Petrovič", "7,2", "MC", true)],
                [reportPlayer("15", "Martínez T.", "6,4", "MD"), reportPlayer("26", "Dantas", "6,7", "CJR")],
                [reportPlayer("34", "Devetak", "6,5", "AI"), reportPlayer("53", "Emirhan", "6,4", "CC"), reportPlayer("4", "Andrade", "6,4", "CC"), reportPlayer("23", "Lasickas", "6,7", "AI")],
                [reportPlayer("1", "Letica", "6,2", "GR")]
            ])
        },
        events: {
            home: [goalEvent("16", "M. Barać", { assist: "M. Jacob" }), goalEvent("35", "I. Mamut", { assist: "M. Jacob" }), goalEvent("36", "M. Vuk", { assist: "I. Mamut" }), goalEvent("52", "B. Biró", { assist: "T. Gaprindashvili" })],
            away: [goalEvent("2", "D. Petrovič", { assist: "T. Ambrose" }), goalEvent("8", "K. Baldé", { assist: "A. Jurić" }), goalEvent("90+4", "A. Jurić", { assist: "Jean Carlos" })]
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "11", "17"],
            ["Remates à Baliza", "8", "11"],
            ["xG", "1,32", "2,79"],
            ["PADPAD", "21,62", "29,07"],
            ["Oportunidades Flagrantes", "1", "3"],
            ["Cantos", "6", "5"],
            ["Passes Completados", "91%", "88%"],
            ["Cruzamentos Completados", "30%", "52%"],
            ["Faltas", "8", "17"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "128"],
            ["Classificação Média", "7,2", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-11-29-dinamo-zagreb-hnk-gorica",
        date: "Sábado 29 de Novembro de 2025",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Mateo Lisica",
        rating: "8,32",
        coaches: { home: "M. Kovačević", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,8", "AvR", true)],
                [reportPlayer("10", "Vidović", "6,7", "EAI"), reportPlayer("21", "Lisica", "8,3", "EAI", true)],
                [reportPlayer("27", "Mišić", "7,1", "MC"), reportPlayer("8", "Zajc", "6,9", "ME")],
                [reportPlayer("4", "Bennacer", "7,5", "CJR", true)],
                [reportPlayer("3", "Goda", "8,0", "DL"), reportPlayer("15", "Galešić", "7,1", "CC"), reportPlayer("36", "Domínguez", "7,1", "CC"), reportPlayer("25", "Valinčić", "6,8", "AI")],
                [reportPlayer("40", "Livaković", "6,4", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("64", "Epailly", "6,0", "Ex"), reportPlayer("10", "Pršir", "6,1", "ME"), reportPlayer("9", "Bogojević", "6,3", "Ex")],
                [reportPlayer("8", "Pozo", "6,4", "CJA"), reportPlayer("7", "Bakić", "6,9", "ME")],
                [reportPlayer("36", "Kavelj", "6,4", "CJR")],
                [reportPlayer("19", "Čabraja", "6,3", "AI"), reportPlayer("4", "J. Filipović", "6,6", "DC"), reportPlayer("5", "Leš", "6,7", "CP"), reportPlayer("22", "Trontelj", "6,7", "AI")],
                [reportPlayer("71", "Matijaš", "7,0", "GRC")]
            ])
        },
        events: {
            home: [
                goalEvent("17", "Dion Beljo", { assist: "M. Lisica" }),
                goalEvent("49", "M. Lisica", { assist: "B. Goda" }),
                goalEvent("65", "I. Bennacer", { penalty: true })
            ],
            away: [
                goalEvent("66", "D. Pavičić", { assist: "O. Bakić" }),
                goalEvent("81", "L. Vrzić")
            ]
        },
        stats: reportStats([
            ["Posse", "75%", "25%"],
            ["Remates", "21", "11"],
            ["Remates à Baliza", "9", "5"],
            ["xG", "2,71", "0,79"],
            ["PADPAD", "13,05", "35,53"],
            ["Oportunidades Flagrantes", "4", "0"],
            ["Cantos", "6", "5"],
            ["Passes Completados", "94%", "82%"],
            ["Cruzamentos Completados", "19%", "16%"],
            ["Faltas", "6", "14"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "120", "125"],
            ["Classificação Média", "7,2", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-11-29-nk-istra-1961-nk-varazdin",
        date: "Sábado 29 de Novembro de 2025",
        stadium: "Aldo Drosina",
        weather: "Vento Forte",
        playerOfMatch: "Silvio Ilinković",
        rating: "7,77",
        coaches: { home: "João Pedro Rato", away: "João Nabais" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("9", "Previljak", "6,3", "AAE"), reportPlayer("14", "Tóth", "6,8", "AR")],
                [reportPlayer("11", "Goričan", "6,4", "AA"), reportPlayer("17", "Frederiksen", "6,4", "CJA")],
                [reportPlayer("10", "Lončar", "6,5", "MD"), reportPlayer("5", "Radošević", "6,3", "CJR")],
                [reportPlayer("26", "Heister", "6,7", "AI"), reportPlayer("8", "Maurić", "6,7", "CC"), reportPlayer("3", "Nasraoui", "6,6", "DC"), reportPlayer("97", "Kadušić", "6,3", "AI")],
                [reportPlayer("1", "Kolić", "6,4", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "7,1", "AR")],
                [reportPlayer("7", "Vuk", "7,3", "AI"), reportPlayer("10", "Biró", "7,3", "SA", true), reportPlayer("18", "Gaprindashvili", "6,6", "Ex")],
                [reportPlayer("24", "Marina", "6,9", "CJR"), reportPlayer("14", "Ilinković", "7,8", "CJA", true)],
                [reportPlayer("15", "Jacob", "6,6", "AI"), reportPlayer("13", "Mladenovski", "7,3", "DC"), reportPlayer("16", "Tepšić", "6,9", "CC"), reportPlayer("23", "Maglica", "6,8", "DL")],
                [reportPlayer("1", "Zelenika", "6,7", "GR")]
            ])
        },
        events: {
            home: [goalEvent("72", "V. Rozić", { assist: "D. Jastrzembski" })],
            away: [goalEvent("13", "S. Ilinković", { assist: "M. Vuk" }), goalEvent("59", "B. Biró", { assist: "I. Mamut" }), goalEvent("84", "R. Brajković", { assist: "S. Ilinković" })]
        },
        stats: reportStats([
            ["Posse", "59%", "41%"],
            ["Remates", "15", "12"],
            ["Remates à Baliza", "7", "6"],
            ["xG", "1,11", "1,53"],
            ["PADPAD", "16,57", "20,48"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "7", "3"],
            ["Passes Completados", "88%", "83%"],
            ["Cruzamentos Completados", "15%", "18%"],
            ["Faltas", "9", "6"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "135", "137"],
            ["Classificação Média", "6,6", "7,0"]
        ])
    },
    {
        fixtureKey: "2025-11-29-hnk-rijeka-hajduk-split",
        date: "Sábado 29 de Novembro de 2025",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Keita Baldé",
        rating: "8,03",
        coaches: { home: "Zép Jóbes", away: "Gonzalo García" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("14", "Gojak", "7,8", "AR")],
                [reportPlayer("7", "Keita Baldé", "8,0", "ME", true), reportPlayer("10", "Fruk", "7,6", "MO", true)],
                [reportPlayer("8", "Petrovič", "7,0", "MC")],
                [reportPlayer("15", "Martínez T.", "6,9", "MD"), reportPlayer("26", "Dantas", "6,9", "CJR")],
                [reportPlayer("34", "Devetak", "7,8", "AI"), reportPlayer("53", "Emirhan", "7,0", "CC"), reportPlayer("6", "Radeljić", "6,7", "CC"), reportPlayer("23", "Lasickas", "7,1", "AI")],
                [reportPlayer("1", "Letica", "6,6", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "A. Rebić", "6,4", "AR")],
                [reportPlayer("11", "Šego", "6,4", "EAI"), reportPlayer("30", "Almena", "6,1", "EAI")],
                [reportPlayer("21", "Pukstas", "6,5", "MC"), reportPlayer("23", "Krovinović", "6,4", "MO")],
                [reportPlayer("7", "Kalik", "7,2", "MD")],
                [reportPlayer("32", "Hrgović", "6,4", "AI"), reportPlayer("14", "Raçi", "6,6", "CC"), reportPlayer("15", "Marešić", "5,8", "CC"), reportPlayer("38", "Hodak", "6,4", "DL")],
                [reportPlayer("33", "Silić", "5,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("13", "T. Fruk", { penalty: true }), goalEvent("48", "K. Baldé", { assist: "A. Gojak" }), goalEvent("68", "K. Baldé", { assist: "M. Devetak" })],
            away: [goalEvent("70", "A. Elis", { assist: "A. Kalik" })]
        },
        stats: reportStats([
            ["Posse", "66%", "34%"],
            ["Remates", "13", "5"],
            ["Remates à Baliza", "4", "2"],
            ["xG", "2,05", "1,62"],
            ["PADPAD", "10,33", "24,16"],
            ["Oportunidades Flagrantes", "2", "2"],
            ["Cantos", "11", "1"],
            ["Passes Completados", "92%", "86%"],
            ["Cruzamentos Completados", "28%", "25%"],
            ["Faltas", "5", "6"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "120", "117"],
            ["Classificação Média", "7,2", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-11-29-nk-slaven-belupo-nk-osijek",
        date: "Sábado 29 de Novembro de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Temporal",
        playerOfMatch: "Anton Matković",
        rating: "9,76",
        coaches: { home: "Francisco Pinto", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("90", "Nestorovski", "7,0", "AA", true), reportPlayer("7", "Dabro", "6,6", "AR")],
                [reportPlayer("10", "Caimacov", "6,2", "EAI"), reportPlayer("23", "Lepinjica", "6,4", "Ex")],
                [reportPlayer("8", "Mrowca", "7,0", "MD"), reportPlayer("21", "Crepulja", "6,2", "CJA")],
                [reportPlayer("35", "Žuta", "6,0", "AI"), reportPlayer("5", "Katalinić", "6,4", "DC"), reportPlayer("4", "Kovačić", "6,6", "CC"), reportPlayer("18", "Krušelj", "6,3", "DL")],
                [reportPlayer("31", "Hadžikić", "6,6", "GR")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "7,4", "AR", true)],
                [reportPlayer("38", "Čolina", "6,8", "MO"), reportPlayer("11", "Omerović", "9,2", "MO", true)],
                [reportPlayer("20", "Gradel", "7,6", "MAI"), reportPlayer("23", "Vrbančić", "7,7", "MC"), reportPlayer("29", "Karačić", "6,4", "MAI")],
                [reportPlayer("21", "Bubanja", "7,4", "Pi")],
                [reportPlayer("26", "Jelenić", "7,0", "CP"), reportPlayer("34", "Matković", "9,8", "CP", true), reportPlayer("33", "Hasić", "7,1", "CP")],
                [reportPlayer("31", "Malenica", "7,0", "GR")]
            ])
        },
        events: {
            home: [goalEvent("33", "V. Bubanja", { ownGoal: true }), goalEvent("84", "I. Nestorovski", { assist: "J. Mitrović" })],
            away: [goalEvent("3", "A. Matković", { assist: "N. Omerović" }), goalEvent("56", "N. Omerović", { assist: "L. Vrbančić" }), goalEvent("61", "A. Jakupović", { assist: "A. Matković" }), goalEvent("67", "Y. Touré", { assist: "V. Bubanja" }), goalEvent("89", "A. Matković", { assist: "N. Mikić" })]
        },
        stats: reportStats([
            ["Posse", "42%", "58%"],
            ["Remates", "8", "22"],
            ["Remates à Baliza", "5", "8"],
            ["xG", "1,30", "4,39"],
            ["PADPAD", "18,32", "18,18"],
            ["Oportunidades Flagrantes", "2", "4"],
            ["Cantos", "3", "8"],
            ["Passes Completados", "84%", "87%"],
            ["Cruzamentos Completados", "16%", "26%"],
            ["Faltas", "21", "9"],
            ["Cartões amarelos", "3", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "128"],
            ["Classificação Média", "6,5", "7,6"]
        ])
    },
    {
        fixtureKey: "2025-11-29-hnk-vukovar-nk-lokomotiva",
        date: "Sábado 29 de Novembro de 2025",
        stadium: "Stadion HNK Cibalia",
        weather: "Calmo",
        playerOfMatch: "Patrik Horvat",
        rating: "8,01",
        coaches: { home: "Hugo Macedo", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("19", "Jurilj", "6,3", "AR")],
                [reportPlayer("10", "Gonzalez", "6,4", "AI"), reportPlayer("9", "Kulušić", "6,6", "Ex")],
                [reportPlayer("15", "Gurlica", "6,6", "MC"), reportPlayer("8", "Horvat", "8,0", "CJA", true)],
                [reportPlayer("20", "Čabrajić", "6,4", "CJR")],
                [reportPlayer("3", "Bosec", "6,4", "AI"), reportPlayer("5", "Elez", "7,0", "DC"), reportPlayer("4", "Mitrović", "7,0", "DC"), reportPlayer("91", "Tićinović", "7,0", "DL")],
                [reportPlayer("42", "Đaković", "6,6", "GR")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "7,0", "AAE"), reportPlayer("10", "Rui Pedro", "7,1", "F9", true)],
                [reportPlayer("26", "Rog", "6,7", "ME"), reportPlayer("28", "Belcar", "6,7", "MC"), reportPlayer("8", "Antolić", "6,4", "ME")],
                [reportPlayer("22", "Leovac", "6,7", "AP"), reportPlayer("23", "Vešović", "6,3", "AP")],
                [reportPlayer("4", "Sigali", "7,3", "DC"), reportPlayer("16", "Dajčer", "6,7", "CC"), reportPlayer("20", "Kolinger", "6,6", "DC")],
                [reportPlayer("12", "Hendija", "6,9", "GR")]
            ])
        },
        events: {
            home: [goalEvent("54", "P. Horvat", { assist: "E. Shabani" })],
            away: [goalEvent("51", "Rui Pedro", { assist: "A. Trajkovski" })]
        },
        stats: reportStats([
            ["Posse", "48%", "52%"],
            ["Remates", "11", "9"],
            ["Remates à Baliza", "6", "6"],
            ["xG", "0,90", "0,67"],
            ["PADPAD", "16,35", "18,00"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "5", "3"],
            ["Passes Completados", "89%", "87%"],
            ["Cruzamentos Completados", "22%", "20%"],
            ["Faltas", "9", "12"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "116", "116"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-12-03-nk-lokomotiva-dinamo-zagreb",
        date: "Quarta-feira 3 de Dezembro de 2025",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Dion Beljo",
        rating: "9,38",
        coaches: { home: "Pai Natal", away: "M. Kovačević" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "6,9", "AAE", true), reportPlayer("10", "Rui Pedro", "6,7", "F9")],
                [reportPlayer("26", "Rog", "6,8", "MC"), reportPlayer("28", "Belcar", "6,6", "MC"), reportPlayer("8", "Antolić", "7,3", "MC")],
                [reportPlayer("17", "Pajač", "6,2", "AP"), reportPlayer("23", "Vešović", "6,3", "AP")],
                [reportPlayer("4", "Sigali", "6,5", "DC"), reportPlayer("16", "Jukić", "6,7", "CC"), reportPlayer("20", "Kolinger", "6,6", "DC")],
                [reportPlayer("12", "Hendija", "6,5", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "9,4", "AvR", true)],
                [reportPlayer("11", "Hoxha", "8,1", "EAI", true), reportPlayer("30", "Topić", "6,4", "EAI")],
                [reportPlayer("14", "Soldo", "6,8", "MC"), reportPlayer("7", "Stojković", "7,3", "ME")],
                [reportPlayer("27", "Mišić", "6,7", "CJR")],
                [reportPlayer("3", "Goda", "6,6", "DL"), reportPlayer("26", "McKenna", "7,1", "CC"), reportPlayer("36", "Domínguez", "6,9", "CC"), reportPlayer("25", "Valinčić", "6,3", "AI")],
                [reportPlayer("40", "Livaković", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("29", "A. Trajkovski", { assist: "D. Antolić" })],
            away: [
                goalEvent("23", "Dion Beljo", { assist: "A. Hoxha" }),
                goalEvent("45", "Dion Beljo", { assist: "L. Stojković" }),
                goalEvent("55", "A. Hoxha"),
                sendOffEvent("88", "I. Bennacer"),
                goalEvent("90+2", "Dion Beljo", { assist: "P. Tabinas" })
            ]
        },
        stats: reportStats([
            ["Posse", "56%", "44%"],
            ["Remates", "15", "10"],
            ["Remates à Baliza", "7", "8"],
            ["xG", "2,03", "1,17"],
            ["PADPAD", "21,26", "19,23"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "6", "3"],
            ["Passes Completados", "90%", "86%"],
            ["Cruzamentos Completados", "11%", "35%"],
            ["Faltas", "9", "13"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "1"],
            ["Distância Percorrida", "122", "122"],
            ["Classificação Média", "6,6", "7,1"]
        ])
    },
    {
        fixtureKey: "2025-12-06-hajduk-split-nk-istra-1961",
        date: "Sábado 6 de Dezembro de 2025",
        stadium: "Poljud",
        weather: "Brisa",
        playerOfMatch: "Emil Frederiksen",
        rating: "7,53",
        coaches: { home: "Gonzalo Garcia", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("13", "Elis", "6,3", "AR")],
                [reportPlayer("11", "Šego", "6,5", "EAI"), reportPlayer("30", "Almena", "7,0", "EAI")],
                [reportPlayer("7", "Kalik", "6,6", "MC"), reportPlayer("21", "Pukstas", "7,4", "MC", true)],
                [reportPlayer("6", "Hugo G.", "7,0", "MD")],
                [reportPlayer("3", "Auer", "6,9", "AI"), reportPlayer("14", "Raçi", "6,4", "CC"), reportPlayer("31", "Šarlija", "6,6", "CP"), reportPlayer("38", "Hodak", "6,8", "AI")],
                [reportPlayer("33", "Silić", "6,4", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("14", "Tóth", "7,1", "AR", true), reportPlayer("9", "Prevljak", "7,2", "AAE")],
                [reportPlayer("11", "Goričan", "7,2", "AA", true), reportPlayer("17", "Frederiksen", "7,5", "CJA")],
                [reportPlayer("10", "Lončar", "6,4", "MD"), reportPlayer("23", "Štulac", "6,2", "CJR")],
                [reportPlayer("26", "Heister", "6,6", "AI"), reportPlayer("4", "Johnston", "6,6", "CC"), reportPlayer("3", "Nasraoui", "6,7", "DC"), reportPlayer("24", "Hrvatin", "6,7", "AI")],
                [reportPlayer("1", "Kolić", "6,5", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("26", "R. Pukstas", { assist: "I. Almena" })],
            away: [goalEvent("3", "B. Tóth", { assist: "E. Frederiksen" }), goalEvent("20", "S. Goričan", { assist: "S. Prevljak" })]
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "17", "8"],
            ["Remates à Baliza", "5", "5"],
            ["xG", "1,57", "0,66"],
            ["PADPAD", "16,10", "24,44"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "13", "6"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "12%", "5%"],
            ["Faltas", "9", "10"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "117"],
            ["Classificação Média", "6,7", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-12-06-hnk-gorica-hnk-rijeka",
        date: "Sábado 6 de Dezembro de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Tempestuoso",
        playerOfMatch: "Ante Oreč",
        rating: "8,89",
        coaches: { home: "Miguel Cardoso", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("50", "Erceg", "6,0", "Ex"), reportPlayer("10", "Pršir", "6,3", "ME"), reportPlayer("9", "Bogojević", "6,2", "Ex")],
                [reportPlayer("8", "Pozo", "6,2", "CJA"), reportPlayer("7", "Bakić", "6,1", "ME")],
                [reportPlayer("36", "Kavelj", "6,4", "MD")],
                [reportPlayer("19", "Čabraja", "6,4", "AI"), reportPlayer("4", "J. Filipović", "6,4", "DC"), reportPlayer("5", "Leš", "6,5", "CP"), reportPlayer("22", "Trontelj", "6,1", "AI")],
                [reportPlayer("71", "Matijaš", "6,8", "GRC")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("7", "Keita Baldé", "7,7", "AR", true)],
                [reportPlayer("14", "Gojak", "6,5", "ME"), reportPlayer("10", "Fruk", "8,2", "MO", true)],
                [reportPlayer("8", "Petrovič", "6,9", "MC")],
                [reportPlayer("15", "Martínez T.", "7,4", "MD"), reportPlayer("26", "Dantas", "6,8", "CJR")],
                [reportPlayer("34", "Devetak", "7,9", "AI"), reportPlayer("53", "Emirhan", "7,0", "CC"), reportPlayer("6", "Radeljić", "7,3", "CC"), reportPlayer("22", "Oreč", "8,9", "AI")],
                [reportPlayer("1", "Letica", "7,7", "GRC")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("66", "T. Fruk", { assist: "A. Oreč" }), goalEvent("85", "K. Baldé", { assist: "T. Ambrose" })]
        },
        stats: reportStats([
            ["Posse", "35%", "65%"],
            ["Remates", "7", "17"],
            ["Remates à Baliza", "4", "9"],
            ["xG", "0,48", "3,12"],
            ["PADPAD", "27,88", "16,58"],
            ["Oportunidades Flagrantes", "0", "3"],
            ["Cantos", "4", "6"],
            ["Passes Completados", "84%", "92%"],
            ["Cruzamentos Completados", "19%", "19%"],
            ["Faltas", "16", "14"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "124"],
            ["Classificação Média", "6,3", "7,5"]
        ])
    },
    {
        fixtureKey: "2025-12-06-nk-lokomotiva-nk-osijek",
        date: "Sábado 6 de Dezembro de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Domagoj Bukvić",
        rating: "9,66",
        coaches: { home: "Pai Natal", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("15", "Stojaković", "6,6", "AAE"), reportPlayer("10", "Rui Pedro", "6,4", "AvR")],
                [reportPlayer("28", "Belcar", "7,2", "MC", true), reportPlayer("8", "Antolić", "7,3", "CJA"), reportPlayer("6", "Bošković", "6,4", "MC")],
                [reportPlayer("17", "Pajač", "6,7", "AI"), reportPlayer("23", "Vešović", "6,7", "AI")],
                [reportPlayer("4", "Sigali", "6,3", "DC"), reportPlayer("3", "Diop", "6,5", "CP"), reportPlayer("20", "Kolinger", "6,5", "CP")],
                [reportPlayer("12", "Hendija", "6,4", "GR")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "8,4", "AR", true)],
                [reportPlayer("38", "Čolina", "6,7", "MO"), reportPlayer("20", "Gradel", "8,1", "MO", true)],
                [reportPlayer("39", "Bukvić", "9,7", "MAI", true), reportPlayer("23", "Vrbančić", "8,2", "MC", true), reportPlayer("29", "Karačić", "6,7", "MAI")],
                [reportPlayer("21", "Bubanja", "6,6", "PI")],
                [reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("34", "Matković", "7,5", "CP", true), reportPlayer("33", "Hasić", "6,4", "CP")],
                [reportPlayer("31", "Malenica", "6,8", "GR")]
            ])
        },
        events: {
            home: [sendOffEvent("12", "D. Kolinger"), goalEvent("53", "L. Belcar", { assist: "M. Pajač" }), goalEvent("67", "A. Trajkovski", { assist: "J. Córdoba" }), goalEvent("83", "A. Trajkovski", { assist: "D. Antolić" })],
            away: [goalEvent("3", "A. Jakupović", { assist: "D. Bukvić" }), goalEvent("9", "D. Bukvić", { assist: "L. Vrbančić" }), goalEvent("19", "L. Vrbančić", { assist: "D. Bukvić" }), goalEvent("21", "M. Gradel", { assist: "A. Jakupović" }), goalEvent("45+2", "A. Matković", { assist: "D. Bukvić" })]
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "13", "16"],
            ["Remates à Baliza", "6", "10"],
            ["xG", "1,10", "2,45"],
            ["PADPAD", "15,80", "20,20"],
            ["Oportunidades Flagrantes", "0", "3"],
            ["Cantos", "3", "6"],
            ["Passes Completados", "90%", "87%"],
            ["Cruzamentos Completados", "18%", "30%"],
            ["Faltas", "16", "11"],
            ["Cartões amarelos", "1", "2"],
            ["Cartões vermelhos", "1", "0"],
            ["Distância Percorrida", "110", "121"],
            ["Classificação Média", "6,8", "7,3"]
        ])
    },
    {
        fixtureKey: "2025-12-06-nk-varazdin-nk-slaven-belupo",
        date: "Sábado 6 de Dezembro de 2025",
        stadium: "Anđelko Herjavec",
        weather: "Brisa",
        playerOfMatch: "Matej Vuk",
        rating: "7,37",
        coaches: { home: "João Nabais", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Jurić", "6,0", "AR")],
                [reportPlayer("7", "Vuk", "7,4", "AI", true), reportPlayer("27", "Latković", "6,7", "SA"), reportPlayer("11", "Brajković", "6,8", "Ex")],
                [reportPlayer("14", "Ilinković", "6,9", "CJR"), reportPlayer("8", "Duvnjak", "7,3", "CJA")],
                [reportPlayer("3", "Sikošek", "6,6", "AI"), reportPlayer("44", "Barać", "6,6", "DC"), reportPlayer("16", "Tepšić", "6,9", "CC"), reportPlayer("4", "Škaričić", "7,2", "DL")],
                [reportPlayer("1", "Zelenika", "6,4", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("90", "Nestorovski", "6,4", "AA"), reportPlayer("7", "Dabro", "6,4", "AR")],
                [reportPlayer("10", "Caimacov", "7,2", "EAI", true), reportPlayer("23", "Lepinjica", "6,2", "Ex")],
                [reportPlayer("8", "Mrowca", "6,7", "MD"), reportPlayer("21", "Crepulja", "6,8", "CJA")],
                [reportPlayer("35", "Žuta", "6,9", "AI"), reportPlayer("6", "Božić", "6,9", "DC"), reportPlayer("4", "Kovačić", "6,9", "CC"), reportPlayer("18", "Krušelj", "6,9", "DL")],
                [reportPlayer("31", "Hadžikić", "6,9", "GR")]
            ])
        },
        events: {
            home: [goalEvent("59", "M. Vuk", { assist: "L. Škaričić" })],
            away: [goalEvent("60", "M. Caimacov")]
        },
        stats: reportStats([
            ["Posse", "33%", "67%"],
            ["Remates", "12", "8"],
            ["Remates à Baliza", "5", "4"],
            ["xG", "2,10", "0,81"],
            ["PADPAD", "34,25", "19,69"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "6", "6"],
            ["Passes Completados", "87%", "92%"],
            ["Cruzamentos Completados", "20%", "4%"],
            ["Faltas", "2", "7"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "119"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-12-06-hnk-vukovar-dinamo-zagreb",
        date: "Sábado 6 de Dezembro de 2025",
        stadium: "Stadion HNK Cibalia",
        weather: "Calmo",
        playerOfMatch: "Luka Stojković",
        rating: "7,76",
        coaches: { home: "Hugo Macedo", away: "M. Kovačević" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("10", "Gonzalez", "6,5", "AAE")],
                [reportPlayer("15", "Gurlica", "6,5", "MO"), reportPlayer("11", "Moreno", "6,6", "MO")],
                [reportPlayer("9", "Kulušić", "6,5", "AI"), reportPlayer("13", "Čaić", "6,7", "MD"), reportPlayer("8", "Horvat", "6,1", "CJR"), reportPlayer("3", "Bosec", "6,1", "AI")],
                [reportPlayer("5", "Elez", "6,9", "CC"), reportPlayer("4", "Mitrović", "6,9", "CC"), reportPlayer("91", "Tićinović", "6,3", "CC")],
                [reportPlayer("42", "Đaković", "6,8", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "6,8", "AvR")],
                [reportPlayer("11", "Hoxha", "6,9", "EAI"), reportPlayer("30", "Topić", "6,7", "EAI")],
                [reportPlayer("10", "Vidović", "6,6", "MC"), reportPlayer("7", "Stojković", "7,8", "ME", true)],
                [reportPlayer("14", "Soldo", "6,6", "CJR")],
                [reportPlayer("13", "Tabinas", "6,6", "DL"), reportPlayer("15", "Galešić", "7,2", "CC"), reportPlayer("36", "Domínguez", "7,2", "CC"), reportPlayer("25", "Valinčić", "7,3", "AI")],
                [reportPlayer("40", "Livaković", "7,6", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("53", "L. Stojković", { assist: "M. Lisica" })]
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "3", "12"],
            ["Remates à Baliza", "2", "9"],
            ["xG", "0,57", "0,94"],
            ["PADPAD", "23,00", "18,39"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "3", "4"],
            ["Passes Completados", "88%", "90%"],
            ["Cruzamentos Completados", "9%", "29%"],
            ["Faltas", "15", "9"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "122"],
            ["Classificação Média", "6,5", "7,0"]
        ])
    },
    {
        fixtureKey: "2025-12-13-dinamo-zagreb-nk-lokomotiva",
        date: "Sábado 13 de Dezembro de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Niko Galešić",
        rating: "7,90",
        coaches: { home: "M. Kovačević", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,8", "AvR", true)],
                [reportPlayer("10", "Vidović", "6,8", "EAI"), reportPlayer("30", "Topić", "7,4", "EAI", true)],
                [reportPlayer("14", "Soldo", "7,1", "MC"), reportPlayer("8", "Zajc", "6,7", "MC")],
                [reportPlayer("27", "Mišić", "7,2", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "7,8", "AI"), reportPlayer("15", "Galešić", "7,9", "CC"), reportPlayer("36", "Domínguez", "7,2", "CC"), reportPlayer("25", "Valinčić", "7,9", "AI")],
                [reportPlayer("40", "Livaković", "7,3", "GR")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("10", "Rui Pedro", "6,3", "AAE"), reportPlayer("7", "Trajkovski", "6,4", "AvR")],
                [reportPlayer("8", "Antolić", "6,3", "MC"), reportPlayer("40", "McCarthy", "6,4", "CJA"), reportPlayer("15", "Stojaković", "6,2", "MC")],
                [reportPlayer("17", "Pajač", "6,6", "AI"), reportPlayer("23", "Vešović", "6,4", "AI")],
                [reportPlayer("16", "Dajčer", "6,1", "DC"), reportPlayer("28", "Belcar", "6,4", "CP"), reportPlayer("3", "Diop", "6,5", "CP")],
                [reportPlayer("12", "Hendija", "5,9", "GR")]
            ])
        },
        events: {
            home: [goalEvent("10", "F. Topić", { assist: "Dion Beljo" }), goalEvent("53", "Dion Beljo", { assist: "M. Pérez Vinlöf" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "66%", "34%"],
            ["Remates", "18", "2"],
            ["Remates à Baliza", "6", "0"],
            ["xG", "1,16", "0,18"],
            ["PADPAD", "10,68", "24,70"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "5", "2"],
            ["Passes Completados", "91%", "78%"],
            ["Cruzamentos Completados", "37%", "21%"],
            ["Faltas", "8", "3"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "123"],
            ["Classificação Média", "7,3", "6,3"]
        ])
    },
    {
        fixtureKey: "2025-12-13-nk-istra-1961-hnk-gorica",
        date: "Sábado 13 de Dezembro de 2025",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Jurica Pršir",
        rating: "7,55",
        coaches: { home: "João Pedro Rato", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("14", "Tóth", "6,8", "AC", true)],
                [reportPlayer("11", "Goričan", "6,4", "AA"), reportPlayer("9", "Prevljak", "6,3", "MO"), reportPlayer("17", "Frederiksen", "6,6", "EAI")],
                [reportPlayer("10", "Lončar", "6,6", "MD"), reportPlayer("5", "Radošević", "7,0", "CJR")],
                [reportPlayer("26", "Heister", "6,4", "AI"), reportPlayer("4", "Johnston", "6,6", "CC"), reportPlayer("3", "Nasraoui", "6,9", "DC"), reportPlayer("97", "Kadušić", "7,2", "AI")],
                [reportPlayer("1", "Kolić", "6,7", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("50", "Erceg", "6,4", "Ex"), reportPlayer("10", "Pršir", "7,6", "ME", true), reportPlayer("9", "Bogojević", "6,4", "Ex")],
                [reportPlayer("8", "Pozo", "6,7", "CJA"), reportPlayer("7", "Bakić", "7,5", "ME")],
                [reportPlayer("36", "Kavelj", "6,5", "MD")],
                [reportPlayer("19", "Čabraja", "6,3", "AI"), reportPlayer("4", "J. Filipović", "6,9", "DC"), reportPlayer("5", "Leš", "7,2", "CP"), reportPlayer("22", "Trontelj", "6,3", "AI")],
                [reportPlayer("71", "Matijaš", "6,6", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("50", "B. Tóth", { assist: "A. Kadušić" })],
            away: [goalEvent("6", "J. Pršir", { assist: "O. Bakić" }), goalEvent("90+5", "J. Pršir", { penalty: true })]
        },
        stats: reportStats([
            ["Posse", "63%", "37%"],
            ["Remates", "9", "16"],
            ["Remates à Baliza", "5", "7"],
            ["xG", "0,57", "1,89"],
            ["PADPAD", "30,10", "20,83"],
            ["Oportunidades Flagrantes", "0", "2"],
            ["Cantos", "5", "10"],
            ["Passes Completados", "89%", "83%"],
            ["Cruzamentos Completados", "10%", "3%"],
            ["Faltas", "8", "7"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "122"],
            ["Classificação Média", "6,7", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-12-13-nk-osijek-nk-varazdin",
        date: "Sábado 13 de Dezembro de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Anton Matković",
        rating: "8,98",
        coaches: { home: "Gamy Chambelito", away: "João Nabais" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "6,4", "AR")],
                [reportPlayer("38", "Čolina", "7,4", "MO"), reportPlayer("20", "Gradel", "6,5", "MO")],
                [reportPlayer("6", "Nico Gaitán", "7,1", "MAI", true), reportPlayer("21", "Bubanja", "7,1", "MC"), reportPlayer("27", "Mikić", "7,1", "MAI")],
                [reportPlayer("34", "Matković", "9,0", "Pi", true)],
                [reportPlayer("26", "Jelenić", "6,9", "CP"), reportPlayer("23", "Vrbančić", "6,9", "CP"), reportPlayer("33", "Hasić", "6,5", "CP")],
                [reportPlayer("31", "Malenica", "7,8", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,4", "AR")],
                [reportPlayer("7", "Vuk", "6,9", "AI"), reportPlayer("27", "Latković", "6,6", "SA"), reportPlayer("18", "Gaprindashvili", "6,6", "Ex")],
                [reportPlayer("24", "Marina", "6,4", "CJR"), reportPlayer("8", "Duvnjak", "6,5", "CJA")],
                [reportPlayer("15", "Jacob", "6,7", "AI"), reportPlayer("44", "Barać", "7,4", "DC", true), reportPlayer("16", "Tepšić", "6,3", "CC"), reportPlayer("23", "Maglica", "7,2", "DL")],
                [reportPlayer("1", "Zelenika", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("4", "A. Matković", { assist: "N. Mikić" }), goalEvent("21", "N. Gaitán", { assist: "D. Čolina" }), goalEvent("83", "Y. Touré", { assist: "A. Matković" })],
            away: [goalEvent("30", "M. Barać", { assist: "M. Jacob" }), goalEvent("71", "B. Biró", { assist: "S. Jurić" })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "19", "19"],
            ["Remates à Baliza", "9", "14"],
            ["xG", "2,50", "1,77"],
            ["PADPAD", "10,42", "14,95"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "7", "12"],
            ["Passes Completados", "87%", "85%"],
            ["Cruzamentos Completados", "36%", "22%"],
            ["Faltas", "12", "7"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "130", "123"],
            ["Classificação Média", "7,1", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-12-13-hnk-rijeka-hnk-vukovar",
        date: "Sábado 13 de Dezembro de 2025",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Keita Baldé",
        rating: "9,36",
        coaches: { home: "Zép Jóbes", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("7", "Keita Baldé", "9,4", "AR", true)],
                [reportPlayer("14", "Gojak", "6,8", "ME"), reportPlayer("10", "Fruk", "7,1", "MO")],
                [reportPlayer("8", "Petrovič", "6,8", "MC")],
                [reportPlayer("15", "Martínez T.", "6,7", "MD"), reportPlayer("26", "Dantas", "7,1", "CJR")],
                [reportPlayer("34", "Devetak", "7,1", "AI"), reportPlayer("53", "Emirhan", "6,8", "CC"), reportPlayer("6", "Radeljić", "6,4", "CC"), reportPlayer("22", "Oreč", "8,8", "AI")],
                [reportPlayer("1", "Letica", "6,9", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("9", "Kulušić", "7,0", "AAE", true)],
                [reportPlayer("8", "Horvat", "6,2", "MO"), reportPlayer("77", "Shabani", "6,3", "MO")],
                [reportPlayer("3", "Bosec", "6,3", "AI"), reportPlayer("15", "Gurlica", "6,8", "MD"), reportPlayer("13", "Čaić", "6,6", "CJR"), reportPlayer("91", "Tićinović", "7,0", "AI")],
                [reportPlayer("5", "Elez", "6,1", "CC"), reportPlayer("4", "Mitrović", "6,9", "CC"), reportPlayer("12", "Živković", "6,5", "CC")],
                [reportPlayer("42", "Đaković", "7,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("13", "K. Baldé", { assist: "A. Oreč" }), goalEvent("45+1", "K. Baldé", { assist: "T. Fruk" }), goalEvent("89", "K. Baldé", { assist: "M. Ndockyt" })],
            away: [goalEvent("40", "L. Kulušić", { assist: "M. Tićinović" })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "20", "6"],
            ["Remates à Baliza", "15", "4"],
            ["xG", "2,00", "0,36"],
            ["PADPAD", "15,33", "18,44"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "5", "3"],
            ["Passes Completados", "89%", "89%"],
            ["Cruzamentos Completados", "26%", "22%"],
            ["Faltas", "9", "16"],
            ["Cartões amarelos", "4", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "124"],
            ["Classificação Média", "7,2", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-12-13-nk-slaven-belupo-hajduk-split",
        date: "Sábado 13 de Dezembro de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Vento Forte",
        playerOfMatch: "Dario Marešić",
        rating: "7,45",
        coaches: { home: "Francisco Pinto", away: "Gonzalo García" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("90", "Nestorovski", "6,2", "AA"), reportPlayer("7", "Dabro", "6,3", "AR")],
                [reportPlayer("10", "Caimacov", "6,1", "EAI"), reportPlayer("23", "Lepinjica", "6,5", "Ex")],
                [reportPlayer("8", "Mrowca", "6,4", "MD"), reportPlayer("21", "Crepulja", "7,2", "CJA")],
                [reportPlayer("35", "Žuta", "6,5", "AI"), reportPlayer("6", "Božić", "7,0", "DC"), reportPlayer("4", "Kovačić", "7,0", "CC"), reportPlayer("18", "Krušelj", "7,2", "DL")],
                [reportPlayer("31", "Hadžikić", "7,1", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,4", "AR")],
                [reportPlayer("9", "A. Rebić", "6,5", "EAI"), reportPlayer("11", "Šego", "6,3", "EAI")],
                [reportPlayer("21", "Pukstas", "7,0", "MC"), reportPlayer("23", "Krovinović", "7,0", "MC")],
                [reportPlayer("6", "Hugo G.", "7,0", "MD")],
                [reportPlayer("3", "Auer", "6,4", "AI"), reportPlayer("14", "Raçi", "6,5", "CC"), reportPlayer("15", "Marešić", "7,5", "CC"), reportPlayer("32", "Hrgović", "7,0", "AI")],
                [reportPlayer("33", "Silić", "7,2", "GR")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "55%", "45%"],
            ["Remates", "3", "17"],
            ["Remates à Baliza", "0", "4"],
            ["xG", "0,24", "1,30"],
            ["PADPAD", "24,12", "25,55"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "4", "9"],
            ["Passes Completados", "88%", "90%"],
            ["Cruzamentos Completados", "11%", "13%"],
            ["Faltas", "12", "11"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "123"],
            ["Classificação Média", "6,7", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-12-20-dinamo-zagreb-hnk-rijeka",
        date: "Sábado 20 de Dezembro de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Luka Stojković",
        rating: "7,56",
        coaches: { home: "M. Kovačević", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,4", "AvR", true)],
                [reportPlayer("11", "Hoxha", "6,9", "EAI"), reportPlayer("30", "Topić", "6,9", "EAI")],
                [reportPlayer("14", "Soldo", "7,0", "MC"), reportPlayer("8", "Zajc", "6,5", "MC")],
                [reportPlayer("27", "Mišić", "6,5", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "6,5", "AI"), reportPlayer("26", "McKenna", "7,0", "CC"), reportPlayer("36", "Domínguez", "6,7", "CC"), reportPlayer("25", "Valinčić", "6,9", "AI")],
                [reportPlayer("40", "Livaković", "6,4", "GR")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("27", "Ambrose", "7,4", "AR", true)],
                [reportPlayer("14", "Gojak", "6,6", "ME"), reportPlayer("10", "Fruk", "6,4", "MO")],
                [reportPlayer("8", "Petrovič", "6,8", "MC")],
                [reportPlayer("15", "Martínez T.", "6,3", "MD"), reportPlayer("26", "Dantas", "6,7", "CJR")],
                [reportPlayer("34", "Devetak", "6,7", "AI"), reportPlayer("53", "Emirhan", "6,4", "CC"), reportPlayer("6", "Radeljić", "6,8", "CC"), reportPlayer("22", "Oreč", "7,4", "AI")],
                [reportPlayer("1", "Letica", "7,2", "GR")]
            ])
        },
        events: {
            home: [goalEvent("67", "Dion Beljo", { assist: "L. Stojković" })],
            away: [sendOffEvent("10", "M. Devetak"), goalEvent("77", "T. Ambrose", { assist: "Jean Carlos" })]
        },
        stats: reportStats([
            ["Posse", "55%", "45%"],
            ["Remates", "26", "9"],
            ["Remates à Baliza", "12", "4"],
            ["xG", "2,21", "0,79"],
            ["PADPAD", "13,96", "30,00"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "6", "6"],
            ["Passes Completados", "89%", "87%"],
            ["Cruzamentos Completados", "18%", "19%"],
            ["Faltas", "6", "12"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "1"],
            ["Distância Percorrida", "126", "117"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-12-20-hajduk-split-nk-osijek",
        date: "Sábado 20 de Dezembro de 2025",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Marko Livaja",
        rating: "8,35",
        coaches: { home: "Gonzalo García", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "8,4", "AR", true)],
                [reportPlayer("9", "A. Rebić", "6,7", "EAI"), reportPlayer("30", "Almena", "8,3", "EAI", true)],
                [reportPlayer("23", "Krovinović", "6,9", "MC"), reportPlayer("21", "Pukstas", "6,7", "MC")],
                [reportPlayer("6", "Guillamón", "6,5", "MD")],
                [reportPlayer("32", "Hrgović", "7,1", "AI"), reportPlayer("14", "Raçi", "7,1", "CC"), reportPlayer("15", "Marešić", "6,6", "CC"), reportPlayer("38", "Hodak", "7,0", "AI")],
                [reportPlayer("33", "Silić", "8,3", "GR")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "6,5", "AAE")],
                [reportPlayer("38", "Čolina", "6,5", "MO"), reportPlayer("20", "Gradel", "6,4", "SA")],
                [reportPlayer("6", "Gaitán", "6,2", "MAI"), reportPlayer("21", "Bubanja", "7,1", "MC"), reportPlayer("27", "Mikić", "6,5", "MAI")],
                [reportPlayer("34", "Matković", "6,0", "CJR")],
                [reportPlayer("26", "Jelenić", "6,8", "CP"), reportPlayer("23", "Vrbančić", "6,4", "CP"), reportPlayer("33", "Hasić", "6,6", "CP")],
                [reportPlayer("31", "Malenica", "6,0", "GR")]
            ])
        },
        events: {
            home: [goalEvent("8", "M. Livaja", { assist: "I. Almena" }), goalEvent("24", "I. Almena", { assist: "L. Hodak" }), goalEvent("90", "M. Livaja", { assist: "M. Šego" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "42%", "58%"],
            ["Remates", "9", "9"],
            ["Remates à Baliza", "5", "7"],
            ["xG", "1,50", "0,86"],
            ["PADPAD", "41,42", "18,71"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "5", "6"],
            ["Passes Completados", "91%", "92%"],
            ["Cruzamentos Completados", "11%", "15%"],
            ["Faltas", "11", "18"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "130"],
            ["Classificação Média", "7,2", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-12-20-hnk-gorica-nk-slaven-belupo",
        date: "Sábado 20 de Dezembro de 2025",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Brisa",
        playerOfMatch: "Filip Krušelj",
        rating: "7,47",
        coaches: { home: "Miguel Cardoso", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,3", "Ex"), reportPlayer("10", "Pršir", "6,1", "ME"), reportPlayer("9", "Bogojević", "6,2", "Ex")],
                [reportPlayer("8", "Pozo", "6,4", "CJA"), reportPlayer("7", "Bakić", "6,4", "MC")],
                [reportPlayer("36", "Kavelj", "6,5", "MD")],
                [reportPlayer("19", "Čabraja", "6,3", "AI"), reportPlayer("4", "J. Filipović", "6,5", "DC"), reportPlayer("5", "Leš", "6,6", "CP"), reportPlayer("22", "Trontelj", "6,4", "AI")],
                [reportPlayer("71", "Matijaš", "6,7", "GRC")]
            ]),
            away: reportFormation("4-4-2", [
                [reportPlayer("7", "Dabro", "6,4", "AC"), reportPlayer("10", "Caimacov", "6,2", "AC")],
                [reportPlayer("15", "Ćubelić", "7,0", "MA", true), reportPlayer("23", "Lepinjica", "6,5", "MC"), reportPlayer("21", "Crepulja", "6,6", "MC"), reportPlayer("8", "Mrowca", "6,8", "MA")],
                [reportPlayer("35", "Žuta", "7,0", "DL"), reportPlayer("6", "Božić", "6,8", "DC"), reportPlayer("4", "Kovačić", "6,3", "DC"), reportPlayer("18", "Krušelj", "7,5", "DL")],
                [reportPlayer("31", "Hadžikić", "6,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("78", "D. Kovačić", { ownGoal: true })],
            away: [goalEvent("20", "I. Ćubelić", { assist: "F. Krušelj" })]
        },
        stats: reportStats([
            ["Posse", "41%", "59%"],
            ["Remates", "13", "12"],
            ["Remates à Baliza", "5", "6"],
            ["xG", "1,60", "0,80"],
            ["PADPAD", "23,45", "21,00"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "9", "6"],
            ["Passes Completados", "86%", "88%"],
            ["Cruzamentos Completados", "3%", "12%"],
            ["Faltas", "11", "6"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "121"],
            ["Classificação Média", "6,4", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-12-20-nk-varazdin-nk-lokomotiva",
        date: "Sábado 20 de Dezembro de 2025",
        stadium: "Anđelko Herjavec",
        weather: "Calmo",
        playerOfMatch: "Aleksa Latković",
        rating: "8,46",
        coaches: { home: "João Nabais", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("17", "Mamut", "8,0", "AR", true)],
                [reportPlayer("7", "Vuk", "7,5", "AI", true), reportPlayer("27", "Latković", "8,5", "SA", true), reportPlayer("12", "Bočkaj", "6,2", "Ex")],
                [reportPlayer("14", "Ilinković", "7,5", "CJR"), reportPlayer("8", "Duvnjak", "8,1", "CJA", true)],
                [reportPlayer("3", "Sikošek", "7,7", "AI"), reportPlayer("44", "Barać", "7,7", "DC"), reportPlayer("13", "Mladenovski", "7,9", "CC"), reportPlayer("23", "Maglica", "7,0", "DL")],
                [reportPlayer("1", "Zelenika", "7,5", "GR")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("10", "Rui Pedro", "6,1", "AAE"), reportPlayer("7", "Trajkovski", "6,1", "AvR")],
                [reportPlayer("40", "McCarthy", "6,5", "CJA"), reportPlayer("80", "Redmond", "6,2", "MC"), reportPlayer("37", "Córdoba", "6,4", "MC")],
                [reportPlayer("17", "Pajač", "6,6", "AI"), reportPlayer("23", "Vešović", "6,3", "AI")],
                [reportPlayer("20", "Kolinger", "6,7", "DC"), reportPlayer("28", "Belcar", "6,7", "CP"), reportPlayer("3", "Diop", "6,4", "CP")],
                [reportPlayer("1", "Hendija", "7,0", "GR")]
            ])
        },
        events: {
            home: [goalEvent("5", "M. Vuk", { assist: "I. Mamut" }), goalEvent("26", "T. Duvnjak", { assist: "S. Ilinković" }), goalEvent("72", "A. Latković", { assist: "G. Sikošek" }), goalEvent("75", "I. Mamut", { assist: "A. Latković" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "62%", "38%"],
            ["Remates", "28", "4"],
            ["Remates à Baliza", "15", "1"],
            ["xG", "2,39", "0,04"],
            ["PADPAD", "12,40", "21,29"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "10", "1"],
            ["Passes Completados", "84%", "78%"],
            ["Cruzamentos Completados", "30%", "11%"],
            ["Faltas", "7", "9"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "129", "124"],
            ["Classificação Média", "7,6", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-12-20-hnk-vukovar-nk-istra-1961",
        date: "Sábado 20 de Dezembro de 2025",
        stadium: "Stadion HNK Cibalia",
        weather: "Calmo",
        playerOfMatch: "Patrik Horvat",
        rating: "9,69",
        coaches: { home: "Hugo Macedo", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("8", "Horvat", "9,7", "AA", true), reportPlayer("21", "Puljić", "6,7", "CL"), reportPlayer("36", "Butić", "6,8", "Ex")],
                [reportPlayer("77", "Shabani", "7,9", "MC", true), reportPlayer("10", "Gonzalez", "7,4", "CJA")],
                [reportPlayer("6", "Biljan", "7,3", "CJR")],
                [reportPlayer("3", "Bosec", "7,4", "DL"), reportPlayer("5", "Elez", "7,7", "DC"), reportPlayer("4", "Mitrović", "7,4", "DC"), reportPlayer("91", "Tićinović", "7,1", "DL")],
                [reportPlayer("42", "Đaković", "7,4", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("9", "Prevljak", "6,3", "AC")],
                [reportPlayer("11", "Goričan", "6,1", "MO"), reportPlayer("17", "Frederiksen", "6,6", "MO")],
                [reportPlayer("23", "Štulac", "6,7", "MD"), reportPlayer("5", "Radošević", "7,1", "CJR")],
                [reportPlayer("26", "Heister", "6,3", "AI"), reportPlayer("97", "Kadušić", "6,4", "AI")],
                [reportPlayer("4", "Johnston", "6,5", "CC"), reportPlayer("8", "Maurić", "6,5", "DC"), reportPlayer("38", "Kumar", "6,2", "CC")],
                [reportPlayer("1", "Kolić", "6,2", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("4", "E. Shabani", { assist: "P. Horvat" }), goalEvent("27", "P. Horvat", { assist: "R. Gonzalez" }), goalEvent("73", "P. Horvat", { assist: "L. Kulušić" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "49%", "51%"],
            ["Remates", "14", "10"],
            ["Remates à Baliza", "7", "2"],
            ["xG", "1,85", "0,42"],
            ["PADPAD", "42,36", "21,05"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "6", "9"],
            ["Passes Completados", "87%", "89%"],
            ["Cruzamentos Completados", "28%", "6%"],
            ["Faltas", "5", "6"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "130", "130"],
            ["Classificação Média", "7,5", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-01-24-nk-istra-1961-hnk-rijeka",
        date: "Sábado 24 de Janeiro de 2026",
        stadium: "Aldo Drosina",
        weather: "Temporal",
        playerOfMatch: "Keita Baldé",
        rating: "8,10",
        coaches: { home: "João Pedro Rato", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Obando", "6,4", "AC")],
                [reportPlayer("11", "Goričan", "6,5", "AA"), reportPlayer("21", "Núñez", "7,8", "MO", true), reportPlayer("17", "Frederiksen", "6,7", "EAI")],
                [reportPlayer("15", "Liber", "7,1", "MD"), reportPlayer("5", "Radošević", "7,5", "CJR", true)],
                [reportPlayer("22", "Can Coşkun", "6,2", "AI"), reportPlayer("4", "Johnston", "6,7", "CC"), reportPlayer("3", "Nasraoui", "6,6", "DC"), reportPlayer("2", "Ángel Pérez", "6,8", "AI")],
                [reportPlayer("99", "Wrąbel", "6,5", "GRC")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("7", "Baldé", "8,1", "AAE", true)],
                [reportPlayer("14", "Gojak", "7,1", "ME"), reportPlayer("10", "Fruk", "6,5", "MO")],
                [reportPlayer("26", "Tiago Dantas", "6,8", "MC")],
                [reportPlayer("21", "Lacoux", "6,5", "MD"), reportPlayer("11", "André", "6,4", "CJR")],
                [reportPlayer("24", "J. Silva", "6,3", "AI"), reportPlayer("53", "Emirhan", "6,6", "CC"), reportPlayer("6", "Radeljić", "7,2", "CC", true), reportPlayer("22", "Oreč", "6,7", "AI")],
                [reportPlayer("1", "Letica", "6,5", "GRP")]
            ])
        },
        events: {
            home: [goalEvent("11", "J. Radošević", { assist: "C. Núñez" }), goalEvent("45", "C. Núñez", { assist: "A. Liber" })],
            away: [goalEvent("25", "S. Radeljić", { assist: "Tiago Dantas" }), goalEvent("57", "K. Baldé", { assist: "A. Gojak" }), goalEvent("90+3", "M. Ndockyt", { assist: "K. Baldé" })]
        },
        stats: reportStats([
            ["Posse", "64%", "36%"],
            ["Remates", "14", "8"],
            ["Remates à Baliza", "7", "6"],
            ["xG", "1,21", "1,09"],
            ["PADPAD", "18,88", "27,45"],
            ["Oportunidades Flagrantes", "0", "2"],
            ["Cantos", "12", "5"],
            ["Passes Completados", "92%", "87%"],
            ["Cruzamentos Completados", "16%", "15%"],
            ["Faltas", "13", "18"],
            ["Cartões amarelos", "0", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "126"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-01-24-nk-lokomotiva-hajduk-split",
        date: "Sábado 24 de Janeiro de 2026",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Marko Pajač",
        rating: "7,66",
        coaches: { home: "Pai Natal", away: "Gonzalo García" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("15", "Stojaković", "6,7", "AAE"), reportPlayer("7", "Trajkovski", "7,3", "AvR", true)],
                [reportPlayer("17", "Pajač", "7,7", "AI"), reportPlayer("26", "Rog", "7,1", "MC"), reportPlayer("8", "Antolić", "6,6", "CJA"), reportPlayer("28", "Belcar", "6,8", "MC"), reportPlayer("23", "Vešović", "6,3", "AI")],
                [reportPlayer("4", "Sigali", "7,2", "DC"), reportPlayer("16", "Dajčer", "7,4", "CP"), reportPlayer("20", "Kolinger", "6,8", "CP")],
                [reportPlayer("99", "Vozinha", "7,4", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,4", "AR")],
                [reportPlayer("9", "A. Rebić", "6,3", "EAI"), reportPlayer("11", "Šego", "6,4", "EAI")],
                [reportPlayer("23", "Krovinović", "6,7", "MC"), reportPlayer("21", "Pukstas", "6,5", "MC")],
                [reportPlayer("6", "Hugo G.", "6,5", "MD")],
                [reportPlayer("32", "Hrgović", "6,6", "AI"), reportPlayer("14", "Raçi", "7,1", "CC"), reportPlayer("15", "Marešić", "6,6", "CC"), reportPlayer("8", "Sigur", "6,4", "AI")],
                [reportPlayer("33", "Silić", "6,7", "GR")]
            ])
        },
        events: {
            home: [goalEvent("37", "A. Trajkovski")],
            away: []
        },
        stats: reportStats([
            ["Posse", "56%", "44%"],
            ["Remates", "11", "9"],
            ["Remates à Baliza", "2", "5"],
            ["xG", "0,94", "0,59"],
            ["PADPAD", "19,90", "30,80"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "6", "3"],
            ["Passes Completados", "90%", "89%"],
            ["Cruzamentos Completados", "20%", "10%"],
            ["Faltas", "11", "10"],
            ["Cartões amarelos", "4", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "117", "118"],
            ["Classificação Média", "7,0", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-01-24-nk-osijek-hnk-vukovar",
        date: "Sábado 24 de Janeiro de 2026",
        stadium: "Opus Arena",
        weather: "Tempestuoso",
        playerOfMatch: "Fran Álvarez",
        rating: "9,19",
        coaches: { home: "Gamy Chambelito", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "7,7", "AR", true)],
                [reportPlayer("3", "Barišić", "6,7", "MO"), reportPlayer("20", "Gradel", "7,0", "MO")],
                [reportPlayer("23", "Vrbančić", "6,6", "MAI"), reportPlayer("25", "Børkeeiet", "6,7", "MC"), reportPlayer("27", "Mikić", "7,5", "MAI", true)],
                [reportPlayer("34", "Matković", "7,4", "Pi")],
                [reportPlayer("26", "Jelenić", "7,2", "CP"), reportPlayer("6", "Fran Álvarez", "9,2", "CP", true), reportPlayer("2", "Racovițan", "6,7", "CP")],
                [reportPlayer("31", "Malenica", "6,8", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("77", "Shabani", "6,3", "AAE")],
                [reportPlayer("13", "Čaić", "6,6", "MO"), reportPlayer("21", "Puljić", "6,7", "MO")],
                [reportPlayer("4", "Mitrović", "6,3", "AI"), reportPlayer("41", "Šporn", "6,5", "MD"), reportPlayer("8", "Horvat", "6,6", "CJR"), reportPlayer("3", "Bosec", "6,6", "AI")],
                [reportPlayer("5", "Elez", "6,3", "CC"), reportPlayer("10", "Gonzalez", "6,5", "CC"), reportPlayer("91", "Tićinović", "7,1", "CC")],
                [reportPlayer("42", "Đaković", "6,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("45+1", "N. Mikić", { assist: "F. Álvarez" }), goalEvent("48", "F. Álvarez", { assist: "A. Matković" }), goalEvent("75", "F. Álvarez", { assist: "A. Jakupović" }), goalEvent("90+4", "A. Jakupović", { assist: "F. Karačić" })],
            away: [goalEvent("53", "M. Čuić", { assist: "M. Tićinović" }), goalEvent("63", "L. Kulušić")]
        },
        stats: reportStats([
            ["Posse", "56%", "44%"],
            ["Remates", "18", "17"],
            ["Remates à Baliza", "8", "8"],
            ["xG", "2,12", "1,86"],
            ["PADPAD", "22,50", "58,20"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "9", "6"],
            ["Passes Completados", "88%", "85%"],
            ["Cruzamentos Completados", "36%", "27%"],
            ["Faltas", "10", "17"],
            ["Cartões amarelos", "2", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "131", "126"],
            ["Classificação Média", "7,2", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-01-24-nk-slaven-belupo-dinamo-zagreb",
        date: "Sábado 24 de Janeiro de 2026",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Fran Topić",
        rating: "8,81",
        coaches: { home: "Francisco Pinto", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("25", "Kriwak", "6,7", "AA"), reportPlayer("11", "Mitrović", "6,0", "AR")],
                [reportPlayer("15", "Ćubelić", "6,5", "EAI"), reportPlayer("23", "Lepinjica", "6,5", "Ex")],
                [reportPlayer("8", "Mrowca", "6,6", "MD"), reportPlayer("21", "Crepulja", "6,8", "CJA")],
                [reportPlayer("3", "Jakir", "6,3", "AI"), reportPlayer("6", "Božić", "6,8", "DC"), reportPlayer("4", "Kovačić", "6,7", "CC"), reportPlayer("27", "Grgić", "6,6", "DL")],
                [reportPlayer("31", "Hadžikić", "6,2", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "8,1", "AvR", true)],
                [reportPlayer("10", "Vidović", "6,9", "EAI"), reportPlayer("30", "Topić", "8,8", "EAI", true)],
                [reportPlayer("14", "Soldo", "6,9", "MC"), reportPlayer("8", "Zajc", "7,3", "MC", true)],
                [reportPlayer("27", "Mišić", "6,6", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "7,8", "AI"), reportPlayer("26", "McKenna", "6,7", "CC"), reportPlayer("36", "Domínguez", "6,7", "CC"), reportPlayer("25", "Valinčić", "6,6", "AI")],
                [reportPlayer("40", "Livaković", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("13", "M. Dabro", { assist: "L. Crepulja" })],
            away: [goalEvent("8", "F. Topić", { assist: "M. Pérez Vinlöf" }), goalEvent("33", "Dion Beljo", { penalty: true }), goalEvent("48", "M. Zajc", { assist: "Dion Beljo" }), goalEvent("63", "F. Topić")]
        },
        stats: reportStats([
            ["Posse", "58%", "42%"],
            ["Remates", "11", "17"],
            ["Remates à Baliza", "5", "8"],
            ["xG", "0,56", "2,52"],
            ["PADPAD", "21,81", "22,77"],
            ["Oportunidades Flagrantes", "0", "2"],
            ["Cantos", "2", "10"],
            ["Passes Completados", "91%", "89%"],
            ["Cruzamentos Completados", "15%", "35%"],
            ["Faltas", "13", "5"],
            ["Cartões amarelos", "3", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "117", "118"],
            ["Classificação Média", "6,6", "7,2"]
        ])
    },
    {
        fixtureKey: "2025-01-24-nk-varazdin-hnk-gorica",
        date: "Sábado 24 de Janeiro de 2026",
        stadium: "Anđelko Herjavec",
        weather: "Calmo",
        playerOfMatch: "Ivan Mamut",
        rating: "9,58",
        coaches: { home: "João Nabais", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "9,6", "AR", true)],
                [reportPlayer("38", "Iuri Tavares", "7,7", "AI", true), reportPlayer("27", "Latković", "6,6", "SA"), reportPlayer("11", "Brajković", "7,7", "Ex")],
                [reportPlayer("24", "Marina", "6,9", "CJR"), reportPlayer("8", "Duvnjak", "7,4", "CJA")],
                [reportPlayer("15", "Jacob", "7,8", "AI"), reportPlayer("13", "Mladenovski", "7,2", "DC"), reportPlayer("16", "Tepšić", "6,7", "CC"), reportPlayer("23", "Maglica", "7,2", "DL")],
                [reportPlayer("32", "Mamić", "7,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,1", "Ex"), reportPlayer("10", "Pršir", "6,2", "ME"), reportPlayer("9", "Bogojević", "6,8", "Ex", true)],
                [reportPlayer("8", "Pozo", "6,7", "CJA"), reportPlayer("7", "Bakić", "6,2", "ME")],
                [reportPlayer("36", "Kavelj", "6,3", "MD")],
                [reportPlayer("19", "Čabraja", "6,2", "AI"), reportPlayer("4", "J. Filipović", "6,4", "DC"), reportPlayer("5", "Leš", "6,5", "CP"), reportPlayer("22", "Trontelj", "6,6", "AI")],
                [reportPlayer("71", "Matijaš", "6,5", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("29", "I. Tavares", { assist: "T. Duvnjak" }), goalEvent("42", "I. Mamut", { assist: "M. Jacob" }), goalEvent("61", "I. Mamut", { assist: "R. Brajković" }), goalEvent("76", "I. Mamut", { assist: "P. Bočkaj" })],
            away: [goalEvent("57", "B. Bogojević", { assist: "Ž. Trontelj" })]
        },
        stats: reportStats([
            ["Posse", "56%", "44%"],
            ["Remates", "19", "10"],
            ["Remates à Baliza", "11", "3"],
            ["xG", "2,18", "1,03"],
            ["PADPAD", "13,79", "38,56"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "8", "5"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "34%", "15%"],
            ["Faltas", "4", "16"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "123"],
            ["Classificação Média", "7,3", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-01-31-dinamo-zagreb-nk-istra-1961",
        date: "Sábado 31 de Janeiro de 2026",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Dion Beljo",
        rating: "7,78",
        coaches: { home: "M. Kovačević", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,8", "AvR", true)],
                [reportPlayer("11", "Hoxha", "6,5", "EAI"), reportPlayer("21", "Lisica", "6,6", "EAI")],
                [reportPlayer("10", "Vidović", "6,8", "MC"), reportPlayer("7", "Stojković", "6,4", "ME")],
                [reportPlayer("37", "Radoš", "6,7", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,5", "AI"), reportPlayer("15", "Galešić", "7,0", "CC"), reportPlayer("36", "Domínguez", "6,5", "CC"), reportPlayer("13", "Tabinas", "6,5", "DL")],
                [reportPlayer("40", "Livaković", "7,0", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Obando", "6,6", "AC")],
                [reportPlayer("11", "Goričan", "6,6", "AA"), reportPlayer("21", "Núñez", "6,7", "MO"), reportPlayer("17", "Frederiksen", "7,7", "EAI")],
                [reportPlayer("15", "Liber", "7,0", "MD"), reportPlayer("5", "Radošević", "7,2", "CJR")],
                [reportPlayer("26", "Heister", "6,7", "AI"), reportPlayer("4", "Johnston", "6,4", "CC"), reportPlayer("3", "Nasraoui", "6,6", "DC"), reportPlayer("2", "Ángel Pérez", "6,5", "AI")],
                [reportPlayer("99", "Wrąbel", "6,1", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("57", "K. Vidić", { assist: "B. Goda" }), goalEvent("90+1", "Dion Beljo", { penalty: true }), goalEvent("90+3", "I. Safundžić", { assist: "Dion Beljo" })],
            away: [goalEvent("60", "S. Prevljak", { assist: "E. Frederiksen" })]
        },
        stats: reportStats([
            ["Posse", "40%", "60%"],
            ["Remates", "7", "22"],
            ["Remates à Baliza", "6", "8"],
            ["xG", "1,27", "1,65"],
            ["PADPAD", "26,50", "17,32"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "4", "6"],
            ["Passes Completados", "88%", "91%"],
            ["Cruzamentos Completados", "23%", "11%"],
            ["Faltas", "9", "10"],
            ["Cartões amarelos", "0", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "132"],
            ["Classificação Média", "6,8", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-01-31-hajduk-split-nk-varazdin",
        date: "Sábado 31 de Janeiro de 2026",
        stadium: "Poljud",
        weather: "Vento Forte",
        playerOfMatch: "Toni Silić",
        rating: "7,91",
        coaches: { home: "Gonzalo García", away: "João Nabais" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "7,0", "AR", true)],
                [reportPlayer("9", "A. Rebić", "7,3", "EAI", true), reportPlayer("11", "Šego", "7,1", "EAI")],
                [reportPlayer("23", "Krovinović", "7,1", "MC"), reportPlayer("21", "Pukstas", "6,7", "MC")],
                [reportPlayer("6", "Hugo G.", "6,9", "MD")],
                [reportPlayer("32", "Hrgović", "6,8", "AI"), reportPlayer("14", "Raçi", "7,2", "CC"), reportPlayer("31", "Šarlija", "7,1", "CP"), reportPlayer("8", "Sigur", "6,9", "AI")],
                [reportPlayer("3", "Toni Silić", "7,9", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "7,7", "AR", true)],
                [reportPlayer("38", "Iuri Tavares", "6,6", "AI"), reportPlayer("10", "Biró", "6,5", "SA"), reportPlayer("18", "Gaprindashvili", "6,5", "Ex")],
                [reportPlayer("6", "Puclin", "6,4", "CJR"), reportPlayer("24", "Marina", "7,0", "CJA")],
                [reportPlayer("15", "Jacob", "7,3", "AI"), reportPlayer("13", "Mladenovski", "6,6", "DC"), reportPlayer("16", "Tepšić", "6,4", "CC"), reportPlayer("23", "Maglica", "6,8", "DL")],
                [reportPlayer("32", "Mamić", "6,3", "GR")]
            ])
        },
        events: {
            home: [goalEvent("6", "A. Rebić", { assist: "F. Krovinović" }), goalEvent("34", "M. Livaja", { assist: "M. Šego" })],
            away: [goalEvent("43", "I. Mamut", { assist: "M. Jacob" })]
        },
        stats: reportStats([
            ["Posse", "48%", "52%"],
            ["Remates", "7", "18"],
            ["Remates à Baliza", "3", "10"],
            ["xG", "0,54", "1,40"],
            ["PADPAD", "35,08", "16,40"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "4", "9"],
            ["Passes Completados", "89%", "90%"],
            ["Cruzamentos Completados", "18%", "20%"],
            ["Faltas", "8", "10"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "129"],
            ["Classificação Média", "7,0", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-01-31-hnk-gorica-nk-osijek",
        date: "Sábado 31 de Janeiro de 2026",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Ognjen Bakić",
        rating: "8,28",
        coaches: { home: "Miguel Cardoso", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,5", "Ex"), reportPlayer("10", "Pršir", "6,9", "ME", true), reportPlayer("9", "Bogojević", "6,3", "Ex")],
                [reportPlayer("8", "Pozo", "6,8", "CJA"), reportPlayer("7", "Bakić", "8,3", "ME", true)],
                [reportPlayer("36", "Kavelj", "6,5", "MD")],
                [reportPlayer("19", "Čabraja", "6,7", "AI"), reportPlayer("4", "J. Filipović", "6,4", "DC"), reportPlayer("5", "Leš", "6,8", "CP"), reportPlayer("22", "Trontelj", "6,9", "AI")],
                [reportPlayer("71", "Matijaš", "7,4", "GRC")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "6,3", "AR")],
                [reportPlayer("3", "Barišić", "6,2", "MO"), reportPlayer("20", "Gradel", "6,4", "MO")],
                [reportPlayer("23", "Vrbančić", "6,2", "MAI"), reportPlayer("25", "Børkeeiet", "7,2", "MC"), reportPlayer("29", "Karačić", "7,0", "MAI")],
                [reportPlayer("34", "Matković", "6,3", "Pi")],
                [reportPlayer("26", "Jelenić", "6,6", "CP"), reportPlayer("6", "Fran Álvarez", "6,5", "CP"), reportPlayer("2", "Racovițan", "6,4", "CP")],
                [reportPlayer("31", "Malenica", "6,1", "GR")]
            ])
        },
        events: {
            home: [goalEvent("36", "J. Pršir", { assist: "O. Bakić" }), goalEvent("68", "O. Bakić", { assist: "I. Pozo" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "31%", "69%"],
            ["Remates", "11", "6"],
            ["Remates à Baliza", "5", "4"],
            ["xG", "1,07", "0,31"],
            ["PADPAD", "38,15", "10,67"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "7", "3"],
            ["Passes Completados", "84%", "90%"],
            ["Cruzamentos Completados", "21%", "17%"],
            ["Faltas", "10", "9"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "121"],
            ["Classificação Média", "6,9", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-01-31-hnk-rijeka-nk-lokomotiva",
        date: "Sábado 31 de Janeiro de 2026",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Keita Baldé",
        rating: "10,00",
        coaches: { home: "Zép Jóbes", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("7", "Keita Baldé", "10,0", "AR", true)],
                [reportPlayer("20", "Ndockyt", "9,5", "ME", true), reportPlayer("10", "Fruk", "7,1", "MO")],
                [reportPlayer("14", "Gojak", "7,0", "MC")],
                [reportPlayer("21", "Lacoux", "7,0", "MD"), reportPlayer("11", "André", "6,6", "CJR")],
                [reportPlayer("34", "Devetak", "7,0", "AI"), reportPlayer("53", "Emirhan", "7,9", "CC", true), reportPlayer("6", "Radeljić", "7,8", "CC"), reportPlayer("22", "Oreč", "7,1", "AI")],
                [reportPlayer("1", "Letica", "7,1", "GR")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("15", "Stojaković", "6,2", "AAE"), reportPlayer("40", "McCarthy", "6,5", "AvR")],
                [reportPlayer("28", "Belcar", "6,2", "MC"), reportPlayer("8", "Antolić", "6,2", "CJA"), reportPlayer("16", "Dajčer", "6,3", "MC")],
                [reportPlayer("17", "Pajač", "6,5", "AI"), reportPlayer("24", "Katić", "6,5", "AI", true)],
                [reportPlayer("4", "Sigali", "6,4", "DC"), reportPlayer("7", "Trajkovski", "6,5", "CP"), reportPlayer("20", "Kolinger", "6,3", "CP")],
                [reportPlayer("99", "Vozinha", "6,2", "GR")]
            ])
        },
        events: {
            home: [goalEvent("22", "K. Baldé", { assist: "T. Fruk" }), goalEvent("23", "M. Ndockyt", { assist: "K. Baldé" }), goalEvent("26", "K. Baldé", { assist: "M. Ndockyt" }), goalEvent("58", "J. Silva", { assist: "T. Lacoux" }), goalEvent("66", "K. Baldé", { assist: "J. Silva" }), goalEvent("76", "K. Baldé", { assist: "S. Radeljić" }), goalEvent("90+2", "Emirhan", { assist: "J. Silva" })],
            away: [goalEvent("77", "I. Katić")]
        },
        stats: reportStats([
            ["Posse", "55%", "45%"],
            ["Remates", "24", "15"],
            ["Remates à Baliza", "13", "7"],
            ["xG", "3,80", "1,04"],
            ["PADPAD", "18,50", "14,17"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "12", "9"],
            ["Passes Completados", "88%", "85%"],
            ["Cruzamentos Completados", "30%", "14%"],
            ["Faltas", "12", "12"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "118", "116"],
            ["Classificação Média", "7,7", "6,3"]
        ])
    },
    {
        fixtureKey: "2025-01-31-hnk-vukovar-nk-slaven-belupo",
        date: "Sábado 31 de Janeiro de 2026",
        stadium: "Stadion HNK Cibalia",
        weather: "Calmo",
        playerOfMatch: "Robin Gonzalez",
        rating: "7,97",
        coaches: { home: "Hugo Macedo", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("8", "Horvat", "7,6", "AAE")],
                [reportPlayer("43", "Čuić", "7,0", "MO"), reportPlayer("9", "Kulušić", "6,2", "MO")],
                [reportPlayer("36", "Butić", "6,4", "AI"), reportPlayer("19", "Mioč", "6,6", "MD"), reportPlayer("10", "Gonzalez", "8,0", "CJR", true), reportPlayer("7", "Kerim Çalhanoğlu", "6,7", "AI")],
                [reportPlayer("5", "Elez", "7,2", "CC"), reportPlayer("4", "Mitrović", "7,9", "CC"), reportPlayer("16", "Pavičić", "7,5", "CC")],
                [reportPlayer("42", "Đaković", "7,5", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("90", "Nestorovski", "6,3", "AA"), reportPlayer("15", "Ćubelić", "6,4", "AR")],
                [reportPlayer("28", "Šunta", "6,6", "EAI"), reportPlayer("23", "Lepinjica", "6,4", "Ex")],
                [reportPlayer("8", "Mrowca", "6,9", "MD"), reportPlayer("21", "Crepulja", "6,7", "CJA")],
                [reportPlayer("35", "Žuta", "6,6", "AI"), reportPlayer("6", "Božić", "6,4", "DC"), reportPlayer("4", "Kovačić", "6,8", "CC"), reportPlayer("18", "Krušelj", "6,3", "DL")],
                [reportPlayer("31", "Hadžikić", "7,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("45+1", "R. Gonzalez")],
            away: []
        },
        stats: reportStats([
            ["Posse", "47%", "53%"],
            ["Remates", "21", "9"],
            ["Remates à Baliza", "13", "5"],
            ["xG", "3,39", "0,48"],
            ["PADPAD", "17,87", "13,07"],
            ["Oportunidades Flagrantes", "5", "0"],
            ["Cantos", "13", "4"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "16%", "16%"],
            ["Faltas", "9", "11"],
            ["Cartões amarelos", "2", "4"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "123"],
            ["Classificação Média", "7,1", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-02-07-dinamo-zagreb-nk-osijek",
        date: "Sábado 7 de Fevereiro de 2026",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Arbër Hoxha",
        rating: "7,67",
        coaches: { home: "M. Kovačević", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,5", "AvR", true)],
                [reportPlayer("11", "Hoxha", "7,7", "EAI", true), reportPlayer("7", "Stojković", "7,5", "EAI")],
                [reportPlayer("14", "Soldo", "7,6", "MC"), reportPlayer("8", "Zajc", "6,6", "MO")],
                [reportPlayer("27", "Mišić", "7,0", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,7", "AI"), reportPlayer("26", "McKenna", "7,5", "CC"), reportPlayer("36", "Domínguez", "6,9", "CC"), reportPlayer("15", "Galešić", "7,0", "DL")],
                [reportPlayer("40", "Livaković", "7,3", "GR")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "6,0", "AR")],
                [reportPlayer("38", "Čolina", "6,3", "MO"), reportPlayer("20", "Gradel", "6,4", "MO")],
                [reportPlayer("23", "Vrbančić", "6,0", "MAI"), reportPlayer("25", "Børkeeiet", "6,3", "MC"), reportPlayer("29", "Karačić", "6,1", "MAI")],
                [reportPlayer("34", "Matković", "7,2", "Pi")],
                [reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("28", "Abrigo", "6,0", "CP"), reportPlayer("33", "Hasić", "6,3", "CP")],
                [reportPlayer("31", "Malenica", "7,4", "GR")]
            ])
        },
        events: {
            home: [goalEvent("5", "A. Hoxha", { assist: "M. Soldo" }), goalEvent("18", "Dion Beljo", { assist: "L. Stojković" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "17", "8"],
            ["Remates à Baliza", "7", "0"],
            ["xG", "2,31", "0,95"],
            ["PADPAD", "14,57", "17,86"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "9", "4"],
            ["Passes Completados", "88%", "84%"],
            ["Cruzamentos Completados", "17%", "12%"],
            ["Faltas", "8", "11"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "129", "134"],
            ["Classificação Média", "7,1", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-02-07-hnk-gorica-hajduk-split",
        date: "Sábado 7 de Fevereiro de 2026",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Iker Pozo",
        rating: "7,70",
        coaches: { home: "Miguel Cardoso", away: "Gonzalo García" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,7", "Ex"), reportPlayer("10", "Pršir", "6,2", "ME"), reportPlayer("9", "Bogojević", "6,2", "Ex")],
                [reportPlayer("8", "Pozo", "7,7", "CJA", true), reportPlayer("7", "Bakić", "7,3", "ME")],
                [reportPlayer("36", "Kavelj", "6,8", "MD")],
                [reportPlayer("19", "Čabraja", "6,8", "AI"), reportPlayer("4", "J. Filipović", "6,9", "DC"), reportPlayer("5", "Leš", "6,8", "CP"), reportPlayer("22", "Trontelj", "6,8", "AI")],
                [reportPlayer("71", "Matijaš", "7,1", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "7,0", "AR")],
                [reportPlayer("9", "A. Rebić", "6,5", "EAI"), reportPlayer("11", "Šego", "6,6", "EAI")],
                [reportPlayer("23", "Krovinović", "6,9", "MC"), reportPlayer("21", "Pukstas", "6,8", "MC")],
                [reportPlayer("6", "Hugo G.", "7,0", "MD")],
                [reportPlayer("32", "Hrgović", "6,7", "AI"), reportPlayer("14", "Raçi", "7,1", "CC"), reportPlayer("31", "Šarlija", "6,7", "CP"), reportPlayer("8", "Sigur", "6,8", "AI")],
                [reportPlayer("3", "Toni Silić", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("89", "I. Pozo", { assist: "O. Bakić" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "31%", "69%"],
            ["Remates", "14", "15"],
            ["Remates à Baliza", "7", "4"],
            ["xG", "1,20", "0,62"],
            ["PADPAD", "34,19", "11,71"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "9", "8"],
            ["Passes Completados", "84%", "92%"],
            ["Cruzamentos Completados", "19%", "5%"],
            ["Faltas", "12", "2"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "128", "122"],
            ["Classificação Média", "6,9", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-02-07-nk-istra-1961-nk-lokomotiva",
        date: "Sábado 7 de Fevereiro de 2026",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Chema Núñez",
        rating: "8,12",
        coaches: { home: "João Pedro Rato", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "7,1", "AC", true)],
                [reportPlayer("11", "Goričan", "6,4", "AA"), reportPlayer("21", "Núñez", "8,1", "MO"), reportPlayer("17", "Frederiksen", "6,7", "EAI")],
                [reportPlayer("10", "Lončar", "6,9", "MD"), reportPlayer("5", "Radošević", "6,3", "CJR")],
                [reportPlayer("26", "Heister", "6,8", "AI"), reportPlayer("4", "Johnston", "7,3", "CC"), reportPlayer("3", "Nasraoui", "6,6", "DC"), reportPlayer("97", "Kadušić", "6,7", "AI")],
                [reportPlayer("99", "Wrąbel", "7,2", "GRC")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "6,6", "AAE"), reportPlayer("28", "Belcar", "6,1", "AvR")],
                [reportPlayer("26", "Rog", "7,3", "MC", true), reportPlayer("14", "Lorber", "6,9", "CJA"), reportPlayer("16", "Dajčer", "6,7", "MC")],
                [reportPlayer("17", "Pajač", "7,4", "AI"), reportPlayer("23", "Vešović", "6,1", "AI")],
                [reportPlayer("4", "Sigali", "6,7", "DC"), reportPlayer("10", "Rui Pedro", "6,5", "CP"), reportPlayer("20", "Kolinger", "6,6", "CP")],
                [reportPlayer("99", "Vozinha", "6,7", "GR")]
            ])
        },
        events: {
            home: [goalEvent("37", "S. Prevljak", { assist: "C. Núñez" }), goalEvent("66", "A. Maurić", { assist: "C. Núñez" })],
            away: [goalEvent("9", "M. Rog", { assist: "M. Pajač" })]
        },
        stats: reportStats([
            ["Posse", "54%", "46%"],
            ["Remates", "17", "15"],
            ["Remates à Baliza", "10", "10"],
            ["xG", "1,42", "1,54"],
            ["PADPAD", "15,16", "24,47"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "8", "6"],
            ["Passes Completados", "90%", "87%"],
            ["Cruzamentos Completados", "29%", "17%"],
            ["Faltas", "13", "17"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "116"],
            ["Classificação Média", "7,0", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-02-07-hnk-rijeka-nk-slaven-belupo",
        date: "Sábado 7 de Fevereiro de 2026",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Ante Matej Jurić",
        rating: "8,68",
        coaches: { home: "Zép Jóbes", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "8,7", "AR", true)],
                [reportPlayer("20", "Ndockyt", "8,7", "ME"), reportPlayer("10", "Fruk", "8,4", "MO", true)],
                [reportPlayer("14", "Gojak", "8,0", "MC", true)],
                [reportPlayer("21", "Lacoux", "6,8", "MD"), reportPlayer("26", "Dantas", "6,9", "CJR")],
                [reportPlayer("24", "J. Silva", "7,9", "AI"), reportPlayer("53", "Emirhan", "6,9", "CC"), reportPlayer("6", "Radeljić", "6,7", "CC"), reportPlayer("22", "Oreč", "6,6", "AI")],
                [reportPlayer("1", "Letica", "6,5", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "7,3", "AA", true), reportPlayer("90", "Nestorovski", "6,9", "AR")],
                [reportPlayer("28", "Šunta", "6,1", "EAI"), reportPlayer("57", "Ereiz", "6,1", "Ex")],
                [reportPlayer("10", "Caimacov", "6,0", "MD"), reportPlayer("23", "Lepinjica", "6,3", "CJA")],
                [reportPlayer("35", "Žuta", "6,4", "AI"), reportPlayer("6", "Božić", "5,9", "DC"), reportPlayer("4", "Kovačić", "6,6", "CC"), reportPlayer("18", "Krušelj", "6,6", "DL")],
                [reportPlayer("31", "Hadžikić", "6,3", "GR")]
            ])
        },
        events: {
            home: [goalEvent("20", "A. Jurić", { assist: "M. Ndockyt" }), goalEvent("35", "T. Fruk", { penalty: true }), goalEvent("37", "T. Fruk", { assist: "M. Ndockyt" }), goalEvent("45", "A. Jurić", { assist: "A. Gojak" }), goalEvent("45+2", "A. Gojak", { assist: "J. Silva" })],
            away: [goalEvent("75", "M. Dabro", { assist: "I. Ćubelić" }), goalEvent("88", "R. Wolski", { assist: "I. Nestorovski" })]
        },
        stats: reportStats([
            ["Posse", "59%", "41%"],
            ["Remates", "15", "6"],
            ["Remates à Baliza", "9", "3"],
            ["xG", "3,04", "1,42"],
            ["PADPAD", "26,31", "59,00"],
            ["Oportunidades Flagrantes", "3", "1"],
            ["Cantos", "4", "3"],
            ["Passes Completados", "93%", "89%"],
            ["Cruzamentos Completados", "11%", "14%"],
            ["Faltas", "11", "21"],
            ["Cartões amarelos", "2", "4"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "120"],
            ["Classificação Média", "7,4", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-02-07-hnk-vukovar-nk-varazdin",
        date: "Sábado 7 de Fevereiro de 2026",
        stadium: "Gradski vrt",
        weather: "Calmo",
        playerOfMatch: "Šimun Butić",
        rating: "7,89",
        coaches: { home: "Hugo Macedo", away: "João Nabais" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("8", "Horvat", "6,6", "AAE")],
                [reportPlayer("19", "Mioč", "6,9", "MO"), reportPlayer("10", "Gonzalez", "7,3", "MO", true)],
                [reportPlayer("36", "Butić", "7,9", "AI"), reportPlayer("41", "Šporn", "6,5", "MD"), reportPlayer("77", "Shabani", "6,8", "CJR"), reportPlayer("3", "Bosec", "6,8", "AI")],
                [reportPlayer("5", "Elez", "6,8", "CC"), reportPlayer("4", "Mitrović", "6,6", "CC"), reportPlayer("91", "Tićinović", "6,6", "CC")],
                [reportPlayer("42", "Đaković", "6,3", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,4", "AR")],
                [reportPlayer("7", "Vuk", "7,1", "AI", true), reportPlayer("27", "Latković", "6,4", "SA"), reportPlayer("18", "Gaprindashvili", "6,7", "Ex")],
                [reportPlayer("14", "Ilinković", "6,6", "CJR"), reportPlayer("8", "Duvnjak", "6,7", "CJA")],
                [reportPlayer("15", "Jacob", "7,5", "AI"), reportPlayer("44", "Barać", "7,4", "DC"), reportPlayer("16", "Tepšić", "6,8", "CC"), reportPlayer("23", "Maglica", "6,7", "DL")],
                [reportPlayer("32", "Mamić", "7,2", "GR")]
            ])
        },
        events: {
            home: [goalEvent("58", "R. Gonzalez", { assist: "Š. Butić" })],
            away: [goalEvent("59", "M. Vuk", { assist: "M. Jacob" }), goalEvent("86", "I. Tavares", { assist: "R. Brajković" })]
        },
        stats: reportStats([
            ["Posse", "47%", "53%"],
            ["Remates", "14", "15"],
            ["Remates à Baliza", "9", "4"],
            ["xG", "1,61", "1,30"],
            ["PADPAD", "18,09", "13,00"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "6", "3"],
            ["Passes Completados", "86%", "88%"],
            ["Cruzamentos Completados", "25%", "30%"],
            ["Faltas", "14", "6"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "131", "134"],
            ["Classificação Média", "6,8", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-02-14-hajduk-split-hnk-vukovar",
        date: "Sábado 14 de Fevereiro de 2026",
        stadium: "Poljud",
        weather: "Brisa",
        playerOfMatch: "Jakov Puljić",
        rating: "7,71",
        coaches: { home: "Gonzalo García", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,2", "AR")],
                [reportPlayer("9", "A. Rebić", "6,8", "EAI"), reportPlayer("11", "Šego", "6,7", "EAI")],
                [reportPlayer("23", "Krovinović", "6,9", "MC"), reportPlayer("21", "Pukstas", "7,0", "MC")],
                [reportPlayer("6", "Hugo G.", "6,7", "MD")],
                [reportPlayer("32", "Hrgović", "7,2", "AI"), reportPlayer("14", "Raçi", "7,2", "CC", true), reportPlayer("31", "Šarlija", "6,5", "CP"), reportPlayer("8", "Sigur", "6,3", "AI")],
                [reportPlayer("3", "Toni Silić", "6,3", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("10", "Gonzalez", "6,8", "AAE", true)],
                [reportPlayer("19", "Mioč", "6,7", "MO"), reportPlayer("22", "Santini", "6,5", "MO")],
                [reportPlayer("8", "Horvat", "6,2", "AI"), reportPlayer("41", "Šporn", "6,7", "MD"), reportPlayer("77", "Shabani", "7,0", "CJR"), reportPlayer("3", "Bosec", "7,1", "AI")],
                [reportPlayer("5", "Elez", "6,7", "CC"), reportPlayer("4", "Mitrović", "7,6", "CC"), reportPlayer("25", "Williams", "6,3", "CC")],
                [reportPlayer("42", "Đaković", "7,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("22", "R. Raçi", { assist: "Š. Hrgović" })],
            away: [goalEvent("23", "R. Gonzalez", { assist: "E. Shabani" }), goalEvent("80", "J. Puljić", { assist: "Š. Butić" })]
        },
        stats: reportStats([
            ["Posse", "52%", "48%"],
            ["Remates", "22", "9"],
            ["Remates à Baliza", "10", "4"],
            ["xG", "1,97", "0,84"],
            ["PADPAD", "26,39", "29,69"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "13", "5"],
            ["Passes Completados", "90%", "89%"],
            ["Cruzamentos Completados", "23%", "26%"],
            ["Faltas", "10", "7"],
            ["Cartões amarelos", "1", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "129", "131"],
            ["Classificação Média", "6,7", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-02-14-nk-lokomotiva-hnk-gorica",
        date: "Sábado 14 de Fevereiro de 2026",
        stadium: "Maksimir",
        weather: "Tempestuoso",
        playerOfMatch: "Jakov Filipović",
        rating: "8,46",
        coaches: { home: "Pai Natal", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("7", "Trajkovski", "6,1", "AAE"), reportPlayer("28", "Belcar", "6,6", "AvR")],
                [reportPlayer("26", "Rog", "6,0", "MC"), reportPlayer("21", "Wintle", "6,3", "CJA"), reportPlayer("16", "Dajčer", "7,0", "MC")],
                [reportPlayer("17", "Pajač", "6,5", "AI"), reportPlayer("23", "Vešović", "6,0", "AI")],
                [reportPlayer("4", "Sigali", "6,8", "DC"), reportPlayer("10", "Rui Pedro", "6,0", "CP"), reportPlayer("20", "Kolinger", "6,7", "CP")],
                [reportPlayer("12", "Posavec", "6,6", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,6", "Ex"), reportPlayer("10", "Pršir", "7,6", "ME"), reportPlayer("9", "Bogojević", "6,7", "Ex")],
                [reportPlayer("8", "Pozo", "6,5", "CJA"), reportPlayer("7", "Bakić", "7,8", "ME", true)],
                [reportPlayer("36", "Kavelj", "7,1", "MD")],
                [reportPlayer("19", "Čabraja", "6,9", "AI"), reportPlayer("4", "J. Filipović", "8,5", "DC", true), reportPlayer("5", "Leš", "7,2", "CP"), reportPlayer("22", "Trontelj", "6,8", "AI")],
                [reportPlayer("71", "Matijaš", "7,5", "GRC")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("22", "J. Filipović", { assist: "J. Pršir" }), goalEvent("64", "J. Filipović", { assist: "J. Pršir" }), goalEvent("71", "J. McCarthy", { ownGoal: true }), goalEvent("86", "O. Bakić", { assist: "T. Epailly" })]
        },
        stats: reportStats([
            ["Posse", "75%", "25%"],
            ["Remates", "16", "21"],
            ["Remates à Baliza", "7", "13"],
            ["xG", "1,21", "1,93"],
            ["PADPAD", "21,91", "60,89"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "9", "8"],
            ["Passes Completados", "91%", "82%"],
            ["Cruzamentos Completados", "21%", "40%"],
            ["Faltas", "9", "10"],
            ["Cartões amarelos", "2", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "112", "115"],
            ["Classificação Média", "6,4", "7,2"]
        ])
    },
    {
        fixtureKey: "2025-02-14-nk-slaven-belupo-nk-istra-1961",
        date: "Sábado 14 de Fevereiro de 2026",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Chema Núñez",
        rating: "8,34",
        coaches: { home: "Francisco Pinto", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "7,2", "AA", true), reportPlayer("90", "Nestorovski", "6,4", "AR")],
                [reportPlayer("28", "Šunta", "6,2", "EAI"), reportPlayer("57", "Ereiz", "6,1", "Ex")],
                [reportPlayer("10", "Caimacov", "6,3", "MD"), reportPlayer("8", "Mrowca", "6,9", "CJA")],
                [reportPlayer("14", "Jović", "6,2", "AI"), reportPlayer("6", "Božić", "6,7", "DC"), reportPlayer("4", "Kovačić", "6,8", "CC"), reportPlayer("5", "Katalinić", "6,7", "DL")],
                [reportPlayer("31", "Hadžikić", "6,8", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,4", "AC")],
                [reportPlayer("11", "Goričan", "6,4", "AA"), reportPlayer("21", "Núñez", "8,3", "MO", true), reportPlayer("17", "Frederiksen", "6,7", "EAI")],
                [reportPlayer("16", "O'Connor", "6,9", "MD"), reportPlayer("5", "Radošević", "7,0", "CJR", true)],
                [reportPlayer("26", "Heister", "7,2", "AI"), reportPlayer("4", "Johnston", "7,3", "CC"), reportPlayer("3", "Nasraoui", "6,9", "DC"), reportPlayer("97", "Kadušić", "6,7", "AI")],
                [reportPlayer("99", "Wrąbel", "6,7", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("67", "M. Dabro", { assist: "R. Kriwak" })],
            away: [goalEvent("30", "J. Radošević", { assist: "C. Núñez" }), goalEvent("45", "C. Núñez", { penalty: true }), goalEvent("73", "Ángel Pérez", { assist: "C. Núñez" })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "8", "13"],
            ["Remates à Baliza", "2", "9"],
            ["xG", "1,07", "2,42"],
            ["PADPAD", "21,25", "20,87"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "5", "8"],
            ["Passes Completados", "89%", "89%"],
            ["Cruzamentos Completados", "12%", "27%"],
            ["Faltas", "15", "10"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "129"],
            ["Classificação Média", "6,6", "7,0"]
        ])
    },
    {
        fixtureKey: "2025-02-14-nk-varazdin-dinamo-zagreb",
        date: "Sábado 14 de Fevereiro de 2026",
        stadium: "Anđelko Herjavec",
        weather: "Calmo",
        playerOfMatch: "Bruno Goda",
        rating: "8,00",
        coaches: { home: "João Nabais", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,6", "AR")],
                [reportPlayer("22", "Mamić", "7,5", "AI", true), reportPlayer("27", "Latković", "7,3", "SA", true), reportPlayer("18", "Gaprindashvili", "6,9", "Ex")],
                [reportPlayer("6", "Puclin", "6,6", "CJR"), reportPlayer("8", "Duvnjak", "6,5", "CJA")],
                [reportPlayer("12", "Bočkaj", "6,7", "AI"), reportPlayer("44", "Barać", "6,8", "DC"), reportPlayer("16", "Tepšić", "7,1", "CC"), reportPlayer("23", "Maglica", "6,7", "DL")],
                [reportPlayer("51", "Nemanja", "6,7", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,3", "AvR", true)],
                [reportPlayer("11", "Hoxha", "6,9", "EAI"), reportPlayer("30", "Topić", "6,6", "EAI")],
                [reportPlayer("14", "Soldo", "7,2", "MC"), reportPlayer("8", "Zajc", "6,5", "MO")],
                [reportPlayer("27", "Mišić", "6,7", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,9", "AI"), reportPlayer("26", "McKenna", "6,8", "CC"), reportPlayer("36", "Domínguez", "6,7", "CC"), reportPlayer("15", "Galešić", "6,5", "DL")],
                [reportPlayer("40", "Livaković", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("1", "A. Latković", { assist: "T. Gaprindashvili" }), goalEvent("47", "L. Mamić")],
            away: [goalEvent("4", "Dion Beljo", { assist: "M. Soldo" }), goalEvent("66", "B. Goda", { assist: "G. Vidović" })]
        },
        stats: reportStats([
            ["Posse", "52%", "48%"],
            ["Remates", "11", "20"],
            ["Remates à Baliza", "6", "7"],
            ["xG", "0,84", "2,19"],
            ["PADPAD", "19,10", "17,96"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "2", "10"],
            ["Passes Completados", "89%", "89%"],
            ["Cruzamentos Completados", "36%", "20%"],
            ["Faltas", "6", "9"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "119"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-02-14-nk-osijek-hnk-rijeka",
        date: "Sábado 14 de Fevereiro de 2026",
        stadium: "Opus Arena",
        weather: "Brisa",
        playerOfMatch: "Ante Matej Jurić",
        rating: "8,53",
        coaches: { home: "Gamy Chambelito", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("34", "Matković", "7,6", "AR")],
                [reportPlayer("23", "Vrbančić", "6,1", "MO"), reportPlayer("17", "Jakupović", "7,1", "MO", true)],
                [reportPlayer("20", "Gradel", "6,6", "MAI"), reportPlayer("6", "Fran Álvarez", "7,1", "MC"), reportPlayer("29", "Karačić", "7,0", "MAI")],
                [reportPlayer("25", "Børkeeiet", "6,5", "Pi")],
                [reportPlayer("26", "Jelenić", "7,0", "CP"), reportPlayer("33", "Hasić", "6,4", "CP"), reportPlayer("15", "Mersinaj", "6,7", "CP")],
                [reportPlayer("12", "D. Sousa", "6,6", "GR")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "8,5", "AR", true)],
                [reportPlayer("20", "Ndockyt", "6,4", "ME"), reportPlayer("10", "Fruk", "6,6", "MO")],
                [reportPlayer("14", "Gojak", "6,6", "MC")],
                [reportPlayer("21", "Lacoux", "6,5", "MD"), reportPlayer("11", "André", "6,9", "CJR")],
                [reportPlayer("24", "J. Silva", "6,4", "AI"), reportPlayer("53", "Emirhan", "6,7", "CC"), reportPlayer("6", "Radeljić", "7,1", "CC"), reportPlayer("22", "Oreč", "6,9", "AI")],
                [reportPlayer("1", "Letica", "7,0", "GR")]
            ])
        },
        events: {
            home: [goalEvent("61", "A. Jakupović", { assist: "A. Matković" })],
            away: [goalEvent("44", "A. Jurić"), goalEvent("48", "A. Jurić", { assist: "L. Schaub" })]
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "11", "14"],
            ["Remates à Baliza", "4", "8"],
            ["xG", "1,81", "1,28"],
            ["PADPAD", "15,95", "22,42"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "2", "10"],
            ["Passes Completados", "86%", "89%"],
            ["Cruzamentos Completados", "26%", "21%"],
            ["Faltas", "7", "17"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "120"],
            ["Classificação Média", "6,8", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-02-21-nk-istra-1961-nk-osijek",
        date: "Sábado 21 de Fevereiro de 2026",
        stadium: "Aldo Drosina",
        weather: "Tempestuoso",
        playerOfMatch: "Antonio Maurić",
        rating: "7,37",
        coaches: { home: "João Pedro Rato", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,5", "AC")],
                [reportPlayer("7", "Benny", "7,3", "AA"), reportPlayer("21", "Núñez", "6,6", "MO"), reportPlayer("17", "Frederiksen", "6,4", "EAI")],
                [reportPlayer("8", "Maurić", "7,4", "CJR"), reportPlayer("5", "Radošević", "7,1", "MD")],
                [reportPlayer("26", "Heister", "7,3", "AI", true), reportPlayer("4", "Johnston", "6,9", "CC"), reportPlayer("3", "Nasraoui", "7,3", "DC"), reportPlayer("97", "Kadušić", "7,0", "AI")],
                [reportPlayer("99", "Wrąbel", "7,2", "GRC")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("17", "Jakupović", "6,6", "AR")],
                [reportPlayer("3", "Barišić", "6,4", "MO"), reportPlayer("11", "Omerović", "6,5", "MO")],
                [reportPlayer("34", "Matković", "6,6", "MAI"), reportPlayer("6", "Fran Álvarez", "6,7", "MC"), reportPlayer("27", "Mikić", "6,5", "MAI")],
                [reportPlayer("23", "Vrbančić", "7,0", "Pi")],
                [reportPlayer("2", "Racovițan", "6,6", "CP"), reportPlayer("32", "Kata", "6,7", "CP"), reportPlayer("26", "Jelenić", "6,8", "CP")],
                [reportPlayer("31", "Malenica", "6,9", "GR")]
            ])
        },
        events: {
            home: [goalEvent("47", "M. Heister", { assist: "Benny" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "40%", "60%"],
            ["Remates", "10", "7"],
            ["Remates à Baliza", "3", "0"],
            ["xG", "0,83", "0,43"],
            ["PADPAD", "22,58", "19,72"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "5", "2"],
            ["Passes Completados", "90%", "91%"],
            ["Cruzamentos Completados", "15%", "21%"],
            ["Faltas", "5", "7"],
            ["Cartões amarelos", "3", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "121"],
            ["Classificação Média", "7,0", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-02-21-hnk-rijeka-nk-varazdin",
        date: "Sábado 21 de Fevereiro de 2026",
        stadium: "Rujevica",
        weather: "Tempestuoso",
        playerOfMatch: "Toni Fruk",
        rating: "8,17",
        coaches: { home: "Zép Jóbes", away: "João Nabais" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "7,2", "AR", true)],
                [reportPlayer("20", "Ndockyt", "8,1", "ME"), reportPlayer("10", "Fruk", "8,2", "MO", true)],
                [reportPlayer("14", "Gojak", "6,9", "MC")],
                [reportPlayer("21", "Lacoux", "7,9", "MD"), reportPlayer("11", "André", "7,6", "CJR")],
                [reportPlayer("24", "J. Silva", "7,1", "AI", true), reportPlayer("53", "Emirhan", "7,3", "CC"), reportPlayer("6", "Radeljić", "7,3", "CC"), reportPlayer("22", "Oreč", "7,7", "AI")],
                [reportPlayer("1", "Letica", "7,9", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,2", "AR")],
                [reportPlayer("9", "Jurić", "6,3", "AI"), reportPlayer("8", "Duvnjak", "6,2", "SA"), reportPlayer("14", "Ilinković", "6,6", "Ex")],
                [reportPlayer("27", "Latković", "6,3", "CJR"), reportPlayer("15", "Jacob", "6,2", "CJA")],
                [reportPlayer("23", "Maglica", "5,7", "AI"), reportPlayer("13", "Mladenovski", "6,2", "DC"), reportPlayer("44", "Barać", "6,2", "CC"), reportPlayer("16", "Tepšić", "6,5", "DL")],
                [reportPlayer("", "Novak", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("21", "J. Silva", { assist: "T. Lacoux" }), goalEvent("39", "A. Jurić", { assist: "André" }), goalEvent("67", "T. Fruk", { assist: "M. Ndockyt" }), goalEvent("74", "Tiago Dantas", { assist: "M. Ndockyt" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "58%", "42%"],
            ["Remates", "19", "4"],
            ["Remates à Baliza", "11", "0"],
            ["xG", "2,43", "0,49"],
            ["PADPAD", "18,40", "18,05"],
            ["Oportunidades Flagrantes", "3", "0"],
            ["Cantos", "6", "2"],
            ["Passes Completados", "92%", "86%"],
            ["Cruzamentos Completados", "15%", "14%"],
            ["Faltas", "7", "15"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "116", "113"],
            ["Classificação Média", "7,6", "6,3"]
        ])
    },
    {
        fixtureKey: "2025-02-21-nk-slaven-belupo-nk-lokomotiva",
        date: "Sábado 21 de Fevereiro de 2026",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Rui Pedro",
        rating: "8,57",
        coaches: { home: "Francisco Pinto", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("90", "Nestorovski", "7,1", "AA", true), reportPlayer("10", "Caimacov", "7,4", "AR", true)],
                [reportPlayer("28", "Šunta", "7,0", "EAI"), reportPlayer("11", "Mitrović", "6,9", "Ex")],
                [reportPlayer("8", "Mrowca", "7,0", "MD"), reportPlayer("14", "Jović", "7,0", "CJA")],
                [reportPlayer("3", "Jakir", "7,5", "All"), reportPlayer("6", "Božić", "6,9", "DC"), reportPlayer("2", "Međimorec", "7,4", "CC"), reportPlayer("18", "Krušelj", "6,8", "LI")],
                [reportPlayer("", "Rasulov", "6,2", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("10", "Rui Pedro", "8,6", "AvR", true), reportPlayer("15", "Stojaković", "6,3", "AC")],
                [reportPlayer("7", "Trajkovski", "6,6", "AI"), reportPlayer("26", "Rog", "6,3", "Ex")],
                [reportPlayer("21", "Wintle", "6,4", "MD"), reportPlayer("40", "McCarthy", "6,5", "MD")],
                [reportPlayer("17", "Pajač", "7,2", "AI"), reportPlayer("3", "Diop", "6,6", "CP"), reportPlayer("20", "Kolinger", "6,9", "CP"), reportPlayer("19", "Tabinas", "6,5", "AC")],
                [reportPlayer("", "Vozinha", "6,0", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("5", "M. Caimacov"), goalEvent("65", "I. Nestorovski", { assist: "S. Šunta" }), goalEvent("90+2", "M. Dabro", { assist: "I. Lepinjica" })],
            away: [goalEvent("82", "Rui Pedro", { assist: "A. Trajkovski" }), goalEvent("86", "Rui Pedro", { assist: "L. Belcar" })]
        },
        stats: reportStats([
            ["Posse", "55%", "45%"],
            ["Remates", "13", "15"],
            ["Remates à Baliza", "5", "7"],
            ["xG", "1,80", "0,66"],
            ["PADPAD", "21,84", "17,96"],
            ["Oportunidades Flagrantes", "3", "0"],
            ["Cantos", "3", "7"],
            ["Passes Completados", "87%", "83%"],
            ["Cruzamentos Completados", "8%", "15%"],
            ["Faltas", "0", "11"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "141", "147"],
            ["Classificação Média", "6,9", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-02-21-hnk-vukovar-hnk-gorica",
        date: "Sábado 21 de Fevereiro de 2026",
        stadium: "Gradski vrt",
        weather: "Brisa",
        playerOfMatch: "Robin Gonzalez",
        rating: "7,78",
        coaches: { home: "Hugo Macedo", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("21", "Puljić", "6,4", "AR")],
                [reportPlayer("8", "Horvat", "6,6", "AI"), reportPlayer("77", "Shabani", "6,8", "Ex")],
                [reportPlayer("15", "Gurlica", "6,4", "MC"), reportPlayer("9", "Kulušić", "6,6", "CJA")],
                [reportPlayer("10", "Gonzalez", "7,8", "CJR", true)],
                [reportPlayer("16", "Pavičić", "6,6", "AI"), reportPlayer("4", "Mitrović", "6,5", "DC"), reportPlayer("5", "Elez", "7,2", "DC"), reportPlayer("91", "Tićinović", "6,4", "DL")],
                [reportPlayer("42", "Đaković", "7,1", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("50", "Erceg", "7,6", "Ex"), reportPlayer("18", "Fiolić", "6,4", "ME"), reportPlayer("8", "Pozo", "7,2", "Ex")],
                [reportPlayer("10", "Pršir", "7,5", "CJA", true), reportPlayer("7", "Bakić", "6,6", "ME")],
                [reportPlayer("9", "Bogojević", "6,8", "CJR")],
                [reportPlayer("19", "Čabraja", "7,1", "AI"), reportPlayer("5", "Leš", "6,7", "DC"), reportPlayer("4", "J. Filipović", "7,1", "CP"), reportPlayer("22", "Trontelj", "6,8", "AI")],
                [reportPlayer("71", "Matijaš", "6,9", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("86", "R. Gonzalez")],
            away: [goalEvent("29", "J. Pršir", { assist: "A. Erceg" })]
        },
        stats: reportStats([
            ["Posse", "39%", "61%"],
            ["Remates", "15", "19"],
            ["Remates à Baliza", "5", "11"],
            ["xG", "1,90", "1,16"],
            ["PADPAD", "25,25", "18,65"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "8", "9"],
            ["Passes Completados", "86%", "93%"],
            ["Cruzamentos Completados", "23%", "14%"],
            ["Faltas", "8", "5"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "132", "135"],
            ["Classificação Média", "6,8", "7,0"]
        ])
    },
    {
        fixtureKey: "2025-02-22-dinamo-zagreb-hajduk-split",
        date: "Domingo 22 de Fevereiro de 2026",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Sergi Domínguez",
        rating: "7,41",
        coaches: { home: "M. Kovačević", away: "Gonzalo García" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,1", "AvR")],
                [reportPlayer("11", "Hoxha", "7,3", "EAI", true), reportPlayer("12", "Dobre", "7,2", "EAI")],
                [reportPlayer("14", "Soldo", "6,9", "ME"), reportPlayer("7", "Stojković", "7,0", "ME")],
                [reportPlayer("27", "Mišić", "6,6", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,4", "AI"), reportPlayer("26", "McKenna", "7,2", "CC"), reportPlayer("15", "Galešić", "7,1", "CC"), reportPlayer("36", "Domínguez", "7,4", "DL")],
                [reportPlayer("40", "Livaković", "7,2", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,8", "AR")],
                [reportPlayer("9", "A. Rebić", "6,2", "EAI"), reportPlayer("11", "Šego", "6,4", "EAI")],
                [reportPlayer("21", "Pukstas", "6,5", "MC"), reportPlayer("23", "Krovinović", "6,6", "MO")],
                [reportPlayer("6", "Hugo G.", "7,2", "MD")],
                [reportPlayer("32", "Hrgović", "6,4", "AI"), reportPlayer("14", "Raçi", "6,5", "CC"), reportPlayer("31", "Šarlija", "6,5", "CP"), reportPlayer("8", "Sigur", "7,0", "DL")],
                [reportPlayer("33", "Silić", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("39", "A. Hoxha", { assist: "Dion Beljo" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "47%", "53%"],
            ["Remates", "14", "10"],
            ["Remates à Baliza", "6", "3"],
            ["xG", "1,21", "0,57"],
            ["PADPAD", "15,22", "17,88"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "6", "4"],
            ["Passes Completados", "89%", "91%"],
            ["Cruzamentos Completados", "31%", "0%"],
            ["Faltas", "4", "10"],
            ["Cartões amarelos", "1", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "124"],
            ["Classificação Média", "7,0", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-02-28-hajduk-split-hnk-rijeka",
        date: "Sábado 28 de Fevereiro de 2026",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Jonathan Silva",
        rating: "8,69",
        coaches: { home: "Gonzalo García", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "7,2", "AR")],
                [reportPlayer("9", "A. Rebić", "6,4", "EAI"), reportPlayer("11", "Šego", "6,5", "EAI")],
                [reportPlayer("23", "Krovinović", "7,2", "MC", true), reportPlayer("21", "Pukstas", "6,5", "MC")],
                [reportPlayer("6", "Hugo G.", "6,6", "MD")],
                [reportPlayer("32", "Hrgović", "6,3", "AI"), reportPlayer("14", "Raçi", "6,6", "CC"), reportPlayer("31", "Šarlija", "6,4", "CP"), reportPlayer("8", "Sigur", "6,3", "AI")],
                [reportPlayer("33", "Silić", "6,5", "GR")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "8,1", "AR", true)],
                [reportPlayer("20", "Ndockyt", "8,4", "ME", true), reportPlayer("10", "Fruk", "7,5", "MO")],
                [reportPlayer("14", "Gojak", "6,7", "MC")],
                [reportPlayer("21", "Lacoux", "6,8", "MD"), reportPlayer("26", "Dantas", "6,9", "CJR")],
                [reportPlayer("24", "J. Silva", "8,7", "AI"), reportPlayer("53", "Emirhan", "6,6", "CC"), reportPlayer("6", "Radeljić", "6,8", "CC"), reportPlayer("22", "Oreč", "6,6", "AI")],
                [reportPlayer("1", "Letica", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("50", "F. Krovinović", { assist: "M. Livaja" }), goalEvent("74", "A. Pajaziti", { assist: "A. Kalik" })],
            away: [goalEvent("6", "M. Ndockyt", { assist: "A. Jurić" }), goalEvent("45+1", "M. Ndockyt", { assist: "J. Silva" }), goalEvent("53", "A. Jurić", { assist: "T. Fruk" }), goalEvent("89", "K. Andrade", { assist: "J. Silva" })]
        },
        stats: reportStats([
            ["Posse", "48%", "52%"],
            ["Remates", "9", "13"],
            ["Remates à Baliza", "6", "9"],
            ["xG", "1,12", "2,08"],
            ["PADPAD", "18,04", "18,67"],
            ["Oportunidades Flagrantes", "1", "3"],
            ["Cantos", "5", "1"],
            ["Passes Completados", "91%", "92%"],
            ["Cruzamentos Completados", "13%", "28%"],
            ["Faltas", "10", "7"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "124"],
            ["Classificação Média", "6,6", "7,2"]
        ])
    },
    {
        fixtureKey: "2025-02-28-nk-lokomotiva-hnk-vukovar",
        date: "Sábado 28 de Fevereiro de 2026",
        stadium: "Maksimir",
        weather: "Tempestuoso",
        playerOfMatch: "Eniss Shabani",
        rating: "8,56",
        coaches: { home: "Pai Natal", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("10", "Rui Pedro", "6,1", "AvR"), reportPlayer("62", "I. Sabra", "6,2", "AAE")],
                [reportPlayer("80", "Redmond", "6,3", "EAI"), reportPlayer("27", "Heiðarsson", "6,4", "AI")],
                [reportPlayer("26", "Rog", "6,7", "CJR"), reportPlayer("40", "McCarthy", "6,4", "MD")],
                [reportPlayer("17", "Pajač", "6,7", "DL"), reportPlayer("3", "Diop", "6,5", "CP"), reportPlayer("20", "Kolinger", "6,3", "CP"), reportPlayer("19", "Tabinas", "6,2", "AI")],
                [reportPlayer("", "Vozinha", "7,1", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("22", "Santini", "6,5", "AR")],
                [reportPlayer("8", "Horvat", "8,1", "AI"), reportPlayer("36", "Butić", "6,9", "Ex")],
                [reportPlayer("19", "Mioč", "7,0", "MC"), reportPlayer("77", "Shabani", "8,6", "CJA")],
                [reportPlayer("41", "Šporn", "7,1", "CJR")],
                [reportPlayer("25", "Williams", "6,5", "AI"), reportPlayer("5", "Elez", "8,3", "DC"), reportPlayer("4", "Mitrović", "7,7", "DC"), reportPlayer("3", "Bosec", "7,8", "DL")],
                [reportPlayer("42", "Đaković", "7,3", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("15", "P. Horvat"), goalEvent("81", "T. Mrkonjić", { assist: "L. Kulušić" }), goalEvent("84", "E. Shabani", { assist: "M. Čuić" }), goalEvent("89", "E. Shabani", { assist: "R. Gonzalez" })]
        },
        stats: reportStats([
            ["Posse", "40%", "60%"],
            ["Remates", "6", "23"],
            ["Remates à Baliza", "4", "15"],
            ["xG", "0,24", "3,95"],
            ["PADPAD", "20,94", "12,07"],
            ["Oportunidades Flagrantes", "0", "3"],
            ["Cantos", "4", "13"],
            ["Passes Completados", "81%", "86%"],
            ["Cruzamentos Completados", "21%", "22%"],
            ["Faltas", "9", "7"],
            ["Cartões amarelos", "2", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "125"],
            ["Classificação Média", "6,4", "7,5"]
        ])
    },
    {
        fixtureKey: "2025-02-28-nk-osijek-nk-slaven-belupo",
        date: "Sábado 28 de Fevereiro de 2026",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Diogo Sousa",
        rating: "7,67",
        coaches: { home: "Gamy Chambelito", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("34", "Matković", "7,0", "AR")],
                [reportPlayer("23", "Vrbančić", "6,7", "MO"), reportPlayer("17", "Jakupović", "6,3", "MO")],
                [reportPlayer("38", "Čolina", "7,0", "MAI"), reportPlayer("6", "Fran Álvar...", "7,1", "MC"), reportPlayer("29", "Karačić", "7,3", "MAI")],
                [reportPlayer("25", "Bærkeeiet", "7,1", "Pi")],
                [reportPlayer("26", "Jelenić", "7,5", "CP"), reportPlayer("33", "Hasić", "6,5", "CP"), reportPlayer("2", "Racovițan", "7,2", "CP")],
                [reportPlayer("12", "D. Sousa", "7,7", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "5,9", "AA"), reportPlayer("25", "Kriwak", "6,3", "AR")],
                [reportPlayer("28", "Šunta", "6,5", "EAI"), reportPlayer("11", "Mitrović", "6,6", "Ex")],
                [reportPlayer("8", "Mrowca", "6,8", "MD"), reportPlayer("10", "Caimacov", "6,5", "CJA")],
                [reportPlayer("14", "Jović", "6,5", "All"), reportPlayer("4", "Kovačić", "6,2", "DC"), reportPlayer("6", "Božić", "6,4", "CC"), reportPlayer("5", "Katalinić", "6,5", "LI")],
                [reportPlayer("31", "Hadžikić", "6,7", "GR")]
            ])
        },
        events: {
            home: [goalEvent("24", "A. Matković", { assist: "F. Karačić" }), goalEvent("75", "Diogo Sousa", { penalty: true })],
            away: []
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "14", "6"],
            ["Remates à Baliza", "9", "4"],
            ["xG", "2,10", "0,63"],
            ["PADPAD", "20,94", "17,75"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "6", "6"],
            ["Passes Completados", "86%", "86%"],
            ["Cruzamentos Completados", "20%", "13%"],
            ["Faltas", "8", "12"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "115"],
            ["Classificação Média", "7,0", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-02-28-nk-varazdin-nk-istra-1961",
        date: "Sábado 28 de Fevereiro de 2026",
        stadium: "Anđelko Herjavec",
        weather: "Calmo",
        playerOfMatch: "Aleksa Latković",
        rating: "8,89",
        coaches: { home: "João Nabais", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Jurić", "6,4", "AR")],
                [reportPlayer("22", "Mamić", "6,9", "AI"), reportPlayer("27", "Latković", "8,9", "SA"), reportPlayer("11", "Brajković", "6,3", "Ex")],
                [reportPlayer("6", "Puclin", "6,5", "CJR"), reportPlayer("8", "Duvnjak", "6,4", "CJA")],
                [reportPlayer("15", "Jacob", "6,8", "AI"), reportPlayer("44", "Barać", "7,0", "DC"), reportPlayer("13", "Mladenovski", "6,5", "CC"), reportPlayer("23", "Maglica", "6,6", "DL")],
                [reportPlayer("33", "Silić", "6,7", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "8,1", "AC")],
                [reportPlayer("11", "Goričan", "6,3", "AA"), reportPlayer("21", "Núñez", "6,3", "MO"), reportPlayer("7", "Benny", "7,5", "EAI")],
                [reportPlayer("16", "O'Connor", "6,4", "CJR"), reportPlayer("5", "Radošević", "6,6", "MD")],
                [reportPlayer("26", "Heister", "6,7", "AI"), reportPlayer("4", "Johnston", "7,2", "CC"), reportPlayer("3", "Nasraoui", "6,9", "DC"), reportPlayer("97", "Kadušić", "6,7", "AI")],
                [reportPlayer("99", "Wrąbel", "6,9", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("22", "L. Mamić", { assist: "A. Latković" }), goalEvent("34", "M. Barać", { assist: "A. Latković" }), goalEvent("85", "I. Mamut", { assist: "A. Latković" })],
            away: [goalEvent("72", "A. Obando", { assist: "E. Frederiksen" }), goalEvent("82", "S. Prevljak", { assist: "Benny" }), goalEvent("84", "S. Lončar", { assist: "S. Prevljak" })]
        },
        stats: reportStats([
            ["Posse", "29%", "71%"],
            ["Remates", "18", "12"],
            ["Remates à Baliza", "11", "9"],
            ["xG", "2,43", "1,72"],
            ["PADPAD", "24,12", "12,24"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "9", "9"],
            ["Passes Completados", "84%", "92%"],
            ["Cruzamentos Completados", "40%", "15%"],
            ["Faltas", "6", "6"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "119"],
            ["Classificação Média", "6,8", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-03-01-hnk-gorica-dinamo-zagreb",
        date: "Domingo 1 de Março de 2026",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Jurica Pršir",
        rating: "9,76",
        coaches: { home: "Miguel Cardoso", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "7,8", "Ex"), reportPlayer("10", "Pršir", "9,8", "ME"), reportPlayer("9", "Bogojević", "6,2", "Ex")],
                [reportPlayer("8", "Pozo", "7,3", "CJA"), reportPlayer("7", "Bakić", "7,1", "ME")],
                [reportPlayer("36", "Kavelj", "6,5", "CJR")],
                [reportPlayer("19", "Čabraja", "6,3", "AI"), reportPlayer("45", "Perić", "6,9", "DC"), reportPlayer("5", "Leš", "6,5", "CP"), reportPlayer("22", "Trontelj", "6,3", "AI")],
                [reportPlayer("71", "Matijaš", "7,1", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("30", "Topić", "7,2", "AAE")],
                [reportPlayer("10", "Vidović", "6,6", "EAI"), reportPlayer("12", "Dobre", "6,5", "EAI")],
                [reportPlayer("14", "Soldo", "7,2", "ME"), reportPlayer("7", "Stojković", "6,3", "ME")],
                [reportPlayer("37", "Radoš", "6,6", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,9", "AI"), reportPlayer("26", "McKenna", "6,6", "CC"), reportPlayer("15", "Galešić", "6,6", "CC"), reportPlayer("36", "Domínguez", "6,7", "DL")],
                [reportPlayer("40", "Livaković", "6,4", "GR")]
            ])
        },
        events: {
            home: [goalEvent("46", "J. Pršir", { assist: "O. Bakić" }), goalEvent("65", "J. Pršir", { assist: "L. Vrzić" }), goalEvent("70", "J. Pršir", { assist: "I. Pozo" })],
            away: [goalEvent("6", "F. Topić", { assist: "M. Soldo" })]
        },
        stats: reportStats([
            ["Posse", "45%", "55%"],
            ["Remates", "9", "16"],
            ["Remates à Baliza", "5", "9"],
            ["xG", "1,67", "1,12"],
            ["PADPAD", "19,87", "18,26"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "2", "8"],
            ["Passes Completados", "86%", "89%"],
            ["Cruzamentos Completados", "13%", "20%"],
            ["Faltas", "11", "3"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "126", "126"],
            ["Classificação Média", "7,1", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-03-04-nk-istra-1961-nk-slaven-belupo",
        date: "Quarta-feira 4 de Março de 2026",
        stadium: "Aldo Drosina",
        weather: "Brisa",
        playerOfMatch: "Smail Prevljak",
        rating: "10,00",
        coaches: { home: "João Pedro Rato", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "10,0", "AC", true)],
                [reportPlayer("7", "Benny", "6,6", "AA"), reportPlayer("21", "Núñez", "8,6", "MO", true), reportPlayer("17", "Frederiksen", "8,0", "EAI", true)],
                [reportPlayer("16", "O'Connor", "6,9", "MD"), reportPlayer("5", "Radošević", "6,7", "CJR")],
                [reportPlayer("22", "Can Coşkun", "6,9", "AI"), reportPlayer("4", "Johnston", "6,6", "CC"), reportPlayer("3", "Nasraoui", "7,1", "DC"), reportPlayer("97", "Kadušić", "6,8", "AI")],
                [reportPlayer("99", "Wrąbel", "6,4", "GRC")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("25", "Kriwak", "6,3", "AA"), reportPlayer("15", "Ćubelić", "6,6", "AR", true)],
                [reportPlayer("10", "Wolski", "7,0", "EAI", true), reportPlayer("11", "Mitrović", "7,1", "Ex")],
                [reportPlayer("23", "Lepinjica", "6,8", "MD"), reportPlayer("8", "Mrowca", "6,4", "CJA")],
                [reportPlayer("3", "Jakir", "6,3", "AI"), reportPlayer("4", "Kovačić", "6,5", "DC"), reportPlayer("6", "Božić", "6,3", "CC"), reportPlayer("5", "Katalinić", "6,8", "DL")],
                [reportPlayer("", "Rasulov", "5,9", "GR")]
            ])
        },
        events: {
            home: [goalEvent("13", "C. Núñez", { assist: "S. Prevljak" }), goalEvent("45+1", "E. Frederiksen", { assist: "S. Prevljak" }), goalEvent("48", "C. Núñez", { assist: "S. Prevljak" }), goalEvent("63", "S. Prevljak", { assist: "E. Frederiksen" })],
            away: [goalEvent("57", "I. Ćubelić", { assist: "J. Mitrović" }), goalEvent("72", "R. Wolski", { assist: "L. Žuta" })]
        },
        stats: reportStats([
            ["Posse", "57%", "43%"],
            ["Remates", "14", "11"],
            ["Remates à Baliza", "5", "5"],
            ["xG", "2,38", "1,07"],
            ["PADPAD", "18,39", "24,47"],
            ["Oportunidades Flagrantes", "3", "1"],
            ["Cantos", "2", "6"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "23%", "19%"],
            ["Faltas", "10", "14"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "118", "116"],
            ["Classificação Média", "7,2", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-03-04-hnk-rijeka-nk-osijek",
        date: "Quarta-feira 4 de Março de 2026",
        stadium: "Rujevica",
        weather: "Tempestuoso",
        playerOfMatch: "Luka Vrbančić",
        rating: "8,13",
        coaches: { home: "Zép Jóbes", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "7,5", "AR", true)],
                [reportPlayer("20", "Ndockyt", "7,0", "ME"), reportPlayer("10", "Fruk", "6,7", "MO")],
                [reportPlayer("17", "Ntcham", "6,5", "MC")],
                [reportPlayer("15", "Martínez T.", "6,4", "MD"), reportPlayer("26", "Dantas", "6,7", "CJR")],
                [reportPlayer("24", "J. Silva", "7,7", "AI", true), reportPlayer("53", "Emirhan", "6,9", "CC"), reportPlayer("6", "Radeljić", "6,5", "CC"), reportPlayer("22", "Oreč", "7,1", "AI")],
                [reportPlayer("1", "Letica", "6,9", "GR")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("34", "Matković", "6,9", "AR", true)],
                [reportPlayer("23", "Vrbančić", "8,1", "MO"), reportPlayer("17", "Jakupović", "6,5", "MO")],
                [reportPlayer("38", "Čolina", "7,8", "MAI", true), reportPlayer("6", "Fran Álvarez", "6,5", "MC"), reportPlayer("29", "Karačić", "6,8", "MAI")],
                [reportPlayer("25", "Borkeeiet", "6,4", "PI")],
                [reportPlayer("26", "Jelenić", "6,9", "CP"), reportPlayer("33", "Hasić", "6,6", "CP"), reportPlayer("2", "Racovițan", "6,4", "CP")],
                [reportPlayer("12", "D. Sousa", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("3", "A. Jurić", { assist: "J. Silva" }), goalEvent("69", "A. Gojak", { assist: "T. Ambrose" })],
            away: [goalEvent("45+1", "A. Matković", { assist: "L. Vrbančić" }), goalEvent("66", "D. Čolina", { assist: "L. Vrbančić" })]
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "20", "8"],
            ["Remates à Baliza", "10", "5"],
            ["xG", "2,51", "1,47"],
            ["PADPAD", "18,53", "17,19"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "13", "3"],
            ["Passes Completados", "86%", "85%"],
            ["Cruzamentos Completados", "35%", "22%"],
            ["Faltas", "11", "13"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "129", "132"],
            ["Classificação Média", "6,9", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-03-04-hnk-vukovar-hajduk-split",
        date: "Quarta-feira 4 de Março de 2026",
        stadium: "Gradski vrt",
        weather: "Calmo",
        playerOfMatch: "Ron Raçi",
        rating: "7,43",
        coaches: { home: "Hugo Macedo", away: "J. Plíšek" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("8", "Horvat", "6,4", "AAE")],
                [reportPlayer("19", "Mioč", "7,0", "MO"), reportPlayer("10", "Mrkonjić", "6,4", "MO")],
                [reportPlayer("36", "Butić", "7,3", "AI"), reportPlayer("41", "Šporn", "6,8", "MD"), reportPlayer("77", "Shabani", "6,7", "CJR"), reportPlayer("3", "Bosec", "7,1", "AI")],
                [reportPlayer("5", "Elez", "7,0", "CC"), reportPlayer("4", "Mitrović", "7,0", "CC"), reportPlayer("25", "Tićinović", "7,0", "CC")],
                [reportPlayer("42", "Đaković", "7,2", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("34", "Durdov", "6,4", "AAE")],
                [reportPlayer("11", "Šego", "6,6", "Ex"), reportPlayer("21", "Pukstas", "6,4", "SA"), reportPlayer("30", "Almena", "6,5", "EAI")],
                [reportPlayer("23", "Krovinović", "6,9", "CJR"), reportPlayer("8", "Sigur", "6,7", "MD")],
                [reportPlayer("3", "Auer", "7,0", "AI"), reportPlayer("14", "Raçi", "7,4", "CC"), reportPlayer("5", "Skelin", "6,9", "CC"), reportPlayer("38", "Hodak", "6,5", "AI")],
                [reportPlayer("33", "Silić", "7,1", "GR")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "11", "9"],
            ["Remates à Baliza", "4", "2"],
            ["xG", "1,03", "0,37"],
            ["PADPAD", "17,29", "17,00"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "6", "3"],
            ["Passes Completados", "91%", "90%"],
            ["Cruzamentos Completados", "10%", "20%"],
            ["Faltas", "11", "8"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "125", "125"],
            ["Classificação Média", "6,9", "6,8"]
        ])
    },
    {
        fixtureKey: "2025-03-07-dinamo-zagreb-hnk-vukovar",
        date: "Sábado 7 de Março de 2026",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Arbër Hoxha",
        rating: "7,55",
        coaches: { home: "M. Kovačević", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,2", "AvR", true)],
                [reportPlayer("11", "Hoxha", "7,6", "EAI", true), reportPlayer("12", "Dobre", "6,8", "EAI")],
                [reportPlayer("14", "Soldo", "7,5", "MC", true), reportPlayer("8", "Zajc", "7,0", "MO")],
                [reportPlayer("27", "Mišić", "6,6", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,9", "AI"), reportPlayer("26", "McKenna", "7,1", "CC"), reportPlayer("36", "Domínguez", "7,0", "CC"), reportPlayer("15", "Galešić", "6,8", "DL")],
                [reportPlayer("40", "Livaković", "7,4", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("8", "Horvat", "6,4", "AAE")],
                [reportPlayer("43", "Čuić", "6,5", "MO"), reportPlayer("22", "Santini", "6,3", "MO")],
                [reportPlayer("36", "Butić", "6,6", "AI"), reportPlayer("41", "Šporn", "6,5", "MD"), reportPlayer("10", "Gonzalez", "6,1", "CJR"), reportPlayer("3", "Bosec", "6,3", "AI")],
                [reportPlayer("5", "Elez", "6,4", "CC"), reportPlayer("4", "Mitrović", "6,4", "CC"), reportPlayer("25", "Tićinović", "6,0", "CC")],
                [reportPlayer("42", "Đaković", "7,2", "GR")]
            ])
        },
        events: {
            home: [goalEvent("40", "M. Soldo", { assist: "A. Hoxha" }), goalEvent("69", "Dion Beljo", { penalty: true }), goalEvent("73", "F. Topić", { assist: "M. Zajc" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "54%", "46%"],
            ["Remates", "16", "7"],
            ["Remates à Baliza", "11", "4"],
            ["xG", "2,30", "0,87"],
            ["PADPAD", "14,68", "22,82"],
            ["Oportunidades Flagrantes", "4", "1"],
            ["Cantos", "8", "6"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "34%", "8%"],
            ["Faltas", "12", "12"],
            ["Cartões amarelos", "3", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "124"],
            ["Classificação Média", "7,1", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-03-07-nk-istra-1961-hajduk-split",
        date: "Sábado 7 de Março de 2026",
        stadium: "Aldo Drosina",
        weather: "Brisa",
        playerOfMatch: "Jakub Wrąbel",
        rating: "7,87",
        coaches: { home: "João Pedro Rato", away: "J. Plíšek" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Obando", "6,3", "AC")],
                [reportPlayer("7", "Benny", "7,3", "AA", true), reportPlayer("21", "Núñez", "7,0", "MO"), reportPlayer("17", "Frederiksen", "6,7", "EAI")],
                [reportPlayer("16", "O'Connor", "7,1", "MD"), reportPlayer("5", "Radošević", "6,7", "CJR")],
                [reportPlayer("97", "Kadušić", "6,8", "AI"), reportPlayer("4", "Johnston", "7,4", "CC"), reportPlayer("3", "Nasraoui", "7,7", "DC"), reportPlayer("2", "Ángel Pérez", "7,8", "AI", true)],
                [reportPlayer("99", "Wrąbel", "7,9", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("11", "Šego", "6,3", "AAE")],
                [reportPlayer("9", "A. Rebić", "6,3", "CJA"), reportPlayer("10", "Livaja", "6,8", "MO"), reportPlayer("30", "Almena", "6,6", "EAI")],
                [reportPlayer("23", "Krovinović", "6,8", "CJR"), reportPlayer("6", "Hugo G.", "6,9", "MD")],
                [reportPlayer("32", "Hrgović", "6,3", "AI"), reportPlayer("31", "Šarlija", "6,7", "CP"), reportPlayer("15", "Marešić", "6,8", "CC"), reportPlayer("38", "Hodak", "6,7", "DL")],
                [reportPlayer("33", "Silić", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("21", "Benny"), goalEvent("72", "Ángel Pérez", { assist: "Can Coşkun" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "61%", "39%"],
            ["Remates", "17", "7"],
            ["Remates à Baliza", "8", "3"],
            ["xG", "1,52", "0,90"],
            ["PADPAD", "21,78", "23,35"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "7", "8"],
            ["Passes Completados", "89%", "86%"],
            ["Cruzamentos Completados", "26%", "11%"],
            ["Faltas", "16", "5"],
            ["Cartões amarelos", "3", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "130", "128"],
            ["Classificação Média", "7,2", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-03-07-nk-osijek-nk-lokomotiva",
        date: "Sábado 7 de Março de 2026",
        stadium: "Opus Arena",
        weather: "Temporal",
        playerOfMatch: "Diogo Sousa",
        rating: "8,00",
        coaches: { home: "Gamy Chambelito", away: "Pai Natal" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("34", "Matković", "7,0", "AR")],
                [reportPlayer("23", "Vrbančić", "6,4", "MO"), reportPlayer("17", "Jakupović", "6,6", "MO", true)],
                [reportPlayer("38", "Čolina", "6,7", "MAI"), reportPlayer("6", "Fran Álvarez", "6,7", "MC"), reportPlayer("29", "Karačić", "6,6", "MAI")],
                [reportPlayer("25", "Borkeeiet", "7,0", "PI")],
                [reportPlayer("26", "Jelenić", "7,3", "CP"), reportPlayer("33", "Hasić", "6,6", "CP"), reportPlayer("2", "Racovițan", "7,1", "CP")],
                [reportPlayer("12", "D. Sousa", "8,0", "GR")]
            ]),
            away: reportFormation("3-5-2", [
                [reportPlayer("15", "Stojaković", "6,6", "AAE"), reportPlayer("10", "Rui Pedro", "6,4", "AvR")],
                [reportPlayer("26", "Rog", "6,7", "MC"), reportPlayer("28", "Belcar", "6,4", "CJA"), reportPlayer("21", "Wintle", "6,5", "MC")],
                [reportPlayer("17", "Pajač", "6,5", "AI"), reportPlayer("19", "Tabinas", "6,7", "AI")],
                [reportPlayer("20", "Kolinger", "6,5", "DC"), reportPlayer("16", "Zebić", "6,4", "CP"), reportPlayer("3", "Diop", "6,7", "CP")],
                [reportPlayer("12", "Posavec", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("44", "A. Jakupović", { penalty: true })],
            away: []
        },
        stats: reportStats([
            ["Posse", "60%", "40%"],
            ["Remates", "8", "11"],
            ["Remates à Baliza", "2", "4"],
            ["xG", "1,50", "1,27"],
            ["PADPAD", "14,62", "18,58"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "2", "6"],
            ["Passes Completados", "88%", "86%"],
            ["Cruzamentos Completados", "0%", "20%"],
            ["Faltas", "14", "19"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "120"],
            ["Classificação Média", "6,9", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-03-07-hnk-rijeka-hnk-gorica",
        date: "Sábado 7 de Março de 2026",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Jurica Pršir",
        rating: "8,15",
        coaches: { home: "Zép Jóbes", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "6,5", "AR")],
                [reportPlayer("20", "Ndockyt", "6,7", "ME", true), reportPlayer("14", "Gojak", "6,7", "MO")],
                [reportPlayer("17", "Ntcham", "6,6", "MC")],
                [reportPlayer("21", "Lacoux", "7,5", "MD"), reportPlayer("26", "Dantas", "7,4", "CJR", true)],
                [reportPlayer("24", "J. Silva", "7,3", "AI"), reportPlayer("53", "Emirhan", "6,7", "CC"), reportPlayer("6", "Radeljić", "7,1", "CC"), reportPlayer("22", "Oreč", "7,1", "AI")],
                [reportPlayer("1", "Letica", "6,2", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("64", "Epailly", "6,4", "Ex"), reportPlayer("20", "Vrzić", "6,2", "ME"), reportPlayer("9", "Bogojević", "6,3", "Ex")],
                [reportPlayer("10", "Pršir", "8,2", "CJA", true), reportPlayer("8", "Pozo", "6,6", "ME")],
                [reportPlayer("7", "Bakić", "7,6", "MD", true)],
                [reportPlayer("19", "Čabraja", "6,3", "AI"), reportPlayer("45", "Perić", "6,4", "DC"), reportPlayer("5", "Leš", "6,4", "CP"), reportPlayer("22", "Trontelj", "6,3", "AI")],
                [reportPlayer("71", "Matijaš", "6,2", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("46", "M. Ndockyt", { assist: "T. Lacoux" }), goalEvent("84", "Tiago Dantas", { penalty: true })],
            away: [goalEvent("86", "J. Pršir", { assist: "O. Bakić" }), goalEvent("90", "J. Pršir", { assist: "O. Bakić" })]
        },
        stats: reportStats([
            ["Posse", "74%", "26%"],
            ["Remates", "13", "14"],
            ["Remates à Baliza", "6", "5"],
            ["xG", "1,75", "1,13"],
            ["PADPAD", "8,21", "28,00"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "7", "3"],
            ["Passes Completados", "92%", "77%"],
            ["Cruzamentos Completados", "10%", "38%"],
            ["Faltas", "10", "16"],
            ["Cartões amarelos", "0", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "119"],
            ["Classificação Média", "6,8", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-03-07-nk-slaven-belupo-nk-varazdin",
        date: "Sábado 7 de Março de 2026",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Brisa",
        playerOfMatch: "Ivan Mamut",
        rating: "9,94",
        coaches: { home: "Francisco Pinto", away: "João Nabais" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "6,4", "AA"), reportPlayer("25", "Kriwak", "6,3", "AR")],
                [reportPlayer("15", "Ćubelić", "6,2", "EAI"), reportPlayer("11", "Mitrović", "6,5", "Ex")],
                [reportPlayer("8", "Mrowca", "6,5", "MD"), reportPlayer("23", "Lepinjica", "6,4", "CJA")],
                [reportPlayer("35", "Žuta", "6,2", "AI"), reportPlayer("4", "Kovačić", "6,5", "DC"), reportPlayer("6", "Božić", "6,6", "CC"), reportPlayer("18", "Krušelj", "6,1", "DL")],
                [reportPlayer("31", "Hadžikić", "7,1", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "9,9", "AR", true)],
                [reportPlayer("22", "Mamić", "6,5", "AI"), reportPlayer("27", "Latković", "6,4", "SA"), reportPlayer("18", "Gaprindashvili", "8,3", "Ex", true)],
                [reportPlayer("24", "Marina", "7,0", "CJR"), reportPlayer("8", "Duvnjak", "7,1", "CJA")],
                [reportPlayer("12", "Bočkaj", "8,5", "AI", true), reportPlayer("44", "Barać", "7,1", "DC"), reportPlayer("16", "Tepšić", "6,8", "CC"), reportPlayer("4", "Škaričić", "6,9", "DL")],
                [reportPlayer("33", "Silić", "7,0", "GR")]
            ])
        },
        events: {
            home: [goalEvent("54", "I. Nestorovski", { penalty: true })],
            away: [
                goalEvent("29", "I. Mamut", { assist: "T. Gaprindashvili" }),
                goalEvent("41", "I. Mamut", { assist: "P. Bočkaj" }),
                goalEvent("47", "I. Mamut", { penalty: true }),
                goalEvent("81", "D. Puclin", { assist: "M. Vuk" }),
                goalEvent("85", "M. Vuk", { assist: "I. Mamut" }),
                goalEvent("88", "R. Brajković", { assist: "M. Vuk" })
            ]
        },
        stats: reportStats([
            ["Posse", "48%", "52%"],
            ["Remates", "7", "24"],
            ["Remates à Baliza", "2", "14"],
            ["xG", "1,65", "3,84"],
            ["PADPAD", "18,89", "17,90"],
            ["Oportunidades Flagrantes", "2", "3"],
            ["Cantos", "4", "8"],
            ["Passes Completados", "86%", "86%"],
            ["Cruzamentos Completados", "4%", "33%"],
            ["Faltas", "15", "9"],
            ["Cartões amarelos", "3", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "117", "123"],
            ["Classificação Média", "6,5", "7,5"]
        ])
    },
    {
        fixtureKey: "2025-03-14-hnk-gorica-nk-istra-1961",
        date: "Sábado 14 de Março de 2026",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Tempestuoso",
        playerOfMatch: "George Johnston",
        rating: "7,39",
        coaches: { home: "Miguel Cardoso", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("64", "Epailly", "6,1", "Ex"), reportPlayer("10", "Pršir", "6,2", "ME"), reportPlayer("11", "Sule", "6,3", "Ex")],
                [reportPlayer("66", "Frigan", "6,4", "CJA"), reportPlayer("36", "Kavelj", "6,6", "ME")],
                [reportPlayer("7", "Bakić", "6,6", "MD")],
                [reportPlayer("19", "Čabraja", "6,7", "AI"), reportPlayer("45", "Perić", "7,0", "DC"), reportPlayer("5", "Leš", "7,1", "CP"), reportPlayer("22", "Trontelj", "6,6", "AI")],
                [reportPlayer("71", "Matijaš", "7,1", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Obando", "6,5", "AC")],
                [reportPlayer("7", "Benny", "6,3", "AA"), reportPlayer("21", "Núñez", "7,2", "MO"), reportPlayer("17", "Frederiksen", "6,5", "EAI")],
                [reportPlayer("6", "Liber", "6,8", "MD"), reportPlayer("16", "O'Connor", "7,4", "CJR")],
                [reportPlayer("22", "Can Coşkun", "6,9", "AI"), reportPlayer("4", "Johnston", "7,4", "CC"), reportPlayer("3", "Nasraoui", "7,0", "DC"), reportPlayer("97", "Kadušić", "6,5", "AI")],
                [reportPlayer("99", "Wrąbel", "7,4", "GRC")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "33%", "67%"],
            ["Remates", "7", "12"],
            ["Remates à Baliza", "4", "4"],
            ["xG", "0,68", "0,98"],
            ["PADPAD", "53,60", "18,80"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "6", "3"],
            ["Passes Completados", "87%", "92%"],
            ["Cruzamentos Completados", "13%", "25%"],
            ["Faltas", "10", "9"],
            ["Cartões amarelos", "3", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "118"],
            ["Classificação Média", "6,7", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-03-14-hajduk-split-nk-slaven-belupo",
        date: "Sábado 14 de Março de 2026",
        stadium: "Poljud",
        weather: "Brisa",
        playerOfMatch: "Anthony Kalik",
        rating: "7,99",
        coaches: { home: "J. Plíšek", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("11", "Šego", "7,0", "AAE", true)],
                [reportPlayer("9", "A. Rebić", "7,0", "CJA"), reportPlayer("10", "Livaja", "6,7", "MO"), reportPlayer("30", "Almena", "6,7", "AA")],
                [reportPlayer("23", "Krovinović", "6,7", "CJR"), reportPlayer("6", "Hugo G.", "7,5", "MD", true)],
                [reportPlayer("32", "Hrgović", "7,3", "AI"), reportPlayer("14", "Raçi", "7,0", "CC"), reportPlayer("15", "Marešić", "6,5", "CC"), reportPlayer("8", "Sigur", "6,7", "AIl")],
                [reportPlayer("33", "Silić", "7,2", "GR")]
            ]),
            away: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "6,3", "AA"), reportPlayer("25", "Kriwak", "7,4", "AR", true)],
                [reportPlayer("15", "Ćubelić", "6,3", "EAI"), reportPlayer("11", "Mitrović", "6,1", "Ex")],
                [reportPlayer("8", "Mrowca", "7,0", "MD"), reportPlayer("10", "Caimacov", "6,7", "CJA")],
                [reportPlayer("3", "Jakir", "6,4", "AI"), reportPlayer("4", "Kovačić", "6,3", "DC"), reportPlayer("6", "Božić", "6,5", "CC"), reportPlayer("18", "Krušelj", "6,5", "DL")],
                [reportPlayer("31", "Hadžikić", "6,9", "GR")]
            ])
        },
        events: {
            home: [
                goalEvent("5", "M. Šego", { assist: "A. Rebić" }),
                goalEvent("45+1", "H. Guillamón", { assist: "Š. Hrgović" }),
                goalEvent("79", "A. Kalik", { assist: "J. Auer" })
            ],
            away: [
                goalEvent("26", "R. Kriwak", { assist: "M. Caimacov" }),
                goalEvent("75", "I. Nestorovski", { penalty: true })
            ]
        },
        stats: reportStats([
            ["Posse", "62%", "38%"],
            ["Remates", "20", "8"],
            ["Remates à Baliza", "10", "7"],
            ["xG", "1,22", "1,31"],
            ["PADPAD", "24,14", "21,29"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "14", "9"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "18%", "10%"],
            ["Faltas", "8", "10"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "115", "116"],
            ["Classificação Média", "6,9", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-03-14-nk-lokomotiva-dinamo-zagreb",
        date: "Sábado 14 de Março de 2026",
        stadium: "Maksimir",
        weather: "Tempestuoso",
        playerOfMatch: "Dion Beljo",
        rating: "9,38",
        coaches: { home: "Pai Natal", away: "M. Kovačević" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("15", "Stojaković", "6,7", "AAE", true), reportPlayer("10", "Rui Pedro", "6,6", "AvR")],
                [reportPlayer("26", "Rog", "6,5", "MC"), reportPlayer("28", "Belcar", "6,5", "CJA"), reportPlayer("21", "Wintle", "7,0", "MC")],
                [reportPlayer("17", "Pajač", "6,1", "AI"), reportPlayer("19", "Tabinas", "6,6", "AI")],
                [reportPlayer("20", "Kolinger", "6,6", "DC"), reportPlayer("16", "Zebić", "6,7", "CP"), reportPlayer("3", "Diop", "6,6", "CP")],
                [reportPlayer("12", "Posavec", "6,2", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "9,4", "AvR", true)],
                [reportPlayer("10", "Vidović", "7,2", "EAI", true), reportPlayer("12", "Dobre", "6,3", "EAI")],
                [reportPlayer("27", "Mišić", "6,8", "MC"), reportPlayer("8", "Zajc", "6,8", "MC")],
                [reportPlayer("4", "Bennacer", "6,8", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "7,7", "AI", true), reportPlayer("26", "McKenna", "7,4", "CC"), reportPlayer("36", "Domínguez", "6,8", "CC"), reportPlayer("25", "Valinčić", "7,7", "AI", true)],
                [reportPlayer("40", "Livaković", "6,2", "GR")]
            ])
        },
        events: {
            home: [
                goalEvent("69", "A. Stojaković", { assist: "A. Trajkovski" }),
                goalEvent("85", "A. Trajkovski", { assist: "M. Pajač" })
            ],
            away: [
                goalEvent("29", "Dion Beljo", { assist: "M. Pérez Vinlöf" }),
                goalEvent("43", "G. Vidović"),
                goalEvent("56", "Dion Beljo", { assist: "M. Valinčić" }),
                goalEvent("70", "M. Soldo", { assist: "Dion Beljo" })
            ]
        },
        stats: reportStats([
            ["Posse", "49%", "51%"],
            ["Remates", "9", "16"],
            ["Remates à Baliza", "3", "8"],
            ["xG", "0,72", "2,03"],
            ["PADPAD", "18,91", "23,94"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "2", "9"],
            ["Passes Completados", "88%", "89%"],
            ["Cruzamentos Completados", "10%", "24%"],
            ["Faltas", "15", "3"],
            ["Cartões amarelos", "3", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "124"],
            ["Classificação Média", "6,6", "7,1"]
        ])
    },
    {
        fixtureKey: "2025-03-14-nk-varazdin-nk-osijek",
        date: "Sábado 14 de Março de 2026",
        stadium: "Anđelko Herjavec",
        weather: "Calmo",
        playerOfMatch: "Mihály Kata",
        rating: "8,43",
        coaches: { home: "João Nabais", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,2", "AR")],
                [reportPlayer("22", "Mamić", "6,8", "AI"), reportPlayer("27", "Latković", "6,1", "SA"), reportPlayer("18", "Gaprindashvili", "6,4", "Ex")],
                [reportPlayer("24", "Marina", "6,6", "CJR"), reportPlayer("8", "Duvnjak", "6,6", "CJA")],
                [reportPlayer("12", "Bočkaj", "7,2", "AI"), reportPlayer("44", "Barać", "7,1", "DC"), reportPlayer("16", "Tepšić", "6,3", "CC"), reportPlayer("23", "Maglica", "7,0", "DL")],
                [reportPlayer("33", "Silić", "6,1", "GR")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("34", "Matković", "6,4", "AR")],
                [reportPlayer("23", "Vrbančić", "6,5", "MO"), reportPlayer("17", "Jakupović", "6,7", "MO")],
                [reportPlayer("38", "Čolina", "7,2", "MAI"), reportPlayer("6", "Fran Álvarez", "6,9", "MC"), reportPlayer("29", "Karačić", "6,3", "MAI")],
                [reportPlayer("25", "Borkeeiet", "7,0", "PI")],
                [reportPlayer("26", "Jelenić", "7,0", "CP"), reportPlayer("33", "Hasić", "7,1", "CP"), reportPlayer("2", "Racovițan", "7,4", "CP")],
                [reportPlayer("12", "D. Sousa", "7,4", "GR")]
            ])
        },
        events: {
            home: [sendOffEvent("4", "T. Gaprindashvili")],
            away: [goalEvent("73", "M. Kata"), goalEvent("86", "M. Kata")]
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "14", "12"],
            ["Remates à Baliza", "6", "7"],
            ["xG", "1,70", "1,20"],
            ["PADPAD", "19,33", "15,58"],
            ["Oportunidades Flagrantes", "3", "1"],
            ["Cantos", "8", "6"],
            ["Passes Completados", "90%", "88%"],
            ["Cruzamentos Completados", "37%", "25%"],
            ["Faltas", "11", "8"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "1", "0"],
            ["Distância Percorrida", "114", "127"],
            ["Classificação Média", "6,6", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-03-15-hnk-vukovar-hnk-rijeka",
        date: "Domingo 15 de Março de 2026",
        stadium: "Gradski vrt",
        weather: "Brisa",
        playerOfMatch: "Olivier Ntcham",
        rating: "8,06",
        coaches: { home: "Hugo Macedo", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("8", "Horvat", "6,3", "AAE")],
                [reportPlayer("41", "Šporn", "6,9", "MO"), reportPlayer("21", "Puljić", "6,1", "MO")],
                [reportPlayer("77", "Akpata", "6,8", "AI"), reportPlayer("43", "Čuić", "6,1", "MD"), reportPlayer("10", "Gonzalez", "6,5", "CJR"), reportPlayer("20", "Čabrajić", "6,1", "AI")],
                [reportPlayer("4", "Mitrović", "6,4", "CC"), reportPlayer("5", "Elez", "6,2", "CC"), reportPlayer("3", "Bosec", "6,4", "CC")],
                [reportPlayer("42", "Đaković", "6,5", "GR")]
            ]),
            away: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "7,6", "AR", true)],
                [reportPlayer("14", "Gojak", "7,5", "ME"), reportPlayer("17", "Ntcham", "8,1", "MO", true)],
                [reportPlayer("26", "Dantas", "7,3", "MC")],
                [reportPlayer("21", "Lacoux", "7,1", "MD"), reportPlayer("11", "André", "6,7", "CJR")],
                [reportPlayer("24", "J. Silva", "7,3", "AI"), reportPlayer("53", "Emirhan", "7,6", "CC"), reportPlayer("6", "Radeljić", "7,4", "CC"), reportPlayer("22", "Oreč", "7,0", "AI")],
                [reportPlayer("1", "Letica", "7,3", "GR")]
            ])
        },
        events: {
            home: [],
            away: [
                goalEvent("35", "O. Ntcham", { assist: "A. Gojak" }),
                goalEvent("39", "A. Jurić", { assist: "O. Ntcham" })
            ]
        },
        stats: reportStats([
            ["Posse", "38%", "62%"],
            ["Remates", "6", "18"],
            ["Remates à Baliza", "0", "8"],
            ["xG", "0,34", "1,98"],
            ["PADPAD", "29,00", "11,90"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "2", "5"],
            ["Passes Completados", "81%", "89%"],
            ["Cruzamentos Completados", "0%", "18%"],
            ["Faltas", "4", "8"],
            ["Cartões amarelos", "0", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "132", "139"],
            ["Classificação Média", "6,4", "7,3"]
        ])
    },
    {
        fixtureKey: "2025-03-21-nk-istra-1961-hnk-vukovar",
        date: "Sábado 21 de Março de 2026",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Silvio Goričan",
        rating: "8,33",
        coaches: { home: "João Pedro Rato", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Obando", "7,2", "AC")],
                [reportPlayer("7", "Benny", "7,0", "AA", true), reportPlayer("21", "Núñez", "7,3", "MO"), reportPlayer("17", "Frederiksen", "7,2", "EAI", true)],
                [reportPlayer("6", "Liber", "7,5", "MD"), reportPlayer("5", "Radošević", "6,9", "CJR")],
                [reportPlayer("22", "Can Coşkun", "6,9", "AI"), reportPlayer("16", "O'Connor", "6,8", "CC"), reportPlayer("3", "Nasraoui", "7,1", "DC"), reportPlayer("2", "Ángel Pérez", "7,0", "AI")],
                [reportPlayer("99", "Wrąbel", "6,6", "GRC")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("8", "Horvat", "6,7", "AAE")],
                [reportPlayer("41", "Šporn", "6,6", "MO"), reportPlayer("21", "Puljić", "6,4", "MO")],
                [reportPlayer("77", "Shabani", "6,7", "AI"), reportPlayer("43", "Čuić", "6,8", "MD", true), reportPlayer("10", "Gonzalez", "6,7", "CJR"), reportPlayer("25", "Williams", "6,1", "AI")],
                [reportPlayer("4", "Mitrović", "6,7", "CC"), reportPlayer("5", "Elez", "6,6", "CC"), reportPlayer("3", "Bosec", "6,4", "CC")],
                [reportPlayer("42", "Đaković", "6,3", "GR")]
            ])
        },
        events: {
            home: [
                goalEvent("7", "Benny", { assist: "C. Núñez" }),
                goalEvent("30", "E. Frederiksen", { assist: "A. Obando" }),
                goalEvent("76", "A. Maurić", { assist: "S. Goričan" }),
                goalEvent("86", "S. Goričan", { assist: "A. Maurić" })
            ],
            away: [goalEvent("31", "M. Čuić", { assist: "P. Horvat" })]
        },
        stats: reportStats([
            ["Posse", "59%", "41%"],
            ["Remates", "16", "11"],
            ["Remates à Baliza", "11", "4"],
            ["xG", "1,87", "0,78"],
            ["PADPAD", "27,56", "23,86"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "8", "6"],
            ["Passes Completados", "91%", "90%"],
            ["Cruzamentos Completados", "20%", "5%"],
            ["Faltas", "10", "6"],
            ["Cartões amarelos", "2", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "128", "123"],
            ["Classificação Média", "7,1", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-03-21-nk-lokomotiva-nk-varazdin",
        date: "Sábado 21 de Março de 2026",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Matty Jacob",
        rating: "8,07",
        coaches: { home: "Pai Natal", away: "João Nabais" },
        formations: {
            home: reportFormation("3-5-2", [
                [reportPlayer("15", "Stojaković", "6,2", "AAE"), reportPlayer("10", "Rui Pedro", "6,8", "AvR", true)],
                [reportPlayer("26", "Rog", "6,7", "MC"), reportPlayer("28", "Belcar", "6,4", "CJA"), reportPlayer("21", "Wintle", "7,0", "MC")],
                [reportPlayer("17", "Pajač", "6,4", "AI"), reportPlayer("19", "Tabinas", "6,3", "AI")],
                [reportPlayer("20", "Kolinger", "7,0", "DC"), reportPlayer("16", "Zebić", "6,5", "CP"), reportPlayer("3", "Diop", "6,6", "CP")],
                [reportPlayer("12", "Posavec", "7,4", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,4", "AR")],
                [reportPlayer("38", "Iuri Tavares", "7,8", "AI", true), reportPlayer("22", "Mamić", "6,6", "SA"), reportPlayer("11", "Brajković", "7,6", "Ex", true)],
                [reportPlayer("14", "Ilinković", "7,6", "CJR"), reportPlayer("8", "Duvnjak", "7,6", "CJA")],
                [reportPlayer("15", "Jacob", "8,1", "AI"), reportPlayer("44", "Barać", "7,5", "DC"), reportPlayer("16", "Tepšić", "6,7", "CC"), reportPlayer("23", "Maglica", "6,5", "DL")],
                [reportPlayer("33", "Silić", "6,6", "GR")]
            ])
        },
        events: {
            home: [
                sendOffEvent("30", "P. Tabinas"),
                goalEvent("53", "Rui Pedro", { assist: "R. Wintle" })
            ],
            away: [
                goalEvent("11", "R. Brajković", { assist: "T. Duvnjak" }),
                goalEvent("38", "I. Tavares", { assist: "M. Jacob" })
            ]
        },
        stats: reportStats([
            ["Posse", "41%", "59%"],
            ["Remates", "4", "33"],
            ["Remates à Baliza", "1", "15"],
            ["xG", "0,55", "2,64"],
            ["PADPAD", "27,54", "17,75"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "1", "10"],
            ["Passes Completados", "86%", "91%"],
            ["Cruzamentos Completados", "17%", "30%"],
            ["Faltas", "15", "13"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "1", "0"],
            ["Distância Percorrida", "116", "129"],
            ["Classificação Média", "6,7", "7,1"]
        ])
    },
    {
        fixtureKey: "2025-03-21-nk-osijek-hajduk-split",
        date: "Sábado 21 de Março de 2026",
        stadium: "Opus Arena",
        weather: "Brisa",
        playerOfMatch: "Fran Karačić",
        rating: "7,67",
        coaches: { home: "Gamy Chambelito", away: "J. Plíšek" },
        formations: {
            home: reportFormation("3-1-3-2-1", [
                [reportPlayer("24", "Cobnan", "7,1", "AR", true)],
                [reportPlayer("23", "Vrbančić", "6,2", "MO"), reportPlayer("17", "Jakupović", "6,4", "MO")],
                [reportPlayer("38", "Čolina", "6,9", "MAI"), reportPlayer("6", "Fran Álvarez", "6,8", "MC"), reportPlayer("29", "Karačić", "7,7", "MAI")],
                [reportPlayer("25", "Borkeeiet", "6,9", "PI")],
                [reportPlayer("2", "Racovițan", "6,9", "CP"), reportPlayer("33", "Hasić", "6,2", "CP"), reportPlayer("26", "Jelenić", "6,2", "CP")],
                [reportPlayer("12", "D. Sousa", "6,5", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "A. Rebić", "6,3", "AR")],
                [reportPlayer("11", "Šego", "7,0", "AI", true), reportPlayer("10", "Livaja", "6,7", "MO"), reportPlayer("30", "Almena", "6,6", "AA")],
                [reportPlayer("7", "Kalik", "6,9", "MD"), reportPlayer("6", "Hugo G.", "6,7", "MD")],
                [reportPlayer("32", "Hrgović", "6,6", "AI"), reportPlayer("14", "Raçi", "7,0", "CC"), reportPlayer("15", "Marešić", "6,9", "CC"), reportPlayer("8", "Sigur", "6,9", "AIl")],
                [reportPlayer("33", "Silić", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("33", "M. Cobnan", { assist: "F. Karačić" })],
            away: [goalEvent("50", "M. Šego", { assist: "M. Livaja" })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "10", "9"],
            ["Remates à Baliza", "4", "4"],
            ["xG", "1,40", "0,32"],
            ["PADPAD", "13,93", "16,12"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "6", "4"],
            ["Passes Completados", "87%", "91%"],
            ["Cruzamentos Completados", "23%", "9%"],
            ["Faltas", "11", "8"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "119"],
            ["Classificação Média", "6,7", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-03-21-nk-slaven-belupo-hnk-gorica",
        date: "Sábado 21 de Março de 2026",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Brisa",
        playerOfMatch: "Bruno Bogojević",
        rating: "7,33",
        coaches: { home: "Francisco Pinto", away: "Miguel Cardoso" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("7", "Dabro", "6,6", "AA"), reportPlayer("90", "Nestorovski", "6,9", "AR", true)],
                [reportPlayer("28", "Šunta", "6,6", "EAI"), reportPlayer("11", "Mitrović", "6,2", "Ex")],
                [reportPlayer("8", "Mrowca", "6,9", "MD"), reportPlayer("21", "Crepulja", "6,4", "CJA")],
                [reportPlayer("3", "Jakir", "6,2", "AI"), reportPlayer("4", "Kovačić", "6,7", "DC"), reportPlayer("6", "Božić", "6,6", "CC"), reportPlayer("18", "Krušelj", "7,1", "DL")],
                [reportPlayer("31", "Hadžikić", "6,7", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("64", "Epailly", "6,6", "Ex"), reportPlayer("10", "Pršir", "6,4", "ME"), reportPlayer("9", "Bogojević", "7,3", "Ex", true)],
                [reportPlayer("8", "Pozo", "6,4", "CJA"), reportPlayer("36", "Kavelj", "6,6", "ME")],
                [reportPlayer("7", "Bakić", "7,1", "MD")],
                [reportPlayer("32", "Duraković", "6,5", "AI"), reportPlayer("45", "Perić", "6,6", "DC"), reportPlayer("5", "Leš", "6,8", "CP"), reportPlayer("22", "Trontelj", "6,6", "AI")],
                [reportPlayer("71", "Matijaš", "6,4", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("27", "I. Nestorovski", { penalty: true })],
            away: [goalEvent("78", "B. Bogojević", { assist: "O. Bakić" })]
        },
        stats: reportStats([
            ["Posse", "63%", "37%"],
            ["Remates", "7", "19"],
            ["Remates à Baliza", "3", "8"],
            ["xG", "1,22", "0,95"],
            ["PADPAD", "13,21", "20,92"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "3", "10"],
            ["Passes Completados", "88%", "83%"],
            ["Cruzamentos Completados", "7%", "20%"],
            ["Faltas", "12", "12"],
            ["Cartões amarelos", "3", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "117", "125"],
            ["Classificação Média", "6,6", "6,7"]
        ])
    },
    {
        fixtureKey: "2025-03-22-hnk-rijeka-dinamo-zagreb",
        date: "Domingo 22 de Março de 2026",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Arbër Hoxha",
        rating: "8,15",
        coaches: { home: "Zép Jóbes", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("77", "Jurić", "6,1", "AR")],
                [reportPlayer("17", "Ntcham", "6,5", "ME"), reportPlayer("10", "Fruk", "6,5", "MO")],
                [reportPlayer("14", "Gojak", "6,6", "MC")],
                [reportPlayer("21", "Lacoux", "6,6", "MD"), reportPlayer("26", "Dantas", "6,8", "CJR", true)],
                [reportPlayer("24", "J. Silva", "6,9", "AI"), reportPlayer("6", "Radeljić", "6,5", "CC"), reportPlayer("4", "Andrade", "6,4", "CC"), reportPlayer("22", "Oreč", "6,5", "AI")],
                [reportPlayer("1", "Letica", "6,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "7,9", "AvR", true)],
                [reportPlayer("11", "Hoxha", "8,2", "EAI", true), reportPlayer("12", "Dobre", "6,5", "EAI")],
                [reportPlayer("27", "Mišić", "6,6", "MC"), reportPlayer("8", "Zajc", "7,1", "MC", true)],
                [reportPlayer("4", "Bennacer", "6,5", "CJR")],
                [reportPlayer("22", "Pérez Vinlöf", "6,5", "AI"), reportPlayer("26", "McKenna", "6,8", "CC"), reportPlayer("36", "Domínguez", "6,9", "CC"), reportPlayer("25", "Valinčić", "7,0", "AI")],
                [reportPlayer("40", "Livaković", "6,6", "GR")]
            ])
        },
        events: {
            home: [
                goalEvent("7", "Tiago Dantas", { penalty: true }),
                goalEvent("73", "T. Ambrose", { assist: "J. Lasickas" })
            ],
            away: [
                goalEvent("28", "A. Hoxha", { assist: "Dion Beljo" }),
                goalEvent("37", "Dion Beljo", { assist: "A. Hoxha" }),
                sendOffEvent("76", "A. Dobre"),
                goalEvent("82", "M. Zajc", { assist: "G. Vidović" }),
                goalEvent("90+1", "L. Stojković", { assist: "G. Vidović" })
            ]
        },
        stats: reportStats([
            ["Posse", "62%", "38%"],
            ["Remates", "14", "9"],
            ["Remates à Baliza", "4", "6"],
            ["xG", "1,90", "1,67"],
            ["PADPAD", "20,64", "22,65"],
            ["Oportunidades Flagrantes", "3", "2"],
            ["Cantos", "5", "2"],
            ["Passes Completados", "89%", "82%"],
            ["Cruzamentos Completados", "21%", "25%"],
            ["Faltas", "20", "12"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "1"],
            ["Distância Percorrida", "128", "118"],
            ["Classificação Média", "6,5", "6,9"]
        ])
    },
    {
        fixtureKey: "2025-04-04-dinamo-zagreb-nk-slaven-belupo",
        date: "Sábado 4 de Abril de 2026",
        stadium: "Maksimir",
        weather: "Tempestuoso",
        playerOfMatch: "Kurban Rasulov",
        rating: "8,11",
        coaches: { home: "M. Kovačević", away: "Francisco Pinto" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "6,9", "AvR")],
                [reportPlayer("10", "Vidović", "6,6", "EAI"), reportPlayer("30", "Topić", "7,0", "EAI")],
                [reportPlayer("14", "Soldo", "6,6", "MC"), reportPlayer("8", "Zajc", "6,6", "MC")],
                [reportPlayer("27", "Mišić", "7,5", "MD")],
                [reportPlayer("22", "Pérez Vinlöf", "7,0", "AI"), reportPlayer("26", "McKenna", "6,6", "CC"), reportPlayer("36", "Domínguez", "7,7", "CC", true), reportPlayer("25", "Valinčić", "6,8", "AI")],
                [reportPlayer("40", "Livaković", "6,5", "GR")]
            ]),
            away: reportFormation("4-4-2", [
                [reportPlayer("90", "Nestorovski", "6,2", "AC"), reportPlayer("11", "Mitrović", "6,3", "AC")],
                [reportPlayer("28", "Šunta", "6,5", "MA"), reportPlayer("27", "Grgić", "6,3", "MC"), reportPlayer("21", "Crepulja", "6,6", "MC"), reportPlayer("8", "Mrowca", "6,8", "MA")],
                [reportPlayer("14", "Jović", "6,6", "DL"), reportPlayer("6", "Božić", "6,6", "DC"), reportPlayer("2", "Međimorec", "6,4", "DC"), reportPlayer("5", "Katalinić", "6,5", "DL")],
                [reportPlayer("24", "Rasulov", "8,1", "GR")]
            ])
        },
        events: {
            home: [goalEvent("55", "S. Domínguez", { assist: "J. Mišić" })],
            away: [goalEvent("52", "S. McKenna", { ownGoal: true })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "23", "0"],
            ["Remates à Baliza", "11", "0"],
            ["xG", "1,56", "0,00"],
            ["PADPAD", "14,09", "66,17"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "10", "1"],
            ["Passes Completados", "90%", "87%"],
            ["Cruzamentos Completados", "25%", "0%"],
            ["Faltas", "8", "7"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "118"],
            ["Classificação Média", "6,9", "6,6"]
        ])
    },
    {
        fixtureKey: "2025-04-04-hajduk-split-nk-lokomotiva",
        date: "Sábado 4 de Abril de 2026",
        stadium: "Poljud",
        weather: "Tempestuoso",
        playerOfMatch: "Marko Livaja",
        rating: "8,22",
        coaches: { home: "S. Bilić", away: "Pai Natal" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("10", "Livaja", "8,2", "AvR", true)],
                [reportPlayer("9", "A. Rebić", "7,3", "CJA"), reportPlayer("21", "Pukstas", "6,4", "SA"), reportPlayer("30", "Almena", "7,3", "AI")],
                [reportPlayer("23", "Krovinović", "7,1", "CJR"), reportPlayer("6", "Hugo G.", "7,4", "MD")],
                [reportPlayer("32", "Hrgović", "6,8", "AI"), reportPlayer("14", "Raçi", "8,0", "CC"), reportPlayer("15", "Marešić", "7,0", "CC"), reportPlayer("38", "Hodak", "6,9", "DL")],
                [reportPlayer("33", "Silić", "7,2", "GR")]
            ]),
            away: reportFormation("4-3-2-1", [
                [reportPlayer("15", "Stojaković", "6,4", "AC")],
                [reportPlayer("28", "Belcar", "6,7", "AA"), reportPlayer("20", "Kolinger", "6,4", "AA")],
                [reportPlayer("40", "McCarthy", "6,7", "ME"), reportPlayer("7", "Trajkovski", "6,3", "MC"), reportPlayer("10", "Rui Pedro", "5,9", "ME")],
                [reportPlayer("17", "Pajač", "6,5", "DL"), reportPlayer("3", "Diop", "6,6", "DC"), reportPlayer("26", "Rog", "6,4", "CC"), reportPlayer("23", "Vešović", "6,2", "DL")],
                [reportPlayer("99", "Vozinha", "6,5", "GR")]
            ])
        },
        events: {
            home: [goalEvent("49", "M. Livaja", { assist: "A. Rebić" }), goalEvent("65", "M. Livaja", { assist: "L. Bengtsson" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "64%", "36%"],
            ["Remates", "17", "3"],
            ["Remates à Baliza", "7", "0"],
            ["xG", "2,06", "0,15"],
            ["PADPAD", "14,38", "24,75"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "8", "2"],
            ["Passes Completados", "88%", "78%"],
            ["Cruzamentos Completados", "12%", "10%"],
            ["Faltas", "7", "9"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "123"],
            ["Classificação Média", "7,2", "6,4"]
        ])
    },
    {
        fixtureKey: "2025-04-04-hnk-gorica-nk-varazdin",
        date: "Sábado 4 de Abril de 2026",
        stadium: "Gradski stadion Velika Gorica",
        weather: "Calmo",
        playerOfMatch: "Jurica Pršir",
        rating: "10,00",
        coaches: { home: "Miguel Cardoso", away: "João Nabais" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("20", "Vrzić", "6,8", "Ex"), reportPlayer("10", "Pršir", "10,0", "ME", true), reportPlayer("9", "Bogojević", "9,1", "Ex", true)],
                [reportPlayer("66", "Frigan", "7,5", "CJA", true), reportPlayer("8", "Pozo", "7,0", "MC")],
                [reportPlayer("36", "Kavelj", "6,9", "MD")],
                [reportPlayer("19", "Čabraja", "6,4", "AI"), reportPlayer("45", "Perić", "6,6", "DC"), reportPlayer("5", "Leš", "6,6", "CP"), reportPlayer("32", "Duraković", "6,6", "AI")],
                [reportPlayer("71", "Matijaš", "6,8", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Mamut", "6,4", "AR")],
                [reportPlayer("7", "Vuk", "6,8", "AI"), reportPlayer("22", "Mamić", "6,9", "SA", true), reportPlayer("11", "Brajković", "6,3", "Ex")],
                [reportPlayer("6", "Puclin", "6,5", "CJR"), reportPlayer("8", "Duvnjak", "6,6", "CJA")],
                [reportPlayer("12", "Bočkaj", "6,2", "AI"), reportPlayer("44", "Barać", "6,6", "DC"), reportPlayer("16", "Tepšić", "6,3", "CC"), reportPlayer("23", "Maglica", "7,3", "DL")],
                [reportPlayer("33", "Silić", "5,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("6", "J. Frigan", { assist: "L. Vrzić" }), goalEvent("23", "J. Pršir", { assist: "B. Bogojević" }), goalEvent("34", "J. Pršir", { assist: "B. Bogojević" }), goalEvent("65", "J. Pršir", { assist: "T. Epailly" }), goalEvent("71", "B. Bogojević", { assist: "J. Pršir" })],
            away: [goalEvent("30", "L. Mamić", { assist: "M. Vuk" })]
        },
        stats: reportStats([
            ["Posse", "41%", "59%"],
            ["Remates", "14", "17"],
            ["Remates à Baliza", "5", "6"],
            ["xG", "1,54", "1,22"],
            ["PADPAD", "24,31", "20,36"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "3", "7"],
            ["Passes Completados", "88%", "90%"],
            ["Cruzamentos Completados", "23%", "22%"],
            ["Faltas", "13", "13"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "124"],
            ["Classificação Média", "7,3", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-04-04-hnk-rijeka-nk-istra-1961",
        date: "Sábado 4 de Abril de 2026",
        stadium: "Rujevica",
        weather: "Calmo",
        playerOfMatch: "Thierry Ambrose",
        rating: "8,26",
        coaches: { home: "Zép Jóbes", away: "João Pedro Rato" },
        formations: {
            home: reportFormation("4-2-1-2-1", [
                [reportPlayer("7", "Keita Baldé", "6,4", "AAE")],
                [reportPlayer("20", "Ndockyt", "6,4", "ME"), reportPlayer("10", "Fruk", "6,6", "MO")],
                [reportPlayer("17", "Ntcham", "7,8", "MC", true)],
                [reportPlayer("21", "Lacoux", "7,1", "MD"), reportPlayer("26", "Dantas", "6,7", "CJR")],
                [reportPlayer("24", "J. Silva", "8,2", "AI", true), reportPlayer("53", "Emirhan", "6,8", "CC"), reportPlayer("6", "Radeljić", "6,9", "CC"), reportPlayer("22", "Oreč", "6,7", "AI")],
                [reportPlayer("1", "Letica", "6,6", "GRP")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Obando", "6,0", "AC")],
                [reportPlayer("7", "Benny", "6,5", "AA"), reportPlayer("21", "Núñez", "6,7", "MO", true), reportPlayer("17", "Frederiksen", "6,5", "EAI")],
                [reportPlayer("8", "Maurić", "6,4", "MD"), reportPlayer("15", "Liber", "6,4", "CJR")],
                [reportPlayer("22", "Can Coşkun", "6,2", "AI"), reportPlayer("4", "Johnston", "6,8", "CC"), reportPlayer("3", "Nasraoui", "6,8", "DC"), reportPlayer("2", "Ángel Pérez", "6,5", "AI")],
                [reportPlayer("99", "Wrąbel", "6,7", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("22", "J. Silva", { assist: "O. Ntcham" }), goalEvent("44", "O. Ntcham", { assist: "T. Lacoux" }), goalEvent("84", "A. Jurić", { assist: "T. Ambrose" }), goalEvent("90+5", "T. Ambrose", { assist: "J. Lasickas" })],
            away: [goalEvent("42", "C. Núñez", {penalty: true}), sendOffEvent("87", "D. Jastrzembski")]
        },
        stats: reportStats([
            ["Posse", "47%", "53%"],
            ["Remates", "15", "5"],
            ["Remates à Baliza", "10", "2"],
            ["xG", "1,83", "1,02"],
            ["PADPAD", "20,17", "21,67"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "5", "2"],
            ["Passes Completados", "88%", "88%"],
            ["Cruzamentos Completados", "29%", "5%"],
            ["Faltas", "12", "9"],
            ["Cartões amarelos", "3", "1"],
            ["Cartões vermelhos", "0", "1"],
            ["Distância Percorrida", "126", "125"],
            ["Classificação Média", "7,0", "6,5"]
        ])
    },
    {
        fixtureKey: "2025-04-04-hnk-vukovar-nk-osijek",
        date: "Sábado 4 de Abril de 2026",
        stadium: "Gradski vrt",
        weather: "Calmo",
        playerOfMatch: "Luka Vrbančić",
        rating: "7,62",
        coaches: { home: "Hugo Macedo", away: "Gamy Chambelito" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("8", "Horvat", "6,3", "AA"), reportPlayer("21", "Puljić", "6,3", "CL"), reportPlayer("77", "Shabani", "6,9", "Ex")],
                [reportPlayer("41", "Šporn", "6,4", "MC"), reportPlayer("10", "Gonzalez", "6,0", "CJA")],
                [reportPlayer("43", "Čuić", "6,1", "MD")],
                [reportPlayer("25", "Williams", "6,1", "DL"), reportPlayer("4", "Mitrović", "6,5", "DC"), reportPlayer("5", "Elez", "6,8", "DC"), reportPlayer("3", "Bosec", "6,9", "DL")],
                [reportPlayer("42", "Đaković", "7,5", "GR")]
            ]),
            away: reportFormation("3-1-3-2-1", [
                [reportPlayer("24", "Cobnan", "7,1", "AR")],
                [reportPlayer("23", "Vrbančić", "7,6", "MO", true), reportPlayer("17", "Jakupović", "6,6", "SA")],
                [reportPlayer("38", "Čolina", "7,2", "MAI"), reportPlayer("6", "Fran Álvarez", "6,9", "MC"), reportPlayer("39", "Bukvić", "7,0", "MAI")],
                [reportPlayer("32", "Kata", "6,9", "Pi")],
                [reportPlayer("2", "Racovițan", "7,6", "CP"), reportPlayer("15", "Mersinaj", "7,2", "CP"), reportPlayer("26", "Jelenić", "7,1", "CP")],
                [reportPlayer("12", "D. Sousa", "7,3", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("7", "L. Vrbančić", { assist: "M. Cobnan" })]
        },
        stats: reportStats([
            ["Posse", "35%", "65%"],
            ["Remates", "4", "21"],
            ["Remates à Baliza", "1", "15"],
            ["xG", "0,31", "1,29"],
            ["PADPAD", "25,05", "13,91"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "2", "10"],
            ["Passes Completados", "84%", "90%"],
            ["Cruzamentos Completados", "4%", "19%"],
            ["Faltas", "10", "11"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "123"],
            ["Classificação Média", "6,5", "7,1"]
        ])
    },
];

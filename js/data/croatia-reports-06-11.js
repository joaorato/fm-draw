const croatiaRoundSixReports = [
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
        events: { home: ["12' D. Pavičić L. Vrzić", "22' I. Pozo D. Pavičić"], away: [] },
        stats: [
            { label: "Posse", home: "37%", away: "63%" },
            { label: "Remates", home: "8", away: "20" },
            { label: "Remates à Baliza", home: "4", away: "4" },
            { label: "xG", home: "0,93", away: "1,98" },
            { label: "PADPAD", home: "25,21", away: "10,85" },
            { label: "Oportunidades Flagrantes", home: "2", away: "3" },
            { label: "Cantos", home: "3", away: "8" },
            { label: "Passes Completados", home: "87%", away: "90%" },
            { label: "Cruzamentos Completados", home: "20%", away: "23%" },
            { label: "Faltas", home: "7", away: "8" },
            { label: "Cartões amarelos", home: "1", away: "3" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "120", away: "117" },
            { label: "Classificação Média", home: "7,1", away: "6,7" }
        ]
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
                [reportPlayer("23", "Krovinović", "7,0", "MC"), reportPlayer("21", "Pukštas", "6,4", "ME")],
                [reportPlayer("6", "Hugo G.", "6,6", "MD")],
                [reportPlayer("3", "Auer", "6,7", "AI"), reportPlayer("14", "Raçi", "7,2", "CC"), reportPlayer("15", "Marešić", "6,4", "CC"), reportPlayer("38", "Hodak", "6,5", "DL")],
                [reportPlayer("13", "Ivušić", "6,8", "GRC")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("7", "Keita Balde", "6,7", "AAE"), reportPlayer("27", "Ambrose", "6,7", "AvR")],
                [reportPlayer("10", "Fruk", "6,8", "CL")],
                [reportPlayer("26", "Dantas", "7,6", "CJA", true), reportPlayer("11", "André", "6,9", "MC")],
                [reportPlayer("15", "Martínez T.", "6,5", "Pi")],
                [reportPlayer("34", "Devotak", "6,3", "AI"), reportPlayer("53", "Emirhan", "6,6", "CC"), reportPlayer("4", "Andrade", "6,8", "CC"), reportPlayer("3", "Jean Carlos", "6,7", "AI")],
                [reportPlayer("1", "Letica", "7,9", "GRC")]
            ])
        },
        events: {
            home: ["58' M. Šego M. Livaja", "90+4' M. Livaja A. Kalik"],
            away: ["39' Tiago Dantas", "90+3' D. Petrovič Tiago Dantas"]
        },
        stats: [
            { label: "Posse", home: "55%", away: "45%" },
            { label: "Remates", home: "16", away: "13" },
            { label: "Remates à Baliza", home: "11", away: "8" },
            { label: "xG", home: "1,46", away: "1,31" },
            { label: "PADPAD", home: "26,50", away: "19,25" },
            { label: "Oportunidades Flagrantes", home: "3", away: "1" },
            { label: "Cantos", home: "11", away: "6" },
            { label: "Passes Completados", home: "91%", away: "87%" },
            { label: "Cruzamentos Completados", home: "9%", away: "13%" },
            { label: "Faltas", home: "8", away: "19" },
            { label: "Cartões amarelos", home: "0", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "123", away: "124" },
            { label: "Classificação Média", home: "6,9", away: "6,9" }
        ]
    },
    {
        fixtureKey: "2025-09-13-nk-lokomotiva-hnk-vukovar",
        date: "Sábado 13 de Setembro de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Aleksandar Trajkovski",
        rating: "9,29",
        coaches: { home: "P. Natal", away: "Hugo Macedo" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Rui Pedro", "6,7", "AAE"), reportPlayer("37", "Córdoba", "8,0", "AC", true)],
                [reportPlayer("28", "Belcar", "6,7", "MC"), reportPlayer("15", "Stojaković", "6,7", "MC"), reportPlayer("40", "McCarthy", "6,6", "MC")],
                [reportPlayer("17", "Pajač", "7,5", "AP", true), reportPlayer("23", "Vešović", "6,1", "AP")],
                [reportPlayer("4", "Sigali", "6,4", "DC"), reportPlayer("7", "Trajkovski", "9,3", "CC", true), reportPlayer("20", "Kolinger", "6,6", "DC")],
                [reportPlayer("12", "Posavec", "6,5", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("21", "Puljić", "6,7", "F9"), reportPlayer("8", "Horvat", "6,6", "AAE")],
                [reportPlayer("13", "Čaić", "7,2", "MC"), reportPlayer("77", "Shabani", "7,6", "MO", true)],
                [reportPlayer("10", "Gonzalez", "7,6", "AI", true), reportPlayer("23", "Matić", "6,4", "MD"), reportPlayer("3", "Bosec", "7,2", "AI")],
                [reportPlayer("5", "Elez", "6,9", "CC", true), reportPlayer("4", "Mitrović", "7,7", "DC", true), reportPlayer("91", "Tićinović", "8,3", "CC", true)],
                [reportPlayer("42", "Daković", "7,1", "GR")]
            ])
        },
        events: {
            home: ["4' A. Trajkovski J. Córdoba", "22' A. Trajkovski Rui Pedro", "51' M. Pajač A. Trajkovski"],
            away: ["6' E. Shabani M. Mitrović", "36' J. Elez", "79' Š. Butić E. Shabani", "85' M. Tićinović R. Gonzalez"]
        },
        stats: [
            { label: "Posse", home: "63%", away: "37%" },
            { label: "Remates", home: "23", away: "22" },
            { label: "Remates à Baliza", home: "10", away: "10" },
            { label: "xG", home: "2,58", away: "3,89" },
            { label: "PADPAD", home: "23,42", away: "25,71" },
            { label: "Oportunidades Flagrantes", home: "2", away: "4" },
            { label: "Cantos", home: "12", away: "9" },
            { label: "Passes Completados", home: "90%", away: "87%" },
            { label: "Cruzamentos Completados", home: "27%", away: "28%" },
            { label: "Faltas", home: "12", away: "6" },
            { label: "Cartões amarelos", home: "2", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "121", away: "121" },
            { label: "Classificação Média", home: "7,0", away: "7,2" }
        ]
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
            home: reportFormation("4-2-3-1", [
                [reportPlayer("17", "Jakupović", "7,0", "AAE", true), reportPlayer("6", "Nico Gaitán", "6,8", "F9"), reportPlayer("11", "Omerović", "7,3", "AAE", true)],
                [reportPlayer("7", "Tugarev", "6,2", "MO"), reportPlayer("16", "Petrusenko", "7,0", "MO")],
                [reportPlayer("9", "Touré", "6,3", "Pi")],
                [reportPlayer("38", "Čolina", "7,2", "AI"), reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("15", "Mersinaj", "6,5", "CP"), reportPlayer("29", "Karačić", "6,7", "AI")],
                [reportPlayer("31", "Malenica", "7,6", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("7", "Dabro", "6,6", "AR"), reportPlayer("6", "Božić", "6,5", "AAE")],
                [reportPlayer("15", "Čubelić", "7,4", "ME", true), reportPlayer("90", "Nestorovski", "6,9", "CJA")],
                [reportPlayer("3", "Jakir", "6,4", "AI"), reportPlayer("21", "Crepulja", "6,3", "MD"), reportPlayer("18", "Krušelj", "6,6", "AI")],
                [reportPlayer("4", "Kovicić", "6,5", "DC"), reportPlayer("22", "Šimunović", "6,4", "DC"), reportPlayer("2", "Medimorec", "6,4", "CC")],
                [reportPlayer("31", "Hadžikić", "6,5", "GR")]
            ])
        },
        events: {
            home: ["18' A. Jakupović", "85' N. Omerović D. Čolina"],
            away: ["55' I. Nestorovski I. Čubelić"]
        },
        stats: [
            { label: "Posse", home: "51%", away: "49%" },
            { label: "Remates", home: "11", away: "13" },
            { label: "Remates à Baliza", home: "7", away: "8" },
            { label: "xG", home: "1,56", away: "2,19" },
            { label: "PADPAD", home: "14,74", away: "20,57" },
            { label: "Oportunidades Flagrantes", home: "1", away: "2" },
            { label: "Cantos", home: "9", away: "6" },
            { label: "Passes Completados", home: "85%", away: "88%" },
            { label: "Cruzamentos Completados", home: "13%", away: "19%" },
            { label: "Faltas", home: "11", away: "21" },
            { label: "Cartões amarelos", home: "0", away: "2" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "116", away: "114" },
            { label: "Classificação Média", home: "6,8", away: "6,6" }
        ]
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
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("38", "Iuri Tavares", "6,3", "AR")],
                [reportPlayer("7", "Vuk", "7,1", "AI"), reportPlayer("27", "Latković", "6,7", "MO"), reportPlayer("18", "Gaprindashvili", "6,4", "Ex")],
                [reportPlayer("8", "Duvnjak", "6,8", "CJR", true), reportPlayer("24", "Marina", "6,3", "MD")],
                [reportPlayer("15", "Jacob", "6,8", "AI"), reportPlayer("44", "Barać", "6,3", "DC"), reportPlayer("16", "Tepšić", "6,5", "CC"), reportPlayer("23", "Maglica", "6,8", "DL")],
                [reportPlayer("1", "Zelenika", "5,9", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,9", "AAE", true), reportPlayer("12", "Obando", "7,3", "AR", true)],
                [reportPlayer("11", "Goričan", "6,8", "AA"), reportPlayer("7", "Rozić", "6,3", "CJA")],
                [reportPlayer("10", "Lončar", "7,6", "MAA", true), reportPlayer("5", "Radošević", "6,8", "MD")],
                [reportPlayer("26", "Heister", "6,4", "AI"), reportPlayer("4", "Johnston", "6,7", "CC"), reportPlayer("3", "Nasraoui", "6,9", "DC"), reportPlayer("97", "Kadusić", "6,8", "AI")],
                [reportPlayer("1", "Kolić", "6,8", "GR")]
            ])
        },
        events: {
            home: ["55' T. Duvnjak T. Gaprindashvili"],
            away: ["11' A. Obando S. Prevljak", "54' S. Goričan S. Lončar"]
        },
        stats: [
            { label: "Posse", home: "44%", away: "56%" },
            { label: "Remates", home: "16", away: "10" },
            { label: "Remates à Baliza", home: "6", away: "3" },
            { label: "xG", home: "2,08", away: "0,67" },
            { label: "PADPAD", home: "21,00", away: "31,40" },
            { label: "Oportunidades Flagrantes", home: "2", away: "0" },
            { label: "Cantos", home: "7", away: "5" },
            { label: "Passes Completados", home: "84%", away: "89%" },
            { label: "Cruzamentos Completados", home: "24%", away: "20%" },
            { label: "Faltas", home: "5", away: "6" },
            { label: "Cartões amarelos", home: "1", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "122", away: "118" },
            { label: "Classificação Média", home: "6,6", away: "6,8" }
        ]
    }
];

const croatiaRoundSevenReports = [
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
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Kulušić", "8,3", "F9", true), reportPlayer("10", "Gonzalez", "6,7", "AAE")],
                [reportPlayer("21", "Puljić", "7,3", "MC", true), reportPlayer("23", "Matić", "7,1", "MO")],
                [reportPlayer("3", "Bosec", "6,8", "AI"), reportPlayer("77", "Shabani", "7,1", "MD"), reportPlayer("91", "Tićinović", "7,3", "AI")],
                [reportPlayer("5", "Elez", "7,7", "CC"), reportPlayer("4", "Mitrović", "7,6", "DC"), reportPlayer("12", "Živković", "7,0", "CC")],
                [reportPlayer("42", "Daković", "7,3", "GR")]
            ])
        },
        events: { home: [], away: ["19' L. Kulušić J. Puljić", "77' J. Elez L. Kulušić"] },
        stats: [
            { label: "Posse", home: "43%", away: "57%" },
            { label: "Remates", home: "8", away: "11" },
            { label: "Remates à Baliza", home: "3", away: "7" },
            { label: "xG", home: "0,39", away: "0,68" },
            { label: "PADPAD", home: "26,40", away: "20,47" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "6", away: "9" },
            { label: "Passes Completados", home: "87%", away: "90%" },
            { label: "Cruzamentos Completados", home: "7%", away: "3%" },
            { label: "Faltas", home: "8", away: "12" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "123", away: "121" },
            { label: "Classificação Média", home: "6,4", away: "7,3" }
        ]
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
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,8", "AAE"), reportPlayer("12", "Obando", "7,3", "AR", true)],
                [reportPlayer("11", "Goričan", "7,8", "AA"), reportPlayer("17", "Frederiksen", "7,5", "CJA", true)],
                [reportPlayer("10", "Lončar", "6,9", "MAA"), reportPlayer("5", "Radošević", "6,8", "MD")],
                [reportPlayer("26", "Heister", "6,8", "AI"), reportPlayer("4", "Johnston", "7,1", "CC"), reportPlayer("3", "Nasraoui", "6,8", "DC"), reportPlayer("97", "Kadusić", "7,2", "AI")],
                [reportPlayer("1", "Kolić", "7,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,3", "AR")],
                [reportPlayer("11", "Šego", "6,5", "EAI"), reportPlayer("30", "Almena", "6,9", "EAI", true)],
                [reportPlayer("7", "Kalik", "7,1", "MC"), reportPlayer("21", "Pukštas", "6,7", "MC")],
                [reportPlayer("23", "Krovinović", "6,6", "MD")],
                [reportPlayer("32", "Hrgović", "6,3", "AI"), reportPlayer("14", "Raçi", "6,7", "CC"), reportPlayer("15", "Marešić", "6,7", "CC"), reportPlayer("38", "Hodak", "6,7", "AI")],
                [reportPlayer("13", "Ivušić", "7,5", "GRC")]
            ])
        },
        events: {
            home: ["40' A. Obando S. Goričan", "59' E. Frederiksen A. Kadušić"],
            away: ["22' L. Hodak I. Almena"]
        },
        stats: [
            { label: "Posse", home: "53%", away: "47%" },
            { label: "Remates", home: "24", away: "8" },
            { label: "Remates à Baliza", home: "7", away: "3" },
            { label: "xG", home: "3,37", away: "0,26" },
            { label: "PADPAD", home: "21,45", away: "27,47" },
            { label: "Oportunidades Flagrantes", home: "2", away: "0" },
            { label: "Cantos", home: "12", away: "3" },
            { label: "Passes Completados", home: "91%", away: "87%" },
            { label: "Cruzamentos Completados", home: "31%", away: "11%" },
            { label: "Faltas", home: "6", away: "9" },
            { label: "Cartões amarelos", home: "1", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "121", away: "121" },
            { label: "Classificação Média", home: "7,1", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-09-20-nk-osijek-nk-lokomotiva",
        date: "Sábado 20 de Setembro de 2025",
        stadium: "Opus Arena",
        weather: "Calmo",
        playerOfMatch: "Arnel Jakupović",
        rating: "9,20",
        coaches: { home: "Gamy Chambelito", away: "P. Natal" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("18", "Farkaš", "6,8", "AAE"), reportPlayer("16", "Petrusenko", "6,9", "F9"), reportPlayer("41", "Mejía", "7,4", "AAE")],
                [reportPlayer("9", "Touré", "7,3", "MO"), reportPlayer("17", "Jakupović", "9,2", "MO", true)],
                [reportPlayer("99", "Teklić", "7,9", "Pi", true)],
                [reportPlayer("38", "Čolina", "7,4", "AI", true), reportPlayer("26", "Jelenić", "7,2", "CP"), reportPlayer("15", "Mersinaj", "7,1", "CP"), reportPlayer("29", "Karačić", "7,7", "AI")],
                [reportPlayer("31", "Malenica", "7,6", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Rui Pedro", "6,2", "AAE"), reportPlayer("37", "Córdoba", "5,5", "AC")],
                [reportPlayer("26", "Rog", "6,7", "MC"), reportPlayer("15", "Stojaković", "5,8", "MC"), reportPlayer("40", "McCarthy", "6,4", "MC")],
                [reportPlayer("17", "Pajač", "6,9", "AP", true), reportPlayer("13", "Boune", "7,0", "AP")],
                [reportPlayer("16", "Dajčer", "6,4", "DC"), reportPlayer("7", "Trajkovski", "6,3", "CC"), reportPlayer("20", "Kolinger", "6,7", "DC")],
                [reportPlayer("12", "Posavec", "6,6", "GR")]
            ])
        },
        events: {
            home: ["3' T. Teklić A. Jakupović", "18' A. Jakupović T. Teklić", "30' D. Čolina F. Karačić", "43' A. Jakupović D. Mejía", "70' N. Omerović L. Vrbančić"],
            away: ["56' A. Trajkovski M. Pajač"]
        },
        stats: [
            { label: "Posse", home: "54%", away: "46%" },
            { label: "Remates", home: "20", away: "20" },
            { label: "Remates à Baliza", home: "11", away: "8" },
            { label: "xG", home: "3,01", away: "1,66" },
            { label: "PADPAD", home: "11,48", away: "21,69" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "7", away: "13" },
            { label: "Passes Completados", home: "88%", away: "85%" },
            { label: "Cruzamentos Completados", home: "24%", away: "24%" },
            { label: "Faltas", home: "8", away: "11" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "128", away: "125" },
            { label: "Classificação Média", home: "7,5", away: "6,4" }
        ]
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
            home: reportFormation("3-4-2-1", [
                [reportPlayer("7", "Keita Balde", "6,4", "AAE"), reportPlayer("8", "Petrović", "7,1", "AvR")],
                [reportPlayer("10", "Fruk", "6,3", "CL")],
                [reportPlayer("26", "Dantas", "6,4", "CJA"), reportPlayer("11", "André", "6,9", "MC")],
                [reportPlayer("15", "Martínez T.", "7,1", "Pi")],
                [reportPlayer("34", "Devotak", "7,2", "AI"), reportPlayer("53", "Emirhan", "6,8", "CC"), reportPlayer("4", "Andrade", "7,0", "CC"), reportPlayer("23", "Lasickas", "6,3", "AI")],
                [reportPlayer("1", "Letica", "6,8", "GRC")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("24", "Pavičić", "6,4", "Ex"), reportPlayer("18", "Fiolić", "6,2", "MO", true), reportPlayer("20", "Vrzić", "6,1", "Ex")],
                [reportPlayer("7", "Bakić", "6,6", "CJA"), reportPlayer("8", "Pozo", "6,3", "ME")],
                [reportPlayer("36", "Kavelj", "6,3", "CJR")],
                [reportPlayer("19", "Čabraja", "6,3", "AI"), reportPlayer("4", "J. Filipović", "7,4", "DC", true), reportPlayer("45", "Perić", "6,2", "CP"), reportPlayer("22", "Trontelj", "6,4", "AI")],
                [reportPlayer("71", "Matijaš", "6,4", "GRC")]
            ])
        },
        events: { home: ["63' A. Jurić M. Ndockyt"], away: ["12' I. Fiolić J. Filipović"] },
        stats: [
            { label: "Posse", home: "74%", away: "26%" },
            { label: "Remates", home: "19", away: "6" },
            { label: "Remates à Baliza", home: "5", away: "3" },
            { label: "xG", home: "1,54", away: "0,43" },
            { label: "PADPAD", home: "8,00", away: "29,92" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "6", away: "5" },
            { label: "Passes Completados", home: "91%", away: "75%" },
            { label: "Cruzamentos Completados", home: "5%", away: "17%" },
            { label: "Faltas", home: "9", away: "15" },
            { label: "Cartões amarelos", home: "1", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "116", away: "113" },
            { label: "Classificação Média", home: "6,8", away: "6,4" }
        ]
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
            home: reportFormation("4-2-3-1", [
                [reportPlayer("7", "Dabro", "6,6", "AR"), reportPlayer("6", "Božić", "6,6", "AAE")],
                [reportPlayer("15", "Čubelić", "6,2", "ME"), reportPlayer("90", "Nestorovski", "6,2", "CJA")],
                [reportPlayer("3", "Jakir", "6,4", "AI"), reportPlayer("21", "Crepulja", "6,2", "MD"), reportPlayer("27", "Grgić", "6,2", "AI")],
                [reportPlayer("4", "Kovicić", "7,4", "DC", true), reportPlayer("22", "Šimunović", "6,6", "DC"), reportPlayer("2", "Medimorec", "6,6", "CC")],
                [reportPlayer("31", "Hadžikić", "7,0", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("17", "Mamut", "6,5", "AR")],
                [reportPlayer("7", "Vuk", "7,4", "AI"), reportPlayer("27", "Latković", "8,0", "MO", true), reportPlayer("18", "Gaprindashvili", "6,9", "Ex")],
                [reportPlayer("8", "Duvnjak", "7,0", "CJR"), reportPlayer("6", "Puclin", "7,2", "MD")],
                [reportPlayer("3", "Sikošek", "6,6", "AI"), reportPlayer("44", "Barać", "6,8", "DC"), reportPlayer("16", "Tepšić", "6,8", "CC"), reportPlayer("23", "Maglica", "6,5", "DL")],
                [reportPlayer("1", "Zelenika", "6,6", "GR")]
            ])
        },
        events: {
            home: ["85' D. Kovačić M. Caimacov"],
            away: ["11' M. Vuk A. Latković", "68' A. Latković B. Biró", "90+2' L. Mamić I. Tavares"]
        },
        stats: [
            { label: "Posse", home: "57%", away: "43%" },
            { label: "Remates", home: "8", away: "23" },
            { label: "Remates à Baliza", home: "4", away: "11" },
            { label: "xG", home: "0,40", away: "1,69" },
            { label: "PADPAD", home: "15,00", away: "21,33" },
            { label: "Oportunidades Flagrantes", home: "0", away: "0" },
            { label: "Cantos", home: "5", away: "11" },
            { label: "Passes Completados", home: "86%", away: "84%" },
            { label: "Cruzamentos Completados", home: "26%", away: "20%" },
            { label: "Faltas", home: "9", away: "7" },
            { label: "Cartões amarelos", home: "2", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "124", away: "129" },
            { label: "Classificação Média", home: "6,6", away: "6,9" }
        ]
    }
];

const croatiaRoundEightReports = [
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
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,3", "AAE"), reportPlayer("12", "Obando", "6,4", "AR")],
                [reportPlayer("11", "Goričan", "6,4", "AA"), reportPlayer("17", "Frederiksen", "6,6", "CJA")],
                [reportPlayer("10", "Lončar", "6,5", "MAA"), reportPlayer("5", "Radošević", "6,1", "MD")],
                [reportPlayer("26", "Heister", "6,9", "AI"), reportPlayer("4", "Johnston", "6,9", "CC"), reportPlayer("3", "Nasraoui", "6,7", "DC"), reportPlayer("97", "Kadusić", "7,1", "AI")],
                [reportPlayer("1", "Kolić", "6,6", "GR")]
            ])
        },
        events: { home: ["34' I. Fiolić O. Bakić"], away: [] },
        stats: [
            { label: "Posse", home: "42%", away: "58%" },
            { label: "Remates", home: "9", away: "17" },
            { label: "Remates à Baliza", home: "5", away: "9" },
            { label: "xG", home: "1,31", away: "1,92" },
            { label: "PADPAD", home: "29,79", away: "15,64" },
            { label: "Oportunidades Flagrantes", home: "2", away: "1" },
            { label: "Cantos", home: "3", away: "12" },
            { label: "Passes Completados", home: "85%", away: "88%" },
            { label: "Cruzamentos Completados", home: "8%", away: "25%" },
            { label: "Faltas", home: "6", away: "11" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "126", away: "125" },
            { label: "Classificação Média", home: "7,1", away: "6,6" }
        ]
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
                [reportPlayer("21", "Pukštas", "6,7", "MC"), reportPlayer("23", "Krovinović", "6,5", "MO")],
                [reportPlayer("6", "Hugo G.", "6,5", "MD")],
                [reportPlayer("32", "Hrgović", "6,7", "AI"), reportPlayer("14", "Raçi", "6,7", "CC"), reportPlayer("15", "Marešić", "7,1", "CC"), reportPlayer("38", "Hodak", "6,7", "DL")],
                [reportPlayer("33", "Silić", "6,4", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("7", "Dabro", "7,4", "AR", true), reportPlayer("90", "Nestorovski", "6,7", "AAE")],
                [reportPlayer("15", "Čubelić", "6,4", "ME"), reportPlayer("21", "Crepulja", "7,0", "CJA")],
                [reportPlayer("3", "Jakir", "6,9", "AI"), reportPlayer("8", "Mrowca", "7,1", "MD"), reportPlayer("27", "Grgić", "6,6", "AI")],
                [reportPlayer("4", "Kovicić", "7,2", "DC"), reportPlayer("10", "Caimacov", "6,7", "DC"), reportPlayer("6", "Božić", "6,9", "CC")],
                [reportPlayer("31", "Hadžikić", "6,7", "GR")]
            ])
        },
        events: { home: ["70' M. Livaja"], away: ["71' L. Crepulja M. Dabro"] },
        stats: [
            { label: "Posse", home: "46%", away: "54%" },
            { label: "Remates", home: "22", away: "6" },
            { label: "Remates à Baliza", home: "6", away: "3" },
            { label: "xG", home: "2,61", away: "0,50" },
            { label: "PADPAD", home: "29,00", away: "15,77" },
            { label: "Oportunidades Flagrantes", home: "2", away: "1" },
            { label: "Cantos", home: "14", away: "3" },
            { label: "Passes Completados", home: "92%", away: "90%" },
            { label: "Cruzamentos Completados", home: "20%", away: "0%" },
            { label: "Faltas", home: "9", away: "10" },
            { label: "Cartões amarelos", home: "1", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "126", away: "121" },
            { label: "Classificação Média", home: "6,7", away: "6,9" }
        ]
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
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Jurić", "7,4", "AR", true)],
                [reportPlayer("38", "Iuri Tavares", "6,7", "AI"), reportPlayer("27", "Latković", "6,4", "MO"), reportPlayer("18", "Gaprindashvili", "7,0", "Ex")],
                [reportPlayer("8", "Duvnjak", "7,0", "CJR", true), reportPlayer("24", "Marina", "6,6", "MD")],
                [reportPlayer("3", "Sikošek", "6,4", "AI"), reportPlayer("44", "Barać", "8,4", "DC", true), reportPlayer("16", "Tepšić", "6,9", "CC"), reportPlayer("23", "Maglica", "6,7", "DL")],
                [reportPlayer("1", "Zelenika", "7,5", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("99", "Teklić", "6,8", "AAE", true), reportPlayer("16", "Petrusenko", "6,7", "F9"), reportPlayer("23", "Vrbančić", "7,1", "AAE")],
                [reportPlayer("9", "Touré", "6,4", "MO"), reportPlayer("17", "Jakupović", "6,1", "MO")],
                [reportPlayer("18", "Farkaš", "6,5", "Pi")],
                [reportPlayer("38", "Čolina", "6,6", "AI"), reportPlayer("26", "Jelenić", "6,7", "CP"), reportPlayer("15", "Mersinaj", "6,6", "CP"), reportPlayer("29", "Karačić", "6,0", "AI")],
                [reportPlayer("31", "Malenica", "6,7", "GR")]
            ])
        },
        events: {
            home: ["64' S. Jurić M. Vuk", "67' T. Duvnjak M. Vuk", "73' M. Barać P. Bočkaj", "86' M. Barać"],
            away: ["8' T. Teklić L. Vrbančić"]
        },
        stats: [
            { label: "Posse", home: "30%", away: "70%" },
            { label: "Remates", home: "21", away: "10" },
            { label: "Remates à Baliza", home: "10", away: "6" },
            { label: "xG", home: "2,90", away: "1,65" },
            { label: "PADPAD", home: "25,56", away: "9,33" },
            { label: "Oportunidades Flagrantes", home: "3", away: "1" },
            { label: "Cantos", home: "8", away: "6" },
            { label: "Passes Completados", home: "74%", away: "88%" },
            { label: "Cruzamentos Completados", home: "41%", away: "22%" },
            { label: "Faltas", home: "6", away: "14" },
            { label: "Cartões amarelos", home: "0", away: "2" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "117", away: "118" },
            { label: "Classificação Média", home: "7,1", away: "6,5" }
        ]
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
            home: reportFormation("4-2-3-1", [
                [reportPlayer("21", "Puljić", "5,8", "F9"), reportPlayer("10", "Gonzalez", "6,2", "AAE")],
                [reportPlayer("9", "Kulušić", "6,4", "MC"), reportPlayer("77", "Shabani", "6,2", "MO")],
                [reportPlayer("3", "Bosec", "6,2", "AI"), reportPlayer("18", "Antolković", "6,4", "MD"), reportPlayer("91", "Tićinović", "7,2", "AI")],
                [reportPlayer("5", "Elez", "6,6", "CC"), reportPlayer("12", "Živković", "6,5", "DC"), reportPlayer("4", "Mitrović", "6,6", "CC")],
                [reportPlayer("42", "Daković", "7,2", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("7", "Keita Balde", "7,5", "AAE", true), reportPlayer("77", "Jurić", "6,5", "AvR")],
                [reportPlayer("10", "Fruk", "6,9", "CL")],
                [reportPlayer("26", "Dantas", "6,7", "CJA"), reportPlayer("8", "Petrović", "6,9", "MC")],
                [reportPlayer("15", "Martínez T.", "7,0", "Pi")],
                [reportPlayer("34", "Devetak", "7,8", "AI", true), reportPlayer("6", "Radeljić", "7,4", "CC"), reportPlayer("4", "Andrade", "7,4", "CC"), reportPlayer("23", "Lasickas", "8,5", "AI")],
                [reportPlayer("1", "Letica", "7,4", "GRC")]
            ])
        },
        events: { home: [], away: ["11' M. Devetak T. Fruk", "74' K. Baldé J. Lasickas"] },
        stats: [
            { label: "Posse", home: "40%", away: "60%" },
            { label: "Remates", home: "8", away: "11" },
            { label: "Remates à Baliza", home: "0", away: "7" },
            { label: "xG", home: "1,13", away: "1,40" },
            { label: "PADPAD", home: "16,57", away: "29,92" },
            { label: "Oportunidades Flagrantes", home: "1", away: "2" },
            { label: "Cantos", home: "3", away: "4" },
            { label: "Passes Completados", home: "90%", away: "92%" },
            { label: "Cruzamentos Completados", home: "20%", away: "28%" },
            { label: "Faltas", home: "14", away: "16" },
            { label: "Cartões amarelos", home: "1", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "135", away: "136" },
            { label: "Classificação Média", home: "6,5", away: "7,3" }
        ]
    }
];

const croatiaRoundNineReports = [
    {
        fixtureKey: "2025-10-04-nk-istra-1961-hnk-vukovar",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Aldo Drosina",
        weather: "Vento Forte",
        playerOfMatch: "Mohamed Nasraoui",
        rating: "7,43",
        coaches: { home: "João Pedro Rato", away: "Hugo Macedo" },
        formations: { home: "4-2-3-1", away: "4-2-3-1" },
        events: { home: [], away: [] },
        stats: [
            { label: "Posse", home: "58%", away: "42%" },
            { label: "Remates", home: "13", away: "8" },
            { label: "Remates à Baliza", home: "5", away: "3" },
            { label: "xG", home: "1,31", away: "0,46" },
            { label: "PADPAD", home: "15,82", away: "19,81" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "5", away: "8" },
            { label: "Passes Completados", home: "88%", away: "83%" },
            { label: "Cruzamentos Completados", home: "26%", away: "6%" },
            { label: "Faltas", home: "7", away: "8" },
            { label: "Cartões amarelos", home: "1", away: "2" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "127", away: "124" },
            { label: "Classificação Média", home: "6,8", away: "6,6" }
        ]
    },
    {
        fixtureKey: "2025-10-04-nk-lokomotiva-nk-varazdin",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Maksimir",
        weather: "Calmo",
        playerOfMatch: "Bence Biró",
        rating: "8,04",
        coaches: { home: "P. Natal", away: "João Nabais" },
        formations: { home: "3-4-1-2", away: "4-3-3 DM" },
        events: {
            home: ["34' M. Rog", "44' A. Stojaković M. Vešović", "67' A. Stojaković J. Córdoba"],
            away: ["12' G. Sikošek M. Barać", "55' T. Duvnjak F. Maglica", "78' T. Gaprindashvili B. Biró"]
        },
        stats: [
            { label: "Posse", home: "59%", away: "41%" },
            { label: "Remates", home: "9", away: "19" },
            { label: "Remates à Baliza", home: "4", away: "8" },
            { label: "xG", home: "2,42", away: "2,93" },
            { label: "PADPAD", home: "18,56", away: "20,09" },
            { label: "Oportunidades Flagrantes", home: "3", away: "3" },
            { label: "Cantos", home: "6", away: "7" },
            { label: "Passes Completados", home: "90%", away: "85%" },
            { label: "Cruzamentos Completados", home: "13%", away: "37%" },
            { label: "Faltas", home: "12", away: "11" },
            { label: "Cartões amarelos", home: "4", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "122", away: "126" },
            { label: "Classificação Média", home: "6,9", away: "7,0" }
        ]
    },
    {
        fixtureKey: "2025-10-04-nk-osijek-hajduk-split",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Opus Arena",
        weather: "Vento Forte",
        playerOfMatch: "Arnel Jakupović",
        rating: "7,89",
        coaches: { home: "Gamy Chambelito", away: "Gonzalo García" },
        formations: { home: "4-2-3-1", away: "4-3-3 DM" },
        events: {
            home: ["31' M. Gradel F. Karačić", "45+3' A. Jakupović", "90+3' K. Ademi N. Farkaš"],
            away: ["58' I. Almena M. Livaja"]
        },
        stats: [
            { label: "Posse", home: "48%", away: "52%" },
            { label: "Remates", home: "16", away: "8" },
            { label: "Remates à Baliza", home: "11", away: "4" },
            { label: "xG", home: "2,16", away: "0,22" },
            { label: "PADPAD", home: "19,00", away: "21,00" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "8", away: "6" },
            { label: "Passes Completados", home: "88%", away: "90%" },
            { label: "Cruzamentos Completados", home: "27%", away: "12%" },
            { label: "Faltas", home: "11", away: "14" },
            { label: "Cartões amarelos", home: "1", away: "2" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "128", away: "120" },
            { label: "Classificação Média", home: "6,8", away: "6,5" }
        ]
    },
    {
        fixtureKey: "2025-10-04-hnk-rijeka-dinamo-zagreb",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Rujevica",
        weather: "Vento Forte",
        playerOfMatch: "Keita Baldé",
        rating: "9,57",
        coaches: { home: "Zép Jóbes", away: "M. Kovačević" },
        formations: { home: "3-4-2-1", away: "4-3-3 DM" },
        events: {
            home: ["20' K. Baldé T. Fruk", "22' K. Baldé A. Jurić", "24' T. Fruk"],
            away: ["26' F. Topić Dion Beljo"]
        },
        stats: [
            { label: "Posse", home: "62%", away: "38%" },
            { label: "Remates", home: "26", away: "11" },
            { label: "Remates à Baliza", home: "16", away: "7" },
            { label: "xG", home: "4,22", away: "1,16" },
            { label: "PADPAD", home: "14,09", away: "24,29" },
            { label: "Oportunidades Flagrantes", home: "3", away: "1" },
            { label: "Cantos", home: "16", away: "11" },
            { label: "Passes Completados", home: "90%", away: "86%" },
            { label: "Cruzamentos Completados", home: "23%", away: "17%" },
            { label: "Faltas", home: "11", away: "9" },
            { label: "Cartões amarelos", home: "4", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "1" },
            { label: "Distância Percorrida", home: "127", away: "123" },
            { label: "Classificação Média", home: "7,4", away: "6,7" }
        ]
    },
    {
        fixtureKey: "2025-10-04-nk-slaven-belupo-hnk-gorica",
        date: "Sábado 4 de Outubro de 2025",
        stadium: "Gradski stadion Ivan Kušek Apaš",
        weather: "Calmo",
        playerOfMatch: "Bruno Bogojević",
        rating: "9,30",
        coaches: { home: "Francisco Pinto", away: "Miguel Cardoso" },
        formations: { home: "4-2-3-1", away: "4-3-3 DM" },
        events: {
            home: [],
            away: ["45+2' B. Bogojević", "66' I. Pozo B. Bogojević", "77' B. Bogojević T. Epailliy"]
        },
        stats: [
            { label: "Posse", home: "69%", away: "31%" },
            { label: "Remates", home: "11", away: "6" },
            { label: "Remates à Baliza", home: "5", away: "5" },
            { label: "xG", home: "1,17", away: "1,31" },
            { label: "PADPAD", home: "13,65", away: "33,38" },
            { label: "Oportunidades Flagrantes", home: "0", away: "1" },
            { label: "Cantos", home: "5", away: "4" },
            { label: "Passes Completados", home: "92%", away: "83%" },
            { label: "Cruzamentos Completados", home: "11%", away: "8%" },
            { label: "Faltas", home: "13", away: "11" },
            { label: "Cartões amarelos", home: "2", away: "2" },
            { label: "Cartões vermelhos", home: "1", away: "0" },
            { label: "Distância Percorrida", home: "117", away: "122" },
            { label: "Classificação Média", home: "6,4", away: "7,1" }
        ]
    }
];

const croatiaRoundTenReports = [
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
            away: reportFormation("4-2-3-1", [
                [reportPlayer("90", "Nestorovski", "6,6", "AR"), reportPlayer("7", "Dabro", "6,5", "AAE")],
                [reportPlayer("21", "Crepulja", "7,2", "ME"), reportPlayer("15", "Čubelić", "6,3", "CJA")],
                [reportPlayer("3", "Jakir", "6,1", "AI"), reportPlayer("8", "Mrowca", "6,7", "MD"), reportPlayer("18", "Krušelj", "7,0", "AI")],
                [reportPlayer("24", "Stepinac", "6,5", "DC"), reportPlayer("2", "Međimorec", "6,0", "DC"), reportPlayer("4", "Kovicić", "6,8", "CC")],
                [reportPlayer("31", "Hadžikić", "6,8", "GR")]
            ])
        },
        events: {
            home: ["55' A. Hoxha M. Valinčić", "65' Dion Beljo L. Stojković", "79' Dion Beljo M. Zajc"],
            away: ["45+1' I. Božić L. Crepulja"]
        },
        stats: [
            { label: "Posse", home: "51%", away: "49%" },
            { label: "Remates", home: "21", away: "6" },
            { label: "Remates à Baliza", home: "10", away: "2" },
            { label: "xG", home: "2,25", away: "1,32" },
            { label: "PADPAD", home: "18,38", away: "16,29" },
            { label: "Oportunidades Flagrantes", home: "1", away: "2" },
            { label: "Cantos", home: "11", away: "5" },
            { label: "Passes Completados", home: "92%", away: "89%" },
            { label: "Cruzamentos Completados", home: "32%", away: "11%" },
            { label: "Faltas", home: "8", away: "10" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "118", away: "116" },
            { label: "Classificação Média", home: "7,1", away: "6,6" }
        ]
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
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Jurić", "6,3", "AR")],
                [reportPlayer("7", "Vuk", "6,2", "AI"), reportPlayer("27", "Latković", "6,4", "MO"), reportPlayer("18", "Gaprindashvili", "6,2", "Ex")],
                [reportPlayer("8", "Duvnjak", "6,5", "CJR"), reportPlayer("6", "Puclin", "6,4", "MD")],
                [reportPlayer("3", "Sikošek", "6,3", "AI"), reportPlayer("44", "Barać", "6,4", "DC"), reportPlayer("16", "Tepšić", "6,7", "CC"), reportPlayer("23", "Maglica", "6,6", "DL")],
                [reportPlayer("1", "Zelenika", "6,7", "GR")]
            ])
        },
        events: {
            home: ["10' L. Vrzić", "33' J. Pršir D. Pavičić", "82' W. Sule I. Pozo"],
            away: []
        },
        stats: [
            { label: "Posse", home: "40%", away: "60%" },
            { label: "Remates", home: "15", away: "11" },
            { label: "Remates à Baliza", home: "9", away: "2" },
            { label: "xG", home: "1,83", away: "0,48" },
            { label: "PADPAD", home: "18,73", away: "12,37" },
            { label: "Oportunidades Flagrantes", home: "3", away: "0" },
            { label: "Cantos", home: "4", away: "1" },
            { label: "Passes Completados", home: "82%", away: "87%" },
            { label: "Cruzamentos Completados", home: "17%", away: "5%" },
            { label: "Faltas", home: "9", away: "6" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "1", away: "0" },
            { label: "Distância Percorrida", home: "121", away: "123" },
            { label: "Classificação Média", home: "7,1", away: "6,4" }
        ]
    },
    {
        fixtureKey: "2025-10-18-hajduk-split-nk-lokomotiva",
        date: "Sábado 18 de Outubro de 2025",
        stadium: "Poljud",
        weather: "Calmo",
        playerOfMatch: "Marko Rog",
        rating: "7,75",
        coaches: { home: "Gonzalo García", away: "P. Natal" },
        formations: {
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,8", "AR", true)],
                [reportPlayer("9", "A. Rebić", "6,7", "EAI"), reportPlayer("11", "Šego", "6,4", "EAI")],
                [reportPlayer("21", "Pukštas", "6,5", "MC"), reportPlayer("23", "Krovinović", "6,2", "MO")],
                [reportPlayer("6", "Hugo G.", "6,9", "MD")],
                [reportPlayer("3", "Auer", "7,1", "AI"), reportPlayer("14", "Raçi", "6,4", "CC"), reportPlayer("15", "Marešić", "6,3", "CC"), reportPlayer("55", "Šumelj", "6,7", "DL")],
                [reportPlayer("33", "Silić", "6,2", "GR")]
            ]),
            away: reportFormation("3-4-1-2", [
                [reportPlayer("7", "Trajkovski", "7,0", "AAE", true), reportPlayer("15", "Stojaković", "7,2", "AC", true)],
                [reportPlayer("40", "McCarthy", "6,7", "MC"), reportPlayer("28", "Belcar", "7,2", "MC"), reportPlayer("26", "Rog", "7,8", "MC", true)],
                [reportPlayer("17", "Pajač", "6,9", "AP"), reportPlayer("23", "Vešović", "6,6", "AP")],
                [reportPlayer("4", "Sigali", "6,7", "DC"), reportPlayer("16", "Dajčer", "6,6", "CC"), reportPlayer("20", "Kolinger", "6,9", "DC")],
                [reportPlayer("", "Posavec", "6,5", "GR")]
            ])
        },
        events: {
            home: ["58' M. Livaja V. Šumelj"],
            away: ["19' A. Stojaković A. Trajkovski", "28' M. Rog"]
        },
        stats: [
            { label: "Posse", home: "40%", away: "60%" },
            { label: "Remates", home: "11", away: "8" },
            { label: "Remates à Baliza", home: "4", away: "4" },
            { label: "xG", home: "1,39", away: "1,18" },
            { label: "PADPAD", home: "18,59", away: "14,58" },
            { label: "Oportunidades Flagrantes", home: "1", away: "1" },
            { label: "Cantos", home: "5", away: "8" },
            { label: "Passes Completados", home: "89%", away: "90%" },
            { label: "Cruzamentos Completados", home: "24%", away: "7%" },
            { label: "Faltas", home: "9", away: "11" },
            { label: "Cartões amarelos", home: "1", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "119", away: "116" },
            { label: "Classificação Média", home: "6,6", away: "6,9" }
        ]
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
            home: reportFormation("3-4-2-1", [
                [reportPlayer("7", "Keita Balde", "6,3", "AAE"), reportPlayer("27", "Ambrose", "6,5", "AvR")],
                [reportPlayer("10", "Fruk", "6,5", "CL")],
                [reportPlayer("26", "Dantas", "6,8", "CJA"), reportPlayer("8", "Petrović", "7,4", "MC")],
                [reportPlayer("15", "Martínez T.", "7,0", "Pi")],
                [reportPlayer("34", "Devetak", "9,2", "AI", true), reportPlayer("6", "Radeljić", "8,1", "CC"), reportPlayer("4", "Andrade", "7,0", "CC"), reportPlayer("23", "Lasickas", "7,1", "AI")],
                [reportPlayer("1", "Letica", "7,3", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,3", "AAE"), reportPlayer("14", "Tóth", "6,3", "AR")],
                [reportPlayer("11", "Goričan", "7,0", "AA"), reportPlayer("17", "Frederiksen", "6,6", "CJA")],
                [reportPlayer("10", "Lončar", "6,5", "MAA"), reportPlayer("5", "Radošević", "6,7", "MD")],
                [reportPlayer("26", "Heister", "6,4", "AI"), reportPlayer("4", "Johnston", "6,6", "CC"), reportPlayer("3", "Nasraoui", "6,4", "DC"), reportPlayer("97", "Kadusić", "6,6", "AI")],
                [reportPlayer("1", "Kolić", "7,3", "GR")]
            ])
        },
        events: {
            home: ["69' A. Jurić A. Oreč", "78' S. Vignato M. Devetak"],
            away: []
        },
        stats: [
            { label: "Posse", home: "58%", away: "42%" },
            { label: "Remates", home: "21", away: "8" },
            { label: "Remates à Baliza", home: "12", away: "2" },
            { label: "xG", home: "2,16", away: "1,40" },
            { label: "PADPAD", home: "10,88", away: "30,64" },
            { label: "Oportunidades Flagrantes", home: "1", away: "2" },
            { label: "Cantos", home: "9", away: "7" },
            { label: "Passes Completados", home: "89%", away: "86%" },
            { label: "Cruzamentos Completados", home: "40%", away: "16%" },
            { label: "Faltas", home: "6", away: "9" },
            { label: "Cartões amarelos", home: "1", away: "3" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "128", away: "128" },
            { label: "Classificação Média", home: "7,3", away: "6,6" }
        ]
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
            home: reportFormation("4-2-3-1", [
                [reportPlayer("10", "Gonzalez", "6,6", "F9", true), reportPlayer("21", "Puljić", "6,9", "AAE", true)],
                [reportPlayer("77", "Shabani", "6,5", "MC"), reportPlayer("40", "Landel", "6,2", "MO")],
                [reportPlayer("7", "Kerim Çalhanoglu", "6,4", "AI"), reportPlayer("23", "Matić", "6,4", "MD"), reportPlayer("16", "Pavičić", "6,1", "AI")],
                [reportPlayer("12", "Živković", "6,5", "CC"), reportPlayer("4", "Mitrović", "6,6", "DC"), reportPlayer("5", "Elez", "6,7", "CC")],
                [reportPlayer("42", "Đaković", "6,5", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("20", "Gradel", "7,1", "AAE", true), reportPlayer("17", "Jakupović", "8,8", "F9", true), reportPlayer("34", "Matković", "7,9", "AAE", true)],
                [reportPlayer("10", "Shopov", "6,8", "MO"), reportPlayer("23", "Vrbančić", "6,9", "MO", true)],
                [reportPlayer("16", "Petrusenko", "6,9", "Pi")],
                [reportPlayer("38", "Čolina", "7,3", "AI"), reportPlayer("26", "Jelenić", "7,4", "CP"), reportPlayer("15", "Mersinaj", "6,8", "CP"), reportPlayer("29", "Karačić", "7,3", "AI")],
                [reportPlayer("31", "Malenica", "7,1", "GR")]
            ])
        },
        events: {
            home: ["53' J. Puljić Š. Butić", "73' R. Gonzalez Š. Butić"],
            away: ["22' A. Matković S. Shopov", "48' A. Jakupović pen", "67' A. Jakupović M. Gradel", "80' Y. Touré A. Jakupović", "83' Y. Touré L. Vrbančić"]
        },
        stats: [
            { label: "Posse", home: "46%", away: "54%" },
            { label: "Remates", home: "13", away: "17" },
            { label: "Remates à Baliza", home: "8", away: "9" },
            { label: "xG", home: "1,12", away: "2,89" },
            { label: "PADPAD", home: "25,77", away: "19,93" },
            { label: "Oportunidades Flagrantes", home: "0", away: "3" },
            { label: "Cantos", home: "9", away: "8" },
            { label: "Passes Completados", home: "83%", away: "86%" },
            { label: "Cruzamentos Completados", home: "10%", away: "31%" },
            { label: "Faltas", home: "10", away: "8" },
            { label: "Cartões amarelos", home: "1", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "125", away: "127" },
            { label: "Classificação Média", home: "6,6", away: "7,3" }
        ]
    }
];

const croatiaRoundElevenReports = [
    {
        fixtureKey: "2025-10-25-nk-istra-1961-dinamo-zagreb",
        date: "Sábado 25 de Outubro de 2025",
        stadium: "Aldo Drosina",
        weather: "Calmo",
        playerOfMatch: "Scott McKenna",
        rating: "7,66",
        coaches: { home: "João Pedro Rato", away: "M. Kovačević" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Prevljak", "6,4", "AAE"), reportPlayer("14", "Tóth", "7,3", "AR", true)],
                [reportPlayer("11", "Goričan", "6,5", "AI"), reportPlayer("17", "Frederiksen", "6,7", "CJA")],
                [reportPlayer("26", "Heister", "6,5", "AI"), reportPlayer("10", "Štulac", "6,7", "CJA"), reportPlayer("5", "Radošević", "6,4", "MD")],
                [reportPlayer("4", "Johnston", "6,3", "CC"), reportPlayer("3", "Nasraoui", "6,7", "DC"), reportPlayer("97", "Kadusić", "6,7", "AI")],
                [reportPlayer("1", "Kolić", "6,4", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("9", "Dion Beljo", "6,7", "ACL")],
                [reportPlayer("11", "Hoxha", "7,4", "MO", true)],
                [reportPlayer("30", "Topić", "6,6", "MA"), reportPlayer("27", "Mišić", "6,7", "MA")],
                [reportPlayer("8", "Zajc", "7,5", "MD"), reportPlayer("4", "Bennacer", "7,1", "MDT")],
                [reportPlayer("22", "Pérez Vinlöf", "6,7", "DL"), reportPlayer("26", "McKenna", "7,7", "CA", true), reportPlayer("15", "Galešić", "7,2", "DC"), reportPlayer("25", "Valinčić", "6,6", "DL")],
                [reportPlayer("40", "Livaković", "7,2", "GRC")]
            ])
        },
        events: {
            home: ["4' B. Tóth A. Kadusić"],
            away: ["14' S. McKenna M. Zajc", "29' A. Hoxha M. Zajc", "77' B. Goda I. Bennacer"]
        },
        stats: [
            { label: "Posse", home: "50%", away: "50%" },
            { label: "Remates", home: "15", away: "11" },
            { label: "Remates à Baliza", home: "10", away: "8" },
            { label: "xG", home: "1,25", away: "0,69" },
            { label: "PADPAD", home: "33,07", away: "28,36" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "11", away: "6" },
            { label: "Passes Completados", home: "91%", away: "91%" },
            { label: "Cruzamentos Completados", home: "12%", away: "25%" },
            { label: "Faltas", home: "7", away: "7" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "132", away: "127" },
            { label: "Classificação Média", home: "6,6", away: "7,0" }
        ]
    },
    {
        fixtureKey: "2025-10-25-nk-lokomotiva-hnk-rijeka",
        date: "Sábado 25 de Outubro de 2025",
        stadium: "Maksimir",
        weather: "Brisa",
        playerOfMatch: "Rui Pedro",
        rating: "9,37",
        coaches: { home: "P. Natal", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("3-4-1-2", [
                [reportPlayer("7", "Trajkovski", "7,2", "AAE"), reportPlayer("10", "Rui Pedro", "9,4", "F9", true)],
                [reportPlayer("40", "McCarthy", "6,8", "MC"), reportPlayer("28", "Belcar", "6,6", "MC"), reportPlayer("26", "Rog", "6,8", "MC")],
                [reportPlayer("17", "Pajač", "6,5", "AP"), reportPlayer("23", "Vešović", "7,4", "AP")],
                [reportPlayer("4", "Sigali", "6,4", "DC"), reportPlayer("16", "Dajčer", "7,1", "CC"), reportPlayer("20", "Kolinger", "6,5", "DC")],
                [reportPlayer("12", "Posavec", "7,2", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("77", "Jurić", "6,5", "AE")],
                [reportPlayer("10", "Fruk", "6,3", "Ex"), reportPlayer("7", "Keita Balde", "6,9", "Ex", true)],
                [reportPlayer("8", "Petrović", "6,5", "MC")],
                [reportPlayer("15", "Martínez T.", "6,9", "MD"), reportPlayer("4", "Andrade", "6,6", "MD")],
                [reportPlayer("34", "Devetak", "6,8", "DL"), reportPlayer("6", "Radeljić", "6,7", "DC"), reportPlayer("26", "Dantas", "6,3", "DC"), reportPlayer("23", "Lasickas", "7,1", "DL")],
                [reportPlayer("1", "Letica", "6,2", "GRL")]
            ])
        },
        events: {
            home: ["5' Rui Pedro", "7' Rui Pedro", "32' Rui Pedro M. Vešović"],
            away: ["33' K. Baldé J. Lasickas"]
        },
        stats: [
            { label: "Posse", home: "50%", away: "50%" },
            { label: "Remates", home: "19", away: "16" },
            { label: "Remates à Baliza", home: "8", away: "7" },
            { label: "xG", home: "2,09", away: "2,03" },
            { label: "PADPAD", home: "26,91", away: "16,95" },
            { label: "Oportunidades Flagrantes", home: "1", away: "1" },
            { label: "Cantos", home: "12", away: "8" },
            { label: "Passes Completados", home: "89%", away: "87%" },
            { label: "Cruzamentos Completados", home: "27%", away: "42%" },
            { label: "Faltas", home: "12", away: "19" },
            { label: "Cartões amarelos", home: "1", away: "3" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "114", away: "119" },
            { label: "Classificação Média", home: "7,1", away: "6,6" }
        ]
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
            home: reportFormation("4-1-2-3", [
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
                [reportPlayer("19", "Čabraja", "6,1", "AI"), reportPlayer("4", "J. Filipović", "6,5", "DC"), reportPlayer("45", "Leš", "6,5", "CP"), reportPlayer("22", "Trontelj", "6,6", "AI")],
                [reportPlayer("71", "Matijaš", "6,9", "GRC")]
            ])
        },
        events: {
            home: ["5' A. Matković L. Vrbančić", "31' A. Jakupović pen", "90' M. Gradel L. Vrbančić"],
            away: ["28' B. Bogojević expulso"]
        },
        stats: [
            { label: "Posse", home: "63%", away: "37%" },
            { label: "Remates", home: "23", away: "5" },
            { label: "Remates à Baliza", home: "12", away: "2" },
            { label: "xG", home: "2,99", away: "0,16" },
            { label: "PADPAD", home: "10,07", away: "26,75" },
            { label: "Oportunidades Flagrantes", home: "2", away: "0" },
            { label: "Cantos", home: "14", away: "4" },
            { label: "Passes Completados", home: "89%", away: "78%" },
            { label: "Cruzamentos Completados", home: "22%", away: "9%" },
            { label: "Faltas", home: "5", away: "11" },
            { label: "Cartões amarelos", home: "0", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "1" },
            { label: "Distância Percorrida", home: "130", away: "120" },
            { label: "Classificação Média", home: "7,3", away: "6,4" }
        ]
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
                [reportPlayer("15", "Čubelić", "6,7", "CJA")],
                [reportPlayer("3", "Jakir", "6,6", "AI"), reportPlayer("8", "Mrowca", "6,6", "MAA"), reportPlayer("10", "Caimacov", "6,8", "MD"), reportPlayer("18", "Krušelj", "6,9", "AI")],
                [reportPlayer("5", "Ćosić", "6,3", "CC"), reportPlayer("6", "Božić", "6,7", "DC", true), reportPlayer("4", "Kovicić", "6,4", "CC")],
                [reportPlayer("31", "Hadžikić", "6,6", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Kulušić", "6,6", "AAE")],
                [reportPlayer("21", "Puljić", "7,4", "AI", true), reportPlayer("7", "Kerim Çalhan.", "6,6", "AI")],
                [reportPlayer("10", "Gonzalez", "7,0", "ME"), reportPlayer("15", "Gurlica", "6,9", "CJA")],
                [reportPlayer("23", "Matić", "6,4", "MD")],
                [reportPlayer("91", "Tićinović", "7,3", "AI", true), reportPlayer("4", "Mitrović", "6,9", "DC"), reportPlayer("12", "Živković", "6,7", "DC"), reportPlayer("5", "Elez", "6,6", "AI")],
                [reportPlayer("42", "Đaković", "7,5", "GR")]
            ])
        },
        events: {
            home: ["18' I. Božić I. Čubelić"],
            away: ["21' M. Tićinović", "69' J. Puljić Š. Butić", "79' J. Moreno Š. Butić"]
        },
        stats: [
            { label: "Posse", home: "53%", away: "47%" },
            { label: "Remates", home: "10", away: "14" },
            { label: "Remates à Baliza", home: "5", away: "9" },
            { label: "xG", home: "1,19", away: "1,31" },
            { label: "PADPAD", home: "18,05", away: "19,74" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "5", away: "10" },
            { label: "Passes Completados", home: "88%", away: "87%" },
            { label: "Cruzamentos Completados", home: "17%", away: "13%" },
            { label: "Faltas", home: "19", away: "6" },
            { label: "Cartões amarelos", home: "1", away: "0" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "127", away: "128" },
            { label: "Classificação Média", home: "6,6", away: "7,0" }
        ]
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
            home: reportFormation("4-3-3 DM", [
                [reportPlayer("17", "Mamut", "6,2", "AR")],
                [reportPlayer("22", "Mamić", "6,5", "AI"), reportPlayer("27", "Latković", "6,7", "MO"), reportPlayer("18", "Gaprindashvili", "6,5", "Ex")],
                [reportPlayer("8", "Duvnjak", "6,6", "CJR"), reportPlayer("6", "Puclin", "7,2", "CJA")],
                [reportPlayer("3", "Sikošek", "7,9", "AI", true), reportPlayer("44", "Barać", "7,1", "DC"), reportPlayer("16", "Tepšić", "6,8", "CC"), reportPlayer("23", "Maglica", "7,6", "DL")],
                [reportPlayer("1", "Zelenika", "7,4", "GR")]
            ]),
            away: reportFormation("4-3-3 DM", [
                [reportPlayer("10", "Livaja", "6,5", "AR")],
                [reportPlayer("9", "A. Rebić", "6,4", "EAI"), reportPlayer("11", "Šego", "6,7", "EAI")],
                [reportPlayer("7", "Kalik", "6,8", "MC"), reportPlayer("21", "Pukštas", "6,4", "MC")],
                [reportPlayer("23", "Krovinović", "6,4", "MD")],
                [reportPlayer("3", "Auer", "6,9", "AI"), reportPlayer("14", "Raçi", "6,8", "CC"), reportPlayer("15", "Marešić", "6,4", "CC"), reportPlayer("55", "Hrastović", "6,5", "AI")],
                [reportPlayer("33", "Silić", "6,8", "GR")]
            ])
        },
        events: {
            home: ["14' G. Sikošek D. Puclin"],
            away: []
        },
        stats: [
            { label: "Posse", home: "41%", away: "59%" },
            { label: "Remates", home: "12", away: "9" },
            { label: "Remates à Baliza", home: "6", away: "4" },
            { label: "xG", home: "1,57", away: "0,51" },
            { label: "PADPAD", home: "28,11", away: "17,74" },
            { label: "Oportunidades Flagrantes", home: "1", away: "0" },
            { label: "Cantos", home: "6", away: "4" },
            { label: "Passes Completados", home: "89%", away: "91%" },
            { label: "Cruzamentos Completados", home: "28%", away: "16%" },
            { label: "Faltas", home: "12", away: "11" },
            { label: "Cartões amarelos", home: "2", away: "1" },
            { label: "Cartões vermelhos", home: "0", away: "0" },
            { label: "Distância Percorrida", home: "121", away: "116" },
            { label: "Classificação Média", home: "7,0", away: "6,6" }
        ]
    }
];


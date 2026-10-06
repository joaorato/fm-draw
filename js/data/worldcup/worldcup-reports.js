// Todos os relatórios de jogo do Mundial, num ficheiro só.
//
// Ligam-se aos jogos pelo `fixtureKey` no worldcup-standings.js. Quem escreve um
// bloco é o `scripts/report_build.js`, a partir de uma transcrição em JSON, tal
// como na Croácia (ver a skill fm-match-report).
const worldCupMatchReports = [
    {
        fixtureKey: "2026-06-11-mexico-africa-do-sul",
        date: "Quinta-feira 11 de Junho de 2026",
        stadium: "Mexico City Stadium",
        weather: "Brisa",
        playerOfMatch: "Aubrey Modiba",
        rating: "7,68",
        coaches: { home: "J. Aguirre", away: "H. Broos" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("10", "J. Quiñones", "6,4", "AA")],
                [reportPlayer("11", "Vega", "6,3", "AI"), reportPlayer("20", "H. Lozano", "6,3", "AI")],
                [reportPlayer("3", "Gallardo", "6,7", "AI"), reportPlayer("16", "Chávez", "6,9", "CJR"), reportPlayer("4", "Álvarez", "6,4", "MD"), reportPlayer("19", "Tecatito", "7,1", "AP")],
                [reportPlayer("24", "Vásquez", "6,3", "CC"), reportPlayer("12", "Juárez", "6,3", "CC"), reportPlayer("17", "Reyes", "6,3", "CC")],
                [reportPlayer("1", "Malagón", "6,1", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Lyle Foster", "6,3", "AvR")],
                [reportPlayer("22", "Appollis", "6,9", "Ex"), reportPlayer("18", "Adams", "6,5", "ME"), reportPlayer("8", "Rayners", "6,2", "Ex")],
                [reportPlayer("15", "Mokoena", "7,5", "CJR", true), reportPlayer("16", "Aubaas", "7,2", "MD")],
                [reportPlayer("3", "Modiba", "7,7", "AI"), reportPlayer("5", "Mbokazi", "7,3", "CC"), reportPlayer("24", "Ngezana", "6,8", "CC"), reportPlayer("2", "Mudau", "7,0", "AII")],
                [reportPlayer("1", "Williams", "7,4", "GRC")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("22", "T. Mokoena", { assist: "A. Modiba" }), goalEvent("68", "G. Links", { assist: "A. Modiba" })]
        },
        stats: reportStats([
            ["Posse", "56%", "44%"],
            ["Remates", "17", "10"],
            ["Remates à Baliza", "6", "5"],
            ["xG", "1,59", "0,97"],
            ["PADPAD", "17,89", "44,22"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "6", "3"],
            ["Passes Completados", "92%", "88%"],
            ["Cruzamentos Completados", "30%", "13%"],
            ["Faltas", "16", "3"],
            ["Cartões amarelos", "2", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "118", "118"],
            ["Classificação Média", "6,4", "7,0"]
        ])
    },
    {
        fixtureKey: "2026-06-12-canada-bosnia-e-herzegovina",
        date: "Sexta-feira 12 de Junho de 2026",
        stadium: "Toronto Stadium",
        weather: "Brisa",
        playerOfMatch: "Tani Oluwaseyi",
        rating: "9,00",
        coaches: { home: "J. Marsch", away: "S. Barbarez" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("10", "J. David", "7,1", "AAE")],
                [reportPlayer("11", "Oluwaseyi", "9,0", "AI", true), reportPlayer("22", "Flores", "6,5", "MO"), reportPlayer("7", "Buchanan", "7,3", "Ex")],
                [reportPlayer("26", "Koné", "6,9", "MD"), reportPlayer("6", "Eustáquio", "7,7", "CJR", true)],
                [reportPlayer("19", "Davies", "7,9", "AI"), reportPlayer("5", "Cornelius", "7,2", "CC"), reportPlayer("4", "Bombito", "7,2", "CC"), reportPlayer("2", "Johnston", "6,6", "DL")],
                [reportPlayer("1", "St. Clair", "7,5", "GR")]
            ]),
            away: reportFormation("3-3-2-2", [
                [reportPlayer("10", "Džeko", "6,2", "AvR"), reportPlayer("9", "Demirović", "6,2", "AR")],
                [reportPlayer("12", "Huseinbašić", "6,5", "MC"), reportPlayer("7", "Krunić", "6,2", "MC")],
                [reportPlayer("19", "Karić", "6,2", "AI"), reportPlayer("6", "Gigović", "6,4", "CJR"), reportPlayer("2", "Dedić", "5,9", "AP")],
                [reportPlayer("4", "Kolašinac", "6,2", "CA"), reportPlayer("14", "Muharemo...", "6,6", "DC"), reportPlayer("5", "Barišić", "6,5", "DC")],
                [reportPlayer("22", "Vasilj", "6,4", "GR")]
            ])
        },
        events: {
            home: [goalEvent("1", "T. Oluwaseyi", { assist: "J. David" }), goalEvent("3", "T. Oluwaseyi", { assist: "A. Davies" }), goalEvent("29", "T. Oluwaseyi", { penalty: true }), goalEvent("45+1", "S. Eustáquio", { assist: "T. Buchanan" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "52%", "48%"],
            ["Remates", "15", "7"],
            ["Remates à Baliza", "8", "2"],
            ["xG", "1,94", "0,26"],
            ["PADPAD", "13,48", "18,81"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "10", "4"],
            ["Passes Completados", "86%", "80%"],
            ["Cruzamentos Completados", "6%", "8%"],
            ["Faltas", "8", "12"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "118", "116"],
            ["Classificação Média", "7,3", "6,3"]
        ])
    },
    {
        fixtureKey: "2026-06-12-estados-unidos-paraguai",
        date: "Sexta-feira 12 de Junho de 2026",
        stadium: "Los Angeles Stadium",
        weather: "Brisa",
        playerOfMatch: "Jorge Morel",
        rating: "7,39",
        coaches: { home: "João Nabais", away: "G. Alfaro" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("18", "Balogun", "6,5", "AvR")],
                [reportPlayer("8", "Tillman", "6,3", "AI"), reportPlayer("7", "Reyna", "6,6", "MO"), reportPlayer("2", "T. Weah", "6,9", "AA")],
                [reportPlayer("4", "Adams", "7,2", "MD"), reportPlayer("6", "McKennie", "6,5", "MAA")],
                [reportPlayer("3", "Robinson", "6,7", "DL"), reportPlayer("19", "Richards", "7,0", "CC"), reportPlayer("5", "Robinson", "6,9", "DC"), reportPlayer("17", "Dest", "7,1", "DL")],
                [reportPlayer("13", "Turner", "7,1", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("25", "T. Sanabria", "6,4", "AC")],
                [reportPlayer("9", "Enciso", "6,5", "Ex"), reportPlayer("16", "Maurício", "6,3", "CJA"), reportPlayer("6", "Almirón", "6,6", "AA")],
                [reportPlayer("21", "Morel", "7,4", "MD"), reportPlayer("8", "Cubas", "6,8", "MAA")],
                [reportPlayer("17", "Sández", "6,9", "DL"), reportPlayer("5", "Omar Alder...", "7,1", "DC"), reportPlayer("15", "G. Gómez", "7,2", "DC"), reportPlayer("19", "Escobar", "6,8", "DL")],
                [reportPlayer("14", "Olveira", "7,1", "GR")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "49%", "51%"],
            ["Remates", "15", "6"],
            ["Remates à Baliza", "5", "3"],
            ["xG", "1,29", "0,50"],
            ["PADPAD", "22,14", "27,36"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "9", "4"],
            ["Passes Completados", "88%", "89%"],
            ["Cruzamentos Completados", "10%", "38%"],
            ["Faltas", "8", "14"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "126", "117"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2026-06-11-chequia-coreia-do-sul",
        date: "Quinta-feira 11 de Junho de 2026",
        stadium: "Estadio Guadalajara",
        weather: "Tempestuoso",
        playerOfMatch: "Jan Kuchta",
        rating: "7,57",
        coaches: { home: "M. Koubek", away: "Hong Myung-Bo" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("12", "Chytil", "6,5", "AvR")],
                [reportPlayer("25", "Hložek", "6,5", "ME"), reportPlayer("11", "Šulc", "6,8", "SA")],
                [reportPlayer("3", "Spáčil", "6,7", "AI"), reportPlayer("7", "Sadílek", "7,0", "CJR"), reportPlayer("6", "Král", "7,4", "MD"), reportPlayer("5", "Coufal", "7,0", "AI")],
                [reportPlayer("17", "Krejčí", "7,1", "CC"), reportPlayer("4", "Holeš", "7,1", "CC"), reportPlayer("19", "Hranáč", "7,1", "CP")],
                [reportPlayer("13", "Horníček", "7,5", "GRP")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("6", "Son", "6,2", "AAE")],
                [reportPlayer("19", "Hee Chan", "6,3", "Ex"), reportPlayer("25", "Lee", "6,3", "CJA"), reportPlayer("7", "Lee Kang In", "6,7", "EAI")],
                [reportPlayer("15", "Paik Seung...", "6,4", "MD"), reportPlayer("8", "Inbeom", "6,5", "CJR")],
                [reportPlayer("16", "Lee Myung...", "6,3", "AI"), reportPlayer("4", "Minjae", "7,1", "CC"), reportPlayer("17", "Hong Jeon...", "6,5", "CC"), reportPlayer("2", "Moon Hwan", "6,9", "DL")],
                [reportPlayer("1", "Jo Hyeon-...", "6,9", "GRP")]
            ])
        },
        events: {
            home: [goalEvent("76", "J. Kuchta", { assist: "O. Lingr" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "56%", "44%"],
            ["Remates", "19", "8"],
            ["Remates à Baliza", "7", "5"],
            ["xG", "1,53", "1,00"],
            ["PADPAD", "12,53", "21,86"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "10", "5"],
            ["Passes Completados", "86%", "85%"],
            ["Cruzamentos Completados", "12%", "10%"],
            ["Faltas", "7", "9"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "125"],
            ["Classificação Média", "7,0", "6,6"]
        ])
    }
];

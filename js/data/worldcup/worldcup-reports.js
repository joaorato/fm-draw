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
    },
    {
        fixtureKey: "2026-06-13-qatar-suica",
        date: "Sábado 13 de Junho de 2026",
        stadium: "San Francisco Bay Area Stadium",
        weather: "Brisa",
        playerOfMatch: "Dan Ndoye",
        rating: "9,40",
        coaches: { home: "J. Lopetegui", away: "Murat Yakin" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("11", "Moez", "6,2", "AAE")],
                [reportPlayer("10", "Afif", "6,3", "AI"), reportPlayer("25", "Asad", "6,4", "CJA"), reportPlayer("12", "Edmilson Jr.", "6,4", "AA")],
                [reportPlayer("7", "K.Boudiaf", "6,7", "CJR"), reportPlayer("6", "Guilherme", "6,4", "MD")],
                [reportPlayer("23", "Homam", "6,6", "AI"), reportPlayer("5", "Khoukhi", "6,8", "CC"), reportPlayer("4", "Tarek", "6,8", "CC"), reportPlayer("20", "A.Yousef", "6,5", "AII")],
                [reportPlayer("1", "Barsham", "7,2", "GRC")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("11", "Okafor", "8,4", "AvR", true)],
                [reportPlayer("17", "Vargas", "6,6", "Ex"), reportPlayer("8", "Ndoye", "9,4", "Ex")],
                [reportPlayer("6", "Xhaka", "7,8", "CJA"), reportPlayer("16", "Manzambi", "7,7", "MO")],
                [reportPlayer("7", "Zakaria", "7,0", "MD")],
                [reportPlayer("19", "Muheim", "6,8", "AC"), reportPlayer("5", "Rodríguez", "7,1", "CC"), reportPlayer("4", "Akanji", "7,1", "CC"), reportPlayer("12", "Elvedi", "6,9", "LI")],
                [reportPlayer("1", "Kobel", "7,2", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("23", "N. Okafor", { assist: "D. Ndoye" }), goalEvent("83", "J. Monteiro", { assist: "D. Ndoye" }), goalEvent("90+4", "N. Okafor")]
        },
        stats: reportStats([
            ["Posse", "58%", "42%"],
            ["Remates", "8", "29"],
            ["Remates à Baliza", "3", "13"],
            ["xG", "0,62", "4,28"],
            ["PADPAD", "17,00", "13,51"],
            ["Oportunidades Flagrantes", "0", "3"],
            ["Cantos", "7", "14"],
            ["Passes Completados", "90%", "86%"],
            ["Cruzamentos Completados", "26%", "28%"],
            ["Faltas", "8", "7"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "125"],
            ["Classificação Média", "6,6", "7,4"]
        ])
    },
    {
        fixtureKey: "2026-06-13-australia-turquia",
        date: "Sábado 13 de Junho de 2026",
        stadium: "BC Place Vancouver",
        weather: "Brisa",
        playerOfMatch: "Kenan Yıldız",
        rating: "7,66",
        coaches: { home: "T. Popovic", away: "V. Montella" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("20", "Sapsford", "6,5", "AAE")],
                [reportPlayer("12", "McGree", "6,4", "AA"), reportPlayer("24", "Robertson", "7,1", "SA"), reportPlayer("10", "Volpato", "6,5", "AA")],
                [reportPlayer("8", "Irvine", "6,5", "MAA"), reportPlayer("6", "Devlin", "6,8", "MD")],
                [reportPlayer("3", "Bos", "7,0", "DL"), reportPlayer("5", "Burgess", "6,9", "CC"), reportPlayer("4", "Circati", "6,5", "CC"), reportPlayer("17", "Thomas Jo...", "6,1", "LI")],
                [reportPlayer("1", "Izzo", "7,3", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Barış Alper Yılmaz", "7,2", "AAE", true)],
                [reportPlayer("11", "Kenan Yıldız", "7,7", "EAI"), reportPlayer("15", "Arda Güler", "6,2", "CL"), reportPlayer("16", "Yunus", "6,2", "AA")],
                [reportPlayer("10", "Hakan Çalh...", "7,0", "CJR"), reportPlayer("8", "Orkun", "6,8", "CJA")],
                [reportPlayer("7", "F.Kadıoğlu", "6,7", "DL"), reportPlayer("5", "Abdülkerim", "6,9", "CC"), reportPlayer("24", "Kaan", "6,7", "CC"), reportPlayer("20", "Zeki Çelik", "6,7", "DL")],
                [reportPlayer("1", "Uğurcan", "7,3", "GR")]
            ])
        },
        events: {
            home: [goalEvent("85", "M. Touré", { assist: "A. Robertson" })],
            away: [goalEvent("3", "Barış Alper Yılmaz", { assist: "Kenan Yıldız" })]
        },
        stats: reportStats([
            ["Posse", "46%", "54%"],
            ["Remates", "11", "18"],
            ["Remates à Baliza", "7", "10"],
            ["xG", "1,42", "1,27"],
            ["PADPAD", "20,89", "15,76"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "8", "11"],
            ["Passes Completados", "87%", "89%"],
            ["Cruzamentos Completados", "19%", "8%"],
            ["Faltas", "7", "8"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "122"],
            ["Classificação Média", "6,7", "6,8"]
        ])
    },
    {
        fixtureKey: "2026-06-13-escocia-haiti",
        date: "Sábado 13 de Junho de 2026",
        stadium: "Boston Stadium",
        weather: "Vento Forte",
        playerOfMatch: "Scott McTominay",
        rating: "9,25",
        coaches: { home: "S. Clarke", away: "S. Migné" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("10", "Adams", "7,1", "AAE")],
                [reportPlayer("15", "Gauld", "7,4", "CJA", true), reportPlayer("6", "McTominay", "9,3", "SA", true)],
                [reportPlayer("12", "Hickey", "8,4", "AI", true), reportPlayer("17", "Gilmour", "7,3", "CJR"), reportPlayer("19", "Ferguson", "6,8", "MD"), reportPlayer("26", "Patterson", "8,2", "AI")],
                [reportPlayer("3", "Robertson", "7,4", "CA"), reportPlayer("4", "McKenna", "7,6", "CC"), reportPlayer("24", "Welsh", "7,6", "CC")],
                [reportPlayer("14", "Gunn", "7,5", "GR")]
            ]),
            away: reportFormation("3-4-1-2", [
                [reportPlayer("10", "Isidor", "6,0", "AA"), reportPlayer("9", "Édouard", "6,1", "AvR")],
                [reportPlayer("7", "Bellegarde", "5,9", "ME")],
                [reportPlayer("3", "Expérience", "6,7", "AI"), reportPlayer("26", "Leverton", "6,6", "MD"), reportPlayer("8", "Danley", "6,6", "MD"), reportPlayer("15", "Arcus", "5,7", "AI")],
                [reportPlayer("5", "Delcroix", "6,4", "CC"), reportPlayer("18", "Duverne", "5,9", "CC"), reportPlayer("4", "Adé", "6,3", "DC")],
                [reportPlayer("1", "Placide", "6,3", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("16", "S. McTominay", { assist: "N. Patterson" }), goalEvent("44", "S. McTominay", { assist: "B. Gilmour" }), goalEvent("45", "A. Hickey", { assist: "S. McTominay" }), goalEvent("48", "R. Gauld", { assist: "A. Hickey" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "22", "6"],
            ["Remates à Baliza", "10", "1"],
            ["xG", "2,71", "0,29"],
            ["PADPAD", "19,45", "21,24"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "5", "6"],
            ["Passes Completados", "88%", "85%"],
            ["Cruzamentos Completados", "35%", "5%"],
            ["Faltas", "5", "19"],
            ["Cartões amarelos", "1", "5"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "125"],
            ["Classificação Média", "7,6", "6,2"]
        ])
    },
    {
        fixtureKey: "2026-06-13-marrocos-brasil",
        date: "Sábado 13 de Junho de 2026",
        stadium: "New York New Jersey Stadium",
        weather: "Brisa",
        playerOfMatch: "Bruno Guimarães",
        rating: "8,23",
        coaches: { home: "R. Benmahmoud", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("12", "En-Nesyri", "6,2", "AC")],
                [reportPlayer("7", "Ez Abde", "6,0", "EAI"), reportPlayer("6", "Saibari", "6,6", "AI")],
                [reportPlayer("10", "Adli", "6,6", "MC"), reportPlayer("20", "Amrabat", "6,8", "MCA")],
                [reportPlayer("17", "Targhalline", "6,5", "MD")],
                [reportPlayer("15", "Mazraoui", "6,0", "AI"), reportPlayer("4", "N. Aguerd", "6,2", "CC"), reportPlayer("21", "Abqar", "6,5", "DC"), reportPlayer("2", "Hakimi", "6,3", "AI")],
                [reportPlayer("13", "Bono", "6,2", "GRP")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("18", "Joelinton", "6,7", "AR")],
                [reportPlayer("7", "Vinícius Júnior", "7,5", "AA", true), reportPlayer("10", "Cunha", "7,8", "MO", true), reportPlayer("11", "Raphinha", "7,6", "AA", true)],
                [reportPlayer("26", "João Gomes", "7,3", "Pi"), reportPlayer("8", "Bruno G.", "8,2", "CJR")],
                [reportPlayer("5", "Carlos", "6,8", "AI"), reportPlayer("4", "Gabriel", "7,0", "CC"), reportPlayer("3", "Marquinhos", "6,7", "CC"), reportPlayer("2", "Wesley", "6,9", "AI")],
                [reportPlayer("12", "Ederson M.", "7,1", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("67", "A. El Kaabi", { assist: "I. Saibari" })],
            away: [goalEvent("15", "Raphinha", { assist: "Bruno Guimarães" }), goalEvent("41", "Matheus Cunha", { assist: "João Gomes" }), goalEvent("52", "Vinícius Júnior"), goalEvent("55", "N. Mazraoui", { ownGoal: true }), goalEvent("72", "G. Martinelli", { assist: "Bruno Guimarães" })]
        },
        stats: reportStats([
            ["Posse", "51%", "49%"],
            ["Remates", "8", "17"],
            ["Remates à Baliza", "4", "8"],
            ["xG", "1,27", "1,81"],
            ["PADPAD", "20,44", "20,29"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "3", "9"],
            ["Passes Completados", "87%", "88%"],
            ["Cruzamentos Completados", "8%", "20%"],
            ["Faltas", "10", "15"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "115", "122"],
            ["Classificação Média", "6,4", "7,2"]
        ])
    }
];

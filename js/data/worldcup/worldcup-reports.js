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
    },
    {
        fixtureKey: "2026-06-14-curacao-alemanha",
        date: "Domingo 14 de Junho de 2026",
        stadium: "Houston Stadium",
        weather: "Calmo",
        playerOfMatch: "Joshua Kimmich",
        rating: "8,33",
        coaches: { home: "D. Advocaat", away: "H. Maus" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("11", "Živković", "5,7", "AAE")],
                [reportPlayer("8", "Bacuna", "6,0", "EAI"), reportPlayer("19", "Chong", "6,2", "ME"), reportPlayer("10", "Hansen", "5,8", "AA")],
                [reportPlayer("2", "Bacuna", "6,4", "MD"), reportPlayer("6", "Bazoer", "6,3", "CJR")],
                [reportPlayer("3", "Floranus", "6,2", "DL"), reportPlayer("4", "Obispo", "6,5", "CC"), reportPlayer("12", "St. Jago", "6,4", "CC"), reportPlayer("5", "Sambo", "6,8", "AI")],
                [reportPlayer("14", "Doornbusch", "7,1", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("7", "Havertz", "7,4", "AvR", true)],
                [reportPlayer("10", "Musiala", "7,5", "EAI", true), reportPlayer("17", "Wirtz", "7,3", "CL", true), reportPlayer("19", "Sané", "6,9", "AA")],
                [reportPlayer("8", "Goretzka", "7,9", "Pi"), reportPlayer("13", "Gross", "7,5", "CJA")],
                [reportPlayer("22", "Raum", "8,2", "AI"), reportPlayer("5", "N. Schlotte...", "7,5", "CC"), reportPlayer("4", "Tah", "7,4", "CC"), reportPlayer("6", "Kimmich", "8,3", "AC")],
                [reportPlayer("1", "Neuer", "7,6", "GRC")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("14", "K. Havertz"), goalEvent("16", "F. Wirtz", { assist: "P. Groß" }), goalEvent("33", "J. Musiala", { assist: "J. Kimmich" })]
        },
        stats: reportStats([
            ["Posse", "26%", "74%"],
            ["Remates", "7", "31"],
            ["Remates à Baliza", "0", "11"],
            ["xG", "0,65", "3,90"],
            ["PADPAD", "34,53", "10,83"],
            ["Oportunidades Flagrantes", "0", "4"],
            ["Cantos", "3", "4"],
            ["Passes Completados", "79%", "91%"],
            ["Cruzamentos Completados", "0%", "31%"],
            ["Faltas", "18", "7"],
            ["Cartões amarelos", "4", "4"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "113", "121"],
            ["Classificação Média", "6,3", "7,5"]
        ])
    },
    {
        fixtureKey: "2026-06-14-equador-costa-do-marfim",
        date: "Domingo 14 de Junho de 2026",
        stadium: "Philadelphia Stadium",
        weather: "Vento Forte",
        playerOfMatch: "Enner Valencia",
        rating: "7,80",
        coaches: { home: "S. Beccacece", away: "E. Faé" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("13", "Valencia", "7,8", "AC", true)],
                [reportPlayer("26", "Julio", "6,5", "Ex"), reportPlayer("11", "Sarmiento", "7,5", "Ex")],
                [reportPlayer("6", "Caicedo", "6,8", "MC"), reportPlayer("16", "Alcívar", "6,8", "MC")],
                [reportPlayer("7", "Gruezo", "6,5", "CJR")],
                [reportPlayer("5", "Hincapié", "7,3", "AI"), reportPlayer("4", "Pacho", "7,2", "CC"), reportPlayer("14", "Arboleda", "7,4", "DC"), reportPlayer("23", "Preciado", "6,2", "AI")],
                [reportPlayer("22", "Domínguez", "7,3", "GR")]
            ]),
            away: reportFormation("4-1-2-1-2", [
                [reportPlayer("8", "Guessand", "6,2", "AA"), reportPlayer("11", "Bonny", "6,3", "AvR")],
                [reportPlayer("6", "Amad", "6,1", "MO")],
                [reportPlayer("19", "Kessie", "6,7", "MC"), reportPlayer("20", "Inao.C", "6,7", "ME")],
                [reportPlayer("24", "Fofana", "6,7", "CJR")],
                [reportPlayer("3", "Opéri", "6,4", "AI"), reportPlayer("4", "Ndicka", "6,9", "CC"), reportPlayer("5", "O. Diomande", "6,7", "CC"), reportPlayer("16", "Singo", "7,0", "LI")],
                [reportPlayer("1", "Fofana", "6,2", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("45+3", "E. Valencia", { penalty: true }), goalEvent("88", "E. Valencia", { assist: "B. Castillo" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "52%", "48%"],
            ["Remates", "18", "11"],
            ["Remates à Baliza", "5", "4"],
            ["xG", "2,49", "0,62"],
            ["PADPAD", "28,06", "42,00"],
            ["Oportunidades Flagrantes", "3", "0"],
            ["Cantos", "7", "5"],
            ["Passes Completados", "93%", "91%"],
            ["Cruzamentos Completados", "13%", "22%"],
            ["Faltas", "11", "19"],
            ["Cartões amarelos", "3", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "120", "122"],
            ["Classificação Média", "7,1", "6,5"]
        ])
    },
    {
        fixtureKey: "2026-06-14-paises-baixos-japao",
        date: "Domingo 14 de Junho de 2026",
        stadium: "Dallas Stadium",
        weather: "Brisa",
        playerOfMatch: "Donyell Malen",
        rating: "7,51",
        coaches: { home: "R. Koeman", away: "T. Kobayashi" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("22", "Xavi", "6,5", "F9")],
                [reportPlayer("10", "Gakpo", "6,4", "AA"), reportPlayer("2", "Frimpong", "7,3", "Ex")],
                [reportPlayer("25", "Reijnders", "6,2", "MO"), reportPlayer("21", "F. De Jong", "7,4", "CJA")],
                [reportPlayer("8", "Gravenberch", "6,8", "CJR")],
                [reportPlayer("18", "Aké", "6,4", "LI"), reportPlayer("6", "Virgil", "6,6", "CC"), reportPlayer("4", "De Ligt", "6,5", "CP"), reportPlayer("15", "J. Timber", "6,8", "AII")],
                [reportPlayer("13", "Verbruggen", "6,5", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("9", "Ueda", "7,1", "AR", true)],
                [reportPlayer("7", "Daizen", "7,0", "Ex"), reportPlayer("15", "Take", "6,2", "EAI")],
                [reportPlayer("4", "Tomiyasu", "6,9", "AII"), reportPlayer("6", "Kaishu", "6,6", "MD"), reportPlayer("3", "Endo", "6,7", "MD"), reportPlayer("10", "Doan", "6,4", "AP")],
                [reportPlayer("21", "Ito", "7,0", "CPO"), reportPlayer("16", "Watanabe", "6,8", "DC"), reportPlayer("5", "Itakura", "6,7", "CC")],
                [reportPlayer("13", "Osako", "6,8", "GR")]
            ])
        },
        events: {
            home: [goalEvent("79", "D. Malen", { assist: "F. de Jong" })],
            away: [goalEvent("52", "A. Ueda", { assist: "D. Maeda" })]
        },
        stats: reportStats([
            ["Posse", "49%", "51%"],
            ["Remates", "14", "2"],
            ["Remates à Baliza", "7", "1"],
            ["xG", "1,07", "0,18"],
            ["PADPAD", "20,50", "25,82"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "9", "2"],
            ["Passes Completados", "91%", "91%"],
            ["Cruzamentos Completados", "10%", "25%"],
            ["Faltas", "6", "9"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "126", "121"],
            ["Classificação Média", "6,7", "6,7"]
        ])
    },
    {
        fixtureKey: "2026-06-14-suecia-tunisia",
        date: "Domingo 14 de Junho de 2026",
        stadium: "Estadio Monterrey",
        weather: "Calmo",
        playerOfMatch: "Dejan Kulusevski",
        rating: "8,58",
        coaches: { home: "G. Potter", away: "S. Lamouchi" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Gyökeres", "6,9", "AAE")],
                [reportPlayer("11", "Isak", "6,9", "AA"), reportPlayer("6", "Forsberg", "7,6", "CJA", true), reportPlayer("10", "Kulusevski", "8,6", "Ex", true)],
                [reportPlayer("7", "Karlström", "6,9", "MD"), reportPlayer("16", "Ayari", "6,8", "MAA")],
                [reportPlayer("3", "Svensson", "6,5", "AII"), reportPlayer("5", "Starfelt", "7,0", "CP"), reportPlayer("19", "Lindelöf", "6,7", "CC"), reportPlayer("4", "Hien", "6,5", "LI")],
                [reportPlayer("1", "Johansson", "7,0", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("26", "Chaouat", "6,7", "AvR")],
                [reportPlayer("12", "Elias", "6,7", "EAI"), reportPlayer("19", "Hannibal", "7,3", "ME", true), reportPlayer("20", "Layouni", "6,7", "CJA")],
                [reportPlayer("8", "Khedira", "6,7", "MD"), reportPlayer("7", "Skhiri", "6,4", "MD")],
                [reportPlayer("16", "Abdi", "6,6", "AI"), reportPlayer("4", "Talbi", "6,6", "CC"), reportPlayer("5", "Meriah", "6,5", "CC"), reportPlayer("2", "Valery", "6,5", "DL")],
                [reportPlayer("1", "A.Dahmen", "6,9", "GRP")]
            ])
        },
        events: {
            home: [goalEvent("16", "E. Forsberg", { assist: "V. Gyökeres" }), goalEvent("90+2", "D. Kulusevski", { assist: "A. Isak" })],
            away: [goalEvent("77", "Hannibal", { assist: "N. Sliti" })]
        },
        stats: reportStats([
            ["Posse", "49%", "51%"],
            ["Remates", "18", "8"],
            ["Remates à Baliza", "9", "5"],
            ["xG", "2,00", "0,75"],
            ["PADPAD", "28,47", "29,43"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "7", "4"],
            ["Passes Completados", "91%", "91%"],
            ["Cruzamentos Completados", "19%", "15%"],
            ["Faltas", "5", "9"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "131", "122"],
            ["Classificação Média", "7,1", "6,7"]
        ])
    },
    {
        fixtureKey: "2026-06-15-egito-belgica",
        date: "Segunda-feira 15 de Junho de 2026",
        stadium: "Seattle Stadium",
        weather: "Brisa",
        playerOfMatch: "Afsha",
        rating: "7,38",
        coaches: { home: "H. Hassan", away: "R. Garcia" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("7", "Marmoush", "7,3", "AAE", true)],
                [reportPlayer("10", "Zizo", "6,9", "Ex"), reportPlayer("20", "Afsha", "7,4", "MO"), reportPlayer("11", "M.Salah", "6,6", "AI")],
                [reportPlayer("5", "Morsy", "6,7", "CJR"), reportPlayer("15", "H.Fathy", "6,4", "MD")],
                [reportPlayer("3", "Fatouh", "7,2", "AI"), reportPlayer("19", "El Wensh", "7,0", "CP"), reportPlayer("18", "Hegazi", "7,2", "DC"), reportPlayer("25", "El Eraki", "6,5", "DL")],
                [reportPlayer("1", "Shoubir", "6,9", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("16", "De Ketelaere", "6,5", "F9")],
                [reportPlayer("9", "Doku", "6,6", "Ex"), reportPlayer("6", "Saelemaek...", "6,9", "Ex")],
                [reportPlayer("8", "Tielemans", "6,6", "CJA"), reportPlayer("7", "De Bruyne", "6,5", "MC")],
                [reportPlayer("18", "Onana", "6,6", "Pi")],
                [reportPlayer("12", "De Cuyper", "6,9", "AII"), reportPlayer("4", "Theate", "7,4", "CC", true), reportPlayer("5", "De Winter", "6,9", "CC"), reportPlayer("21", "Castagne", "6,8", "AI")],
                [reportPlayer("1", "Courtois", "6,4", "GR")]
            ])
        },
        events: {
            home: [goalEvent("43", "O. Marmoush", { assist: "Afsha" })],
            away: [goalEvent("1", "A. Theate", { assist: "M. De Cuyper" })]
        },
        stats: reportStats([
            ["Posse", "53%", "47%"],
            ["Remates", "12", "21"],
            ["Remates à Baliza", "4", "7"],
            ["xG", "2,37", "2,14"],
            ["PADPAD", "30,83", "23,57"],
            ["Oportunidades Flagrantes", "2", "1"],
            ["Cantos", "8", "11"],
            ["Passes Completados", "89%", "91%"],
            ["Cruzamentos Completados", "34%", "26%"],
            ["Faltas", "16", "13"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "126"],
            ["Classificação Média", "6,9", "6,7"]
        ])
    },
    {
        fixtureKey: "2026-06-15-nova-zelandia-irao",
        date: "Segunda-feira 15 de Junho de 2026",
        stadium: "Los Angeles Stadium",
        weather: "Tempestuoso",
        playerOfMatch: "Max Crocombe",
        rating: "7,80",
        coaches: { home: "D. Bazeley", away: "A. Ghalenoei" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Wood", "6,5", "AR")],
                [reportPlayer("11", "Just", "6,8", "AA"), reportPlayer("8", "Singh", "7,4", "CL", true), reportPlayer("18", "Randall", "6,3", "AA")],
                [reportPlayer("17", "Stamenić", "6,8", "Pi"), reportPlayer("16", "Bell", "6,8", "MD")],
                [reportPlayer("13", "Cacace", "7,4", "AC"), reportPlayer("25", "Tuiloma", "6,7", "CC"), reportPlayer("4", "Bindon", "7,0", "CC"), reportPlayer("2", "Kirwan", "6,9", "DL")],
                [reportPlayer("1", "Crocombe", "7,8", "GRP")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("22", "Taremi", "6,4", "AvR")],
                [reportPlayer("15", "Allahyar", "6,2", "AA"), reportPlayer("18", "Jahanbakh...", "6,4", "EAI")],
                [reportPlayer("16", "Omidnor", "6,8", "MC"), reportPlayer("7", "Khodaband...", "6,7", "MC")],
                [reportPlayer("6", "Saeid", "6,8", "CJR")],
                [reportPlayer("19", "Goudi", "6,5", "AI"), reportPlayer("17", "Kanani", "6,7", "DC"), reportPlayer("4", "Roozbeh", "6,4", "CC"), reportPlayer("20", "Moharrami", "7,0", "AI")],
                [reportPlayer("13", "Beyranvand", "6,5", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("17", "S. Singh", { assist: "E. Just" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "44%", "56%"],
            ["Remates", "4", "14"],
            ["Remates à Baliza", "3", "8"],
            ["xG", "0,22", "0,76"],
            ["PADPAD", "19,11", "11,69"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "3", "12"],
            ["Passes Completados", "86%", "91%"],
            ["Cruzamentos Completados", "10%", "10%"],
            ["Faltas", "6", "8"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "122"],
            ["Classificação Média", "6,9", "6,6"]
        ])
    },
    {
        fixtureKey: "2026-06-15-espanha-cabo-verde",
        date: "Segunda-feira 15 de Junho de 2026",
        stadium: "Atlanta Stadium",
        weather: "Tempestuoso",
        playerOfMatch: "Bruno Varela",
        rating: "8,43",
        coaches: { home: "Gamy Chambelito", away: "Bubista" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("10", "Oyarzábal", "6,5", "AAE"), reportPlayer("12", "Ferran", "6,4", "F9")],
                [reportPlayer("25", "Fabián", "6,4", "EAI"), reportPlayer("19", "Lamine Ya...", "7,8", "AA")],
                [reportPlayer("4", "Rodri", "7,3", "CJR", true), reportPlayer("20", "Olmo", "6,6", "MD")],
                [reportPlayer("22", "Cucurella", "6,8", "AI"), reportPlayer("23", "Pau", "6,7", "CC"), reportPlayer("5", "Cubarsí", "7,1", "CC"), reportPlayer("16", "M. Llorente", "7,3", "AI")],
                [reportPlayer("13", "J. García", "6,6", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("10", "Da Costa", "6,1", "AvR")],
                [reportPlayer("8", "Jovane", "6,7", "AA"), reportPlayer("15", "Andrade", "6,6", "AA", true)],
                [reportPlayer("16", "João Paulo", "6,9", "MC"), reportPlayer("22", "Duarte", "6,6", "ME")],
                [reportPlayer("7", "Kevin L.", "6,6", "MD")],
                [reportPlayer("3", "Lopes Cabr...", "6,0", "LI"), reportPlayer("21", "Moreira", "6,2", "CC"), reportPlayer("5", "Costa", "6,6", "CC"), reportPlayer("2", "Wagner P.", "5,9", "AI")],
                [reportPlayer("1", "Bruno Varela", "8,4", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("22", "Rodri", { assist: "Lamine Yamal" }), goalEvent("90+2", "A. Grimaldo", { penalty: true }), goalEvent("90+6", "Á. Baena", { assist: "S. Aghehowa" })],
            away: [goalEvent("38", "L. Andrade", { assist: "J. Cabral" })]
        },
        stats: reportStats([
            ["Posse", "55%", "45%"],
            ["Remates", "34", "9"],
            ["Remates à Baliza", "21", "6"],
            ["xG", "4,41", "0,37"],
            ["PADPAD", "22,00", "41,50"],
            ["Oportunidades Flagrantes", "3", "0"],
            ["Cantos", "18", "5"],
            ["Passes Completados", "90%", "86%"],
            ["Cruzamentos Completados", "44%", "6%"],
            ["Faltas", "12", "12"],
            ["Cartões amarelos", "3", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "129", "121"],
            ["Classificação Média", "6,9", "6,6"]
        ])
    },
    {
        fixtureKey: "2026-06-15-arabia-saudita-uruguai",
        date: "Segunda-feira 15 de Junho de 2026",
        stadium: "Miami Stadium",
        weather: "Brisa",
        playerOfMatch: "Mauro Arambarri",
        rating: "9,26",
        coaches: { home: "G. Donis", away: "M. Bielsa" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Feras", "6,5", "AvR")],
                [reportPlayer("6", "Salem", "6,2", "AI"), reportPlayer("8", "Musab", "6,4", "CJA"), reportPlayer("18", "Abdulrahm...", "6,3", "Ex")],
                [reportPlayer("3", "Nasser D.", "6,6", "MD"), reportPlayer("7", "Kanno", "6,6", "MD")],
                [reportPlayer("17", "Moteb", "6,3", "AI"), reportPlayer("21", "Kadish", "6,3", "DC"), reportPlayer("4", "Al Tambakti", "6,5", "CC"), reportPlayer("12", "Saud", "6,1", "AC")],
                [reportPlayer("1", "Nawaf", "6,8", "GRC")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("9", "D. Núñez", "8,4", "AC", true)],
                [reportPlayer("10", "Torres", "7,7", "Ex"), reportPlayer("15", "Zalazar", "7,3", "Ex")],
                [reportPlayer("18", "M. Aramba...", "9,3", "CJA"), reportPlayer("12", "Valverde", "8,7", "ME", true)],
                [reportPlayer("7", "Bentancur", "7,0", "Pi")],
                [reportPlayer("3", "M. Araújo", "6,9", "AC"), reportPlayer("4", "J.M. Giméne...", "7,0", "DC"), reportPlayer("17", "R. Araújo", "7,6", "CP"), reportPlayer("23", "Mouriño", "6,9", "AII")],
                [reportPlayer("1", "Rochet", "7,3", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("18", "D. Núñez", { assist: "M. Arambarri" }), goalEvent("30", "F. Valverde", { assist: "M. Arambarri" }), goalEvent("45", "D. Núñez", { assist: "F. Torres" }), goalEvent("60", "F. Valverde", { assist: "R. Zalazar" })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "11", "16"],
            ["Remates à Baliza", "4", "10"],
            ["xG", "1,04", "2,82"],
            ["PADPAD", "21,89", "21,74"],
            ["Oportunidades Flagrantes", "1", "3"],
            ["Cantos", "6", "6"],
            ["Passes Completados", "91%", "89%"],
            ["Cruzamentos Completados", "14%", "21%"],
            ["Faltas", "9", "11"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "120"],
            ["Classificação Média", "6,4", "7,6"]
        ])
    },
    {
        fixtureKey: "2026-06-16-senegal-franca",
        date: "Terça-feira 16 de Junho de 2026",
        stadium: "New York New Jersey Stadium",
        weather: "Tempestuoso",
        playerOfMatch: "Kylian Mbappé",
        rating: "8,39",
        coaches: { home: "P. Thiaw", away: "Hugo Le Macedo" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("11", "N. Jackson", "6,8", "AAE", true)],
                [reportPlayer("10", "Mané", "6,5", "AI"), reportPlayer("9", "Dia", "7,2", "SA"), reportPlayer("8", "Sarr", "6,0", "Ex")],
                [reportPlayer("14", "Gueye", "6,9", "MD"), reportPlayer("6", "P.M. Sarr", "6,4", "MD")],
                [reportPlayer("21", "Diouf", "6,5", "AI"), reportPlayer("5", "Niakhaté", "6,4", "CC"), reportPlayer("4", "Koulibaly", "6,6", "CC"), reportPlayer("20", "Mendy", "6,6", "LI")],
                [reportPlayer("16", "E.Mendy", "7,1", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("10", "Mbappe", "8,4", "AAE", true)],
                [reportPlayer("7", "O. Dembélé", "6,6", "Ex"), reportPlayer("8", "Cherki", "6,5", "MO"), reportPlayer("6", "Olise", "6,6", "AA")],
                [reportPlayer("3", "Camavinga", "6,8", "MC")],
                [reportPlayer("12", "Tchouaméni", "6,8", "MD")],
                [reportPlayer("22", "Théo", "7,4", "DL"), reportPlayer("5", "Upamecano", "6,7", "CC"), reportPlayer("14", "Saliba", "6,9", "CC"), reportPlayer("4", "Koundé", "6,3", "DL")],
                [reportPlayer("1", "Chevalier", "7,0", "GR")]
            ])
        },
        events: {
            home: [goalEvent("4", "N. Jackson", { assist: "B. Dia" })],
            away: [goalEvent("86", "K. Mbappé", { assist: "D. Doué" })]
        },
        stats: reportStats([
            ["Posse", "42%", "58%"],
            ["Remates", "4", "16"],
            ["Remates à Baliza", "4", "5"],
            ["xG", "0,70", "2,58"],
            ["PADPAD", "30,17", "17,95"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "4", "9"],
            ["Passes Completados", "84%", "92%"],
            ["Cruzamentos Completados", "8%", "22%"],
            ["Faltas", "8", "10"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "119", "124"],
            ["Classificação Média", "6,6", "6,9"]
        ])
    },
    {
        fixtureKey: "2026-06-16-noruega-iraque",
        date: "Terça-feira 16 de Junho de 2026",
        stadium: "Boston Stadium",
        weather: "Brisa",
        playerOfMatch: "Erling Haaland",
        rating: "10,00",
        coaches: { home: "S. Solbakken", away: "G. Arnold" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("10", "Haaland", "10,0", "AA", true)],
                [reportPlayer("16", "Schjelderup", "7,4", "EAI", true), reportPlayer("12", "Nusa", "8,2", "Ex")],
                [reportPlayer("21", "Aursnes", "7,9", "MC"), reportPlayer("8", "Ødegaard", "7,0", "MC")],
                [reportPlayer("6", "Berg", "6,8", "MD")],
                [reportPlayer("23", "Wolfe", "6,8", "AI"), reportPlayer("25", "Heggem", "6,9", "DC"), reportPlayer("4", "Ajer", "7,0", "CC"), reportPlayer("17", "Ryerson", "7,7", "AI")],
                [reportPlayer("1", "Nyland", "7,7", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("21", "Mohannad ...", "6,4", "AA")],
                [reportPlayer("12", "Bashar R.", "5,9", "AA"), reportPlayer("7", "Qasem", "6,8", "CJA", true), reportPlayer("10", "I.Bayesh", "5,9", "Ex")],
                [reportPlayer("8", "Amjad Att...", "5,9", "MAA"), reportPlayer("23", "Iqbal", "6,2", "CJR")],
                [reportPlayer("4", "Ali Adnan", "6,0", "DL"), reportPlayer("18", "Ali Faez", "6,1", "DC"), reportPlayer("5", "S.Natiq", "6,4", "CP"), reportPlayer("25", "Ali", "5,6", "DL")],
                [reportPlayer("1", "Jalal Hassan", "5,9", "GR")]
            ])
        },
        events: {
            home: [goalEvent("2", "E. Haaland", { assist: "A. Nusa" }), goalEvent("44", "A. Schjelderup", { assist: "F. Aursnes" }), goalEvent("52", "E. Haaland", { assist: "F. Aursnes" }), goalEvent("58", "E. Haaland", { assist: "A. Nusa" }), goalEvent("64", "E. Haaland", { assist: "M. Ødegaard" }), goalEvent("90+1", "E. Haaland", { assist: "J. Hauge" })],
            away: [goalEvent("10", "A. Qasem", { assist: "Saad Natiq" }), sendOffEvent("85", "H. Ali")]
        },
        stats: reportStats([
            ["Posse", "52%", "48%"],
            ["Remates", "20", "3"],
            ["Remates à Baliza", "10", "2"],
            ["xG", "2,40", "0,89"],
            ["PADPAD", "15,52", "41,89"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "8", "1"],
            ["Passes Completados", "91%", "89%"],
            ["Cruzamentos Completados", "40%", "16%"],
            ["Faltas", "13", "10"],
            ["Cartões amarelos", "2", "4"],
            ["Cartões vermelhos", "0", "1"],
            ["Distância Percorrida", "115", "110"],
            ["Classificação Média", "7,5", "6,1"]
        ])
    },
    {
        fixtureKey: "2026-06-16-argentina-argelia",
        date: "Terça-feira 16 de Junho de 2026",
        stadium: "Kansas City Stadium",
        weather: "Brisa",
        playerOfMatch: "Lionel Messi",
        rating: "7,51",
        coaches: { home: "L. Scaloni", away: "V. Petkovic" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Lautaro", "6,2", "AAE")],
                [reportPlayer("16", "J. Álvarez", "6,4", "AA"), reportPlayer("7", "Nico Paz", "7,1", "CL", true), reportPlayer("10", "Messi", "7,5", "Ex", true)],
                [reportPlayer("8", "Enzo", "6,8", "CJR"), reportPlayer("17", "Mac Allister", "7,1", "MAA")],
                [reportPlayer("19", "Martínez", "6,6", "LI"), reportPlayer("4", "Otamendi", "6,7", "CC"), reportPlayer("5", "Romero", "7,0", "CC"), reportPlayer("2", "Molina", "6,9", "AII")],
                [reportPlayer("14", "Martínez", "6,3", "GRC")]
            ]),
            away: reportFormation("3-4-1-2", [
                [reportPlayer("9", "Amoura", "6,4", "AA"), reportPlayer("11", "Gouiri", "7,2", "AAE", true)],
                [reportPlayer("10", "Maza", "6,4", "MO")],
                [reportPlayer("3", "Aït-Nouri", "6,5", "AI"), reportPlayer("15", "Zerrouki", "6,6", "MD"), reportPlayer("6", "Bennacer", "7,3", "CJR", true), reportPlayer("2", "Belghali", "6,9", "AI")],
                [reportPlayer("12", "Bensebaini", "6,3", "CC"), reportPlayer("18", "Tougai", "6,8", "CC"), reportPlayer("22", "Chergui", "6,5", "CC")],
                [reportPlayer("1", "Luca", "6,4", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("50", "L. Messi", { penalty: true }), goalEvent("59", "N. Paz", { assist: "A. Mac Allister" })],
            away: [goalEvent("25", "I. Bennacer", { assist: "R. Aït-Nouri" }), goalEvent("86", "A. Gouiri", { assist: "A. Zorgane" })]
        },
        stats: reportStats([
            ["Posse", "62%", "38%"],
            ["Remates", "15", "11"],
            ["Remates à Baliza", "6", "4"],
            ["xG", "1,80", "0,85"],
            ["PADPAD", "26,50", "47,27"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "3", "7"],
            ["Passes Completados", "94%", "90%"],
            ["Cruzamentos Completados", "16%", "18%"],
            ["Faltas", "7", "12"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "121"],
            ["Classificação Média", "6,8", "6,7"]
        ])
    },
    {
        fixtureKey: "2026-06-16-austria-jordania",
        date: "Terça-feira 16 de Junho de 2026",
        stadium: "San Francisco Bay Area Stadium",
        weather: "Brisa",
        playerOfMatch: "Marco Friedl",
        rating: "7,88",
        coaches: { home: "R. Rangnick", away: "J. Sellami" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("11", "Gregoritsch", "6,5", "AR"), reportPlayer("24", "Arnautović", "7,5", "AvR", true)],
                [reportPlayer("14", "Baumgartn...", "6,6", "AA"), reportPlayer("18", "Wimmer", "7,0", "Ex")],
                [reportPlayer("6", "Xaver", "7,1", "MD"), reportPlayer("8", "Sabitzer", "7,2", "MAA")],
                [reportPlayer("7", "Alaba", "6,6", "AII"), reportPlayer("5", "Friedl", "7,9", "CC", true), reportPlayer("4", "Danso", "6,8", "CC"), reportPlayer("2", "Laimer", "6,7", "DL")],
                [reportPlayer("1", "Schlager", "6,5", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("9", "Bany", "7,2", "AvR", true)],
                [reportPlayer("7", "M.Semreen", "6,0", "AA"), reportPlayer("6", "Al-Tamari", "6,2", "EAI")],
                [reportPlayer("26", "Sisa", "6,0", "MO"), reportPlayer("24", "A.Jamous", "6,7", "MC")],
                [reportPlayer("19", "Nizar", "6,8", "Pi")],
                [reportPlayer("25", "Assaf", "6,5", "AII"), reportPlayer("12", "Nasib", "6,8", "CP"), reportPlayer("4", "Y.Abualjazar", "6,5", "CP"), reportPlayer("2", "Ehsan", "5,8", "AI")],
                [reportPlayer("14", "Yazeed", "6,9", "GR")]
            ])
        },
        events: {
            home: [goalEvent("25", "M. Arnautović", { assist: "M. Sabitzer" }), goalEvent("64", "M. Friedl", { assist: "N. Seiwald" })],
            away: [goalEvent("24", "T. Bany")]
        },
        stats: reportStats([
            ["Posse", "65%", "35%"],
            ["Remates", "28", "3"],
            ["Remates à Baliza", "12", "2"],
            ["xG", "1,97", "0,23"],
            ["PADPAD", "14,67", "35,90"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "17", "2"],
            ["Passes Completados", "90%", "78%"],
            ["Cruzamentos Completados", "18%", "0%"],
            ["Faltas", "14", "13"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "118", "112"],
            ["Classificação Média", "6,9", "6,5"]
        ])
    }
];

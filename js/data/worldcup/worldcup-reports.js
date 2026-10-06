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
                [reportPlayer("3", "Modiba", "7,7", "AI"), reportPlayer("5", "Mbokazi", "7,3", "CC"), reportPlayer("24", "Ngezana", "6,8", "CC"), reportPlayer("2", "Mudau", "7,0", "AlI")],
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
                [reportPlayer("10", "Afif", "6,3", "AI"), reportPlayer("25", "Asad", "6,4", "CJA"), reportPlayer("12", "Edmilson Junior", "6,4", "AA")],
                [reportPlayer("7", "K.Boudiaf", "6,7", "CJR"), reportPlayer("6", "Guilherme", "6,4", "MD")],
                [reportPlayer("23", "Homam", "6,6", "AI"), reportPlayer("5", "Khoukhi", "6,8", "CC"), reportPlayer("4", "Tarek", "6,8", "CC"), reportPlayer("20", "A.Yousef", "6,5", "AlI")],
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
                [reportPlayer("26", "João Gomes", "7,3", "Pi"), reportPlayer("8", "Bruno Guimarães", "8,2", "CJR")],
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
                [reportPlayer("8", "Goretzka", "7,9", "Pi"), reportPlayer("13", "P. Groß", "7,5", "CJA")],
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
                [reportPlayer("19", "Kessie", "6,7", "MC"), reportPlayer("20", "C. Inao Oulaï", "6,7", "ME")],
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
                [reportPlayer("18", "Aké", "6,4", "LI"), reportPlayer("6", "Virgil", "6,6", "CC"), reportPlayer("4", "De Ligt", "6,5", "CP"), reportPlayer("15", "J. Timber", "6,8", "AlI")],
                [reportPlayer("13", "Verbruggen", "6,5", "GR")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("9", "Ueda", "7,1", "AR", true)],
                [reportPlayer("7", "Daizen", "7,0", "Ex"), reportPlayer("15", "Take", "6,2", "EAI")],
                [reportPlayer("4", "Tomiyasu", "6,9", "AlI"), reportPlayer("6", "Kaishu", "6,6", "MD"), reportPlayer("3", "Endo", "6,7", "MD"), reportPlayer("10", "Doan", "6,4", "AP")],
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
                [reportPlayer("3", "Svensson", "6,5", "AlI"), reportPlayer("5", "Starfelt", "7,0", "CP"), reportPlayer("19", "Lindelöf", "6,7", "CC"), reportPlayer("4", "Hien", "6,5", "LI")],
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
                [reportPlayer("12", "De Cuyper", "6,9", "AlI"), reportPlayer("4", "Theate", "7,4", "CC", true), reportPlayer("5", "De Winter", "6,9", "CC"), reportPlayer("21", "Castagne", "6,8", "AI")],
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
                [reportPlayer("25", "Fabián", "6,4", "EAI"), reportPlayer("19", "Lamine Yamal", "7,8", "AA")],
                [reportPlayer("4", "Rodri", "7,3", "CJR", true), reportPlayer("20", "Olmo", "6,6", "MD")],
                [reportPlayer("22", "Cucurella", "6,8", "AI"), reportPlayer("23", "Pau", "6,7", "CC"), reportPlayer("5", "Cubarsí", "7,1", "CC"), reportPlayer("16", "M. Llorente", "7,3", "AI")],
                [reportPlayer("13", "J. García", "6,6", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("10", "Da Costa", "6,1", "AvR")],
                [reportPlayer("8", "J. Cabral", "6,7", "AA"), reportPlayer("15", "Andrade", "6,6", "AA", true)],
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
                [reportPlayer("9", "F. Al-Brikan", "6,5", "AvR")],
                [reportPlayer("6", "S. Al-Dawsari", "6,2", "AI"), reportPlayer("8", "Musab", "6,4", "CJA"), reportPlayer("18", "Abdulrahm...", "6,3", "Ex")],
                [reportPlayer("3", "Nasser D.", "6,6", "MD"), reportPlayer("7", "Kanno", "6,6", "MD")],
                [reportPlayer("17", "Moteb", "6,3", "AI"), reportPlayer("21", "Kadish", "6,3", "DC"), reportPlayer("4", "Al Tambakti", "6,5", "CC"), reportPlayer("12", "Saud", "6,1", "AC")],
                [reportPlayer("1", "Nawaf", "6,8", "GRC")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("9", "D. Núñez", "8,4", "AC", true)],
                [reportPlayer("10", "Torres", "7,7", "Ex"), reportPlayer("15", "Zalazar", "7,3", "Ex")],
                [reportPlayer("18", "M. Arambarri", "9,3", "CJA"), reportPlayer("12", "Valverde", "8,7", "ME", true)],
                [reportPlayer("7", "Bentancur", "7,0", "Pi")],
                [reportPlayer("3", "M. Araújo", "6,9", "AC"), reportPlayer("4", "J.M. Giménez", "7,0", "DC"), reportPlayer("17", "R. Araújo", "7,6", "CP"), reportPlayer("23", "Mouriño", "6,9", "AlI")],
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
                [reportPlayer("4", "Ali Adnan", "6,0", "DL"), reportPlayer("18", "Ali Faez", "6,1", "DC"), reportPlayer("5", "Saad Natiq", "6,4", "CP"), reportPlayer("25", "Ali", "5,6", "DL")],
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
                [reportPlayer("19", "Martínez", "6,6", "LI"), reportPlayer("4", "Otamendi", "6,7", "CC"), reportPlayer("5", "Romero", "7,0", "CC"), reportPlayer("2", "Molina", "6,9", "AlI")],
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
                [reportPlayer("7", "Alaba", "6,6", "AlI"), reportPlayer("5", "Friedl", "7,9", "CC", true), reportPlayer("4", "Danso", "6,8", "CC"), reportPlayer("2", "Laimer", "6,7", "DL")],
                [reportPlayer("1", "Schlager", "6,5", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("9", "Bany", "7,2", "AvR", true)],
                [reportPlayer("7", "M.Semreen", "6,0", "AA"), reportPlayer("6", "Al-Tamari", "6,2", "EAI")],
                [reportPlayer("26", "Sisa", "6,0", "MO"), reportPlayer("24", "A.Jamous", "6,7", "MC")],
                [reportPlayer("19", "Nizar", "6,8", "Pi")],
                [reportPlayer("25", "Assaf", "6,5", "AlI"), reportPlayer("12", "Nasib", "6,8", "CP"), reportPlayer("4", "Y.Abualjazar", "6,5", "CP"), reportPlayer("2", "Ehsan", "5,8", "AI")],
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
    },
    {
        fixtureKey: "2026-06-17-rd-congo-portugal",
        date: "Quarta-feira 17 de Junho de 2026",
        stadium: "Houston Stadium",
        weather: "Tempestuoso",
        playerOfMatch: "João Félix",
        rating: "8,59",
        coaches: { home: "S. Desabre", away: "Painas Natal" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("7", "Wissa", "6,1", "AA")],
                [reportPlayer("11", "Muleka", "6,1", "Ex"), reportPlayer("23", "Stroeykens", "6,2", "CJA"), reportPlayer("12", "T. Bongonda", "7,2", "AI", true)],
                [reportPlayer("6", "Sadiki", "6,5", "MAA"), reportPlayer("22", "Pickel", "6,7", "MD")],
                [reportPlayer("3", "Masuaku", "6,5", "AC"), reportPlayer("5", "Mbemba", "6,5", "CC"), reportPlayer("17", "Tuanzebe", "6,3", "CC"), reportPlayer("2", "Wan-Bissa...", "6,5", "DL")],
                [reportPlayer("14", "Bertaud", "7,4", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "G. Ramos", "7,1", "AR")],
                [reportPlayer("10", "Rafa Leão", "7,0", "AA"), reportPlayer("8", "Bruno Fernandes", "7,8", "ME", true), reportPlayer("16", "Bernardo", "7,4", "EAI")],
                [reportPlayer("19", "João Neves", "7,6", "CJR"), reportPlayer("15", "Vitinha", "6,6", "CJA")],
                [reportPlayer("5", "N. Mendes", "7,2", "AI"), reportPlayer("4", "Rúben Dias", "7,1", "CC", true), reportPlayer("24", "Tomás A.", "7,0", "CC"), reportPlayer("3", "João Canc...", "7,0", "AI")],
                [reportPlayer("1", "D. Costa", "6,7", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("67", "T. Bongonda", { assist: "J. Kayembe" })],
            away: [goalEvent("45+1", "Rúben Dias", { assist: "Bruno Fernandes" }), goalEvent("52", "Bruno Fernandes", { assist: "Rafael Leão" }), goalEvent("65", "João Félix", { assist: "Gonçalo Ramos" }), goalEvent("81", "João Félix", { assist: "Francisco Conceição" })]
        },
        stats: reportStats([
            ["Posse", "27%", "73%"],
            ["Remates", "9", "38"],
            ["Remates à Baliza", "1", "15"],
            ["xG", "1,29", "3,35"],
            ["PADPAD", "24,50", "12,75"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "2", "21"],
            ["Passes Completados", "82%", "92%"],
            ["Cruzamentos Completados", "28%", "25%"],
            ["Faltas", "9", "10"],
            ["Cartões amarelos", "1", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "114", "121"],
            ["Classificação Média", "6,6", "7,2"]
        ])
    },
    {
        fixtureKey: "2026-06-17-colombia-uzbequistao",
        date: "Quarta-feira 17 de Junho de 2026",
        stadium: "Mexico City Stadium",
        weather: "Calmo",
        playerOfMatch: "James Rodríguez",
        rating: "8,18",
        coaches: { home: "N. Lorenzo", away: "F. Cannavaro" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("12", "Suárez", "6,7", "AAE")],
                [reportPlayer("7", "Luis Díaz", "6,9", "EAI"), reportPlayer("8", "Sinisterra", "8,1", "Ex", true)],
                [reportPlayer("10", "J. Rodríguez", "8,2", "MC", true), reportPlayer("26", "Richard Ríos", "7,5", "ME")],
                [reportPlayer("6", "Barrios", "6,6", "MD")],
                [reportPlayer("3", "J. Mojica", "6,3", "AI"), reportPlayer("5", "Lucumi", "6,4", "CC"), reportPlayer("4", "Sánchez", "6,5", "CC"), reportPlayer("15", "Muñoz", "6,7", "AlI")],
                [reportPlayer("14", "Mier", "6,5", "GRC")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("10", "Shomurodov", "6,3", "AvR")],
                [reportPlayer("11", "Fayzullayev", "6,9", "Ex", true), reportPlayer("12", "O. O'runov", "7,2", "Ex")],
                [reportPlayer("16", "Nasrullayev", "6,6", "AC"), reportPlayer("23", "Bo'riev", "6,6", "MD"), reportPlayer("9", "Hamrobekov", "6,3", "MAA"), reportPlayer("3", "Alijonov", "6,2", "AP")],
                [reportPlayer("25", "G'ofurov", "6,2", "CC"), reportPlayer("5", "Aliqulov", "6,4", "DC"), reportPlayer("4", "Khusanov", "6,6", "CC")],
                [reportPlayer("13", "Yusupov", "6,8", "GRP")]
            ])
        },
        events: {
            home: [goalEvent("31", "L. Sinisterra"), goalEvent("57", "J. Rodríguez", { assist: "R. Ríos" })],
            away: [goalEvent("46", "A. Fayzullayev", { assist: "O. O'runov" })]
        },
        stats: reportStats([
            ["Posse", "67%", "33%"],
            ["Remates", "21", "8"],
            ["Remates à Baliza", "12", "4"],
            ["xG", "1,37", "0,67"],
            ["PADPAD", "17,39", "25,50"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "10", "4"],
            ["Passes Completados", "94%", "85%"],
            ["Cruzamentos Completados", "29%", "17%"],
            ["Faltas", "12", "8"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "119"],
            ["Classificação Média", "6,9", "6,5"]
        ])
    },
    {
        fixtureKey: "2026-06-17-inglaterra-croacia",
        date: "Quarta-feira 17 de Junho de 2026",
        stadium: "Dallas Stadium",
        weather: "Brisa",
        playerOfMatch: "Luka Modrić",
        rating: "7,42",
        coaches: { home: "Francisco Pinto", away: "Z. Dalić" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("12", "Kane", "6,4", "AvR")],
                [reportPlayer("17", "Rogers", "6,5", "AI"), reportPlayer("11", "Saka", "6,4", "AA")],
                [reportPlayer("6", "Foden", "6,7", "CJA"), reportPlayer("22", "Bellingham", "6,5", "MO")],
                [reportPlayer("8", "Rice", "6,9", "CJR")],
                [reportPlayer("3", "Hall", "6,8", "AI"), reportPlayer("19", "Colwill", "6,6", "CC"), reportPlayer("5", "Guéhi", "6,9", "CC"), reportPlayer("4", "James", "6,7", "AlI")],
                [reportPlayer("1", "Pickford", "6,5", "GRC")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("11", "Budimir", "6,6", "AR")],
                [reportPlayer("6", "Perišić", "6,0", "AA"), reportPlayer("12", "Kramarić", "6,8", "AI", true)],
                [reportPlayer("18", "Pašalić", "6,6", "MO"), reportPlayer("10", "Kovačić", "7,2", "MC")],
                [reportPlayer("14", "Modrić", "7,4", "CJR")],
                [reportPlayer("16", "Gvardiol", "7,1", "AlI"), reportPlayer("2", "Ćaleta-Car", "6,9", "CC"), reportPlayer("4", "L. Vušković", "6,8", "CC"), reportPlayer("17", "Stanišić", "6,8", "AI")],
                [reportPlayer("13", "Livaković", "7,2", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("38", "A. Kramarić", { penalty: true })]
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "13", "6"],
            ["Remates à Baliza", "4", "4"],
            ["xG", "0,92", "0,96"],
            ["PADPAD", "14,29", "15,48"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "8", "5"],
            ["Passes Completados", "87%", "90%"],
            ["Cruzamentos Completados", "17%", "15%"],
            ["Faltas", "14", "6"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "129", "121"],
            ["Classificação Média", "6,6", "6,8"]
        ])
    },
    {
        fixtureKey: "2026-06-17-gana-panama",
        date: "Quarta-feira 17 de Junho de 2026",
        stadium: "Toronto Stadium",
        weather: "Brisa",
        playerOfMatch: "Ismael Díaz",
        rating: "7,70",
        coaches: { home: "Carlos Queiroz", away: "T. Christiansen" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("9", "Williams", "7,4", "AAE", true)],
                [reportPlayer("10", "Semenyo", "6,5", "EAI"), reportPlayer("11", "Kudus", "7,2", "Ex")],
                [reportPlayer("12", "Ibrahim", "7,0", "MC"), reportPlayer("6", "Yirenkyi", "7,5", "MC")],
                [reportPlayer("8", "T. Partey", "6,7", "CJR")],
                [reportPlayer("20", "Mensah", "7,1", "AI"), reportPlayer("4", "Salisu", "7,4", "CP", true), reportPlayer("18", "Aidoo Jr", "6,9", "CP"), reportPlayer("5", "Seidu", "6,7", "AI")],
                [reportPlayer("1", "Ati-Zigi", "6,9", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("10", "Fajardo", "6,2", "AR")],
                [reportPlayer("11", "Díaz", "7,7", "AA", true), reportPlayer("15", "Barahona", "6,2", "CL"), reportPlayer("6", "Carrasquilla", "6,2", "Ex")],
                [reportPlayer("26", "Godoy", "6,7", "MAA"), reportPlayer("24", "Cedeño", "6,7", "MD")],
                [reportPlayer("3", "Davis", "6,9", "AC"), reportPlayer("4", "Andrade", "6,6", "CP"), reportPlayer("5", "Machado", "6,3", "CC"), reportPlayer("17", "Anderson", "6,7", "AlI")],
                [reportPlayer("1", "Mejía", "6,8", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("4", "M. Salisu", { assist: "M. Kudus" }), goalEvent("24", "I. Williams", { assist: "C. Yirenkyi" })],
            away: [goalEvent("36", "I. Díaz", { assist: "E. Davis" })]
        },
        stats: reportStats([
            ["Posse", "52%", "48%"],
            ["Remates", "13", "9"],
            ["Remates à Baliza", "7", "4"],
            ["xG", "1,48", "0,58"],
            ["PADPAD", "16,33", "21,83"],
            ["Oportunidades Flagrantes", "2", "0"],
            ["Cantos", "5", "8"],
            ["Passes Completados", "91%", "92%"],
            ["Cruzamentos Completados", "27%", "22%"],
            ["Faltas", "11", "10"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "126"],
            ["Classificação Média", "7,0", "6,6"]
        ])
    },
    {
        fixtureKey: "2026-06-18-africa-do-sul-chequia",
        date: "Quinta-feira 18 de Junho de 2026",
        stadium: "Atlanta Stadium",
        weather: "Tempestuoso",
        playerOfMatch: "Mbekezeli Mbokazi",
        rating: "7,69",
        coaches: { home: "H. Broos", away: "M. Koubek" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Lyle Foster", "6,3", "AvR")],
                [reportPlayer("22", "Appollis", "6,4", "Ex"), reportPlayer("18", "Adams", "6,5", "ME"), reportPlayer("8", "Rayners", "6,9", "Ex", true)],
                [reportPlayer("15", "Mokoena", "6,6", "CJR"), reportPlayer("16", "Aubaas", "6,9", "MD")],
                [reportPlayer("3", "Modiba", "7,0", "AI"), reportPlayer("5", "Mbokazi", "7,7", "CC"), reportPlayer("24", "Ngezana", "7,4", "CC"), reportPlayer("2", "Mudau", "6,8", "AlI")],
                [reportPlayer("1", "Williams", "7,3", "GRC")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("12", "Chytil", "6,3", "AvR")],
                [reportPlayer("25", "Hložek", "6,5", "ME"), reportPlayer("11", "Šulc", "5,9", "SA")],
                [reportPlayer("3", "Spáčil", "6,7", "AI"), reportPlayer("7", "Sadílek", "6,6", "CJR"), reportPlayer("6", "Král", "6,6", "MD"), reportPlayer("5", "Coufal", "6,5", "AI")],
                [reportPlayer("17", "Krejčí", "6,5", "CC"), reportPlayer("4", "Holeš", "6,4", "CC"), reportPlayer("19", "Hranáč", "6,6", "CP")],
                [reportPlayer("15", "Staněk", "6,7", "GRP")]
            ])
        },
        events: {
            home: [goalEvent("4", "I. Rayners", { penalty: true })],
            away: []
        },
        stats: reportStats([
            ["Posse", "47%", "53%"],
            ["Remates", "9", "9"],
            ["Remates à Baliza", "5", "6"],
            ["xG", "1,08", "0,53"],
            ["PADPAD", "27,27", "18,35"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "3", "3"],
            ["Passes Completados", "84%", "86%"],
            ["Cruzamentos Completados", "11%", "18%"],
            ["Faltas", "8", "19"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "125"],
            ["Classificação Média", "6,9", "6,5"]
        ])
    },
    {
        fixtureKey: "2026-06-18-mexico-coreia-do-sul",
        date: "Quinta-feira 18 de Junho de 2026",
        stadium: "Estadio Guadalajara",
        weather: "Brisa",
        playerOfMatch: "Luis Malagón",
        rating: "7,51",
        coaches: { home: "J. Aguirre", away: "Hong Myung-Bo" },
        formations: {
            home: reportFormation("3-4-2-1", [
                [reportPlayer("10", "J. Quiñones", "7,3", "AA", true)],
                [reportPlayer("20", "H. Lozano", "6,2", "AA"), reportPlayer("19", "Tecatito", "7,1", "AA")],
                [reportPlayer("26", "Angulo", "6,6", "AlI"), reportPlayer("16", "Chávez", "7,2", "CJR"), reportPlayer("4", "Álvarez", "6,9", "MAA"), reportPlayer("2", "J. Araujo", "7,2", "AI")],
                [reportPlayer("24", "Vásquez", "6,8", "CC"), reportPlayer("12", "Juárez", "7,2", "CC"), reportPlayer("17", "Reyes", "7,1", "CC")],
                [reportPlayer("1", "Malagón", "7,5", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("6", "Son", "6,3", "AAE")],
                [reportPlayer("7", "Lee Kang In", "7,1", "AI"), reportPlayer("25", "Lee", "6,3", "CJA"), reportPlayer("12", "Jeong", "6,6", "EAI")],
                [reportPlayer("15", "Paik Seung...", "6,8", "MD"), reportPlayer("8", "Inbeom", "6,6", "CJR")],
                [reportPlayer("16", "Lee Myung...", "6,8", "AI"), reportPlayer("4", "Minjae", "6,3", "CC"), reportPlayer("17", "Hong Jeon...", "6,5", "CC"), reportPlayer("22", "Seol Yung-...", "6,7", "DL")],
                [reportPlayer("1", "Jo Hyeon-...", "7,2", "GRP")]
            ])
        },
        events: {
            home: [goalEvent("16", "J. Quiñones", { assist: "J. Corona" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "56%", "44%"],
            ["Remates", "12", "12"],
            ["Remates à Baliza", "9", "3"],
            ["xG", "1,33", "1,32"],
            ["PADPAD", "21,40", "28,27"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "9", "7"],
            ["Passes Completados", "91%", "87%"],
            ["Cruzamentos Completados", "11%", "21%"],
            ["Faltas", "11", "4"],
            ["Cartões amarelos", "1", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "120"],
            ["Classificação Média", "7,0", "6,6"]
        ])
    },
    {
        fixtureKey: "2026-06-18-suica-bosnia-e-herzegovina",
        date: "Quinta-feira 18 de Junho de 2026",
        stadium: "Los Angeles Stadium",
        weather: "Calmo",
        playerOfMatch: "Nikola Vasilj",
        rating: "7,64",
        coaches: { home: "Murat Yakin", away: "S. Barbarez" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("11", "Okafor", "6,8", "AvR")],
                [reportPlayer("17", "Vargas", "7,0", "Ex"), reportPlayer("8", "Ndoye", "7,1", "Ex")],
                [reportPlayer("6", "Xhaka", "7,5", "CJA"), reportPlayer("16", "Manzambi", "6,3", "MO")],
                [reportPlayer("7", "Zakaria", "7,4", "MD", true)],
                [reportPlayer("19", "Muheim", "6,7", "AC"), reportPlayer("5", "Rodríguez", "6,8", "CC"), reportPlayer("4", "Akanji", "7,0", "CC"), reportPlayer("12", "Elvedi", "7,5", "LI")],
                [reportPlayer("1", "Kobel", "7,2", "GR")]
            ]),
            away: reportFormation("3-3-2-2", [
                [reportPlayer("10", "Džeko", "6,0", "AvR"), reportPlayer("9", "Demirović", "6,5", "AR")],
                [reportPlayer("7", "Krunić", "6,3", "MC"), reportPlayer("12", "Huseinbašić", "6,8", "MC")],
                [reportPlayer("19", "Karić", "6,4", "AI"), reportPlayer("6", "Gigović", "6,4", "CJR"), reportPlayer("2", "Dedić", "6,6", "AP")],
                [reportPlayer("4", "Kolašinac", "6,6", "CA"), reportPlayer("14", "Muharemo...", "6,4", "DC"), reportPlayer("5", "Barišić", "6,4", "DC")],
                [reportPlayer("22", "Vasilj", "7,6", "GR")]
            ])
        },
        events: {
            home: [goalEvent("19", "D. Zakaria", { assist: "R. Vargas" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "65%", "35%"],
            ["Remates", "18", "6"],
            ["Remates à Baliza", "10", "4"],
            ["xG", "1,54", "0,24"],
            ["PADPAD", "15,15", "21,81"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "11", "4"],
            ["Passes Completados", "90%", "83%"],
            ["Cruzamentos Completados", "24%", "5%"],
            ["Faltas", "12", "14"],
            ["Cartões amarelos", "2", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "123"],
            ["Classificação Média", "7,0", "6,6"]
        ])
    },
    {
        fixtureKey: "2026-06-18-canada-qatar",
        date: "Quinta-feira 18 de Junho de 2026",
        stadium: "BC Place Vancouver",
        weather: "Brisa",
        playerOfMatch: "Tani Oluwaseyi",
        rating: "7,84",
        coaches: { home: "J. Marsch", away: "J. Lopetegui" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("10", "J. David", "7,4", "AAE", true)],
                [reportPlayer("11", "Oluwaseyi", "7,8", "AI", true), reportPlayer("22", "Flores", "6,4", "MO"), reportPlayer("7", "Buchanan", "7,4", "Ex", true)],
                [reportPlayer("26", "Koné", "6,8", "MD"), reportPlayer("6", "Eustáquio", "6,8", "CJR")],
                [reportPlayer("19", "Davies", "7,1", "AI"), reportPlayer("5", "Cornelius", "6,8", "CC"), reportPlayer("4", "Bombito", "7,0", "CC"), reportPlayer("2", "Johnston", "6,6", "DL")],
                [reportPlayer("1", "St. Clair", "6,5", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("11", "Moez", "6,5", "AAE")],
                [reportPlayer("10", "Afif", "7,1", "AI", true), reportPlayer("25", "Asad", "6,5", "CJA"), reportPlayer("12", "Edmilson Junior", "7,1", "AA")],
                [reportPlayer("7", "K.Boudiaf", "6,4", "CJR"), reportPlayer("6", "Guilherme", "6,9", "MD")],
                [reportPlayer("23", "Homam", "6,5", "AI"), reportPlayer("5", "Khoukhi", "6,6", "CC"), reportPlayer("4", "Tarek", "6,7", "CC"), reportPlayer("15", "B.Alrawi", "6,4", "AlI")],
                [reportPlayer("1", "Barsham", "6,6", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("10", "T. Oluwaseyi", { assist: "T. Buchanan" }), goalEvent("53", "J. David", { assist: "T. Oluwaseyi" }), goalEvent("61", "T. Buchanan", { assist: "R. Laryea" })],
            away: [goalEvent("30", "A. Afif", { assist: "Edmilson Junior" })]
        },
        stats: reportStats([
            ["Posse", "37%", "63%"],
            ["Remates", "12", "9"],
            ["Remates à Baliza", "9", "6"],
            ["xG", "1,71", "0,83"],
            ["PADPAD", "18,50", "16,44"],
            ["Oportunidades Flagrantes", "1", "1"],
            ["Cantos", "6", "5"],
            ["Passes Completados", "87%", "90%"],
            ["Cruzamentos Completados", "22%", "23%"],
            ["Faltas", "21", "9"],
            ["Cartões amarelos", "2", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "123", "120"],
            ["Classificação Média", "6,9", "6,7"]
        ])
    },
    {
        fixtureKey: "2026-06-19-marrocos-escocia",
        date: "Sexta-feira 19 de Junho de 2026",
        stadium: "Boston Stadium",
        weather: "Brisa",
        playerOfMatch: "Yassine Bounou",
        rating: "7,63",
        coaches: { home: "R. Benmahmoud", away: "S. Clarke" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("12", "En-Nesyri", "6,4", "AC")],
                [reportPlayer("7", "Ez Abde", "6,3", "EAI"), reportPlayer("6", "Saibari", "6,3", "AI")],
                [reportPlayer("10", "Adli", "6,7", "MC"), reportPlayer("20", "Amrabat", "6,8", "MCA")],
                [reportPlayer("17", "Targhalline", "6,8", "MD")],
                [reportPlayer("15", "Mazraoui", "6,7", "AI"), reportPlayer("4", "N. Aguerd", "6,9", "CC"), reportPlayer("21", "Abqar", "7,3", "DC"), reportPlayer("2", "Hakimi", "7,1", "AI")],
                [reportPlayer("13", "Bono", "7,6", "GRP")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("10", "Adams", "6,2", "AAE")],
                [reportPlayer("7", "McGinn", "6,8", "ME"), reportPlayer("6", "McTominay", "6,4", "SA")],
                [reportPlayer("3", "Robertson", "7,2", "AI"), reportPlayer("17", "Gilmour", "6,7", "CJR"), reportPlayer("19", "Ferguson", "7,0", "MD"), reportPlayer("12", "Hickey", "6,3", "AI")],
                [reportPlayer("22", "Porteous", "6,8", "CP"), reportPlayer("24", "Welsh", "6,8", "CC"), reportPlayer("20", "Hyam", "7,1", "DC")],
                [reportPlayer("14", "Gunn", "7,2", "GR")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "54%", "46%"],
            ["Remates", "9", "11"],
            ["Remates à Baliza", "5", "4"],
            ["xG", "0,62", "0,80"],
            ["PADPAD", "23,28", "23,10"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "4", "4"],
            ["Passes Completados", "89%", "87%"],
            ["Cruzamentos Completados", "7%", "17%"],
            ["Faltas", "9", "14"],
            ["Cartões amarelos", "3", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "128", "131"],
            ["Classificação Média", "6,8", "6,8"]
        ])
    },
    {
        fixtureKey: "2026-06-19-haiti-brasil",
        date: "Sexta-feira 19 de Junho de 2026",
        stadium: "Philadelphia Stadium",
        weather: "Vento Forte",
        playerOfMatch: "Gabriel",
        rating: "8,52",
        coaches: { home: "S. Migné", away: "Zép Jóbes" },
        formations: {
            home: reportFormation("3-3-2-2", [
                [reportPlayer("10", "Isidor", "6,2", "AA"), reportPlayer("9", "Édouard", "6,1", "AvR")],
                [reportPlayer("8", "Danley", "6,6", "MC"), reportPlayer("7", "Bellegarde", "7,0", "MC")],
                [reportPlayer("3", "Expérience", "6,2", "AI"), reportPlayer("21", "Alceus", "6,4", "MD"), reportPlayer("15", "Arcus", "6,6", "AI", true)],
                [reportPlayer("5", "Delcroix", "6,4", "CC"), reportPlayer("18", "Duverne", "6,3", "CC"), reportPlayer("4", "Adé", "6,5", "DC")],
                [reportPlayer("1", "Placide", "7,5", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("15", "Cabral", "6,2", "AR")],
                [reportPlayer("7", "Vinícius Júnior", "6,2", "AA"), reportPlayer("10", "Cunha", "7,3", "MO"), reportPlayer("11", "Raphinha", "7,6", "AA", true)],
                [reportPlayer("6", "Casemiro", "6,6", "Pi"), reportPlayer("8", "Bruno Guimarães", "6,6", "CJR")],
                [reportPlayer("5", "Carlos", "6,7", "AI"), reportPlayer("4", "Gabriel", "8,5", "CC", true), reportPlayer("3", "Marquinhos", "6,7", "CC"), reportPlayer("2", "Wesley", "6,5", "AI")],
                [reportPlayer("12", "Ederson M.", "6,6", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("11", "C. Arcus", { assist: "J. Bellegarde" }), sendOffEvent("76", "C. Arcus")],
            away: [goalEvent("31", "Raphinha"), goalEvent("56", "Gabriel", { assist: "Matheus Cunha" }), goalEvent("88", "Gabriel", { assist: "Raphinha" }), goalEvent("89", "G. Martinelli", { assist: "Vanderson" })]
        },
        stats: reportStats([
            ["Posse", "46%", "54%"],
            ["Remates", "3", "22"],
            ["Remates à Baliza", "2", "10"],
            ["xG", "0,36", "2,98"],
            ["PADPAD", "24,90", "20,12"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "3", "12"],
            ["Passes Completados", "81%", "86%"],
            ["Cruzamentos Completados", "16%", "27%"],
            ["Faltas", "20", "10"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "1", "0"],
            ["Distância Percorrida", "103", "111"],
            ["Classificação Média", "6,5", "7,0"]
        ])
    },
    {
        fixtureKey: "2026-06-19-estados-unidos-australia",
        date: "Sexta-feira 19 de Junho de 2026",
        stadium: "Seattle Stadium",
        weather: "Brisa",
        playerOfMatch: "Mathew Leckie",
        rating: "8,83",
        coaches: { home: "João Nabais", away: "T. Popovic" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("18", "Balogun", "6,7", "AvR")],
                [reportPlayer("10", "Pulisic", "6,5", "AI"), reportPlayer("8", "Tillman", "6,5", "MO"), reportPlayer("6", "McKennie", "7,5", "AA", true)],
                [reportPlayer("16", "Johnny", "6,9", "MD"), reportPlayer("4", "Adams", "7,2", "MAA")],
                [reportPlayer("17", "Dest", "6,4", "DL"), reportPlayer("19", "Richards", "6,6", "CC"), reportPlayer("5", "Robinson", "7,0", "DC"), reportPlayer("2", "T. Weah", "8,1", "DL")],
                [reportPlayer("13", "Turner", "5,5", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("20", "Sapsford", "7,9", "AAE", true)],
                [reportPlayer("12", "McGree", "7,0", "AA"), reportPlayer("24", "Robertson", "6,4", "SA"), reportPlayer("10", "Volpato", "7,9", "AA", true)],
                [reportPlayer("8", "Irvine", "6,9", "MAA"), reportPlayer("6", "Devlin", "6,6", "MD")],
                [reportPlayer("3", "Bos", "7,3", "DL"), reportPlayer("5", "Burgess", "6,5", "CC"), reportPlayer("4", "Circati", "6,6", "CC"), reportPlayer("17", "Thomas Jo...", "6,8", "LI")],
                [reportPlayer("13", "Ryan", "6,8", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("45", "W. McKennie", { assist: "T. Weah" }), goalEvent("75", "A. Zendejas", { assist: "T. Adams" })],
            away: [goalEvent("32", "C. Volpato", { assist: "Z. Sapsford" }), goalEvent("71", "M. Leckie", { assist: "R. McGree" }), goalEvent("79", "Z. Sapsford", { assist: "M. Leckie" }), goalEvent("90+6", "M. Leckie", { penalty: true })]
        },
        stats: reportStats([
            ["Posse", "55%", "45%"],
            ["Remates", "18", "10"],
            ["Remates à Baliza", "8", "4"],
            ["xG", "1,66", "2,35"],
            ["PADPAD", "13,03", "20,71"],
            ["Oportunidades Flagrantes", "1", "3"],
            ["Cantos", "7", "4"],
            ["Passes Completados", "89%", "88%"],
            ["Cruzamentos Completados", "20%", "40%"],
            ["Faltas", "10", "11"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "133", "126"],
            ["Classificação Média", "6,8", "7,0"]
        ])
    },
    {
        fixtureKey: "2026-06-19-turquia-paraguai",
        date: "Sexta-feira 19 de Junho de 2026",
        stadium: "San Francisco Bay Area Stadium",
        weather: "Calmo",
        playerOfMatch: "Enes Ünal",
        rating: "7,93",
        coaches: { home: "V. Montella", away: "G. Alfaro" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Barış Alper Yılmaz", "6,4", "AAE")],
                [reportPlayer("11", "Kenan Yıldız", "6,3", "EAI"), reportPlayer("15", "Arda Güler", "6,2", "CL"), reportPlayer("16", "Yunus", "6,6", "AA")],
                [reportPlayer("10", "Hakan Çalh...", "7,1", "CJR"), reportPlayer("8", "Orkun", "6,7", "CJA")],
                [reportPlayer("7", "F.Kadıoğlu", "6,5", "DL"), reportPlayer("5", "Abdülkerim", "6,9", "CC"), reportPlayer("24", "Kaan", "6,8", "CC"), reportPlayer("20", "Zeki Çelik", "6,6", "DL")],
                [reportPlayer("1", "Uğurcan", "6,4", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("25", "T. Sanabria", "6,2", "AC")],
                [reportPlayer("9", "Enciso", "6,4", "Ex"), reportPlayer("16", "Maurício", "6,1", "MO"), reportPlayer("6", "Almirón", "6,6", "AA")],
                [reportPlayer("21", "Morel", "6,4", "MD"), reportPlayer("8", "Cubas", "7,3", "MAA", true)],
                [reportPlayer("17", "Sández", "6,8", "LI"), reportPlayer("5", "Omar Alder...", "6,8", "DC"), reportPlayer("15", "G. Gómez", "6,7", "DC"), reportPlayer("7", "Cáceres", "6,5", "DL")],
                [reportPlayer("14", "Olveira", "7,2", "GR")]
            ])
        },
        events: {
            home: [goalEvent("82", "Enes Ünal")],
            away: [goalEvent("52", "A. Cubas", { assist: "M. Almirón" })]
        },
        stats: reportStats([
            ["Posse", "59%", "41%"],
            ["Remates", "11", "5"],
            ["Remates à Baliza", "7", "3"],
            ["xG", "1,37", "0,44"],
            ["PADPAD", "18,05", "25,33"],
            ["Oportunidades Flagrantes", "3", "0"],
            ["Cantos", "6", "1"],
            ["Passes Completados", "91%", "88%"],
            ["Cruzamentos Completados", "9%", "22%"],
            ["Faltas", "11", "18"],
            ["Cartões amarelos", "1", "3"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "114", "110"],
            ["Classificação Média", "6,7", "6,6"]
        ])
    },
    {
        fixtureKey: "2026-06-20-costa-do-marfim-alemanha",
        date: "Sábado 20 de Junho de 2026",
        stadium: "Toronto Stadium",
        weather: "Temporal",
        playerOfMatch: "Franck Kessié",
        rating: "7,82",
        coaches: { home: "E. Faé", away: "H. Maus" },
        formations: {
            home: reportFormation("4-1-2-1-2", [
                [reportPlayer("8", "Guessand", "6,2", "AA"), reportPlayer("11", "Bonny", "6,5", "AvR")],
                [reportPlayer("6", "Amad", "6,2", "MO")],
                [reportPlayer("19", "Kessie", "7,8", "MC", true), reportPlayer("20", "C. Inao Oulaï", "6,9", "ME")],
                [reportPlayer("7", "Sangaré", "7,1", "Pi")],
                [reportPlayer("3", "Opéri", "6,6", "AI"), reportPlayer("4", "Ndicka", "6,9", "CC"), reportPlayer("5", "O. Diomande", "6,5", "CC"), reportPlayer("16", "Singo", "6,5", "LI")],
                [reportPlayer("1", "Fofana", "7,0", "GRC")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("7", "Havertz", "6,9", "AvR", true)],
                [reportPlayer("10", "Musiala", "6,6", "EAI"), reportPlayer("17", "Wirtz", "6,4", "CL"), reportPlayer("19", "Sané", "7,6", "AA")],
                [reportPlayer("8", "Goretzka", "6,8", "Pi"), reportPlayer("23", "F. Nmecha", "6,7", "CJA")],
                [reportPlayer("22", "Raum", "6,4", "AI"), reportPlayer("5", "N. Schlotte...", "6,5", "CC"), reportPlayer("4", "Tah", "7,0", "CC"), reportPlayer("6", "Kimmich", "6,7", "AC")],
                [reportPlayer("1", "Neuer", "6,6", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("38", "F. Kessié", { assist: "C. Inao Oulaï" })],
            away: [goalEvent("17", "K. Havertz", { assist: "L. Sané" })]
        },
        stats: reportStats([
            ["Posse", "41%", "59%"],
            ["Remates", "3", "11"],
            ["Remates à Baliza", "2", "7"],
            ["xG", "0,30", "1,01"],
            ["PADPAD", "52,00", "26,13"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "3", "6"],
            ["Passes Completados", "88%", "90%"],
            ["Cruzamentos Completados", "9%", "13%"],
            ["Faltas", "15", "8"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "118", "126"],
            ["Classificação Média", "6,7", "6,7"]
        ])
    },
    {
        fixtureKey: "2026-06-20-curacao-equador",
        date: "Sábado 20 de Junho de 2026",
        stadium: "Kansas City Stadium",
        weather: "Brisa",
        playerOfMatch: "Enner Valencia",
        rating: "8,28",
        coaches: { home: "D. Advocaat", away: "S. Beccacece" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("11", "Živković", "6,4", "AAE")],
                [reportPlayer("8", "Bacuna", "6,8", "EAI"), reportPlayer("19", "Chong", "6,0", "ME"), reportPlayer("10", "Hansen", "6,2", "AA")],
                [reportPlayer("2", "Bacuna", "6,5", "MD"), reportPlayer("6", "Bazoer", "6,2", "CJR")],
                [reportPlayer("3", "Floranus", "6,7", "DL"), reportPlayer("4", "Obispo", "6,5", "CC"), reportPlayer("15", "Chirino", "6,6", "DC"), reportPlayer("5", "Sambo", "6,4", "AI")],
                [reportPlayer("14", "Doornbusch", "6,4", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("13", "Valencia", "8,3", "AC", true)],
                [reportPlayer("26", "Julio", "7,1", "Ex", true), reportPlayer("11", "Sarmiento", "6,3", "Ex")],
                [reportPlayer("6", "Caicedo", "6,7", "MC"), reportPlayer("16", "Alcívar", "7,0", "MC")],
                [reportPlayer("7", "Gruezo", "7,0", "CJR")],
                [reportPlayer("5", "Hincapié", "7,6", "AI"), reportPlayer("4", "Pacho", "7,2", "CC"), reportPlayer("14", "Arboleda", "6,7", "DC"), reportPlayer("23", "Preciado", "8,2", "AI")],
                [reportPlayer("22", "Domínguez", "7,3", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("1", "E. Valencia", { assist: "Á. Preciado" }), goalEvent("41", "J. Julio", { assist: "Á. Preciado" }), goalEvent("62", "E. Valencia", { penalty: true })]
        },
        stats: reportStats([
            ["Posse", "48%", "52%"],
            ["Remates", "8", "12"],
            ["Remates à Baliza", "2", "7"],
            ["xG", "0,83", "2,00"],
            ["PADPAD", "19,40", "17,56"],
            ["Oportunidades Flagrantes", "1", "2"],
            ["Cantos", "3", "2"],
            ["Passes Completados", "88%", "91%"],
            ["Cruzamentos Completados", "18%", "18%"],
            ["Faltas", "12", "16"],
            ["Cartões amarelos", "1", "5"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "113", "118"],
            ["Classificação Média", "6,4", "7,2"]
        ])
    },
    {
        fixtureKey: "2026-06-20-paises-baixos-suecia",
        date: "Sábado 20 de Junho de 2026",
        stadium: "Houston Stadium",
        weather: "Tempestuoso",
        playerOfMatch: "Jeremie Frimpong",
        rating: "7,61",
        coaches: { home: "R. Koeman", away: "G. Potter" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("22", "Xavi", "6,8", "F9")],
                [reportPlayer("10", "Gakpo", "6,5", "AA"), reportPlayer("2", "Frimpong", "7,6", "Ex")],
                [reportPlayer("25", "Reijnders", "6,4", "MO"), reportPlayer("8", "Gravenberch", "6,9", "CJA")],
                [reportPlayer("21", "F. De Jong", "6,9", "CJR")],
                [reportPlayer("18", "Aké", "6,6", "LI"), reportPlayer("6", "Virgil", "7,0", "CC"), reportPlayer("4", "De Ligt", "7,5", "CP"), reportPlayer("15", "J. Timber", "7,6", "AlI")],
                [reportPlayer("13", "Verbruggen", "7,4", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("12", "Gyökeres", "6,0", "AAE")],
                [reportPlayer("11", "Isak", "6,1", "AA"), reportPlayer("6", "Forsberg", "6,7", "CJA"), reportPlayer("10", "Kulusevski", "6,6", "Ex")],
                [reportPlayer("16", "Ayari", "6,9", "MD"), reportPlayer("7", "Karlström", "6,9", "MAA")],
                [reportPlayer("3", "Svensson", "6,9", "AlI"), reportPlayer("5", "Starfelt", "7,5", "CP"), reportPlayer("19", "Lindelöf", "7,2", "CC"), reportPlayer("2", "Holm", "6,7", "LI")],
                [reportPlayer("1", "Widell Zett...", "7,5", "GR")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "57%", "43%"],
            ["Remates", "16", "5"],
            ["Remates à Baliza", "4", "0"],
            ["xG", "1,81", "0,46"],
            ["PADPAD", "19,58", "29,42"],
            ["Oportunidades Flagrantes", "1", "0"],
            ["Cantos", "9", "3"],
            ["Passes Completados", "92%", "92%"],
            ["Cruzamentos Completados", "39%", "6%"],
            ["Faltas", "7", "6"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "127", "126"],
            ["Classificação Média", "7,0", "6,8"]
        ])
    },
    {
        fixtureKey: "2026-06-20-tunisia-japao",
        date: "Sábado 20 de Junho de 2026",
        stadium: "Estadio Monterrey",
        weather: "Calmo",
        playerOfMatch: "Aymen Dahmen",
        rating: "7,98",
        coaches: { home: "S. Lamouchi", away: "T. Kobayashi" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("26", "Chaouat", "6,4", "AvR")],
                [reportPlayer("12", "Elias", "6,6", "EAI"), reportPlayer("19", "Hannibal", "6,4", "ME"), reportPlayer("20", "Layouni", "6,8", "CJA")],
                [reportPlayer("6", "Laidouni", "7,0", "MD"), reportPlayer("7", "Skhiri", "6,9", "MD")],
                [reportPlayer("16", "Abdi", "6,3", "AI"), reportPlayer("4", "Talbi", "6,8", "CC"), reportPlayer("5", "Meriah", "7,1", "CC"), reportPlayer("2", "Valery", "7,0", "DL")],
                [reportPlayer("1", "A.Dahmen", "8,0", "GRP")]
            ]),
            away: reportFormation("3-4-2-1", [
                [reportPlayer("9", "Ueda", "5,9", "AR")],
                [reportPlayer("7", "Daizen", "7,0", "Ex"), reportPlayer("15", "Take", "6,5", "EAI")],
                [reportPlayer("4", "Tomiyasu", "6,6", "AlI"), reportPlayer("6", "Kaishu", "7,1", "MD"), reportPlayer("3", "Endo", "7,6", "MD"), reportPlayer("10", "Doan", "6,7", "AP")],
                [reportPlayer("21", "Ito", "7,4", "CPO"), reportPlayer("16", "Watanabe", "7,1", "DC"), reportPlayer("5", "Itakura", "7,4", "CC")],
                [reportPlayer("13", "Osako", "7,2", "GR")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "45%", "55%"],
            ["Remates", "2", "8"],
            ["Remates à Baliza", "2", "3"],
            ["xG", "0,12", "1,23"],
            ["PADPAD", "22,76", "26,80"],
            ["Oportunidades Flagrantes", "0", "1"],
            ["Cantos", "3", "2"],
            ["Passes Completados", "90%", "94%"],
            ["Cruzamentos Completados", "9%", "10%"],
            ["Faltas", "7", "7"],
            ["Cartões amarelos", "1", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "122", "126"],
            ["Classificação Média", "6,8", "6,9"]
        ])
    },
    {
        fixtureKey: "2026-06-21-irao-belgica",
        date: "Domingo 21 de Junho de 2026",
        stadium: "Los Angeles Stadium",
        weather: "Calmo",
        playerOfMatch: "Jérémy Doku",
        rating: "8,29",
        coaches: { home: "A. Ghalenoei", away: "R. Garcia" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("12", "Sardar", "6,2", "AA")],
                [reportPlayer("15", "Allahyar", "6,0", "AA"), reportPlayer("18", "Jahanbakh...", "6,1", "EAI")],
                [reportPlayer("16", "Omidnor", "7,2", "MC"), reportPlayer("6", "Saeid", "6,6", "MC")],
                [reportPlayer("4", "Roozbeh", "7,0", "Pi")],
                [reportPlayer("19", "Goudi", "6,5", "AI"), reportPlayer("5", "Hazbavi", "6,7", "CC"), reportPlayer("17", "Kanani", "6,6", "DC"), reportPlayer("20", "Moharrami", "6,7", "AI")],
                [reportPlayer("13", "Beyranvand", "7,1", "GRC")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("11", "Openda", "7,1", "AC", true)],
                [reportPlayer("9", "Doku", "8,3", "Ex"), reportPlayer("6", "Saelemaek...", "6,4", "Ex")],
                [reportPlayer("7", "De Bruyne", "7,3", "CJA"), reportPlayer("8", "Tielemans", "6,9", "MC")],
                [reportPlayer("18", "Onana", "6,6", "Pi")],
                [reportPlayer("12", "De Cuyper", "7,0", "AlI"), reportPlayer("4", "Theate", "7,3", "CC"), reportPlayer("5", "De Winter", "7,1", "CC"), reportPlayer("21", "Castagne", "6,6", "AI")],
                [reportPlayer("1", "Courtois", "7,5", "GR")]
            ])
        },
        events: {
            home: [],
            away: [goalEvent("47", "L. Openda", { assist: "J. Doku" }), goalEvent("86", "L. Trossard", { assist: "C. De Ketelaere" })]
        },
        stats: reportStats([
            ["Posse", "52%", "48%"],
            ["Remates", "7", "22"],
            ["Remates à Baliza", "5", "9"],
            ["xG", "0,53", "2,93"],
            ["PADPAD", "19,26", "25,63"],
            ["Oportunidades Flagrantes", "0", "3"],
            ["Cantos", "4", "12"],
            ["Passes Completados", "89%", "88%"],
            ["Cruzamentos Completados", "13%", "21%"],
            ["Faltas", "9", "8"],
            ["Cartões amarelos", "0", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "121", "124"],
            ["Classificação Média", "6,6", "7,1"]
        ])
    },
    {
        fixtureKey: "2026-06-21-egito-nova-zelandia",
        date: "Domingo 21 de Junho de 2026",
        stadium: "BC Place Vancouver",
        weather: "Tempestuoso",
        playerOfMatch: "Liberato Cacace",
        rating: "7,38",
        coaches: { home: "H. Hassan", away: "D. Bazeley" },
        formations: {
            home: reportFormation("4-2-3-1", [
                [reportPlayer("7", "Marmoush", "6,4", "AAE")],
                [reportPlayer("12", "M. Trezeguet", "6,3", "AI"), reportPlayer("20", "Afsha", "6,4", "MO"), reportPlayer("11", "M.Salah", "7,2", "AI")],
                [reportPlayer("5", "Morsy", "6,6", "CJR"), reportPlayer("15", "H.Fathy", "6,7", "MD")],
                [reportPlayer("3", "Fatouh", "6,9", "AI"), reportPlayer("4", "M. Abdelm...", "6,8", "CC"), reportPlayer("18", "Hegazi", "7,2", "DC"), reportPlayer("25", "El Eraki", "6,9", "DL")],
                [reportPlayer("1", "Shoubir", "7,1", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "Wood", "6,5", "AR")],
                [reportPlayer("10", "McCowatt", "6,4", "Ex"), reportPlayer("8", "Singh", "6,6", "CL"), reportPlayer("11", "Just", "6,6", "AA")],
                [reportPlayer("17", "Stamenić", "6,9", "Pi"), reportPlayer("12", "Rufer", "6,3", "MD")],
                [reportPlayer("13", "Cacace", "7,4", "AC"), reportPlayer("25", "Tuiloma", "6,8", "CC"), reportPlayer("4", "Bindon", "6,8", "CC"), reportPlayer("2", "Kirwan", "6,8", "DL")],
                [reportPlayer("1", "Crocombe", "7,1", "GRP")]
            ])
        },
        events: {
            home: [],
            away: []
        },
        stats: reportStats([
            ["Posse", "50%", "50%"],
            ["Remates", "12", "9"],
            ["Remates à Baliza", "4", "4"],
            ["xG", "0,85", "0,27"],
            ["PADPAD", "14,96", "29,25"],
            ["Oportunidades Flagrantes", "0", "0"],
            ["Cantos", "6", "7"],
            ["Passes Completados", "88%", "89%"],
            ["Cruzamentos Completados", "15%", "17%"],
            ["Faltas", "11", "14"],
            ["Cartões amarelos", "1", "1"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "117", "116"],
            ["Classificação Média", "6,7", "6,8"]
        ])
    },
    {
        fixtureKey: "2026-06-21-espanha-arabia-saudita",
        date: "Domingo 21 de Junho de 2026",
        stadium: "Atlanta Stadium",
        weather: "Tempestuoso",
        playerOfMatch: "Feras Al-Brikan",
        rating: "8,61",
        coaches: { home: "Gamy Chambelito", away: "G. Donis" },
        formations: {
            home: reportFormation("4-2-2-2 Wide", [
                [reportPlayer("18", "Ayoze", "6,3", "AAE"), reportPlayer("10", "Oyarzábal", "6,1", "F9")],
                [reportPlayer("7", "N. Williams", "7,0", "EAI"), reportPlayer("19", "Lamine Yamal", "6,7", "AA")],
                [reportPlayer("8", "Pedri", "6,6", "CJR"), reportPlayer("4", "Rodri", "7,0", "MD")],
                [reportPlayer("3", "Grimaldo", "7,1", "AI", true), reportPlayer("6", "Le Normand", "6,3", "CC"), reportPlayer("5", "Cubarsí", "6,9", "CC"), reportPlayer("16", "M. Llorente", "6,5", "AI")],
                [reportPlayer("13", "J. García", "6,4", "GR")]
            ]),
            away: reportFormation("4-2-3-1", [
                [reportPlayer("9", "F. Al-Brikan", "8,6", "AvR", true)],
                [reportPlayer("6", "S. Al-Dawsari", "8,6", "AI", true), reportPlayer("8", "Musab", "7,4", "CJA"), reportPlayer("18", "Abdulrahm...", "6,8", "Ex")],
                [reportPlayer("3", "Nasser D.", "7,0", "MD"), reportPlayer("7", "Kanno", "6,8", "MD")],
                [reportPlayer("17", "Moteb", "6,2", "AI"), reportPlayer("21", "Kadish", "6,8", "DC"), reportPlayer("4", "Al Tambakti", "6,4", "CC"), reportPlayer("12", "Saud", "7,9", "AC")],
                [reportPlayer("1", "Nawaf", "6,8", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("35", "A. Grimaldo", { assist: "N. Williams" }), goalEvent("88", "D. Carvajal", { assist: "Á. Baena" })],
            away: [goalEvent("8", "F. Al-Brikan", { assist: "S. Al-Dawsari" }), goalEvent("11", "S. Al-Dawsari", { assist: "S. Abdulhamid" }), goalEvent("45+1", "F. Al-Brikan", { assist: "M. Al-Juwayr" })]
        },
        stats: reportStats([
            ["Posse", "46%", "54%"],
            ["Remates", "18", "10"],
            ["Remates à Baliza", "7", "6"],
            ["xG", "1,66", "1,96"],
            ["PADPAD", "19,81", "31,46"],
            ["Oportunidades Flagrantes", "0", "3"],
            ["Cantos", "5", "6"],
            ["Passes Completados", "91%", "91%"],
            ["Cruzamentos Completados", "21%", "20%"],
            ["Faltas", "8", "9"],
            ["Cartões amarelos", "0", "2"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "137", "133"],
            ["Classificação Média", "6,7", "7,1"]
        ])
    },
    {
        fixtureKey: "2026-06-21-uruguai-cabo-verde",
        date: "Domingo 21 de Junho de 2026",
        stadium: "Miami Stadium",
        weather: "Calmo",
        playerOfMatch: "Rodrigo Zalazar",
        rating: "7,90",
        coaches: { home: "M. Bielsa", away: "Bubista" },
        formations: {
            home: reportFormation("4-3-3", [
                [reportPlayer("9", "D. Núñez", "7,2", "AC")],
                [reportPlayer("10", "Torres", "7,1", "Ex"), reportPlayer("15", "Zalazar", "7,9", "Ex", true)],
                [reportPlayer("18", "M. Arambarri", "7,6", "CJA"), reportPlayer("12", "Valverde", "6,6", "ME")],
                [reportPlayer("7", "Bentancur", "7,0", "Pi")],
                [reportPlayer("3", "M. Araújo", "6,7", "AC"), reportPlayer("4", "J.M. Giménez", "7,0", "DC"), reportPlayer("17", "R. Araújo", "7,1", "CP"), reportPlayer("23", "Mouriño", "6,5", "AlI")],
                [reportPlayer("1", "Rochet", "7,1", "GR")]
            ]),
            away: reportFormation("4-3-3", [
                [reportPlayer("10", "Da Costa", "6,3", "AvR")],
                [reportPlayer("8", "J. Cabral", "6,4", "AA"), reportPlayer("15", "Andrade", "6,7", "AA")],
                [reportPlayer("16", "João Paulo", "6,9", "MC"), reportPlayer("22", "Duarte", "6,9", "ME")],
                [reportPlayer("7", "Kevin L.", "6,6", "MD")],
                [reportPlayer("3", "Lopes Cabr...", "6,5", "LI"), reportPlayer("21", "Moreira", "6,6", "CC"), reportPlayer("5", "Costa", "6,7", "CC"), reportPlayer("2", "Wagner P.", "6,0", "AI")],
                [reportPlayer("1", "Bruno Varela", "6,9", "GRC")]
            ])
        },
        events: {
            home: [goalEvent("26", "R. Zalazar", { assist: "M. Arambarri" })],
            away: []
        },
        stats: reportStats([
            ["Posse", "55%", "45%"],
            ["Remates", "19", "10"],
            ["Remates à Baliza", "6", "4"],
            ["xG", "2,76", "1,11"],
            ["PADPAD", "19,14", "26,75"],
            ["Oportunidades Flagrantes", "3", "1"],
            ["Cantos", "8", "6"],
            ["Passes Completados", "90%", "89%"],
            ["Cruzamentos Completados", "26%", "16%"],
            ["Faltas", "13", "10"],
            ["Cartões amarelos", "0", "0"],
            ["Cartões vermelhos", "0", "0"],
            ["Distância Percorrida", "124", "123"],
            ["Classificação Média", "7,1", "6,6"]
        ])
    }
];

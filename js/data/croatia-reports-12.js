// Jornada 12. Primeiro bloco escrito pelo scripts/report_build.js a partir de
// uma transcrição em JSON, e por isso o primeiro com os golos em `goalEvent()`:
// marcador e assistente em campos separados, sem ordem para interpretar.
const croatiaRoundTwelveReports = [
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
                    [reportPlayer("23", "Krovinović", "7,0", "MC"), reportPlayer("21", "Pukštas", "6,7", "MC")],
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
    }
];

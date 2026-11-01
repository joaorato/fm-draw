// Conquistas de A fama: treze contagens por treinador, com dez tiers cada.
//
// A contagem é global, somada em todas as edições; a seleção de edição do
// perfil não muda o tier, só mostra quanto cada edição acrescentou. Nada é
// guardado: tudo sai dos jogos publicados, dos relatórios e dos méritos.
//
// Os limites e as regras de contagem estão fixos (ver IDEIAS.md). Mudá-los
// depois de publicados baixaria tiers já ganhos.
//
// Carregar depois de edition-history.js, de onde vem getEditionFixtures.

const achievementTiers = [
    { id: "madeira", nome: "Madeira" },
    { id: "ferro", nome: "Ferro" },
    { id: "bronze", nome: "Bronze" },
    { id: "prata", nome: "Prata" },
    { id: "ouro", nome: "Ouro" },
    { id: "platina", nome: "Platina" },
    { id: "esmeralda", nome: "Esmeralda" },
    { id: "safira", nome: "Safira" },
    { id: "rubi", nome: "Rubi" },
    { id: "diamante", nome: "Diamante" }
];

// O id é também a pasta dos ícones: assets/achievements/<id>/<tier>.webp.
// `relatorio` marca as que só contam jogos com relatório; a Escócia não tem
// nenhum e só entra nas outras.
const achievementDefinitions = [
    {
        id: "golos", nome: "Golos", relatorio: false,
        descricao: "Golos marcados, em todas as competições.",
        limites: [25, 50, 90, 150, 225, 325, 450, 600, 800, 1000]
    },
    {
        id: "vitorias", nome: "Vitórias", relatorio: false,
        descricao: "Jogos ganhos, em todas as competições.",
        limites: [7, 14, 24, 38, 56, 80, 110, 150, 205, 270]
    },
    {
        id: "team-of-the-week", nome: "Team of the Week", relatorio: true,
        descricao: "Jogadores da equipa escolhidos para o Team of the Week, um por jogador em cada jornada.",
        limites: [12, 25, 45, 75, 110, 160, 225, 300, 390, 500]
    },
    {
        id: "duelo-emg", nome: "Duelo EMG", relatorio: false,
        descricao: "Vitórias contra a equipa de outro treinador EMG.",
        limites: [5, 10, 18, 29, 43, 60, 82, 110, 150, 200]
    },
    {
        id: "muralha", nome: "Muralha", relatorio: false,
        descricao: "Jogos sem sofrer golos.",
        limites: [3, 6, 11, 18, 27, 39, 54, 72, 95, 120]
    },
    {
        id: "tomba-gigantes", nome: "Tomba-gigantes", relatorio: false,
        descricao: "Vitórias de liga contra uma equipa com melhor posição prevista.",
        limites: [2, 5, 9, 15, 22, 32, 44, 59, 78, 100]
    },
    {
        id: "entrar-a-matar", nome: "Entrar a matar", relatorio: true,
        descricao: "Jogos com pelo menos um golo até ao minuto 15.",
        limites: [2, 5, 8, 13, 20, 29, 40, 54, 70, 90]
    },
    {
        id: "golpe-de-teatro", nome: "Golpe de teatro", relatorio: true,
        descricao: "Golos a partir do minuto 85 (115 no prolongamento) sem os quais o jogo acabaria com pior resultado.",
        limites: [1, 2, 3, 5, 7, 10, 13, 17, 22, 28]
    },
    {
        id: "demolidor", nome: "Demolidor", relatorio: false,
        descricao: "Vitórias por 4 ou mais golos de diferença.",
        limites: [1, 2, 4, 6, 9, 13, 18, 24, 31, 40]
    },
    {
        id: "dedinhos-do-treinador", nome: "Dedinhos do treinador", relatorio: true,
        descricao: "Vitórias depois de estar a perder.",
        limites: [1, 2, 4, 6, 9, 13, 18, 24, 31, 40]
    },
    {
        id: "cabeca-perdida", nome: "Cabeça perdida", relatorio: true,
        descricao: "Expulsões de jogadores da própria equipa.",
        limites: [1, 2, 3, 5, 8, 12, 17, 23, 30, 38]
    },
    {
        id: "hat-trick", nome: "Hat-trick", relatorio: true,
        descricao: "Jogos em que um jogador da equipa marca 3 ou mais golos.",
        limites: [1, 2, 3, 5, 8, 12, 17, 23, 30, 38]
    },
    {
        id: "premios-da-epoca", nome: "Prémios da época", relatorio: false,
        descricao: "Melhor marcador, melhor assistente ou melhor jogador de uma competição.",
        limites: [1, 2, 3, 5, 7, 10, 13, 17, 22, 28]
    }
];

// Só estes méritos são prémios da época; a Escócia tem outros (melhor defesa,
// médio, guarda-redes) que ficam de fora.
const ACHIEVEMENT_AWARD_LABEL = /^Melhor (jogador|marcador|assistente)\b/;

// "90+3" -> { base: 90, extra: 3 }. A ordem dos golos usa base + extra/100,
// que põe o 45+2 antes do 46 e o 90+3 antes do 91 do prolongamento.
function readAchievementMinute(minute) {
    let [base, extra] = String(minute ?? "").replace(/'/g, "").split("+");
    return { base: Number(base), extra: Number(extra) || 0 };
}

// Do 85' ao 90+x; no prolongamento, só do 115' ao 120+x. O 105+x fica de fora.
function isLateAchievementGoal(minute) {
    let { base } = readAchievementMinute(minute);
    return (base >= 85 && base <= 90) || base >= 115;
}

// Os golos tardios que mudaram o resultado final. Um conta se, sem ele e sem
// os golos tardios que a equipa marcou depois, o jogo acabaria pior: de 0-1
// para 2-1 com golos aos 88' e 90+3' contam os dois; de 1-1 para 3-1 só o
// primeiro, porque sem o segundo ainda se ganhava. Só precisa do resultado e
// dos golos tardios da própria equipa, não da ordem dos do adversário.
function decisiveLateGoals(mine, outcome) {
    let ordem = (event) => {
        let { base, extra } = readAchievementMinute(event.minute);
        return base + extra / 100;
    };
    let tarde = mine.filter((event) => isLateAchievementGoal(event.minute)).sort((a, b) => ordem(a) - ordem(b));
    let saldo = outcome.goalsFor - outcome.goalsAgainst;
    return tarde.filter((event, i) => Math.sign(saldo - (tarde.length - i)) < Math.sign(saldo));
}

// Esteve a perder em algum momento? Só se responde quando os eventos de golo
// somam o resultado: com golos em falta, a ordem não se pode reconstituir, e
// esses jogos ficam de fora em vez de contarem como "sem reviravolta".
// Golos das duas equipas no mesmo minuto contam primeiro os da própria, para
// nunca inventar uma reviravolta que a ordem real talvez não tenha tido.
function cameFromBehind(mine, theirs, outcome) {
    if (mine.length + theirs.length !== outcome.goalsFor + outcome.goalsAgainst) return false;

    let ordem = (event) => {
        let { base, extra } = readAchievementMinute(event.minute);
        return base + extra / 100;
    };
    let golos = [
        ...mine.map((event) => ({ t: ordem(event), d: 1 })),
        ...theirs.map((event) => ({ t: ordem(event), d: -1 }))
    ].sort((a, b) => a.t - b.t || b.d - a.d);

    let saldo = 0;
    for (let golo of golos) {
        saldo += golo.d;
        if (saldo < 0) return true;
    }
    return false;
}

function createAchievementTally() {
    return Object.fromEntries(achievementDefinitions.map((definition) => [definition.id, { total: 0, porEdicao: {}, provas: [] }]));
}

// Soma `quantidade` a uma conquista e guarda a prova: o jogo, a jornada ou o
// prémio que a deu, para o perfil poder ligar a cada um.
function addAchievementCount(tally, id, league, quantidade, prova) {
    if (!quantidade) return;
    let entry = tally[id];
    entry.total += quantidade;
    entry.porEdicao[league.editionId] = (entry.porEdicao[league.editionId] || 0) + quantidade;
    entry.provas.push({ league, quantidade, ...prova });
}

// Hat-tricks por jogo e equipa: { "<índice do jogo>|<equipa>": ["Nome", ...] }.
// Os autogolos nunca contam, e um jogo com dois hat-tricks conta uma vez.
function buildHatTrickIndex(league) {
    let porJogador = new Map();
    for (let record of buildGoalRecords(league).records) {
        if (record.ownGoal) continue;
        let jogo = `${league.fixtures.indexOf(record.fixture)}|${record.team}`;
        let key = `${jogo}|${normalizePlayerKey(record.scorer)}`;
        let entry = porJogador.get(key) || { jogo, nome: record.scorer, golos: 0 };
        entry.golos++;
        porJogador.set(key, entry);
    }

    let index = {};
    for (let entry of porJogador.values()) {
        if (entry.golos >= 3) (index[entry.jogo] ||= []).push(entry.nome);
    }
    return index;
}

function countMatchAchievements(tallies) {
    let hatTricks = new Map();

    for (let { league, fixture, index, homeCoach, awayCoach } of getEditionFixtures("all")) {
        if (!hatTricks.has(league.id)) hatTricks.set(league.id, buildHatTrickIndex(league));

        for (let side of ["home", "away"]) {
            let coach = side === "home" ? homeCoach : awayCoach;
            if (!coach) continue;

            let tally = tallies[coach];
            let other = side === "home" ? "away" : "home";
            let team = fixture[side];
            let rival = fixture[other];
            let rivalCoach = side === "home" ? awayCoach : homeCoach;
            // O resultado após prolongamento; os penáltis do desempate nunca contam.
            let outcome = getFixtureOutcome(fixture, team);
            let vitoria = outcome.result === "V";
            let prova = { fixture, equipa: team };
            let add = (id, quantidade, detalhe) => addAchievementCount(tally, id, league, quantidade, detalhe ? { ...prova, detalhe } : prova);

            add("golos", outcome.goalsFor);
            add("vitorias", Number(vitoria));
            add("duelo-emg", Number(vitoria && !!rivalCoach && rivalCoach !== coach), rivalCoach);
            add("muralha", Number(outcome.goalsAgainst === 0));
            add("demolidor", Number(vitoria && outcome.goalsFor - outcome.goalsAgainst >= 4));

            let isLeagueMatch = league.conquistas?.isLeagueMatch;
            let prevista = (equipa) => league.tabela.find((entry) => entry.equipa === equipa)?.prevista;
            if (vitoria && isLeagueMatch?.(fixture)
                && Number.isFinite(prevista(team)) && Number.isFinite(prevista(rival))
                && prevista(rival) < prevista(team)) {
                add("tomba-gigantes", 1, `${rival} prevista em ${prevista(rival)}.º, ${team} em ${prevista(team)}.º`);
            }

            if (!fixture.report) continue;
            let events = (lado) => (fixture.report.events?.[lado] || []).map(readGoalEvent);
            // Os autogolos estão do lado que beneficia, por isso contam aqui.
            let mine = events(side).filter((event) => !event.sendOff);
            let theirs = events(other).filter((event) => !event.sendOff);
            let expulsos = events(side).filter((event) => event.sendOff);

            let cedo = mine.filter((event) => readAchievementMinute(event.minute).base <= 15);
            add("entrar-a-matar", Number(cedo.length > 0), `${cedo[0]?.minute}'`);
            let tarde = decisiveLateGoals(mine, outcome);
            add("golpe-de-teatro", tarde.length, tarde.map((event) => `${event.minute}'`).join(", "));
            add("dedinhos-do-treinador", Number(vitoria && cameFromBehind(mine, theirs, outcome)));
            add("cabeca-perdida", expulsos.length, expulsos.map((event) => event.name).join(", "));

            let hatTrick = hatTricks.get(league.id)[`${index}|${team}`];
            add("hat-trick", Number(!!hatTrick), hatTrick?.join(", "));
        }
    }
}

// Cada jogador de um treinador no Team of the Week conta 1: três na mesma
// jornada contam 3. Só o Team of the Week, nunca o Team of the Weak.
function countTeamOfTheWeek(tallies) {
    for (let league of leagues.filter((entry) => entry.equipaJornada)) {
        let options = { isLeagueMatch: league.equipaJornada.isLeagueMatch };
        let coachOf = (equipa) => league.tabela.find((entry) => entry.equipa === equipa)?.jogador;

        for (let round of getFeasibleLeagueXiRounds(league, options)) {
            let xi = buildRoundXi(league, round, "best", options);
            let porTreinador = {};
            for (let player of [xi.gk, ...xi.def, ...xi.mid, ...xi.fwd]) {
                let coach = coachOf(player.team);
                if (coach && tallies[coach]) (porTreinador[coach] ||= []).push(player);
            }
            for (let [coach, players] of Object.entries(porTreinador)) {
                addAchievementCount(tallies[coach], "team-of-the-week", league, players.length, {
                    round,
                    detalhe: players.map((player) => player.name).join(", ")
                });
            }
        }
    }
}

// Só competições concluídas: até ao fim, o topo dos marcadores ainda pode mudar.
// Um prémio ganho por um jogador da IA não conta para ninguém.
function countSeasonAwards(tallies) {
    for (let league of leagues.filter((entry) => entry.status === "completed" && entry.merits)) {
        let rankings = league.golos ? buildPlayerRankings(buildGoalRecords(league, league.golos).records) : null;
        for (let award of league.merits.awards.filter((entry) => ACHIEVEMENT_AWARD_LABEL.test(entry.label))) {
            let resolvido = resolveMeritAward(award, rankings);
            for (let vencedor of resolvido?.vencedores || []) {
                let coach = league.tabela.find((entry) => entry.equipa === vencedor.equipa)?.jogador;
                if (!coach || !tallies[coach]) continue;
                addAchievementCount(tallies[coach], "premios-da-epoca", league, 1, {
                    award: award.label,
                    equipa: vencedor.equipa,
                    detalhe: vencedor.nome
                });
            }
        }
    }
}

// Os jogos e os prémios publicados não mudam depois de a página carregar, por
// isso conta-se uma vez para todos os treinadores e guarda-se.
let achievementCountsCache = null;

function buildAchievementCounts() {
    if (achievementCountsCache) return achievementCountsCache;
    let tallies = Object.fromEntries(coachProfiles.map((coach) => [coach.nome, createAchievementTally()]));
    countMatchAchievements(tallies);
    countTeamOfTheWeek(tallies);
    countSeasonAwards(tallies);
    achievementCountsCache = tallies;
    return tallies;
}

// O tier atual e o caminho para o seguinte. `tier` é null antes da Madeira;
// `proximo` é null depois do Diamante. `progresso` vai de 0 a 1 dentro do
// intervalo entre o limite atual e o seguinte.
function getAchievementTier(definition, total) {
    let nivel = definition.limites.filter((limite) => total >= limite).length - 1;
    let anterior = nivel >= 0 ? definition.limites[nivel] : 0;
    let proximo = definition.limites[nivel + 1] ?? null;
    return {
        nivel,
        tier: nivel >= 0 ? achievementTiers[nivel] : null,
        proximoTier: proximo === null ? null : achievementTiers[nivel + 1],
        anterior,
        proximo,
        progresso: proximo === null ? 1 : (total - anterior) / (proximo - anterior)
    };
}

function buildCoachAchievements(coach) {
    let tally = buildAchievementCounts()[coach.nome];
    if (!tally) return [];
    return achievementDefinitions.map((definition) => {
        let { total, porEdicao, provas } = tally[definition.id];
        return { definition, total, porEdicao, provas, ...getAchievementTier(definition, total) };
    });
}

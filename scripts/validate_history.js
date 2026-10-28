// Verificação sem browser: dados, resultados e arranque dos scripts clássicos.
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert/strict");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

function node() {
    const classes = new Set();
    return {
        innerHTML: "", textContent: "", hidden: true, dataset: {}, style: {}, children: [],
        classList: { add: (...items) => items.forEach((item) => classes.add(item)), remove: (...items) => items.forEach((item) => classes.delete(item)), contains: (item) => classes.has(item), toggle: (item, active) => active ? classes.add(item) : classes.delete(item) },
        setAttribute() {}, addEventListener() {}, querySelectorAll: () => [], querySelector: () => null,
        appendChild(child) { this.children.push(child); }, pause() {}, scrollIntoView() {}
    };
}
const elements = new Map([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => [match[1], node()]));
const timers = new Map();
const savedPreferences = new Map();
let timerId = 0;
const context = vm.createContext({
    console, document: { getElementById: (id) => elements.get(id) || null, createElement: node, querySelectorAll: () => [], querySelector: () => null, addEventListener() {}, body: node() },
    window: { addEventListener() {} }, location: { hash: "#home" }, history: { pushState() {} },
    sessionStorage: { getItem: () => null, setItem() {} },
    localStorage: { getItem: (key) => savedPreferences.get(key) || null, setItem: (key, value) => savedPreferences.set(key, value) },
    setTimeout: (callback) => { timers.set(++timerId, callback); return timerId; },
    clearTimeout: (id) => timers.delete(id), requestAnimationFrame: () => 0
});
const run = (code) => vm.runInContext(code, context);
for (const [, file] of html.matchAll(/<script src="([^"]+)"/g)) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

assert.equal(run("getEditionLeagues('fm26').length"), 3);
assert.equal(run("getEditionLeagues('fm27').length"), 0);
assert.equal(run("buildGeneralStandings(getEditionLeagues('fm27')).length"), 0);
assert.equal(run("buildGeneralStandings(getEditionLeagues('fm26'))[0].jogador"), "Gonçalo");
assert.equal(run("buildGeneralStandings(getEditionLeagues('fm26'))[0].total"), 42);
assert.match(elements.get("editionHome").innerHTML, /Liga EMG: O Juízo Final/);
assert.match(elements.get("editionHistory").innerHTML, /Título assegurado/);
assert.match(elements.get("headToHead").innerHTML, /Frente a frente/);
assert.equal(run("headToHeadFirst"), "");
assert.equal(run("headToHeadSecond"), "");
assert.doesNotMatch(elements.get("headToHead").innerHTML, /class="h2h-scoreboard"/);
run("updateHeadToHead('first', 'Gonçalo')");
assert.doesNotMatch(elements.get("headToHead").innerHTML, /class="h2h-scoreboard"/);
run("updateHeadToHead('second', 'Hugo'); headToHeadFirst = ''; headToHeadSecond = ''; restoreHeadToHead(); renderHeadToHead()");
assert.equal(run("headToHeadFirst"), "Gonçalo");
assert.equal(run("headToHeadSecond"), "Hugo");
assert.match(elements.get("headToHead").innerHTML, /class="h2h-scoreboard"/);
savedPreferences.set("emg-head-to-head-coaches", "invalid json");
run("restoreHeadToHead()");
assert.equal(run("headToHeadFirst"), "");
savedPreferences.set("emg-head-to-head-coaches", JSON.stringify({ first: "goncalo", second: "goncalo" }));
run("restoreHeadToHead()");
assert.equal(run("headToHeadSecond"), "");
savedPreferences.clear();
run("restoreHeadToHead(); renderHeadToHead()");

// Troca de edição: os resultados e os troféus antigos não passam para FM27.
const before = run("JSON.stringify(leagues.map(league => [league.id, league.fixtures.length, league.tabela]))");
run("selectMainLeague('croatia')");
assert.ok(timers.size > 0, "Carrossel croata em execução");
run("selectEdition('fm27')");
for (const id of ["editionHome", "editionHistory", "headToHead", "scoreTable"]) {
    assert.match(elements.get(id).innerHTML, /próximo capítulo/, id);
}
// Ligas e sorteios têm seletores próprios e não herdam um filtro invisível.
assert.doesNotMatch(elements.get("leaguePanel").innerHTML, /próximo capítulo/);
assert.doesNotMatch(elements.get("drawSelector").innerHTML, /próximo capítulo/);
assert.ok(run("getCoachStats(coachProfiles[0])"));
run("setCoachStatsScope('fm27')");
assert.equal(run("getCoachStats(coachProfiles[0])"), null);
assert.doesNotMatch(run("renderCoachStatsWideMarkup(coachProfiles[0])"), /coach-palmares-flags-rail/);
run("setCoachStatsScope('all')");
assert.ok(run("getCoachStats(coachProfiles[0])"));
const career = run("JSON.stringify(getCoachStats(coachProfiles[0]))");
run("setCoachStatsScope('fm26')");
assert.equal(run("JSON.stringify(getCoachStats(coachProfiles[0]))"), career);
const scopes = run("renderCoachStatsMarkup(coachProfiles[0])");
assert.equal((scopes.match(/<select /g) || []).length, 1);
assert.equal((scopes.match(/<option /g) || []).length, 3);
run("openCoachModal(coachProfiles[1].id, true)");
assert.equal(run("coachStatsScope"), "all", "Cada treinador abre no histórico");
run("setCoachStatsScope('fm27'); closeCoachModal(); openCoachModal(coachProfiles[1].id)");
assert.equal(run("coachStatsScope"), "all", "Reabrir também repõe o histórico");
run("closeCoachModal(); selectEdition('all')");
assert.equal(run("buildGeneralStandings(getEditionLeagues(getSelectedEdition()))[0].total"), 42);
run("selectEdition('fm26')");
assert.equal(run("JSON.stringify(leagues.map(league => [league.id, league.fixtures.length, league.tabela]))"), before);

for (const tab of ["home", "general", "summary", "coaches", "draw", "past"]) {
    run(`setActiveTab('${tab}', false)`);
    assert.equal(elements.get("editionSelector").hidden, ["coaches", "draw", "past"].includes(tab), tab);
}
run("setActiveTab('home', false)");
assert.equal(run("getRankedCoaches().map(coach => coach.nome).join('|')"), run("buildGeneralStandings(leagues).map(entry => entry.jogador).join('|')"));
assert.equal(run("getAdjacentCoachId(getRankedCoaches()[0].id, 1)"), run("getRankedCoaches()[1].id"));

// O percurso usa os clubes reais e o atalho abre o treinador no histórico.
const journey = run("renderCoachJourney(getCoachByShortName('Gonçalo'))");
assert.match(journey, /Aberdeen[\s\S]*HNK Rijeka[\s\S]*Brasil/i);
run("selectEdition('fm27'); openCoachModal(coachProfiles[1].id); setCoachModalView('stats')");
assert.equal(elements.get("coachModalJourney").hidden, true);
run("setCoachModalView('presentation')");
assert.equal(elements.get("coachModalJourney").hidden, false);
run("compareCoach(coachProfiles[1].id)");
assert.equal(run("getSelectedEdition()"), "all");
assert.equal(run("headToHeadFirst"), run("coachProfiles[1].nome"));
assert.notEqual(run("headToHeadFirst"), run("headToHeadSecond"));
assert.equal(elements.get("coachModal").hidden, true);

assert.equal(run("headToHeadSecond"), "", "O atalho não escolhe um adversário automaticamente");
run("updateHeadToHead('second', coachProfiles[0].nome)");
const selectedPair = run("[headToHeadFirst, headToHeadSecond, headToHeadLeague].join('|')");
const coachMenus = [...elements.get("headToHead").innerHTML.matchAll(/<select[^>]*>([\s\S]*?)<\/select>/g)];
assert.equal((coachMenus[0][1].match(/<option/g) || []).length, 8);
assert.equal((coachMenus[1][1].match(/<option/g) || []).length, 8);
assert.ok(!coachMenus[0][1].includes(`value="${run("headToHeadSecond")}"`));
assert.ok(!coachMenus[1][1].includes(`value="${run("headToHeadFirst")}"`));
run("updateHeadToHead('first', headToHeadSecond); updateHeadToHead('second', headToHeadFirst)");
assert.equal(run("[headToHeadFirst, headToHeadSecond, headToHeadLeague].join('|')"), selectedPair);
run("swapHeadToHead()");
assert.equal(run("[headToHeadSecond, headToHeadFirst, headToHeadLeague].join('|')"), selectedPair);
run("swapHeadToHead()");

// Todos os pares devem ser simétricos, sem jogos inventados e sem contar adiados.
run(`for (let i = 0; i < jogadores.length; i++) for (let j = i + 1; j < jogadores.length; j++) {
    const a = buildCoachHeadToHead("fm26", jogadores[i], jogadores[j]);
    const b = buildCoachHeadToHead("fm26", jogadores[j], jogadores[i]);
    if (a.matches !== a.wins + a.draws + a.losses || a.wins !== b.losses || a.goalsFor !== b.goalsAgainst) throw new Error("Confronto assimétrico");
    if (a.records.some(({ fixture }) => !Number.isFinite(fixture.homeGoals))) throw new Error("Jogo sem resultado");
}`);
const fixture = { home: "A", away: "B", homeGoals: 1, awayGoals: 1, winner: "away", displayScore: "p 1-1" };
context.sampleFixtures = [fixture, { home: "B", away: "A", homeGoals: null, awayGoals: null }];
run(`leagues.push({ id: "test", editionId: "test", fixtures: sampleFixtures, tabela: [{ equipa: "A", jogador: "Um" }, { equipa: "B", jogador: "Dois" }] })`);
const penalty = run("buildCoachHeadToHead('test', 'Um', 'Dois')");
assert.equal(penalty.matches, 1);
assert.equal(penalty.draws, 1);
assert.equal(penalty.wins, 0);
assert.equal(penalty.goalsFor, 1);
run("leagues.pop()");

const recap = run("buildEditionRetrospective('fm26')");
assert.equal(recap.matches.length, run("leagues.reduce((sum, league) => sum + league.fixtures.filter(f => Number.isFinite(f.homeGoals) && Number.isFinite(f.awayGoals)).length, 0)"));
assert.ok(recap.winningRuns.every((entry) => entry.league.id !== "scotland"));
assert.ok(recap.losingRuns.every((entry) => entry.league.id !== "scotland"));
assert.ok(recap.titleDecisions.every(({ fixture }) => fixture.report));
assert.equal(Math.abs(recap.biggestWins[0].fixture.homeGoals - recap.biggestWins[0].fixture.awayGoals), run("Math.max(...getEditionFixtures('fm26', 'all', true).map(({ fixture }) => Math.abs(fixture.homeGoals - fixture.awayGoals)))"));
for (const { league, fixture } of recap.matches.filter(({ fixture }) => fixture.report)) {
    assert.ok(league.fixtures.includes(fixture));
    assert.ok(fixture.report.id);
}
console.log("Histórico: arranque completo, edições isoladas, carreira, 28 confrontos simétricos, penáltis, adiados, recordes e ligações aos relatórios — OK.");

// A identidade usa só os resultados publicados e respeita a seleção do perfil.
for (const coach of run("coachProfiles")) {
    const all = run(`buildCoachIdentity(getCoachById('${coach.id}'), 'all')`);
    const fm26 = run(`buildCoachIdentity(getCoachById('${coach.id}'), 'fm26')`);
    assert.deepEqual(all.totals, fm26.totals);
    assert.ok(all.fame && Number.isFinite(all.fame.score));
    assert.ok(all.totals.cleanSheets <= all.totals.matches);
    assert.ok(all.totals.wins + all.totals.draws <= all.totals.matches);
    for (const rival of [all.strongest, all.weakest].filter(Boolean)) assert.ok(rival.matches >= 5);
    assert.equal(run(`buildCoachIdentity(getCoachById('${coach.id}'), 'fm27').fame`), null);
}
run(`leagues.push({ id: "identity-test", editionId: "identity-test", tabela: [{ equipa: "A", jogador: coachProfiles[0].nome }], fixtures: [
    ...Array.from({ length: 20 }, () => ({ home: "A", away: "B", homeGoals: 1, awayGoals: 1, winner: "home" })),
    { home: "A", away: "B", homeGoals: null, awayGoals: null }
] })`);
const identityTest = run("buildCoachIdentity(coachProfiles[0], 'identity-test')");
assert.equal(identityTest.totals.matches, 20);
assert.equal(identityTest.totals.wins, 0);
assert.equal(identityTest.totals.draws, 20);
assert.equal(identityTest.totals.goalsFor, 20);
run("leagues[leagues.length - 1].fixtures.splice(0, 1)");
assert.equal(run("buildCoachIdentity(coachProfiles[0], 'identity-test').fame"), null);
run("leagues.pop(); coachStatsScope = 'fm26'");
assert.match(run("renderCoachIdentityMarkup(coachProfiles[0])"), /Descrição editorial/);
assert.match(run("renderCoachIdentityMarkup(coachProfiles[0])"), /calendário parcial/);
run("openCoachIdentityRivalry(coachProfiles[0].id, coachProfiles[1].id)");
assert.equal(run("getSelectedEdition()"), "fm26");
assert.equal(run("headToHeadFirst"), run("coachProfiles[0].nome"));
assert.equal(run("headToHeadSecond"), run("coachProfiles[1].nome"));
console.log("Identidade: amostras, edições, penáltis, adiados, evidências e atalhos de comparação — OK.");

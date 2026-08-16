// Verifica o parsing dos golos contra os resultados.
//
// Corre com: node scripts/validate_goals.js
//
// Carrega os ficheiros de js/data/ pela ordem declarada no index.html e, para
// cada liga que declare `golos`, confirma que:
//   - todos os eventos de golo têm leitura única (nem por resolver, nem ambíguos);
//   - o número de golos lidos bate certo com o resultado de cada jogo.
//
// Depois de acrescentar relatórios novos, é isto que diz se algum nome partiu a regra.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");

function loadLeagues() {
    let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
    let files = html
        .split("\n")
        .map((line) => (line.match(/src="(js\/data\/[^"]+)"/) || [])[1])
        .filter(Boolean);

    if (!files.length) throw new Error("Não encontrei scripts js/data/ no index.html.");

    // Os ficheiros são scripts clássicos com `const` no topo: um `const` não
    // fica no objeto global, por isso junta-se tudo num script só.
    let source = files.map((file) => fs.readFileSync(path.join(root, file), "utf8")).join("\n;\n")
        + "\n;__exported = { leagues, buildGoalRecords, buildPlayerRankings, validateGoalRecords };";

    let context = vm.createContext({ console, __exported: null });
    vm.runInContext(source, context, { filename: "js/data/*.js" });

    return { ...context.__exported, files };
}

function main() {
    let { leagues, files, buildGoalRecords, buildPlayerRankings, validateGoalRecords } = loadLeagues();
    console.log(`${files.length} ficheiros de dados carregados.\n`);

    let failures = 0;

    leagues.forEach((league) => {
        if (!league.golos) {
            console.log(`${league.id}: sem painel de golos declarado, nada a verificar.`);
            return;
        }

        let { records, unresolved, ambiguous } = buildGoalRecords(league, league.golos);
        let mismatches = validateGoalRecords(league, records, league.golos);
        let rankings = buildPlayerRankings(records);

        let scored = records.filter((record) => !record.ownGoal);
        let ownGoals = records.filter((record) => record.ownGoal);
        let assists = records.filter((record) => record.assist);
        let matches = new Set(records.map((record) => record.fixture)).size;

        console.log(`=== ${league.id} ===`);
        console.log(`  eventos lidos      : ${records.length}`);
        console.log(`  golos com marcador : ${scored.length}`);
        console.log(`  autogolos          : ${ownGoals.length}`);
        console.log(`  assistências       : ${assists.length}`);
        console.log(`  jogos com golos    : ${matches}`);
        console.log(`  por resolver       : ${unresolved.length}`);
        console.log(`  ambíguos           : ${ambiguous.length}`);
        console.log(`  desacordo c/ placar: ${mismatches.length}`);

        unresolved.forEach((item) => console.log(`    sem leitura: "${item.event}" (${item.team})`));
        ambiguous.forEach((item) => console.log(`    ambíguo: "${item.event}" (${item.team}) -> `
            + item.readings.map((r) => `[${r.scorer} | ${r.assist ?? "—"}]`).join(" ou ")));
        mismatches.forEach((item) => console.log(`    ${item.fixture.home} ${item.placar} ${item.fixture.away}`
            + ` -> lidos ${item.lidos}`));

        if (unresolved.length || ambiguous.length || mismatches.length) failures++;

        let top = (rows) => rows.slice(0, 5).map((row) => `${row.nome} ${row.total}`).join(", ");
        console.log(`  marcadores   : ${top(rankings.marcadores)}`);
        console.log(`  assistências : ${top(rankings.assistentes)}\n`);
    });

    if (failures) {
        console.error(`FALHOU em ${failures} liga(s).`);
        process.exit(1);
    }
    console.log("Tudo certo.");
}

main();

// Carrega os ficheiros de js/data/ fora do browser.
//
// São scripts clássicos com `const` no topo, e um `const` não fica no objeto
// global: por isso junta-se tudo num script só e exporta-se no fim, pela mesma
// ordem em que o index.html os carrega.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");

const EXPORTADOS = [
    "leagues",
    "buildSquadIndex",
    "readGoalEvent",
    "splitScorerAndAssist",
    "buildGoalRecords",
    "buildPlayerRankings",
    "validateGoalRecords"
];

function loadLeagueData() {
    let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
    let files = html
        .split("\n")
        .map((line) => (line.match(/src="(js\/data\/[^"]+)"/) || [])[1])
        .filter(Boolean);

    if (!files.length) throw new Error("Não encontrei scripts js/data/ no index.html.");

    let source = files.map((file) => fs.readFileSync(path.join(root, file), "utf8")).join("\n;\n")
        + `\n;__exported = { ${EXPORTADOS.join(", ")} };`;

    let context = vm.createContext({ console, __exported: null });
    vm.runInContext(source, context, { filename: "js/data/*.js" });

    return { ...context.__exported, files, root };
}

module.exports = { loadLeagueData };

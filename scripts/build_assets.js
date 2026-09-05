// Converte os originais de assets-src/ para o que o site serve em assets/.
//
// assets-src/ está no .gitignore: é a fonte, fica só no disco de quem converte.
// assets/ é gerado, e é isso que vai para o GitHub Pages. Um ficheiro que este
// script não converta desaparece de assets/ por si — não há passo de apagar.
//
//   node scripts/build_assets.js            escreve assets/
//   node scripts/build_assets.js --check    não escreve, diz o que faria
//   node scripts/build_assets.js --verify   confirma que tudo o que o site pede existe
//
// Precisa de cwebp e ffmpeg no PATH. Não instala nada, não usa npm.

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const SRC = "assets-src";
const OUT = "assets";

// Material de trabalho, não conteúdo do site. Fica em assets-src/ e mais nada.
//
//   Resultados_croacia/  capturas do FM de onde se transcreveram os relatórios
//   stats_treinador_*    imagens de referência do que mostrar no ecrã de stats
//   teste*               imagens de teste
//   os três de chico/    exports em bruto, ainda por tratar
//
// Tudo o resto converte, incluindo arte que ainda ninguém ligou ao site (as
// taças da UEFA, os retratos numerados a seguir ao último usado). Custa poucos
// KB e evita ter de lembrar de a converir no dia em que for precisa.
const NAO_PUBLICADOS = [
    (rel) => rel.startsWith("Resultados_croacia/"),
    (rel) => path.basename(rel).toLowerCase().startsWith("stats_treinador"),
    (rel) => path.basename(rel).toLowerCase().startsWith("teste"),
    (rel) => rel === "treinadores/chico/cfcf.png",
    // Sem o "ã": o macOS guarda o nome em NFD, e comparar a letra acentuada
    // falha conforme a normalização de quem lê a pasta.
    (rel) => rel.startsWith("treinadores/chico/Captura de ecr"),
    (rel) => rel.startsWith("treinadores/chico/ChatGPT Image")
];

// Largura máxima por grupo, cerca do dobro do que cada um chega a ocupar no ecrã.
// A coluna "porquê" aponta para a regra de CSS que manda no tamanho.
const REGRAS = [
    // treinadores: o lightbox abre os retratos a 92vw, por isso é o grupo que
    // precisa mesmo de resolução. Os cards do rail nunca passam de 294x440.
    { teste: (rel) => rel.startsWith("treinadores/") && /card/i.test(path.basename(rel)), largura: 900 },
    { teste: (rel) => rel.startsWith("treinadores/"), largura: 1600 },

    { teste: (rel) => rel.startsWith("logos/trophy_cabinet/"), largura: 720 },   // lightbox 360
    { teste: (rel) => rel === "logos/ligaEMG.png", largura: 1600 },              // hero ~796
    { teste: (rel) => rel.startsWith("logos/teams/"), largura: 360 },            // sorteio 180
    { teste: (rel) => rel.startsWith("social/"), largura: 200 },                 // ~95
    // Antes da regra geral das bandeiras: as do Mundial são ícones quadrados e
    // aparecem a 48 nos cards de escolha de seleção e a 22 na lista dos grupos.
    { teste: (rel) => rel.startsWith("flags/mundial/"), largura: 96 },           // card 48
    { teste: (rel) => rel.startsWith("flags/"), largura: 150 }                   // 72x46
];

// Abaixo desta largura o webp com perdas mostra artefactos num logótipo, e o
// sem perdas continua a dar poucos KB. Apanha os 108 emblemas de 28x28 e 32x32.
const LIMITE_SEM_PERDAS = 128;
const QUALIDADE = 82;

const EXTENSOES_IMAGEM = [".png", ".webp", ".jpg", ".jpeg"];

function listar(dir, base = dir, out = []) {
    for (const entrada of fs.readdirSync(dir, { withFileTypes: true })) {
        const abs = path.join(dir, entrada.name);
        if (entrada.isDirectory()) listar(abs, base, out);
        else out.push(path.relative(base, abs).split(path.sep).join("/"));
    }
    return out;
}

function ePublicado(rel) {
    return !NAO_PUBLICADOS.some((teste) => teste(rel));
}

function larguraAlvo(rel) {
    const regra = REGRAS.find((r) => r.teste(rel));
    return regra ? regra.largura : null;
}

// Dois ficheiros de treinadores/rato/ chamam-se .png mas são JPEG. Ler o
// cabeçalho PNG devolve lixo para esses, por isso cai-se para o sips.
function dimensoes(abs) {
    const cabecalho = Buffer.alloc(32);
    const fd = fs.openSync(abs, "r");
    fs.readSync(fd, cabecalho, 0, 32, 0);
    fs.closeSync(fd);

    if (cabecalho.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
        return { largura: cabecalho.readUInt32BE(16), altura: cabecalho.readUInt32BE(20) };
    }

    const saida = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", abs], { encoding: "utf8" });
    const largura = (saida.match(/pixelWidth:\s*(\d+)/) || [])[1];
    const altura = (saida.match(/pixelHeight:\s*(\d+)/) || [])[1];
    return { largura: Number(largura) || 0, altura: Number(altura) || 0 };
}

function converterImagem(absOrigem, absDestino, largura) {
    const { largura: original } = dimensoes(absOrigem);
    const redimensionar = original > largura ? largura : 0;
    const final = redimensionar || original;

    const args = ["-quiet", "-mt"];
    if (final <= LIMITE_SEM_PERDAS) args.push("-lossless", "-z", "9");
    else args.push("-q", String(QUALIDADE), "-alpha_q", "90");
    if (redimensionar) args.push("-resize", String(redimensionar), "0");
    args.push(absOrigem, "-o", absDestino);

    execFileSync("cwebp", args, { stdio: ["ignore", "ignore", "pipe"] });
    return { original, final };
}

function converterAudio(absOrigem, absDestino) {
    execFileSync("ffmpeg", ["-y", "-i", absOrigem, "-b:a", "128k", "-map_metadata", "-1", absDestino], {
        stdio: ["ignore", "ignore", "pipe"]
    });
}

function destinoDe(rel) {
    const ext = path.extname(rel).toLowerCase();
    if (EXTENSOES_IMAGEM.includes(ext)) return rel.slice(0, -ext.length) + ".webp";
    return rel;
}

function construir({ escrever }) {
    const dirOrigem = path.join(root, SRC);
    if (!fs.existsSync(dirOrigem)) {
        console.error(`Não existe ${SRC}/, por isso não há de onde converter.`);
        console.error("");
        console.error("É o esperado em qualquer clone: assets-src/ está no .gitignore e não vem no");
        console.error("pull. Nada está partido - assets/ já tem tudo o que o site pede. Só é preciso");
        console.error("reconstituir os originais para voltar a converter, e eles estão no histórico:");
        console.error("");
        console.error(`    mkdir ${SRC}`);
        console.error(`    git archive 153b17a assets | tar -x -C ${SRC} --strip-components=1`);
        console.error("");
        console.error("153b17a é o último commit antes da conversão.");
        process.exit(1);
    }

    const todos = listar(dirOrigem);
    const publicados = todos.filter(ePublicado);
    const deixados = todos.filter((rel) => !ePublicado(rel));

    let bytesOrigem = 0;
    let bytesDestino = 0;
    let semRegra = [];

    if (escrever && fs.existsSync(path.join(root, OUT))) {
        fs.rmSync(path.join(root, OUT), { recursive: true });
    }

    for (const rel of publicados) {
        const absOrigem = path.join(dirOrigem, rel);
        const rel2 = destinoDe(rel);
        const absDestino = path.join(root, OUT, rel2);
        const ext = path.extname(rel).toLowerCase();

        bytesOrigem += fs.statSync(absOrigem).size;
        if (escrever) fs.mkdirSync(path.dirname(absDestino), { recursive: true });

        if (EXTENSOES_IMAGEM.includes(ext)) {
            const largura = larguraAlvo(rel);
            if (largura === null) {
                // Um grupo novo que ninguém previu. Avisa em vez de escolher por conta própria.
                semRegra.push(rel);
                continue;
            }
            if (escrever) {
                converterImagem(absOrigem, absDestino, largura);
                bytesDestino += fs.statSync(absDestino).size;
            }
        } else if (ext === ".mp3") {
            if (escrever) {
                converterAudio(absOrigem, absDestino);
                bytesDestino += fs.statSync(absDestino).size;
            }
        } else if (escrever) {
            fs.copyFileSync(absOrigem, absDestino);
            bytesDestino += fs.statSync(absDestino).size;
        }
    }

    console.log(`${SRC}/  ${todos.length} ficheiros, ${(bytesOrigem / 1e6).toFixed(1)} MB publicáveis`);
    console.log(`${OUT}/  ${publicados.length - semRegra.length} escritos, ${(bytesDestino / 1e6).toFixed(2)} MB`);
    console.log(`deixados em ${SRC}/ (material de trabalho): ${deixados.length}`);

    if (semRegra.length) {
        console.log(`\nSEM REGRA DE TAMANHO (${semRegra.length}) — não foram escritos:`);
        for (const rel of semRegra) console.log("   " + rel);
        console.log("Acrescentar uma entrada em REGRAS, ou um teste em NAO_PUBLICADOS.");
        process.exitCode = 1;
    }
}

// Nada no site reage a uma imagem que falha a carregar: não há onerror em lado
// nenhum. Um caminho errado é invisível no browser, por isso confirma-se aqui.
function verificar() {
    const fonte = fs.readFileSync(path.join(root, "js/data/core/coaches.js"), "utf8")
        + "\n;__x = { coachAssetFiles, coachProfiles };";
    const contexto = vm.createContext({ console, __x: null });
    vm.runInContext(fonte, contexto, { filename: "js/data/core/coaches.js" });
    const { coachAssetFiles, coachProfiles } = contexto.__x;

    const pedidos = new Set();

    // Os literais escritos à mão, no HTML e em todo o js/.
    const ficheiros = ["index.html", "style.css", ...listar(path.join(root, "js")).map((f) => "js/" + f)];
    for (const f of ficheiros) {
        const texto = fs.readFileSync(path.join(root, f), "utf8");
        for (const m of texto.matchAll(/assets\/[^"'`\s)]+\.(?:png|webp|jpg|jpeg|mp3)/gi)) pedidos.add(m[0]);
    }

    // Os caminhos que resolveCoachMedia() constrói. Repete-se aqui a mesma
    // filtragem de js/ui/coaches.js: teste* e stats* nunca chegam a ser pedidos.
    for (const coach of coachProfiles) {
        const pasta = coach.assetFolder;
        const todos = coachAssetFiles[pasta] || [];
        const usaveis = todos.filter((f) => {
            const n = f.toLowerCase();
            return !n.includes("teste") && !n.includes("stats");
        });
        const card = usaveis.filter((f) => /card/i.test(f))[0] || usaveis[0] || null;
        let perfis = usaveis.filter((f) => /profile/i.test(f));
        if (!perfis.length) perfis = usaveis.filter((f) => f !== card);
        if (!perfis.length && card) perfis = [card];
        if (card) pedidos.add(`assets/treinadores/${pasta}/${card}`);
        for (const f of perfis) pedidos.add(`assets/treinadores/${pasta}/${f}`);
    }

    const emFalta = [...pedidos].filter((p) => !fs.existsSync(path.join(root, p))).sort();
    console.log(`caminhos pedidos pelo site: ${pedidos.size}`);
    console.log(`em falta: ${emFalta.length}`);
    for (const p of emFalta) console.log("   " + p);
    if (emFalta.length) process.exitCode = 1;
}

const args = process.argv.slice(2);
if (args.includes("--verify")) verificar();
else construir({ escrever: !args.includes("--check") });

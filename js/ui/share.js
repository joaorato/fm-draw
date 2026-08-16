const DISCORD_WEBHOOK = "";

async function shareToDiscord(btn) {
    btn.disabled = true;
    btn.textContent = "A enviar...";

    try {
        let panel = document.querySelector("#drawView .page-panel");
        let canvas = await capturePanel(panel);

        let blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

        let form = new FormData();
        form.append("file", blob, "sorteio.png");
        form.append("payload_json", JSON.stringify({
            content: "Sorteio concluído! Aqui estão os resultados:"
        }));

        let response = await fetch(DISCORD_WEBHOOK, { method: "POST", body: form });

        if (response.ok) {
            btn.textContent = "Enviado!";
        } else {
            console.error("Discord webhook error:", response.status, await response.text());
            btn.textContent = "Erro ao enviar";
            setTimeout(() => {
                btn.textContent = "Partilhar";
                btn.disabled = false;
            }, 3000);
        }
    } catch (e) {
        console.error("Discord share error:", e);
        btn.textContent = "Erro ao enviar";
        setTimeout(() => {
            btn.textContent = "Partilhar";
            btn.disabled = false;
        }, 3000);
    }
}

function imageToDataURL(img) {
    let c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    c.getContext("2d").drawImage(img, 0, 0);
    return c.toDataURL("image/png");
}

const HTML2CANVAS_SRC = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
let html2canvasLoader = null;

// Carregado só quando alguém carrega em "Partilhar", para não pesar em todas as visitas.
function loadHtml2Canvas() {
    if (window.html2canvas) {
        return Promise.resolve(window.html2canvas);
    }
    if (!html2canvasLoader) {
        html2canvasLoader = new Promise((resolve, reject) => {
            let script = document.createElement("script");
            script.src = HTML2CANVAS_SRC;
            script.onload = () => resolve(window.html2canvas);
            script.onerror = () => {
                html2canvasLoader = null;
                reject(new Error("Não foi possível carregar o html2canvas"));
            };
            document.head.appendChild(script);
        });
    }
    return html2canvasLoader;
}

async function capturePanel(panel) {
    let render = await loadHtml2Canvas();

    let images = panel.querySelectorAll("img");
    let originals = [];
    images.forEach((img) => {
        originals.push(img.src);
        try { img.src = imageToDataURL(img); } catch (_) {}
    });

    let canvas = await render(panel, { backgroundColor: "#02071b", scale: 2 });

    images.forEach((img, i) => { img.src = originals[i]; });
    return canvas;
}

function toggleFullscreen() {
    const btn = document.getElementById("fullscreenBtn");
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            btn.classList.add("is-fullscreen");
        }).catch(() => {});
    } else {
        document.exitFullscreen().then(() => {
            btn.classList.remove("is-fullscreen");
        }).catch(() => {});
    }
}

document.addEventListener("fullscreenchange", () => {
    const btn = document.getElementById("fullscreenBtn");
    btn.classList.toggle("is-fullscreen", !!document.fullscreenElement);
});

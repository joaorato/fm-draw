function formatPoints(points) {
    return points > 0 ? `+${points}` : `${points}`;
}

function getPointsClass(points) {
    if (points > 0) return "positive";
    if (points < 0) return "negative";
    return "neutral";
}

function escapeAttribute(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function bindCoachLinks(scope = document) {
    scope.querySelectorAll(".coach-link").forEach((link) => {
        if (link.dataset.bound === "true") return;
        link.addEventListener("click", () => {
            let coachId = link.dataset.coachId;
            openCoachModal(coachId);
        });
        link.dataset.bound = "true";
    });
}

let overlayStack = [];

function openOverlay(el, { show, onEscape } = {}) {
    if (!el) return;
    if (show === "hidden") el.hidden = false;
    else if (show === "class") el.classList.add("active");
    overlayStack.push({ el, onEscape });
    document.body.classList.add("modal-open");
}

function closeOverlay(el, { show } = {}) {
    if (!el) return;
    overlayStack = overlayStack.filter((entry) => entry.el !== el);
    if (show === "hidden") el.hidden = true;
    else if (show === "class") el.classList.remove("active");
    else el.remove();
    if (!overlayStack.length) document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !overlayStack.length) return;
    overlayStack[overlayStack.length - 1].onEscape?.();
});

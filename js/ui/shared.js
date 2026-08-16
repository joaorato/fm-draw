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

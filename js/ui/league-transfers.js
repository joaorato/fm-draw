function renderTransferClub(league, clubName) {
    if (!clubName) {
        return `<span class="league-transfer-club-name muted" title="Sem clube">Sem clube</span>`;
    }

    let entry = getLeagueTeamEntry(league, clubName);
    let clubTitle = escapeAttribute(clubName);
    let logo = entry?.logo || transferClubLogos[clubName];
    if (logo) {
        return `
            <span class="league-transfer-club-cell league-transfer-club-cell--logo-only" title="${clubTitle}">
                <img src="${logo}" alt="${clubName}" class="league-transfer-team-logo" loading="lazy">
            </span>
        `;
    }

    return `
        <span class="league-transfer-club-cell">
            <span class="league-transfer-club-name" title="${clubTitle}">${clubName}</span>
        </span>
    `;
}

function formatTransferValue(value) {
    return String(value || "")
        .replace(/Empréstimo/g, "Emp.")
        .replace(/Emp\\. -/g, "Emp. ·");
}


function renderLeagueTransfers(league) {
    if (!league.transfers?.length) return "";
    let humanTeams = new Set((league.tabela || []).filter((entry) => entry.jogador).map((entry) => entry.equipa));
    let parseDate = (date) => {
        let [day, month, year] = String(date).split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
    };
    let rows = [...league.transfers]
        .sort((a, b) => parseDate(b.date) - parseDate(a.date))
        .map((item) => {
            let isIncoming = humanTeams.has(item.to);
            let type = isIncoming ? "Entrada" : "Saída";
            let playerTitle = escapeAttribute(item.player);
            let valueTitle = escapeAttribute(item.value);
            let routeTitle = escapeAttribute(`${item.from || "Sem clube"} → ${item.to || "Sem clube"}`);
            let rowTitle = escapeAttribute(`${item.date} · ${item.player} · ${item.from || "Sem clube"} → ${item.to || "Sem clube"} · ${item.value}`);

            return `
                <div class="league-transfer-row ${isIncoming ? "incoming" : "outgoing"}" title="${rowTitle}">
                    <div class="league-transfer-date">${item.date}</div>
                    <div class="league-transfer-player">
                        <div class="league-transfer-player-name" title="${playerTitle}">${item.player}</div>
                        <div class="league-transfer-type">${type}</div>
                    </div>
                    <div class="league-transfer-route" title="${routeTitle}">
                        ${renderTransferClub(league, item.from)}
                        <span class="league-transfer-arrow">→</span>
                        ${renderTransferClub(league, item.to)}
                    </div>
                    <div class="league-transfer-value" title="${valueTitle}">${formatTransferValue(item.value)}</div>
                </div>
            `;
        }).join("");

    return `
        <section class="league-side-card league-transfers-card">
            <div class="league-side-head centered league-transfers-head">
                <strong>Transferências</strong>
                <div class="league-transfer-window is-closed" title="Janela de transferências fechada">
                    <span>Mercado</span>
                    <b>Fechado</b>
                </div>
            </div>
            <div class="league-transfer-table-head">
                <span>Data</span>
                <span>Jogador</span>
                <span>Movimento</span>
                <span>Valor</span>
            </div>
            <div class="league-transfers-scroll">${rows}</div>
        </section>
    `;
}

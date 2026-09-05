// Os 12 grupos do Mundial 2026, tal como ficaram depois do playoff de março de
// 2026. Não são sorteados pelo site: são dados fixos, o sorteio da Liga EMG é
// só sobre quem fica com que grupo.
//
// A ordem dentro de cada grupo é a ordem do sorteio da FIFA, por isso a
// primeira seleção de cada grupo é sempre a cabeça de série do pote 1. Os potes
// 2 a 4 não estão registados porque nada no site os usa e um número errado aqui
// passaria despercebido.
const worldCupGroups = [
    { id: "A", nome: "Grupo A", equipas: [
        { nome: "México", codigo: "MEX", bandeira: "assets/flags/mundial/mex.webp" },
        { nome: "África do Sul", codigo: "RSA", bandeira: "assets/flags/mundial/rsa.webp" },
        { nome: "Coreia do Sul", codigo: "KOR", bandeira: "assets/flags/mundial/kor.webp" },
        { nome: "Chéquia", codigo: "CZE", bandeira: "assets/flags/mundial/cze.webp" }
    ] },
    { id: "B", nome: "Grupo B", equipas: [
        { nome: "Canadá", codigo: "CAN", bandeira: "assets/flags/mundial/can.webp" },
        { nome: "Suíça", codigo: "SUI", bandeira: "assets/flags/mundial/sui.webp" },
        { nome: "Qatar", codigo: "QAT", bandeira: "assets/flags/mundial/qat.webp" },
        { nome: "Bósnia e Herzegovina", codigo: "BIH", bandeira: "assets/flags/mundial/bih.webp" }
    ] },
    { id: "C", nome: "Grupo C", equipas: [
        { nome: "Brasil", codigo: "BRA", bandeira: "assets/flags/mundial/bra.webp" },
        { nome: "Marrocos", codigo: "MAR", bandeira: "assets/flags/mundial/mar.webp" },
        { nome: "Escócia", codigo: "SCO", bandeira: "assets/flags/mundial/sco.webp" },
        { nome: "Haiti", codigo: "HAI", bandeira: "assets/flags/mundial/hai.webp" }
    ] },
    { id: "D", nome: "Grupo D", equipas: [
        { nome: "Estados Unidos", codigo: "USA", bandeira: "assets/flags/mundial/usa.webp" },
        { nome: "Paraguai", codigo: "PAR", bandeira: "assets/flags/mundial/par.webp" },
        { nome: "Austrália", codigo: "AUS", bandeira: "assets/flags/mundial/aus.webp" },
        { nome: "Turquia", codigo: "TUR", bandeira: "assets/flags/mundial/tur.webp" }
    ] },
    { id: "E", nome: "Grupo E", equipas: [
        { nome: "Alemanha", codigo: "GER", bandeira: "assets/flags/mundial/ger.webp" },
        { nome: "Curaçao", codigo: "CUW", bandeira: "assets/flags/mundial/cuw.webp" },
        { nome: "Costa do Marfim", codigo: "CIV", bandeira: "assets/flags/mundial/civ.webp" },
        { nome: "Equador", codigo: "ECU", bandeira: "assets/flags/mundial/ecu.webp" }
    ] },
    { id: "F", nome: "Grupo F", equipas: [
        { nome: "Países Baixos", codigo: "NED", bandeira: "assets/flags/mundial/ned.webp" },
        { nome: "Japão", codigo: "JPN", bandeira: "assets/flags/mundial/jpn.webp" },
        { nome: "Tunísia", codigo: "TUN", bandeira: "assets/flags/mundial/tun.webp" },
        { nome: "Suécia", codigo: "SWE", bandeira: "assets/flags/mundial/swe.webp" }
    ] },
    { id: "G", nome: "Grupo G", equipas: [
        { nome: "Bélgica", codigo: "BEL", bandeira: "assets/flags/mundial/bel.webp" },
        { nome: "Egito", codigo: "EGY", bandeira: "assets/flags/mundial/egy.webp" },
        { nome: "Irão", codigo: "IRN", bandeira: "assets/flags/mundial/irn.webp" },
        { nome: "Nova Zelândia", codigo: "NZL", bandeira: "assets/flags/mundial/nzl.webp" }
    ] },
    { id: "H", nome: "Grupo H", equipas: [
        { nome: "Espanha", codigo: "ESP", bandeira: "assets/flags/mundial/esp.webp" },
        { nome: "Cabo Verde", codigo: "CPV", bandeira: "assets/flags/mundial/cpv.webp" },
        { nome: "Arábia Saudita", codigo: "KSA", bandeira: "assets/flags/mundial/ksa.webp" },
        { nome: "Uruguai", codigo: "URU", bandeira: "assets/flags/mundial/uru.webp" }
    ] },
    { id: "I", nome: "Grupo I", equipas: [
        { nome: "França", codigo: "FRA", bandeira: "assets/flags/mundial/fra.webp" },
        { nome: "Senegal", codigo: "SEN", bandeira: "assets/flags/mundial/sen.webp" },
        { nome: "Noruega", codigo: "NOR", bandeira: "assets/flags/mundial/nor.webp" },
        { nome: "Iraque", codigo: "IRQ", bandeira: "assets/flags/mundial/irq.webp" }
    ] },
    { id: "J", nome: "Grupo J", equipas: [
        { nome: "Argentina", codigo: "ARG", bandeira: "assets/flags/mundial/arg.webp" },
        { nome: "Argélia", codigo: "ALG", bandeira: "assets/flags/mundial/alg.webp" },
        { nome: "Áustria", codigo: "AUT", bandeira: "assets/flags/mundial/aut.webp" },
        { nome: "Jordânia", codigo: "JOR", bandeira: "assets/flags/mundial/jor.webp" }
    ] },
    { id: "K", nome: "Grupo K", equipas: [
        { nome: "Portugal", codigo: "POR", bandeira: "assets/flags/mundial/por.webp" },
        { nome: "Colômbia", codigo: "COL", bandeira: "assets/flags/mundial/col.webp" },
        { nome: "Uzbequistão", codigo: "UZB", bandeira: "assets/flags/mundial/uzb.webp" },
        { nome: "RD Congo", codigo: "COD", bandeira: "assets/flags/mundial/cod.webp" }
    ] },
    { id: "L", nome: "Grupo L", equipas: [
        { nome: "Inglaterra", codigo: "ENG", bandeira: "assets/flags/mundial/eng.webp" },
        { nome: "Croácia", codigo: "CRO", bandeira: "assets/flags/mundial/cro.webp" },
        { nome: "Gana", codigo: "GHA", bandeira: "assets/flags/mundial/gha.webp" },
        { nome: "Panamá", codigo: "PAN", bandeira: "assets/flags/mundial/pan.webp" }
    ] }
];

const worldCupGroupIds = worldCupGroups.map((grupo) => grupo.id);

function getWorldCupGroup(id) {
    return worldCupGroups.find((grupo) => grupo.id === id) || null;
}

function getWorldCupTeam(groupId, teamName) {
    let grupo = getWorldCupGroup(groupId);
    if (!grupo) return null;
    return grupo.equipas.find((equipa) => equipa.nome === teamName) || null;
}

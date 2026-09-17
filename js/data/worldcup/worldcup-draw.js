// Resultado do sorteio dos grupos do Mundial. Enquanto WORLDCUP_DRAW_COMPLETED
// for false a aba corre a cerimónia; depois do sorteio cola-se aqui o que o
// botão "Copiar resultado" põe na área de transferência e passa-se a true, tal
// como o DRAW_COMPLETED do sorteio da Croácia em js/ui/draw.js.
const WORLDCUP_DRAW_COMPLETED = true;

const worldCupDrawResults = [
    { jogador: "Cardoso", grupo: "C", equipa: "Marrocos", codigo: "MAR", bandeira: "assets/flags/mundial/mar.webp" },
    { jogador: "Nabais", grupo: "D", equipa: "Estados Unidos", codigo: "USA", bandeira: "assets/flags/mundial/usa.webp" },
    { jogador: "Rato", grupo: "E", equipa: "Alemanha", codigo: "GER", bandeira: "assets/flags/mundial/ger.webp" },
    { jogador: "Gamy", grupo: "H", equipa: "Espanha", codigo: "ESP", bandeira: "assets/flags/mundial/esp.webp" },
    { jogador: "Hugo", grupo: "I", equipa: "França", codigo: "FRA", bandeira: "assets/flags/mundial/fra.webp" },
    { jogador: "Gonçalo", grupo: "C", equipa: "Brasil", codigo: "BRA", bandeira: "assets/flags/mundial/bra.webp" },
    { jogador: "Painatal", grupo: "K", equipa: "Portugal", codigo: "POR", bandeira: "assets/flags/mundial/por.webp" },
    { jogador: "Chico", grupo: "L", equipa: "Inglaterra", codigo: "ENG", bandeira: "assets/flags/mundial/eng.webp" }
];

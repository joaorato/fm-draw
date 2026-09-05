// Resultado do sorteio dos grupos do Mundial. Enquanto WORLDCUP_DRAW_COMPLETED
// for false a aba corre a cerimónia; depois do sorteio cola-se aqui o que o
// botão "Copiar resultado" põe na área de transferência e passa-se a true, tal
// como o DRAW_COMPLETED do sorteio da Croácia em js/ui/draw.js.
const WORLDCUP_DRAW_COMPLETED = false;

// { jogador, grupo, equipa, codigo, bandeira }
const worldCupDrawResults = [];

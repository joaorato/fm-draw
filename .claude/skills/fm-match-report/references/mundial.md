# Mundial 2026

Lê isto quando as equipas do print são seleções (Brasil, Marrocos, Alemanha...).

## Onde fica

- Relatórios: `js/data/worldcup/worldcup-reports.js`. O `--write` escreve aí sozinho.
- Jogos: `js/data/worldcup/worldcup-fixtures.js`. O placar do jogo é posto pelo `--write`.
- `league.ficheiros` em `leagues.js` aponta para os dois.

## Treinadores

Aqui, ao contrário da Liga Croata, escreve-se sempre o nome do treinador que o cabeçalho do
print mostra, também nas seleções dos humanos ("H. Maus" na Alemanha, "Zép Jóbes" no Brasil,
"Gamy Chambelito" em Espanha). Não troques pelo nome do dono da seleção.

Oito seleções têm um humano, o dono no sorteio: Brasil (Gonçalo), Marrocos (Cardoso, que
desistiu), Alemanha (Rato), Estados Unidos (Nabais), Espanha (Gamy), França (Hugo), Portugal
(Painatal) e Inglaterra (Chico). A fonte de verdade é `worldCupDrawResults` em
`worldcup-draw.js`.

## Nomes das equipas

Os portugueses de `worldcup-groups.js`, tal e qual: "Países Baixos", "Costa do Marfim",
"Estados Unidos", "RD Congo", "Bósnia e Herzegovina", "Chéquia", "Cabo Verde". O FM pode
mostrar outro nome (o print inglês diz "Netherlands"): a transcrição usa o do site.

## Fase de grupos

Os 72 jogos já estão em `worldcup-fixtures.js`, com as datas do calendário real. O
`report_build.js` acha o jogo pelo dia, mês, ano (2026) e equipas, por isso a data do
print tem de bater com a do jogo. Se o save tiver outra data, não mexas no JSON: avisa o
utilizador para acertar a data no `worldcup-fixtures.js` primeiro, ou o jogo não é achado.

## Quadro a eliminar

Estes jogos não existem nos dados até alguém os acrescentar. Se o `report_build.js` disser
que não há nenhum jogo com a data e equipas do print, é isto: pede ao utilizador, ou
acrescenta tu depois de ele confirmar, o jogo a `worldcup-fixtures.js` com o número
oficial da FIFA (73 a 104, ver `worldCupBracket` em `worldcup-table.js`):

```js
createLeagueMatch("Junho", "Mundial · Oitavos de final", "4 Jul", "Brasil", "-", "Japão",
    { year: 2026, matchNumber: 90, roundKey: "r16", roundLabel: "Mundial · Oitavos de final" }),
```

`roundKey` é um de `r32`, `r16`, `qf`, `sf`, `3p`, `final`. O placar "-" é substituído pelo
`--write`.

## Prolongamento e penáltis

O `score` da transcrição conta golos de jogo, prolongamento incluído e penáltis de
desempate de fora: é com ele que o `report_build.js` confere a lista de eventos. Um jogo
decidido nos penáltis tem de levar `displayScore` e `winner` no jogo,
senão o quadro não sabe quem passou e o campeão ou o pódio ficam por decidir:

```js
{ year: 2026, matchNumber: 104, roundKey: "final", roundLabel: "Mundial · Final",
  displayScore: "p 2-2", winner: "away" }
```

O `winner` é `"home"` ou `"away"`. O `--write` não o põe: pergunta ao utilizador quem
ganhou nos penáltis e escreve-o à mão no jogo.

## Plantéis

Não há ficheiro de transferências, por isso o que o site sabe dos jogadores de uma seleção
vem só das fichas já escritas. No primeiro jogo de cada seleção o `report_lint.js` não tem
com quem comparar números e grafias, e vai avisar menos. Olha com mais atenção para esses.

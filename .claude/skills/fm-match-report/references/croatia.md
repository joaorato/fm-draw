# Liga Croata (SuperSport HNL, 2025/26)

Lê isto quando as equipas do print são clubes croatas (Dinamo Zagreb, Hajduk Split, HNK Rijeka...).

## Onde fica

- Relatórios: `js/data/croatia/croatia-reports.js`. O `--write` escreve aí sozinho.
- Jogos: `js/data/croatia/croatia-fixtures.js`. O placar do jogo é posto pelo `--write`.
- `league.ficheiros` em `leagues.js` aponta para os dois.

## Treinadores

Nos oito clubes dos humanos escreve-se sempre o humano, mesmo quando o cabeçalho mostra
o adjunto:

| Clube | Treinador |
|---|---|
| HNK Rijeka | Gonçalo |
| NK Osijek | Gamy |
| NK Lokomotiva | Painatal |
| NK Istra 1961 | Rato |
| NK Varaždin | Nabais |
| NK Slaven Belupo | Chico |
| HNK Gorica | Cardoso |
| HNK Vukovar | Hugo |

Dinamo Zagreb e Hajduk Split não têm humano e levam o que o FM mostrar. A fonte de verdade
é `croatiaSeedTable` em `croatia-table.js` (campo `jogador`).

## Nomes das equipas

Os do `croatiaSeedTable`, tal e qual: "HNK Rijeka", "NK Istra 1961", "Dinamo Zagreb". Os
adversários da Taça que não são da liga (Bjelovar, Uljanik...) estão escritos nos jogos da
Taça em `croatia-fixtures.js`.

## Taça da Croácia

Os jogos da Taça estão na mesma lista, com `roundKey: "cup-..."`. Os que foram a
prolongamento ou penáltis levam `displayScore` e `winner` no jogo. Não contam para a
tabela nem para os golos e assistências da liga (`isCroatiaLeagueMatch`).

## Chaves e datas

O ano na chave é 2025 mesmo nos jogos de 2026 (`createFixtureKey` usa 2025 por omissão),
por isso nunca se constrói uma chave à mão. O `report_build.js` acha o jogo pelo dia, mês
e equipas.

## Nomes das formações

Os relatórios antigos têm nomes de formação errados (35 na altura em que isto foi escrito),
por isso o que lá está não serve de referência: pergunta o nome ao utilizador, como diz a
`SKILL.md`.

---
name: fm-match-report
description: Transcreve uma captura do ecrã "Relatório no final do jogo" do Football Manager para um relatório de jogo do site da Liga EMG. Usa quando o utilizador manda um print de um jogo do FM, quando pede para acrescentar ou corrigir um relatório, ou quando fala de golos, assistências e marcadores que não batem certo com o save.
---

# Relatório de jogo do FM para os dados do site

```bash
python3 scripts/report_crop.py <captura.png> --out <pasta>     # recorta e amplia
#   lê os recortes e escreve a transcrição em JSON
node scripts/report_build.js <json> --write                     # valida e escreve
node scripts/report_lint.js <fixtureKey>
node scripts/validate_goals.js
```

**Não commites.** Deixa por commitar para o utilizador ver o `git diff` e decidir.
**Não abras o browser** sem te pedirem: quem confere a página é ele.

Os relatórios estão todos no `js/data/croatia-reports.js` e é lá que o `--write`
escreve, tanto a substituir um que já existe como a acrescentar um novo. Não há
ficheiro para escolher nem `<script>` para juntar.

## O JSON

```json
{
  "date": "Sábado 1 de Novembro de 2025",
  "teams": { "home": "Hajduk Split", "away": "HNK Gorica" },
  "score": { "home": 1, "away": 1 },
  "stadium": "Poljud", "weather": "Calmo",
  "playerOfMatch": { "name": "Šimun Hrgović", "rating": "7,91" },
  "coaches": { "home": "Gonzalo García", "away": "Miguel Cardoso" },
  "lineups": { "home": { "formation": "4-3-3 DM", "rows": [[{ "number": "10",
      "name": "Livaja", "rating": "7,8", "pos": "AR", "goal": true }]] } },
  "events": { "away": [{ "minute": "71", "scorer": "W. Sule", "assist": "J. Pršir" }] },
  "stats": [["Posse", "59%", "41%"]]
}
```

As linhas do onze vão do ataque para o guarda-redes. Um evento pode levar
`"penalty": true`, `"ownGoal": true` ou `"sendOff": true` (aí usa `"player"` em
vez de `"scorer"`).

A chave não se escreve à mão — o `report_build.js` acha o jogo pelo dia, mês e
equipas. **Um relatório cujo fixtureKey não bate certo é descartado sem dar erro.**

## O marcador é o nome mais perto da bola

Vale para os dois lados, sem ter de decorar qual está espelhado:

```
casa    ⚽  61' L. Mamić  A. Latković        -> marcou o Mamić
fora        M. Zajc  A. Hoxha  70'  ⚽       -> marcou o Hoxha
```

A bola fica por fora, o minuto encostado a ela, o marcador a seguir ao minuto, o
assistente por dentro. É a regra boa porque **o marcador pode ter entrado do
banco** e aí não está desenhado no campo.

Copiar a coluna da direita pela ordem em que aparece é o erro mais caro do
projeto: há jogos inteiros gravados com o golo no assistente. Não tem padrão —
conta com a maioria dos jogos antigos precisar de correção.

## As quatro armadilhas

**Números de camisola com um dígito tapado.** O desenho da camisola come o
primeiro dígito: 33 lê-se 3, 71 lê-se 1. O sinal é o número estar descentrado ou
colidir com o de um colega. O `report_lint.js` diz que número aquele jogador usa
nos outros relatórios; se continuar duvidoso, pergunta.

**O treinador pode ser o adjunto.** Nos oito clubes dos humanos escreve-se sempre
o humano, mesmo quando o cabeçalho mostra outro nome. Dinamo e Hajduk não têm
humano e levam o que o FM mostrar.

**O nome da formação não está neste ecrã** — o cartão diz "(PI)". A linha antes
do guarda-redes são os defesas e é o primeiro número do nome. O resto não se
deduz, e não o copies dos relatórios antigos: 35 deles estão errados. Pergunta.

**Cartões e autogolos vivem na lista dos golos.** O autogolo escreve-se do lado
que beneficia, embora o jogador seja da outra equipa.

## O `goal: true`

Lê-se do campo, **nunca se deduz do evento que acabaste de escrever**. Não aparece
em lado nenhum do site: existe só para ser uma segunda leitura de quem marcou, e
é com ela que o `report_build.js` confirma o painel de eventos. Se for preenchido
a olhar para o evento, deixa de ser prova e passa a repetir o erro.

Confirma só titulares — um suplente que marque não tem camisola no campo.

## As catorze estatísticas

Sempre estas e sempre por esta ordem: Posse, Remates, Remates à Baliza, xG,
PADPAD, Oportunidades Flagrantes, Cantos, Passes Completados, Cruzamentos
Completados, Faltas, Cartões amarelos, Cartões vermelhos, Distância Percorrida,
Classificação Média. O FM escreve "Cartões Vermelhos" com V grande; nos dados fica
minúsculo.

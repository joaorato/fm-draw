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

**Não vás procurar o jogo aos dados.** Nem o jogo, nem a chave, nem o relatório
que já lá está: o `report_build.js` acha o jogo pela data e pelas equipas, e o
`git diff` depois do `--write` mostra o que mudou. Ler o relatório antigo antes
de transcrever não te diz nada que precises e ainda te encosta a repeti-lo — e é
o antigo que costuma estar errado.

## Que recortes ler

Sete, sempre os mesmos: os quatro das fichas (`casa-*`, `fora-*`), o dos eventos
— que é a segunda leitura do `goal: true` — e os dois das estatísticas
(`dados-*`), que nada valida depois de escritas. O `cabecalho.png` não se lê: o
resultado, a data, o estádio, o tempo e o homem do jogo estão em letra grande no
print que o utilizador colou e que já tens à frente. Se ele só te tiver dado o
caminho do ficheiro, sem colar a imagem, então são oito e o cabeçalho lê-se
também.

**Não faças ampliações por tua conta antes de escrever.** Nem para conferir
números de camisola, nem para caçar diacríticos. Escreve o que lês, corre o
`report_build.js --write` e depois o `report_lint.js`: ele compara cada número e
cada nome com o resto da época e diz-te quais é que merecem uma segunda vista.
Ampliar à cautela custa mais do que o relatório todo e responde pior — o print
não sabe o que os outros jogos já dizem daquele jogador, e o lint sabe.

Quando o pedido é só uma parte do relatório — corrigir os onzes, por exemplo — o
JSON vai completo à mesma, porque o `--write` reescreve o relatório todo, mas
tudo o que ele leva sai do print e não do que estava gravado.

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
vez de `"scorer"`). Leva `"substitute": true` quando quem marcou entrou do banco
e o apelido dele também está no onze: sem isso o `report_build.js` toma o titular
pelo marcador e exige uma bola no campo que um suplente nunca pode ter.

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
primeiro dígito: 33 lê-se 3, 71 lê-se 1. Não andes à procura deles no print —
escreve o que vês e deixa o `report_lint.js` dizer que número aquele jogador usa
nos outros relatórios. Amplia só o que ele apontar, e se continuar duvidoso
pergunta em vez de escolher.

**O treinador pode ser o adjunto.** Nos oito clubes dos humanos escreve-se sempre
o humano, mesmo quando o cabeçalho mostra outro nome. Dinamo e Hajduk não têm
humano e levam o que o FM mostrar.

**A forma lê-se no campo, o nome pergunta-se.** O cartão diz sempre "(PI)": o
nome não está neste ecrã e não vale a pena ampliar à procura dele. A linha antes
do guarda-redes são os defesas e é o primeiro número; as bandas a seguir dão o
resto, e a mesma forma aceita mais do que um nome — 4-3-3 DM e 4-1-2-3
desenham-se igual. Descreve ao utilizador as linhas que leste e pergunta-lhe o
nome, a não ser que ele já to tenha dado no pedido. **Não o vás buscar aos
relatórios antigos nem à contagem do que a época já usa:** 35 estão errados, e um
nome errado muitas vezes continua a ser um nome errado.

**Cartões e autogolos vivem na lista dos golos.** O autogolo escreve-se do lado
que beneficia, embora o jogador seja da outra equipa.

## A grafia é a do print

Quando o print escreve um nome de uma maneira e o resto da época o escreve de
outra, manda o print. Não dobres o relatório novo para condizer com os antigos:
escreve-o como está no ecrã e, se o `report_lint.js` apontar a divergência,
corrige a época toda de uma vez. O mesmo vale para um número de camisola que o
utilizador confirme — muda em todos os relatórios, não só neste.

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

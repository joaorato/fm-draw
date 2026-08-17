---
name: fm-match-report
description: Transcreve uma captura do ecrã "Relatório no final do jogo" do Football Manager para um relatório de jogo do site da Liga EMG. Usa quando o utilizador manda um print de um jogo do FM, quando pede para acrescentar ou corrigir um relatório, ou quando fala de golos, assistências e marcadores que não batem certo com o save.
---

# Relatório de jogo do FM para os dados do site

Uma captura do relatório de fim de jogo do FM tem tudo o que um relatório do site
precisa. O que se segue é a ordem de trabalho e, sobretudo, as armadilhas: quase
todas já morderam uma vez, e nenhuma delas dá erro nenhum quando corre mal.

O caminho é sempre o mesmo:

```
captura .png
  -> report_crop.py          recorta e amplia
  -> (leitura)               escreves a transcrição em JSON
  -> report_build.js         valida contra os dados e escreve o relatório
  -> report_lint.js          confere depois de colado
```

A transcrição vai para um ficheiro JSON com `scorer` e `assist` em campos
separados, e o `report_build.js` recusa-se a escrever seja o que for enquanto
houver erros. O formato antigo, `"71' W. Sule J. Pršir"`, continua a ser lido
para os relatórios que já existem, mas **não se escrevem eventos novos assim**:
essa string não separa marcador de assistente e obriga a adivinhar os dois.

## 1. Recortar antes de ler

```bash
python3 scripts/report_crop.py <captura.png> --out <pasta-de-trabalho>
```

Escreve oito recortes ampliados: `cabecalho`, `eventos`, `casa-ataque`,
`casa-defesa`, `fora-ataque`, `fora-defesa`, `dados-cima`, `dados-baixo`. Lê
esses, não a imagem inteira — os nomes croatas e as décimas das notas não se leem
na imagem original.

Quando um valor continua ilegível, amplia só esse sítio:

```bash
python3 scripts/report_crop.py <captura.png> --box 178,765,232,798 --scale 12
```

## 2. O que sai de cada recorte

`cabecalho`: data por extenso, estádio, tempo, homem do jogo e nota. Os nomes dos
treinadores também, mas lê primeiro a secção dos treinadores aqui em baixo.

`eventos`: golos dos dois lados.

**O marcador é o nome que está mais perto da bola.** É esta a regra, e chega para
os dois lados sem ter de decorar qual deles está espelhado:

```
casa    ⚽  61' L. Mamić  A. Latković        -> marcou o Mamić
fora        M. Zajc  A. Hoxha  70'  ⚽       -> marcou o Hoxha
```

A bola fica sempre do lado de fora da caixa, o minuto encostado a ela, e o
marcador a seguir ao minuto. O assistente é o que sobra, do lado de dentro.

Vale a pena perceber porque é esta a regra boa e não "confirmar pelo campo": **o
marcador pode ter entrado do banco**, e nesse caso não está desenhado no campo
nenhum. A bola no onze só confirma marcadores que eram titulares; a bola no
painel de eventos identifica todos.

No JSON o golo fica `{ "minute": "70", "scorer": "A. Hoxha", "assist": "M. Zajc" }`,
com os nomes nos campos certos, e a partir daí não há ordem nenhuma para
interpretar.

Copiar a coluna da direita pela ordem em que aparece é o erro mais caro do
projeto, e não foi um deslize isolado: há jogos inteiros da época gravados assim,
com o golo no assistente e a assistência no marcador. Foi por isso que se passou
a escrever a transcrição em JSON.

`casa-*` e `fora-*`: o onze inicial. As linhas vão do ataque para o guarda-redes,
que é a ordem em que ficam no `players`. Quem tem a bola ao lado da camisola
marcou, e leva `goal: true`. Os suplentes não aparecem no campo, por isso um
marcador que não esteja no onze é normal.

**O `goal: true` lê-se do campo, nunca se deduz do evento que acabaste de
escrever.** Este campo não aparece em lado nenhum do site — a bola que a ficha
desenha sai do evento, não daqui. A única razão para ele existir é ser uma
segunda leitura, independente, de quem marcou, e é com ela que o
`report_build.js` confirma o painel de eventos. Se for preenchido a olhar para o
evento, deixa de ser prova de nada e passa a repetir o erro. Já aconteceu: no
Varaždin-Dinamo de 23 de agosto as bolas ficaram nos três assistentes e o Hoxha,
que fez um hat-trick e foi homem do jogo com 9,28, não tem nenhuma.

A confirmação só cobre titulares, e é por isso que ela **confirma** mas não
**decide**: um suplente que marque não tem camisola no campo para levar bola. Quem
decide é o painel de eventos.

`dados-*`: as catorze linhas de estatística, sempre as mesmas e sempre por esta
ordem: Posse, Remates, Remates à Baliza, xG, PADPAD, Oportunidades Flagrantes,
Cantos, Passes Completados, Cruzamentos Completados, Faltas, Cartões amarelos,
Cartões vermelhos, Distância Percorrida, Classificação Média. O FM escreve
"Cartões Vermelhos" com V grande; nos dados fica minúsculo, como as outras.

## 3. Os quatro sítios onde o ecrã engana

**Números de camisola com um dígito tapado.** O desenho da camisola pode comer o
primeiro dígito: a lista branca do guarda-redes do Hajduk escondia o 3 de 33, a
costura central da camisola do Gorica esconde o 7 de 71. O sinal é o número estar
descentrado para a direita, ou colidir com o de um colega. Não adivinhes: o
`report_lint.js` compara com os outros relatórios e diz que números aquele
jogador costuma usar. Se continuar duvidoso, pergunta.

**O treinador pode ser o adjunto.** Quando o humano sai do jogo antes do fim, o
FM mostra o adjunto no cabeçalho. Nos oito clubes dos humanos escreve-se sempre o
humano — Gorica é "Miguel Cardoso", mesmo quando o cabeçalho diz
"D. Mojstrovič". Os clubes sem humano (Dinamo, Hajduk) levam o nome que o FM
mostrar, e aí uma mudança de treinador é mesmo uma mudança de treinador.

**O nome da formação não está neste ecrã.** O título do cartão diz "(PI)" e não
"4-3-3 DM". Deduz pelo desenho — a linha antes do guarda-redes são os defesas — e
confirma contra os relatórios anteriores daquele clube, que quase sempre repetem
a mesma.

**Cartões e autogolos vivem na lista dos golos.** Um vermelho é o evento com
`expulso` no fim; um autogolo leva `a.g.` ou `(AG)` e escreve-se do lado que
beneficia, embora o jogador seja da outra equipa. Nenhum dos dois é um golo do
marcador.

## 4. Onde é que o relatório fica

`fixtureKey` é `createFixtureKey(data, casa, fora)`, ou seja
`AAAA-MM-DD-casa-em-slug-fora-em-slug`. **Um relatório cujo fixtureKey não bate
certo com nenhum jogo é descartado sem dar erro nenhum**, por isso confirma
sempre que o jogo ficou com `fixture.report`.

| Jornadas | Ficheiro | `const` |
|---|---|---|
| 1 a 5 | `js/data/croatia-reports-01-05.js` | `croatiaRoundOneReports` … `croatiaRoundFiveReports` |
| 6 a 11 | `js/data/croatia-reports-06-11.js` | `croatiaRoundSixReports` … `croatiaRoundElevenReports` |
| 12 | `js/data/croatia-reports-12.js` | `croatiaRoundTwelveReports` |
| Taça | `js/data/croatia-reports-taca.js` | `croatiaCupFirstRoundReports` |
| 13 em diante | `js/data/croatia-reports-recentes.js` | `croatiaRecentReports` |

Um bloco novo precisa de três coisas: o `<script>` em `index.html` antes de
`croatia-wiring.js`, o array no spread de `croatiaMatchReports` em
`croatia-wiring.js`, e a lista numerada do `CLAUDE.md` renumerada.

Um relatório com onze escreve-se com `reportFormation` e `reportPlayer`; um sem
onze pode usar `compactReport`. As estatísticas vão em `reportStats([[...]])`.

## 5. Construir e verificar

```bash
node scripts/report_build.js <transcricao.json>           # valida e imprime o relatório
node scripts/report_build.js <transcricao.json> --diff    # e compara com o que já lá está
```

O `--diff` é o que serve para **voltar a passar um jogo antigo**: transcreves de
novo a partir da captura, comparas com o que está nos dados e vês o que muda. É
assim que se corrige um relatório suspeito sem ter de acreditar no que lá está.

O `report_build.js` recusa-se a escrever com erros por resolver. Os que apanha:

- golos nos eventos a menos ou a mais para o resultado;
- um jogador com bola no campo que não marca em evento nenhum;
- um titular que marca num evento mas não tem bola no campo;
- **um assistente que tem bola no campo** — este é o sinal exato de que marcador
  e assistente estão trocados, e é o que faltava quando a coluna da direita
  entrou espelhada;
- dois jogadores com o mesmo número no mesmo onze.

Depois de colar o relatório no ficheiro do bloco:

```bash
node --check js/data/croatia-reports-<bloco>.js
node scripts/report_lint.js <fixtureKey>
node scripts/validate_goals.js
```

O `report_lint.js` é o que apanha o que o `validate_goals.js` não vê. O
`validate_goals.js` confirma que se leram tantos golos quantos o resultado diz, e
isso continua verdade se o nome for partido no sítio errado. O `report_lint.js`
compara a ordem do evento com a bola desenhada na ficha, os números de camisola
com os outros relatórios, os nomes com o plantel conhecido e o treinador com o
humano do clube. Um ERRO corrige-se antes de seguir; um AVISO confirma-se contra
o ecrã do FM.

Depois serve numa porta nova e abre o relatório no browser — o browser guarda
`js/data/*.js` em cache com força, e numa porta já usada estarias a ver o
ficheiro antigo:

```bash
python3 -m http.server 8931
```

Confirma que a ficha mostra o marcador certo e que a bola no campo está no
jogador certo. Ambos saem de `parseMatchReportEvent` em `js/ui/match-report.js`,
que lê o primeiro nome do evento como marcador, dos dois lados, tal como o
`js/data/stats-core.js`. Se algum dia voltarem a discordar, é aí que se olha.

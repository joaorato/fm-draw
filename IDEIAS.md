# Ideias para retomar

## Identidade dos treinadores: distintivos por estatísticas

Guardado em 28 de outubro de 2026, a pedido do utilizador. Ideia para desenvolver mais tarde; os limites abaixo são propostas, ainda não aprovados como regras finais.

### Estado atual

A secção Identidade na aba Stats tem “A fama” calculada pelos resultados publicados e “O estilo” com a descrição editorial existente e médias de golos. A fama atual escolhe entre Hábito de ganhar, Porta fechada, Ataque com assinatura, Pacto de não agressão e Espetáculo garantido. Exige 20 jogos; os confrontos favorável e difícil exigem 5 jogos. Implementação em `js/data/coach-identity.js` e `js/ui/coaches.js`.

### Evolução de A fama: conquistas com tiers

Decidido com o utilizador a 31 de outubro de 2026. Manter uma fama principal e acrescentar conquistas com dez tiers, com regra, progresso e ligações aos jogos que as comprovam.

**Tiers**, do mais baixo ao mais alto: Madeira, Ferro, Bronze, Prata, Ouro, Platina, Esmeralda, Safira, Rubi, Diamante. O ícone principal é o mesmo em todos os tiers; muda a cor e os ornamentos à volta (floreados, etc.). O desenho fica para depois.

**Contagem global por treinador**, nunca por edição: os tiers acumulam ao longo de todas as edições. A seleção Histórico EMG / FM26 / FM27 do perfil não muda o tier; pode mostrar quanto cada edição acrescentou. Os tiers são calculados, não guardados, mas os limites não devem mudar depois de publicados, porque baixariam tiers já ganhos.

**Princípio dos limites**: o melhor treinador de FM26 chega a Diamante em cerca de 5 edições (Diamante ≈ 5 × a melhor contagem de FM26). Cada intervalo entre tiers é maior do que o anterior, com um salto visível de Ouro para Platina, seguindo a forma da curva de Golos. Exceções: Cabeça perdida, Hat-trick e Prémios da época, que têm contagens demasiado baixas para esse princípio.

| Conquista | O que conta | Madeira → Diamante |
|---|---|---|
| Golos | Golos marcados, em todas as competições | 25, 50, 90, 150, 225, 325, 450, 600, 800, 1000 |
| Vitórias | Jogos ganhos, em todas as competições | 7, 14, 24, 38, 56, 80, 110, 150, 205, 270 |
| Team of the Week | Jogadores da equipa no Team of the Week, um por jogador em cada jornada | 12, 25, 45, 75, 110, 160, 225, 300, 390, 500 |
| Duelo EMG | Vitórias contra a equipa de outro treinador EMG | 5, 10, 18, 29, 43, 60, 82, 110, 150, 200 |
| Muralha | Jogos sem sofrer golos | 3, 6, 11, 18, 27, 39, 54, 72, 95, 120 |
| Tomba-gigantes | Vitórias de liga contra equipa com melhor posição prevista | 2, 5, 9, 15, 22, 32, 44, 59, 78, 100 |
| Entrar a matar | Jogos com pelo menos um golo até ao minuto 15 | 2, 5, 8, 13, 20, 29, 40, 54, 70, 90 |
| Golpe de teatro | Golos do minuto 85 ao fim do tempo regulamentar, e do 115 em diante no prolongamento | 2, 4, 7, 12, 18, 26, 36, 48, 63, 80 |
| Demolidor | Vitórias por 4 ou mais golos | 1, 2, 4, 6, 9, 13, 18, 24, 31, 40 |
| Dedinhos do treinador | Vitórias depois de estar a perder | 1, 2, 4, 6, 9, 13, 18, 24, 31, 40 |
| Cabeça perdida | Expulsões de jogadores da própria equipa | 1, 2, 3, 5, 8, 12, 17, 23, 30, 38 |
| Hat-trick | Jogos em que um jogador da equipa marca 3 ou mais golos | 1, 2, 3, 5, 8, 12, 17, 23, 30, 38 |
| Prémios da época | Melhor marcador, melhor assistente ou melhor jogador de uma competição | 1, 2, 3, 5, 7, 10, 13, 17, 22, 28 |

**Regras de contagem** (fixas como os limites, porque mudá-las também mexe nos tiers):

- Contam todos os jogos publicados com resultado, em todas as competições. O resultado após prolongamento é o que conta; golos de desempate por penáltis nunca contam.
- Golpe de teatro, Entrar a matar, Dedinhos do treinador, Cabeça perdida, Hat-trick e Team of the Week só contam jogos com relatório. A Escócia não tem relatórios e só entra nas conquistas que dependem do resultado.
- Golpe de teatro: conta do 85' ao 90+x; no prolongamento, só do 115' ao 120+x (91'–114' e 105+x não contam). Entrar a matar inclui o minuto 15.
- Autogolos contam para a equipa beneficiada em Golos e Golpe de teatro, nunca para um Hat-trick.
- Dedinhos do treinador só conta vitórias cujos eventos de golo batem com o resultado; as outras ficam de fora, não contam como "sem reviravolta".
- Cabeça perdida conta eventos de expulsão, não a estatística "Cartões vermelhos".
- Tomba-gigantes precisa de `prevista` nas duas equipas; o Mundial não tem.
- Team of the Week: cada jogador escolhido conta 1 (três jogadores na mesma jornada contam 3). Só o Team of the Week, não o Team of the Weak.

**Prémios da época**: melhor marcador, melhor assistente e melhor jogador de cada competição. Os jogadores de equipas da IA também entram na disputa; se o vencedor for da IA, ninguém conta o prémio.

- Melhor marcador e melhor assistente: da tabela de Golos e Assistências.
- Melhor jogador: escolhido à mão no fim de cada competição e escrito nos dados dessa competição, não calculado pelo site. Critério acordado: a melhor média de classificação como titular, com pelo menos 50% de participação (titularidades). Nas ligas, 50% dos jogos de liga da equipa. No Mundial, só jogadores de equipas que chegaram às meias-finais, com 50% dos jogos da equipa. Ao contar titularidades, juntar as variantes do mesmo nome ("Keita Baldé" / "Baldé").
- Escócia: sem relatórios, mantém os prémios tirados do FM em `scotlandLeagueMerits`.
- FM26: Croácia – melhor marcador Dion Beljo (IA), melhor assistente Toni Fruk (Gonçalo), melhor jogador Keita Baldé (Gonçalo, 7,68). Mundial – melhor marcador Haaland (IA), melhor assistente Sané (Rato), melhor jogador Gordon (Chico, 7,94). Escócia – melhor jogador Cláudio Braga (Cardoso), melhor marcador e melhor assistente da Hibernian (Rato). Total: Rato 3, Gonçalo 2, Cardoso 1, Chico 1.

**Postas de lado**: Banco decisivo (os relatórios não têm suplentes), penáltis marcados (contagens baixas e nem todos os relatórios antigos os marcam), sequências sem perder (são um máximo e não um total que cresce).

**Hat-trick e relatórios antigos**: os 11 hat-tricks de FM26 vêm todos de eventos `goalEvent()`, por isso são fiáveis. Restam 35 eventos em texto antigo nos relatórios da Croácia, onde marcador e assistente podem estar trocados; um hat-trick escondido aí só aparece se esses jogos forem retranscritos.

### Evolução de O estilo

Manter a assinatura editorial e acrescentar distintivos de tendências estatísticas. Usar médias e taxas ao longo de vários jogos, distinguindo-as das conquistas de A fama.

| Traço | Condição proposta |
|---|---|
| Donos da bola | Média de posse de pelo menos 58% |
| Chuva de remates | Média de pelo menos 16 remates por jogo |
| Perigo constante | Média de pelo menos 2 xG por jogo |
| Pontaria afinada | Pelo menos 40% dos remates enquadrados |
| Pouco espaço para respirar | Adversários com média de no máximo 0,9 xG |
| Sem pedir licença | Média de posse de no máximo 45%, com pelo menos 1,5 xG criado por jogo |
| Acima da expectativa | Golos marcados pelo menos 20% acima do xG acumulado |

Proposta de amostra mínima: 10 relatórios com a estatística necessária. Mostrar condição, valor observado e amostra. Os traços de estilo poderiam ficar inativos se a tendência mudasse; decidir se o histórico conserva os desbloqueios anteriores.

### Dados, apresentação e limites

- Calibrar os limites com os dados reais antes de implementar; definir médias, taxas agregadas e arredondamento explicitamente.
- Estatísticas existentes nos relatórios: Posse, Remates, Remates à Baliza, xG, PADPAD, Oportunidades Flagrantes, Cantos, Passes Completados, Cruzamentos Completados, Faltas, Cartões amarelos/vermelhos, Distância Percorrida e Classificação Média.
- Só contar jogos com dados suficientes para a regra; ausência de relatório ou estatística não equivale a zero nem a oportunidade falhada. Mostrar a cobertura da amostra.
- Escócia tem calendário parcial e não tem relatórios; não apresentar estes traços como avaliação completa da carreira.
- Usar a equipa beneficiária dos golos, tratando autogolos e expulsões corretamente; não incluir penáltis de desempate nos golos ou no registo V/E/D.
- Confirmar ordem e integridade dos eventos antes de deduzir reviravoltas; não inferir golos de suplentes apenas da lista do plantel.
- Não deduzir pressão alta, contra-ataque ou eficácia de bolas paradas a partir de posse, remates ou resultados. Preservar a distinção entre descrição editorial e comportamento medido.
- Interface desejada: distintivos com personalidade, progresso (por exemplo 3/5), explicação acessível e ligações aos relatórios; respeitar a seleção Histórico EMG / FM26 / FM27 do perfil.
- O utilizador pediu para guardar a ideia e retomá-la mais tarde; não implementar os novos distintivos automaticamente.

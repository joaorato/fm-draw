# Ideias para retomar

## Identidade dos treinadores: distintivos por estatísticas

Guardado em 28 de outubro de 2026, a pedido do utilizador. Ideia para desenvolver mais tarde; os limites abaixo são propostas, ainda não aprovados como regras finais.

### Estado atual

A secção Identidade na aba Stats tem “A fama” calculada pelos resultados publicados e “O estilo” com a descrição editorial existente e médias de golos. A fama atual escolhe entre Hábito de ganhar, Porta fechada, Ataque com assinatura, Pacto de não agressão e Espetáculo garantido. Exige 20 jogos; os confrontos favorável e difícil exigem 5 jogos. Implementação em `js/data/coach-identity.js` e `js/ui/coaches.js`.

### Evolução de A fama

Manter uma fama principal e acrescentar distintivos desbloqueáveis por conquistas e acontecimentos, com regra, progresso e ligações aos jogos que os comprovam.

| Distintivo | Condição proposta |
|---|---|
| Até ao apito | 5 golos marcados aos 85 minutos ou depois |
| Entrar a matar | Marcar nos primeiros 15 minutos em 5 jogos |
| Banco decisivo | Suplentes utilizados marcarem em 5 jogos |
| Dar a volta ao texto | Ganhar 3 jogos depois de estar em desvantagem |
| Muralha | 5 jogos sem sofrer |
| Demolidor | 3 vitórias por diferença de pelo menos 4 golos |
| Cabeça perdida | 5 expulsões de jogadores |
| Sem medo do favorito | 3 vitórias de liga contra equipas com melhor posição prevista |

Primeira seleção sugerida: Até ao apito, Entrar a matar, Muralha e Demolidor. Confirmar se os relatórios permitem identificar suplentes utilizados e reconstruir reviravoltas antes de implementar esses distintivos.

Sugestão: conquistas por edição e apresentação das conquistas de cada FM no Histórico, sem apagar as anteriores. Ainda por decidir com o utilizador.

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

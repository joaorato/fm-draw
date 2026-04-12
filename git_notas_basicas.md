# 🧠 Git --- Notas Básicas

Git é um sistema de controlo de versões que permite guardar e gerir
alterações no código ao longo do tempo.

------------------------------------------------------------------------

## 📥 `git fetch`

**O que faz:**\
Vai buscar as alterações do repositório remoto (ex: GitHub), mas **não
altera os teus ficheiros locais**.

**Terminal:**

``` bash
git fetch
```

**VS Code:** - Ir ao separador **Source Control** - Clicar nos `...`
(mais opções) - Escolher **Fetch**

------------------------------------------------------------------------

## ➕ `git add`

**O que faz:**\
Adiciona ficheiros à "staging area" (prepara-os para commit).

**Terminal:**

``` bash
git add nome_do_ficheiro
git add .   # adiciona tudo
```

**VS Code:** - No separador **Source Control** - Clicar no `+` ao lado
do ficheiro (ou "Stage All Changes")

------------------------------------------------------------------------

## 💾 `git commit`

**O que faz:**\
Guarda um snapshot das alterações com uma mensagem descritiva.

**Terminal:**

``` bash
git commit -m "mensagem do commit"
```

**VS Code:** - Escrever mensagem no campo no topo - Clicar em **Commit**

------------------------------------------------------------------------

## 🚀 `git push`

**O que faz:**\
Envia os commits locais para o repositório remoto.

**Terminal:**

``` bash
git push
```

**VS Code:** - Clicar em **Sync Changes** ou **Push**

------------------------------------------------------------------------

## 🔄 `git pull`

**O que faz:**\
Vai buscar alterações do remoto **e aplica-as** no teu código local.

**Terminal:**

``` bash
git pull
```

**VS Code:** - Clicar em **Sync Changes** ou **Pull**

------------------------------------------------------------------------

## 🔁 Fluxo básico de trabalho

1.  Fazer alterações no código
2.  `git add .`
3.  `git commit -m "descrição"`
4.  `git push`

Antes de começar: - `git pull` (para garantir que estás atualizado)

------------------------------------------------------------------------

## ⚠️ Dicas importantes

-   Faz commits pequenos e frequentes
-   Usa mensagens claras (ex: "fix login bug")
-   Faz sempre `git pull` antes de começar a trabalhar
-   Se algo correr mal, não entres em pânico --- quase tudo no Git tem
    solução 😄

------------------------------------------------------------------------

## 📌 Resumo rápido

  Comando   Função
  --------- -------------------------------------
  fetch     Vai buscar alterações (sem aplicar)
  add       Prepara ficheiros para commit
  commit    Guarda alterações localmente
  push      Envia alterações para remoto
  pull      Vai buscar + aplica alterações

#!/usr/bin/env python3
"""Corta as folhas de conquistas em 130 ícones, um por conquista e por tier.

Corre com:
    python3 scripts/achievements_crop.py
    python3 scripts/achievements_crop.py --preview /tmp/folha.png

Lê assets-src/achievements/sheets/<tier>.jpeg (wood, iron, ... diamond), uma folha por
tier com as 13 conquistas, e escreve assets-src/achievements/<conquista>/<tier>.png
com fundo transparente. Depois corre-se scripts/build_assets.js como sempre.

As folhas não têm todas a mesma grelha: a do ouro não tem o título por cima e
tudo sobe. Por isso nada aqui está em coordenadas fixas. As linhas e as colunas
encontram-se pelas faixas vazias de fundo entre elas, e a ordem de leitura
(linha a linha, da esquerda para a direita) dá a conquista: é a mesma em todas
as folhas.

O texto das folhas deita-se fora; o nome escreve-o o site. Fica sempre por
baixo do ícone, e corta-se na linha mais estreita entre os dois: ver
separar_texto().

Todos os ícones saem no mesmo quadrado e centrados nele, sem mudar de escala:
uma linha de conquistas não salta de tamanho de um tier para o outro além do
que o próprio desenho já cresce.

Uma conquista redesenhada depois vem numa folha só dela, com os 10 tiers em
duas linhas de 5, com o id da conquista por nome: sheets/golpe-de-teatro.jpeg.
Os ícones dessa folha substituem os das folhas por tier e são escalados para a
largura mediana das outras conquistas no mesmo tier, porque a folha nova
desenha-os maiores. Uma folha com outro nome qualquer é avisada e ignorada.

--preview escreve uma folha de contacto com tudo o que foi cortado, num fundo
da cor do site, para ver de uma vez se algum ícone ficou com texto ou cortado.
"""

import argparse
import os
import sys
from collections import deque

from PIL import Image, ImageFilter

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGEM = os.path.join(RAIZ, "assets-src", "achievements", "sheets")
DESTINO = os.path.join(RAIZ, "assets-src", "achievements")

# Ficheiro da folha -> nome do tier no site.
TIERS = [
    ("wood", "madeira"),
    ("iron", "ferro"),
    ("bronze", "bronze"),
    ("silver", "prata"),
    ("gold", "ouro"),
    ("platinum", "platina"),
    ("emerald", "esmeralda"),
    ("sapphire", "safira"),
    ("ruby", "rubi"),
    ("diamond", "diamante"),
]

# Ordem de leitura das folhas.
CONQUISTAS = [
    "muralha", "golpe-de-teatro", "entrar-a-matar", "demolidor",
    "dedinhos-do-treinador", "vitorias", "cabeca-perdida", "golos",
    "duelo-emg", "hat-trick", "tomba-gigantes", "team-of-the-week",
    "premios-da-epoca",
]
POR_LINHA = [4, 4, 4, 1]

# A folha de uma conquista redesenhada: os 10 tiers por ordem, da madeira ao
# diamante, em duas linhas de 5. Ver folhas_de_conquista().
POR_LINHA_SUBSTITUICAO = [5, 5]
# Na folha de uma conquista, a partir deste tier o ícone é crista com brilho.
PRIMEIRA_CRISTA = 5

# O fundo das folhas anda pelos 6-12 de luminância. Acima disto é desenho.
LIMIAR = 34
# Abaixo deste valor o pixel é fundo puro; entre os dois a transparência sobe
# aos poucos, para a sombra e o brilho à volta do ícone não acabarem a seco.
FUNDO = 14
# Até quantos pixéis do desenho chega a orla semitransparente.
ORLA = 6
# O mesmo para as folhas com brilho: ver cortar_folha().
LIMIAR_BRILHO = 120
ORLA_BRILHO = 14
# Janela de cada ícone tirada do molde: meia largura, e quanto sobe acima da
# caixa da madeira na primeira linha.
MEIA_JANELA = 140
SUBIDA = 25
# Tamanho do filtro que fecha as frestas entre o interior e o fundo.
FECHO = 7
# A zona por cima do corte onde só a ponta do ornamento conta: quantas linhas
# e até quantos pixéis do centro.
PONTA_ALTURA = 16
PONTA_LARGURA = 16
# Abaixo disto uma peça solta é letra ou faísca: ver pecas_soltas().
PECA_MINIMA = 150
# Uma faixa com tão poucos pixéis acesos conta como vazia (ruído do JPEG).
RUIDO = 2
LADO = 272
COR_SITE = (2, 7, 27)


def faixas(contagens, minimo_vazio):
    """Intervalos [a, b) com conteúdo, separados por pelo menos minimo_vazio vazios."""
    out = []
    inicio = None
    vazios = 0
    for i, n in enumerate(contagens):
        if n > RUIDO:
            if inicio is None:
                inicio = i
            vazios = 0
            fim = i + 1
        elif inicio is not None:
            vazios += 1
            if vazios >= minimo_vazio:
                out.append((inicio, fim))
                inicio = None
    if inicio is not None:
        out.append((inicio, fim))
    return out


class Mascara:
    def __init__(self, cinza, limiar):
        self.w, self.h = cinza.size
        self.limiar = limiar
        self.d = bytes(1 if v > limiar else 0 for v in cinza.tobytes())

    def linhas(self, x0, x1, y0, y1):
        w = self.w
        return [sum(self.d[y * w + x0:y * w + x1]) for y in range(y0, y1)]

    def colunas(self, x0, x1, y0, y1):
        w = self.w
        return [sum(self.d[y * w + x] for y in range(y0, y1)) for x in range(x0, x1)]


def encontrar_caixas(mascara, por_linha=POR_LINHA):
    """As caixas de ícone+texto, em ordem de leitura, ou None se a grelha não bate."""
    w, h = mascara.w, mascara.h
    bandas = faixas(mascara.linhas(0, w, 0, h), 6)
    # O título (ausente no ouro) é uma faixa baixa: os ícones têm mais de 200.
    bandas = [b for b in bandas if b[1] - b[0] > 150]
    if len(bandas) != len(por_linha):
        return None

    caixas = []
    for (y0, y1), esperado in zip(bandas, por_linha):
        cols = faixas(mascara.colunas(0, w, y0, y1), 12)
        if len(cols) != esperado:
            return None
        caixas.extend((x0, y0, x1, y1) for x0, x1 in cols)
    return caixas


def molde():
    """As caixas da folha da madeira, que se parte sem problemas.

    Da platina para cima, o brilho e as faíscas enchem as faixas vazias entre
    os ícones, com qualquer limiar, e a folha não se parte sozinha. Mas essas
    folhas saíram do mesmo modelo que a madeira: os nomes estão às mesmas
    alturas e as colunas nas mesmas posições. Só o ouro é diferente, sem
    título e com tudo mais acima, e esse parte-se sozinho.
    """
    folha = Image.open(caminho_da_folha(TIERS[0][0])).convert("L")
    caixas = encontrar_caixas(Mascara(folha, LIMIAR))
    if not caixas:
        sys.exit(f"a folha {TIERS[0][0]} já não se parte em {POR_LINHA}; é dela que vem o molde")
    return caixas


def caixas_do_molde(mascara):
    """Uma janela por ícone a partir do molde, aparada em cima e em baixo."""
    caixas = molde()
    janelas = []
    for i, (x0, y0, x1, y1) in enumerate(caixas):
        centro = (x0 + x1) // 2
        # As cristas sobem mais do que os discos da madeira. Na primeira linha
        # sobe-se até ao título; nas outras, até ao fim do nome de cima.
        anteriores = [c for c in caixas if c[3] < y0]
        topo = max(c[3] for c in anteriores) + 1 if anteriores else y0 - SUBIDA
        janela = (centro - MEIA_JANELA, topo, centro + MEIA_JANELA, y1)
        janelas.append((janela[0], aparar_topo(mascara, janela), janela[2], y1))
    return janelas


def largura_acesa(mascara, x0, x1, y):
    linha = mascara.d[y * mascara.w + x0:y * mascara.w + x1]
    acesos = [i for i, v in enumerate(linha) if v]
    if len(acesos) <= RUIDO:
        return 0
    return acesos[-1] - acesos[0] + 1


def separar_texto(mascara, caixa):
    """Linha onde acaba o ícone.

    Por baixo do disco só desce a ponta do ornamento de baixo, que acaba
    estreita; o texto, mesmo o mais curto, é muito mais largo. A linha mais
    estreita do fundo da caixa é a ponta ou a faixa vazia a seguir, e é aí que
    se corta. Muitas vezes a ponta toca no texto e não há faixa vazia nenhuma.
    """
    x0, y0, x1, y1 = caixa
    larguras = [(largura_acesa(mascara, x0, x1, y), y) for y in range(y0 + 160, y1 - 8)]
    minima = min(l for l, _ in larguras)
    return next(y for l, y in larguras if l == minima)


def aparar_topo(mascara, caixa):
    """Linha onde começa o ícone, pela mesma ideia de separar_texto().

    Por cima da ponta do ornamento de cima só há fundo, ou o título da folha,
    que é largo. A última linha mais estreita do topo da janela é onde se
    começa: sem título, é a última linha vazia antes da ponta.
    """
    x0, y0, x1, _ = caixa
    larguras = [(largura_acesa(mascara, x0, x1, y), y) for y in range(y0, y0 + 2 * SUBIDA)]
    minima = min(l for l, _ in larguras)
    return [y for l, y in larguras if l == minima][-1]


def preencher_buracos(solido, w, h):
    """Tudo o que o fundo não alcança a partir da borda fica opaco."""
    fora = bytearray(w * h)
    fila = deque()
    for x in range(w):
        for y in (0, h - 1):
            i = y * w + x
            if not solido[i] and not fora[i]:
                fora[i] = 1
                fila.append(i)
    for y in range(h):
        for x in (0, w - 1):
            i = y * w + x
            if not solido[i] and not fora[i]:
                fora[i] = 1
                fila.append(i)
    while fila:
        i = fila.popleft()
        x = i % w
        for k in (i - 1 if x > 0 else -1, i + 1 if x < w - 1 else -1, i - w, i + w):
            if 0 <= k < w * h and not solido[k] and not fora[k]:
                fora[k] = 1
                fila.append(k)
    return fora


def pecas_soltas(solido, w, h):
    """Marca os pixéis das peças ligadas com menos de PECA_MINIMA pixéis."""
    lixo = bytearray(w * h)
    visto = bytearray(w * h)
    for inicio in range(w * h):
        if not solido[inicio] or visto[inicio]:
            continue
        peca = [inicio]
        visto[inicio] = 1
        fila = deque([inicio])
        while fila:
            i = fila.popleft()
            x = i % w
            for k in (i - 1 if x > 0 else -1, i + 1 if x < w - 1 else -1, i - w, i + w):
                if 0 <= k < w * h and solido[k] and not visto[k]:
                    visto[k] = 1
                    fila.append(k)
                    peca.append(k)
        if len(peca) < PECA_MINIMA:
            for i in peca:
                lixo[i] = 1
    return lixo


def recortar(folha, cinza, box, limiar, orla):
    rgb = folha.crop(box)
    l = cinza.crop(box)
    w, h = rgb.size

    solido = bytearray(1 if v > limiar else 0 for v in l.tobytes())

    # O topo das letras chega a ficar acima da linha de corte, ao lado da ponta
    # do ornamento. Nessas últimas linhas só a ponta, ao centro, é do ícone.
    centro = w // 2
    for y in range(max(0, h - PONTA_ALTURA), h):
        for x in range(w):
            if abs(x - centro) > PONTA_LARGURA:
                solido[y * w + x] = 0

    # Peças pequenas e soltas não são do ícone: o topo das letras logo por
    # baixo da ponta, e as faíscas do diamante. Saem do sólido e ficam
    # transparentes, com uma folga para a orla da letra não ficar a fantasma.
    lixo = pecas_soltas(solido, w, h)
    for i, v in enumerate(lixo):
        if v:
            solido[i] = 0
    lixo = Image.frombytes("L", (w, h), bytes(255 if v else 0 for v in lixo))
    lixo = lixo.filter(ImageFilter.MaxFilter(5)).tobytes()

    # Os sulcos escuros da madeira ligam o interior ao fundo por frestas de um
    # ou dois pixéis, e o interior saía transparente. Fecham-se as frestas só
    # para decidir o que é dentro; a orla continua a vir da máscara original.
    fechado = Image.frombytes("L", (w, h), bytes(255 if s else 0 for s in solido))
    fechado = fechado.filter(ImageFilter.MaxFilter(FECHO)).filter(ImageFilter.MinFilter(FECHO))
    fora = preencher_buracos(bytes(1 if v else 0 for v in fechado.tobytes()), w, h)

    # Nas cristas o aro tem partes escuras abaixo do limiar, e a face escura do
    # rubi saía transparente mesmo com as frestas fechadas. As medalhas são
    # convexas: sem peças soltas, o que fica entre os extremos acesos de uma
    # linha ou de uma coluna é dentro. Uma só das direções não chega: onde o
    # aro escurece de um lado, essa linha (ou coluna) acaba antes dele.
    for y in range(h):
        xs = [x for x in range(w) if solido[y * w + x]]
        for x in range(xs[0], xs[-1] + 1) if xs else ():
            fora[y * w + x] = 0
    for x in range(w):
        ys = [y for y in range(h) if solido[y * w + x]]
        for y in range(ys[0], ys[-1] + 1) if ys else ():
            fora[y * w + x] = 0

    # A orla suave só existe perto do desenho: mais longe, o fundo das folhas
    # tem manchas um pouco mais claras que ficavam semitransparentes.
    perto = Image.frombytes("L", (w, h), bytes(255 if s else 0 for s in solido))
    perto = perto.filter(ImageFilter.MaxFilter(2 * orla + 1)).tobytes()

    alfa = bytearray(w * h)
    for i, v in enumerate(l.tobytes()):
        if not fora[i]:
            alfa[i] = 255
        elif perto[i] and not lixo[i]:
            alfa[i] = max(0, min(255, (v - FUNDO) * 255 // (limiar - FUNDO)))
    mascara_alfa = Image.frombytes("L", (w, h), bytes(alfa))
    # Suaviza a orla sem comer o interior.
    mascara_alfa = Image.composite(
        mascara_alfa,
        mascara_alfa.filter(ImageFilter.GaussianBlur(0.8)),
        Image.frombytes("L", (w, h), bytes(0 if f else 255 for f in fora)),
    )

    icone = rgb.convert("RGBA")
    icone.putalpha(mascara_alfa)
    return icone.crop(icone.getbbox())


def na_tela(icone):
    if icone.width > LADO or icone.height > LADO:
        sys.exit(f"ícone de {icone.size} não cabe em {LADO}x{LADO}")
    tela = Image.new("RGBA", (LADO, LADO), (0, 0, 0, 0))
    tela.paste(icone, ((LADO - icone.width) // 2, (LADO - icone.height) // 2))
    return tela


def folhas_de_conquista():
    """As conquistas que têm folha própria, pelo nome do ficheiro.

    Uma folha que não é de um tier nem tem o id de uma conquista não serve
    para nada; avisa-se, para um erro no nome não passar em silêncio.
    """
    tiers = {ficheiro for ficheiro, _ in TIERS}
    proprias = []
    for nome in sorted(os.listdir(ORIGEM)):
        base, ext = os.path.splitext(nome)
        if ext.lower() not in (".jpeg", ".jpg", ".png") or base in tiers:
            continue
        if base in CONQUISTAS:
            proprias.append(base)
        else:
            print(f"aviso: {nome} não é de um tier nem tem o id de uma conquista; ignorada")
    return proprias


def caminho_da_folha(ficheiro):
    for ext in (".jpeg", ".jpg", ".png"):
        candidato = os.path.join(ORIGEM, ficheiro + ext)
        if os.path.exists(candidato):
            return candidato
    sys.exit(f"falta a folha {ficheiro} em {ORIGEM}")


def cortar_folha(ficheiro):
    folha = Image.open(caminho_da_folha(ficheiro)).convert("RGB")
    cinza = folha.convert("L")

    mascara = Mascara(cinza, LIMIAR)
    caixas = encontrar_caixas(mascara)
    # A margem de cima é menor do que as 6 linhas vazias que separam as linhas
    # da grelha: com mais, apanhava o fundo das letras do nome de cima.
    if caixas:
        limiar, orla, margem, margem_topo = LIMIAR, ORLA, 10, 4
    else:
        # Com o brilho, o que é desenho mede-se com um limiar alto; o brilho
        # fica de fora e volta como orla semitransparente, mais larga.
        limiar, orla, margem, margem_topo = LIMIAR_BRILHO, ORLA_BRILHO, 0, 0
        mascara = Mascara(cinza, limiar)
        caixas = caixas_do_molde(mascara)
        print(f"  {ficheiro}: posições tiradas do molde da {TIERS[0][0]}")

    icones = []
    for caixa in caixas:
        x0, y0, x1, _ = caixa
        fim = separar_texto(mascara, caixa)
        box = (x0 - margem, max(0, y0 - margem_topo), x1 + margem, fim + 2)
        icones.append(recortar(folha, cinza, box, limiar, orla))
    return icones


def cortar_folha_de_conquista(ficheiro):
    """Os 10 tiers de uma conquista numa folha só dela, por ordem.

    Esta folha parte-se sozinha, mas mistura as duas famílias: a linha de cima
    são discos, que se cortam como as folhas da madeira ao ouro, e a de baixo
    cristas com brilho, que pedem o limiar alto.
    """
    folha = Image.open(caminho_da_folha(ficheiro)).convert("RGB")
    cinza = folha.convert("L")
    caixas = encontrar_caixas(Mascara(cinza, LIMIAR), POR_LINHA_SUBSTITUICAO)
    if not caixas:
        sys.exit(f"{ficheiro}: a folha não se parte em {POR_LINHA_SUBSTITUICAO}")

    mascaras = {LIMIAR: Mascara(cinza, LIMIAR), LIMIAR_BRILHO: Mascara(cinza, LIMIAR_BRILHO)}
    icones = []
    for i, caixa in enumerate(caixas):
        crista = i >= PRIMEIRA_CRISTA
        limiar, orla, margem, margem_topo = (LIMIAR_BRILHO, ORLA_BRILHO, 0, 0) if crista else (LIMIAR, ORLA, 10, 4)
        x0, y0, x1, _ = caixa
        fim = separar_texto(mascaras[limiar], caixa)
        box = (x0 - margem, max(0, y0 - margem_topo), x1 + margem, fim + 2)
        icones.append(recortar(folha, cinza, box, limiar, orla))
    return icones


def ao_tamanho_das_outras(icone, outras):
    """Escala o ícone para a largura mediana dos outros no mesmo tier."""
    larguras = sorted(outra.width for outra in outras)
    alvo = larguras[len(larguras) // 2]
    escala = alvo / icone.width
    return icone.resize((alvo, round(icone.height * escala)), Image.LANCZOS)


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--preview", help="escreve aqui uma folha de contacto com todos os ícones")
    args = parser.parse_args()

    grelha = {}
    for ficheiro, tier in TIERS:
        icones = cortar_folha(ficheiro)
        for conquista, icone in zip(CONQUISTAS, icones):
            grelha[(conquista, tier)] = icone
        print(f"{tier}: {len(icones)} ícones")

    # As antigas das conquistas substituídas não entram na mediana: já não
    # são usadas.
    proprias = folhas_de_conquista()
    for conquista in proprias:
        icones = cortar_folha_de_conquista(conquista)
        for (_, tier), icone in zip(TIERS, icones):
            outras = [grelha[(c, tier)] for c in CONQUISTAS if c not in proprias]
            grelha[(conquista, tier)] = ao_tamanho_das_outras(icone, outras)
        print(f"{conquista}: substituída pela folha própria")

    for (conquista, tier), icone in grelha.items():
        tela = na_tela(icone)
        pasta = os.path.join(DESTINO, conquista)
        os.makedirs(pasta, exist_ok=True)
        tela.save(os.path.join(pasta, tier + ".png"))
        grelha[(conquista, tier)] = tela

    if args.preview:
        passo = LADO // 2
        folha = Image.new("RGB", (passo * len(TIERS), passo * len(CONQUISTAS)), COR_SITE)
        for c, conquista in enumerate(CONQUISTAS):
            for t, (_, tier) in enumerate(TIERS):
                icone = grelha[(conquista, tier)].resize((passo, passo), Image.LANCZOS)
                folha.paste(icone, (t * passo, c * passo), icone)
        folha.save(args.preview)
        print(f"folha de contacto em {args.preview}")


if __name__ == "__main__":
    main()

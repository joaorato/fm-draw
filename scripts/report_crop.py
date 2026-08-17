#!/usr/bin/env python3
"""Corta o relatório de fim de jogo do FM nas regiões que é preciso ler.

Corre com:
    python3 scripts/report_crop.py <screenshot.png>
    python3 scripts/report_crop.py <screenshot.png> --out /tmp/crops
    python3 scripts/report_crop.py <screenshot.png> --box 178,765,232,798 --scale 12

Sem --box escreve o conjunto normal de recortes: cabeçalho, eventos, as duas
fichas de equipa partidas em duas metades cada, e o painel de dados em duas
metades. É esse conjunto que chega para transcrever um relatório inteiro.

Com --box corta uma região à medida, para quando um número de camisola ou um
nome não se lê no recorte normal. As coordenadas são em pixéis da imagem
original.

As caixas estão em fração da imagem, calibradas no ecrã "Relatório no final do
jogo" a 1912x980. Se o teu FM desenhar as colunas noutro sítio, mede uma vez e
passa --box; a escala é que não muda nada, o que muda é onde estão as colunas.
"""

import argparse
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Falta o Pillow. Instala com: python3 -m pip install Pillow")


# (x0, y0, x1, y1) em fração da largura/altura da imagem.
REGIOES = {
    "cabecalho": (0.314, 0.092, 0.690, 0.194),
    # O cartão dos eventos cresce com o número de golos, e as duas fichas
    # começam a alturas diferentes conforme a formação tenha ou não ponta de
    # lança. Estas caixas são folgadas de propósito: cortar de menos custa uma
    # leitura, cortar de mais faz perder um golo ou um jogador sem dar sinal.
    "eventos": (0.209, 0.260, 0.398, 0.660),
    "casa-ataque": (0.015, 0.360, 0.201, 0.684),
    "casa-defesa": (0.015, 0.673, 0.201, 0.878),
    "fora-ataque": (0.795, 0.360, 0.986, 0.704),
    "fora-defesa": (0.795, 0.673, 0.986, 0.878),
    "dados-cima": (0.405, 0.270, 0.594, 0.633),
    "dados-baixo": (0.405, 0.612, 0.594, 0.975),
}

ESCALA_NORMAL = 3


def cortar(imagem, caixa, escala, destino):
    recorte = imagem.crop(caixa)
    if escala != 1:
        recorte = recorte.resize(
            (recorte.width * escala, recorte.height * escala), Image.LANCZOS
        )
    recorte.save(destino)
    return recorte.size


def main():
    parser = argparse.ArgumentParser(description="Recorta o relatório de fim de jogo do FM.")
    parser.add_argument("screenshot", help="Caminho da captura de ecrã.")
    parser.add_argument("--out", default=None, help="Pasta de destino (por omissão, ao lado da imagem).")
    parser.add_argument("--box", default=None, help="Recorte à medida: x0,y0,x1,y1 em pixéis.")
    parser.add_argument("--scale", type=int, default=None, help="Fator de ampliação.")
    args = parser.parse_args()

    imagem = Image.open(args.screenshot).convert("RGB")
    largura, altura = imagem.size

    destino = args.out or os.path.join(os.path.dirname(os.path.abspath(args.screenshot)), "crops")
    os.makedirs(destino, exist_ok=True)

    if args.box:
        try:
            valores = [int(parte) for parte in args.box.split(",")]
            x0, y0, x1, y1 = valores
        except ValueError:
            sys.exit('--box precisa de quatro inteiros: --box "x0,y0,x1,y1"')

        caminho = os.path.join(destino, "zoom.png")
        tamanho = cortar(imagem, (x0, y0, x1, y1), args.scale or 10, caminho)
        print(f"{caminho}  {tamanho[0]}x{tamanho[1]}")
        return

    print(f"{args.screenshot}  {largura}x{altura}")
    for nome, (fx0, fy0, fx1, fy1) in REGIOES.items():
        caixa = (
            int(fx0 * largura),
            int(fy0 * altura),
            int(fx1 * largura),
            int(fy1 * altura),
        )
        caminho = os.path.join(destino, f"{nome}.png")
        tamanho = cortar(imagem, caixa, args.scale or ESCALA_NORMAL, caminho)
        print(f"{caminho}  {tamanho[0]}x{tamanho[1]}")


if __name__ == "__main__":
    main()

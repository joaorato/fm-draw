# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static HTML/CSS/JS project — a "Football Manager Champions League Draw" web app. It randomly assigns Croatian league football teams to players with a visual draw ceremony, complete with UCL music and animations.

## How to Run

Open any `.html` file directly in a browser. No build tools, bundler, or server required.

## Architecture

There are multiple HTML files, each a self-contained variant of the draw page with different animation/presentation styles:

- **sorteio.html** — Simple text-based draw (no logos), with "best"/"worst" team highlights
- **New Documento de Texto.html** — Row-based draw with team logos inline, "opening the ball" suspense animation
- **teste.html** — Full-screen single-card reveal with large logos, swipe-out transition between draws
- **teste2.html** — Similar to teste.html but with pop/scale animation instead of swipe

All variants share the same core logic:
- **Players** (`jogadores` array) and **teams** (`equipas` array) are shuffled via Fisher-Yates
- Draws are revealed sequentially with `async`/`await` + `setTimeout` for suspense timing
- Background music (`ucl.mp3`) auto-plays on first user interaction
- Team logos are PNG files in the project root, referenced by filename in the `equipas` objects

## Key Data

- 8 players: Gonçalo, Rato, Chico, Nabais, Gamy, Painatal, Cardoso, Hugo
- 8 Croatian league teams: Rijeka, Osijek, Lokomotiva, Slaven Belupo, Istra 1961, HNK Gorica, Vukovar, Varaždin

## Language

UI text and code comments are in **Portuguese**.

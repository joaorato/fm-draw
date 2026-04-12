# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static HTML/CSS/JS project — a "Football Manager Champions League Draw" web app. It randomly assigns Croatian league football teams to players with a visual draw ceremony, complete with UCL music and animations.

## How to Run

Open `sorteio_roleta.html` in a browser. No build tools, bundler, or server required.

## Architecture

Single-page app split into three files:

- **sorteio_roleta.html** — Structure and navigation (four tabs)
- **app.js** — All data, logic, and rendering
- **style.css** — Styling (UCL-inspired dark blue theme)

### Tabs

- **Home** — Landing page with logo
- **Sorteio** — Roulette-style draw ceremony with UCL music and mute toggle
- **Classificação Geral** — Aggregated player scores across all leagues
- **Ligas Passadas** — Dropdown to select a league and view its full standings table

### Draw logic

- **Players** (`jogadores`) and **teams** (`equipas`) are shuffled via Fisher-Yates
- Draws are revealed sequentially with roulette spin animations
- Background music (`ucl.mp3`) plays during the draw tab, with a mute button

### League data

League history is stored in the `leagues` array in `app.js`. Each entry contains metadata (name, description, logo, época, formula), season scores, and the full standings table. Adding a new league is done by pushing a new object to this array — the dropdown, detail panel, and Classificação Geral all update automatically.

## Key Data

- 8 players: Gonçalo, Rato, Chico, Nabais, Gamy, Painatal, Cardoso, Hugo
- Current draw: 8 Croatian league teams (Rijeka, Osijek, Lokomotiva, Slaven Belupo, Istra 1961, HNK Gorica, Vukovar, Varaždin)
- Past leagues: Scotland (Época 24/25)
- Team logos are PNGs in `assets/logos/`, organized by league subfolder

## Language

UI text and code comments are in **Portuguese**.

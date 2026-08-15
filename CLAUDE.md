# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Overview

Static HTML/CSS/JS site for the **Liga EMG** — a Football Manager competition between 8 friends. It hosts the team draw ceremony, the coach roster, the aggregated standings and a full dashboard for each league. No build tools, bundler, server or dependencies to install.

## How to Run

Open `index.html` in a browser. Deployed via GitHub Pages at [joaorato.github.io/fm-draw](https://joaorato.github.io/fm-draw/).

## Files

- **index.html** — Structure, nav and modal/lightbox shells (~220 lines)
- **app.js** — All data and logic (~9000 lines; roughly the first 5700 are data)
- **style.css** — Styling, UCL-inspired dark blue theme (~6500 lines)
- **assets/** — `logos/` (per-league team logos, `trophy_cabinet/`), `treinadores/<coach>/` (cards, profile photos, stats screenshots), `flags/`, `social/`, `audio/ucl.mp3`

Only external deps are Google Fonts and html2canvas (CDN, used to export the draw result as an image).

## Tabs

Tabs are sections in `index.html` toggled by `setActiveTab()`, with hash routing (`#sorteio`, `#treinadores`, `#classificacao`, `#ligas`).

- **Home** — Logo, tagline, social links
- **Sorteio** — Roulette draw ceremony with UCL music and mute toggle
- **Treinadores** — Draggable card rail; each card opens a modal with presentation, stats, trophy cabinet and photo gallery
- **Classificação Geral** — Player points accumulated across *completed* leagues
- **Ligas** — Selector + full dashboard for the chosen league

## Key data structures (all in `app.js`)

- `jogadores` — the 8 players (Gonçalo, Rato, Chico, Nabais, Gamy, Painatal, Cardoso, Hugo)
- `equipas` — teams in the current draw pot
- `coachProfiles` + `coachAssetFiles` / `coachStats` / `coachProfileExtras` — coach bios, asset filenames, career stats, trophies and narrative cards (keyed by coach id)
- `leagues` — one object per league; drives the selector, the dashboard and Classificação Geral automatically
- `generalScores` — derived from `leagues` where `status === "completed"`
- `FINAL_RESULTS` / `DRAW_COMPLETED` — when `DRAW_COMPLETED` is `true`, the Sorteio tab shows the stored result instead of running the animation (and the music stays off)

### League object

`id`, `nome`, `status` (`"live"` | `"completed"`), `statusLabel`, `descricao`, `logo`, `epoca`, `formula`, `scores`, `tabela` (full standings rows), `fixtures` + `fixtureMonths` (calendar), and optionally `livePages` (news carousel), `transfers`, `merits`, `sideStats`, `tacas`, `extraTeamLogos`.

Adding a league = push a new object to `leagues`. Nothing else needs wiring.

### Scoring

`(posição prevista - posição final) × 3`, plus bonuses/penalties computed in `calcBonuses()` (champion +10, best human +5, cup wins +5, cup finals +2, European title +3, last place -5, worst human -2). Bonuses only count once a league is `completed`.

### Match reports

Croatian fixtures link to detailed reports (`croatiaRound*Reports`, merged into `croatiaMatchReports` and indexed by `fixtureKey`). Use the `compactReport()` / `reportPlayer()` / `reportStats()` helpers when adding new ones, and build keys with `createFixtureKey()`.

## Conventions

- UI text, data keys and most identifiers are in **Portuguese**
- Rendering is plain template-literal `innerHTML` — no framework
- 4-space indentation, `let`/`const`, double quotes

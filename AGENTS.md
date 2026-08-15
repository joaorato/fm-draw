# AGENTS.md

Guidance for coding agents working in this repository.

## Overview

Static HTML/CSS/JS site for the **Liga EMG** — a Football Manager competition between 8 friends. It hosts the team draw ceremony, the coach roster, the aggregated standings and a full dashboard for each league. No build tools, bundler, server or dependencies to install.

## How to Run

Open `index.html` in a browser. Deployed via GitHub Pages at [joaorato.github.io/fm-draw](https://joaorato.github.io/fm-draw/).

## Files

- **index.html** — Structure, nav, modal/lightbox shells and the ordered `<script>` list (~235 lines)
- **js/data/** — All data, one file per subject (see below)
- **app.js** — All logic: rendering, DOM, draw ceremony, bootstrap (~3400 lines)
- **style.css** — Styling, UCL-inspired dark blue theme (~6500 lines)
- **assets/** — `logos/` (per-league team logos, `trophy_cabinet/`), `treinadores/<coach>/` (cards, profile photos, stats screenshots), `flags/`, `social/`, `audio/ucl.mp3`

Only external deps are Google Fonts and html2canvas (CDN, used to export the draw result as an image).

### Load order matters

These are **classic scripts sharing one global scope** — not ES modules. Each file assumes
everything above it in the `index.html` list has already run, and that order mirrors the
original single-file top-to-bottom order. `app.js` is always last. Keeping them classic is
deliberate: every `onclick=` in the markup keeps working, and `index.html` still opens
straight from disk without a server.

| file | contents |
|---|---|
| `js/data/coaches.js` | `jogadores`, `coachProfiles`, `coachAssetFiles`, `coachStats`, `coachProfileExtras` |
| `js/data/teams.js` | `equipas` (current draw pot) |
| `js/data/fixtures-core.js` | `fixtureMonthNumbers` + helpers: `createFixtureKey`, `createLeagueMatch`, `assignLeagueFixtureRounds` |
| `js/data/report-core.js` | helpers: `reportPlayer`, `reportFormation`, `reportStats`, `compactReport` |
| `js/data/scotland.js` | everything for the Escócia season |
| `js/data/croatia-table.js` | `croatiaSeedTable`, `croatiaCurrentTable`, `croatiaSeasonScores` |
| `js/data/croatia-fixtures.js` | `croatiaFixtures` (all results) |
| `js/data/croatia-reports-*.js` | match reports, grouped by jornada block |
| `js/data/croatia-wiring.js` | merges the report arrays, links them to fixtures, derives form |
| `js/data/croatia-transfers.js` | `croatiaTransfers` + club logos |
| `js/data/croatia-news.js` | `croatiaLivePages` (news carousel + articles) |
| `js/data/leagues.js` | the `leagues` array that ties it all together |

### Adding a session

- **Results** → `croatia-fixtures.js`
- **Match reports** → append to `croatiaRecentReports` in `croatia-reports-recentes.js`.
  Once that file gets unwieldy, start `croatia-reports-<next>.js` with a new `const`, add it
  to the spread in `croatia-wiring.js`, and add one `<script>` tag before `croatia-wiring.js`.
- **Standings** → `croatia-table.js`
- **News article** → `croatia-news.js`
- **Transfers** → `croatia-transfers.js`

## Tabs

Tabs are sections in `index.html` toggled by `setActiveTab()`, with hash routing (`#sorteio`, `#treinadores`, `#classificacao`, `#ligas`).

- **Home** — Logo, tagline, social links
- **Sorteio** — Roulette draw ceremony with UCL music and mute toggle
- **Treinadores** — Draggable card rail; each card opens a modal with presentation, stats, trophy cabinet and photo gallery
- **Classificação Geral** — Player points accumulated across *completed* leagues
- **Ligas** — Selector + full dashboard for the chosen league

## Key data structures (all in `js/data/`)

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

Croatian fixtures link to detailed reports (`croatiaRound*Reports` in `js/data/croatia-reports-*.js`, merged into `croatiaMatchReports` and indexed by `fixtureKey` in `js/data/croatia-wiring.js`). Use the `compactReport()` / `reportPlayer()` / `reportStats()` helpers when adding new ones, and build keys with `createFixtureKey()`. A report with a `fixtureKey` that matches no fixture is silently dropped — no error — so check the count after adding.

## Conventions

- UI text, data keys and most identifiers are in **Portuguese**
- Rendering is plain template-literal `innerHTML` — no framework
- 4-space indentation, `let`/`const`, double quotes

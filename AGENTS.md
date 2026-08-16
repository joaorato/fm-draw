# AGENTS.md

Guidance for coding agents working in this repository.

## Project

Static HTML/CSS/JS site for **Liga EMG**, a Football Manager competition between 8 friends. It contains the draw ceremony, coach profiles, global standings and league dashboards.

There is no build step, bundler, framework or package install. The site must keep working by opening `index.html` directly from disk, and is also deployed on GitHub Pages:

`https://joaorato.github.io/fm-draw/`

## Runtime

Open `index.html` in a browser. External runtime dependencies are only:

- Google Fonts
- `html2canvas` from CDN, used to export/share the draw result image

Do not introduce Node, npm, bundlers, modules or generated build output unless the user explicitly asks for a larger architecture change.

## Current Structure

- `index.html` - page structure, tab sections, modal/lightbox shells and the ordered script list.
- `app.js` - all UI logic: rendering, DOM events, tabs, draw ceremony, coach modals, league dashboard, news, transfers, calendar and match reports.
- `style.css` - all visual styling.
- `js/data/` - refactored data layer. One classic script per domain.
- `assets/` - logos, coach images, flags, social icons, audio and result screenshots.

## Critical Script Rule

The scripts are **classic scripts sharing one global scope**, not ES modules. Load order in `index.html` is part of the architecture.

Each file assumes everything listed above it has already run. `app.js` must stay last.

Current order:

1. `js/data/coaches.js`
2. `js/data/teams.js`
3. `js/data/fixtures-core.js`
4. `js/data/report-core.js`
5. `js/data/scotland.js`
6. `js/data/croatia-table.js`
7. `js/data/croatia-fixtures.js`
8. `js/data/croatia-reports-01-05.js`
9. `js/data/croatia-reports-06-11.js`
10. `js/data/croatia-reports-taca.js`
11. `js/data/croatia-reports-recentes.js`
12. `js/data/croatia-wiring.js`
13. `js/data/croatia-transfers.js`
14. `js/data/croatia-news.js`
15. `js/data/leagues.js`
16. `app.js`

If you add a new data file, add its `<script>` tag before the file that consumes it.

## Data Files

| File | Purpose |
|---|---|
| `js/data/coaches.js` | `jogadores`, `coachProfiles`, `coachAssetFiles`, `coachStats`, `coachProfileExtras` |
| `js/data/teams.js` | `equipas`, the current draw pot |
| `js/data/fixtures-core.js` | Fixture helpers: `fixtureMonthNumbers`, `createFixtureKey`, `createLeagueMatch`, `assignLeagueFixtureRounds` |
| `js/data/report-core.js` | Match report helpers: `reportPlayer`, `reportFormation`, `reportStats`, `compactReport` |
| `js/data/scotland.js` | All Scotland season data |
| `js/data/croatia-table.js` | Croatia seed table, current table, season score rows and fixture month map |
| `js/data/croatia-fixtures.js` | Croatia fixtures/results |
| `js/data/croatia-reports-*.js` | Croatia match reports, grouped by jornada/block |
| `js/data/croatia-wiring.js` | Merges Croatia reports, links them to fixtures, derives form/result groups |
| `js/data/croatia-transfers.js` | Croatia transfers and extra club logos |
| `js/data/croatia-news.js` | Croatia live/news carousel and articles |
| `js/data/leagues.js` | Final `leagues` array consumed by `app.js` |

## Main Data Contracts

- `jogadores` - the 8 players: Gonçalo, Rato, Chico, Nabais, Gamy, Painatal, Cardoso, Hugo.
- `equipas` - current draw teams.
- `coachProfiles` - coach metadata.
- `coachAssetFiles` - coach card/profile/stat image filenames.
- `coachStats` - career stats and trophies, keyed by coach id.
- `coachProfileExtras` - narrative/identity sections for coach modals.
- `leagues` - one object per league. Drives the league selector, league dashboard and global standings.
- `generalScores` - derived in `app.js` from completed leagues only.
- `DRAW_COMPLETED` and `FINAL_RESULTS` - control whether the draw tab shows stored results or runs the roulette.

## League Object Contract

A league object in `js/data/leagues.js` usually contains:

- `id`
- `status`: `"live"` or `"completed"`
- `statusLabel`
- `nome`
- `descricao`
- `logo`
- `logoAlt`
- `epoca`
- `formula`
- `scores`
- `fixtures`
- `fixtureMonths`
- `tabela`
- Optional: `fixtureGroupBy`, `liveCards`, `livePages`, `transfers`, `merits`, `sideStats`, `tacas`, `extraTeamLogos`

Adding a new league should normally mean adding its data file(s), loading them before `leagues.js`, then pushing a new object into `leagues`.

## Common Update Paths

For a new Croatia session:

- Results/fixtures: edit `js/data/croatia-fixtures.js`.
- Standings: edit `js/data/croatia-table.js`.
- Match reports: append to `croatiaRecentReports` in `js/data/croatia-reports-recentes.js`.
- News article/carousel item: edit `js/data/croatia-news.js`.
- Transfers: edit `js/data/croatia-transfers.js`.

If `croatia-reports-recentes.js` becomes too large, create a new `js/data/croatia-reports-<block>.js` file with a new `const`, add its script tag before `croatia-wiring.js`, and add that array to the spread in `croatiaMatchReports`.

## Match Reports

Croatia reports are matched to fixtures by `fixtureKey`.

Use the helpers from `report-core.js`:

- `compactReport()`
- `reportPlayer()`
- `reportFormation()`
- `reportStats()`

Build keys with `createFixtureKey()` from `fixtures-core.js`.

Important: a report whose `fixtureKey` does not match any fixture is silently dropped. After adding reports, check that the target fixture has `fixture.report`.

## Scoring

Base formula:

`(posição prevista - posição final) × 3`

Bonuses/penalties are computed by `calcBonuses()` in `app.js`:

- Champion: `+10`
- Best human manager: `+5`
- Cup win: `+5`
- Cup final: `+2`
- European title: `+3`
- Last place: `-5`
- Worst human manager: `-2`

Bonuses only affect leagues with `status === "completed"`.

## App Flow

`index.html` defines the main views:

- `homeView`
- `drawView`
- `coachesView`
- `generalView`
- `pastView`

Tabs are controlled by `setActiveTab()` in `app.js`, with hash routes:

- `#home`
- `#sorteio`
- `#treinadores`
- `#classificacao`
- `#ligas`

At the end of `app.js`, bootstrap runs:

- `renderGeneralTable()`
- `renderLeagueSelector()`
- `renderCoachCards()`
- `setupFormulaPopover()`
- `restoreMuteState()`
- `bindMusicRecovery()`
- `setActiveTab(getTabFromHash())`

## Style Map

`style.css` is large. Use selector search before editing.

Main areas:

- Coach cards/modals: `.coach-*`, `.coaches-*`
- Trophy cabinet/palmares: `.coach-palmares-*`, `.coach-trophy-*`
- Global standings: `.score-*`
- League dashboard: `.league-*`
- Transfers: `.league-transfer-*`
- Calendar/fixtures: `.league-calendar-*`, `.league-fixture-*`, `.league-match-*`
- Match report modal: `.match-report-*`
- Draw ceremony: `.draw-*`, `#drawView`, roulette/table classes
- Home/social: `.home-*`, social/logo selectors

Avoid broad restyles. Keep CSS changes close to the feature being changed.

## Conventions

- UI text and data are mostly Portuguese. Keep new visible text in Portuguese unless the existing local context is English.
- Use 4-space indentation.
- Prefer `const` and `let`.
- Use double quotes in JS.
- Rendering is mostly template-literal `innerHTML`; follow existing patterns.
- Do not convert files to modules.
- Do not reorder scripts casually.
- Do not introduce unrelated refactors while adding data or fixing UI.
- Preserve user changes in a dirty worktree.

## Verification

Useful checks:

- Run a syntax check on changed JS files with Node if available: `node --check <file>`.
- If system `node` is unavailable, Codex may have a bundled Node runtime.
- Open `index.html` locally to verify the affected tab.
- For data changes, check that the relevant table/card/report appears and no dependent script is loaded before its data.

When changing match reports or fixtures, verify the `fixtureKey` link, not just syntax.

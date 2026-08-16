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
4. `js/data/standings-core.js`
5. `js/data/scoring-core.js`
6. `js/data/report-core.js`
7. `js/data/scotland.js`
8. `js/data/croatia-table.js`
9. `js/data/croatia-fixtures.js`
10. `js/data/croatia-reports-01-05.js`
11. `js/data/croatia-reports-06-11.js`
12. `js/data/croatia-reports-taca.js`
13. `js/data/croatia-reports-recentes.js`
14. `js/data/croatia-wiring.js`
15. `js/data/croatia-standings.js`
16. `js/data/croatia-transfers.js`
17. `js/data/croatia-news.js`
18. `js/data/leagues.js`
19. `app.js`

If you add a new data file, add its `<script>` tag before the file that consumes it.

## Data Files

| File | Purpose |
|---|---|
| `js/data/coaches.js` | `jogadores`, `coachProfiles`, `coachAssetFiles`, `coachStats`, `coachProfileExtras` |
| `js/data/teams.js` | `equipas`, the current draw pot |
| `js/data/fixtures-core.js` | Fixture helpers: `fixtureMonthNumbers`, `createFixtureKey`, `createLeagueMatch`, `assignLeagueFixtureRounds` |
| `js/data/standings-core.js` | League-agnostic standings maths: `getFixtureOutcome`, `buildStandingsFromFixtures`, `standingsCriteria`, `sortStandings`, `applyStandingsSnapshot` |
| `js/data/scoring-core.js` | League-agnostic EMG points: `calcSeasonPoints`, `calcTableScores`, `calcCupBonuses`, `calcPositionBonuses` |
| `js/data/report-core.js` | Match report helpers: `reportPlayer`, `reportFormation`, `reportStats`, `compactReport` |
| `js/data/scotland.js` | All Scotland season data, hand-typed (see Croatia Standings) |
| `js/data/croatia-table.js` | Croatia league config: `croatiaSeedTable`, `croatiaZonas`, `croatiaRegras`, `croatiaClassificacaoFM`, `croatiaFixtureMonths` |
| `js/data/croatia-fixtures.js` | Croatia fixtures/results |
| `js/data/croatia-reports-*.js` | Croatia match reports, grouped by jornada/block |
| `js/data/croatia-wiring.js` | Merges Croatia reports, links them to fixtures, derives form/result groups |
| `js/data/croatia-standings.js` | Computes `croatiaCurrentTable` and `croatiaSeasonScores` from the fixtures |
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
- `croatiaCurrentTable` and `croatiaSeasonScores` - **derived**, not authored. Computed in `js/data/croatia-standings.js` from the fixtures. The Croatia `emgPontos` column in `leagues.js` is read from `croatiaSeasonScores`, never typed. Everything else in this list is hand-written.
- `generalStandings` - derived in `app.js` from every league, split into `concluidas` (leagues with `status === "completed"`) and `projecao` (the rest), plus `total` and the `inf` arrow. See Scoring.
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
- Standings: nothing to edit. The table is computed from the fixtures (see Croatia Standings).
- Match reports: append to `croatiaRecentReports` in `js/data/croatia-reports-recentes.js`.
- News article/carousel item: edit `js/data/croatia-news.js`.
- Transfers: edit `js/data/croatia-transfers.js`.

If `croatia-reports-recentes.js` becomes too large, create a new `js/data/croatia-reports-<block>.js` file with a new `const`, add its script tag before `croatia-wiring.js`, and add that array to the spread in `croatiaMatchReports`.

## Croatia Standings

`croatiaCurrentTable` is **computed, never typed**. `js/data/croatia-standings.js` derives J, V, E, D, GM, GS, DG, Pts, position, the form dots and the zone colours from `croatiaFixtures`. Do not reintroduce a hand-written table.

Only league matches count (`competition` starting with `"HNL"`) and only fixtures with a finite score. That filter is why the postponed Dinamo–Lokomotiva placeholder, which sits in the fixture list alongside its replayed `8-atraso` entry, does not double-count.

What stays hand-authored in `js/data/croatia-table.js`:

- `croatiaSeedTable` - team, logo, `jogador`, `prevista` and `inf` (the ↑ ↓ arrows are an editorial note, not a computed value).
- `croatiaZonas` - zone by **position**, so the championship/Europe/relegation stripes follow whoever is in those places.
- `croatiaRegras` - tie-break rules as data, listing criteria by name from `standingsCriteria`: `desempate` while the season runs, `desempateFinal` once every league fixture has a result. Currently `["dg", "gm", "equipa"]` and `["h2hPts", "h2hDg", "dg", "gm", "equipa"]`, matching the SuperSport HNL rules. A league in another country declares its own chain; `standings-core.js` does not change.
- `croatiaClassificacaoFM` - optional cross-check, currently empty. Paste the FM table as `["Equipa", pontos]` in FM's own order and it takes over the positions and warns in the console on every points mismatch, missing team or order divergence. Useful when a tie looks wrong, since FM's internal tie-break has historically disagreed with goal difference. Empty it again afterwards.

`getTeamFixtureFormDetail` in `croatia-wiring.js` calls `getFixtureOutcome` so the standings and the form dots share one definition of a result. Keep it that way.

**Scotland is not derived and must stay hand-typed**: its fixture list holds 97 league matches of the 228 a full Premiership season needs, so its `j: 38` table cannot be computed.

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

The maths lives in `js/data/scoring-core.js` and knows nothing about a specific league.
`calcBonuses()` in `app.js` is just `calcCupBonuses(league.tacas)` + `calcPositionBonuses(league.tabela)`:

- Champion: `+10`
- Best human manager: `+5`
- Cup win: `+5`
- Cup final: `+2`
- European title: `+3`
- Last place: `-5`
- Worst human manager: `-2`

Champion does not stack with best human, and last place does not stack with worst human.

### Projeção

A league with `status === "live"` is scored the same way, against **today's** position, and the
result is labelled a projection. That is why `croatiaSeasonScores` has real points instead of
zeros, and why `calcBonuses()` no longer short-circuits on live leagues.

Classificação Geral has two modes (`generalScoreMode` in `app.js`), switched by the
`#scoreModeTabs` buttons:

- `"projecao"` (default while a live league exists) - `#` · `Inf` · Jogador · Concluídas · Projeção · Total, sorted by `total`.
- `"concluidas"` - the original three-column table, sorted by `concluidas`.

The `Inf` arrow is each player's rank by `concluidas` minus their rank by `total`: how far the
ongoing season moves them. It is derived from the two orderings, so there is nothing to maintain
per session.

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

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
- `app.js` - bootstrap only. Calls the render functions once the rest has loaded, and must stay last.
- `style.css` - all visual styling.
- `js/data/` - data layer. One classic script per domain.
- `js/ui/` - UI layer. One classic script per area: rendering, DOM events, tabs, draw ceremony, coach modals, league dashboard, news, transfers, calendar and match reports.
- `assets/` - logos, coach images, flags, social icons, audio and result screenshots.

## Critical Script Rule

The scripts are **classic scripts sharing one global scope**, not ES modules. Load order in `index.html` is part of the architecture.

Two rules, and they are not the same rule:

- **Load-time code** - anything that runs while the script is parsed, like a top-level `const`
  derived from data - can only see files already loaded. Those are ordered strictly: all of
  `js/data/` first, then `js/ui/`, then `app.js` last.
- **Call-time code** - function bodies, event handlers, `onclick=` strings - resolves through the
  shared global scope after every script has run, so it does not care about order. This is why the
  `js/ui/` files can call each other freely in both directions.

`app.js` must stay last: it is the only file that renders at load.

Current order:

1. `js/data/coaches.js`
2. `js/data/teams.js`
3. `js/data/fixtures-core.js`
4. `js/data/standings-core.js`
5. `js/data/scoring-core.js`
6. `js/data/report-core.js`
7. `js/data/stats-core.js`
8. `js/data/scotland.js`
9. `js/data/croatia-table.js`
10. `js/data/croatia-fixtures.js`
11. `js/data/croatia-reports.js`
12. `js/data/croatia-wiring.js`
13. `js/data/croatia-standings.js`
14. `js/data/croatia-transfers.js`
15. `js/data/croatia-news.js`
16. `js/data/leagues.js`
17. `js/ui/shared.js`
18. `js/ui/chrome.js`
19. `js/ui/coaches.js`
20. `js/ui/standings-ui.js`
21. `js/ui/league-selector.js`
22. `js/ui/match-report.js`
23. `js/ui/league-live.js`
24. `js/ui/league-transfers.js`
25. `js/ui/league-stats.js`
26. `js/ui/league-calendar.js`
27. `js/ui/league-race.js`
28. `js/ui/league-panel.js`
29. `js/ui/draw.js`
30. `js/ui/share.js`
31. `app.js`

If you add a new data file, add its `<script>` tag before the file that consumes it. A new `js/ui/`
file can go anywhere in the `js/ui/` block, as long as it is after `js/data/` and before `app.js`.

## Data Files

| File | Purpose |
|---|---|
| `js/data/coaches.js` | `jogadores`, `coachProfiles`, `coachAssetFiles`, `coachStats`, `coachProfileExtras` |
| `js/data/teams.js` | `equipas`, the current draw pot |
| `js/data/fixtures-core.js` | Fixture helpers: `fixtureMonthNumbers`, `createFixtureKey`, `createLeagueMatch`, `assignLeagueFixtureRounds` |
| `js/data/standings-core.js` | League-agnostic standings maths: `getFixtureOutcome`, `buildStandingsFromFixtures`, `standingsCriteria`, `sortStandings`, `applyStandingsSnapshot` |
| `js/data/scoring-core.js` | League-agnostic EMG points: `calcSeasonPoints`, `calcTableScores`, `calcCupBonuses`, `calcPositionBonuses` |
| `js/data/report-core.js` | Match report helpers: `reportPlayer`, `reportFormation`, `reportStats`, `compactReport` |
| `js/data/stats-core.js` | League-agnostic player stats from the reports: `buildSquadIndex`, `readGoalEvent`, `splitScorerAndAssist`, `buildGoalRecords`, `buildPlayerRankings`, `validateGoalRecords` |
| `js/data/scotland.js` | All Scotland season data, hand-typed (see Croatia Standings) |
| `js/data/croatia-table.js` | Croatia league config: `croatiaSeedTable`, `croatiaZonas`, `croatiaRegras`, `croatiaClassificacaoFM`, `croatiaFixtureMonths` |
| `js/data/croatia-fixtures.js` | Croatia fixtures/results |
| `js/data/croatia-reports.js` | Every Croatia match report, in one array. Written by `scripts/report_build.js` |
| `js/data/croatia-wiring.js` | Links reports to fixtures by `fixtureKey`, derives form/result groups |
| `js/data/croatia-standings.js` | Computes `croatiaCurrentTable` and `croatiaSeasonScores` from the fixtures |
| `js/data/croatia-transfers.js` | Croatia transfers and extra club logos |
| `js/data/croatia-news.js` | Croatia live/news carousel and articles |
| `js/data/leagues.js` | Final `leagues` array consumed by the whole UI layer |

## UI Files

Each owns its own state. The `let`s listed are declared at the top of that file and read nowhere else.

| File | Purpose | Owns |
|---|---|---|
| `js/ui/shared.js` | Helpers used across areas | `escapeAttribute`, `formatPoints`, `getPointsClass`, `bindCoachLinks` |
| `js/ui/chrome.js` | Music (mute, autoplay recovery) and tab/hash routing | `musicStarted`, `isMuted` |
| `js/ui/coaches.js` | Coach cards, modal, palmarés, trophy cabinet, gallery, rail drag | `selectedCoachId`, `coachByShortName`, `coachByNarrativeTeam` |
| `js/ui/standings-ui.js` | EMG points glue, `generalStandings`, Classificação Geral, formula popover, floating tooltips | `generalScoreMode`, `hasLiveLeague` |
| `js/ui/league-selector.js` | League menu and team name/logo helpers | `activeLeagueId` |
| `js/ui/match-report.js` | Report modal: events, formations, pitch, stats | - |
| `js/ui/league-live.js` | Form dots, result tooltips, live cards, news carousel | `activeLeagueLivePage`, `activeLeagueNewsIndex`, `leagueLiveAutoTimer`, `pausedLeagueLivePages` |
| `js/ui/league-transfers.js` | Transfers table body | - |
| `js/ui/league-stats.js` | Lower tabbed card: tab strip, marcadores and assistências | `activeLeagueLowerTab`, `leagueGoalsCache`, `leagueTransfersScrollTop` |
| `js/ui/league-calendar.js` | Fixture grouping, round select, calendar | `activeLeagueCalendarRound` |
| `js/ui/league-panel.js` | Lower panel, side stats, `renderLeague` | - |
| `js/ui/draw.js` | Roulette maths and the draw ceremony | `shuffledTeams`, `shuffledPlayers`, `remainingTeams`, `remainingPlayers`, `currentRound`, `resultados`, `DRAW_COMPLETED`, `FINAL_RESULTS` |
| `js/ui/share.js` | Discord share, on-demand `html2canvas`, fullscreen | `html2canvasLoader` |

## Main Data Contracts

- `jogadores` - the 8 players: Gonçalo, Rato, Chico, Nabais, Gamy, Painatal, Cardoso, Hugo.
- `equipas` - current draw teams.
- `coachProfiles` - coach metadata.
- `coachAssetFiles` - coach card/profile/stat image filenames.
- `coachStats` - career stats and trophies, keyed by coach id.
- `coachProfileExtras` - narrative/identity sections for coach modals.
- `leagues` - one object per league. Drives the league selector, league dashboard and global standings.
- `croatiaCurrentTable` and `croatiaSeasonScores` - **derived**, not authored. Computed in `js/data/croatia-standings.js` from the fixtures. The Croatia `emgPontos` column in `leagues.js` is read from `croatiaSeasonScores`, never typed. Everything else in this list is hand-written.
- `generalStandings` - derived in `js/ui/standings-ui.js` from every league, split into `concluidas` (leagues with `status === "completed"`) and `projecao` (the rest), plus `total` and the `inf` arrow. See Scoring.
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
- Optional: `fixtureGroupBy`, `liveCards`, `livePages`, `transfers`, `merits`, `sideStats`, `tacas`, `extraTeamLogos`, `evolucao`, `golos`

Adding a new league should normally mean adding its data file(s), loading them before `leagues.js`, then pushing a new object into `leagues`.

## Common Update Paths

For a new Croatia session:

- Results/fixtures: edit `js/data/croatia-fixtures.js`.
- Standings: nothing to edit. The table is computed from the fixtures (see Croatia Standings).
- Match reports: they all live in `croatiaMatchReports`, in `js/data/croatia-reports.js`, and
  `scripts/report_build.js --write` writes them there itself.
- Marcadores/assistências: nothing to edit. They come from the reports' goal events. Run
  `node scripts/validate_goals.js` after adding reports (see Golos e Assistências).
- News article/carousel item: edit `js/data/croatia-news.js`.
- Transfers: edit `js/data/croatia-transfers.js`.

The reports used to be split across five files by jornada block. They are in one file on purpose: the
split recorded when the work happened rather than anything about the data, nothing downstream read it,
and every new report cost a `<script>` tag, an entry in a spread, and a renumbered list here. Adding a
report now touches the data and nothing else. A second league brings its own file, not a new block of
this one.

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

## Golos e Assistências

The lower panel's middle card is a tabbed card: Transferências and Golos e Assistências, with the
tab strip acting as the card's title. `js/ui/league-stats.js` owns the card, the tab state and the
two ranking lists; `renderLeagueTransfers()` now returns only the transfers **body**, because the
`<section>` wrapper belongs to the tab container.

A league opts in the same way it opts into the race chart:

```js
golos: { isLeagueMatch }
```

No `golos`, no tab. **Scotland must not declare one**: it has no match reports at all, and its
fixture list only covers the 8 EMG clubs.

Nothing here is hand-written. `js/data/stats-core.js` derives everything from the goal events, and
three things about that data must not be forgotten:

- **Red cards live in the same array as the goals**, marked only by a trailing `expulso`. There are
  7 of them. Counting events without that filter is what makes the totals disagree with the results.
- **Own goals are listed on the side that benefits**, but the player belongs to the other squad.
  They count for the team and are left out of the scorer list. The data spells them two ways, `a.g.`
  and `(AG)`, and both are handled.
- **A goal event has no separator between scorer and assister** — `"90+3' M. Rog L. Belcar"`. The
  split is decided against that team's squad, indexed from every lineup in the reports plus every
  transfer. Each candidate reading scores 2 per half known to the squad and 1 per half accepted only
  on its shape, and the strongest wins. A tie is reported, never guessed.

Each list shows the top 10. Players level on goals or assists are ordered **alphabetically**, which
is deliberate: it is a stable order, not a claim that one of them is better. Because that cut often
lands inside a tie, the last row carries a `+N` badge listing, on hover, everyone left out on the
same number — today `+2` on goals and `+4` on assists. It uses `bindFloatingTooltips()`, the
standings' own tooltip, so there is only one such mechanism in the codebase.

Two smaller decisions that are easy to undo by accident:

- **A player's identity is the team plus the normalised name**, and the team is not decoration:
  without it `A. Jurić` of Rijeka and `S. Jurić` of Varaždin collapse into one row and add up each
  other's goals. With it, the spelling variants of one player still merge, because those share a
  team — `Hoxha`/`A. Hoxha`, `Petrovič`/`Petrović`, `Kadušić`/`Kadusić`.
- **The squad index matches on the surname when the full name misses**, which is what links the
  lineups' `"Dantas"` to the events' `"Tiago Dantas"`.

`validateGoalRecords()` compares goals read against the actual score for every fixture and warns on
the console. Run `node scripts/validate_goals.js` after adding reports: it should report 0 unresolved,
0 ambiguous and 0 disagreements. Note what it proves — the right *number* of goals, not that a name
was split in the right place.

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
`calcBonuses()` in `js/ui/standings-ui.js` is just `calcCupBonuses(league.tacas)` + `calcPositionBonuses(league.tabela)`:

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

Classificação Geral has two modes (`generalScoreMode` in `js/ui/standings-ui.js`), switched by the
`#scoreModeTabs` buttons:

- `"projecao"` (default while a live league exists) - `#` · `Inf` · Jogador · Concluídas · Projeção · Total, sorted by `total`.
- `"concluidas"` - the original three-column table, sorted by `concluidas`.

The `Inf` arrow is each player's rank by `concluidas` minus their rank by `total`: how far the
ongoing season moves them. It is derived from the two orderings, so there is nothing to maintain
per session.

Every points cell carries a hover/focus tooltip breaking the number down, league by league: the
position line plus one line per bonus. `buildLeagueBreakdown()` produces those lines and the
column totals are `sumBreakdown()` of them, so the tooltip and the column cannot disagree. The
tooltip machinery is the standings one — `bindFloatingTooltips(root, anchorSelector)` with a
`<template class="standings-tooltip-template">` inside the anchor.

## App Flow

`index.html` defines the main views:

- `homeView`
- `drawView`
- `coachesView`
- `generalView`
- `pastView`

Tabs are controlled by `setActiveTab()` in `js/ui/chrome.js`, with hash routes:

- `#home`
- `#sorteio`
- `#treinadores`
- `#classificacao`
- `#ligas`

`app.js` is the whole bootstrap and nothing else:

- `syncGeneralScoreModes()`
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
- After touching match reports or `stats-core.js`, run `node scripts/validate_goals.js`. It should
  report 0 unresolved, 0 ambiguous and 0 fixtures disagreeing with the score.
- If system `node` is unavailable, Codex may have a bundled Node runtime.
- Open `index.html` locally to verify the affected tab.
- For data changes, check that the relevant table/card/report appears and no dependent script is loaded before its data.

When changing match reports or fixtures, verify the `fixtureKey` link, not just syntax.

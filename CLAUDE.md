# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

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
11. `js/data/croatia-reports-01-05.js`
12. `js/data/croatia-reports-06-11.js`
13. `js/data/croatia-reports-taca.js`
14. `js/data/croatia-reports-recentes.js`
15. `js/data/croatia-wiring.js`
16. `js/data/croatia-standings.js`
17. `js/data/croatia-transfers.js`
18. `js/data/croatia-news.js`
19. `js/data/leagues.js`
20. `js/ui/shared.js`
21. `js/ui/chrome.js`
22. `js/ui/coaches.js`
23. `js/ui/standings-ui.js`
24. `js/ui/league-selector.js`
25. `js/ui/match-report.js`
26. `js/ui/league-live.js`
27. `js/ui/league-transfers.js`
28. `js/ui/league-stats.js`
29. `js/ui/league-calendar.js`
30. `js/ui/league-race.js`
31. `js/ui/league-panel.js`
32. `js/ui/draw.js`
33. `js/ui/share.js`
34. `app.js`

If you add a new data file, add its `<script>` tag before the file that consumes it. A new `js/ui/`
file can go anywhere in the `js/ui/` block, as long as it is after `js/data/` and before `app.js`.

## Data Files

| File | Purpose |
|---|---|
| `js/data/coaches.js` | `jogadores`, `coachProfiles`, `coachAssetFiles`, `coachStats`, `coachProfileExtras` |
| `js/data/teams.js` | `equipas`, the current draw pot |
| `js/data/fixtures-core.js` | Fixture helpers: `fixtureMonthNumbers`, `createFixtureKey`, `createLeagueMatch`, `assignLeagueFixtureRounds` |
| `js/data/standings-core.js` | League-agnostic standings maths: `getFixtureOutcome`, `buildStandingsFromFixtures`, `standingsCriteria`, `sortStandings`, `applyStandingsSnapshot`, `buildStandingsHistory` |
| `js/data/scoring-core.js` | League-agnostic EMG points: `calcSeasonPoints`, `calcTableScores`, `calcCupBonuses`, `calcPositionBonuses` |
| `js/data/report-core.js` | Match report helpers: `reportPlayer`, `reportFormation`, `reportStats`, `compactReport` |
| `js/data/stats-core.js` | League-agnostic player stats from the reports: `buildSquadIndex`, `readGoalEvent`, `splitScorerAndAssist`, `buildGoalRecords`, `buildPlayerRankings`, `validateGoalRecords` |
| `js/data/scotland.js` | All Scotland season data, hand-typed (see Croatia Standings) |
| `js/data/croatia-table.js` | Croatia league config: `croatiaSeedTable`, `croatiaZonas`, `croatiaRegras`, `croatiaClassificacaoFM`, `croatiaFixtureMonths` |
| `js/data/croatia-fixtures.js` | Croatia fixtures/results |
| `js/data/croatia-reports-*.js` | Croatia match reports, grouped by jornada/block |
| `js/data/croatia-wiring.js` | Merges Croatia reports, links them to fixtures, derives form/result groups |
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
| `js/ui/league-race.js` | Evolução da classificação: the animated position chart and its overlay | `raceLeagueId`, `raceFrameIndex`, `racePinned`, `racePlaying`, `raceAutoTimer`, `raceHistoryCache`, `raceSeriesByLeague` |
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
- Match reports: append to `croatiaRecentReports` in `js/data/croatia-reports-recentes.js`. To
  transcribe one from an FM screenshot, follow the `fm-match-report` skill in
  `.claude/skills/` - it carries the traps that produce silently wrong data.
- News article/carousel item: edit `js/data/croatia-news.js`.
- Transfers: edit `js/data/croatia-transfers.js`.
- Marcadores/assistências: nothing to edit. They come from the reports' goal events. Run
  `node scripts/validate_goals.js` after adding reports (see Golos e Assistências).

If `croatia-reports-recentes.js` becomes too large, create a new `js/data/croatia-reports-<block>.js` file with a new `const`, add its script tag before `croatia-wiring.js`, and add that array to the spread in `croatiaMatchReports`.

## Croatia Standings

`croatiaCurrentTable` is **computed, never typed**. `js/data/croatia-standings.js` derives J, V, E, D, GM, GS, DG, Pts, position, the form dots and the zone colours from `croatiaFixtures`. Do not reintroduce a hand-written table.

Only league matches count (`competition` starting with `"HNL"`) and only fixtures with a finite score. That filter is why the postponed Dinamo–Lokomotiva placeholder, which sits in the fixture list alongside its replayed `8-atraso` entry, does not double-count.

What stays hand-authored in `js/data/croatia-table.js`:

- `croatiaSeedTable` - team, logo, `cor` (the club's colour, for the evolution chart), `jogador`, `prevista` and `inf` (the ↑ ↓ arrows are an editorial note, not a computed value).
- `croatiaZonas` - zone by **position**, so the championship/Europe/relegation stripes follow whoever is in those places.
- `croatiaRegras` - tie-break rules as data, listing criteria by name from `standingsCriteria`: `desempate` while the season runs, `desempateFinal` once every league fixture has a result. Currently `["dg", "gm", "equipa"]` and `["h2hPts", "h2hDg", "dg", "gm", "equipa"]`, matching the SuperSport HNL rules. A league in another country declares its own chain; `standings-core.js` does not change.
- `croatiaClassificacaoFM` - optional cross-check, currently empty. Paste the FM table as `["Equipa", pontos]` in FM's own order and it takes over the positions and warns in the console on every points mismatch, missing team or order divergence. Useful when a tie looks wrong, since FM's internal tie-break has historically disagreed with goal difference. Empty it again afterwards.

`getTeamFixtureFormDetail` in `croatia-wiring.js` calls `getFixtureOutcome` so the standings and the form dots share one definition of a result. Keep it that way.

**Scotland is not derived and must stay hand-typed**: its fixture list holds 97 league matches of the 228 a full Premiership season needs, so its `j: 38` table cannot be computed.

## Evolução da Classificação

The animated position chart in `js/ui/league-race.js`, opened by a button in the league toolbar.
It needs nothing hand-written: `buildStandingsHistory` in `standings-core.js` re-runs the normal
standings pipeline over the fixtures up to each round, so the chart cannot drift from the table.

A league opts in by declaring `evolucao` in `leagues.js`:

```js
evolucao: { equipas, isLeagueMatch, regras, zonas, snapshot }
```

No `evolucao`, no button. **Scotland must not declare one**: only the 8 EMG-managed clubs appear in
its fixtures, so every intermediate position would be wrong. Only declare it where the fixture list
covers the whole league.

Two things in `buildStandingsHistory` exist for a reason and must not be simplified away:

- Every frame but the last is sorted with `seasonComplete: false`. A prefix of the fixtures has no
  unplayed games left in it, so `isSeasonComplete` would say the season is over and switch to
  `desempateFinal` — the head-to-head chain — as early as jornada 3.
- `applyStandingsSnapshot` runs only on the last frame. `croatiaClassificacaoFM` is the *final*
  table; applied to a prefix it would drag the end-of-season order back onto jornada 3.

**Colour belongs to the club, not the coach.** Each team's `cor` is authored in `croatiaSeedTable`
and passed through the `tabela` mapping in `leagues.js`; `getRaceTeamColor` just reads it. A new
league brings its own clubs' colours. Nothing derives colour from the coach — the point is that
people already know the Istra is yellow.

The cost, accepted deliberately: club colours were never chosen to contrast with each other. Croatia
has four blues and three reds, and three clubs (Lokomotiva black, Dinamo dark blue, Gorica dark red)
whose colours are all but invisible on the `#02071b` background — black measures 1.12:1.

Two things carry that and must not be removed:

- **The halo.** Every line is drawn twice: a light translucent stroke underneath (`.league-race-halo`)
  and the club colour on top. That is what makes black read as black instead of vanishing. All halos
  live in one `<g>` below all lines — pair them up per team and one club's halo dims another's line.
  The badge rings and the legend swatches carry the same idea as a light outline.
- **Nothing is identified by colour alone.** Every line ends in the club badge, the legend carries
  badge and coach, hovering dims the other nine, clicking pins.

Clicking a team must not pause playback — pinning chooses *what* you watch, not *when*. Only play,
the step arrows and the scrubber touch `pauseLeagueRace()`.

If a future league ever wants colours picked for separation rather than club identity, four is the
maximum that clears `scripts/validate_palette.js --pairs all` against `#02071b` (blue `#3987e5`,
yellow `#c98500`, magenta `#d55181`, green `#008300`); no set of five clears it.

Axis labels come every 5 **jornadas**, not every 5 frames, so that a jogo em atraso does not land on
a tick and make the axis read J11, J8, J20.

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
- `goalEvent()` and `sendOffEvent()`

Transcribe a report from an FM screenshot with the pipeline, not by hand: `scripts/report_crop.py`
cuts the screenshot into readable pieces, you write a JSON transcription, and
`scripts/report_build.js` validates it against the fixtures and emits the report object.
`report_build.js <json> --diff` re-reads a match that is already in the data and shows what changes,
which is how a suspect old report gets checked. The `fm-match-report` skill has the details.

Build keys with `createFixtureKey()` from `fixtures-core.js`.

Important: a report whose `fixtureKey` does not match any fixture is silently dropped. After adding reports, check that the target fixture has `fixture.report`.

**Write new goal events with `goalEvent()`, not as a string.** There are two shapes:

```js
goalEvent("71", "W. Sule", { assist: "J. Pršir" })   // novo
"71' W. Sule J. Pršir"                                // antigo, ainda lido
```

The string has no separator between scorer and assister, so reading it means guessing where the name
splits, and it says who scored only through word order. That order is not the same on both sides. FM
mirrors the away column on screen and prints it assister, scorer, minute, and the strings were copied
as they appeared, so **in a legacy string the away scorer is the last name, not the first**:
`"49' J. Mišić A. Hoxha"` is Hoxha scoring. Confirmed against the save on two matches, and it is what
explains the goal marks in the reports whose marks were read off the pitch rather than inferred.

`orderLegacyEventNames()` in `js/data/stats-core.js` applies that swap, and the away branches of
`getEventEdgePerson()`/`matchEventEdgeName()` in `js/ui/match-report.js` are the same rule in the
report modal. The two must keep agreeing - when they disagreed, the modal and the top-scorer list
named different players for the same goal, and `report_lint.js` now fails if they ever do again.

None of that applies to `goalEvent()`: two named fields, no order to interpret, no side to special
case. Each match re-transcribed through `scripts/report_build.js` stops depending on the legacy rule,
which is the point - the rule is a decoder for old data, not a convention to keep writing to.

`node scripts/report_lint.js <fixtureKey>` checks a report against what the rest of the season
already says: event order against the goal marks on the pitch card, shirt numbers against the same
player elsewhere, names against the known squad, and the coach against the club's human manager.
`--all` sweeps every report. Run it alongside `validate_goals.js`, which only proves the goal count.

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
- After adding or editing a report, also run `node scripts/report_lint.js <fixtureKey>`. It catches
  what the goal count cannot: a scorer and assister stored the wrong way round, a shirt number with a
  digit hidden by the shirt graphic, a name spelled differently from the rest of the season, or an
  assistant recorded as the coach of a human-managed club.
- Serve the folder (`python3 -m http.server`) and drive the page with the Playwright MCP tools to check the console and click through the affected tab. Note that the browser aggressively caches `js/data/*.js` and `js/ui/*.js`; serve on a fresh port after editing, or you will be testing the old file.
- Open `index.html` locally to verify the affected tab.
- For data changes, check that the relevant table/card/report appears and no dependent script is loaded before its data.

When changing match reports or fixtures, verify the `fixtureKey` link, not just syntax.

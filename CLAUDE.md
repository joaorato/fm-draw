# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project

Static HTML/CSS/JS site for **Liga EMG**, a Football Manager competition between 8 friends: draw
ceremony, coach profiles, global standings and league dashboards.

No build step, bundler, framework or package install. The site must keep working by opening
`index.html` directly from disk, and is deployed on GitHub Pages at
`https://joaorato.github.io/fm-draw/`.

## Runtime

External runtime dependencies:

- Google Fonts (Cinzel, Michroma, Oxanium), via `<link>` in `index.html`.
- `html2canvas`, fetched from a CDN by `loadHtml2Canvas()` only when the draw's share button is
  pressed. It is not a `<script>` tag and does not affect page load.

Do not introduce Node, npm, bundlers, modules or generated build output unless the user explicitly
asks for a larger architecture change. The `scripts/` folder is Node tooling run by hand, never by
the page.

## Structure

- `index.html` - page structure, tab sections, modal/lightbox shells and the ordered script list.
- `app.js` - bootstrap only, and must stay last.
- `style.css` - all visual styling.
- `js/data/` - data layer, grouped into `core/` (league-agnostic) and one folder per season
  (`croatia/`), with `scotland.js` and `leagues.js` at the top level.
- `js/ui/` - UI layer, one script per area.
- `assets/` - **generated** from `assets-src/` by `scripts/build_assets.js`. See Assets.
- `assets-src/` - the originals, gitignored. Not deployed, not committed.
- `scripts/` - Node/Python tooling: `build_assets.js`, `report_build.js`, `report_crop.py`,
  `report_lint.js`, `validate_goals.js`, `load-league-data.js`.

## Critical Script Rule

The scripts are **classic scripts sharing one global scope**, not ES modules. Load order in
`index.html` is part of the architecture, and two rules apply which are not the same rule:

- **Load-time code** - anything that runs while the script is parsed, such as a top-level `const`
  derived from data - can only see files already loaded. These are strictly ordered: all of
  `js/data/` first, then `js/ui/`, then `app.js`.
- **Call-time code** - function bodies, event handlers, `onclick=` strings - resolves through the
  shared global scope after every script has run, so order does not matter. This is why `js/ui/`
  files call each other freely in both directions.

`app.js` must stay last: it is the only file that renders at load.

Order in `index.html`:

1. `js/data/core/` - `coaches.js`, `teams.js`, `fixtures-core.js`, `standings-core.js`,
   `scoring-core.js`, `report-core.js`, `stats-core.js`
2. `js/data/scotland.js`
3. `js/data/croatia/` - `croatia-table.js`, `croatia-fixtures.js`, `croatia-reports.js`,
   `croatia-wiring.js`, `croatia-standings.js`, `croatia-transfers.js`, `croatia-news.js`
4. `js/data/leagues.js`
5. `js/ui/` - `shared.js`, `chrome.js`, `coaches.js`, `standings-ui.js`, `league-selector.js`,
   `match-report.js`, `league-live.js`, `league-transfers.js`, `league-stats.js`,
   `league-calendar.js`, `league-race.js`, `league-panel.js`, `draw.js`, `share.js`
6. `app.js`

Within `js/data/croatia/`, the order matters: fixtures need the table's config, wiring needs the
reports, standings needs the wiring. A new data file goes before the file that consumes it. A new
`js/ui/` file can go anywhere in the `js/ui/` block.

## Data Files

| File | Purpose |
|---|---|
| `js/data/core/coaches.js` | `jogadores`, `coachProfiles`, `coachAssetFiles`, `coachStats`, `coachProfileExtras` |
| `js/data/core/teams.js` | `equipas`, the current draw pot |
| `js/data/core/fixtures-core.js` | `fixtureMonthNumbers`, `createFixtureKey`, `createLeagueMatch`, `assignLeagueFixtureRounds` |
| `js/data/core/standings-core.js` | League-agnostic standings maths: `getFixtureOutcome`, `buildStandingsFromFixtures`, `standingsCriteria`, `sortStandings`, `applyStandingsSnapshot`, `buildStandingsHistory` |
| `js/data/core/scoring-core.js` | League-agnostic EMG points: `calcSeasonPoints`, `calcTableScores`, `calcCupBonuses`, `calcPositionBonuses` |
| `js/data/core/report-core.js` | Report helpers: `compactReport`, `reportPlayer`, `reportFormation`, `reportStats`, `goalEvent`, `sendOffEvent` |
| `js/data/core/stats-core.js` | Player stats from the reports: `buildSquadIndex`, `readGoalEvent`, `splitScorerAndAssist`, `buildGoalRecords`, `buildPlayerRankings`, `validateGoalRecords` |
| `js/data/scotland.js` | All Scotland season data, hand-typed |
| `js/data/croatia/croatia-table.js` | Croatia config: `croatiaSeedTable`, `croatiaZonas`, `croatiaRegras`, `croatiaClassificacaoFM`, `croatiaFixtureMonths` |
| `js/data/croatia/croatia-fixtures.js` | Croatia fixtures and results |
| `js/data/croatia/croatia-reports.js` | Every Croatia match report, in one array. Written by `scripts/report_build.js` |
| `js/data/croatia/croatia-wiring.js` | Links reports to fixtures by `fixtureKey`, derives form and result groups |
| `js/data/croatia/croatia-standings.js` | Computes `croatiaCurrentTable` and `croatiaSeasonScores` from the fixtures |
| `js/data/croatia/croatia-transfers.js` | Croatia transfers and extra club logos |
| `js/data/croatia/croatia-news.js` | Croatia live/news carousel and articles |
| `js/data/leagues.js` | The `leagues` array consumed by the whole UI layer |

## UI Files

Each owns its own state. The names under Owns are declared at the top of that file and read nowhere
else.

| File | Purpose | Owns |
|---|---|---|
| `js/ui/shared.js` | Helpers used across areas | `escapeAttribute`, `formatPoints`, `getPointsClass`, `bindCoachLinks` |
| `js/ui/chrome.js` | Music (mute, autoplay recovery) and tab/hash routing | `musicStarted`, `isMuted` |
| `js/ui/coaches.js` | Coach cards, modal, palmarés, trophy cabinet, gallery, rail drag | `selectedCoachId`, `coachByShortName`, `coachByNarrativeTeam`, `palmaresCountries` |
| `js/ui/standings-ui.js` | EMG points glue, `generalStandings`, Classificação Geral, formula popover, floating tooltips | `generalScoreMode`, `hasLiveLeague` |
| `js/ui/league-selector.js` | League menu and team name/logo helpers | `activeLeagueId` |
| `js/ui/match-report.js` | Report modal: events, formations, pitch, stats | - |
| `js/ui/league-live.js` | Form dots, result tooltips, live cards, news carousel | `activeLeagueLivePage`, `activeLeagueNewsIndex`, `leagueLiveAutoTimer`, `pausedLeagueLivePages` |
| `js/ui/league-transfers.js` | Transfers table body. Returns the body only; the `<section>` belongs to the tab container in `league-stats.js` | - |
| `js/ui/league-stats.js` | Lower tabbed card: tab strip, marcadores and assistências | `activeLeagueLowerTab`, `leagueGoalsCache`, `leagueTransfersScrollTop` |
| `js/ui/league-calendar.js` | Fixture grouping, round select, calendar | `activeLeagueCalendarRound` |
| `js/ui/league-race.js` | Evolução da classificação: the animated position chart and its overlay | `raceLeagueId`, `raceFrameIndex`, `racePinned`, `racePlaying`, `raceAutoTimer`, `raceHistoryCache`, `raceSeriesByLeague` |
| `js/ui/league-panel.js` | Lower panel, side stats, `renderLeague` | - |
| `js/ui/draw.js` | Roulette maths and the draw ceremony | `shuffledTeams`, `shuffledPlayers`, `remainingTeams`, `remainingPlayers`, `currentRound`, `resultados`, `DRAW_COMPLETED`, `FINAL_RESULTS` |
| `js/ui/share.js` | Discord share, on-demand `html2canvas`, fullscreen | `html2canvasLoader` |

`coachByNarrativeTeam` and `palmaresCountries` are authored data living in a UI file. Wiring up a
second country's trophy cabinet means editing `js/ui/coaches.js`, which is the one place the update
paths below say data does not live. Moving them into `js/data/` is a known outstanding change.

## Main Data Contracts

- `jogadores` - the 8 players: Gonçalo, Rato, Chico, Nabais, Gamy, Painatal, Cardoso, Hugo.
- `equipas` - current draw teams.
- `coachProfiles` - coach metadata. `coachStats` - career stats and trophies, keyed by coach id.
  `coachProfileExtras` - narrative/identity sections for the coach modal.
- `coachAssetFiles` - coach image filenames per folder. See Assets for the naming rules.
- `leagues` - one object per league. Drives the league selector, dashboard and global standings.
- `croatiaCurrentTable` and `croatiaSeasonScores` - **derived**, not authored. Computed in
  `croatia-standings.js` from the fixtures. The Croatia `emgPontos` column in `leagues.js` reads
  from `croatiaSeasonScores` and is never typed.
- `generalStandings` - derived in `js/ui/standings-ui.js` from every league, split into `concluidas`
  (`status === "completed"`) and `projecao` (the rest), plus `total` and the `inf` arrow.
- `DRAW_COMPLETED` and `FINAL_RESULTS` - control whether the draw tab shows stored results or runs
  the roulette. `FINAL_RESULTS` derives from `croatiaSeedTable`.

Everything not marked derived is hand-written.

## League Object Contract

A league object in `js/data/leagues.js` contains:

- Required: `id`, `status` (`"live"` or `"completed"`), `statusLabel`, `nome`, `descricao`, `logo`,
  `logoAlt`, `epoca`, `formula`, `scores`, `fixtures`, `fixtureMonths`, `tabela`
- Optional: `fixtureGroupBy`, `liveCards`, `livePages`, `transfers`, `merits`, `sideStats`, `tacas`,
  `extraTeamLogos`, `evolucao`, `golos`

Adding a league means adding its data file(s), loading them before `leagues.js`, then pushing a new
object into `leagues`.

`activeLeagueId` in `js/ui/league-selector.js` is hardcoded to `"croatia"` rather than derived from
`leagues`. It is correct today and will be wrong the session a new league goes live.

## Common Update Paths

For a new Croatia session:

- Results/fixtures: edit `js/data/croatia/croatia-fixtures.js`.
- Standings: nothing to edit, the table is computed from the fixtures.
- Match reports: they live in `croatiaMatchReports` in `js/data/croatia/croatia-reports.js`, and
  `scripts/report_build.js --write` writes them there itself. To transcribe one from an FM
  screenshot, follow the `fm-match-report` skill in `.claude/skills/` - it carries the traps that
  produce silently wrong data.
- News article or carousel item: edit `js/data/croatia/croatia-news.js`.
- Transfers: edit `js/data/croatia/croatia-transfers.js`.
- Marcadores/assistências: nothing to edit, they come from the reports' goal events. Run
  `node scripts/validate_goals.js` afterwards.
- A new image: drop the original into `assets-src/` and run `node scripts/build_assets.js`. See
  Assets.

## Croatia Standings

`croatiaCurrentTable` is **computed, never typed**. `js/data/croatia/croatia-standings.js` derives J,
V, E, D, GM, GS, DG, Pts, position, the form dots and the zone colours from `croatiaFixtures`. Do not
reintroduce a hand-written table.

Only league matches count (`competition` starting with `"HNL"`) and only fixtures with a finite
score. That filter is why the postponed Dinamo–Lokomotiva placeholder, which sits in the fixture list
alongside its replayed `8-atraso` entry, does not double-count.

Hand-authored in `js/data/croatia/croatia-table.js`:

- `croatiaSeedTable` - team, logo, `cor` (the club's colour, for the evolution chart), `jogador`,
  `prevista` and `inf`. The ↑ ↓ arrows are an editorial note, not a computed value.
- `croatiaZonas` - zone by **position**, so the championship/Europe/relegation stripes follow whoever
  is in those places.
- `croatiaRegras` - tie-break rules as data, naming criteria from `standingsCriteria`: `desempate`
  while the season runs, `desempateFinal` once every league fixture has a result. Currently
  `["dg", "gm", "equipa"]` and `["h2hPts", "h2hDg", "dg", "gm", "equipa"]`, matching the SuperSport
  HNL rules. Another country declares its own chain; `standings-core.js` does not change.
- `croatiaClassificacaoFM` - optional cross-check, normally empty. Paste the FM table as
  `["Equipa", pontos]` in FM's own order and it takes over the positions and warns on the console on
  every points mismatch, missing team or order divergence. Useful when a tie looks wrong, because
  FM's internal tie-break can disagree with goal difference. Empty it again afterwards.

`getTeamFixtureFormDetail` in `croatia-wiring.js` calls `getFixtureOutcome`, so the standings and the
form dots share one definition of a result. Keep it that way.

**Scotland must stay hand-typed**: its fixture list holds 97 league matches of the 228 a full
Premiership season needs, so its `j: 38` table cannot be computed.

## Evolução da Classificação

The animated position chart in `js/ui/league-race.js`, opened from the league toolbar. Nothing is
hand-written: `buildStandingsHistory` in `standings-core.js` re-runs the standings pipeline over the
fixtures up to each round, so the chart cannot drift from the table.

A league opts in by declaring `evolucao` in `leagues.js`:

```js
evolucao: { equipas, isLeagueMatch, regras, zonas, snapshot }
```

No `evolucao`, no button. **Scotland must not declare one**: only the 8 EMG-managed clubs appear in
its fixtures, so every intermediate position would be wrong. Declare it only where the fixture list
covers the whole league.

Two things in `buildStandingsHistory` must not be simplified away:

- Every frame but the last is sorted with `seasonComplete: false`. A prefix of the fixtures has no
  unplayed games in it, so `isSeasonComplete` would call the season over and switch to
  `desempateFinal` - the head-to-head chain - as early as jornada 3.
- `applyStandingsSnapshot` runs only on the last frame. `croatiaClassificacaoFM` is the *final*
  table; applied to a prefix it would drag the end-of-season order onto jornada 3.

**Colour belongs to the club, not the coach.** Each team's `cor` is authored in `croatiaSeedTable`
and passed through the `tabela` mapping in `leagues.js`; `getRaceTeamColor` just reads it. Nothing
derives colour from the coach - the point is that people already know the Istra is yellow.

Club colours were never chosen to contrast with each other. Croatia has four blues and three reds,
and three clubs (Lokomotiva black, Dinamo dark blue, Gorica dark red) are all but invisible on the
`#02071b` background - black measures 1.12:1. Two things carry that and must not be removed:

- **The halo.** Every line is drawn twice: a light translucent stroke underneath
  (`.league-race-halo`) and the club colour on top. That is what makes black read as black instead of
  vanishing. All halos live in one `<g>` below all lines - pair them up per team and one club's halo
  dims another's line. The badge rings and legend swatches carry the same idea.
- **Nothing is identified by colour alone.** Every line ends in the club badge, the legend carries
  badge and coach, hovering dims the other nine, clicking pins.

Clicking a team must not pause playback: pinning chooses *what* you watch, not *when*. Only play, the
step arrows and the scrubber call `pauseLeagueRace()`.

Axis labels come every 5 **jornadas**, not every 5 frames, so a jogo em atraso does not land on a
tick and make the axis read J11, J8, J20.

## Golos e Assistências

The lower panel's middle card is tabbed - Transferências and Golos e Assistências - with the tab
strip acting as the card's title. `js/ui/league-stats.js` owns the card, the tab state and the two
ranking lists.

A league opts in the same way it opts into the race chart:

```js
golos: { isLeagueMatch }
```

No `golos`, no tab. **Scotland must not declare one**: it has no match reports, and its fixture list
covers only the 8 EMG clubs.

Nothing here is hand-written. `js/data/core/stats-core.js` derives everything from the goal events,
and three things about that data must not be forgotten:

- **Send-offs live in the same events array as the goals**, flagged by `sendOff` on a
  `sendOffEvent()` object or a trailing `expulso` in a legacy string. Counting events without
  filtering them is what makes totals disagree with the results.
- **Own goals are listed on the side that benefits**, but the player belongs to the other squad.
  They count for the team and stay out of the scorer list. The data spells them `a.g.` and `(AG)`,
  and both are handled.
- **A legacy goal string has no separator between scorer and assister** - `"90+3' M. Rog L. Belcar"`.
  The split is decided against that team's squad, indexed from every lineup in the reports plus every
  transfer. Each candidate reading scores 2 per half known to the squad and 1 per half accepted only
  on its shape, and the strongest wins. A tie is reported, never guessed.

Each list shows the top 10. Players level on goals or assists are ordered **alphabetically**: a
stable order, not a claim that one is better. Because that cut often lands inside a tie, the last row
carries a `+N` badge listing, on hover, everyone left out on the same number. It uses
`bindFloatingTooltips()`, the standings' own tooltip, so there is only one such mechanism.

Two smaller decisions that are easy to undo by accident:

- **A player's identity is the team plus the normalised name**, and the team is not decoration:
  without it `A. Jurić` of Rijeka and `S. Jurić` of Varaždin collapse into one row and add up each
  other's goals. With it, spelling variants of one player still merge, because those share a team -
  `Hoxha`/`A. Hoxha`, `Petrovič`/`Petrović`, `Kadušić`/`Kadusić`.
- **The squad index matches on the surname when the full name misses**, which is what links a
  lineup's `"Dantas"` to an event's `"Tiago Dantas"`.

## Match Reports

Reports are matched to fixtures by `fixtureKey`, built with `createFixtureKey()` from
`fixtures-core.js`. **A report whose `fixtureKey` matches no fixture is silently dropped** - after
adding reports, check the target fixture has `fixture.report`.

Build report content with the helpers from `report-core.js`: `compactReport()`, `reportPlayer()`,
`reportFormation()`, `reportStats()`, `goalEvent()` and `sendOffEvent()`.

Transcribe from an FM screenshot with the pipeline, not by hand: `scripts/report_crop.py` cuts the
screenshot into readable pieces, you write a JSON transcription, and
`scripts/report_build.js <json> --write` validates it and writes the block into
`croatia-reports.js`, replacing the report already there or appending if the match has none.
**Leave it uncommitted**: the user reviews the `git diff` and decides. The `fm-match-report` skill
has the details.

**Write goal events with `goalEvent()`, never as a string.** Both shapes are read:

```js
goalEvent("71", "W. Sule", { assist: "J. Pršir" })   // usar este
"71' W. Sule J. Pršir"                                // legado, ainda lido
```

The string form says who scored only through word order, and **that order is not reliable in the
data that still uses it**. FM mirrors the away column on screen and prints it assister, scorer,
minute, so some strings were copied as displayed and some corrected, occasionally within one match.
Reading the first name as the scorer is right about 3 times in 10 and the last name about 7 in 10, so
neither is a rule, and the per-fixture goal count never catches it. The only fix for a suspect match
is re-reading it from the screenshot. `goalEvent()` has two named fields and no order to interpret,
so a re-transcribed match stops depending on word order.

## Scoring

Base formula: `(posição prevista - posição final) × 3`.

The maths lives in `js/data/core/scoring-core.js` and knows nothing about a specific league.
`calcBonuses()` in `js/ui/standings-ui.js` is `calcCupBonuses(league.tacas)` plus
`calcPositionBonuses(league.tabela)`:

- Champion `+10`, best human manager `+5`
- Cup win `+5`, cup final `+2`, European title `+3`
- Last place `-5`, worst human manager `-2`

Champion does not stack with best human, and last place does not stack with worst human.

### Projeção

A league with `status === "live"` is scored the same way against **today's** position, and the result
is labelled a projection. Bonuses compute for live leagues too.

Classificação Geral has two modes (`generalScoreMode` in `js/ui/standings-ui.js`), switched by the
`#scoreModeTabs` buttons:

- `"projecao"`, the default while a live league exists - `#` · `Inf` · Jogador · Concluídas ·
  Projeção · Total, sorted by `total`.
- `"concluidas"` - the three-column table, sorted by `concluidas`.

The `Inf` arrow is each player's rank by `concluidas` minus their rank by `total`: how far the
ongoing season moves them. It is derived from the two orderings, so there is nothing to maintain per
session.

Every points cell carries a hover/focus tooltip breaking the number down league by league: the
position line plus one line per bonus. `buildLeagueBreakdown()` produces those lines and the column
totals are `sumBreakdown()` of them, so tooltip and column cannot disagree. The tooltip machinery is
`bindFloatingTooltips(root, anchorSelector)` with a `<template class="standings-tooltip-template">`
inside the anchor.

## App Flow

`index.html` defines five views - `homeView`, `drawView`, `coachesView`, `generalView`, `pastView` -
switched by `setActiveTab()` in `js/ui/chrome.js` with hash routes `#home`, `#sorteio`,
`#treinadores`, `#classificacao`, `#ligas`.

`app.js` is the whole bootstrap and nothing else: `syncGeneralScoreModes()`, `renderGeneralTable()`,
`renderLeagueSelector()`, `renderCoachCards()`, `setupFormulaPopover()`, `restoreMuteState()`,
`bindMusicRecovery()`, `setActiveTab(getTabFromHash())`.

## Assets

`assets/` is **generated output, not authored**. The originals live in `assets-src/`, which is
gitignored, and `scripts/build_assets.js` writes `assets/` from them:

```
node scripts/build_assets.js            # escreve assets/
node scripts/build_assets.js --check    # não escreve, diz o que faria
node scripts/build_assets.js --verify   # confirma que tudo o que o site pede existe
```

Everything served is WebP, resized to about twice what it renders at, with the per-group caps in
`REGRAS`. There is **no PNG fallback and no `<picture>`**. Audio is re-encoded to 128 kbps. The whole
of `assets/` is rebuilt on every run, so never hand-edit anything inside it.

To add an image: drop the original into `assets-src/` in the folder matching what it is, run the
script, and reference the resulting `.webp` from a `js/data/` file. A coach photo also needs its
filename in `coachAssetFiles`, and the name must contain `card` or `profile` for
`resolveCoachMedia()` to pick it up.

Four things are easy to get wrong:

- **A file the script does not convert leaves `assets/` on its own.** There is no delete step. The
  exclusions in `NAO_PUBLICADOS` are working material, not site content: the FM screenshots in
  `Resultados_croacia/`, the `stats_treinador_*` reference images, the `teste*` images and the raw
  exports in `treinadores/chico/`. Artwork that is merely not wired up yet - the UEFA trophies, the
  next numbered portrait in a coach's series - is converted on purpose, so it is there the day
  someone uses it.
- **An unmatched file is a warning, not a silent skip.** A folder with no entry in `REGRAS` is
  reported and not written, and the script exits non-zero. Add a size rule rather than letting it
  through at some default.
- **Rename nothing.** `resolveCoachMedia()` in `js/ui/coaches.js` picks the card and profile photos
  by filename substring (`card`, `profile`, `teste`, `stats`), and `js/ui/league-live.js` tests for
  `supersport_hnl` and `hugo_profile3`. None of that survives a rename.
- **On any other machine `assets-src/` is absent**, because it is gitignored. Nothing is broken by
  that: `assets/` holds everything the site asks for. Only re-running the conversion needs the
  originals, and they are in the history:

  ```
  mkdir assets-src
  git archive 153b17a assets | tar -x -C assets-src --strip-components=1
  ```

  `153b17a` is the last commit before the conversion. Run without `assets-src/`, the script prints
  that recipe and exits non-zero **before** touching `assets/`.

Two traps in `assets-src/`: `treinadores/rato/rato_profile5.png` and `rato_profile6.png` **are
JPEGs** despite the extension, so dimensions come from `sips` when the PNG magic bytes are missing;
and `treinadores/chico/Captura de ecrã …` is stored NFD by macOS, so an exclusion matching the
accented letter fails - match the prefix before the accent.

`resolveCoachMedia()` builds a `statsPhoto` path that nothing reads, pointing at a file deliberately
not in `assets/`. Nothing breaks, because nothing reads it. It is dead code worth removing.

## Style Map

`style.css` is large. Use selector search before editing, and keep changes close to the feature being
changed rather than restyling broadly.

- Coach cards/modals: `.coach-*`, `.coaches-*`
- Trophy cabinet/palmarés: `.coach-palmares-*`, `.coach-trophy-*`, `.trophy-lightbox-*`
- Global standings: `.score-*`, `.standings-*`
- League dashboard: `.league-*`
- Transfers: `.league-transfer-*`
- Calendar/fixtures: `.league-calendar-*`, `.league-fixture-*`, `.league-match-*`
- Match report modal: `.match-report-*`
- Evolution chart: `.league-race-*`
- Draw ceremony: `.draw-*`, `#drawView`, roulette/table classes
- Home/social: `.home-*`, social/logo selectors

Colours are tokenised in `:root`. Tokens hold channels rather than whole colours -
`--c-glow: 112, 208, 255`, used as `rgba(var(--c-glow), 0.16)` - because the same colour recurs at
many opacities. Colours used fewer than 5 times are left as literals on purpose.

## Conventions

- UI text and data are mostly Portuguese. Keep new visible text in Portuguese unless the surrounding
  context is English.
- 4-space indentation, `const` and `let`, double quotes in JS.
- Rendering is mostly template-literal `innerHTML`; follow existing patterns.
- Do not convert files to modules. Do not reorder scripts casually.
- Do not introduce unrelated refactors while adding data or fixing UI.
- Preserve user changes in a dirty worktree.
- Commit messages are one line. No body, no bullet list of what changed - the diff says that.

## Verification

- `node --check <file>` on every changed JS file.
- After touching match reports or `stats-core.js`: `node scripts/validate_goals.js`. It must report
  0 unresolved, 0 ambiguous and 0 fixtures disagreeing with the score. Note what it proves - the
  right *number* of goals, not that a name was split in the right place.
- After adding or editing a report: `node scripts/report_lint.js <fixtureKey>`, or `--all` to sweep
  every report. It catches what the goal count cannot: a scorer and assister stored the wrong way
  round, a shirt number with a digit hidden by the shirt graphic, a name spelled differently from the
  rest of the season, or an assistant recorded as the coach of a human-managed club.
- After touching anything under `assets/` or any image path:
  `node scripts/build_assets.js --verify`, which must report **0 em falta**. This matters more than
  it looks: nothing on the site reacts to an image failing to load - there is no `onerror` anywhere -
  so a wrong path is invisible in the browser and only a static check finds it.
- For data changes, check the relevant table/card/report appears and no dependent script loads before
  its data. When changing reports or fixtures, verify the `fixtureKey` link, not just syntax.

**Do not drive the browser unless asked.** The user checks the page themselves. Verify with the
checks above; if something can only be settled by looking at the rendered page, say so and let the
user look. When the user does ask for a browser check, serve on a fresh port
(`python3 -m http.server`) - the browser caches `js/data/*.js` and `js/ui/*.js` hard, and reusing a
port means testing the old file.

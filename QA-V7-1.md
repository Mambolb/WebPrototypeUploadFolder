# V7.1 focused QA report

Checked against `WebSiteTable.numbers` from the V7 uploaded archive and the V7 home implementation.

## Fixed

- Unwanted 1px dividers removed from all table header cells and the first merged cells.
- Per-project selection fill from Numbers table is now represented by `selectionColor` in `projects-data.js`.
- `WhoAmIWhenIWakeUp`, `Digital Garden`, and `The Time`: `#CBCCCF`, selected text `#000000`.
- Other five projects: `#000000`, selected text `#FFFFFF`.
- `index.html` uses new cache-busting URLs `?v=7.1`.

## Automated browser checks

- All 8 projects present.
- Five sortable headers and no 1px bottom border.
- Five synchronized selected cells for each tested project.
- Verified computed selection fill and foreground text colors for five representative projects, including all light theme records.
- Verified clear on pointer exit and year-sort hover persistence.
- Verified wide-screen canvas transform 2048/1440 = 1.42222.
- No JavaScript page errors on the tested states.

Browser checks used inline HTML/CSS/JS with original data; the execution environment restricts navigation to local files and localhost. Actual deployment should still be checked after GitHub Pages cache clears.

No page assets or video files changed.

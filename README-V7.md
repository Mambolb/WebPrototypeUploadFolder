# Portfolio V7 — GitHub Pages release

Base: Portfolio V6.1 complete, with V7 changes read from `CodeExport_ProtV7.rtf` in the uploaded `Archive(3).zip`.

## What changed

- Updated Home to `HomePage_DefaultV3` geometry: 1px #CBCCCF bottom divider for all five column headings and the first merged group in each metadata column.
- The first-group rule moves when the visitor sorts; it is not attached to an absolute screen coordinate.
- Retained existing dark selected state and the dedicated light Digital Garden hover state, Mail and Instagram hover states.
- Retained the live link to https://www.instagram.com/sasha.bichuk/ (new tab).
- Retained the published project page geometry, videos, photos, and IRL Glitch hover mechanics from V6.1. No media recompression.
- Refreshed Home CSS / JS references (`?v=7`) to avoid stale browser cache after deployment.

## Start

Open `index.html` locally, or serve the directory with `python3 -m http.server 8000`.
The `index.html` file is at the repository root and `.nojekyll` is included for GitHub Pages.

This update intentionally does not redraw project layouts: the corresponding V7 Figma CSS blocks were unchanged from V6. No speculative replacement of media is done.

For installation instructions, read `UPDATE-GITHUB-DESKTOP-V7.md`.

# Portfolio V5 — VS Code / GitHub Pages

## Open locally
Open the folder containing `index.html` in VS Code. Use Live Server (recommended, particularly for local video playback), or open `index.html` directly in a browser. No build step or npm dependencies required.

## Pages
- `index.html`: sortable project archive, merged category/medium/context/year columns and linked hover background image.
- `projects/design-as-epistemic.html`: new V5 publication page, video hero and three photography modules.
- `projects/shahed.html`: visualisation project.
- `projects/turbulent.html`: video with sound.
- `projects/enzyklopaedie.html`: generative web project video.
- `projects/whoami.html`: documentary, hero ~79.4dvh so its text starts in the initial viewport.
- `projects/digital-garden.html`: HeroVid video used as the hero; named HomePAgeBackgrounImg image used for Home preview.
- `projects/irl-glitch.html`: new photo catalogue, stable and linked hover states.
- `projects/the-time.html`: new V5 page with supplied Time image and Figma-linked title and YouTube link.

## Keep the design
The original desktop reference is 1440px wide. All dedicated scenes use the unchanged composition coordinates from the Figma export and a viewport-height presentation rule (`presentation-rules.js`) for the initial image. The Home layout scales to full available width (`home.js`). The photo catalogue scales the Figma layout on desktop and uses a readable fallback layout on phones (there was no Figma mobile frame supplied).

## Editing
- `projects-data.js`: project titles, categories, year, preview image, and project URL shown in the Home index.
- `scenes.js`: exact image/video and text geometry for dedicated pages, including crop offsets.
- `presentation-rules.js`: Hero height/gap per project, relative to visible browser height.
- `home.css` / `home.js`: index layout, dynamic sorting, merged cells and five-cell hover highlights.
- `irl-glitch.css` / `irl-glitch.js`: 9 photo tiles, matching catalogue rows, white Stable→Hover selection.
- `assets/`: web-ready images and MP4 videos. The role-named input files were mapped to the right purpose; all galleries use the uploaded photographs.

## Source-specific limitations
- The only new design export delivered in the V5 archive was `CodeExport_ProtV5.rtf`. No individual V5 full-frame PNG screenshots or updated numeric metadata table were included. Consequently, this is coordinate-grounded and interaction-tested, **not** an independently verified pixel-perfect reproduction of every full page.
- IRL uses exactly the 9 image files referenced in Figma's PhotoLayout. Additional supplied files have been retained in `assets/irl-extra-*` for later use, not added to the gallery because the supplied export did not position them.
- Figma's IRL catalogue export includes 9 rows and columns labelled Index and Resolution, but no dates/descriptions or values. The site displays file IDs (A0001–A0009) and dimensions calculated from the images; no dates or descriptions were invented.
- Previous table metadata is retained for 6 projects. The Time did not include an updated table record; unknown Category/Context are displayed as `—` until supplied. Design as Epistemic Instrument uses its known publication/research/UdK context.
- Figma labels the Enzyklopädie project 2025 and the previous metadata sheet has 2024; the Home index keeps the existing 2024 value without silently overwriting it.
- Existing placeholder bio about 'Leila' and MAIL/INSTAGRAM labels remain unchanged from the previous Home layout. Add verified contact links/content when ready.
- Video files were transcoded to MP4/H.264/AAC for native browser playback. The originals in `Archive(1).zip` were not modified. Original project photos have not been resized.

## Video playback
Videos use native HTML5 video, autoplay muted, looping. Click or keyboard Enter/Space on a focused video to toggle audio. Autoplay depends on browser settings. `preload=metadata` prevents eager full-size download.

## GitHub Pages
See `UPDATE-GITHUB-DESKTOP.md` for exact replacement and publication steps. The extracted site should have `index.html` at the *repository root*. A ZIP file is not the published site — do not upload the ZIP as a single file.

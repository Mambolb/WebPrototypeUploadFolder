# Portfolio V6.1 — precision fixes

## Install with GitHub Desktop

1. Open GitHub Desktop and select `WebPrototypeUploadFolder`.
2. Choose Repository → Show in Finder.
3. Make a backup copy of your repository directory (do not delete `.git`).
4. Unzip `portfolio-v6-1-update-only.zip` and copy its **contents** into the repository root; select Replace / Merge when prompted. `index.html` must remain at the repository root.
5. Review the changed files in GitHub Desktop, Commit to main, then Push origin.
6. Check https://mambolb.github.io/WebPrototypeUploadFolder/ and hard-refresh (Cmd+Shift+R).

## Changes

- Added sorting arrows to all index column headers, indicating ascending / descending when active.
- `The Time`: Documentary / Film / ZHdK Zurich / 2022 (source: WebSiteTable.numbers in uploaded Archive(2).zip).
- Other table corrections from the same source: `Enzyklopädie der Zukunft` year 2025; `IRL_GlitchCreation` year 2023–2024.
- Centered the Enzyklopaedie home preview on the reference 1440×1024 canvas without moving other projects' preview images.
- `Design as Epistemic Instrument`: preserve the whole Figma hero frame on displays of different aspect ratios, center it, show the reference 1s spread during load, and seek video to that reference at playback start.
- Linkified HTTP(S) URLs in project description text without changing layout or text content.
- Instagram opens `https://www.instagram.com/sasha.bichuk/` in a separate tab with safe external-link attributes.

## Still needed from site owner

- Mail's target email address is not provided in the design sources. Its Figma hover remains, but the Mail label is not linked to an invented destination.
- Large-screen hero "contain" may show side margins on publication. This preserves the full intended Figma composition rather than cropping the artwork.

## QA evidence

- `node --check` on all modified JavaScript: passed.
- Chromium DOM test: eight Home projects; five sort headers; expected sorted labels; responsive Home width at 1440 and 2048; link URL+target; design hero at 1440x1024 and 2048x1152; no JavaScript exceptions.
- Original video files are untouched; the only added media is a new PNG poster from the existing hero MP4.
- Visual screenshots are comparative checks, not a formal pixel-perfect claim.

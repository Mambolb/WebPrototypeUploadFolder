# V5 QA record

Static and inline Chromium tests:
- 8 rows in Home index.
- 5 selected cells (one per column) on Home hover.
- Clicking a category header changes the sorted order.
- 9 photo tiles + 9 catalogue rows on IRL page.
- 2 linked highlighted areas (photo card + catalogue row) on IRL gallery hover and catalogue hover.
- Dedicated pages successfully created: Shahed (6 images), Turbulent (video), Enzyklopädie (video), Digital Garden (video), WhoAmI (still), Design as Epistemic Instrument (video+3 stills), The Time (still).
- 1440×1024 reference: Shahed/Turbulent/Enzyklopädie/Digital Garden/Design hero 1024px; WhoAmI/The Time hero 813px with description region beginning at 859px.
- No JavaScript exceptions during these tests.

The browser runtime blocked direct navigation to localhost and file URLs; therefore QA used an equivalent *inline* HTML/CSS/JS representation. Actual remote hosting and full video playback were not tested by the browser runtime. File paths and media types were verified against the package on disk.

The input did not provide separate V5 PNG frames for side-by-side pixel comparison. Compare at an identical viewport before asserting pixel-perfect match.

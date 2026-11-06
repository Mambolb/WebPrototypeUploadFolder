# V6 QA report

Source: CodeExport_ProtV6.rtf and Archive(2).zip.

Tested programmatically in headless Chromium using local HTML/CSS/JS injection, because direct file:// and localhost navigation are blocked in this environment. This verifies geometry and event behavior but **does not verify live media loading**. Asset paths are statically checked.

- Home: 8 rows, no default selection; 5 linked cells on hover.
- Digital Garden alone: selected background RGB(203,204,207), black text, blurred background active.
- Shahed/other works: black selected background, white text.
- Mail/Instagram: own gray hover, no project selection or image background.
- Category sorting, Escape clear, no JavaScript errors in tests.
- 1440px reference: column widths 524 / 261 / 262 / 262 / 131. 2048px render fills viewport width.
- IRL V6: ten frames in two rows of five, each 220px, x=130/370/610/850/1090, row y=199/565, caption hover is white/black.
- Project first-screen heights at 1440×1024: Shahed/Design 1024; WhoAmI/The Time/Turbulent/Digital Garden 813; Enzyklopädie 930. Turbulent/WhoAmI have 46px gap before text.
- Asset paths and JavaScript syntax checked.

Potential differences not resolved from the export: The IRL Figma frame contains TWO different photos labeled A0007 and no visible photo catalogue. Both are preserved in V6. Mail/Instagram link destinations were not supplied, so their hover is visual only. Live video playback and exact image crop are not fully visually verified. Do not claim strict pixel-perfect equivalence yet.

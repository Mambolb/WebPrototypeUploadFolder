# Portfolio V6 — Desktop Figma export alignment

Source: Archive(2).zip / CodeExport_ProtV6.rtf.

## Changes from V5
- Desktop homepage is still 1440 × 1024 at reference scale, scaled to the width of the browser.
- Default: no selected blocks. Standard project hover: black fill / white type.
- Digital Garden hover only: `#CBCCCF` fill / black type, with its blurred color preview.
- Mail / Instagram hover: `#CBCCCF` fill / black type, independent of project selection.
- Header biography copy follows V6 export (English text).
- New IRL HomeBackgound.png is used as the preview for IRL Glitch.
- IRL gallery uses Figma's five 220 px-wide cards per row, 20 px gaps. Figma contains 10 image frames, including two distinct files both labeled A0007; reproduced exactly.
- Project geometry updated for Turbulent (including the 46px reference gap), Enzyklopädie and Digital Garden using V6 Figma coordinates. Browser video frames may differ from Figma static previews because video playback is live.
- Existing images retain their original bytes, existing MP4 files retain V5 encoding (no additional compression).

## Tests and limitations
- Desktop reference is 1440 × 1024; browser windows and video timing alter what is visible in a viewport.
- The new Figma export does not include full-resolution PNG screenshots for pixel comparison, so strict pixel-perfect QA beyond geometry/colors has not been established.
- Mail and Instagram destinations were not supplied; they are currently visual hover states with keyboard focus, not fabricated external links. Set real destinations when available.
- V6 Figma PageIRLGlitchHuntingV3 has no visible catalogue component. V5 catalogue is hidden in this version and can be reinstated if desired.
- The mobile layout remains a temporary fallback: no Figma mobile composition has been supplied.

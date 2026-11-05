/* PORTFOLIO / V2 — viewport-based presentation settings.
 * Hero occupies a percentage of the VISIBLE browser height, not fixed 1024 px.
 * 1440×1024 is the desktop Figma reference viewport.
 * Artwork inside each hero is still drawn using the original unmodified Figma
 * crop coordinates in scenes.js; when screens differ, the artwork is centered
 * and uniformly scaled to COVER the hero without stretching/distorting pixels.
 *
 * Fields:
 *   heroVh — hero height as % of browser viewport height
 *   gapVh  — black gap after the hero as % of viewport height
 *   baseHeroHeight — height in the original Figma coordinates
 *   focusY — vertical anchor for cropping: 0 = top, .5 = centered
 */
window.PORTFOLIO_PRESENTATION = {
  shahed:        { heroVh: 100,           gapVh: 0,           baseHeroHeight: 1024 },
  turbulent:     { heroVh: 100,           gapVh: 0,           baseHeroHeight: 1024 },
  enzyklopaedie: { heroVh: 100,           gapVh: 0,           baseHeroHeight: 1024 },
  'digital-garden': { heroVh: 100,        gapVh: 0,           baseHeroHeight: 1024 },
  whoami:        { heroVh: 813 / 1024 * 100, gapVh: 46 / 1024 * 100, baseHeroHeight: 813, focusY: 0 }
};

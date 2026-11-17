# Portfolio V7.1 — correction (desktop)

This is a focused patch to V7, not a new redesign.

- Removes unintended divider rules from the table headings and first merged cells. No borders are added after sorting.
- Uses `selectionColor` and `selectionTextColor` for each project in `projects-data.js`.
- Values originate from `WebSiteTable.numbers` in `Archive(3).zip`: WhoAmIWhenIWakeUp, Digital Garden and The Time use `#CBCCCF` fill and black text; other projects use black fill and white text.
- Keeps hover preview images, sort, grouping, Figma grid dimensions, link destinations, hero videos and IRL Glitch unchanged.
- Bumps asset query version in `index.html` to prevent stale GitHub Pages caching of updated JavaScript and CSS.

## Update through GitHub Desktop

1. Select your `WebPrototypeUploadFolder` repository and choose Repository → Show in Finder.
2. Back up current files.
3. Copy the files from the ZIP **into the repository root**, replacing files with the same names. Do not delete `.git`.
4. In GitHub Desktop verify changes, Commit to main, then Push origin.
5. Refresh the published page with Cmd+Shift+R; test Home and its hover states.

No photos or videos are included in the patch: the existing ones stay unchanged.

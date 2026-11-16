# Update Portfolio V6.1 to V7 via GitHub Desktop

## Recommended: small update

1. In GitHub Desktop choose repository **WebPrototypeUploadFolder** (or your active portfolio repository).
2. Choose **Repository → Show in Finder**. Make a copy of this directory outside the repo for backup.
3. Open the downloaded `portfolio-v7-update-only.zip` and copy **the contents** into the repository root, replacing `index.html`, `home.css`, `home.js`, and adding these release notes. **Do not copy the ZIP into the repo.**
4. Check that the root contains `index.html`, `home.css`, `home.js`, `projects-data.js`, `assets/`, and `projects/`. Do not touch `.git`.
5. In GitHub Desktop select Changes → Summary `Portfolio V7 – Figma home separators` → **Commit to main** → **Push origin**.
6. If Pages is already configured for `main` and `/(root)`, it will redeploy automatically. Visit https://mambolb.github.io/WebPrototypeUploadFolder/ and use **Cmd+Shift+R** if needed.

## Alternative: full version

You may replace the repo's website files with the *contents* of `portfolio-v7-complete.zip` instead. This package contains the original V6.1 media; do not remove `.git`. Existing GitHub history is preserved.

## Limits

GitHub prevents ordinary Git pushes containing files over **100 MiB**. No files in the V7 web-ready package exceed this threshold. Uploading an entire ZIP in the GitHub web UI is not equivalent to deploying its contents.

## Known configuration note

The Mail header remains a visual state until a destination address is configured, as in V6.1.

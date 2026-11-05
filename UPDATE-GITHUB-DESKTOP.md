# Replace existing portfolioV3 via GitHub Desktop

1. **Backup**: copy your current local `portfolioV3` folder to a separate `portfolioV3-backup` folder outside the GitHub repository. Do not work inside the backup.
2. Open **GitHub Desktop** and select the existing repository `Mambolb/portfolioV3`. If you have not cloned it yet: File → Clone Repository → URL → `https://github.com/Mambolb/portfolioV3.git`.
3. In GitHub Desktop choose **Repository → Show in Finder**. This opens the tracked local repository directory.
4. Unzip `portfolio-v5-update-for-github-desktop.zip`. **Open the extracted folder**. Copy the *contents* into the tracked repository folder, allowing replacement/merge of files with the same names. Keep the existing hidden `.git` directory untouched.
5. If you want an entirely clean V5 instead of an overlay, first remove obsolete visible site files from the tracked repository folder (do not remove `.git`), then copy the *contents* of `portfolio-v5-complete.zip` into that directory. Deleting old files should be done only after step 1.
6. Confirm that `index.html`, `home.js`, `projects-data.js`, `projects/`, `assets/` sit **directly inside** the tracked `portfolioV3` directory. There should not be a nested `portfolio-v5/` folder around them.
7. Open the tracked repository folder in VS Code and preview `index.html` with Live Server. Verify IRL hover and video pages before publishing.
8. In GitHub Desktop, go to **Changes**. Review the files, type `Portfolio V5 - IRL catalogue and new media` in the Summary field, click **Commit to main**, then **Push origin**. No web Upload Files page is needed.
9. GitHub Pages: in the repository `Settings → Pages`, select **Deploy from a branch → main → /(root)**. If it is already configured, each push normally redeploys it automatically. For a Free account, repository visibility must be Public for GitHub Pages.
10. Visit `https://mambolb.github.io/portfolioV3/` and refresh after deployment. Test each project URL and native video playback.

### Notes on size
The browser Upload Files interface is more restrictive than GitHub Desktop. This version contains several large photos and MP4s. Each individual published file was checked to remain under GitHub's normal 100 MiB per-file push limit; do not upload the ZIP itself to the repository. `Commit` records changes locally; `Push origin` sends them to GitHub.

### Future edits
Edit the tracked `portfolioV3` folder in VS Code → save → open GitHub Desktop → Commit to main → Push origin. Avoid keeping two independent writable copies of the site, or changes can appear to be missing.

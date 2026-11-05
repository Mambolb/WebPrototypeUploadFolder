# Deploy Portfolio V2.1 on GitHub Pages

1. Extract `portfolio-v2-1-github-ready.zip`. Do NOT upload the ZIP as a single file.
2. Open extracted `portfolio-website/` folder. The contents (index.html, home.js,
   home.css, detail.js, scenes.js, presentation-rules.js, projects-data.js,
   assets/, projects/) are the WEBSITE ROOT.
3. In the GitHub repo `Mambolb/portfolioV3`, use Add file -> Upload files and
   drag the **contents** of this folder, NOT its containing parent or .zip.
   GitHub browser upload files must each be <=25 MiB. Our largest deployed
   file is about 23.74 MiB. If your browser upload still errors, use GitHub
   Desktop to commit/push the extracted folder; Git supports files up to 100 MiB.
4. If the repository has not been published yet: Settings -> Pages -> Deploy
   from branch -> main / (root) -> Save. For GitHub Free, make the repository
   PUBLIC in Settings -> General -> Danger Zone -> Change repository visibility.
5. Your expected page path is https://mambolb.github.io/portfolioV3/
   (only after GitHub Pages publishes successfully).

Important: Keep the entire `assets` and `projects` folder structure, without
moving index.html into another subfolder. The site uses relative asset paths.
The deploy archive removes only unused reference files, QA artifacts and
unused local photos; it DOES NOT recompress or downscale live images/videos.

Home scales with width. If you want height-fitting (rather than width-fitting)
on ultra-wide screens, this requires a separate design rule and should not
be silently substituted for the Figma composition.

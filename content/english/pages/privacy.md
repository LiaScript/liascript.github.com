---
title: "Privacy"

meta_title: "LiaScript - Privacy"
# save as draft
draft: false
---

**This page is a technical draft, not a legal document.** It lists what this site actually loads and processes, based on its current configuration. It has not been reviewed by a lawyer or a data protection officer and does not yet name a responsible controller, legal basis, or retention periods, see the [Imprint](/imprint/) for the publisher. Please have it reviewed, or replace it with the official Datenschutzerklärung of Technische Universität Bergakademie Freiberg, before relying on it.

#### What this site loads

- **YouTube embeds** — the demo video and "LiaScript Shorts" sections embed videos from `youtube.com`, which can set cookies and load trackers from Google once a video is played.
- **Giscus comments** — every blog post automatically loads `giscus.app/client.js` and embeds a Giscus discussion thread, backed by GitHub Discussions on the `liascript/liascript` repository. This happens on page load, not only when you choose to comment. Reading comments does not require an account, but posting a comment or reaction does, via GitHub.

#### What this site does not use

- No analytics or tracking (Google Analytics, Matomo, GTM, and similar are present in the codebase only as disabled, commented out options).
- No accounts, logins, or server side storage of your data by this site itself.
- **No live Google Fonts request.** The page fonts (Heebo, Signika) are self hosted and served from this domain, not fetched from `fonts.googleapis.com` at page load, so your IP address is not sent to Google for that purpose.

#### Third parties

YouTube is operated by Google LLC. Giscus and GitHub Discussions are operated by GitHub, Inc. Each under their own privacy policies.

The LiaScript interpreter, LiveEditor, and course hosting run on a separate site (`liascript.github.io`) that is part of the LiaScript project itself, not this marketing site, and is not covered here.

---
title: "Wikimedia for LiaScript: Embed Media with Automatic Attribution"
slug: "wikimedia-commons-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Wikimedia_Foundation_logo_-_horizontal_%282012-2016%29.svg/1280px-Wikimedia_Foundation_logo_-_horizontal_%282012-2016%29.svg.png"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Media
    - OER
    - Images
    - Libraries
    - Attribution

liascript: true

description: "Use the Wikimedia template to embed images, audio, and video from Wikimedia Commons into your LiaScript courses — with automatic attribution, license info, and no manual copy-pasting required."
---

Open Educational Resources live and die by proper attribution.
When you embed a photo, audio recording, or video from [Wikimedia Commons](https://commons.wikimedia.org/) in your course, you are legally required to credit the author, name the license, and link back to the source.
That's three to five fields per media file — easy to get wrong, easy to forget entirely.

The [Wikimedia template](https://github.com/LiaTemplates/Wikimedia) solves this problem entirely.
Pass a file name or a Commons URL to a single macro — `@Wikimedia.embed` — and the template fetches everything from the Commons API automatically: the image or media file, the title, the artist's name, the license, and the source link.
All baked into a single LiaScript media element, correctly attributed.

No copy-pasting, no manual license lookup, no broken attribution chains.

---

## Quick Start

Add one line to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Wikimedia/main/README.md
-->
```

For a version-stable import (recommended for published courses):

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Wikimedia/0.0.2/README.md
-->
```

All macros are immediately available in your document.

---

## Embedding a Single File: `@Wikimedia.embed`

The main macro takes a `File:` identifier or a full Wikimedia Commons URL and renders the correct LiaScript media element — `![…](…)` for images, `?[…](…)` for audio, and `!?[…](…)` for video.
The alt text, title, artist, license, and source URL are assembled automatically.

``` markdown
@Wikimedia.embed(File:Hoverfly_May_2008-8.jpg)
```

You can also pass a full Commons URL:

``` markdown
@Wikimedia.embed(https://commons.wikimedia.org/wiki/File:Turdus_merula_2.ogg)
```

Both forms work — the template normalises the input internally.
The result is a fully attributed image, audio clip, or video inline in your course:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Wikimedia/main/README.md
-->

# Wikimedia Embed Demo

## Image

@Wikimedia.embed(File:Hoverfly_May_2008-8.jpg)

## Audio

@Wikimedia.embed(https://commons.wikimedia.org/wiki/File:Turdus_merula_2.ogg)

## Video

@Wikimedia.embed(https://commons.wikimedia.org/wiki/File:Turning_a_Resource_into_an_Open_Educational_Resource.webm)
{{< /liascript >}}

---

## Building a Gallery: `@Wikimedia.gallery`

To embed multiple files as a LiaScript gallery, pass a `|`-separated list of identifiers.
All requests run in parallel; each unique file is only fetched once even if referenced elsewhere.

``` markdown
@Wikimedia.gallery(File:Turdus_merula_2.ogg|File:Turning_a_Resource_into_an_Open_Educational_Resource.webm|Datei:Global_Open_Educational_Resources_Logo.svg)
```

The macro renders the gallery with the same automatic attribution as the single-file embed:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Wikimedia/main/README.md
-->

# Wikimedia Gallery Demo

@Wikimedia.gallery(File:Turdus_merula_2.ogg|File:Turning_a_Resource_into_an_Open_Educational_Resource.webm|Datei:Global_Open_Educational_Resources_Logo.svg)
{{< /liascript >}}

---

## Metadata Macros

If you need individual attribution fields — for custom captions, footnotes, or formatted credit lines — each piece of metadata has its own macro:

| Macro | Returns |
|-------|---------|
| `@Wikimedia.title(File:…)` | Object name / filename |
| `@Wikimedia.caption(File:…)` | Image description |
| `@Wikimedia.artist(File:…)` | Author / attribution |
| `@Wikimedia.license(File:…)` | Short license name |
| `@Wikimedia.source(File:…)` | Link to the Commons file page |
| `@Wikimedia.credit(File:…)` | Credit line (as provided by the uploader) |

All six macros share an internal cache with `@Wikimedia.embed`.
If you embed a file and then call `@Wikimedia.artist` for the same file, no second network request is made.

Example:

``` markdown
**Title:** @Wikimedia.title(File:Zunftwappen.svg)

**Artist:** @Wikimedia.artist(File:Zunftwappen.svg)

**License:** @Wikimedia.license(File:Zunftwappen.svg)

**Source:** @Wikimedia.source(File:Zunftwappen.svg)
```

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Wikimedia/main/README.md
-->

# Wikimedia Metadata Demo

**Title:** @Wikimedia.title(File:Zunftwappen.svg)

**Artist:** @Wikimedia.artist(File:Zunftwappen.svg)

**License:** @Wikimedia.license(File:Zunftwappen.svg)

**Source:** @Wikimedia.source(File:Zunftwappen.svg)
{{< /liascript >}}

---

## Full Template Demo

The full Wikimedia README is itself a self-documenting LiaScript course — you can explore all features live:

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Wikimedia/main/README.md" >}}

---

## Use Cases

**OER courses with rich media** — Wikimedia Commons hosts millions of freely licensed images, audio recordings, and videos.
With this template, any of them can be embedded in seconds with correct attribution — no legal risk, no extra work.

**History and cultural education** — Embed historical photographs, artworks, maps, and recordings from Commons.
The automatic attribution keeps every image legally clean without interrupting the writing flow.

**Natural science courses** — Commons has an enormous collection of biological photos, anatomical diagrams, geological maps, and chemistry illustrations — all usable in STEM courses with a single macro call.

**Language learning** — Audio recordings of native speakers, pronunciation examples, and songs are available on Commons.
Use `@Wikimedia.embed` with audio files to add listening exercises to any course.

**Journalism and media literacy** — Teach students to properly attribute media by showing how attribution works in practice.
The metadata macros let you display each attribution field individually to explain what proper crediting looks like.

**Slide presentations** — Build image-rich presentation slides in LiaScript backed by Wikimedia Commons, with every image legally attributed without cluttering the source text.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — no course-author server required |
| **External API** | Yes — Wikimedia Commons API (requires internet) |
| **Media types** | Images, audio, video, SVG, documents |
| **Caching** | Per-session in-memory cache (no redundant requests) |
| **Offline capable** | No — API calls require a live connection |
| **License** | MIT |
| **Maintained** | Yes (latest commit 3 weeks ago) |
| **Version-stable import** | Yes (`0.0.2` tag available) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Wikimedia/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Wikimedia/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Wikimedia" label="View on GitHub" >}}

---

## Related Templates

- [**ABCjs**](/blog/abcjs-music-notation-in-liascript) — embed and play music notation from plain text; pair with Wikimedia audio
- [**Pannellum**](https://github.com/LiaTemplates/Pannellum) — embed 360° panorama images
- [**BeforeAndAfter**](https://github.com/LiaTemplates/BeforeAndAfter) — compare two images with a sliding overlay
- [**citations**](https://github.com/LiaTemplates/citations) — embed BibTeX references for academic attribution

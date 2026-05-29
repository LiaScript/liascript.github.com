---
title: "BeforeAndAfter for LiaScript: Compare Two Images with a Slider"
slug: "beforeandafter-image-comparison-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/BeforeAndAfter"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Media
    - Interactive
    - No Server
liascript: true

description: "Add a drag-to-compare image slider to any LiaScript slide with a single inline macro — perfect for before/after comparisons in science, medicine, history, design, and geography."
---

Comparing two images side by side is a powerful learning device — but static layouts break on different screen sizes and don't invite interaction.
The [BeforeAndAfter template](https://github.com/LiaTemplates/BeforeAndAfter) adds an interactive drag slider between two images.
Drag left to reveal image 1, drag right to reveal image 2 — with a single inline macro and two URLs.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/README.md
-->
```

---

## Macro: `@beforeAndAfter(img1, img2)`

Pass two image URLs as arguments.
**Do not include spaces in the argument list.**

``` markdown
@beforeAndAfter(https://example.com/before.jpg,https://example.com/after.jpg)
```

---

## Styling

Apply a CSS style comment directly above the macro call to control the container:

``` markdown
<!-- style="max-width: 80vh;" -->
@beforeAndAfter(https://example.com/before.jpg,https://example.com/after.jpg)
```

Other useful style properties:

``` markdown
<!-- style="width: 600px; border: 2px solid #333;" -->
@beforeAndAfter(https://example.com/map-1950.jpg,https://example.com/map-2020.jpg)
```

---

## Example: Historical Map Comparison

``` markdown
<!-- style="max-width: 90vw;" -->
@beforeAndAfter(https://example.com/city-1920.jpg,https://example.com/city-2020.jpg)
```

## Example: Microscopy Before/After Treatment

``` markdown
<!-- style="width: 500px;" -->
@beforeAndAfter(https://example.com/untreated.jpg,https://example.com/treated.jpg)
```

Try it live — Lyell Glacier in Yosemite, 1883 vs 2015. Drag the handle to reveal how much has melted:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/README.md
-->

# Glacier Retreat: 1883 vs 2015

<!-- style="max-width: 80vh;" -->
@beforeAndAfter(https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/img/glacier-1883.jpg,https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/img/glacier-2015.jpg)
{{< /liascript >}}

And here the same slider showing the Pillars of Creation as seen by Hubble (1995/2014) vs James Webb (2022):

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/README.md
-->

# Hubble vs Webb: Pillars of Creation

<!-- style="max-width: 80vh;" -->
@beforeAndAfter(https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/img/hubble.jpg,https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/img/webb.jpg)
{{< /liascript >}}

---

## How the Slider Works

The template renders a `<div>` containing both images overlaid.
A vertical divider with a handle lets the user:
- Drag horizontally to reveal more of one image or the other
- Click anywhere to jump the divider to that position

No JavaScript frameworks required beyond the template's own script.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/README.md" >}}

---

## Use Cases

**Natural science** — Compare satellite images across time periods (deforestation, glacier retreat, urban growth).

**Medicine and biology** — Before/after tissue samples, MRI scan comparisons, wound healing progress.

**History** — Historical vs. contemporary maps of cities, regions, or political boundaries.

**Art and design** — Original vs. restored artwork, sketch vs. final illustration, raw vs. edited photograph.

**Architecture** — Building before and after renovation, ruins vs. reconstruction visualizations.

**Physics / optics** — Compare wave patterns, light refraction, or filter effects on the same image.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — fully client-side |
| **Server required** | No |
| **Input** | Two image URLs (any web-accessible image) |
| **Interaction** | Drag slider horizontally |
| **Custom styling** | Yes — HTML comment above macro |
| **By** | Sebastian Zug |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/BeforeAndAfter/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/BeforeAndAfter" label="View on GitHub" >}}

---

## Related Templates

- [**Pannellum**](/blog/pannellum-360-panorama-in-liascript) — full 360° panorama viewer with hotspots
- [**aframe**](/blog/aframe-3d-vr-scenes-in-liascript) — 3D/VR scenes with A-Frame WebGL
- [**LiveEdit-Embeddings**](/blog/liveedit-embeddings-interactive-examples-in-liascript) — embed LiaScript LiveEditor inline for interactive code examples

---
title: "Pannellum for LiaScript: 360° Panoramas and Virtual Tours in Your Course"
slug: "pannellum-360-panorama-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/Pannellum"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Media
    - Interactive
    - OER
    - No Server
liascript: true

description: "Embed interactive 360° panorama images and virtual tours in LiaScript using the Pannellum template — add clickable hotspots, links, and 360° video, all from a single image URL."
---

Spatial learning contexts — visiting a museum, exploring a geological site, taking a field trip — are hard to replicate in a document.
The [Pannellum template](https://github.com/LiaTemplates/Pannellum) integrates [Pannellum](https://pannellum.org/) — the lightweight, standalone panorama viewer — into LiaScript.

Embed an equirectangular photo as a 360° interactive viewer, add informational hotspots, or include 360° video, all with short macros.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/pannellum/master/README.md
-->
```

---

## Macro 1: `@Pannellum.panorama(url)` — Simple 360° Image

Embed a single equirectangular panorama image.
The viewer supports mouse drag to look around, scroll to zoom:

``` markdown
@Pannellum.panorama(https://pannellum.org/images/from-tree.jpg)
```

---

## Macro 2: `@Pannellum.panoramaWithHotspots(url)` — Annotated Panorama

Add a JSON code block with hotspot definitions on the line after the macro call.
Each hotspot defines a position (pitch, yaw) and optional label or link:

```` markdown
@Pannellum.panoramaWithHotspots(https://pannellum.org/images/from-tree.jpg)
```json
{ "pitch": 14.1, "yaw": 1.5, "type": "info", "text": "Look here!" }
{ "pitch": -3.1, "yaw": 122.9, "type": "info", "text": "Interesting spot", "URL": "https://example.com" }
```
````

Each line is a separate hotspot JSON object (no array brackets around them).

Hotspot types:
- `"info"` — info bubble with text
- `"scene"` — navigation to another scene (multi-scene tours)
- `"custom"` — custom-styled marker

---

## Macro 3: `@Pannellum.hotspots(url)` — Find Hotspot Coordinates

Use this for authoring: it's identical to `panoramaWithHotspots` but also logs the pitch/yaw of every click to the browser console.
Use it to find the coordinates you need, then switch to `panoramaWithHotspots`.

``` markdown
@Pannellum.hotspots(https://pannellum.org/images/from-tree.jpg)
```

---

## Macro 4: `@Pannellum.video(id, videoUrl)` — 360° Video

Embed a 360° video (equirectangular projection):

``` markdown
@Pannellum.video(equirectangular-video, https://example.com/360video.mp4)
```

---

## Hotspot JSON Format

```json
{
  "pitch": 14.1,
  "yaw": 1.5,
  "type": "info",
  "text": "Label text",
  "URL": "https://optional-link.com"
}
```

| Key | Type | Description |
|---|---|---|
| `pitch` | number | Vertical angle (–90 = nadir, +90 = zenith) |
| `yaw` | number | Horizontal angle (0 = forward, 90 = right) |
| `type` | string | `"info"` or `"scene"` |
| `text` | string | Tooltip / popup text |
| `URL` | string | Optional link on click |

---

## Example: Virtual Field Trip with Hotspots

```` markdown
## Rock Formation Tour

Look around the outcrop. Click the markers to learn more.

@Pannellum.panoramaWithHotspots(https://example.com/rock-outcrop-360.jpg)
```json
{ "pitch": 5, "yaw": 45, "type": "info", "text": "Folded limestone layer — Jurassic period" }
{ "pitch": -10, "yaw": 200, "type": "info", "text": "Fault line visible here", "URL": "https://example.com/fault-explainer" }
{ "pitch": 20, "yaw": 300, "type": "info", "text": "Igneous intrusion — note the contact zone" }
```
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Pannellum/master/README.md" >}}

---

## Use Cases

**Virtual field trips** — Take students to geological sites, historical buildings, or ecosystems they cannot physically visit.
Annotate key features with hotspot markers.

**Architecture and design** — Embed 360° photos of buildings, interiors, or spaces for design critique and analysis.

**Biology and ecology** — Show habitat panoramas with annotated flora and fauna markers.

**Chemistry and safety** — Tour a virtual lab or production facility before the real visit.

**Open educational resources** — Add freely licensed 360° photos from Wikimedia Commons as interactive panoramas.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — fully client-side |
| **Server required** | No |
| **Image format** | Equirectangular (any JPG/PNG) |
| **Hotspots** | Yes — info bubbles and links |
| **360° video** | Yes — equirectangular video |
| **Coordinate finder** | Yes — `@Pannellum.hotspots` for authoring |
| **Based on** | Pannellum (pannellum.org) |
| **License** | MIT |
| **Maintained** | Version 0.1.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Pannellum/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Pannellum/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Pannellum" label="View on GitHub" >}}

---

## Related Templates

- [**aframe**](/blog/aframe-3d-vr-scenes-in-liascript) — full 3D/VR scene authoring with A-Frame WebGL
- [**BeforeAndAfter**](/blog/beforeandafter-image-comparison-in-liascript) — compare two images with a slider
- [**lia-board-mode**](/blog/lia-board-mode-fullscreen-presentation-in-liascript) — full-screen presentation mode for classroom use

---
title: "PeriodicTable for LiaScript: An Interactive Element Table in Your Course"
slug: "periodictable-interactive-chemistry-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/PeriodicTable"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Chemistry
    - STEM
    - Interactive
    - No Server
liascript: true

description: "Add a fully interactive periodic table of the elements to any LiaScript course slide with a single macro — no setup, no server, just import and use."
---

A periodic table is a fixture of chemistry education at every level.
The [PeriodicTable template](https://github.com/LiaTemplates/PeriodicTable) lets you embed a fully interactive, styled periodic table directly into a LiaScript course page with a single line — no image, no plugin, no configuration.

The table renders via a small iframe pointing to a hosted component based on [Bowserinator's Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON).

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/PeriodicTable/main/README.md
-->
```

---

## Macro 1: `@PeriodicTable` — Full-Width Table

Inserts the periodic table at full width and 600px height.

``` markdown
@PeriodicTable
```

---

## Macro 2: `@PeriodicTable.withStyle("...")` — Custom Size

Control width, height, and other CSS properties.

``` markdown
@PeriodicTable.withStyle("width: 50%; height: 600px;")

@PeriodicTable.withStyle("width: 100%; height: 400px; border: 2px solid #ccc;")
```

---

## Example: Periodic Table on a Slide

```` markdown
## The Elements

Use the periodic table below to look up element properties.
Click any element to see its details.

@PeriodicTable
````

Try it live — click any element to see its details:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/PeriodicTable/main/README.md
-->

# The Periodic Table

Click any element to explore its symbol, name, and atomic number.

@PeriodicTable
{{< /liascript >}}

---

## Design Notes

- The table is rendered inside an iframe pointing to `https://liatemplates.github.io/PeriodicTable/index.html`
- Elements are clickable and display symbol, name, and atomic number
- Not recommended to place more than one table on the same page
- For more complete molecular visualization (2D/3D structures, CML), use the [KekuleJS template](/blog/kekulejs-chemistry-in-liascript)

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/PeriodicTable/main/README.md" >}}

---

## Use Cases

**Secondary chemistry** — Replace static periodic table images with an interactive one that students can explore.
Click any element for its symbol, name, and atomic number.

**Exam preparation** — Embed the table on a reference slide for open-resource chemistry tests.

**Introduction lectures** — Display the table when introducing element groups, periods, and trends.

**STEM camps and workshops** — Quick visual reference in LiaScript materials without needing to distribute printed tables.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — iframe to hosted component |
| **Server required** | No (CDN-based) |
| **Interactive** | Yes — element selection |
| **Custom styling** | Yes — via `@PeriodicTable.withStyle` |
| **Based on** | Bowserinator Periodic-Table-JSON |
| **License** | MIT |
| **Maintained** | Version 0.0.1 (stable) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/PeriodicTable/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/PeriodicTable/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/PeriodicTable" label="View on GitHub" >}}

---

## Related Templates

- [**KekuleJS**](/blog/kekulejs-chemistry-in-liascript) — 2D/3D molecular structures, CML files, full Kekule.js integration
- [**ChemfigJS**](/blog/chemfigjs-structural-formulas-in-liascript) — structural formulas in chemfig/LaTeX syntax
- [**mec2**](/blog/mec2-physics-simulation-in-liascript) — 2D mechanism and physics simulation for STEM

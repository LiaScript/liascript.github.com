---
title: "ChemfigJS for LiaScript: LaTeX-Style Structural Chemical Formulas in the Browser"
slug: "chemfigjs-structural-formulas-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/herbigm/ChemfigJS"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Chemistry
    - LaTeX
    - STEM
    - No Server
description: "Draw chemical structural formulas using the familiar chemfig LaTeX syntax directly in LiaScript — no LaTeX installation, no image exports, SVG rendered live in the browser by ChemfigJS."
---

Chemistry educators who come from a LaTeX background know [chemfig](https://ctan.org/pkg/chemfig) — the standard package for drawing structural formulas.
The [ChemfigJS template](https://github.com/herbigm/ChemfigJS) by Marcus Herbig brings the chemfig syntax to the web, generating SVG from chemfig-style code directly in the browser.

No LaTeX installation, no image conversion, no external server — just the familiar notation rendered live.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/herbigm/ChemfigJS/master/README.md
-->
```

---

## Macro: `@chemfig` (in fence header)

Place `@chemfig` in the code block header, write the chemfig formula as the content.
The formula is parsed and an SVG is generated and injected into the page.

```` markdown
```text @chemfig
*6(-=-(-OH)=(-(-[::60]OH)=[::-60]O)-=)
```
````

---

## ChemfigJS Syntax

The syntax closely mirrors the LaTeX chemfig package with a few differences.

### Bonds

| Code | Bond Type |
|---|---|
| `-` | Single bond |
| `=` | Double bond |
| `~` | Triple bond |

### Bond Direction

Optional bracket arguments after each bond:

- `:60` — absolute angle (60°)
- `::60` — relative angle (+60° from last bond direction)
- `1` — shortcut: `1 × 45°` = 45°, `3` = 135°, etc.
- Second argument: bond color (e.g. `,red`)

### Atoms and Text Nodes

Write atom symbols directly after bonds: `-C`, `=O`, `-[::60]NH2`.

### Branches

Use parentheses for branches: `-(-[::60]OH)`.

### Rings

Use `*N(...)` for N-membered rings: `*6(...)` for benzene.

### Connecting Distant Atoms

Use `?` to create crosslinks — first occurrence sets anchor, subsequent occurrences connect back.

---

## Examples

### Benzene Ring

```` markdown
```text @chemfig
*6(-=-=-=)
```
````

### Ethanol

```` markdown
```text @chemfig
CH_3-CH_2-OH
```
````

### Pyrimidine

```` markdown
```text @chemfig
*6(-=-(-OH)=(-(-[::60]OH)=[::-60]O)-=)
```
````

---

## Styling

The SVG uses CSS classes for customization. Copy the defaults from `style.css`:

``` css
svg .textNode {
  stroke: white;
  stroke-width: 0.5em;
  paint-order: stroke;
  font-size: 12pt;
}

svg .charge {
  font-size: x-small;
}
```

Configuration constants (edit in the script):
- `bondLength` — length of a single bond (default: 30px)
- `fontSize` — base font size (default: 16px = 12pt)
- `bondSep` — separation of parallel lines in double/triple bonds

---

## Current Limitations

| Feature | Status |
|---|---|
| Single, double, triple bonds | ✅ Supported |
| Rings | ✅ Supported |
| Branches and sub-branches | ✅ Supported |
| Lone pairs and charges | ✅ Supported |
| Anellated rings | ⚠️ Workaround available |
| Polymer brackets | ☐ Not yet |

For anellated rings, draw as spiro compound and use relative bond angles to position correctly.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/herbigm/ChemfigJS/master/README.md" >}}

---

## Use Cases

**Chemistry teachers from LaTeX backgrounds** — Migrate existing course materials that use chemfig formulas to LiaScript without re-drawing anything — just import the template and paste the chemfig code.

**Organic chemistry courses** — Draw reaction mechanisms, functional groups, and multi-step syntheses with the same notation used in textbooks.

**Biochemistry** — Represent amino acid side chains, nucleobases, and metabolic intermediates with structural formulas.

**Open educational resources** — Publish chemistry OER without locked-in vector graphics editors; the formula lives as plain text in the source.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — SVG generated client-side |
| **Server required** | No |
| **Syntax** | chemfig / LaTeX-like |
| **Output** | SVG inline |
| **Community template** | Yes (herbigm, not LiaTemplates org) |
| **License** | CC BY 4.0 |
| **Status** | Version 0.9, actively developed |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/herbigm/ChemfigJS/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/herbigm/ChemfigJS/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/herbigm/ChemfigJS" label="View on GitHub" >}}

---

## Related Templates

- [**KekuleJS**](/blog/kekulejs-chemistry-in-liascript) — 2D/3D molecular structures from CML files with full Kekule.js viewer
- [**PeriodicTable**](/blog/periodictable-interactive-chemistry-in-liascript) — interactive periodic table element
- [**Tikz-Jax**](/blog/tikzjax-latex-diagrams-in-liascript) — full LaTeX/TikZ diagram rendering in the browser

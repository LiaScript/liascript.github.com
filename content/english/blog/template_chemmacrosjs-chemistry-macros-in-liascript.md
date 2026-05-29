---
title: "ChemmacrosJS for LiaScript: Professional Chemistry Notation in Courses"
slug: "chemmacrosjs-chemistry-macros-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/herbigm/ChemmacrosJS"
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

description: "Write professional chemical formulas, reaction equations, GHS hazard pictograms, and H/P safety statements in LiaScript with ChemmacrosJS — a port of the LaTeX Chemmacros package for the browser."
---

Chemistry courses require proper notation: subscripts in molecular formulas, reaction arrows, equilibrium double arrows, and standardized GHS safety statements.
[ChemmacrosJS](https://github.com/herbigm/ChemmacrosJS) by [Marcus Herbig](https://github.com/herbigm) is a LiaScript template that ports core functionality of the LaTeX [Chemmacros](https://ctan.org/pkg/chemmacros) package to the browser.
With a handful of macros you get typeset chemical formulas, aligned reaction equations, GHS pictograms, and formatted H/P statements.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/herbigm/ChemmacrosJS/refs/heads/main/README.md
-->
```

---

## Formulas — `@ch`

Write chemical formulas with automatic sub/superscript formatting:

```markdown
Potassium ferricyanide: @ch(`K3[Fe(CN)6]`)

Sulfuric acid: @ch(`H2SO4`)

Calcium carbonate: @ch(`CaCO3`)

Hydronium ion: @ch(`H3O^+`)

Dichromate ion: @ch(`Cr2O7^{2-}`)
```

Numbers that follow element symbols or closing brackets are automatically subscripted.
Use `^` for superscripts and `^{}` for multi-character superscripts.

Try it live — formulas and a combustion reaction rendered inline:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/herbigm/ChemmacrosJS/refs/heads/main/README.md
-->

# Chemical Notation with ChemmacrosJS

Sulfuric acid: @ch(`H2SO4`)

Potassium ferricyanide: @ch(`K3[Fe(CN)6]`)

Hydronium ion: @ch(`H3O^+`)

Dichromate ion: @ch(`Cr2O7^{2-}`)

**Combustion of methane:**

@reaction(`CH4 + 2 O2 -> CO2 + 2 H2O`)

**Haber-Bosch synthesis:**

@reaction(`N2 + 3 H2 <=> 2 NH3`)
{{< /liascript >}}

---

## Reaction equations — `@reaction`

Single-line equation with automatic arrow rendering:

```markdown
@reaction(`2 H2 + O2 -> 2 H2O`)

@reaction(`N2 + 3 H2 <=> 2 NH3`)

@reaction(`Fe^{3+} + 3 OH^- -> Fe(OH)3 v`)
```

- `->` renders as a forward reaction arrow →
- `<=>` renders as an equilibrium double arrow ⇌
- `v` renders as a downward arrow ↓ (precipitate)
- `^` renders as an upward arrow ↑ (gas escape)

---

## Aligned multi-step reactions — `@reactions`

```markdown
@reactions(`
  CH4 + 2 O2 -> CO2 + 2 H2O
  CO2 + H2O <=> H2CO3
  H2CO3 <=> H^+ + HCO3^-
`)
```

Equations are stacked and aligned on the reaction arrow.

---

## GHS pictograms — `@ghspic`

Display standardized GHS hazard pictograms:

```markdown
@ghspic(`explos`)       <!-- explosive -->
@ghspic(`flame`)        <!-- flammable -->
@ghspic(`acid`)         <!-- corrosive -->
@ghspic(`health`)       <!-- health hazard -->
@ghspic(`environ`)      <!-- environmental hazard -->
@ghspic(`explos flame`) <!-- multiple pictograms -->
```

---

## H and P statements — `@hstatements` / `@pstatements`

Render standardized GHS hazard and precautionary statements:

```markdown
**Hazard statements:**
@hstatements(`302-331-315`)

**Precautionary statements:**
@pstatements(`201-273-501`)
```

Statements are looked up from the built-in statement library and rendered as formatted text.

---

## Example: Laboratory Safety Data Sheet

```markdown
<!--
import: https://raw.githubusercontent.com/herbigm/ChemmacrosJS/refs/heads/main/README.md
-->

# Sodium Hypochlorite — @ch(`NaOCl`)

## Properties

| Property | Value |
|---|---|
| Molecular formula | @ch(`NaOCl`) |
| Molar mass | 74.44 g/mol |
| Density | 1.21 g/cm^3 |

---

## Reactions

**Decomposition on heating:**

@reaction(`2 NaOCl -> 2 NaCl + O2 ^`)

**Reaction with @ch(`CO2`) from air:**

@reaction(`2 NaOCl + CO2 + H2O -> Na2CO3 + 2 HOCl`)

**Chlorine release in acid:**

@reaction(`NaOCl + 2 HCl -> NaCl + Cl2 ^ + H2O`)

---

## Safety Information

@ghspic(`acid oxidiz health environ`)

**H-statements:**
@hstatements(`290-314-335-400-410`)

**P-statements:**
@pstatements(`260-273-280-301+330+331-309+310`)

---

## Equilibrium Quiz

The reaction @ch(`N2 + 3H2 <=> 2NH3`) is the:

[( )] Haber-Weiss process
[(X)] Haber-Bosch process
[( )] Fischer-Tropsch process
[( )] Ostwald process
```

Try the full Safety Data Sheet live — typeset formulas, reaction equations, GHS pictograms, and a quiz on one slide:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/herbigm/ChemmacrosJS/refs/heads/main/README.md
-->

# Sodium Hypochlorite — @ch(`NaOCl`)

## Reactions

**Decomposition on heating:**

@reaction(`2 NaOCl -> 2 NaCl + O2 ^`)

**Chlorine release in acid:**

@reaction(`NaOCl + 2 HCl -> NaCl + Cl2 ^ + H2O`)

## Multi-step: Carbon dioxide absorption

@reactions(`
  CO2 + H2O <=> H2CO3
  H2CO3 <=> H^+ + HCO3^-
`)

## Safety

@ghspic(`acid oxidiz health environ`)

**H-statements:** @hstatements(`290-314-335-400-410`)

**P-statements:** @pstatements(`260-273-280`)

## Quiz

The reaction @ch(`N2 + 3H2 <=> 2NH3`) is the:

[( )] Haber-Weiss process
[(X)] Haber-Bosch process
[( )] Fischer-Tropsch process
[( )] Ostwald process
{{< /liascript >}}

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/herbigm/ChemmacrosJS/refs/heads/main/README.md" >}}

---

## Use Cases

**Secondary and university chemistry** — Proper notation for all formula types without requiring LaTeX or a typesetting environment.

**Laboratory manuals** — Inline GHS pictograms, H/P statements, and reaction equations in one consistent document.

**Chemical engineering courses** — Multi-step reaction pathways formatted with aligned equations.

**Revision materials** — Students see professionally typeset formulas instead of plain-text approximations like H2SO4 or Fe3+.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — JavaScript rendering |
| **Server required** | No |
| **Key macros** | `@ch`, `@reaction`, `@reactions`, `@ghspic`, `@hstatements`, `@pstatements` |
| **Sub/superscript** | Automatic (numbers after elements/brackets) |
| **Arrows** | `->` forward, `<=>` equilibrium, `v` precipitate |
| **GHS pictograms** | Built-in library |
| **H/P statements** | Built-in statement library |
| **Author** | Marcus Herbig (herbigm) |
| **License** | MIT |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/herbigm/ChemmacrosJS/refs/heads/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/herbigm/ChemmacrosJS/refs/heads/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/herbigm/ChemmacrosJS" label="View on GitHub" >}}

---

## Related Templates

- [**KekuleJS**](/blog/kekule-molecular-editor-in-liascript) — 2D molecular structure editor and renderer
- [**JSXGraph**](/blog/jsxgraph-mathematics-in-liascript) — general-purpose interactive math for physical chemistry
- [**lia-Mathe**](/blog/lia-mathe-fraction-quizzes-in-liascript) — visual fraction exercises for math
- [**AVR8js-mem**](/blog/avr8js-mem-memory-visualization-in-liascript) — microcontroller simulation for electronics courses

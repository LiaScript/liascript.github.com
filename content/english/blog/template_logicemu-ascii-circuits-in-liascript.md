---
title: "LogicEmu for LiaScript: ASCII Logic Circuits That Actually Run"
slug: "logicemu-ascii-circuits-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/LogicEmu"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Simulation
    - Engineering
    - Computer Science
    - No Server
description: "Draw logic circuits as ASCII diagrams and run them live in LiaScript — using the LogicEmu template backed by Lode Vandevenne's logicemu simulator. No JSON, no schematic editor needed."
---

Most circuit simulation tools require a graphical schematic editor.
[LogicEmu](https://lodev.org/logicemu/) takes a different approach: logic circuits are written as ASCII art — and they simulate.
The [LogicEmu template](https://github.com/LiaTemplates/LogicEmu) integrates this engine into LiaScript, letting instructors embed runnable circuits directly in course content as plain text.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/logicemu/master/README.md
-->
```

---

## Macro 1: `@LogicEmu.run` — Static Simulation (in fence header)

Place `@LogicEmu.run` in the header of a code block.
The ASCII circuit renders in an iframe and runs automatically.
The code is not shown to the student — only the simulation.

```` markdown
```   @LogicEmu.run
   s s s s s s s s   (input byte)
   * * * * * * * *
   e e e e e e e e   (XOR with carry)
   * * * * * * * *
   l l l l l l l l   (output byte)
```
````

---

## Macro 2: `@LogicEmu.eval` — Editable Circuit (end-of-block)

Attach `@LogicEmu.eval` at the end of a code block to keep the ASCII source visible and editable.
Students can modify the circuit and re-run it.

```` markdown
```
   s***>a****>l
```
@LogicEmu.eval
````

---

## ASCII Circuit Notation

LogicEmu uses a compact ASCII language for circuits.
Each character has a specific meaning:

### Components

| Char | Meaning |
|---|---|
| `s` | Switch (input, toggle with click) |
| `l` | Lamp/LED (output) |
| `a` | AND gate |
| `o` | OR gate |
| `e` | XOR gate |
| `A` | NAND gate |
| `O` | NOR gate |
| `E` | XNOR gate |
| `n` | NOT gate |

### Wires

| Char | Meaning |
|---|---|
| `-` | Horizontal wire |
| `|` | Vertical wire |
| `>` | Right-facing connection |
| `^` | Upward connection |
| `v` | Downward connection |
| `<` | Left-facing connection |
| `*` | Junction / crossing |
| `+` | Wire cross (no connection) |

### Example: Switch → AND → Lamp

```
s****>a***>l
      *
s*****
```

Two switches feed an AND gate; the output drives a lamp.

---

## Example: Half Adder

```
s**>a**>l   (sum bit)
s*>e
   *
   *>l       (carry bit)
```

---

## Example: SR Latch

```
s*>o*>l
   * *
   * v
   *>o*>l
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/LogicEmu/master/README.md" >}}

---

## Use Cases

**Computer science fundamentals** — Teach combinational logic with tactile, clickable ASCII circuits.
No diagram editor, no PNG exports — just code and simulation.

**Digital systems textbooks** — Embed half-adders, full-adders, multiplexers, and flip-flops directly as running examples, not static images.

**Interactive lectures** — Use `@LogicEmu.eval` so students can modify a circuit and observe how the output changes.

**Hobbyists and self-learners** — Write circuits in the same plain-text style as logicemu.com without leaving LiaScript.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — iframe via base64/LZ77 URL |
| **Server required** | No |
| **Circuit format** | ASCII art |
| **Interactive** | Yes — clickable switches |
| **Editable** | Yes — via `@LogicEmu.eval` |
| **Based on** | logicemu by Lode Vandevenne (lodev.org) |
| **License** | MIT |
| **Maintained** | Version 0.0.4 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/LogicEmu/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/LogicEmu/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/LogicEmu" label="View on GitHub" >}}

---

## Related Templates

- [**DigiSim**](/blog/digisim-digital-circuits-in-liascript) — JSON/DSL-based digital logic simulation with full DigitalJS backend
- [**ExplainGit**](/blog/explaingit-git-visualization-in-liascript) — animated git repository visualization
- [**AVR8js**](/blog/avr8js-arduino-simulator-in-liascript) — AVR/Arduino simulation for embedded courses

---
title: "DigiSim for LiaScript: Interactive Digital Circuit Simulation"
slug: "digisim-digital-circuits-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/DigiSim"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Simulation
    - Engineering
    - Computer Science
    - STEM
    - No Server
liascript: true

description: "Simulate digital logic circuits — from simple gates to D-latches and priority encoders — directly in LiaScript using the DigiSim template. Define circuits in JSON or JavaScript DSL."
---

Teaching digital logic requires students to interact with circuits, not just read about them.
The [DigiSim template](https://github.com/LiaTemplates/DigiSim) integrates [DigitalJS](https://github.com/tilk/digitaljs) into LiaScript, enabling interactive logic circuit simulations with clickable buttons, lamps, and animated signal flow — right inside the course material.

Circuits can be defined in two ways: as JSON (exported from [Yosys2digitaljs](https://digitaljs.tilk.eu/)) or using a simple JavaScript DSL.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/DigiSim/master/README.md
-->
```

---

## Macro 1: `@DigiSim.evalJson` — Render from JSON

Place `@DigiSim.evalJson` at the start of a JSON code block to render a circuit from DigitalJS-format JSON.
The circuit runs immediately and can be interacted with (click buttons, observe lamps).

```` markdown
```json @DigiSim.evalJson
{
  "devices": {
    "dev0": { "label": "s", "position": {"x":0,"y":20}, "celltype": "$button", "propagation": 0 },
    "dev1": { "label": "r", "position": {"x":155,"y":75}, "celltype": "$button", "propagation": 0 },
    "dev2": { "label": "q", "position": {"x":480,"y":55}, "celltype": "$lamp", "propagation": 1 },
    "dev3": { "label": "nq", "position": {"x":325,"y":0}, "celltype": "$lamp", "propagation": 1 },
    "dev6": { "label": "NOR1", "position": {"x":310,"y":50}, "celltype": "$nor", "propagation": 1, "bits": 1 },
    "dev7": { "label": "NOR2", "position": {"x":140,"y":15}, "celltype": "$nor", "propagation": 1, "bits": 1 }
  },
  "connectors": [
    {"from":{"id":"dev0","port":"out"},"to":{"id":"dev7","port":"in1"},"name":"s","vertices":[]},
    {"from":{"id":"dev1","port":"out"},"to":{"id":"dev6","port":"in1"},"name":"r","vertices":[]},
    {"from":{"id":"dev6","port":"out"},"to":{"id":"dev2","port":"in"},"name":"q","vertices":[]},
    {"from":{"id":"dev6","port":"out"},"to":{"id":"dev7","port":"in2"},"name":"q","vertices":[]},
    {"from":{"id":"dev7","port":"out"},"to":{"id":"dev3","port":"in"},"name":"nq","vertices":[]},
    {"from":{"id":"dev7","port":"out"},"to":{"id":"dev6","port":"in2"},"name":"nq","vertices":[]}
  ],
  "subcircuits": {}
}
```
````

Try it live — click the **S** and **R** buttons and observe the SR latch switching state:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/DigiSim/master/README.md
-->

# SR Latch

```json @DigiSim.evalJson
{
  "devices": {
    "dev0": { "label": "s", "position": {"x":0,"y":20}, "celltype": "$button", "propagation": 0 },
    "dev1": { "label": "r", "position": {"x":155,"y":75}, "celltype": "$button", "propagation": 0 },
    "dev2": { "label": "q", "position": {"x":480,"y":55}, "celltype": "$lamp", "propagation": 1 },
    "dev3": { "label": "nq", "position": {"x":325,"y":0}, "celltype": "$lamp", "propagation": 1 },
    "dev6": { "label": "NOR1", "position": {"x":310,"y":50}, "celltype": "$nor", "propagation": 1, "bits": 1 },
    "dev7": { "label": "NOR2", "position": {"x":140,"y":15}, "celltype": "$nor", "propagation": 1, "bits": 1 }
  },
  "connectors": [
    {"from":{"id":"dev0","port":"out"},"to":{"id":"dev7","port":"in1"},"name":"s","vertices":[]},
    {"from":{"id":"dev1","port":"out"},"to":{"id":"dev6","port":"in1"},"name":"r","vertices":[]},
    {"from":{"id":"dev6","port":"out"},"to":{"id":"dev2","port":"in"},"name":"q","vertices":[]},
    {"from":{"id":"dev6","port":"out"},"to":{"id":"dev7","port":"in2"},"name":"q","vertices":[]},
    {"from":{"id":"dev7","port":"out"},"to":{"id":"dev3","port":"in"},"name":"nq","vertices":[]},
    {"from":{"id":"dev7","port":"out"},"to":{"id":"dev6","port":"in2"},"name":"nq","vertices":[]}
  ],
  "subcircuits": {}
}
```
{{< /liascript >}}

---

## Macro 2: `@DigiSim.runJson` — Static View from JSON

Same as `@DigiSim.evalJson` but the JSON is in a standalone code block without a macro header — the macro is attached at the end.

```` markdown
``` json
{ ... circuit JSON ... }
```
@DigiSim.runJson
````

---

## Macro 3: `@DigiSim.eval` — JavaScript DSL

Write circuits using a simple JavaScript-like DSL instead of raw JSON.
The available gate functions and component constructors are:

**Logic gates:**

``` javascript
AND(inputs, outputs, label, bits=1)
NAND(inputs, outputs, label, bits=1)
OR(inputs, outputs, label, bits=1)
NOR(inputs, outputs, label, bits=1)
XOR(inputs, outputs, label, bits=1)
XNOR(inputs, outputs, label, bits=1)
NOT(inputs, outputs, label, bits=1)
```

**I/O components:**

``` javascript
Button(output, label)       // clickable input switch
Lamp(input, label)          // output indicator light
NumberInput(output, label, bitsOut, base)
NumberOutput(input, label, bitsIn, base)
NumberConstant(output, label, value)
```

**Wiring:**

``` javascript
wire(outputName, inputName, label)
```

**Example — AND, OR, XOR chain:**

```` markdown
``` js @DigiSim.eval
AND(["and1", "and2"], ["and3"], "AND1");
OR(["or1", "or2"], ["or3"], "OR1");
XOR(["xor1", "xor2"], ["xor3"], "XOR1");

Button("btn1", ""); Button("btn2", "");
Button("btn3", ""); Button("btn4", "");
Lamp("lmp1", "Main Output");

wire("btn1", "and1"); wire("btn2", "and2");
wire("btn3", "or1");  wire("btn4", "or2");
wire("and3", "xor1"); wire("or3", "xor2");
wire("xor3", "lmp1");
```
````

Try it live — toggle the four buttons and trace the signal through the gates:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/DigiSim/master/README.md
-->

# AND → OR → XOR Gate Chain

``` js @DigiSim.eval
AND(["and1", "and2"], ["and3"], "AND1");
OR(["or1", "or2"], ["or3"], "OR1");
XOR(["xor1", "xor2"], ["xor3"], "XOR1");

Button("btn1", ""); Button("btn2", "");
Button("btn3", ""); Button("btn4", "");
Lamp("lmp1", "Main Output");

wire("btn1", "and1"); wire("btn2", "and2");
wire("btn3", "or1");  wire("btn4", "or2");
wire("and3", "xor1"); wire("or3", "xor2");
wire("xor3", "lmp1");
```
{{< /liascript >}}

---

## Macro 4: `@DigiSim.insertCircuit(name)` — Pre-defined Circuit

Pre-define circuits in `@onload` using the `finalizeJSON(name)` function, then insert them anywhere with:

``` markdown
@DigiSim.insertCircuit(sr_latch)
```

---

## Getting JSON from Verilog

To use real circuits in `@DigiSim.evalJson`:
1. Go to [Yosys2digitaljs](https://digitaljs.tilk.eu/)
2. Write or paste your Verilog code
3. Click the save icon to download the JSON
4. Paste the JSON into your LiaScript code block

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/DigiSim/master/README.md" >}}

---

## Use Cases

**Computer science fundamentals** — Teach Boolean logic with clickable AND, OR, XOR gates.
Students toggle buttons and observe the output, experiencing gate behavior directly.

**Digital systems courses** — Build and simulate combinational and sequential circuits: half-adders, full-adders, multiplexers, D-latches, SR-latches.

**TVET / electronics training** — Use pre-built JSON circuits exported from Verilog for vocational electronics training.

**Exam preparation** — Embed circuits as exercises where students predict output before clicking.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — fully client-side |
| **Server required** | No |
| **Input formats** | DigitalJS JSON, JavaScript DSL |
| **Verilog import** | Via Yosys2digitaljs (external tool) |
| **Interactive** | Yes — buttons, lamps, signal animation |
| **Based on** | DigitalJS by Tilk / Yosys2digitaljs |
| **License** | MIT |
| **Maintained** | Version 0.0.1 (stable) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/DigiSim/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/DigiSim/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/DigiSim" label="View on GitHub" >}}

---

## Related Templates

- [**LogicEmu**](/blog/logicemu-ascii-circuits-in-liascript) — ASCII-diagram-based logic simulation (simpler, no JSON needed)
- [**AVR8js**](/blog/avr8js-arduino-simulator-in-liascript) — AVR microcontroller simulation for digital hardware
- [**mec2**](/blog/mec2-physics-simulation-in-liascript) — 2D mechanical and physics simulation
- [**gcode-preview**](/blog/gcode-preview-cnc-in-liascript) — G-Code visualization for CNC/3D printing

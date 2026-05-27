---
title: "MicroBit-Simulator for LiaScript: Teach MicroPython Without a Physical Device"
slug: "microbit-simulator-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/MicroBit-Simulator"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Simulation
    - Programming
    - Python
    - TVET
    - No Server
    - STEM

description: "Simulate a BBC micro:bit and run MicroPython code directly inside your LiaScript course — no hardware, no server, just a browser."
template:
    repo: "https://github.com/LiaTemplates/MicroBit-Simulator"
    raw: "https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md"
    demo: "https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md"
    liveeditor: "https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md"
    difficulty: "Beginner"
    audience:
        - Teachers
        - Students
        - TVET
    license: "CC0-1.0"
---

The [BBC micro:bit](https://microbit.org/) is one of the most popular physical computing boards in schools worldwide.
With the [MicroBit-Simulator template](https://github.com/LiaTemplates/MicroBit-Simulator), you can bring it directly into your LiaScript course — no hardware, no installation, no classroom set of devices needed.

Students see a fully interactive micro:bit simulator in the browser, press its buttons, read sensor values, and run real [MicroPython](https://micropython.org/) code.
All they need is a URL.

---

## What is the MicroBit-Simulator?

The template embeds the [python-simulator.usermbit.org](https://python-simulator.usermbit.org) micro:bit emulator into a LiaScript code block.
When a learner clicks **Run**, their MicroPython code is flashed onto the simulated device and executes immediately.

The simulator faithfully reproduces the micro:bit's hardware interfaces:

- LED display (5×5 grid, scrolling text, pixel access)
- Buttons A and B
- Accelerometer, compass, temperature sensor
- Microphone and speaker (sound playback, sound effects)
- Radio communication
- Data logging
- MicroPython `music` and `speech` modules

Two macros are available: one for the bare simulator, one with an additional sensor control panel.

---

## Quick Start

Add this to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md
persistent: true
-->
```

> **Why `persistent: true`?**
> Without it, LiaScript destroys and recreates slide content when navigating between sections.
> Setting `persistent: true` keeps the simulator running while you browse the course.

Both macros are now available anywhere in your document.

---

## Basic Simulator: `@microbit`

Attach `@microbit` below any MicroPython code block to embed the simulator.
The learner activates it on first use, then interacts with the virtual device.

```` markdown
``` python
from microbit import *

while True:
    if button_a.was_pressed():
        display.show('A')
    if button_b.was_pressed():
        display.show('B')
    sleep(100)
```
@microbit
````

Try it live — press the virtual buttons:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md
persistent: true
-->

# Button Demo

``` python
from microbit import *

while True:
    if button_a.was_pressed():
        display.show('A')
    if button_b.was_pressed():
        display.show('B')
    sleep(100)
```
@microbit
{{< /liascript >}}

---

## Sensor Panel: `@microbit.withSensorUI`

`@microbit.withSensorUI` adds an interactive sensor panel below the simulator.
Learners can drag sliders and change dropdowns to simulate light levels, acceleration, temperature, microphone input, and more — and immediately see how their code responds.

```` markdown
``` python
from microbit import *

while True:
    level = display.read_light_level()
    print("Light:", level)
    if level < 50:
        display.show(Image.ASLEEP)
    else:
        display.show(Image.HAPPY)
    sleep(500)
```
@microbit.withSensorUI
````

Try it live — adjust the light sensor slider and watch the display react:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md
persistent: true
-->

# Sensor Demo

``` python
from microbit import *

while True:
    level = display.read_light_level()
    print("Light:", level)
    if level < 50:
        display.show(Image.ASLEEP)
    else:
        display.show(Image.HAPPY)
    sleep(500)
```
@microbit.withSensorUI
{{< /liascript >}}

---

## Music and Audio

The MicroPython `music` module is fully supported — the simulator plays tones through the browser's audio system:

```` markdown
``` python
import music

music.play(['c4:4', 'e4:4', 'g4:4', 'c5:8'])
```
@microbit
````

---

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md
persistent: true
-->

# Music and Audio

``` python
import music

music.play(['c4:4', 'e4:4', 'g4:4', 'c5:8'])
```
@microbit
{{< /liascript >}}

## Full Template Demo

The complete README is a self-documenting LiaScript course with all examples — buttons, sensors, audio, display, compass, radio, data logging, and more:

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md" >}}

---

## Use Cases

**Physical computing and TVET** — Teach embedded programming concepts without a budget for hardware.
Classes in schools, vocational training centres, or makerspaces can run the entire course in a browser.

**Flipped classroom preparation** — Give students a simulator to experiment with before they arrive at the lab with physical devices.
They arrive already familiar with the API.

**Remote and online education** — Students at home follow the same exercises as in-class students.
No shipping, no lost devices, no "my micro:bit is broken" situations.

**Introductory MicroPython** — The BBC micro:bit's Python API is a well-designed teaching tool.
With the simulator, you can introduce loops, conditionals, functions, and events through direct hardware interaction.

**Sensor data and data literacy** — The `@microbit.withSensorUI` macro makes it easy to explore how sensor values drive program logic — ideal for cross-curricular science and computing lessons.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — no backend, no server |
| **MicroPython version** | BBC micro:bit MicroPython (via usermbit.org) |
| **Simulated hardware** | Buttons, display, accelerometer, compass, microphone, speaker, radio, temperature |
| **External dependency** | Simulator iframe loaded from python-simulator.usermbit.org |
| **Offline capable** | No — requires the simulator service to be reachable |
| **Interactive editing** | Yes — learners can modify and re-run code |
| **Recommended setting** | `persistent: true` in course header |
| **License** | CC0-1.0 |
| **Maintained** | Yes — LiaTemplates organisation |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/MicroBit-Simulator/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/MicroBit-Simulator" label="View on GitHub" >}}

---

## Related Templates

- [**Pyodide**](https://github.com/LiaTemplates/Pyodide) — full CPython in the browser for data science, numpy, matplotlib, and general Python courses
- [**AVR8js**](https://github.com/LiaTemplates/AVR8js) — AVR microcontroller simulator (Arduino-compatible) for electronics and embedded systems
- [**gcode-preview**](https://github.com/LiaTemplates/gcode-preview) — visualise and edit G-Code for 3D printing and CNC in the browser
- [**CodeRunner**](https://github.com/LiaScript/CodeRunner) — server-side execution for 20+ languages including Python, Java, C, and Ruby

---
title: "AVR8js-mem for LiaScript: Memory Register Visualization for AVR Microcontrollers"
slug: "avr8js-mem-memory-visualization-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/fjangfaragesh/AVR8js-mem"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Embedded Systems
    - Electronics
    - Programming
    - STEM
liascript: true

description: "Simulate Arduino/AVR8 programs in LiaScript with live memory register readout — AVR8js-mem extends the AVR8js template with configurable memory visualization: binary, hex, uint, custom format, or time-series diagrams."
---

The [AVR8js template](/blog/avr8js-arduino-simulation-in-liascript) lets you run Arduino C++ code in the browser with Wokwi components.
[AVR8js-mem](https://github.com/fjangfaragesh/AVR8js-mem) by [Fabian Bär](https://github.com/fjangfaragesh) extends it with a key teaching feature: real-time memory register visualization.
After each simulation cycle, you can display the value of any memory register in binary, hexadecimal, unsigned integer, or custom format — and even plot the values over time as a live diagram.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/fjangfaragesh/AVR8js-mem/main/README.lia.md
-->
```

> The LiaScript import uses `README.lia.md`, not `README.md`.

---

## Memory visualization elements

Place `<memout-element>` custom elements in your HTML to display register values live during simulation:

```html
<memout-element type="bin"    address="0x25" label="PORTB (binary)"></memout-element>
<memout-element type="hex"    address="0x25" label="PORTB (hex)"></memout-element>
<memout-element type="uint"   address="0x25" label="PORTB (decimal)"></memout-element>
<memout-element type="custom" address="0x25" label="PORTB (custom)" bits="76543210"></memout-element>
```

For time-series diagrams, use `diagram` or `diagram2`:

```html
<memout-element type="diagram"  address="0x25" label="PORTB over time"></memout-element>
<memout-element type="diagram2" address="0x25" label="PORTB (alt)"></memout-element>
```

The `address` attribute takes an AVR I/O register address in hex.
Common addresses: `0x25` = PORTB, `0x2B` = PORTD, `0x26` = DDRB, `0x2C` = DDRD.

---

## Running a simulation

Use `compileAndRun` to start the simulation from a script block:

```javascript
compileAndRun(
  codeString,   // The Arduino C++ source code (string)
  divId,        // DOM element ID containing the Wokwi components
  cyclesPerFrame,
  frameDelay,
  numCycles,
  callback      // Optional: called after simulation ends
)
```

---

## Full Example: LED Blink with Register Display

```markdown
<!--
import: https://raw.githubusercontent.com/fjangfaragesh/AVR8js-mem/main/README.lia.md
-->

# AVR Memory Visualization

## Blinking LED with live PORTB readout

``` cpp    Arduino.cpp
void setup() {
  DDRB = 0xFF;   // Set all PORTB pins as output
}

void loop() {
  PORTB = 0xFF;  // All LEDs on
  delay(500);
  PORTB = 0x00;  // All LEDs off
  delay(500);
}
```
<script>
  compileAndRun(`@input`, "wokwi", 100000, 16, 50000000);
</script>

<div id="wokwi">
  <wokwi-led color="red"    pin="13" label="13"></wokwi-led>
  <wokwi-led color="green"  pin="12" label="12"></wokwi-led>
  <wokwi-led color="blue"   pin="11" label="11"></wokwi-led>
</div>

**PORTB (address 0x25) live values:**

<memout-element type="bin"    address="0x25" label="Binary"></memout-element>
<memout-element type="hex"    address="0x25" label="Hexadecimal"></memout-element>
<memout-element type="uint"   address="0x25" label="Unsigned int"></memout-element>
<memout-element type="diagram" address="0x25" label="Over time"></memout-element>
```

---

## Example: Shift register pattern

```markdown
<!--
import: https://raw.githubusercontent.com/fjangfaragesh/AVR8js-mem/main/README.lia.md
-->

# Binary Counter

``` cpp Arduino.cpp
uint8_t counter = 0;

void setup() {
  DDRB = 0xFF;  // all PORTB as output
}

void loop() {
  PORTB = counter;
  counter++;
  delay(200);
}
```
<script>
  compileAndRun(`@input`, "wokwi2", 100000, 16, 50000000);
</script>

<div id="wokwi2">
  <wokwi-led color="red"    pin="13" label="bit7"></wokwi-led>
  <wokwi-led color="orange" pin="12" label="bit6"></wokwi-led>
  <wokwi-led color="yellow" pin="11" label="bit5"></wokwi-led>
  <wokwi-led color="green"  pin="10" label="bit4"></wokwi-led>
  <wokwi-led color="blue"   pin="9"  label="bit3"></wokwi-led>
  <wokwi-led color="purple" pin="8"  label="bit2"></wokwi-led>
  <wokwi-led color="white"  pin="7"  label="bit1"></wokwi-led>
  <wokwi-led color="gray"   pin="6"  label="bit0"></wokwi-led>
</div>

**Counter register state:**

<memout-element type="custom"  address="0x25" label="PORTB bits" bits="76543210"></memout-element>
<memout-element type="diagram2" address="0x25" label="PORTB diagram"></memout-element>
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/fjangfaragesh/AVR8js-mem/main/README.lia.md" >}}

---

## Use Cases

**Computer architecture education** — Show students how bit manipulation commands change register values in real time.

**Embedded systems courses** — Correlate C++ code with hardware output (LEDs) and register state simultaneously.

**Binary/hex conversion exercises** — Simulate a value and let students verify the binary, hex, and decimal representations side by side.

**Signal timing analysis** — Use `diagram` mode to visualize the timing pattern of blinking or PWM signals over simulation time.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — WebAssembly (AVR8js) |
| **Server required** | No |
| **Extends** | LiaTemplates/AVR8js |
| **Key element** | `<memout-element>` custom HTML element |
| **Display types** | `bin`, `hex`, `uint`, `custom`, `diagram`, `diagram2` |
| **Components** | Wokwi web components (LEDs, buttons, etc.) |
| **Import file** | `README.lia.md` (not `README.md`) |
| **Author** | fjangfaragesh (Fabian Bär) |
| **License** | CC0-1.0 |
| **Status** | Older project (~4 years), stable |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://fjangfaragesh.github.io/AVR8js-mem/README.lia.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/fjangfaragesh/AVR8js-mem/main/README.lia.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/fjangfaragesh/AVR8js-mem" label="View on GitHub" >}}

---

## Related Templates

- [**AVR8js**](/blog/avr8js-arduino-simulation-in-liascript) — base Arduino/AVR8 simulation template
- [**ChemmacrosJS**](/blog/chemmacrosjs-chemistry-macros-in-liascript) — chemistry notation for STEM courses
- [**custom-code-imports**](/blog/custom-code-imports-external-files-in-liascript) — load external code files into executable blocks
- [**lia-coordinate**](/blog/lia-coordinate-interactive-math-plots-in-liascript) — interactive math diagrams for STEM

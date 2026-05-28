---
title: "WebSerial for LiaScript: Connect Your Code Editor to Real Hardware"
slug: "webserial-hardware-connection-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/WebSerial"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Engineering
    - TVET
    - WebSerial
    - Developers
description: "Use the WebSerial template to send Python/MicroPython code directly from a LiaScript code block to a connected microcontroller (ESP32, Raspberry Pi Pico) via Chrome's Web Serial API."
---

Bridging the gap between learning materials and real hardware is one of the hardest challenges in TVET and embedded systems education.
The [WebSerial template](https://github.com/LiaTemplates/WebSerial) connects the LiaScript code editor directly to a microcontroller via Chrome's [Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API).

Write Python code in the slide, click run, and the code is sent to a connected MicroPython device (ESP32, Raspberry Pi Pico, BBC micro:bit).
Output appears in the integrated terminal, and the terminal accepts interactive input.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/webserial/main/README.md
-->
```

**Requirement:** Chrome or Edge browser (Web Serial API is not available in Firefox or Safari).

---

## Macro: `@WebSerial` (end-of-block macro)

Attach `@WebSerial` at the end of any code block to add a serial connection and terminal.

```` markdown
```python
for i in range(10):
    print("Hello World", i)
```
@WebSerial
````

When the student clicks **Run**:
1. Chrome prompts to select a serial port (e.g. `/dev/ttyUSB0`, `COM3`)
2. The code is sent to the device in MicroPython paste mode (`Ctrl-E` / `Ctrl-D`)
3. Output streams back into the terminal
4. The terminal accepts interactive input (typed lines are sent to the REPL)

---

## How It Works

The template uses MicroPython's **paste mode** (REPL protocol):
1. Send `Ctrl-C` twice to interrupt any running code
2. Send `Ctrl-E` to enter paste mode
3. Stream all code lines with `CR+LF`
4. Send `Ctrl-D` to execute
5. Read output until the REPL prompt (`>>>`) appears

The baud rate is fixed at 115200 — the default for most MicroPython boards.

---

## Example: Blink LED

```` markdown
```python
from machine import Pin
from time import sleep

led = Pin(2, Pin.OUT)  # GPIO2 on ESP32

for _ in range(10):
    led.value(1)
    sleep(0.5)
    led.value(0)
    sleep(0.5)

print("Done blinking!")
```
@WebSerial
````

---

## Example: Read Temperature Sensor

```` markdown
```python
from machine import ADC, Pin
import time

adc = ADC(Pin(34))
adc.atten(ADC.ATTN_11DB)

for i in range(5):
    raw = adc.read()
    voltage = raw / 4095 * 3.3
    print(f"Reading {i}: raw={raw}, voltage={voltage:.2f}V")
    time.sleep(1)
```
@WebSerial
````

---

## Cleanup and Reconnect

The terminal includes a **stop** button that:
- Cancels the active read loop
- Closes the serial port cleanly
- Resets all connection variables

Clicking run again will prompt for port selection anew.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/WebSerial/master/README.md" >}}

---

## Use Cases

**TVET embedded systems** — Write and test MicroPython programs for real microcontrollers directly from learning materials, removing the need for separate IDEs.

**IoT workshops** — Live-code ESP32 or Pi Pico projects during class, with output visible in the slide terminal.

**Physical computing courses** — Control motors, sensors, displays, and LEDs with code written in the course and executed on the board immediately.

**Lab experiments** — Read sensor values in real time during hardware labs, with code pre-provided as editable LiaScript blocks.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Chrome/Edge only (Web Serial API) |
| **Firefox/Safari** | Not supported |
| **Hardware required** | Yes — MicroPython device (ESP32, Pi Pico, etc.) |
| **Protocol** | MicroPython paste mode (115200 baud) |
| **Interactive terminal** | Yes — supports live input |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/webserial/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/webserial/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/WebSerial" label="View on GitHub" >}}

---

## Related Templates

- [**AVR8js**](/blog/avr8js-arduino-simulator-in-liascript) — simulate AVR/Arduino in the browser (no hardware needed)
- [**MicroBit-Simulator**](/blog/microbit-simulator-in-liascript) — BBC micro:bit simulation with MicroPython
- [**CodeRunner**](/blog/coderunner-multi-language-execution-in-liascript) — server-side code execution for 20+ languages
- [**Pyodide**](/blog/pyodide-python-in-liascript) — Python in the browser via WebAssembly

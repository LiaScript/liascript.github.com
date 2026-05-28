---
title: "AVR8js for LiaScript: Simulate Arduino and AVR Microcontrollers in the Browser"
slug: "avr8js-arduino-simulator-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/AVR8js"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Simulation
    - Engineering
    - TVET

description: "Use the AVR8js template to simulate Arduino sketches and AVR microcontroller programs directly in your LiaScript courses — complete with LEDs, buttons, displays, and serial output."
---

Teaching embedded systems and Arduino programming typically requires physical hardware: boards, LEDs, cables, and a lab environment.
The [AVR8js template](https://github.com/LiaTemplates/AVR8js) removes that requirement entirely.

Built on the [AVR8js microcontroller emulator](https://avr8js.netlify.app) and [Wokwi web components](https://wokwi.com), it allows you to write Arduino sketches in your LiaScript course and simulate them in the browser — complete with virtual LEDs, push buttons, LCD displays, NeoPixels, servos, sensors, and serial output.

> **Note:** Sketch code is compiled by the [Wokwi build service](https://hexi.wokwi.com/build).
> An internet connection is required for compilation.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/AVR8js/main/README.md
-->
```

Three macros: `@AVR8js.sketch` for simple sketches, `@AVR8js.project` for multi-file projects, and `@AVR8js.asm` for AVR assembly.

---

## Macro 1: `@AVR8js.sketch` — Run an Arduino Sketch

`@AVR8js.sketch` is the simplest macro.
Attach it to a code block containing a complete `sketch.ino` Arduino program.
The code is compiled and run in a simulated Arduino Uno environment.

```` markdown
```c    sketch.ino
void setup() {
  Serial.begin(9600);
}

void loop() {
  for (int i = 1; i <= 5; i++) {
    Serial.print("Count: ");
    Serial.println(i);
    delay(500);
  }
  Serial.println("---");
  delay(1000);
}
```
@AVR8js.sketch
````

---

## Adding Wokwi Components

Hardware components are added as HTML elements in the same section as the code block.
Components are automatically wired to the simulated Arduino by pin number.

```` markdown
<div id="led-example">
  <wokwi-led pin="13" color="red"></wokwi-led>
  <wokwi-pushbutton pin="2" color="green"></wokwi-pushbutton>
</div>

```c    sketch.ino
const int ledPin = 13;
const int btnPin = 2;
bool ledState = false;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(btnPin, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  if (digitalRead(btnPin) == LOW) {
    ledState = !ledState;
    digitalWrite(ledPin, ledState ? HIGH : LOW);
    Serial.println(ledState ? "LED ON" : "LED OFF");
    delay(200);
  }
}
```
@AVR8js.sketch(led-example)
````

The `id` of the containing `<div>` is passed to `@AVR8js.sketch(id)` to connect the components to the simulation.

---

## Macro 2: `@AVR8js.project` — Multi-File Projects

`@AVR8js.project(elementId, file1, file2, ...)` supports multiple files.
One file must be `sketch.ino`; additional files can include header files, libraries, and configuration.

```` markdown
```c    sketch.ino
#include "config.h"

void setup() {
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  for (int i = 0; i < BLINK_COUNT; i++) {
    digitalWrite(LED_PIN, HIGH);
    delay(BLINK_DELAY);
    digitalWrite(LED_PIN, LOW);
    delay(BLINK_DELAY);
  }
  delay(1000);
}
```
```c    config.h
#define LED_PIN 13
#define BLINK_COUNT 3
#define BLINK_DELAY 200
```
@AVR8js.project( ,sketch.ino,config.h)
````

Note: the first argument to `@AVR8js.project` is the element id (empty means no components), followed by the filenames.

---

## Macro 3: `@AVR8js.asm` — AVR Assembly

For low-level embedded programming courses, `@AVR8js.asm` runs AVR assembly code directly in the simulator.

```` markdown
```asm
.include "m328pdef.inc"

.org 0x0000
  rjmp main

main:
  ldi r16, 0xFF
  out DDRB, r16    ; PORTB = output

loop:
  sbi PORTB, 5     ; LED on
  rcall delay
  cbi PORTB, 5     ; LED off
  rcall delay
  rjmp loop

delay:
  ; Simple software delay
  ldi r18, 200
d1: ldi r17, 200
d2: ldi r16, 200
d3: dec r16
    brne d3
    dec r17
    brne d2
    dec r18
    brne d1
  ret
```
@AVR8js.asm
````

---

## Available Wokwi Components

| Component | HTML Tag | Description |
|---|---|---|
| LED | `<wokwi-led pin="13" color="red">` | Single LED |
| Push button | `<wokwi-pushbutton pin="2" color="green">` | Tactile button |
| Arduino Mega | `<wokwi-arduino-mega>` | Mega 2560 board layout |
| LCD 16×2 | `<wokwi-lcd1602>` | Character display |
| OLED 128×64 | `<wokwi-ssd1306>` | Graphic display |
| NeoPixel matrix | `<wokwi-neopixel-matrix>` | RGB LED matrix |
| Potentiometer | `<wokwi-potentiometer>` | Analog input |
| DHT22 sensor | `<wokwi-dht22>` | Temp/humidity sensor |
| Servo | `<wokwi-servo>` | Servo motor |
| Buzzer | `<wokwi-buzzer>` | Audio output |
| 7-segment | `<wokwi-7segment>` | Numeric display |

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/AVR8js/main/README.md" >}}

---

## Use Cases

**Arduino introduction courses** — Teach digital I/O, analogWrite, PWM, and interrupts without requiring students to own hardware.
The simulation includes the Arduino Uno register layout and timing.

**TVET and vocational training** — Embed working circuit simulations in training materials.
Students experiment with components and read serial output without a lab.

**Electronics prototyping** — Demonstrate common Arduino circuits — LED blink, button debounce, PWM fading, sensor reading — as interactive examples that students can modify.

**AVR assembly programming** — Teach register-level programming, port manipulation, and hardware timers using the `@AVR8js.asm` macro.

**Hybrid courses** — Students who do not have hardware can follow the simulated course; those with physical Arduino boards can use the same code on real hardware.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — AVR8js emulator |
| **Compilation server** | Yes — hexi.wokwi.com/build (internet required) |
| **Serial output** | Yes — connected to browser console |
| **Wokwi components** | 10+ available (LED, button, LCD, etc.) |
| **Languages** | Arduino C/C++ and AVR assembly |
| **Simulated MCU** | AVR ATmega328P (Uno compatible) |
| **Based on** | AVR8js + Wokwi components |
| **License** | MIT |
| **Maintained** | Active (version 0.0.10) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/AVR8js/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/AVR8js/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/AVR8js" label="View on GitHub" >}}

---

## Related Templates

- [**p5js**](/blog/p5js-creative-coding-in-liascript) — visual and interactive simulations in the browser
- [**WebDev**](/blog/webdev-html-css-js-in-liascript) — HTML/CSS/JS for web-facing electronics projects
- [**CodeRunner**](/blog/coderunner-multi-language-execution-in-liascript) — server-side execution for C, C++, and other embedded-adjacent languages

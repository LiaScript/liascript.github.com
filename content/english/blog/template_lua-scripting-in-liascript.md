---
title: "Lua for LiaScript: Execute Lua Scripts Interactively in the Browser"
slug: "lua-scripting-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/480px-Lua-Logo.svg.png"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Code
    - Programming
    - No Server

liascript: true

description: "Use the Lua template to make Lua code blocks executable in your LiaScript courses — a full Lua VM in the browser, with access to JavaScript globals."
---

Lua is lightweight, fast, embeddable, and widely used — in game development (Roblox, World of Warcraft, Löve2D), embedded systems, configuration scripting, and teaching.
Its simple syntax and minimal runtime make it an excellent first language.

The [Lua template](https://github.com/liaTemplates/Lua) brings a complete Lua virtual machine to LiaScript, based on an [Emscripten port](https://daurnimator.github.io) of the reference Lua interpreter.
Code runs entirely in the browser, no server needed.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/Lua/master/README.md
-->
```

One macro: `@Lua.eval`.

---

## `@Lua.eval` — Execute Lua Code

Attach `@Lua.eval` to any Lua code block.
The block becomes editable and executable; output from `print()` appears in the console.

```` markdown
```lua
print("Hello from Lua!")

for i = 1, 5 do
  print(i .. "^2 = " .. i*i)
end
```
@Lua.eval
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/Lua/master/README.md
-->

# Lua Demo – Grundlagen

```lua
-- Functions and tables
local function greet(name)
  return "Hello, " .. name .. "!"
end

-- Tables act as arrays and dicts
local fruits = {"apple", "banana", "cherry"}

for i, fruit in ipairs(fruits) do
  print(i .. ": " .. greet(fruit))
end

-- Fibonacci
local function fib(n)
  if n <= 1 then return n end
  return fib(n-1) + fib(n-2)
end

print("\nFibonacci:")
for i = 0, 9 do
  io.write(fib(i) .. " ")
end
print()
```
@Lua.eval
{{< /liascript >}}

---

## JavaScript Interoperability

The Lua VM runs inside the browser JavaScript environment, which means Lua code has direct access to browser globals via the `js` library.
This is a unique feature that enables cross-language experiments.

```` markdown
```lua
-- Access the browser window object
local window = js.global

-- Alert dialog
window:alert("Hello from Lua!")

-- Screen information
local screen = js.global.screen
print("Screen: " .. screen.width .. "x" .. screen.height)

-- Current time
print("Time: " .. js.global.Date.now())

-- Run JavaScript from Lua
local result = js.global:eval("[1,2,3,4,5][2]")
print("JS array index 2: " .. tostring(result))
```
@Lua.eval
````

This is especially useful in courses that compare languages: students can see how the same operation works in both Lua and JavaScript.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/Lua/master/README.md" >}}

---

## Use Cases

**Introductory scripting** — Lua's syntax is minimal and readable.
Variables, functions, loops, and tables are enough to teach core programming concepts without syntactic overhead.

**Game development courses** — Lua is the scripting language for Roblox and many game engines.
Introduce game logic concepts — state machines, event handlers, entity systems — with real Lua syntax.

**Embedded systems and scripting** — Lua is widely used as an embedded scripting engine (OpenWrt, Redis scripting, Nginx/OpenResty).
Teach configuration scripting in a relevant language.

**Cross-language comparison** — The JavaScript interop (`js.global`) makes it practical to show the same operation in both Lua and JavaScript side by side in a LiaScript course.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — Emscripten Lua VM |
| **Server required** | No |
| **Lua version** | 5.x (via emscripten port) |
| **JS interop** | Yes — `js.global` and `js.new()` |
| **Console output** | Yes — `print()` maps to `console.log` |
| **License** | MIT (implied) |
| **Maintained** | Stable (version 0.0.1) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/Lua/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/Lua/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/liaTemplates/Lua" label="View on GitHub" >}}

---

## Related Templates

- [**Pyodide**](/blog/pyodide-python-in-liascript) — full Python via WebAssembly, also runs in the browser
- [**BiwaScheme**](/blog/biwascheme-scheme-in-liascript) — Scheme/Lisp interpreter in the browser
- [**JSCPP**](/blog/jscpp-cpp-in-liascript) — C++ interpreter in the browser
- [**WebDev**](/blog/webdev-html-css-js-in-liascript) — HTML, CSS, and JavaScript with live preview

---
title: "CodeRunner for LiaScript: Execute Code in 50+ Languages Server-Side"
slug: "coderunner-multi-language-execution-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaScript/CodeRunner"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Code
    - Programming
    - Computer Science
    - Live Coding
    - Teachers
    - Students

liascript: true

description: "Run Python, Java, C, C++, Ruby, Rust, Go, Haskell, and 40+ more languages directly inside LiaScript courses via a server-side code runner — no browser limitations, real compilers."
---

Not every programming language runs in a browser.
Browser-based interpreters like Pyodide cover Python beautifully, but if your course needs real C compilation, JVM-based Java, Rust, Haskell, Erlang, or even COBOL — you need a real server with real compilers.

That is exactly what [CodeRunner](https://github.com/LiaScript/CodeRunner) provides.

CodeRunner is a WebSocket-based execution server that compiles and runs code on demand, combined with a LiaScript template that connects your course's code blocks to it.
The result: any code block in your LiaScript course can become an executable, interactive terminal — with input/output, compiler errors, image outputs, and even file downloads.

---

## What CodeRunner Does

A LiaScript code block normally just displays text.
With CodeRunner, it becomes:

- an **executable editor** that sends code to a server and streams back the result,
- supports **stdin interaction** during program execution (ask for user input),
- shows **compiler warnings and errors** in context,
- can produce and display **images and video outputs** (e.g. from matplotlib, R ggplot),
- supports **multi-file projects** for projects with separate source and data files,
- provides **interactive REPLs** with the `_withShell` variants.

All of this works from a single import line in your course header.

---

## Quick Start

Add the import to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md
-->
```

> **Note:** The CodeRunner repository uses the `master` branch, not `main`.
> The import URL above is correct as-is.

Once imported, all language macros are available throughout your document.

---

## The Core Macro: `@LIA.eval`

The foundation of CodeRunner is the `@LIA.eval` macro.
It takes three parameters:

1. **File names** — a JSON array of filenames for the code blocks
2. **Compile command** — shell command to compile (use `none` for interpreted languages)
3. **Execute command** — shell command to run the result

```` markdown
```c
#include <stdio.h>

int main(void) {
    int n;
    printf("How many hellos? ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
        printf("Hello, world %d!\n", i);
    return 0;
}
```
@LIA.eval(`["main.c"]`, `gcc -Wall main.c -o a.out`, `./a.out`)
````

This compiles with GCC and runs the resulting binary.
When the program calls `scanf`, the learner sees a terminal prompt and can type their input directly in the browser.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md
-->

# C with @LIA.eval

```c
#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 5; i++)
        printf("Hello, world %d!\n", i);
    return 0;
}
```
@LIA.eval(`["main.c"]`, `gcc -Wall main.c -o a.out`, `./a.out`)
{{< /liascript >}}

---

## Language Shortcuts

For the most common use cases, CodeRunner provides ready-made shortcuts so you do not have to write the full `@LIA.eval` command every time.
Simply use the shortcut as the macro after the closing fence:

```` markdown
```python
for i in range(5):
    name = input("Your name: ")
    print(f"Hello, {name}!")
```
@LIA.python3
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md
-->

# Python 3

```python
for i in range(1, 6):
    print(f"Hello, world {i}!")
```
@LIA.python3
{{< /liascript >}}

```` markdown
```java
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}
```
@LIA.java(Hello)
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md
-->

# Java

```java
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}
```
@LIA.java(Hello)
{{< /liascript >}}

```` markdown
```rust
fn main() {
    println!("Hello from Rust!");
}
```
@LIA.rust
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md
-->

# Rust

```rust
fn main() {
    println!("Hello from Rust!");
}
```
@LIA.rust
{{< /liascript >}}

### Available Language Shortcuts

| Macro | Language | Runtime |
|-------|----------|---------|
| `@LIA.ada` | Ada | GNAT |
| `@LIA.algol` | ALGOL 60 | a68g |
| `@LIA.apl` | APL | Dyalog |
| `@LIA.awk` | AWK | GNU AWK |
| `@LIA.basic` | BASIC | bwbasic |
| `@LIA.c` | C | GCC |
| `@LIA.clojure` | Clojure | JVM |
| `@LIA.cobol` | COBOL | GnuCOBOL |
| `@LIA.coq` | Coq | coqc |
| `@LIA.cpp` | C++ | G++ |
| `@LIA.d` | D | GDC |
| `@LIA.dotnet` | C# | .NET 8 |
| `@LIA.elixir` | Elixir | BEAM |
| `@LIA.erlang` | Erlang | OTP |
| `@LIA.forth` | Forth | Gforth |
| `@LIA.fortran` | Fortran | gfortran |
| `@LIA.fsharp` | F# | .NET 8 |
| `@LIA.go` | Go | golang-go |
| `@LIA.groovy` | Groovy | JVM |
| `@LIA.haskell` | Haskell | GHC |
| `@LIA.haxe` | Haxe | haxe |
| `@LIA.inform` | Inform 6 | dfrotz (Z-machine) |
| `@LIA.io` | IO | io |
| `@LIA.java` | Java | JDK 21 |
| `@LIA.julia` | Julia | Julia 1.9 |
| `@LIA.kotlin` | Kotlin | kotlinc |
| `@LIA.lua` | Lua | lua |
| `@LIA.mono` | C# | Mono |
| `@LIA.nasm` | x86 Assembly | NASM |
| `@LIA.nim` | Nim | nim |
| `@LIA.nodejs` | JavaScript | Node.js |
| `@LIA.ocaml` | OCaml | ocaml |
| `@LIA.perl` | Perl | perl |
| `@LIA.php` | PHP | php |
| `@LIA.postscript` | PostScript | Ghostscript |
| `@LIA.prolog` | Prolog | SWI-Prolog |
| `@LIA.python` | Python 3 (alias) | CPython |
| `@LIA.python2` | Python 2 | CPython 2.7 |
| `@LIA.python3` | Python 3 | CPython |
| `@LIA.qsharp` | Q# | .NET Quantum SDK |
| `@LIA.r` | R | Rscript |
| `@LIA.racket` | Racket | racket |
| `@LIA.ruby` | Ruby | ruby |
| `@LIA.rust` | Rust | rustc |
| `@LIA.scala` | Scala | scalac |
| `@LIA.scheme` | Scheme | Guile |
| `@LIA.selectscript` | SelectScript | S2c |
| `@LIA.smalltalk` | Smalltalk | Squeak |
| `@LIA.tcl` | Tcl | tclsh |
| `@LIA.v` | V | v |
| `@LIA.verilog` | Verilog | Icarus |
| `@LIA.vhdl` | VHDL | GHDL |
| `@LIA.zig` | Zig | zig |

> **Languages without a shortcut** — Pascal, Octave, Solidity, Standard ML, Modula-2, Objective-C, REXX, Vala, and Delphi are documented in the README but have no defined macro shortcut.
> Use `@LIA.eval` directly with the appropriate compiler/interpreter command for these.

---

## Interactive Shells with `_withShell`

Several languages offer a `_withShell` variant that drops into an interactive REPL after running the initial code.
This is excellent for exploratory exercises where learners should experiment after seeing an example:

```` markdown
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```
@LIA.python3_withShell
````

After the output, a Python 3 REPL opens in the terminal — the learner can call `greet("LiaScript")` or define new functions.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md
-->

# Python 3 with Shell

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```
@LIA.python3_withShell
{{< /liascript >}}

Supported:

- `@LIA.python3_withShell`
- `@LIA.ruby_withShell`
- `@LIA.haskell_withShell`
- `@LIA.julia_withShell`
- `@LIA.elixir_withShell`
- `@LIA.erlang_withShell`
- `@LIA.clojure_withShell`
- `@LIA.perl_withShell`
- `@LIA.r_withShell`
- `@LIA.v_withShell`
- `@LIA.forth_withShell`
- `@LIA.io_withShell`.

---

## Multi-File Projects

`@LIA.eval` accepts multiple files.
This is essential for data exercises — pass a CSV alongside Python code, or split a Java project into multiple source files:

```` markdown
```text -data.csv
Name,Score
Alice,92
Bob,78
Carol,88
```
```python readCSV.py
import pandas as pd

df = pd.read_csv('data.csv')
print(df.describe())
print(df[df['Score'] > 80])
```
@LIA.eval(`["data.csv", "readCSV.py"]`, `none`, `python3 readCSV.py`)
````

The `-` prefix on a filename marks the file as non-editable in the course view.
The code block order defines the filename mapping.

---

## Image and Video Output

When your code produces image files, CodeRunner sends them back and displays them inline.
R and Python scripts that generate plots work out of the box:

```` markdown
```r
library(ggplot2)
png(file="out.png")
qplot(wt, mpg, data = mtcars, colour = factor(cyl))
```
@LIA.r
````

Files produced during execution can also be offered as downloads — useful for compiled binaries, processed datasets, or generated PDFs.

---

## Full Template Demo

The full CodeRunner README is itself a LiaScript course with live code examples for every supported language:

{{< liascript-show "https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md" >}}

> The first run may take up to **30 seconds** while the execution server wakes up from idle.
> Subsequent runs in the same session are fast.

---

## Use Cases

**Computer science courses** — Teach C, Java, Haskell, or Rust with real compilers.
Learners write and run code without installing anything locally.
Compiler error messages appear inline, preserving the learning context.

**Algorithm courses** — Use Prolog for logic programming, Coq for formal verification, APL for array processing, or Octave for numerical methods — all as interactive exercises.

**Multilingual programming introductions** — Demonstrate the same algorithm in C, Python, and Haskell side by side.
Each code block runs independently, and learners can modify and compare outputs.

**Data science exercises** — Combine Python (pandas, matplotlib) or R (ggplot2) with data files.
Output plots appear directly below the code block, no Jupyter environment required.

**Hardware description** — Verilog and VHDL support makes CodeRunner useful for digital logic courses.
Icarus Verilog and GHDL simulate circuits server-side.

**Self-hosted workshops** — Deploy your own CodeRunner instance (Docker image provided) for controlled environments: student exams, offline workshops, institutional courses.

---

## Self-Hosting

CodeRunner is a fully open-source Python server with a Docker image.
If you want to control the execution environment — custom libraries, offline use, or data privacy — you can deploy it yourself:

``` bash
docker build . -t coderunner
docker run -p 4000:4000 coderunner
```

Then configure your course header to point to your own server:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md

@onload
window.CodeRunner.init("wss://your-server.example.com/")
@end
-->
```

Or paste the full `@onload` block from the Implementation section of the README directly into your course header — no server dependency needed once you copy the macro definitions.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | No — requires a server-side execution backend |
| **Default server** | Heroku-hosted (may take 30s to wake from idle) |
| **Self-hostable** | Yes — Docker image provided |
| **Interactive input** | Yes — stdin during program execution |
| **Image/video output** | Yes — plots and media returned inline |
| **Multi-file support** | Yes — up to 10 files per code block |
| **Languages** | 50+ with shortcuts; any language via `@LIA.eval` |
| **License** | BSD-2-Clause |
| **Maintained** | Yes (LiaScript org, active) |
| **Branch** | `master` (not `main`) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaScript/CodeRunner/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaScript/CodeRunner" label="View on GitHub" >}}

---

## Related Templates

- [**Pyodide**](/blog/pyodide-python-in-liascript) — Python in the browser without a server (WebAssembly)
- [**SQLite**](/blog/sqlite-sql-in-liascript) — SQL in the browser without a server
- [**DuckDB**](/blog/duckdb-analytics-in-liascript) — Analytical SQL in the browser without a server
- [**WebDev**](https://github.com/LiaTemplates/WebDev) — HTML + CSS + JavaScript live preview in the browser
- [**AVR8js**](https://github.com/LiaTemplates/AVR8js) — Arduino/AVR microcontroller simulation in the browser

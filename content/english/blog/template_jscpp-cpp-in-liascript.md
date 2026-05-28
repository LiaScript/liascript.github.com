---
title: "JSCPP for LiaScript: Run C++ Directly in the Browser Without a Compiler"
slug: "jscpp-cpp-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/JSCPP"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Code
    - Programming
    - Computer Science
    - No Server

description: "Use the JSCPP template to make C++ code blocks executable in your LiaScript courses — no compiler, no setup, just write C++ and teach."
---

C++ programming courses have a tooling problem.
Students need to install a compiler, configure an IDE, manage build systems, and debug their environment before writing a single line of code.

The [JSCPP template](https://github.com/liaTemplates/JSCPP) removes all of that.
Based on [JSCPP](https://github.com/felixhao28/JSCPP), a JavaScript implementation of a C++ interpreter, it makes C++ code blocks in your LiaScript course directly executable — no compiler installation, no server, no configuration.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/JSCPP/master/README.md
-->
```

Two macros are available: `@JSCPP.eval` for standard execution and `@JSCPP.evalWithStdin` for programs that read from standard input.

---

## Macro 1: `@JSCPP.eval` — Execute C++ Code

Attach `@JSCPP.eval` to any C++ code block to make it executable and editable.
The code is evaluated by the JSCPP interpreter; `cout` output and errors appear in the console below.

```` markdown
```c
#include <iostream>
using namespace std;

int main() {
  for (int i = 1; i <= 5; i++) {
    cout << i << "^2 = " << i * i << endl;
  }
  return 0;
}
```
@JSCPP.eval
````

Line numbers are shown in error messages, making it easy to find and fix mistakes.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/JSCPP/master/README.md
-->

# JSCPP Demo – C++ ausführen

```c
#include <iostream>
using namespace std;

int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

int main() {
  for (int i = 1; i <= 8; i++) {
    cout << i << "! = " << factorial(i) << endl;
  }
  return 0;
}
```
@JSCPP.eval
{{< /liascript >}}

---

## Macro 2: `@JSCPP.evalWithStdin` — C++ with Standard Input

Many C++ exercises involve reading input.
Use `@JSCPP.evalWithStdin` with two code blocks: the first is the C++ program, the second is a `text` block with the stdin input.

```` markdown
```c
#include <iostream>
using namespace std;

int main() {
  int n;
  cin >> n;

  int sum = 0;
  for (int i = 1; i <= n; i++) {
    sum += i;
    cout << "i=" << i << " sum=" << sum << endl;
  }
  cout << "Sum 1 to " << n << " = " << sum << endl;
  return 0;
}
```
``` text +stdin
10
```
@JSCPP.evalWithStdin
````

The `+stdin` label makes the input block visible and editable.
Students can change the input values and re-run the program.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/JSCPP/master/README.md
-->

# JSCPP Demo – stdin

```c
#include <iostream>
using namespace std;

int main() {
  int a, b;
  cin >> a >> b;

  cout << "a = " << a << endl;
  cout << "b = " << b << endl;
  cout << "a + b = " << a + b << endl;
  cout << "a * b = " << a * b << endl;

  return 0;
}
```
``` text +stdin
7
13
```
@JSCPP.evalWithStdin
{{< /liascript >}}

---

## What JSCPP Supports

JSCPP implements a significant subset of C++:

- Primitive types: `int`, `float`, `double`, `char`, `bool`, `long`
- Control flow: `if/else`, `for`, `while`, `do-while`, `switch`
- Functions (including recursion), pointers, references
- Arrays and basic structs
- `cin` / `cout` with `<<` and `>>` operators
- `string` basics (`#include <string>`)
- Basic `#include <iostream>` and `<cmath>`

**Limitations:** JSCPP does not support the full C++ standard library, templates, or advanced STL features.
It is best suited for introductory C++ courses covering algorithms, control flow, functions, and basic data structures.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/JSCPP/master/README.md" >}}

---

## Use Cases

**Introductory programming** — Teach C++ fundamentals — variables, loops, functions — without requiring students to install a compiler.
The barrier to first code execution is zero.

**Algorithm exercises** — Sorting, searching, recursion, dynamic programming.
Students write, test, and debug directly in the course material.

**stdin/stdout programs** — Many competitive programming problems use stdin/stdout.
The `@JSCPP.evalWithStdin` macro lets students run typical contest-style programs with sample inputs.

**Quizzes and exercises** — Combine JSCPP code blocks with LiaScript's quiz features.
Ask students to complete a function, run it against a test case, and check the output.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — JavaScript interpreter |
| **Server required** | No |
| **Language version** | C++ subset (no full STL or templates) |
| **stdin support** | Yes — `@JSCPP.evalWithStdin` |
| **Error messages** | Yes — with line number |
| **Based on** | JSCPP by Felix Hao |
| **License** | MIT (implied) |
| **Maintained** | Stable (version 0.3.1) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/JSCPP/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/JSCPP/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/liaTemplates/JSCPP" label="View on GitHub" >}}

---

## Related Templates

- [**CodeRunner**](/blog/coderunner-multi-language-execution-in-liascript) — server-side execution for full C++, Java, Python, and 20+ languages
- [**WebDev**](/blog/webdev-html-css-js-in-liascript) — HTML, CSS, and JavaScript directly in the browser
- [**Pyodide**](/blog/pyodide-python-in-liascript) — full Python in the browser via WebAssembly
- [**BiwaScheme**](/blog/biwascheme-scheme-in-liascript) — functional programming with Scheme in the browser

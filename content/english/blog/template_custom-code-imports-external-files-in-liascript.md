---
title: "Custom Code Imports for LiaScript: Load External Files Into Executable Blocks"
slug: "custom-code-imports-external-files-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaPlayground/Custom-code-imports"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Programming
    - Advanced
    - No Server
description: "Fetch external source code files from any URL and display or execute them in LiaScript — the Custom-code-imports template demonstrates how to use script blocks, the LIASCRIPT: prefix, and the fetch API to build dynamic, URL-loadable code exercises."
---

LiaScript's code blocks are normally written directly in the Markdown source.
The [Custom-code-imports](https://github.com/LiaPlayground/Custom-code-imports) playground by [André Dietrich](https://github.com/andre-dietrich) demonstrates a powerful pattern: fetching the content of an external source file by URL and injecting it as a live, executable LiaScript code block at runtime.
This is particularly useful for courses that should always show the latest version of a codebase, or for exercises that load student submissions for review.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/LiaPlayground/Custom-code-imports/main/README.md
-->
```

---

## Concepts

### The `LIASCRIPT:` prefix

Any `<script>` block in LiaScript can return a string that starts with `LIASCRIPT:` to inject raw LiaScript Markdown into the rendered output:

```html
<script>
  "LIASCRIPT:\n```java\npublic class Hello { }\n```"
</script>
```

This allows scripts to dynamically produce code blocks, quizzes, or any other LiaScript content.

### The `HTML:` prefix

Similarly, returning `HTML:` + HTML string renders the HTML directly:

```html
<script>
  "HTML:<b>Hello from a script!</b>"
</script>
```

---

## `@load.java` — Display an external Java file

```markdown
@load.java(HelloWorld.java)
```

Fetches `HelloWorld.java` from the same GitHub directory as the README and renders it as a read-only `java` code block.

Or load from an explicit URL:

```markdown
@[load.java](https://raw.githubusercontent.com/LiaPlayground/Custom-code-imports/main/HelloWorld.java)
```

---

## `@loadAndRun(java)` — Load AND execute

Fetches the file and renders it as an executable code block connected to CodeRunner:

```markdown
@[loadAndRun(java)](https://raw.githubusercontent.com/LiaPlayground/Custom-code-imports/main/HelloWorld.java)
```

The student sees the code, can edit it, and can click **Run** — all from a file fetched at render time.

---

## How it works

The macro uses a `<script>` block with `run-once="true"` and `modify="false"` to fetch the URL and inject the result as LiaScript markup:

```html
<script run-once="true" modify="false">
  fetch("@1")
    .then(r => r.text())
    .then(text => {
      send.lia("LIASCRIPT:\n``` java\n" + text + "\n```")
    })
    .catch(e => {
      send.lia("HTML:<b>Could not load file: @1</b>")
    })
  "loading..."
</script>
```

---

## Example: Multi-language code loader

```markdown
<!--
import: https://raw.githubusercontent.com/LiaPlayground/Custom-code-imports/main/README.md
-->

# Dynamic Code Exercises

## Load from GitHub

The following Java file is fetched from GitHub at render time:

@[load.java](https://raw.githubusercontent.com/LiaPlayground/Custom-code-imports/main/HelloWorld.java)

---

## Load and run from GitHub

This version is editable and executable:

@[loadAndRun(java)](https://raw.githubusercontent.com/LiaPlayground/Custom-code-imports/main/HelloWorld.java)

---

## Build your own loader

Here is the pattern for any file type:

``` markdown
<script run-once="true" modify="false">
  fetch("https://example.com/MyCode.py")
    .then(r => r.text())
    .then(text => {
      send.lia("LIASCRIPT:\n\`\`\` python\n" + text + "\n\`\`\`")
    })
  "loading..."
</script>
```
```

---

## Advanced: Inject a quiz from a URL

The same pattern works for any LiaScript content, not just code blocks:

```html
<script run-once="true" modify="false">
  fetch("https://example.com/quiz.md")
    .then(r => r.text())
    .then(text => send.lia("LIASCRIPT:\n" + text))
  "loading..."
</script>
```

This allows modular course assembly: a teacher updates `quiz.md` on GitHub, and all courses that reference it automatically get the updated quiz next time students open the page.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaPlayground/Custom-code-imports/main/README.md" >}}

---

## Use Cases

**Versioned course content** — Reference source files on GitHub; the course always shows the latest version without re-publishing.

**Reusable exercise banks** — A shared repository of exercise files: each course imports what it needs by URL.

**Code review exercises** — Load a student's submission URL and annotate or run it directly in the course.

**Polyglot courses** — A single course can load Java, Python, and C++ examples from different repositories without embedding all code inline.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — fetch API |
| **Server required** | No |
| **Key macros** | `@load.java`, `@[load.java](URL)`, `@[loadAndRun(java)](URL)` |
| **Core mechanism** | `send.lia("LIASCRIPT:\n...")` from script block |
| **Script attributes** | `run-once="true"`, `modify="false"` |
| **Supports** | Any language / any LiaScript content type |
| **Author** | LiaPlayground / André Dietrich |
| **License** | MIT |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaPlayground/Custom-code-imports/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/Custom-code-imports/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaPlayground/Custom-code-imports" label="View on GitHub" >}}

---

## Related Templates

- [**AVR8js-mem**](/blog/avr8js-mem-memory-visualization-in-liascript) — load and run AVR/Arduino code with memory visualization
- [**SCORM-Progress**](/blog/scorm-progress-tracking-in-liascript) — inject dynamic score tracking into a course
- [**H5P-Test**](/blog/h5p-content-in-liascript) — embed external H5P content in a LiaScript course
- [**Fonts**](/blog/fonts-custom-typography-in-liascript) — load external fonts into a LiaScript course

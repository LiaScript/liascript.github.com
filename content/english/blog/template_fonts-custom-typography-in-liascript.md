---
title: "Fonts for LiaScript: Custom Typography in Online Courses"
slug: "fonts-custom-typography-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaPlayground/Fonts"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Design
    - Advanced
    - No Server
liascript: true

description: "Embed custom web fonts in LiaScript courses using CSS @font-face, Google Fonts link directives, or inline style blocks — the Fonts template from LiaPlayground demonstrates all three approaches."
---

LiaScript renders in the browser, which means any web font can be loaded and applied to course content.
The [Fonts](https://github.com/LiaPlayground/Fonts) playground by [LiaPlayground](https://github.com/LiaPlayground) demonstrates the three main approaches for loading custom typography into a LiaScript course: **Google Fonts** via a link header directive, **CSS `@font-face`** with any web font URL, and **inline `<style>` blocks** for fine-grained control.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/LiaPlayground/Fonts/main/README.md
-->
```

Or use the techniques directly without importing — they rely on standard HTML and CSS.

---

## Method 1: Google Fonts via `link:` header

LiaScript's document header supports a `link:` directive that injects a `<link>` tag into the page head:

```markdown
<!--
author: Your Name
link:   https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap
-->

# My Course

This text is rendered in Roboto.
```

You can add multiple `link:` directives for multiple font families:

```markdown
<!--
link: https://fonts.googleapis.com/css2?family=Open+Sans&display=swap
link: https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap
-->
```

---

## Method 2: CSS `@font-face` in a `<style>` block

For self-hosted fonts or any web font URL, use a `<style>` block directly in the Markdown:

```html
<style>
@font-face {
  font-family: 'MyFont';
  src: url('https://example.com/fonts/myfont.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

body, .lia-text {
  font-family: 'MyFont', sans-serif;
}
</style>
```

---

## Method 3: Inline `<style>` for scoped font application

Apply fonts to specific elements only, without affecting the whole course:

```html
<style>
.fancy-heading {
  font-family: 'Georgia', serif;
  font-size: 2rem;
  letter-spacing: 0.05em;
}

.code-font {
  font-family: 'Source Code Pro', monospace;
}
</style>

<p class="fancy-heading">Chapter 1 — Introduction</p>
```

---

## Example: Course with Custom Typography

```markdown
<!--
author: LiaPlayground
link:   https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Source+Code+Pro&display=swap
-->

# Typography in LiaScript

<style>
body, p {
  font-family: 'Merriweather', serif;
  line-height: 1.8;
}

code, pre {
  font-family: 'Source Code Pro', monospace;
}

h1, h2, h3 {
  font-family: 'Merriweather', serif;
  font-weight: 700;
}
</style>

## Readability Matters

Well-chosen typography improves reading fluency and reduces cognitive load.
A serif font like Merriweather is excellent for long-form text, while a monospace font
like Source Code Pro makes code listings clearer and easier to scan.

---

## Code Example

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

---

## What is the 10th Fibonacci number?

[[55]]
```

---

## Fonts for Multilingual Courses

For courses that use non-Latin scripts, loading the appropriate font family ensures correct rendering:

```markdown
<!--
link: https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap
link: https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari&display=swap
-->

<style>
.arabic { font-family: 'Noto Sans Arabic', sans-serif; direction: rtl; }
.hindi  { font-family: 'Noto Sans Devanagari', sans-serif; }
</style>

<p class="arabic">مرحباً بالعالم</p>
<p class="hindi">नमस्ते दुनिया</p>
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaPlayground/Fonts/main/README.md" >}}

---

## Use Cases

**Branded institutional courses** — Match the university or company brand font throughout the course.

**Reading and language arts** — Choose a serif body font for extended reading passages, separate from heading fonts.

**Multilingual content** — Load Google Noto fonts or other Unicode-complete families for Arabic, CJK, Devanagari, or other scripts.

**Code literacy courses** — Set a monospace font globally for all inline code and code blocks for better legibility.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes |
| **Server required** | No |
| **Methods** | `link:` header, CSS `@font-face`, inline `<style>` |
| **Font sources** | Google Fonts, self-hosted, any CDN |
| **Scope** | Global (via `body`) or element-scoped (via CSS class) |
| **Multilingual support** | Yes — any Unicode font |
| **Author** | LiaPlayground |
| **License** | MIT |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaPlayground/Fonts/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/Fonts/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaPlayground/Fonts" label="View on GitHub" >}}

---

## Related Templates

- [**custom-code-imports**](/blog/custom-code-imports-external-files-in-liascript) — load external resources into a LiaScript course at runtime
- [**lia-DynFlex**](/blog/lia-dynflex-resizable-columns-in-liascript) — multi-column layouts for typography-focused designs
- [**lia-navigation**](/blog/lia-navigation-hierarchical-toc-in-liascript) — enhanced hierarchical TOC for long courses
- [**lia-annotation**](/blog/lia-annotation-live-drawing-in-liascript) — freehand drawing overlay for lecture slides

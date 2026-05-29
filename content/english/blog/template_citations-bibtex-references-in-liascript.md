---
title: "Citations for LiaScript: BibTeX References and Bibliography in Online Courses"
slug: "citations-bibtex-references-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/citations"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - OER
    - Higher Education
    - Academic Writing
    - Libraries

liascript: true

description: "Use the citations template to embed BibTeX references directly in your LiaScript courses — inline citations, full bibliographies, DOI lookup, and four citation styles in one import."
---

Academic course materials need proper references.
But managing citations in plain Markdown usually means hand-formatting bibliography entries or maintaining separate reference lists that drift out of sync.

The [citations template](https://github.com/LiaTemplates/citations) brings full BibTeX support to LiaScript.
Based on [Citation.js](https://citation.js.org/), it renders inline citations and full bibliographies directly in the browser — from embedded BibTeX blocks, DOI lookups, or remote `.bib` files — in four academic citation styles.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/citations/refs/heads/main/README.md
-->
```

For a version-pinned import:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/citations/refs/tags/0.0.6/README.md
-->
```

---

## Inline BibTeX Citations

All citation macros work by wrapping a BibTeX code block with a macro in the fence opener.
The block content is the BibTeX source; the macro formats and renders it.

### `@cite` — Short Inline Reference

Use `@cite` (or `@cite.style`) to produce a compact inline citation like *(Knuth, 1986)* or *[1]*.
When a `url` field is present in the BibTeX, the output becomes a hyperlink.

```` markdown
```bibtex @cite.style(ieee)
@book{knuth1986texbook,
  title     = {The {\TeX} Book},
  author    = {Donald E. Knuth},
  year      = {1986},
  publisher = {Addison-Wesley Professional}
}
```
````

### `@bibliography` — Full Reference Entry

Use `@bibliography` (or `@bibliography.style`) to render a complete formatted bibliography entry.
Multiple BibTeX entries in one block are all rendered.

```` markdown
```bibtex @bibliography
@book{knuth1986texbook,
  title     = {The {\TeX} Book},
  author    = {Donald E. Knuth},
  year      = {1986},
  publisher = {Addison-Wesley Professional}
}

@article{dietrich2019liascript,
  title   = {LiaScript: A domain-specific language for interactive online courses},
  author  = {Dietrich, André and Zug, Sebastian},
  year    = {2019},
  url     = {https://arxiv.org/abs/1905.05425}
}
```
````

---

## Citation Styles

Four styles are supported.
Pass the style name as the first argument to any `.style()` variant.

| Style | Description | Typical field |
|-------|-------------|---------------|
| `harvard1` | Harvard author-date *(default)* | Humanities, social sciences |
| `apa` | American Psychological Association | Psychology, education |
| `vancouver` | Vancouver / ICMJE numeric | Medicine, life sciences |
| `ieee` | IEEE numeric | Engineering, computer science |

The same entry formatted in all four styles:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/citations/refs/heads/main/README.md
-->

# Citations Demo – Vier Stile

Dasselbe Werk in allen vier Stilen:

**Harvard (default):**

```bibtex @bibliography
@book{knuth1986texbook,
  title     = {The {\TeX} Book},
  author    = {Donald E. Knuth},
  year      = {1986},
  publisher = {Addison-Wesley Professional}
}
```

**APA:**

```bibtex @bibliography.style(apa)
@book{knuth1986texbook,
  title     = {The {\TeX} Book},
  author    = {Donald E. Knuth},
  year      = {1986},
  publisher = {Addison-Wesley Professional}
}
```

**Vancouver:**

```bibtex @bibliography.style(vancouver)
@book{knuth1986texbook,
  title     = {The {\TeX} Book},
  author    = {Donald E. Knuth},
  year      = {1986},
  publisher = {Addison-Wesley Professional}
}
```

**IEEE:**

```bibtex @bibliography.style(ieee)
@book{knuth1986texbook,
  title     = {The {\TeX} Book},
  author    = {Donald E. Knuth},
  year      = {1986},
  publisher = {Addison-Wesley Professional}
}
```
{{< /liascript >}}

---

## DOI-Based Citations

The template can also resolve a DOI directly, without requiring embedded BibTeX.
Citation.js fetches the metadata automatically.

```` markdown
@bibliography.style(ieee, 10.5281/zenodo.1005176)

@bibliography.style(apa, 10.5281/zenodo.1005176)
````

This requires internet access to resolve the DOI at render time.

---

## Remote `.bib` Files

To load an entire bibliography from a remote `.bib` file, use `@bibliography.link`:

```` markdown
@[bibliography.link](https://raw.githubusercontent.com/LiaTemplates/citations/main/bibtex.bib)

@[bibliography.link.style(ieee)](https://raw.githubusercontent.com/LiaTemplates/citations/main/bibtex.bib)
````

All entries in the file are rendered as a formatted bibliography list.
The `@[macro](url)` syntax is LiaScript's inline link-style macro invocation.

---

## Global Bibliography with `@ref`

For large courses that reference the same sources across multiple sections, pre-load a `.bib` file once using `@onload`:

```` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/citations/refs/heads/main/README.md

@onload
window.citationStyle = "ieee"
window.bibliographyLoad("https://example.com/refs.bib")
@end
-->
````

Then cite any entry by its BibTeX key anywhere in the document:

```` markdown
As discussed in @ref(dietrich2019liascript), interactive content...

## References

@bibliography.global
````

The `@ref(key)` macro renders an inline citation; `@bibliography.global` renders the complete reference list.
`@bibliography.global.style(apa)` applies a specific style.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/citations/refs/heads/main/README.md" >}}

---

## Use Cases

**Academic OER** — Embed properly formatted references directly in openly licensed course materials.
Students see citations in the style expected by their field — Harvard for humanities, IEEE for engineering — without any additional tooling.

**Research methods courses** — Teach citation management by showing the same source formatted in multiple styles.
The style comparison examples explain conventions rather than just mandating them.

**Literature reviews and surveys** — Pre-load a `.bib` file for an entire course and reference entries by key across chapters, sections, and exercises.

**Scientific writing training** — Use `@cite` inline to model how in-text citations relate to full bibliography entries.
Students see both rendered simultaneously.

**Reproducible educational materials** — BibTeX is stored as plain text inside the Markdown source.
References are version-controlled alongside the content, never in a separate file that can get lost.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — Citation.js (JavaScript) |
| **Server required** | No |
| **DOI resolution** | Yes — requires internet access |
| **Remote .bib files** | Yes — `@bibliography.link(url)` |
| **Citation styles** | `harvard1`, `apa`, `vancouver`, `ieee` |
| **Global bibliography** | Yes — via `@onload` + `@ref` |
| **Inline citations** | Yes — `@cite` |
| **Full entries** | Yes — `@bibliography` |
| **Based on** | Citation.js by L. G. Willighagen |
| **License** | MIT |
| **Maintained** | Yes (version 0.0.6, 5 ⭐) |
| **Version-stable import** | Yes (`refs/tags/0.0.6`) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/citations/refs/heads/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/citations/refs/heads/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/citations" label="View on GitHub" >}}

---

## Related Templates

- [**Wikimedia Commons**](/blog/wikimedia-commons-in-liascript) — embed media from Wikimedia in OER with proper attribution
- [**Mermaid**](/blog/mermaid-diagrams-in-liascript) — text-based diagrams for illustrating concepts alongside cited research
- [**DuckDB**](/blog/duckdb-analytics-in-liascript) — analytical queries for data-driven research teaching
- [**Fullscreen**](/blog/fullscreen-presentation-mode-in-liascript) — hide the navigation bar in fullscreen mode for clean course presentations

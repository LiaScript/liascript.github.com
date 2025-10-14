---
title: "SVG Integration"
slug: "svg-integration"
date: 2025-07-23
draft: false
authors:
  - André Dietrich
  - Sebastian Zug
image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG.svg"
image_alt: "Difference between bitmap and SVG images"
image_credit: "“Bitmap VS SVG” by Yug (mods: Cfaerber et al.)"
image_credit_link: "https://commons.wikimedia.org/wiki/File:Bitmap_VS_SVG.svg"
image_license: "CC BY-SA 2.5"
image_license_link: "https://creativecommons.org/licenses/by-sa/2.5/"
image_changes: "none" 

categories:
    - Feature
    - Tutorial
tags:
    - Images
    - JavaScript
    - LiveEditor

---

Although SVGs have been usable in LiaScript for quite a while, their integration just got a lot tighter. In short: you can now *mix SVG and LiaScript content directly*, turning static vector graphics into living, clickable, even quiz-enabled experiences.

## Quick refresher: What is SVG?

**SVG** stands for **Scalable Vector Graphics**. It’s an XML-based image format for describing two‑dimensional graphics (lines, shapes, text, etc.) that scale perfectly at any resolution. Because SVGs are text files, you can read and edit them, script them with JavaScript or CSS, and now—thanks to LiaScript—embed teaching elements right inside them.

👉 Official docs: [https://developer.mozilla.org/docs/Web/SVG](https://developer.mozilla.org/docs/Web/SVG)

<iframe style="height: 80vh; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/H4sIAAAAAAAAAzWOPW7DMBSDd52CeB2ytJbitkMCy0D/xqJLL6AqivQQ2Q5kIXJuXzt1N5IA+fEOL/jknjsT8TGZ7hzdHu/JFO49DN442eiEaMaLR+FDDpqelCIExz7k1VzYlddh0qSgMCe4pVMX+1FTyPm8l7KUUpXHakhe1kopOQ9SK4DG3hCwc71eava6iqRpu3smHDlGTXHh+WSuhDGn4eQ0/URjT//2YX1XE2QrmmW/FeI7mLwZwbnCV++Qjb/HMIs/aPULISnQHP4AAAA="></iframe>

## Enter `<foreignObject>` …and LiaScript!

SVG has a special element called `<foreignObject>`. Traditionally, you use it to place arbitrary HTML inside an SVG. Now the LiaScript parser will **look for ****\`\`**** blocks and interpret their contents as LiaScript**. That means formulas, quizzes, code blocks, animations—anything you can do in LiaScript—can live right inside the graphic.

### How it works

1. Write (or export) your SVG as usual.
2. Add a `<foreignObject>` element where you want interactive content.
3. Put LiaScript markup inside that element.
4. When LiaScript renders, the parser finds that block and executes it as LiaScript.

### Example: A Circle With Embedded LiaScript

<iframe style="height: 80vh; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/H4sIAAAAAAAAA22QTU7DMBCF9z7Fk5Mt9cQhCKE4qHAAlizaIqXBiQ1pUzlWU27PJCoLpGoW86N53zxNgnWwNYYWNV59aHorRDmeO5y9nV6Gi5EEQkEErUnicuiPo5EuxtOTUtM0raZ8NYROaSJSrJOVKJuFg4bFWcai5udaBM5USLS+741MWppDYoxh+LY8yPP8r7ub/Gd0RvJAVWypHYL13fFt/2WbCCZrLcHcB8ZdV7NHZjnectHIgthJkiBNsYbB9uQRPjS3olT/WDfhOdFCv6fbdL3g310d4UdEZ1HPX/QtAh8rnoXYbADoAtjtkGIb/cGOs4sb98v5b9UvfbHl+YkBAAA="></iframe>

> **Tip:** Pay attention to the `x`, `y`, `width`, and `height` attributes of `<foreignObject>`. They define the rectangle in SVG coordinates where your LiaScript block will appear.

## What Can You Build?

The combination unlocks a whole new universe:

- **Inline formulas** rendered with LiaScript’s LaTeX support.
- **Quizzes and polls** overlaid on diagrams.
- **Animated SVGs** synchronized with explanations.
- **Dynamic compositions** via scripts that manipulate both SVG and LiaScript states.
- **Interactive infographics and timelines** without switching tools.

If you can picture it in SVG, you can likely make it *interactive* with LiaScript.

## A Few Practical Notes

- Keep your SVG code tidy. Group related elements and comment generously.
- Test your coordinate system. `viewBox` makes scaling easier, but it also affects where your `<foreignObject>` shows up.
- Remember accessibility: provide titles/desc elements and consider keyboard navigability for embedded interactions.

## Documentation

Checkout the new chapter in the documentation:

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#scaleable-vector-graphics" label="SVG in LiaScript" >}}

Or—as always—watch the video 😉

{{< youtube k8VSso6aEjI >}}


## Learn More

- MDN SVG docs (specs, attributes, browser quirks): [https://developer.mozilla.org/docs/Web/SVG](https://developer.mozilla.org/docs/Web/SVG)
- LiaScript documentation: [https://liascript.github.io](https://liascript.github.io)
- SVG 2 specification (for the curious): [https://www.w3.org/TR/SVG2/](https://www.w3.org/TR/SVG2/)

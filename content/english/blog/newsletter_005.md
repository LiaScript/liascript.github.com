---
title: "Newsletter 18/07/2025"
slug: "newsletter-18-07-2025"
date: 2025-07-23
draft: false
authors:
  - André Dietrich
  - Sebastian Zug
image: "/images/post/newsletter.png"

categories:
    - News
    - Community
tags:
    - P2P
    - Sharing
    - OER

---

Dear LiaScript community,

It has been __far too long__ since our last newsletter — but rest assured, we’ve been busy!
Our long‑term mission remains unchanged: to turn LiaScript into a __simple, universal markup language__ for interactive online courses, MOOCs, textbooks, and much more.
Below you’ll find a whirlwind tour of everything that landed since the previous update.

## 1. Publish courses on Nostr

During the OER Hackathon in Göttingen we demonstrated __two‑click publishing to [Nostr](https://en.wikipedia.org/wiki/Nostr)__.
The LiveEditor now bundles an entire LiaScript course—including images, audio, and video as data-URIs—into a single signed __Nostr long‑form event (kind 30023)__ that you can share anywhere.
Learners open the course via a `https://LiaScript.github.io/course/?nostr://` link rather than HTTP.
Simply revise your Markdown and hit Publish; every client will automatically pull the latest version.

{{< preview "/blog/086_nostr-and-liascript-and-oer/" >}}

## 2. SVG gets super‑powers

SVG (Scalable Vector Graphics) has always worked inside LiaScript, but we have tightened the integration:

- Use `<foreignObject>` to __embed raw HTML or LiaScript__ inside any shape
- Combine images with formulas, Text‑To‑Speech, quizzes, scripts… the sky’s the limit
- Animate parts of your drawing using the regular LiaScript script macro

Dive into the updated docs:

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#scaleable-vector-graphics" label="Goto: Documentation - SVG in LiaScript" >}}

Or watch the short demo:

{{< youtube k8VSso6aEjI >}}


## 3. New `edit` macro – built‑in remix button

We’ve added the new edit command, which opens the course in an editor so learners can tweak or extend the content themselves.
In larger communities you can point the button to an external editor, making it easy for anyone to contribute.

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#edit" label="Goto: Documentation - edit" >}}

## 4. Slim progress bar

You may have spotted a __thin progress bar__ beneath the navigation toolbar.
It fills up as readers advance through the course, giving them instant feedback on how much content remains.

## 5. Easier hosting: `gitlab://` & `nextcloud://`

Fetching raw files from self‑hosted GitLab or Nextcloud can trigger CORS errors.
LiaScript’s new URL‑translation engine fixes that:

- Prefix troublesome links with `gitlab://` or `nextcloud://`
- LiaScript rewrites them to the platform’s CORS‑friendly API behind the scenes

There’s nothing to install — just use the new scheme and enjoy.

{{< preview "/blog/087_gitlab-and-nextcloud/" >}}

## 6. Quality‑of‑life improvements

- Such as better voice support (also on Safari).

- Video comments will be translated and synchronizes with the browser text to speech engine, if translated:

  {{< youtube rLGULuPmuQo >}}

- __Chemical formulas__ rendered via `mhchem`

  https://mhchem.github.io/MathJax-mhchem/

- __Executable snippets in Classroom chat__ – run code or dynamic macros live

  {{< youtube Mz-Ef-ynSW8 >}}

- Special ignore comments `<!---.*--->` – perfect for hiding large blocks
from the parser

## 7. Internationalisation & Styling

[**@stvrhm**](https://github.com/stvrhm)—who created LiaScript’s original theme—has begun a major overhaul of our CSS.
The headline feature is full support for **right‑to‑left (RTL) languages**—not just Arabic, Hebrew, and Persian (Farsi), but also Urdu, Pashto, Sindhi, Kurdish (Sorani), Uyghur, Rohingya, Syriac, Dhivehi, and more.

https://github.com/LiaScript/LiaScript/issues/234

Why does this matter?
Nearly **600 million people** read RTL scripts.
Until now our interface simply translated the words while keeping a left‑to‑right layout, which felt awkward and sometimes unusable.
Real RTL support means mirroring navigation bars, icons, animations, paddings—every direction‑sensitive CSS rule.
It’s deceptively tricky, but once finished LiaScript will feel truly native to this vast audience.

## 8. OPAL-Integration

We’re edging into the mainstream! LiaScript is now integrated into __OPAL__—the “Online‑Plattform für Akademisches Lehren und Lernen,” the central learning‑management system used by most universities in the German state of Saxony.
In short: thousands of instructors and students can embed fully interactive LiaScript courses directly in their everyday LMS workflows.

{{< button link="https://blog.hrz.tu-chemnitz.de/urzcommunity/2025/07/08/neu-im-opal-mit-liascript-schnell-zum-anschaulichen-interaktiven-kurs/" label="OPAL Integration" >}}

---

_That’s all for now — but plenty more is brewing._
_As always, we welcome your feedback, pull‑requests and wild ideas._

___Happy authoring!___
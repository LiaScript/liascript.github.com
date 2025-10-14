---
title: LiaScript 0.14 - Teilweise Dokumentation (German)
slug: liascript-documentation-german
date: 2024-03-03
draft: false
author: André Dietrich
image: "/images/post/docu-de.jpg"
categories:
    - Documentation
tags:
    - Video
    - TTS

description: Dies ist die Aufnahme von der LiaScript-Dokumentation im Präsentationsmodus, indem die Dokumentation sich selber vorstellt ;-)
---

Dies ist die Aufnahme von [LiaScript](https://LiaScript.github.io) im Präsentationsmodus, indem die Dokumentation sich selber vorstellt.

Es ist natürlich möglich der Dokumentation auch selber im interaktiven LiaScript-Modus zur folgen, klicken sie [hier](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md). Die Quellen finden Sie auch direkt auf [GitHub](https://github.com/liaScript/docs).

---

## 0. Intro

{{< youtube ElxYssylmaw >}}

---

## 1. Kurzeinführung Tools & Co.

{{< youtube nFMrZ9_Cvg4 >}}

__Update:__

- Es ist jetzt auch möglich VSCode als Editor für LiaScript-Kurse zu nutzen. Dafür haben wir die beiden folgenden Erweiterungen zum VSCode-Marktplatz hinzugefügt (eines für die [Vorschau](https://marketplace.visualstudio.com/items?itemName=LiaScript.liascript-preview), das andere für [Snippets](https://marketplace.visualstudio.com/items?itemName=LiaScript.liascript-snippets)).
  Mehr Information finden Sie [hier](/blog/install-visual-studio-code-with-liascript/).

- Die Übersicht über entwickelte Kurse und Plugins können jetzt mithilfe von [GitHub-topics](/blog/install-visual-studio-code-with-liascript/) gefunden werden:

  - Kurs-Übersicht: https://github.com/topics/liascript-course
  - Macro-Übersicht: https://github.com/topics/liascript-template

---

## 3. Markdown-Grundlagen Teil 1 & Multimedia

{{< youtube RKB8btO8zts >}}

__Update:__


* Zusätzliche Überschriften auf einer Folie können durch die Nutzung der HTML5-tags `<section>` oder `<article>` eingefüght werden

  ``` markdown
  # Titel

  ...

  <article>
  ## Untertitel

  mit zusätzlichen Inhalten ...
  </article>
  ```

* HTML-Kommentare können nun auch genutzt werden um Inhalte zu verstecken oder für persönliche Notizen:

  ``` markdown
  # Title

  <!-- private Notizen, die nicht gezeigt werden sollen ... -->

  Ein neuer Absatz
  ```

---
## 4. Stylen von Elementen

{{< youtube TYQjvaOazyo >}}

---

## 5. Mathematik & Formeln

{{< youtube EwxOU1eD6nM >}}

__Update:__

You can now also define custom KaTeX-macros, which can be either locally or globally defined.

---

## 6. Fußnoten

{{< youtube YxLnqtnGZyQ >}}

---

## 7. Zustände

{{< youtube --DlRg814bA >}}

---

## 8. Tasks/Aufgaben

{{< youtube sKuEG5oSSlQ >}}

---

## 9. Quizze

{{< youtube wKU3j3WnT38 >}}

## Todo
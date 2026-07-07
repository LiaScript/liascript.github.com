---
title: "Vom Team in der Küche auf den Teller: Ein NIS2-Kurs aus dem Teaching-Agent"
slug: "nis2-kurs-teaching-agent-live-uebersetzt"
date: 2026-07-07
draft: false
image: "/images/post/nis2.jpg"
tags:
    - AI
    - Education
    - Collaboration
    - OER
    - Tutorial
    - Video
    - Accessibility
categories:
    - Tutorial
    - Feature
author: "André Dietrich"
description: "Das Sequel zu 'Ein Prompt ist kein Team': ein mit dem Teaching-Agent erstellter NIS2-Kurs auf Deutsch – und wie derselbe Kurs live im Browser per Google Translate übersetzt und mit browserbasierter Sprachausgabe über das Video gelegt wird."
---

## Was am Ende auf dem Teller landet

Im [letzten Beitrag](/blog/ein-prompt-ist-kein-team/) ging es um die Küche: warum ein einzelner Prompt kein Team ersetzt, und warum Lehrende mit dem **Teaching-Agent** ihr eigenes Team spezialisierter KI-Agenten zusammenstellen können, statt fertige Dosensuppe von einer Plattform serviert zu bekommen.

Dieser Beitrag zeigt, was dabei am Ende auf dem Teller landet: ein vollständiger, interaktiver Kurs, komplett mit dem Teaching-Agent erstellt – und ein zweiter Effekt obendrauf, der zeigt, wie weit sich ein einmal erstellter Kurs im Browser noch weiterverarbeiten lässt, ganz ohne neue Aufnahme.

## Video 1: Der Kurs auf Deutsch

{{< youtube -_qCs4rvGV8 >}}

Als Beispiel diente **NIS2** – die EU-Richtlinie zur Cybersicherheit kritischer Infrastrukturen und öffentlicher Verwaltungen. Ein bewusst gewähltes Thema: NIS2 betrifft genau die Zielgruppen, für die LiaScript-Kurse oft entstehen – Behörden, Energieversorger, Gesundheitswesen, digitale Infrastruktur.

Herausgekommen ist **"NIS2 Ready"**, ein sechsteiliger Selbstlernkurs für ein gemischtes Publikum aus Entscheider:innen, IT-/Sicherheitspersonal und Mitarbeitenden ohne tiefes technisches oder juristisches Vorwissen. Entsprechend ist der Kurs bewusst auf Einsteiger-Niveau gehalten: Jeder Fachbegriff wird erst in einfacher Sprache erklärt, bevor er benannt wird.

Der komplette Kurs ist offen einsehbar, inklusive des `journal.md`-Projektstands, mit dem der Teaching-Agent während der Erstellung gearbeitet hat – man sieht also nicht nur das Ergebnis, sondern auch, wie es entstanden ist:

{{< button link="https://liaplayground.github.io/nis2/" label="NIS2 Ready – Kurs live ansehen" >}}

{{< button link="https://github.com/LiaPlayground/nis2" label="Repository & journal.md auf GitHub" >}}

## Video 2: Derselbe Kurs, live übersetzt

{{< youtube fYEl_blkhTQ >}}

Das zweite Video baut direkt auf dem ersten auf und zeigt einen Effekt, der überrascht: Derselbe NIS2-Kurs, geöffnet im [LiaScript LiveEditor](https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/nis2/main/materials/1-welcome-why-nis2-matters/README.md"), wird **live im Browser per Google Translate** in eine andere Sprache übersetzt – und die **browserbasierte Sprachausgabe (TTS)** liest den übersetzten Text direkt vor, überlagert über das Originalvideo mit dem deutschen Sprecher.

Das Ergebnis ist nicht lippensynchron – das Video zeigt weiterhin die deutsche Aufnahme, während die neue Stimme darüberspricht. Aber der Effekt funktioniert erstaunlich gut, weil Übersetzung, Sprachausgabe und Kursnavigation exakt im Takt des Originalinhalts laufen. Es ist kein aufwendiges Dubbing-Projekt, sondern eine Funktion, die im Browser passiert, während man den Kurs ganz normal ansieht.

Der eigentliche Punkt dahinter: Ein Kurs, der als reines Markdown-Dokument vorliegt, ist nicht an eine Sprache, eine Stimme oder eine Plattform gebunden. Text bleibt Text – und alles, was der Browser ohnehin schon kann (übersetzen, vorlesen), lässt sich direkt darauf anwenden, ganz ohne Re-Export oder Neuaufnahme.

## Die Kette der beiden Beiträge

1. **[Ein Prompt ist kein Team](/blog/ein-prompt-ist-kein-team/)** – warum ein Team aus KI-Agenten mehr leistet als ein Mega-Prompt, und wie der Teaching-Agent dieses Team organisiert
2. **Dieser Beitrag** – das konkrete Ergebnis (NIS2 Ready) und ein Bonus-Effekt: derselbe Kurs, live übersetzt und vorgelesen, direkt im Browser

Zusammengenommen zeigen beide Beiträge, was am Anfang und am Ende des Prozesses steht: ein strukturiertes Agenten-Team, das einen Kurs plant und baut – und ein offenes, textbasiertes Format, das danach noch erstaunlich viel von selbst kann.

## Weiterführende Links

#### NIS2-Kurs

{{< button link="https://liaplayground.github.io/nis2/" label="NIS2 Ready – Kurs live ansehen" >}}

{{< button link="https://github.com/LiaPlayground/nis2" label="Repository auf GitHub" >}}

#### Teaching-Agent

{{< button link="https://github.com/LiaScript/teaching-agent" label="Teaching-Agent auf GitHub" >}}

#### LiveEditor

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/nis2/main/materials/1-welcome-why-nis2-matters/README.md" label="LiaScript LiveEditor öffnen" >}}

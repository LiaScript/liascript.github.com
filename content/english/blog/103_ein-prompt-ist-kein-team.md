---
title: "Ein Prompt ist kein Team: Warum Lehrende ein eigenes KI-Agenten-Team brauchen"
slug: "ein-prompt-ist-kein-team"
date: 2026-07-06
draft: false
image: "/images/post/teaching-agent.png"
tags:
    - AI
    - Education
    - Collaboration
    - OER
    - Tutorial
    - Video
categories:
    - Tutorial
    - Feature
author: "André Dietrich"
description: "Warum agentische Workflows mehr sind als ein cleverer Prompt, und wie der Teaching-Agent Lehrenden ein eigenes, teilbares Team von KI-Agenten für die Kurserstellung an die Hand gibt."
---

## Ein Sterne-Restaurant, das allen dieselbe Dosensuppe serviert

Stellt euch ein Restaurant vor: atemberaubendes Interieur, perfekt gestylte Kellner, eine glänzende Speisekarte. Aber in die Küche darf niemand schauen. Und wenn man dann probiert, schmeckt alles gleich: Dosensuppe, für jeden Gast dieselbe.

Genau so fühlen sich für mich viele "KI-Plattformen für die Lehre" an. Hohe Kosten, ein schönes UI – aber am Ende bekommt jede Lehrperson dasselbe vorgefertigte Ergebnis aus derselben Dose. Die Küche bleibt verschlossen, das Rezept ist nicht einsehbar, und Anpassung heißt bestenfalls: ein anderes Dropdown-Menü wählen.

Im Video zu unserem Vortrag bei Input U:FF 2026 habe ich genau dieses Bild benutzt, um zu erklären, warum wir stattdessen einen anderen Weg gehen: Lehrende sollen selbst in die Küche.

## Chats, Prompts – und warum sie nicht reichen

Die meisten von uns verstehen KI im Alltag noch als **Chat**: Man schreibt einen (Mega-)Prompt, bekommt eine Antwort, feilt am Prompt weiter, wenn das Ergebnis nicht passt. Das funktioniert für einzelne Fragen gut. Für ein ganzes Lehrveranstaltungs-Projekt aber nicht.

Das Problem ist nicht die KI, sondern der Ort, an dem das Wissen landet. Alles, was man in einem Chat über gute Didaktik, den richtigen Ton, die passende Zielgruppe herausgefunden hat, bleibt in genau diesem einen, flüchtigen Chatverlauf gefangen. Man kann es nicht versionieren, nicht an eine Kollegin weitergeben, nicht in drei Monaten wieder aufgreifen, ohne von vorne zu erklären, was man eigentlich will.

**Agentische Workflows** funktionieren anders. Statt eines einzigen, allwissenden Gesprächspartners definiert man ein **Team spezialisierter Agenten** – jeder mit einer klaren Aufgabe und einem klar definierten Ausgabe-Artefakt. Die Agenten schreiben nicht in einen Chatverlauf, sondern in eine gemeinsame, strukturierte Projektdatei. Dadurch geht kein Wissen verloren, man kann jederzeit dort weitermachen, wo man aufgehört hat – und das Team lässt sich mit anderen teilen, die es wiederum für ihren eigenen Unterricht verfeinern und anpassen.

Übertragen aufs Küchenbild: Wer selbst kocht, würzt nach eigenem Geschmack, weil er genau weiß, für wen er kocht. Und wer ein Küchenteam zusammenstellt – einen fürs Grundrezept, einen fürs Anrichten, einen für die Feinabstimmung – bekommt am Ende ein Gericht, das wirklich zur eigenen Vorstellung passt, nicht die Massenware aus der Dose.

## Video: Ein Prompt ist kein Team

{{< youtube _qBkKTRn3-o >}}

Der Vortrag "Ein Prompt ist kein Team – Warum KI-Agenten für komplexe Lehrprojekte nötig sind" wurde bei **Input U:FF 2026** gehalten und zeigt genau diesen Perspektivwechsel: weg vom Prompt-Hacking, hin zum eigenen Agenten-Team.

## Der Teaching-Agent

Genau dieses Prinzip steckt im **Teaching-Agent**, den wir – inspiriert von der BMad-Methode aus der Softwareentwicklung – für die Kurserstellung mit LiaScript gebaut haben. Statt eines einzelnen Prompts koordiniert der Teaching-Agent vier spezialisierte Agenten, die gemeinsam an einer einzigen Projektdatei arbeiten, der `journal.md`:

- 🎓 **Teaching** – didaktische Struktur und Inhalt, das pädagogische Rückgrat des Kurses
- 🎨 **Artist** – visuelle Identität, Logos, Bildideen
- 🧑‍🎓 **Learner** – Review aus Lernendenperspektive, mit modellierten Personas
- 🛠️ **Development** – Git, Veröffentlichung, GitHub Pages

Die `journal.md` ist dabei das "Single Source of Truth" des gesamten Projekts: Sie hält Kurskontext, Lernziele, Didaktik, visuelle Identität, Agenda, Sitzungen und Validierungsstatus fest – und ist selbst ein gültiges LiaScript-Dokument, kann also jederzeit als Kursübersicht angesehen werden. Nichts geht verloren, alles ist nachvollziehbar, und man kann die Datei genauso einfach mit Kolleg:innen teilen wie ein Rezept.

Der Teaching-Agent ist dabei **editor-agnostisch**: dieselbe Spezifikation läuft mit Claude Code, GitHub Copilot, Cursor, Windsurf, OpenAI Codex oder jedem beliebigen Web-Chat.

### Die letzte Eskalationsstufe: Testesser als Personas

Wer noch einen Schritt weiterdenken will, modelliert sogar die **Testesser**: Der Learner-Agent kann Lernenden-Personas mit unterschiedlichem Vorwissen, unterschiedlicher Motivation und unterschiedlichem Lernstil erzeugen – und die fertigen Materialien aus deren Sicht probieren und rückmelden, was ihnen nicht schmeckt, bevor der Kurs überhaupt vor echten Studierenden landet.

## Warum das den Unterschied macht

- **Kein Wissensverlust** – alles Wichtige steht in der `journal.md`, nicht in einem Chatverlauf, der morgen weg ist
- **Weitermachen statt neu erklären** – ein Projekt lässt sich jederzeit wieder aufnehmen, genau dort, wo man aufgehört hat
- **Teilbar und verfeinerbar** – ein einmal gebautes Agenten-Team lässt sich an andere Lehrende weitergeben, die es für ihre eigenen Fächer anpassen
- **Spezialisierung statt Generalisten-Prompt** – jeder Agent hat eine Aufgabe, statt dass ein Mega-Prompt alles auf einmal leisten soll

Das ist der eigentliche Kern agentischer Workflows: nicht ein cleverer Satz an eine KI, sondern ein Team, das man sich selbst zusammenstellt, das für einen selbst kocht – und das man mit anderen teilen kann, ohne dass am Ende doch wieder alle dieselbe Dosensuppe bekommen.

## Weiterführende Links

#### Teaching-Agent & Dokumentation

{{< button link="https://github.com/LiaScript/teaching-agent" label="Teaching-Agent auf GitHub" >}}

#### Vorheriger Beitrag

{{< button link="/blog/spec-driven-development-was-lehrende-von-entwicklern-lernen-koennen/" label="Spec-Driven Development: Was Lehrende von Entwicklern lernen können" >}}

#### BMad-Method

{{< button link="https://github.com/bmad-code-org/BMAD-METHOD" label="BMad-Method Projekt" >}}

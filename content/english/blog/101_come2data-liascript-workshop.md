---
title: "Come2Data LiaScript Workshop: Forschungsdatenmanagement als interaktiver Kurs"
slug: "come2data-liascript-workshop"
date: 2026-06-19
draft: false
image: "/images/post/come2data-liascript-workshop.png"
tags:
    - OER
    - FDM
    - Research Data Management
    - Tutorial
    - Education
    - Authoring
    - Video
    - Zenodo
categories:
    - Tutorial
    - Case Study
author: "André Dietrich"
description: "Der Come2Data LiaScript Workshop zeigt an zwei Tagen, wie Forschungsdatenmanagement, OER, Markdown, Quizze, Präsentationen, Datenanalyse und Veröffentlichung zu einem vollständigen interaktiven Kurs zusammenwachsen."
---

Der **Come2Data LiaScript Workshop** ist ein vollständiger zweitägiger Mitmachkurs zur Erstellung interaktiver Open Educational Resources mit LiaScript.
Im Mittelpunkt steht Forschungsdatenmanagement, aber der Workshop ist zugleich ein praktischer Einstieg in die Frage, wie man aus einer einzigen Markdown-Datei ein Lehrbuch, eine Präsentation, eine Übungsumgebung und einen reproduzierbaren Kurs macht.

Die Aufzeichnungen sind im [TIB AV-Portal](https://av.tib.eu/) verfügbar.
Die Materialien liegen an zwei unterschiedlichen Orten: Tag I ist als Zenodo-Record veröffentlicht, Tag II als GitHub-Repository.
Der Zenodo-Record nennt Sebastian Zug und André Dietrich als Creator der Materialien.
Genau das ist kein Zufall, sondern ein wichtiges LiaScript-Prinzip: Inhalte sollen nicht an eine zentrale Plattform gebunden sein.
Ein Kurs kann auf Zenodo, GitHub, GitLab, in einer institutionellen Infrastruktur oder an jedem anderen Ort liegen, solange die Markdown-Quelle über eine URL erreichbar ist.

{{< button link="https://zenodo.org/records/15424433" label="Tag I auf Zenodo" >}} <br>


{{< button link="https://liascript.github.io/course/?https://zenodo.org/api/records/15424433/files/README.md/content" label="Tag I als LiaScript-Kurs starten" >}} <br>

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://zenodo.org/api/records/15424433/files/README.md/content" label="Tag I im LiveEditor öffnen" >}} <br>

{{< button link="https://come2data.de/" label="Come2Data Projekt" >}}

## Was ist Come2Data?

[Come2Data](https://come2data.de/) ist das interdisziplinäre Datenkompetenzzentrum für Sachsen.
Als nationales Datenkompetenzzentrum vermittelt das Projekt praxisorientierte Datenkompetenzen, vor allem für Forschung und Lehre, aber auch für Verwaltung, Gesellschaft und perspektivisch Wirtschaft.
Der Fokus liegt zunächst auf dem Wissenschaftsstandort Sachsen.

Das Projekt bündelt Angebote rund um Datenintegration, Datenmanagement, Datenanalyse und Datenpublikation.
Es versteht sich als offener Forschungs-, Unterstützungs-, Vernetzungs- und Lernort, der Forschende mit Datenexpert:innen zusammenbringt und zugleich konkrete Lern- und Beratungsangebote entwickelt.
Aufgebaut wird Come2Data von der TU Dresden, der TU Chemnitz, der SLUB Dresden und der Universität Leipzig.

Vor diesem Hintergrund passt der LiaScript-Workshop sehr gut in das Projekt.
Er zeigt nicht nur Forschungsdatenmanagement als Thema, sondern setzt die Idee von Datenkompetenz praktisch um: Materialien sind offen zugänglich, zitierbar, editierbar und können von Teilnehmenden direkt ausprobiert und weiterentwickelt werden.

## Warum Zenodo?

Für einen Workshop zum Forschungsdatenmanagement ist Zenodo mehr als nur ein Dateihoster.
Der erste Kursteil ist dort als zitierbarer Datensatz mit DOI veröffentlicht, inklusive `README.md` und einem Titanic-Datensatz als CSV.
Die Materialien sind damit auffindbar, referenzierbar und wiederverwendbar, also genau in dem Sinn organisiert, den der Kurs inhaltlich behandelt.

LiaScript liest diesen Zenodo-Record direkt über die Zenodo-API:

```text
https://liascript.github.io/course/?https://zenodo.org/api/records/15424433/files/README.md/content
```

Dadurch wird sichtbar, wie wenig Infrastruktur ein interaktiver Kurs eigentlich braucht.
Es gibt keinen Build-Prozess, keine Lernplattform als Pflichtschicht und keinen Import in ein proprietäres Format.
Die Quelle bleibt eine Markdown-Datei, die dauerhaft archiviert, versioniert, kopiert und an anderer Stelle weiterentwickelt werden kann.

## Tag I: Vom Markdown-Kurs zur Datenanalyse

Der erste Workshoptag verbindet die Grundlagen von LiaScript mit zentralen Themen des Forschungsdatenmanagements.
Er startet bei der Motivation für offene, textbasierte Lehrmaterialien und führt dann Schritt für Schritt durch Markdown, Multimedia, Tabellen, Visualisierungen, Quizze und Präsentationsmodi.

Inhaltlich arbeitet der Kurs mit Begriffen wie Forschungsdaten, Forschungsdatenlebenszyklus, FAIR-Prinzipien, Dateibenennung, Datenpolicies, Metadaten und persistenten Identifikatoren.
Aus diesen Themen entstehen nicht nur Folien, sondern interaktive Lernobjekte: Quizfragen, Flip-Cards, Diagramme, eingebettete Medien und ausführbare Codebeispiele.

Besonders schön ist der Übergang zur Datenanalyse.
Der Titanic-Datensatz liegt als Datei im Zenodo-Record und wird aus dem Kurs heraus verwendet.
Die Beispiele zeigen Analysewege mit Python im Browser, R über den LiaScript CodeRunner und JavaScript mit externen Datenabfragen.
So wird aus einem Forschungsdatenmanagement-Workshop zugleich eine Demonstration für reproduzierbare, direkt ausführbare Lehrmaterialien.

### Teil 1: Einführung

<iframe loading="lazy" title="Come2Data LiaScript Workshop Teil 1: Einführung" src="https://av.tib.eu/player/73586" allow="fullscreen" style="width: 100%; aspect-ratio: 16 / 9;"></iframe>

### Teil 2: Markdown

<iframe loading="lazy" title="Come2Data LiaScript Workshop Teil 2: Markdown" src="https://av.tib.eu/player/73587" allow="fullscreen" style="width: 100%; aspect-ratio: 16 / 9;"></iframe>

### Teil 3: Daten

<iframe loading="lazy" title="Come2Data LiaScript Workshop Teil 3: Daten" src="https://av.tib.eu/player/73588" allow="fullscreen" style="width: 100%; aspect-ratio: 16 / 9;"></iframe>

### Teil 4: Quizze

<iframe loading="lazy" title="Come2Data LiaScript Workshop Teil 4: Quizze" src="https://av.tib.eu/player/73589" allow="fullscreen" style="width: 100%; aspect-ratio: 16 / 9;"></iframe>

### Teil 5: Präsentationen

<iframe loading="lazy" title="Come2Data LiaScript Workshop Teil 5: Präsentationen" src="https://av.tib.eu/player/73590" allow="fullscreen" style="width: 100%; aspect-ratio: 16 / 9;"></iframe>

### Teil 6: Datenanalyse mit LiaScript

<iframe loading="lazy" title="Come2Data LiaScript Workshop Teil 6: Datenanalyse mit LiaScript" src="https://av.tib.eu/player/73591" allow="fullscreen" style="width: 100%; aspect-ratio: 16 / 9;"></iframe>

## Tag II: Vertiefung, Klassenräume und Publikation

Der zweite Tag knüpft an die offenen Punkte aus dem ersten Workshop an.
Er vertieft Formeln und Fußnoten, zeigt die Nutzung von LiaScript-Klassenräumen und führt in Makros, zusätzliche Interaktionen und die Veröffentlichung über GitHub ein.

Hier wird ein zweites wichtiges Muster sichtbar.
Während Zenodo für eine archivierte und zitierbare Veröffentlichung steht, eignet sich GitHub besonders für laufende Zusammenarbeit, Versionierung und Automatisierung.
LiaScript kann beides nutzen.
Der Kurs bleibt derselbe Typ von Dokument, aber der Publikationskontext ändert sich je nach Ziel: zitierbare Veröffentlichung, kollaborative Entwicklung oder sofortige Bearbeitung im LiveEditor.

{{< button link="https://github.com/LiaPlayground/LiaScript-Tutorial-on-Research-Data-Mangement-2" label="GitHub-Repository zu Tag II" >}} <br>

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaPlayground/LiaScript-Tutorial-on-Research-Data-Mangement-2/refs/heads/main/README.md" label="Tag II starten" >}} <br>

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/LiaScript-Tutorial-on-Research-Data-Mangement-2/refs/heads/main/README.md" label="Tag II bearbeiten" >}}

### Teil 7: Formeln & Fußnoten

<iframe loading="lazy" title="Come2Data LiaScript Workshop Teil 7: Formeln & Fußnoten" src="https://av.tib.eu/player/73592" allow="fullscreen" style="width: 100%; aspect-ratio: 16 / 9;"></iframe>

### Teil 8: Klassenräume

<iframe loading="lazy" title="Come2Data LiaScript Workshop Teil 8: Klassenräume" src="https://av.tib.eu/player/73593" allow="fullscreen" style="width: 100%; aspect-ratio: 16 / 9;"></iframe>

### Teil 9: Zusatzfunktionen & Makros

<iframe loading="lazy" title="Come2Data LiaScript Workshop Teil 9: Zusatzfunktionen & Makros" src="https://av.tib.eu/player/73594" allow="fullscreen" style="width: 100%; aspect-ratio: 16 / 9;"></iframe>

## Was man aus dem Workshop mitnehmen kann

Der Workshop ist nicht nur eine Einführung in eine Syntax.
Er zeigt ein vollständiges Arbeitsmodell für offene Bildungsressourcen:

- Inhalte werden als lesbarer Text geschrieben.
- Interaktionen, Quizze, Medien, Diagramme und Code bleiben Teil derselben Quelle.
- Kurse können als Präsentation, Selbstlernkurs oder Live-Editor-Projekt genutzt werden.
- Materialien lassen sich dezentral hosten, archivieren und weiterentwickeln.
- Lernende können den Kurs nicht nur konsumieren, sondern direkt verändern und damit experimentieren.

Gerade für Forschungsdatenmanagement passt dieser Ansatz sehr gut.
FDM spricht über Nachvollziehbarkeit, Metadaten, Wiederverwendung und langfristigen Zugang.
LiaScript überträgt dieselben Prinzipien auf Lehrmaterialien: Die Quelle bleibt offen, die Ausführung passiert im Browser und die Veröffentlichung kann dort stattfinden, wo es für den jeweiligen Kontext sinnvoll ist.

Wer eigene Materialien entwickeln möchte, kann den Kurs im LiveEditor öffnen, einzelne Abschnitte verändern und daraus eine eigene Variante erstellen.
Die beiden Tage liefern dafür nicht nur Beispiele, sondern einen kompletten Ablauf vom ersten Markdown-Abschnitt bis zur veröffentlichten, interaktiven Ressource.

## Quellen und Materialien

- Come2Data Projekt: https://come2data.de/
- Zenodo-Record: https://zenodo.org/records/15424433
- DOI Tag I: https://doi.org/10.5281/zenodo.15424433
- LiaScript-Kurs Tag I: https://liascript.github.io/course/?https://zenodo.org/api/records/15424433/files/README.md/content
- LiveEditor Tag I: https://liascript.github.io/LiveEditor/?/show/file/https://zenodo.org/api/records/15424433/files/README.md/content
- GitHub-Repository Tag II: https://github.com/LiaPlayground/LiaScript-Tutorial-on-Research-Data-Mangement-2
- LiaScript-Kurs Tag II: https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaPlayground/LiaScript-Tutorial-on-Research-Data-Mangement-2/refs/heads/main/README.md
- LiveEditor Tag II: https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/LiaScript-Tutorial-on-Research-Data-Mangement-2/refs/heads/main/README.md
- TIB AV-Portal, Teil 1 bis 9: https://av.tib.eu/media/73586 bis https://av.tib.eu/media/73594

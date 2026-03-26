---
title: "Spec-Driven Development: Was Lehrende von Entwicklern lernen können"
slug: "spec-driven-development-was-lehrende-von-entwicklern-lernen-koennen"
date: 2025-11-21
draft: false
image: "/images/post/teaching-agent.png"
tags:
    - AI
    - Education
    - Collaboration
    - GitHub
    - VS Code
    - OER
    - Tutorial
    - Video
categories:
    - Tutorial
    - Feature
author: "André Dietrich"
description: "Entdecken Sie, wie die BMAD-Methode aus der Softwareentwicklung mit spezialisierten KI-Agenten die Erstellung von Lehrinhalten revolutioniert. Lernen Sie den Teaching-Agent kennen, der Lehrende durch alle Phasen der Kursentwicklung begleitet – von der ersten Grobstruktur bis zum fertigen LiaScript-Kurs."
---

## Von der Software-Entwicklung zur Lehre

Seit der Veröffentlichung von ChatGPT hat sich die Landschaft der generativen KI rasant entwickelt. Doch während wir uns in der Hochschullehre noch fragen, wie wir diese Tools sinnvoll einsetzen können, hat die Softwareentwicklung bereits strukturierte Methoden entwickelt, um mit KI-Agenten effizient zusammenzuarbeiten.

Eine dieser Methoden ist **Spec-Driven Development** – ein Ansatz, bei dem spezialisierte KI-Agenten Hand in Hand arbeiten, um komplexe Entwicklungsprozesse zu bewältigen. Die zentrale Idee: Statt chaotischem "Prompt-Hacking" folgt man einer klaren Struktur mit definierten Spezifikationen, Rollen und Arbeitsabläufen.

## Video-Präsentation

<video controls style="width: 100%">
<source src="https://videocampus.sachsen.de/getMedium/default/6e315d235e5440ada2829773f621f834.mp4" type="video/mp4">
Ihr Browser unterstützt das Video-Tag nicht.
</video>

## Die BMAD-Methode

Die **BMAD-METHOD** (Breakthrough Method for Agile AI-Driven Development) von Brian Madison organisiert die KI-gestützte Entwicklung als strukturierte, vierphasige Methodik:

1. **Analyse** – Anforderungen sammeln und verstehen
2. **Planung** – Struktur und Ablauf definieren
3. **Lösungsausarbeitung** – Konzepte entwickeln
4. **Umsetzung** – Konkrete Ergebnisse erstellen

Der Clou: Ein Team spezialisierter KI-Agenten übernimmt jeweils klar definierte Rollen (z. B. Analyst, Produktmanager, Architekt, Entwickler, QA) und erzeugt untereinander Artefakte wie PRDs, Architektur-Dokumente und User Stories. Spezifikationen werden früh erstellt und versioniert, bevor Code geschrieben wird – das sichert Konsistenz, Nachvollziehbarkeit und Skalierbarkeit.

## Der Teaching-Agent: BMAD für die Lehre

Was hat das nun mit der Hochschullehre zu tun? Die Antwort: **sehr viel**. Die Prinzipien lassen sich hervorragend auf die Erstellung von Lehrinhalten übertragen. Mit klaren Lern-"Specs" und kollaborativen KI-Agenten können Lehrende Vorlesungen planen, strukturieren und ausfeilen – unterstützt durch virtuelle Kolleg*innen, die Inhalte miterstellen, didaktisch prüfen oder kreativ erweitern.

### Der 5-Phasen-Workflow

Der **Teaching-Agent** führt Lehrende durch fünf klar definierte Phasen:

**Phase 1: FOUNDATION** – `/create-outline`  
Definition von Umfang, Zielgruppe und Lernzielen. Hier entsteht die Grobstruktur des Kurses.

**Phase 2: DIDACTICS** – `/create-didactics`  
Gestaltung des didaktischen Ansatzes: Welche Lehrmethoden? Welcher Stil? Welche Professor-Persona passt zum Thema?

**Phase 3: PLANNING** – `/create-agenda`  
Strukturierung der einzelnen Sitzungen mit Timeline und Zeitplanung.

**Phase 4: DEVELOPMENT** – `/create-session`, `/promote-session`, `/coauthor-materials`  
Erstellung der Sitzungs-Skelette und Ausbau zu vollständigen Materialien in kollaborativer Zusammenarbeit.

**Phase 5: FINALIZATION** – `/validate-lecture`, `/assemble-bundle`  
Konsistenzprüfung und Zusammenstellung aller Komponenten zum fertigen Kurs.

### Die 5 Komponenten des Systems

Das System basiert auf fünf grundlegenden Komponenten:

1. **🤖 Agents** – Spezialisierte KI-Instanzen mit klar definierten Rollen und Verantwortlichkeiten
2. **🧩 Templates/Artefakte** – Vordefinierte Strukturen für Dokumente und Outputs
3. **📋 Tasks** – Definierte Arbeitseinheiten, die von Agents ausgeführt werden
4. **📚 Data** – Strukturierte Informationen als Referenz und Wissensbasis (z. B. LiaScript-Syntax-Guide)
5. **🛤️ Workflows** – Festgelegte Abläufe, die die Zusammenarbeit steuern

## Praxisbeispiel: Die Datenbanken-Vorlesung

Der Teaching-Agent wurde bereits erfolgreich eingesetzt, um eine komplette Vorlesung zu Datenbanksystemen zu erstellen. Das Ergebnis zeigt eindrucksvoll, was mit dieser Methode möglich ist: Ein vollständiger LiaScript-Kurs mit interaktiven Elementen, Quizzes, Code-Beispielen und didaktisch aufbereiteten Inhalten.

Der gesamte Kurs ist Open Source auf GitHub verfügbar und kann direkt im Browser als interaktive Webseite genutzt werden – ohne Installation, ohne Kompilierung, einfach zugänglich für alle.

## So starten Sie selbst

Die Einrichtung des Teaching-Agents ist überraschend einfach:

1. **VS Code installieren** – Der kostenlose Editor von Microsoft
2. **GitHub Copilot Account** – Kostenlos für Lehrende über das GitHub Education Program
3. **Projekt anlegen** – Die Teaching-Agent Konfiguration in `.github/copilot-instructions.md` speichern
4. **Copilot Chat öffnen** – Mit `Strg+Shift+P` → "GitHub Copilot: Chat öffnen"
5. **Claude AI auswählen** – Im Agenten-Modus
6. **Teaching-Agent laden** – Mit dem Befehl `@teaching-agent /help`

Und schon kann es losgehen! Der Agent führt Sie durch den gesamten Prozess, stellt gezielte Fragen, wenn Informationen fehlen, und gibt Feedback, ob ein Schritt abgeschlossen ist, bevor es weitergeht.

## Warum das funktioniert

Der Erfolg dieser Methode basiert auf mehreren Prinzipien:

- **Strukturierung statt Chaos** – Klare Phasen und Rollen verhindern Kontextverlust
- **Spezifikationen zuerst** – Erst planen, dann umsetzen
- **Spezialisierung** – Jeder Agent hat seine Expertise
- **Dialog-Orientierung** – Der Agent fragt nach, statt zu raten
- **Versionierung** – Alle Artefakte sind nachvollziehbar und änderbar

## Vorstellung bei KI@Campus

Diese innovative Methode wurde am 21. November 2025 bei der Veranstaltungsreihe **KI@Campus – Impulse zu KI für die Hochschullehre** vorgestellt. Die Veranstaltung ist Teil einer Serie, die über das Wintersemester 2025/2026 verschiedene Aspekte des KI-Einsatzes in der Lehre beleuchtet.

Die vollständige Aufzeichnung des Vortrags ist auf dem Video-Campus Sachsen verfügbar und bietet einen detaillierten Einblick in die praktische Anwendung des Teaching-Agents.

## Fazit: Eine Revolution für die Lehre?

Spec-Driven Development zeigt einen Weg, wie wir KI strukturiert und effektiv in der Lehre einsetzen können. Statt sich von der Technologie überfordert zu fühlen, nutzen wir bewährte Methoden aus der Softwareentwicklung und adaptieren sie für unsere Bedürfnisse.

Der Teaching-Agent ist dabei mehr als nur ein Tool – er ist ein virtueller Kollege, der den gesamten Prozess der Kursentwicklung begleitet, strukturiert und unterstützt. Das Ergebnis sind hochwertige, interaktive OER-Materialien, die direkt mit LiaScript erstellt werden und ohne technische Hürden zugänglich sind.

Probieren Sie es selbst aus – die Einstiegshürde ist niedrig, das Potenzial jedoch enorm!

## Interaktive Präsentation

Sie können die vollständige Präsentation direkt im LiveEditor ausprobieren:

<iframe loading="lazy" class="liveeditor" src="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/spec-driven-development/refs/heads/main/README.md"></iframe>

## Weiterführende Links

#### Teaching-Agent & Dokumentation

{{< button link="https://github.com/LiaScript/teaching-agent" label="Teaching-Agent auf GitHub" >}}

#### Präsentation

{{< button link="https://github.com/LiaPlayground/spec-driven-development" label="GitHub Repository" >}}

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaPlayground/spec-driven-development/refs/heads/main/README.md" label="LiaScript Präsentation" >}}

#### Beispiel: Datenbanken-Vorlesung

{{< button link="https://github.com/andre-dietrich/Datenbankensysteme-Vorlesung" label="GitHub Repository" >}}

{{< button link="https://andre-dietrich.github.io/Datenbankensysteme-Vorlesung/" label="Kurs-Webseite" >}}

#### BMAD-METHOD

{{< button link="https://github.com/bmad-code-org/BMAD-METHOD" label="BMAD-METHOD Projekt" >}}

#### Veranstaltungsreihe

{{< button link="https://www.hd-sachsen.de/anmeldung/kicampus-impulse-zu-ki-fuer-die-hochschullehre" label="KI@Campus Veranstaltungsreihe" >}}
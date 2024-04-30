---
title: "LiaScript: Crash-courSe in 13 Akten (German)"
slug: liaScript-crash-course-in-13-akten
date: 2020-09-21
draft: false
author: André Dietrich
image: "/images/post/adam-and-eve.jpg"
categories:
    - Article
    - Tutorial
tags: 
  - LiaScript
  - Feature
  - YouTube

description: "Dieses Tutorial führt in 13 „kurzen“ Schritt-für-Schritt Videos in die Kursentwicklung mit LiaScript ein, von der Installation des Editors hin zu den wichtigsten Gestaltungsmöglichkeiten..."
---


Dieses Tutorial führt in 13 „kurzen“ Schritt-für-Schritt Videos in die Kursentwicklung mit LiaScript ein, von der Installation des Editors hin zu den wichtigsten Gestaltungsmöglichkeiten. Wie erstellt man interaktive Inhalte, nutzt Animationen und bringt dem Kurs das Sprechen bei...

Eine Zusammenfassung der wichtigsten Punkte je Video wird gegeben.

## \#1 Installation

{{< youtube NSgaLMHI_0I >}}
_Installation des Editors und der benötigten Plugins_

Die Quellen sind unten noch einmal aufgelistet, es wird einerseits der Atom-Editor benötigt, sowie die beiden Plugins. Natürlich könnt ihr auch jeden anderen Editor nutzen, es gibt zurzeit aber nur Erweiterungen für Atom, um das Arbeiten mit Kursen zu erleichtern.

* Atom: https://atom.io
  * liascript-preview: https://atom.io/packages/liascript-preview
  * liascript-snippets: https://atom.io/packages/liascript-snippets

Beide Plugins können direkt aus Atom heraus installiert werden:

1. Öffnet den Editor
2. Verwendet die Tastenkombination `Strg`+`,` um zu den Einstellungen zu gelangen
3. Wählt das Menü `+ Install` aus
4. Tippt "liascript" in die Suchmaske ein, die ersten beiden Treffer müssten die beiden Plugins sein
5. Klickt bei beiden auf `Install`

## \#2 Erste Schritte

{{< youtube aq7hd3bOarQ >}}
_Nutzung der Entwicklungsumgebung für die Kursentwicklung_

Die wichtigsten Tastenkombinationen:

* Atom:
  * <kbd>Strg</kbd>+<kbd>n</kbd>: Öffnen einer neuen Datei.
  * <kbd>Strg</kbd>+<kbd>s</kbd>: Sofortiges Speichern der aktuellen Datei, dies aktualisiert auch die Darstellung in der LiaScript-Vorschau.
  * <kbd>Strg</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd>: Öffnet die Fuzzy-Suche, damit könnt ihr nach allen allem suchen, was der Editor hergibt. Tippt einfach mal liascript ein.
* LiaScript:
  * <kbd>Alt</kbd>-<kbd>l</kbd>: Öffnet, bzw. schließt die LiaScript-Vorschau.
  * <kbd>F5</kbd>: Aktualisiert die Darstellung wie im Browser.

Wenn ihr im Textdokument `lia` eingebt, dann öffnet sich eine Hilfe nur für LiaScript-Kommandos. Hier könnt ihr einfach mal mit den Pfeiltasten nach unten navigieren und euch die verschiedenen Optionen anzeigen lassen. Wenn ihr auf <kbd>Enter</kbd> drückt, wird die ausgewählte Option für euch Übernommen. Falls mehrere Punkte bearbeitet werden können, so könnt ihr mit <kbd>Tab</kbd> navigieren.

> Für den Anfang gebt einfach `lia-init` ein und drückt auf `Enter`. Damit wird ein Beispiel-Dokument erstellt, das schon die wichtigsten Funktionen von LiaScript zeigt.

__PS:__ Mit Doppel-Klick könnt ihr in eurem Dokument navigieren. Entweder ihr macht einen Doppel-Klick auf das Dokument, dann springt ihr auf die entsprechende Stelle in der Vorschau, oder ihr macht das Gleiche in der Vorschau und spring dann an die passende Stelle im Dokument.

## \#3 Markdown die Grundlagen

{{< youtube Ee1k3aArMuU >}}
_Einführung in Markdown_

> __Was ist Markdown?__ Wenn wir alle HTML mit der Schreibmaschine tippen würden, dann hätten wir wohl das Problem, dass den Text im Nachhinein niemand mehr (oder nur mit großen Anstrengungen) lesen kann. Markdown ist dazu eine Alternative, die sich vor allem im Bloggen oder bei der Dokumentation durchgesetzt hat. Kurz gesagt, es ist eine vereinfachte Schreibweise/Strukturierung von Texten, die das Schreiben vereinfachen soll. Markdown muss dann von verschiedenen Interpretern noch in HTML umgewandelt werden oder wie in unserem Fall, in einen interaktiven online-Kurs.

Eine Kurzzusammenfassung von Markdown könnt ihr auch hier finden: https://guides.github.com/features/mastering-markdown

Und hier geht es zum Wikipedia-Eintrag: https://de.wikipedia.org/wiki/Markdown

## \#4 Multimedia

{{< youtube WN3RLIirs7o >}}
_Markdown Links & Bilder, LiaScript Audio & Videos & mehr_

Links bzw. Verweise werden in Markdown immer mit der folgenden Notation `[name](url)` beschrieben. In die eckigen Klammern kommt ein Name und in die runden Klammern die URL bzw. Adresse. Für verschiedene Dinge kann diese Notation überall im Dokument genutzt werden:

``` markdown
[Ein Link zu LiaScript](https://LiaScript.github.io)
```

Die beiden unteren Links machen das Gleiche in LiaScript und springen im Dokument:

``` markdown
[Ein relativer Link im Dokument](#12)

[Springe zu](#überschrift-mit-leerzeichen)
```

Bilder sind Verweise, die mit einem Ausrufezeichen __!__ am Anfang markiert werden. Befindet sich ein Bild außerhalb eures Projektes, dann müsst ihr die volle Adresse angeben, sonst reicht der relative Pfad:

``` markdown
![externes Bild](https://liascript.github.io/img/atom.jpg)

![lokales Bild](bilder/test.jpg)
```

Audio-Inhalte werden in LiaScript mit einem vorangestellten Fragezeichen __?__ markiert. Man kann das auch als ein Ohr sehen und neben gängigen Audio-Formaten wie mp3, mp4, wav, ... könnt ihr auch direkt euren Soundcloud link einfügen:

``` markdown
?[audio lokal](audio/brahms.mp3)

?[brahms](https://soundcloud.com/safyeldin/johannes-brahms-hungarian-dance-no-5)
```

Ein Video ist im Grunde nur ein Bild mit Ton, warum dann nicht Bild und Audio kombinieren __!?__

``` markdown
!?[video lokal](film.avi)

!?[youtube](https://www.youtube.com/watch?v=WN3RLIirs7o)
```

Und wollt ihr versuchen irgendwas von einer anderen Seite einzubinden und es handelt sich vielleicht nicht um ein Video oder ein Bild, dann versucht im Zweifel zunächst __??__

Damit wird auf OEMBED zurückgegriffen ... vielleicht funktioniert es ja für euch...

``` markdown
??[youtube](https://www.youtube.com/watch?v=WN3RLIirs7o)

??[spreaker](https://www.spreaker.com/user/12421087/elearning-distance-education-adilson-pin)

??[twitter](https://twitter.com/an_dietrich/status/1297964782369341441)

...
```

## \#5 Etwas andere Tabellen

{{< youtube F-IsJn_pZ0E >}}
_Interaktive Grafiken_

> Im Gegensatz zu anderen Systemen, ist es ein Ziel von LiaScript, den Interpreter (sprich die Maschine) so klug zu machen, dass er (sie) versucht zu interpretieren, was sich der Mensch gedacht hat und dies ggf. entsprechend darstellt.
>
> Nun ja, so weit sind wir noch nicht, aber mit Tabellen können wir schon einiges.

Markdown-Tabellen können, wenn sie eine entsprechende Struktur haben, auch als Datensätze interpretiert werden. Warum sollte man solche Datensätze nicht direkt visualisieren um sie somit auch explorativ untersuchen zu können? LiaScript beherrscht zurzeit ca. 11 verschiedene Darstellungen, dazu zählen (LinePlot, ScatterPlot, BoxPlot, BarChart, Radar, PieChart/Torten-Diagramme, Map/Karten, HeatMap, Parallel, Graph (gerichtet und ungerichtet), Sankey). Der Interpreter versucht selbständig zu ermitteln, welche Darstellung am besten zu euren Daten passt. Ihr könnt aber auch selber definieren, wie die Daten dargestellt werden sollen. Für mehr Information klickt auf den folgenden link:

[Link zu LiaScript Diagrammen](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#67)

## \#6 Publizieren auf GitHub

{{< youtube xF15DHuaJXo >}}
_Veröffentlichen und kollaboratives Editieren auf GitHub_

> Was im Video etwas schwierig aussah, ist in Wirklichkeit ziemlich einfach. Ihr könnt mittlerweile nicht nur auf [GitHub](https://github.com) eure Kurse ablegen, sondern auch in eurer [Dropbox](https://dropbox.com), [GitLab](https://gitlab.com), oder ownCloud eure Kurse hosten.

Der Vorteil von Versions-Management-Systemen wie [GitHub](https://github.com) oder [GitLab](https://gitlab.com) ist, dass ihr auf jede Version eures Kurses zugreifen könnt. Wenn ihr das nicht benötigt, dann steht euch natürlich frei, eure Daten dort zu speichern, wo ihr wollt. Wir speichern keine Inhalte oder Kurse, die LiaScript-Webseite stellt einfach nur den Vermittler oder besser gesagt Reader zur Verfügung. Nicht mehr und nicht weniger, alles wird beim Nutzer im Browser interpretiert und gespeichert.

Irgendwie muss man auf euer Dokument zugreifen können, sprich es herunterladen können. In der Dropbox müsst ihr euer Dokument veröffentlichen und erhalten dann einen Link, unter [GitHub](https://github.com) oder [GitLab](https://gitlab.com) reicht der Verweis auf das Projekt. Diese Adresse wird einfach als URL-Parameter an die LiaScript-Webseite angehängt, ersetzt `xxx.md` mit eurem Dokument und öffnet die Seite, bzw. teilt sie mit euren Schülern/Studenten. 

```
https://LiaScript.github.io/course/?https://xxx.md
```

## \#7 Quiz-Time

{{< youtube n8I-zDd4r0A >}}
_Verschieden Arten von Quizzen in LiaScript_

> Kleine Quizze sollen dem Lernenden die Möglichkeit geben, schnell zu überprüfen, ob er das gerade eben erfahrene auch verstanden hat.

LiaScript unterstützt zurzeit 6 verschiedene Arten von Quizzen, die alle noch weiter angepasst werden können. Allen gemein ist die Nutzung von doppelten, zumeist eckigen Klammern.


* __Einfache Text-Eingaben:__

  ``` Markdown
  Frage und ???

      [[Antwort]]
  ```

* __Single-Choice-Aufgaben:__ Es können beliebig viele Auswahlmöglichkeiten angehängt werden. Hier werden eckige Klammern mit runden kombiniert. Das erinnert etwas an Radio-Buttons.

  ``` Markdown
  Eine Frage mit mehreren Optionen, aber nur die mit dem X markierte ist richtig

      [( )] Falsch
      [(X)] Die einzig richtige Auswahlmöglichkeit
      [( )] Die ist auch __falsch__ ...
  ```

* Multiple-Choice-Aufgaben: Hier gilt das gleich wie bei Single-Choice-Aufgaben. Die doppelt eckigen Klammern können als Check-Box interpretiert werden.

  ``` Markdown
  Ein Frage mit mehreren Optionen und mehreren auszuwählenden Optionen

      [[ ]] Wie zuvor
      [[X]] X muss ausgewählt werden
      [[ ]] hier könnten auch Bilder kommen
      [[X]] <-- hier muss auch geklickt werden
  ```

* Matrizen: Die Kombination von beliebig vielen Single- und Multiple-Choice-Aufgaben.

  ``` Markdown
  Der Kopf der Tabelle wird ebenfalls in eckigen Klammern geschrieben, die Optionen sind jetzt aber horizontal dargestellt:

      [[1] [mehr Optionen ] [:-)]]
      [[X]       [X]         [X] ]  wie zuvor
      [( )       (X)         ( ) ]  hier gibt es auch nur eine Möglichkeit
  ```


* __Auswahlmöglichkeiten:__

  ``` Markdown
  Alle Möglichkeiten werden durch vertikale Striche `|` voneinander getrennt und die Option in runden Klammern definiert die Lösung:

      [[ falsch
      |  (__Richtig__)
      |  auch falsch
      ]]
  ```

* __"Generic"__ wenn ihr wisst was Ihr tut: Dann könnt ihr auch eigene Quiz-Typen definieren.

  ``` Markdown
  Im angehängten JavaScript-Tag könnt ihr alles machen, was ihr wollt. Wenn das Ergebnis `true` ist, dann gilt das Quiz als gelöst.

      [[!]]
      <script>
        // you are free to check anything you want
        true;
      </script>
  ```

> Tipp: Der Einschub von 4 Leerzeichen vor jedem Quiz, lässt andere Markdown-Interpreter dieses Element als Code-Block erkennen, daher es werden keine anderen Formatierungen unternommen oder ggf. der Inhalt unleserlich als Absatz dargestellt. _(LiaScript ist das jedoch egal...)_


__Weitere Möglichkeiten:__

* Hinweise: Diese werden mit `[[?]]` markiert. Danach kann eine Zeile beliebiges Markdown kommen, welches erst angezeigt wird, wenn der Nutzer auf die Hilfe klickt. Diese können an jede beliebige Quiz-Form angehängt werden.

  ``` Markdown
  Was ergibt 20 + 20 + 2?

      [[42]]
      [[?]] Erster Hinweis
      [[?]] Zweiter Hinweis
      [[?]] Letzter Hinweis
  ```

* Auflösungen

  ``` Markdown
  Was ergibt 20 + 20 + 2?

      [[42]]
      [[?]] Erster Hinweis
      [[?]] Zweiter Hinweis
      [[?]] Letzter Hinweis
      **********************************

      Dieser Text wird erst eingeblendet, wenn
      der Nutzer die richtige Antwort gegeben hat
      oder auf Auflösen klickt.

      **********************************
  ```

* __Noch mehr Komplexität gewünscht?__ Ihr könnt an jedes Quiz ein JavaScript hängen. Der Ausdruck `@input` durch die jeweilige Eingabe ersetzt.

  ``` Markdown
  Tippe Auflösung!

    [[auflösung]]
    <script>
      // @input will be replace by the user input
      let input_string = "@input";
      "auflösung" == input_string.trim().toLowerCase();
    </script>
  ```


Für mehr Informationen schaut euch den Quiz-Abschnitt in der Dokumentation an: [Mehr über Quizze](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#41)


## \#8 Formeln mit KaTeX

{{< youtube C7UvUBJLE4U >}}
_Formel im Kurs_

Für die Darstellung von Formeln nutzt LiaScript KaTeX, einer auf LaTex basierenden Beschreibung für hübsches Formel-Layout. Auf der Webseite https://katex.org findet ihr viele Hilfen, Beispiele und einen Editor. Zu beachten ist nur, dass Formeln in LiaScript (und auch anderen Markdown-Parsern) in Dollar-Zeichen `$` eingeschlossen werden. Einzelne Dollar-Zeichen im Text `$ f(a,b,c) = (a^2+b^2+c^2)^3 $` und doppelte für eine größere Formel als Block:

``` Markdown
$$
   \sum_{i=1}^\infty\frac{1}{n^2}
        =\frac{\pi^2}{6}
$$
```

## \#9 HTML, Markdown und Styling

{{< youtube ZWF0dSQ--ZM >}}
_Kombiniere Markdown mit HTML und Styling_

> Wenn ihr HTML könnt, dann könnt ihr es auch direkt einbinden, falls LiaScript etwas nicht kann. Zu beachten ist hierbei, dass HTML und Markdown kombiniert werden kann. Das bringt viele Vorteile, kann aber auch zu Problemen führen, wenn dies nicht beachtet wird.

Ihr könnt aber euere Markdown-Elemente direkt mit HTML-Attributen und CSS annotieren. Das hört sich etwas kompliziert an und sieht vielleicht auch etwas kompliziert aus, wenn man noch nie HTML geschrieben hat. Es erleichtert aber die Anpassung von Inhalten ungemein, ihr könnt Farben, Animationen, Breiten und vieles mehr anpassen, was sich auch besonders gut bei Bildern macht.

``` Markdown
<!-- style="color: red" -->
Der ganze Block wird rot eingefärbt und nur das ![Bild](https://liascript.github.io/img/atom.jpg)<!-- style="height: 30px" --> alleine skaliert.
```

Ein HTML-Kommentar wird mit `<!-- -->` eingeschlossen. Diese Tags werden von den meisten Interpretern ignoriert und nicht dargestellt, nur LiaScript versucht den Inhalt zu analysieren. Falls der Inhalt wie HTML-Parameter aussehen, dann werden diese auch auf die jeweiligen Elemente angewandt. Ein HTML-Kommentar am Anfang eines Blocks gilt für den gesamten Block während ein angehängter Kommentar nur für das jeweilige Element verwendet wird.

Für mehr Information schaut euch auch die entsprechenden Seiten in der Dokumentation:

* [Siehe Styling](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#12)
* [HTML und Markdown](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#19)
* Mehr Informationen zu HTML: https://wiki.selfhtml.org/wiki/HTML


## \#10 Animationen und Textausgabe

{{< youtube qfKVVy_hBWo >}}
_PowerPoint war gestern oder ... wie dein Kurs sprechen lernt_

> Animation und Sprachausgaben werden in LiaScript immer mit doppelt geschweiften Klammern assoziiert `{{}}` oder `{}{}`.

Wollt Ihr eine Präsentation machen, in der Elemente auftauchen und wieder verschwinden, dann nutzt diese Notation um zu definieren, wann etwas erscheinen bzw. wieder ausgeblendet werden soll:

``` Markdown
    {{1-3}}
Gesamte Absätze, Tabellen, oder Bilder können mit der oberen Notation markiert werden. Die erste Zahl definiert, wann dieser Text erscheint, die zweite ist optional und sagt, wann dieser Block wieder ausgeblendet werden soll.

Wie bei den Kommentaren zuvor, so kann diese Art der Animation auch für kleinere Elemente genutzt werden: Der folgende {2-4}{_wichtige Unterpunkt_} wird als zweites Element eingeblendet und verschwindet wieder bei Punkt 4.
```

Mehr Information zu Animationen und Effekten finden sich [hier](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#48).

Das automatische Vorlesen von Inhalten wird mit der vorangestellten `--{{}}--` definiert:

``` Markdown
    --{{1}}--
Diese Erklärung wird zu Punkt 1 automatisch vorgelesen.

    --{{2 US English Male}}--
This is an english text, that will be spoken out loud with an US aczent.
```

Für die Sprachausgabe wird https://responsivevoice.org genutzt. Die verschiedenen Sprachen sind [hier](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#52) aufgelistet, bzw. können diese im Editor durch Eingabe von `voice` auch durchsucht werden.

---

Falls ihr einen Sprachkurs mit "bedingter" Sprachausgabe erzeugen wollt, dann
schaut auch mal [hier](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#54).


``` Markdown
    {{|> Deutsch Female}}
Ein "|>" im Effekt sorgt dafür, dass der Text nur vorgelesen wird, wenn der Nutzer auch auf den Play-Button klickt. Funktioniert auch {|>}{mit kleinen} Texten.
```

## \#11 Programmieren in LiaScript

{{< youtube YGzsr7covec >}}
_Interaktives Programmieren mit dem internen Versions-Management_

> Wer Markdown beherrscht, der weiß auch das es die Möglichkeit gibt Code-Blöcke einzufügen, die entsprechend der Programmiersprache „eingefärbt“ werden. __Warum ist dieser Code eigentlich nie ausführbar und editierbar?__

In LiaScript ist es möglich jedes kleine Code-Fragment auch ausführbar zu machen, indem – wie bei den Quizzen – ein Script-Tag angehängt wird. Und ebenso, wie bei Quizzen wird der Code an der Stelle '@input' eingefügt. Somit kann jedes JavaScript-Beispiel auch direkt ausführbar gemacht werden:

```` markdown
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
s;
```
<script>@input</script>
````

Kompliziertere Projekte können umgesetzt werden, indem mehrere Code-Blöcke direkt aneinander gehängt werden, diese können auch mit einem Namen versehen werden und ein vorangestelltes '+' oder '-' definiert, ob dem Nutzer diese „Datei“ angezeigt werden soll.

```` markdown
``` js     -EvalScript.js
let who = data.first_name + " " + data.last_name;

if(data.online) {
  who + " is online"; }
else {
  who + " is NOT online"; }
```
``` json    +Data.json
{
  "first_name" :  "Sammy",
  "last_name"  :  "Shark",
  "online"     :  true
}
```
<script>
  // insert the JSON dataset into the local variable data
  let data = @input(1);

  // eval the script that uses this dataset
  eval(`@input(0)`);
</script>
````

Das `@input` Macro kann auch parametrisiert werden und somit die Inhalte der verschiedenen Dateien auch an der entsprechenden Stelle im JavaScript-Code eingefügt werden.

> Zusätzlich dazu können auch Bibliotheken eingebunden werden oder externe Server angefragt werden. Damit lassen sich nach JavaScript auch verschiedene andere Programmiersprachen ausführen.

Mit den Code-Segmenten kann noch viel mehr gemacht werden, siehe dazu den Abschnitt [Interactive Code](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#27) in der Dokumentation.

## \#12 ASCII-Art

{{< youtube GPlg_QczpMQ >}}
_Zeichnen lernen mit der Tastatur im Dokument_

### Zeichnungen

LiaScript unterstützt intern zwei verschiedene Arten von ASCII-Art, dazu können einerseits '<', '>', '-','_', '|', '+', '*' und viele Zeichen mehr genutzt werden, um verschieden Sachverhalte abzubilden. Der Vorteil davon ist, dass man nicht zusätzlich noch ein Zeichenprogramm bemühen muss, um einfache Grafiken zu erstellen, bzw. diese anzupassen und zu verändern. Um das „Bild“ vom Rest des Dokumentes abzugrenzen kann entweder ein normaler Code-Block verwendet werden, wobei als „Sprache“ 'ascii' angegeben werden muss, oder einfach nur mehr als 10 '\'' dieser sogenannten Backticks.

``````````````
``` ascii
                           .--->  F
  A       B     C   D     /
  *-------*-----*---*----*----->  E
           \            ^ \
            v          /   '--->  G
             B --> C -'
```
``````````````

Siehe hierzu den Abschnitt [ASCII-Art #2](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#89) der Dokumentation.

### Diagramme

Es gibt aber auch die Möglichkeit einfache Diagramme und Kurvenverläufe zu zeichnen, diese können sogar farblich sein. Dabei bestimmt das genutzte Zeichen oder der Buchstabe, die Darstellung der Kurve oder der Punkte.

``` Markdown
                                       diagram title
    1.5 |           *
        |                                 (* stars)
      y |        *      *
      - |      *          *
      a |     *             *       *
      x |    *                 *
      i |   *
      s |  *
        | *                              *        *
      0 +------------------------------------------
        2.0              x-axis                100
```

Siehe hierfür den Abschnitt [Charts](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#59) in der Dokumentation.

## \#13 Macros verstehen und anwenden

{{< youtube 6W_A7knrO2E >}}
_Erweiterung der LiaScript-Funktionalität mit Macros_

Sich wiederholende Aufgaben können mit Macros automatisiert werden, bzw. existieren schon einige, die direkt von euch genutzt werden können. Dabei ist Folgendes zu beachten:

* Macros definieren einen einfachen Mechanismus zur Textersetzung.
* Macros werden mit einem vorangestellten `@` markiert, hierbei ist auf Groß- und klein-Schreibung zu achten.
* Macros werden immer im Kopf eines Dokumentes definiert, das ist der erste HTML-Kommentar im Dokument.
* Macros können aber auch überschrieben werden, je Unterabschnitt.
* Es können Parameter übergeben werden:
  * diese werden mit Komma voneinander getrennt (`@macro(p1,p2,p3)`)
  * falls ein Parameter ein Komma enthält, dann kann die Markdown Notation genutzt werden

    ````
    @macro(`p1 mit, Komma und einer Zeile mit drei ))) Klammern`,p2,```
    p3 ist ein mehrzeiliges Element,
    das ersetzt werden soll
    ```)
    ````

* Macros aus anderen Kursen können mit `@import` in den eigenen Kurs übernommen werden.

Schaut euch unbedingt den Abschnitt [Macros](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#99) in der Dokumentation an. Und besucht https://github.com/LiaTemplates ... Diese Seite enthält eine Sammlung von Kursen, deren Funktionalität ihr direkt in euren Kurs einbauen könnt, die Sammlung enthält Beispiele für verschiedene Programmiersprachen, Visualisierungen und Grafiken, Simulationen und weiteres. Wir werden dieses freie Angebot in der Zukunft noch weiter aufstocken.

## \#14 Publizieren auf GitHub v2

Hier eine verbesserte Version zum Publizieren auf GitHub. Alles was benötigt wird ist ein GitHub-Account (dieser ist kostenlos) und Atom.

{{< youtube iwMPlVR9M9E >}}

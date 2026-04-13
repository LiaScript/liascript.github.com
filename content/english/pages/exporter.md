---
title: "Exporter"
meta_title: "LiaScript - Exporter"
description: "Export your LiaScript courses to SCORM, xAPI, PDF, ePub, DOCX, Android, and more."
draft: false
---

A generic LiaScript-Exporter that converts educational content into different formats, so that LiaScript courses can be used in Learning Management Systems (LMS) or as static documents (PDF, ePub, DOCX, ...).
Supported formats: SCORM 1.2, SCORM 2004, IMS, xAPI, Web, PDF, ePub, DOCX, Android, Project, RDF.

> __But__, it is still the easiest way to share your courses via
> __`https://LiaScript.github.io/course/?YOUR_REPO`__. The LiaScript course
> website is a fully fledged "offline-first" Progressive Web App (PWA), which
> allows to store all of your courses and states directly within your browser.
> There is no need for a back-end system, but if you need to track student
> progress, you can use this tool.

{{< button link="https://github.com/LiaScript/LiaScript-Exporter/releases" label="Download Desktop App" >}}
{{< button link="https://github.com/LiaScript/LiaScript-Exporter" label="GitHub Repository" >}}

---

## Usage

The LiaScript-Exporter is available in three forms — all driven by the same underlying export engine.

### 1. Desktop App (recommended)

Download and install the desktop application for your operating system from the
[GitHub Releases](https://github.com/LiaScript/LiaScript-Exporter/releases) page.
No Node.js installation or terminal knowledge required.
Available packages: `.exe`, `.dmg`, `.AppImage`, `.deb`, `.rpm`, and portable archives.

<video src="https://github.com/user-attachments/assets/05ddc764-8522-437a-b569-00b4df7d98b6" controls></video>

### 2. Web UI (via CLI)

Install [Node.js](https://nodejs.org/en/download/) first, then install the exporter globally:

``` bash
npm install -g @liascript/exporter
```

Then start the local web server:

``` bash
liaex serve
```

This starts the export server on port 3000. The web interface allows you to upload files or specify a Git repository, select an export target, configure advanced settings, and track export jobs in an asynchronous queue.

<video src="https://github.com/user-attachments/assets/f9d02a38-f6e0-45ef-b7a1-f9f424f8f318" controls></video>

### 3. CLI

For scripting, automation, or CI/CD pipelines. Once installed via npm, use `liaex` or `liascript-exporter`:

``` shell
liaex -h
```

Core options:

``` shell
-h --help     show help
-i --input    input file (Markdown or YAML for projects)
-p --path     path to pack (defaults to the input file's directory)
-o --output   output file name (default: "output"; extension set by format)
-f --format   scorm1.2, scorm2004, ims, web, pdf, epub, docx, xapi,
              android, project, rdf, json, fullJson (default: json)
-s --style    additional CSS to inject
-v --version  print version
-k --key      ResponsiveVoice key for text-to-speech
```

<video src="https://github.com/user-attachments/assets/591a6c89-f91e-401f-8b6d-8523f7173d78" controls></video>

### Docker (Android export)

Android exports require the Android SDK. The easiest approach is the pre-built Docker image:

``` bash
docker pull liascript/exporter
docker run --rm -v $(pwd):/work liascript/exporter \
  liaex -f android \
  -i /work/README.md \
  --android-appId io.github.liascript.mycourse \
  --output /work/output
```

You can also use Docker to run the web UI:

``` bash
docker run --rm -p 4000:4000 liascript/exporter
```

Then open `http://localhost:4000` in your browser.

<video src="https://github.com/user-attachments/assets/10018dad-05b1-46f8-bfda-e5ffa9e81086" controls></video>

---

## Format Reference

### SCORM 1.2

``` shell
liaex -i project/README.md --format scorm1.2 --output rockOn
```

> Note: SCORM 1.2 is too restrictive for storing data. Only location information is stored;
> quiz and survey states are lost after reload. Use __SCORM 2004__ if possible.

__`--scorm-masteryScore`__ — percentage of quizzes/surveys a student must complete to pass (0–100, default 80).

__`--scorm-organization`__ — sets the organization title in the `imsmanifest`.

__`--scorm-typicalDuration`__ — expected course duration in ISO 8601 format (e.g. `PT1H30M0S`). Default: `PT0H5M0S`.

__`--scorm-iframe`__ — wraps the course in an `<iframe>` to fix loading issues on ILIAS, OpenOlat, etc.

__`--scorm-embed`__ — embeds the Markdown source into the JS bundle. Use for Moodle 4 and LMS with restrictions on dynamic loading.

__`--lia-subfolder`__ — places course files into a `content/` subfolder; implies `--scorm-embed`.

__`--path`__ — if your README is not at the project root, use this to specify the directory to pack (input path is then relative to it).

__`--key`__ — [ResponsiveVoice](https://responsivevoice.org/) key for text-to-speech (free for educational use).

### SCORM 2004

Same options as SCORM 1.2, but supports persistent storage of quiz, survey, and task states.

``` shell
liaex -i project/README.md --format scorm2004 --output rockOn
```

### SCORM Examples

Tested commands for specific LMS:

| LMS | Command |
| --- | ------- |
| [ILIAS](https://www.ilias.de) | `liaex -i course/README.md -f scorm2004 --scorm-masteryScore 80 --scorm-iframe` |
| [learnworlds.com](https://learnworlds.com) | `liaex -i course/README.md -f scorm2004 --scorm-masteryScore 80 --scorm-iframe` |
| Moodle 3.x | `liaex -i course/README.md -f scorm1.2 --scorm-masteryScore 80 --scorm-iframe` |
| Moodle 4.x | `liaex -i course/README.md -f scorm1.2 --scorm-masteryScore 80 --scorm-embed` |
| [OPAL](https://www.bps-system.de/opal-lernplattform/) | `liaex -i course/README.md -f scorm1.2 --scorm-masteryScore 80 --scorm-embed` |
| [open edX](https://openedx.org) | `liaex -i course/README.md -f scorm1.2 --scorm-masteryScore 80 --scorm-embed` |
| [OpenOlat](https://www.openolat.com) | `liaex -i course/README.md -f scorm1.2 --scorm-masteryScore 80 --scorm-embed` |
| [scorm.cloud](https://app.cloud.scorm.com) | `liaex -i course/README.md -f scorm2004 --scorm-masteryScore 80 --scorm-iframe` |

For even simpler LMS-specific exports, the exporter has built-in presets:

``` shell
liaex -i course/README.md -f presets --moodle4
liaex -i course/README.md -f presets --ilias
liaex -i course/README.md -f presets --opal
```

Run `liaex -f presets` to list all available presets.

{{< youtube yk4uEqoKcpw >}}

### IMS Content

A simple packaging format supported by many LMS (IMS v1.1.4).

``` shell
liaex -i project/README.md --format ims --output course
```

__`--ims-indexeddb`__ — preserves quiz and coding states across reloads using the browser's IndexedDB.

__`--lia-subfolder`__ — places course files into a `content/` subfolder.

### WEB

Generates a standalone web project that can be uploaded to any web server.

``` bash
liaex --format web -i project/README.md -o outputFolder
```

__`--web-zip`__ — bundle output into a zip file instead of a folder.

__`--web-iframe`__ — hides the course URL by wrapping it in an iframe (breaks external slide links).

__`--web-indexeddb`__ — stores states persistently; optionally pass a key to pin the database to a specific version:

``` shell
liaex --format web -i project/README.md -o outputFolder --web-indexeddb someKeyToUse
```

> **Note:** Web exports must be served over HTTP — opening `index.html` directly via `file://` will not work.
> Preview locally with e.g. `npx serve outputFolder` or `python3 -m http.server --directory outputFolder`.

### Android

> **Tip:** Setting up the Android SDK locally can be complex. Use the [Docker image](#Docker-Android-export) instead.

``` shell
liaex -f android \
  -i course/README.md \
  --android-sdk /home/user/Android/Sdk \
  --android-appId io.github.liascript.mycourse
```

__`--android-appName`__ — app name (defaults to the course title).

__`--android-icon`__ — optional app icon (1024×1024 px).

__`--android-splash`__ — optional splash image (2732×2732 px).

__`--android-splashDuration`__ — splash screen duration in milliseconds (default: 0).

__`--android-preview`__ — open the result in Android Studio instead of building.

### PDF

Uses [Puppeteer](https://github.com/puppeteer/puppeteer) to render the full course as a single page and export it to PDF, including scripts, code examples, and iframes (preserved as screenshots).

``` shell
liaex --format pdf -i project/README.md -o output
```

__`--pdf-preview`__ — open an interactive browser preview instead of exporting (works with remote URLs too).

__`--pdf-stylesheet`__ — inject a custom CSS file to override fonts, colors, and LiaScript CSS variables.

__`--pdf-theme`__ — LiaScript theme: `default`, `turquoise`, `blue`, `red`, `yellow`.

__`--pdf-timeout`__ — additional wait time in ms for rendering to complete (default: 15000).

__`--pdf-scale`__ — webpage scale, between 0.1 and 2 (default: 1).

__`--pdf-format`__ — paper format, e.g. `A4`, `Letter` (default: A4).

__`--pdf-landscape`__ — landscape orientation (default: false).

__`--pdf-pageRanges`__ — e.g. `"1-5, 8, 11-13"`.

__`--pdf-displayHeaderFooter`__, __`--pdf-headerTemplate`__, __`--pdf-footerTemplate`__ — header/footer with `date`, `title`, `url`, `pageNumber`, `totalPages` classes.

__`--pdf-printBackground`__ — print background graphics (default: false).

__`--pdf-margin-top/right/bottom/left`__ — page margins with units.

__`--pdf-preferCSSPageSize`__ — prioritize `@page` CSS size over format/width/height.

__`--pdf-omitBackground`__ — hide default white background for transparent screenshots (default: true).

### ePub

Renders the course with Puppeteer and packages it as an ePub compatible with most e-readers.

``` shell
liaex -i project/README.md --format epub --epub-title "My Course" --epub-author "Author Name" --output course
```

__`--epub-title`__ — title of the book (required).

__`--epub-author`__ — author name(s), semicolon-separated for multiple (required).

__`--epub-publisher`__, __`--epub-description`__, __`--epub-language`__ (default: `en`), __`--epub-version`__ (2 or 3, default: 3).

__`--epub-cover`__ — path or URL to cover image.

__`--epub-stylesheet`__, __`--epub-theme`__ — custom CSS or LiaScript theme.

__`--epub-fonts`__ — comma-separated paths to custom font files to embed.

__`--epub-toc-title`__ — table of contents title (default: `"Table Of Contents"`).

__`--epub-hide-toc`__ — hide table of contents (default: false).

__`--epub-timeout`__ — additional rendering wait time in ms (default: 15000).

### DOCX

Exports the course as a Microsoft Word document (.docx), compatible with Word 2007+, LibreOffice, and Google Docs.

``` shell
liaex -i project/README.md --format docx --output course
```

__`--docx-title`__, __`--docx-author`__, __`--docx-subject`__, __`--docx-description`__, __`--docx-language`__ (default: `en-US`).

__`--docx-orientation`__ — `portrait` or `landscape` (default: `portrait`).

__`--docx-font`__ — font name (default: `Arial`). __`--docx-font-size`__ — in half-points (default: 22 = 11pt).

__`--docx-header`__, __`--docx-header-html`__, __`--docx-footer`__, __`--docx-footer-html`__, __`--docx-page-number`__.

__`--docx-stylesheet`__, __`--docx-theme`__ — custom CSS or LiaScript theme.

__`--docx-timeout`__ — additional rendering wait time in ms (default: 15000).

### xAPI

Generates a self-contained web package with a `tincan.xml` manifest for tracking learning experiences with a Learning Record Store (LRS).

``` shell
liaex -i project/README.md --format xapi --output course
```

__`--xapi-endpoint`__ — LRS endpoint URL.

__`--xapi-auth`__ — LRS authentication string (e.g. `"Basic dXNlcm5hbWU6cGFzc3dvcmQ="`).

__`--xapi-actor`__ — JSON string representing the xAPI actor (default: anonymous).

__`--xapi-course-id`__, __`--xapi-course-title`__ — custom course identifier and title.

__`--xapi-mastery-threshold`__ — mastery score threshold (default: 0.8).

__`--xapi-zip`__ — package the output as a zip file.

__`--lia-subfolder`__ — places course files into a `content/` subfolder.

### Project

Bundle a collection of courses into a custom overview page. The input is a YAML file:

``` yaml
title: My OER Collection
comment: A collection of open educational resources
logo: https://example.org/logo.png

collection:
  - url: https://raw.githubusercontent.com/LiaScript/docs/master/README.md
  - url: https://raw.githubusercontent.com/LiaBooks/LiaScript-Tutorial/main/README.md
    title: LiaScript Tutorial
    tags:
      - Tutorial
      - OER
```

``` shell
liaex -i curriculum.yml --format project
liaex -i curriculum.yml --format project --project-generate-pdf --pdf-format A4
```

__`--project-no-meta`__ — disable OpenGraph/Twitter card meta generation.

__`--project-no-categories`__ — disable category/tag filter.

__`--project-category-blur`__ — blur non-matching courses instead of hiding them.

__`--project-generate-pdf`__ — auto-generate PDFs for every course card.

__`--project-generate-scorm12`__, __`--project-generate-scorm2004`__ — auto-generate SCORM packages.

__`--project-generate-ims`__ — auto-generate IMS packages.

__`--project-generate-cache`__ — skip regenerating files that already exist.

### RDF & JSON-LD

Exports LiaScript course metadata as RDF (JSON-LD or n-quads) based on schema.org `Course`.

``` shell
liaex --format rdf --rdf-preview -i https://raw.githubusercontent.com/liaScript/docs/master/README.md
```

__`--rdf-format`__ — `json-ld` (default) or `n-quads`.

__`--rdf-preview`__ — print result to console instead of writing a file.

__`--rdf-url`__ — inject a remote URL when processing a local file.

__`--rdf-type`__ — override the schema type (default: `Course`; e.g. `EducationalResource`).

__`--rdf-educationalLevel`__ — e.g. `beginner`, `intermediate`, `advanced`.

__`--rdf-license`__ — license URL (auto-detected from a `LICENSE` file if not set).

__`--rdf-template`__ — URL or local JSON file to use as a base template.

The following LiaScript course header fields are used:

``` markdown
<!--
author: Your Name
email: author@email.com
comment: Course description
version: 1.0.0
logo: https://example.org/logo.jpg
tags: keyword 1, keyword 2
language: en
-->
# Course Title
```

---

## GitHub Action

Export courses automatically in GitHub workflows on every push:

``` yaml
name: Export Course
on: [push]

jobs:
  export:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4

    - name: Export to SCORM
      uses: LiaScript/LiaScript-Exporter@master
      with:
        input-file: 'README.md'
        format: 'scorm1.2'
        output-name: 'my-course'
        scorm-organization: 'My Organization'

    - name: Upload SCORM package
      uses: actions/upload-artifact@v4
      with:
        name: scorm-package
        path: '*.zip'
```

Full documentation: [`action/README.md`](https://github.com/LiaScript/LiaScript-Exporter/blob/master/action/README.md)
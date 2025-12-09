---
banner:
  title: "Turn simple Markdown into interactive open courses"
  content: |
    Create, share, and remix Open Educational Resources with LiaScript — an open Markdown dialect and interpreter that transforms plain text into fully interactive courses in any modern browser.
    <div style="font-size: 1rem; opacity: 0.85; margin: 0.8rem;">
      <em>For — Educators · Institutions · Developers</em>
    </div>
    <strong>Already have a LiaScript (Markdown) file?</strong><br>
    <br>
    <input
      type="url"
      style="border: 1px solid black; border-radius: 5px; padding: 8px; margin-right: 6px; max-width: 360px; width: 100%;"
      placeholder="Paste its URL here and open it as a live course"
      id="course_url">
    <button class="btn btn-primary" onclick="location.href = load(document.getElementById('course_url').value); return false;">
      Open Course
      <i class="fa fa-arrow-right pl-2"></i>
    </button>
  image: "/images/main.png"

# Demo Video Section
demo_video:
  enable: true
  title: "See LiaScript in Action"
  description: "A short demo showcasing how plain Markdown becomes an interactive course."
  video: "https://www.youtube.com/embed/rbqm6MN0We4"
  button:
    enable: true
    label: "LiaScript Hello World"
    link: "https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaScript/Hello-LiaScript/refs/heads/main/README.md#1"


shorts:
  enable: true
  title: "LiaScript Shorts"
  description: "Quick, focused video snippets showing specific LiaScript capabilities in just a few seconds."
  playlist: "https://www.youtube.com/watch?v=saxAFw7XpjI&list=PL7LrRfaZulhch1ZtC6nSWOPcu1Xm80rlf&index=1"
  items:
    - id: "saxAFw7XpjI"
      title: "Short #1 – One Document, Many Representations (Part 1)"
      description: "A single Markdown file can become a narrative presentation, lecture, or interactive course. This demo also shows how LiaScript handles text-to-speech with automatic fallbacks."

    - id: "kiGn5xhe-A8"
      title: "Short #2 – One Document, Many Representations (Part 2)"
      description: "More examples of how one Markdown source can be transformed into multiple localized or adapted versions of the same course."

    - id: "RAQeOPYED28"
      title: "Short #3 – Intelligent Image Handling"
      description: "LiaScript treats images context-aware: floating layouts, automatic galleries, captioning, and optimal sizing — depending on how you structure your Markdown paragraph."

    - id: "bA3ZdSTalG4"
      title: "Short #4 – Embedding Media Made Easy"
      description: "LiaScript supports four lightweight ways to embed media: classic images, audio tags, inline videos, and flexible URL-based embeds for any custom content."

    - id: "9kIdg-9rmHg"
      title: "Short #5 – Quizzes in 100 Seconds"
      description: "Create rich quizzes directly in Markdown: multiple choice, single choice, matrix questions, text input, dropdowns, or gap texts — all without an LMS."

    - id: "-VrEtZvhn6I"
      title: "Short #6 – Executable Code Blocks"
      description: "Make code snippets editable and runnable inside your course by attaching a simple script definition. Perfect for tutorials and programming lessons."

    - id: "DuxVovCc7os"
      title: "Short #7 – Tables & Data Visualization"
      description: "LiaScript can turn Markdown tables into charts automatically. Ten plot types are available, and you can still pick your preferred visualization."

    - id: "5jjXT-JsyYY"
      title: "Short #8 – Custom Macros"
      description: "Define your own macros or reusable LiaScript components with just an @name. Add parameters, shortcuts, and even block macros to simplify authoring."

    - id: "C5Lyn0by580"
      title: "Short #9 – Serverless & Decentralized Hosting"
      description: "Host LiaScript courses anywhere: classic HTTPS, GitHub, GitLab, Nextcloud, Dropbox, IPFS, data URIs, Nostr, WebTorrent, OnionShare, and more."



# Features
features:
  - title: "No build steps. No configuration."
    image: "/images/example.png"
    content: |
      LiaScript parses and renders your course directly in the browser, on the client side, in real time. All you need is the URL to your course file. A course is just a plain Markdown document enhanced with LiaScript for:
    bulletpoints:
      - rich multimedia content & lightweight animations
      - text-to-speech output in multiple languages
      - quizzes, surveys, and self-checks
      - online programming and executable examples
      - ASCII-art diagrams & dynamic charts
      - seamless JavaScript integration
      - collaborative and interactive classrooms
    button:
      enable: true
      label: "Read the Documentation"
      link: "https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#1"

  - title: "Open-courSe: like open source, but for courses"
    image: "/images/bg-showcase-2.jpg"
    content: |
      You stay in full control of your content — but by hosting your courses on GitHub, you make it easy for others to contribute, translate, and adapt them. There is no single source of truth, and there does not have to be only one course. With branches and forks you can evolve multiple variants for different languages, contexts, and target groups.
    button:
      enable: true
      label: "Explore Open Courses"
      link: "https://github.com/topics/liascript-course"

  - title: "JavaScript-ready by design"
    image: "/images/monch.jpg"
    content: |
      Unlike most Markdown parsers, LiaScript lets you use any JavaScript library you like. Integrate visualizations, simulations, computer algebra systems, or custom widgets — whatever helps your learners.
      <br />
      To make this easy and reusable, LiaScript provides a powerful macro system that lets you wrap HTML and JavaScript into simple, author-friendly building blocks.
    button:
      enable: true
      label: "Browse Templates"
      link: "https://github.com/topics/liascript-template"

  - title: "LiveEditor: collaborative authoring in your browser"
    image: "/images/LiveEditor.png"
    content: |
      The LiveEditor is a browser-based collaborative editor built specifically for LiaScript. Your content is stored locally in your browser; collaboration happens peer-to-peer via
      <a target="_blank" href="https://webrtc.org">WebRTC</a> and
      <a href="https://yjs.dev/">Yjs</a>.
      Snippets for common LiaScript patterns are built-in — just type "lia" to discover them. And if you have a GitHub account, you can export your courses directly as gists with a few clicks.
    button:
      enable: true
      label: "Try the LiveEditor"
      link: "https://liascript.github.io/LiveEditor"
---

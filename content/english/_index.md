---
# Banner
banner:
  title: "Open Educational Resources made Easy and Decentralized..."
  content: |
    Share your knowledge and build online courses with simple LiaScript! LiaScript is an open Markdown dialect and interpreter for interactive and educational content, providing everything you need to jumpstart a journey to engaging OER projects.
    <br>
    <br>
    <input type="url" style="border: 1px solid black; border-radius: 5px; padding: 8px; margin-right: 6px;" placeholder="Enter your Markdown-URL ..." id="course_url">
    <button class="btn btn-primary" onclick="location.href = load(document.getElementById('course_url').value); return false;">
      Load Course
      <i class="fa fa-arrow-right pl-2"></i>
    </button>

  image: "/images/main.png"
  button:
    enable: false
    label: "Load Course"
    link: "https://liascript.github.com/course"

# Features
features:
  - title: "No Building Steps (no configuration)"
    image: "/images/example.png"
    content: |
      Your course is parsed and rendered in real-time within the browser at client-side. You only have to provide the URL to your course file. A course is a simple Markdown format with support for:
    bulletpoints:
      - multimedia content & animations
      - text to speech output in different languages
      - quizzes & surveys
      - online programming
      - ASCII-art diagrams & dynamic charts
      - JavaScript by default
      - collaborative classrooms
    button:
      enable: true
      label: "Documentation"
      link: "https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#1"

  - title: "Open-courSe"
    image: "/images/bg-showcase-2.jpg"
    content: |
      You are the owner of your content, but by hosting your course on github you give others the chance to contribute to, to translate, to adapt to your course.
      There is no single source of truth, so why should there be only one course. With the help of git branches and forks it may be possible to develop course for different students and target audiences. 
    button:
      enable: true
      label: "List Open Courses"
      link: "https://github.com/topics/liascript-course"


  - title: "JavaScript Ready"
    image: "/images/monch.jpg"
    content: |
      In contrast to other Markdown-parsers you are free to use any JavaScript library you want. This way you can integrate any kind of visualization, simulation, computer-algebra-system, or whatever you might think is useful for your course.
      <br />
      To simplify the usage of JavaScript and HTML elements, LiaScript provides a macro-system to cover repetitive tasks. 
      
    button:
      enable: true
      label: "List of Templates"
      link: "https://github.com/topics/liascript-template"
      
    button:
      enable: true
      label: "List of Templates"
      link: "https://github.com/topics/liascript-template"

  - title: "LiveEditor"
    image: "/images/LiveEditor.png"
    content: |
      This is a browser-based collaborative online editor for LiaScript.
      All content is stored within your browser. Collaboration is
      enabled by
      <a target="_blank" href="https://webrtc.org">WebRTC</a> and
      <a href="https://yjs.dev/">Yjs</a>. The snippets are already
      included, simply type "lia" to explore some features of LiaScript.
      By the way, if you have a GitHub account, you can directly export
      your courses to gists.
      
    button:
      enable: true
      label: "Try it out"
      link: "https://liascript.github.io/LiveEditor"

  

---

---
title: Install Visual Studio Code with LiaScript
date: 2022-05-18
draft: false
author: André Dietrich
image: "/images/post/vscode.png"
categories: ["Tutorial", "Article", "Editor"]
tags: ["LiaScript", "Tools", "YouTube"]

description: This blog entry presents a a detailed instruction on how to install Visual Studio Code with LiaScript and how to use it to develop your LiaScript courses.
---


Due to some problems with package updates for [Atom](https://atom.io) editor, we decided to created two [LiaScript](https://LiaScript.github.io) extensions for [VSCode](https://code.visualstudio.com).

{{< youtube 8vFYMo5xqyY >}}

However, [Atom](https://atom.io) can still be used to create [LiaScript](https://LiaScript.github.io) courses and from our point of view it is still the easier editor to learn (for more information follow this [link](/blog/install-atom-with-liascript/)).
But, it is now also possible to develop courses and preview them with [Visual-Studio-Code](https://code.visualstudio.com).
The two extensions are similar to those we had developed for [Atom](https://atom.io), but with slight differences.

1. If you later want to publish your courses on [GitHub](https://github.com) or [GitLab](https://gitlab.com), you will have to download and install [git](https://git-scm.com) at first:

   https://git-scm.com/downloads
   
   Stay with the default settings and simply hit next until you reach the installation button.
   

2. Download and install [VSCode](https://code.visualstudio.com) from:

   https://code.visualstudio.com/Download

3. Open [VSCode](https://code.visualstudio.com) and go to the Extensions tab

4. Type `liascript` and click on install for the two modules:

   - [liascript-preview](https://marketplace.visualstudio.com/items?itemName=LiaScript.liascript-preview)
   - [liascript-snippets](https://marketplace.visualstudio.com/items?itemName=LiaScript.liascript-snippets)

5. In order to enable the snippets, hit <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> to get to the fuzzy search and type `settings` to open the settings.json.
   Then copy the following code into the configuration file (into the braces):
   
   ```json
   "[markdown]": {
      "editor.tabCompletion": "on",
      "editor.quickSuggestions": true,
      "editor.snippetSuggestions": "top"
   },
   ```
   `
   Hit <kbd>Ctrl</kbd>+<kbd>S</kbd> to store this configuration

6. Close and reopen the VSCode again to load the settings.

7. You can now create a new folder and a course file with the ending `.md`.
   This ending says, that the file is of type Markdown, and it will use the appropriate syntax highlighting, and you can use the LiaScript snippets.
   
8. Simply type `liainit` and hit enter.
   This will create a course stub, which can be used as a starting point for your course development.
   
   Whenever you type `lia`, a bundle of snippets will be presented to you.
   Use this to search for quizzes or any other stuff, it will provide you with an additional help, and inject the content for you.
   
   Keywords:
   
   - `lia`: [LiaScript](https://LiaScript.github.io) basic help
   - `voice`: Search through all supported voices
   - `hili`: Code highlighting for all supported programming languages

9. To open the preview-mode, simply hit <kbd>Alt</kbd>+<kbd>L</kbd> to open the development server in live-mode, or do a fuzzy search with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and then type `liascript to search through all settings.

10. Make changes and hit <kbd>Ctrl</kbd>+<kbd>S</kbd> to store the course content, which will trigger a reload of your entire course.

11. For navigating, simply press <kbd>Ctrl</kbd> and click onto the line to open the slide in the preview, or double onto the slide to move the cursor to the appropriate line within the editor.

12. The development-server will use your project-path as root.
    If no file is selected, the browser will open a file list, which depicts your entire project structure.
    Simply click onto one of the files to preview it.
    
13. If the updates in live mode are annoying, you can also stop the development server with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and by typing `liascriptstop` and hit enter.
    If you then perform the fuzzy search again or hit <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd>, there is another option, which starts only the development server, but not in live mode.
    This way, you have to reload the preview manually.
    
14. Text to speech output does not work in on the development server, but you can test your course also on the LiaScript project website.
    Again, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> is our friend, type `liascripttest` and hit enter.
    This will serve the course from localhost, but will load this on the website.
    This is a good way to check your text-to-speech and also to check if all `<iframe>`s and multimedia content gets loaded.
    
15. Have Fun ;-)

---
title: Install Atom with LiaScript (Deprecated)
slug: install-atom-with-liascript
date: 2022-05-18
draft: false
author: André Dietrich
image: "/images/post/atom.png"
categories:
    - Tutorial
tags:
    - Video
    - GitHub
    - GitLab

description: This blog entry presents a little workaround and shows how you can still use our two plugins to develop your LiaScript courses offline with the Atom editor.
---

This blog entry presents a little workaround and shows how you can still use our two plugins to develop your [LiaScript](https://LiaScript.github.io) courses offline with the Atom editor.
Unfortunately, it is not possible for us at the moment to update the [LiaScript](https://LiaScript.github.io) packages for [Atom](https://atom.io), we hope this problem will be solved soon.
On the other hand, it is now also possible to use Visual Studio Code.

{{< youtube h1DjjzRHWW0 >}}


1. Download and install [git](https://git-scm.com) from:
   https://git-scm.com/downloads

   Stay with the default settings and simply hit next until you reach the installation button.
   [git](https://git-scm.com) in this case is required to install our plugins, and you will need it to publish your courses later on [GitHub](https://github.com) or [GitLab](https://gitlab.com)

2. Download and install the free and open [Atom](https://atom.io) editor from:
   https://atom.io

   No additional settings are required.

3. After installing and opening [Atom](https://atom.io) for the first time, simply hit the keys [Ctrl+Shift+P].
   This will take you to the fuzzy search.
   Simply type `settings` and then hit enter.

4. Go to the Install-Tab and type `andre-dietrich/liascript-preview` then press install.
   This will install the plugin directly from:

   https://github.com/andre-dietrich/liascript-preview

5. After installing the preview, change the input to `andre-dietrich/liascript-snippets` and click install.
   This will install the snippets from:

   https://github.com/andre-dietrich/liascript-snippets

6. It might be required to close and reopen Atom to bring the snippets plugin to live.

7. Open a new folder and create a new file with the file ending `.md`.
   This stands for Markdown and the snippets plugin is automatically associated with it.

8. Start a new course by typing `liainit` in your Markdown document and hit enter.
   This insert a new [LiaScript](https://LiaScript.github.io) course stub, that can be used as a starting point.
   Whenever you type `lia`, a bundle of snippets will be presented to you.
   Use this to search for quizzes or any other stuff, it will provide you with an additional help, and inject the content for you.

   Keywords:

   - `lia`: [LiaScript](https://LiaScript.github.io) basic help
   - `voice`: Search through all supported voices
   - `hili`: Code highlighting for all supported programming languages

9. To open the preview-mode, simply hit [Alt+L] or do a fuzzy search with [Ctrl+Shift+P] and then type `liascripttoggle` and hit enter.
   With a second [Alt+L] the preview will be closed again (toggled).

10. Whenever you make changes to your document and store it, by hitting [Ctrl+S], this will trigger the preview to reload the entire course.

11. For navigating between slides and code, simply double-click onto the line within the editor to load the slide within the preview, or double-click onto the element within the preview to jump to the appropriate line within the document.

12. Have Fun ;-)

Check out the following post on [Setting-up-Atom](/blog/setting-up-atom/) to add more plugins to your editor, which can speed-up and improve your development process.

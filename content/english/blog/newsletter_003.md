---
title: "Newsletter 11/04/2024"
slug: "newsletter-11-04-2024"
date: 2024-04-11
draft: false
authors:
  - André Dietrich
  - Sebastian Zug
image: "/images/post/newsletter.png"

categories:
  - Newsletter
  - Community
tags:
  - LiaScript
---

... as you might have seen finished 99% of our documentation, so nearly everything, every detail or previously hidden feature is now documented

https://github.com/liascript/docs

and we did a screen-recording of all missing chapters, that you will find here in the playlist:

https://www.youtube.com/watch?v=Ve_Ncf35wl0&list=PL7LrRfaZulheLCSz-eGM1FBA-4NtC_b_X&index=12

We recommend to have a look at the JavaScript part, since we believe that this might be an underrated or hidden gem, that can be used for "data-driven-publishing"

{{< youtube kV152vxjLok >}}

The idea behind this reinterpretation of JavaScript is to allow everyone to inspect not only the data and your findings, but also the code. All tiny scripts whether they are used for calculating or in combination with an input represent a larger execution-graph, if you change one value, all subsequent scripts will be updated too. Just think of this as an Excel-spreadsheet, when you change one cell all the others will be changed too and in LiaScript these cells/calculations are just a native element that you can use to create more interactive and engaging content. However, these calculations are not hidden from the user, by double-clicking onto the result of a script-tag, your users can inspect the code and even modify it. Thus, do not only publish data and findings, but also the algorithms that everyone can explore.

Furthermore, we tried to collect all information into the new LiaScript-website:

https://liascript.github.io

which is build with hugo and Markdown, you can find the sources here:

https://github.com/liaScript/liascript.github.com

Within the next weeks we will try to fill the blog with examples, that we have created and stored in issues on GitHub or in chats, so finding information will be much easier, as we hope...

So everyone is invited, if you want to add a blog-post, showcase your LiaScript project, describe a certain issue/problem/example/finding, feel free to either send us a pull-request for the website or send us an markdown-file and we will add it...

Last but not least, we screwed up with the classroom-feature, we are not sure if the latest Yjs updates or our understanding of their CRDT-implementation broke our neck. But, however we updated the synchronization intensively, removed not working backend-layers and added 3 new services MQTT, torrent, NoStr, which can be used freely to create distributed and open classrooms. This is also why one video from the documentation has not been recorded so far, this is the chapter on surveys and classrooms.

In short, when you open a classroom, you create basically an open chatroom in which your browsers establish a connection and try to synchronize their states, maybe up to 20 persons. These the state of quizzes, surveys, the collaborative editing (this is still a bit glitchy) and a chat, which understands LiaScript and where you can add quizzes, surveys, videos, galleries, code-snippets etc. Where is it stored? Only within your browser, thus when all leave the room their synchronized state will simply vanish ... However, feel free to try this feature, and if you have bug-reports, please open an issue on GitHub or send us a mail...

Till next month ...
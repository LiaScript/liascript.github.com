---
title: "Serverless Online Education"
date: 2023-11-24
draft: false

author: André Dietrich

description: "This screencast from the Open Educa Berlin (OEB) Conference emphasized and demos the potential of decentralized, browser-based technologies in educational settings."

image: "/images/post/oeb.png"

categories: ["Conference", "Tutorial"]
tags: ["LiaScript", "Open Educa Berlin", "Serverless", "WebRTC", "IPFS", "WebTorrent", "OnionShare", "CRDTs"]

---

The presentation at the [Open Educa Berlin (OEB)](https://oeb.global/conference) Conference on November 24th 2023 focused on "Serverless Online Education" and emphasized the potential of decentralized, browser-based technologies in educational settings.

See the agenda [here](https://oeb.global/programme/agenda/oeb-23/sessions/39044).

---

{{< youtube 5Hdqn-gppyU >}}

---

The recorded video tutorial elaborated on using LiaScript for creating interactive online courses, covering basics of markdown, progressive web apps, offline access, distributed education methods, classroom creation, and hardware sharing in the browser.

You can repeat all the steps by your own by using the following URL as a bootstrap:

https://github.com/LiaPlayground/OEB-2023

... or directly edit the content within the LiveEditor, but do not forget to fork this course there, in order to store your changes permanently within the browser:

https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/OEB-2023/main/README.md

Key points included:

1. **Centralized vs. Decentralized Platforms**: The presentation highlighted the shift from centralized server-based platforms to decentralized browser-based solutions in online education. We argued that central server reliance is outdated, and advocating for the innovative use of web browsers as operating systems to access content and decentralized resources.

2. **Interactive Content Creation**: Participants used LiaScript to create interactive educational content in small groups, by using the [LiveEditor](https://liascript.github.io/LiveEditor). In contrast to other "Markdown"-editors (e.g., [CodiMD](https://github.com/hackmdio/codimd), [HedgeDoc](https://hedgedoc.org)), this presents an entirely browser-based solution that does not require a centralized server for storing content and collaborative editing.

3. **Serverless Storage**: Various serverless technologies were introduced, including [Progressive Web Apps](https://en.wikipedia.org/wiki/Progressive_web_app) (PWAs) for offline content access, LiaScript and its LiveEditor as two PWA examples, and methods for content storage and sharing like URL encoding, the [InterPlanetry File System](https://ipfs.tech) IPFS, [WebTorrent](https://webtorrent.io), and [OnionShare](https://onionshare.org) for sharing content via the Tor-Network.

4. **Decentralized Communication**: The workshop involved interactive sessions in virtual classrooms utilizing decentralized communication methods, showcasing alternatives to traditional, server-reliant methods. The basics of [WebRTC](https://en.wikipedia.org/wiki/WebRTC) were explained for creating browser-based peer-to-peer networks. Additionally, the concept of [CRDTs (Conflict-free Replicated Data Types)](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) was discussed for achieving consistency in peer-to-peer networks without central servers.

5. **Classrooms**: The use of these technologies in creating serverless classrooms in LiaScript was demonstrated, which allows to instantly connect users without the need for a login, authentification. A classroom is only established beween users, no state is stored or logged

6. **Remote Labs**: Finally we demonstrated that these tecnologies can also be used for sharing remote labs. [Edrys(-Lite)](https://github.com/Cross-Lab-Project/edrys-Lite/) was used to share the setup of a laboratory with Arduino hardware, all through the browser...

7. **Session Takeaways**: Participants gained insights into modern browser capabilities for communication and collaboration, learned methods to share content serverlessly, and began to critically evaluate centralized platforms in terms of cost, sustainability, and functionality.


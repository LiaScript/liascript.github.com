---

title: "Nostr & LiaScript & OER"
slug: "nostr-and-liascript-and-oer"
date: 2025-05-01
draft: false
authors:
  - André Dietrich
image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Nostr_logo.png"

categories:
  - Community
  - Technology
  - Tools

tags:
  - Nostr
  - OER

---


Discover how Nostr’s decentralized network can change the way we create and share Open Educational Resources. With LiaScript’s Markdown-powered LiveEditor, you can package an entire course into a single link—a Nostr URI—and share it freely, without relying on any central server. You can even tuck images, audio, or video right into that link using Data-URIs, so learners get everything they need in one click.

### 1. What Is Nostr?

Nostr is a simple, open system for sending and receiving notes and documents without any one company or server in control. Think of it like email or messaging, but instead of your messages sitting on a provider’s platform, they live on a network of “relays”—lightweight servers that only store and pass along the messages you send.

* **You own your content.** Every note or document you publish is signed and sent out by your own device.
* **Relays do the rest.** They hold onto your content and deliver it to anyone who asks for it—no central gatekeeper, no single point of failure.

More information about Nostr can be found in [Wikipedia](https://en.wikipedia.org/wiki/Nostr) or in the [Nostr documentation](https://nostr.com).

### 2. The Power of Nostr URIs

A **Nostr URI** is a special kind of link that contains everything a compatible app needs to fetch your course:

* **`nostr:` prefix.** Tells the app to use the Nostr network.
* **Identifier.** Points to your specific course or document.
* **Relay list.** (Optional) Recommends which servers to ask for the content.

When someone clicks or pastes that link into the LiaScript (or any Nostr-aware tool), it automatically reaches out to the right relays, grabs your course, and displays the content instantly.

### 3. LiaScript and Nostr

The LiveEditor now allows to export your course as a Nostr URI. This means you can create a course in Markdown, add quizzes, and even embed images or small videos—all in one place. When you’re ready to share, just click onto export to Nostr, if you do not have a private and public key, then the LiveEditor will ask you to create one. Once you have your keys, the LiveEditor will package everything into a single Nostr URI. You can then share that link with anyone. Additionally you can also update the course content, the LiveEditor will automatically update the content on the relays, while the URI stays the same, so your learners always see the latest version.

{{< youtube YsGLLoP1TT8 >}}

### 4. Embedding Media with Data-URIs

To make your course fully self-contained, you can embed images, sound, or video right inside your Markdown using **Data-URIs**. Instead of linking to an external file, you convert the media into a long text string that looks like this:

```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...
```

That string carries the entire image, so when learners load your Nostr URI, they see the picture immediately—no separate downloads or servers required. __But be careful, Data-URIs can get long and unwieldy, so use they might affect the loading time of your course and you might hit maximum character limits in some cases.__


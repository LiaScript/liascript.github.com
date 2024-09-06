---
title: "Why Open Education Needs a Common Language!?"
slug: why-open-education-needs-a-common-language
date: 2024-09-06
draft: false
authors:
    - André Dietrich
    - Sebastian Zug
image: "/images/post/why-open-education-needs-a-common-language/confusion.jpg"
categories:
  - Article
  - Community
  - Examples
tags:
  - LiaScript
  - Open Education
  - GitHub
  - MOOC
  - OER
  - Sustainability
---

A better question would be: __Why do commercial offerings and e-learning platforms dominate online education and "NOT" Open Educational Resources (OER)?__

Before we attempt to answer these questions, we want everyone to complete the following sentence for themselves:

Open Educational Resources (OER) are primarily about ...

1. ... the use of content.
2. ... their creation.

It is no wonder that many initially think of licenses and terms of use.
Creation (2.) seems boring and time-consuming.
As an OER enthusiast, one starts with big ideas, which often fail due to a lack of technical skills and underestimated effort.
Thus, most projects unfortunately end in static formats such as PDFs, Word documents, images, or PowerPoint presentations.
Podcasts or educational films are more elaborate, and creating a website requires even more effort.
With some programming knowledge, one might even create an entire app.
With a Word document, an individual can still make changes (leaving aside the collaboration of author teams), but PDFs, videos, and podcasts are one-way products (which cannot be adjusted afterward), and with websites and apps, an outsider might be able to make changes but faces insurmountable technical hurdles or simply lacks access rights.
In the worst case, development and hosting even incur costs that one has to bear themselves.

Participation, as we wish for it and as we know it from the open-source world, is actually not possible in this way.
Cynically viewed, the PDF file is the stone tablet of the digital age, static and optimal for print media (but not suitable for reading on a smartphone), not interactive, and difficult to change.
However, a computer enables us to experiment, simulate, immerse in content, change something, and verify it.

![Steintafel](images/post/why-open-education-needs-a-common-language/history.jpg)

Why can't an OER enthusiast simply change two lines in an app or translate it?
Or why can't a user (students/parents) rephrase quiz questions or even restructure content?

As mentioned before, because the technical skills are lacking and secondly, because it could otherwise lead to a huge mess with different versions.

***But that's exactly what OER creation is about: diversity, changeability, and continuous improvement ...***

> __Spoiler Alert:__ The following video shows how interactive teaching content is created at [TU Bergakademie Freiberg](https://tu-freiberg.de) with LiaScript and hosted on [GitHub](https://github.com/TUBAF-IfI-LiaScript) (we will get to both).
> Each point represents a file and each figure a person who changes, adds, or deletes a file; these are on one hand employees of the Software Development and Robotics working group and on the other hand students.
>
> !?[Collaboration in the creation of OER at TUBAF](images/post/why-open-education-needs-a-common-language/tubaf.mp4)
>
> {{< video src="images/post/why-open-education-needs-a-common-language/tubaf.mp4" controls="true">}}
>
> Source: https://github.com/TUBAF-IfI-LiaScript/

If we orient ourselves towards the open-source movement, then OER could actually work, right?
Many initially small projects that grow over time and through organized and decentralized participation of many over the years.
How does that work?

## About the Economics of Open-Source Projects

One thing is clear: Everyone who works on an open-source project has a common goal.
They use a library or app for their own purposes and give back a part of their value creation.
When large companies like Facebook or Microsoft release open-source projects, the many volunteers are an enormous force that not only finds bugs but also brings in extensions, writes tests, and documentation.
They benefit from it themselves.

Imagine if large educational publishers in Germany put their content online under a free license as an OER/OS project, so that many teachers and learners could work together on the materials or create their own versions from them.
**Unthinkable!** And why is that?

![Licenses](images/post/why-open-education-needs-a-common-language/publishing-house.jpg)

Because open-source projects have something that OER (still) does not: a common (programming) language.
A language in which communities develop around small or huge projects, be it the Linux operating system, the Firefox browser, AI projects, or educational apps.

![Tower of Babel](images/post/why-open-education-needs-a-common-language/babel.jpg)

Besides the language, there is another ingredient that allows the work of countless authors to be organized, versioned, and orchestrated.
A decentralized version control tool called [`git`](https://en.wikipedia.org/wiki/Git) is used for this, with [GitHub.com](https://github.com) as the largest platform.
Review systems, discussions, automated tests (spelling), and much more are already integrated here.
These problems are considered solved here and are nothing new for most developers and have been for over a decade.

What does the e-learning community or edTech have to counter this? Right, an almost endless number of platforms, tools, and formats that drive us more and more apart and isolate us rather than bring us together.
Who knows that on Moodle XY, which is hosted at school ABC in Weißenfels, a teacher is developing a similar course to mine ...

![2021 Global Learning Landscape](images/post/why-open-education-needs-a-common-language/islands.png)

In the following sections, we will deal with the LiaScript language.
There are already many good tutorials and courses on git and GitHub.
In the following video, you will get a very good brief introduction to the concepts of git and GitHub.
Believe us, it is worth it.

{{< youtube 8Dd7KRpKeaE >}}

Unlike all other platforms you may have tried, GitHub will be the last one you will use.

> Fun Fact: Git also comes from the pen of Linus Torvalds, the developer of Linux.
> He was dissatisfied with the commercial version control tools at the time and sought a way to work on Linux in a decentralized and offline manner.
> Here is a short history of git:
>
> https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git

## LiaScript – A Language for OER

The idea for LiaScript originated in 2017/2018 in the "Industrial eLab" project.
It was about developing online labs for teaching in engineering sciences.
The following video shows our first steps with LiaScript.

{{< youtube bICfKRyKTwE >}}

We were looking for a way to quickly and easily produce teaching content as a team.
[Markdown](https://en.wikipedia.org/wiki/Markdown), as an easy-to-learn and already established markup language, offered itself as a common foundation.
[HTML](https://en.wikipedia.org/wiki/Hypertext_Markup_Language) is also a markup language, as the name __HyperText Markup Language__ suggests, but it is much more complicated.
Markdown has now become the standard for blogging ([JAM-Stack](https://jamstack.org)), documentation of IT projects ([GitHub](https://github.com)), with editors in [Moodle](https://docs.moodle.org/404/en/Markdown) and others – all use/support Markdown more or less.

Try sending the following message via WhatsApp:

<iframe loading="lazy" style="height: 420px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBTaG9wcGluZyBMaXN0Cgo+IEZvciBhIFBpenphIE1hcmdhcml0YSB3ZSBuZWVkCgoxLiBgRG91Z2hgCjIuIF9Ub21hdG9lc18KMy4gX0NoZWVzZV8KNC4gfm5vIFNhbGFtaX4K"></iframe>

With such annotations, Markdown allows simple formatting like code, italics, bold, and strikethrough in texts, and these can also be combined/nested. Texts can be structured just as easily:

<iframe loading="lazy" style="height: 510px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBIZWFkaW5nCgpBIHBhcmFncmFwaCByYXJlbHkKY29tZXMgYWxvbmUgLi4uCgotIEEgbGlzdAotIFdpdGggdmFyaW91cwotIFN1Yi1wb2ludHMKCnwgVGFibGVzIHwgICBhcmUgICB8ICAgIGVhc2llciB8CnwgLS0tLS0tIHwgOi0tLS0tOiB8IC0tLS0tLS0tOiB8CnwgdGhhbiAgIHwgdGhvdWdodCB8ICAgICAgIGFuZCB8Cnwgc2VsZi0gIHwgICBleC0gICB8IHBsYW5hdG9yeSB8Cg=="></iframe>

You can immediately see what is a table and what is a list. As a finger exercise, everyone can try to expand the table with more cells or columns. Then simply press the "Compile" button at the top right and observe how the result changes. In your mind, try to remember which menu items in Word or PowerPoint need to be clicked for this. If you can do that, then we are more than impressed 😉

### Visual Metaphors & Quizzes

You can think of Markdown as a kind of "visual metaphor" to describe the structure of texts and other elements.
Your canvas is a simple text file and your brushes are the keyboard.
No clicking and remembering complicated sequences with different menus, just writing and seeing what happens.
This was also our core idea in developing LiaScript, to bring the didactic experts on the team on board.
We wanted to extend the visual and simple language of Markdown and add more interactive elements that seamlessly integrate into the Markdown language.

The following example shows a simple "to-do" list:

<iframe loading="lazy" style="height: 350px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBUby1kbwoKLSBbWF0gQWxyZWFkeSBkb25lCi0gWyBdIFN0aWxsIG9wZW4KLSBbWF0gQ29tcGxldGVkIC4uLgo="></iframe>

We have simply further developed these to-do lists, as shown below, to also include quizzes and surveys in our teaching materials. This allowed the didactic experts to gather feedback from the students or observe their progress.

<iframe loading="lazy" style="height: 410px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBNdWx0aXBsZS1DaG9pY2UgUXVpegoKQ2FuIGEgcXVpeiBiZSBhbnkgc2ltcGxlcj8KCi0gW1tYXV0gTm8KLSBbW1hdXSBNYXliZS9VbmNlcnRhaW4KLSBbWyBdXSBZZXMK"></iframe>

The square representation above is reminiscent of checkboxes as used in HTML. For single-choice quizzes, one would use round radio buttons, where only one option can be selected:

<iframe loading="lazy" style="height: 410px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBTaW5nbGUtQ2hvaWNlIFF1aXoKClJlcHJlc2VudGluZyByYWRpbyBidXR0b25zIHdpdGggcGFyZW50aGVzZXMgc2VlbXMgbG9naWNhbCwgZG9lc24ndCBpdD8KCi0gWyggKV0gRG9uJ3Qga25vdwotIFsoWCldIERlZmluaXRlbHkKLSBbKCApXSBObyB3YXkK"></iframe>

#### More Quizzes

If you extend this idea by using double brackets `[[...]]` for quizzes, you can create a variety of other quizzes in the form of cloze tests, selection options, matrix quizzes, etc., in combination with other Markdown elements.
Here is an example of a "German Grammar Test":

<iframe loading="lazy" style="height: 730px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/preview/IyBHZXJtYW4gR3JhbW1hciBUZXN0Cgp8IFZlcmIgICAgfCBQZXJzb24gICAgfCBQcsOkc2VucyB2b24gIndlcmRlbiIgfCAgICBQYXJ0aXppcCBJSSAgIHwgSW5maW5pdGl2IHZvbiBoYWJlbi9zZWluIHwKfCAtLS0tLS0tIHwgLS0tLS0tLS0tIHwgOi0tLS0tLS0tLS0tLS0tLS0tLTogfCA6LS0tLS0tLS0tLS0tLS06IHwgOi0tLS0tLS0tLS0tLS0tLS0tLS0tLS06IHwKfCBnZWhlbiAgIHwgSWNoICAgICAgIHwgICAgIFtbIHdlcmRlICBdXSAgICAgfCAgW1sgZ2VnYW5nZW4gXV0gIHwgICAgICAgW1sgc2VpbiAgXV0uICAgICAgIHwKfCBzYWdlbiAgIHwgRHUgICAgICAgIHwgICAgIFtbIHdpcnN0ICBdXSAgICAgfCAgW1sgZ2VzYWd0ICAgXV0gIHwgICAgICAgW1sgaGFiZW4gXV0uICAgICAgIHwKfCBtYWNoZW4gIHwgRXIvU2llL0VzIHwgICAgIFtbIHdpcmQgICBdXSAgICAgfCAgW1sgZ2VtYWNodCAgXV0gIHwgICAgICAgW1sgaGFiZW4gXV0uICAgICAgIHwKfCBsYXVmZW4gIHwgV2lyICAgICAgIHwgICAgIFtbIHdlcmRlbiBdXSAgICAgfCAgW1sgZ2VsYXVmZW4gXV0gIHwgICAgICAgW1sgc2VpbiAgXV0uICAgICAgIHwKfCBzaW5nZW4gIHwgSWhyICAgICAgIHwgICAgIFtbIHdlcmRldCBdXSAgICAgfCAgW1sgZ2VzdW5nZW4gXV0gIHwgICAgICAgW1sgaGFiZW4gXV0uICAgICAgIHwKfCBzcGllbGVuIHwgU2llICAgICAgIHwgICAgIFtbIHdlcmRlbiBdXSAgICAgfCAgW1sgZ2VzcGllbHQgXV0gIHwgICAgICAgW1sgaGFiZW4gXV0uICAgICAgIHwK"></iframe>

Admittedly, the above example for a quiz is a bit too large; it was only meant to serve as an example.
LiaScript offers additional possibilities to provide hints or additional options, making it easier to design or configure a quiz.

#### Surveys

Admittedly, the above example for a quiz is a bit too large; it was only meant to serve as an example.
LiaScript offers additional possibilities to provide hints or additional options, making it easier to design or configure a quiz.

<iframe loading="lazy" style="height: 410px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBXaGF0IGFyZSB5b3VyIGZhdm9yaXRlIGNvbG9ycz8KCi0gW1tyZWRdXSAgICAgSXMgaXQgcmVkLAotIFtbZ3JlZW5dXSAgIGdyZWVuCi0gW1tibHVlXV0gICAgb3IgYmx1ZSwKLSBbW3Zpb2xldF1dICBsYXN0IGNoYW5jZSA7LSkK"></iframe>

__Try converting this multiple-choice survey into a single-choice survey yourself.__

The advantage of developing learning content in this way was that it could be created by us without any configuration effort and as a team, with the computer scientists creating the learning content and the didactic experts creating the surveys and quizzes to test the knowledge level.

### Multimedia

YouTube offers a variety of educational materials, but they cannot be directly embedded in Markdown because most Markdown viewers prohibit JavaScript or embedding external content via [IFrames](https://en.wikipedia.org/wiki/Inline_frame).

To also be able to use such content and embed it in LiaScript courses, we have extended the syntax as before.
The following example first shows the general Markdown syntax for embedding links and images; then come the LiaScript extensions:

<iframe loading="lazy" style="height: 710px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBNdWx0aW1lZGlhIFJlZmVyZW5jZXMKCi0gX19NYXJrZG93bl9fCgogIC0gTGlua3Mgb3IgcmVmZXJlbmNlczoKICAgIGBbbmFtZV0odXJsKWAKCiAgICBbT3BlbiBFZHVjYXRpb25hbCBSZXNvdXJjZXNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL09wZW5fRWR1Y2F0aW9uYWxfUmVzb3VyY2VzKQoKICAtIEFuIGltYWdlIGlzIGFuIGltcG9ydGFudCBsaW5rIF9fIV9fIDoKICAgIGAhW2FsdC10ZXh0XSh1cmwpYAoKICAgICFbT0VSLUxvZ29dKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMi8yMC9HbG9iYWxfT3Blbl9FZHVjYXRpb25hbF9SZXNvdXJjZXNfTG9nby5zdmcpCgotIF9fTGlhU2NyaXB0X18KCiAgLSBJcyBhdWRpbyBqdXN0IGFzIGltcG9ydGFudCBfXz9fXyA6CiAgICBgP1thbHQtdGV4dF0oLi4ubXAzIG9yIHNvdW5kY2xvdWQtdXJsKWAKCiAgICA/W3p1Z2VoT0VSdCAxMDQ6IEhvdyB0byBPRVItUG9saWN5XShodHRwczovL29wZW4tZWR1Y2F0aW9uYWwtcmVzb3VyY2VzLmRlL3BvZGxvdmUvZmlsZS8xNjY2L3Mvd2VicGxheWVyL2MvZXBpc29kZS9PRVIxMDQubXAzICJ6dWdlaE9FUnQgMTA0OiBIb3cgdG8gT0VSLVBvbGljeT8gVGhlIE9FUi1Qb2xpY3kgS2l0IHByb3ZpZGVzIGFuc3dlcnMgLi4uIE1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBvZGNhc3QgY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vb3Blbi1lZHVjYXRpb25hbC1yZXNvdXJjZXMuZGUvb2VyMTA0LyAiKTwhLS0gc3R5bGU9IndpZHRoOiAxMDAlIiAtLT4KCiAgLSBUaGVuIHZpZGVvcyBjb25zaXN0IG9mIGltYWdlX18hX18gYW5kIHNvdW5kX18/X186CiAgICBgIT9bYWx0LXRleHRdKC4uLm1wNCBvciBZb3VUdWJlLXVybClgCgogICAgIT9bQ29sbGFib3JhdGl2ZSBPbmxpbmUgRWRpdG9yIGZvciBMaWFTY3JpcHRdKGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RVp1eFlzTUJLTzQpCgogIC0gTGFzdCBidXQgbm90IGxlYXN0LCBpZiB5b3Ugd2FudCB0byBlbWJlZCBhbnl0aGluZyBlbHNlOgogICAgYD8/W2FsdC10ZXh0XShhbnktdXJsKWAKCiAgICA/P1tQaGV0OiBCdWlsZCBhbiBBdG9tXShodHRwczovL3BoZXQuY29sb3JhZG8uZWR1L3NpbXMvaHRtbC9idWlsZC1hLW51Y2xldXMvbGF0ZXN0L2J1aWxkLWEtbnVjbGV1c19hbGwuaHRtbD9sb2NhbGU9ZW4pCgogICAgPz9bU2tldGNoRmFiOiBBc3RyYWVhIChPcmJpY2VsbGEpIGN1cnRhXShodHRwczovL3NrZXRjaGZhYi5jb20vM2QtbW9kZWxzL2FzdHJhZWEtb3JiaWNlbGxhLWN1cnRhLWJiNzY3Y2Q3NTlmYzQyODA4MWVjOWMzMDJiYWYxZWQxICJTb3VyY2U6IGh0dHBzOi8vc2tldGNoZmFiLmNvbSIpCgogICAgPz9bR2VvR2VicmE6IERlcml2YXRpdmUgb2YgUG93ZXIgRnVuY3Rpb25zXShodHRwczovL3d3dy5nZW9nZWJyYS5vcmcvbS9qdDJleXVyZyAiX0l0IG1heSB0YWtlIGEgd2hpbGUgZm9yIHRoZSBjb250ZW50IHRvIGxvYWQgb24gR2VvR2VicmFfIikKCiAgICA/P1tTb21lIENpcmN1aXRdKGh0dHBzOi8vd3d3LmZhbHN0YWQuY29tL2NpcmN1aXQvY2lyY3VpdGpzLmh0bWw/Y3R6PUNRQWd6Q0FNQjBsM0JXRUJHQVRMQmxXVEFEamFnQ3pLNENjU21JRmtWQXBnTFRMSUJRQWhpb1lTRWJ0MGQ0VjY5a1NSa21UeDRIYUtWbXlBN05oeUVBYkFtU2tVNHlaR1lCM0RsMVJoVWg3bkNqTUF4bWFWOGpGbWpFbkpDYzl4N25URmNNQ1FTb3lQS2tnVkN3a0N3R3FQeDIwVWFDbGdhdVJpWW9xTHpHcHJySUtqUk1waEpjK1NncXZEVFlLRG82K21uQ3BiWGNxYm9BNWlDa0tpVzg3U2k0WEU3TUFFNE5tU0FxS1ZrbGNNd0FsaWhvVkIzRmhWQmhFY3dBU25PbUNCMWpDeXMwaE9WT0I5QUliUGJjZTM2bXFIdThTSGxWWWFqQjdRaGdnam55WUpEa0hVOUpNeFduRnVMaHlqRnV2MFJFZ2JsY3VHQjVCMDdrVkV1QjV1a2FIQ3dMazBZaU90aWtlQmNib0RQamlWajVqaitwdHNiajByeHFTaHVLTUxPZ2tPelR1Y2t1a1VEandFVGtQelNRTEZ2enlhZ29jd2NseENLbGZyTHdlQklLaStnY3FDQUFDNERBQ3V0RXNtemxwaU9XS0pKcFd0M0taMjQxdm9NQ0NoQStrdFE2bGtSdklZVklHMXNlMktLUFZSeTA2cGczSXAzRzZFcWxPVjRnaXhLcW9WUGpFQzRqd096QUFzbFJlUXFGbkcxZXlNMW5HUlVFRVNUQ2NDNW1Bb3orUWdRdUJoVGJ6bFhzd0ZXWXkyMWJRN0hpVEdsZWFSVWJ3RzJod1B2VDN6Uk9taXlLcHpPZlF3TkJYQ0lRbW93QWd5TUVJQ0h2WHNSb0dSb2RtZkpyU2ZVenVSQkJ5VG1oem5rQ3lhT2NBUGJnVXg3UTUtRExXNXlRRlF1aTJ2dUF6QXZ2Kzc0Z0VjcEJsT0VjQklwS1lDa0k2TnlQTkJmeElqcy03M2l3SUc3R3FFRlFaSXNHa1BCaUZvTWhraWtHaGY3aUNnd0hjUElveTRaK3F6d0lSeEVmS1J6RndCUmFoVWN5V0ZnZ3hLeDRScVA1Y1pSR0UwVUFBICJfU291cmNlOiBodHRwczovL3d3dy5mYWxzdGFkLmNvbSBfIikKCg=="></iframe>

The double question marks `??` in the last links indicate that the content should somehow be embedded. LiaScript uses various browser-side strategies to embed simulations from [Phet](https://phet.colorado.edu), 3D models from [SketchFab](https://sketchfab.com), or circuits from [Falstad](https://www.falstad.com).
We have explained the internal workings of LiaScript in more detail in the following blog post:

[Embedding Multimedia - How does it work??](https://liascript.github.io/blog/embedding-multimedia-how-does-it-work/)

### Programming in Markdown

When learning to program, many code examples are essential.
For this purpose, Markdown already has a syntax, so-called code blocks, which are enclosed with at least three backticks.

<iframe loading="lazy" style="height: 380px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBBIFNpbXBsZSBKYXZhU2NyaXB0IEV4YW1wbGUKCmBgYGphdmFzY3JpcHQKdmFyIHggPSAnSGVsbG8gV29ybGQnCmNvbnNvbGUubG9nKHgpCjMzICogMTIKYGBgCg=="></iframe>

The top term is an indicator for the programming language and the syntax highlighting to be used, followed by the actual code.
Originally, we used a separate editor for our robotics projects, which forced students to constantly copy code back and forth.
Our Arduino robots were programmed in C++, which raised the questions:

- **Why can't the code examples be executed directly?**
- **And what is actually necessary to execute code in other languages?**

Our solution was to append a `<script>` tag that defines how the above code or text should be interpreted.
For JavaScript, this is relatively simple:

<iframe loading="lazy" style="height: 380px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBBIFNpbXBsZSBhbmQgaW50ZXJhY3RpdmUgSmF2YVNjcmlwdCBFeGFtcGxlCgpgYGBqYXZhc2NyaXB0CnZhciB4ID0gJ0hlbGxvIFdlbHQnCmNvbnNvbGUubG9nKHgpCjMzICogMTIKYGBgCjxzY3JpcHQ+IEBpbnB1dCA8L3NjcmlwdD4K"></iframe>

Every code block to which a `<script>` tag is appended is interpreted in LiaScript as executable code with console output.
Click on Execute and observe how the output changes.
Such execution instructions can also be attached to quizzes, surveys, or to-do lists to adjust their behavior.
`@input` simply defines a general placeholder here and everywhere, indicating where the current code should be inserted in the script.

Within a code block, changes are tracked using linear versioning.
In other words, you can move forward and backward in your versions and change an old state, which is then appended as a new state – no change is lost.

The didactic experts on our team could directly analyze the students' approach to programming.
At this point, many ask: Where are the data/states stored in LiaScript – the code, the quizzes, and surveys?
The answer is simple: directly in the user's browser.
Modern browsers have built-in databases like [IndexedDB](https://en.wikipedia.org/wiki/Indexed_Database_API), which we use to store the courses and all related information.
With LiaScript, it is therefore not necessary to send data around the globe and store it in a central database.
Instead, LiaScript works in a decentralized manner.
Knowledge can also be tested offline, meaning each user can go through the learning materials at their own pace and completely anonymously.

In the "Industrial eLab" project, we reused this data for research purposes.
We ourselves did not yet know the possibilities a modern browser offers.

#### Projects

In addition to simple code blocks, projects can also be defined that consist of multiple code blocks/files.
These are simply concatenated and also appended with an additional `<script>` tag.
To avoid confusion with the blocks, it must be specified which block is to be inserted where.
`@input(0)` addresses the first code block and `@input(1)` refers to the JSON file, etc.

<iframe loading="lazy" style="height: 600px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBBIFNpbXBsZSBQcm9qZWN0CgpgYGAganMgICAgIC1FdmFsU2NyaXB0LmpzCmxldCB3aG8gPSBkYXRhLmZpcnN0X25hbWUgKyAiICIgKyBkYXRhLmxhc3RfbmFtZTsKCmlmKGRhdGEub25saW5lKSB7CiAgd2hvICsgIiBpcyBvbmxpbmUiOwp9CmVsc2UgewogIHdobyArICIgaXMgTk9UIG9ubGluZSI7Cn0KYGBgCmBgYCBqc29uICAgIERhdGEuanNvbgp7CiAgImZpcnN0X25hbWUiIDogICJTYW1teSIsCiAgImxhc3RfbmFtZSIgIDogICJTaGFyayIsCiAgIm9ubGluZSIgICAgIDogIHRydWUKfQpgYGAKPHNjcmlwdD4KICAvLyBpbnNlcnQgdGhlIEpTT04gZGF0YXNldCBpbnRvIHRoZSBsb2NhbCB2YXJpYWJsZSBkYXRhCiAgbGV0IGRhdGEgPSBAaW5wdXQoMSk7CgogIC8vIGV2YWwgdGhlIHNjcmlwdCB0aGF0IHVzZXMgdGhpcyBkYXRhc2V0CiAgZXZhbChgQGlucHV0KDApYCk7Cjwvc2NyaXB0Pgo="></iframe>

Open the upper part, adjust both code blocks, and click on "Execute".
Whether a block is open or closed is defined by a plus or minus sign in front of the file name.

External libraries or external services like our [CodeRunner](https://github.com/liaScript/coderunner) can also be used for execution.
The scripts necessary for this quickly grow in scope and complexity, making them difficult to maintain.
To counteract this, we developed a macro system that allows recurring tasks to be simplified (automated), as is common in computer science.
In LiaScript, Markdown documents can be treated like libraries that implement specific functions and can be reused in other courses or Markdown files.
The idea behind this is explained in the next section; if this is too technical for you, you can skip this part.

### Extensions and Macros

Macros are an excellent way to simplify and automate recurring tasks.
In short, these are just text replacements that can be inserted at any point.
To do this, simply define a command/name in an HTML comment at the beginning of the document, followed by everything that should be inserted:

<iframe loading="lazy" style="height: 280px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/PCEtLQpAQ29tbWFuZDogSGVyZSBhIHdob2xlIF9fdGV4dF9fIGlzIGluc2VydGVkLgotLT4KCiMgVGl0bGUKCkBDb21tYW5kCg=="></iframe>

As in other programming languages, these can also be parameterized in LiaScript.
In the macro body, the places to be replaced are marked with `@0..9`:

<iframe loading="lazy" style="height: 350px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/PCEtLQpAaW1wb3J0YW50OiA8c3BhbiBzdHlsZT0iY29sb3I6IEAwIj5AMTwvc3Bhbj4KLS0+CgojIFRpdGxlCgpAaW1wb3J0YW50KHJlZCxUaGlzIHRleHQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gcmVkKQoKLS0tCgpAaW1wb3J0YW50KGdyZWVuLEFuZCBJIHdpbGwgYmUgZ3JlZW4uLi4pCg=="></iframe>

#### Importing Extensions

Of course, no one wants to always copy all commands back and forth.
As you would expect from a library, such macro collections can be easily integrated into the current course using an `@import` statement.
In the following example, another document is imported that allows embedding [ABC notations](https://en.wikipedia.org/wiki/ABC_notation) for creating musical scores.

<iframe loading="lazy" style="height: 800px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/edit/PCEtLQppbXBvcnQ6IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9MaWFUZW1wbGF0ZXMvQUJDanMvMC4wLjIvUkVBRE1FLm1kCi0tPgoKIyBNdXNpYwoKYGBgIGFiYyAgQEFCQ0pTLnJlbmRlcgpYOiAxClQ6IFNoY2hlIG5lIFZtZXJsYSBVa3JheWlueSBuaSBTbGF2YSwgbmkgdm9seWEKVDogVWtyYWluaWFuIE5hdGlvbmFsIEFudGhlbQpDOiB0cmFkLgpSOiBtYXJjaApNOiBDCkw6IDEvOApLOiBGClt8XAoiRiJbQTNGM11bQUZdIChbQUZdW0dFXVtBRl0pW0JHXSB8IFtjM0EzXVtCR10gIkE3IltBMkYyXVtHMkUyXkMyXSB8ICJEbSJbRjJEMl1bQTJGMl0gIkEiW0UyXkMyXVtBMkMyXSB8ICJEbSJbRDNEM11bRV5DXSBbRjJEMl0iQyJbRzJFMl0gfAoiRiJbQTNGM11bQUZdIChbQUZdW0dFXVtBRl0pW0JHXSB8IFtjM0EzXVtCR10gIkE3IltBMkYyXVtHMkUyXkMyXSB8ICJEbSJbRjJEMl1bQTJGMl0gIkEiW0UyXkMyXVtBMkMyXSB8ICJEbSJbRDRENF0gRDJ6MiB8CiJBIltFMl5DMl1bRTJDMl0gKFtBQ11bR0VdW0ZEXSlbRUNdIHwgKCJEbSJbREQzLV1FRilbRERdICJBIltFMl5DMl1bRTJDMl0gfCAiRG0iW0YyRDJdW0YyRDJdICJDIltHMkUyXVtHMkUyXSB8ICJGIltBNEY0XSBbQTJGMl16MiB8CiJBIltFMl5DMl1bRTJDMl0gKFtBQ11bR0VdW0ZEXSlbRUNdIHwgKCJEbSJbREQzLV1FRilbRERdICJBIltFMl5DMl1bRTJDMl0gfCAiRG0iW0YyRDJdW0EyRjJdICJBIltFMl5DMl1bQTJDMl0gfCAiRG0iW0QzRDNdW0VeQ10gKFtGRF1bR0VdW0FGXSlbQkddIHwKfDpcCiJGIltjM0EzXVs9Ql5HXSBbYzJBMl1bQTJGMl0gfCAiQyJbRzJFMl1bRzJFMl0gKFtjRV1bQkddIl5BNy9DIyJbQUZdKVtHRV0gfCAiRG0iW0YyRDJdW0YyRDJdICJDIltHMkUyXVtHMkMyXSB8ICgiRiJbQTNGM11bR0VdW0EyRjJdKSJDNyJbQjJHMl0gfAoiRiJbYzNBM11bPUJeR10gW2MyQTJdW0EyRjJdIHwgIkMiW0cyRTJdW0cyRTJdIChbY0VdW0JHXSJeQTcvQyMiW0FGXSlbR0VdIHwgIkRtIltGMkQyXVtBMkYyXSAiQSJbRTJeQzJdW0EyQzJdIHwgIkRtIltENEQ0XSBbRDJEMl16MiA6fApgYGAK"></iframe>

Why shouldn't you be able to program with music as well?
Notes are a form of programming language that allows you to compose music.
And in LiaScript, this can also happen interactively using ABC notation.
Change the code and click on "Compile" to see and hear the changes.
As shown in the section "[Programming in Markdown](#programming-in-markdown)", you only need to append a `<script>` tag.
In the example below, this happens automatically by appending the macro `@ABCJS.eval`.

<iframe loading="lazy" style="height: 700px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/PCEtLQppbXBvcnQ6IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9MaWFUZW1wbGF0ZXMvQUJDanMvMC4wLjIvUkVBRE1FLm1kCi0tPgoKIyBNdXNpYwoKYGBgIGFiYwpYOiAxClQ6IENvb2xleXMKTTogNC80Ckw6IDEvOApLOiBFbWluCnw6RDJ8IkVtIkVCQkEgQjIgRUJ8fkIyIEFCIGRCQUd8IkQiRkRBRCBCREFEfEZEQUQgZEFGRHwKIkVtIkVCQkEgQjIgRUJ8QjIgQUIgZGVmZ3wiRCJhZmVeYyBkQkFGfCJFbSJERUZEIEUyOnwKfDpnZnwiRW0iZUIgQjIgZWZnZXxlQiBCMiBnZWRCfCJEIkEyIEZBIERBRkF8QTIgRkEgZGVmZ3wKIkVtImVCIEIyIGVCZ0J8ZUIgQjIgZGVmZ3wiRCJhZmVeYyBkQkFGfCJFbSJERUZEIEUyOnwKYGBgCkBBQkNKUy5ldmFsCg=="></iframe>

Text can also be analyzed to improve readability or style, for example.
At TU Freiberg, this is used in foreign language classes to provide students with direct feedback using various metrics:

<iframe loading="lazy" style="height: 570px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/PCEtLQppbXBvcnQ6IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9saWFUZW1wbGF0ZXMvVGV4dEFuYWx5c2lzL21haW4vUkVBRE1FLm1kCi0tPgoKIyBUZXh0YW5hbHlzZQoKYGBgdGV4dApQbGF5aW5nIGdhbWVzIGhhcyBhbHdheXMgYmVlbiB0aG91Z2h0IHRvIGJlCmltcG9ydGFudCB0byB0aGUgZGV2ZWxvcG1lbnQgb2Ygd2VsbC1iYWxhbmNlZCBhbmQKY3JlYXRpdmUgY2hpbGRyZW47IGhvd2V2ZXIsIHdoYXQgcGFydCwgaWYgYW55LAp0aGV5IHNob3VsZCBwbGF5IGluIHRoZSBsaXZlcyBvZiBhZHVsdHMgaGFzIG5ldmVyCmJlZW4gcmVzZWFyY2hlZCB0aGF0IGRlZXBseS4gSSBiZWxpZXZlIHRoYXQgcGxheWluZwpnYW1lcyBpcyBldmVyeSBiaXQgYXMgaW1wb3J0YW50IGZvciBhZHVsdHMgYXMgZm9yCmNoaWxkcmVuLiBOb3Qgb25seSBpcyB0YWtpbmcgdGltZSBvdXQgdG8gcGxheSBnYW1lcwp3aXRoIG91ciBjaGlsZHJlbiBhbmQgb3RoZXIgYWR1bHRzIHZhbHVhYmxlIHRvCmJ1aWxkaW5nIGludGVycGVyc29uYWwgcmVsYXRpb25zaGlwcyBidXQgaXMgYWxzbyBhCndvbmRlcmZ1bCB3YXkgdG8gcmVsZWFzZSBidWlsdCB1cCB0ZW5zaW9uLgpgYGAKQFRleHRhbmFseXNpcy5GVUxMCg=="></iframe>

As already mentioned, we mostly use LiaScript for learning to program. An overview of existing extensions can be found here:

https://github.com/topics/liascript-template

Otherwise, we are happy to add new extensions for you or support you in this process in LiaScript.

<iframe loading="lazy" style="height: 680px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/preview/PCEtLQppbXBvcnQ6IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9saWFUZW1wbGF0ZXMvdnRrL21hc3Rlci9SRUFETUUubWQKLS0+CgojIE1lZGljYWwgY291cnNlcyB3b3VsZCBiZSBuaWNlIHRvbwoKQFZUSy5sb2FkSWZyYW1lKGh0dHBzOi8va2l0d2FyZS5naXRodWIuaW8vdnRrLWpzLWRhdGFzZXRzL2RhdGEvdnRpL2hlYWQtYmluYXJ5LXpsaWIudnRpKQo="></iframe>

And for scientific publishing, there are also extensions that you can use:

<iframe loading="lazy" style="height: 680px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/preview/PCEtLQppbXBvcnQ6IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9MaWFUZW1wbGF0ZXMvY2l0YXRpb25zL21haW4vUkVBRE1FLm1kCi0tPgoKIyBMaXRlcmF0dXJlCgpgYGBiaWJ0ZXggQGJpYmxpb2dyYXBoeS5zdHlsZShpZWVlKQpASW5Qcm9jZWVkaW5nc3tkaWV0cmljaDIwMTksCiAgYXV0aG9yICAgID0ge0FuZHLDqSBEaWV0cmljaH0sCiAgdGl0bGUgICAgID0ge0xpYVNjcmlwdDogYSBkb21haW4tc3BlY2lmaWMtbGFuZ3VhZ2UgZm9yIGludGVyYWN0aXZlIG9ubGluZSBjb3Vyc2VzfSwKICBib29rdGl0bGUgPSB7UHJvY2VlZGluZ3Mgb2YgdGhlIEludGVybmF0aW9uYWwgQ29uZmVyZW5jZSBvbiBlLUxlYXJuaW5nIDIwMTl9LAogIHllYXIgICAgICA9IHsyMDE5fSwKICBwYWdlcyAgICAgPSB7MTg2LS0xOTR9LAogIGFkZHJlc3MgICA9IHtQb3J0bywgUG9ydHVnYWx9Cn0KCkBtaXNje2xpYXNjcmlwdDIwMjQsCiAgYXV0aG9yICAgICAgID0ge0FuZHLDqSBEaWV0cmljaDsgU2ViYXN0aWFuIFp1Z30sCiAgdGl0bGUgICAgICAgID0ge0xpYVNjcmlwdCAtIE9wZW4gRWR1Y2F0aW9uYWwgUmVzb3VyY2VzIG1hZGUgRWFzeSBhbmQgRGVjZW50cmFsaXplZCAuLi59LAogIGhvd3B1Ymxpc2hlZCA9IHtcXHVybHtodHRwczovL2xpYXNjcmlwdC5naXRodWIuaW99fSwKICB5ZWFyICAgICAgICAgPSB7MjAyNH0sCiAgbm90ZSAgICAgICAgID0ge0FjY2Vzc2VkOiBBdWd1c3QgMjksIDIwMjR9Cn0KYGBgCg=="></iframe>

### Additional Features

#### Different Display Formats

Since computer scientists tend to optimize and automate work, we have integrated the function in LiaScript to read a document either page by page like a normal book or to include animation steps.
Thus, the same document can be used both as a slide set in lectures and by students in book mode or presentation mode with built-in speech output.
Modern browsers nowadays offer text-to-speech functions, the quality of which can vary depending on the device, operating system, and browser.

We don't want to go into too much detail here, but the following video provides a brief summary of the usage.
Similar to quizzes, everything related to animations or speech output is marked by two curly braces `{{}}`.

{{< youtube saxAFw7XpjI >}}

Recently, you can even use your audio recordings or video recordings to narrate your courses.
You are already familiar with the LiaScript notation for audio and video.
The following video shows how you can link these with the comments.

{{< youtube lOOcD2ES35I >}}

#### ASCII Art

[ASCII Art](https://en.wikipedia.org/wiki/ASCII_art) stands for "American Standard Code for Information Interchange" art, a graphic design technique where images, symbols, or text are created by arranging characters from the ASCII character table.
This art form, which dates back to the early days of computer technology, originated from the need to create graphical representations on devices with limited graphical capabilities.

In LiaScript, ASCII art can be used creatively to integrate visual representations directly into texts.
This can be particularly useful for creating simple diagrams, sketches, or symbols without requiring external image files.

<iframe loading="lazy" style="height: 750px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/edit/IyBBU0NJSS1BcnQKCjwhLS0gc3R5bGU9ImhlaWdodDogNjB2aCIgLS0+CmBgYGFzY2lpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlZXIgQQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2ZXItUmVmbGV4aXZlICAgICstLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zcG9ydCBBZGRyZXNzICAgfCAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTkyLjAuMi4xNTA6MzIxMDIgICB8ICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgL3wgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICBUVVJOICAgICAgICAgICAgICB8ICAgICAgICAgICAgIC9efCAgUGVlciBBIHwKICAgQ2xpZW50J3MgICAgICAgICAgICAgIFNlcnZlciAgICAgICAgICAgIHwgICAgICAgICAgICAvIHx8ICAgICAgICAgfAogICBIb3N0IFRyYW5zcG9ydCAgICAgICAgVHJhbnNwb3J0ICAgICAgICAgfCAgICAgICAgICAgLyAgfHwgICAgICAgICB8CiAgIEFkZHJlc3MgICAgICAgICAgICAgICBBZGRyZXNzICAgICAgICAgICB8ICAgICAgX19fXy8gICB8Ky0tLS0tLS0tLSsKICAxMC4xLjEuMjo0OTcyMSAgICAgICAxOTIuMC4yLjE1OjM0NzggICAgIHwrLSsgIC8gICAgICBQZWVyIEEKICAgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgIHx8TnwgLyAgICAgICBIb3N0IFRyYW5zcG9ydAogICAgICAgICAgIHwgICArLSsgICAgICAgICB8ICAgICAgICAgICAgICAgfHxBfC8gICAgICAgIEFkZHJlc3MKICAgICAgICAgICB8ICAgfCB8ICAgICAgICAgfCAgICAgICAgICAgICAgIHZ8VHwgICAgIDkyLjE2OC4xMDAuMjo0OTU4MgogICAgICAgICAgIHwgICB8IHwgICAgICAgICB8ICAgICAgICAgICAgICAgLystKworLS0tLS0tLS0tK3wgICB8IHwgICAgICAgICB8Ky0tLS0tLS0tLSsgICAvICAgICAgICAgICAgICArLS0tLS0tLS0tKwp8ICAgICAgICAgfHwgICB8TnwgICAgICAgICB8fCAgICAgICAgIHwgXy8gICAgICAgICAgICAgICB8ICAgICAgICAgfAp8IFRVUk4gICAgfHYgICB8IHwgICAgICAgICB2fCBUVVJOICAgIHwvICAgICAgICAgICAgICAgICB8ICAgICAgICAgfAp8IENsaWVudCAgfC0tLS18QXwtLS0tLS0tLS0tfCBTZXJ2ZXIgIHwtLS0tLS0tLS0tLS0tLS0tLS18ICBQZWVyIEIgfAp8ICAgICAgICAgfCAgICB8IHxeICAgICAgICAgfCAgICAgICAgIHxeICAgICAgICAgICAgICAgIF58ICAgICAgICAgfAp8ICAgICAgICAgfCAgICB8VHx8ICAgICAgICAgfCAgICAgICAgIHx8ICAgICAgICAgICAgICAgIHx8ICAgICAgICAgfAorLS0tLS0tLS0tKyAgICB8IHx8ICAgICAgICAgKy0tLS0tLS0tLSt8ICAgICAgICAgICAgICAgIHwrLS0tLS0tLS0tKwogICAgICAgICAgICAgICB8IHx8ICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgfCB8fCAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICstK3wgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgIENsaWVudCdzICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICBQZWVyIEIKICAgICAgICAgICAgU2VydmVyLVJlZmxleGl2ZSAgICBSZWxheWVkICAgICAgICAgICAgIFRyYW5zcG9ydAogICAgICAgICAgICBUcmFuc3BvcnQgQWRkcmVzcyAgIFRyYW5zcG9ydCBBZGRyZXNzICAgQWRkcmVzcwogICAgICAgICAgICAxOTIuMC4yLjE6NzAwMCAgICAgIDE5Mi4wLjIuMTU6NTAwMDAgICAgIDE5Mi4wLjIuMjEwOjQ5MTkxCmBgYAo="></iframe>

Of course, LiaScript and Markdown can also be seamlessly combined with ASCII graphics.
This allows for interesting combinations with quizzes, but also animations.
The LiaScript elements just need to be "marked" with quotation marks:

<iframe loading="lazy" style="height: 650px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/preview/IyBBU0NJSS1BcnQgJiBRdWl6emUKCjwhLS0gZGF0YS1zaG93LXBhcnRpYWwtc29sdXRpb24gLS0+CmBgYCBhc2NpaQogICAgICAgICAgICAgICAgICAgICAgICAuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS4KICAgICAgICAgICAgICAgICAgICAgICAvICAgICAgICAgICAgICAgICAgICAgIC98CiAgICAgICAgICAgICAuLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgKy0tLS0tLS0tLS4KICAgICAgICAgICAgLyAgICAgICAgIHwgICAgICAiIFtbICAyNCAgIF1dICIgfC8gICAgICAgICAvfAogIC4tLS0tLS0tLSstLS0tLS0tLS0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tLS0rLS0tLS0tLS0tKyArLS0tLS0tLS0tLS4KIC8gICAgICAgICB8ICAgICAgICAgMTEgICAgICAgICAgfCAgICAgICJbWyAgIDEzICAgXV0gInwvICAgICAgICAgIC98CistLS0tLS0tLS0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tLSstLS0tLS0tLS0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tLSsgKwp8ICAgICAgIiBbWyAgIDUgICBdXSAifCAgICAgICAgICA2ICAgICAgICAgIHwgICAgICAgICAgNyAgICAgICAgICB8LworLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0rCmBgYAo="></iframe>

#### Automatic Visualizations

Datasets in tables are automatically analyzed, and various rules are used to try to find the best representation.
Switch to the table view, rearrange the columns, and observe how the visualization adjusts.

<iframe loading="lazy" style="height: 750px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/preview/IyMgVGFiZWxsZW4KCjwhLS0gZGF0YS1zaG93IC0tPgp8IEFuaW1hbCAgICAgICAgICB8IHdlaWdodCBpbiBrZyB8IExpZmVzcGFuIHllYXJzIHwgTWl0b2dlbiB8CnwgLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS06IHwgLS0tLS0tLS0tLS0tLTogfCAtLS0tLS06IHwKfCBNb3VzZSAgICAgICAgICAgfCAgICAgICAgMC4wMjggfCAgICAgICAgICAgICAgMiB8ICAgICAgOTUgfAp8IEZseWluZyBzcXVpcnJlbCB8ICAgICAgICAwLjA4NSB8ICAgICAgICAgICAgIDE1IHwgICAgICA1MCB8CnwgQnJvd24gYmF0ICAgICAgIHwgICAgICAgIDAuMDIwIHwgICAgICAgICAgICAgMzAgfCAgICAgIDEwIHwKfCBTaGVlcCAgICAgICAgICAgfCAgICAgICAgICAgOTAgfCAgICAgICAgICAgICAxMiB8ICAgICAgOTUgfAp8IEh1bWFuICAgICAgICAgICB8ICAgICAgICAgICA2OCB8ICAgICAgICAgICAgIDcwIHwgICAgICAxMCB8Cg=="></iframe>

Anyone who wants to start drawing right away can do so and draw simple diagrams and curves. If it looks like a diagram, then it probably is a diagram ...

<iframe loading="lazy" style="height: 610px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyMjIEFTQ0lJLUFydC1EaWFncmFtcwoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdWx0aWxpbmUKMS45IHwKICAgIHwgICAgICAgICAgICAgICAgICoqKgogIHkgfCAgICAgICAgICAgICAgICogICAgICoKICAtIHwgciByIHIgciByIHIgcipyIHIgciByKnIgciByIHIgciByIHIKICBhIHwgICAgICAgICAgICAgKiAgICAgICAgICoKICB4IHwgICAgICAgICAgICAqICAgICAgICAgICAqCiAgaSB8IEIgQiBCIEIgQiAqIEIgQiBCIEIgQiBCICogQiBCIEIgQiBCCiAgcyB8ICAgICAgICAgKiAgICAgICAgICAgICAgICAgKgogICAgfCAqICAqICogICAgICAgICAgICAgICAgICAgICAgICogKiAgKgogLTEgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQogICAgMCAgICAgICAgICAgICAgeC1heGlzICAgICAgICAgICAgICAgMQo="></iframe>

#### Formulas

In LiaScript, formulas can be easily inserted into Markdown documents by using the proven [LaTeX syntax](https://en.wikibooks.org/wiki/LaTeX/Mathematics).
This syntax allows for clear and precise representation of mathematical expressions, which is particularly important in scientific and technical texts.

The __inline notation__ is used to insert formulas directly into the text.
This is done by placing the mathematical expression between two dollar signs (`$...$`).
This method is ideal for shorter formulas or simple mathematical expressions that fit into a sentence.

For more complex or extensive formulas that require their own line, the block notation is used.
Here, the mathematical expression is placed between two double dollar signs (`$$...$$`).
The formula is then centered and prominently displayed.

<iframe loading="lazy" style="height: 400px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBGb3JtdWxhcwoKVGhlIGZvcm11bGEgZm9yIGNhbGN1bGF0aW5nIHRoZSBhcmVhIG9mIGEgY2lyY2xlIGlzICRBID0gXHBpIHJeMiQuCgpXaG8ga25vd3Mgd2hhdCB0aGlzIGZvcm11bGEgY2FsY3VsYXRlcz8KCiQkClxsaW1fe24gXHRvIFxpbmZ0eX0gXGxlZnQoIFxzdW1fe2k9MX1ee259IFxmcmFjezF9e2leMn0gXGNkb3QgXGludF97YX1ee2J9IGVeey14XjJ9IGR4IFxjZG90IFxwcm9kX3tqPTF9XnttfSBcbGVmdCggXGZyYWN7XHBhcnRpYWx9e1xwYXJ0aWFsIHhfan0gXG1hdGhiZntBfSBccmlnaHQpIFxjZG90IFxkZXQgXGxlZnQoIFxtYXRoYmZ7TX1fe2lqfSBccmlnaHQpIFxjZG90IFxtYXRoYmZ7Q30gXHJpZ2h0KSArIFxpaW50X3tTfSBcbmFibGEgXHRpbWVzIFxtYXRoYmZ7Rn0gXGNkb3QgZFxtYXRoYmZ7U30KJCQK"></iframe>

LiaScript offers much more, but we want to leave it with the "static" elements and move on to dynamic elements in the next section.
A feature that we wanted to integrate from the beginning and which we still see as a hidden gem of LiaScript is the use of JavaScript.

### JavaScript Everywhere

__JavaScript?__
At first glance, this doesn't sound particularly grand, but we were inspired by Bret Victor.
Here is a lecture that summarizes many of his ideas, many of which should also flow into OER projects:

{{< youtube oUaOucZRlmE >}}

We have reinterpreted the use of JavaScript.
Free `<script>` tags can appear anywhere in the text in LiaScript.
Unlike Jupyter Notebooks, where text is written around the code, in LiaScript the code is directly embedded in texts, tables, etc.

The execution of a script can have a result that is also displayed directly.
Unlike in JavaScript, where the code merely manipulates the document from the outside and makes changes that are difficult for the user or reader to interpret.
What does this look like specifically?

In the simplest case, calculations that you do not want to perform yourself can be executed within such a script:

<iframe loading="lazy" style="height: 300px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBTaW1wbGUgQ2FsY3VsYXRpb25zCgpUaGUgc3F1YXJlIHJvb3Qgb2YgMTEyMi4yNSBpcwo8c2NyaXB0Pk1hdGguc3FydCgxMTIyLjI1KTwvc2NyaXB0PgouCg=="></iframe>

This is nothing special yet.
But if we imagine how many educational materials use current climate, economic, or social data, it quickly becomes clear how important it is that this data is not only correct but also up-to-date.

A simple example of this is calendar calculation:

<iframe loading="lazy" style="height: 500px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/IyBBIE1pbGl0YXJ5ICJTcGVjaWFsIiBPcGVyYXRpb24KClJ1c3NpYSBzdGFydGVkIGl0cyBpbnZhc2lvbiBvZiBVa3JhaW5lCjxzY3JpcHQgZm9ybWF0PSJyZWxhdGl2ZXRpbWUiIHVuaXQ9ImRheSIgbG9jYWxlPSJlbiI+Ci8vIERhdGUgb2YgdGhlIGludmFzaW9uCmNvbnN0IGludmFzaW9uU3RhcnREYXRlID0gbmV3IERhdGUoJzIwMjItMDItMjQnKTsKLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUKY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpOwovLyBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgaW4gbWlsbGlzZWNvbmRzCmNvbnN0IGRpZmZlcmVuY2VJbk1zID0gY3VycmVudERhdGUgLSBpbnZhc2lvblN0YXJ0RGF0ZTsKCi8vIENvbnZlcnQgbWlsbGlzZWNvbmRzIHRvIGRheXMKY29uc3QgZGlmZmVyZW5jZUluRGF5cyA9IGRpZmZlcmVuY2VJbk1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpOwovLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBmdWxsIGRheXMKY29uc3QgZGF5c1NpbmNlSW52YXNpb24gPSBNYXRoLmZsb29yKGRpZmZlcmVuY2VJbkRheXMpOwoKLy8gUmV0dXJuIHJlc3VsdAotZGF5c1NpbmNlSW52YXNpb24KPC9zY3JpcHQ+Lgo="></iframe>

This document will now always display the actual number of days and format it accordingly.
The highlighted background indicates that this text or number was generated by the calculation of a script.
The user also has the option to inspect and modify the respective code by double-clicking.
You don't have to blindly trust the results of calculations summarized in a document; you can also directly verify them and perform your own calculations.

In LiaScript, we can go a step further and link scripts directly with input options as well as connect scripts with each other.
This means that if the result of one script changes, the dependent scripts will also be recalculated.
The parameter 'output' is used to give the script a name.
This result can then be referenced within other scripts throughout the document using '@input(`name`)'.
Within LiaScript, a processing graph is created where scripts whose inputs '@input's have changed are recalculated.

Change the values of the sliders and observe the changes in the diagram.

<iframe loading="lazy" style="height: 860px; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/preview/IyBQb3dlciBGdW5jdGlvbnMKCiRhID0kIDxzY3JpcHQgbW9kaWZ5PSJmYWxzZSIgaW5wdXQ9InJhbmdlIiBzdGVwPSIxIiAgIG1pbj0iLTEiICBtYXg9IjYiICB2YWx1ZT0iMiIgb3V0cHV0PSJhIiBpbnB1dC1hbHdheXMtYWN0aXZlPkBpbnB1dDwvc2NyaXB0PixcCiRiID0kIDxzY3JpcHQgbW9kaWZ5PSJmYWxzZSIgaW5wdXQ9InJhbmdlIiBzdGVwPSIwLjEiIG1pbj0iLTEwIiBtYXg9IjEwIiB2YWx1ZT0iMCIgb3V0cHV0PSJiIiBpbnB1dC1hbHdheXMtYWN0aXZlPkBpbnB1dDwvc2NyaXB0PixcCiRjID0kIDxzY3JpcHQgbW9kaWZ5PSJmYWxzZSIgaW5wdXQ9InJhbmdlIiBzdGVwPSIwLjEiIG1pbj0iLTEwIiBtYXg9IjEwIiB2YWx1ZT0iMCIgb3V0cHV0PSJjIiBpbnB1dC1hbHdheXMtYWN0aXZlPkBpbnB1dDwvc2NyaXB0PgoKPHNjcmlwdCBtb2RpZnk9ImZhbHNlIiBydW4tb25jZSBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMTAwJSI+CiJMSUFTQ1JJUFQ6ICMjIyAkJGYoeCkgPSB4XntAaW5wdXQoYGFgKX0gKyB4ICogQGlucHV0KGBiYCkgKyBAaW5wdXQoYGNgKSQkIgo8L3NjcmlwdD4KCjxzY3JpcHQgcnVuLW9uY2Ugc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDEwMCUiPgpmdW5jdGlvbiBmdW5jKHgpIHsKICByZXR1cm4gTWF0aC5wb3coeCwgIEBpbnB1dChgYWApKSArIEBpbnB1dChgYmApICogeCArIEBpbnB1dChgY2ApOwp9CgpmdW5jdGlvbiBnZW5lcmF0ZURhdGEoKSB7CiAgbGV0IGRhdGEgPSBbXTsKICBmb3IgKGxldCBpID0gLTE1OyBpIDw9IDE1OyBpICs9IDAuMDEpIHsKICAgIGRhdGEucHVzaChbaSwgZnVuYyhpKV0pOwogIH0KICByZXR1cm4gZGF0YTsKfQoKbGV0IG9wdGlvbiA9IHsKICBncmlkOiB7IHRvcDogNDAsIGxlZnQ6IDUwLCByaWdodDogNDAsIGJvdHRvbTogNTAgfSwKICB4QXhpczogewogICAgbmFtZTogJ3gnLAogICAgbWlub3JUaWNrOiB7IHNob3c6IHRydWUgfSwKICAgIHNwbGl0TGluZTogeyBsaW5lU3R5bGU6IHsgY29sb3I6ICcjOTk5JyB9IH0sCiAgICBtaW5vclNwbGl0TGluZTogeyBzaG93OiB0cnVlLCBsaW5lU3R5bGU6IHsgY29sb3I6ICcjZGRkJyB9IH0KICB9LAogIHlBeGlzOiB7CiAgICBuYW1lOiAneScsIG1pbjogLTEwLCBtYXg6IDEwLAogICAgbWlub3JUaWNrOiB7IHNob3c6IHRydWUgfSwKICAgIHNwbGl0TGluZTogeyBsaW5lU3R5bGU6IHsgY29sb3I6ICcjOTk5JyB9IH0sCiAgICBtaW5vclNwbGl0TGluZTogeyBzaG93OiB0cnVlLCBsaW5lU3R5bGU6IHsgY29sb3I6ICcjZGRkJyB9IH0KICB9LAogIHNlcmllczogWwogICAgewogICAgICB0eXBlOiAnbGluZScsCiAgICAgIHNob3dTeW1ib2w6IGZhbHNlLAogICAgICBkYXRhOiBnZW5lcmF0ZURhdGEoKQogICAgfQogIF0KfTsKCiJIVE1MOiA8bGlhLWNoYXJ0IG9wdGlvbj0nIiArIEpTT04uc3RyaW5naWZ5KG9wdGlvbikgKyAiJz48L2xpYS1jaGFydD4iCjwvc2NyaXB0Pgo="></iframe>

Now everyone is probably thinking: _"Phew, that's really just for programmers."_
But far from it.
Thanks to [ChatGPT](https://chatgpt.com), which also generates "Markdown", we can have such diagrams or other elements created by AI.
An AI will not achieve this right away if it has not been trained on LiaScript, but we can give it context.
In this case, the context would be an example from the documentation that we would like ChatGPT or [Claude.AI](https://claude.ai) to adapt for our purposes.

In the following blog post, we show how to generate various diagrams with a single prompt, using the above example, without writing a single line of code ourselves:

https://liascript.github.io/blog/creating-interactive-diagrams-with-chatgpt/

## Why LiaScript?

We believe that OER does not need another platform, learning management system, or authoring tool that only further separates OER creators.
Instead, we need a simple language that anyone can use and extend.
A language in which teams can collaborate to work on content, functionality, and representations together, each in their own way.
A language for OER offers another advantage over platforms and tools: users can freely express their creativity, develop their own functions and extensions using this language, and are not trapped in fixed input masks and structures.

Decentralization can also foster innovation by allowing for experimentation and local adaptations without the failure of a single project endangering the entire system.
A decentralized approach could also promote the development of open, community-shared resources that are freely accessible and can be further developed by the entire educational community.
This would not only improve the sustainability of the projects but also promote the democratization of knowledge.

In summary, LiaScript offers the following:

* __Accessibility:__
  Anyone can create or edit materials with a simple text editor.
  No special software is required.

* __Interactivity:__
  Add quizzes, simulations, and videos directly into your documents to make learning more exciting and effective.

* __Collaboration:__
  By using GitHub, you can work on projects together, track changes, and manage different versions of a document – all in a form understandable to non-technicians.

* __Decentralization:__
  Your content is not tied to a specific platform.
  It can be freely shared and adapted, creating a true community around learning.

Decentralization in combination with Git and GitHub/GitLab/Bitbucket also offers a completely different form of sustainability:
No intermediate version is lost; each of these intermediate versions can be recalled and restored as a course.
Anyone using Git or another version control tool has the entire history of a project locally.
If GitHub goes offline tomorrow, all participants still have the complete state and can still make changes and synchronize versions with each other without GitHub as a central repository.

## Decentralization

Finally, we want to clarify how courses are shared when they are stored and developed in a decentralized manner.
For this, only the URL of the plain text file is needed, which either refers to a version on GitHub/GitLab (free) or is hosted by the OER content creators themselves.
This "document" can be found, for example, on GitHub in the following project:

https://github.com/LiaPlayground/Warum-offene-Bildung-eine-Sprache-braucht

To access the plain Markdown file, you either click on the corresponding file and then on the small "Raw" button to get the following URL:

https://raw.githubusercontent.com/LiaPlayground/Warum-offene-Bildung-eine-Sprache-braucht/main/English.md

If you look closely, you will notice that the URL has changed from `github.com` to `raw.githubusercontent.com` and the additional `/main/README.md` suffix has been added.
This means the main branch of the project is used, and the `README.md` file is downloaded.
As mentioned earlier, on GitHub you could also access other branches or previous versions.
What is now missing is that this URL is passed as a parameter to the LiaScript website.

https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaPlayground/Warum-offene-Bildung-eine-Sprache-braucht/main/English.md

At first glance, this may seem cumbersome, but it has the advantage that we can change and adapt our content at any time without the URL changing.
The LiaScript website is a so-called [PWA (Progressive Web App)](https://en.wikipedia.org/wiki/Progressive_web_app), a pure JavaScript application that can also be installed on the end device.
The URL parameter instructs the app to download, analyze, and render the Markdown file located behind the URL locally in the user's browser.
The first load may take a little longer as the entire structure is analyzed first.
The result is stored in the browser itself in the internal IndexedDB database, so it can also be accessed offline.
If you click on the home screen in the table of contents, you switch to the following index view:

https://liascript.github.io/course/

Here, any visited course can be recalled, and you can continue with the material.
The LiaScript site is more of a reader/interpreter for LiaScript Markdown than a traditional website.
We update the website/interpreter, and you update your content.

#### Classrooms

Additionally, within a course, you can go to "Share Classroom," select one of several synchronization solutions, choose a random name for the classroom, and then click "Open."
You can share the new URL in the browser with your students, classmates, or colleagues, who can then join the same room.
Not only will the same course be opened, but all quizzes and surveys will also be anonymously synchronized.
The code editors have a collaborative mode where everyone in the room can work together, and there is a chat that also understands LiaScript syntax, allowing live surveys to be conducted in class similar to Mentimeter.

{{< youtube Kjk6OblugXI >}}

__Where are these data stored now?__
Here, too, only decentralized mechanisms are used.
The states of the browsers are synchronized, and if someone leaves the room, they take their own data with them.
And when everyone has left the room, these data are forgotten as well.
We call this concept Classroom-Lite ...

## Where do I start?

We hope we have convinced you, and if you now feel overwhelmed by the many features and wonder where to begin, how to create and share a course.

As a starting point, we recommend the LiaScript website, which we host for free on GitHub:

https://liascript.github.io

Here you will find more information and also the documentation, which is also written as a LiaScript course, as well as suggestions and news in our blog.
We also have a YouTube channel where we regularly introduce new features and use cases:

https://www.youtube.com/@liascript4180

For those who want to dive right in, we recommend watching the [Shorts](https://www.youtube.com/watch?v=saxAFw7XpjI&list=PL7LrRfaZulhch1ZtC6nSWOPcu1Xm80rlf) as well as the interactive documentation translated and recorded in LiaScript:

https://www.youtube.com/watch?v=ElxYssylmaw&list=PL7LrRfaZulhc3w4rebIl8Dnck6zqdKeNn

The entire project is hosted on GitHub:

https://github.com/LiaScript

You can give us feedback there, report bugs, or contribute your own extensions.
For quick answers and discussions, we also have a chat on Gitter:

https://app.gitter.im/#/room/#LiaScript_community:gitter.im

... or just send us an email at:

LiaScript@web.de

or follow and contact us on Twitter/X:

https://twitter.com/LiaScript

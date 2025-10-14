---
title: "From PDF to LiaScript Course — Speedrun with AI"
slug: "from-pdf-to-liascript-course-speedrun-with-ai"
date: 2025-10-10
draft: false
authors:
  - André Dietrich
image: "/images/post/brandschutzordnung.jpg"
categories:
    - Tutorial
tags:
    - AI
    - OER
    - Video
    - TTS

---

This two-part speedrun shows how you can transform static documents into interactive, narrated LiaScript courses quickly using LLMs, image AI, browser TTS and HeyGen presenter videos.

The project is hosted on GitHub: https://github.com/Ifi-DiAgnostiK-Project/Haus-und-Brandschutzordnung-Pirna

## Part 1 — PDF to LiaScript: CoPilot, ChatGPT and browser TTS

In this speedrun we transform a simple PDF (the house & fire-safety rules) into an interactive LiaScript course in minutes. The workflow shown combines automated text extraction, AI-generated imagery in a consistent style, and browser-based text-to-speech for narration.

{{< youtube RwlrB1l5oi8 >}}

Highlights

- PDF → LiaScript in minutes using simple scripts and the LiveEditor
- AI-generated images (ChatGPT prompts) to illustrate concepts in a single visual style
- Browser-based Text-to-Speech (TTS) used for quick narration and accessibility

What we do and why it works

1. Extract PDF text and structure (headings, paragraphs, lists).
2. Use an LLM ChatGPT to generate LiaScript fragments and consistent image prompts.
3. Generate images with an image-AI service using the same prompt template so visuals remain coherent across the course.
4. Add images and the generated LiaScript source to the LiveEditor and publish the course (GitHub repository or direct upload).
5. Use browser TTS for immediate voice-over during previews (no audio files required) and attach audio files later if you need offline playback or higher-quality voices.

Quick practical notes

- Image style consistency: keep a short prompt template (subject, scene, lighting, color palette). Reuse it for all prompts so images look like a set.
- LiveEditor: include images as normal Markdown image links (or LiaScript image notation). The editor will render them in-place.
- GitHub upload: commit the generated images and the LiaScript Markdown to a repo and point the LiaScript at the raw GitHub URL for easy sharing.

https://liascript.github.io/course/?https://raw.githubusercontent.com/Ifi-DiAgnostiK-Project/Haus-und-Brandschutzordnung-Pirna/3acfd7b8a4acbf87ead0ef26bb437d326c5f879b/README.md

#### LiaScript animation steps and TTS comments

LiaScript supports animation steps inside Markdown blocks using the notation `{{start-stop}}`. These are step indices that the user can click through. The `stop` value is optional — if omitted the step remains active until the next slide. For example:

```markdown
{{0-2}}
First block content (step 0), will disappear at step 2

{{2}}
Second block content (step 2)
```

Browser-based TTS comments use a small comment marker with a step index. Use `--{{step}}--` followed by the text that should be spoken when that step is activated. Example:

```markdown
--{{0}}--
Welcome to the interactive course. This text will be read by the browser TTS when the user advances to step 0.
```

Combining animation steps and TTS makes it easy to create click-driven, narrated sequences without uploading audio files — great for quick drafts and accessibility checks.

<iframe loading="lazy" class="liveeditor" src="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/Ifi-DiAgnostiK-Project/Haus-und-Brandschutzordnung-Pirna/3acfd7b8a4acbf87ead0ef26bb437d326c5f879b/README.md"></iframe>


## Part 2 — HeyGen for virtual presenter videos and LiaScript comments

Part 2 shows how we add a virtual presenter created with HeyGen and link two generated videos to LiaScript comment blocks. The trick: you can encode start and end times in the video URL so a comment triggers only a segment of the presenter video.

{{< youtube a6yfTFOuqIk >}}

Why HeyGen: https://heygen.com

- Professional-looking presenter synchronized with your script
- Easy to create short, localized segments for important course sections

How the integration works (high level)

1. Create two HeyGen videos: an introduction and a conclusion (or any two segments you like).
2. Load the videos into the LiveEditor or VS Code and use the relative URLs. If you want to split on video then append start/end parameters to the URL.
3. In LiaScript, if the first element of a comment is a `!?[video](url)` or an `?[audio](url)` element, then instead the TTS, LiaScript will play the multimedia content during this animation step. Videos are shown in an overlay when the comment is opened.

Encoding start and end times in URLs (example)

- Attach timestamps: `!?[](video.mp#t=0,5)` — starts at 0s, ends at 5s (some players only honor start).
- Omit end time: `!?[](video.mp#t=30)` — starts at 30s, plays until the end of the video.

LiaScript comment example linking a video segment

```markdown
--{{0}}--
This short comment shows the presenter intro (30s–90s).
!?[video](video.mp4#t=30,90)

--{{1}}--
This closing comment shows the last 20 seconds, starting at 200 seconds.
!?[video](video.mp4#t=200)
```

<iframe loading="lazy" class="liveeditor" src="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/Ifi-DiAgnostiK-Project/Haus-und-Brandschutzordnung-Pirna/refs/heads/main/README.md"></iframe>

---

#### See the final LiaScript course:

https://liascript.github.io/course/?https://raw.githubusercontent.com/Ifi-DiAgnostiK-Project/Haus-und-Brandschutzordnung-Pirna/3acfd7b8a4acbf87ead0ef26bb437d326c5f879b/README.md

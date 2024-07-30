---
title: "Multimedia Comments in LiaScript - This Changes Everything"
slug: multimedia-comments-in-liascript-this-changes-everything
date: 2024-07-30
draft: false
author: André Dietrich
image: "/images/post/multimedia-comments.jpg"
categories:
    - Article
    -  Documentation
    - Examples
    - Tutorial
tags: 
    - LiaScript
    - Inspiration
    - Languages
    - Video
---

How can you add your voice or short video sequences to your LiaScript courses? With the new multimedia comments feature, it’s now possible. This feature allows you to replay your voice or video directly in the browser as part of a LiaScript course. It's a game changer for educators looking to create interactive and engaging courses.

{{< youtube lOOcD2ES35I >}}

### How Does It Look?

It’s quite straightforward.
Simply add a multimedia link using LiaScript syntax to the beginning or end of your comment.
That's all it takes!

```markdown
    --{{0}}--
This is an original comment, which will use browser-based text-to-speech
output in the predefined language and voice.

    --{{1}}--
This is a similar comment, but it will use a predefined audio file, which
is attached to the end or beginning of the comment.
?[audio](link_to_your_audio_file.mp3)

    --{{2}}--
!?[video](link_to_your_video_file.mp4)
And this will start a video, which will be displayed in an overlay above
the course content. You can move it around and resize it as you like.
```


### A Brief History

At the eLearning Africa 2024 conference, it became evident that relying solely on browser-based text-to-speech output was insufficient for many underrepresented languages and dialects. This long-requested feature needed to be addressed. We aimed to solve this while maintaining the readability of the original Markdown file, ensuring compatibility with other Markdown interpreters to reference and point to the multimedia content.

For the audio component, the solution was straightforward. We linked to audio files, which are not visible in LiaScript, and controlled their playback. However, integrating video was more challenging. We needed to find a way to incorporate the video into the DOM without disrupting the original content. Inspired by a virtual presentation recorded with OBS Studio using a circle webcam filter that overlays the desktop, we recreated a similar effect in LiaScript.

Incorporating accessibility features and adding recording capabilities to the live editor was tricky. However, with a bit of AI assistance, it became much more manageable.

### Demo Material

To try out this new feature in the Live-Editor, follow the link below. Be sure to click on "Fork" if you want to add or record your own multimedia content. This way, a new instance of the course will be stored in your browser.

{{< button label="Goto LiveEditor" link="https://liascript.github.io/LiveEditor/?/show/code/H4sIAAAAAAAAA81Wy27cRhC88yva0CUCdkk9EgTQwYHgYxwYiIXkYBjRkGySYw1nmJmh6LWib8in5J/8JakeUrur2EIMRUEi6LBLznRXVXdX7wG9cH3PNoYz+mE0Ufdca5VlhL+bm9+e395mz+k8UuyYPFc4SG/4JStvtW3pvPG6UghhG/ZsK6aTo5OvSVv6XrfK6BX9OClbq7dfdTEO4awojFah8nqIeatjN5a5dkVpXFuwWYKuVQq6lkjF4YqmlNi1Vn/gGjhUxHezkfTBGXwiZ6n0bgrs16UKcojfx3V06zAwVx25MQ5jJB0ALIxNoystPBrnKYzD4HyUYMoYCoO7YktG2XZULQcCeIIehqsYcihx4Yhtp4TpwD44C5IfVNSAMB+9xlPdbLYh0uPK2YiMiUunrhk4onf1WAnWyVGn2w48PP86cojycDMguWtwcy4OrnYaVPB9MCyPUkX4vQ4JPLj0Kub0Wgu0l1q9TiJTggNwR/nxN/m3K9q4kSplybqJVF2TGmvtCEJc65pdEtrXCBgoOjnstwjyLDs4oHM5P3fHen1zc3R7u15nEGUwagOqS7xGG6Z69IIsBVFW97NKoDessqBBAxdiVCAlTPpt75HR9gqvZoJQzzXZPpI8++7Nx9//2LWUV9PSTCNaYNE6x+liq0NRuyoUvUJ2X2xJFgntL8d5P5weZtnl5SX1yl/VbrL/D4YPIAXQXQmOE8AnluRkTvTKr1KX6CjtIGgb7wRfyi4Ggeyf1+0erEeF/9sop0sUmZLRB951tzLBiZiltovuGJq9Tr5AKqlnqaormjQG31UV9IdvCQpkYS+fUL9hgC1lywtINs4F+vdL8F+yk0n/SQzhr5P+7MlIJr85zicu+8PsZ7FFmBEZtm3sNvDRUI0h3Nlq6RWcO8Ljkuvz/Ab/U4e1I80jbTRb2AICu0H6ynMvV/Eu6BIqTQCLdUCqaWDpEk2YC3h4KRxdyxLLs1eQC8tllIE+A6q4O1ZzhTyzyumBlKTqnAu8gwP5YcNJbTiwUfoOnbBR9bsxYB3FQAE7jead5VIRNPJWnrGD5NUKxZJVlYxllS57vsP1yZg8cXFOluJczOqGDnvyvsYrWlwOS8eMNXbd8n7f30putU0/FpzfMzy6b3hfaijPPvGCf4g1eyTWHaTzgHvYv3sT+uBwLms8S1NZyg8bGVRUHyMYZPun7nuA5OlC8jPe8wgM9GUYnqiZ7rBnfwKSsp72cAoAAA==" >}}

Explore the possibilities and transform your educational content with multimedia comments in LiaScript.

Here is an embed only demo:

<iframe class="liveeditor" src="https://liascript.github.io/LiveEditor/?/embed/code/H4sIAAAAAAAAA81Wy27cRhC88yva0CUCdkk9EgTQwYHgYxwYiIXkYBjRkGySYw1nmJmh6LWib8in5J/8JakeUrur2EIMRUEi6LBLznRXVXdX7wG9cH3PNoYz+mE0Ufdca5VlhL+bm9+e395mz+k8UuyYPFc4SG/4JStvtW3pvPG6UghhG/ZsK6aTo5OvSVv6XrfK6BX9OClbq7dfdTEO4awojFah8nqIeatjN5a5dkVpXFuwWYKuVQq6lkjF4YqmlNi1Vn/gGjhUxHezkfTBGXwiZ6n0bgrs16UKcojfx3V06zAwVx25MQ5jJB0ALIxNoystPBrnKYzD4HyUYMoYCoO7YktG2XZULQcCeIIehqsYcihx4Yhtp4TpwD44C5IfVNSAMB+9xlPdbLYh0uPK2YiMiUunrhk4onf1WAnWyVGn2w48PP86cojycDMguWtwcy4OrnYaVPB9MCyPUkX4vQ4JPLj0Kub0Wgu0l1q9TiJTggNwR/nxN/m3K9q4kSplybqJVF2TGmvtCEJc65pdEtrXCBgoOjnstwjyLDs4oHM5P3fHen1zc3R7u15nEGUwagOqS7xGG6Z69IIsBVFW97NKoDessqBBAxdiVCAlTPpt75HR9gqvZoJQzzXZPpI8++7Nx9//2LWUV9PSTCNaYNE6x+liq0NRuyoUvUJ2X2xJFgntL8d5P5weZtnl5SX1yl/VbrL/D4YPIAXQXQmOE8AnluRkTvTKr1KX6CjtIGgb7wRfyi4Ggeyf1+0erEeF/9sop0sUmZLRB951tzLBiZiltovuGJq9Tr5AKqlnqaormjQG31UV9IdvCQpkYS+fUL9hgC1lywtINs4F+vdL8F+yk0n/SQzhr5P+7MlIJr85zicu+8PsZ7FFmBEZtm3sNvDRUI0h3Nlq6RWcO8Ljkuvz/Ab/U4e1I80jbTRb2AICu0H6ynMvV/Eu6BIqTQCLdUCqaWDpEk2YC3h4KRxdyxLLs1eQC8tllIE+A6q4O1ZzhTyzyumBlKTqnAu8gwP5YcNJbTiwUfoOnbBR9bsxYB3FQAE7jead5VIRNPJWnrGD5NUKxZJVlYxllS57vsP1yZg8cXFOluJczOqGDnvyvsYrWlwOS8eMNXbd8n7f30putU0/FpzfMzy6b3hfaijPPvGCf4g1eyTWHaTzgHvYv3sT+uBwLms8S1NZyg8bGVRUHyMYZPun7nuA5OlC8jPe8wgM9GUYnqiZ7rBnfwKSsp72cAoAAA=="></iframe>

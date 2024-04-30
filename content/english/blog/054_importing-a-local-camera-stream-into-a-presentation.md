---
title: "Importing a local WebCam-stream into a Presentation"
slug: importing-a-local-camera-stream-into-a-presentation
date: 2024-02-02
draft: false
author: André Dietrich
image: "/images/post/webcam.webp"
categories: 
    - Examples
tags:
    - LiaScript
    - Feature
    - JavaScript
description: "How to use script-tags to create image-filtering effects in LiaScript."
---

Sometimes you want to show a live video stream from a local WebCam in your presentation, without having to move to another application.
This can be done with the following script and video-tag. It will ask for permission to access the camera and will display the video stream in a video element. If you click on the button again, the camera will be closed.

<iframe class="liveeditor" allow="camera;microphone" src="https://liascript.github.io/LiveEditor/?/show/code/H4sIAAAAAAAAA42TwW4aMRCG736KiaNKy4ElPfQCLFKU5lCpbSrRKmdjz4Ibr721vVAU8e4dr6FaoJHqE4z/mfl2/vEt3EuJIWi7BuOkMPCMqwfRBDa/GY9Ziz7oENHGKUTfIRuPF4zNt1qhA9FF1xqxr3gtTEAOWlW8v3o02FAOhxD3BiuudEjCKVhncQY7reJmCu/v7t7NoBVKUfcpfGh/88V80hdITYL0uo2gbdvFiodu1WiqqLAWnaHAU4sWiBS94AsmnQ0RMlcFyskuAZS/OvT7JRqU0fmC357RjRjTNRR9rAxePq1+kg6qqgLbGTOCVwZ0ksaKrV4LqlE2qLT4iFtNUyvXGH8E9F9S7CRP5z/kxWumzXOFw+hvcjpl3KAt6s7KqJ2FIkSPohm2OJ0resjat4TJkPLoB4n5ilx/4VfqgFaVhjD5g3EBT4M+p7yEliLKzYAavXf+X9DJLUccxq0LvnQNxk1awB25Ajvv7PrmotMFUg8D37xbkZVXUDPGznJcF2mFCv4sdExtauevv4d//nQ/hR1J8jAOgLTTA3b+1R2zEr6lWaM6StmZOK9i9EK+BJrwhUFpCb73d0VuPpnAkt4RCGOOSX04/yyJ9VHQUPu/UC1ynGx0bTHKBd4wNj01PhQMViStd3919orYgc0n+dUt/gDdwfw7GAQAAA=="></iframe>

Simply copy both tags into your LiaScript document and you will be able to open and close the camera stream with the button.

#### How does it work?

The video-tag is the place for your video, it could be placed also below the script tag.
The script tag will search for the video element and will try to access the camera stream. If the camera is not available, it will output an error message. If the camera is available, it will display the video stream within the video tag and switch its display style form `none` to `block` and change the button text to "Close Camera". If you click on the button again, the camera will be closed. By using type `submit` as input, the button will be displayed as a submit button, which will trigger the script execution only if the button is clicked.

Additionally in order to have persistent slide, the `persistent: true` tag is used, which will keep the state of the video element and the camera stream, even if you switch to another slide and come back. If this is not defined, you will have to click onto the button again when you revisit the slide, to open the camera stream.


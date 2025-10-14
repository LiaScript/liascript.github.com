---
title: Sharing Content via Tor and OnionShare
slug: sharing-via-tor-and-onion-share
date: 2023-05-12
draft: false
author: André Dietrich
image: "https://raw.githubusercontent.com/LiaPlayground/University-Future-Festival-2023/main/img/censorship.png"
categories: 
    - Tutorial
tags: 
    - Sharing
    - Video
    - OER

description: How to share educational content via Tor and OnionShare to bypass censorship and surveillance.
---

Why should something like Tor or the Dark-Net be relevant in education at all? If you look at the world map, it quickly becomes clear that the internet is not as free and open as it might seem from Germany. In this map, we have deliberately omitted China and North Korea to give other countries the chance to turn "red" too.

Looking at the current situation in Afghanistan, it becomes evident that the right to education is simply not available in many places. China is supporting Afghanistan in expanding the 4G network, yet the majority of the population still has no internet access. However, surveillance and filtering are being increased in the same way.

{{<
  figure
  src="https://raw.githubusercontent.com/LiaPlayground/University-Future-Festival-2023/main/img/taliban.png"
  alt="Taliban and the Internet"
  caption="Sources: _https://taz.de/Repressionen-in-Afghanistan/!5926105/ \| https://www.deutschlandfunkkultur.de/afghanistan-bildung-100.html \| https://www.business-standard.com/article/international/taliban-blocks-23-mn-websites-in-afghanistan-over-immoral-content-122082600086_1.html \| https://www.reuters.com/world/asia-pacific/afghan-girls-struggle-with-poor-internet-they-turn-online-classes-2023-03-27/_"
>}}

The [Tor Network](https://en.wikipedia.org/wiki/Tor_%28network%29) is a system that allows users to anonymize their online activities and identity by routing their traffic through multiple servers to hide the source of the data.
The network consists of thousands of volunteer servers around the world, acting as "nodes" that encrypt traffic to protect the privacy of its users.


#### Tor Browser: For anonymous browsing

* Download & Install: https://www.torproject.org/download/

* Disable private browsing to enable IndexedDB for caching LiaScript courses:
  
  Settings >> Privacy & Security >> History >> Always use private browsing mode (disable)

* Enable CORS:

  Settings >> Extensions & Themes >> Search for "[CORS Unblock](https://addons.mozilla.org/en-US/firefox/addon/cors-unblock/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)" >> Click on "[CORS Unblock](https://addons.mozilla.org/en-US/firefox/addon/cors-unblock/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)" >> Install (Add to Firefox)

  If you have __disabled private browsing__ mode, enable "CORS Unblock".

  Otherwise, enable the plugin first to be used in private mode:
  Settings >> Extensions & Themes >> "CORS Unblock" >> Run in Private Windows (Allow)

  ![Activate CORS Unblock](https://addons.mozilla.org/user-media/previews/full/213/213890.png?modified=1622134234)


#### OnionShare for anonymous hosting and sharing

* Download & Install: https://onionshare.org
* Open and "Connect to Tor"
* Share data: Start Hosting >> Add Files or Add Folder >> Start sharing
* Send the Onion-Address and the Private-Key to your students
* Open the Onion-Address within the Tor-Browser, enter the private key and select "Remember this key"
* Open the README.md of the course and copy this URL
* Goto https://LiaScript.github.io and paste this URL "click on Load URL"

#### Demo

<iframe loading="lazy" style="width: 100%; aspect-ratio: 112 / 63" src="https://www.youtube.com/embed/-y7I3bIeB_I?si=fc7SvDqlq7dSZgYk&amp;start=621" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
banner:
  title: "Turn simple Markdown into interactive open courses"
  content: |
    Create, share, and remix Open Educational Resources with LiaScript — an open Markdown dialect and interpreter that transforms plain text into fully interactive courses in any modern browser.
    <div style="font-size: 1rem; opacity: 0.85; margin: 0.8rem;">
      <em>For — Educators · Institutions · Developers</em>
    </div>
    <strong>Already have a LiaScript (Markdown) file?</strong><br>
    <br>
    <input
      type="url"
      style="border: 1px solid black; border-radius: 5px; padding: 8px; margin-right: 6px; max-width: 360px; width: 100%;"
      placeholder="Paste its URL here and open it as a live course"
      id="course_url">
    <button class="btn btn-primary" onclick="location.href = load(document.getElementById('course_url').value); return false;">
      Open Course
      <i class="fa fa-arrow-right pl-2"></i>
    </button>
  image: "/images/main.png"

# Demo Video Section
demo_video:
  enable: true
  title: "See LiaScript in Action"
  description: "A short demo showcasing how plain Markdown becomes an interactive course."
  video: "https://www.youtube.com/embed/rbqm6MN0We4"
  button:
    enable: true
    label: "LiaScript Hello World"
    link: "https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaScript/Hello-LiaScript/refs/heads/main/README.md#1"


shorts:
  enable: true
  title: "LiaScript Shorts"
  description: "Quick, focused video snippets showing specific LiaScript capabilities in just a few seconds."
  playlist: "https://www.youtube.com/watch?v=saxAFw7XpjI&list=PL7LrRfaZulhch1ZtC6nSWOPcu1Xm80rlf&index=1"
  items:
    - id: "saxAFw7XpjI"
      title: "Short #1 – One Document, Many Representations (Part 1)"
      description: "A single Markdown file can become a narrative presentation, lecture, or interactive course. This demo also shows how LiaScript handles text-to-speech with automatic fallbacks."
      edit: "https://liascript.github.io/LiveEditor/?/show/code/H4sIAAAAAAAAA41Uy27bMBA8V1+xQG9FLNgO0EcOBYL0EAMJCjS5O5S4FglTXIGPKEacf++SUl6qApQHQ5Z2dmdGO/oMvy3CL6pjizZAG03QnUH4g51Dz7dE0GR9UcA/Z7F4fFw+PS0WxaU+gQ2IFgRcC7eX1FuQzy2DEgFqYaFCGHuiBG0h4EOoiPbQksQTEB680RL9CZBL/xiiudaJOuj7F2zmU8KFErZBbv7+Qe6VkLXCeg8UA/RpvhJdh9aXH+lYZR3n9vAqoDLEHV6J7/QD8+51UBB6gop5oR/VEY9nRQJsbCt0EAgkA9jZXiErVdqP/byiaCQkOsJlFyYKZikCZIrFF7hNrYz2rEsbk6jda68rfmPMwwfsYMVVwsrhuaWQahy2dI/yI/XrrH5jsxAnfMisdmQM9do2EEQakBuSNYdx6tuh63na3HpxyryPcG51K8zrk+OnHnWjQrJg38ARrvQOfcduH9gYD8fiuJie93fOpgVnjIFrih7h7ZzxYlku1995ztuzXKc5cKOQJcxg+PxYTjCrAXMZW+Y6j/k6nfONmxQzBiXvT4fN83CgCG22BB86rMNLpGpqc5B2KRbJxrzo2fbTkoumizCNVoqT53Ub4mAoyue9I/5xucaXcOsOuYB3l3fAeiPCkK+XJHMaiRkMKMP5i6LBvGs5bf8VNsiKi7u7u3k7hiBeDJJ9InqlxU3tdBdAuI+DWOQgcjZ8dI6ilVxSHXKBFF4lgRveVSXYqzGuhacWgddlF/mmtuzv6K2oshEKJ36XME98FPUTtttbnqd9zkvCN0RNuhwNTY3Se1aCP2hspkNDQg7fB68DltvtXx1YQimRBQAA"

    - id: "kiGn5xhe-A8"
      title: "Short #2 – One Document, Many Representations (Part 2)"
      description: "More examples of how one Markdown source can be transformed into multiple localized or adapted versions of the same course."
      edit: "https://liascript.github.io/LiveEditor/?/show/code/H4sIAAAAAAAAA41Uy27bMBA8V1+xQG9FLNgO0EcOBYL0EAMJCjS5O5S4FglTXIGPKEacf++SUl6qApQHQ5Z2dmdGO/oMvy3CL6pjizZAG03QnUH4g51Dz7dE0GR9UcA/Z7F4fFw+PS0WxaU+gQ2IFgRcC7eX1FuQzy2DEgFqYaFCGHuiBG0h4EOoiPbQksQTEB680RL9CZBL/xiiudaJOuj7F2zmU8KFErZBbv7+Qe6VkLXCeg8UA/RpvhJdh9aXH+lYZR3n9vAqoDLEHV6J7/QD8+51UBB6gop5oR/VEY9nRQJsbCt0EAgkA9jZXiErVdqP/byiaCQkOsJlFyYKZikCZIrFF7hNrYz2rEsbk6jda68rfmPMwwfsYMVVwsrhuaWQahy2dI/yI/XrrH5jsxAnfMisdmQM9do2EEQakBuSNYdx6tuh63na3HpxyryPcG51K8zrk+OnHnWjQrJg38ARrvQOfcduH9gYD8fiuJie93fOpgVnjIFrih7h7ZzxYlku1995ztuzXKc5cKOQJcxg+PxYTjCrAXMZW+Y6j/k6nfONmxQzBiXvT4fN83CgCG22BB86rMNLpGpqc5B2KRbJxrzo2fbTkoumizCNVoqT53Ub4mAoyue9I/5xucaXcOsOuYB3l3fAeiPCkK+XJHMaiRkMKMP5i6LBvGs5bf8VNsiKi7u7u3k7hiBeDJJ9InqlxU3tdBdAuI+DWOQgcjZ8dI6ilVxSHXKBFF4lgRveVSXYqzGuhacWgddlF/mmtuzv6K2oshEKJ36XME98FPUTtttbnqd9zkvCN0RNuhwNTY3Se1aCP2hspkNDQg7fB68DltvtXx1YQimRBQAA"

    - id: "RAQeOPYED28"
      title: "Short #3 – Intelligent Image Handling"
      description: "LiaScript treats images context-aware: floating layouts, automatic galleries, captioning, and optimal sizing — depending on how you structure your Markdown paragraph."
      edit: "https://liascript.github.io/LiveEditor/?/show/code/H4sIAAAAAAAAA61VXU/jRhR951fcboVKJGITdglL32Bp+RArIUV9qqrRjT22B8Yz7sw42fTX91w7QFjRh0V9IMT23HPOPff45me6abnWkZYbOg9JtyYapivtkrE6Fo3Z2/vpz4W21bTzIQU26a+DJqUu/prnfWc9l9naPJpWl4YzH+pcrjq5ygvftt7F/Cg/OslfQSiOKjVanVurax82ylfqng04Xa32jz/fsbo3KfWB94/P1FQ9C1M7wrKHrqYPSqkB+n4LTRwJ0PQETb6iZ2ilDolt9PTo/NrJUdw675MPBsUpeTKOVjomTaWhrQQcIR8omrazGym4451HHyZ7L7bd+dbI2TeNpIPPdNsDYnZy9pGmVGQ0m5/MJ7SGDnZ0k9ga/L/g4P/uNXWiWofsFYaJVMBTU+qgS2L4Ww/ttj6i9QKWd9bEBs+iXqFO46+ZFvjs4QWHZGKKh2jTJMMWYtY+PMIaaVxwYtpYLZ594cArrmvjM1rggYjsgi/7Qk7jW6VjNN6xHSAkPlKPKEn17CSjGydd6cC0brTDqRafDZdU6TX5TrLQiwxkD8Z3fYhoelRoCpJhOqGCnQPByP/C+tzLrj3r7fQrE+AHKKEA4EsNYwBOrW6XOojCISNFwSUGxTJtmRmV2tKlibp2QxR+tz5oV6DSwVBUiHxADoNxnEYlhTXitNUZfWU3JG5H0y9xnCR6iWidMQi9NaMKvqV2k5oosRzyCjcOBzbRd2GWVsuwCtuX4sXKFMm0OBF7UyAD27NrDsH4EDEpaRP8DZpcIsfboMd++aCLhJiBe9FHdo6fWX6zCFOkg04cLXrLwY6znM1nR3gbghgubtzjfcZVpVHgJocIc2lSQwvLGxF37S3GExzmeSD8KP80nc2PdzDiU8z+qCrzj6Faug6bydjGFk++XqP+K5sy6rBil0bAJxjJ1/z4ZAfuUqfg8e7fOGQn9WnwAAONk4z2vs/HaEnlxSHRzTBZQlLqDvaO8dEtW0lRPQxLVNUBoyMn48NrGttBpoCIsvhorBUxDe5aAS1gRh8EVn/rAkKLiGHkg36pLAO3nO3Jct1pu3nd9g9v2rP87FP+5rJUI4vaQVeXN+eyQyey4NlKcoZOxYBrjaDDw4Ukl259M/p8wZ28dO/RdZqPHEo4huUvHLL4Bw4lHMPtLYdabt5e+6rgTEk0kS2smW0D/6OJp/kp57uEDwP27DuqC92ggdfB/2GuZb48zQdAVeqCO5PQgVesXjD3j78o7Mr//g0UTVeGsX8IL7eJWNzv0THPRxCl1QiS3d5fjdloI1LbS2q1NZab91j6MR9xFHDUFmdQ/y8oHgrmgQgAAA=="

    - id: "bA3ZdSTalG4"
      title: "Short #4 – Embedding Media Made Easy"
      description: "LiaScript supports four lightweight ways to embed media: classic images, audio tags, inline videos, and flexible URL-based embeds for any custom content."
      edit: "https://liascript.github.io/LiveEditor/?/show/code/H4sIAAAAAAAAA51W7U4bRxT976e4WRSpSF7bYCAB/CGSQEGCNgKaCqH+mJ256514dmczM+tlifJafYG+WO/M2gFXNLXKD+PVztyPc84911twmicohCxmcFUpJ3MUkgErBFxpg50O/OAvjr9+HXz7FsedX1PgujIWuyAdSAultlYmCsFpQJ+BQjYwlxRXp5A/ZeK6cFg4qKXL4Pz26rILSeWgsr4i/wy5nGUOEgplJJ83oTau81JJzhyKHlxKdsONLB2FTtFYsDpHKCRHUNI5KgIfKIeVuvDlWEcRmKEGmZkLXRe9TqczEnJBbxqF46iWwmVHO4PB6+MMffKjwXHJAkZxop3T+dGb/dfH1KJ0FPPIoGJOLvA4moxkahglt4aPo8y50h71+zNZZk2PSu4HJPq39vHEXjzcvX9c5KcRhHTjyOeLoE24eloW9D0TS6xWlcMIQpp32gg042gQAVfM2nEUUsUhTQRMKV2fVUoROojFZNRvq6Mv1O1kVE5GDDKD6UulzmRq+28HNt459J/rNU8WxNzPFx/P70Z9RuHKSaeztQUnlZAappuK5iIlLkHmbIZeMqSNltFWC/QKH6itnPnWISeyulBnDdhMV4r0BF8qtN/fQaEdGCwNWi8nq6tCTOHM6BxImFCSLkrknqbu86tCowWl9ZykMseQlBkSxPSeoNEk6D9+WmFT13WvHlqeaa1swChzueqHU728HEKU0V1Y3ou2SVX/CcROAOI2I8V42dTazC3xZjWk2rQ6ts4gy/00lEYvJBFuez8ODBACUw8Gv1QS86ceAixc6UqEBnL9yIzrL4/FsohFTKm0iefxwe5BvLMdeP1EWTW8+r/ECkxlQbQmzUukhnkOdYUD66y2jHtqW0NwNB/GT38iizYEDfRKOLAIdS4dpQc3kkyioeey8Rfht+tLbz7+652ubquEpPCJbEh34QOTqsm1j9gFdLxHcijmPfhl6V7BH7kWoZ8AlyHnIYJfTe/PdUEVw6moeChpXTGNrhxlCnDXzPFsuhir7Obz3e2b8vd53QJ8ukDTuMwnQWURptPO6BUB6VUrre/mCHTRiePJhhS89LJzW+t1dC3kyKjhC8jYghyToBTIus8MlRNh1AGUCpn1Dtw8GTrVa5/AfrqTMZIwmbhUjhQFgjmWhMsZo4AZcsorWxp4ZUwwf0zI4XDl35RUh7UEFs2CfLzrL9BQSL8nlAIhbalYy+qqAiJjOr0/KUh2Cjgq9Uz1c6I0S1kSWBiSxolJZfssHI794dgvAqWZYLS0YiH43iBJBoeDwf7e3uH+YTrYFcM0fTvkw92DnX2I3jVwf8kqI+FjZTJSQPFv6cKp1aFtohFuwvszlgSP2MwiLgrC1CI1S6A4LLuh97Afy+WYpT4qim4YqGfIhHXMyJJEMJUlsrKgh3YMV+g+vxNgpp27RDqIfSPPmd5faxfC2vlffxpS8Po8zFDPMDGsp82sH7aW5P2HnN3cXL+3m+Cxu7IYkuuyFx4WAlVbWd//kxRDF/8QLa795CCBeqsKe7HbytKvItsuz9a0/J2lQjdAYbdFgUvDK9KrlfRjhzn9DIaUDN6x1oGXx1b/P9ueXyqEw9/M9AeymQkAAA=="

    - id: "9kIdg-9rmHg"
      title: "Short #5 – Quizzes in 100 Seconds"
      description: "Create rich quizzes directly in Markdown: multiple choice, single choice, matrix questions, text input, dropdowns, or gap texts — all without an LMS."
      edit: "https://liascript.github.io/LiveEditor/?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"

    - id: "-VrEtZvhn6I"
      title: "Short #6 – Executable Code Blocks"
      description: "Make code snippets editable and runnable inside your course by attaching a simple script definition. Perfect for tutorials and programming lessons."
      edit: "https://liascript.github.io/LiveEditor/?/show/code/H4sIAAAAAAAAA71VTW8bNxC9768Y0AggJ1qt3KQf0JebNGnrAHUCOIf2VFHLkZY2l9ySXMmC4f+eGVKS06DIsTosOCRn3sybN9QZvLvHuo9yZRB+cQqLAv79K8uHh/HjY1kWb7WCvevhzrrdEGIjI+x0bMBZs6cPgtExIsgYZd20aOMwXa+lhdh7y4aHP6S/U25noSawMljddRgDaBsd0EV8ykZaBah0NjqNNYJbJ7dRUSyXS7iVWxlqr7tYGIxwD3MQDRrjYOe8UaIoameDMzgybjO4Py+KqoIdp93qTRNhhVQEgsfQm3h5eVkI+AEEPH8OF98xQFHMlN5CiHuDc7HTKjaTi/H42bRB9p+Mp51USttNuXIxunby6uWzaeeCjtrZiUcjo97iVCxmeu1lixB8PRdNjF2YVNVGd81+VLu2wnaFqrp4+fr6pz9/vH1z1V583wpIeHPBgAIy4tE6ZHSCkiuqso8oIOG8cV6hn4uxgNrIEOYiYZUJR4Akhna/9sbc1B7RLmZVTo8WVO5i1i1mEhqP6//KdaPXoWpkfYc+lK3baizZYhK+KmCx1RJ+u/r4+1+zSlLsblHw7+wMXieBoIJl7l5YfkN0n6hDSWCxIZCsOh2oaf/02lMMWpNsuA9MhTSQY5ZRbobUbPQIy5+17fq4JKeOmk3CJB/ojKyxcYaoylE3rMPQr0LUkchUWdyskLr3nryy9uBqnTfJSOjGo1R7eE9qvEnYPBtoQcckfVIZbqXpJYfUbUuSpqXZ/18inuXoi0zCrDqYx2Z89O4W6xi+0YKrPHVwGlZiCjamp3qiozWRfCiZPnuQRDmNM3oim2uWAboDyDBz2lKqujN8jVIKh7eEyZImOC7Jkh7VCLj5p+592bD0pjDi0aEPx4ZRZyXLOXJfHShca4ssBV03GRA2DqnTjeuNYl8SDzuzVjJkZ/qQnh9mttWWrBWunc9Ur7VBzo+CKV1TL9lVMgun4y+Cuw4tRXeUs3Gc5GrPOUmigBSQJRAy4e9IJllBo9uQ1LBrHOlByShHa+1D/DvhvqD+CvqmfRrwvD0tCr0epD2aF6r5HB6opxyCHUipeVsUj4Am4Nen1x8+HW9Mi8cknZycs5zdi7ccma2CHcVTPgImZN/Itt2LIR+dUhKQjxp68/PRASDVS0fR93jAOsqUbpHAtQ3oY+Lz/c2H61RqIELS3wTvGlfTrG+l1+nvgc/JkznjJZGWVTO4OJ8WOSQPYXLNQFlzJJvAL0s4ItBdvjg4qG4wPl9ShKep+QxmAoHsMAcAAA=="

    - id: "DuxVovCc7os"
      title: "Short #7 – Tables & Data Visualization"
      description: "LiaScript can turn Markdown tables into charts automatically. Ten plot types are available, and you can still pick your preferred visualization."
      edit: "https://liascript.github.io/LiveEditor/?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"

    - id: "5jjXT-JsyYY"
      title: "Short #8 – Custom Macros"
      description: "Define your own macros or reusable LiaScript components with just an @name. Add parameters, shortcuts, and even block macros to simplify authoring."
      edit: "https://liascript.github.io/LiveEditor/?/show/code/H4sIAAAAAAAAA5VWXW/bNhR956+4TR/WArbcBH3YhCyzVTtt2gQrlgzbXhZREm0xlkSBpOIYVffbdy9JW3Y/MCxAbJrS/TjnnnvJ82fjMZN1q7SNobS2NfFkovkmWklbdllnhM5VY0Vjo1zVk0ryO1G3FbfCTGbJmwczqblsJr8tZvObRVQXjPHOlkrHcC35ba5laxlDyxo9xDAXtQLVQM1zrQxEUQSMTUtRVSpRWQz39+9oDfjj/p6NxxeMPYcb9zJj4P7G40+fXn3+jFnvA+zccS2gktZWAmTzIHIrVWPAltwChmhhqzqwCgrBK9ggPLCCF1J1aNkUoEUrrLTyUYDlZm2iENi5LcRSNqJwZrJBnwIINwRkoJYgHoXeQqHyjnYiuCsFGpJx1snKjuUetsuo1epRFuhGWI7pLpWuOSUMpstL4AZYOvVUpqA0pNMQKo2QMf8AF2GTHbJz6ti5Wnq8mO6a0vOxR/DQGTvsWvFkx6bLDCLvHF8jnx7l7UlE1LJB2gjzgG7h0DqnYCzX1nhKeYOppqM9CrJaKqzpRjarEWxKifvSQM6rCj2n++KnscPg0h8kcQTszAG7KztMkofYOQbMBIXdl5xwcSyeXhdq04xNI1us7Aje3d1cE5Xv+WMQDlKJAnsOvyKYjcbaN6vAEzunvthJedYoxKHho9BGNUeKfatUAdlWkGS9YL+U6V9YBcqSW8uJk71mkFOvGRPyxhpUwmlRhYQcMPEkzZAaIfBqhEZssJkEKjXpqKbCkCqxXw1uV1tvOEgWWTfoBkOEgEdKOmCcKPnINUdpImBPRSlXZYX/2MTnpsWsjN1W4ueTXFXE0PTVycX09HxCjy6+zcMViqoyClpljMwwC8TfcmPwYxeKtkJhRwEP6RBXzTfEiFMoF6WqCrQ8UC0ysA6divJ6lZLTdPpTGmEZi8NgriiUUSZC1YmQPdAXWhSjPS0vd7zgbpgFNwdK+V/0MPSBe8eRKFUMklWdOHpGG+HhN2klUGGu7AFRc4GXbHjk2GiH3B85uiW4uPViDxK5xTFYvPx6mtzKJheH5BHTRtCG3ZFNuuZ+ltLkaQQ+2NUYZTpY+9dpC7Vcd5WVLcrBm4+cLSHBowcynq+tzNdOGabTWnXeux68Rbts98ODKHsxTJYRlGrjEkZD4jjUEY+2R2orY3WX204LX8qhE3pwS+ipuaFn/dj/+e+enqNjwOfknH5T7vQbfsFPxi7gCngNRLkTaLM2z9hUNMV3OmR5TJxP0el/SNLxK5sCJ4g7L44Jo1ezSuVrMFt84SkCbLtCCQM4wvyg3hWrItswoZ1Wvi4deUwpX9dE1Fjubdwg3uj4KEPrRF9PkGuZaa6lMEN9Bqi/h1zTcPVIw3DDMFosUSK4cGXenTgkFZoOYRLjslK8GBJA4dBcN/5CQEDe3N4OQ+E75/c4zGI8rfkaqUWnao2T2r1Q7QB4Nwc041HFdnclf09ylyOrWpkbuiP5NMY2XJXYMQW+pf5ApzT/6TTcz8SQW6bVBmvv4vkBJepMFAUicA3uZuBw/0ErjrzxgpMPf5WID4LuOiNNU+BZzv6M4ZTdxfBGqUpsfzDsJobXk9fsGvcnP7IPMSxq2bA+np/1J4v6ZJEkM0jOYJH0/+DXLIEimb3tT+Ynl/PZHBL86N2qmF3Oe/aFSbAQyxVZ8KX4Oyf7S+d6vricw+Isxu6JV0u3JRIyxNdF75crUSRkOjuDyxnMZ5ez3i+dT3Zgk6ySYPOf4ZALNsUb7PvbSOA0/BeTYJSiCAsAAA=="

    - id: "C5Lyn0by580"
      title: "Short #9 – Serverless & Decentralized Hosting"
      description: "Host LiaScript courses anywhere: classic HTTPS, GitHub, GitLab, Nextcloud, Dropbox, IPFS, data URIs, Nostr, WebTorrent, OnionShare, and more."
      edit: "https://liascript.github.io/course/?data:text/plain;charset=utf-8;Content-Encoding=gzip;base64,H4sIAAAAAAAAA31VwW7bRhC96yumNNJDIVJOglxkWUYUO7EBt3YtG0VOzpIckQuTu+zuUrQQ5N/7dklKDuqWB4rkzM6befNmdER/lWyYpCVXMmVaOVaOrNOG87PJhPZXHH//fvzjRxxPzmVOO93Sk9IdTglH11KsMyMbR85IRihNKZMolLZOZiQsNdpamVY8pa5kRdIBqu49S++kijO6RwKuxCOymQYEb/IPZp9YuuvfdadIqJy0qnZkeMPGh5JuSlspSNDD3XV8K4yo2XmTT9IHFM6JrPSuvtpD2h2nVjpOJpNvpXONnc9me2NSSFe2aSL1LAO05dnZ/eXFIxAe728ev9483D1+wm19kdT5twmuoyP6ggJjuq2E22hT29d5/Fi5UrdFCU6Ymr4IHLxsU/qVAEo4S1s2VmoFVqYjU9NQedOmlbRlePelWcSq8sA7ePYlthbPavciBNmddVwT4jZDbmMHRpp9gSPboOO3IaM5jbwMbKB9vfFa/GysxGhcSbdqsyd2B3sqXRo+JdoUcAmgDfLTSlRk2SDXgcJPlW5zkLiGFEXBr1N47xtbs1CDYDIBWVS2r/3c6Galn6f0Bz+7EG5KN50ansCBUBoyMEHtgPA6FSMFjdFbmbOZew6GSIc6uq5LcnxM9fNQ7B7j4KTwKfOfBpcR++ABFR8c+rJvmc07f0NE12nz9B/iuTH7gnmLiSr0vqVxxRZ8YFRaG5reQvKHuGqI68v1U3CFXhtIFd+F2dFnWXG8DjpJMJJYDKKqdGcDHMRiS2EOiyKXhjOHGdwYXfftTA282UxJbvqZg3ufiEdbGbHleNX7+CbcoP0Ckq61KiDD0BEblHd1+3l94Eo2G5s4zkpYLnc4FJ+LF8rKhUs2ulX4hdbhU2OD+Xz9nplTkiQDwTgl4oe7K4shW+tMQnf/P6f04pp8xOQNdXUC9QOgCBhNhU0DHlKRPaVa8dCEsUdej/mI7JegRE+8IfXkcB5m/XeZGY2DwvhhTejSb2ZPGpiWgfSX0+l3dtPiRw3rDBtp6Fgndj8h+y1g+1przrEg/zX9fqP0nX25bn+ZTBa53GJAdhWfRp3MXTl/e3z85qRkWZRufnzSiDxHsnGqndP1/MP7NyfY9dI3YW4YMHLLJ9FyITd+GZM12Wl02BZNufPan3Gdcj7LXPrBsfwzu7p4m/39bnV3HVHAPI08aEQ96vg2ZLWHE6nVVes4ooC10gbzexodR5RVwtrTKODFASvqVf25rSpseWa1XMz6FPGAkpeLZrkQVGIrv5ZvITd2ZivmBrUXEkqIe37jwG9sizoezXFvf6W4pf+v+nJ1e/l1MRPAbZb/AB1z7qqPBwAA#1"



# Features
features:
  - title: "No build steps. No configuration."
    image: "/images/example.png"
    content: |
      LiaScript parses and renders your course directly in the browser, on the client side, in real time. All you need is the URL to your course file. A course is just a plain Markdown document enhanced with LiaScript for:
    bulletpoints:
      - rich multimedia content & lightweight animations
      - text-to-speech output in multiple languages
      - quizzes, surveys, and self-checks
      - online programming and executable examples
      - ASCII-art diagrams & dynamic charts
      - seamless JavaScript integration
      - collaborative and interactive classrooms
    button:
      enable: true
      label: "Read the Documentation"
      link: "https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md#1"

  - title: "Open-courSe: like open source, but for courses"
    image: "/images/bg-showcase-2.jpg"
    content: |
      You stay in full control of your content — but by hosting your courses on GitHub, you make it easy for others to contribute, translate, and adapt them. There is no single source of truth, and there does not have to be only one course. With branches and forks you can evolve multiple variants for different languages, contexts, and target groups.
    button:
      enable: true
      label: "Explore Open Courses"
      link: "https://github.com/topics/liascript-course"

  - title: "JavaScript-ready by design"
    image: "/images/monch.jpg"
    content: |
      Unlike most Markdown parsers, LiaScript lets you use any JavaScript library you like. Integrate visualizations, simulations, computer algebra systems, or custom widgets — whatever helps your learners.
      <br />
      To make this easy and reusable, LiaScript provides a powerful macro system that lets you wrap HTML and JavaScript into simple, author-friendly building blocks.
    button:
      enable: true
      label: "Browse Templates"
      link: "https://github.com/topics/liascript-template"

  - title: "LiveEditor: collaborative authoring in your browser"
    image: "/images/LiveEditor.png"
    content: |
      The LiveEditor is a browser-based collaborative editor built specifically for LiaScript. Your content is stored locally in your browser; collaboration happens peer-to-peer via
      <a target="_blank" href="https://webrtc.org">WebRTC</a> and
      <a href="https://yjs.dev/">Yjs</a>.
      Snippets for common LiaScript patterns are built-in — just type "lia" to discover them. And if you have a GitHub account, you can export your courses directly as gists with a few clicks.
    button:
      enable: true
      label: "Try the LiveEditor"
      link: "https://liascript.github.io/LiveEditor"
---

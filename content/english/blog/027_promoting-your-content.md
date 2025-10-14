---
title: Promoting your Content
slug: promoting-your-content
date: 2022-06-01
draft: false
author: André Dietrich
image: "/images/post/Gallery_at_Brussels.jpg"
categories:
    - Tutorial
tags:
    - Sharing
    - GitHub
    - GitLab

description: How to promote your LiaScript content and make it more visible to a wider audience. Learn how to add meta-information, badges, and social previews to your content.
---


If you want to "promote" the LiaScript content you have created, or share it with a wider audience, then you can use the following methods.


### 0. Add LiaScript meta-information

Add a first HTML-comment to your Markdown document, as depicted below. This HTML-comment should provide at least the information about the `author`, an `email` address for contacting, a `comment` that summarizes your course in a few sentences, a `logo`, and an optional repository, which points to your [GitHub](https://github.com), [GitLab](https://gitlab.com) repository, if the course will be served from somewhere else. 

``` markdown
<!--
author:     Your name

email:      your@mail.com

comment:    This course is about a
            very interesting topic

logo:       preview-image.jpg

repository: https://optional.repository.url
-->

# Course title
```

All of this information is used to generate a preview-card for your course in the local LiaScript course-overview of your users, at:

https://liascript.github.io/course

But, this can also be used to generate custom overview sites with the `<preview-lia>` web component. For more information, visit the blog post: [Markdown just got a new preview tag](/blog/markdown-just-got-a-new-preview-tag)


![](/images/post/promoting-your-content/Publish0.png)
_Screenshot of my local course overview at: https://liascript.github.io/course_


## 1. Add additional content that is NOT visible to LiaScript

You can add information about your course, the authors, links to the LiaScript rendered version between the main document HTML-comment tag and the first title. All that content that is in between will be ignored by LiaScript. 


``` markdown
<!--
author:     Your name
...
-->

__INSERT ADDITIONAL CONTENT HERE, THAT WILL BE IGNORED BY LIASCRIPT__

# Course title
```

Additionally, you can use the following badges, which are two images, that are used as links to your course. Simply replace the `URL` at the end of the badge with your "raw" course-URL and when the user clicks on them, the LiaScript rendered course will be opened. 


``` markdown
<!--
author:     Your name
...
-->

[![course badge](https://raw.githubusercontent.com/LiaScript/LiaScript/master/badges/course.svg)](https://LiaScript.github.io/course/?URL)

[![learn more badge](https://raw.githubusercontent.com/LiaScript/LiaScript/master/badges/learn_more.svg)](https://LiaScript.github.io/course/?URL)

# Course title
```

---

These badges can also be used anywhere else:

[![course badge](https://raw.githubusercontent.com/LiaScript/LiaScript/master/badges/course.svg)](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md)

[![learn more badge](https://raw.githubusercontent.com/LiaScript/LiaScript/master/badges/learn_more.svg)](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md)


## 2. Edit repository details 

On [GitHub](https://github.com) you can also add some meta-information about your project, which helps [GitHub](https://github.com) and your users to categorize your project. Therefor, simply click onto the __About__ gearwheel/settings ...

![](/images/post/promoting-your-content/Publish1.png)
_Screenshot of the LiaScript documentation without repository settings_

... and modify your "repository details".

* Add a short description, which is in most cases a single sentence.
* As the website, you can provide a link to the LiaScript rendered version: `https://liascript.github.io/course/?YOUR_COURSE_URL`
* And additionally add some topics, which can be used to categorize your course, something like "chemistry", "physics", "education", etc. is ok, you can also define a topic that names your organization, and you can use the topic "liascript-course" too.

![Screenshot of the LiaScript documentation with repository settings](/images/post/promoting-your-content/Publish2.png)
_Edit view for repository details_

After defining the repository information, your __"About"__ section will look like this, with a clickable URL that will open the LiaScript-course and also with clickable topics, that will open up a topic list.

![Screenshot of the LiaScript documentation with repository settings](/images/post/promoting-your-content/Publish8.png)
_About section after updating the repository settings_

By defining topics, it is later easy to get an overview onto all related projects. For example, if you have added the topic "liascript-course" then your project will also be listed in the associated topic-list, which can be found at:

https://github.com/topics/liascript-course


![](/images/post/promoting-your-content/Publish6.png)
_Screenshot of the topics overview for liascript-course_

additionally, if you have created a set of LiaScript macros, that can be embedded into other courses, you can mark them with "liascript-template" and they should appear in this list:

https://github.com/topics/liascript-template


## 3. Social preview

The last thing that is missing, is a descriptive image, if you do already have a logo for your project, which is used in the described in the first part, you can also reuse this image for [GitHub](https://github.com) under "Settings" and upload your image at "Social preview". If your project-URL is shared via [Twitter](https://twitter.com), [Facebook](https://facebook.com), [WhatsApp](https://www.whatsapp.com/), etc. then this image together with your [GitHub](https://github.com)-Description will be used to generate a preview-card.

You can preview your twitter-card for example at:

https://cards-dev.twitter.com/validator 

Simply add the URL of your [GitHub](https://github.com)-project and see, what information [Twitter](https://twitter.com) and others will use for their preview-cards... 

![](/images/post/promoting-your-content/Publish7.png)
_Twitter-card validator with LiaScript-documentation preview_
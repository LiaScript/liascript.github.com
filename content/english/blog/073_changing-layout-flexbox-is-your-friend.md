---
title: "Changing Layout - FlexBox is your Friend"
slug: changing-layout-flexbox-is-your-friend
date: 2024-08-16
draft: false
author: André Dietrich
image: "/images/post/layout.png"
categories:
    - Tutorial
tags:
    - CSS
    - Markdown
description: "How to change the layout of certain parts of your LiaScript course easily with FlexBox"
---

In this article, we will show you how to change the layout of certain parts of your LiaScript course easily with FlexBox. FlexBox is a powerful layout tool that allows you to create complex layouts with minimal code. It is supported by all modern browsers and is easy to use.

### What is FlexBox?

FlexBox, or the Flexible Box Layout Module, is a CSS layout model that provides a more efficient way to design complex layouts without relying heavily on float or positioning. It allows elements within a container to be automatically arranged in a way that makes them responsive and adaptable to different screen sizes, making it a great tool for modern web design.

The primary advantage of FlexBox is its ability to distribute space within a container, even when the size of the items is unknown or dynamic. FlexBox also makes it simple to create responsive layouts that adapt to different screen sizes and orientations, which is particularly important for mobile-first design.

### Creating a FlexBox Layout

To demonstrate how FlexBox works, let’s create a simple example where we want to arrange several items within a container. We’ll start by defining a container and some child elements, and then apply FlexBox properties to control their layout.

#### Step 1: Setting Up the Flex Container

First, we need to define a container that will hold our items. We do this by assigning a `display: flex;` property to the container class, which turns it into a FlexBox container. Here’s how it looks in CSS:

```css
.flex-container {
    display: flex;
    flex-wrap: wrap; /* Allows the items to wrap as needed */
    align-items: stretch;
}
```

- **display: flex**:
  This property turns the `.flex-container` into a FlexBox container, meaning its child elements will follow FlexBox rules for layout.
  
- **flex-wrap: wrap**:
  By adding the `flex-wrap: wrap;` property, we allow the items within the container to wrap onto the next line if there isn’t enough space to fit them all in one row. This makes our layout more flexible and responsive.
  
- **align-items: stretch**:
  This property aligns the items along the vertical axis by stretching them to fill the container’s height, ensuring that all items have a uniform height.

#### Step 2: Defining the Flex Items

Next, we define the individual items that will go inside our flex container. Each item will be given a class `.flex-child`, and we’ll apply some styling to control how they behave within the flex container:

```css
.flex-child { 
    flex: 1;
    margin-right: 20px; /* Adds space between the columns */
}
```

- **flex: 1**:
  This property tells the `.flex-child` elements to take up an equal share of the available space within the container. The value `1` means each child will occupy an equal portion of the container, making it ideal for creating evenly spaced columns or elements.
  
- **margin-right: 20px**:
  We add a `margin-right` property to create space between the items, ensuring that they don’t appear too close to one another. This spacing makes the layout cleaner and more visually appealing.

#### Step 3: Making the Layout Responsive

To ensure that our layout adapts well to smaller screens, such as mobile devices, we can use a media query to adjust the styles when the viewport width is below a certain threshold. In this case, we’ll make the items stack vertically and remove the margin between them on devices with a screen width of 600 pixels or less:

```css
@media (max-width: 600px) {
    .flex-child {
        flex: 100%; /* Makes the child divs take up the full width on slim devices */
        margin-right: 0; /* Removes the right margin */
    }
}
```

- **flex: 100%**:
  On smaller screens, each `.flex-child` will take up the full width of the container, causing the items to stack vertically rather than sitting side by side. This ensures that the layout remains readable and user-friendly on mobile devices.
  
- **margin-right: 0**:
  The margin is removed on smaller screens to prevent unnecessary spacing, allowing the items to use the full width of the screen.

### How FlexBox Enhances Your LiaScript Course

By integrating FlexBox into your LiaScript course, you can easily create dynamic and responsive layouts that adapt to different devices and screen sizes. Whether you’re arranging images, text blocks, or interactive elements, FlexBox provides a powerful and intuitive way to manage the layout with minimal code.

By utilizing the `@style` macro or by importing an external CSS file, you can apply FlexBox properties to specific elements within your LiaScript course. In the following example we have used a section with a class `flex-container` and then added the class `flex-child` to each paragraph within a HTML-comment. Of course this could also be nested divs or other elements.
With the additional inline styling, you can also define min and max widths, heights, and other properties to further customize the layout.

If you grab the vertical bar between the editor and the preview, you can see how the layout changes when the screen size is reduced. This is a great way to test how your layout will look on different devices and ensure that it remains readable and visually appealing across all screen sizes.

<iframe loading="lazy" class="liveeditor" src="https://liascript.github.io/LiveEditor/?/embed/code/H4sIAAAAAAAAA71V247bNhB991eMXSzQBrEsy/bKdtZp0rRBCyRokBR9p8mRRZQiFZKyswny7z2U5V2nfepLDViXuZy5HY7uxtPp6EWI94ZHWWX401Q6G4W27OnLiPBTOrRG3G8paZ/1ot7u5EW7pXR9RrMn9NIYdwoUayYducGT65UkAllmxYqezHpvYfTBTnujLYXoOcr6jHtIiEXefjojKhVo72JNtfP6c0rLkLCKjuyjlngJrZDaHmjP8cRsh8AI83V0KabWRtEXekh7S/NzrEb4g7ZTrw91/GfQhMsPqKkk6UzX2Av2i4aVFvR9I9AGrWK9pdscCD8MLfsmdi+5Cp/nN32kt+IvPvfrbKj0Ea8QUtf24qozhnp4cpaC0Q0pPmrJ4dLJf9eR99DvuXHHAbxXDFYXv68o4gVbNZpOn49G39Ebce+6OBrdBZZRI5g0IoTd5Fs+TGB7B7p8q025T6gn0G7SIJOhIcUqtXRCKcSdrrxomIKXu0kdYxu2s9npdMoOzh0MZ9I1s0a0YcbNntWP7X43njfzdboUuCzGc1Xkq2W2ul2v8/V6vliUxWpcqPkiWxTlarXMl+WmnOdFOV6oVZ5titWqWK3Xt+W6N0wIVT4u8F+kfwNUDfPluNDl7Xq8rIA0hxx2SRfyT8tSlJjpvio31VwuypvFSwjz/WKzlHKulrxelDwuwk/sbS28mh6dnb5yMYrph+jFzavFzeY13xR5UdwUr3DPN6vNBvfXnvWe/WG84iGTwBZAisfL47wsFuVmPUcxt8V4da196PHeecV+m6O3Ip25RJMgPZi6m0zIOKFwJHYTIz7fT8hzxd6zb53R8n43sW56EU1PNdupcid78AL4z+9m5zFhzP91zucxv3GeG9Jt6BpyynkCWHyKs2MTrzh22CnIrtWhP7VsdMzoz3SjSnRS77tAXaS9wSGHDKxoAIPjbtmKqANAtbuoM/oZkqoLOKm2s5JaLBKNyEIRHkTzFAFYV6A5IYLz4tHz94RjhES8o/C6C09JdIeOSTnLkvYYkFWAitpKrToLl/c6wFp6bLNK2z7V1gVUxGg5RpLSk50XwBBtUj+jI3ZGbEUkbSMf2Gf0m5XcRpcWohximbTBsEuOnWm7KCIDNrKNGncfRYazeTZgD79+ImiW1EYHfd3MBg4G7uKqXbXY6yhsJNEmyIx+6XRAS6lxhkPU2DQYD+gjGul8i+kc2RBm1qUMP3ac0Tvkxx41GHYDDAHcQUmQgjlHrUTvF5zULnzsKHYeWWX/K4veDbN4HB0bk8oYcj1qfDRAAWxs3UB+uZ/NMnrrjEkE81YAhatKS406iIeOVZzUvnY2kUY3aJbSHB8oltEffdWpE1fUFV52WOwyIqPmHOLRF4Rq4apDQMQQLzll9AETlGkILTYLY5v0XIiJxPiqetRj41U/PKivG/1Y7ED34TWjX4VEAyK4eWFOuEJ8fLKJConqyLhL3TtXXcP9I/qQoC+cx+pQ2CEoNZG47cxRo3NU6wbcY5emfzcbvibPR38DWHnYv2UIAAA="></iframe>

### More FlexBox Childs

In Flexbox there is this nice property called `flex:`, which allows you to distribute the available space equally among all child elements. A value of `1`  means that all child elements will have the same width. If you set the value to `2`, the child will have twice the width compared to the others with `flex: 1`. `3` would mean three times the width and so on.
This is a great way to create flexible layouts that adapt to different screen sizes and content lengths.

The following example therefor create predefined classes `flex-child-1`, `flex-child-2`, `flex-child-3`, till `flex-child-8`. These classes can be used to create beautiful newspaper like layouts with different column widths. We had to use a little bit of inline styling to ensure that the columns are not too thin, but you can adjust the values to your needs.

Switch to the split view and grab the vertical bar to see how the layout changes when the screen size is reduced.

<iframe loading="lazy" class="liveeditor" src="https://liascript.github.io/LiveEditor/?/embed/code/preview/H4sIAAAAAAAAA+1WTW/bMAy9+1dwGQZsRZ1m+SyStuiAXQZ02LDD7orM2kRlydVH2qDofx+lJsbsYAN6a4HmkIR8NPnIRyk5e5fn2aXzW4XZ8FrhfS6N9oI0WnjIgF8FuUaJ7RIiukquFHdnRbOE+L6CkyP4opS5c+ArBPJY8zeTQBAONGKBBRydpKeFolLnKWgJzlv0snrKW8aMn0cNl3nM9nQqUsXx30b+GR4SBY5dwWMHGrfQuA9NWmjSh6YtNO1Dsxaa9aF5C8370KKFFn3otIVOI/SfLrvmuGtOuua0a8665rxrLo77jNL0a2FL0rmlsvI7GZKwReHANUIirNHfIeoksjQq1NpFUbmLyxoLEvCxFrwYVPiK5zXiDJ92uTtd9hyx075rfOiaHLqmh67ZoWt+6FocuvZT2O93nMDoQ5rAd3GDT5udQvlEbNhkJ4Qmua+DUpDaBqPBKaqhwA1JdPudP5zvKKX+hbXZ7JInYBe1f+6Rh3uJusjy/CLL3sOV2Jrgs+zMofTExaQSzp0Puid3wLFnfLC76NOsB5AO+/lgLeRNaU3QxRJULF1asV1BzRR3Co6jggOIpa+MxRqocaEGUxgLokZ/zEugIxH0ga8LUVBDTpIuARX5IfymjaiDAyzR+XgNkFMQPDTGek+eszSohad1cEP4WQm+CawAFaQP8c6QPAuOc9DsIfTgsG7QDuEr3yHkHE86cbgNwsf8BGiNW4EMVqzJBwtV/OQp8PbSmicZ6iH8sJJ2gPaR0VoJXZDn1si0hq2MlpHaFT9oTby3bgNTiLkRNrRBy5xSUeYQ1rz/7SPftMTGGwdMq+KqFi1ndMFxx3yhMpuGkzjk8htU3Og9xUk5oxRJ5l2QHv5Tw/EzNJy8afgiNZw8Q8Ppm4YvUsO3c/j6NXz7PXxNGp7s/vZcZH8AXVbC3bgMAAA="></iframe>

Of course, you can use also HTML-tags like divs to add these class configurations, which can contain multiple Markdown-blocks. But do not make it too complex 😏 ... in most cases the base LiaScript-Markdown is enough.

__Content first__


### More FlexBox Properties

Here are some additional properties that you can experiment with to further customize your layout:

##### Container Properties

1. **display: flex**  ... This property turns the container into a FlexBox, allowing its child elements to be laid out according to FlexBox rules.

2. **flex-direction**  ... Defines the direction in which the child elements are placed within the container.
  
   Common values:

   - `row` (default): Child elements are placed left to right.
   - `column`: Child elements are placed top to bottom.

3. **justify-content** ... Aligns child elements along the main axis (horizontal by default).

   Common values:

   - `flex-start`: Child elements align at the start.
   - `center`: Child elements are centered.
   - `space-between`: Child elements are spaced evenly with the first at the start and the last at the end.

4. **align-items**  ... Aligns child elements along the cross axis (vertical by default).

   Common values:

   - `stretch` (default): Child elements stretch to fill the container.
   - `center`: Child elements are centered.
   - `flex-start`: Child elements align at the top.

5. **flex-wrap**  ... Controls whether child elements wrap onto multiple lines.

   Common values:

   - `nowrap` (default): All child elements are on one line.
   - `wrap`: Child elements wrap onto new lines as needed.

6. **gap** ... Sets the space between child elements, controlling both horizontal and vertical gaps.

##### Child Properties

1. **flex** ... Applied to the **child elements**. A shorthand property that controls how the child elements grow, shrink, and their base size within the container.

   Common usage:

   - `flex: 1`: Makes child elements grow to fill the available space equally.

2. **align-self** ... Applied to the **child elements**. Allows an individual child element to have a different alignment from the other children.

   Values: Same as `align-items` (e.g., `flex-start`, `center`, `stretch`).

---


---
title: "Collaborative drawings made with LiaScript"
slug: collaborative-drawings
date: 2024-08-06
draft: false
author: André Dietrich
image: "/images/post/collaborative-drawings.gif"
categories:
  - Article
tags:
  - Collaboration
  - Classroom
  - Drawing
  - Feature
  - Pub-Sub
description: "How to create a collaborative canvas purely with LiaScripts pub-sub feature."
---

In this article we will explore how to create a collaborative drawing canvas (in other words a whiteboard) using LiaScript's internal publish -subscribe mechanisms.
This feature will allows multiple users to interact with the same LiaScript course in real-time, enabling collaborative drawing and marking, as demonstrated in the following video.

{{<youtube HszoZwW_XiQ>}}

## 1. Publish-Subscribe (How does it work?)

The publish-subscribe (pub-sub) pattern is a messaging paradigm where messages are sent by publishers to specific topics without the publisher knowing who, if anyone, will receive the message. Subscribers, on the other hand, express interest in one or more topics and receive messages that are published to those topics. This decouples the components of a system, allowing them to interact without direct communication.

The global `LIA` object, that can be accessed in any LiaScript course, provides a pub-sub mechanism at `LIA.classroom` that becomes active when a new classroom is established, with the following features:

1. **Connection Status**:

   ```javascript
   // true if connection to a classroom has been established
   LIA.classroom.connected;
   ```

   This property indicates whether there is an active connection to the classroom.

2. **Event Listeners for Connection and Disconnection**:

   ```javascript
   // creates a callback on a connection
   LIA.classroom.on("connect", () => {
     console.log("you are now connected");
   });

   // callback for the disconnection
   LIA.classroom.on("disconnect", () => {
     console.log("you are now disconnected");
   });
   ```

   These lines set up event listeners that trigger specific actions (callbacks) when the connection status changes. When a classroom connection is established or disconnected.
   Use this to update the UI or perform other actions based on the connection status.

3. **Publishing Messages**:

   ```javascript
   // publish some data on a topic
   LIA.classroom.publish("testing-topic", { data: "Hello World" });
   ```

   This line demonstrates the publisher side of the pub-sub pattern. The `publish` method sends a message containing `{ data: "Hello World" }` to the specified topic (`"testing-topic"`).
   The message has to be defined in a valid JSON format.
   Any subscribers to this topic will receive this message.

4. **Subscribing to Messages**:

   ```javascript
   // subscribe to all messages of a topic
   const subID = LIA.classroom.subscribe("testing-topic", (message) => {
     console.log("received", message);
   });
   ```

   Here, a subscription is created for the topic `"testing-topic"`. When any message is published to this topic, the provided callback function is executed, logging the received message. The `subscribe` method returns a subscription ID (`subID`) which is used to manage the subscription.

5. **Unsubscribing from Messages**:

   ```javascript
   // do not receive messages anymore
   LIA.classroom.unsubscribe(subID);
   ```

   This line shows how to stop receiving messages from a topic. By passing the subscription ID (`subID`) to the `unsubscribe` method, the subscription is canceled, and no further messages for that topic will be received.

#### Summary

- **Publish**: Send a message to a topic without knowing who will receive it.
- **Subscribe**: Express interest in a topic to receive messages published to that topic.
- **Unsubscribe**: Cancel the subscription to stop receiving messages from a topic.
- **Connection Management**: Handle connection events to know when connected or disconnected from the messaging system.

## 2. Building a collaborative canvas

Within the header of this document we have defined some global helper functions, that will be used by the script and can also be used by others. Setting persistency to `true` will ensure that the canvas and page is not destroyed, when another slide is visited.

The code below demonstrates the basic publish-subscribe principles in action. It creates a `canvas` element, which will be used for drawing. It does also contain a background-image. The script therefor access the canvas and adds a click event listener, which records the mouse position and draws a dot at that position. This dot is also added to a set of dots.
Using sets as a data structure ensures that each dot is unique, and the drawing is not duplicated and most of all, we can merge the dots of all users without having to worry about conflicts.

<iframe
  loading="lazy" class="liveeditor"
  src="https://liascript.github.io/LiveEditor/?/embed/code/edit/H4sIAAAAAAAAA51WS4/bNhC+61dM3BQrF7LsbJoc9oXsI4cEabvI5pBFEDiUREvs0qJAUrHdxf73zpCULDuboOnFFsmZ4cz3zYMnTyaT6JWqpWJFtBJ1oVZpye17hl/LSyWVhlNYtHVuharjMdxHALmqjQU6+IPZKl1IpXTsPrVTQ7Hf4PDFy3EvW/6EbPafZDW3ra7hiy6z+Om9fkjg6X3pfrOH8ZfoIeqCEeamzW64HYZxnsCFD6U39ClN0/PPKf/K9Sbmki95jSpncJFWzHQb4/ExWn7F6yKKGq6NMBZ3j8DqlkfRZHIWRb8AgiZZpjSz4iuHK83QkTKKTnJWf2UG7xTF6cgvRrhaicJWp6OXv89oVXFRVvZ09PzQLY3dSH46QmsF10fwrFmDUVIUkEmW3x17ZdyfzX49hgy3Sq3aujiCVsv4oLK2MUfTadsQu+lK3IklLwRLlS6ntGpoNc3VconIT59Pnz+bns8l0yWf4wX13XyltCzmS9bMV8JWc5VzVhtc6ztezEWNUi2foBHLi7Spy4Px0IuJEf/wI2QVMd3Zb5QRxAOeIXx4OIrOTqYeEoTwxORaNJhgbT1RdY7xE76js2g6BUxNsBWHAKbPGL9AgguVt8QTZfBrT9nF5k0Rd3AjfUHDrlHc75LwpUI/1jYeHRYDoZD9j1ZFjGLkkGo1LJmooWCWIV+6zTGfeAJWQaMxnTCNNG+kyBmFnMCKQ2s4oCy34aJCWfK+5ivARO0sG0wzH2urNZkxlllOdpmUVCs1zxF3aDhmYtTlNjRtJoWpQqmKBcTv3pynuWTGaKWWaa/YFcDucac+IqdGCby9+evPFMPCHBaLTXyuNdukC43FSAJjqgiAB6o3dBkh1Cz3DK2TTU80kAKwGnLE4Q4cKohQJQxgjd8ZRCMTlixgLnqseJGAEcg+AWZyJvmAdwKhNSzDTVcBgMW7RQCJulZYs3TLTsPCsHdYv6BsxMAupUDR93gcu3C8uLv041bB3zR1ZvxiT/Z2K+vLuBP2K5KWmL65u+1jEj5ukW3Pk3M4tarNK246doI0mt45/jT7nIaj44Hc7fflbh1RwCUm3+Omf2hvaCTa9l9vaX0EcWdt4mOWfGGpXXsUEye26cVuOzGrml7qlmwfh1QqsG9SXmCWAXI64P54Mt5yTWJXysbrBDaJr9hAuV2nGS9FfY3zI9CKW0znQfZFArMEDvFyN2Gu3/QyCyHlDTVe4pMsDg/i8Z6HWIuufo1VGqsROwG1hMv3Vx/CPpZ57y5KeIdNvHUzl5xpl30z59Mw35LdjHI+ktl0ofRrlldUhTeuOmlYBV67poL+u/JtmDZ8Kzn2DHfQ4X6KkNDfxv95GB3VPtre/woboOSXVMXf1tc9ELKYY6e7Jdj7zIoi3usnXicwh9c54b6FOc1HGHZOBWDQ6Gu65p0bxlzHB67JHCRDZ4ctFdvQ3wppWnJjWImdeIEjqOun6Ba26ErkFXYWpBYdLUuuSZl1fhHYauHZDamp8EeHTrzbT/G1MQq2sZsi64EmTIsPOI1Va+O915WHU0meSlX2ytwNph/0a4oJb6hbKT11CT0LZoTV/xkoARZGU4mUyfxeaKbNaFJnvL88Dpj2UQ6Y7LzAsuf0MEJy8JumBc5eFXzJkbOSG8g2gLwS0ORaUClc1RHqgjSozNSqdjsThDP9vnthln3jXj8XnPmr3TE8KJ1ObzAd0K89eXpB0kUJTaOhzc/jvsU/2XuUxl5hKD3ePky3m8NyJ+f7csKPcciLnarZafQ/Zym0922jCtztZGWDTx7rCqGG7ePqZOqfbmfRvy/3EetXDAAA"
></iframe>

You can try this example out by clicking onto the following button. Simply change the name of the room and click onto <kbd>connect</kbd>.
Then copy the new URL into another or a couple of other browsers and start clicking. You will see that all drawings are synchronized in real-time.

{{<button label="Try this example" link="https://liascript.github.io/course/?eyJiYWNrZW5kIjoiTVFUVCIsImNvdXJzZSI6ImRhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04O0NvbnRlbnQtRW5jb2Rpbmc9Z3ppcDtiYXNlNjQsSDRzSUFBQUFBQUFBQTUxV1M0L2JOaEMrNjFkTTNCUXJGN0xzYkpvYzlvWHNJNGNFYWJ2STVwQkZFRGlVUkV2czBxSkFVckhkeGY3M3pwQ1VMRHVib09uRkZzbVo0Y3ozellNblR5YVQ2SldxcFdKRnRCSjFvVlpweWUxN2hsL0xTeVdWaGxOWXRIVnVoYXJqTWR4SEFMbXFqUVU2K0lQWktsMUlwWFRzUHJWVFE3SGY0UERGeTNFdlcvNkViUGFmWkRXM3JhN2hpeTZ6K09tOWZramc2WDNwZnJPSDhaZm9JZXFDRWVhbXpXNjRIWVp4bnNDRkQ2VTM5Q2xOMC9QUEtmL0s5U2Jta2k5NWpTcG5jSkZXekhRYjQvRXhXbjdGNnlLS0dxNk5NQlozajhEcWxrZlJaSElXUmI4QWdpWlpwalN6NGl1SEs4M1FrVEtLVG5KV2YyVUc3eFRGNmNndlJyaGFpY0pXcDZPWHY4OW9WWEZSVnZaMDlQelFMWTNkU0g0NlFtc0YxMGZ3ckZtRFVWSVVrRW1XM3gxN1pkeWZ6WDQ5aGd5M1NxM2F1amlDVnN2NG9MSzJNVWZUYWRzUXUrbEszSWtsTHdSTGxTNm50R3BvTmMzVmNvbklUNTlQbnorYm5zOGwweVdmNHdYMTNYeWx0Q3ptUzliTVY4SldjNVZ6Vmh0YzZ6dGV6RVdOVWkyZm9CSExpN1NweTRQeDBJdUpFZi93STJRVk1kM1piNVFSeEFPZUlYeDRPSXJPVHFZZUVvVHd4T1JhTkpoZ2JUMVJkWTd4RTc2anMyZzZCVXhOc0JXSEFLYlBHTDlBZ2d1VnQ4UVRaZkJyVDluRjVrMFJkM0FqZlVIRHJsSGM3NUx3cFVJLzFqWWVIUllEb1pEOWoxWkZqR0xra0dvMUxKbW9vV0NXSVYrNnpUR2ZlQUpXUWFNeG5UQ05ORytreUJtRm5NQ0tRMnM0b0N5MzRhSkNXZksrNWl2QVJPMHNHMHd6SDJ1ck5aa3hsbGxPZHBtVVZDczF6eEYzYURobVl0VGxOalJ0Sm9XcFFxbUtCY1R2M3B5bnVXVEdhS1dXYWEvWUZjRHVjYWMrSXFkR0NieTkrZXZQRk1QQ0hCYUxUWHl1TmR1a0M0M0ZTQUpqcWdpQUI2bzNkQmtoMUN6M0RLMlRUVTgwa0FLd0duTEU0UTRjS29oUUpReGdqZDhaUkNNVGxpeGdMbnFzZUpHQUVjZytBV1p5SnZtQWR3S2hOU3pEVFZjQmdNVzdSUUNKdWxaWXMzVExUc1BDc0hkWXY2QnN4TUF1cFVEUjkzZ2N1M0M4dUx2MDQxYkIzelIxWnZ4aVQvWjJLK3ZMdUJQMks1S1dtTDY1dSsxakVqNXVrVzNQazNNNHRhck5LMjQ2ZG9JMG10NDUvalQ3bklhajQ0SGM3ZmZsYmgxUndDVW0zK09tZjJodmFDVGE5bDl2YVgwRWNXZHQ0bU9XZkdHcFhYc1VFeWUyNmNWdU96R3JtbDdxbG13ZmgxUXFzRzlTWG1DV0FYSTY0UDU0TXQ1eVRXSlh5c2JyQkRhSnI5aEF1VjJuR1M5RmZZM3pJOUNLVzB6blFmWkZBck1FRHZGeU4yR3UzL1F5Q3lIbERUVmU0cE1zRGcvaThaNkhXSXV1Zm8xVkdxc1JPd0cxaE12M1Z4L0NQcFo1N3k1S2VJZE52SFV6bDV4cGwzMHo1OU13MzVMZGpISStrdGwwb2ZScmxsZFVoVGV1T21sWUJWNjdwb0wrdS9KdG1EWjhLem4yREhmUTRYNktrTkRmeHY5NUdCM1ZQdHJlL3dvYm9PU1hWTVhmMXRjOUVMS1lZNmU3SmRqN3pJb2kzdXNuWGljd2g5YzU0YjZGT2MxSEdIWk9CV0RRNkd1NjVwMGJ4bHpIQjY3SkhDUkRaNGN0RmR2UTN3cHBXbkpqV0ltZGVJRWpxT3VuNkJhMjZFcmtGWFlXcEJZZExVdXVTWmwxZmhIWWF1SFpEYW1wOEVlSFRyemJUL0cxTVFxMnNac2k2NEVtVElzUE9JMVZhK085MTVXSFUwbWVTbFgyeXR3TnBoLzBhNG9KYjZoYktUMTFDVDBMWm9UVi94a29BUlpHVTRtVXlmeGVhS2JOYUZKbnZMODhEcGoyVVE2WTdMekFzdWYwTUVKeThKdW1CYzVlRlh6SmtiT1NHOGcyZ0x3UzBPUmFVQ2xjMVJIcWdqU296TlNxZGpzVGhEUDl2bnRobG4zalhqOFhuUG1yM1RFOEtKMU9iekFkMEs4OWVYcEIwa1VKVGFPaHpjL2p2c1UvMlh1VXhsNWhLRDNlUGt5M204TnlKK2Y3Y3NLUGNjaUxuYXJaYWZRL1p5bTA5MjJqQ3R6dFpHV0RUeDdyQ3FHRzdlUHFaT3FmYm1mUnZ5LzNFZXRYREFBQSIsInJvb20iOiJDSEFOR0UgTUUifQ==#1">}}

## 3. Creating a reusable LiaScript component

Copy and pasting the entire code-snippets over and over again is tedious, too complicated and generates a lot of redundancy. Therefore, we had created a reusable LiaScript document that can be included in any LiaScript course.
You can find it at:

https://github.com/LiaTemplates/CollaborativeDrawing

The code looks like follows. As you can see, we have moved all script-definitions into separate `@macros`. Which allows us to inject the associated script and canvas tags into any LiaScript course and configure it appropriately.
For every macro a uiniqe set of ids and topics are generated, so that multiple instances of the same component can run in parrallel without interfering with each other. See therefor the last section in the code below.

<iframe loading="lazy" class="liveeditor" src="https://liascript.github.io/LiveEditor/?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"></iframe>

### Importing the component

The following example shows, what is needed to import the component into any LiaScript course. The `@import` directive is used to include the content of the specified URL into the current document. This will create a Markdown file, that can can make use of the imported macros.

You can modify the following code, recompile it, and share your example by clicking onto:

`Menu` -> `Share course via : data-URI`

after opening the link in LiaScript, click onto:

`Share` -> `Classroom` -> `Select a backend` -> `Add a room name` -> `Connect`

or checkout the first video...

<iframe loading="lazy" class="liveeditor" src="https://liascript.github.io/LiveEditor/?/show/code/H4sIAAAAAAAAA3WQT0sDMRDF7/kUkV4sdJO1tosUEYvtzV7E+zK7O90O5h+TxNpvbxYV8eDc3sD83pt3f1VVgmzwnDZymlNKIW60ZjirkdIpdzki994ldEn13upngle0wUDCqJ+8MdB5hkTvuCtH5EZdq1rd6Jf9dnfYKzsIEZAjxYmwkYkziqp6EGImDxd5BNdfZO9/KUVkjiiEd+Yihy9mFOLxj5cy5DBeN6t6cbus54U2k9/+soT1EpzEj2I6LcjCiP8Q1nfLxapeL34ez8F4GNSZ3sjiQKA8j3pSYVK6NGC9i7rRTaO33J8oYUqZoR2oza4N7HuM0TO2HURIvo25ZRxLEqZ2RIcMhkq1x/knbnGkunwBAAA="></iframe>

...

Leave us a comment ;-) ...

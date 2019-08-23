<!--
author:   André Dietrich

email:    andre.dietrich@mail.org

version:  1.0.2

language: en

narrator: US English Female

comment:  Try to write a short comment about
          your course, multiline is also okay.

logo: logo.png

link:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css

script:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js

translation: Deutsch  translations/German.md

translation: Français translations/French.md


attribute: ... "[Creative Commons 10th Birthday Celebration San Francisco](https://www.flickr.com/photos/sixteenmilesofstring/8256206923/in/set-72157632200936657)" by [tvol](https://www.flickr.com/photos/sixteenmilesofstring/) is licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)

-->

# Course Main Title

* [[____ ____]]
* [[1|2|__3__]]
* [(1)] option 1
  [(2)] option 2
  [(3)] option 3
* [[1]] option 1
  [[2]] option 2
  [[3]] option 3
* [(0)(1)(2)]
  [         ] text
  [         ] text
  [         ] text
* [[_0_][1][2]]
  [         ] text
  [         ] text
  [         ] text
  <script>alert(`@input`);</script>

## asdfas


[[test|test|(1)|(2)]]


[[option|(option)]]


[( )] This is wrong.
[(X)] The only correct option.
[(X)] Still not right.


[[1] [2] [3]]
[[X] [ ] [X]]  add a line
[(X) (X) ( )]  add a line

![alt-text](logo.png "info")

# qqq


* [[ test  ]]
  [[?]] hint1
  [[?]] __this__
  *******************************

  this is

  $$
    \sum_{i=1}^\infty\frac{1}{n^2}
        =\frac{\pi^2}{6}
  $$

  *******************************



* [[ ]] Add as many elements as you want?
  [[X]] The X marks the correct answer!
  [[ ]] ... this is wrong ...
  [[X]] ... this has to be selected too ...

* [( )] This is wrong.
  [(X)] The only correct option.
  [( )] Still not right.


[[!]]
<script>
  // you are free to check anything you want
  true;
</script>


## sdasdf

bala asdfnalsödj asdfaölfdsh asj asöldjf asfdlj a [[GGG]] asfdasdf alsdj alsf [[DDD]]
aölsdjfaöa ldsfj alf.

[12](#Markdown)


![img](image.png)

# Course Main Title

This is your **course** initialization stub.

Please see the [Docs](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md)
to find out what is possible in [LiaScript](https://liascript.github.io).

If you want to use instant help in your Atom IDE, please type **lia** to see all available shortcuts.

## Markdown

You can use common [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax to create your course, such as:

1. Lists
2. ordered or

   * unordered
   * ones ...


| Header 1   | Header 2   |
| :--------- | :--------- |
| Item 1     | Item 2     |


Images:

![images](https://farm2.static.flickr.com/1618/26701766821_7bea494826.jpg)


### Extensions

     --{{0}}--
But you can also include other features such as spoken text.

      --{{1}}--
Insert any kind of audio file:

       {{1}}
?[audio](https://bigsoundbank.com/UPLOAD/mp3/1068.mp3)


     --{{2}}--
Even videos or change the language completely.

       {{2-3}}
!?[video](https://www.youtube.com/watch?v=bICfKRyKTwE)


      --{{3 Russian Female}}--
Первоначально создан в 2004 году Джоном Грубером (англ. John Gruber) и Аароном
Шварцем. Многие идеи языка были позаимствованы из существующих соглашений по
разметке текста в электронных письмах...


    {{3}}
Type "voice" to see a list of all available languages.


### Styling

<!-- class = "animated rollIn" style = "animation-delay: 2s; color: purple" -->
The whole text-block should appear in purple color and with a wobbling effect.
Which is a **bad** example, please use it with caution ...
~~ only this is red ;-) ~~ <!-- class = "animated infinite bounce" style = "color: red;" -->

## Charts

Use ASCII-Art to draw diagrams:

                                    Multiline
    1.9 |    DOTS
        |                 ***
      y |               *     *
      - | r r r r r r r*r r r r*r r r r r r r
      a |             *         *
      x |            *           *
      i | B B B B B * B B B B B B * B B B B B
      s |         *                 *
        | *  * *                       * *  *
     -1 +------------------------------------
        0              x-axis               1

## Quizzes

 [[solution]]

 [[create a
  |(selection __quiz__)
  |$\sum_{i=1}^\infty\frac{1}{n^2} =\frac{\pi^2}{6}$
 ]]

 [[X]] a multiple-choice
 [[ ]] quiz, that requires
 [[X]] the 1^st^ and 3^rd^ option
 [[ ]] to be selected

 [( )] a single-choice
 [( )] quiz with only
 [(X)] one solution

### A Textquiz

What did the **fish** say when he hit a **concrete wall**?

    [[dam]]

### Multiple Choice

Just add as many points as you wish:

    [[X]] Only the **X** marks the correct point.
    [[ ]] Empty ones are wrong.
    [[X]] ...
    [[X]] ...

### Single Choice

Just add as many points as you wish:

    [( )] ...
    [(X)] <-- Only the **X** is allowed.
    [( )] ...

## Executable Code

A drawing example, for demonstrating that any JavaScript library can be used, also for drawing.

```javascript
// Initialize a Line chart in the container with the ID chart1
new Chartist.Line('#chart1', {
  labels: [1, 2, 3, 4],
  series: [[100, 120, 180, 200]]
});

// Initialize a Line chart in the container with the ID chart2
new Chartist.Bar('#chart2', {
  labels: [1, 2, 3, 4],
  series: [[5, 2, 8, 3]]
});
```
<script>@input</script>

<div class="ct-chart ct-golden-section" id="chart1"></div>
<div class="ct-chart ct-golden-section" id="chart2"></div>


### Projects

You can make your code executable and define projects:

``` js     -EvalScript.js
let who = data.first_name + " " + data.last_name;

if(data.online) {
  who + " is online"; }
else {
  who + " is NOT online"; }
```
``` json    +Data.json
{
  "first_name" :  "Sammy",
  "last_name"  :  "Shark",
  "online"     :  true
}
```
<script>
  // insert the JSON dataset into the local variable data
  let data = @input(1);

  // eval the script that uses this dataset
  eval(`@input(0)`);
</script>

## More

Find out what you can even do more with quizzes:

https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md


# Anhang

asdfas


# Anhang2

asdfas

---
title: "Creating interactive Diagrams with eCharts"
slug: creating-interactive-diagrams-with-echarts
date: 2024-08-21
draft: false
author: André Dietrich
image: "/images/post/echarts-diagrams.gif"
categories:
  - Article
tags:
  - LiaScript
  - Diagrams
  - eCharts
  - Interactive
  - WebGL
  - Macros
---

LiaScript uses the powerful eCharts library to create interactive diagrams, whether you're visualizing ASCII art or presenting data from tables. In our previous blog post, we introduced the `<lia-chart>` tag—a custom web component that uses eCharts under the hood to easily generate custom diagrams.

{{<preview "blog/074_creating-interactive-diagrams-with-chatgpt">}}

For more complex visualizations, you might want to go beyond the basic capabilities of the `<lia-chart>` tag and tap directly into the eCharts library, particularly when combined with "echarts-gl," a WebGL extension for eCharts that enables even more advanced graphical features. This can be done directly within your script tags. Here’s how you can import the necessary libraries in your course setup:

```markdown
<!--
script: https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js
        https://cdn.jsdelivr.net/npm/echarts-gl@2.0.9/dist/echarts-gl.min.js
-->

# Your Course
```

### Examples

Below are some examples illustrating how to combine eCharts with LiaScript inputs. The process is similar to using the `<lia-chart>` tag, but with a few key differences. For instance, when working with eCharts directly, you'll need to define additional functions that cannot be handled by the `<lia-chart>` tag alone. Additionally, you'll need to create a `<div>` element in your document where the script will render the diagram.

The script functions silently in the background—it doesn't produce visible output within the document itself but rather makes the necessary modifications to render the diagram. Whenever the input values associated with the script change, the main script is automatically re-executed, and the diagram updates in real-time.

> Why is the script re-executed? This happens because of the @input(`topic`) markers. These markers "subscribe" to any changes in the scripts that define the specified topic as their output. When those scripts change, the main script is triggered again, ensuring your diagram remains up-to-date.

<iframe loading="lazy" style="height: 80vh; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/H4sIAAAAAAAAA5VWS3PbNhC+81eg0tSSW5Oino4oS3Vr++CDJ5m6t05mApFLEQ34CADqkYz+excgKZK2PHV5kLDfLvZb7gPgzU+2bUlfsEx5JFIqk95g4AeJ848MgLOtcBJQgySLB+BHVCh5O3UmzmgQMKkqyImZtrdI+bzHjb3htyPHdeYtT4hWzmx7ZVld8pRynkufPEfAObHJPUiVCsXSxLJuirhJACHNuVp2hs5w1iFbynOoBJZkOWoETTbQIWmujJilOxAdglTLjusMO0QqyPTSxXVM98vOuNxqU76jB2lTX7EtrG4NeDMomFfnYqgDeIudBkHJbY/PUr+POWBbwoJlJ6Ys0W4OHEl3LFCRR4au+/OCRMA2Edb1g7uNFp3VDeZ6uzqFXO7A/GecHjwMlrME7DVP/a8L0nDUWVlbKogp0X0akyUJUj+PIVHOBtQDB7384/AY9Hs6lt7lwtjHhzu9A82rPmEJU/3KTWmVZrqYC8sIpi64oXjZ/hcjf7k0OsxaQ4MS4laxG/Ef2H0qTblimUd+HK9Q3DKZU/5ENWB6U0bpziMh5RKuDBAwjFyiA4+MCgSr4hF7Wgp07xG3WLPkT13EyhUhfspT4ZG/T13f646H49l82rtqQJPp9XQ9aUHXE4x92ILoOpjDvAWBG47DDy0oxGcdtiEAd+62oYDCrO0+nMyCybgFBddjd3TdDmLquqNZr0Q+m/8j/ppc7n/fMzm+r1J7aIvf2+JGsMBIjawrkZdJz1KpHsIQfFUnExK65lBYFcSFrYI4SwXlz3kG4pnGGXbo5r+38aLtKzPdlLWka6l02RX2/LjOgIxoUEVagsdKS+M1wx5/w4n7hvldvoa4bj8T8R5fPxdwajj9BCwMcwmPtcdhI6wM/JxT0dRWfO0aSRAMZNWSFac6ZMjWQ9KQ+nCqeEYFjUEJ5jdrQ3DsBYRa1Yy6MTgvX1VnzdSkJ4ByPMqZf+I4IU9UYWyUN32KNN9ECUgM2HUm9ftiUJSX+EuyOuiHbzlVZnBrj3lTqEYZqSPn0+NVU6HH+gyuD+KTggzIxD0pj7Xd9hzLcPqKYPbateuMhudconWYJ745yfr5FdletigEqFwkRWB4IPbNoWisfilAP5V9I/X1GflrDeaXeMieITy8i9B+m1Gy5P8xfn8f46gieMna5NHkbZ5X8/DZOi5Ol8PFRXUVORLURwP2Cx06adyo3W6X3AkImLKsvyImcVr1kQNkRyUOqcAjix+Iol8hIaHAi1BFQMB4lmQHa5xOIFR5llV9AVUXH82oH4GTis2g9CkHkAw0VSqcSMX8N39ZjqgdF588ttSfPBcbvhz+C6/Ha/GlCQAA"></iframe>

<br>

---

<br>

<iframe loading="lazy" style="height: 80vh; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?/embed/code/preview/H4sIAAAAAAAAA91W227jNhB911ewzjaWG1uWZTvZyJem3bRFgN226BboQ2B0aZGymEiUKtIXdeF/71CUbNHOdgvsWwXIpg5nzhwOh5fpV72eJYKcZdJHkZSZ8Pv9gHDnSRAas03ucCr7PEv6NIhwLsXd2Bk5Xp8wIWvISZiyt1D1/Bea3iq+8xzXuTWYAP0UWYiFjItzPsGSLKa7Hk+ZoEA5clwTU2S93tyyLtCPcbpFKUcyoiiAeFQwzC3r13RLc/SK/Ll7hXw01dlAhIZ4HctZa+i20AbHa6qbjGdrQHPMV7SF0rUsPzPFMWghUD9rgZWQNJu1FIB38O/Wjj0cb3EhejiQbEPndyU47euY84aW4gu1eF+uZUrYBjEyayWYcUVTxBB3y4iMfAQ0X09QRNkqgsp57W6iSWs+hdnczK1aduUBM5zFuPAhasw47S3jNHieoAZRa25tcI7KIrhPEzRDJA3WCeXSWVH5Q0xV8/vigdhtpaXdmZT2SfFGeYB5XYmMM2nXNF3UJjh/rq3TTLKUT6zyoywNcOR0i97rcvlZQfY7LCMHEkrSpPIrTb3P24ZrHqgIaEU5zbGk91hiu4M+Qi0rHgKfwPK4mAAQpjmyFcoAcifwN52hsWpcXWmXhs2TtnmqbZ6ONhX1Tskrq12rvbcZ6iM9o/YHXZwfOl2gOEc7kyZTUTN5n6byXqTyTqgSvAKuMkfir1zaIPIbpfRKBYFW0bCO3+FdbQxVamukqzgMK8YPVozbGjGtVJadbC0i+5GByC5EhLcojRaV1d7Sb07lOuely8Ta68I4RHngoaqmYnKAS4m9I241ZtWc84lVlaYjqPylrDu7LAMm1ooo86vpE1G69VGIY0G7JQDD8isNFYB3fhVdA4TBYhDA6KORRhj/TW0A/qEkgjROcx89HjbR9sVwMLy+Hbe7DWg0vhkvRwZ0M8KEDAwIL8ktvTUg6obD8LUBhfAsQxOi1L11TYhgem3Sh6NrMhoaELkZut6NKWLsut51u0IWx0lURrvvdkzUg5dFBolol3tkRYGh+y3sO8f8qF3ovdqbjtAhaeVY6kh7HUnzwCbGpEl0Nn2f4c5XS2x743G3fl3H65wEq4dV/D+HJWjOqKiLs+aqxhfCAf3T28PUq7Xll781ksGaYkFM79USkHCkXI9Ou96zv4FqXMNM0uRMeJrhoHR3nfFLOTmRFayFTJN/kUV5kBIjAixa91jBKlIdp0ZzygnNH0AepLo+OmwYBU5EF+GMdRp0aqdRuw/ATlkEtts50kMAo29g9BHT0TM7Tc/hYR/VMYXU56uyCNI0J/bjDvUUZR95XQjbUwzQXpw4wuBO3a4ablcvuFW78ceGuir/qvjaTdUiwpmR7jLlA1/rfXQXXaOnOPQMTnp2nq+knntU+GDRgPeGhNOaUo8S+oe+1ngmoZB5+kzrdWj2NarRa4Y7tPcTs0gttQfuIXWWvtOgy0t0fuDoPrBqXOkuLi7Qm5wSJi3r94gJRHdYXWjQFgs4WXIawCUbSfxMOQpzuImpqzItmQXa0iUsOoqw9C2rvpfXNy8Mg4iok+arfsUp+pT3Vag0dyKZxN8GM72+9b38chXPBpfAn9CZuqb9A1b0LUqKDAAA"></iframe>

<br>

### Learn More

To dive deeper into using the eCharts library directly and explore the comprehensive examples provided in the link below:

{{< button label="eCharts Examples" link="https://echarts.apache.org/examples/en/index.html" >}}

Now that you’re familiar with using ChatGPT to create interactive diagrams, you’re ready to take things to the next level. By combining LiaScript snippets with the more advanced examples from the eCharts library, you can create dynamic visualizations that bring your ideas to life. The possibilities are endless — start experimenting and visualize everything you can imagine!

### Automate with Macros

To streamline your workflow, especially when working with repetitive eCharts diagrams, you can create custom macros. Here's a quick example to demonstrate how you can use macros to simplify your coding process.

When incorporating code into a macro, the following syntax is recommended:

````markdown
```language @macro(params)
console.log("The code block is passed as the last parameter")

   ...

```
````

This syntax is utilized in the examples below. The `@echarts` macro is defined in the document's main header and is designed to accept two parameters. The first parameter is the background theme, which can be set to either `light` or `dark`. The second parameter is the code block that generates the diagram.

Rather than directly injecting LiaScript code, this macro uses a helper function `@echarts_`. It first calls the `@uid` macro to generate a unique ID, which is then assigned to the `<div>` element and used in the `document.getElementById` query. The macro then passes the background parameter and the code block, which is enclosed in triple backticks to denote a multi-line string. If you're working with a single line of code, you can use single backticks to indicate the string, especially if it includes additional commas.

<br>

<iframe loading="lazy" style="height: 80vh; min-width: 100%; border: 1px black solid" src="https://liascript.github.io/LiveEditor/?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"></iframe>

<br>

Your standard Markdown viewer will still highlight the code blocks as usual, but the LiaScript interpreter will go a step further by transforming them into fully interactive diagrams.

---

title: "Creating Project Websites with LiaScript-Exporter: Automating Index Pages for Multiple Documents"
slug: "creating-project-websites-with-liascript-exporter"
date: 2025-03-28
draft: false
author: André Dietrich
image: "/images/post/automation-3.jpg"

categories:
  - Community
  - Technology
  - Tools

tags:
  - GitHub
  - Automation
  - LiaScript
  - Workflow

---

In the rapidly evolving landscape of educational technology, creating and managing interactive learning materials efficiently has become increasingly important. In our previous articles, we explored how to [automate LiaScript transformations on GitHub](https://liascript.github.io/blog/automating-liascript-transformations-on-github/) and implement [quality checks to ensure document excellence](https://liascript.github.io/blog/quality-checks-on-liascript-with-github-ensuring-document-excellence/). Now, we're taking the next logical step: creating project websites that serve as organized index pages for multiple LiaScript documents.

For educators and students who have developed several LiaScript documents, presenting them in a cohesive, searchable, and visually appealing way becomes crucial. Rather than sharing individual links or maintaining separate repositories, a project website provides a centralized hub where all your educational materials can be accessed, categorized, and explored.

In this third installment of our automation series, we'll dive into the LiaScript-Exporter's project export functionality, which allows you to create beautiful index pages for your collection of LiaScript documents. We'll explore how to configure your project using YAML, automatically generate PDFs and SCORM packages for each document, implement tags for better searchability, and automate the entire process using GitHub Actions.

By the end of this article, you'll be able to create a professional project website that showcases all your LiaScript documents, complete with:

- A customized landing page with your branding
- Organized collections of courses with descriptive cards
- Downloadable PDFs and SCORM packages for each course
- Tag-based filtering and search functionality
- Automatic updates whenever you modify your content

Whether you're a teacher looking to organize course materials for your students, a department wanting to showcase educational resources, or a student creating a portfolio of interactive documents, this guide will provide you with the tools and knowledge to create and maintain a professional project website with minimal effort.

Let's get started by understanding what project exports are and how they can transform the way you present your LiaScript documents.

{{< image
src="images/post/creating-project-websites-with-liascript-exporter/liabooks.png"
caption="Screenshot of the LiaBooks project website showcasing multiple courses organized into collections with tags."
alt="Screenshot: LiaBooks website"
>}}

{{< button link="https://liaboos.github.io" label="LiaBooks website" >}}

## Configuring Your Project with YAML

At the heart of creating a LiaScript project website is the YAML configuration file. This file defines the structure, appearance, and content of your index page, serving as a blueprint for how your collection of LiaScript documents will be presented.

### What is YAML and Why Use It?

YAML (YAML Ain't Markup Language) is a human-readable data serialization standard that's commonly used for configuration files. Its simple syntax makes it easy to read and write, even for those without extensive programming experience. For LiaScript project exports, YAML provides a flexible way to define how your index page should look and which documents it should include.

### Basic Structure of a Project YAML File

Let's examine the basic structure of a project YAML file by breaking down its key components:

```yaml
title: > 
  <span style="background-color: rgba(0,106,179,0.75); padding: 5px; color: white">
    LiaBooks - Collection of interactive Textbooks
  </span>

comment: >
  <br>
  <span style="background-color: rgba(0,106,179,0.75); padding: 5px; color: white">
    ... made with LiaScript ...
  </span>

logo: logo.jpg

icon: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Logo_TU_Bergakademie_Freiberg.svg/242px-Logo_TU_Bergakademie_Freiberg.svg.png

footer: >
  For more information about LiaScript as a Markup language for interactive Open Educational Resources, visit our website
  <a href="https://liascript.github.io" target="_blank">https://LiaScript.github.io</a>

# With this settings you can customize social metadata, og-graph for facebook or twitter
# if not present, the title, comment, and logo will be used.
# You can explicitly turn this of with the cmd-parameter --project-no-meta
meta:
  title: LiaBooks
  description: Collection of interactive Textbooks translated to LiaScript markdown

# A collection is where you put all your courses into, all information, such as title, comment,
# will be taken from the links that you provide ...
collection:
  - url: https://raw.githubusercontent.com/LiaScript/docs/master/README.md
  - url: https://raw.githubusercontent.com/LiaBooks/LiaScript-Tutorial/main/README.md
  - url: https://raw.githubusercontent.com/LiaPlayground/LiaScript_WeAreDevelopers2022/main/README.md
```

### Key Components Explained

#### 1. Title and Comment

The `title` and `comment` fields define the main heading and subtitle of your index page. As shown in the example, you can use HTML styling within these fields to customize the appearance:

```yaml
title: > 
  <span style="background-color: rgba(0,106,179,0.75); padding: 5px; color: white">
    LiaBooks - Collection of interactive Textbooks
  </span>

comment: >
  <br>
  <span style="background-color: rgba(0,106,179,0.75); padding: 5px; color: white">
    ... made with LiaScript ...
  </span>
```

The `>` symbol indicates a multi-line string in YAML, allowing you to include HTML formatting.

{{< image
src="images/post/creating-project-websites-with-liascript-exporter/liabooks-1.png"
caption="Example of a LiaScript project website showcasing multiple courses organized into collections with tags and downloadable resources."
alt="Screenshot: title and comment"
>}}

#### 2. Logo and Icon

The `logo` and `icon` fields specify the images used for your project website:

```yaml
logo: logo.jpg
icon: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Logo_TU_Bergakademie_Freiberg.svg/242px-Logo_TU_Bergakademie_Freiberg.svg.png
```

The `logo` is typically displayed prominently on your index page, while the `icon` might be used for the browser tab favicon or in social media previews. You can use local files (as with `logo.jpg`) or external URLs.

#### 3. Footer

The `footer` field defines the content that appears at the bottom of your index page:

```yaml
footer: >
  For more information about LiaScript as a Markup language for interactive Open Educational Resources, visit our website
  <a href="https://liascript.github.io" target="_blank">https://LiaScript.github.io</a>
```

This is a great place to include attribution, contact information, or links to related resources.

#### 4. Meta Information

The `meta` section provides information for social media sharing and search engine optimization:

```yaml
meta:
  title: LiaBooks
  description: Collection of interactive Textbooks translated to LiaScript markdown
```

These fields are used to generate meta tags for OpenGraph and Twitter cards, making your project website look professional when shared on social media platforms. If you don't specify these fields, the exporter will use the main title, comment, and logo instead.

You can disable meta information generation with the `--project-no-meta` parameter when running the exporter.

#### 5. Collection

The `collection` section is where you list all the LiaScript documents you want to include in your project website:

```yaml
collection:
  - url: https://raw.githubusercontent.com/LiaScript/docs/master/README.md
  - url: https://raw.githubusercontent.com/LiaBooks/LiaScript-Tutorial/main/README.md
  - url: https://raw.githubusercontent.com/LiaPlayground/LiaScript_WeAreDevelopers2022/main/README.md
```

Each document is specified by its URL, which should point to the raw Markdown file. The exporter will automatically extract metadata (title, description, tags) from each document to create the preview cards.

### Advanced Configuration Options

#### Organizing Courses into Groups

You can organize your courses into themed groups by creating named collections:

```yaml
title: Mathematics
comment: ""
grid: true
collection:
  - url: https://raw.githubusercontent.com/LiaBooks/Flexbook-Algebra-Explorations-Pre-K-through-Grade-7/main/README.md
  - url: https://raw.githubusercontent.com/LiaBooks/Flexbook-CK-12-Algebra-I-Honors/main/English/README.md
  - url: https://raw.githubusercontent.com/LiaBooks/Flexbook-CK-12-Algebra-Basic/main/English/README.md
```

The `grid` parameter set to `true` will display the courses in this collection as smaller preview cards in a grid layout, making it easier to browse through multiple courses.

{{< image
src="images/post/creating-project-websites-with-liascript-exporter/liabooks-2.png"
caption="A grid layout of course cards created by setting grid: true in the YAML configuration."
alt="Screenshot: grid structuring"
>}}

#### Adding HTML Content Between Collections

You can include HTML content between your collections to provide additional information or visual separation:

```yaml
- html: >
    <hr>
    <h1>Wikibooks</h1>
    
    <p>Wikibooks is a Wikimedia project focused on creating free and open-content textbooks and other educational resources. These resources, referred to as "open books," are collaboratively written by volunteers from around the world and cover a wide range of subjects, from academic topics to practical skills. The following courses are based on the content of the Wikibooks project and have been converted into interactive LiaScript textbooks.</p>
    
    <p>Help us to improve the content by translating further books from the Wikibooks at: <a href="https://www.wikibooks.org" target="_blank">www.wikibooks.org</a></p>
```

This allows you to create sections with explanatory text, headings, or other HTML elements to organize your content more effectively.

#### Overriding Course Metadata

You can override the metadata for individual courses by specifying additional parameters:

```yaml
- url: https://raw.githubusercontent.com/LiaPlayground/LiaScript_Tutorial_Kigali/main/README.md
  title: eLearning Africa Workshop 2022
  comment: Shows only an introduction, please follow the links within the course.
  # logo: https://another_image.jpg
  # or leave, so that no card-image is added to your preview-cards
  # logo:
```

This is useful when you want to customize how a specific course appears on your index page without modifying the original document.

#### Adding Tags

Tags are a powerful way to categorize your courses and enable filtering:

```yaml
tags:
  - Tutorial
  - LiaScript
  - OER

# You can manually tag courses, if this has not been done within the main comment of the course
# By default, these tags will be treated as categories, which can be used to navigate through
# your courses. To disable this, use the cmd-param --project-no-categories
#
# For smaller overviews, you can also use the --project-category-blur parameter.
# this will not hide the courses, that do not match, but instead blur them.
```

Tags can be defined at the top level to apply to all courses, or at the individual course level. They're used for navigation and filtering on your index page.

### Complete Example

Here's a more comprehensive example showing how to structure a project YAML file with multiple collections and customizations:

```yaml
title: > 
  <span style="background-color: rgba(0,106,179,0.75); padding: 5px; color: white">
    LiaBooks - Collection of interactive Textbooks
  </span>

comment: >
  <br>
  <span style="background-color: rgba(0,106,179,0.75); padding: 5px; color: white">
    ... made with LiaScript ...
  </span>

logo: logo.jpg
icon: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Logo_TU_Bergakademie_Freiberg.svg/242px-Logo_TU_Bergakademie_Freiberg.svg.png

footer: >
  For more information about LiaScript as a Markup language for interactive Open Educational Resources, visit our website
  <a href="https://liascript.github.io" target="_blank">https://LiaScript.github.io</a>

meta:
  title: LiaBooks
  description: Collection of interactive Textbooks translated to LiaScript markdown

# A collection is where you put all your courses into
collection:
  - url: https://raw.githubusercontent.com/LiaScript/docs/master/README.md
  - url: https://raw.githubusercontent.com/LiaBooks/LiaScript-Tutorial/main/README.md

- html: >
    <hr>
    <h1>Wikibooks</h1>
    
    <p>Wikibooks is a Wikimedia project focused on creating free and open-content textbooks and other educational resources.</p>

- title: Programming Languages
  comment: ""
  grid: true
  collection:
    - url: https://raw.githubusercontent.com/LiaBooks/Lua-Programming/master/README.md
      tags:
        - Lua
        - Programming
        - Scripting
        - English
    - url: https://raw.githubusercontent.com/liaBooks/C-Programmierung/master/README.md
      tags:
        - C
        - Programming
        - German

- html: >
    <hr>
    <h1>Mathematics</h1>

- title: Mathematics
  comment: ""
  grid: true
  collection:
    - url: https://raw.githubusercontent.com/LiaBooks/Flexbook-Algebra-Explorations-Pre-K-through-Grade-7/main/README.md
    - url: https://raw.githubusercontent.com/LiaBooks/Flexbook-CK-12-Algebra-I-Honors/main/English/README.md
```

This example demonstrates how to create a structured index page with different sections, HTML content, and organized collections of courses.

In the next section, we'll explore how to use the LiaScript-Exporter to generate your project website from this YAML configuration.

{{< button link="https://liaboos.github.io" label="LiaBooks website" >}}

## Using the LiaScript-Exporter for Project Websites

Now that we've explored how to configure your project using YAML, let's dive into the practical aspects of using the LiaScript-Exporter to generate your project website. This section will guide you through the installation process, basic usage, and specific commands for creating project websites.

### Installing the LiaScript-Exporter

Before you can generate a project website, you need to install the LiaScript-Exporter. This is a command-line tool based on NodeJS, so you'll need to have Node.js installed on your system first.

1. **Install Node.js**: If you don't already have Node.js installed, download and install it from [nodejs.org](https://nodejs.org/en/download/).

2. **Install the LiaScript-Exporter**: Open your terminal or command prompt and run the following command:

```bash
npm install -g @liascript/exporter
```

If you're on Linux or macOS, you might need to use `sudo`:

```bash
sudo npm install -g @liascript/exporter
```

This will install the LiaScript-Exporter globally on your system, making the `liaex` command available from any directory.

### Basic Usage of the LiaScript-Exporter

The LiaScript-Exporter is a versatile tool that can export LiaScript documents to various formats, including SCORM packages, PDFs, and web projects. The basic syntax for using the exporter is:

```bash
liaex -i <input-file> -f <format> -o <output-name>
```

Where:

- `-i` or `--input` specifies the input file
- `-f` or `--format` specifies the output format
- `-o` or `--output` specifies the output file name

For project exports, we'll be using the `project` format.

### Generating a Project Website

To generate a project website from your YAML configuration file, use the following command:

```bash
liaex -i project.yml --format project --output index
```

This command tells the exporter to:

1. Use `project.yml` as the input file
2. Generate output in the `project` format
3. Name the output file `index.html`

The exporter will process your YAML configuration, fetch all the referenced LiaScript documents, extract their metadata, and generate an HTML file that serves as your project website's index page.

{{< image
src="images/post/creating-project-websites-with-liascript-exporter/liaex.png"
caption="Executing the LiaScript-Exporter command to generate a project website from a YAML configuration file."
alt="Screenshot: LiaScript-Exporter run"
>}}

### Understanding the Output

After running the command, you'll have an `index.html` file that contains your complete project website. This file includes:

- All the HTML structure and content defined in your YAML configuration
- JavaScript code for handling navigation, filtering, and search functionality
- CSS styles for the visual presentation
- Embedded metadata for each course, extracted from the original LiaScript documents

The beauty of this approach is that everything is contained in a single HTML file, making it extremely portable and easy to deploy. You can simply upload this file to any web server or hosting service, and your project website will be live.

### Testing Your Project Website Locally

Before deploying your project website, it's a good idea to test it locally. You can do this by opening the generated `index.html` file in your web browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

This will open the file in your default web browser, allowing you to see how your project website looks and functions.

### Command-Line Options for Project Exports

The LiaScript-Exporter provides several command-line options specifically for project exports:

``` bash
Project settings:

--project-no-meta            Disable the generation of meta information for OpenGraph and Twitter-cards.
--project-no-categories      Disable the filter for categories/tags.
--project-category-blur      Enable this and the categories will be blurred instead of deleted.
--project-generate-pdf       PDFs are automatically generated and added to every card.
--project-generate-scrom12   SCORM12 and pass additional scrom settings.
--project-generate-scrom2004 SCORM2004 and pass additional scrom settings.
--project-generate-ims       IMS resources with additional config settings.
--project-generate-cache     Only generate new files, if they do not exist.
```

Let's explore some of these options in more detail:

#### Disabling Meta Information

If you don't want to generate meta information for social media sharing, you can use the `--project-no-meta` option:

```bash
liaex -i project.yml --format project --output index --project-no-meta
```

This will skip the generation of OpenGraph and Twitter card metadata, which might be useful if you're not planning to share your project website on social media platforms.

#### Disabling Categories/Tags

If you don't want to include category/tag filtering functionality in your project website, you can use the `--project-no-categories` option:

```bash
liaex -i project.yml --format project --output index --project-no-categories
```

This will remove the category filter dropdown from your project website, simplifying the interface if you don't need this feature.

#### Blurring Instead of Hiding Filtered Courses

By default, when a user filters courses by category, courses that don't match the selected category are hidden. If you prefer to blur them instead (keeping them visible but de-emphasized), you can use the `--project-category-blur` option:

```bash
liaex -i project.yml --format project --output index --project-category-blur
```

This creates a more visual filtering experience, where all courses remain visible but those that don't match the filter criteria are blurred.

{{< image
src="images/post/creating-project-websites-with-liascript-exporter/blurring.png"
caption="Comparison of filtering behavior: hiding non-matching courses (left) vs. blurring them (right)."
alt="Screenshot: difference between filtering methods"
>}}

### Practical Example: Creating a Project Website for a Course Collection

Let's walk through a complete example of creating a project website for a collection of educational courses:

1. **Create a project directory**:

   ```bash
   mkdir my-liascript-project
   cd my-liascript-project
   ```

2. **Create a logo image**:

   You can use any image editing software to create a logo for your project website, or use an existing image. Save it as `logo.jpg` in your project directory.

3. **Create a project.yml file**:

   Create a file named `project.yml` with the following content:

   ```yaml
   title: My Educational Resources
   comment: A collection of interactive learning materials

   logo: logo.jpg

   footer: >
     Created with LiaScript - 
     <a href="https://liascript.github.io" target="_blank">https://LiaScript.github.io</a>

   collection:
     - url: https://raw.githubusercontent.com/username/repo1/main/README.md
     - url: https://raw.githubusercontent.com/username/repo2/main/README.md

   - html: >
       <hr>
       <h2>Programming Courses</h2>

   - title: Programming
     comment: Learn various programming languages
     grid: true
     collection:
       - url: https://raw.githubusercontent.com/username/python-course/main/README.md
       - url: https://raw.githubusercontent.com/username/javascript-course/main/README.md
   ```

   Replace the URLs with actual links to your LiaScript documents.

4. **Generate the project website**:

   ```bash
   liaex -i project.yml --format project --output index
   ```

5. **Test the website locally**:

   ```bash
   open index.html
   ```

6. **Deploy the website**:

   Upload the `index.html` file and `logo.jpg` to your web server or hosting service.

### Troubleshooting Common Issues

#### Missing or Incorrect Metadata

If your course cards are missing titles, descriptions, or other metadata, check that:

1. The URLs in your YAML file point to the raw Markdown files
2. The LiaScript documents contain proper metadata in their headers
3. You have internet access when generating the project website

#### Styling and Layout Issues

If your project website doesn't look as expected:

1. Check your HTML styling in the YAML file
2. Ensure your logo file is in the correct location and format
3. Try using simpler HTML formatting initially, then add complexity

#### Performance Issues with Large Collections

If you have a large collection of courses and the generation process is slow:

1. Consider splitting your collection into multiple smaller YAML files
2. Use the `--project-generate-cache` option to avoid regenerating unchanged files
3. Implement the automation process with GitHub Actions (which we'll cover in a later section)

In the next section, we'll explore how to enhance your project website by automatically generating PDFs and SCORM packages for each course, providing additional value to your users.

<!-- TODO: Add an image showing a complete project website with various sections and features highlighted. Caption: "A complete project website generated using the LiaScript-Exporter, showing various features like course cards, sections, and navigation." -->

## Enhancing with PDFs and SCORM Packages

One of the most powerful features of the LiaScript-Exporter for project websites is the ability to automatically generate PDFs and SCORM packages for each course. This adds significant value to your project website by providing downloadable resources that can be used offline or integrated into Learning Management Systems (LMS).

### Why Include PDFs and SCORM Packages?

Before diving into the technical details, let's understand why you might want to include these resources:

1. **PDFs** provide a static, printable version of your courses that users can download for offline reading or reference. They're particularly useful for students who prefer physical materials or situations where internet access is limited.

2. **SCORM packages** (Sharable Content Object Reference Model) are standardized e-learning content packages that can be imported into virtually any Learning Management System (LMS) like Moodle, Canvas, Blackboard, or ILIAS. This allows your interactive LiaScript content to be integrated directly into institutional learning platforms.

By automatically generating these resources for each course in your project website, you provide flexibility to your users and extend the reach of your educational materials.

### Generating PDFs Automatically

To automatically generate PDFs for all courses in your project website, you can use the `--project-generate-pdf` flag when running the LiaScript-Exporter:

```bash
liaex -i project.yml --format project --output index --project-generate-pdf
```

This command will:

1. Process your YAML configuration
2. For each course in your collections, generate a PDF version
3. Add download links to the course cards in your project website

The PDF generation process uses [Puppeteer](https://github.com/puppeteer/puppeteer), a headless Chrome browser, to render each LiaScript document and convert it to PDF. This ensures that the PDFs accurately represent the visual appearance and content of your courses.

{{< image
src="images/post/creating-project-websites-with-liascript-exporter/pdf-download.png"
caption="A course card with an automatically generated PDF download button, allowing users to access offline versions of the content."
alt="Screenshot: pdf download"
>}}

### PDF Customization Options

The LiaScript-Exporter provides several options for customizing the generated PDFs:

``` bash
PDF settings:

--pdf-stylesheet           Inject a local CSS for changing the appearance.
--pdf-theme                LiaScript themes: default, turquoise, blue, red, yellow
--pdf-timeout              Set an additional time horizon to wait until finished.
--pdf-preview              Open preview-browser (default false), print not possible
--pdf-scale                Scale of the webpage rendering. Defaults to 1.
--pdf-displayHeaderFooter  Display header and footer. Defaults to false.
--pdf-headerTemplate       HTML template for the print header
--pdf-footerTemplate       HTML template for the print footer.
--pdf-printBackground      Print background graphics. Defaults to false
--pdf-landscape            Paper orientation. Defaults to false.
--pdf-pageRanges           Paper ranges to print, e.g., "1-5, 8, 11-13"
--pdf-format               Paper format. If set, takes priority over width or height options. Defaults to a4.
--pdf-width                Paper width, accepts values labeled with units.
--pdf-height               Paper height, accepts values labeled with units.
--pdf-margin-top           Top margin, accepts values labeled with units.
--pdf-margin-right         Right margin, accepts values labeled with units.
--pdf-margin-bottom        Bottom margin, accepts values labeled with units.
--pdf-margin-left          Left margin, accepts values labeled with units.
--pdf-preferCSSPageSize    Give any CSS @page size declared in the page priority.
--pdf-omitBackground       Hides default white background and allows capturing screenshots with transparency.
```

These options can be combined with the `--project-generate-pdf` flag to customize the appearance and behavior of the generated PDFs. For example:

```bash
liaex -i project.yml --format project --output index --project-generate-pdf --pdf-theme blue --pdf-displayHeaderFooter --pdf-printBackground
```

This command would generate PDFs with the blue LiaScript theme, display headers and footers, and include background graphics.

### Applying Custom Styling to PDFs

For more advanced customization, you can use the `--pdf-stylesheet` option to inject custom CSS:

```bash
liaex -i project.yml --format project --output index --project-generate-pdf --pdf-stylesheet custom.css
```

Your custom CSS file might look something like this:

```css
:root {
  --color-highlight: 2, 255, 0;
  --color-background: 122, 122, 122;
  --color-border: 0, 0, 0;
  --color-highlight-dark: 0, 0, 0;
  --color-highlight-menu: 0, 0, 0;
  --color-text: 0, 0, 255;
  --global-font-size: 1rem;
  --font-size-multiplier: 2;
}
```

This allows you to completely customize the visual appearance of your PDFs, ensuring they match your branding or specific design requirements.

### Generating SCORM Packages Automatically

SCORM packages are standardized e-learning content packages that can be imported into Learning Management Systems. The LiaScript-Exporter supports generating both SCORM 1.2 and SCORM 2004 packages.

To automatically generate SCORM 1.2 packages for all courses in your project website, use the `--project-generate-scrom12` flag:

```bash
liaex -i project.yml --format project --output index --project-generate-scrom12
```

For SCORM 2004 packages, use the `--project-generate-scrom2004` flag:

```bash
liaex -i project.yml --format project --output index --project-generate-scrom2004
```

These commands will:

1. Process your YAML configuration
2. For each course in your collections, generate a SCORM package
3. Add download links to the course cards in your project website

<!-- TODO: Add an image showing a course card with SCORM package download options. Caption: "A course card with automatically generated SCORM package download options, allowing for easy integration with Learning Management Systems." -->

### SCORM Customization Options

The LiaScript-Exporter provides several options for customizing the generated SCORM packages:

``` bash
SCORM settings:

--scorm-organization       Set the organization title
--scorm-masteryScore       Set the scorm masteryScore (a value between 0 -- 100), default is 0
--scorm-typicalDuration    Set the scorm duration, default is PT0H5M0S
--scorm-iframe             Use an iframe, when a SCORM starting parameter is not working
--scorm-embed              Embed the Markdown into the JS code, use in Moodle 4 to handle restrictions with dynamic loading
```

These options can be combined with the SCORM generation flags to customize the behavior of the generated packages. For example:

``` bash
liaex -i project.yml --format project --output index --project-generate-scrom12 --scorm-organization "My Organization" --scorm-masteryScore 70 --scorm-typicalDuration PT1H30M0S
```

This command would generate SCORM 1.2 packages with a custom organization title, a mastery score of 70%, and a typical duration of 1 hour and 30 minutes.

### Generating Both PDFs and SCORM Packages

You can combine the PDF and SCORM generation flags to create both types of resources for your courses:

```bash
liaex -i project.yml --format project --output index --project-generate-pdf --project-generate-scrom12
```

This will add both PDF and SCORM 1.2 download options to each course card in your project website.

### Using the Cache for Efficient Generation

When working with large collections of courses, generating PDFs and SCORM packages can be time-consuming. To improve efficiency, you can use the `--project-generate-cache` flag:

``` bash
liaex -i project.yml --format project --output index --project-generate-pdf --project-generate-scrom12 --project-generate-cache
```

This flag tells the exporter to only generate new files if they don't already exist. If you've previously generated PDFs or SCORM packages for a course and the course hasn't changed, the exporter will reuse the existing files instead of regenerating them.

### Practical Example: Creating a Project Website with PDFs and SCORM Packages

Let's walk through a complete example of creating a project website with automatically generated PDFs and SCORM packages:

1. **Create a project directory**:

   ``` bash
   mkdir my-educational-project
   cd my-educational-project
   ```

2. **Create a project.yml file**:

   ```yaml
   title: Educational Resources Hub
   comment: Interactive courses with downloadable resources

   logo: logo.jpg

   footer: >
     All materials are available as interactive courses, PDFs, and SCORM packages for LMS integration.

   collection:
     - url: https://raw.githubusercontent.com/username/course1/main/README.md
     - url: https://raw.githubusercontent.com/username/course2/main/README.md
     - url: https://raw.githubusercontent.com/username/course3/main/README.md
   ```

3. **Generate the project website with PDFs and SCORM packages**:

   ``` bash
   liaex -i project.yml --format project --output index --project-generate-pdf --project-generate-scrom12 --pdf-theme blue
   ```

4. **Test the website locally**:

   ``` bash
   open index.html
   ```

5. **Deploy the website**:

   Upload the `index.html` file, `logo.jpg`, and the generated PDF and SCORM files to your web server or hosting service.

### Troubleshooting PDF and SCORM Generation

#### PDF Generation Issues

If you encounter issues with PDF generation:

1. **Timeout errors**: For complex courses with many interactive elements, the default timeout might not be sufficient. Try increasing the timeout:

   ``` bash
   liaex -i project.yml --format project --output index --project-generate-pdf --pdf-timeout 60000
   ```

   This sets the timeout to 60 seconds (60000 milliseconds).

2. **Rendering issues**: If your PDFs don't look as expected, try different themes or custom CSS:

   ``` bash
   liaex -i project.yml --format project --output index --project-generate-pdf --pdf-theme turquoise
   ```

3. **Missing content**: Ensure that all resources (images, scripts, etc.) referenced in your LiaScript documents are accessible when generating the PDFs.

#### SCORM Package Issues

If you encounter issues with SCORM packages:

1. **LMS compatibility**: Different Learning Management Systems may have varying levels of SCORM support. If you encounter issues with SCORM 2004, try SCORM 1.2 instead, as it has broader compatibility.

2. **Dynamic loading issues**: Some LMS platforms restrict dynamic loading of content. In such cases, use the `--scorm-embed` option:

   ``` bash
   liaex -i project.yml --format project --output index --project-generate-scrom12 --scorm-embed
   ```

3. **Testing SCORM packages**: Before deploying to a production LMS, test your SCORM packages using a tool like [SCORM Cloud](https://cloud.scorm.com/) or a test instance of your LMS.

### Best Practices for PDF and SCORM Integration

1. **Optimize course content**: Ensure your LiaScript documents are well-structured and optimized for both interactive viewing and PDF export.

2. **Consider file sizes**: PDFs and SCORM packages can become quite large for complex courses. Consider splitting very large courses into smaller modules.

3. **Use consistent styling**: Apply consistent themes and styling across all your courses for a professional appearance in both the interactive versions and PDFs.

4. **Provide clear instructions**: Include information in your project website about how to use the PDFs and SCORM packages, especially for users who may be unfamiliar with LMS integration.

5. **Automate the process**: As we'll see in a later section, you can automate the generation of PDFs and SCORM packages using GitHub Actions, ensuring your resources are always up-to-date.

By integrating PDFs and SCORM packages into your project website, you significantly enhance its value and reach. Users can choose the format that best suits their needs, whether it's the interactive web version, a downloadable PDF, or a SCORM package for LMS integration.

In the next section, we'll explore how to implement tags and search functionality to help users find relevant courses in your project website.

<!-- TODO: Add an image showing a complete project website with PDF and SCORM download options for multiple courses. Caption: "A complete project website with PDF and SCORM download options for each course, providing flexible access options for different user needs." -->

## Implementing Tags and Search Functionality

One of the most powerful features of LiaScript project websites is the ability to categorize courses using tags and provide users with robust search functionality. This section will explore how to implement and leverage tags in your project website to enhance discoverability and organization of your educational content.

### Understanding Tags in LiaScript Project Websites

Tags serve multiple purposes in LiaScript project websites:

1. **Categorization**: They group related courses together, making it easier for users to find content on specific topics.
2. **Filtering**: They allow users to filter the displayed courses based on their interests or needs.
3. **Search enhancement**: They improve the searchability of your content, making it easier for users to find relevant courses.

Tags are extracted from your LiaScript documents and can also be defined or overridden in your YAML configuration file.

### How Tags Are Extracted from LiaScript Documents

By default, the LiaScript-Exporter automatically extracts tags from your LiaScript documents. These tags are typically defined in the main comment section of your document, often at the beginning. For example:

```markdown
<!--
author:  Your Name
email:   your.email@example.com
version: 0.1.0
language: en
narrator: US English Female
comment: An introduction to programming with Python
tags: Python, Programming, Beginner, Computer Science
-->

# Introduction to Python Programming
```

In this example, the tags "Python", "Programming", "Beginner", and "Computer Science" would be automatically extracted and associated with this course in your project website.

### Defining Tags in the YAML Configuration

You can also define or override tags directly in your YAML configuration file. This is useful when:

- Your LiaScript documents don't have tags defined
- You want to use a consistent tagging scheme across all courses
- You want to add additional tags for specific purposes

Here's how to define tags at different levels in your YAML configuration:

#### Global Tags

You can define global tags that apply to all courses in your project:

```yaml
tags:
  - Education
  - Interactive
  - LiaScript
```

These tags will be added to all courses in your project website.

#### Collection-Level Tags

You can define tags for specific collections:

```yaml
title: Programming Courses
comment: Learn various programming languages
tags:
  - Programming
  - Computer Science
collection:
  - url: https://raw.githubusercontent.com/username/python-course/main/README.md
  - url: https://raw.githubusercontent.com/username/javascript-course/main/README.md
```

These tags will be added to all courses within this specific collection.

#### Course-Level Tags

You can define or override tags for individual courses:

```yaml
- url: https://raw.githubusercontent.com/username/python-course/main/README.md
  tags:
    - Python
    - Beginner
    - Data Science
```

These tags will be applied specifically to this course, potentially overriding or supplementing tags defined in the original document.

### How Tags Appear in the Project Website

In the generated project website, tags typically appear in two main places:

1. **On course cards**: Each course card displays its associated tags, giving users a quick overview of the course's content and focus.

2. **In the filter dropdown**: A dropdown menu at the top of the page allows users to filter courses by tag, showing only those that match the selected tag.

{{< image
src="images/post/creating-project-websites-with-liascript-exporter/tags.png"
caption="Course cards displaying tags and the filter dropdown menu for tag-based filtering."
alt="Screenshot: selecting tags in the filter dropdown"
>}}

### Customizing Tag Behavior

The LiaScript-Exporter provides several options for customizing how tags are handled in your project website:

#### Disabling Categories/Tags

If you don't want to include tag filtering functionality in your project website, you can use the `--project-no-categories` option:

```bash
liaex -i project.yml --format project --output index --project-no-categories
```

This will remove the tag filter dropdown from your project website, simplifying the interface if you don't need this feature.

#### Blurring Instead of Hiding Filtered Courses

By default, when a user filters courses by tag, courses that don't match the selected tag are hidden. If you prefer to blur them instead (keeping them visible but de-emphasized), you can use the `--project-category-blur` option:

```bash
liaex -i project.yml --format project --output index --project-category-blur
```

This creates a more visual filtering experience, where all courses remain visible but those that don't match the filter criteria are blurred.

### Search Functionality in LiaScript Project Websites

In addition to tag-based filtering, LiaScript project websites include built-in search functionality that allows users to find courses based on text queries. The search feature works across:

- Course titles
- Course descriptions
- Tags
- Collection titles and descriptions

When a user enters a search query, the project website dynamically filters the displayed courses to show only those that match the query.

### Best Practices for Tags and Search

To maximize the effectiveness of tags and search in your project website, consider these best practices:

#### 1. Use Consistent Tagging Schemes

Develop a consistent tagging scheme for your courses. This might include:

- Subject areas (e.g., "Mathematics", "Computer Science", "Physics")
- Difficulty levels (e.g., "Beginner", "Intermediate", "Advanced")
- Content types (e.g., "Tutorial", "Reference", "Exercise")
- Languages (e.g., "English", "German", "Spanish")

Consistent tagging makes it easier for users to navigate and filter your content.

#### 2. Avoid Tag Proliferation

While it's tempting to add many tags to each course, too many unique tags can make filtering less effective. Aim for a manageable number of distinct tags (typically 20-30 for a medium-sized collection) and reuse them across courses where appropriate.

#### 3. Consider Tag Hierarchies

You can implement simple tag hierarchies by using consistent prefixes. For example:

- "Level: Beginner", "Level: Intermediate", "Level: Advanced"
- "Language: English", "Language: German", "Language: Spanish"

This creates visual grouping in the filter dropdown and helps users understand the relationship between tags.

#### 4. Include Descriptive Content for Search

To improve search functionality, ensure your courses have descriptive titles, comprehensive descriptions, and relevant tags. The more descriptive text associated with each course, the more effectively users can find it through search.

#### 5. Test Search and Filtering

Before publishing your project website, test the search and filtering functionality with various queries and tags to ensure it works as expected. Consider common search terms users might enter and verify that relevant courses appear in the results.

### Practical Example: Implementing Tags and Search

Let's walk through a practical example of implementing tags and search in a project website:

1. **Ensure your LiaScript documents include tags**:

```markdown
<!--
author:  Your Name
email:   your.email@example.com
version: 0.1.0
language: en
narrator: US English Female
comment: An introduction to data analysis with Python
tags: Python, Data Science, Statistics, Visualization
-->

# Data Analysis with Python
```

2. **Define additional tags in your YAML configuration**:

   ```yaml
   title: Data Science Learning Path
   comment: Comprehensive courses for aspiring data scientists

   # Global tags for all courses
   tags:
     - Data Science
     - Education
     - Interactive

   collection:
     # Course with tags from the document plus global tags
     - url: https://raw.githubusercontent.com/username/python-data-analysis/main/README.md
  
     # Course with overridden tags
     - url: https://raw.githubusercontent.com/username/statistics-fundamentals/main/README.md
       tags:
         - Statistics
         - Mathematics
         - Beginner
         - Data Science
  
     # Course with additional tags
     - url: https://raw.githubusercontent.com/username/machine-learning-intro/main/README.md
       tags:
         - Machine Learning
         - Artificial Intelligence
         - Python
         - Intermediate
   ```

3. **Generate the project website with tag filtering**:

   ``` bash
   liaex -i project.yml --format project --output index
   ```

4. **Test the filtering and search functionality**:

   - Try selecting different tags from the filter dropdown
   - Enter search queries related to your content
   - Verify that the expected courses appear in the filtered results

### Troubleshooting Tags and Search

If you encounter issues with tags and search functionality:

#### Missing Tags

If tags aren't appearing for some courses:

1. Check that the tags are properly defined in your LiaScript documents
2. Verify that the tags are correctly specified in your YAML configuration
3. Ensure you're not using the `--project-no-categories` option

#### Search Not Finding Expected Results

If search isn't finding courses you expect:

1. Check that the courses have descriptive titles and comments
2. Ensure relevant tags are associated with each course
3. Consider adding more descriptive text to your HTML sections or course comments

#### Too Many Tags Making Filtering Difficult

If you have too many unique tags:

1. Review your tagging scheme and consolidate similar tags
2. Use the YAML configuration to override and standardize tags across courses
3. Consider implementing a tag hierarchy as described earlier

### Enhancing User Experience with Tags and Search

Tags and search functionality significantly enhance the user experience of your project website by making it easier for users to find relevant content. Consider these additional enhancements:

1. **Include instructions**: Add a brief explanation of how to use the filtering and search features in your project website.

2. **Group related courses**: Use collections and tags together to create logical groupings of related courses.

3. **Highlight popular tags**: Consider highlighting commonly used or important tags in your HTML sections to guide users.

4. **Create learning paths**: Use tags to define learning paths or sequences of courses that build on each other.

By effectively implementing tags and search functionality, you transform your project website from a simple collection of courses into a powerful educational resource that users can navigate and explore based on their specific interests and needs.

In the next section, we'll explore how to automate the entire process of generating your project website using GitHub Actions, ensuring your content stays up-to-date with minimal manual effort.

<!-- TODO: Add an image showing a user interacting with the search and filter functionality on a project website. Caption: "A user exploring courses using the search functionality and tag filtering, demonstrating how these features enhance content discoverability." -->

## Automating with GitHub Actions

Creating and maintaining a project website with multiple LiaScript documents, PDFs, and SCORM packages can involve significant manual effort, especially as your content grows and evolves. This is where GitHub Actions comes in—it allows you to automate the entire process of generating and deploying your project website whenever your content changes.

In this section, we'll explore how to set up a GitHub Actions workflow that automatically generates your project website and deploys it to GitHub Pages, ensuring your content is always up-to-date with minimal manual intervention.

### What is GitHub Actions?

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. It provides workflows that can build and test every pull request to your repository, or deploy merged pull requests to production.

For our purposes, GitHub Actions provides an ideal way to automate the generation and deployment of LiaScript project websites. Whenever you update your YAML configuration or any of your LiaScript documents, GitHub Actions can automatically regenerate your project website and deploy it to GitHub Pages.

### Setting Up Your Repository

Before creating a GitHub Actions workflow, you need to set up your repository with the necessary files:

1. **Create a GitHub repository**: If you don't already have one, create a new repository on GitHub to host your project website.

2. **Add your project files**: At minimum, you'll need:

   - `project.yml`: Your YAML configuration file
   - `logo.jpg` (or similar): Your project logo
   - Any other assets referenced in your YAML configuration

3. **Create a `.github/workflows` directory**: This is where your GitHub Actions workflow file will reside.

### Creating the GitHub Actions Workflow File

Let's create a GitHub Actions workflow file that will generate your project website and deploy it to GitHub Pages. Create a file named `deploy.yml` in the `.github/workflows` directory with the following content:

```yaml
name: Generate WebSite

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  run_exporter:
    runs-on: ubuntu-latest
    steps:
      - name: Set up dependencies
        run: npm install -g @liascript/exporter

      - name: Check out current repository
        uses: actions/checkout@v4

      - name: Generate WebSite
        run: liaex -i project.yml --format project --output index

      - name: Prepare Deployment Directory
        run: |
          mkdir -p gh-pages-deploy
          mv index.html gh-pages-deploy/
          mv logo.jpg gh-pages-deploy/

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: gh-pages-deploy
```

Let's break down this workflow file to understand what each part does:

#### Workflow Trigger

```yaml
on:
  push:
    branches:
      - main
```

This section defines when the workflow will run. In this case, it will run whenever changes are pushed to the `main` branch of your repository.

#### Permissions

```yaml
permissions:
  contents: write
```

This grants the workflow permission to write to your repository, which is necessary for deploying to GitHub Pages.

#### Jobs and Steps

```yaml
jobs:
  run_exporter:
    runs-on: ubuntu-latest
    steps:
      # Steps defined here
```

The workflow consists of a single job named `run_exporter` that runs on the latest Ubuntu environment. This job contains several steps that execute sequentially.

#### Step 1: Set up dependencies

```yaml
- name: Set up dependencies
  run: npm install -g @liascript/exporter
```

This step installs the LiaScript-Exporter globally using npm.

#### Step 2: Check out the repository

```yaml
- name: Check out current repository
  uses: actions/checkout@v4
```

This step checks out your repository code, making it available to subsequent steps.

#### Step 3: Generate the website

```yaml
- name: Generate WebSite
  run: liaex -i project.yml --format project --output index
```

This step runs the LiaScript-Exporter to generate your project website from your YAML configuration.

#### Step 4: Prepare the deployment directory

```yaml
- name: Prepare Deployment Directory
  run: |
    mkdir -p gh-pages-deploy
    mv index.html gh-pages-deploy/
    mv logo.jpg gh-pages-deploy/
```

This step creates a directory for deployment and moves the generated website files into it.

#### Step 5: Deploy to GitHub Pages

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_branch: gh-pages
    publish_dir: gh-pages-deploy
```

This step deploys the contents of the `gh-pages-deploy` directory to the `gh-pages` branch of your repository, which GitHub Pages will serve as your project website.

{{< image
src="images/post/creating-project-websites-with-liascript-exporter/workflow.png"
caption="GitHub Actions workflow successfully generating and deploying a LiaScript project website to GitHub Pages."
alt="Screenshot: workflow"
>}}

### Enhancing the Workflow with PDF and SCORM Generation

The basic workflow above generates your project website but doesn't include PDF or SCORM package generation. Let's enhance it to include these features:

```yaml
name: Generate WebSite with Resources

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  run_exporter:
    runs-on: ubuntu-latest
    steps:
      - name: Set up dependencies
        run: npm install -g @liascript/exporter

      - name: Check out current repository
        uses: actions/checkout@v4

      - name: Generate WebSite with PDFs and SCORM packages
        run: liaex -i project.yml --format project --output index --project-generate-pdf --project-generate-scrom12

      - name: Prepare Deployment Directory
        run: |
          mkdir -p gh-pages-deploy
          mv index.html gh-pages-deploy/
          mv logo.jpg gh-pages-deploy/
          # Move generated PDFs and SCORM packages
          find . -name "*.pdf" -exec cp {} gh-pages-deploy/ \;
          find . -name "*.zip" -exec cp {} gh-pages-deploy/ \;

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: gh-pages-deploy
```

The key differences in this enhanced workflow are:

1. The `Generate WebSite` step now includes the `--project-generate-pdf` and `--project-generate-scrom12` flags to generate PDFs and SCORM 1.2 packages.

2. The `Prepare Deployment Directory` step includes additional commands to find and copy all generated PDF and ZIP files (SCORM packages are ZIP files) to the deployment directory.

### Optimizing the Workflow for Large Collections

If you have a large collection of courses, generating PDFs and SCORM packages can be time-consuming. You can optimize the workflow by using the cache option:

```yaml
name: Generate WebSite with Cached Resources

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  run_exporter:
    runs-on: ubuntu-latest
    steps:
      - name: Set up dependencies
        run: npm install -g @liascript/exporter

      - name: Check out current repository
        uses: actions/checkout@v4

      - name: Restore cached resources
        uses: actions/cache@v3
        with:
          path: |
            ./cache
          key: ${{ runner.os }}-resources-${{ hashFiles('project.yml') }}
          restore-keys: |
            ${{ runner.os }}-resources-

      - name: Create cache directory
        run: mkdir -p ./cache

      - name: Generate WebSite with cached resources
        run: liaex -i project.yml --format project --output index --project-generate-pdf --project-generate-scrom12 --project-generate-cache -p ./cache

      - name: Prepare Deployment Directory
        run: |
          mkdir -p gh-pages-deploy
          mv index.html gh-pages-deploy/
          mv logo.jpg gh-pages-deploy/
          # Move generated PDFs and SCORM packages
          find ./cache -name "*.pdf" -exec cp {} gh-pages-deploy/ \;
          find ./cache -name "*.zip" -exec cp {} gh-pages-deploy/ \;

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: gh-pages-deploy
```

This workflow adds:

1. A step to restore cached resources from previous workflow runs
2. A step to create a cache directory if it doesn't exist
3. The `--project-generate-cache` flag and `-p ./cache` option to the exporter command to use and store cached resources
4. Updated paths in the find commands to look for PDFs and ZIPs in the cache directory

### Scheduling Regular Updates

In addition to running the workflow when changes are pushed to your repository, you might want to schedule regular updates to ensure your content stays fresh, especially if your LiaScript documents reference external resources that might change. You can do this by adding a schedule trigger:

```yaml
on:
  push:
    branches:
      - main
  schedule:
    - cron: '0 0 * * 0'  # Run at midnight every Sunday
```

This will run your workflow at midnight every Sunday, in addition to when changes are pushed to the main branch.

### Setting Up GitHub Pages

After your workflow successfully runs for the first time, you need to configure GitHub Pages to serve your project website:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the `gh-pages` branch
5. Click "Save"

Your project website will now be available at `https://<username>.github.io/<repository-name>/`.

### Practical Example: Complete Automation Workflow

Let's put everything together into a complete, production-ready workflow file:

```yaml
name: Generate and Deploy LiaScript Project Website

on:
  push:
    branches:
      - main
  schedule:
    - cron: '0 0 * * 0'  # Run at midnight every Sunday

permissions:
  contents: write

jobs:
  run_exporter:
    runs-on: ubuntu-latest
    steps:
      - name: Set up dependencies
        run: npm install -g @liascript/exporter

      - name: Check out current repository
        uses: actions/checkout@v4

      - name: Restore cached resources
        uses: actions/cache@v3
        with:
          path: |
            ./cache
          key: ${{ runner.os }}-resources-${{ hashFiles('project.yml') }}
          restore-keys: |
            ${{ runner.os }}-resources-

      - name: Create cache directory
        run: mkdir -p ./cache

      - name: Generate WebSite with resources
        run: |
          echo "Generating project website with PDFs and SCORM packages..."
          liaex -i project.yml --format project --output index --project-generate-pdf --project-generate-scrom12 --project-generate-cache -p ./cache
          echo "Generation completed successfully."

      - name: Prepare Deployment Directory
        run: |
          echo "Preparing deployment directory..."
          mkdir -p gh-pages-deploy
          cp index.html gh-pages-deploy/
          
          # Copy logo and other assets
          if [ -f logo.jpg ]; then
            cp logo.jpg gh-pages-deploy/
          fi
          
          if [ -f icon.png ]; then
            cp icon.png gh-pages-deploy/
          fi
          
          # Copy any other assets referenced in the HTML
          find . -name "*.css" -exec cp {} gh-pages-deploy/ \;
          find . -name "*.js" -exec cp {} gh-pages-deploy/ \;
          
          # Copy generated PDFs and SCORM packages
          find ./cache -name "*.pdf" -exec cp {} gh-pages-deploy/ \;
          find ./cache -name "*.zip" -exec cp {} gh-pages-deploy/ \;
          
          echo "Deployment directory prepared successfully."

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: gh-pages-deploy
          force_orphan: true  # Create a new history for the gh-pages branch
          commit_message: "Deploy: ${{ github.event.head_commit.message || 'Scheduled update' }}"

      - name: Output Website URL
        run: |
          echo "Website deployed successfully!"
          echo "Visit: https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/"
```

This comprehensive workflow:

1. Runs on pushes to the main branch and weekly on Sundays
2. Installs the LiaScript-Exporter
3. Uses caching to optimize resource generation
4. Generates the project website with PDFs and SCORM packages
5. Prepares a deployment directory with all necessary files
6. Deploys to GitHub Pages with a clean history and meaningful commit message
7. Outputs the URL of the deployed website

### Troubleshooting GitHub Actions Workflows

If you encounter issues with your GitHub Actions workflow:

#### Workflow Not Running

If your workflow isn't running:

1. Check that the workflow file is in the correct location (`.github/workflows/deploy.yml`)
2. Verify that the workflow file has valid YAML syntax
3. Ensure you have the necessary permissions to run workflows in the repository

#### Exporter Installation Failing

If the exporter installation fails:

1. Check the npm registry status
2. Try specifying a specific version of the exporter: `npm install -g @liascript/exporter@X.Y.Z`

#### PDF Generation Failing

If PDF generation fails:

1. The default Ubuntu runner might have issues with Puppeteer. You can add a step to install additional dependencies:

```yaml
- name: Install Puppeteer dependencies
  run: |
    sudo apt-get update
    sudo apt-get install -y libgbm-dev gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

#### Deployment Failing

If deployment to GitHub Pages fails:

1. Check that the `GITHUB_TOKEN` has the necessary permissions
2. Verify that the `gh-pages` branch isn't protected
3. Ensure the files are correctly moved to the deployment directory

### Best Practices for GitHub Actions Automation

1. **Use descriptive workflow names**: Choose clear, descriptive names for your workflows and steps to make them easier to understand and debug.

2. **Add error handling**: Include error handling in your shell commands using constructs like `set -e` to ensure the workflow fails if any command fails.

3. **Use caching**: Implement caching for dependencies and generated resources to speed up workflow runs.

4. **Monitor workflow runs**: Regularly check your workflow runs in the "Actions" tab of your repository to ensure they're completing successfully.

5. **Keep workflows modular**: If you have complex requirements, consider splitting your workflow into multiple jobs or even multiple workflow files.

6. **Version control your workflows**: Treat your workflow files as important code and apply the same version control practices you would for other code.

7. **Test changes in a branch**: When making significant changes to your workflow, test them in a branch before merging to main.

### Conclusion

By automating the generation and deployment of your LiaScript project website with GitHub Actions, you create a seamless workflow that keeps your content up-to-date with minimal manual intervention. Whenever you update your YAML configuration or any of your LiaScript documents, your project website will be automatically regenerated and deployed, ensuring your users always have access to the latest content.

This automation is particularly valuable as your collection of courses grows and evolves. Instead of manually regenerating and deploying your project website after each change, you can focus on creating and improving your educational content, knowing that the technical aspects of deployment are handled automatically.

In the next and final section, we'll summarize what we've learned and explore potential next steps for enhancing your LiaScript project website.

<!-- TODO: Add an image showing the complete workflow from updating content to automatic deployment and the resulting website. Caption: "The complete automated workflow: from updating content in GitHub to automatic generation and deployment of the project website with GitHub Actions." -->

## Conclusion

Throughout this article, we've explored how to leverage the LiaScript-Exporter to create comprehensive project websites that serve as organized index pages for multiple LiaScript documents. Let's recap what we've learned and consider some next steps for your LiaScript projects.

### Key Takeaways

We began by understanding what project exports are and why they're valuable for organizing and presenting collections of LiaScript documents. We then dove into the details of configuring project websites using YAML, exploring how to structure your configuration file to create a visually appealing and well-organized index page.

We learned how to use the LiaScript-Exporter to generate project websites from YAML configurations, including practical examples and troubleshooting tips. We also discovered how to enhance our project websites by automatically generating PDFs and SCORM packages for each course, providing flexible access options for different user needs.

Tags and search functionality were our next focus, as we explored how to implement effective categorization and filtering to help users find relevant content in our project websites. Finally, we automated the entire process using GitHub Actions, creating workflows that automatically generate and deploy our project websites whenever our content changes.

### The Power of Integration

What makes this approach particularly powerful is the integration of multiple technologies and features:

1. **LiaScript** provides the foundation with its interactive, markdown-based educational content.
2. **YAML** offers a flexible, human-readable way to configure our project websites.
3. **PDF and SCORM exports** extend the reach of our content to offline contexts and Learning Management Systems.
4. **Tags and search** enhance discoverability and organization.
5. **GitHub Actions** automates the entire process, ensuring our content stays up-to-date with minimal effort.

Together, these elements create a comprehensive solution for managing and presenting educational content that meets the diverse needs of teachers and students.

### Next Steps and Future Possibilities

As you implement project websites for your own LiaScript documents, consider these potential next steps:

#### 1. Customization and Branding

Explore further customization options for your project website:
- Create custom CSS to match your institutional branding
- Design custom headers and footers with additional information
- Experiment with different themes and layouts

#### 2. Advanced Content Organization

Consider more sophisticated approaches to organizing your content:
- Create learning paths that guide users through sequences of related courses
- Implement prerequisite relationships between courses
- Develop curated collections for specific audiences or purposes

#### 3. Analytics and Feedback

Add analytics and feedback mechanisms to your project website:
- Implement web analytics to understand how users interact with your content
- Add feedback forms or surveys to gather user input
- Track which courses and resources are most popular

#### 4. Collaboration and Contribution

Expand your project through collaboration:
- Set up contribution guidelines for others to add content
- Create templates for new courses to ensure consistency
- Implement review processes for quality assurance

#### 5. Integration with Other Systems

Explore integration with other educational systems:
- Connect your project website to institutional repositories
- Implement single sign-on for authenticated access
- Develop APIs for programmatic access to your content

### Final Thoughts

The approach we've outlined in this article represents a significant advancement in how educational content can be organized, presented, and maintained. By combining the interactive capabilities of LiaScript with the organizational structure of project websites and the automation power of GitHub Actions, we've created a solution that is both powerful and sustainable.

For teachers, this means being able to create and maintain comprehensive collections of educational resources with minimal technical overhead. For students, it means having access to well-organized, searchable content in multiple formats that suit different learning contexts and preferences.

As the LiaScript ecosystem continues to evolve, we can expect even more powerful features and integration possibilities. By adopting the approaches outlined in this article, you're not just solving an immediate need for content organization—you're laying the groundwork for a flexible, extensible educational content platform that can grow and adapt with your needs.

We encourage you to experiment with these techniques, adapt them to your specific requirements, and share your experiences with the LiaScript community. Your innovations and feedback will help shape the future of this powerful educational technology.

### Resources and References

To help you get started with implementing your own LiaScript project websites, here are some key resources:

1. [LiaScript Official Website](https://liascript.github.io/)
2. [LiaScript-Exporter Documentation](https://liascript.github.io/exporter/)
3. [GitHub Actions Documentation](https://docs.github.com/en/actions)
4. [Previous Article: Automating LiaScript Transformations on GitHub](https://liascript.github.io/blog/automating-liascript-transformations-on-github/)
5. [Previous Article: Quality Checks on LiaScript with GitHub](https://liascript.github.io/blog/quality-checks-on-liascript-with-github-ensuring-document-excellence/)

By building on the foundation laid in our previous articles and implementing the techniques described here, you can create powerful, organized, and automatically updated collections of educational content that serve the needs of both educators and learners.

<!-- TODO: Add an image showing a complete, polished project website with all the features discussed in the article (PDF/SCORM downloads, tag filtering, search, etc.). Caption: "A complete LiaScript project website showcasing the integration of all features discussed in this article: organized collections, tag filtering, search functionality, and downloadable resources." -->

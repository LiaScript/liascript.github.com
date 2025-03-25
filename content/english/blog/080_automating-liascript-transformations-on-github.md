---

title: "Automating LiaScript Transformations on GitHub with Enhanced Workflows and Asset Generation"
slug: automating-liascript-transformations-on-github
date: 2025-03-24
draft: false
author: André Dietrich
image: "/images/post/automation-1.jpg"

categories:
  - Community
  - Technology
  - Tools

tags:
  - GitHub
  - Automation
  - LiaScript
  - PDF
  - SCORM
  - IMS
  - Workflow

---


In today’s fast-paced development and educational environments, automation isn’t just a convenience—it’s a necessity. Automating the transformation of your LiaScript markdown documents into formats like PDFs, SCORM, and IMS packages can dramatically streamline your workflow. In this post, we dive deeper into GitHub Workflows: how they work, when they trigger, and what each part (triggers, jobs, steps, and assets) does. We also provide detailed code examples—from a simple "Hello LiaScript" echo to a fully functional pipeline that installs necessary tools, runs the LiaScript exporter, and packages multiple assets.

## What Are GitHub Workflows?

GitHub Workflows are at the heart of GitHub Actions. They allow you to automate tasks—such as building, testing, or deploying code—using a simple YAML file stored in your repository (usually under `.github/workflows`). Let’s break down the basics:

### Key Concepts:

- **Triggers:**

  A trigger defines the event that starts the workflow. For example, you can trigger a workflow on:

  - **Pushes** (e.g., every push to a branch)
  - **Pull Requests**
  - **Scheduled times** (using cron syntax)
  - **Manual triggers** (using workflow_dispatch)

- **Jobs:**

  A job is a collection of steps that run in the same virtual environment (e.g., an Ubuntu machine). Jobs can run sequentially or in parallel.

- **Steps:**

  Each job is made up of one or more steps. A step can either be a shell command or an action (pre-built task) that performs a specific function, such as checking out the code or uploading assets.

- **Assets and Releases:**

  You can package the outputs of your workflow (e.g., PDFs, SCORM, IMS packages) as release assets. This is especially useful for distributing updated documentation or e-learning packages.

### A Simple Example

Below is a very basic YAML file that simply prints out "Hello LiaScript". Notice the comments that explain each part:

```yaml
# File: .github/workflows/hello-liascript.yml
name: Hello LiaScript

# This workflow triggers on every push to any branch.
on: push

jobs:
  hello:
    # The job will run on the latest Ubuntu runner.
    runs-on: ubuntu-latest

    steps:
      # Step 1: Print a simple greeting to the console.
      - name: Print Greeting
        run: echo "Hello LiaScript"
```

This example demonstrates the simplest workflow: one trigger, one job, and one step.

---

## Enhancing the Workflow: Installing Tools and Running the LiaScript Exporter

Now let’s extend the simple workflow. The goal is to install Node.js and the LiaScript exporter, then run the exporter on your README file to generate a PDF. After that, we will add steps to create additional assets for SCORM and IMS packages.

### Extended Workflow Example

```yaml
# File: .github/workflows/generate-liascript-outputs.yml
name: Generate LiaScript Outputs

# Trigger the workflow when changes are pushed to the 'main' branch.
on:
  push:
    branches:
      - main

jobs:
  generate:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Check out the repository's code.
      - name: Checkout Repository
        uses: actions/checkout@v4

      # Step 2: Set up Node.js environment.
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'  # Specify the Node.js version to use.

      # Step 3: Install the LiaScript exporter globally using npm.
      - name: Install LiaScript Exporter
        run: |
          # Install the exporter tool
          npm install -g @liascript/exporter

      # Step 4: Generate a PDF from the README.md using the exporter.
      - name: Generate PDF
        run: |
          # Use the LiaScript exporter to convert README.md to a PDF.
          liaex -i README.md --format pdf --output Documentation --pdf-timeout 1500000

      # Step 5: Generate a SCORM package.
      - name: Generate SCORM
        run: |
          # Convert the README.md to a SCORM package.
          liaex -i README.md --format scorm --output SCORM

      # Step 6: Generate an IMS package.
      - name: Generate IMS Package
        run: |
          # Convert the README.md to an IMS package.
          liaex -i README.md --format ims --output IMS

      # Step 7: Create a new release in GitHub to hold the generated assets.
      - name: Create New Release
        id: create_release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: 'latest'
          release_name: 'Latest LiaScript Documentation'
          draft: false
          prerelease: false

      # Step 8: Upload the generated PDF as a release asset.
      - name: Upload PDF as Release Asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ steps.create_release.outputs.upload_url }}
          asset_path: ./Documentation/Documentation.pdf
          asset_name: Documentation.pdf
          asset_content_type: application/pdf

      # Step 9: Upload the generated SCORM package.
      - name: Upload SCORM as Release Asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ steps.create_release.outputs.upload_url }}
          asset_path: ./SCORM/scorm.zip
          asset_name: scorm.zip
          asset_content_type: application/zip

      # Step 10: Upload the generated IMS package.
      - name: Upload IMS as Release Asset
        uses: actions/upload-release-asset@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ steps.create_release.outputs.upload_url }}
          asset_path: ./IMS/ims.zip
          asset_name: ims.zip
          asset_content_type: application/zip
```

### Detailed Explanation

1. **Repository Checkout and Environment Setup:**
   - **Checkout:**  
     Uses the official checkout action to pull your repository’s code into the runner.
   - **Node.js Setup:**  
     Sets up Node.js (v16 in this example) using the `actions/setup-node` action. This is necessary for running npm commands and installing global packages like the LiaScript exporter.

2. **Installing and Running the Exporter:**
   - **Install LiaScript Exporter:**  
     Installs the exporter globally. This tool converts your markdown into various formats.
   - **Generate PDF/SCORM/IMS:**  
     Each of these steps runs the `liaex` command with different parameters:
     - **PDF:** Converts `README.md` into a PDF file.
     - **SCORM:** Converts `README.md` into a SCORM package (typically zipped).
     - **IMS:** Converts `README.md` into an IMS package.

3. **Release Management:**
   - **Create Release:**  
     Uses the `actions/create-release` action to generate a new release on GitHub, which acts as a container for your generated assets.
   - **Uploading Assets:**  
     Uses `actions/upload-release-asset` to attach each file (PDF, SCORM, and IMS) to the release. Make sure that the file paths and names match the output of your exporter commands.

---

## Understanding GitHub Workflow Triggers and Structure

### Triggers

A workflow is activated by specific events. Common triggers include:

- **Push:** Every time you push commits to your repository.
- **Pull Request:** When a pull request is opened or updated.
- **Schedule:** Using a cron-like syntax (e.g., to run a job every day at midnight).
- **Manual:** Triggered manually by a user with `workflow_dispatch`.

You can combine triggers as needed. For example, the following YAML snippet shows both push and schedule triggers:

```yaml
on:
  push:
    branches:
      - main
  schedule:
    - cron: '0 0 * * *'  # Runs every day at midnight UTC
```

### Jobs and Steps

- **Jobs:**  
  Each job runs in its own virtual environment. Jobs can run sequentially (one after the other) or in parallel (independently).

- **Steps:**  
  Steps within a job are executed sequentially. A step can be:
  - A simple shell command.
  - An action (a reusable unit of work, like checking out code).
  - A script with inline comments to help explain what’s happening.

Each step is designed to be clear and modular, so you can add, remove, or modify parts of your workflow without affecting other steps.

### Assets in a Release

When you generate files (like PDFs, SCORM packages, or IMS packages), you often want to share them as part of a GitHub release. This is done using the `actions/upload-release-asset` action. It takes several parameters:

- **upload_url:** Provided by the release creation step.
- **asset_path:** Local path to the file you wish to upload.
- **asset_name:** Name the file will have in the release.
- **asset_content_type:** MIME type of the file (e.g., `application/pdf` for PDFs).

---

## Conclusion

By leveraging GitHub Workflows, you can automate the transformation of LiaScript markdown documents into multiple output formats such as PDFs, SCORM, and IMS packages—all with a single YAML file. This powerful automation tool not only ensures consistency but also significantly reduces manual overhead. Start with the simple examples provided, and gradually extend your workflows to match the complexity of your project needs.

Experiment with different triggers, add more jobs or steps as necessary, and customize the asset uploads to suit your release management strategy. Happy automating!


---
title: Contributing Guide
description: A guide in my new Starlight docs site.
---

This tutorial is for people interested in contributing to **JS Training Grounds**.

JS Training Grounds is built using a documentation generator called **Starlight**. Starlight is built on top of **Astro**, and includes a plugin called **Expressive Code** that enables some really nice syntax highlighting features. This tutorial will show you the different Expressive Code features we use on JS Training Grounds to highlight our code snippets.

This tutorial assumes you're already familiar with VS Code, Markdown, GitHub, and npm.

## Expressive Code

### Setup

First, visit the <a href="https://github.com/simpledevio/starlight-training-ground" target="_blank">Starlight training ground repo</a>. Press the green **Code** button and click **Download ZIP**. Unzip the file and then open it in your editor. Then, run this command in the terminal to install the packages listed in `package.json`.

```bash
npm install
```

Then run this command to start the dev server.

```bash
npm run dev
```

You should see something like this in your terminal.

```bash
 astro  v5.3.1 ready in 656 ms

┃ Local    http://localhost:4321/
┃ Network  use --host to expose

01:11:49 watching for file changes...
```

Visit <a href="http://localhost:4321/" target="_blank">localhost:4321</a> in your browser, then click on the **Example Guide** button.

In your editor, you'll see several files. However, for now you'll mainly be working in `src/content/docs/guides/example.md`.

### Stackblitz

If you prefer to work online, you can also open the <a href="https://stackblitz.com/github/simpledevio/starlight-training-ground?file=src/content/docs/guides/example.md" target="_blank">Starlight training ground repo on Stackblitz</a> and start coding right away in your browser. You don't have to run any of the npm commands if you use Stackblitz. (NOTE: This Stackblitz link works best in Chrome.)

### Basic code block

To create a basic coding block, wrap the code in 3 backticks on the top and bottom.

````md
```
function greeting() {
  console.log("Hello World");
}
```
````

```
function greeting() {
  console.log("Hello World");
}
```

### Syntax highlighting

To enable syntax highlighting, add the correct abbreviation after the top 3 backticks. Since this is a JavaScript snippet, we added `js`.

````md
```js
function greeting() {
  console.log("Hello World");
}
```
````

```js
function greeting() {
  console.log("Hello World");
}
```

### Highlight words

To highlight a word or words, wrap the word(s) in double quotes after the abbreviation. In this example, we're highlighting the word `function`.

````md
```js "function"
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js "function"
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```

You can highlight multiple words or phrases by adding more words or phrases in quotes. If the phrase you're trying to highlight includes double quotes, you can include them inside the double quotes. In this example, we're also highlighting `"Hello World"`.

````md
```js "function" ""Hello World""
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js "function" ""Hello World""
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```

### Highlight a line

To highlight a line, wrap the line number you want to highlight in curly braces. In this example, we're highlighting the first line.

````md
```js {1}
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js {1}
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```

### Highlight multiple lines

You can highlight a range of lines by using a dash. In this example, we're highlighting the first, second, and third lines.

````md
```js {1-3}
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js {1-3}
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```

You can highlight different groups of lines by separating them by a comma inside the curly braces. In this example, we're highlighting the first and second lines as well as the fourth line.

````md
```js {1-2, 4}
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js {1-2, 4}
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```

### Highlight words and lines

You can highlight words and lines. Just separate them with a space after the abbreviation. In this example, we're highlighting the same lines as before and also highlighting the words `"Hello World"`.

````md
```js {1-2, 4} ""Hello World""
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js {1-2, 4} ""Hello World""
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```

### File name

To add a file name to the top of the code snippet, add the title attribute to the top of the snippet with the filename. In this example, we're adding `title="HelloWorld.js"`.

````md
```js title="HelloWorld.js" {1-2, 4} ""Hello World""
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js title="HelloWorld.js" {1-2, 4} ""Hello World""
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```

### Collapse

To collapse multiple lines of code, add the collapse attribute with a range of lines. In this example, we're collapsing lines 2 through 4.

````md
```js title="HelloWorld.js" collapse={2-4}
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js title="HelloWorld.js" collapse={2-4}
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```

## Writing Style

The tutorials on this site should follow this pattern for each section:

1. Add a heading
2. Explain the main concept in 1 sentence
3. Explain in 1 sentence what code the user will write
4. Show the code snippet (and use the Expressive Code features listed above where appropriate)
5. Tell the user what they should see in the browser in 1 sentence

There are instances where you might have to use more than 1 sentence, but the goal is to be fairly terse. Also, you might have to repeat steps 3, 4, and 5 in a section depending on how complex the step is.

Here is an example from our Vue 3 tutorial:

---

### style attribute

You can add a `style` attribute to an element just like in normal HTML.

**Task:** Add `style="color: red;"` to the h1 element.

```vue title="HelloWorld.vue" "style="color: red;""
<template>
  <h1 style="color: red;">Hello World</h1>
  <p>Lorem ipsum dolor...</p>
</template>
```

After saving, you should see the `<h1>` element turn red in the browser.

---

You can see that it has the heading, the various explanations, and the code snippet.

## Formatting Rules

1. The main rule for our Markdown files is make sure you leave 1 blank line above and below an element. This goes for headings, paragraphs, code snippets, etc. You can view the raw Markdown in our GitHub repo to see examples of this.
2. Use 1 set of asterisks for marking text as italic.
3. Use 2 sets of asterisks instead of 2 underscores for marking text as bold.

## Forking Repo

### Identify Task
1. <a href="https://github.com/simpledevio/js-training-grounds/issues" target="_blank">Create an issue on the main repo</a>
2. Wait to be assigned the task

After being assigned the task, you can move on to the next steps.

### Setup

We recommend using GitHub Desktop when contributing to this project. However, we've also included the relevant Git commands below if you prefer working with the command line.

3. Fork the <a href="https://github.com/simpledevio/js-training-grounds" target="_blank">main repo on github.com</a> (you only have to do this once)
4. Clone your fork to your local machine
```
git clone https://github.com/your-username/js-training-grounds.git
```
5. Run `npm install` to install the packages
```
npm install
```
6. Create a new branch on your fork locally (replace `your-branch-name` with your actual branch name)
```
git checkout -b your-branch-name
```

Assuming you don't delete your fork from GitHub or your local machine, you should only have to do steps 3 and 4 once. You *must* do step 6 every time you're assigned a new task (*NEVER* commit to `main`). You may have to run `npm install` again if we install more packages in the project later.

### Local development
7. Start the dev server using `npm run dev`
```
npm run dev
```
8. Edit and save the file (you will likely only work on one file at a time)
9. Check the results at <a href="http://localhost:4321/" target="_blank">localhost:4321</a> in your browser
10. Stop the dev server using Ctrl + C
11. Create a production build using `npm run build`
```
npm run build
```
12. Preview the production build using `npm run preview`
```
npm run preview
```
13. Check the results at <a href="http://localhost:4321/" target="_blank">localhost:4321</a> in your browser
14. Stop the server using Ctrl + C
15. Stage the file using `git add .`
```
git add .
```
16. Commit the file using `git commit -m` (replace the 3 dots with your actual commit message)
```
git commit -m "..."
```
17. Push your branch to GitHub (replace `your-branch-name` with your actual branch name)
```
git push origin your-branch-name
```
18. Open a pull request from your repo on github.com (a button should appear on your repo)
19. Merge pull request (we'll handle this step)
20. Sync your fork with the main repo on github.com (a button should appear on your repo)

If everything looks good in your pull request, we'll merge your pull request into our main branch (Step 19). If there are some issues in the pull request, we'll leave a comment on it, and you can try making more commits. After we merge your pull request, you'll need to sync your fork with our repo (Step 20). This means that your main branch will now be up-to-date with our main branch.

If you decide to make more contributions to the project, you will likely have to sync your fork any time you need to create a new branch. This will allow you to get any changes we've made to the project or other contributors have made.

### Getting contributions accepted

If you're making a larger contribution to a tutorial, the most important thing is that the code snippets work. We should be able to copy and paste them into the training ground repos or Stackblitz links and they should work. The second most important thing is that the tutorials make sense and fit in with our structure.

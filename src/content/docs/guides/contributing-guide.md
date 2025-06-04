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

If you prefer to work online, you can also open the <a href="https://stackblitz.com/github/simpledevio/starlight-training-ground?file=src/content/docs/guides/example.md" target="_blank">Starlight training ground repo on Stackblitz</a> and start coding right away in your browser. You don't have to run any of the npm commands if you use Stackblitz.

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

- The main rule for our Markdown files is make sure you leave 1 blank line above and below an element. This goes for headings, paragraphs, code snippets, etc. You can view the raw Markdown in our GitHub repo to see examples of this.
- Use 1 set of asterisks for marking text as italic.
- Use 2 sets of asterisks instead of 2 underscores for marking text as bold.

## Forking Repo

### Identify Task
1. Create issue
2. Wait to be assigned task

After being assigned the task, you can move on to the setup portion.

### Setup
3. Fork the repo (you only have to do this once)
4. Clone fork to local machine
5. Create a new branch on your fork

Assuming you don't delete your fork from GitHub or your local machine, you should only have to do steps 3 and 4 once. You *should* do step 5 every time you're assigned a new task.

### Local development
6. Start dev server using `npm run dev`
7. Edit files
8. Stop dev server
9. Create a production build using `npm run build`
10. Preview the production build using `npm run preview`
11. Commit files
12. Push to GitHub
13. Open pull request
14. Merge pull request
15. Sync fork with main repo

Assuming everything looks good in your pull request, we'll merge your pull request into our main branch. Remember to sync your main branch with our main branch after we merge your pull request (Step 15).

If you're making a larger contribution to a tutorial, the most important thing is that the code snippets work. We should be able to copy and paste them into a project and they should work. The second most important thing is that the tutorials make sense and fit in with our structure.

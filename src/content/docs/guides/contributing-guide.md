---
title: Contributing Guide
description: A guide in my new Starlight docs site.
---

This tutorial is for people interested in contributing to **JS Training Grounds**.

JS Training Grounds is built using a documentation generator called **Starlight**. Starlight is built on top of **Astro**, and includes a plugin called **Expressive Code** that enables some really nice syntax highlighting features. This tutorial will show you the different Expressive Code features we use on JS Training Grounds to highlight our code snippets.

This tutorial assumes you're already familiar with VS Code, Markdown, GitHub, and npm.

## Setup

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

## Basic code block

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

## Syntax highlighting

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

## Highlight words

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

## Highlight a line

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

## Highlight multiple lines

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

## Highlight words and lines

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

## File name

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

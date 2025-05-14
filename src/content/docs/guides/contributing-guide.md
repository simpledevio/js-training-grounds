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

````md
```js {1-2, 4} ""Hello World""
// HelloWorld.js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js {1-2, 4} ""Hello World""
// HelloWorld.js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```


````md
```js {2-3, 5} ""Hello World""
// HelloWorld.js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```
````

```js {2-3, 5} ""Hello World""
// HelloWorld.js
// Javascript code with syntax highlighting.
function greeting() {
  console.log("Hello World");
}
```

---
title: Markdown
description: A guide in my new Starlight docs site.
slug: guides/markdown
---

This tutorial is for people interested in contributing to **JS Training Grounds**.

JS Training Grounds is built using a documentation generator called **Starlight**. Starlight is built on top of **Astro**, and allows you to use Markdown to write your content. It also includes a plugin called **Expressive Code** that enables some really nice syntax highlighting features. This tutorial will show you how to write Markdown and the different Expressive Code features we use on JS Training Grounds to highlight our code snippets.

This tutorial assumes you're already familiar with VS Code, GitHub, and npm.

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

If you prefer to work online, you can also open the <a href="https://stackblitz.com/github/simpledevio/starlight-training-ground?file=src/content/docs/guides/example.md" target="_blank">Starlight training ground repo on Stackblitz</a> and start coding right away in your browser. You don't have to run any of the npm commands if you use Stackblitz. (NOTE: This Stackblitz link works best in Chrome.)

## Headings

Use `#` to create different headings. You can also create a level 1 heading by underlining the text with equals signs and a level 2 heading by underlining the text with dashes. On JS Training Grounds, we use hashtags.

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```
```md
Heading 1
=========
```
```md
Heading 2
---------
```

NOTE: The level 1 heading in JS Training Grounds is actually created using the title attribute at the top of the page. This is a Starlight feature and not specific to Markdown. This means you should skip the level 1 heading and start with level 2 headings when adding content to JS Training Grounds.

```
---
title: Main Heading
---
```

## Paragraph

You don't need any special symbols to create a paragraph in Markdown. To create multiple paragraphs, separate them with a blank line.

```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
```

## Unordered lists

Use dashes or asterisks to create unordered lists. On JS Training Grounds, we use dashes.

```md
-
-
-
```
```md
*
*
*
```

## Ordered lists

Use numbers with periods or parentheses to create ordered lists. On JS Training Grounds, we use periods.

```md
1.
2.
3.
```
```md
1)
2)
3)
```

## Italic text

Use a single set of asterisks or underscores to make text italic. On JS Training Grounds, we use asterisks.

```md
*Italic*
```
```md
_Italic_
```

## Bold text

Use 2 pairs of asterisks or underscores to make text bold. On JS Training Grounds, we use asterisks.

```md
**Bold**
```
```md
__Bold__
```

## Links

Use square brackets and parentheses to create links. You can also use the second notation to add links at the bottom of the page. On JS Training Grounds, we use the first method.

```md
[Link](http://example.com/)
```
```md
[Link][1]

Other stuff goes here...

[1]: http://example.com/
```

## Blockquotes

Use `>` to create a blockquote.

```md
> This is a blockquote.
```

## Horizontal Rules

Use 3 dashes or asterisks to create a horizontal rule.

```md
---
```
```md
***
```

## Inline code

Use backticks to create inline code.

```md
`Inline code`
```

## Code blocks

Use 3 backticks to open and close a code block.

````md
```
```
````

## Expressive Code

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

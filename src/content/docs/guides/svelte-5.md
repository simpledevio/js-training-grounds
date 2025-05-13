---
title: Svelte 5 Tutorial
description: A guide in my new Starlight docs site.
---

This tutorial assumes you're already familiar with HTML, CSS, JS, and npm. It also assumes you know what a JS framework is for.

## Setup

First, visit the <a href="https://github.com/simpledevio/svelte-5-training-ground" target="_blank">Svelte 5 training ground repo</a>. Press the green **Code** button and click **Download ZIP**. Unzip the file and then open it in your editor. Then, run this command in the terminal to install the packages listed in `package.json`.

```bash
npm install
```

Then run this command to start the dev server.

```bash
npm run dev
```

You should see something like this in your terminal.

```bash
  VITE v6.3.5  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Visit <a href="http://localhost:5173/" target="_blank">localhost:5173</a> in your browser. The web page should say **Hello World**.

In your editor, you'll see several files. However, for now you'll mainly be working in `HelloWorld.svelte`.

### Stackblitz

If you prefer to work online, you can also open the <a href="https://stackblitz.com/github/simpledevio/svelte-5-training-ground?file=src/lib/HelloWorld.svelte" target="_blank">Svelte training ground repo on Stackblitz</a> and start coding right away in your browser. You don't have to run any of the npm commands if you use Stackblitz.

## HTML

### Hello World

The simplest Svelte component you can have is an empty file.

```svelte

```

In our file, we have an `<h1>` element already added.

```vue
<!-- HelloWorld.svelte -->
<h1>Hello World</h1>
```

**Task:** To make it more personal, change `World` to your name.

```vue "John"
<!-- HelloWorld.svelte -->
<h1>Hello John</h1>
```

After saving, you should see the browser show your name.

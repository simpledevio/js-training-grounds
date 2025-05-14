---
title: React Tutorial
description: A guide in my new Starlight docs site.
---

This tutorial assumes you're already familiar with HTML, CSS, JS, and npm. It also assumes you know what a JS framework is for.

## Setup

First, visit the <a href="https://github.com/simpledevio/react-training-ground" target="_blank">React training ground repo</a>. Press the green **Code** button and click **Download ZIP**. Unzip the file and then open it in your editor. Then, run this command in the terminal to install the packages listed in `package.json`.

```bash
npm install
```

Then run this command to start the dev server.

```bash
npm run dev
```

You should see something like this in your terminal.

```bash
  VITE v6.3.2  ready in 251 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Visit <a href="http://localhost:5173/" target="_blank">localhost:5173</a> in your browser. The web page should say **Hello World**.

In your editor, you'll see several files. However, for now you'll mainly be working in `src/components/HelloWorld.jsx`.

### Stackblitz

If you prefer to work online, you can also open the <a href="https://stackblitz.com/github/simpledevio/react-training-ground?file=src/components/HelloWorld.jsx" target="_blank">React training ground repo on Stackblitz</a> and start coding right away in your browser. You don't have to run any of the npm commands if you use Stackblitz.

## HTML

### Hello World

In our file, we have an `<h1>` element already added.

```jsx
<!-- HelloWorld.jsx -->
function HelloWorld() {
  return <h1>Hello World</h1>;
}

export default HelloWorld;
```

**Task:** To make it more personal, change `World` to your name.

```jsx "John"
<!-- HelloWorld.jsx -->
function HelloWorld() {
  return <h1>Hello John</h1>;
}

export default HelloWorld;
```

After saving, you should see the browser show your name.

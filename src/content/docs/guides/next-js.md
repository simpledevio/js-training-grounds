---
title: Next.js Tutorial
description: A guide in my new Starlight docs site.
---

This tutorial assumes you're already familiar with HTML, CSS, JS, and npm. It also assumes you know what a JS framework is for.

## Setup

First, visit the <a href="https://github.com/simpledevio/next-training-ground" target="_blank">Next.js training ground repo</a>. Press the green **Code** button and click **Download ZIP**. Unzip the file and then open it in your editor. Then, run this command in the terminal to install the packages listed in `package.json`.

```bash
npm install
```

Then run this command to start the dev server.

```bash
npm run dev
```

You should see something like this in your terminal.

```bash
> next-training-ground@0.1.0 dev
> next dev

   ▲ Next.js 15.3.1
   - Local:        http://localhost:3000
   - Network:      http://192.168.0.31:3000

 ✓ Starting...
 ✓ Ready in 1033ms
```

Visit <a href="http://localhost:3000/" target="_blank">localhost:3000</a> in your browser. The web page should say **Hello World**.

In your editor, you'll see several files. However, for now you'll mainly be working in `app/page.js`.

### Stackblitz

If you prefer to work online, you can also open the <a href="https://stackblitz.com/github/simpledevio/next-training-ground?file=app/page.js" target="_blank">Next.js training ground repo on Stackblitz</a> and start coding right away in your browser. You don't have to run any of the npm commands if you use Stackblitz.

## Create a page

```jsx title="app/about/page.js"
export default function About() {
  return (
    <div>
      <main>
        <h1>About</h1>
      </main>
    </div>
  );
}
```

## Create a link

```jsx title="app/page.js"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Hello World</h1>
        <Link href="/about">About</Link>
      </main>
    </div>
  );
}
```

## Layout
```jsx title="app/layout.js"

```

## Image component

```jsx title="/.js"

```

## Fonts

```jsx title="/.js"

```

## Global styles
```jsx title="/.js"

```

## CSS modules
```jsx title="/.js"

```

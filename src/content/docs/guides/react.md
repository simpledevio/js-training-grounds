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

### Multiple elements

In React, a component must return a single JSX element. However, you can have multiple elements within a parent element.

**Task:** Add a `<p>` element after the `<h1>` element with some placeholder text.

```jsx "<p>Lorem ipsum dolor...</p>"
// HelloWorld.jsx
function HelloWorld() {
  return (
    <>
      <h1>Hello John</h1>
      <p>Lorem ipsum dolor...</p>
    </>
  );
}

export default HelloWorld;
```

Notice that we've wrapped our elements in `<>` and `</>`. This is a React Fragment, which allows us to return multiple elements without adding an extra node to the DOM.

After saving, you should see both elements appear on screen.

### App.jsx

Before we look at our next topic, open up `App.jsx` so you can see how it's importing `HelloWorld.jsx`.

```jsx {3,7}
// App.jsx
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <HelloWorld />
  );
}

export default App;
```

## CSS

### style attribute

You can add a `style` attribute to an element just like in normal HTML, but in React you pass an object instead of a string.

**Task:** Add `style={{ color: 'red' }}` to the h1 element.

```jsx "style={{ color: 'red' }}"
// HelloWorld.jsx
function HelloWorld() {
  return (
    <>
      <h1 style={{ color: 'red' }}>Hello John</h1>
      <p>Lorem ipsum dolor...</p>
    </>
  );
}

export default HelloWorld;
```

After saving, you should see the `<h1>` element turn red in the browser.

### External CSS File

You typically add styles using external CSS files. Create a CSS file inside `src/components` called `HelloWorld.css`.

```css
/* HelloWorld.css */
h1 {
  color: red;
}
```

**Task:** Delete the inline `style` attribute. Create `HelloWorld.css` and import it into `HelloWorld.jsx`.

```jsx
// HelloWorld.jsx
import './HelloWorld.css';

function HelloWorld() {
  return (
    <>
      <h1>Hello John</h1>
      <p>Lorem ipsum dolor...</p>
    </>
  );
}

export default HelloWorld;
```

After saving, you should see that the `<h1>` element is still red. Styles imported this way are global by default.

### `className` Attribute

To apply CSS classes, React uses the `className` attribute instead of `class` (because `class` is a reserved keyword in JavaScript).

**Task:** In `HelloWorld.css`, change the `h1` selector to a class selector, e.g., `.heading`. Then, add `className="heading"` to the `<h1>` element in `HelloWorld.jsx`.

```css
/* HelloWorld.css */
.heading {
  color: red;
}
```

```jsx
// HelloWorld.jsx
import './HelloWorld.css';

function HelloWorld() {
  return (
    <>
      <h1 className="heading">Hello John</h1>
      <p>Lorem ipsum dolor...</p>
    </>
  );
}

export default HelloWorld;
```

After saving, the `<h1>` element should still be red.

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

```jsx title="HelloWorld.jsx"
function HelloWorld() {
  return <h1>Hello World</h1>;
}

export default HelloWorld;
```

**Task:** To make it more personal, change `World` to your name.

```jsx title="HelloWorld.jsx" "John"
function HelloWorld() {
  return <h1>Hello John</h1>;
}

export default HelloWorld;
```

After saving, you should see the browser show your name.

### Multiple elements

In React, a component must return a single JSX element. However, you can have multiple elements within a parent element.

**Task:** Add a `<p>` element after the `<h1>` element with some placeholder text.

```jsx title="HelloWorld.jsx" "<p>Lorem ipsum dolor...</p>"
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

```jsx title="App.jsx" {2, 6}
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

```jsx title="HelloWorld.jsx" "style={{ color: 'red' }}"
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

You can also create a style object ahead of time instead of putting the object inline.

```jsx title="HelloWorld.jsx" {1-3} "{myStyle}"
const myStyle= {
  color: 'red'
}

function HelloWorld() {
  return (
    <>
      <h1 style={myStyle}>Hello John</h1>
      <p>Lorem ipsum dolor...</p>
    </>
  );
}

export default HelloWorld;
```

### External CSS File

You typically add styles using external CSS files. Create a CSS file inside `src/components` called `HelloWorld.css`.

```css title="HelloWorld.css"
h1 {
  color: red;
}
```

**Task:** Delete the inline `style` attribute. Create `HelloWorld.css` and import it into `HelloWorld.jsx`.

```jsx title="HelloWorld.jsx" {1}
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

```css title="HelloWorld.css" ".heading"
.heading {
  color: red;
}
```

```jsx title="HelloWorld.jsx" 'className="heading"'
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

## JS

### Add a state variable

For this section, we're going to create a new file called `Counter.jsx`. Add the following code to it.

```jsx title="Counter.jsx"
function Counter() {
  return (
    <button>Count: 0</button>
  );
}

export default Counter;
```

Next, make sure to import it into `App.jsx`.

```jsx title="App.jsx" {1, 5}
import Counter from './components/Counter';

function App() {
  return (
    <Counter />
  );
}

export default App;
```

After saving you should see the button appear on screen. It doesn't do anything yet if you click on it.

Import `useState` from React and create a state variable for count.

```jsx title="Counter.jsx" {1, 4}
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button>Count: {count}</button>
  );
}

export default Counter;
```

After saving, the button should still look the same. It still doesn't do anything yet.

### Make it reactive

Next, add an `onClick` handler to the button that increments the count.

```jsx title="Counter.jsx" "onClick={() => setCount(count + 1)}"
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}

export default Counter;
```

After saving, the number on the button will go up when you click on it.

### Use a function

Create a function called `increment()`. Then replace the inline function with a reference to `increment`.

```jsx title="Counter.jsx" {6-8, 11}
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <button onClick={increment}>Count: {count}</button>
  );
}

export default Counter;
```

After saving, the number on the button should still go up when you click on it.

### Conditional



```jsx title="Counter.jsx" {12}
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      {count > 10 && <h1>Good job!</h1>}
      <button onClick={increment}>Count: {count}</button>
    </div>
  );
}

export default Counter;
```



```jsx title="Counter.jsx" {12}
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      {count > 10 ? <h1>Good job!</h1> : <h1>Let's get started</h1>}
      <button onClick={increment}>Count: {count}</button>
    </div>
  );
}

export default Counter;
```



```jsx title="Counter.jsx" {10-17, 21}
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  let message;
  if (count > 10) {
    message = <h1>Good job!</h1>;
  } else if (count > 5) {
    message = <h1>Not bad</h1>;
  } else {
    message = <h1>Let's get started</h1>;
  }

  return (
    <div>
      {message}
      <button onClick={increment}>Count: {count}</button>
    </div>
  );
}

export default Counter;
```



### List



```jsx title="TodoList.jsx"
import { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), text: 'Buy groceries' },
    { id: crypto.randomUUID(), text: 'Read a book' },
    { id: crypto.randomUUID(), text: 'Go for a walk' },
  ]);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```



### Add items



```jsx title="TodoList.jsx" {9-18, 28-32}
import { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), text: 'Buy groceries' },
    { id: crypto.randomUUID(), text: 'Read a book' },
    { id: crypto.randomUUID(), text: 'Go for a walk' },
  ]);
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    if (newItem.trim() === "") return;
    setItems([
      ...items,
      { id: crypto.randomUUID(), text: newItem }
    ]);
    setNewItem("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoList;
```



### Remove items



```jsx title="TodoList.jsx" {20-22, 31-33}
import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), text: "Buy groceries" },
    { id: crypto.randomUUID(), text: "Read a book" },
    { id: crypto.randomUUID(), text: "Go for a walk" }
  ]);
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    if (newItem.trim() === "") return;
    setItems([
      ...items,
      { id: crypto.randomUUID(), text: newItem }
    ]);
    setNewItem("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoList;

```



### Props



```jsx title="HelloWorld.jsx"

```



### CSS + JS



```jsx title="HelloWorld.jsx"

```



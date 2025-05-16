---
title: Vue 3 Tutorial
description: A guide in my new Starlight docs site.
---

This tutorial assumes you're already familiar with HTML, CSS, JS, and npm. It also assumes you know what a JS framework is for.

## Setup

First, visit the <a href="https://github.com/simpledevio/vue-training-ground" target="_blank">Vue training ground repo</a>. Press the green **Code** button and click **Download ZIP**. Unzip the file and then open it in your editor. Then, run this command in the terminal to install the packages listed in `package.json`.

```bash
npm install
```

Then run this command to start the dev server.

```bash
npm run dev
```

You should see something like this in your terminal.

```bash
VITE v6.1.0  ready in 340 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  Vue DevTools: Open http://localhost:5173/__devtools__/ as a separate window
➜  Vue DevTools: Press Option(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools
➜  press h + enter to show help
```

Visit <a href="http://localhost:5173/" target="_blank">localhost:5173</a> in your browser. The web page should say **Hello World**.

In your editor, you'll see several files. However, for now you'll mainly be working in `HelloWorld.vue` and `App.vue`. First we'll start with `HelloWorld.vue`.

### Stackblitz

If you prefer to work online, you can also open the <a href="https://stackblitz.com/github/simpledevio/vue-training-ground?file=src/components/HelloWorld.vue" target="_blank">Vue training ground repo on Stackblitz</a> and start coding right away in your browser. You don't have to run any of the npm commands if you use Stackblitz.

## HTML

### Hello World

The simplest Vue component you can have is an empty `<template>` element. You can kind of think of the `<template>` element like the `<body>` element in a normal HTML file.

```vue
<template></template>
```

Inside the template element you can put HTML elements or Vue components. In our file, we have an `<h1>` element already added.

```vue
<!-- HelloWorld.vue -->
<template>
  <h1>Hello World</h1>
</template>
```

**Task:** To make it more personal, change `World` to your name.

```vue "John"
<!-- HelloWorld.vue -->
<template>
  <h1>Hello John</h1>
</template>
```

After saving, you should see the browser show your name.

### Multiple roots

You can have more than one element as a direct child of the `<template>` element.

**Task:** Add a `<p>` element after the `<h1>` element with some placeholder text.

```vue "<p>Lorem ipsum dolor...</p>"
<!-- HelloWorld.vue -->
<template>
  <h1>Hello John</h1>
  <p>Lorem ipsum dolor...</p>
</template>
```

After saving, you should see both elements appear on screen.

### App.vue

Before we look at our next topic, open up `App.vue` so you can see how it's importing `HelloWorld.vue`.

```vue {3,7}
<!-- App.vue -->
<script setup>
import HelloWorld from './components/HelloWorld';
</script>

<template>
  <HelloWorld />
</template>
```

### Slots

Next, let's learn about slots. **Slots** allow you to make your components more flexible by letting the same component display different text depending on what you pass into the component.

Back in `HelloWorld.vue`, let's replace the `<h1>` and `<p>` elements with slot.

```vue {3}
<!-- HelloWorld.vue -->
<template>
  <slot />
</template>
```

Then change `<HelloWorld />` from a self-closing tag to an opening and closing tag and add some slot content in between the tags.

```vue {7}
<!-- App.vue -->
<script setup>
import HelloWorld from './components/HelloWorld';
</script>

<template>
  <HelloWorld>This is some slot content!</HelloWorld>
</template>
```

The web page should now say "This is some slot content!".

#### Fallback content

Now let's update the slot so it can display fallback content if nothing gets passed to the component.

In `HelloWorld.vue`, change `<slot />` into `<slot></slot>`.

```vue {3}
<!-- HelloWorld.vue -->
<template>
  <slot></slot>
</template>
```

Now add the text `Fallback content` inside the tags.

```vue {3}
<!-- HelloWorld.vue -->
<template>
  <slot>Fallback content</slot>
</template>
```

Now delete the text from the `<HelloWorld>` component in `App.vue`.

```vue {7}
<!-- App.vue -->
<script setup>
import HelloWorld from './components/HelloWorld';
</script>

<template>
  <HelloWorld></HelloWorld>
</template>
```
The web page should now say "Fallback content".

## CSS

For this section let's reset `HelloWorld.vue` back to this.

```vue
<!-- HelloWorld.vue -->
<template>
  <h1>Hello John</h1>
  <p>Lorem ipsum dolor...</p>
</template>
```

### style attribute

You can add a `style` attribute to an element just like in normal HTML.

**Task:** Add `style="color: red;"` to the h1 element.

```vue "style="color: red;""
<!-- HelloWorld.vue -->
<template>
  <h1 style="color: red;">Hello World</h1>
  <p>Lorem ipsum dolor...</p>
</template>
```

After saving, you should see the `<h1>` element turn red in the browser.

### style element

You can also add a `<style>` element to style a component. Use the `scoped` attribute to limit the styles to just a component. If you leave it off, the styles could affect other components.

**Task:** Delete the `style` attribute. Then add the `<style>` element with the `scoped` attribute after the template element with the following rule.

```vue {7-11}
<!-- HelloWorld.vue -->
<template>
  <h1>Hello World</h1>
  <p>Lorem ipsum dolor...</p>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
```

After saving, you should see that the `<h1>` element is still red.

### class attribute

You can use a `class` attribute just like in normal HTML.

**Task:** Add a class attribute with the value of heading. Change the `h1` selector to `.heading`.

```vue "class="heading"" ".heading"
<!-- HelloWorld.vue -->
<template>
  <h1 class="heading">Hello World</h1>
</template>

<style scoped>
.heading {
  color: red;
}
</style>
```

After saving, you should see that the `<h1>` element is still red.

## JS

### Add a variable

For this section, we're going to create a new file called `Counter.vue`. Add the following code to it.

```vue {2-4}
<!-- Counter.vue -->
<template>
  <button>Count: 0</button>
</template>
```

Next, make sure to import it into `App.vue`.

```vue {3,7}
<!-- App.vue -->
<script setup>
import Counter from './components/Counter';
</script>

<template>
  <Counter />
</template>
```

After saving you should see the button appear on screen. It doesn't do anything yet if you click on it.

Add a `<script>` element above the `<template>` element. Add the `setup` attribute. This will make it easier to write some things. If you leave it off, you have to write some of your JS code in a slightly different way.

```vue {2-3}
<!-- Counter.vue -->
<script setup>
</script>

<template>
  <button>Count: 0</button>
</template>
```

Create a `count` constant and replace `0` with `{{ count }}`.

```vue {3, 7}
<!-- Counter.vue -->
<script setup>
const count = 0;
</script>

<template>
  <button>Count: {{ count }}</button>
</template>
```

After saving, the button should still look the same. It still doesn't do anything yet.

### Make it reactive

Next, import `ref` inside `script`. Notice the destructuring syntax. Wrap `0` in `ref()` and add `v-on:click="count++"` to the button tag. `ref()` means that when the `count` variable changes, the number on the screen should change as well.

```vue {3,8} "ref(0)"
<!-- Counter.vue -->
<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <button v-on:click="count++">Count: {{ count }}</button>
</template>
```

After saving, the number on the button will go up when you click on it.

### Shorthand

Replace `v-on:` with the `@` symbol.

```vue "@"
<!-- Counter.vue -->
<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <button @click="count++">Count: {{ count }}</button>
</template>
```

After saving, the number on the button should still go up when you click on it.

### Use a function

Create a function called `increment()`. Then replace `count++` with `increment`. Notice that you have to use `count.value++` inside the script element instead of `count++` directly.

```vue {6-8, 12}
<!-- Counter.vue -->
<script setup>
import { ref } from 'vue';
const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

After saving, the number on the button should still go up when you click on it.

### Conditional

Let's add a message that will display when you reach a certain count.

Task: Add an `<h1>` element with the `v-if` directive. The `<h1>` will show when the count is greater than 10.

```vue {12}
<!-- Counter.vue -->
<script setup>
import { ref } from 'vue';
const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <h1 v-if="count > 10">Good job!</h1>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

Now add an `<h1>` element with the `v-else` directive. This `<h1>` will show when the count is 10 or less.

```vue {13}
<!-- Counter.vue -->
<script setup>
import { ref } from 'vue';
const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <h1 v-if="count > 10">Good job!</h1>
  <h1 v-else>Let's get started</h1>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

Now add an `<h1>` with a `v-else-if` directive in the middle. This message will be displayed when count is greater than 5 but less than 11.

```vue {13}
<!-- Counter.vue -->
<script setup>
import { ref } from 'vue';
const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <h1 v-if="count > 10">Good job!</h1>
  <h1 v-else-if="count > 5">Not bad</h1>
  <h1 v-else>Let's get started</h1>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

### List

Let's create a new file called `ListExample.vue`. Add the following script element to it. This is the data we're going to display.

```vue
<!-- ListExample.vue -->
<script setup>
let id = 0;

const todos = [
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
]
</script>
```

Next, add the template code after the script code. The template code uses a `v-for` directive to loop through the todos constant.

```vue {12-18}
<!-- ListExample.vue -->
<script setup>
let id = 0;

const todos = [
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
]
</script>

<template>
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
</template>
```

You should now see a list in your browser.

### Add items

Next, add the `addTodo()` function to the script code and add the `<input>` and `<button>` elements.

```vue {13-16, 25-26}
<!-- ListExample.vue -->
<script setup>
import { ref } from 'vue';
let id = 0;
const newTodo = ref('');

const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
]);

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = '';
}
</script>

<template>
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
<input v-model="newTodo">
<button @click="addTodo">Add Todo</button>
</template>
```

After saving, you should have a working todo list in your browser.

### Remove items

- Add the `removeTodos()` function
- Add a `<button>` element inside the `v-for` loop

```vue {18-20, 27}
<!-- ListExample.vue -->
<script setup>
import { ref } from 'vue';
let id = 0;
const newTodo = ref('');

const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
]);

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = '';
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
    <button @click="removeTodo(todo)">X</button>
  </li>
</ul>
<input v-model="newTodo">
<button @click="addTodo">Add Todo</button>
</template>
```

After saving, you should be able to remove the items using the X buttons.

### Computed property

Let's learn how to toggle the completed items in the todo list. To do this, we need to use a **computed property**.

- Import `computed` from `'vue'`
- Add a `hideCompleted` constant with a value of `ref(false)`
- Add a `done` property to each object in `todos` with a value of `true` or `false`
- Add the `filteredTodos` constant
- Change `todos` to `filteredTodos` in the `v-for` attribute
- Add a checkbox `<input>`
- Add a `<button>` to toggle the completed items

```vue {6, 8-10, 13-17, 32, 39-41} ", computed" /todo in (filteredTodos)/
<!-- ListExample.vue -->
<script setup>
import { ref, computed } from 'vue';
let id = 0;
const newTodo = ref('');
const hideCompleted = ref(false);
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
]);

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = '';
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
<ul>
  <li v-for="todo in filteredTodos" :key="todo.id">
    <input type="checkbox" v-model="todo.done">
    {{ todo.text }}
    <button @click="removeTodo(todo)">X</button>
  </li>
</ul>
<input v-model="newTodo">
<button @click="addTodo">Add Todo</button>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>
```

After saving, you should be able to hide or show the completed items.

### Props

Let's revisit `HelloWorld.vue`. Earlier we saw how to pass content to a child component using slots. There's another way to pass information to a child component called **props**.

```vue {3} "{{ name }}"
<!-- HelloWorld.vue -->
<script setup>
const props = defineProps(['name'])
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```

In `App.vue`, you would add an attribute to `<HelloWorld>` called `name` with the value you want to pass in.

```vue 'name="John"'
<!-- App.vue -->
<script setup>
import HelloWorld from './components/HelloWorld';
</script>

<template>
  <HelloWorld name="John" />
</template>
```

Here's another way to define props.

```vue {3-5}
<!-- HelloWorld.vue -->
<script setup>
const props = defineProps({
  name: String
})
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```

### CSS + JS

Let's learn how to toggle classes in Vue. Update `HelloWorld.vue` so it has the following code.

```vue "v-bind:class="{red: isActive}"" "@click="isActive = !isActive""
<!-- HelloWorld.vue -->
<script setup>
import { ref } from 'vue';

const isActive = ref(true);
</script>

<template>
<h1 v-bind:class="{red: isActive}">Hello World</h1>
<button @click="isActive = !isActive">Toggle</button>
</template>

<style>
.red {
  color: red;
}
</style>
```

Now when you click the button, the text should toggle between red and black.

You can shorten `v-bind:class` to just `:class`.

```vue ":class"
<!-- HelloWorld.vue -->
<script setup>
import { ref } from 'vue';

const isActive = ref(true);
</script>

<template>
<h1 :class="{red: isActive}">Hello World</h1>
<button @click="isActive = !isActive">Toggle</button>
</template>

<style>
.red {
  color: red;
}
</style>
```

You can move the object into the `<script>` element. Make sure to use the `reactive()` function.

```vue "{ ref, reactive }" {6-8} ":class="classObject""
<!-- HelloWorld.vue -->
<script setup>
import { ref, reactive } from 'vue';

const isActive = ref(true);
const classObject = reactive({
  red: true
})
</script>

<template>
<h1 :class="classObject">Hello World</h1>
<button @click="isActive = !isActive">Toggle</button>
</template>

<style>
.red {
  color: red;
}
</style>
```

You can also use a computed property.

```vue "{ ref, computed }" {6-8}
<!-- HelloWorld.vue -->
<script setup>
import { ref, computed } from 'vue';

const isActive = ref(true);
const classObject = computed(() => ({
  red: isActive.value
}))
</script>

<template>
<h1 :class="classObject">Hello World</h1>
<button @click="isActive = !isActive">Toggle</button>
</template>

<style>
.red {
  color: red;
}
</style>
```

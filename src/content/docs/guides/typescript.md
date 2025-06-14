---
title: TypeScript Tutorial
description: A guide in my new Starlight docs site.
---

This tutorial assumes you're already familiar with HTML, CSS, JS, and npm. It also assumes you know what a JS framework is for.

## Setup

First, visit the <a href="https://github.com/simpledevio/typescript-training-ground" target="_blank">TypeScript training ground repo</a>. Press the green **Code** button and click **Download ZIP**. Unzip the file and then open it in your editor. Then, run this command in the terminal to install the packages listed in `package.json`.

```bash
npm install
```

Then run this command to start the dev server.

```bash
npm run dev
```

This command converts `main.ts` into `main.js`. It'll update the file every time you save. Use `Ctrl + C` to stop this process.

Open the `index.html` file in your browser. The web page should say **Hello World**. You can also use the Live Preview extension to open up `index.html` on localhost:3000.

In your editor, you'll see several files. However, for now you'll mainly be working in `main.ts`.

## Basic types

```ts title="main.ts"
// String, number, boolean
let text: string = "Hello World";
let age: number = 42;
let isDone: boolean = true;
```

## Arrays

```ts title="main.ts"
// Arrays
let fruits: string[] = ["apple", "banana", "cherry"];
let scores: number[] = [95, 82, 76];
let flags: boolean[] = [true, false, true];
```

## Tuples

```ts title="main.ts"
// Tuples
let coords: [number, number] = [10, 20];
let person: [string, number] = ["Alice", 30];
```


## Enums

```ts title="main.ts"
// Enums
enum Direction {}
```

```ts title="main.ts"
// Enums
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```

```ts title="main.ts"
// Enums
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
```

## Interfaces

```ts title="main.ts"
// Interfaces
interface User {}
```

```ts title="main.ts"
// Interfaces
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
```

```ts title="main.ts"
// Interfaces
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

let user1: User = {
  name: "John",
  age: 25,
  isAdmin: false
};
```

## Functions

```ts title="main.ts"
// Functions
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

```ts title="main.ts"
// Functions
function greet(name: string): string {
  return `Hello, ${name}`;
}

function add(a: number, b: number): number {
  return a + b;
}
```

## Union

```ts title="main.ts"
// Union
let value: string | number;

value = "Hello World";
value = 123;
```

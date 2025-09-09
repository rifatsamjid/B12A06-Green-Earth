---
#### 1) answer the following question-
---

#### 1) What is the difference between var, let, and const?

---

**_Answer_**

#### var,let,const are all use to declare variables,but they behave different of scope,hoisting and reassignment.

#### 1) var

#### 1. **_Scope:_** Function-scoped

#### 2. **_Hoisting:_** Hoisted to the top of its scop and initialized as undefined.

#### 3. **_Reassignment:_** Can be reassigned and re-declared in the same scope.

#### 4. **_Problem:_** Problematic because it can create bugs due to hoisting and re-declaration.

---

#### 2) Let

#### 1) **_Scope:_** Block-scoped

#### 2) **_Hoisting:_** Hoisted but not initialized(can’t use it before declaration)

#### 3) **_Reassignment:_** Can be reassigned, but not re-declared in the same scope.

---

#### 3) Const

#### 1. **_Scope:_** Block-scoped.

#### 2. **_Hoisting:_** Hoisted but not initialized.

#### 3. **_Reassignment:_** Cannot be reassigned.

#### 4. **_Re-declaration:_** Cannot be re-declared in the same scope.

#### 5. **_Problem:_** If the value is an object or array, the reference can’t change, but the contents can be modified.

---

#### 2) What is the difference between map(), forEach(), and filter()?

---

**_Answer_**

#### The difference between map(), forEach(), and filter().

---

### 1) forEach()

**_Used to loop through each element in an array and perform an action._**

#### 1. **_Return value:_** Always undefined.

#### 2. **_Use case:_** When you just want to run some code for each element.

---

### 2) map()

**_Creates a new array by applying a function to each element._**

#### 1. **_Return value:_** A new array.

#### 2. **_Use case:_** When you want to transform data.

---

### 2) filter()

**_Creates a new array with elements that pass a condition._**

#### 1. **_Return value:_** A new array.

#### 2. **_Use case:_** When you want to keep only some elements.

---

#### 3) What are arrow functions in ES6?

---

# JavaScript Arrow Functions (ES6)

Arrow functions (`=>`) were introduced in **ES6 (ECMAScript 2015)** to make writing functions shorter and cleaner.

---

## What are Arrow Functions?

An **arrow function** is a more compact way to write functions compared to the traditional `function` keyword.

### Example:

```js
function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
```

---

## Key Features of Arrow Functions

### 1. Shorter Syntax

```js
const square = (x) => x * x;
console.log(square(4)); // 16
```

---

### 2. Implicit Return

If you omit `{}`, the value is **returned automatically**.

```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Rifat"));
```

---

### 3. No `this` Binding

Arrow functions do **not** have their own `this`.  
They inherit `this` from the surrounding (lexical) scope.

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

new Person();
```

---

### 4. Cannot Be Used as Constructors

Arrow functions cannot be used with `new`.

```js
const User = (name) => {
  this.name = name;
};
```

---

## When to Use Arrow Functions

- For **short functions** and **callbacks** (`map`, `filter`, `forEach`).
- When you need to preserve the outer `this`.

---

## When NOT to Use Arrow Functions

- As **object methods** (because they don’t have their own `this`).
- As **constructors** with `new`.
- When you need the **`arguments` object** (arrow functions don’t have it).

---

## Summary

## Arrow functions = **shorter syntax + lexical `this`** = perfect for modern JavaScript.

#### 4) How does destructuring assignment work in ES6?

---

# JavaScript Destructuring Assignment (ES6)

**Destructuring assignment** is an ES6 feature that allows you to **unpack values** from arrays or properties from objects into separate variables in a clean and concise way.

---

## Array Destructuring

Extract values from an array into variables.

```js
const numbers = [10, 20, 30];

const a = numbers[0];
const b = numbers[1];

const [x, y, z] = numbers;

console.log(x);
console.log(y);
console.log(z);
```

### Skipping Values

```js
const [first, , third] = [1, 2, 3];
console.log(first);
console.log(third);
```

### Default Values

```js
const [p = 100, q = 200] = [10];
console.log(p);
console.log(q);
```

---

## Object Destructuring

Extract properties from objects into variables.

```js
const person = {
  name: "Rifat",
  age: 22,
  country: "Bangladesh",
};

const name1 = person.name;
const age1 = person.age;

const { name, age, country } = person;

console.log(name);
console.log(age);
console.log(country);
```

### Renaming Variables

```js
const { name: fullName, age: years } = person;
console.log(fullName);
console.log(years);
```

### Default Values

```js
const { city = "Dhaka" } = person;
console.log(city);
```

---

## Nested Destructuring

You can destructure inside nested objects/arrays.

```js
const user = {
  id: 1,
  profile: {
    username: "rifat123",
    info: {
      email: "rifat@mail.com",
    },
  },
};

const {
  profile: {
    username,
    info: { email },
  },
} = user;

console.log(username);
console.log(email);
```

---

## Function Parameter Destructuring

Destructuring works directly in function parameters.

```js
function display({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

display({ name: "Rifat", age: 22 });
```

---

## Summary

- **Array Destructuring:** Extract values by position.
- **Object Destructuring:** Extract values by property name.
- Supports **default values, renaming, and nesting**.
- Makes code **cleaner and more readable**.

#### 5) Explain template literals in ES6. How are they different from string concatenation?

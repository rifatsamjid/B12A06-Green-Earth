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

#### 1) Scope: Block-scoped

#### 2) Hoisting: Hoisted but not initialized(can’t use it before declaration)

#### 3) Reassignment: Can be reassigned, but not re-declared in the same scope.

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

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

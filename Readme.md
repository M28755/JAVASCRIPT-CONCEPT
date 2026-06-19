#  Tracking Progress in Learning JavaScript

## Topics Covered

- [x] 1. Array
- [ ] 2. Loops
- [ ] 3. Functions
- [ ] 4. Object
- [ ] 5. Prototypes
- [ ] 6. Classes
- [ ] 7. Map and Set
- [ ] 8. Error Handling
- [ ] 9. Date and Time
- [ ] 10. Regular Expressions
- [ ] 11. Destructuring and Spread/Rest Operators
- [ ] 12. ES6 Modules
- [ ] 13. Promises, Async/Await
- [ ] 14. Generators and Iterators
- [ ] 15. Proxies and Reflect
- [ ] 16. Symbols and Enums

---

## 1.  ARRAY

### Subtopics

1. Creating and Initializing Arrays
2. Accessing Elements
3. Array Properties
4. Array Methods
5. Array Iterators
6. Array Algorithms
7. Searching, Sorting, Splicing, Slicing, Mapping, Reducing, Filtering, Checking, Flattening, Filling, Copying

---

###  Files

| File | Description |
|------|-------------|
| [`CREAT-ARRAY.js`](./ARRAY/CREAT-ARRAY.js) | Demonstrates the two core ways to create arrays: Array Literal and Array Constructor |
| [`ARRAY-FROM.js`](./ARRAY/ARRAY-FROM.js) | Demonstrates `Array.from()` — converting strings, NodeLists, Sets, array-like objects, and using mapping functions |
| [`index.html`](./ARRAY/index.html) | Browser demo page: converts a DOM NodeList (`<ul>` list items) into an array and displays the result |

---

### 1.1 Creating and Initializing Arrays

####  Method 1 — Array Literal (`CREAT-ARRAY.js`)

The simplest and most common way to create arrays.

```js
const arr = []                                                          // Empty array
const arr2 = [1, 2, 3, 4, 5]                                           // Number array
const stringArr = ["a", "b", "c", "d", "e"]                           // String array
const mixedArr = [1, "a", true, null, undefined, function () { }, {}]  // Mixed types
```

####  Method 2 — Array Constructor (`CREAT-ARRAY.js`)

Using the built-in `Array` class to create arrays.

```js
const constructorArr  = new Array()           // Empty array
const constructorArr2 = new Array(5)          // Sparse array with length 5 (no values)
const constructorArr3 = new Array(1,2,3,4,5)  // Array with values [1, 2, 3, 4, 5]
```

>  `new Array(5)` creates an array of **length 5** with empty slots, NOT `[5]`.

---

### 1.2 `Array.from()` — ES6 (`ARRAY-FROM.js`)

`Array.from()` converts any **iterable** or **array-like** object into a real Array.

**Syntax:**
```js
Array.from(iterable, mapFn, thisArg)
```

| Argument | Required | Description |
|----------|----------|-------------|
| `iterable` / `arrayLike` |  Yes | The object to convert |
| `mapFn` |  Optional | A mapping function applied to each element |
| `thisArg` |  Optional | Value to use as `this` in the `mapFn` |

#### Examples from `ARRAY-FROM.js`

```js
// 1. From a string
const arr1 = Array.from('Jaguar')
// ['J', 'a', 'g', 'u', 'a', 'r']
console.log(arr1.join(''))   // 'Jaguar'

// 2. With a mapping function
const mapFnArr = Array.from([1, 2, 3, 4, 5], (x) => x * 2)
// [2, 4, 6, 8, 10]

// 3. From a Set (removes duplicates automatically)
const set = new Set(['a', 'b', 'c', 'd', 'e'])
const setArr = Array.from(set)
// ['a', 'b', 'c', 'd', 'e']

// 4. From an array-like object
const arrLike = { length: 5, 0: 10, 1: 20, 2: 30, 3: 40, 4: 50 }
const arrLikeArr = Array.from(arrLike)
// [10, 20, 30, 40, 50]

// 5. String + index tracking via mapFn
const stringAndLength = Array.from('Jaguar', (char, index) => `${char}-${index}`)
// ['J-0', 'a-1', 'g-2', 'u-3', 'a-4', 'r-5']
```

#### Common Use Cases

| Use Case | Code | Result |
|----------|------|--------|
| String → Array | `Array.from('hello')` | `['h','e','l','l','o']` |
| With map function | `Array.from([1,2,3], x => x * 2)` | `[2,4,6]` |
| Sparse array | `Array.from({length: 5})` | `[undefined, undefined, ...]` |
| Range generator | `Array.from({length: 3}, (_, i) => i)` | `[0,1,2]` |

---

### 1.3 Browser Demo — Converting NodeList to Array (`index.html`)

The [`index.html`](./ARRAY/index.html) file demonstrates converting a DOM `NodeList` into an array using `Array.from()`.

**HTML structure:**
```html
<ul id="myList">
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
  <li>Pineapple</li>
  <li>Grapes</li>
</ul>
<div><p id="demo"></p></div>
```

**JS logic (`ARRAY-FROM.js`):**
```js
const NodeList = document.querySelectorAll('#myList li')

document.getElementById('demo').innerHTML = Array.from(NodeList, (li) => {
    return li.innerText
})
// Converts the NodeList into ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes']
// and renders it inside #demo
```

>  `querySelectorAll()` returns a **NodeList**, not a true Array. `Array.from()` converts it so you can use `.map()`, `.filter()`, `.reduce()`, etc.





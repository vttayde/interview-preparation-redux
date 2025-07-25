// =============================================================================
// JAVASCRIPT PAGE CONSTANTS
// =============================================================================

export const JAVASCRIPT_TABS = [
    { id: 'basics', name: 'JS Fundamentals', icon: '🔥' },
    { id: 'advanced', name: 'Advanced Topics', icon: '🚀' },
    { id: 'async', name: 'Async Programming', icon: '⏰' },
    { id: 'examples', name: 'Code Examples', icon: '💻' },
    { id: 'methods', name: 'Array Methods', icon: '📚' },
    { id: 'interview', name: 'Interview Q&A', icon: '❓' }
];

export const JAVASCRIPT_UI_TEXT = {
    title: "JavaScript Mastery Guide",
    description: "Master JavaScript fundamentals, advanced concepts, and modern best practices with comprehensive examples and explanations."
};

export const JAVASCRIPT_CONTENT = {
    basics: [
        {
            id: 1,
            title: "📦 Variables & Data Types",
            description: "JavaScript has dynamic typing, meaning variables can hold different types of values. ES6 introduced let and const with block scoping.",
            color: "blue",
            code: `// Variable declarations
let name = 'John';        // String
const age = 25;           // Number
var isActive = true;      // Boolean
let items = [1, 2, 3];    // Array
let user = { id: 1 };     // Object

// Dynamic typing
let data = 'hello';
data = 42;                // Valid in JavaScript

// Primitive types
let str = "Hello";           // string
let num = 42;                // number
let bool = true;             // boolean
let undef = undefined;       // undefined
let empty = null;            // null
let sym = Symbol('id');      // symbol
let big = 123n;              // bigint

// Non-primitive type
let obj = { name: "John" };  // object
let arr = [1, 2, 3];         // array (type of object)
let func = function() {};    // function (type of object)`
        },
        {
            id: 2,
            title: "⚡ Functions",
            description: "Functions are first-class objects in JavaScript. They can be assigned to variables, passed as arguments, and returned from other functions.",
            color: "green",
            code: `// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function
const add = (a, b) => a + b;

// Higher-order function
function createMultiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log('This runs immediately!');
})();

// Function with default parameters
function greetWithDefault(name = 'World') {
  return \`Hello, \${name}!\`;
}`
        },
        {
            id: 3,
            title: "🔍 Scope & Hoisting",
            description: "Scope determines variable accessibility. Hoisting moves declarations to the top of their scope during compilation.",
            color: "yellow",
            code: `// Function scope (var)
function example() {
  if (true) {
    var x = 1;  // Function scoped
  }
  console.log(x); // 1 - accessible
}

// Block scope (let/const)
function example2() {
  if (true) {
    let y = 1;    // Block scoped
    const z = 2;  // Block scoped
  }
  // console.log(y); // ReferenceError
}

// Hoisting
console.log(hoisted); // undefined (not error)
var hoisted = 'value';

// This code:
console.log(x); // undefined (not error)
var x = 5;

// Is interpreted as:
var x;
console.log(x); // undefined
x = 5;

// let and const have temporal dead zone
console.log(y); // ReferenceError
let y = 10;`
        },
        {
            id: 4,
            title: "🧬 Closures",
            description: "A closure gives you access to an outer function's scope from an inner function. Closures are created every time a function is created.",
            color: "purple",
            code: `function outerFunction(x) {
  // This is the outer function's scope
  
  function innerFunction(y) {
    // Inner function has access to x
    console.log(x + y);
  }
  
  return innerFunction;
}

const myFunction = outerFunction(10);
myFunction(5); // Prints 15

// Practical closure example
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Module pattern using closure
const module = (function() {
  let privateVar = 0;
  
  return {
    increment: function() {
      privateVar++;
    },
    getCount: function() {
      return privateVar;
    }
  };
})();`
        }
    ],
    advanced: [
        {
            id: 5,
            title: "🔗 Prototypal Inheritance",
            description: "JavaScript uses prototype-based inheritance. Every object has a prototype, and objects inherit properties and methods from their prototype.",
            color: "blue",
            code: `// Constructor function
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

// ES6 Class syntax
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  speak() {
    return \`\${this.name} barks\`;
  }
}

// Creating instances
const person = new Person('Alice');
const dog = new Dog('Rex');

console.log(person.greet()); // "Hello, I'm Alice"
console.log(dog.speak());    // "Rex barks"

// Prototype chain
console.log(dog.__proto__ === Dog.prototype); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true`
        },
        {
            id: 6,
            title: "🎯 this Keyword",
            description: "The value of 'this' depends on how a function is called. It can be: global object, undefined (strict mode), the object (method call), or explicitly set.",
            color: "green",
            code: `const obj = {
  name: 'Alice',
  greet: function() {
    console.log(this.name); // 'Alice'
  },
  
  arrowGreet: () => {
    console.log(this.name); // undefined (arrow functions don't bind this)
  }
};

// Explicit binding
const person = { name: 'Bob' };
obj.greet.call(person); // 'Bob'
obj.greet.apply(person); // 'Bob'
const boundGreet = obj.greet.bind(person);
boundGreet(); // 'Bob'

// this in different contexts
function regularFunction() {
  console.log(this); // Window object (or undefined in strict mode)
}

const arrowFunction = () => {
  console.log(this); // Inherits this from enclosing scope
};

// Method shorthand
const myObj = {
  name: 'Charlie',
  getName() {
    return this.name; // 'Charlie'
  }
};`
        },
        {
            id: 7,
            title: "🔄 Event Loop",
            description: "JavaScript's concurrency model is based on an event loop. It handles asynchronous operations through the call stack, callback queue, and microtask queue.",
            color: "yellow",
            code: `console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2
// Microtasks (Promises) have higher priority than macrotasks (setTimeout)

// More complex example
console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  return Promise.resolve();
}).then(() => console.log('Promise 2'));

console.log('End');

// Output: Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2`
        },
        {
            id: 8,
            title: "🎭 Currying & Partial Application",
            description: "Currying transforms a function with multiple arguments into a sequence of functions with single arguments. Partial application fixes some arguments.",
            color: "purple",
            code: `// Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6

// Partial application
const addTen = curriedAdd(10);
console.log(addTen(5, 3)); // 18

// Practical currying example
const multiply = (a) => (b) => a * b;
const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12`
        }
    ],
    async: [
        {
            id: 9,
            title: "📞 Callbacks",
            description: "Callbacks are functions passed as arguments to other functions. They're the foundation of asynchronous JavaScript but can lead to \"callback hell.\"",
            color: "red",
            code: `// Simple callback
function fetchData(callback) {
  setTimeout(() => {
    callback(null, 'Data received');
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

// Callback hell example
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        // This nesting can get very deep...
        console.log('Finally got all data!');
      });
    });
  });
});

// Error handling with callbacks
function asyncOperation(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      callback(null, 'Success!');
    } else {
      callback(new Error('Operation failed'));
    }
  }, 1000);
}`
        },
        {
            id: 10,
            title: "🤝 Promises",
            description: "Promises represent eventual completion or failure of an asynchronous operation. They provide better error handling and avoid callback hell.",
            color: "blue",
            code: `// Creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
};

// Using promises
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Operation completed'));

// Promise chaining
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x * 2)
  .then(x => console.log(x)) // 4

// Promise.all - wait for all promises
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 1000));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values)); // [3, "foo", 42]

// Promise.race - first one wins
Promise.race([
  new Promise(resolve => setTimeout(() => resolve('slow'), 1000)),
  new Promise(resolve => setTimeout(() => resolve('fast'), 500))
]).then(value => console.log(value)); // "fast"`
        },
        {
            id: 11,
            title: "🎯 Async/Await",
            description: "Async/await provides a more readable way to work with promises, making asynchronous code look and feel more like synchronous code.",
            color: "green",
            code: `// Basic async/await
async function fetchUserData() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Using the async function
fetchUserData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Multiple async operations
async function processData() {
  try {
    const user = await fetchUser();
    const posts = await fetchUserPosts(user.id);
    const comments = await fetchPostComments(posts[0].id);
    
    return { user, posts, comments };
  } catch (error) {
    console.error('Error processing data:', error);
  }
}

// Parallel execution with async/await
async function fetchAllData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}`
        },
        {
            id: 12,
            title: "🔄 Generators & Async Generators",
            description: "Generators are functions that can be exited and later re-entered. They're useful for creating iterators and handling asynchronous flows.",
            color: "purple",
            code: `// Basic generator
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: true }

// Infinite generator
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1

// Async generator
async function* asyncDataGenerator() {
  for (let i = 0; i < 5; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield \`Data chunk \${i}\`;
  }
}

// Using async generator
(async () => {
  for await (const chunk of asyncDataGenerator()) {
    console.log(chunk);
  }
})();`
        }
    ],
    examples: [
        {
            id: 13,
            title: "🏗️ Design Patterns",
            description: "Common JavaScript design patterns that help structure and organize code effectively.",
            color: "blue",
            code: `// Singleton Pattern
const Singleton = (function() {
  let instance;
  
  function createInstance() {
    return {
      name: 'I am the instance',
      getName: function() {
        return this.name;
      }
    };
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Observer Pattern
class Observable {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

// Factory Pattern
class CarFactory {
  static createCar(type) {
    switch (type) {
      case 'sedan':
        return new Sedan();
      case 'suv':
        return new SUV();
      default:
        throw new Error('Unknown car type');
    }
  }
}`
        },
        {
            id: 14,
            title: "🔧 Utility Functions",
            description: "Useful utility functions that are commonly needed in JavaScript applications.",
            color: "green",
            code: `// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Deep clone function
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
}

// Flatten array
function flattenArray(arr) {
  return arr.reduce((flat, item) => 
    flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}`
        },
        {
            id: 15,
            title: "🎨 DOM Manipulation",
            description: "Common DOM manipulation patterns and best practices for modern JavaScript.",
            color: "yellow",
            code: `// Modern DOM selection
const element = document.querySelector('.my-class');
const elements = document.querySelectorAll('.items');

// Creating elements
function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

// Event delegation
document.addEventListener('click', function(e) {
  if (e.target.matches('.button')) {
    console.log('Button clicked!');
  }
});

// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});

// Custom event handling
function createCustomEvent(name, detail) {
  return new CustomEvent(name, { 
    detail, 
    bubbles: true, 
    cancelable: true 
  });
}

element.addEventListener('custom-event', (e) => {
  console.log('Custom event fired:', e.detail);
});

element.dispatchEvent(createCustomEvent('custom-event', { data: 'Hello!' }));`
        },
        {
            id: 16,
            title: "📊 Data Structures",
            description: "Implementing common data structures in JavaScript for better algorithmic thinking.",
            color: "purple",
            code: `// Stack implementation
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(item) {
    this.items.push(item);
  }
  
  pop() {
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}

// Queue implementation
class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(item) {
    this.items.push(item);
  }
  
  dequeue() {
    return this.items.shift();
  }
  
  front() {
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}

// Linked List implementation
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  append(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  
  prepend(val) {
    const newNode = new ListNode(val, this.head);
    this.head = newNode;
    this.size++;
  }
}`
        }
    ],
    methods: [
        {
            id: 17,
            title: "🔄 Array Methods - Transformation",
            description: "Essential array methods for transforming and manipulating data.",
            color: "blue",
            code: `const numbers = [1, 2, 3, 4, 5];
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// map() - transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// filter() - select elements that match condition
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4]

const adults = users.filter(user => user.age >= 30);
console.log(adults); // [{ id: 2, name: 'Bob', age: 30 }, { id: 3, name: 'Charlie', age: 35 }]

// reduce() - accumulate values
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

const usersByAge = users.reduce((acc, user) => {
  acc[user.age] = user;
  return acc;
}, {});

// flatMap() - map and flatten
const sentences = ['Hello world', 'How are you'];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words); // ['Hello', 'world', 'How', 'are', 'you']`
        },
        {
            id: 18,
            title: "🔍 Array Methods - Search & Test",
            description: "Array methods for finding and testing elements.",
            color: "green",
            code: `const numbers = [1, 2, 3, 4, 5];
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];

// find() - get first matching element
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 2

const alice = users.find(user => user.name === 'Alice');
console.log(alice); // { id: 1, name: 'Alice', active: true }

// findIndex() - get index of first matching element
const firstEvenIndex = numbers.findIndex(n => n % 2 === 0);
console.log(firstEvenIndex); // 1

// some() - test if any element matches
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

const hasInactiveUser = users.some(user => !user.active);
console.log(hasInactiveUser); // true

// every() - test if all elements match
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

const allActive = users.every(user => user.active);
console.log(allActive); // false

// includes() - check if value exists
const hasThree = numbers.includes(3);
console.log(hasThree); // true

// indexOf() & lastIndexOf()
const arr = [1, 2, 3, 2, 4];
console.log(arr.indexOf(2));     // 1
console.log(arr.lastIndexOf(2)); // 3`
        },
        {
            id: 19,
            title: "🔧 Array Methods - Modification",
            description: "Array methods for adding, removing, and modifying elements.",
            color: "yellow",
            code: `let fruits = ['apple', 'banana'];

// push() & pop() - end operations
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

const lastFruit = fruits.pop();
console.log(lastFruit); // 'orange'
console.log(fruits); // ['apple', 'banana']

// unshift() & shift() - beginning operations
fruits.unshift('grape');
console.log(fruits); // ['grape', 'apple', 'banana']

const firstFruit = fruits.shift();
console.log(firstFruit); // 'grape'
console.log(fruits); // ['apple', 'banana']

// splice() - add/remove at any position
const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(2, 1, 'three'); // remove 1 at index 2, add 'three'
console.log(removed); // [3]
console.log(numbers); // [1, 2, 'three', 4, 5]

// slice() - extract portion (non-mutating)
const arr = [1, 2, 3, 4, 5];
const portion = arr.slice(1, 4);
console.log(portion); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] (unchanged)

// concat() - join arrays (non-mutating)
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

// spread operator alternative
const spreadCombined = [...arr1, ...arr2];
console.log(spreadCombined); // [1, 2, 3, 4]`
        },
        {
            id: 20,
            title: "📋 Array Methods - Utility",
            description: "Utility array methods for sorting, reversing, and joining.",
            color: "purple",
            code: `// sort() - sort elements
const numbers = [3, 1, 4, 1, 5, 9];
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(sortedNumbers); // [1, 1, 3, 4, 5, 9]

const users = [
  { name: 'Charlie', age: 35 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log(sortedByAge); // sorted by age ascending

const sortedByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName); // sorted alphabetically

// reverse() - reverse array order
const letters = ['a', 'b', 'c'];
const reversed = [...letters].reverse();
console.log(reversed); // ['c', 'b', 'a']

// join() - convert to string
const words = ['Hello', 'world', 'from', 'JavaScript'];
const sentence = words.join(' ');
console.log(sentence); // 'Hello world from JavaScript'

const csvData = ['John', '25', 'Engineer'];
const csvLine = csvData.join(',');
console.log(csvLine); // 'John,25,Engineer'

// Array.from() - create array from iterable
const str = 'hello';
const chars = Array.from(str);
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range); // [1, 2, 3, 4, 5]

// Array.isArray() - check if value is array
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('hello'));   // false`
        }
    ],
    interview: [
        {
            id: 21,
            title: "❓ Core JavaScript Interview Questions",
            description: "Fundamental JavaScript concepts commonly asked in technical interviews.",
            color: "blue",
            code: `// Q: What is the difference between let, const, and var?
// A: Scope, hoisting, and reassignment differences

// var - function scoped, hoisted, can be reassigned
function varExample() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 - accessible outside block
}

// let - block scoped, temporal dead zone, can be reassigned
function letExample() {
  if (true) {
    let y = 1;
  }
  // console.log(y); // ReferenceError - not accessible outside block
}

// const - block scoped, temporal dead zone, cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // TypeError - cannot reassign

// Q: Explain event bubbling and capturing
// A: Event propagation phases in DOM

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
}, false); // bubbling phase (default)

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
}, true); // capturing phase

// Q: What is the difference between == and ===?
console.log(5 == '5');  // true (type coercion)
console.log(5 === '5'); // false (strict equality)
console.log(null == undefined);  // true
console.log(null === undefined); // false`
        },
        {
            id: 22,
            title: "🔄 Async/Promise Interview Questions",
            description: "Common questions about asynchronous JavaScript and promises.",
            color: "green",
            code: `// Q: What's the difference between Promise.all and Promise.allSettled?
const promise1 = Promise.resolve('Success 1');
const promise2 = Promise.reject('Error 2');
const promise3 = Promise.resolve('Success 3');

// Promise.all - fails fast if any promise rejects
Promise.all([promise1, promise2, promise3])
  .then(results => console.log('All resolved:', results))
  .catch(error => console.log('One failed:', error)); // "One failed: Error 2"

// Promise.allSettled - waits for all promises to settle
Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log('All settled:', results));
  // Results: [
  //   { status: 'fulfilled', value: 'Success 1' },
  //   { status: 'rejected', reason: 'Error 2' },
  //   { status: 'fulfilled', value: 'Success 3' }
  // ]

// Q: Explain the difference between setTimeout and setImmediate
console.log('1');
setTimeout(() => console.log('2'), 0);
setImmediate(() => console.log('3'));
console.log('4');
// Output order can vary: 1, 4, then 2 and 3 (order of 2,3 depends on environment)

// Q: How to handle multiple async operations?
async function handleMultipleAsync() {
  // Sequential (slower)
  const result1 = await fetchData1();
  const result2 = await fetchData2();
  
  // Parallel (faster)
  const [result3, result4] = await Promise.all([
    fetchData1(),
    fetchData2()
  ]);
}`
        },
        {
            id: 23,
            title: "🧠 Advanced Concepts Interview Questions",
            description: "Complex JavaScript concepts that demonstrate deep understanding.",
            color: "yellow",
            code: `// Q: Implement a function that can be called like add(2)(3)(4)()
function add(x) {
  let sum = x;
  
  function innerAdd(y) {
    if (y === undefined) {
      return sum;
    }
    sum += y;
    return innerAdd;
  }
  
  return innerAdd;
}

console.log(add(2)(3)(4)()); // 9

// Q: What is a memory leak and how to prevent it?
// A: Common memory leak scenarios

// 1. Forgot to remove event listeners
function attachListener() {
  const element = document.getElementById('button');
  element.addEventListener('click', handleClick);
  
  // Fix: Remove listener when done
  // element.removeEventListener('click', handleClick);
}

// 2. Closures holding references
function createHandler() {
  const largeData = new Array(1000000).fill('data');
  
  return function(event) {
    // This closure keeps largeData in memory
    console.log('Event handled');
  };
}

// 3. Circular references
function circularReference() {
  const obj1 = {};
  const obj2 = {};
  obj1.ref = obj2;
  obj2.ref = obj1; // Creates circular reference
}

// Q: Implement debounce from scratch
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);`
        },
        {
            id: 24,
            title: "🔧 Problem-Solving Interview Questions",
            description: "Algorithm and problem-solving questions using JavaScript.",
            color: "purple",
            code: `// Q: Implement a function to flatten a nested array
function flattenArray(arr) {
  const result = [];
  
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]

// Q: Find the first non-repeating character in a string
function firstNonRepeating(str) {
  const charCount = {};
  
  // Count occurrences
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find first non-repeating
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null;
}

console.log(firstNonRepeating('abccba')); // null
console.log(firstNonRepeating('abccbad')); // 'd'

// Q: Implement a simple cache with TTL (Time To Live)
class Cache {
  constructor() {
    this.cache = new Map();
  }
  
  set(key, value, ttl = 60000) { // default 1 minute
    const expiry = Date.now() + ttl;
    this.cache.set(key, { value, expiry });
  }
  
  get(key) {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }
  
  clear() {
    this.cache.clear();
  }
}`
        }
    ],
    default: [
        {
            id: 1,
            title: "🚀 Welcome to JavaScript Mastery",
            description: "JavaScript is the language of the web. Master its fundamentals, advanced concepts, and modern patterns.",
            color: "blue",
            code: `// Welcome to JavaScript!
console.log('Hello, JavaScript World!');

// Start with basics and work your way up
const greeting = 'Welcome to your JavaScript journey!';
console.log(greeting);

// JavaScript is everywhere:
// - Frontend (React, Vue, Angular)
// - Backend (Node.js)
// - Mobile (React Native)
// - Desktop (Electron)
// - And much more!`
        }
    ]
};

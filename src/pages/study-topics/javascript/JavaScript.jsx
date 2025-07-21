import { useState } from 'react';
import TopicsNavigation from '../../../components/layout/TopicsNavigation';

const JavaScript = () => {
    const [activeTab, setActiveTab] = useState('basics');

    const tabs = [
        { id: 'basics', name: 'JS Fundamentals', icon: '🔥' },
        { id: 'advanced', name: 'Advanced Topics', icon: '🚀' },
        { id: 'async', name: 'Async Programming', icon: '⏰' },
        { id: 'examples', name: 'Code Examples', icon: '💻' },
        { id: 'methods', name: 'Array Methods', icon: '📚' },
        { id: 'interview', name: 'Interview Q&A', icon: '❓' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'basics':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is JavaScript?</h2>
                            <p className="text-gray-600 mb-4">
                                JavaScript is a high-level, interpreted programming language that enables interactive web pages.
                                It's a dynamic, weakly typed language that supports object-oriented, imperative, and functional programming styles.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">📦 Variables & Data Types</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        JavaScript has dynamic typing, meaning variables can hold different types of values. ES6 introduced let and const with block scoping.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`// Variable declarations
let name = 'John';        // String
const age = 25;           // Number
var isActive = true;      // Boolean
let items = [1, 2, 3];    // Array
let user = { id: 1 };     // Object

// Dynamic typing
let data = 'hello';
data = 42;                // Valid in JavaScript`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">⚡ Functions</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Functions are first-class objects in JavaScript. They can be assigned to variables, passed as arguments, and returned from other functions.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`// Function declaration
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
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-3 text-lg">🔍 Scope & Hoisting</h4>
                                    <p className="text-yellow-700 text-sm mb-3">
                                        Scope determines variable accessibility. Hoisting moves declarations to the top of their scope during compilation.
                                    </p>
                                    <div className="bg-yellow-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-yellow-800">
                                            {`// Function scope (var)
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
var hoisted = 'value';`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">🧬 Closures</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        A closure gives you access to an outer function's scope from an inner function. Closures are created every time a function is created.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`function outerFunction(x) {
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
console.log(counter()); // 2`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Practices</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-2">✅ Do</h4>
                                    <ul className="text-green-700 text-sm space-y-1">
                                        <li>Use const for constants, let for variables</li>
                                        <li>Use === for equality comparisons</li>
                                        <li>Write descriptive variable names</li>
                                        <li>Use arrow functions for callbacks</li>
                                        <li>Handle errors with try/catch</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-800 mb-2">❌ Avoid</h4>
                                    <ul className="text-red-700 text-sm space-y-1">
                                        <li>Using var in modern JavaScript</li>
                                        <li>Implicit type coercion with ==</li>
                                        <li>Global variables</li>
                                        <li>Mutating function parameters</li>
                                        <li>Ignoring error handling</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'advanced':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advanced JavaScript Topics</h2>
                            <p className="text-gray-600 mb-4">
                                Deep dive into advanced JavaScript concepts that every developer should master.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Concepts</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🔗 Prototypal Inheritance</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        JavaScript uses prototype-based inheritance. Every object has a prototype, and objects inherit properties and methods from their prototype.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`// Constructor function
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
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🎯 this Keyword</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        The value of 'this' depends on how a function is called. It can be: global object, undefined (strict mode), the object (method call), or explicitly set.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`const obj = {
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
boundGreet(); // 'Bob'`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-yellow-500 pl-6 bg-yellow-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🔄 Event Loop</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        JavaScript's concurrency model is based on an event loop. It handles asynchronous operations through the call stack, callback queue, and microtask queue.
                                    </p>
                                    <div className="bg-yellow-100 p-3 rounded text-xs">
                                        <strong>Execution Order:</strong>
                                        <pre className="mt-2 text-yellow-800">
                                            {`console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2
// Microtasks (Promises) have higher priority than macrotasks (setTimeout)`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🎭 Currying & Partial Application</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Currying transforms a function with multiple arguments into a sequence of functions with single arguments. Partial application fixes some arguments.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`// Currying
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
console.log(addTen(5, 3)); // 18`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'async':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Asynchronous Programming</h2>
                            <p className="text-gray-600 mb-4">
                                Master JavaScript's asynchronous patterns: callbacks, promises, and async/await.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Async Patterns</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-red-500 pl-6 bg-red-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">📞 Callbacks</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Callbacks are functions passed as arguments to other functions. They're the foundation of asynchronous JavaScript but can lead to "callback hell."
                                    </p>
                                    <div className="bg-red-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-red-800">
                                            {`// Simple callback
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
      // This nesting can get very deep...
    });
  });
});`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🤝 Promises</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Promises represent eventual completion or failure of an asynchronous operation. They provide better error handling and avoid callback hell.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`// Creating a promise
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
  .then(x => console.log(x)); // 4`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">⏰ Async/Await</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Async/await is syntactic sugar over promises, making asynchronous code look and behave more like synchronous code.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`// Async function
async function fetchUserData(userId) {
  try {
    const user = await fetch(\`/api/users/\${userId}\`);
    const userData = await user.json();
    
    const posts = await fetch(\`/api/posts?userId=\${userId}\`);
    const userPosts = await posts.json();
    
    return { userData, userPosts };
  } catch (error) {
    throw new Error(\`Failed to fetch user data: \${error.message}\`);
  }
}

// Using async function
(async () => {
  try {
    const data = await fetchUserData(123);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();

// Parallel execution
async function fetchMultipleUsers() {
  const [user1, user2, user3] = await Promise.all([
    fetchUserData(1),
    fetchUserData(2),
    fetchUserData(3)
  ]);
  
  return [user1, user2, user3];
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'examples':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Practical Code Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">ES6+ Features</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`// Destructuring
const user = { name: 'John', age: 30, city: 'NYC' };
const { name, age, city = 'Unknown' } = user;

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };

// Template literals
const greeting = \`Hello \${name}, you are \${age} years old!\`;

// Arrow functions
const multiply = (a, b) => a * b;
const square = x => x * x;
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Advanced Array Operations</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true }
];

// Complex filtering and mapping
const activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name);

// Reduce for complex operations
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

const usersByAge = users.reduce((acc, user) => {
  const ageGroup = user.age < 30 ? 'young' : 'old';
  acc[ageGroup] = acc[ageGroup] || [];
  acc[ageGroup].push(user);
  return acc;
}, {});

// Find and some/every
const oldestUser = users.reduce((oldest, current) => 
  current.age > oldest.age ? current : oldest
);

const hasActiveUsers = users.some(user => user.active);
const allUsersActive = users.every(user => user.active);`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Error Handling Patterns</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`// Traditional try/catch
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Invalid JSON:', error.message);
    return null;
  }
}

// Async error handling
async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      return await response.json();
    } catch (error) {
      if (i === maxRetries) {
        throw new Error(\`Failed after \${maxRetries} retries: \${error.message}\`);
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * i));
    }
  }
}

// Custom error classes
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function validateUser(user) {
  if (!user.email) {
    throw new ValidationError('Email is required', 'email');
  }
  if (!user.name) {
    throw new ValidationError('Name is required', 'name');
  }
}`}
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'methods':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Array Methods Mastery</h2>
                            <p className="text-gray-600 mb-4">
                                Complete guide to JavaScript array methods with practical examples.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Array Methods</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">🔄 Iteration Methods</h4>
                                    <div className="space-y-4">
                                        <div className="bg-blue-100 p-3 rounded">
                                            <strong className="text-blue-800">forEach() - Execute function for each element</strong>
                                            <pre className="mt-2 text-blue-700 text-xs">
                                                {`const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});`}
                                            </pre>
                                        </div>
                                        <div className="bg-blue-100 p-3 rounded">
                                            <strong className="text-blue-800">map() - Create new array with transformed elements</strong>
                                            <pre className="mt-2 text-blue-700 text-xs">
                                                {`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

const users = [{name: 'Alice'}, {name: 'Bob'}];
const names = users.map(user => user.name);`}
                                            </pre>
                                        </div>
                                        <div className="bg-blue-100 p-3 rounded">
                                            <strong className="text-blue-800">filter() - Create new array with filtered elements</strong>
                                            <pre className="mt-2 text-blue-700 text-xs">
                                                {`const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4, 6]

const products = [{price: 10}, {price: 25}, {price: 5}];
const expensive = products.filter(p => p.price > 15);`}
                                            </pre>
                                        </div>
                                        <div className="bg-blue-100 p-3 rounded">
                                            <strong className="text-blue-800">reduce() - Reduce array to single value</strong>
                                            <pre className="mt-2 text-blue-700 text-xs">
                                                {`const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// 15

const items = ['apple', 'banana', 'apple', 'orange'];
const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">🔍 Search Methods</h4>
                                    <div className="space-y-4">
                                        <div className="bg-green-100 p-3 rounded">
                                            <strong className="text-green-800">find() - Find first matching element</strong>
                                            <pre className="mt-2 text-green-700 text-xs">
                                                {`const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
const user = users.find(u => u.id === 2);
// {id: 2, name: 'Bob'}

const numbers = [1, 3, 5, 8, 9];
const firstEven = numbers.find(n => n % 2 === 0);`}
                                            </pre>
                                        </div>
                                        <div className="bg-green-100 p-3 rounded">
                                            <strong className="text-green-800">findIndex() - Find index of first match</strong>
                                            <pre className="mt-2 text-green-700 text-xs">
                                                {`const numbers = [1, 3, 5, 8, 9];
const evenIndex = numbers.findIndex(n => n % 2 === 0);
// 3

const users = [{name: 'Alice'}, {name: 'Bob'}];
const bobIndex = users.findIndex(u => u.name === 'Bob');`}
                                            </pre>
                                        </div>
                                        <div className="bg-green-100 p-3 rounded">
                                            <strong className="text-green-800">includes() - Check if element exists</strong>
                                            <pre className="mt-2 text-green-700 text-xs">
                                                {`const fruits = ['apple', 'banana', 'orange'];
const hasApple = fruits.includes('apple'); // true
const hasGrape = fruits.includes('grape'); // false

const numbers = [1, 2, 3, 4, 5];
const hasThree = numbers.includes(3);`}
                                            </pre>
                                        </div>
                                        <div className="bg-green-100 p-3 rounded">
                                            <strong className="text-green-800">some() & every() - Test elements</strong>
                                            <pre className="mt-2 text-green-700 text-xs">
                                                {`const numbers = [2, 4, 6, 8];
const allEven = numbers.every(n => n % 2 === 0); // true
const hasEven = numbers.some(n => n % 2 === 0);  // true

const ages = [18, 21, 25, 17];
const allAdults = ages.every(age => age >= 18); // false
const hasAdult = ages.some(age => age >= 18);   // true`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-3 text-lg">🔧 Utility Methods</h4>
                                    <div className="space-y-4">
                                        <div className="bg-yellow-100 p-3 rounded">
                                            <strong className="text-yellow-800">sort() - Sort elements</strong>
                                            <pre className="mt-2 text-yellow-700 text-xs">
                                                {`const numbers = [3, 1, 4, 1, 5];
numbers.sort((a, b) => a - b); // [1, 1, 3, 4, 5]

const users = [{name: 'Charlie'}, {name: 'Alice'}, {name: 'Bob'}];
users.sort((a, b) => a.name.localeCompare(b.name));`}
                                            </pre>
                                        </div>
                                        <div className="bg-yellow-100 p-3 rounded">
                                            <strong className="text-yellow-800">slice() & splice() - Extract/modify</strong>
                                            <pre className="mt-2 text-yellow-700 text-xs">
                                                {`const arr = [1, 2, 3, 4, 5];

// slice (non-mutating)
const portion = arr.slice(1, 3); // [2, 3]

// splice (mutating)
const removed = arr.splice(1, 2, 'a', 'b');
// arr is now [1, 'a', 'b', 4, 5]
// removed is [2, 3]`}
                                            </pre>
                                        </div>
                                        <div className="bg-yellow-100 p-3 rounded">
                                            <strong className="text-yellow-800">join() & split() - String conversion</strong>
                                            <pre className="mt-2 text-yellow-700 text-xs">
                                                {`const words = ['Hello', 'World', 'JavaScript'];
const sentence = words.join(' '); // "Hello World JavaScript"

const csv = ['apple', 'banana', 'orange'];
const csvString = csv.join(','); // "apple,banana,orange"`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'interview':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">JavaScript Interview Questions</h2>
                            <div className="space-y-4">
                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🔍 What is the difference between let, const, and var?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-red-50 p-3 rounded">
                                                <p className="text-red-800 font-medium text-sm mb-2">var</p>
                                                <ul className="text-red-700 text-xs space-y-1 list-disc list-inside">
                                                    <li>Function-scoped</li>
                                                    <li>Hoisted (undefined)</li>
                                                    <li>Can be redeclared</li>
                                                    <li>Can be updated</li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-50 p-3 rounded">
                                                <p className="text-blue-800 font-medium text-sm mb-2">let</p>
                                                <ul className="text-blue-700 text-xs space-y-1 list-disc list-inside">
                                                    <li>Block-scoped</li>
                                                    <li>Temporal dead zone</li>
                                                    <li>Cannot be redeclared</li>
                                                    <li>Can be updated</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded">
                                                <p className="text-green-800 font-medium text-sm mb-2">const</p>
                                                <ul className="text-green-700 text-xs space-y-1 list-disc list-inside">
                                                    <li>Block-scoped</li>
                                                    <li>Temporal dead zone</li>
                                                    <li>Cannot be redeclared</li>
                                                    <li>Cannot be updated</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🧬 Explain closures with practical examples
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            <strong>Definition:</strong> A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.
                                        </p>
                                        <div className="bg-purple-50 p-3 rounded">
                                            <p className="text-purple-800 text-xs font-medium mb-1">Practical Example - Counter:</p>
                                            <pre className="text-purple-700 text-xs">
                                                {`function createCounter() {
  let count = 0;  // Private variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// count is still private!`}
                                            </pre>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            <strong>Use cases:</strong> Data privacy, function factories, module patterns, event handlers.
                                        </p>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🔄 What is the event loop and how does it work?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            <strong>Event Loop:</strong> JavaScript's concurrency model that handles asynchronous operations in a single-threaded environment.
                                        </p>
                                        <div className="bg-yellow-50 p-3 rounded">
                                            <p className="text-yellow-800 font-medium text-sm mb-2">How it works:</p>
                                            <ol className="text-yellow-700 text-sm space-y-1 list-decimal list-inside">
                                                <li>Execute synchronous code in call stack</li>
                                                <li>Move async operations to Web APIs</li>
                                                <li>Completed async operations go to callback queue</li>
                                                <li>Event loop moves callbacks to call stack when empty</li>
                                                <li>Microtasks (Promises) have higher priority than macrotasks</li>
                                            </ol>
                                        </div>
                                        <div className="bg-gray-100 p-3 rounded">
                                            <pre className="text-gray-700 text-xs">
                                                {`console.log('1');               // Call stack
setTimeout(() => console.log('2'), 0); // Macrotask queue
Promise.resolve().then(() => console.log('3')); // Microtask queue
console.log('4');               // Call stack

// Output: 1, 4, 3, 2`}
                                            </pre>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🎯 Explain 'this' keyword in different contexts
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            The value of 'this' depends on how a function is called, not where it's defined.
                                        </p>
                                        <div className="space-y-3">
                                            <div className="bg-blue-50 p-3 rounded">
                                                <p className="text-blue-800 font-medium text-sm">Global Context:</p>
                                                <code className="text-blue-700 text-xs">this === window (browser) or global (Node.js)</code>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded">
                                                <p className="text-green-800 font-medium text-sm">Object Method:</p>
                                                <pre className="text-green-700 text-xs">{`const obj = {
  name: 'Alice',
  greet() { return this.name; } // 'this' is obj
};`}</pre>
                                            </div>
                                            <div className="bg-yellow-50 p-3 rounded">
                                                <p className="text-yellow-800 font-medium text-sm">Arrow Functions:</p>
                                                <code className="text-yellow-700 text-xs">// Inherit 'this' from enclosing scope</code>
                                            </div>
                                            <div className="bg-purple-50 p-3 rounded">
                                                <p className="text-purple-800 font-medium text-sm">Explicit Binding:</p>
                                                <code className="text-purple-700 text-xs">func.call(obj), func.apply(obj), func.bind(obj)</code>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🔗 What is prototypal inheritance?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            JavaScript uses prototype-based inheritance where objects inherit properties and methods from other objects through the prototype chain.
                                        </p>
                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="text-green-800 text-xs font-medium mb-1">Example:</p>
                                            <pre className="text-green-700 text-xs">
                                                {`// Constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound\`;
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override method
Dog.prototype.speak = function() {
  return \`\${this.name} barks\`;
};

const dog = new Dog('Rex', 'Labrador');
console.log(dog.speak()); // "Rex barks"`}
                                            </pre>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        ⚡ What are Promises and how do they work?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Promises represent the eventual completion or failure of an asynchronous operation and its resulting value.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-yellow-50 p-3 rounded">
                                                <p className="text-yellow-800 font-medium text-sm">Pending</p>
                                                <p className="text-yellow-700 text-xs">Initial state, neither fulfilled nor rejected</p>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded">
                                                <p className="text-green-800 font-medium text-sm">Fulfilled</p>
                                                <p className="text-green-700 text-xs">Operation completed successfully</p>
                                            </div>
                                            <div className="bg-red-50 p-3 rounded">
                                                <p className="text-red-800 font-medium text-sm">Rejected</p>
                                                <p className="text-red-700 text-xs">Operation failed</p>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded">
                                            <pre className="text-blue-700 text-xs">
                                                {`const promise = new Promise((resolve, reject) => {
  // Async operation
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

promise
  .then(value => console.log(value))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));`}
                                            </pre>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </section>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900">JavaScript</h1>
                <p className="mt-2 text-gray-600">The programming language of the web</p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-6">
                <nav className="flex flex-wrap gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${activeTab === tab.id
                                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
                {renderTabContent()}
            </div>

            <TopicsNavigation />
        </div>
    );
};

export default JavaScript;

const JavaScript = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">JavaScript</h1>
        <p className="mt-2 text-gray-600">The programming language of the web</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is JavaScript?</h2>
          <p className="text-gray-600 mb-4">
            JavaScript is a high-level, interpreted programming language that enables interactive web pages. 
            It's an essential part of web applications alongside HTML and CSS.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Variables & Data Types</h4>
              <p className="text-blue-700 text-sm">let, const, var - strings, numbers, booleans, objects, arrays</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Functions</h4>
              <p className="text-green-700 text-sm">Function declarations, expressions, arrow functions, closures</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Async Programming</h4>
              <p className="text-yellow-700 text-sm">Promises, async/await, callbacks, event loop</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">ES6+ Features</h4>
              <p className="text-purple-700 text-sm">Destructuring, spread operator, template literals, modules</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Important Topics</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Scope & Hoisting</h4>
              <p className="text-gray-600 text-sm">Function scope, block scope, variable hoisting, temporal dead zone</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">Prototypes & Inheritance</h4>
              <p className="text-gray-600 text-sm">Prototype chain, constructor functions, classes, inheritance patterns</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">DOM Manipulation</h4>
              <p className="text-gray-600 text-sm">Selecting elements, event handling, creating/modifying elements</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">Error Handling</h4>
              <p className="text-gray-600 text-sm">try/catch blocks, throwing errors, debugging techniques</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Code Examples</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">ES6 Features</h4>
              <pre className="text-sm text-gray-700 overflow-x-auto">
{`// Destructuring
const { name, age } = user;
const [first, second] = array;

// Arrow Functions
const multiply = (a, b) => a * b;

// Template Literals
const message = \`Hello \${name}, you are \${age} years old\`;

// Spread Operator
const newArray = [...oldArray, newItem];`}
              </pre>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Async/Await</h4>
              <pre className="text-sm text-gray-700 overflow-x-auto">
{`// Async function
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Interview Questions</h3>
          <div className="space-y-2">
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What is the difference between let, const, and var?</summary>
              <p className="mt-2 text-gray-600 text-sm">var is function-scoped and hoisted, let and const are block-scoped. const cannot be reassigned after declaration.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">Explain closures in JavaScript</summary>
              <p className="mt-2 text-gray-600 text-sm">A closure is when an inner function has access to variables from its outer function's scope even after the outer function has returned.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What is the event loop?</summary>
              <p className="mt-2 text-gray-600 text-sm">The event loop handles asynchronous operations in JavaScript, moving callbacks from the callback queue to the call stack when it's empty.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What is prototypal inheritance?</summary>
              <p className="mt-2 text-gray-600 text-sm">JavaScript objects inherit properties and methods from other objects through the prototype chain, not classes like other OOP languages.</p>
            </details>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Array Methods to Master</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Iteration Methods</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>forEach() - Execute function for each element</li>
                <li>map() - Create new array with transformed elements</li>
                <li>filter() - Create new array with filtered elements</li>
                <li>reduce() - Reduce array to single value</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Search Methods</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>find() - Find first matching element</li>
                <li>findIndex() - Find index of first match</li>
                <li>includes() - Check if element exists</li>
                <li>some() - Check if any element passes test</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JavaScript;

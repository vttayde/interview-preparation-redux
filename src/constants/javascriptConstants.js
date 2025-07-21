// =============================================================================
// JAVASCRIPT PAGE CONSTANTS
// =============================================================================

export const JAVASCRIPT_STUDY_DATA = {
  "Variables & Types": [
    {
      id: 1,
      question: "What are the different data types in JavaScript?",
      answer: "JavaScript has 7 primitive types: string, number, boolean, undefined, null, symbol, bigint, and 1 non-primitive: object.",
      code: `// Primitive types
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
      question: "Explain variable hoisting",
      answer: "Hoisting moves variable and function declarations to the top of their scope during compilation phase.",
      code: `// This code:
console.log(x); // undefined (not error)
var x = 5;

// Is interpreted as:
var x;
console.log(x); // undefined
x = 5;

// let and const have temporal dead zone
console.log(y); // ReferenceError
let y = 10;`
    }
  ],
  "Functions": [
    {
      id: 3,
      question: "Different ways to create functions",
      answer: "Functions can be created using function declarations, expressions, arrow functions, and constructors.",
      code: `// Function declaration
function greet(name) {
  return "Hello " + name;
}

// Function expression
const greet2 = function(name) {
  return "Hello " + name;
};

// Arrow function
const greet3 = (name) => "Hello " + name;

// Constructor function
function Person(name) {
  this.name = name;
  this.greet = function() {
    return "Hello " + this.name;
  };
}`
    }
  ]
};

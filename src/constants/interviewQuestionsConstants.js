// =============================================================================
// INTERVIEW QUESTIONS PAGE CONSTANTS
// =============================================================================

export const INTERVIEW_QUESTIONS_TABS = [
  { id: 'All', name: 'My All Questions', icon: '❓' },
  { id: 'basics', name: 'Web Development', icon: '🌐' },
  { id: 'coding', name: 'Coding', icon: '💻' },
  { id: 'codeSnippets', name: 'Code Snippets', icon: '📄' },
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '🔧' },
  { id: 'database', name: 'Database', icon: '🗄️' },
  { id: 'general', name: 'General', icon: '💡' },
  { id: 'behavioral', name: 'Behavioral', icon: '🤝' },
];

export const INTERVIEW_QUESTIONS_UI_TEXT = {
  title: 'Interview Questions',
  description:
    'Comprehensive collection of common interview questions with interactive code examples',
};

export const INTERVIEW_QUESTIONS_CONTENT = {
  All: [
    {
      id: 1,
      title: '📊 Array Reduce - User Age Grouping',
      description:
        'Group users by age and count occurrences using Array.reduce method. Array.reduce() accumulates values by applying a reducer function to each element. Initialize empty object as accumulator, iterate through users, use age as key and increment count. Result: {30: 2, 25: 1, 52: 1} - Shows two users aged 30, one aged 25, and one aged 52. Key concepts: Functional programming, object property manipulation, logical OR operator for default values.',
      color: 'blue',
      code: `const user = [
  { firstName: "vinod", lastName: "tayde", age: 30 },
  { firstName: "rupali", lastName: "tayde", age: 25 },
  { firstName: "deepika", lastName: "padukone", age: 30 },
  { firstName: "akshya", lastName: "kumar", age: 52 },
];

const output = user.reduce(function (acc, curr) {
  // Count users by age
  acc[curr.age] = (acc[curr.age] || 0) + 1;
  return acc;
}, {});

console.log(output); // { 30: 2, 25: 1, 52: 1 }`,
    },
    {
      id: 2,
      title: '🛒 Promise Chaining - E-commerce Flow',
      description:
        'Complete e-commerce flow with promise chaining for order creation and payment processing. Promise chaining allows sequential asynchronous operations where each .then() returns a new promise. The flow: createOrder() → proceedToPayment() → handle result/error. Since validatePaymentStatus returns false, the promise chain will catch "Payment fail" error. Key concepts: Asynchronous programming, error propagation, promise states (pending, fulfilled, rejected), and the importance of returning values in .then() chains.',
      color: 'green',
      code: `const cart = ["shoes", "shirt", "phone"];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((error) => console.log(error.message));

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "123445";
    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    validatePaymentStatus(orderId)
      ? resolve("Payment Successful")
      : reject(new Error("Payment fail"));
  });
}

function validatePaymentStatus(orderId) {
  return false;
}`,
    },
    {
      id: 3,
      title: '⚡ Promise APIs - Handling Multiple Promises',
      description:
        'Demonstrating different Promise API methods: all, allSettled, race, and any.',
      color: 'purple',
      code: `const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Successful"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Successful"), 2000);
});

// Promise.all() - Fails if any promise fails
Promise.all([p1, p2, p3])
  .then((res) => console.log("res", res))
  .catch((err) => console.error(err));

// Promise.allSettled() - Waits for all to settle
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log("res allSettled", res))
  .catch((err) => console.error(err));

// Promise.race() - First to settle wins
Promise.race([p1, p2, p3])
  .then((res) => console.log("res race", res))
  .catch((err) => console.error(err));

// Promise.any() - First successful promise
Promise.any([p1, p2, p3])
  .then((res) => console.log("res any", res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });`,
    },
    {
      id: 4,
      title: '🎯 Async/Await with API Calls',
      description:
        'Modern async/await pattern for handling promises and API calls with error handling.',
      color: 'orange',
      code: `// Async function always returns a promise
const p = new Promise((resolve, reject) => {
  resolve("promise resolved value");
});

async function getData() {
  return p;
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res));

// API call with error handling
const API_URL = "https://api.github.com/users/vttayde";

async function handleAPIPromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log("response", jsonValue);
  } catch (err) {
    console.log(err.message);
  }
}

handleAPIPromise();`,
    },
    {
      id: 5,
      title: '⏱️ Debouncing Implementation',
      description:
        'Debouncing technique to optimize performance by limiting function execution frequency.',
      color: 'yellow',
      code: `let counter = 1;
const apiCall = () => {
  console.log("fetching data...", counter++);
};

// Basic debouncing implementation
const debouncing = (fn, delay) => {
  let timer;
  return function () {
    let context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const handleKey = debouncing(apiCall, 300);

// Test the debouncing
console.log("Testing debouncing...");
handleKey(); // This will execute after 300ms
handleKey(); // This cancels the previous one  
handleKey(); // Only this final call will execute

// Simulate search input
const searchAPI = debouncing((query) => {
  console.log(\`Searching for: \${query}\`);
}, 500);

console.log("Simulating search...");
searchAPI("j");
searchAPI("ja");
searchAPI("jav");
searchAPI("javascript"); // Only this executes`,
    },
    {
      id: 6,
      title: '🔄 API Retry Pattern',
      description:
        'Robust API retry mechanism for handling network failures with exponential backoff.',
      color: 'red',
      code: `// API Retry with exponential backoff
async function apiCall(callback, maxRetries = 3) {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      const response = await callback();
      console.log(\`Success on attempt \${i + 1}\`);
      return response;
    } catch (error) {
      if (i === maxRetries) {
        throw new Error(\`Failed after \${maxRetries + 1} attempts\`);
      }
      const delay = Math.pow(2, i) * 1000; // Exponential backoff
      console.log(\`Attempt \${i + 1} failed, retrying in \${delay}ms\`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Test the retry function
const unreliableAPI = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.3) { // 30% success rate
      resolve("API call successful!");
    } else {
      reject(new Error("Network error"));
    }
  });
};

apiCall(unreliableAPI, 4)
  .then(result => console.log("Final result:", result))
  .catch(error => console.log("Failed:", error.message));`,
    },
  ],
  basics: [
    {
      id: 1,
      title: '📊 Array Reduce - User Age Grouping',
      description:
        'Group users by age and count occurrences using Array.reduce method.',
      color: 'blue',
      code: `const user = [
  { firstName: "vinod", lastName: "tayde", age: 30 },
  { firstName: "rupali", lastName: "tayde", age: 25 },
  { firstName: "deepika", lastName: "padukone", age: 30 },
  { firstName: "akshya", lastName: "kumar", age: 52 },
];

const output = user.reduce(function (acc, curr) {
  // Count users by age
  acc[curr.age] = (acc[curr.age] || 0) + 1;
  return acc;
}, {});

console.log(output); // { 30: 2, 25: 1, 52: 1 }`,
    },
    {
      id: 2,
      title: '🛒 Promise Chaining - E-commerce Flow',
      description:
        'Complete e-commerce flow with promise chaining for order creation and payment processing.',
      color: 'green',
      code: `const cart = ["shoes", "shirt", "phone"];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((error) => console.log(error.message));

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "123445";
    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    validatePaymentStatus(orderId)
      ? resolve("Payment Successful")
      : reject(new Error("Payment fail"));
  });
}

function validatePaymentStatus(orderId) {
  return false;
}`,
    },
    {
      id: 3,
      title: '⚡ Promise APIs - Handling Multiple Promises',
      description:
        'Demonstrating different Promise API methods: all, allSettled, race, and any.',
      color: 'purple',
      code: `const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Successful"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Successful"), 2000);
});

// Promise.all() - Fails if any promise fails
Promise.all([p1, p2, p3])
  .then((res) => console.log("res", res))
  .catch((err) => console.error(err));

// Promise.allSettled() - Waits for all to settle
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log("res allSettled", res))
  .catch((err) => console.error(err));

// Promise.race() - First to settle wins
Promise.race([p1, p2, p3])
  .then((res) => console.log("res race", res))
  .catch((err) => console.error(err));

// Promise.any() - First successful promise
Promise.any([p1, p2, p3])
  .then((res) => console.log("res any", res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });`,
    },
    {
      id: 4,
      title: '🎯 Async/Await with API Calls',
      description:
        'Modern async/await pattern for handling promises and API calls with error handling.',
      color: 'orange',
      code: `// Async function always returns a promise
const p = new Promise((resolve, reject) => {
  resolve("promise resolved value");
});

async function getData() {
  return p;
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res));

// API call with error handling
const API_URL = "https://api.github.com/users/vttayde";

async function handleAPIPromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log("response", jsonValue);
  } catch (err) {
    console.log(err.message);
  }
}

handleAPIPromise();`,
    },
    {
      id: 5,
      title: '⏱️ Debouncing Implementation',
      description:
        'Debouncing technique to optimize performance by limiting function execution frequency.',
      color: 'yellow',
      code: `let counter = 1;
const apiCall = () => {
  console.log("fetching data...", counter++);
};

// Basic debouncing implementation
const debouncing = (fn, delay) => {
  let timer;
  return function () {
    let context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const handleKey = debouncing(apiCall, 300);

// Test the debouncing
console.log("Testing debouncing...");
handleKey(); // This will execute after 300ms
handleKey(); // This cancels the previous one  
handleKey(); // Only this final call will execute

// Simulate search input
const searchAPI = debouncing((query) => {
  console.log(\`Searching for: \${query}\`);
}, 500);

console.log("Simulating search...");
searchAPI("j");
searchAPI("ja");
searchAPI("jav");
searchAPI("javascript"); // Only this executes`,
    },
    {
      id: 6,
      title: '🔄 API Retry Pattern',
      description:
        'Robust API retry mechanism for handling network failures with exponential backoff.',
      color: 'red',
      code: `// API Retry with exponential backoff
async function apiCall(callback, maxRetries = 3) {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      const response = await callback();
      console.log(\`Success on attempt \${i + 1}\`);
      return response;
    } catch (error) {
      if (i === maxRetries) {
        throw new Error(\`Failed after \${maxRetries + 1} attempts\`);
      }
      const delay = Math.pow(2, i) * 1000; // Exponential backoff
      console.log(\`Attempt \${i + 1} failed, retrying in \${delay}ms\`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Test the retry function
const unreliableAPI = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.3) { // 30% success rate
      resolve("API call successful!");
    } else {
      reject(new Error("Network error"));
    }
  });
};

apiCall(unreliableAPI, 4)
  .then(result => console.log("Final result:", result))
  .catch(error => console.log("Failed:", error.message));`,
    },
  ],
  coding: [
    {
      id: 1,
      title: '🧹 Remove Duplicates from Array',
      description:
        'Remove duplicates from an array using for...of loop and indexOf method. Array.indexOf() returns first occurrence index or -1 if not found. Iterate through original array, check if element exists in result array using indexOf, only add if not found (-1). Result: ["a", "b"] - First occurrence of each unique element preserved. Key concepts: Linear search algorithm, array methods, conditional logic, and duplicate detection patterns.',
      color: 'emerald',
      code: `const a = ['a', 'b', 'a', 'a'];
const b = [];
for (let i of a) {
  if (b.indexOf(i) === -1) {
    b.push(i);
  }
}
console.log(b); // ['a', 'b']`,
    },
    {
      id: 2,
      title: '↩️ Reverse String Implementation',
      description:
        'Reverse a string using multiple approaches: built-in methods and manual iteration. String.split() creates array, Array.reverse() reverses order, Array.join() creates string. Method 1: split→reverse→join, Method 2: iterate backwards using for loop. Result: "!ediuG tpircsavaJ siht ot emocleW" - Complete character reversal. Key concepts: String immutability, array manipulation, loop iteration patterns, and performance comparison between built-in vs manual methods.',
      color: 'violet',
      code: `const string = "Welcome to this Javascript Guide!";
const reversedString = string.split("").reverse().join("");
console.log(string.split(" ").reverse().join(" ").split("").reverse().join("")); 
// emocleW ot siht tpircsavaJ !ediuG
console.log(reversedString); // !ediuG tpircsavaJ siht ot emocleW

// Using for loop
let reversedString2 = "";
for (let i = string.length - 1; i >= 0; i--) {
  reversedString2 += string[i];
}
console.log(reversedString2); // !ediuG tpircsavaJ siht ot emocleW`,
    },
    {
      id: 3,
      title: '🔄 String Case Conversion - Underscore to CamelCase',
      description:
        'Convert underscore-separated strings to camelCase format by splitting, joining, and manipulating character cases. String.charAt(0) gets first character, String.split() creates array at delimiter, String.slice() extracts substring. Extract first character, split by underscore, join without delimiter, combine lowercase first char with rest. Result: "theStealthWarrior" - converted to camelCase format. Key concepts: String manipulation methods, case conversion patterns, array-to-string transformation, and naming convention standards.',
      color: 'blue',
      code: `const string = "The_Stealth_Warrior";
const firstChar = string.charAt(0);

const word = string.split("_").join("");
console.log(word.slice(1, word.length));
console.log(firstChar.toLowerCase() + word.slice(1));`,
    },
    {
      id: 4,
      title:
        '📈 Array Frequency Analysis - Second Highest Occurrence (forEach)',
      description:
        'Find the element with the second highest frequency in an array using forEach method and object frequency mapping. Object property access creates frequency map, Array.forEach() iterates without returning new array. Build frequency object, convert to entries array, sort by frequency descending, get second element. Result: [4, 2] - Number 4 appears 2 times (second most frequent). Key concepts: Hash table implementation, sorting algorithms, destructuring assignment, and frequency analysis patterns.',
      color: 'orange',
      code: `const arr = [1, 2, 3, 4, 4, 5, 5, 5];
const freqMap = {};
arr.forEach(num => {
  freqMap[num] = (freqMap[num] || 0) + 1;
});
const sorted = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);
console.log(sorted[1]); // [4, 2]`,
    },
    {
      id: 5,
      title: '🎯 Array Frequency Analysis - Second Highest Occurrence (reduce)',
      description:
        'Find the element with the second highest frequency in an array using the reduce method for efficient frequency counting and sorting. Array.reduce() accumulates values into single result, more functional programming approach than forEach. Reduce creates frequency map in single pass, convert to sorted entries, access second position. Result: [5, 3] - Number 5 appears 3 times (most frequent), so we get element at index 1. Key concepts: Functional programming paradigms, accumulator patterns, immutable data operations, and performance optimization.',
      color: 'pink',
      code: `const arr = [1, 2, 3, 4, 4, 5, 5, 5];
const freqMap = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
const sorted = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);
console.log(sorted[1]); // [5, 3]`,
    },
    {
      id: 6,
      title: '🔍 Find Second Highest Occurrence - For...Of Loop',
      description:
        'Find the second highest occurrence of a number in an array using for...of loop with object frequency mapping. for...of iterates over values, object properties store frequency counts. Create empty object, iterate through array, increment count for each element, sort entries by frequency, return second highest. Result: "a" appears 3 times (highest), "c" appears 6 times (actually highest), so "a" is second. Key concepts: Object property manipulation, sorting algorithms, array destructuring, and frequency analysis patterns.',
      color: 'teal',
      code: `const arr = [ "a", "b", "c", "b", "a", "a","c","c","c","c","c"];

function GetSecondHighOccu (arr){
  const obj = {};
for(const item of arr){
  obj[item] = (obj[item] || 0)+1
};
console.log("obj", obj)
const sortValueArr = Object.entries(obj).sort((a,b)=> a[0]-b[0]);
console.log("sortValueArr", sortValueArr)
// [[a,3],[b,]]
return sortValueArr[1][0];
}

const secondHighNo = GetSecondHighOccu(arr)
console.log("ans", secondHighNo)`,
    },
    {
      id: 7,
      title: '📊 Array Sorting - Objects by Multiple Properties',
      description: 'Sort an array of objects based on specific properties using custom comparator functions and built-in sort methods. Array.sort() uses comparison function that returns -1, 0, or 1 to determine element order. Compare string properties using toLowerCase() for case-insensitive sorting, numeric properties by direct subtraction. Result: Objects sorted alphabetically by type then numerically by year. Key concepts: Comparator functions, case-insensitive sorting, numeric vs string comparison, object property access patterns.',
      color: 'indigo',
      code: `const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

console.log(cars.sort((a, b) => {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x > y) return 1;
  if (x < y) return -1;
  return 0;
}));

console.log(cars.sort((a, b) => {
  let x = a.year;
  let y = b.year;
  if (x > y) return 1;
  if (x < y) return -1;
  return 0;
}));

console.log(cars.sort((a, b) => b.year - a.year));
const abcd = Object.groupBy(cars, ({ year }) => year < 2011 ? "less" : "greater");
console.log(abcd.greater);`,
    },
    {
      id: 8,
      title: '🗺️ Object Grouping - Cities by State (reduce method)',
      description:
        'Merge arrays and group city objects by state using Array.reduce method to create a structured data organization. Array.reduce() allows accumulation of grouped data into a single object structure. Merge arrays with spread operator, iterate through each object, use state as key to group cities. Result: {MP: ["Bopal", "Indor"], MH: ["Pune", "Mumbai", "Amravti", "Nagpur"], UP: ["Ganga"]} - Cities grouped by state. Key concepts: Data transformation, object accumulation, spread operator, conditional object property creation.',
      color: 'cyan',
      code: `const abc = [
  { state: "MP", city: "Bopal" },
  { state: "MH", city: "Pune" },
  { state: "MH", city: "Mumbai" },
  { state: "UP", city: "Ganga" },
];

const abc1 = [
  { state: "MP", city: "Indor" },
  { state: "MH", city: "Amravti" },
  { state: "MH", city: "Mumbai" },
  { state: "MH", city: "Nagpur" },
];

const merged = [...abc, ...abc1];
const grouped = merged.reduce((acc, curr) => {
  const key = curr.state;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr.city);
  return acc;
}, {});
console.log(grouped);`,
    },
    {
      id: 9,
      title: '🗺️ Object Grouping - Cities by State (for...of loop)',
      description:
        'Alternative approach to group city objects by state using for...of loop with destructuring and conditional assignment. for...of provides imperative approach vs functional reduce method, destructuring extracts properties directly. Iterate through merged array, destructure state and city, use ternary operator for conditional array creation. Result: Same grouping result but with different approach - demonstrates multiple ways to solve the same problem. Key concepts: Imperative vs functional programming, destructuring assignment, ternary operators, object property manipulation.',
      color: 'lime',
      code: `const abc = [
  { state: "MP", city: "Bopal" },
  { state: "MH", city: "Pune" },
  { state: "MH", city: "Mumbai" },
  { state: "UP", city: "Ganga" },
];

const abc1 = [
  { state: "MP", city: "Indor" },
  { state: "MH", city: "Amravti" },
  { state: "MH", city: "Mumbai" },
  { state: "MH", city: "Nagpur" },
];

const merged = [...abc, ...abc1];
console.log(merged);

const stateObj = {};
for (const item of merged) {
  const { state, city } = item;
  stateObj[state] ? stateObj[state].push(city) : stateObj[state] = [city];
}
const result = Object.entries(stateObj).map(([state, cities]) => {
  return { state, cities };
});
console.log(Object.entries(stateObj));
console.log(result);`,
    },
    {
      id: 10,
      title: '🔄 API Retry Mechanism - Async/Await Pattern',
      description:
        'Implement robust API retry logic using async/await with recursive calls and error handling for network resilience.',
      color: 'blue',
      code: `async function fetchWithRetry(url, options, retries = 3) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.log(\`Retrying... Remaining attempts: \${retries}\`);
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}`,
    },
    {
      id: 11,
      title: '🔄 API Retry Mechanism - Promise with setTimeout',
      description:
        'Alternative API retry implementation using Promises, setTimeout for delays, and callback patterns for handling retries. Recursive retry pattern with setTimeout creates delay between attempts, callback pattern allows flexible result handling. Call API, if fails and retries remain, wait specified delay then recursively call retry function with decremented counter. Result: Continues retrying until success or retries exhausted, uses callback for result processing. Key concepts: Recursive retry patterns, Promise-based error handling, timeout mechanisms, callback patterns, and exponential backoff strategies.',
      color: 'blue',
      code: `let cb = function(result) {
  console.log("result", result);
};
let delay = 1000;
let retries = 9;
let timer;
  
function apiCall() {
  return new Promise((resolve, reject) => {
    const apiStatus = 500;
    if (apiStatus == 200) {
      return resolve({
        message: "success",
        user: {}, 
        status: apiStatus
      });
    }
    
    return reject({
      message: "failed",
      status: apiStatus
    });
  });
}

function retry(cb, retries, delay) {
  apiCall().then((res) => {
    cb(res);
  }).catch(() => {
    clearTimeout(timer);
    if (retries === 0) return "Failed";
    console.log(retries);
    timer = setTimeout(() => {
      retry(cb, retries - 1, delay);
    }, delay);
  });
}

retry(cb, retries, delay);`,
    },
    {
      id: 12,
      title: '👥 Data Grouping - People by Multiple Keys',
      description:
        'Demonstrate object grouping techniques by multiple properties (city and age) using reduce method for data organization. Array.reduce() accumulates data into structured object, multiple grouping strategies can be applied. Create grouping function that takes array and key property, builds object with keys as group identifiers and arrays as values. Result: Objects grouped by city {"New York": [Alice, Charlie], "Los Angeles": [Bob, Eve]} and by age {25: [Alice, Charlie], 30: [Bob, Eve]}. Key concepts: Data aggregation patterns, dynamic property access, object accumulation, and multi-dimensional grouping strategies.',
      color: 'blue',
      code: `let people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 25, city: "New York" },
  { name: "David", age: 35, city: "Chicago" },
  { name: "Eve", age: 30, city: "Los Angeles" }
];
const grouped = people.reduce((acc, person) => {
  const key = person.city;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(person);
  return acc;
}, {});
console.log(grouped);
const groupedByAge = people.reduce((acc, person) => {
  const key = person.age;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(person);
  return acc;
}, {});

console.log(groupedByAge);`,
    },
    {
      id: 13,
      title: '🗂️ Object Grouping - Advanced City Mapping',
      description: 'Group an array of objects by specific key with advanced mapping techniques for structured output transformation. Object.keys() extracts property names, Array.map() transforms each element into new structure. First group by city using reduce, then transform grouped object into array of objects with city as key. Result: [{"New York": [Alice, Charlie]}, {"Los Angeles": [Bob, Eve]}, {"Chicago": [David]}]. Key concepts: Data transformation pipelines, object-to-array conversion, advanced mapping patterns, and structured data organization.',
      color: 'rose',
      code: `let people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 25, city: "New York" },
  { name: "David", age: 35, city: "Chicago" },
  { name: "Eve", age: 30, city: "Los Angeles" }
];
let groupedByCity = people.reduce((acc, person) => {
  if (!acc[person.city]) {
    acc[person.city] = [];
  }
  acc[person.city].push(person);
  return acc;
}, {});

let output1 = Object.keys(groupedByCity).map(city => ({
  [city]: groupedByCity[city]
}));

console.log(output1);`,
    },
    {
      id: 14,
      title: '🔐 Understanding Closures - Counter Factory',
      description:
        'Exploring how closures work in JavaScript. Closures allow inner functions to access outer function variables even after outer function returns. createCounter creates private count variable, returns function that increments and accesses count. Result: counter1() → 1, counter1() → 2 (same instance), counter2() → 1 (new instance). Key concepts: Lexical scoping, variable persistence, data privacy, factory pattern, and memory management in closures.',
      color: 'amber',
      code: `function createCounter() {
  let count = 0; 
  return function() {
    count++;
    return count;
  };
}
const counter1 = new createCounter();
console.log(counter1());
console.log(counter1()); 
const counter2 = createCounter();
console.log(counter2());`,
    },
    {
      id: 15,
      title: '⚡ Async/Await Execution Order',
      description:
        'Demonstrates the execution order of async/await with Promise.resolve() and how it affects the call stack and microtask queue. await pauses function execution, Promise.resolve() creates immediately resolved promise that goes to microtask queue. Synchronous code runs first, async function pauses at await, continues after current execution context. Result: Output sequence: 3, 1, 4, 2, 5 (after 5 seconds). Key concepts: Event loop mechanics, microtask queue priority, async function execution context, and JavaScript concurrency model.',
      color: 'purple',
      code: `  async function test() {
  console.log(1);
  setTimeout(()=> console.log(5), 5000);
  await Promise.resolve();
  console.log(2);
}
console.log(3);
test();
console.log(4);`,
    },

    {
      id: 16,
      title: '🔒 Closures for State Encapsulation - Counter Constructor',
      description:
        'Advanced closure example using constructor functions to create private variables and public methods for state management. Constructor functions with closures create private variables accessible only through public methods. Each instance gets its own private count variable, methods access it via closure. Result: counter1 and counter2 maintain separate state - counter1: 1,2; counter2: -1,-2. Key concepts: Constructor pattern, data encapsulation, method binding, instance-specific state, and object-oriented programming principles.',
      color: 'blue',
      code: `function Counter(){
  let count=0;
  this.incrementCount=function(){
    count++ ;
    console.log("count++",count);
  };
  this.decrementCount=function(){
    count-- ;
    console.log("count--",count);
  };
};

const counter1 = new Counter();
counter1.incrementCount();
counter1.incrementCount();

const counter2 = new Counter();
counter2.decrementCount();
counter2.decrementCount();`,
    },
    {
      id: 17,
      title: '📐 Higher-Order Functions - Geometric Calculations',
      description:
        'Implement higher-order functions for mathematical calculations, demonstrating function composition and Array.prototype extension. Higher-order functions take other functions as parameters, Array.prototype allows adding custom methods to all arrays. Create calculation functions (area, circumference), pass them to generic Calculate function, extend Array prototype for direct method calls. Result: Custom Calculate mimics Array.map() behavior for mathematical operations. Key concepts: Function composition, prototype inheritance, mathematical computations, code reusability, and functional programming paradigms.',
      color: 'blue',
      code: `const radiusArr = [2, 4, 5, 2, 6];
const areaCal = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;

// const areaCal1 = function(radius){
//   return Math.PI * radius * radius
// }
function Calculate(radius, logic) {
  const outputArr = [];
  for (let i = 0; i < radius.length; i++) {
    console.log(radius[i]);
    outputArr.push(logic(radius[i]));
  }
  return outputArr;
}

console.log("area", Calculate(radiusArr, areaCal));
// console.log("area", Calculate(radiusArr, areaCal1))
console.log("circumference", Calculate(radiusArr, circumference));

const radiusArr2 = [2, 4, 5, 2, 6];
const areaCal2 = (radius) => Math.PI * radius * radius;

Array.prototype.Calculate = function (logic) {
  const outputArr = [];
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    outputArr.push(logic(this[i]));
  }
  return outputArr;
};

// console.log("area", Calculate(radiusArr2, areaCal2))
console.log("area", radiusArr2.Calculate(areaCal2));
console.log("map area", radiusArr2.map(areaCal2));`,
    },
    {
      id: 18,
      title: '🔄 User Data Transformation - Array Methods Mastery',
      description: 'Transforming user data using various array methods including map, reduce, filter, and sort for comprehensive data manipulation. Array methods provide functional programming approach to data transformation without mutating original arrays. Use map() for transformation, reduce() for aggregation, filter() for selection, sort() for ordering. Result: Full names array, age frequency object {30: 2, 25: 1, 52: 1}, sorted by age, filtered users under 35. Key concepts: Functional programming principles, immutable data operations, method chaining, and performance optimization strategies.',
      color: 'violet',
      code: `const user = [
  { firstName: "vinod", lastName: "tayde", age: 30 },
  { firstName: "rupali", lastName: "tayde", age: 25 },
  { firstName: "deepika", lastName: "padukone", age: 30 },
  { firstName: "akshya", lastName: "kumar", age: 52 },
];

// ["vinod tayde", "rupali tayde", "deepika padukone", "akshya kumar"] Output
console.log(user.map((item) => item.firstName + " " + item.lastName));

// {30: 2, 25: 1, 52: 1}
const output = user.reduce(function (obj, current) {
  if (obj[current.age]) {
    obj[current.age] = ++obj[current.age];
  } else {
    obj[current.age] = 1;
  }
  return obj;
}, {});

console.log(output);
console.log("sorted arr", user.sort((a, b) => {
  let x = a.age;
  let y = b.age;
  if (x > y) return -1;
  if (x < y) return 1;
  return 0;
}));

// console.log("lessThan35", user)
const lessThan35 = user.filter((a) => a.age < 35).map((x) => x.firstName);
console.log("lessThan35", lessThan35);

const lessThan35Reduce = user.reduce(function (resultArr1, current) {
  if (current.age < 35) {
    resultArr1.push(current.firstName);
  }
  return resultArr1;
}, []);

console.log("lessThan35Reduce", lessThan35Reduce);`,
    },
    {
      id: 19,
      title: '🔗 Promise Chaining - E-commerce Order Flow',
      description: 'Exploring the concept of promise chaining in JavaScript with complete e-commerce order processing workflow. Promise chaining allows sequential asynchronous operations, .then() passes resolved values to next handler, .catch() handles any error in chain. Create order → validate cart → process payment → handle success/error, each step returns promise for next operation. Result: Sequential execution with proper error handling and cleanup operations regardless of success/failure. Key concepts: Asynchronous flow control, error propagation, promise lifecycle, sequential operations, and robust error handling patterns.',
      color: 'emerald',
      code: `const cart = ["shoes", "shart", "phone"];
  createOrder(cart)
    .then((orderId) => {
      console.log(orderId);
      return orderId;
    })
    .then((orderId) => {
      return proccedToPayment(orderId);
    })
    .then((paymentInfo) => console.log(paymentInfo))
    .catch((error) => console.log(error.message))
    .then(() =>
      console.log("no mattern what will be happen, i will call, after catch")
    );

  function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
      if (!validateCart(cart)) {
        const err = new Error("cart is not valid");
        reject(err);
      }
      const orderId = "123445";
      if (orderId) {
        setTimeout(() => resolve(orderId), 5000);
      }
    });
    return pr;
  }
  function validateCart(cart) {
    return true;
  }
  function proccedToPayment(orderId) {
    return new Promise((resolve, reject) => {
      validatePaymentStaus(orderId)
        ? resolve("Payment Successful")
        : reject(new Error("Payment fail"));
    });
  }
  function validatePaymentStaus(orderId) {
    return true;
  }`,
    },
    {
      id: 20,
      title: '🎯 Promise API - Concurrent Operations Management',
      description: 'Exploring the various methods of the Promise API for handling multiple concurrent asynchronous operations with different completion strategies. Promise.all() fails fast on first rejection, Promise.allSettled() waits for all regardless of outcome, Promise.race() resolves with first settled, Promise.any() resolves with first successful. Create multiple promises with different timing, apply various Promise API methods to demonstrate different behaviors. Result: Different strategies for handling multiple concurrent operations based on business requirements. Key concepts: Concurrent programming, promise composition, failure handling strategies, performance optimization, and asynchronous operation coordination.',
      color: 'cyan',
      code: `// const p1 = fetch();
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Successful"), 3000);
    // setTimeout(() => reject("P1 fail"), 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Successful"), 1000);
    // setTimeout(() => reject("P2 fail"), 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 Successful"), 2000);
    setTimeout(() => reject("P3 fail"), 2000);
  });
  // promise.all()
  Promise.all([p1, p2, p3])
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => console.error(err));

  // // promise.allSetteld()
  Promise.allSettled([p1, p2, p3])
    .then((res) => console.log("res allSettel", res))
    .catch((err) => console.error(err));

  Promise.race([p1, p2, p3])
    .then((res) => console.log("res race", res))
    .catch((err) => console.error(err));

  Promise.any([p1, p2, p3])
    .then((res) => console.log("res race", res))
    .catch((err) => {
      console.error(err);
      console.log(err.errors);
    });`,
    },
    {
      id: 21,
      title: '⚡ Understanding Async/Await',
      description:
        'Exploring the async/await syntax for handling asynchronous operations.',
      color: 'pink',
      code: `const p = new Promise((reslove, reject) => {
    setTimeout(() => reslove("promise resloved value"), 10000);
  });
  async function handalPromise() {
    console.log("hello word");
    const y = await p;
    console.log("namste vinod");
    console.log(y);
    return y;
  }
  console.log(handalPromise());`,
    },
    {
      id: 22,
      title: '🌐 Fetch API - Modern HTTP Request Handling',
      description:
        'Exploring how to use the Fetch API with async/await for handling HTTP requests with proper error management and response processing. Fetch API returns Promise, async/await provides synchronous-like syntax for asynchronous operations, try/catch handles both network and parsing errors. Fetch data from API, wait for response, parse JSON, handle both network failures and JSON parsing errors. Result: GitHub user data retrieved and logged, with comprehensive error handling for network issues. Key concepts: Modern API communication, asynchronous programming, error handling strategies, JSON parsing, and HTTP status management.',
      color: 'lime',
      code: `const API_URl = "https://api.github.com/users/vttayde";
  async function handlePromise() {
    try {
      const data = await fetch(API_URl);
      const jsonValue = await data.json();
      console.log("response", jsonValue);
    } catch (err) {
      console.log(err);
    }
  }
  // handlePromise();
  handlePromise().catch((err) => console.log(err)); // if you don't want to use try{}catch(){}`,
    },
    {
      id: 23,
      title: '⏱️ Debouncing - API Call Optimization',
      description: 'Implementing debouncing to optimize API calls by delaying execution until input stops for specified time period. Debouncing prevents excessive function calls by canceling previous timer and setting new one on each invocation. Use setTimeout to delay execution, clearTimeout to cancel previous calls, only execute when no new calls made within delay period. Result: API call only executes once after 300ms of inactivity, significantly reducing server load. Key concepts: Performance optimization, timer management, user experience improvement, server load reduction, and input handling strategies.',
      color: 'amber',
      code: `let counter = 1;
  const apiCall = () => {
    console.log("fetching data...", counter++);
  };

  const deBounching = (fn, d) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(), d);
    };
  };
  const handalKey = deBounching(apiCall, 300);`,
    },
    {
      id: 24,
      title: '🚀 Throttling - Rate Limiting Implementation',
      description:
        'Exploring throttling as a technique to limit the number of API calls by ensuring function executes at most once per specified time interval. Throttling controls execution frequency by tracking last execution time and blocking subsequent calls until interval passes. Use flag or timestamp to track execution state, allow execution only after specified interval has elapsed. Result: Function executes immediately on first call, then waits for interval before allowing next execution. Key concepts: Rate limiting, execution control, performance optimization, resource management, and user interaction handling.',
      color: 'rose',
      code: `let counter = 1;
  const apiCall = () => {
    console.log("fetching data...", counter++);
  };

  const throttling = (fn, limit) => {
    let lastCall = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        return fn(...args);
      }
    };
  };
  const handalKey = throttling(apiCall, 300);`,
    },
    {
      id: 25,
      title: '🔗 Understanding Function Binding/Currying',
      description:
        'Exploring function binding and currying techniques in JavaScript.',
      color: 'teal',
      code: `function multiply(x, y) {
    return x * y;
  }
  const multiplyByTwo = multiply.bind(this, 2);
  console.log(multiplyByTwo(5));

  const multiplyByThree = multiply.bind(this, 3);
  console.log(multiplyByThree(5));

  by using function closure
  const multiply = function (x) {
    return function (y) {
      console.log(x * y);
    };
  };
  console.log(multiply(2)(7));

  const multiply1 = (x) => (y) => x * y;
  console.log(multiply1(2)(7));`,
    },
    {
      id: 26,
      title: '🔄 Understanding Recursion',
      description:
        'Exploring how recursion can be used to create a summation function.',
      color: 'indigo',
      code: `const sumFun = "(1)(2)(3)(4)(5)...()"; // first class function// recursive function

  let sum = (x) => (y) => y?sum(x+y):x;
  let sum1 = function (x) {
    return function (y) {
      if (y) {
        return sum(x + y);
      } 
        return x;
    };
  };
  console.log(sum1(1)(2)(3)(4)());
  console.log(sum(1)(2)(3)(4)());`,
    },
    {
      id: 27,
      title: '⏰ Understanding setInterval and clearInterval',
      description:
        'Exploring how to use setInterval and clearInterval for timed execution.',
      color: 'amber',
      code: ` function greet() {
  console.log("Hello, world!");
}

// Call the greet function every 2 seconds
const intervalId = setInterval(greet, 2000);

// To stop the interval after a certain time or condition, use clearInterval()
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped.");
}, 10000); // Stop after 10 seconds`,
    },
  ],

  codeSnippets: [
    {
      id: 1,
      title: '🔄 Understanding Asynchronous JavaScript',
      color: 'purple',
      description:
        'Demonstrates the execution order of synchronous and asynchronous code, showing how the event loop works with setTimeout and function calls. JavaScript executes synchronously until encountering asynchronous operations, which are placed in task queue and executed after call stack is empty. Synchronous code runs first, setTimeout with 0ms still goes to task queue, function returns before async operations complete. Result: "ddd", "1", "4", "x", "3", "2" - demonstrating call stack priority over task queue. Key concepts: Event loop mechanics, call stack vs task queue, asynchronous operation scheduling, and JavaScript runtime behavior.',
      code: `console.log("ddd");
function abc() {
  console.log("1");
  // return "f"
  setTimeout(() => { console.log("2"); }, 3000);
  // return "after return statement nothing will print"
  setTimeout(() => { console.log("3"); }, 0);
  console.log("4");
  return "x";
}
console.log(abc());`,
    },
    {
      id: 2,
      title: '🔄 Understanding Type Coercion',
      color: 'orange',
      description:
        'Explores JavaScript type coercion behavior with different operators and data types, showing how JavaScript automatically converts values. JavaScript performs automatic type conversion (coercion) when different types interact, addition with strings concatenates, subtraction forces numeric conversion. + operator with strings performs concatenation, - operator always converts to numbers, unary + converts to number. Result: "122", 10, 0, "21", "22", "322", "312", "12", "52", NaN, NaN, "AB2", NaN. Key concepts: Implicit type conversion, operator precedence, string concatenation vs numeric operations, and JavaScript quirks understanding.',
      code: `console.log(1 + "2" + "2");
console.log(1 + "2" - "2");
console.log("2" - "2");
console.log("2" + 1);
console.log("2" + "2");
console.log(3 + +"2" + "2");
console.log(3 + -"2" + "2");
console.log(3 - +"2" + "2");
console.log(3 - -"2" + "2");
console.log("A" - "B" + 2);
console.log("A" - "B" - 2);
console.log("A" + "B" + 2);
console.log("A" + "B" - 2);`,
    },
    {
      id: 3,
      title: "🎯 Understanding 'this' in JavaScript",
      color: 'green',
      description: "Understanding how 'this' works in different contexts including regular functions vs arrow functions in object methods. 'this' in regular functions refers to the calling object, arrow functions inherit 'this' from enclosing scope (lexical this). obj.regular() calls with obj as context, arrow function inherits global 'this' which doesn't have num property. Result: regular() returns 100 (obj.num), arrow() returns undefined (global.num doesn't exist). Key concepts: Function context binding, lexical scoping, method invocation patterns, arrow function behavior, and 'this' keyword mechanics.",
      code: `const obj = {
  num: 100,
  regular: function() { 
    return this.num; 
  },
  arrow: () => this.num,
};

console.log(obj.regular());
console.log(obj.arrow());
console.log(this.regular);
console.log(this.arrow);`,
    },
    {
      id: 4,
      title: '🔗 Understanding Object.create',
      color: 'blue',
      description:
        'Demonstrates Object.create() method and prototype inheritance, showing how properties are inherited from the prototype chain when iterating through object properties. Object.create() creates new object with specified prototype, for...in loop iterates over enumerable properties including inherited ones. obj inherits property "a" from prototype, has own properties "b" and "d", for...in iterates over all enumerable properties. Result: Logs "a", "b", "d" - both own and inherited properties are enumerated. Key concepts: Prototype inheritance, property enumeration, Object.create() method, prototype chain traversal, and own vs inherited properties.',
      code: `const obj = Object.create({ a: 1 });
// const obj = { a: 1 };
obj.b = 2;
obj.d = 7;

for (let key in obj) {
  console.log(key);
}`,
    },
    {
      id: 5,
      title: '⛓️ Understanding Promise Chaining',
      color: 'red',
      description: 'Exploring how promise chaining works in JavaScript with error handling and value transformation through multiple then/catch blocks. Promises chain through .then() and .catch(), each returns new promise, catch handles errors and can recover the chain. Start with resolved value 1, double it to 2, throw error, catch error and continue chain, undefined flows through remaining then blocks. Result: Logs 1, 2, "oops", undefined, 2 - demonstrating value flow and error recovery. Key concepts: Promise chaining mechanics, error propagation and recovery, value transformation, asynchronous control flow, and exception handling patterns.',
      code: `Promise.resolve(1)
  .then(val => {
    console.log(val);
    return val * 2;
  })
  .then(val => {
    console.log(val);
    throw new Error('oops');
  })
  .catch(err => {
    console.log(err.message);
    // return 10;
  })
  .then(val => {
    console.log(val);
    return 2;
  })
  .then(val => console.log(val));`,
    },
    {
      id: 6,
      title: "🎯 Understanding 'this' Context - Method Binding",
      color: 'yellow',
      description: "Exploring how 'this' works in different contexts with duplicate example showing regular vs arrow function behavior in object methods. Regular functions get 'this' from call site, arrow functions inherit 'this' from lexical scope (where they were defined). When called as object method, regular function gets object as 'this', arrow function inherits global 'this'. Result: obj.regular() returns 100, obj.arrow() returns undefined due to lexical binding. Key concepts: Method binding patterns, lexical vs dynamic 'this', arrow function limitations, object method definitions, and context preservation strategies.",
      code: `const obj = {
  num: 100,
  regular: function() { 
    return this.num; 
  },
  arrow: () => this.num,
};
console.log(obj.regular());
console.log(obj.arrow());`,
    },
  ],

  default: [
    {
      id: 'default',
      title: '🚀 Other Interview Topics',
      color: 'indigo',
      description: 'More comprehensive interview questions and detailed answers coming soon - covering advanced JavaScript concepts, algorithms, and system design. Comprehensive interview preparation requires diverse topic coverage beyond basic concepts. Continuous expansion of question bank with real-world scenarios and advanced patterns. Result: Stay tuned for more challenging questions and detailed explanations. Key concepts: Continuous learning, advanced topics, comprehensive preparation, and knowledge expansion strategies.',
    },
  ],
};

// =============================================================================
// INTERVIEW QUESTIONS PAGE CONSTANTS
// =============================================================================

export const INTERVIEW_QUESTIONS_TABS = [
  { id: "All", name: "My All Questions", icon: "❓" },
  { id: "basics", name: "Web Development", icon: "🌐" },
  { id: "frontend", name: "Frontend", icon: "🎨" },
  { id: "backend", name: "Backend", icon: "🔧" },
  { id: "database", name: "Database", icon: "🗄️" },
  { id: "general", name: "General", icon: "💡" },
  { id: "behavioral", name: "Behavioral", icon: "🤝" },
];

export const INTERVIEW_QUESTIONS_UI_TEXT = {
  title: "Interview Questions",
  description:
    "Comprehensive collection of common interview questions with interactive code examples",
};

export const INTERVIEW_QUESTIONS_CONTENT = {
  All: [
    {
      id: 1,
      title: "📊 Array Reduce - User Age Grouping",
      description:
        "Group users by age and count occurrences using Array.reduce method.",
      color: "blue",
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
      title: "🛒 Promise Chaining - E-commerce Flow",
      description:
        "Complete e-commerce flow with promise chaining for order creation and payment processing.",
      color: "green",
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
      title: "⚡ Promise APIs - Handling Multiple Promises",
      description:
        "Demonstrating different Promise API methods: all, allSettled, race, and any.",
      color: "purple",
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
      title: "🎯 Async/Await with API Calls",
      description:
        "Modern async/await pattern for handling promises and API calls with error handling.",
      color: "orange",
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
      title: "⏱️ Debouncing Implementation",
      description:
        "Debouncing technique to optimize performance by limiting function execution frequency.",
      color: "yellow",
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
      title: "🔄 API Retry Pattern",
      description:
        "Robust API retry mechanism for handling network failures with exponential backoff.",
      color: "red",
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
      title: "📊 Array Reduce - User Age Grouping",
      description:
        "Group users by age and count occurrences using Array.reduce method.",
      color: "blue",
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
      title: "🛒 Promise Chaining - E-commerce Flow",
      description:
        "Complete e-commerce flow with promise chaining for order creation and payment processing.",
      color: "green",
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
      title: "⚡ Promise APIs - Handling Multiple Promises",
      description:
        "Demonstrating different Promise API methods: all, allSettled, race, and any.",
      color: "purple",
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
      title: "🎯 Async/Await with API Calls",
      description:
        "Modern async/await pattern for handling promises and API calls with error handling.",
      color: "orange",
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
      title: "⏱️ Debouncing Implementation",
      description:
        "Debouncing technique to optimize performance by limiting function execution frequency.",
      color: "yellow",
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
      title: "🔄 API Retry Pattern",
      description:
        "Robust API retry mechanism for handling network failures with exponential backoff.",
      color: "red",
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
  default: [
    {
      id: "default",
      title: "Other Interview Topics",
      color: "purple",
      description: "more questions and answers coming soon",
    },
  ],
};

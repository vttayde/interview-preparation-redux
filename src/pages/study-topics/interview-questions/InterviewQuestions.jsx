import { useState } from 'react';
import StudyNavigation from '../../../components/layout/StudyNavigation';
import CodeDisplay from '../../../components/CodeDisplay';
import CodeTerminal from '../../../components/CodeTerminal';

const InterviewQuestions = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [terminalOpen, setTerminalOpen] = useState(false);
    const [terminalCode, setTerminalCode] = useState('');

    const handleTryCode = (code) => {
        setTerminalCode(code);
        setTerminalOpen(true);
    };

    const tabs = [
        { id: 'All', name: 'My All Questions', icon: '❓' },
        { id: 'basics', name: 'Web Development', icon: '🌐' },
        { id: 'frontend', name: 'Frontend', icon: '🎨' },
        { id: 'backend', name: 'Backend', icon: '🔧' },
        { id: 'database', name: 'Database', icon: '🗄️' },
        { id: 'general', name: 'General', icon: '💡' },
        { id: 'behavioral', name: 'Behavioral', icon: '🤝' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'All': 
            return (
                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My All Questions - JavaScript Code Examples</h2>
                        <p className="text-gray-600 mb-4">
                            Personal collection of JavaScript code examples covering arrays, promises, async/await, debouncing, and API retry patterns.
                            These are practical examples for interview preparation and real-world development scenarios.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Interactive Code Examples</h3>
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-3 text-lg">📊 Array Reduce - User Age Grouping</h4>
                                <p className="text-blue-700 text-sm mb-3">
                                    Group users by age and count occurrences using Array.reduce method.
                                </p>
                                <CodeDisplay 
                                    code={`const user = [
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

console.log(output); // { 30: 2, 25: 1, 52: 1 }`}
                                    language="javascript"
                                    onTryCode={handleTryCode}
                                />
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-3 text-lg">🛒 Promise Chaining - E-commerce Flow</h4>
                                <p className="text-green-700 text-sm mb-3">
                                    Complete e-commerce flow with promise chaining for order creation and payment processing.
                                </p>
                                <CodeDisplay 
                                    code={`const cart = ["shoes", "shirt", "phone"];

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
}`}
                                    language="javascript"
                                    onTryCode={handleTryCode}
                                />
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-purple-800 mb-3 text-lg">⚡ Promise APIs - Handling Multiple Promises</h4>
                                <p className="text-purple-700 text-sm mb-3">
                                    Demonstrating different Promise API methods: all, allSettled, race, and any.
                                </p>
                                <CodeDisplay 
                                    code={`const p1 = new Promise((resolve, reject) => {
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
  });`}
                                    language="javascript"
                                    onTryCode={handleTryCode}
                                />
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-orange-800 mb-3 text-lg">🎯 Async/Await with API Calls</h4>
                                <p className="text-orange-700 text-sm mb-3">
                                    Modern async/await pattern for handling promises and API calls with error handling.
                                </p>
                                <CodeDisplay 
                                    code={`// Async function always returns a promise
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

handleAPIPromise();`}
                                    language="javascript"
                                    onTryCode={handleTryCode}
                                />
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-3 text-lg">⏱️ Debouncing Implementation</h4>
                                <p className="text-yellow-700 text-sm mb-3">
                                    Debouncing technique to optimize performance by limiting function execution frequency.
                                </p>
                                <CodeDisplay 
                                    code={`let counter = 1;
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
searchAPI("javascript"); // Only this executes`}
                                    language="javascript"
                                    onTryCode={handleTryCode}
                                />
                            </div>

                            <div className="bg-red-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-red-800 mb-3 text-lg">🔄 API Retry Pattern</h4>
                                <p className="text-red-700 text-sm mb-3">
                                    Robust API retry mechanism for handling network failures with exponential backoff.
                                </p>
                                <CodeDisplay 
                                    code={`// API Retry with exponential backoff
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
  .catch(error => console.log("Failed:", error.message));`}
                                    language="javascript"
                                    onTryCode={handleTryCode}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            );
            
            default:
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Interview Topics</h2>
                            <p className="text-gray-600 mb-4">
                                Additional interview preparation content for web development, frontend, backend, databases, and behavioral questions.
                            </p>
                        </section>
                    </div>
                );
        }
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Interview Questions</h1>
                <p className="mt-2 text-gray-600">Comprehensive collection of common interview questions with interactive code examples</p>
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

            <StudyNavigation />
            
            {/* Code Terminal */}
            <CodeTerminal 
                isOpen={terminalOpen}
                onClose={() => setTerminalOpen(false)}
                initialCode={terminalCode}
                title="JavaScript Code Terminal"
            />
        </div>
    );
};

export default InterviewQuestions;

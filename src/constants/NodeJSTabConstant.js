// =============================================================================
// NODE.JS PAGE CONSTANTS
// =============================================================================

export const NODEJS_TABS = [
    { id: 'basics', name: 'Node.js Fundamentals', icon: '🟢' },
    { id: 'modules', name: 'Modules & NPM', icon: '📦' },
    { id: 'filesystem', name: 'File System', icon: '📁' },
    { id: 'streams', name: 'Streams & Buffers', icon: '🌊' },
    { id: 'http', name: 'HTTP & Web Servers', icon: '🌐' },
    { id: 'express', name: 'Express.js', icon: '🚀' },
    { id: 'async', name: 'Async Programming', icon: '⚡' },
    { id: 'database', name: 'Database Integration', icon: '🗄️' },
    { id: 'testing', name: 'Testing & Debugging', icon: '🧪' },
    { id: 'interview', name: 'Interview Q&A', icon: '❓' }
];

export const NODEJS_UI_TEXT = {
    title: "Node.js Development Guide",
    description: "Master Node.js fundamentals, server-side development, APIs, databases, and backend best practices with comprehensive examples and explanations."
};

export const NODEJS_CONTENT = {
    basics: [
        {
            id: 1,
            title: "🟢 What is Node.js?",
            description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server-side, enabling full-stack JavaScript development.",
            color: "green",
            code: `// Node.js Global Objects
console.log("Node.js version:", process.version);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("Current directory:", process.cwd());
console.log("Script filename:", __filename);
console.log("Script directory:", __dirname);

// Environment variables
console.log("Environment:", process.env.NODE_ENV || 'development');
console.log("Port:", process.env.PORT || 3000);

// Process events
process.on('exit', (code) => {
    console.log(\`Process exiting with code: \${code}\`);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

// Command line arguments
console.log("Command line arguments:", process.argv);

// Example: node app.js --port 8080 --env production
const args = process.argv.slice(2);
console.log("Custom arguments:", args);

// Memory usage
console.log("Memory usage:", process.memoryUsage());

// CPU usage
console.log("CPU usage:", process.cpuUsage());`
        },
        {
            id: 2,
            title: "🏗️ Node.js Architecture & Event Loop",
            description: "Understanding Node.js single-threaded event loop, non-blocking I/O, and how it handles concurrent operations efficiently.",
            color: "blue",
            code: `// Event Loop Demonstration
console.log("1. Start");

// Immediate execution (next tick)
process.nextTick(() => {
    console.log("2. Next Tick");
});

// Immediate execution
setImmediate(() => {
    console.log("3. Set Immediate");
});

// Timer execution
setTimeout(() => {
    console.log("4. Timeout 0ms");
}, 0);

setTimeout(() => {
    console.log("5. Timeout 10ms");
}, 10);

console.log("6. End");

// Output order: 1, 6, 2, 3, 4, 5

// Non-blocking I/O example
const fs = require('fs');

console.log("Starting file read...");

// Non-blocking file read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("File content:", data);
});

console.log("This executes immediately, not waiting for file read");

// Event-driven architecture
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Register event listener
myEmitter.on('data', (message) => {
    console.log("Received:", message);
});

// Emit event
myEmitter.emit('data', 'Hello from Event Emitter!');

// Multiple listeners
myEmitter.on('user-login', (user) => {
    console.log(\`User \${user.name} logged in\`);
});

myEmitter.on('user-login', (user) => {
    console.log(\`Logging activity for user: \${user.id}\`);
});

myEmitter.emit('user-login', { id: 1, name: 'John' });`
        },
        {
            id: 3,
            title: "🔧 Core Modules Overview",
            description: "Node.js comes with built-in modules for common tasks like file system operations, HTTP requests, path manipulation, and more.",
            color: "purple",
            code: `// Core Modules Examples

// 1. Path Module
const path = require('path');

console.log("File extension:", path.extname('/path/to/file.txt')); // .txt
console.log("Directory name:", path.dirname('/path/to/file.txt')); // /path/to
console.log("Base name:", path.basename('/path/to/file.txt')); // file.txt
console.log("Joined path:", path.join('/users', 'john', 'documents', 'file.txt'));
console.log("Resolved path:", path.resolve('file.txt'));

// 2. OS Module
const os = require('os');

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Home Directory:", os.homedir());
console.log("Hostname:", os.hostname());
console.log("CPU Info:", os.cpus().length, "cores");

// 3. URL Module
const url = require('url');

const myURL = new URL('https://example.com:8080/path?name=john&age=30#section');
console.log("Protocol:", myURL.protocol);
console.log("Hostname:", myURL.hostname);
console.log("Port:", myURL.port);
console.log("Pathname:", myURL.pathname);
console.log("Search params:", myURL.searchParams.get('name'));

// 4. Crypto Module
const crypto = require('crypto');

// Generate random bytes
const randomBytes = crypto.randomBytes(16).toString('hex');
console.log("Random bytes:", randomBytes);

// Create hash
const hash = crypto.createHash('sha256');
hash.update('Hello World');
console.log("SHA256 hash:", hash.digest('hex'));

// 5. Util Module
const util = require('util');

// Promisify callback-based functions
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);

async function readFile() {
    try {
        const data = await readFileAsync('example.txt', 'utf8');
        console.log("File content:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Format strings
console.log(util.format('User %s has %d points', 'John', 100));

// Inspect objects
const obj = { name: 'John', nested: { age: 30 } };
console.log(util.inspect(obj, { colors: true, depth: null }));`
        },
        {
            id: 4,
            title: "📝 First Node.js Application",
            description: "Creating your first Node.js application with basic HTTP server, handling requests, and understanding the request-response cycle.",
            color: "yellow",
            code: `// Basic HTTP Server
const http = require('http');
const url = require('url');

// Create HTTP server
const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const method = req.method;

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle different routes
    if (pathname === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(\`
            <h1>Welcome to Node.js Server!</h1>
            <p>Server is running on \${req.headers.host}</p>
            <ul>
                <li><a href="/users">View Users</a></li>
                <li><a href="/api/time">Current Time</a></li>
                <li><a href="/hello?name=John">Greeting</a></li>
            </ul>
        \`);
    }
    else if (pathname === '/users' && method === 'GET') {
        const users = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
        ];
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users, null, 2));
    }
    else if (pathname === '/api/time' && method === 'GET') {
        const response = {
            timestamp: Date.now(),
            datetime: new Date().toISOString(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response, null, 2));
    }
    else if (pathname === '/hello' && method === 'GET') {
        const name = query.name || 'World';
        const response = { message: \`Hello, \${name}!\` };
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    }
    else if (pathname === '/users' && method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const newUser = JSON.parse(body);
                console.log('New user:', newUser);
                
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 
                    message: 'User created', 
                    user: { id: Date.now(), ...newUser }
                }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

// Handle server errors
server.on('error', (error) => {
    console.error('Server error:', error);
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(\`Server running at http://localhost:\${PORT}\`);
    console.log('Press Ctrl+C to stop the server');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});`
        }
    ],
    modules: [
        {
            id: 5,
            title: "📦 CommonJS Modules",
            description: "Understanding Node.js module system using require() and module.exports for organizing and sharing code between files.",
            color: "blue",
            code: `// math.js - Module creation
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

const PI = 3.14159;
const E = 2.71828;

// Export single function
module.exports.add = add;

// Export multiple items
module.exports = {
    add,
    subtract,
    multiply,
    PI,
    E,
    // Arrow function export
    divide: (a, b) => {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    },
    // Object with methods
    statistics: {
        mean: (...numbers) => numbers.reduce((sum, n) => sum + n, 0) / numbers.length,
        max: (...numbers) => Math.max(...numbers),
        min: (...numbers) => Math.min(...numbers)
    }
};

// Alternative export syntax
exports.power = (base, exponent) => Math.pow(base, exponent);

// app.js - Module usage
const math = require('./math');
const { add, subtract, PI } = require('./math'); // Destructuring

console.log("Addition:", math.add(5, 3)); // 8
console.log("Subtraction:", subtract(10, 4)); // 6
console.log("Division:", math.divide(15, 3)); // 5
console.log("PI constant:", PI); // 3.14159

// Using nested objects
console.log("Mean:", math.statistics.mean(1, 2, 3, 4, 5)); // 3
console.log("Max:", math.statistics.max(1, 5, 3, 9, 2)); // 9

// Module caching demonstration
const math1 = require('./math');
const math2 = require('./math');
console.log("Same instance:", math1 === math2); // true

// Clear module cache (rarely used)
delete require.cache[require.resolve('./math')];
const math3 = require('./math');
console.log("After cache clear:", math1 === math3); // false`
        },
        {
            id: 6,
            title: "🔧 NPM Package Management",
            description: "Working with NPM (Node Package Manager) to install, manage, and publish packages for Node.js projects.",
            color: "green",
            code: `// package.json - Project configuration
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A sample Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "build": "webpack --mode production",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "keywords": ["node", "express", "api"],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "dotenv": "^16.0.3",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20",
    "jest": "^29.0.0",
    "eslint": "^8.0.0",
    "prettier": "^2.8.0"
  },
  "engines": {
    "node": ">=16.0.0",
    "npm": ">=8.0.0"
  }
}

// NPM Commands Examples:

// Initialize new project
// npm init -y

// Install dependencies
// npm install express mongoose
// npm install --save express  // Add to dependencies
// npm install --save-dev jest // Add to devDependencies
// npm install -g nodemon      // Global installation

// Install specific version
// npm install express@4.18.2

// Update packages
// npm update
// npm outdated // Check for updates

// Remove packages
// npm uninstall express
// npm uninstall --save-dev jest

// Run scripts
// npm start
// npm run dev
// npm test

// Package usage examples
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Express middleware
app.use(express.json());

// Using installed packages
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Hash password using bcryptjs
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // Create user (assuming User model exists)
        const user = new User({
            username,
            password: hashedPassword
        });
        
        await user.save();
        
        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id }, 
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        
        res.status(201).json({ 
            message: 'User created successfully',
            token 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));`
        },
        {
            id: 7,
            title: "📄 ES6 Modules in Node.js",
            description: "Using modern ES6 import/export syntax in Node.js with proper configuration and understanding the differences from CommonJS.",
            color: "purple",
            code: `// package.json - Enable ES6 modules
{
  "name": "es6-modules-example",
  "version": "1.0.0",
  "type": "module", // This enables ES6 modules
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}

// math.mjs or math.js (with "type": "module" in package.json)
// Named exports
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;
export const E = 2.71828;

// Default export
export default class Calculator {
    constructor() {
        this.history = [];
    }
    
    calculate(operation, a, b) {
        let result;
        switch (operation) {
            case 'add':
                result = add(a, b);
                break;
            case 'subtract':
                result = subtract(a, b);
                break;
            default:
                throw new Error('Unknown operation');
        }
        
        this.history.push({ operation, a, b, result });
        return result;
    }
    
    getHistory() {
        return this.history;
    }
}

// Re-export from another module
export { formatNumber, validateInput } from './utils.js';

// utils.js
export function formatNumber(num, decimals = 2) {
    return Number(num).toFixed(decimals);
}

export function validateInput(value) {
    return typeof value === 'number' && !isNaN(value);
}

// app.js - Importing ES6 modules
import Calculator, { add, subtract, PI } from './math.js';
import { formatNumber } from './utils.js';

// Import all named exports
import * as MathUtils from './math.js';

// Dynamic imports (useful for code splitting)
async function loadModule() {
    try {
        const { multiply } = await import('./advanced-math.js');
        console.log('Dynamic import result:', multiply(5, 3));
    } catch (error) {
        console.error('Failed to load module:', error);
    }
}

// Usage
const calc = new Calculator();
console.log('Addition:', add(5, 3));
console.log('Calculator result:', calc.calculate('add', 10, 5));
console.log('Formatted PI:', formatNumber(PI, 4));

// Using namespace import
console.log('PI from namespace:', MathUtils.PI);
console.log('Add from namespace:', MathUtils.add(2, 3));

loadModule();

// Mixing CommonJS and ES6 modules
// Import CommonJS module in ES6
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const lodash = require('lodash'); // CommonJS module

// Import JSON files
import config from './config.json' assert { type: 'json' };

// Get current file path (ES6 equivalent of __filename)
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Current file:', __filename);
console.log('Current directory:', __dirname);`
        }
    ],
    filesystem: [
        {
            id: 8,
            title: "📁 File System Operations",
            description: "Working with files and directories using Node.js fs module for reading, writing, and manipulating the file system.",
            color: "blue",
            code: `const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Promisify fs methods for async/await
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

// 1. Reading Files
// Synchronous (blocking)
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('Sync read:', data);
} catch (error) {
    console.error('Sync read error:', error.message);
}

// Asynchronous with callback
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Async read error:', err.message);
        return;
    }
    console.log('Async read:', data);
});

// Asynchronous with Promises
async function readFileExample() {
    try {
        const data = await readFileAsync('example.txt', 'utf8');
        console.log('Promise read:', data);
    } catch (error) {
        console.error('Promise read error:', error.message);
    }
}

// 2. Writing Files
const content = 'Hello, Node.js File System!\\nThis is a new line.';

// Write file (overwrites existing)
fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) throw err;
    console.log('File written successfully');
});

// Append to file
fs.appendFile('log.txt', \`\\n\${new Date().toISOString()}: Log entry\`, (err) => {
    if (err) throw err;
    console.log('Log entry appended');
});

// 3. Directory Operations
// Create directory
fs.mkdir('new-folder', { recursive: true }, (err) => {
    if (err && err.code !== 'EEXIST') {
        console.error('Mkdir error:', err.message);
        return;
    }
    console.log('Directory created');
});

// Read directory contents
fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Readdir error:', err.message);
        return;
    }
    
    console.log('Directory contents:');
    files.forEach(file => {
        const filePath = path.join('.', file);
        const stat = fs.statSync(filePath);
        console.log(\`\${stat.isDirectory() ? '[DIR]' : '[FILE]'} \${file}\`);
    });
});`
        }
    ],
    http: [
        {
            id: 9,
            title: "🌐 HTTP Server & Client",
            description: "Creating HTTP servers and making HTTP requests using Node.js built-in http module with proper request handling.",
            color: "green",
            code: `const http = require('http');
const url = require('url');

// 1. HTTP Server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const method = req.method.toUpperCase();
    
    // Set common headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    console.log(\`\${method} \${pathname}\`);
    
    // Handle different routes
    if (pathname === '/api/users' && method === 'GET') {
        const users = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
        ];
        
        res.writeHead(200);
        res.end(JSON.stringify({
            success: true,
            data: users
        }));
    }
    else if (pathname === '/api/health' && method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        }));
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({
            success: false,
            error: 'Route not found'
        }));
    }
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(\`HTTP Server running on port \${PORT}\`);
});`
        }
    ],
    interview: [
        {
            id: 10,
            title: "❓ Node.js Interview Questions",
            description: "Common Node.js interview questions with detailed explanations and practical examples covering core concepts.",
            color: "red",
            code: `// Q1: What is Node.js and how does it work?
/*
Answer: Node.js is a JavaScript runtime built on Chrome's V8 engine that 
allows running JavaScript on the server-side. Key features:
- Single-threaded with event loop
- Non-blocking I/O operations
- Built-in modules for server-side development
- NPM package ecosystem
*/

// Event Loop Demonstration
console.log('1. Start');
setTimeout(() => console.log('2. Timer'), 0);
setImmediate(() => console.log('3. Immediate'));
process.nextTick(() => console.log('4. Next Tick'));
console.log('5. End');
// Output: 1, 5, 4, 3, 2

// Q2: How do you handle errors in Node.js?
// 1. Try-catch for synchronous code
try {
    const data = JSON.parse('invalid json');
} catch (error) {
    console.error('Sync error:', error.message);
}

// 2. Error-first callbacks
const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
    if (err) {
        console.error('Async error:', err.message);
        return;
    }
    console.log(data);
});

// Q3: What is the difference between require() and import?
// CommonJS (require)
const fs = require('fs');

// ES6 Modules (import) - requires "type": "module"
// import fs from 'fs';

// Q4: Explain EventEmitter
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('logged', { message, timestamp: Date.now() });
    }
}

const logger = new Logger();
logger.on('logged', (data) => {
    console.log(\`Event: \${data.message}\`);
});

logger.log('Hello World');`
        }
    ],
    default: [
        {
            id: 1,
            title: "🚀 Welcome to Node.js Mastery",
            description: "Node.js is a powerful JavaScript runtime for server-side development. Master backend development, APIs, and modern JavaScript.",
            color: "green",
            code: `// Welcome to Node.js!
const http = require('http');
const os = require('os');

function createWelcomeServer() {
    const server = http.createServer((req, res) => {
        const welcomeData = {
            message: "Hello, Node.js World! 🟢",
            nodeVersion: process.version,
            platform: os.platform(),
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        };
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(welcomeData, null, 2));
    });
    
    return server;
}

const server = createWelcomeServer();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(\`🟢 Node.js server running on port \${PORT}\`);
    console.log(\`Visit http://localhost:\${PORT} to see welcome message\`);
});

// Node.js is used for:
// - Web APIs and REST services
// - Real-time applications (WebSockets)
// - Microservices architecture  
// - Command-line tools
// - Desktop applications (Electron)`
        }
    ]
};
const NodeJS = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Node.js</h1>
        <p className="mt-2 text-gray-600">JavaScript runtime for server-side development</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Node.js?</h2>
          <p className="text-gray-600 mb-4">
            Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to 
            run JavaScript on the server side, enabling full-stack JavaScript development.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Event Loop</h4>
              <p className="text-blue-700 text-sm">Single-threaded, non-blocking I/O model for handling requests</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Modules</h4>
              <p className="text-green-700 text-sm">CommonJS modules, require/exports, ES6 modules support</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Streams</h4>
              <p className="text-yellow-700 text-sm">Readable, writable, duplex, and transform streams</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Buffer</h4>
              <p className="text-purple-700 text-sm">Handle binary data efficiently outside V8 heap</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Built-in Modules</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">File System (fs)</h4>
              <p className="text-gray-600 text-sm">Read, write, and manipulate files and directories</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">HTTP/HTTPS</h4>
              <p className="text-gray-600 text-sm">Create web servers and make HTTP requests</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">Path</h4>
              <p className="text-gray-600 text-sm">Handle and transform file and directory paths</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">Process</h4>
              <p className="text-gray-600 text-sm">Access environment variables and process information</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Code Examples</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Basic HTTP Server</h4>
              <pre className="text-sm text-gray-700 overflow-x-auto">
{`const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (path === '/api/users' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ users: [] }));
  } else if (path === '/api/users' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const user = JSON.parse(body);
      res.statusCode = 201;
      res.end(JSON.stringify({ message: 'User created', user }));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
              </pre>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">File Operations</h4>
              <pre className="text-sm text-gray-700 overflow-x-auto">
{`const fs = require('fs').promises;
const path = require('path');

// Async file operations
async function fileOperations() {
  try {
    // Read file
    const data = await fs.readFile('data.txt', 'utf8');
    console.log('File content:', data);

    // Write file
    await fs.writeFile('output.txt', 'Hello Node.js!');
    
    // Check if file exists
    await fs.access('output.txt');
    console.log('File exists');

    // Get file stats
    const stats = await fs.stat('output.txt');
    console.log('File size:', stats.size);

  } catch (error) {
    console.error('File operation error:', error);
  }
}

// Stream operations for large files
const stream = require('stream');

function createFileStream() {
  const readStream = fs.createReadStream('large-file.txt');
  const writeStream = fs.createWriteStream('copy.txt');
  
  readStream.pipe(writeStream);
  
  readStream.on('error', err => console.error('Read error:', err));
  writeStream.on('error', err => console.error('Write error:', err));
  writeStream.on('finish', () => console.log('File copied successfully'));
}`}
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Popular Frameworks & Libraries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Web Frameworks</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>Express.js - Fast, minimalist framework</li>
                <li>Koa.js - Next generation framework</li>
                <li>Fastify - High performance framework</li>
                <li>NestJS - Enterprise applications</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Utilities</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Lodash - Utility library</li>
                <li>Moment.js/Day.js - Date manipulation</li>
                <li>Axios - HTTP client</li>
                <li>Joi - Data validation</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Database</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>Mongoose - MongoDB ODM</li>
                <li>Sequelize - SQL ORM</li>
                <li>TypeORM - TypeScript ORM</li>
                <li>Prisma - Modern database toolkit</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Testing</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>Jest - Testing framework</li>
                <li>Mocha - Test runner</li>
                <li>Supertest - HTTP assertions</li>
                <li>Sinon - Test spies and mocks</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interview Questions</h3>
          <div className="space-y-2">
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">How does the Node.js event loop work?</summary>
              <p className="mt-2 text-gray-600 text-sm">The event loop is a single-threaded loop that processes callbacks from the event queue. It has phases: timers, pending callbacks, poll, check, and close callbacks.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What is the difference between process.nextTick() and setImmediate()?</summary>
              <p className="mt-2 text-gray-600 text-sm">process.nextTick() executes before any other I/O events, while setImmediate() executes after I/O events in the current phase of the event loop.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">Explain streams in Node.js</summary>
              <p className="mt-2 text-gray-600 text-sm">Streams are objects that handle reading or writing data continuously. Types include Readable, Writable, Duplex, and Transform streams.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">How do you handle errors in Node.js?</summary>
              <p className="mt-2 text-gray-600 text-sm">Use try/catch for synchronous code, error-first callbacks, Promise rejection handlers, and process.on('uncaughtException') for unhandled errors.</p>
            </details>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Express.js Example</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-700 overflow-x-auto">
{`const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  
  // Save user logic here
  res.status(201).json({ message: 'User created', user: { name, email } });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
            </pre>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Do</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Use environment variables for config</li>
                <li>Implement proper error handling</li>
                <li>Use async/await for better readability</li>
                <li>Implement logging and monitoring</li>
                <li>Use clustering for CPU-intensive tasks</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Avoid</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Blocking the event loop</li>
                <li>Using synchronous file operations</li>
                <li>Not handling promise rejections</li>
                <li>Storing sensitive data in code</li>
                <li>Not validating user input</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NodeJS;

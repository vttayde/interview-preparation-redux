import { useState } from 'react';
import StudyNavigation from '../../../components/layout/StudyNavigation';

const NodeJS = () => {
    const [activeTab, setActiveTab] = useState('basics');

    const tabs = [
        { id: 'basics', name: 'Node.js Fundamentals', icon: '🟢' },
        { id: 'modules', name: 'Modules & NPM', icon: '📦' },
        { id: 'async', name: 'Async Programming', icon: '⚡' },
        { id: 'frameworks', name: 'Frameworks', icon: '🚀' },
        { id: 'examples', name: 'Code Examples', icon: '💻' },
        { id: 'interview', name: 'Interview Q&A', icon: '❓' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'basics':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Node.js?</h2>
                            <p className="text-gray-600 mb-4">
                                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to 
                                run JavaScript on the server side, enabling full-stack JavaScript development.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Features</h3>
                            <div className="space-y-6">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">🔄 Event Loop</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Single-threaded, non-blocking I/O model that handles requests efficiently using an event-driven architecture.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>How it works:</strong>
                                        <pre className="mt-2 text-green-800">
{`1. Call Stack - Executes functions
2. Event Queue - Holds callback functions
3. Event Loop - Moves callbacks to call stack
4. Non-blocking I/O operations run in background`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">📦 NPM Ecosystem</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        Node Package Manager provides access to thousands of reusable packages and modules.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>NPM Commands:</strong>
                                        <pre className="mt-2 text-blue-800">
{`npm init                 # Initialize package.json
npm install <package>    # Install package
npm install -g <package> # Install globally
npm uninstall <package>  # Remove package
npm update              # Update packages`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">🌊 Streams</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        Handle data flowing through your application efficiently with readable, writable, and transform streams.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Stream Types:</strong>
                                        <pre className="mt-2 text-purple-800">
{`Readable  - Read data from source
Writable  - Write data to destination
Duplex    - Both readable and writable
Transform - Modify data as it passes through`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'modules':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modules & Package Management</h2>
                            <p className="text-gray-600 mb-4">
                                Node.js uses CommonJS module system and NPM for package management.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Module Systems</h3>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3">CommonJS Modules</h4>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <pre className="text-blue-800">
{`// Exporting
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// Or individual exports
exports.multiply = (a, b) => a * b;

// Importing
const math = require('./math');
const { add, subtract } = require('./math');`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3">ES6 Modules</h4>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <pre className="text-green-800">
{`// Exporting
export const add = (a, b) => a + b;
export default function multiply(a, b) {
    return a * b;
}

// Importing
import multiply, { add } from './math.js';
import * as math from './math.js';`}
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
                                Node.js excels at handling asynchronous operations with callbacks, promises, and async/await.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Async Patterns</h3>
                            <div className="space-y-4">
                                <div className="bg-red-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-red-800 mb-3">Callbacks</h4>
                                    <div className="bg-red-100 p-3 rounded text-xs">
                                        <pre className="text-red-800">
{`const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('File content:', data);
});`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3">Promises</h4>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <pre className="text-blue-800">
{`const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
    .then(data => console.log('File content:', data))
    .catch(err => console.error('Error:', err));`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3">Async/Await</h4>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <pre className="text-green-800">
{`const fs = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fs.readFile('file.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error:', err);
    }
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'frameworks':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Node.js Frameworks</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-2">Express.js</h4>
                                    <p className="text-blue-700 text-sm">Fast, minimalist web framework</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-2">Koa.js</h4>
                                    <p className="text-green-700 text-sm">Modern framework with async/await</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-2">Fastify</h4>
                                    <p className="text-purple-700 text-sm">High-performance web framework</p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-2">NestJS</h4>
                                    <p className="text-yellow-700 text-sm">TypeScript-first enterprise framework</p>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'examples':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Node.js Code Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Basic HTTP Server</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
{`const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World!</h1>');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Express.js API</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
{`const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
    res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    res.status(201).json({ user });
});

app.listen(3000, () => {
    console.log('API running on port 3000');
});`}
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'interview':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Node.js Interview Questions</h2>
                            <div className="space-y-4">
                                <details className="bg-blue-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-blue-800 cursor-pointer mb-2">
                                        What is the Event Loop in Node.js?
                                    </summary>
                                    <div className="text-blue-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> The Event Loop is what allows Node.js to perform non-blocking I/O operations despite being single-threaded.</p>
                                        <p><strong>How it works:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li>Executes callbacks from the event queue</li>
                                            <li>Delegates I/O operations to the system</li>
                                            <li>Continues executing other code while waiting</li>
                                            <li>Processes completed operations in phases</li>
                                        </ul>
                                    </div>
                                </details>

                                <details className="bg-green-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-green-800 cursor-pointer mb-2">
                                        Explain the difference between process.nextTick() and setImmediate()
                                    </summary>
                                    <div className="text-green-700 text-sm space-y-2">
                                        <p><strong>process.nextTick():</strong> Executes callback before the next iteration of the event loop</p>
                                        <p><strong>setImmediate():</strong> Executes callback after I/O events in the current phase</p>
                                        <p><strong>Order:</strong> nextTick() has higher priority than setImmediate()</p>
                                    </div>
                                </details>
                            </div>
                        </section>
                    </div>
                );

            default:
                return <div>Select a tab to view content</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Node.js Study Guide</h1>
                    <p className="text-xl text-gray-600">Master server-side JavaScript development</p>
                </div>

                {/* Tab Navigation */}
                <div className="mb-8">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    <span className="mr-2">{tab.icon}</span>
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    {renderTabContent()}
                </div>
            </div>
            
            <StudyNavigation />
        </div>
    );
};

export default NodeJS;

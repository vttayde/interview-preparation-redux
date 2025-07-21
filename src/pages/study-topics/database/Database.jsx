import { useState } from 'react';
import StudyNavigation from '../../../components/layout/StudyNavigation';

const Database = () => {
    const [activeTab, setActiveTab] = useState('basics');

    const tabs = [
        { id: 'basics', name: 'Database Fundamentals', icon: '🗄️' },
        { id: 'sql', name: 'SQL Queries', icon: '📝' },
        { id: 'nosql', name: 'NoSQL Databases', icon: '🍃' },
        { id: 'design', name: 'Database Design', icon: '🎨' },
        { id: 'examples', name: 'Code Examples', icon: '💻' },
        { id: 'interview', name: 'Interview Q&A', icon: '❓' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'basics':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Database Fundamentals</h2>
                            <p className="text-gray-600 mb-4">
                                Databases are organized collections of data that can be easily accessed, managed, and updated.
                                They are essential for storing and retrieving information in applications.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Databases</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">🏗️ Relational Databases (SQL)</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        Store data in tables with rows and columns, using relationships between tables.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Popular SQL Databases:</strong>
                                        <ul className="mt-2 text-blue-800 space-y-1">
                                            <li>• MySQL - Open source, widely used</li>
                                            <li>• PostgreSQL - Advanced features, standards compliant</li>
                                            <li>• SQLite - Lightweight, file-based</li>
                                            <li>• Oracle - Enterprise-grade</li>
                                            <li>• SQL Server - Microsoft's solution</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">🍃 NoSQL Databases</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Non-relational databases that store data in flexible formats like documents, key-value pairs, or graphs.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Types & Examples:</strong>
                                        <ul className="mt-2 text-green-800 space-y-1">
                                            <li>• Document: MongoDB, CouchDB</li>
                                            <li>• Key-Value: Redis, DynamoDB</li>
                                            <li>• Column: Cassandra, HBase</li>
                                            <li>• Graph: Neo4j, Amazon Neptune</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">ACID Properties</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-2">Atomicity</h4>
                                    <p className="text-purple-700 text-sm">All operations in a transaction succeed or fail together</p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-800 mb-2">Consistency</h4>
                                    <p className="text-red-700 text-sm">Database remains in valid state before and after transaction</p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-2">Isolation</h4>
                                    <p className="text-yellow-700 text-sm">Concurrent transactions don't interfere with each other</p>
                                </div>
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-indigo-800 mb-2">Durability</h4>
                                    <p className="text-indigo-700 text-sm">Committed changes persist even if system fails</p>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'sql':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">SQL Queries</h2>
                            <p className="text-gray-600 mb-4">
                                Structured Query Language (SQL) is used to communicate with relational databases.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic SQL Operations</h3>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3">SELECT Queries</h4>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <pre className="text-blue-800">
{`-- Basic SELECT
SELECT * FROM users;
SELECT name, email FROM users;

-- WHERE clause
SELECT * FROM users WHERE age > 18;
SELECT * FROM users WHERE city = 'New York';

-- ORDER BY
SELECT * FROM users ORDER BY name ASC;
SELECT * FROM users ORDER BY age DESC, name ASC;

-- LIMIT
SELECT * FROM users LIMIT 10;
SELECT * FROM users LIMIT 10 OFFSET 20;`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3">INSERT, UPDATE, DELETE</h4>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <pre className="text-green-800">
{`-- INSERT
INSERT INTO users (name, email, age) 
VALUES ('John Doe', 'john@example.com', 25);

-- Multiple inserts
INSERT INTO users (name, email, age) VALUES 
('Alice', 'alice@example.com', 30),
('Bob', 'bob@example.com', 28);

-- UPDATE
UPDATE users SET age = 26 WHERE name = 'John Doe';
UPDATE users SET city = 'Boston' WHERE age > 25;

-- DELETE
DELETE FROM users WHERE age < 18;
DELETE FROM users WHERE city IS NULL;`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3">JOINs</h4>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <pre className="text-purple-800">
{`-- INNER JOIN
SELECT u.name, p.title 
FROM users u 
INNER JOIN posts p ON u.id = p.user_id;

-- LEFT JOIN
SELECT u.name, p.title 
FROM users u 
LEFT JOIN posts p ON u.id = p.user_id;

-- RIGHT JOIN
SELECT u.name, p.title 
FROM users u 
RIGHT JOIN posts p ON u.id = p.user_id;

-- FULL OUTER JOIN
SELECT u.name, p.title 
FROM users u 
FULL OUTER JOIN posts p ON u.id = p.user_id;`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'nosql':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">NoSQL Databases</h2>
                            <p className="text-gray-600 mb-4">
                                NoSQL databases provide flexible data models for modern applications.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">MongoDB Examples</h3>
                            <div className="space-y-4">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3">Basic Operations</h4>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <pre className="text-green-800">
{`// Insert document
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 25
});

// Find documents
db.users.find({ age: { $gt: 18 } });
db.users.findOne({ email: "john@example.com" });

// Update document
db.users.updateOne(
    { email: "john@example.com" },
    { $set: { age: 26 } }
);

// Delete document
db.users.deleteOne({ email: "john@example.com" });`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'design':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Database Design</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-2">Normalization</h4>
                                    <p className="text-blue-700 text-sm">Organize data to reduce redundancy and improve integrity</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-2">Indexing</h4>
                                    <p className="text-green-700 text-sm">Improve query performance with proper indexes</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-2">Relationships</h4>
                                    <p className="text-purple-700 text-sm">One-to-one, one-to-many, many-to-many</p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-2">Performance</h4>
                                    <p className="text-yellow-700 text-sm">Query optimization and scaling strategies</p>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'examples':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Database Code Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Node.js with MongoDB</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
{`const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    
    const db = client.db('myapp');
    const users = db.collection('users');
    
    // Insert user
    await users.insertOne({
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: new Date()
    });
    
    // Find users
    const allUsers = await users.find({}).toArray();
    console.log(allUsers);
    
    await client.close();
}`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Node.js with MySQL</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
{`const mysql = require('mysql2/promise');

async function connectToMySQL() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'myapp'
    });
    
    // Insert user
    await connection.execute(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        ['John Doe', 'john@example.com']
    );
    
    // Select users
    const [rows] = await connection.execute(
        'SELECT * FROM users WHERE age > ?',
        [18]
    );
    
    console.log(rows);
    await connection.end();
}`}
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
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Database Interview Questions</h2>
                            <div className="space-y-4">
                                <details className="bg-blue-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-blue-800 cursor-pointer mb-2">
                                        What is the difference between SQL and NoSQL databases?
                                    </summary>
                                    <div className="text-blue-700 text-sm space-y-2">
                                        <p><strong>SQL Databases:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li>Structured data in tables</li>
                                            <li>ACID compliance</li>
                                            <li>Fixed schema</li>
                                            <li>Complex queries with JOINs</li>
                                        </ul>
                                        <p><strong>NoSQL Databases:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li>Flexible data models</li>
                                            <li>Eventually consistent</li>
                                            <li>Dynamic schema</li>
                                            <li>Horizontal scaling</li>
                                        </ul>
                                    </div>
                                </details>

                                <details className="bg-green-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-green-800 cursor-pointer mb-2">
                                        Explain database normalization
                                    </summary>
                                    <div className="text-green-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> Normalization is the process of organizing data to reduce redundancy and improve data integrity.</p>
                                        <p><strong>Normal Forms:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>1NF:</strong> Atomic values, no repeating groups</li>
                                            <li><strong>2NF:</strong> 1NF + no partial dependencies</li>
                                            <li><strong>3NF:</strong> 2NF + no transitive dependencies</li>
                                        </ul>
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
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Database Study Guide</h1>
                    <p className="text-xl text-gray-600">Master SQL, NoSQL, and database design principles</p>
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

export default Database;

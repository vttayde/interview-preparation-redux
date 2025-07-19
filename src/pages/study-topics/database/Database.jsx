const Database = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Database</h1>
        <p className="mt-2 text-gray-600">Data storage and management systems</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Database Types</h2>
          <p className="text-gray-600 mb-4">
            Databases are organized collections of data that can be easily accessed, managed, and updated.
            There are two main types: SQL (relational) and NoSQL (non-relational) databases.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">SQL vs NoSQL</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">SQL Databases</h4>
              <p className="text-blue-700 text-sm mb-2">Structured data with fixed schema</p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>MySQL, PostgreSQL, SQLite</li>
                <li>ACID properties</li>
                <li>Complex queries with JOINs</li>
                <li>Vertical scaling</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">NoSQL Databases</h4>
              <p className="text-green-700 text-sm mb-2">Flexible schema for unstructured data</p>
              <ul className="text-green-700 text-sm space-y-1">
                <li>MongoDB, Redis, Cassandra</li>
                <li>Eventual consistency</li>
                <li>Document, key-value, column</li>
                <li>Horizontal scaling</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">SQL Fundamentals</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">CRUD Operations</h4>
              <p className="text-gray-600 text-sm">CREATE, READ, UPDATE, DELETE - basic database operations</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">Relationships</h4>
              <p className="text-gray-600 text-sm">One-to-one, one-to-many, many-to-many relationships</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">Normalization</h4>
              <p className="text-gray-600 text-sm">1NF, 2NF, 3NF - reducing data redundancy</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">Indexing</h4>
              <p className="text-gray-600 text-sm">Improve query performance with proper indexing</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">SQL Examples</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Basic SQL Queries</h4>
              <pre className="text-sm text-gray-700 overflow-x-auto">
{`-- Create table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO users (name, email) VALUES 
  ('John Doe', 'john@example.com'),
  ('Jane Smith', 'jane@example.com');

-- Select with conditions
SELECT * FROM users 
WHERE created_at >= '2024-01-01' 
ORDER BY name ASC;

-- Update data
UPDATE users 
SET name = 'John Updated' 
WHERE email = 'john@example.com';

-- Delete data
DELETE FROM users 
WHERE id = 1;`}
              </pre>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Advanced SQL</h4>
              <pre className="text-sm text-gray-700 overflow-x-auto">
{`-- JOINs
SELECT u.name, p.title 
FROM users u
INNER JOIN posts p ON u.id = p.user_id;

-- Aggregation
SELECT COUNT(*) as user_count, 
       AVG(age) as avg_age 
FROM users 
GROUP BY city 
HAVING COUNT(*) > 5;

-- Subqueries
SELECT name FROM users 
WHERE id IN (
  SELECT user_id FROM orders 
  WHERE total > 1000
);

-- Window functions
SELECT name, salary,
  RANK() OVER (ORDER BY salary DESC) as salary_rank
FROM employees;`}
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">MongoDB Examples</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-700 overflow-x-auto">
{`// Insert documents
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  interests: ["coding", "reading"]
});

// Find documents
db.users.find({ age: { $gte: 18 } });

// Update documents
db.users.updateOne(
  { email: "john@example.com" },
  { $set: { age: 31 }, $push: { interests: "gaming" } }
);

// Aggregation pipeline
db.users.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);

// Create index
db.users.createIndex({ email: 1 });`}
            </pre>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Database Design Patterns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Relational Patterns</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>Foreign Keys for relationships</li>
                <li>Junction tables for many-to-many</li>
                <li>Composite keys</li>
                <li>Cascading operations</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">NoSQL Patterns</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Embedding vs Referencing</li>
                <li>Denormalization for performance</li>
                <li>Bucket pattern for time-series</li>
                <li>Schema versioning</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Optimization</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Indexing Strategy</h4>
              <p className="text-gray-600 text-sm">Create indexes on frequently queried columns, avoid over-indexing</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">Query Optimization</h4>
              <p className="text-gray-600 text-sm">Use EXPLAIN plans, avoid N+1 queries, optimize JOINs</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">Caching</h4>
              <p className="text-gray-600 text-sm">Redis, Memcached for frequently accessed data</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">Connection Pooling</h4>
              <p className="text-gray-600 text-sm">Reuse database connections to reduce overhead</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interview Questions</h3>
          <div className="space-y-2">
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What are ACID properties?</summary>
              <p className="mt-2 text-gray-600 text-sm">Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions), Durability (persistent storage).</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">Explain different types of JOINs</summary>
              <p className="mt-2 text-gray-600 text-sm">INNER JOIN (matching records), LEFT JOIN (all left + matching right), RIGHT JOIN (all right + matching left), FULL OUTER JOIN (all records).</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What is database normalization?</summary>
              <p className="mt-2 text-gray-600 text-sm">Process of organizing data to reduce redundancy. 1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies).</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">When to use SQL vs NoSQL?</summary>
              <p className="mt-2 text-gray-600 text-sm">Use SQL for complex relationships, ACID requirements. Use NoSQL for flexible schema, horizontal scaling, large volumes of unstructured data.</p>
            </details>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Popular Databases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">SQL Databases</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>PostgreSQL - Advanced SQL features</li>
                <li>MySQL - Popular web database</li>
                <li>SQLite - Embedded database</li>
                <li>SQL Server - Enterprise Microsoft</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">NoSQL Databases</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>MongoDB - Document database</li>
                <li>Redis - In-memory key-value</li>
                <li>Cassandra - Wide-column store</li>
                <li>DynamoDB - AWS managed NoSQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Do</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Use parameterized queries</li>
                <li>Regular backups and recovery tests</li>
                <li>Monitor query performance</li>
                <li>Implement proper security</li>
                <li>Use transactions appropriately</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Avoid</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>SQL injection vulnerabilities</li>
                <li>Storing passwords in plain text</li>
                <li>Over-normalization or under-normalization</li>
                <li>Not using indexes strategically</li>
                <li>Ignoring database constraints</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Database;

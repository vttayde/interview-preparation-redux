// Database Learning Constants - Step by Step Approach
// Comprehensive database concepts for interview preparation

export const DATABASE_TABS = [
    { id: 'default', name: 'Welcome', icon: '🎯' },
    { id: 'fundamentals', name: 'DB Fundamentals', icon: '🏗️' },
    { id: 'sql', name: 'SQL Basics', icon: '📝' },
    { id: 'advanced-sql', name: 'Advanced SQL', icon: '🔍' },
    { id: 'nosql', name: 'NoSQL Databases', icon: '🍃' },
    { id: 'mongodb', name: 'MongoDB', icon: '🥭' },
    { id: 'design', name: 'Database Design', icon: '🏛️' },
    { id: 'optimization', name: 'Performance', icon: '⚡' },
    { id: 'transactions', name: 'Transactions', icon: '🔄' },
    { id: 'interview', name: 'Interview Q&A', icon: '❓' }
];

export const DATABASE_UI_TEXT = {
    title: "Database Mastery Hub",
    heading: "Master Database Technologies",
    description: "Comprehensive guide to SQL, NoSQL, database design, optimization, and interview preparation with practical examples and real-world scenarios."
};

export const DATABASE_CONTENT = {
    default: [
        {
            id: 1,
            title: "🎯 Welcome to Database Mastery",
            description: "Master database technologies from SQL fundamentals to advanced NoSQL concepts. Learn database design, optimization, and prepare for technical interviews with practical examples.",
            color: "blue",
            code: `-- Welcome to Database World! 🗄️
-- This comprehensive guide covers:

-- 1. RELATIONAL DATABASES (SQL)
SELECT 'Hello Database World!' as welcome_message,
       'SQL is the language of data' as sql_power,
       'Structured Query Language' as full_form;

-- 2. DATABASE DESIGN PRINCIPLES
-- ACID Properties:
-- Atomicity   - All or nothing transactions
-- Consistency - Data integrity maintained
-- Isolation   - Concurrent transactions don't interfere
-- Durability  - Committed data survives system failures

-- 3. NOSQL DATABASES
-- Document Stores: MongoDB, CouchDB
-- Key-Value: Redis, DynamoDB
-- Column Family: Cassandra, HBase
-- Graph: Neo4j, Amazon Neptune

-- 4. COMMON DATABASE OPERATIONS
CREATE DATABASE interview_prep;
USE interview_prep;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES 
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com');

SELECT * FROM users WHERE created_at >= CURDATE();

-- 5. PERFORMANCE CONCEPTS
-- Indexing, Query Optimization, Normalization
-- Partitioning, Replication, Sharding

-- Database technologies you'll master:
-- MySQL, PostgreSQL, MongoDB, Redis
-- SQL Server, Oracle, SQLite, Cassandra`
        }
    ],
    fundamentals: [
        {
            id: 2,
            title: "🏗️ Database Fundamentals",
            description: "Core database concepts including ACID properties, database types, and the difference between SQL and NoSQL databases.",
            color: "green",
            code: `-- DATABASE FUNDAMENTALS

-- 1. WHAT IS A DATABASE?
/*
A database is an organized collection of structured information,
or data, typically stored electronically in a computer system.
*/

-- 2. DATABASE MANAGEMENT SYSTEM (DBMS)
/*
DBMS is software that interacts with users, applications,
and the database to capture and analyze data.

Popular DBMS:
- MySQL (Open source, web applications)
- PostgreSQL (Advanced open source)
- MongoDB (Document-based NoSQL)
- Oracle (Enterprise solutions)
- SQL Server (Microsoft ecosystem)
*/

-- 3. ACID PROPERTIES (Relational Databases)
START TRANSACTION;

-- ATOMICITY: All operations succeed or all fail
INSERT INTO accounts (user_id, balance) VALUES (1, 1000);
INSERT INTO accounts (user_id, balance) VALUES (2, 500);
-- If any INSERT fails, all are rolled back

-- CONSISTENCY: Database remains in valid state
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;
-- Total money in system remains same

-- ISOLATION: Concurrent transactions don't interfere
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- DURABILITY: Committed changes survive system crashes
COMMIT; -- Changes are permanently saved

-- 4. DATABASE TYPES

-- RELATIONAL (SQL)
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department_id INT,
    salary DECIMAL(10,2),
    hire_date DATE,
    FOREIGN KEY (department_id) REFERENCES departments(dept_id)
);

-- KEY-VALUE (NoSQL)
-- Redis example:
-- SET user:1000 "John Doe"
-- GET user:1000

-- DOCUMENT (NoSQL)
-- MongoDB example:
-- {
--   "_id": "507f1f77bcf86cd799439011",
--   "name": "John Doe",
--   "email": "john@example.com",
--   "address": {
--     "street": "123 Main St",
--     "city": "New York"
--   },
--   "hobbies": ["reading", "swimming"]
-- }

-- 5. CAP THEOREM (NoSQL)
/*
In distributed systems, you can only guarantee 2 of 3:
- CONSISTENCY: All nodes see same data simultaneously
- AVAILABILITY: System remains operational
- PARTITION TOLERANCE: System continues despite network failures

Examples:
- MongoDB: CP (Consistency + Partition tolerance)
- Cassandra: AP (Availability + Partition tolerance)
- Traditional RDBMS: CA (Consistency + Availability)
*/`
        },
        {
            id: 3,
            title: "📊 Data Models & Relationships",
            description: "Understanding different data models, entity relationships, and how to structure data effectively in databases.",
            color: "purple",
            code: `-- DATA MODELS & RELATIONSHIPS

-- 1. ENTITY-RELATIONSHIP (ER) MODEL
-- Entities: Things that exist (User, Order, Product)
-- Attributes: Properties of entities (name, price, date)
-- Relationships: How entities connect (User places Order)

-- 2. RELATIONSHIP TYPES

-- ONE-TO-ONE (1:1)
-- Each user has one profile, each profile belongs to one user
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100)
);

CREATE TABLE user_profiles (
    profile_id INT PRIMARY KEY,
    user_id INT UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- ONE-TO-MANY (1:M)
-- One customer can have many orders
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- MANY-TO-MANY (M:N)
-- Students can enroll in many courses, courses can have many students
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    credits INT
);

-- Junction/Bridge table for M:N relationship
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    grade CHAR(2),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    UNIQUE(student_id, course_id) -- Prevent duplicate enrollments
);

-- 3. REFERENTIAL INTEGRITY
-- Ensures relationships between tables remain consistent

-- CASCADE operations
ALTER TABLE orders 
ADD CONSTRAINT fk_customer 
FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
ON DELETE CASCADE  -- Delete orders when customer is deleted
ON UPDATE CASCADE; -- Update order's customer_id when customer_id changes

-- 4. NORMALIZATION EXAMPLE
-- UNNORMALIZED (redundant data)
CREATE TABLE order_details_unnormalized (
    order_id INT,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    product_name VARCHAR(100),
    product_price DECIMAL(10,2),
    quantity INT
);

-- NORMALIZED (separate entities)
-- Already shown above with customers, orders, and products tables

-- 5. QUERY RELATIONSHIPS
-- Get all orders for a specific customer
SELECT o.order_id, o.order_date, o.total_amount, c.customer_name
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE c.customer_name = 'John Doe';

-- Get all courses a student is enrolled in
SELECT s.student_name, c.course_name, e.grade
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id
WHERE s.student_name = 'Alice Johnson';`
        }
    ],
    sql: [
        {
            id: 4,
            title: "📝 SQL Basics - CRUD Operations",
            description: "Master the fundamental SQL operations: CREATE, READ, UPDATE, DELETE with practical examples and best practices.",
            color: "blue",
            code: `-- SQL BASICS - CRUD OPERATIONS

-- 1. CREATE (Data Definition Language - DDL)
-- Create database
CREATE DATABASE company_db;
USE company_db;

-- Create table with constraints
CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    hire_date DATE NOT NULL,
    job_title VARCHAR(100),
    salary DECIMAL(10,2) CHECK (salary > 0),
    department_id INT,
    manager_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_department (department_id),
    INDEX idx_manager (manager_id)
);

CREATE TABLE departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL UNIQUE,
    location VARCHAR(100),
    budget DECIMAL(12,2)
);

-- Add foreign key constraints
ALTER TABLE employees 
ADD CONSTRAINT fk_emp_dept 
FOREIGN KEY (department_id) REFERENCES departments(dept_id);

-- 2. INSERT (Create Data)
INSERT INTO departments (dept_name, location, budget) VALUES
('Engineering', 'San Francisco', 2000000.00),
('Marketing', 'New York', 800000.00),
('Sales', 'Chicago', 1200000.00),
('HR', 'Austin', 600000.00);

INSERT INTO employees (first_name, last_name, email, hire_date, job_title, salary, department_id) VALUES
('John', 'Doe', 'john.doe@company.com', '2023-01-15', 'Software Engineer', 85000.00, 1),
('Jane', 'Smith', 'jane.smith@company.com', '2023-02-01', 'Marketing Manager', 75000.00, 2);

-- 3. SELECT (Read Data)
SELECT * FROM employees;
SELECT first_name, last_name, salary FROM employees WHERE salary > 70000;
SELECT * FROM employees WHERE email LIKE '%@company.com';
SELECT first_name, last_name, salary FROM employees ORDER BY salary DESC LIMIT 3;

-- 4. UPDATE (Modify Data)
UPDATE employees SET salary = 90000.00 WHERE emp_id = 1;
UPDATE employees SET salary = salary * 1.05 WHERE department_id = 1;

-- 5. DELETE (Remove Data)
DELETE FROM employees WHERE emp_id = 999;
-- Soft delete (recommended)
ALTER TABLE employees ADD COLUMN is_active BOOLEAN DEFAULT TRUE;
UPDATE employees SET is_active = FALSE WHERE emp_id = 999;`
        },
        {
            id: 5,
            title: "🔗 SQL Joins & Relationships", 
            description: "Master SQL JOIN operations to combine data from multiple tables and understand different types of joins.",
            color: "green",
            code: `-- SQL JOINS & RELATIONSHIPS

-- Sample tables for demonstration
CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(100),
    country VARCHAR(50)
);

CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200),
    author_id INT,
    price DECIMAL(8,2),
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

-- Insert sample data
INSERT INTO authors VALUES
(1, 'J.K. Rowling', 'UK'),
(2, 'Stephen King', 'USA'),
(3, 'Agatha Christie', 'UK');

INSERT INTO books VALUES
(1, 'Harry Potter', 1, 12.99),
(2, 'The Shining', 2, 14.99),
(3, 'Murder on Orient Express', 3, 10.99),
(4, 'Orphaned Book', NULL, 9.99);

-- 1. INNER JOIN - matching records from both tables
SELECT b.title, a.author_name
FROM books b
INNER JOIN authors a ON b.author_id = a.author_id;

-- 2. LEFT JOIN - all records from left table
SELECT b.title, a.author_name
FROM books b
LEFT JOIN authors a ON b.author_id = a.author_id;

-- 3. RIGHT JOIN - all records from right table  
SELECT b.title, a.author_name
FROM books b
RIGHT JOIN authors a ON b.author_id = a.author_id;

-- 4. Complex JOIN with multiple tables
SELECT c.customer_name, b.title, a.author_name, o.quantity
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id
INNER JOIN books b ON o.book_id = b.book_id
INNER JOIN authors a ON b.author_id = a.author_id;

-- 5. SELF JOIN - employees and their managers
SELECT e1.first_name AS employee, e2.first_name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.emp_id;`
        }
    ],
    'advanced-sql': [
        {
            id: 6,
            title: "🔍 Advanced SQL Functions",
            description: "Master advanced SQL concepts including window functions, CTEs, stored procedures, and complex queries for data analysis.",
            color: "purple",
            code: `-- ADVANCED SQL FUNCTIONS

-- 1. WINDOW FUNCTIONS
-- Sample sales data
CREATE TABLE sales (
    sale_id INT PRIMARY KEY,
    employee_id INT,
    sale_date DATE,
    amount DECIMAL(10,2),
    region VARCHAR(50)
);

INSERT INTO sales VALUES
(1, 101, '2023-01-15', 1500.00, 'North'),
(2, 102, '2023-01-16', 2200.00, 'South'),
(3, 101, '2023-01-17', 1800.00, 'North'),
(4, 103, '2023-01-18', 2500.00, 'East'),
(5, 102, '2023-01-19', 1900.00, 'South');

-- ROW_NUMBER() - assigns unique sequential numbers
SELECT 
    employee_id,
    sale_date,
    amount,
    ROW_NUMBER() OVER (ORDER BY amount DESC) as sales_rank
FROM sales;

-- RANK() and DENSE_RANK() - handles ties differently
SELECT 
    employee_id,
    amount,
    RANK() OVER (ORDER BY amount DESC) as rank_with_gaps,
    DENSE_RANK() OVER (ORDER BY amount DESC) as dense_rank
FROM sales;

-- PARTITION BY - window function within groups
SELECT 
    employee_id,
    region,
    amount,
    ROW_NUMBER() OVER (PARTITION BY region ORDER BY amount DESC) as region_rank,
    SUM(amount) OVER (PARTITION BY region) as region_total
FROM sales;

-- LAG() and LEAD() - access previous/next rows
SELECT 
    sale_date,
    amount,
    LAG(amount, 1) OVER (ORDER BY sale_date) as previous_sale,
    LEAD(amount, 1) OVER (ORDER BY sale_date) as next_sale,
    amount - LAG(amount, 1) OVER (ORDER BY sale_date) as change_from_prev
FROM sales;

-- RUNNING TOTALS with SUM() OVER()
SELECT 
    sale_date,
    amount,
    SUM(amount) OVER (ORDER BY sale_date) as running_total,
    AVG(amount) OVER (ORDER BY sale_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg_3
FROM sales;

-- 2. COMMON TABLE EXPRESSIONS (CTEs)
-- Simple CTE
WITH high_sales AS (
    SELECT employee_id, amount, region
    FROM sales
    WHERE amount > 2000
)
SELECT region, COUNT(*) as high_sales_count, AVG(amount) as avg_amount
FROM high_sales
GROUP BY region;

-- Recursive CTE - organizational hierarchy
WITH RECURSIVE employee_hierarchy AS (
    -- Base case: top-level managers
    SELECT emp_id, first_name, manager_id, 1 as level, first_name as path
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case: employees with managers
    SELECT e.emp_id, e.first_name, e.manager_id, eh.level + 1, 
           CONCAT(eh.path, ' -> ', e.first_name)
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.emp_id
)
SELECT level, first_name, path
FROM employee_hierarchy
ORDER BY level, first_name;

-- 3. ADVANCED AGGREGATIONS
-- CASE statements for conditional aggregation
SELECT 
    region,
    COUNT(*) as total_sales,
    SUM(CASE WHEN amount > 2000 THEN 1 ELSE 0 END) as high_value_sales,
    SUM(CASE WHEN amount > 2000 THEN amount ELSE 0 END) as high_value_revenue,
    AVG(CASE WHEN amount > 2000 THEN amount END) as avg_high_value
FROM sales
GROUP BY region;

-- ROLLUP and CUBE for subtotals (MySQL 8.0+)
SELECT 
    region,
    employee_id,
    SUM(amount) as total_amount
FROM sales
GROUP BY region, employee_id WITH ROLLUP;

-- 4. SUBQUERIES AND EXISTS
-- Correlated subquery
SELECT e.first_name, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees e2
    WHERE e2.department_id = e.department_id
);

-- EXISTS clause
SELECT c.customer_name
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
    AND o.order_date >= '2023-01-01'
);

-- 5. PIVOT-like operations (MySQL doesn't have PIVOT, use CASE)
SELECT 
    employee_id,
    SUM(CASE WHEN region = 'North' THEN amount ELSE 0 END) as North_Sales,
    SUM(CASE WHEN region = 'South' THEN amount ELSE 0 END) as South_Sales,
    SUM(CASE WHEN region = 'East' THEN amount ELSE 0 END) as East_Sales,
    SUM(CASE WHEN region = 'West' THEN amount ELSE 0 END) as West_Sales
FROM sales
GROUP BY employee_id;`
        }
    ],
    nosql: [
        {
            id: 7,
            title: "🍃 NoSQL Database Types",
            description: "Understanding different NoSQL database types: Document, Key-Value, Column-Family, and Graph databases with practical examples.",
            color: "orange",
            code: `// NoSQL DATABASE TYPES

// 1. DOCUMENT DATABASES (MongoDB, CouchDB)
// Data stored as documents (JSON-like)

// MongoDB Example - User Profile Document
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "username": "john_doe",
  "email": "john@example.com",
  "profile": {
    "firstName": "John",
    "lastName": "Doe",
    "age": 28,
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "zipCode": "10001",
      "country": "USA"
    }
  },
  "preferences": {
    "theme": "dark",
    "notifications": true,
    "language": "en"
  },
  "tags": ["developer", "javascript", "mongodb"],
  "joinDate": ISODate("2023-01-15T00:00:00Z"),
  "lastLogin": ISODate("2023-07-25T10:30:00Z"),
  "isActive": true
}

// MongoDB Query Examples
// Find users by city
db.users.find({ "profile.address.city": "New York" })

// Find users with specific tags
db.users.find({ "tags": { $in: ["developer", "designer"] } })

// Update nested document
db.users.updateOne(
  { "_id": ObjectId("507f1f77bcf86cd799439011") },
  { 
    $set: { 
      "profile.age": 29,
      "lastLogin": new Date()
    }
  }
)

// 2. KEY-VALUE DATABASES (Redis, DynamoDB)
// Simple key-value pairs for caching and sessions

// Redis Examples
SET user:1000:session "eyJhbGciOiJIUzI1NiJ9..."
GET user:1000:session
EXPIRE user:1000:session 3600  // Expire in 1 hour

// Hash for user data
HSET user:1000 name "John Doe" email "john@example.com" age 28
HGET user:1000 name
HGETALL user:1000

// Lists for activity feeds
LPUSH user:1000:feed "User logged in"
LPUSH user:1000:feed "User updated profile"
LRANGE user:1000:feed 0 9  // Get latest 10 activities

// Sets for unique items
SADD user:1000:interests "programming" "music" "travel"
SMEMBERS user:1000:interests
SISMEMBER user:1000:interests "programming"

// Sorted sets for leaderboards
ZADD leaderboard 1500 "john_doe"
ZADD leaderboard 2200 "jane_smith"
ZADD leaderboard 1800 "bob_wilson"
ZREVRANGE leaderboard 0 9 WITHSCORES  // Top 10 with scores

// 3. COLUMN-FAMILY (Cassandra, HBase)
// Data organized in column families

// Cassandra Example - Time-series data
CREATE TABLE sensor_data (
    sensor_id UUID,
    timestamp timestamp,
    temperature double,
    humidity double,
    pressure double,
    location text,
    PRIMARY KEY (sensor_id, timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);

// Insert time-series data
INSERT INTO sensor_data (sensor_id, timestamp, temperature, humidity, pressure, location)
VALUES (uuid(), '2023-07-25 10:30:00', 23.5, 65.2, 1013.25, 'Room A');

// Query recent data for a sensor
SELECT * FROM sensor_data 
WHERE sensor_id = 123e4567-e89b-12d3-a456-426614174000 
AND timestamp >= '2023-07-25 00:00:00'
ORDER BY timestamp DESC
LIMIT 100;

// 4. GRAPH DATABASES (Neo4j, Amazon Neptune)
// Data as nodes and relationships

// Neo4j Cypher Examples
// Create nodes
CREATE (john:Person {name: 'John Doe', age: 28, city: 'New York'})
CREATE (jane:Person {name: 'Jane Smith', age: 25, city: 'San Francisco'})
CREATE (company:Company {name: 'Tech Corp', industry: 'Technology'})

// Create relationships
CREATE (john)-[:WORKS_FOR {since: '2023-01-01', position: 'Developer'}]->(company)
CREATE (jane)-[:WORKS_FOR {since: '2022-06-15', position: 'Designer'}]->(company)
CREATE (john)-[:FRIENDS_WITH {since: '2020-03-10'}]->(jane)

// Query patterns
// Find all friends of John
MATCH (john:Person {name: 'John Doe'})-[:FRIENDS_WITH]-(friend)
RETURN friend.name

// Find colleagues (people working at same company)
MATCH (person:Person)-[:WORKS_FOR]->(company:Company)<-[:WORKS_FOR]-(colleague:Person)
WHERE person.name = 'John Doe' AND person <> colleague
RETURN colleague.name, company.name

// Find shortest path between two people
MATCH path = shortestPath((john:Person {name: 'John Doe'})-[*]-(target:Person {name: 'Target Person'}))
RETURN path

// 5. MULTI-MODEL DATABASES (ArangoDB, CosmosDB)
// Support multiple data models in one system

// ArangoDB Example - combining document and graph
// Document collection
db.users.save({
  _key: "john_doe",
  name: "John Doe",
  email: "john@example.com",
  skills: ["JavaScript", "Python", "MongoDB"]
})

// Edge collection for relationships
db.friendships.save({
  _from: "users/john_doe",
  _to: "users/jane_smith",
  since: "2020-03-10",
  strength: "close"
})

// Graph traversal query
FOR user IN OUTBOUND "users/john_doe" friendships
  RETURN user.name

// 6. CHOOSING THE RIGHT NoSQL TYPE
/*
DOCUMENT: 
- Use for: Content management, catalogs, user profiles
- Examples: MongoDB, CouchDB, Amazon DocumentDB

KEY-VALUE:
- Use for: Caching, session storage, shopping carts
- Examples: Redis, Amazon DynamoDB, Riak

COLUMN-FAMILY:
- Use for: Time-series data, IoT data, large-scale analytics  
- Examples: Cassandra, HBase, Amazon SimpleDB

GRAPH:
- Use for: Social networks, recommendation engines, fraud detection
- Examples: Neo4j, Amazon Neptune, ArangoDB
*/`
        }
    ],
    mongodb: [
        {
            id: 8,
            title: "🥭 MongoDB Operations",
            description: "Master MongoDB CRUD operations, aggregation pipeline, indexing, and advanced features for document-based data management.",
            color: "green",
            code: `// MONGODB OPERATIONS

// 1. DATABASE AND COLLECTION OPERATIONS
// Switch to database (creates if doesn't exist)
use ecommerce_db

// Create collection explicitly (optional)
db.createCollection("products", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["name", "price", "category"],
         properties: {
            name: { bsonType: "string" },
            price: { bsonType: "number", minimum: 0 },
            category: { bsonType: "string" }
         }
      }
   }
})

// 2. INSERT OPERATIONS
// Insert single document
db.products.insertOne({
   name: "MacBook Pro",
   price: 1299.99,
   category: "Electronics",
   brand: "Apple",
   specs: {
      cpu: "M2 Pro",
      ram: "16GB",
      storage: "512GB SSD"
   },
   tags: ["laptop", "professional", "apple"],
   inStock: true,
   createdAt: new Date()
})

// Insert multiple documents
db.products.insertMany([
   {
      name: "iPhone 14",
      price: 999.99,
      category: "Electronics",
      brand: "Apple",
      specs: {
         screen: "6.1 inch",
         storage: "128GB",
         camera: "48MP"
      },
      tags: ["smartphone", "ios"],
      inStock: true,
      createdAt: new Date()
   },
   {
      name: "AirPods Pro",
      price: 249.99,
      category: "Electronics",
      brand: "Apple",
      specs: {
         type: "Wireless",
         noiseCancellation: true,
         batteryLife: "6 hours"
      },
      tags: ["headphones", "wireless"],
      inStock: false,
      createdAt: new Date()
   }
])

// 3. FIND OPERATIONS (Query)
// Find all documents
db.products.find()

// Find with condition
db.products.find({ category: "Electronics" })

// Find with multiple conditions
db.products.find({ 
   category: "Electronics", 
   price: { $lt: 1000 },
   inStock: true 
})

// Find with nested field
db.products.find({ "specs.storage": "512GB SSD" })

// Find with array elements
db.products.find({ tags: "laptop" })
db.products.find({ tags: { $in: ["smartphone", "tablet"] } })

// Find with projection (specific fields)
db.products.find(
   { category: "Electronics" },
   { name: 1, price: 1, _id: 0 }
)

// Find with sorting and limiting
db.products.find({ category: "Electronics" })
   .sort({ price: -1 })
   .limit(5)
   .skip(0)

// 4. UPDATE OPERATIONS
// Update single document
db.products.updateOne(
   { name: "MacBook Pro" },
   { 
      $set: { 
         price: 1199.99,
         "specs.ram": "32GB",
         updatedAt: new Date()
      }
   }
)

// Update multiple documents
db.products.updateMany(
   { brand: "Apple" },
   { 
      $set: { 
         warranty: "1 year",
         updatedAt: new Date()
      }
   }
)

// Update with operators
db.products.updateOne(
   { name: "iPhone 14" },
   {
      $inc: { price: -100 },           // Increment/decrement
      $push: { tags: "discounted" },   // Add to array
      $set: { onSale: true },          // Set field
      $unset: { tempField: "" }        // Remove field
   }
)

// Upsert (update or insert)
db.products.updateOne(
   { name: "iPad Air" },
   { 
      $set: {
         name: "iPad Air",
         price: 599.99,
         category: "Electronics",
         brand: "Apple",
         createdAt: new Date()
      }
   },
   { upsert: true }
)

// 5. DELETE OPERATIONS
// Delete single document
db.products.deleteOne({ name: "AirPods Pro" })

// Delete multiple documents
db.products.deleteMany({ 
   category: "Electronics",
   price: { $gt: 2000 }
})

// 6. AGGREGATION PIPELINE
// Basic aggregation
db.products.aggregate([
   { $match: { category: "Electronics" } },
   { $group: { 
      _id: "$brand", 
      avgPrice: { $avg: "$price" },
      count: { $sum: 1 }
   }},
   { $sort: { avgPrice: -1 } }
])

// Complex aggregation with multiple stages
db.orders.aggregate([
   // Stage 1: Match orders from last 30 days
   {
      $match: {
         orderDate: { 
            $gte: new Date(new Date().setDate(new Date().getDate() - 30))
         }
      }
   },
   
   // Stage 2: Lookup product details
   {
      $lookup: {
         from: "products",
         localField: "productId",
         foreignField: "_id",
         as: "productDetails"
      }
   },
   
   // Stage 3: Unwind the array
   { $unwind: "$productDetails" },
   
   // Stage 4: Group by category
   {
      $group: {
         _id: "$productDetails.category",
         totalRevenue: { $sum: { $multiply: ["$quantity", "$productDetails.price"] } },
         totalOrders: { $sum: 1 },
         avgOrderValue: { $avg: { $multiply: ["$quantity", "$productDetails.price"] } }
      }
   },
   
   // Stage 5: Sort by revenue
   { $sort: { totalRevenue: -1 } },
   
   // Stage 6: Limit results
   { $limit: 10 }
])

// 7. INDEXING
// Create single field index
db.products.createIndex({ name: 1 })

// Create compound index
db.products.createIndex({ category: 1, price: -1 })

// Create text index for search
db.products.createIndex({ 
   name: "text", 
   "specs.cpu": "text",
   tags: "text"
})

// Text search
db.products.find({ $text: { $search: "MacBook Pro" } })

// Create partial index (conditional)
db.products.createIndex(
   { price: 1 },
   { partialFilterExpression: { price: { $gt: 100 } } }
)

// 8. MONGODB OPERATORS REFERENCE
/*
COMPARISON:
$eq, $ne, $gt, $gte, $lt, $lte, $in, $nin

LOGICAL:
$and, $or, $not, $nor

ELEMENT:
$exists, $type

EVALUATION:
$regex, $text, $where

ARRAY:
$all, $elemMatch, $size

UPDATE:
$set, $unset, $inc, $mul, $push, $pull, $addToSet, $pop

AGGREGATION:
$match, $group, $sort, $limit, $skip, $lookup, $unwind, $project
*/`
        }
    ],
    design: [
        {
            id: 9,
            title: "🏛️ Database Design Principles",
            description: "Learn database design fundamentals including normalization, denormalization, schema design patterns, and best practices.",
            color: "indigo",
            code: `-- DATABASE DESIGN PRINCIPLES

-- 1. NORMALIZATION FORMS
-- Example: E-commerce system

-- UNNORMALIZED TABLE (0NF) - Poor design with redundancy
CREATE TABLE orders_unnormalized (
    order_id INT,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    customer_phone VARCHAR(15),
    customer_address VARCHAR(200),
    product_name VARCHAR(100),
    product_category VARCHAR(50),
    product_price DECIMAL(10,2),
    quantity INT,
    order_date DATE
    -- Problems: Data redundancy, update anomalies, storage waste
);

-- FIRST NORMAL FORM (1NF) - Eliminate repeating groups
CREATE TABLE orders_1nf (
    order_id INT,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    customer_phone VARCHAR(15),
    customer_address VARCHAR(200),
    product_name VARCHAR(100),
    product_category VARCHAR(50),
    product_price DECIMAL(10,2),
    quantity INT,
    order_date DATE,
    PRIMARY KEY (order_id, product_name)  -- Composite key
    -- Each field contains atomic values, no repeating groups
);

-- SECOND NORMAL FORM (2NF) - Eliminate partial dependencies
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    customer_phone VARCHAR(15),
    customer_address VARCHAR(200)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    product_category VARCHAR(50),
    product_price DECIMAL(10,2)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- THIRD NORMAL FORM (3NF) - Eliminate transitive dependencies
-- Separate categories into their own table
CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(50),
    category_description TEXT
);

-- Update products table
ALTER TABLE products 
DROP COLUMN product_category,
ADD COLUMN category_id INT,
ADD FOREIGN KEY (category_id) REFERENCES categories(category_id);

-- 2. DENORMALIZATION FOR PERFORMANCE
-- Sometimes we intentionally break normalization rules for performance

-- Denormalized order summary for reporting
CREATE TABLE order_summary_denorm (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100),      -- Denormalized from customers
    customer_email VARCHAR(100),     -- Denormalized from customers
    order_date DATE,
    total_amount DECIMAL(12,2),      -- Calculated field
    item_count INT,                  -- Calculated field
    primary_category VARCHAR(50),    -- Most frequent category in order
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

-- Materialized view approach (if supported)
CREATE MATERIALIZED VIEW monthly_sales_summary AS
SELECT 
    DATE_FORMAT(o.order_date, '%Y-%m') as month,
    c.category_name,
    COUNT(*) as order_count,
    SUM(oi.quantity * p.product_price) as total_revenue,
    AVG(oi.quantity * p.product_price) as avg_order_value
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
GROUP BY DATE_FORMAT(o.order_date, '%Y-%m'), c.category_name;

-- 3. DESIGN PATTERNS

-- A) ENTITY-ATTRIBUTE-VALUE (EAV) Pattern
-- For flexible schemas with many optional attributes
CREATE TABLE entities (
    entity_id INT PRIMARY KEY,
    entity_type VARCHAR(50)
);

CREATE TABLE attributes (
    attribute_id INT PRIMARY KEY,
    attribute_name VARCHAR(50),
    data_type ENUM('string', 'number', 'date', 'boolean')
);

CREATE TABLE entity_values (
    entity_id INT,
    attribute_id INT,
    value_string VARCHAR(255),
    value_number DECIMAL(15,5),
    value_date DATE,
    value_boolean BOOLEAN,
    PRIMARY KEY (entity_id, attribute_id),
    FOREIGN KEY (entity_id) REFERENCES entities(entity_id),
    FOREIGN KEY (attribute_id) REFERENCES attributes(attribute_id)
);

-- B) POLYMORPHIC ASSOCIATIONS
-- One table can be associated with multiple other tables
CREATE TABLE comments (
    comment_id INT PRIMARY KEY,
    commentable_type VARCHAR(50),  -- 'post', 'product', 'user'
    commentable_id INT,            -- ID in the respective table
    user_id INT,
    comment_text TEXT,
    created_at TIMESTAMP,
    INDEX idx_polymorphic (commentable_type, commentable_id)
);

-- C) AUDIT TRAIL Pattern
CREATE TABLE audit_log (
    audit_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    table_name VARCHAR(50),
    record_id INT,
    action_type ENUM('INSERT', 'UPDATE', 'DELETE'),
    old_values JSON,
    new_values JSON,
    changed_by INT,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_table_record (table_name, record_id),
    INDEX idx_changed_at (changed_at)
);

-- 4. SCHEMA DESIGN CONSIDERATIONS

-- A) Surrogate vs Natural Keys
-- Surrogate key (recommended)
CREATE TABLE users (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,  -- Surrogate key
    email VARCHAR(255) UNIQUE NOT NULL,          -- Natural key as unique
    username VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- B) Soft Delete Pattern
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP NULL;
CREATE INDEX idx_users_active ON users(deleted_at) WHERE deleted_at IS NULL;

-- Query active users
SELECT * FROM users WHERE deleted_at IS NULL;

-- C) Versioning Pattern
CREATE TABLE document_versions (
    version_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    document_id INT NOT NULL,
    version_number INT NOT NULL,
    title VARCHAR(200),
    content TEXT,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_current BOOLEAN DEFAULT FALSE,
    UNIQUE KEY unique_current (document_id, is_current),
    FOREIGN KEY (created_by) REFERENCES users(user_id)
);

-- 5. PERFORMANCE DESIGN PRINCIPLES

-- A) Partitioning Strategy
-- Horizontal partitioning by date
CREATE TABLE sales_2023 (
    sale_id BIGINT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    sale_date DATE,
    amount DECIMAL(10,2),
    CHECK (sale_date >= '2023-01-01' AND sale_date < '2024-01-01')
) PARTITION BY RANGE (YEAR(sale_date));

-- B) Read Replicas and Master-Slave
-- Connection string examples:
-- WRITE operations: mysql://master-db:3306/mydb
-- READ operations: mysql://slave-db:3306/mydb

-- C) Caching Strategy
-- Application-level caching with Redis
-- Cache frequently accessed data, invalidate on updates

-- 6. DESIGN REVIEW CHECKLIST
/*
NORMALIZATION:
✓ Is data properly normalized to 3NF?
✓ Are there justified denormalizations for performance?

RELATIONSHIPS:
✓ Are foreign key constraints properly defined?
✓ Are relationship cardinalities correctly modeled?

INDEXING:
✓ Are primary keys and foreign keys indexed?
✓ Are frequently queried columns indexed?
✓ Are there composite indexes for multi-column queries?

SCALABILITY:
✓ Is the design suitable for expected data volume?
✓ Are there provisions for partitioning/sharding?
✓ Is caching strategy considered?

SECURITY:
✓ Are sensitive fields properly protected?
✓ Is access control built into the design?
✓ Are audit trails in place where needed?
*/`
        }
    ],
    optimization: [
        {
            id: 10,
            title: "⚡ Database Performance Optimization",
            description: "Master database performance optimization techniques including indexing strategies, query optimization, and monitoring.",
            color: "yellow",
            code: `-- DATABASE PERFORMANCE OPTIMIZATION

-- 1. INDEXING STRATEGIES

-- Single column index
CREATE INDEX idx_users_email ON users(email);

-- Composite index - order matters!
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);

-- This index helps queries like:
-- SELECT * FROM orders WHERE customer_id = 123 AND order_date >= '2023-01-01';
-- SELECT * FROM orders WHERE customer_id = 123; (uses leftmost prefix)

-- But NOT efficient for:
-- SELECT * FROM orders WHERE order_date >= '2023-01-01'; (doesn't use leftmost prefix)

-- Covering index (includes all needed columns)
CREATE INDEX idx_orders_covering ON orders(customer_id, order_date) 
INCLUDE (total_amount, status);

-- Partial index for specific conditions
CREATE INDEX idx_active_users ON users(email) WHERE is_active = true;

-- Function-based index
CREATE INDEX idx_users_upper_email ON users(UPPER(email));

-- 2. QUERY OPTIMIZATION TECHNIQUES

-- BAD: Using functions on indexed columns
SELECT * FROM orders WHERE YEAR(order_date) = 2023;

-- GOOD: Rewrite to use index
SELECT * FROM orders WHERE order_date >= '2023-01-01' AND order_date < '2024-01-01';

-- BAD: Leading wildcards prevent index usage
SELECT * FROM products WHERE product_name LIKE '%phone%';

-- GOOD: Use full-text search instead
SELECT * FROM products WHERE MATCH(product_name) AGAINST('phone');

-- BAD: OR conditions can prevent index usage
SELECT * FROM users WHERE first_name = 'John' OR last_name = 'Smith';

-- GOOD: Use UNION for better performance
SELECT * FROM users WHERE first_name = 'John'
UNION
SELECT * FROM users WHERE last_name = 'Smith';

-- BAD: Subquery in SELECT list (executed for each row)
SELECT 
    customer_id,
    (SELECT COUNT(*) FROM orders WHERE customer_id = c.customer_id) as order_count
FROM customers c;

-- GOOD: Use JOIN instead
SELECT c.customer_id, COUNT(o.order_id) as order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id;

-- 3. QUERY EXECUTION PLAN ANALYSIS

-- MySQL - EXPLAIN statement
EXPLAIN SELECT c.customer_name, SUM(oi.quantity * p.price) as total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
WHERE o.order_date >= '2023-01-01'
GROUP BY c.customer_id, c.customer_name
ORDER BY total_spent DESC
LIMIT 10;

-- Look for:
-- type: const > eq_ref > ref > range > index > ALL
-- key: which index is used
-- rows: estimated rows examined
-- Extra: additional information (Using temporary, Using filesort)

-- EXPLAIN ANALYZE (MySQL 8.0+) shows actual execution stats
EXPLAIN ANALYZE SELECT * FROM orders WHERE order_date >= '2023-01-01';

-- PostgreSQL - similar with more detail
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE order_date >= '2023-01-01';

-- 4. PAGINATION OPTIMIZATION

-- BAD: OFFSET becomes slow with large datasets
SELECT * FROM products ORDER BY product_id LIMIT 1000 OFFSET 50000;

-- GOOD: Cursor-based pagination
SELECT * FROM products 
WHERE product_id > 50000 
ORDER BY product_id 
LIMIT 1000;

-- For complex ordering, use composite cursor
SELECT * FROM orders 
WHERE (order_date, order_id) > ('2023-01-15', 12345)
ORDER BY order_date, order_id 
LIMIT 20;

-- 5. BULK OPERATIONS OPTIMIZATION

-- BAD: Individual INSERTs
INSERT INTO products (name, price) VALUES ('Product 1', 10.99);
INSERT INTO products (name, price) VALUES ('Product 2', 15.99);
-- ... 1000 more times

-- GOOD: Batch INSERT
INSERT INTO products (name, price) VALUES 
('Product 1', 10.99),
('Product 2', 15.99),
('Product 3', 12.99);
-- ... up to 1000 rows per statement

-- Bulk UPDATE with CASE
UPDATE products 
SET price = CASE 
    WHEN product_id = 1 THEN 11.99
    WHEN product_id = 2 THEN 16.99
    WHEN product_id = 3 THEN 13.99
    ELSE price
END
WHERE product_id IN (1, 2, 3);

-- 6. DATABASE CONFIGURATION TUNING

-- MySQL Configuration (my.cnf)
/*
[mysqld]
# Memory settings
innodb_buffer_pool_size = 4G        # 70-80% of available RAM
innodb_log_file_size = 256M
query_cache_size = 256M

# Connection settings
max_connections = 1000
max_connect_errors = 10000

# InnoDB settings
innodb_flush_log_at_trx_commit = 2  # 0=fastest, 1=safest, 2=balanced
innodb_file_per_table = 1
*/

-- 7. MONITORING AND PROFILING

-- Enable slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1;  -- Log queries taking > 1 second
SET GLOBAL log_queries_not_using_indexes = 'ON';

-- Performance Schema queries (MySQL)
-- Top 5 slowest queries
SELECT 
    query_sample_text,
    avg_timer_wait/1000000000 as avg_seconds,
    count_star as executions
FROM performance_schema.events_statements_summary_by_digest 
ORDER BY avg_timer_wait DESC 
LIMIT 5;

-- Table I/O statistics
SELECT 
    object_schema,
    object_name,
    count_read,
    count_write,
    sum_timer_read/1000000000 as read_seconds,
    sum_timer_write/1000000000 as write_seconds
FROM performance_schema.table_io_waits_summary_by_table 
WHERE object_schema NOT IN ('mysql', 'performance_schema')
ORDER BY sum_timer_read + sum_timer_write DESC;

-- 8. CACHING STRATEGIES

-- Query result caching (Redis)
/*
Application layer:
1. Check Redis for cached result
2. If miss, query database
3. Store result in Redis with TTL
4. Return result to client
*/

-- Database query cache (MySQL - deprecated in 8.0)
-- SET GLOBAL query_cache_type = ON;
-- SET GLOBAL query_cache_size = 256M;

-- 9. PARTITIONING FOR PERFORMANCE

-- Range partitioning by date
CREATE TABLE sales_partitioned (
    sale_id BIGINT,
    sale_date DATE,
    amount DECIMAL(10,2),
    customer_id INT
) PARTITION BY RANGE (YEAR(sale_date)) (
    PARTITION p2021 VALUES LESS THAN (2022),
    PARTITION p2022 VALUES LESS THAN (2023),
    PARTITION p2023 VALUES LESS THAN (2024),
    PARTITION p2024 VALUES LESS THAN (2025)
);

-- Hash partitioning for even distribution
CREATE TABLE user_activity_partitioned (
    user_id BIGINT,
    activity_date DATE,
    activity_type VARCHAR(50),
    details JSON
) PARTITION BY HASH (user_id) PARTITIONS 16;

-- 10. PERFORMANCE BEST PRACTICES CHECKLIST
/*
INDEXING:
✓ Primary keys and foreign keys indexed
✓ WHERE clause columns indexed
✓ JOIN columns indexed
✓ ORDER BY columns indexed (if frequently used)
✓ Avoid over-indexing (impacts INSERT/UPDATE)

QUERIES:
✓ Avoid SELECT *
✓ Use LIMIT when possible
✓ Avoid functions on indexed columns in WHERE
✓ Use UNION instead of OR when appropriate
✓ Prefer JOINs over subqueries

SCHEMA:
✓ Normalize for data integrity
✓ Denormalize for read performance when justified
✓ Use appropriate data types
✓ Consider partitioning for large tables

MONITORING:
✓ Monitor slow queries
✓ Track index usage
✓ Monitor resource utilization
✓ Set up performance alerts
*/`
        }
    ],
    transactions: [
        {
            id: 11,
            title: "🔄 Database Transactions & ACID",
            description: "Understanding database transactions, ACID properties, isolation levels, and handling concurrent access in database systems.",
            color: "red",
            code: `-- DATABASE TRANSACTIONS & ACID PROPERTIES

-- 1. BASIC TRANSACTION CONTROL

-- Start a transaction
START TRANSACTION;  -- or BEGIN;

-- Execute multiple related operations
UPDATE accounts SET balance = balance - 1000 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE account_id = 2;
INSERT INTO transactions (from_account, to_account, amount, transaction_date) 
VALUES (1, 2, 1000, NOW());

-- Commit the transaction (make changes permanent)
COMMIT;

-- Or rollback if something goes wrong
-- ROLLBACK;

-- 2. ACID PROPERTIES DEMONSTRATION

-- ATOMICITY - All or Nothing
START TRANSACTION;

UPDATE inventory SET quantity = quantity - 5 WHERE product_id = 101;
-- Simulate error condition
-- If quantity becomes negative, rollback everything
IF (SELECT quantity FROM inventory WHERE product_id = 101) < 0 THEN
    ROLLBACK;
    SELECT 'Transaction rolled back - insufficient inventory' as message;
ELSE
    INSERT INTO orders (product_id, quantity, order_date) VALUES (101, 5, NOW());
    COMMIT;
    SELECT 'Order placed successfully' as message;
END IF;

-- CONSISTENCY - Data integrity maintained
-- Example: Bank account transfer with constraint checking
START TRANSACTION;

DECLARE insufficient_funds CONDITION FOR SQLSTATE '45000';

-- Check business rule: account balance cannot go negative
IF (SELECT balance FROM accounts WHERE account_id = 1) < 1000 THEN
    SIGNAL insufficient_funds SET MESSAGE_TEXT = 'Insufficient funds';
END IF;

UPDATE accounts SET balance = balance - 1000 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE account_id = 2;

-- Verify total money in system remains constant
IF (SELECT SUM(balance) FROM accounts) != 
   (SELECT @original_total := SUM(balance) FROM accounts_backup) THEN
    ROLLBACK;
ELSE
    COMMIT;
END IF;

-- ISOLATION - Transactions don't interfere with each other
-- (Controlled by isolation levels - see section 3)

-- DURABILITY - Committed changes survive system failures
-- Ensured by database engine through:
-- - Write-ahead logging (WAL)
-- - Checkpoint processes
-- - Recovery mechanisms

-- 3. TRANSACTION ISOLATION LEVELS

-- READ UNCOMMITTED (Dirty reads possible)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
START TRANSACTION;
-- Can read uncommitted changes from other transactions
SELECT * FROM accounts WHERE account_id = 1;
COMMIT;

-- READ COMMITTED (Default in most databases)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
-- Session 1: Read data
SELECT balance FROM accounts WHERE account_id = 1;  -- Returns 1000

-- Session 2: Updates and commits
UPDATE accounts SET balance = 500 WHERE account_id = 1;
COMMIT;

-- Session 1: Read again (sees new committed value)
SELECT balance FROM accounts WHERE account_id = 1;  -- Returns 500 (non-repeatable read)
COMMIT;

-- REPEATABLE READ (Prevents non-repeatable reads)
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 1;  -- Returns 1000
-- Even if another session changes and commits, this session will see 1000
SELECT balance FROM accounts WHERE account_id = 1;  -- Still returns 1000
COMMIT;

-- SERIALIZABLE (Strictest level)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- Transactions execute as if they were run sequentially
-- Prevents all phenomena but may cause deadlocks

-- 4. CONCURRENCY PROBLEMS AND SOLUTIONS

-- DIRTY READ EXAMPLE
-- Session 1:
START TRANSACTION;
UPDATE products SET price = 50.00 WHERE product_id = 1;
-- Don't commit yet

-- Session 2 (with READ UNCOMMITTED):
SELECT price FROM products WHERE product_id = 1;  -- Sees 50.00 (dirty read)

-- Session 1:
ROLLBACK;  -- Session 2 read uncommitted data that was rolled back!

-- PHANTOM READ EXAMPLE
-- Session 1:
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT COUNT(*) FROM orders WHERE order_date = '2023-07-25';  -- Returns 5

-- Session 2:
INSERT INTO orders (customer_id, order_date) VALUES (100, '2023-07-25');
COMMIT;

-- Session 1:
SELECT COUNT(*) FROM orders WHERE order_date = '2023-07-25';  -- Still returns 5
-- But if we SELECT the actual rows, we might see the new one (phantom)
SELECT * FROM orders WHERE order_date = '2023-07-25';  -- Might show 6 rows
COMMIT;

-- 5. DEADLOCK HANDLING

-- Deadlock scenario:
-- Session 1:
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
-- Now needs to update account_id = 2

-- Session 2:
START TRANSACTION;
UPDATE accounts SET balance = balance - 50 WHERE account_id = 2;
-- Now needs to update account_id = 1

-- Both sessions wait for each other = DEADLOCK
-- Database will automatically detect and kill one transaction

-- Deadlock prevention strategies:
-- 1. Always acquire locks in same order
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 
WHERE account_id = LEAST(@from_account, @to_account);
UPDATE accounts SET balance = balance + 100 
WHERE account_id = GREATEST(@from_account, @to_account);
COMMIT;

-- 2. Use shorter transactions
-- 3. Use appropriate isolation levels
-- 4. Implement retry logic in application

-- 6. SAVEPOINTS (Nested transactions)
START TRANSACTION;

INSERT INTO customers (name, email) VALUES ('John Doe', 'john@email.com');

SAVEPOINT customer_created;

INSERT INTO orders (customer_id, total) VALUES (LAST_INSERT_ID(), 100.00);

-- Something goes wrong with the order
ROLLBACK TO SAVEPOINT customer_created;

-- Customer insert is preserved, order insert is rolled back
INSERT INTO orders (customer_id, total) VALUES (LAST_INSERT_ID(), 75.00);

COMMIT;

-- 7. DISTRIBUTED TRANSACTIONS (Two-Phase Commit)

-- XA TRANSACTION example (MySQL)
XA START 'transaction_1';
UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 101;
XA END 'transaction_1';
XA PREPARE 'transaction_1';

-- On another database server:
XA START 'transaction_2'; 
INSERT INTO orders (product_id, quantity) VALUES (101, 1);
XA END 'transaction_2';
XA PREPARE 'transaction_2';

-- Coordinator decides to commit both
XA COMMIT 'transaction_1';
XA COMMIT 'transaction_2';

-- 8. TRANSACTION BEST PRACTICES

-- Keep transactions short
START TRANSACTION;
-- Do minimal work here
UPDATE accounts SET balance = balance - @amount WHERE account_id = @from_id;
UPDATE accounts SET balance = balance + @amount WHERE account_id = @to_id;
COMMIT;

-- Don't include user interaction in transactions
-- BAD:
START TRANSACTION;
SELECT * FROM products WHERE category = 'electronics';
-- Wait for user to make selection... (holds locks!)
INSERT INTO cart (user_id, product_id) VALUES (@user_id, @selected_product);
COMMIT;

-- GOOD:
-- Get data outside transaction
SELECT * FROM products WHERE category = 'electronics';
-- User makes selection in application
-- Then quick transaction:
START TRANSACTION;
INSERT INTO cart (user_id, product_id) VALUES (@user_id, @selected_product);
COMMIT;

-- Handle exceptions properly
DELIMITER //
CREATE PROCEDURE transfer_money(
    IN from_account INT,
    IN to_account INT, 
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
    
    START TRANSACTION;
    
    UPDATE accounts SET balance = balance - amount WHERE account_id = from_account;
    UPDATE accounts SET balance = balance + amount WHERE account_id = to_account;
    
    COMMIT;
END //
DELIMITER ;

-- 9. MONITORING TRANSACTIONS

-- Check current transactions (MySQL)
SELECT 
    trx_id,
    trx_state,
    trx_started,
    trx_isolation_level,
    trx_tables_in_use,
    trx_tables_locked
FROM information_schema.innodb_trx;

-- Check locks
SELECT 
    lock_trx_id,
    lock_mode,
    lock_type,
    lock_table,
    lock_index
FROM information_schema.innodb_locks;

-- Deadlock information
SHOW ENGINE INNODB STATUS;`
        }
    ],
    interview: [
        {
            id: 12,
            title: "❓ Database Interview Questions",
            description: "Comprehensive database interview questions and answers covering SQL, NoSQL, design, performance, and advanced topics.",
            color: "gray",
            code: `-- DATABASE INTERVIEW QUESTIONS & ANSWERS

-- Q1: What is normalization and why is it important?
/*
ANSWER: Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.

Benefits:
- Eliminates data redundancy
- Reduces storage space
- Maintains data consistency
- Prevents update anomalies

Normal Forms:
1NF: Atomic values, no repeating groups
2NF: Eliminate partial dependencies
3NF: Eliminate transitive dependencies
BCNF: Every determinant is a candidate key
*/

-- Q2: Explain the different types of JOINs with examples
-- INNER JOIN: Only matching records
SELECT c.name, o.order_date
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;

-- LEFT JOIN: All records from left table
SELECT c.name, o.order_date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;

-- RIGHT JOIN: All records from right table  
SELECT c.name, o.order_date
FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id;

-- FULL OUTER JOIN: All records from both tables
SELECT c.name, o.order_date
FROM customers c
FULL OUTER JOIN orders o ON c.customer_id = o.customer_id;

-- Q3: What is the difference between DELETE, TRUNCATE, and DROP?
/*
DELETE:
- Removes specific rows based on WHERE condition
- Can be rolled back
- Triggers fire
- Slower for large datasets
*/
DELETE FROM employees WHERE department = 'Marketing';

/*
TRUNCATE:
- Removes all rows from table
- Cannot be rolled back (in most databases)
- Triggers don't fire
- Faster than DELETE
- Resets auto-increment counter
*/
TRUNCATE TABLE temp_data;

/*
DROP:
- Removes the entire table structure and data
- Cannot be rolled back
- Frees up storage space completely
*/
DROP TABLE old_table;

-- Q4: Explain ACID properties with examples
/*
ATOMICITY: All operations in a transaction succeed or all fail
Example: Bank transfer - both debit and credit must succeed
*/
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- Both updates or neither

/*
CONSISTENCY: Data remains in valid state
Example: Referential integrity constraints maintained
*/
-- This will fail if customer_id doesn't exist
INSERT INTO orders (customer_id, total) VALUES (999, 100.00);

/*
ISOLATION: Concurrent transactions don't interfere
Example: Two users booking last seat simultaneously
*/
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

/*
DURABILITY: Committed changes survive system failures
Example: Once payment is confirmed, it persists through crashes
*/

-- Q5: What are indexes and when should you use them?
/*
ANSWER: Indexes are data structures that improve query performance by creating shortcuts to data.

Use indexes when:
- Frequently used in WHERE clauses
- Used in JOIN conditions
- Used in ORDER BY clauses
- High selectivity (returns few rows)

Avoid indexes when:
- Heavy INSERT/UPDATE/DELETE operations
- Small tables
- Low selectivity columns
*/

-- Q6: Explain the difference between clustered and non-clustered indexes
/*
CLUSTERED INDEX:
- Physically reorders table data
- One per table (usually primary key)
- Leaf pages contain actual data
- Faster for range queries
*/
CREATE CLUSTERED INDEX idx_employee_id ON employees(employee_id);

/*
NON-CLUSTERED INDEX:
- Separate structure pointing to data
- Multiple per table allowed
- Leaf pages contain pointers to data
- Additional lookup required
*/
CREATE NONCLUSTERED INDEX idx_employee_name ON employees(last_name, first_name);

-- Q7: What is a deadlock and how do you prevent it?
/*
ANSWER: Deadlock occurs when two or more transactions wait for each other to release locks.

Prevention strategies:
1. Acquire locks in consistent order
2. Use shorter transactions
3. Implement timeout mechanisms
4. Use appropriate isolation levels
*/

-- Example of deadlock prevention:
START TRANSACTION;
-- Always lock accounts in order of account_id
UPDATE accounts SET balance = balance - 100 
WHERE account_id = LEAST(@from_id, @to_id);
UPDATE accounts SET balance = balance + 100 
WHERE account_id = GREATEST(@from_id, @to_id);
COMMIT;

-- Q8: What is the difference between SQL and NoSQL databases?
/*
SQL DATABASES:
- Structured data with fixed schema
- ACID compliance
- Complex queries with JOINs
- Vertical scaling
- Examples: MySQL, PostgreSQL, Oracle

NoSQL DATABASES:
- Flexible schema
- BASE properties (Basically Available, Soft state, Eventual consistency)
- Simple queries, no complex JOINs
- Horizontal scaling
- Types: Document, Key-Value, Column-family, Graph
- Examples: MongoDB, Redis, Cassandra, Neo4j
*/

-- Q9: Explain database partitioning and its types
/*
HORIZONTAL PARTITIONING (Sharding):
- Split rows across multiple tables/servers
- Based on partition key (e.g., customer_id, date)
*/
-- Range partitioning
CREATE TABLE sales_2023 PARTITION OF sales
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

/*
VERTICAL PARTITIONING:
- Split columns across multiple tables
- Separate frequently used from rarely used columns
*/
-- Frequently accessed columns
CREATE TABLE users_basic (user_id, username, email);
-- Rarely accessed columns  
CREATE TABLE users_extended (user_id, bio, preferences);

-- Q10: What are database triggers and when would you use them?
/*
ANSWER: Triggers are special procedures that automatically execute in response to database events.

Types:
- BEFORE/AFTER INSERT, UPDATE, DELETE
- INSTEAD OF (for views)

Use cases:
- Audit trails
- Data validation
- Automatic calculations
- Maintaining derived data
*/

-- Audit trigger example
CREATE TRIGGER audit_user_changes
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    INSERT INTO user_audit_log (
        user_id, 
        old_email, 
        new_email, 
        changed_by, 
        changed_at
    ) VALUES (
        NEW.user_id,
        OLD.email,
        NEW.email,
        USER(),
        NOW()
    );
END;

-- Q11: Explain CAP theorem in the context of distributed databases
/*
CAP THEOREM: In a distributed system, you can only guarantee 2 of 3:

CONSISTENCY: All nodes see the same data simultaneously
AVAILABILITY: System remains operational
PARTITION TOLERANCE: System continues despite network failures

Examples:
- Traditional RDBMS: CA (Consistency + Availability)
- MongoDB: CP (Consistency + Partition tolerance)  
- Cassandra: AP (Availability + Partition tolerance)
- Amazon DynamoDB: AP with eventual consistency
*/

-- Q12: How would you optimize a slow-running query?
/*
OPTIMIZATION STEPS:
1. Analyze execution plan (EXPLAIN)
2. Check if appropriate indexes exist
3. Rewrite query to use indexes effectively
4. Consider denormalization if needed
5. Use query hints if necessary
6. Partition large tables
7. Update database statistics
*/

-- Before optimization
EXPLAIN SELECT c.name, COUNT(o.order_id) as order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE c.registration_date >= '2023-01-01'
GROUP BY c.customer_id, c.name
ORDER BY order_count DESC;

-- Add appropriate indexes
CREATE INDEX idx_customers_reg_date ON customers(registration_date);
CREATE INDEX idx_orders_customer_id ON orders(customer_id);

-- Q13: Design a database schema for an e-commerce system
/*
CORE ENTITIES:
- Users (customers, admins)
- Products (with categories, variations)
- Orders (with order items)
- Payments
- Shipping addresses
- Reviews and ratings
*/

CREATE TABLE users (
    user_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    user_type ENUM('customer', 'admin') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(100) NOT NULL,
    parent_category_id INT,
    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)
);

CREATE TABLE products (
    product_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category_id INT,
    stock_quantity INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- This demonstrates understanding of:
-- - Proper data types
-- - Primary and foreign keys
-- - Constraints and defaults
-- - Indexing strategy
-- - Normalization principles`
        }
    ]
};

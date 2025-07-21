import { useState } from 'react';
import StudyNavigation from '../../../components/layout/StudyNavigation';

const InterviewQuestions = () => {
    const [activeTab, setActiveTab] = useState('basics');

    const tabs = [
        { id: 'basics', name: 'Web Development', icon: '🌐' },
        { id: 'frontend', name: 'Frontend', icon: '🎨' },
        { id: 'backend', name: 'Backend', icon: '🔧' },
        { id: 'database', name: 'Database', icon: '🗄️' },
        { id: 'general', name: 'General', icon: '💡' },
        { id: 'behavioral', name: 'Behavioral', icon: '🤝' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'basics':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What are Web Development Interview Questions?</h2>
                            <p className="text-gray-600 mb-4">
                                Web development interview questions assess your understanding of core technologies, frameworks, and concepts.
                                They evaluate both technical knowledge and problem-solving abilities required for modern web development roles.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">🔍 HTML, CSS & JavaScript</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        The foundation of web development - understanding how these three technologies work together to create web pages.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Key Differences:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`HTML: Structure and content (the skeleton)
CSS: Styling and presentation (the appearance) 
JavaScript: Interactivity and behavior (the functionality)

Analogy: Building a house
- HTML = structure (walls, rooms)
- CSS = decoration (paint, furniture)  
- JavaScript = utilities (lights, plumbing)`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">📱 Responsive Web Design</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Creating web pages that adapt to different screen sizes and devices for optimal user experience.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Key Techniques:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`• Flexible Grid Layouts (CSS Grid, Flexbox)
• Media Queries for device-specific styles
• Fluid Images (max-width: 100%)
• Mobile-First Approach
• Viewport meta tag`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">🌐 HTTP vs HTTPS</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        Understanding the protocols for data transfer over the web and security considerations.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Comparison:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`HTTP (Port 80):           HTTPS (Port 443):
• Plain text data          • Encrypted data (SSL/TLS)
• Vulnerable to attacks    • Secure communication
• No certificate needed   • Requires SSL certificate
• Faster (no encryption)  • Slightly slower (encryption overhead)`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-orange-800 mb-3 text-lg">🔄 HTTP Methods</h4>
                                    <p className="text-orange-700 text-sm mb-3">
                                        RESTful API methods that define the action to be performed on server resources.
                                    </p>
                                    <div className="bg-orange-100 p-3 rounded text-xs">
                                        <strong>Common Methods:</strong>
                                        <pre className="mt-2 text-orange-800">
                                            {`GET    - Retrieve data (read operation)
POST   - Create new resource  
PUT    - Update entire resource
PATCH  - Partial update
DELETE - Remove resource
HEAD   - Get headers only
OPTIONS- Check allowed methods`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'frontend':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Frontend Development?</h2>
                            <p className="text-gray-600 mb-4">
                                Frontend development involves creating the user-facing part of web applications using modern frameworks and libraries.
                                It focuses on user experience, interactivity, and responsive design across different devices and browsers.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">⚛️ React Virtual DOM</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        A programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM through reconciliation.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>How it works:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`1. React creates virtual DOM tree in memory
2. State changes trigger new virtual tree creation  
3. React compares (diffs) new vs previous tree
4. Only differences are updated in real DOM

Benefits:
• Faster updates through batching
• Predictable performance  
• Better user experience
• Cross-browser compatibility`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">🪝 React Hooks</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Functions that let you use state and other React features in functional components without writing class components.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Why Hooks were introduced:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`• Simpler component logic (no class complexity)
• Easier to reuse stateful logic
• Better code organization and testing
• Smaller bundle sizes
• More functional programming approach

Common Hooks:
useState() - Add state to functional components
useEffect() - Perform side effects
useContext() - Access React context
useReducer() - Complex state management`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">📦 NPM vs Yarn</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        Package managers for JavaScript that handle dependencies, but with different features and performance characteristics.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Comparison:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`NPM:                      Yarn:
• Default with Node.js    • Created by Facebook
• Sequential installation • Parallel installation  
• package-lock.json      • yarn.lock
• Slower performance     • Faster performance
• Built-in with Node     • Better security & caching

Usage:
npm install              yarn install
npm run start            yarn start  
npm install package      yarn add package`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-orange-800 mb-3 text-lg">🎨 Component Lifecycle</h4>
                                    <p className="text-orange-700 text-sm mb-3">
                                        Understanding when and how React components mount, update, and unmount during their lifecycle.
                                    </p>
                                    <div className="bg-orange-100 p-3 rounded text-xs">
                                        <strong>Lifecycle Phases:</strong>
                                        <pre className="mt-2 text-orange-800">
                                            {`Mounting (component created):
• constructor() → render() → componentDidMount()

Updating (props/state change):  
• render() → componentDidUpdate()

Unmounting (component removed):
• componentWillUnmount()

With Hooks:
useEffect(() => {}, []) // componentDidMount
useEffect(() => {})     // componentDidUpdate
useEffect(() => cleanup, []) // componentWillUnmount`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'backend':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Backend Development?</h2>
                            <p className="text-gray-600 mb-4">
                                Backend development involves server-side programming, database management, API design, and server architecture.
                                It handles business logic, data processing, authentication, and communication between the client and database.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                            <div className="space-y-6">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">🟢 Node.js Runtime</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript on the server side.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Why Use Node.js:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`• Full-stack JavaScript development
• Non-blocking, event-driven I/O model
• Large ecosystem with NPM packages  
• Fast execution with V8 engine
• Great for real-time applications
• Single-threaded with event loop

Key Features:
- Asynchronous and event-driven
- Cross-platform (Windows, Mac, Linux)
- No buffering (streams data in chunks)
- Fast and scalable network applications`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">🔌 APIs & REST</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        Application Programming Interface that allows different software applications to communicate using REST principles.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>REST Principles:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`• Stateless: Each request has all needed info
• Client-Server: Separation of concerns
• Cacheable: Responses can be cached
• Uniform Interface: Consistent interaction

HTTP Methods:
GET /api/users        - Get all users
GET /api/users/123    - Get specific user  
POST /api/users       - Create new user
PUT /api/users/123    - Update user
DELETE /api/users/123 - Delete user`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">🔐 Authentication & Authorization</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        Security mechanisms to verify user identity (authentication) and control access to resources (authorization).
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Common Methods:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`JWT (JSON Web Tokens):
• Stateless token-based authentication
• Contains encoded user info  
• Self-contained and secure

Session-based:
• Server stores session data
• Client stores session ID
• Requires server memory/database

OAuth:
• Third-party authentication
• Google, Facebook, GitHub login
• Secure delegation of access`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-orange-800 mb-3 text-lg">🗄️ Database Integration</h4>
                                    <p className="text-orange-700 text-sm mb-3">
                                        Connecting backend applications to databases for data storage, retrieval, and management.
                                    </p>
                                    <div className="bg-orange-100 p-3 rounded text-xs">
                                        <strong>Database Types:</strong>
                                        <pre className="mt-2 text-orange-800">
                                            {`SQL Databases (Relational):
• MySQL, PostgreSQL, SQLite
• Structured data with relationships
• ACID compliance
• Complex queries with JOINs

NoSQL Databases (Non-relational):  
• MongoDB, Redis, DynamoDB
• Flexible schema
• Horizontal scaling
• Document, Key-Value, Graph stores`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'database':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What are Database Systems?</h2>
                            <p className="text-gray-600 mb-4">
                                Database systems are organized collections of data that can be efficiently accessed, managed, and updated.
                                They provide data persistence, integrity, security, and concurrent access for web applications.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">🗄️ SQL vs NoSQL</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        Two different approaches to database design - relational (SQL) with structured data vs non-relational (NoSQL) with flexible schemas.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>When to use each:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`SQL Databases (MySQL, PostgreSQL):
✓ Complex relationships between data
✓ ACID compliance required  
✓ Structured data with fixed schema
✓ Complex queries and JOINs needed
✓ Financial/banking applications

NoSQL Databases (MongoDB, Redis):
✓ Rapid development and iteration
✓ Unstructured/semi-structured data
✓ Horizontal scaling requirements  
✓ Real-time web applications
✓ Content management systems`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-3 text-lg">🔑 Database Indexes</h4>
                                    <p className="text-yellow-700 text-sm mb-3">
                                        Data structures that improve query performance by creating shortcuts to find data quickly, like an index in a book.
                                    </p>
                                    <div className="bg-yellow-100 p-3 rounded text-xs">
                                        <strong>Benefits & Trade-offs:</strong>
                                        <pre className="mt-2 text-yellow-800">
                                            {`Benefits:
• Faster query execution (SELECT)
• Improved WHERE clause performance  
• Faster sorting and grouping
• Efficient JOIN operations

Trade-offs:
• Additional storage space required
• Slower INSERT, UPDATE, DELETE
• Index maintenance overhead

Types of Indexes:
- Primary Index (unique identifier)
- Secondary Index (non-unique fields)
- Composite Index (multiple columns)
- Partial Index (subset of data)`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">🔄 ACID Properties</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Database transaction properties that ensure reliability and consistency of data operations.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>ACID Breakdown:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`Atomicity:
• All or nothing - transaction fully completes or fails
• No partial updates left in inconsistent state

Consistency:  
• Database remains in valid state before/after transaction
• All constraints and rules are maintained

Isolation:
• Concurrent transactions don't interfere  
• Each transaction sees consistent snapshot

Durability:
• Committed changes persist even after system failure
• Data is permanently stored`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">📊 Database Normalization</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        Process of organizing data to reduce redundancy and improve data integrity through normal forms.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Normal Forms:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`1st Normal Form (1NF):
• Each column contains atomic values
• No repeating groups or arrays

2nd Normal Form (2NF):  
• Meets 1NF requirements
• No partial dependencies on composite keys

3rd Normal Form (3NF):
• Meets 2NF requirements  
• No transitive dependencies
• Non-key attributes depend only on primary key

Benefits: Eliminates redundancy, prevents anomalies
Drawbacks: More complex queries, potential performance impact`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'general':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is General Programming?</h2>
                            <p className="text-gray-600 mb-4">
                                General programming concepts include algorithms, data structures, design patterns, and computer science fundamentals.
                                These concepts are language-agnostic and form the foundation of effective software development.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                            <div className="space-y-6">
                                <div className="bg-indigo-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-indigo-800 mb-3 text-lg">🧠 Big O Notation</h4>
                                    <p className="text-indigo-700 text-sm mb-3">
                                        Mathematical notation that describes how algorithm performance scales with input size in terms of time and space complexity.
                                    </p>
                                    <div className="bg-indigo-100 p-3 rounded text-xs">
                                        <strong>Common Complexities:</strong>
                                        <pre className="mt-2 text-indigo-800">
                                            {`O(1) - Constant Time:
• Array access by index: arr[5]
• Hash table lookup
• Same performance regardless of input size

O(log n) - Logarithmic:  
• Binary search in sorted array
• Balanced tree operations
• Performance increases slowly

O(n) - Linear:
• Array iteration, single loop
• Linear search
• Performance scales with input

O(n²) - Quadratic:
• Nested loops, bubble sort
• Performance scales with square of input`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">🔄 Synchronous vs Asynchronous</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Two different programming paradigms for handling operations - sequential execution vs concurrent non-blocking operations.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Key Differences:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`Synchronous Programming:
• Code executes line by line sequentially
• Blocking operations wait for completion
• Easier to understand and debug
• Can cause UI freezing
• Example: Traditional function calls

Asynchronous Programming:
• Non-blocking operations
• Better user experience
• Uses callbacks, promises, async/await
• More complex error handling  
• Example: API calls, file operations

JavaScript Examples:
// Sync: alert() blocks execution
// Async: setTimeout(), fetch(), Promise`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-orange-800 mb-3 text-lg">🏗️ Design Patterns</h4>
                                    <p className="text-orange-700 text-sm mb-3">
                                        Reusable solutions to commonly occurring problems in software design and architecture.
                                    </p>
                                    <div className="bg-orange-100 p-3 rounded text-xs">
                                        <strong>Common Patterns:</strong>
                                        <pre className="mt-2 text-orange-800">
                                            {`Creational Patterns:
• Singleton: Ensure single instance
• Factory: Create objects without specifying class
• Builder: Construct complex objects step by step

Structural Patterns:
• Adapter: Make incompatible interfaces work
• Decorator: Add behavior without altering structure
• Facade: Provide simplified interface

Behavioral Patterns:
• Observer: Notify multiple objects about changes
• Strategy: Define family of algorithms
• Command: Encapsulate requests as objects`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">📚 Data Structures</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        Ways of organizing and storing data in computer memory to enable efficient access and modification.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Common Data Structures:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`Linear Structures:
• Array: Fixed-size, indexed collection
• Linked List: Dynamic size, node-based
• Stack: LIFO (Last In, First Out)
• Queue: FIFO (First In, First Out)

Non-Linear Structures:
• Tree: Hierarchical, parent-child relationships
• Graph: Nodes connected by edges
• Hash Table: Key-value pairs, O(1) lookup
• Heap: Complete binary tree, priority queue

Time Complexities vary by operation and structure`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'behavioral':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What are Behavioral Interview Questions?</h2>
                            <p className="text-gray-600 mb-4">
                                Behavioral questions assess soft skills, problem-solving abilities, teamwork, and cultural fit.
                                They explore past experiences to predict future performance and evaluate communication skills.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">🤝 STAR Method</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        Structured approach to answering behavioral questions by providing specific examples with clear context and outcomes.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>STAR Framework:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`Situation:
• Set the context and background
• Describe the challenge or scenario
• Provide relevant details

Task:
• Explain your responsibility  
• What needed to be accomplished
• Your role in the situation

Action:
• Describe what you specifically did
• Focus on your actions and decisions
• Highlight skills and problem-solving

Result:
• Share the outcome and impact
• Quantify results when possible
• Mention lessons learned`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">🎯 Problem-Solving Examples</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Demonstrating analytical thinking, creativity, and persistence when facing technical or project challenges.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Key Elements to Include:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`Technical Complexity:
• Describe the specific challenge
• Technical constraints and limitations
• Why it was difficult to solve

Research & Learning:
• How you approached the problem
• Resources you used to learn
• People you consulted

Problem Breakdown:
• How you divided the problem
• Step-by-step approach
• Alternative solutions considered

Collaboration:
• Team involvement and communication
• How you shared knowledge
• Final outcome and lessons learned`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">💡 Continuous Learning</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        Demonstrating commitment to professional growth and staying current with technology trends.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Learning Resources & Methods:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`Formal Learning:
• Online courses (Udemy, Coursera, Pluralsight)
• Certifications and bootcamps
• University courses and workshops
• Conference attendance

Informal Learning:
• Technical blogs and newsletters
• Developer communities (Stack Overflow, Reddit)
• Open source contributions
• Personal projects and experimentation

Practical Application:
• Side projects to test new technologies
• Code reviews and pair programming
• Mentoring others
• Sharing knowledge through blogs/talks`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-orange-800 mb-3 text-lg">🏆 Interview Success Tips</h4>
                                    <p className="text-orange-700 text-sm mb-3">
                                        Best practices for technical interviews including preparation strategies and common pitfalls to avoid.
                                    </p>
                                    <div className="bg-orange-100 p-3 rounded text-xs">
                                        <strong>Do's and Don'ts:</strong>
                                        <pre className="mt-2 text-orange-800">
                                            {`✅ DO:
• Practice coding problems regularly
• Understand fundamentals deeply
• Ask clarifying questions
• Think out loud during problem solving
• Prepare questions about the company
• Research the company and role
• Practice mock interviews

❌ AVOID:
• Memorizing answers without understanding
• Jumping to code without planning
• Being afraid to admit knowledge gaps
• Focusing only on technical skills
• Speaking negatively about past employers
• Not practicing behavioral questions`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Interview Questions</h1>
                <p className="mt-2 text-gray-600">Comprehensive collection of common interview questions and detailed answers</p>
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
        </div>
    );
};

export default InterviewQuestions;

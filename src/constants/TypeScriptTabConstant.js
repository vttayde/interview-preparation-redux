// =============================================================================
// TYPESCRIPT PAGE CONSTANTS
// =============================================================================

export const TYPESCRIPT_TABS = [
    { id: 'basics', name: 'TS Fundamentals', icon: '🔷' },
    { id: 'types', name: 'Type System', icon: '📝' },
    { id: 'advanced', name: 'Advanced Types', icon: '🚀' },
    { id: 'generics', name: 'Generics', icon: '🔄' },
    { id: 'oop', name: 'OOP & Classes', icon: '🏗️' },
    { id: 'modules', name: 'Modules & Namespaces', icon: '📦' },
    { id: 'decorators', name: 'Decorators', icon: '✨' },
    { id: 'examples', name: 'Code Examples', icon: '💻' },
    { id: 'interview', name: 'Interview Q&A', icon: '❓' }
];

export const TYPESCRIPT_UI_TEXT = {
    title: "TypeScript Development Guide",
    description: "Master TypeScript fundamentals, type system, advanced types, generics, and modern development practices with comprehensive examples and explanations."
};

export const TYPESCRIPT_CONTENT = {
    basics: [
        {
            id: 1,
            title: "🔷 What is TypeScript?",
            description: "TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions. It helps catch errors during development and provides better tooling support.",
            color: "blue",
            code: `// TypeScript adds static typing to JavaScript
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

// Type inference - TypeScript can infer types
let inferredString = "This is automatically a string";
let inferredNumber = 100; // Automatically inferred as number

// Function with typed parameters and return type
function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

// TypeScript catches errors at compile time
// greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// JavaScript equivalent (no type safety)
function greetJS(name) {
    return "Hello, " + name.toUpperCase(); // Runtime error if name is not a string
}

console.log(greet("World")); // ✅ Works perfectly
console.log(inferredString.length); // ✅ IntelliSense support`
        },
        {
            id: 2,
            title: "🛡️ Type Safety Benefits",
            description: "TypeScript prevents common JavaScript errors by catching them at compile time, improving code reliability and developer productivity.",
            color: "green",
            code: `// 1. Catching Runtime Errors Early
function calculateArea(width: number, height: number): number {
    return width * height;
}

// calculateArea("10", "20"); // ❌ Error caught at compile time
calculateArea(10, 20); // ✅ Correct usage

// 2. Better IntelliSense and Autocomplete
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function processUser(user: User) {
    // TypeScript provides autocomplete for user properties
    console.log(user.name); // ✅ Autocomplete works
    console.log(user.age); // ❌ Error: Property 'age' does not exist
}

// 3. Self-Documenting Code
function fetchUserData(
    userId: number,
    includeProfile: boolean = false
): Promise<User> {
    // Function signature clearly shows what it expects and returns
    return fetch(\`/api/users/\${userId}\`)
        .then(response => response.json());
}

// 4. Refactoring Safety
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
    
    // If we change this method signature, TypeScript will
    // show errors everywhere it's used incorrectly
    multiply(x: number, y: number): number {
        return x * y;
    }
}`
        },
        {
            id: 3,
            title: "⚙️ TypeScript Setup & Configuration",
            description: "Setting up TypeScript in your project with proper configuration for optimal development experience.",
            color: "purple",
            code: `// 1. Installation
// npm install -g typescript
// npm install --save-dev typescript @types/node

// 2. Initialize TypeScript project
// npx tsc --init

// 3. tsconfig.json - Basic Configuration
{
  "compilerOptions": {
    "target": "ES2020",                    // JavaScript version to compile to
    "module": "commonjs",                  // Module system
    "lib": ["ES2020", "DOM"],             // Available libraries
    "outDir": "./dist",                    // Output directory
    "rootDir": "./src",                    // Source directory
    "strict": true,                        // Enable all strict type checks
    "esModuleInterop": true,              // Better CommonJS/ES6 interop
    "skipLibCheck": true,                  // Skip type checking of declaration files
    "forceConsistentCasingInFileNames": true,
    "declaration": true,                   // Generate .d.ts files
    "sourceMap": true,                     // Generate source maps
    "removeComments": true,                // Remove comments from output
    "noImplicitAny": true,                // Error on implicit 'any' type
    "noImplicitReturns": true,            // Error on missing return statements
    "noUnusedLocals": true,               // Error on unused local variables
    "noUnusedParameters": true            // Error on unused parameters
  },
  "include": ["src/**/*"],                // Files to include
  "exclude": ["node_modules", "dist"]    // Files to exclude
}

// 4. Package.json scripts
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
    "watch": "tsc --watch"
  }
}

// 5. Basic project structure
/*
project/
├── src/
│   ├── index.ts
│   ├── utils/
│   └── types/
├── dist/           (generated)
├── tsconfig.json
└── package.json
*/`
        },
        {
            id: 4,
            title: "🎯 Basic Type Annotations",
            description: "Understanding fundamental TypeScript type annotations and how to use them effectively in your code.",
            color: "yellow",
            code: `// Primitive Types
let userName: string = "John Doe";
let age: number = 30;
let isStudent: boolean = false;
let score: null = null;
let data: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["apple", "banana", "orange"];
let mixed: (string | number)[] = ["hello", 42, "world"];

// Objects
let person: {
    name: string;
    age: number;
    isActive: boolean;
} = {
    name: "Alice",
    age: 25,
    isActive: true
};

// Functions
function add(a: number, b: number): number {
    return a + b;
}

// Arrow functions
const multiply = (x: number, y: number): number => x * y;

// Optional parameters
function greet(name: string, greeting?: string): string {
    return \`\${greeting || "Hello"}, \${name}!\`;
}

// Default parameters
function createUser(name: string, role: string = "user"): object {
    return { name, role };
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function type aliases
type MathOperation = (a: number, b: number) => number;

const divide: MathOperation = (a, b) => a / b;
const subtract: MathOperation = (a, b) => a - b;

// Void return type
function logMessage(message: string): void {
    console.log(message);
    // No return statement needed
}

// Never return type (functions that never return)
function throwError(message: string): never {
    throw new Error(message);
}`
        }
    ],
    types: [
        {
            id: 5,
            title: "📝 Primitive Types",
            description: "TypeScript's basic types including string, number, boolean, and special types like any, unknown, and never.",
            color: "blue",
            code: `// Basic primitive types
let message: string = "Hello TypeScript";
let count: number = 42;
let isComplete: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// The 'any' type (use sparingly)
let anything: any = "could be anything";
anything = 42;
anything = { name: "object" };
anything.foo.bar.baz; // No type checking ❌

// The 'unknown' type (safer than any)
let userInput: unknown = getData();

// Type checking required before use
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase()); // ✅ Safe
}

// The 'never' type
function infiniteLoop(): never {
    while (true) {
        // Never returns
    }
}

function throwError(message: string): never {
    throw new Error(message);
}

// Exhaustive checking with never
type Color = "red" | "green" | "blue";

function getColorName(color: Color): string {
    switch (color) {
        case "red":
            return "Red";
        case "green":
            return "Green";
        case "blue":
            return "Blue";
        default:
            // This should never be reached
            const exhaustiveCheck: never = color;
            throw new Error(\`Unhandled color: \${exhaustiveCheck}\`);
    }
}

// Symbol and BigInt (ES2020+)
let sym: symbol = Symbol("unique");
let bigNumber: bigint = 100n;`
        },
        {
            id: 6,
            title: "🔗 Union and Intersection Types",
            description: "Combining types using union (|) and intersection (&) operators for flexible type definitions.",
            color: "green",
            code: `// Union Types - value can be one of several types
type StringOrNumber = string | number;

let value: StringOrNumber = "hello";
value = 42; // Both are valid

function processId(id: string | number): string {
    // Type narrowing required
    if (typeof id === "string") {
        return id.toUpperCase();
    } else {
        return id.toString();
    }
}

// Union with literal types
type Status = "loading" | "success" | "error";
type Theme = "light" | "dark";

function setStatus(status: Status) {
    // Only accepts the exact strings
    console.log(\`Status: \${status}\`);
}

setStatus("loading"); // ✅ Valid
// setStatus("pending"); // ❌ Error

// Intersection Types - combines multiple types
interface Name {
    name: string;
}

interface Age {
    age: number;
}

type Person = Name & Age;

let person: Person = {
    name: "John",
    age: 30
    // Must have both properties
};

// Complex intersection example
interface ApiResponse {
    status: number;
    message: string;
}

interface UserData {
    id: number;
    username: string;
    email: string;
}

type UserApiResponse = ApiResponse & {
    data: UserData;
};

let response: UserApiResponse = {
    status: 200,
    message: "Success",
    data: {
        id: 1,
        username: "johndoe",
        email: "john@example.com"
    }
};

// Discriminated Unions
interface LoadingState {
    type: "loading";
}

interface SuccessState {
    type: "success";
    data: any;
}

interface ErrorState {
    type: "error";
    error: string;
}

type AppState = LoadingState | SuccessState | ErrorState;

function handleState(state: AppState) {
    switch (state.type) {
        case "loading":
            console.log("Loading...");
            break;
        case "success":
            console.log("Data:", state.data);
            break;
        case "error":
            console.log("Error:", state.error);
            break;
    }
}`
        },
        {
            id: 7,
            title: "🏷️ Type Aliases and Interfaces",
            description: "Creating reusable type definitions with type aliases and interfaces for better code organization.",
            color: "purple",
            code: `// Type Aliases
type UserID = string | number;
type EventHandler = (event: Event) => void;
type Point = {
    x: number;
    y: number;
};

// Using type aliases
let userId: UserID = "user123";
let coords: Point = { x: 10, y: 20 };

// Interfaces
interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // Optional property
    readonly createdAt: Date; // Read-only property
}

// Interface extension
interface AdminUser extends User {
    permissions: string[];
    lastLogin: Date;
}

let admin: AdminUser = {
    id: 1,
    name: "Admin",
    email: "admin@example.com",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"],
    lastLogin: new Date()
};

// Interface merging (declaration merging)
interface Window {
    customProperty: string;
}

interface Window {
    anotherProperty: number;
}

// Now Window has both properties

// Function interfaces
interface MathOperation {
    (a: number, b: number): number;
}

let add: MathOperation = (x, y) => x + y;
let multiply: MathOperation = (x, y) => x * y;

// Index signatures
interface StringDictionary {
    [key: string]: string;
}

interface NumberDictionary {
    [index: number]: string;
}

let dict: StringDictionary = {
    name: "John",
    city: "New York"
};

// Hybrid types (callable and indexable)
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function createCounter(): Counter {
    let counter = function(start: number) {
        return start.toString();
    } as Counter;
    
    counter.interval = 1000;
    counter.reset = function() {
        console.log("Reset counter");
    };
    
    return counter;
}

// Type vs Interface - when to use what
// Use Interface for:
// - Object shapes that might be extended
// - When you need declaration merging
// - Public APIs

// Use Type aliases for:
// - Union/intersection types
// - Computed types
// - Complex type transformations`
        },
        {
            id: 8,
            title: "🔍 Type Guards and Narrowing",
            description: "Runtime type checking and type narrowing techniques to work safely with union types.",
            color: "yellow",
            code: `// Type Guards with typeof
function processValue(value: string | number) {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        return value.toUpperCase();
    } else {
        // TypeScript knows value is number here
        return value.toFixed(2);
    }
}

// Type Guards with instanceof
class Dog {
    bark() { console.log("Woof!"); }
}

class Cat {
    meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // TypeScript knows it's a Dog
    } else {
        animal.meow(); // TypeScript knows it's a Cat
    }
}

// Custom Type Guards
function isString(value: any): value is string {
    return typeof value === "string";
}

function isNumber(value: any): value is number {
    return typeof value === "number";
}

function processInput(input: unknown) {
    if (isString(input)) {
        console.log(input.length); // TypeScript knows input is string
    } else if (isNumber(input)) {
        console.log(input.toFixed(2)); // TypeScript knows input is number
    }
}

// In operator type guard
interface Bird {
    fly(): void;
}

interface Fish {
    swim(): void;
}

function move(animal: Bird | Fish) {
    if ("fly" in animal) {
        animal.fly(); // TypeScript knows it's a Bird
    } else {
        animal.swim(); // TypeScript knows it's a Fish
    }
}

// Discriminated Union type guards
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius ** 2;
        default:
            // Exhaustive checking
            const _exhaustiveCheck: never = shape;
            throw new Error(\`Unhandled shape: \${_exhaustiveCheck}\`);
    }
}

// Truthiness narrowing
function processArray(arr: string[] | null) {
    if (arr) {
        // TypeScript knows arr is string[] here
        console.log(arr.length);
        arr.forEach(item => console.log(item));
    }
}

// Equality narrowing
function processStringOrNumber(x: string | number, y: string | boolean) {
    if (x === y) {
        // TypeScript knows both x and y are strings here
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }
}`
        }
    ],
    advanced: [
        {
            id: 9,
            title: "🚀 Utility Types",
            description: "TypeScript's built-in utility types for transforming existing types: Partial, Required, Pick, Omit, and more.",
            color: "blue",
            code: `interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}

// Partial<T> - makes all properties optional
type PartialUser = Partial<User>;

function updateUser(user: User, updates: PartialUser): User {
    return { ...user, ...updates };
}

// Required<T> - makes all properties required
interface OptionalUser {
    id?: number;
    name?: string;
    email?: string;
}

type RequiredUser = Required<OptionalUser>;

// Pick<T, K> - select specific properties
type UserSummary = Pick<User, 'id' | 'name' | 'email'>;

// Omit<T, K> - exclude specific properties
type UserWithoutId = Omit<User, 'id'>;
type PublicUser = Omit<User, 'id' | 'isActive'>;

// Record<K, T> - create object type with specific keys and values
type UserRoles = Record<'admin' | 'user' | 'guest', string[]>;

let roles: UserRoles = {
    admin: ['create', 'read', 'update', 'delete'],
    user: ['read', 'update'],
    guest: ['read']
};

// ReturnType<T> - get return type of function
function getUser(): User {
    return { id: 1, name: "John", email: "john@example.com", age: 30, isActive: true };
}

type UserReturnType = ReturnType<typeof getUser>; // User`
        }
    ],
    generics: [
        {
            id: 10,
            title: "🔄 Generic Functions and Types",
            description: "Creating reusable components with generics for type safety and flexibility across different data types.",
            color: "blue",
            code: `// Basic generic function
function identity<T>(arg: T): T {
    return arg;
}

let stringResult = identity<string>("Hello"); // string
let numberResult = identity<number>(42); // number
let boolResult = identity(true); // Type inferred as boolean

// Generic function with constraints
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // OK, because T has a length property
    return arg;
}

logLength("Hello"); // ✅ string has length
logLength([1, 2, 3]); // ✅ array has length
logLength({ length: 10, value: 3 }); // ✅ object with length
// logLength(42); // ❌ Error: number doesn't have length

// Generic interfaces
interface GenericIdentity<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentity<number> = identity;

// Generic classes
class GenericQueue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

let numberQueue = new GenericQueue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);

let stringQueue = new GenericQueue<string>();
stringQueue.enqueue("first");
stringQueue.enqueue("second");

// Multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

let merged = merge({ name: "John" }, { age: 30 });
// Type: { name: string } & { age: number }

// Generic constraints with keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let person = { name: "John", age: 30, city: "NYC" };
let name = getProperty(person, "name"); // string
let age = getProperty(person, "age"); // number
// let invalid = getProperty(person, "invalid"); // ❌ Error`
        },
        {
            id: 11,
            title: "🎯 Advanced Generic Patterns",
            description: "Complex generic patterns including conditional types, mapped types, and utility type creation.",
            color: "green",
            code: `// Generic utility types
type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
};

type UserResponse = ApiResponse<User>;
type PostResponse = ApiResponse<Post>;

// Conditional generics
type ApiResult<T> = T extends string 
    ? { message: T } 
    : T extends number 
    ? { code: T } 
    : { data: T };

// Generic factory pattern
interface Factory<T> {
    create(...args: any[]): T;
}

class UserFactory implements Factory<User> {
    create(name: string, email: string): User {
        return {
            id: Date.now(),
            name,
            email,
            age: 0,
            isActive: true
        };
    }
}

// Generic repository pattern
interface Repository<T, ID> {
    findById(id: ID): Promise<T | null>;
    findAll(): Promise<T[]>;
    save(entity: T): Promise<T>;
    delete(id: ID): Promise<void>;
}

class UserRepository implements Repository<User, number> {
    async findById(id: number): Promise<User | null> {
        // Implementation
        return null;
    }

    async findAll(): Promise<User[]> {
        // Implementation
        return [];
    }

    async save(user: User): Promise<User> {
        // Implementation
        return user;
    }

    async delete(id: number): Promise<void> {
        // Implementation
    }
}

// Generic event system
interface EventMap {
    click: { x: number; y: number };
    keypress: { key: string };
    resize: { width: number; height: number };
}

class EventEmitter<T extends Record<string, any>> {
    private listeners: {
        [K in keyof T]?: Array<(event: T[K]) => void>;
    } = {};

    on<K extends keyof T>(event: K, listener: (event: T[K]) => void): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event]!.push(listener);
    }

    emit<K extends keyof T>(event: K, data: T[K]): void {
        const eventListeners = this.listeners[event];
        if (eventListeners) {
            eventListeners.forEach(listener => listener(data));
        }
    }
}

const emitter = new EventEmitter<EventMap>();
emitter.on('click', (event) => {
    console.log(\`Clicked at \${event.x}, \${event.y}\`);
});

// Generic builder pattern
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: keyof T, value: any): this {
        this.conditions.push(\`\${String(condition)} = \${value}\`);
        return this;
    }

    build(): string {
        return \`SELECT * FROM table WHERE \${this.conditions.join(' AND ')}\`;
    }
}

interface User {
    id: number;
    name: string;
    email: string;
}

const query = new QueryBuilder<User>()
    .where('name', 'John')
    .where('email', 'john@example.com')
    .build();`
        }
    ],
    oop: [
        {
            id: 12,
            title: "🏗️ Classes and Inheritance",
            description: "Object-oriented programming in TypeScript with classes, inheritance, access modifiers, and abstract classes.",
            color: "purple",
            code: `// Basic class with access modifiers
class Person {
    public name: string;           // Accessible everywhere
    protected age: number;         // Accessible in class and subclasses
    private ssn: string;          // Only accessible within class
    readonly id: number;          // Cannot be modified after initialization

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
        this.id = Date.now();
    }

    // Public method
    public introduce(): string {
        return \`Hi, I'm \${this.name}\`;
    }

    // Protected method - accessible in subclasses
    protected getAge(): number {
        return this.age;
    }

    // Private method - only accessible within this class
    private getSSN(): string {
        return this.ssn;
    }

    // Getter
    get displayName(): string {
        return this.name.toUpperCase();
    }

    // Setter
    set displayName(value: string) {
        this.name = value.toLowerCase();
    }
}

// Inheritance
class Employee extends Person {
    private salary: number;
    public department: string;

    constructor(name: string, age: number, ssn: string, salary: number, department: string) {
        super(name, age, ssn); // Call parent constructor
        this.salary = salary;
        this.department = department;
    }

    // Override parent method
    public introduce(): string {
        return \`Hi, I'm \${this.name} from \${this.department}\`;
    }

    // New method specific to Employee
    public work(): string {
        return \`\${this.name} is working in \${this.department}\`;
    }

    // Can access protected members from parent
    public getEmployeeAge(): number {
        return this.getAge(); // ✅ Protected method accessible
    }

    // Method overloading
    public calculatePay(): number;
    public calculatePay(bonus: number): number;
    public calculatePay(bonus?: number): number {
        return this.salary + (bonus || 0);
    }
}

// Abstract class
abstract class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Concrete method
    public getName(): string {
        return this.name;
    }

    // Abstract method - must be implemented by subclasses
    abstract makeSound(): string;
    abstract move(): void;
}

class Dog extends Animal {
    makeSound(): string {
        return "Woof! Woof!";
    }

    move(): void {
        console.log(\`\${this.name} is running\`);
    }

    // Additional method specific to Dog
    fetch(): string {
        return \`\${this.name} is fetching the ball\`;
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow!";
    }

    move(): void {
        console.log(\`\${this.name} is prowling\`);
    }
}

// Static members
class MathUtils {
    static readonly PI = 3.14159;
    private static instance: MathUtils;

    private constructor() {} // Private constructor for singleton

    static getInstance(): MathUtils {
        if (!MathUtils.instance) {
            MathUtils.instance = new MathUtils();
        }
        return MathUtils.instance;
    }

    static calculateCircleArea(radius: number): number {
        return MathUtils.PI * radius * radius;
    }

    static add(a: number, b: number): number {
        return a + b;
    }
}

// Usage
const employee = new Employee("John", 30, "123-45-6789", 50000, "IT");
console.log(employee.introduce());
console.log(employee.work());

const dog = new Dog("Buddy");
console.log(dog.makeSound());
dog.move();

const area = MathUtils.calculateCircleArea(5);
const mathUtils = MathUtils.getInstance();`
        }
    ],
    interview: [
        {
            id: 13,
            title: "❓ TypeScript Interview Questions",
            description: "Common TypeScript interview questions with detailed explanations and practical examples.",
            color: "red",
            code: `// Q1: What are the benefits of using TypeScript over JavaScript?
/*
Benefits:
1. Static Type Checking - Catch errors at compile time
2. Better IDE Support - IntelliSense, refactoring, navigation
3. Enhanced Code Documentation - Types serve as documentation
4. Improved Maintainability - Easier to understand and modify code
5. Better Refactoring - Safe renaming and restructuring
6. Modern JavaScript Features - ES6+ features with backward compatibility
*/

// Q2: Explain the difference between 'interface' and 'type'
// Interface - can be extended and merged
interface UserInterface {
    name: string;
}

interface UserInterface {
    age: number; // Declaration merging
}

interface AdminInterface extends UserInterface {
    permissions: string[];
}

// Type alias - cannot be merged, but more flexible
type UserType = {
    name: string;
    age: number;
};

type AdminType = UserType & {
    permissions: string[];
};

// Q3: What is the difference between 'any', 'unknown', and 'never'?
let anyValue: any = "hello";
anyValue.foo.bar.baz; // No type checking - dangerous

let unknownValue: unknown = "hello";
// unknownValue.toUpperCase(); // ❌ Error - must check type first
if (typeof unknownValue === "string") {
    unknownValue.toUpperCase(); // ✅ Safe after type check
}

// never - represents values that never occur
function throwError(): never {
    throw new Error("Something went wrong");
}

// Q4: Explain generic constraints
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know T has length property
    return arg;
}

// Q5: What are utility types? Give examples
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

type PartialUser = Partial<User>; // All properties optional
type UserEmail = Pick<User, 'email'>; // Only email property
type UserWithoutId = Omit<User, 'id'>; // All except id
type UserKeys = keyof User; // "id" | "name" | "email" | "age"

// Q6: How do you create a type-safe event emitter?
interface Events {
    click: { x: number; y: number };
    change: { value: string };
}

class TypedEventEmitter<T extends Record<string, any>> {
    private listeners: {
        [K in keyof T]?: Array<(data: T[K]) => void>
    } = {};

    on<K extends keyof T>(event: K, callback: (data: T[K]) => void) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event]!.push(callback);
    }

    emit<K extends keyof T>(event: K, data: T[K]) {
        this.listeners[event]?.forEach(callback => callback(data));
    }
}

// Q7: How do you implement function overloading?
function createDate(timestamp: number): Date;
function createDate(year: number, month: number, day: number): Date;
function createDate(timestampOrYear: number, month?: number, day?: number): Date {
    if (month !== undefined && day !== undefined) {
        return new Date(timestampOrYear, month - 1, day);
    } else {
        return new Date(timestampOrYear);
    }
}

// Q8: What is mapped types and conditional types?
// Mapped type - transform all properties
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Conditional type - type depends on condition
type NonNullable<T> = T extends null | undefined ? never : T;

type SafeString = NonNullable<string | null>; // string`
        }
    ],
    default: [
        {
            id: 1,
            title: "🚀 Welcome to TypeScript Mastery",
            description: "TypeScript is a powerful superset of JavaScript that adds static typing. Master its concepts and build more reliable applications.",
            color: "blue",
            code: `// Welcome to TypeScript!
interface Greeting {
    message: string;
    language: string;
}

function createGreeting(name: string): Greeting {
    return {
        message: \`Hello, \${name}! Welcome to TypeScript! 🔷\`,
        language: "TypeScript"
    };
}

const greeting = createGreeting("Developer");
console.log(greeting.message);

// TypeScript is used for:
// - Large-scale JavaScript applications
// - Better code maintainability and readability
// - Catching errors during development
// - Enhanced IDE support and IntelliSense
// - Modern JavaScript features with type safety`
        }
    ]
};

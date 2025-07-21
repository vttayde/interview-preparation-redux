import { useState } from 'react';
import TopicsNavigation from '../../../components/layout/TopicsNavigation';

const TypeScript = () => {
    const [activeTab, setActiveTab] = useState('basics');

    const tabs = [
        { id: 'basics', name: 'TS Fundamentals', icon: '🔷' },
        { id: 'types', name: 'Type System', icon: '📝' },
        { id: 'advanced', name: 'Advanced Types', icon: '🚀' },
        { id: 'oop', name: 'OOP & Classes', icon: '🏗️' },
        { id: 'examples', name: 'Code Examples', icon: '💻' },
        { id: 'interview', name: 'Interview Q&A', icon: '❓' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'basics':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is TypeScript?</h2>
                            <p className="text-gray-600 mb-4">
                                TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions. 
                                It helps catch errors during development and provides better tooling support with IntelliSense and refactoring capabilities.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Benefits</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">🛡️ Type Safety</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        Catch errors at compile time rather than runtime, preventing common JavaScript bugs and improving code reliability.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-blue-800">
{`// TypeScript catches this error at compile time
function greet(name: string) {
    return "Hello, " + name;
}

greet(42); // Error: Argument of type 'number' is not assignable to type 'string'

// JavaScript would only fail at runtime
function greetJS(name) {
    return "Hello, " + name.toUpperCase();
}

greetJS(42); // Runtime error: name.toUpperCase is not a function`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">🔧 Better Tooling</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Enhanced IDE support with autocomplete, refactoring, navigation, and intelligent code suggestions.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>IDE Features:</strong>
                                        <ul className="mt-2 text-green-800 space-y-1">
                                            <li>• IntelliSense autocomplete</li>
                                            <li>• Real-time error detection</li>
                                            <li>• Safe refactoring tools</li>
                                            <li>• Go to definition/references</li>
                                            <li>• Symbol renaming</li>
                                            <li>• Import management</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">📚 Scalability</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        Makes large codebases more maintainable with clear contracts, interfaces, and self-documenting code.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Scalability Benefits:</strong>
                                        <pre className="mt-2 text-purple-800">
{`// Clear interface contracts
interface User {
    id: number;
    name: string;
    email: string;
    preferences?: UserPreferences;
}

// Self-documenting function signatures
function updateUser(
    userId: number, 
    updates: Partial<User>
): Promise<User> {
    // Implementation details are clear from types
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Getting Started</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-2">Installation</h4>
                                    <div className="bg-blue-100 p-2 rounded text-xs font-mono">
                                        <div>npm install -g typescript</div>
                                        <div>npm install --save-dev typescript</div>
                                        <div>npm install --save-dev @types/node</div>
                                    </div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-2">Basic Setup</h4>
                                    <div className="bg-green-100 p-2 rounded text-xs font-mono">
                                        <div>tsc --init</div>
                                        <div>tsc app.ts</div>
                                        <div>node app.js</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'types':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">TypeScript Type System</h2>
                            <p className="text-gray-600 mb-4">
                                TypeScript's type system is both powerful and flexible, providing static type checking while maintaining JavaScript's dynamic nature.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic Types</h3>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3">Primitive Types</h4>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <pre className="text-blue-800">
{`// Basic types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let value: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuples
let person: [string, number] = ["John", 30];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue;`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3">Special Types</h4>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <pre className="text-green-800">
{`// Any type (avoid when possible)
let anything: any = 42;
anything = "hello";
anything = true;

// Unknown type (safer than any)
let userInput: unknown;
userInput = 5;
userInput = "hello";
// Must check type before using
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}

// Never type (functions that never return)
function throwError(message: string): never {
    throw new Error(message);
}

// Void type (functions that don't return value)
function logMessage(msg: string): void {
    console.log(msg);
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Union & Intersection Types</h3>
                            <div className="space-y-4">
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3">Union Types</h4>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <pre className="text-purple-800">
{`// Union types (|)
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42; // Both are valid

// Function with union parameter
function formatId(id: string | number): string {
    if (typeof id === "string") {
        return id.toUpperCase();
    } else {
        return id.toString();
    }
}

// Union with literals
type Theme = "light" | "dark" | "auto";
let currentTheme: Theme = "dark";

// Union with objects
type Shape = Circle | Rectangle | Triangle;`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-orange-800 mb-3">Intersection Types</h4>
                                    <div className="bg-orange-100 p-3 rounded text-xs">
                                        <pre className="text-orange-800">
{`// Intersection types (&)
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
}; // Must have both properties

// Intersection with functions
type LogFunction = (message: string) => void;
type TimestampFunction = () => number;

type Logger = LogFunction & TimestampFunction & {
    level: "info" | "warn" | "error";
};`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Type Assertions & Guards</h3>
                            <div className="bg-red-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-red-800 mb-3">Type Assertions & Guards</h4>
                                <div className="bg-red-100 p-3 rounded text-xs">
                                    <pre className="text-red-800">
{`// Type assertions
let someValue: unknown = "hello world";
let strLength: number = (someValue as string).length;
// or
let strLength2: number = (<string>someValue).length;

// Type guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function processValue(value: unknown) {
    if (isString(value)) {
        // TypeScript knows value is string here
        console.log(value.toUpperCase());
    }
}

// in operator
interface Car {
    drive(): void;
}

interface Boat {
    sail(): void;
}

function operate(vehicle: Car | Boat) {
    if ("drive" in vehicle) {
        vehicle.drive();
    } else {
        vehicle.sail();
    }
}`}
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'advanced':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advanced TypeScript Types</h2>
                            <p className="text-gray-600 mb-4">
                                Advanced type features that make TypeScript incredibly powerful for building large, maintainable applications.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Generics</h3>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-3">Generic Functions & Interfaces</h4>
                                <div className="bg-blue-100 p-3 rounded text-xs">
                                    <pre className="text-blue-800">
{`// Generic functions
function identity<T>(arg: T): T {
    return arg;
}

let stringOutput = identity<string>("hello");
let numberOutput = identity<number>(42);

// Generic interfaces
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

// Generic classes
class GenericClass<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
    
    constructor(zeroValue: T, addFn: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = addFn;
    }
}

// Generic constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know it has a .length property
    return arg;
}`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Utility Types</h3>
                            <div className="space-y-4">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3">Built-in Utility Types</h4>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <pre className="text-green-800">
{`interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

// Partial<T> - makes all properties optional
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number; }

// Required<T> - makes all properties required
type RequiredUser = Required<User>;
// { id: number; name: string; email: string; age: number; }

// Pick<T, K> - picks specific properties
type UserSummary = Pick<User, "id" | "name">;
// { id: number; name: string; }

// Omit<T, K> - omits specific properties
type UserWithoutId = Omit<User, "id">;
// { name: string; email: string; age?: number; }

// Record<K, T> - creates object type with specific keys
type UserRoles = Record<"admin" | "user" | "guest", boolean>;
// { admin: boolean; user: boolean; guest: boolean; }`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3">Conditional Types</h4>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <pre className="text-purple-800">
{`// Conditional types
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<number>;   // false

// Infer keyword
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type FunctionReturn = ReturnType<() => string>; // string

// Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;
type ArraysUnion = ToArray<string | number>; // string[] | number[]

// Mapped types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Template literal types (example)
type Greeting = "Hello, " + string;
let greeting: Greeting = "Hello, World"; // Valid`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Mapped Types</h3>
                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-orange-800 mb-3">Custom Mapped Types</h4>
                                <div className="bg-orange-100 p-3 rounded text-xs">
                                    <pre className="text-orange-800">
{`// Custom mapped types
type Stringify<T> = {
    [K in keyof T]: string;
};

interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

type StringifiedPerson = Stringify<Person>;
// { name: string; age: string; isActive: string; }

// Key remapping
type Getters<T> = {
    [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type PersonGetters = Getters<Person>;
// {
//     getName: () => string;
//     getAge: () => number;
//     getIsActive: () => boolean;
// }

// Filtering properties
type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;`}
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'oop':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Object-Oriented Programming</h2>
                            <p className="text-gray-600 mb-4">
                                TypeScript enhances JavaScript's class-based OOP with access modifiers, interfaces, abstract classes, and decorators.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Classes & Access Modifiers</h3>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-3">Class Definition</h4>
                                <div className="bg-blue-100 p-3 rounded text-xs">
                                    <pre className="text-blue-800">
{`class Person {
    // Public by default
    public name: string;
    
    // Private - only accessible within class
    private _age: number;
    
    // Protected - accessible in class and subclasses
    protected id: number;
    
    // Readonly - can only be set in constructor
    readonly birthDate: Date;
    
    // Static properties
    static species: string = "Homo sapiens";
    
    constructor(name: string, age: number, id: number) {
        this.name = name;
        this._age = age;
        this.id = id;
        this.birthDate = new Date();
    }
    
    // Getter
    get age(): number {
        return this._age;
    }
    
    // Setter
    set age(value: number) {
        if (value >= 0) {
            this._age = value;
        }
    }
    
    // Methods
    introduce(): string {
        return \`Hi, I'm \${this.name} and I'm \${this._age} years old.\`;
    }
    
    // Static methods
    static getSpecies(): string {
        return Person.species;
    }
}`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Interfaces & Implementation</h3>
                            <div className="space-y-4">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3">Interfaces</h4>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <pre className="text-green-800">
{`// Interface definition
interface Flyable {
    altitude: number;
    fly(): void;
    land(): void;
}

interface Swimmable {
    depth: number;
    swim(): void;
    dive(depth: number): void;
}

// Class implementing interfaces
class Duck implements Flyable, Swimmable {
    altitude: number = 0;
    depth: number = 0;
    
    fly(): void {
        this.altitude = 100;
        console.log("Duck is flying");
    }
    
    land(): void {
        this.altitude = 0;
        console.log("Duck has landed");
    }
    
    swim(): void {
        this.depth = 5;
        console.log("Duck is swimming");
    }
    
    dive(depth: number): void {
        this.depth = depth;
        console.log(\`Duck diving to \${depth} meters\`);
    }
}

// Interface extending other interfaces
interface Animal {
    name: string;
    age: number;
}

interface Bird extends Animal {
    wingspan: number;
    canFly: boolean;
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3">Inheritance & Abstract Classes</h4>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <pre className="text-purple-800">
{`// Abstract class
abstract class Animal {
    protected name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    // Concrete method
    move(): void {
        console.log(\`\${this.name} is moving\`);
    }
    
    // Abstract method - must be implemented by subclasses
    abstract makeSound(): void;
    
    // Abstract getter
    abstract get species(): string;
}

// Concrete class extending abstract class
class Dog extends Animal {
    private breed: string;
    
    constructor(name: string, breed: string) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    makeSound(): void {
        console.log(\`\${this.name} barks: Woof!\`);
    }
    
    get species(): string {
        return "Canis lupus";
    }
    
    // Override parent method
    move(): void {
        console.log(\`\${this.name} runs on four legs\`);
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Buddy barks: Woof!
myDog.move();      // Buddy runs on four legs`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Decorators</h3>
                            <div className="bg-yellow-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-3">Class & Method Decorators</h4>
                                <div className="bg-yellow-100 p-3 rounded text-xs">
                                    <pre className="text-yellow-800">
{`// Enable decorators in tsconfig.json:
// "experimentalDecorators": true

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        console.log(\`Calling \${propertyKey} with args: \${JSON.stringify(args)}\`);
        const result = originalMethod.apply(this, args);
        console.log(\`Result: \${result}\`);
        return result;
    };
}

// Class decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Property decorator
function readonly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false
    });
}

@sealed
class Calculator {
    @readonly
    version: string = "1.0";
    
    @log
    add(a: number, b: number): number {
        return a + b;
    }
    
    @log
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const calc = new Calculator();
calc.add(2, 3); // Logs method call and result`}
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'examples':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">TypeScript Code Examples</h2>
                            <p className="text-gray-600 mb-4">
                                Practical examples demonstrating real-world TypeScript patterns and best practices.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">API Response Handling</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <pre className="text-sm text-gray-700 overflow-x-auto">
{`// API Response Types
interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    timestamp: number;
}

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    preferences: {
        theme: 'light' | 'dark';
        notifications: boolean;
        language: string;
    };
}

interface PaginatedResponse<T> {
    items: T[];
    totalCount: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

// API Service Class
class ApiService {
    private baseUrl: string;
    
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    
    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(\`\${this.baseUrl}\${endpoint}\`);
            const data = await response.json();
            
            if (!response.ok) {
                return {
                    success: false,
                    error: data.message || 'Request failed',
                    timestamp: Date.now()
                };
            }
            
            return {
                success: true,
                data,
                timestamp: Date.now()
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
                timestamp: Date.now()
            };
        }
    }
    
    async getUsers(page: number = 1, pageSize: number = 10): Promise<ApiResponse<PaginatedResponse<User>>> {
        return this.get<PaginatedResponse<User>>(\`/users?page=\${page}&size=\${pageSize}\`);
    }
    
    async getUserById(id: number): Promise<ApiResponse<User>> {
        return this.get<User>(\`/users/\${id}\`);
    }
}

// Usage
const apiService = new ApiService('https://api.example.com');

async function loadUserProfile(userId: number) {
    const response = await apiService.getUserById(userId);
    
    if (response.success && response.data) {
        const user = response.data;
        console.log(\`User: \${user.name} (\${user.email})\`);
        console.log(\`Theme: \${user.preferences.theme}\`);
    } else {
        console.error('Failed to load user:', response.error);
    }
}`}
                                </pre>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">State Management Pattern</h3>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <pre className="text-sm text-green-800 overflow-x-auto">
{`// State Management with TypeScript
type AppState = {
    user: User | null;
    loading: boolean;
    error: string | null;
    preferences: UserPreferences;
};

type UserPreferences = {
    theme: 'light' | 'dark';
    language: 'en' | 'es' | 'fr' | 'de';
    notifications: boolean;
};

// Action Types
type Action =
    | { type: 'LOADING_START' }
    | { type: 'LOADING_END' }
    | { type: 'SET_USER'; payload: User }
    | { type: 'SET_ERROR'; payload: string }
    | { type: 'CLEAR_ERROR' }
    | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserPreferences> };

// Reducer
function appReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'LOADING_START':
            return { ...state, loading: true, error: null };
            
        case 'LOADING_END':
            return { ...state, loading: false };
            
        case 'SET_USER':
            return { ...state, user: action.payload, error: null };
            
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
            
        case 'CLEAR_ERROR':
            return { ...state, error: null };
            
        case 'UPDATE_PREFERENCES':
            return {
                ...state,
                preferences: { ...state.preferences, ...action.payload }
            };
            
        default:
            return state;
    }
}

// Store Class
class Store<T> {
    private state: T;
    private listeners: Array<(state: T) => void> = [];
    
    constructor(initialState: T) {
        this.state = initialState;
    }
    
    getState(): T {
        return this.state;
    }
    
    dispatch(action: Action): void {
        this.state = appReducer(this.state as AppState, action) as T;
        this.listeners.forEach(listener => listener(this.state));
    }
    
    subscribe(listener: (state: T) => void): () => void {
        this.listeners.push(listener);
        return () => {
            const index = this.listeners.indexOf(listener);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        };
    }
}

// Usage
const initialState: AppState = {
    user: null,
    loading: false,
    error: null,
    preferences: {
        theme: 'light',
        language: 'en',
        notifications: true
    }
};

const store = new Store(initialState);

// Subscribe to state changes
const unsubscribe = store.subscribe((state) => {
    console.log('State updated:', state);
});

// Dispatch actions
store.dispatch({ type: 'LOADING_START' });
store.dispatch({ 
    type: 'SET_USER', 
    payload: { 
        id: 1, 
        name: 'John Doe', 
        email: 'john@example.com',
        preferences: initialState.preferences
    } 
});`}
                                </pre>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Generic Repository Pattern</h3>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <pre className="text-sm text-blue-800 overflow-x-auto">
{`// Generic Repository Pattern
interface BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

interface Repository<T extends BaseEntity> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[]>;
    create(entity: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T>;
    update(id: number, updates: Partial<T>): Promise<T | null>;
    delete(id: number): Promise<boolean>;
}

// Concrete Entity
interface Product extends BaseEntity {
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

// Repository Implementation
class ProductRepository implements Repository<Product> {
    private products: Product[] = [];
    private nextId = 1;
    
    async findById(id: number): Promise<Product | null> {
        return this.products.find(p => p.id === id) || null;
    }
    
    async findAll(): Promise<Product[]> {
        return [...this.products];
    }
    
    async create(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
        const now = new Date();
        const product: Product = {
            ...productData,
            id: this.nextId++,
            createdAt: now,
            updatedAt: now
        };
        
        this.products.push(product);
        return product;
    }
    
    async update(id: number, updates: Partial<Product>): Promise<Product | null> {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) return null;
        
        this.products[index] = {
            ...this.products[index],
            ...updates,
            updatedAt: new Date()
        };
        
        return this.products[index];
    }
    
    async delete(id: number): Promise<boolean> {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) return false;
        
        this.products.splice(index, 1);
        return true;
    }
    
    // Additional methods specific to Product
    async findByCategory(category: string): Promise<Product[]> {
        return this.products.filter(p => p.category === category);
    }
    
    async findInStock(): Promise<Product[]> {
        return this.products.filter(p => p.inStock);
    }
}

// Service Layer
class ProductService {
    constructor(private repository: ProductRepository) {}
    
    async getProduct(id: number): Promise<Product | null> {
        return this.repository.findById(id);
    }
    
    async getAllProducts(): Promise<Product[]> {
        return this.repository.findAll();
    }
    
    async createProduct(productData: {
        name: string;
        price: number;
        category: string;
        inStock?: boolean;
    }): Promise<Product> {
        return this.repository.create({
            ...productData,
            inStock: productData.inStock ?? true
        });
    }
    
    async updateProductPrice(id: number, newPrice: number): Promise<Product | null> {
        return this.repository.update(id, { price: newPrice });
    }
}

// Usage
const productRepo = new ProductRepository();
const productService = new ProductService(productRepo);

async function example() {
    // Create product
    const product = await productService.createProduct({
        name: "Laptop",
        price: 999.99,
        category: "Electronics"
    });
    
    console.log("Created product:", product);
    
    // Update price
    const updated = await productService.updateProductPrice(product.id, 899.99);
    console.log("Updated product:", updated);
}`}
                                </pre>
                            </div>
                        </section>
                    </div>
                );

            case 'interview':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">TypeScript Interview Questions</h2>
                            <p className="text-gray-600 mb-4">
                                Common TypeScript interview questions with detailed explanations to help you prepare for frontend developer positions.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic Questions</h3>
                            <div className="space-y-4">
                                <details className="bg-blue-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-blue-800 cursor-pointer mb-2">
                                        What is TypeScript and how does it differ from JavaScript?
                                    </summary>
                                    <div className="text-blue-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> TypeScript is a superset of JavaScript that adds static type definitions.</p>
                                        <p><strong>Key Differences:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>Type Safety:</strong> TypeScript provides compile-time type checking</li>
                                            <li><strong>Development Tools:</strong> Better IDE support with autocomplete and refactoring</li>
                                            <li><strong>Error Detection:</strong> Catches errors during development, not runtime</li>
                                            <li><strong>ES6+ Features:</strong> Supports modern JavaScript features regardless of target environment</li>
                                            <li><strong>Compilation:</strong> TypeScript compiles to plain JavaScript</li>
                                        </ul>
                                    </div>
                                </details>

                                <details className="bg-green-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-green-800 cursor-pointer mb-2">
                                        What are the benefits of using TypeScript?
                                    </summary>
                                    <div className="text-green-700 text-sm space-y-2">
                                        <p><strong>Benefits:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>Type Safety:</strong> Prevents type-related runtime errors</li>
                                            <li><strong>Better IDE Support:</strong> IntelliSense, autocomplete, refactoring</li>
                                            <li><strong>Scalability:</strong> Better for large codebases and teams</li>
                                            <li><strong>Self-documenting:</strong> Types serve as inline documentation</li>
                                            <li><strong>Refactoring Safety:</strong> Confident code changes with type checking</li>
                                            <li><strong>Team Collaboration:</strong> Clear contracts between modules</li>
                                        </ul>
                                    </div>
                                </details>

                                <details className="bg-purple-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-purple-800 cursor-pointer mb-2">
                                        Explain the difference between 'any' and 'unknown' types
                                    </summary>
                                    <div className="text-purple-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong></p>
                                        <div className="bg-purple-100 p-2 rounded font-mono text-xs space-y-2">
                                            <div>
                                                <strong>any:</strong> Disables type checking completely
                                                <pre className="mt-1">{`let value: any = 42;
value.foo.bar; // No error, but unsafe`}</pre>
                                            </div>
                                            <div>
                                                <strong>unknown:</strong> Type-safe alternative to any
                                                <pre className="mt-1">{`let value: unknown = 42;
// value.foo.bar; // Error!

if (typeof value === 'string') {
    value.toUpperCase(); // Safe
}`}</pre>
                                            </div>
                                        </div>
                                        <p><strong>Use unknown when:</strong> You don't know the type but want type safety</p>
                                    </div>
                                </details>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Intermediate Questions</h3>
                            <div className="space-y-4">
                                <details className="bg-orange-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-orange-800 cursor-pointer mb-2">
                                        What are generics and why are they useful?
                                    </summary>
                                    <div className="text-orange-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> Generics allow you to create reusable components that work with multiple types while maintaining type safety.</p>
                                        <div className="bg-orange-100 p-2 rounded font-mono text-xs">
                                            <pre>{`// Without generics - not reusable
function identityString(arg: string): string {
    return arg;
}

// With generics - reusable and type-safe
function identity<T>(arg: T): T {
    return arg;
}

let stringResult = identity<string>("hello");
let numberResult = identity<number>(42);`}</pre>
                                        </div>
                                        <p><strong>Benefits:</strong> Code reusability, type safety, flexibility</p>
                                    </div>
                                </details>

                                <details className="bg-red-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-red-800 cursor-pointer mb-2">
                                        Explain union types vs intersection types
                                    </summary>
                                    <div className="text-red-700 text-sm space-y-2">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <p><strong>Union Types (|):</strong></p>
                                                <div className="bg-red-100 p-2 rounded font-mono text-xs">
                                                    <pre>{`type StringOrNumber = string | number;

let value: StringOrNumber = "hello";
value = 42; // Both valid

// Can be one OR the other`}</pre>
                                                </div>
                                            </div>
                                            <div>
                                                <p><strong>Intersection Types (&):</strong></p>
                                                <div className="bg-red-100 p-2 rounded font-mono text-xs">
                                                    <pre>{`type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

let person: Person = {
    name: "John",
    age: 30 // Must have both
};`}</pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-teal-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-teal-800 cursor-pointer mb-2">
                                        What are utility types? Give examples.
                                    </summary>
                                    <div className="text-teal-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> Utility types are built-in type transformations that help manipulate types.</p>
                                        <div className="bg-teal-100 p-2 rounded font-mono text-xs">
                                            <pre>{`interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

// Partial<T> - makes all properties optional
type PartialUser = Partial<User>;

// Pick<T, K> - picks specific properties
type UserSummary = Pick<User, "id" | "name">;

// Omit<T, K> - omits specific properties
type UserWithoutId = Omit<User, "id">;

// Required<T> - makes all properties required
type RequiredUser = Required<User>;`}</pre>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Questions</h3>
                            <div className="space-y-4">
                                <details className="bg-indigo-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-indigo-800 cursor-pointer mb-2">
                                        Explain conditional types and provide an example
                                    </summary>
                                    <div className="text-indigo-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> Conditional types select one of two possible types based on a condition.</p>
                                        <div className="bg-indigo-100 p-2 rounded font-mono text-xs">
                                            <pre>{`// Syntax: T extends U ? X : Y
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<number>;   // false

// Practical example
type ApiResponse<T> = T extends string 
    ? { message: T } 
    : { data: T };

type StringResponse = ApiResponse<string>; 
// { message: string }

type UserResponse = ApiResponse<User>; 
// { data: User }`}</pre>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-pink-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-pink-800 cursor-pointer mb-2">
                                        What are mapped types and how do you create them?
                                    </summary>
                                    <div className="text-pink-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> Mapped types create new types by transforming properties of an existing type.</p>
                                        <div className="bg-pink-100 p-2 rounded font-mono text-xs">
                                            <pre>{`// Basic mapped type
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// With transformation
type Stringify<T> = {
    [K in keyof T]: string;
};

// Key remapping (TS 4.1+)
type Getters<T> = {
    [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface Person {
    name: string;
    age: number;
}

type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number; }`}</pre>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-yellow-50 p-4 rounded-lg">
                                    <summary className="font-semibold text-yellow-800 cursor-pointer mb-2">
                                        How do you handle type guards in TypeScript?
                                    </summary>
                                    <div className="text-yellow-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> Type guards are functions that narrow down types at runtime.</p>
                                        <div className="bg-yellow-100 p-2 rounded font-mono text-xs">
                                            <pre>{`// User-defined type guard
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

// Using type guard
function processValue(value: unknown) {
    if (isString(value)) {
        // TypeScript knows value is string here
        console.log(value.toUpperCase());
    }
}

// Discriminated unions
interface Cat {
    type: 'cat';
    meow(): void;
}

interface Dog {
    type: 'dog';
    bark(): void;
}

type Pet = Cat | Dog;

function handlePet(pet: Pet) {
    switch (pet.type) {
        case 'cat':
            pet.meow(); // TypeScript knows it's Cat
            break;
        case 'dog':
            pet.bark(); // TypeScript knows it's Dog
            break;
    }
}`}</pre>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Practical Scenarios</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2">Common Coding Challenges:</h4>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• Create a type-safe API client with generic methods</li>
                                    <li>• Implement a state management system with TypeScript</li>
                                    <li>• Design type-safe form validation with error handling</li>
                                    <li>• Build a generic repository pattern for database operations</li>
                                    <li>• Create utility types for common data transformations</li>
                                    <li>• Implement type-safe event emitter/listener system</li>
                                </ul>
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
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">TypeScript Study Guide</h1>
                    <p className="text-xl text-gray-600">Master TypeScript fundamentals, advanced types, and enterprise patterns</p>
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
            
            <TopicsNavigation />
        </div>
    );
};

export default TypeScript;

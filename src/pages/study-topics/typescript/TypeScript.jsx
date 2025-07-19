const TypeScript = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">TypeScript</h1>
        <p className="mt-2 text-gray-600">JavaScript with static type checking</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is TypeScript?</h2>
          <p className="text-gray-600 mb-4">
            TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions.
            It helps catch errors during development and provides better tooling support.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Static Typing</h4>
              <p className="text-blue-700 text-sm">Type annotations, type inference, compile-time error checking</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Advanced Types</h4>
              <p className="text-green-700 text-sm">Unions, intersections, generics, mapped types, conditional types</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Interfaces</h4>
              <p className="text-yellow-700 text-sm">Define object shapes, extend interfaces, optional properties</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Classes & OOP</h4>
              <p className="text-purple-700 text-sm">Access modifiers, inheritance, abstract classes, decorators</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Type System</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Basic Types</h4>
              <p className="text-gray-600 text-sm">string, number, boolean, array, object, null, undefined, any, unknown, never</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">Union Types</h4>
              <p className="text-gray-600 text-sm">Combine multiple types with | operator for flexible type definitions</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">Generics</h4>
              <p className="text-gray-600 text-sm">Create reusable components with type parameters</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">Utility Types</h4>
              <p className="text-gray-600 text-sm">Partial, Required, Pick, Omit, Record, Exclude, Extract</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Code Examples</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Basic Types and Interfaces</h4>
              <pre className="text-sm text-gray-700 overflow-x-auto">
{`// Interface definition
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

// Function with typed parameters and return
function createUser(userData: Omit<User, 'id'>): User {
  return {
    id: Math.random(),
    ...userData,
    isActive: userData.isActive ?? true
  };
}

// Generic function
function getArrayLength<T>(items: T[]): number {
  return items.length;
}

// Union types
type Status = 'loading' | 'success' | 'error';
type ApiResponse<T> = {
  data?: T;
  status: Status;
  message: string;
};`}
              </pre>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Advanced TypeScript</h4>
              <pre className="text-sm text-gray-700 overflow-x-auto">
{`// Mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Template literal types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

// Class with access modifiers
class BankAccount {
  private balance: number = 0;
  protected accountNumber: string;
  
  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }
  
  public deposit(amount: number): void {
    this.balance += amount;
  }
  
  public getBalance(): number {
    return this.balance;
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">TypeScript with React</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-700 overflow-x-auto">
{`// React component with TypeScript
interface Props {
  title: string;
  users: User[];
  onUserSelect: (user: User) => void;
}

const UserList: React.FC<Props> = ({ title, users, onUserSelect }) => {
  return (
    <div>
      <h2>{title}</h2>
      {users.map(user => (
        <div 
          key={user.id} 
          onClick={() => onUserSelect(user)}
          className="user-item"
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

// Custom hook with TypeScript
function useApi<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ... implementation
  
  return { data, loading, error };
}`}
            </pre>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interview Questions</h3>
          <div className="space-y-2">
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What are the benefits of using TypeScript?</summary>
              <p className="mt-2 text-gray-600 text-sm">Better error detection, improved IDE support, code documentation, refactoring safety, team collaboration, and gradual adoption.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">Explain the difference between 'any' and 'unknown'</summary>
              <p className="mt-2 text-gray-600 text-sm">'any' disables type checking entirely. 'unknown' is type-safe - you must check the type before using it.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What are generics and why use them?</summary>
              <p className="mt-2 text-gray-600 text-sm">Generics allow creating reusable components that work with multiple types while maintaining type safety. They provide flexibility without losing type information.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">How do you handle null and undefined in TypeScript?</summary>
              <p className="mt-2 text-gray-600 text-sm">Use strict null checks, optional chaining (?.), nullish coalescing (??), and union types to handle null/undefined safely.</p>
            </details>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Configuration & Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">tsconfig.json</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>strict: Enable all strict checks</li>
                <li>target: ECMAScript version</li>
                <li>module: Module system</li>
                <li>esModuleInterop: ES module compatibility</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Development Tools</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>TypeScript Compiler (tsc)</li>
                <li>ts-node for development</li>
                <li>ESLint with TypeScript rules</li>
                <li>Prettier for code formatting</li>
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
                <li>Enable strict mode in tsconfig</li>
                <li>Use interfaces for object shapes</li>
                <li>Prefer type unions over any</li>
                <li>Use utility types when appropriate</li>
                <li>Write type guards for runtime checks</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Avoid</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Using 'any' everywhere</li>
                <li>Ignoring TypeScript errors</li>
                <li>Over-engineering types</li>
                <li>Forgetting to handle null/undefined</li>
                <li>Not using type assertions safely</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TypeScript;

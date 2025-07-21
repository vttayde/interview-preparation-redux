import { useState } from 'react';
import TopicsNavigation from '../../../components/layout/TopicsNavigation';

const ReactJS = () => {
    const [activeTab, setActiveTab] = useState('basics');

    const tabs = [
        { id: 'basics', name: 'React Basics', icon: '⚛️' },
        { id: 'hooks', name: 'React Hooks', icon: '🪝' },
        { id: 'lifecycle', name: 'Component Lifecycle', icon: '🔄' },
        { id: 'examples', name: 'Code Examples', icon: '💻' },
        { id: 'ecosystem', name: 'React Ecosystem', icon: '🌟' },
        { id: 'interview', name: 'Interview Q&A', icon: '❓' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'basics':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is React?</h2>
                            <p className="text-gray-600 mb-4">
                                React is a JavaScript library for building user interfaces, particularly single-page applications.
                                It allows developers to create reusable UI components and manage application state efficiently.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">🧩 Components</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        Components are the building blocks of React applications. They are reusable pieces of UI that can accept inputs (props) and return React elements describing what should appear on the screen.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Alice" />`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">📝 JSX</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in JavaScript. It makes React components more readable and easier to write by combining the power of JavaScript with the familiarity of HTML.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`const element = (
  <div className="greeting">
    <h1>Hello, World!</h1>
    <p>Welcome to React</p>
  </div>
);`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-3 text-lg">⚡ Props</h4>
                                    <p className="text-yellow-700 text-sm mb-3">
                                        Props (properties) are how components communicate with each other. They are read-only data passed from parent to child components. Props make components reusable by allowing them to display different data.
                                    </p>
                                    <div className="bg-yellow-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-yellow-800">
                                            {`function UserCard({ name, email, age }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage
<UserCard name="John" email="john@example.com" age={25} />`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">🌐 Virtual DOM</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        The Virtual DOM is a programming concept where a "virtual" representation of the UI is kept in memory and synced with the "real" DOM. This process is called reconciliation. It allows React to optimize updates by only changing what actually needs to be updated.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>How it works:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`1. Create Virtual DOM representation
2. Compare (diff) with previous Virtual DOM
3. Calculate minimum changes needed
4. Update only changed elements in real DOM

// This efficiency makes React fast!`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Practices</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-2">✅ Do</h4>
                                    <ul className="text-green-700 text-sm space-y-1">
                                        <li>Use functional components with hooks</li>
                                        <li>Keep components small and focused</li>
                                        <li>Use TypeScript for type safety</li>
                                        <li>Implement proper error boundaries</li>
                                        <li>Optimize with React.memo when needed</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-800 mb-2">❌ Avoid</h4>
                                    <ul className="text-red-700 text-sm space-y-1">
                                        <li>Mutating state directly</li>
                                        <li>Using array indexes as keys</li>
                                        <li>Too many useEffect dependencies</li>
                                        <li>Prop drilling for deeply nested data</li>
                                        <li>Premature optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'hooks':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">React Hooks Deep Dive</h2>
                            <p className="text-gray-600 mb-4">
                                Hooks let you use state and other React features in functional components.
                                They provide a more direct API to React concepts you already know.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Hooks</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🎯 useState</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useState is a Hook that lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it. Unlike class components, you can have multiple useState calls for different pieces of state.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [user, setUser] = useState(null);

// Update state
setCount(count + 1);
setName('John Doe');
setUser({ id: 1, name: 'Alice' });`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">⚡ useEffect</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useEffect lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined. You can think of useEffect as a way to "do something" after render.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`// Run after every render
useEffect(() => {
  document.title = \`Count: \${count}\`;
});

// Run only once (on mount)
useEffect(() => {
  fetchUserData();
}, []); // Empty dependency array

// Run when specific values change
useEffect(() => {
  updateUserProfile(userId);
}, [userId]); // Runs when userId changes`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-yellow-500 pl-6 bg-yellow-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🌐 useContext</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useContext lets you consume context values without wrapping your component in a Context.Consumer. It's a cleaner way to access context data and helps avoid "prop drilling" - passing props through multiple component levels.
                                    </p>
                                    <div className="bg-yellow-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-yellow-800">
                                            {`const ThemeContext = createContext();

function Button() {
  const theme = useContext(ThemeContext);
  
  return (
    <button className={\`btn-\${theme}\`}>
      Click me
    </button>
  );
}

// Provider usage
<ThemeContext.Provider value="dark">
  <Button />
</ThemeContext.Provider>`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🚀 useMemo & useCallback</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useMemo memoizes expensive calculations, while useCallback memoizes functions. Both help optimize performance by preventing unnecessary re-computations and re-creations. Use them when you have expensive operations or when passing callbacks to optimized child components.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`// useMemo - memoize expensive calculation
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// useCallback - memoize function
const handleClick = useCallback(() => {
  onItemClick(item.id);
}, [item.id, onItemClick]);

// Pass to child component
<ExpensiveChild onClick={handleClick} />`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-red-500 pl-6 bg-red-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🎛️ useReducer</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useReducer is an alternative to useState for managing complex state logic. It's especially useful when you have state with multiple sub-values or when the next state depends on the previous one. It follows Redux patterns.
                                    </p>
                                    <div className="bg-red-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-red-800">
                                            {`const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'increment' });`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-indigo-500 pl-6 bg-indigo-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🎯 useRef</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useRef returns a mutable ref object whose .current property is initialized to the passed argument. It's useful for accessing DOM elements directly, storing mutable values that don't trigger re-renders, and keeping references to previous values.
                                    </p>
                                    <div className="bg-indigo-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-indigo-800">
                                            {`// Access DOM element
const inputRef = useRef(null);
inputRef.current.focus();

// Store mutable value
const countRef = useRef(0);
countRef.current = countRef.current + 1;

// Previous value
const prevCountRef = useRef();
useEffect(() => {
  prevCountRef.current = count;
});`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-pink-500 pl-6 bg-pink-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">📏 useLayoutEffect</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useLayoutEffect is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. This runs before the browser paints.
                                    </p>
                                    <div className="bg-pink-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-pink-800">
                                            {`const [height, setHeight] = useState(0);
const divRef = useRef();

useLayoutEffect(() => {
  // This runs before paint
  const rect = divRef.current.getBoundingClientRect();
  setHeight(rect.height);
}, []);

// Use when you need to measure DOM elements
// before the browser paints`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-teal-500 pl-6 bg-teal-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🆔 useId</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useId generates unique IDs that are stable across server and client renders. It's useful for accessibility attributes and form controls. This hook was introduced in React 18.
                                    </p>
                                    <div className="bg-teal-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-teal-800">
                                            {`function NameFields() {
  const id = useId();
  
  return (
    <div>
      <label htmlFor={\`\${id}-firstName\`}>
        First Name:
      </label>
      <input id={\`\${id}-firstName\`} type="text" />
      
      <label htmlFor={\`\${id}-lastName\`}>
        Last Name:
      </label>
      <input id={\`\${id}-lastName\`} type="text" />
    </div>
  );
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-orange-500 pl-6 bg-orange-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🔄 useImperativeHandle</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useImperativeHandle customizes the instance value that is exposed when using ref with forwardRef. It's rarely needed but useful when you want to expose imperative methods to parent components.
                                    </p>
                                    <div className="bg-orange-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-orange-800">
                                            {`const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    getValue: () => {
      return inputRef.current.value;
    }
  }));

  return <input ref={inputRef} />;
});`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-cyan-500 pl-6 bg-cyan-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">⚙️ useDebugValue</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        useDebugValue can be used to display a label for custom hooks in React DevTools. It's only called when the DevTools are open and helps with debugging custom hooks.
                                    </p>
                                    <div className="bg-cyan-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-cyan-800">
                                            {`function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  
  // Shows "OnlineStatus: Online" in DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');
  
  useEffect(() => {
    // ... online status logic
  }, []);
  
  return isOnline;
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Hooks</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Custom hooks are JavaScript functions whose names start with "use" and that may call other hooks. They let you extract component logic into reusable functions.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">useLocalStorage - Local Storage Hook</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">useFetch - API Fetch Hook</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">useToggle - Toggle State Hook</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  
  return [value, toggle];
}

// Usage
const [isOpen, toggleOpen] = useToggle(false);`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">useDebounce - Debounce Hook</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage for search input
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hook Examples</h3>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">useState Hook</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">useEffect Hook</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  // Effect with dependency
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  // Effect with cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{user ? user.name : 'Loading...'}</div>;
}`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Custom Hook</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setStoredValue = (value) => {
    try {
      setValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [value, setStoredValue];
}`}
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'lifecycle':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Component Lifecycle</h2>
                            <p className="text-gray-600 mb-4">
                                React components go through different phases: mounting, updating, and unmounting.
                                With hooks, we use useEffect to handle lifecycle events.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifecycle Phases</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🌱 Mounting</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Mounting is when a component is being created and inserted into the DOM for the first time. This is where you typically fetch initial data, set up subscriptions, or perform one-time setup operations.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>useEffect equivalent:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`useEffect(() => {
  // This runs once when component mounts
  fetchInitialData();
  setupEventListeners();
  
  console.log('Component mounted!');
}, []); // Empty dependency array = mount only`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🔄 Updating</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Updating occurs when a component's props or state change, causing it to re-render. This phase is useful for responding to prop changes, updating derived state, or performing side effects based on state changes.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>useEffect equivalent:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`useEffect(() => {
  // This runs when userId changes
  if (userId) {
    fetchUserData(userId);
    updateUserPreferences(userId);
  }
}, [userId]); // Runs when userId updates

useEffect(() => {
  // Runs on every render (mount + updates)
  updateDocumentTitle(title);
}); // No dependency array`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-red-500 pl-6 bg-red-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🗑️ Unmounting</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Unmounting happens when a component is being removed from the DOM. This is where you clean up subscriptions, cancel network requests, remove event listeners, or clear timers to prevent memory leaks.
                                    </p>
                                    <div className="bg-red-100 p-3 rounded text-xs">
                                        <strong>useEffect cleanup:</strong>
                                        <pre className="mt-2 text-red-800">
                                            {`useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);
  
  const subscription = subscribe(handleUpdate);
  
  // Cleanup function (runs on unmount)
  return () => {
    clearInterval(timer);
    subscription.unsubscribe();
    console.log('Component unmounted, cleaned up!');
  };
}, []);`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'examples':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Code Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Functional Component with Hooks</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Custom Hook</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`// Custom hook for API calls
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};`}
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'ecosystem':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">React Ecosystem</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-2">State Management</h4>
                                    <ul className="text-blue-700 text-sm space-y-1">
                                        <li>Redux - Predictable state container</li>
                                        <li>Zustand - Small, fast state management</li>
                                        <li>Context API - Built-in state sharing</li>
                                        <li>Recoil - Experimental state management</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-2">Routing</h4>
                                    <ul className="text-green-700 text-sm space-y-1">
                                        <li>React Router - Declarative routing</li>
                                        <li>Next.js Router - File-based routing</li>
                                        <li>Reach Router - Accessible router (merged)</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-2">Styling</h4>
                                    <ul className="text-yellow-700 text-sm space-y-1">
                                        <li>Styled Components - CSS-in-JS</li>
                                        <li>Emotion - Performant CSS-in-JS</li>
                                        <li>Tailwind CSS - Utility-first CSS</li>
                                        <li>CSS Modules - Scoped CSS</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-2">Testing</h4>
                                    <ul className="text-purple-700 text-sm space-y-1">
                                        <li>React Testing Library - Simple testing</li>
                                        <li>Jest - JavaScript testing framework</li>
                                        <li>Enzyme - JavaScript testing utility</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'interview':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interview Questions & Detailed Answers</h2>
                            <div className="space-y-4">
                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🔍 What is the Virtual DOM and how does it work?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            <strong>Answer:</strong> The Virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM.
                                        </p>
                                        <div className="bg-blue-50 p-3 rounded">
                                            <p className="text-blue-800 text-sm font-medium mb-2">How it works:</p>
                                            <ol className="text-blue-700 text-sm space-y-1 list-decimal list-inside">
                                                <li>When state changes, React creates a new Virtual DOM tree</li>
                                                <li>It compares (diffs) this new tree with the previous Virtual DOM tree</li>
                                                <li>It calculates the minimum number of changes needed</li>
                                                <li>It updates only those specific elements in the real DOM</li>
                                            </ol>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            <strong>Benefits:</strong> Faster updates, batch updates, predictable performance, and cross-browser compatibility.
                                        </p>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🔄 Explain the React component lifecycle in hooks
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            <strong>Answer:</strong> In React hooks, lifecycle methods are replaced by useEffect with different dependency patterns:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="bg-green-50 p-3 rounded">
                                                <p className="text-green-800 font-medium text-sm">ComponentDidMount:</p>
                                                <code className="text-green-700 text-xs">{`useEffect(() => {}, [])`}</code>
                                            </div>
                                            <div className="bg-blue-50 p-3 rounded">
                                                <p className="text-blue-800 font-medium text-sm">ComponentDidUpdate:</p>
                                                <code className="text-blue-700 text-xs">{`useEffect(() => {}, [dependency])`}</code>
                                            </div>
                                            <div className="bg-red-50 p-3 rounded">
                                                <p className="text-red-800 font-medium text-sm">ComponentWillUnmount:</p>
                                                <code className="text-red-700 text-xs">{`useEffect(() => { return () => {} }, [])`}</code>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🎛️ What are controlled vs uncontrolled components?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            <strong>Controlled Components:</strong> Form elements whose value is controlled by React state. The React component that renders the form also controls what happens in that form on subsequent user input.
                                        </p>
                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="text-green-800 text-xs font-medium mb-1">Controlled Example:</p>
                                            <pre className="text-green-700 text-xs">
                                                {`const [value, setValue] = useState('');
<input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>`}
                                            </pre>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            <strong>Uncontrolled Components:</strong> Form elements that store their own state internally. You access their values using refs.
                                        </p>
                                        <div className="bg-yellow-50 p-3 rounded">
                                            <p className="text-yellow-800 text-xs font-medium mb-1">Uncontrolled Example:</p>
                                            <pre className="text-yellow-700 text-xs">
                                                {`const inputRef = useRef();
<input ref={inputRef} />
// Access value: inputRef.current.value`}
                                            </pre>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        ⚡ How does React handle events?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            <strong>Answer:</strong> React uses SyntheticEvents, which are wrappers around native DOM events that provide consistent behavior across different browsers.
                                        </p>
                                        <div className="bg-purple-50 p-3 rounded">
                                            <p className="text-purple-800 font-medium text-sm mb-2">Key Features:</p>
                                            <ul className="text-purple-700 text-sm space-y-1 list-disc list-inside">
                                                <li><strong>Event Delegation:</strong> React uses a single event listener on the root element</li>
                                                <li><strong>Cross-browser compatibility:</strong> Same API across all browsers</li>
                                                <li><strong>Event Pooling:</strong> Events are reused for performance (legacy)</li>
                                                <li><strong>preventDefault & stopPropagation:</strong> Available on SyntheticEvent</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-100 p-3 rounded">
                                            <p className="text-gray-800 text-xs font-medium mb-1">Example:</p>
                                            <pre className="text-gray-700 text-xs">
                                                {`function Button() {
  const handleClick = (e) => {
    e.preventDefault(); // SyntheticEvent method
    console.log('Button clicked!');
  };
  
  return <button onClick={handleClick}>Click me</button>;
}`}
                                            </pre>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🕳️ What is prop drilling and how to avoid it?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            <strong>Prop Drilling:</strong> The process of passing props through multiple component layers to reach a deeply nested child component that needs the data.
                                        </p>
                                        <div className="bg-red-50 p-3 rounded">
                                            <p className="text-red-800 font-medium text-sm mb-2">Problem Example:</p>
                                            <pre className="text-red-700 text-xs">
                                                {`// Bad: Prop drilling
<App user={user}>
  <Header user={user}>
    <Navigation user={user}>
      <UserMenu user={user} />
    </Navigation>
  </Header>
</App>`}
                                            </pre>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="text-green-800 font-medium text-sm mb-2">Solutions:</p>
                                            <ul className="text-green-700 text-sm space-y-1 list-disc list-inside">
                                                <li><strong>Context API:</strong> Share data without passing props</li>
                                                <li><strong>State Management:</strong> Redux, Zustand, Recoil</li>
                                                <li><strong>Component Composition:</strong> Use children prop pattern</li>
                                                <li><strong>Custom Hooks:</strong> Extract logic into reusable hooks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🆚 Explain useState vs useReducer
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-3 rounded">
                                                <p className="text-blue-800 font-medium text-sm mb-2">useState - Simple State</p>
                                                <ul className="text-blue-700 text-xs space-y-1 list-disc list-inside">
                                                    <li>Single values or simple objects</li>
                                                    <li>Independent state updates</li>
                                                    <li>Easy to understand and use</li>
                                                    <li>Perfect for forms, toggles, counters</li>
                                                </ul>
                                                <pre className="text-blue-800 text-xs mt-2">
                                                    {`const [count, setCount] = useState(0);
setCount(count + 1);`}
                                                </pre>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded">
                                                <p className="text-green-800 font-medium text-sm mb-2">useReducer - Complex State</p>
                                                <ul className="text-green-700 text-xs space-y-1 list-disc list-inside">
                                                    <li>Complex state logic</li>
                                                    <li>Multiple related sub-values</li>
                                                    <li>Predictable state transitions</li>
                                                    <li>When next state depends on previous</li>
                                                </ul>
                                                <pre className="text-green-800 text-xs mt-2">
                                                    {`const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'INCREMENT' });`}
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </details>
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
                <h1 className="text-3xl font-bold text-gray-900">React.js</h1>
                <p className="mt-2 text-gray-600">A JavaScript library for building user interfaces</p>
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

            <TopicsNavigation />
        </div>
    );
};

export default ReactJS;

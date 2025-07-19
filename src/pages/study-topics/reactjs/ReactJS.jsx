const ReactJS = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">React.js</h1>
        <p className="mt-2 text-gray-600">A JavaScript library for building user interfaces</p>
      </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Components</h4>
              <p className="text-blue-700 text-sm">Functional and class components, JSX syntax, props</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">State Management</h4>
              <p className="text-green-700 text-sm">useState, useReducer, Context API, state lifting</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Hooks</h4>
              <p className="text-yellow-700 text-sm">useEffect, useContext, useMemo, useCallback, custom hooks</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Virtual DOM</h4>
              <p className="text-purple-700 text-sm">Reconciliation, diffing algorithm, performance optimization</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">React Hooks Deep Dive</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">useState</h4>
              <p className="text-gray-600 text-sm">Manage local component state in functional components</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">useEffect</h4>
              <p className="text-gray-600 text-sm">Handle side effects, lifecycle methods replacement</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">useContext</h4>
              <p className="text-gray-600 text-sm">Consume context values without prop drilling</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">useMemo & useCallback</h4>
              <p className="text-gray-600 text-sm">Performance optimization through memoization</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Code Examples</h3>
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

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interview Questions</h3>
          <div className="space-y-2">
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What is the Virtual DOM?</summary>
              <p className="mt-2 text-gray-600 text-sm">Virtual DOM is a JavaScript representation of the real DOM. React uses it to optimize updates by comparing (diffing) the virtual DOM tree and updating only changed elements.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">Explain the component lifecycle</summary>
              <p className="mt-2 text-gray-600 text-sm">Components go through mounting, updating, and unmounting phases. useEffect replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What are controlled vs uncontrolled components?</summary>
              <p className="mt-2 text-gray-600 text-sm">Controlled components have their value controlled by React state. Uncontrolled components store their own state internally and use refs for access.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">How does React handle events?</summary>
              <p className="mt-2 text-gray-600 text-sm">React uses SyntheticEvents, which wrap native events to provide consistent behavior across browsers. Events are handled through delegation at the root level.</p>
            </details>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">React Ecosystem</h3>
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
    </div>
  );
};

export default ReactJS;

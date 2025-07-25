// =============================================================================
// REACT PAGE CONSTANTS
// =============================================================================

export const REACT_TABS = [
    { id: 'basics', name: 'React Fundamentals', icon: '⚛️' },
    { id: 'hooks', name: 'React Hooks', icon: '🎣' },
    { id: 'components', name: 'Components', icon: '🧩' },
    { id: 'state', name: 'State Management', icon: '🔄' },
    { id: 'lifecycle', name: 'Lifecycle Methods', icon: '🔄' },
    { id: 'routing', name: 'React Router', icon: '🛣️' },
    { id: 'testing', name: 'Testing', icon: '🧪' },
    { id: 'performance', name: 'Performance', icon: '⚡' },
    { id: 'interview', name: 'Interview Q&A', icon: '❓' }
];

export const REACT_UI_TEXT = {
    title: "React Development Guide",
    description: "Master React fundamentals, hooks, state management, and modern best practices with comprehensive examples and explanations."
};

export const REACT_CONTENT = {
    basics: [
        {
            id: 1,
            title: "⚛️ What is React?",
            description: "React is a JavaScript library for building user interfaces, particularly single-page applications with reusable UI components.",
            color: "blue",
            code: `// React Component Example
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;`
        },
        {
            id: 2,
            title: "🧩 Components & JSX",
            description: "Components are the building blocks of React. JSX allows you to write HTML-like syntax in JavaScript.",
            color: "green",
            code: `// Functional Component with JSX
function UserCard({ name, email, age }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <button onClick={() => alert(\`Hello \${name}!\`)}>
        Greet User
      </button>
    </div>
  );
}

// Class Component (Legacy)
class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
      </div>
    );
  }
}

// JSX Rules
const element = (
  <div className="container">
    {/* Comments in JSX */}
    <h1>Title</h1>
    <p>Description with {dynamicValue}</p>
  </div>
);`
        },
        {
            id: 3,
            title: "⚡ Props & State",
            description: "Props are read-only data passed from parent to child. State is mutable data that belongs to a component.",
            color: "yellow",
            code: `// Props Example
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>\${product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
}

// State with useState Hook
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello');

  const increment = () => {
    setCount(count + 1);
    // Or using functional update
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setMessage('Updated!')}>
        Update Message
      </button>
    </div>
  );
}`
        },
        {
            id: 4,
            title: "🌐 Virtual DOM",
            description: "React uses Virtual DOM for efficient updates by comparing virtual representations and updating only what changed.",
            color: "purple",
            code: `// Virtual DOM Concept
// When state changes, React creates a new Virtual DOM tree
const virtualDOM = {
  type: 'div',
  props: {
    className: 'container',
    children: [
      {
        type: 'h1',
        props: { children: 'Hello World' }
      },
      {
        type: 'p',
        props: { children: \`Count: \${count}\` }
      }
    ]
  }
};

// React's Reconciliation Process:
// 1. Create new Virtual DOM tree
// 2. Compare (diff) with previous Virtual DOM
// 3. Calculate minimum changes needed
// 4. Update only changed elements in real DOM

// Example of efficient updates
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>My App</h1> {/* Never changes, won't re-render */}
      <p>Count: {count}</p> {/* Only this updates */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// React optimizes by only updating the text node
// inside the <p> tag, not the entire component`
        }
    ],
    hooks: [
        {
            id: 5,
            title: "🎯 useState Hook",
            description: "useState lets you add state to functional components. It returns current state and a setter function.",
            color: "blue",
            code: `import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { name, email });
      // Reset form
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}`
        },
        {
            id: 6,
            title: "⚡ useEffect Hook",
            description: "useEffect lets you perform side effects in function components. It combines componentDidMount, componentDidUpdate, and componentWillUnmount.",
            color: "green",
            code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect with dependency - runs when userId changes
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
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

    if (userId) {
      fetchUser();
    }
  }, [userId]); // Runs when userId changes

  // Effect with cleanup - subscription
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    // Cleanup function (componentWillUnmount equivalent)
    return () => {
      clearInterval(timer);
      console.log('Timer cleaned up');
    };
  }, []); // Empty dependency array = runs once on mount

  // Effect that runs on every render
  useEffect(() => {
    document.title = user ? \`Profile: \${user.name}\` : 'Loading...';
  }); // No dependency array

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`
        },
        {
            id: 7,
            title: "🌐 useContext Hook",
            description: "useContext lets you consume context values without wrapping components in Context.Consumer.",
            color: "yellow",
            code: `import { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Theme Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook for Theme
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Component using Context
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={theme}>
      <h1>Welcome!</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}

// App with Provider
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>Content here...</main>
      </div>
    </ThemeProvider>
  );
}`
        },
        {
            id: 8,
            title: "🚀 useMemo & useCallback",
            description: "useMemo memoizes expensive calculations, useCallback memoizes functions. Both optimize performance by preventing unnecessary re-computations.",
            color: "purple",
            code: `import { useState, useMemo, useCallback } from 'react';

function ExpensiveComponent({ items, onItemClick }) {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // useMemo - memoize expensive calculation
  const filteredAndSortedItems = useMemo(() => {
    console.log('Expensive calculation running...');
    
    let result = items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.price - b.price;
    });
    
    return result;
  }, [items, filter, sortBy]); // Only recalculate when these change

  // useCallback - memoize function
  const handleItemClick = useCallback((itemId) => {
    console.log('Item clicked:', itemId);
    onItemClick(itemId);
  }, [onItemClick]); // Only recreate when onItemClick changes

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      
      <select 
        value={sortBy} 
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>

      <div>
        {filteredAndSortedItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>\${item.price}</p>
            <button onClick={() => handleItemClick(item.id)}>
              View Details
            </button>
          </div>
        ))}
      </div>
      
      <p>Showing {filteredAndSortedItems.length} items</p>
    </div>
  );
}`
        }
    ],
    components: [
        {
            id: 9,
            title: "🧩 Component Composition",
            description: "Building complex UIs by composing smaller, reusable components together.",
            color: "blue",
            code: `// Higher-Order Component (HOC)
function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// Render Props Pattern
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading });
}

// Usage of Render Props
function App() {
  return (
    <DataFetcher 
      url="/api/users" 
      render={({ data, loading }) => (
        loading ? <div>Loading...</div> : <UserList users={data} />
      )}
    />
  );
}

// Component Composition with Children
function Card({ title, children, footer }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
}

// Usage
function ProfileCard() {
  return (
    <Card 
      title="User Profile"
      footer={<button>Edit Profile</button>}
    >
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
    </Card>
  );
}`
        },
        {
            id: 10,
            title: "🎛️ Controlled vs Uncontrolled Components",
            description: "Understanding the difference between controlled and uncontrolled form components in React.",
            color: "green",
            code: `import { useState, useRef } from 'react';

// Controlled Component
function ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Controlled form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Submit Controlled</button>
    </form>
  );
}

// Uncontrolled Component
function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };
    
    console.log('Uncontrolled form data:', formData);
    
    // Reset form
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={nameRef}
        defaultValue=""
        placeholder="Name"
      />
      <input
        type="email"
        ref={emailRef}
        defaultValue=""
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        defaultValue=""
        placeholder="Message"
      />
      <button type="submit">Submit Uncontrolled</button>
    </form>
  );
}`
        }
    ],
    state: [
        {
            id: 11,
            title: "🔄 useState Pattern",
            description: "Different patterns for managing state in React components.",
            color: "blue",
            code: `// Simple State
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prev => prev - 1)}>
        Decrement
      </button>
    </div>
  );
}

// Object State
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (field) => (e) => {
    setUser(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <form>
      <input
        value={user.name}
        onChange={handleChange('name')}
        placeholder="Name"
      />
      <input
        value={user.email}
        onChange={handleChange('email')}
        placeholder="Email"
      />
      <input
        value={user.age}
        onChange={handleChange('age')}
        placeholder="Age"
      />
    </form>
  );
}

// Array State
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`
        },
        {
            id: 12,
            title: "🎛️ useReducer for Complex State",
            description: "Using useReducer for managing complex state logic with actions and reducers.",
            color: "green",
            code: `// Todo App with useReducer
const initialState = {
  todos: [],
  filter: 'all'
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload.text,
          completed: false
        }]
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload.filter
      };

    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputText, setInputText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      dispatch({
        type: 'ADD_TODO',
        payload: { text: inputText.trim() }
      });
      setInputText('');
    }
  };

  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter(todo => !todo.completed);
      case 'completed':
        return state.todos.filter(todo => todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {['all', 'active', 'completed'].map(filter => (
          <button
            key={filter}
            onClick={() => dispatch({
              type: 'SET_FILTER',
              payload: { filter }
            })}
          >
            {filter}
          </button>
        ))}
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({
                type: 'TOGGLE_TODO',
                payload: { id: todo.id }
              })}
            />
            <span>{todo.text}</span>
            <button onClick={() => dispatch({
              type: 'DELETE_TODO',
              payload: { id: todo.id }
            })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`
        }
    ],
    lifecycle: [
        {
            id: 13,
            title: "🔄 Component Lifecycle with Hooks",
            description: "Understanding component lifecycle phases and how to handle them with useEffect in functional components.",
            color: "blue",
            code: `import { useState, useEffect, useRef } from 'react';

function LifecycleExample({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const mountedRef = useRef(true);

  // Component Mount - runs once when component is first rendered
  useEffect(() => {
    console.log('Component mounted!');
    
    // Setup operations
    document.title = 'User Profile';
    
    // Cleanup on unmount
    return () => {
      console.log('Component will unmount!');
      document.title = 'React App';
      mountedRef.current = false;
    };
  }, []); // Empty dependency array = mount/unmount only

  // Component Update - runs when userId changes
  useEffect(() => {
    if (!userId) return;
    
    console.log('userId changed, fetching new user data...');
    
    const fetchUser = async () => {
      setLoading(true);
      
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        
        // Only update state if component is still mounted
        if (mountedRef.current) {
          setUser(userData);
        }
      } catch (err) {
        console.error('Error fetching user:', err);
      } finally {
        if (mountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchUser();
  }, [userId]); // Runs when userId changes

  // Effect that runs on every render
  useEffect(() => {
    console.log('Component rendered with user:', user);
    
    if (user) {
      document.title = \`Profile: \${user.name}\`;
    }
  }); // No dependency array = runs on every render

  if (loading) return <div>Loading user...</div>;
  if (!user) return <div>No user selected</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}`
        }
    ],
    routing: [
        {
            id: 14,
            title: "🛣️ React Router Setup",
            description: "Setting up client-side routing in React applications using React Router.",
            color: "blue",
            code: `// npm install react-router-dom

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate
} from 'react-router-dom';

// Main App Component
function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </nav>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Component with URL Parameters
function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data based on ID
    fetchUser(id).then(setUser);
  }, [id]);

  const handleBack = () => {
    navigate(-1); // Go back in history
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleBack}>← Back</button>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Replace with real auth check
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}`
        }
    ],
    testing: [
        {
            id: 15,
            title: "🧪 Testing React Components",
            description: "Writing tests for React components using React Testing Library and Jest.",
            color: "green",
            code: `// npm install @testing-library/react @testing-library/jest-dom

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Counter from './Counter';

// Simple Component Test
describe('Counter Component', () => {
  test('renders initial count', () => {
    render(<Counter initialCount={0} />);
    
    const countElement = screen.getByText(/count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test('increments count when button clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={0} />);
    
    const button = screen.getByRole('button', { name: /increment/i });
    
    await user.click(button);
    
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test('calls onCountChange when count changes', async () => {
    const mockOnCountChange = jest.fn();
    const user = userEvent.setup();
    
    render(<Counter initialCount={0} onCountChange={mockOnCountChange} />);
    
    const button = screen.getByRole('button', { name: /increment/i });
    await user.click(button);
    
    expect(mockOnCountChange).toHaveBeenCalledWith(1);
  });
});

// Testing with Async Operations
describe('UserProfile Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('displays user data after successful fetch', async () => {
    const mockUser = {
      id: '123',
      name: 'John Doe',
      email: 'john@example.com'
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser
    });

    render(<UserProfile userId="123" />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('displays error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('User not found'));

    render(<UserProfile userId="123" />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});

// Testing Forms
describe('ContactForm Component', () => {
  test('submits form with correct data', async () => {
    const mockOnSubmit = jest.fn();
    const user = userEvent.setup();

    render(<ContactForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');  
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com'
    });
  });
});`
        }
    ],
    performance: [
        {
            id: 16,
            title: "⚡ Performance Optimization",
            description: "Techniques and patterns for optimizing React application performance.",
            color: "yellow",
            code: `import { 
  memo, 
  useMemo, 
  useCallback, 
  lazy, 
  Suspense
} from 'react';

// React.memo - Prevent unnecessary re-renders
const ExpensiveChild = memo(function ExpensiveChild({ data, onAction }) {
  console.log('ExpensiveChild rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => onAction(item.id)}>Action</button>
        </div>
      ))}
    </div>
  );
});

// Parent component with optimization
function ParentComponent() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [otherState, setOtherState] = useState(0);

  // Memoized filtered data
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Memoized callback to prevent child re-renders
  const handleAction = useCallback((itemId) => {
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, actioned: true }
        : item
    ));
  }, []);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items..."
      />
      
      <button onClick={() => setOtherState(prev => prev + 1)}>
        Other State: {otherState}
      </button>

      <ExpensiveChild 
        data={filteredItems} 
        onAction={handleAction} 
      />
    </div>
  );
}

// Code Splitting with lazy loading
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  const [showHeavy, setShowHeavy] = useState(false);
  
  return (
    <div>
      <h1>My App</h1>
      
      <button onClick={() => setShowHeavy(!showHeavy)}>
        Toggle Heavy Component
      </button>

      {showHeavy && (
        <Suspense fallback={<div>Loading heavy component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

// Virtual Scrolling for Large Lists
function VirtualList({ items, itemHeight = 50 }) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerHeight = 400;
  
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );

  const visibleItems = items.slice(visibleStart, visibleEnd);
  const totalHeight = items.length * itemHeight;
  const offsetY = visibleStart * itemHeight;

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
          {visibleItems.map((item, index) => (
            <div
              key={visibleStart + index}
              style={{ height: itemHeight }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
        }
    ],
    interview: [
        {
            id: 17,
            title: "❓ React Interview Questions",
            description: "Common React interview questions with detailed explanations and code examples.",
            color: "red",
            code: `// Q1: What is the Virtual DOM and how does it work?
/*
Answer: The Virtual DOM is a programming concept where a virtual 
representation of the UI is kept in memory and synced with the 
real DOM. React uses it for:

1. Performance optimization
2. Predictable updates  
3. Cross-browser compatibility
4. Batching updates

Process:
1. State changes create new Virtual DOM tree
2. React compares (diffs) with previous Virtual DOM
3. Calculates minimum changes needed
4. Updates only changed elements in real DOM
*/

// Q2: Explain useState and its rules
function UseStateExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: '', email: '' });

  // Rule 1: Always call hooks at the top level
  // ❌ Don't do this in conditions or loops

  // Rule 2: State updates are asynchronous
  const handleIncrement = () => {
    setCount(count + 1); // This might not work as expected
    setCount(count + 1); // Both will use same current count
    
    // ✅ Use functional update instead
    setCount(prev => prev + 1);
    setCount(prev => prev + 1); // This will work correctly
  };

  // Rule 3: Don't mutate state directly
  const updateUser = () => {
    // ❌ Don't do this
    user.name = 'John';
    setUser(user);
    
    // ✅ Create new object
    setUser(prev => ({ ...prev, name: 'John' }));
  };

  return <div>Count: {count}</div>;
}

// Q3: What's the difference between useEffect dependencies?
function EffectDependencies({ userId }) {
  const [user, setUser] = useState(null);

  // No dependency array - runs after every render
  useEffect(() => {
    console.log('Runs after every render');
  });

  // Empty dependency array - runs once on mount
  useEffect(() => {
    console.log('Runs once on mount');
    return () => console.log('Cleanup on unmount');
  }, []);

  // With dependencies - runs when dependencies change
  useEffect(() => {
    if (userId) {
      fetch(\`/api/users/\${userId}\`)
        .then(res => res.json())
        .then(setUser);
    }
  }, [userId]); // Runs when userId changes

  return <div>{user?.name}</div>;
}

// Q4: Controlled vs Uncontrolled Components
function ControlledVsUncontrolled() {
  // Controlled - React controls the input value
  const [controlled, setControlled] = useState('');
  
  // Uncontrolled - DOM controls the input value
  const uncontrolledRef = useRef();

  return (
    <div>
      {/* Controlled */}
      <input
        value={controlled}
        onChange={(e) => setControlled(e.target.value)}
      />
      
      {/* Uncontrolled */}
      <input
        ref={uncontrolledRef}
        defaultValue="initial"
      />
    </div>
  );
}

// Q5: How do you optimize React performance?
/*
Techniques:
1. React.memo - Prevent re-renders of unchanged components
2. useMemo - Memoize expensive calculations  
3. useCallback - Memoize functions
4. Code splitting with lazy()
5. Virtual scrolling for large lists
6. Avoid inline objects/functions in JSX
7. Use keys properly in lists
*/

const OptimizedChild = memo(({ data, onClick }) => {
  return <div onClick={onClick}>{data.name}</div>;
});

function OptimizedParent() {
  const [items, setItems] = useState([]);

  // ✅ Memoized callback
  const handleClick = useCallback((item) => {
    console.log('Clicked:', item);
  }, []);

  // ✅ Memoized expensive calculation
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return (
    <div>
      <p>Total: {expensiveValue}</p>
      {items.map(item => (
        <OptimizedChild 
          key={item.id}
          data={item}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}`
        }
    ],
    default: [
        {
            id: 1,
            title: "🚀 Welcome to React Mastery",
            description: "React is a powerful JavaScript library for building user interfaces. Master its concepts and build amazing applications.",
            color: "blue",
            code: `// Welcome to React!
import React from 'react';

function Welcome() {
  return (
    <div>
      <h1>Hello, React World! ⚛️</h1>
      <p>Start building amazing user interfaces!</p>
    </div>
  );
}

export default Welcome;

// React is used for:
// - Web Applications (React DOM)
// - Mobile Apps (React Native)  
// - Desktop Apps (Electron + React)
// - Server-side Rendering (Next.js)
// - Static Sites (Gatsby)`
        }
    ]
};
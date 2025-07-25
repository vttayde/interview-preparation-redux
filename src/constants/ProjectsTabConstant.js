// =============================================================================
// PROJECTS PAGE CONSTANTS
// =============================================================================

export const PROJECTS_TABS = [
    { id: 'basics', name: 'Project Fundamentals', icon: '🚀' },
    { id: 'frontend', name: 'Frontend Projects', icon: '💻' },
    { id: 'backend', name: 'Backend Projects', icon: '⚙️' },
    { id: 'fullstack', name: 'Full-Stack Projects', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Projects', icon: '📱' },
    { id: 'devops', name: 'DevOps & Deployment', icon: '☁️' },
    { id: 'testing', name: 'Testing & Quality', icon: '🧪' },
    { id: 'portfolio', name: 'Portfolio Building', icon: '📋' },
    { id: 'bestpractices', name: 'Best Practices', icon: '✨' },
    { id: 'interview', name: 'Interview Q&A', icon: '❓' }
];

export const PROJECTS_UI_TEXT = {
    title: "Projects Development Guide",
    description: "Build impressive projects from frontend to full-stack applications. Learn development best practices, deployment strategies, and showcase your work effectively."
};

export const PROJECTS_CONTENT = {
    basics: [
        {
            id: 1,
            title: "🚀 Project Planning & Setup",
            description: "Learn how to plan, structure, and set up development projects from scratch with proper architecture and organization.",
            color: "blue",
            code: `// Project Structure Setup
mkdir my-awesome-project
cd my-awesome-project

// Initialize Git repository
git init
git remote add origin https://github.com/username/my-awesome-project.git

// Create basic project structure
mkdir src public assets docs tests
touch README.md .gitignore package.json

// Basic package.json setup
{
  "name": "my-awesome-project",
  "version": "1.0.0",
  "description": "Description of your project",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest",
    "build": "webpack --mode production"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/username/my-awesome-project.git"
  },
  "keywords": ["javascript", "project"],
  "author": "Your Name",
  "license": "MIT"
}`
        },
        {
            id: 2,
            title: "📋 Requirements Analysis",
            description: "Break down project requirements into manageable tasks and create a clear development roadmap.",
            color: "green",
            code: `// Requirements Document Template
const projectRequirements = {
  // Functional Requirements
  functional: [
    "User authentication (register, login, logout)",
    "CRUD operations for main entities",
    "Search and filtering functionality",
    "Data validation and error handling",
    "Responsive design for mobile devices"
  ],
  
  // Non-Functional Requirements
  nonFunctional: [
    "Page load time < 3 seconds",
    "Support 1000+ concurrent users",
    "99.9% uptime availability",
    "GDPR compliance for data privacy",
    "Cross-browser compatibility"
  ],
  
  // Technical Requirements
  technical: [
    "Frontend: React.js with TypeScript",
    "Backend: Node.js with Express",
    "Database: PostgreSQL",
    "Authentication: JWT tokens",
    "Deployment: AWS or Vercel"
  ],
  
  // User Stories
  userStories: [
    "As a user, I want to create an account so I can save my preferences",
    "As a user, I want to search products so I can find what I need",
    "As an admin, I want to manage users so I can maintain the system"
  ]
};

console.log("Project Requirements:", projectRequirements);`
        },
        {
            id: 3,
            title: "🎯 MVP vs Full Features",
            description: "Learn to identify core features for Minimum Viable Product (MVP) and plan feature iterations.",
            color: "yellow",
            code: `// MVP Planning Strategy
const projectPhases = {
  // Phase 1: MVP (Minimum Viable Product)
  mvp: {
    timeframe: "2-4 weeks",
    features: [
      "Basic user registration/login",
      "Core functionality (main feature)",
      "Simple UI with basic styling",
      "Basic data persistence",
      "Essential error handling"
    ],
    goals: ["Validate concept", "Get user feedback", "Deploy working version"]
  },
  
  // Phase 2: Enhanced Features
  phase2: {
    timeframe: "4-6 weeks",
    features: [
      "Advanced user profiles",
      "Search and filtering",
      "Improved UI/UX design",
      "Performance optimizations",
      "Email notifications"
    ],
    goals: ["Improve user experience", "Add value-added features"]
  },
  
  // Phase 3: Advanced Features
  phase3: {
    timeframe: "6-8 weeks",
    features: [
      "Real-time features (chat, notifications)",
      "Advanced analytics",
      "Third-party integrations",
      "Mobile app or PWA",
      "Admin dashboard"
    ],
    goals: ["Scale the application", "Add enterprise features"]
  }
};

// Feature Prioritization Matrix
const prioritizeFeatures = (features) => {
  return features.map(feature => ({
    name: feature,
    impact: Math.floor(Math.random() * 10) + 1, // 1-10
    effort: Math.floor(Math.random() * 10) + 1, // 1-10
    priority: function() {
      return this.impact / this.effort; // Higher is better
    }
  })).sort((a, b) => b.priority() - a.priority());
};

console.log("Project Phases:", projectPhases);`
        }
    ],
    
    frontend: [
        {
            id: 1,
            title: "💻 Todo List Application",
            description: "Build a feature-rich task management application with React, showcasing CRUD operations, state management, and local storage.",
            color: "blue",
            code: `// React Todo List Component
import React, { useState, useEffect } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <div className="filter-section">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All ({todos.length})
        </button>
        <button 
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Active ({todos.filter(t => !t.completed).length})
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed ({todos.filter(t => t.completed).length})
        </button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;`
        },
        {
            id: 2,
            title: "🌤️ Weather Dashboard",
            description: "Create a responsive weather application using external APIs, geolocation, and modern React hooks.",
            color: "green",
            code: `// Weather Dashboard Component
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  // Get user's current location
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation is not supported'));
      }
    });
  };

  // Fetch weather data by coordinates
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        axios.get(\`\${BASE_URL}/weather?lat=\${lat}&lon=\${lon}&appid=\${API_KEY}&units=metric\`),
        axios.get(\`\${BASE_URL}/forecast?lat=\${lat}&lon=\${lon}&appid=\${API_KEY}&units=metric\`)
      ]);

      setWeather(currentResponse.data);
      setForecast(forecastResponse.data.list.slice(0, 5));
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch weather data');
      setLoading(false);
    }
  };

  // Fetch weather data by city name
  const fetchWeatherByCity = async (cityName) => {
    try {
      setLoading(true);
      const [currentResponse, forecastResponse] = await Promise.all([
        axios.get(\`\${BASE_URL}/weather?q=\${cityName}&appid=\${API_KEY}&units=metric\`),
        axios.get(\`\${BASE_URL}/forecast?q=\${cityName}&appid=\${API_KEY}&units=metric\`)
      ]);

      setWeather(currentResponse.data);
      setForecast(forecastResponse.data.list.slice(0, 5));
      setError(null);
      setLoading(false);
    } catch (err) {
      setError('City not found');
      setLoading(false);
    }
  };

  // Initialize weather data on component mount
  useEffect(() => {
    const initializeWeather = async () => {
      try {
        const position = await getCurrentLocation();
        await fetchWeatherByCoords(
          position.coords.latitude,
          position.coords.longitude
        );
      } catch (err) {
        // Fallback to default city if geolocation fails
        await fetchWeatherByCity('New York');
      }
    };

    initializeWeather();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeatherByCity(city.trim());
      setCity('');
    }
  };

  if (loading) return <div className="loading">Loading weather data...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="weather-dashboard">
      <header>
        <h1>Weather Dashboard</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {weather && (
        <div className="current-weather">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <div className="weather-main">
            <img
              src={\`https://openweathermap.org/img/wn/\${weather.weather[0].icon}@2x.png\`}
              alt={weather.weather[0].description}
            />
            <div>
              <span className="temperature">{Math.round(weather.main.temp)}°C</span>
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
          
          <div className="weather-details">
            <div>Feels like: {Math.round(weather.main.feels_like)}°C</div>
            <div>Humidity: {weather.main.humidity}%</div>
            <div>Wind: {weather.wind.speed} m/s</div>
            <div>Pressure: {weather.main.pressure} hPa</div>
          </div>
        </div>
      )}

      <div className="forecast">
        <h3>5-Day Forecast</h3>
        <div className="forecast-list">
          {forecast.map((item, index) => (
            <div key={index} className="forecast-item">
              <div>{new Date(item.dt * 1000).toLocaleDateString()}</div>
              <img
                src={\`https://openweathermap.org/img/wn/\${item.weather[0].icon}.png\`}
                alt={item.weather[0].description}
              />
              <div>{Math.round(item.main.temp)}°C</div>
              <div>{item.weather[0].description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;`
        }
    ],
    
    backend: [
        {
            id: 1,
            title: "⚙️ REST API with Express.js",
            description: "Build a complete RESTful API with Express.js, featuring authentication, CRUD operations, validation, and error handling.",
            color: "purple",
            code: `// Express.js REST API Server
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// In-memory database (use real database in production)
let users = [];
let posts = [];
let nextUserId = 1;
let nextPostId = 1;

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Validation middleware
const validateUser = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters')
];

const validatePost = [
  body('title').trim().isLength({ min: 1 }).withMessage('Title is required'),
  body('content').trim().isLength({ min: 1 }).withMessage('Content is required')
];

// Error handling middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// User Registration
app.post('/api/auth/register', validateUser, handleValidationErrors, async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: nextUserId++,
      email,
      password: hashedPassword,
      name,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User Login
app.post('/api/auth/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').exists()
], handleValidationErrors, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all posts
app.get('/api/posts', (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;
  
  let filteredPosts = posts;
  
  // Search functionality
  if (search) {
    filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  res.json({
    posts: paginatedPosts,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(filteredPosts.length / limit),
      totalPosts: filteredPosts.length,
      hasNext: endIndex < filteredPosts.length,
      hasPrev: startIndex > 0
    }
  });
});

// Create new post
app.post('/api/posts', authenticateToken, validatePost, handleValidationErrors, (req, res) => {
  const { title, content } = req.body;
  
  const newPost = {
    id: nextPostId++,
    title,
    content,
    authorId: req.user.userId,
    author: users.find(u => u.id === req.user.userId)?.name || 'Unknown',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  posts.push(newPost);
  
  res.status(201).json({
    message: 'Post created successfully',
    post: newPost
  });
});

// Get single post
app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  res.json({ post });
});

// Update post
app.put('/api/posts/:id', authenticateToken, validatePost, handleValidationErrors, (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  const post = posts[postIndex];
  
  // Check if user owns the post
  if (post.authorId !== req.user.userId) {
    return res.status(403).json({ error: 'Not authorized to update this post' });
  }
  
  // Update post
  posts[postIndex] = {
    ...post,
    title: req.body.title,
    content: req.body.content,
    updatedAt: new Date().toISOString()
  };
  
  res.json({
    message: 'Post updated successfully',
    post: posts[postIndex]
  });
});

// Delete post
app.delete('/api/posts/:id', authenticateToken, (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  const post = posts[postIndex];
  
  // Check if user owns the post
  if (post.authorId !== req.user.userId) {
    return res.status(403).json({ error: 'Not authorized to delete this post' });
  }
  
  posts.splice(postIndex, 1);
  
  res.json({ message: 'Post deleted successfully' });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
  console.log(\`Health check: http://localhost:\${PORT}/health\`);
});

module.exports = app;`
        }
    ],
    
    fullstack: [
        {
            id: 1,
            title: "🌐 E-Commerce Platform",
            description: "Build a complete e-commerce platform with React frontend, Node.js backend, payment integration, and admin dashboard.",
            color: "indigo",
            code: `// E-Commerce Frontend - Product Listing Component
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import api from '../services/api';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: { min: 0, max: 1000 },
    sortBy: 'name'
  });
  const [searchTerm, setSearchTerm] = useState('');
  
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { items: cartItems } = useSelector(state => state.cart);

  useEffect(() => {
    fetchProducts();
  }, [filters, searchTerm]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/products', {
        params: {
          category: filters.category,
          minPrice: filters.priceRange.min,
          maxPrice: filters.priceRange.max,
          sortBy: filters.sortBy,
          search: searchTerm
        }
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="product-listing">
      {/* Search and Filters */}
      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filters">
          <select
            value={filters.category}
            onChange={(e) => setFilters({...filters, category: e.target.value})}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="home">Home & Garden</option>
          </select>
          
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
          >
            <option value="name">Sort by Name</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest First</option>
          </select>
          
          <div className="price-range">
            <label>Price Range: \${filters.priceRange.min} - \${filters.priceRange.max}</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange.max}
              onChange={(e) => setFilters({
                ...filters,
                priceRange: { ...filters.priceRange, max: parseInt(e.target.value) }
              })}
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.length === 0 ? (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        ) : (
          products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount > 0 && (
                  <span className="discount-badge">-{product.discount}%</span>
                )}
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < product.rating ? 'star filled' : 'star'}
                    >
                      ★
                    </span>
                  ))}
                  <span className="rating-count">({product.reviewCount})</span>
                </div>
                
                <div className="price-section">
                  {product.originalPrice > product.price && (
                    <span className="original-price">\${product.originalPrice}</span>
                  )}
                  <span className="current-price">\${product.price}</span>
                </div>
                
                <div className="product-actions">
                  <button
                    className={\`add-to-cart-btn \${isInCart(product.id) ? 'in-cart' : ''}\`}
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                  >
                    {product.stock === 0 ? 'Out of Stock' : 
                     isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                  </button>
                  
                  <button className="wishlist-btn">
                    ♡
                  </button>
                  
                  <button className="quick-view-btn">
                    Quick View
                  </button>
                </div>
                
                <div className="stock-info">
                  {product.stock < 10 && product.stock > 0 && (
                    <span className="low-stock">Only {product.stock} left!</span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Pagination */}
      <div className="pagination">
        <button disabled>Previous</button>
        <span>Page 1 of 5</span>
        <button>Next</button>
      </div>
    </div>
  );
};

// E-Commerce Backend - Product Routes
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Get all products with filtering and pagination
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      category,
      minPrice,
      maxPrice,
      sortBy = 'name',
      search
    } = req.query;

    let query = {};
    
    // Category filter
    if (category) {
      query.category = category;
    }
    
    // Price range filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }
    
    // Search filter
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Sorting options
    let sortOptions = {};
    switch (sortBy) {
      case 'price_asc':
        sortOptions.price = 1;
        break;
      case 'price_desc':
        sortOptions.price = -1;
        break;
      case 'rating':
        sortOptions.rating = -1;
        break;
      case 'newest':
        sortOptions.createdAt = -1;
        break;
      default:
        sortOptions.name = 1;
    }

    const skip = (page - 1) * limit;
    
    const [products, totalProducts] = await Promise.all([
      Product.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(parseInt(limit))
        .populate('reviews', 'rating comment user createdAt'),
      Product.countDocuments(query)
    ]);

    res.json({
      products,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalProducts / limit),
        totalProducts,
        hasNext: skip + products.length < totalProducts,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new product (Admin only)
router.post('/', [auth, admin], async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      createdBy: req.user.id
    });
    
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

export default ProductListing;`
        }
    ],
    
    mobile: [
        {
            id: 1,
            title: "📱 React Native Mobile App",
            description: "Build a cross-platform mobile application with React Native, featuring navigation, state management, and native device features.",
            color: "pink",
            code: `// React Native Mobile App - Main App Component
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoginScreen from './src/screens/LoginScreen';

// Store
import store from './src/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const App = () => {
  useEffect(() => {
    // Set status bar style
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('dark-content', true);
    }
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"
          translucent={false}
        />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Main" 
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;`
        }
    ],
    
    devops: [
        {
            id: 1,
            title: "☁️ CI/CD Pipeline Setup",
            description: "Set up continuous integration and deployment pipeline using GitHub Actions, Docker, and cloud services.",
            color: "blue",
            code: `# GitHub Actions CI/CD Pipeline
# .github/workflows/deploy.yml

name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '18'
  DOCKER_IMAGE: 'myapp'
  
jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: \${{ env.NODE_VERSION }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run tests
      run: npm run test:coverage
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
        flags: unittests
        name: codecov-umbrella

  build:
    needs: test
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: \${{ env.NODE_VERSION }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Build Docker image
      run: |
        docker build -t \${{ env.DOCKER_IMAGE }}:latest .
        docker tag \${{ env.DOCKER_IMAGE }}:latest \${{ env.DOCKER_IMAGE }}:\${{ github.sha }}
    
    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}
    
    - name: Push Docker image
      run: |
        docker push \${{ env.DOCKER_IMAGE }}:latest
        docker push \${{ env.DOCKER_IMAGE }}:\${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - name: Deploy to production
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: \${{ secrets.HOST }}
        username: \${{ secrets.USERNAME }}
        key: \${{ secrets.SSH_KEY }}
        script: |
          docker pull \${{ env.DOCKER_IMAGE }}:latest
          docker stop myapp-container || true
          docker rm myapp-container || true
          docker run -d --name myapp-container -p 80:3000 \${{ env.DOCKER_IMAGE }}:latest

# Docker Configuration
# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:18-alpine AS runtime
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

USER nextjs

EXPOSE 3000
CMD ["npm", "start"]`
        }
    ],
    
    interview: [
        {
            id: 1,
            title: "❓ Common Project Interview Questions",
            description: "Prepare for project-related interview questions with detailed answers and examples from your portfolio.",
            color: "red",
            code: `// Interview Questions and Sample Answers

const projectInterviewQuestions = {
  // Question 1: Project Overview
  question1: {
    q: "Tell me about a challenging project you worked on recently.",
    answer: \`
    I recently built a full-stack e-commerce platform that presented several technical challenges:

    **Project Overview:**
    - React frontend with TypeScript for type safety
    - Node.js/Express backend with MongoDB
    - Stripe payment integration
    - Real-time inventory management
    - Admin dashboard for order management

    **Main Challenges:**
    1. **Performance Optimization:** With 10,000+ products, initial load was slow
       - Solution: Implemented virtual scrolling and pagination
       - Added Redis caching for frequently accessed data
       - Result: Reduced load time from 8s to 2s

    2. **Real-time Inventory:** Multiple users buying same product simultaneously
       - Solution: Implemented optimistic locking with MongoDB
       - Added WebSocket notifications for stock updates
       - Result: Eliminated overselling issues

    3. **Payment Security:** Handling sensitive payment data
       - Solution: Used Stripe's tokenization system
       - Implemented proper error handling and validation
       - Added comprehensive logging for audit trails

    **Impact:** The platform now handles 500+ concurrent users with 99.9% uptime
    \`,
    followUp: "What specific technologies did you use and why?"
  },

  // Question 2: Technical Decisions
  question2: {
    q: "How do you make technical decisions in your projects?",
    answer: \`
    I follow a structured approach for technical decisions:

    **1. Requirements Analysis:**
    - Define functional and non-functional requirements
    - Identify constraints (time, budget, scalability needs)
    - Consider team expertise and learning curve

    **2. Research & Evaluation:**
    const evaluationCriteria = {
      performance: "Response time, throughput, memory usage",
      scalability: "Horizontal/vertical scaling capabilities",
      maintainability: "Code complexity, documentation, community support",
      security: "Known vulnerabilities, security features",
      cost: "Development time, infrastructure costs, licensing"
    };

    **3. Proof of Concept:**
    - Build small prototypes to validate assumptions
    - Measure performance under realistic conditions
    - Get team feedback on developer experience

    **Example Decision - State Management:**
    For a large React app, I evaluated:
    - Context API: Simple but causes unnecessary re-renders
    - Redux: Powerful but adds boilerplate
    - Zustand: Lightweight with good TypeScript support

    Choice: Zustand for main state, Context for theme/auth
    Reason: Best balance of simplicity and power for our use case
    \`,
    followUp: "Can you give an example where you changed your technical decision?"
  },

  // Question 3: Problem Solving
  question3: {
    q: "Describe a time when you had to debug a difficult production issue.",
    answer: \`
    **Situation:** Users reported intermittent 500 errors in our API, but only during peak hours (2-4 PM).

    **Investigation Process:**
    1. **Gathered Data:**
       - Checked error logs: Generic "Internal Server Error"
       - Monitored CPU/Memory: Normal levels
       - Database performance: Query times normal

    2. **Hypothesis Formation:**
       - Time-based pattern suggested load-related issue
       - Generic errors pointed to unhandled exceptions

    3. **Deep Dive:**
       \`\`\`javascript
       // Added comprehensive logging
       app.use((req, res, next) => {
         const startTime = Date.now();
         
         res.on('finish', () => {
           const duration = Date.now() - startTime;
           console.log(\`\${req.method} \${req.path} - \${res.statusCode} - \${duration}ms\`);
         });
         
         next();
       });

       // Added global error handler
       app.use((error, req, res, next) => {
         console.error('Unhandled error:', {
           error: error.message,
           stack: error.stack,
           url: req.url,
           method: req.method,
           timestamp: new Date().toISOString()
         });
         
         res.status(500).json({ error: 'Internal server error' });
       });
       \`\`\`

    **Root Cause:** Connection pool exhaustion
    - Third-party API calls weren't properly closing connections
    - Under load, connection pool got depleted

    **Solution:**
    \`\`\`javascript
    // Added proper connection management
    const axios = require('axios');
    const agent = new https.Agent({ keepAlive: true, maxSockets: 50 });

    const apiClient = axios.create({
      timeout: 5000,
      httpAgent: agent,
      httpsAgent: agent
    });

    // Added circuit breaker pattern
    class CircuitBreaker {
      constructor(threshold = 5, timeout = 60000) {
        this.threshold = threshold;
        this.timeout = timeout;
        this.failureCount = 0;
        this.state = 'CLOSED';
        this.nextAttempt = Date.now();
      }

      async call(fn) {
        if (this.state === 'OPEN') {
          if (Date.now() < this.nextAttempt) {
            throw new Error('Circuit breaker is OPEN');
          }
          this.state = 'HALF_OPEN';
        }

        try {
          const result = await fn();
          this.onSuccess();
          return result;
        } catch (error) {
          this.onFailure();
          throw error;
        }
      }
    }
    \`\`\`

    **Result:** Eliminated 500 errors and improved API reliability to 99.99%
    \`,
    followUp: "How do you prevent similar issues in the future?"
  }
};

// Export for use in interview preparation
module.exports = projectInterviewQuestions;`
        }
    ]
};
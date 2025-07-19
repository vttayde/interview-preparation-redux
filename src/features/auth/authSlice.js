/**
 * Auth Slice
 * 
 * This Redux slice handles authentication state management including:
 * - User login/logout
 * - User registration
 * - Authentication status tracking
 * - Error handling for auth operations
 * 
 * Part of the feature-based architecture recommended by Redux Toolkit.
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Storage keys
const USER_STORAGE_KEY = 'currentUser';

// Mock users for demo - in a real app, this would be handled by an API
const MOCK_USERS = [
  { id: 1, email: 'admin@test.com', password: '123456', name: 'Admin User' },
  { id: 2, email: 'user@test.com', password: 'password', name: 'Regular User' }
];

/**
 * Creates a safe user object without sensitive data
 * @param {Object} user - User object with potentially sensitive data
 * @returns {Object} User object safe for storing/returning
 */
const createSafeUser = (user) => ({
  id: user.id,
  email: user.email,
  name: user.name
});

/**
 * Saves user to localStorage
 * @param {Object} user - User object to save
 */
const saveUserToStorage = (user) => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
};

/**
 * Async thunk for user login
 */
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Find user with matching credentials
      const foundUser = MOCK_USERS.find(
        user => user.email === email && user.password === password
      );

      if (foundUser) {
        // Create safe user object without password
        const safeUser = createSafeUser(foundUser);
        
        // Save to storage
        saveUserToStorage(safeUser);
        
        return safeUser;
      }
      
      return rejectWithValue('Invalid email or password');
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

/**
 * Async thunk for user signup
 */
export const signupUser = createAsyncThunk(
  'auth/signup',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Check if user already exists
      const existingUser = MOCK_USERS.find(user => user.email === email);
      if (existingUser) {
        return rejectWithValue('Email already registered');
      }

      // Create new user with unique ID
      const newUser = {
        id: Date.now(),
        email,
        name,
        password
      };

      // Add to mock users (in real app, this would be an API call)
      MOCK_USERS.push(newUser);
      
      // Create safe user object and save to storage
      const safeUser = createSafeUser(newUser);
      saveUserToStorage(safeUser);
      
      return safeUser;
    } catch (error) {
      return rejectWithValue(error.message || 'Signup failed');
    }
  }
);

/**
 * Helper function to get the saved user from localStorage
 * @returns {Object|null} User object or null if not found
 */
const getSavedUser = () => {
  try {
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  } catch (error) {
    console.error('Error retrieving user from storage:', error);
    return null;
  }
};

/**
 * Initial authentication state
 * Loads user from localStorage if available
 */
const initialState = {
  user: getSavedUser(),           // Current user information or null
  isLoading: false,               // Loading state for async actions
  error: null,                    // Error message if authentication fails
  isAuthenticated: !!getSavedUser() // Whether user is currently authenticated
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Logs out the current user
     * Clears user data from state and localStorage
     */
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem(USER_STORAGE_KEY);
    },
    
    /**
     * Clears any authentication errors
     * Used when transitioning between screens or retrying operations
     */
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // ---- Login Action Handlers ----
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      
      // ---- Signup Action Handlers ----
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  }
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;

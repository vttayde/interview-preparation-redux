import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signupUser } from '../../features/auth/authSlice';
import PropTypes from 'prop-types';

/**
 * Authentication form component for login and signup
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isSignUp - Whether the form is for signup (true) or login (false)
 * @returns {JSX.Element} Authentication form
 */
const AuthForm = ({ isSignUp = false }) => {
  // Default form state with empty fields
  const initialFormState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  const { isLoading: reduxLoading, error: reduxError } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';
  
  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    setFormData(initialFormState);
    setError('');
  };

  // Reset form errors and fields when switching between login/signup modes
  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignUp]);

  /**
   * Update form data state when input values change
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ 
      ...prevData, 
      [name]: value 
    }));
  };

  /**
   * Validate form input fields
   * @returns {string|null} Error message or null if valid
   */
  const validateForm = () => {
    // Basic validation for all forms
    if (!formData.email || !formData.email.includes('@')) {
      return 'Valid email is required';
    }
    
    if (!formData.password) {
      return 'Password is required';
    }
    
    // Additional validation for signup form
    if (isSignUp) {
      if (!formData.name?.trim()) {
        return 'Full name is required';
      }
      
      if (formData.password.length < 6) {
        return 'Password must be at least 6 characters';
      }
      
      if (formData.password !== formData.confirmPassword) {
        return 'Passwords do not match';
      }
    }
    
    return null;
  };

  /**
   * Handle form submission for login or signup
   * @param {React.FormEvent} e - Form submit event
   */
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    // Step 1: Validate form inputs
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    // Step 2: Set loading state to show feedback to user
    setLoading(true);
    
    try {
      // Step 3: Prepare auth data based on form type
      const authData = {
        email: formData.email,
        password: formData.password,
        ...(isSignUp && { name: formData.name })
      };
      
      // Step 4: Select and dispatch the appropriate Redux action
      const actionToDispatch = isSignUp ? signupUser : loginUser;
      const actionType = isSignUp ? 'signup' : 'login';
      console.log(`Attempting ${actionType} with email: ${formData.email}`);
      
      const resultAction = await dispatch(actionToDispatch(authData));
      
      // Step 5: Handle the authentication result
      if (resultAction.meta.requestStatus === 'fulfilled') {
        // Success: Navigate to the intended page or dashboard
        console.log(`${actionType} successful, redirecting to ${from}`);
        navigate(from, { replace: true });
      } else if (resultAction.payload) {
        // Error from the API response
        setError(resultAction.payload);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Authentication error:', error);
      setError('Authentication failed');
    } finally {
      // Always reset loading state
      setLoading(false);
    }
  };

  const inputClass =
    'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500';

  /**
   * Define form fields configuration based on form type (login/signup)
   */
  const fields = [
    // Name field - only for signup
    ...(isSignUp ? [{
      name: 'name',
      type: 'text',
      label: 'Full Name',
      placeholder: 'Enter your full name',
    }] : []),
    
    // Common fields for both login and signup
    {
      name: 'email',
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
    },
    
    // Confirm password field - only for signup
    ...(isSignUp ? [{
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      placeholder: 'Confirm your password',
    }] : []),
  ];

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4'>
      <div className='max-w-md w-full space-y-8'>
        {/* Header */}
        <div className='text-center'>
          <h2 id="auth-form-heading" className='text-3xl font-extrabold text-gray-900'>
            {isSignUp ? 'Create your account' : 'Sign in to your account'}
          </h2>
          {!isSignUp && (
            <p className='mt-2 text-sm text-gray-600'>
              Demo: admin@test.com / 123456 or user@test.com / password
            </p>
          )}
        </div>

        {/* Authentication Form */}
        <form 
          className='space-y-6' 
          onSubmit={handleSubmit}
          aria-labelledby="auth-form-heading"
          noValidate
        >
          {error && (
            <div className='bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-md text-sm'>
              {error}
            </div>
          )}

          {/* Form Fields Section */}
          <div className='space-y-4'>
            {fields.map(({ name, type, label, placeholder }) => (
              <div key={name} className="form-field">
                <label
                  htmlFor={name}
                  className='block text-sm font-medium text-gray-700'
                >
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  required
                  value={formData[name]}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={placeholder}
                  autoComplete={type === 'email' ? 'email' : type === 'password' ? 'current-password' : 'off'}
                  aria-label={label}
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={loading || reduxLoading}
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            aria-busy={loading || reduxLoading}
          >
            {/* Dynamic button text based on form state */}
            {loading || reduxLoading ? (
              <span aria-live="polite">
                {isSignUp ? 'Creating account...' : 'Signing in...'}
              </span>
            ) : (
              <span>
                {isSignUp ? 'Sign up' : 'Sign in'}
              </span>
            )}
          </button>

          {/* Redux Error Display - only show if different from local error */}
          {reduxError && !error && (
            <div className='mt-3 text-red-500 text-center'>{reduxError}</div>
          )}

          {/* Toggle Link */}
          <div className='text-center'>
            <span className='text-sm text-gray-600'>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <Link
                to={isSignUp ? '/login' : '/signup'}
                className='font-medium text-blue-600 hover:text-blue-500 transition-colors'
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

AuthForm.propTypes = {
  isSignUp: PropTypes.bool
};

AuthForm.defaultProps = {
  isSignUp: false
};

export default AuthForm;

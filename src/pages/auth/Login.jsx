import React, { useEffect } from 'react';
import AuthForm from '../../components/auth/AuthForm';

/**
 * Login page component
 * 
 * This component is part of the application's authentication flow.
 * It renders the AuthForm component in login mode and sets the page title.
 * 
 * @component
 * @example
 * return (
 *   <Route path="/login" element={<Login />} />
 * )
 * 
 * @returns {JSX.Element} Login page with authentication form
 */
const Login = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Login | My App';
  }, []);

  return (
    <div className="auth-page login-page">
      <AuthForm isSignUp={false} />
    </div>
  );
};

export default Login;

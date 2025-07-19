import React, { useEffect } from 'react';
import AuthForm from '../../components/auth/AuthForm';

/**
 * SignUp page component
 * 
 * This component is part of the application's authentication flow.
 * It renders the AuthForm component in signup mode and sets the page title.
 * 
 * @component
 * @example
 * return (
 *   <Route path="/signup" element={<SignUp />} />
 * )
 * 
 * @returns {JSX.Element} SignUp page with registration form
 */
const SignUp = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Create Account | My App';
  }, []);

  return (
    <div className="auth-page signup-page">
      <AuthForm isSignUp={true} />
    </div>
  );
};

export default SignUp;

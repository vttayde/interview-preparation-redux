import { useSelector } from 'react-redux';

/**
 * Custom hook for accessing authentication state
 * @returns {Object} Authentication state and methods
 */
export const useAuth = () => {
  const auth = useSelector(state => state.auth);
  return auth;
};

export default useAuth;

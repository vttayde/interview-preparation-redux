import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Protected route component that redirects to login if user is not authenticated
 */
const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useSelector(state => state.auth);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500'></div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login page with return url
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;

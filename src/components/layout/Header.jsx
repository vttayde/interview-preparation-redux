import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import SearchBox from '../SearchBox';

/**
 * Header component for navigation
 */
const Header = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const isStudyPage = location.pathname.startsWith('/study/');

  return (
    <header className='bg-white shadow-md border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <Link to='/' className='text-2xl font-bold text-blue-600'>
              Interview Prep
            </Link>
          </div>

          {/* Search Box - only for authenticated users */}
          {user && (
            <SearchBox className="flex-1 max-w-md mx-8" />
          )}

          <nav className='hidden md:flex space-x-8'>
            <Link
              to='/'
              className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
            >
              Home
            </Link>

            {user && (
              <>
                <Link
                  to='/dashboard'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Dashboard
                </Link>
                {isStudyPage && (
                  <Link
                    to='/dashboard'
                    className='text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium bg-blue-50 border border-blue-200'
                  >
                    ← Back to Topics
                  </Link>
                )}
                <Link
                  to='/profile'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Profile
                </Link>
                <Link
                  to='/favorites'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center'
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Favorites
                </Link>
              </>
            )}

            {!user && (
              <>
                <Link
                  to='/login'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>

          {user && (
            <div className='flex items-center space-x-4'>
              <span className='text-gray-700 text-sm'>
                Welcome, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200'
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

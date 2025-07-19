import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Home page component
 */
const Home = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <div className='text-center'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-900 mb-6'>
          Welcome to MyApp
        </h1>

        {user ? (
          <div>
            <p className='text-xl text-gray-600 mb-8'>
              Hello, {user.name || 'User'}! Ready to get started?
            </p>
            <Link
              to='/dashboard'
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-200'
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div>
            <p className='text-xl text-gray-600 mb-8'>
              A modern React application with authentication and routing
            </p>
            <div className='space-x-4'>
              <Link
                to='/signup'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-200'
              >
                Get Started
              </Link>
              <Link
                to='/login'
                className='bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-200'
              >
                Sign In
              </Link>
            </div>
          </div>
        )}

        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              🔐 Secure Authentication
            </h3>
            <p className='text-gray-600'>
              Built-in login and signup with protected routes
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              🎨 Modern Design
            </h3>
            <p className='text-gray-600'>
              Beautiful UI built with Tailwind CSS
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              ⚡ Fast & Responsive
            </h3>
            <p className='text-gray-600'>Powered by Vite and React Router</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

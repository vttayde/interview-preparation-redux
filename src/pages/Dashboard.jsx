import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className='bg-white shadow rounded-lg p-6'>
      <div className='border-b border-gray-200 pb-4 mb-6'>
        <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
        <p className='mt-2 text-gray-600'>Welcome back, {user?.name}!</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Stats Cards */}
        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm font-medium'>📊</span>
              </div>
            </div>
            <div className='ml-4'>
              <h3 className='text-lg font-medium text-gray-900'>Analytics</h3>
              <p className='text-gray-600'>View your statistics</p>
            </div>
          </div>
        </div>

        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm font-medium'>✅</span>
              </div>
            </div>
            <div className='ml-4'>
              <h3 className='text-lg font-medium text-gray-900'>Tasks</h3>
              <p className='text-gray-600'>Manage your tasks</p>
            </div>
          </div>
        </div>

        <div className='bg-purple-50 p-6 rounded-lg border border-purple-200'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm font-medium'>⚙️</span>
              </div>
            </div>
            <div className='ml-4'>
              <h3 className='text-lg font-medium text-gray-900'>Settings</h3>
              <p className='text-gray-600'>Configure your account</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className='mt-8'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>
          Recent Activity
        </h2>
        <div className='bg-gray-50 rounded-lg p-4'>
          <div className='space-y-3'>
            <div className='flex items-center text-sm text-gray-600'>
              <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
              You logged in successfully
            </div>
            <div className='flex items-center text-sm text-gray-600'>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
              Profile updated
            </div>
            <div className='flex items-center text-sm text-gray-600'>
              <span className='w-2 h-2 bg-purple-500 rounded-full mr-3'></span>
              Settings saved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would typically update the user profile via API
    console.log('Profile updated:', formData);
    setIsEditing(false);
  };

  return (
    <div className='bg-white shadow rounded-lg p-6'>
      <div className='border-b border-gray-200 pb-4 mb-6'>
        <h1 className='text-3xl font-bold text-gray-900'>Profile</h1>
        <p className='mt-2 text-gray-600'>Manage your account information</p>
      </div>

      <div className='max-w-md'>
        <form onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Full Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  !isEditing ? 'bg-gray-100 cursor-not-allowed' : ''
                }`}
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  !isEditing ? 'bg-gray-100 cursor-not-allowed' : ''
                }`}
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                User ID
              </label>
              <input
                type='text'
                value={user?.id || ''}
                disabled
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed'
              />
            </div>
          </div>

          <div className='mt-6 flex space-x-3'>
            {!isEditing ? (
              <button
                type='button'
                onClick={() => setIsEditing(true)}
                className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200'
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  type='submit'
                  className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200'
                >
                  Save Changes
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      name: user?.name || '',
                      email: user?.email || '',
                    });
                  }}
                  className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200'
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

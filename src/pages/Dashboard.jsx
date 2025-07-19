import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  const studyTopics = [
    {
      id: 1,
      title: 'Introduction',
      description: 'Start your interview preparation journey',
      icon: '📚',
      color: 'blue',
      route: '/study/introduction'
    },
    {
      id: 2,
      title: 'HTML',
      description: 'HyperText Markup Language basics',
      icon: '🌐',
      color: 'orange',
      route: '/study/html'
    },
    {
      id: 3,
      title: 'CSS',
      description: 'Styling and layout techniques',
      icon: '🎨',
      color: 'pink',
      route: '/study/css'
    },
    {
      id: 4,
      title: 'JavaScript',
      description: 'Programming language of the web',
      icon: '⚡',
      color: 'yellow',
      route: '/study/javascript'
    },
    {
      id: 5,
      title: 'React.js',
      description: 'JavaScript library for UIs',
      icon: '⚛️',
      color: 'cyan',
      route: '/study/reactjs'
    },
    {
      id: 6,
      title: 'TypeScript',
      description: 'JavaScript with static typing',
      icon: '📘',
      color: 'blue',
      route: '/study/typescript'
    },
    {
      id: 7,
      title: 'Node.js',
      description: 'Server-side JavaScript runtime',
      icon: '🟢',
      color: 'green',
      route: '/study/nodejs'
    },
    {
      id: 8,
      title: 'Database',
      description: 'Data storage and management',
      icon: '🗄️',
      color: 'purple',
      route: '/study/database'
    },
    {
      id: 9,
      title: 'Projects',
      description: 'Build real-world applications',
      icon: '🚀',
      color: 'red',
      route: '/study/projects'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      orange: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      pink: 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      yellow: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      cyan: 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      green: 'bg-green-50 border-green-200 hover:bg-green-100',
      purple: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      red: 'bg-red-50 border-red-200 hover:bg-red-100'
    };
    return colorMap[color] || 'bg-gray-50 border-gray-200 hover:bg-gray-100';
  };

  return (
    <div className='bg-white shadow rounded-lg p-4'>
      <div className='border-b border-gray-200 pb-3 mb-4'>
        <h1 className='text-2xl font-bold text-gray-900'>Interview Preparation Dashboard</h1>
        <p className='mt-1 text-gray-600 text-sm'>Welcome back, {user?.name}! Choose a topic to start studying.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {studyTopics.map((topic) => (
          <Link
            key={topic.id}
            to={topic.route}
            className={`p-4 rounded-lg border transition-colors duration-200 ${getColorClasses(topic.color)}`}
          >
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm'>
                  <span className='text-xl'>{topic.icon}</span>
                </div>
              </div>
              <div className='ml-3'>
                <h3 className='text-base font-medium text-gray-900'>{topic.title}</h3>
                <p className='text-gray-600 text-xs'>{topic.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

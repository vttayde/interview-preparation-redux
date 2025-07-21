import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  const studyTopics = [
    { id: 1, title: 'Introduction', icon: '📚', route: '/study/introduction' },
    { id: 2, title: 'HTML', icon: '🌐', route: '/study/html' },
    { id: 3, title: 'CSS', icon: '🎨', route: '/study/css' },
    { id: 4, title: 'JavaScript', icon: '⚡', route: '/study/javascript' },
    { id: 5, title: 'React.js', icon: '⚛️', route: '/study/reactjs' },
    { id: 6, title: 'TypeScript', icon: '📘', route: '/study/typescript' },
    { id: 7, title: 'Node.js', icon: '🟢', route: '/study/nodejs' },
    { id: 8, title: 'Database', icon: '🗄️', route: '/study/database' },
    { id: 9, title: 'Projects', icon: '🚀', route: '/study/projects' },
    { id: 10, title: 'Interview Questions', icon: '❓', route: '/study/interview-questions' }
  ];

  return (
    <div className='bg-white shadow rounded p-4'>
      <div className='border-b pb-3 mb-4'>
        <h1 className='text-xl font-bold'>Interview Preparation Dashboard</h1>
        <p className='text-gray-600 text-sm'>Welcome back, {user?.name}!</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {studyTopics.map((topic) => (
          <Link
            key={topic.id}
            to={topic.route}
            className='p-4 border rounded hover:bg-gray-50'
          >
            <div className='flex items-center'>
              <span className='text-xl mr-3'>{topic.icon}</span>
              <h3 className='font-medium'>{topic.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

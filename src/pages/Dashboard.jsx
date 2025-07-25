import { Link } from 'react-router-dom';
import { DASHBOARD_STUDY_TOPICS, DASHBOARD_UI_TEXT ,colorMap} from '../constants/dashboardConstants';

const Dashboard = () => {

  const getColorClasses = (color) => {

    return colorMap[color] || 'bg-gray-50 border-gray-200 hover:bg-gray-100';
  };

  return (
    <div className='bg-white shadow rounded-lg p-4'>
      <div className='border-b border-gray-200 pb-3 mb-4'>
        <h1 className='text-2xl font-bold text-gray-900'>{DASHBOARD_UI_TEXT.title}</h1>
        <p className='mt-1 text-gray-600 text-sm'>Welcome back, {DASHBOARD_UI_TEXT.description}</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {DASHBOARD_STUDY_TOPICS.map((topic) => (
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
                <p className='text-gray-600 text-xs'>{topic.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

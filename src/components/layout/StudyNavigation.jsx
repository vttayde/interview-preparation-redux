import { Link, useLocation } from 'react-router-dom';

const StudyNavigation = () => {
  const location = useLocation();

  const studyTopics = [
    { title: 'Introduction', route: '/study/introduction' },
    { title: 'HTML', route: '/study/html' },
    { title: 'CSS', route: '/study/css' },
    { title: 'JavaScript', route: '/study/javascript' },
    { title: 'React.js', route: '/study/reactjs' },
    { title: 'TypeScript', route: '/study/typescript' },
    { title: 'Node.js', route: '/study/nodejs' },
    { title: 'Database', route: '/study/database' },
    { title: 'Projects', route: '/study/projects' }
  ];

  const currentIndex = studyTopics.findIndex(topic => topic.route === location.pathname);
  const previousTopic = currentIndex > 0 ? studyTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < studyTopics.length - 1 ? studyTopics[currentIndex + 1] : null;

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          {previousTopic ? (
            <Link
              to={previousTopic.route}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              ← Previous: {previousTopic.title}
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              ← Back to Dashboard
            </Link>
          )}
        </div>
        
        <div>
          {nextTopic ? (
            <Link
              to={nextTopic.route}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Next: {nextTopic.title} →
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Complete! Go to Dashboard →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyNavigation;

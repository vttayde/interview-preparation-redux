import TopicsNavigation from '../../../components/layout/TopicsNavigation';

const Introduction = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Introduction</h1>
        <p className="mt-2 text-gray-600">Start your interview preparation journey</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Interview Preparation</h2>
          <p className="text-gray-600 mb-4">
            This comprehensive guide will help you prepare for technical interviews in web development.
            Whether you're a beginner or looking to refresh your knowledge, we've got you covered.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">What You'll Learn</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>HTML fundamentals and best practices</li>
            <li>CSS styling and responsive design</li>
            <li>JavaScript core concepts and ES6+ features</li>
            <li>React.js components and hooks</li>
            <li>TypeScript for type-safe development</li>
            <li>Node.js backend development</li>
            <li>Database design and querying</li>
            <li>Project-based learning</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Use This Guide</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700">
              Start with the basics and progressively move to advanced topics. 
              Each section contains theory, examples, and common interview questions.
              Practice regularly and build projects to reinforce your learning.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tips for Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Study Consistently</h4>
              <p className="text-green-700 text-sm">Dedicate time daily to review concepts and practice coding</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Build Projects</h4>
              <p className="text-yellow-700 text-sm">Apply your knowledge by creating real-world applications</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Mock Interviews</h4>
              <p className="text-purple-700 text-sm">Practice explaining your code and thought process</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Stay Updated</h4>
              <p className="text-red-700 text-sm">Keep learning new technologies and industry trends</p>
            </div>
          </div>
        </section>
      </div>
      
      <TopicsNavigation />
    </div>
  );
};

export default Introduction;

import StudyNavigation from '../../../components/layout/StudyNavigation';

const Projects = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="mt-2 text-gray-600">Build real-world applications to showcase your skills</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Build Projects?</h2>
          <p className="text-gray-600 mb-4">
            Projects demonstrate your ability to apply theoretical knowledge to solve real problems.
            They showcase your coding skills, problem-solving abilities, and understanding of software development practices.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Frontend Projects</h4>
              <p className="text-blue-700 text-sm">Focus on user interface and user experience</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Backend Projects</h4>
              <p className="text-green-700 text-sm">API development, database management, server logic</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Full-Stack Projects</h4>
              <p className="text-yellow-700 text-sm">Complete applications with frontend and backend</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Mobile Projects</h4>
              <p className="text-purple-700 text-sm">React Native, PWAs, or hybrid applications</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Beginner Projects</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">1. Todo List Application</h4>
              <p className="text-gray-600 text-sm mb-2">A classic CRUD application for task management</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Local Storage</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">CSS</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">2. Weather App</h4>
              <p className="text-gray-600 text-sm mb-2">Fetch and display weather data from external API</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">API Integration</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Responsive Design</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">3. Calculator</h4>
              <p className="text-gray-600 text-sm mb-2">Basic calculator with mathematical operations</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">HTML</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">CSS Grid</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">JavaScript</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Intermediate Projects</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">1. E-commerce Store</h4>
              <p className="text-gray-600 text-sm mb-2">Online store with products, cart, and checkout</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Redux</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MongoDB</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">2. Blog Platform</h4>
              <p className="text-gray-600 text-sm mb-2">Content management system with user authentication</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Authentication</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">MySQL</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Markdown</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">3. Task Management App</h4>
              <p className="text-gray-600 text-sm mb-2">Team collaboration tool with real-time updates</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Socket.io</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Express</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Projects</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">1. Social Media Platform</h4>
              <p className="text-gray-600 text-sm mb-2">Full-featured social network with real-time features</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">GraphQL</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Microservices</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Redis</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Docker</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">2. Video Streaming Platform</h4>
              <p className="text-gray-600 text-sm mb-2">Netflix-like platform with video upload and streaming</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">AWS S3</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Video Processing</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">CDN</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">3. Real-time Chat Application</h4>
              <p className="text-gray-600 text-sm mb-2">Slack-like application with channels and direct messaging</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">WebSocket</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MongoDB</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Development Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Planning</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>Define project scope and requirements</li>
                <li>Create wireframes and mockups</li>
                <li>Plan database schema</li>
                <li>Break down into smaller tasks</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Development</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Use version control (Git)</li>
                <li>Write clean, commented code</li>
                <li>Implement responsive design</li>
                <li>Handle errors gracefully</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Testing</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>Write unit and integration tests</li>
                <li>Test on different devices</li>
                <li>Validate user inputs</li>
                <li>Performance testing</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Deployment</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>Choose hosting platform</li>
                <li>Set up CI/CD pipeline</li>
                <li>Configure environment variables</li>
                <li>Monitor and maintain</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies to Include</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Frontend</h4>
              <p className="text-gray-600 text-sm">React, Vue, Angular, TypeScript, Tailwind CSS, Responsive Design</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">Backend</h4>
              <p className="text-gray-600 text-sm">Node.js, Express, REST APIs, GraphQL, Authentication, WebSockets</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">Database</h4>
              <p className="text-gray-600 text-sm">MongoDB, PostgreSQL, Redis, Database design, Migrations</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">DevOps</h4>
              <p className="text-gray-600 text-sm">Git, Docker, AWS/Vercel, CI/CD, Testing, Monitoring</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Portfolio Tips</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span><strong>Live Demos:</strong> Deploy your projects and provide working links</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                <span><strong>Source Code:</strong> Share clean, well-documented code on GitHub</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></span>
                <span><strong>Documentation:</strong> Write clear README files with setup instructions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                <span><strong>Challenges:</strong> Explain problems faced and solutions implemented</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <span><strong>Technologies:</strong> Highlight tech stack and why you chose them</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interview Project Questions</h3>
          <div className="space-y-2">
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">Tell me about a challenging project you worked on</summary>
              <p className="mt-2 text-gray-600 text-sm">Describe the problem, your approach, technologies used, challenges faced, and how you overcame them. Show problem-solving skills.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">How do you ensure code quality in your projects?</summary>
              <p className="mt-2 text-gray-600 text-sm">Discuss testing strategies, code reviews, linting, documentation, version control practices, and continuous integration.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">How do you handle state management in large applications?</summary>
              <p className="mt-2 text-gray-600 text-sm">Explain Redux, Context API, or other state management solutions you've used, when to use each, and how you structure application state.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">Describe your deployment and DevOps practices</summary>
              <p className="mt-2 text-gray-600 text-sm">Cover hosting platforms, CI/CD pipelines, environment management, monitoring, and how you handle production issues.</p>
            </details>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Start Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Before You Start</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Choose a project that interests you</li>
                <li>Research similar applications</li>
                <li>Plan features and user flow</li>
                <li>Set up development environment</li>
                <li>Create GitHub repository</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">📋 During Development</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>Commit code regularly</li>
                <li>Write meaningful commit messages</li>
                <li>Test features as you build</li>
                <li>Keep code clean and documented</li>
                <li>Track progress and issues</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      
      <StudyNavigation />
    </div>
  );
};

export default Projects;

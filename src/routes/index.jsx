import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

// Study Topics
import Introduction from '../pages/study-topics/introduction/Introduction';
import HTML from '../pages/study-topics/html/HTML';
import CSS from '../pages/study-topics/css/CSS';
import JavaScript from '../pages/study-topics/javascript/JavaScript';
import ReactJS from '../pages/study-topics/reactjs/ReactJS';
import TypeScript from '../pages/study-topics/typescript/TypeScript';
import NodeJS from '../pages/study-topics/nodejs/NodeJS';
import Database from '../pages/study-topics/database/Database';
import Projects from '../pages/study-topics/projects/Projects';
import InterviewQuestions from '../pages/study-topics/interview-questions/InterviewQuestions';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },
      // Study Topics Routes
      {
        path: 'study/introduction',
        element: (
          <ProtectedRoute>
            <Introduction />
          </ProtectedRoute>
        )
      },
      {
        path: 'study/html',
        element: (
          <ProtectedRoute>
            <HTML />
          </ProtectedRoute>
        )
      },
      {
        path: 'study/css',
        element: (
          <ProtectedRoute>
            <CSS />
          </ProtectedRoute>
        )
      },
      {
        path: 'study/javascript',
        element: (
          <ProtectedRoute>
            <JavaScript />
          </ProtectedRoute>
        )
      },
      {
        path: 'study/reactjs',
        element: (
          <ProtectedRoute>
            <ReactJS />
          </ProtectedRoute>
        )
      },
      {
        path: 'study/typescript',
        element: (
          <ProtectedRoute>
            <TypeScript />
          </ProtectedRoute>
        )
      },
      {
        path: 'study/nodejs',
        element: (
          <ProtectedRoute>
            <NodeJS />
          </ProtectedRoute>
        )
      },
      {
        path: 'study/database',
        element: (
          <ProtectedRoute>
            <Database />
          </ProtectedRoute>
        )
      },
      {
        path: 'study/projects',
        element: (
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        )
      },
      {
        path: 'study/interview-questions',
        element: (
          <ProtectedRoute>
            <InterviewQuestions />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

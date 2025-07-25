import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';

// Lazy loaded study topics for better performance
import {
    LazyIntroduction,
    LazyHTML,
    LazyCSS,
    LazyJavaScript,
    LazyReactJS,
    LazyTypeScript,
    LazyNodeJS,
    LazyDatabase,
    LazyProjects,
    LazyInterviewQuestions,
    LazyWrapper
} from '../utils/lazyComponents.jsx';

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
      {
        path: 'favorites',
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        )
      },
      // Study Topics Routes - Now with Simple Lazy Loading
      {
        path: 'study/introduction',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyIntroduction />
            </LazyWrapper>
          </ProtectedRoute>
        )
      },
      {
        path: 'study/html',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyHTML />
            </LazyWrapper>
          </ProtectedRoute>
        )
      },
      {
        path: 'study/css',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyCSS />
            </LazyWrapper>
          </ProtectedRoute>
        )
      },
      {
        path: 'study/javascript',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyJavaScript />
            </LazyWrapper>
          </ProtectedRoute>
        )
      },
      {
        path: 'study/reactjs',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyReactJS />
            </LazyWrapper>
          </ProtectedRoute>
        )
      },
      {
        path: 'study/typescript',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyTypeScript />
            </LazyWrapper>
          </ProtectedRoute>
        )
      },
      {
        path: 'study/nodejs',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyNodeJS />
            </LazyWrapper>
          </ProtectedRoute>
        )
      },
      {
        path: 'study/database',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyDatabase />
            </LazyWrapper>
          </ProtectedRoute>
        )
      },
      {
        path: 'study/projects',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyProjects />
            </LazyWrapper>
          </ProtectedRoute>
        )
      },
      {
        path: 'study/interview-questions',
        element: (
          <ProtectedRoute>
            <LazyWrapper>
              <LazyInterviewQuestions />
            </LazyWrapper>
          </ProtectedRoute>
        )
      }
    ]
  }
]);

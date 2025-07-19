import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

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
      }
    ]
  }
]);

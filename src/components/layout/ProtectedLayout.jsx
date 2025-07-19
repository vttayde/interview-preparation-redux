import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';

const ProtectedLayout = () => {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
};

export default ProtectedLayout;

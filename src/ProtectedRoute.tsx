import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './authContext.tsx';

const ProtectedRoute: React.FC = () => {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center py-8">Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

import React from 'react';
import { useAuth } from './authContext.tsx';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  if (!user) return null;
  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto flex flex-col gap-4 mt-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">User Profile</h2>
      <div><span className="font-semibold">Username:</span> {user.username}</div>
      <div><span className="font-semibold">Email:</span> {user.email}</div>
      <button
        onClick={logout}
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;

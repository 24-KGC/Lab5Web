
import React from 'react';
import { useAuth } from '../authContext.tsx';
import Profile from '../Profile.tsx';
import LoginForm from '../LoginForm.tsx';
import RegisterForm from '../RegisterForm.tsx';

const Homework3: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="p-6 bg-white rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Homework 3: User Authentication Frontend</h2>
      <div className="mb-4">
        <strong>Status:</strong> {user ? <span className="text-green-600">Logged in as {user.username}</span> : <span className="text-red-600">Not logged in</span>}
      </div>
      {!user && (
        <>
          <div className="mb-8">
            <RegisterForm />
          </div>
          <div>
            <LoginForm />
          </div>
        </>
      )}
      {user && (
        <>
          <Profile />
          <div className="mt-6 p-4 bg-green-50 rounded text-green-800 font-semibold">
            This is protected content only visible to authenticated users!
          </div>
        </>
      )}
    </div>
  );
};

export default Homework3;


import React from 'react';
import RegisterForm from '../RegisterForm.tsx';
import LoginForm from '../LoginForm.tsx';
import Profile from '../Profile.tsx';
import { useAuth } from '../authContext.tsx';

const Homework2: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="p-6 bg-white rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Homework 2: API Authentication with JWT</h2>
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
      {user && <Profile />}
    </div>
  );
};

export default Homework2;

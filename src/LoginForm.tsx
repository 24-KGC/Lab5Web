

import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validate = (): string => {
    if (!email.includes('@')) return 'Invalid email';
    if (password.length < 6) return 'Password too short';
    return '';
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      setSuccess(false);
    } else {
      setError('');
      setSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 max-w-md mx-auto flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Login Form</h2>
      <div className="flex flex-col gap-1">
        <label className="text-gray-700 font-medium">Email:</label>
        <input
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-gray-700 font-medium">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>
      {error && <p className="text-red-600 font-semibold">{error}</p>}
      {success && <p className="text-green-600 font-semibold">Login successful!</p>}
      <button
        type="submit"
        disabled={!!validate()}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold disabled:opacity-50"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

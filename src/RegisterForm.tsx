import React, { useState } from 'react';
import { useAuth } from './authContext.tsx';

const RegisterForm: React.FC = () => {
  const { register, loading } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await register(username, email, password);
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg shadow p-6 max-w-md mx-auto flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Register</h2>
      <div className="flex flex-col gap-1">
        <label className="text-gray-700 font-medium">Username:</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-gray-700 font-medium">Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-gray-700 font-medium">Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
          required
        />
      </div>
      {error && <p className="text-red-600 font-semibold">{error}</p>}
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default RegisterForm;

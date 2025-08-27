

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterForm from './RegisterForm.tsx';
import Profile from './Profile.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import { useAuth } from './authContext.tsx';
import Homework3Login from './Homework3Login.tsx';
import HomeworkOverview from './Homework/HomeworkOverview.tsx';
import DataLoader from './DataLoader.tsx';
import TodoList from './TodoList.tsx';
import OptimizedList from './OptimizedList.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import BuggyComponent from './BuggyComponent.tsx';
import Modal from './Modal.tsx';
import Counter from './Counter.tsx';
import LoginForm from './LoginForm.tsx';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useAuth ? useAuth() : { user: null };
  return (
    <Router>
      <nav className="flex gap-4 justify-center py-4 bg-white shadow mb-6">
        <Link to="/" className="font-semibold text-blue-700 hover:underline">Home</Link>
        {!user && <Link to="/login" className="font-semibold text-blue-700 hover:underline">Homework3 Login</Link>}
        {!user && <Link to="/register" className="font-semibold text-blue-700 hover:underline">Register</Link>}
        {user && <Link to="/profile" className="font-semibold text-blue-700 hover:underline">Profile</Link>}
      </nav>
      <Routes>
        <Route path="/login" element={<Homework3Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-8">
            <HomeworkOverview />
            <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow">Lab 5 Exercises</h1>
            <section className="bg-white rounded-lg shadow p-6 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Exercise 13: DataLoader (Render Props)</h2>
              <DataLoader
                render={({ data, loading, error }: { data: any; loading: boolean; error: string | null }) => (
                  <div>
                    {loading && <p className="text-gray-500 animate-pulse">Loading...</p>}
                    {error && <p className="text-red-600 font-semibold">{error}</p>}
                    {data && (
                      <div className="mt-2">
                        <h4 className="text-lg font-semibold text-blue-600">{data.title}</h4>
                        <p className="text-gray-700">{data.body}</p>
                      </div>
                    )}
                  </div>
                )}
              />
            </section>
            <section className="bg-white rounded-lg shadow p-6 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Todo List (useReducer)</h2>
              <TodoList />
            </section>
            <section className="bg-white rounded-lg shadow p-6 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Optimized List</h2>
              <OptimizedList />
            </section>
            <section className="bg-white rounded-lg shadow p-6 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Exercise 16: Error Boundary</h2>
              <ErrorBoundary>
                <BuggyComponent />
              </ErrorBoundary>
            </section>
            <section className="bg-white rounded-lg shadow p-6 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Exercise 17: Modal with Portals</h2>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setModalOpen(true)}
              >
                Open Modal
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h3 className="text-xl font-bold mb-2">This is a modal!</h3>
                <p className="text-gray-700">Click outside or X to close.</p>
              </Modal>
            </section>
            <section className="bg-white rounded-lg shadow p-6 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Exercise 18: Counter (Testing a Simple Component)</h2>
              <Counter />
            </section>
            <section className="bg-white rounded-lg shadow p-6 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Exercise 19: LoginForm (Testing a Form Component)</h2>
              <LoginForm />
            </section>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;

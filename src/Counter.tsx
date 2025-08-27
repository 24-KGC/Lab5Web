import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-xs mx-auto flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Counter</h2>
      <p className="text-2xl font-mono">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition font-semibold"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition font-semibold"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition font-semibold"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

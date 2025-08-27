import React, { useState, useCallback } from 'react';
import ListItem from './ListItem.tsx';

type Item = {
  id: number;
  text: string;
};

const OptimizedList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);
  const [counter, setCounter] = useState(0);

  const handleDeleteItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Optimized List</h2>
      <button
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition font-semibold"
        onClick={() => setCounter((c) => c + 1)}
      >
        Re-render Parent ({counter})
      </button>
      <ul className="space-y-2">
        {items.map((item) => (
          <ListItem key={item.id} item={item} onDelete={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default OptimizedList;

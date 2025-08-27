import React, { useReducer, useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Action =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'REMOVE_TODO'; payload: number };

const initialState: Todo[] = [];

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

const TodoList: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd} className="flex mb-4">
        <input
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          className="border border-gray-300 p-2 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new todo..."
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 transition font-semibold">
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`flex items-center justify-between px-3 py-2 rounded border ${todo.completed ? 'bg-green-50 line-through text-gray-400' : 'bg-gray-100'}`}
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                className="accent-blue-600"
              />
              <span>{todo.text}</span>
            </div>
            <button
              onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-xs"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

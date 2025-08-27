
import React, { useEffect, useState } from 'react';

type Task = {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: string;
};

const Homework1: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editing, setEditing] = useState<Task | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/tasks');
      if (!res.ok) throw new Error('Failed to fetch tasks');
      const data = await res.json();
      setTasks(data);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Error fetching tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddOrEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return setError('Title is required');
    setError('');
    try {
      if (editing) {
        // Update
        const res = await fetch(`/api/tasks/${editing._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description }),
        });
        if (!res.ok) throw new Error('Failed to update task');
        setEditing(null);
      } else {
        // Create
        const res = await fetch('/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description }),
        });
        if (!res.ok) throw new Error('Failed to add task');
      }
      setTitle('');
      setDescription('');
      fetchTasks();
    } catch (err: any) {
      setError(err.message || 'Error saving task');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this task?')) return;
    try {
      const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete task');
      fetchTasks();
    } catch (err: any) {
      setError(err.message || 'Error deleting task');
    }
  };

  const handleEdit = (task: Task) => {
    setEditing(task);
    setTitle(task.title);
    setDescription(task.description || '');
  };

  const handleToggle = async (task: Task) => {
    try {
      const res = await fetch(`/api/tasks/${task._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...task, completed: !task.completed }),
      });
      if (!res.ok) throw new Error('Failed to update task');
      fetchTasks();
    } catch (err: any) {
      setError(err.message || 'Error updating task');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Homework 1: Task CRUD</h2>
      <form onSubmit={handleAddOrEdit} className="flex flex-col gap-2 mb-6">
        <input
          className="border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editing ? 'Update Task' : 'Add Task'}
        </button>
        {editing && (
          <button type="button" className="text-sm text-gray-500 underline" onClick={() => { setEditing(null); setTitle(''); setDescription(''); }}>
            Cancel Edit
          </button>
        )}
      </form>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {loading ? (
        <div>Loading tasks...</div>
      ) : (
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task._id} className="flex items-center justify-between bg-gray-100 p-3 rounded">
              <div className="flex-1">
                <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.title}</span>
                {task.description && <div className="text-sm text-gray-500">{task.description}</div>}
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleToggle(task)} className={`px-2 py-1 rounded ${task.completed ? 'bg-green-400' : 'bg-gray-300'}`}>{task.completed ? 'Undo' : 'Done'}</button>
                <button onClick={() => handleEdit(task)} className="px-2 py-1 bg-yellow-400 rounded">Edit</button>
                <button onClick={() => handleDelete(task._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Homework1;

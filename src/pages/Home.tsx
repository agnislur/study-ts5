import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const { user } = useUser();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = () => {
    if (newTask.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number, task: string) => {
    setEditingTask(id);
    setEditingText(task);
  };

  const updateTodo = () => {
    if (editingTask === null || editingText.trim() === '') return;
    setTodos(
      todos.map(todo =>
        todo.id === editingTask ? { ...todo, task: editingText } : todo
      )
    );
    setEditingTask(null);
    setEditingText('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      {user ? (
        <div>
          <p className="text-lg mb-4">Welcome, {user.username}!</p>
          <div className="mb-4">
            <input
              type="text"
              className="border p-2 rounded w-full mb-2"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={addTodo}
            >
              Add Task
            </button>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {todos.map(todo => (
              <li
                key={todo.id}
                className={`p-2 border rounded flex justify-between items-center ${todo.completed ? 'line-through text-gray-500' : ''}`}
              >
                {editingTask === todo.id ? (
                  <div className="flex-grow">
                    <input
                      type="text"
                      className="border p-2 rounded w-full"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                  </div>
                ) : (
                  <span
                    className="flex-grow cursor-pointer"
                    onClick={() => toggleComplete(todo.id)}
                  >
                    {todo.task}
                  </span>
                )}
                <div className="flex space-x-2">
                  {editingTask === todo.id ? (
                    <button
                      className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
                      onClick={updateTodo}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                      onClick={() => editTodo(todo.id, todo.task)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-lg">You need to log in to see this content.</p>
      )}
    </div>
  );
};

export default Home;

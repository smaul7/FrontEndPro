// src/features/todos/Todos.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

const Todos = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Enter task..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </form>

      <ul className="mb-4">
        {todos.map((todo) => (
          <li key={todo.id} className="border-b py-1">
            {todo.text}
          </li>
        ))}
      </ul>

      <footer className="text-gray-600">
        Total tasks: {todos.length}
      </footer>
    </div>
  );
};

export default Todos;

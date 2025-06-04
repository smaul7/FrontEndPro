import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, toggleTodo } from './todosSlice';

const Todos = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ToDo List</h2>
      <ul>
        {items.map(todo => (
          <li key={todo.id} className="mb-2">
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span className="ml-2">{todo.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

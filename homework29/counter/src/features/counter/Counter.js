import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl mb-4">Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-green-500 text-white rounded mr-2"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        -
      </button>
    </div>
  );
};

export default Counter;

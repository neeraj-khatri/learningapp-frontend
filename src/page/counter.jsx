import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, increaseByValue } from '../features/counter/counterSlice';

const Counter = () => {
  const currentTotal = useSelector((state) => state.counterData.total);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Total Count: {currentTotal}</h2>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(increaseByValue(5))}>Increase by 5</button>
    </div>
  );
};

export default Counter;

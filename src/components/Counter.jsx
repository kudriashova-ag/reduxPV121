import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "../slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementBy(2))}>+2</button>
    </div>
  );
};

export default Counter;

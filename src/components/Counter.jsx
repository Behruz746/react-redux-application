import React from "react";
import { useDispatch } from "react-redux";
import {
  plusCounter,
  minusCounter,
  resetCounter,
} from "../redusers/cauntSlice";

function Counter() {
  const dispatch = useDispatch();   

  return (
    <div className="counter__container">  
      <button type="button" onClick={() => dispatch(plusCounter())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(minusCounter())}>
        -
      </button>
      <button type="button" onClick={() => dispatch(resetCounter())}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

import React, { useReducer } from "react";
import numberReducer from "../Context/NumberReducer";

export const AnotherChild = () => {
  const [state, dispatch] = useReducer(numberReducer, 100);
  return (
    <div>
      <h2>This is Example of useContext on ReactJS</h2>
      <h2>Current Value: {state}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", val: 15 });
        }}
      >
        Increment by 15
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", val: 20 });
        }}
      >
        Decrement by 20
      </button>
    </div>
  );
};

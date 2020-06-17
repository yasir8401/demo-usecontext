import React, { useContext } from "react";
import ValueContext from "../Context/ValueContext";

export const Child = () => {
  let value = useContext(ValueContext);
  let updateValue = value[1];
  return (
    <React.Fragment>
      <h2>This is Example of useContext on ReactJS</h2>
      <h2>Current Value: {value}</h2>
      <button onClick={() => updateValue(++value[0])}>Increment Value</button>
      <button onClick={() => updateValue(--value[0])}>Decrement Value</button>
    </React.Fragment>
  );
};

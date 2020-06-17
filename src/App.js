import React, { useState } from "react";
import "./App.css";
import { Parent } from "./components/Parent";
import ValueContext from "./Context/ValueContext";

function App() {
  let value = useState(50);

  return (
    <ValueContext.Provider value={value}>
      <div className="App">
        <h2>This is Assignment of Class 5 of ReactJS - PIAIC Bootcamp</h2>
        <Parent />
      </div>
    </ValueContext.Provider>
  );
}

export default App;

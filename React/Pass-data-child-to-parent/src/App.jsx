import React, { useState } from "react";
import "./App.css";
import Child from "./Component/Child";

const App = () => {
  const [showParentData, setShowParentData] = useState("");
  let name = "sanup";

  function getParentData(data) {
    console.log("Parent data at App received", data);
    setShowParentData(data);
  }
  return (
    <div>
      <h1>Parent name is {showParentData}</h1>

      <Child name={name} passParentData={getParentData} />
    </div>
  );
};

export default App;

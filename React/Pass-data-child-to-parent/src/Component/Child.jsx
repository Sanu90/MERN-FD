/* eslint-disable react/prop-types */
import React from "react";

const Child = ({ name, passParentData }) => {
  // eslint-disable-next-line no-redeclare
  

  const parentName = "Amma";

  return (
    <div>
      <h3>Child name is {name}</h3>
      <button
        style={{ backgroundColor: "grey" }}
        onClick={() => passParentData(parentName)}
      >
        Show Parent Name
      </button>
    </div>
  );
};

export default Child;

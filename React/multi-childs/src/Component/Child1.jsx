/* eslint-disable react/prop-types */
import React from "react";
import Child2 from "./Child2";

const Child1 = ({ object }) => {
  const { state, taluk } = object;
  console.log("props--->>>>", state, taluk);

  return (
    <div>
      <p>This is Child 1</p>
      <code>
        {state}----{taluk}
      </code>
      <hr />
      <Child2 />
    </div>
  );
};

export default Child1;

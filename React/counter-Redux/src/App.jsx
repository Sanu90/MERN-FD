import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.value);
  return (
    <>
      <h1>Hello Redux Counter</h1>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        ADD
      </button>
      
      <button onClick={() => {
        dispatch({
          type: "decrement",
        });
      }}>SUB</button>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [newTimer, setNewTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setNewTimer(newTimer + 1);
    }, 1000);
  },[newTimer]);
  const counter = useSelector((state) => state.value);
  return (
    <>
      <h1>Hello Redux Counter</h1>
      <p>New Counter: {newTimer} </p>
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

      <button
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        SUB
      </button>
    </>
  );
}

export default App;

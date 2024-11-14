import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.val);
  const dispatch = useDispatch();
  console.log("count is--->", count);
  return (
    <>
      <h2> Counter using Redux Toolkit</h2>
      <div className="App">
        <div className="counter">
          <button id="decrease" onClick={() => dispatch(decrement())}>
            -
          </button>
          <div className="count">{count}</div>
          <button id="increase" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

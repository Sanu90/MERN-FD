import "./App.css";
import Child1 from "./Component/Child1";

function App() {
  let obj = {
    state: "kerala",
    taluk: "chittur",
    population: 857899,
  };
  return (
    <>
      <Child1 object={obj} />
    </>
  );
}

export default App;

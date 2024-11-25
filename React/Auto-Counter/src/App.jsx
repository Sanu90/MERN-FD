import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Counter: {count}</p>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const subCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>count: {count}</h2>
      <button onClick={addCount}>ADD</button>
      <button onClick={subCount}>SUB</button>
      <button onClick={resetCount}>RESET</button>
    </div>
  );
}

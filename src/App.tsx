import { useEffect, useState } from "react";
import "./App.css";
import {
  CounterProvider,
  useCounterContext,
} from "./context/MyContextProvider";

const Counter = () => {
  const { count } = useCounterContext();

  useEffect(() => {
    console.log("Counter rendered");
  });

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

function App() {
  const [_, forceUpdate] = useState(0);
  return (
    <>
      <CounterProvider>
        <Counter></Counter>
        <button onClick={() => forceUpdate((prev) => prev + 1)}>+</button>
      </CounterProvider>
    </>
  );
}

export default App;

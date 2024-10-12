import { useEffect } from "react";
import { CounterProvider, useCounterContext } from "./context/CounterProvider";
import {
  StoreProvider,
  useStore,
  useStoreState,
} from "./context/StoreStateProivder";

const Component1 = () => {
  const store = useStoreState();
  const [state, setState] = useStore(store);

  useEffect(() => {
    console.log("Component1");
  });

  const inc = () => {
    setState((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
    }));
  };
  return (
    <div>
      count1: {state.count1} <button onClick={inc}>+1</button>
    </div>
  );
};

const Component2 = () => {
  const store = useStoreState();
  const [state] = useStore(store);

  useEffect(() => {
    console.log("Component2");
  });

  return <div>{state.text}</div>;
};

const Counter1 = () => {
  const { count, setCount } = useCounterContext();

  useEffect(() => {
    console.log("Counter1");
  });

  const inc = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      count1: {count} <button onClick={inc}>+1</button>
    </div>
  );
};

const Counter2 = () => {
  const { count } = useCounterContext();

  useEffect(() => {
    console.log("Counter2");
  });

  return <div>count1: {count}</div>;
};

const App = () => (
  <>
    <CounterProvider>
      <h1>Using default store : 내부 상태</h1>
      <Counter1 />
      <Counter2 />
    </CounterProvider>

    <StoreProvider initialState={{ count1: 10, count2: 20, text: "hello" }}>
      <h1>Using store provider : 외부 상태인데 selector 안함</h1>
      <Component1 />
      <Component2 />
    </StoreProvider>
  </>
);

export default App;

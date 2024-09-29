import { useEffect } from "react";
import { MyContext, MyContextProvider } from "./context/MyContextProvider";
import { useContextSelector } from "use-context-selector";

const Counter = () => {
  const count = useContextSelector(MyContext, (state) => state?.count);
  const setCount = useContextSelector(MyContext, (state) => state?.setCount);

  useEffect(() => {
    console.log("Counter");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount?.((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

const User = () => {
  useEffect(() => {
    console.log("User");
  });

  const name = useContextSelector(MyContext, (state) => state?.name);
  return <>{name}</>;
};

function App() {
  return (
    <MyContextProvider>
      <Counter />
      <User />
    </MyContextProvider>
  );
}

export default App;

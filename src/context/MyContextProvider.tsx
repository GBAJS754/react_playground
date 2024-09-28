import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";

const CounterContext = createContext<null | {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}>(null);

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const previousValueRef = useRef<{
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
  } | null>(null);

  const value = useMemo(() => ({ count, setCount }), [count]);
  //   const value = { count, setCount };

  useEffect(() => {
    if (previousValueRef.current) {
      const isSameValue = value === previousValueRef.current;
      console.log("isSameValue", isSameValue);
    }
    previousValueRef.current = value;
  });

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const value = useContext(CounterContext);
  if (value == null) {
    throw new Error(
      "useCounterContext is only available within CounterProvider."
    );
  }

  return value;
};

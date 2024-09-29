import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { createContext } from "use-context-selector";

type MyContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

export const MyContext = createContext<MyContextType | null>(null);

export const MyContextProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  const value = useMemo(
    () => ({ count, setCount, name, setName }),
    [count, name]
  );

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContextContext = () => {
  const value = useContext(MyContext);
  if (value == null) {
    throw new Error(
      "useMyContextContext is only available within MyContextProvider."
    );
  }

  return value;
};

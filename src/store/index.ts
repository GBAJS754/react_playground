import { useEffect, useState } from "react";

type Store<State> = {
  getState: () => State;
  setState: (nextState: State) => void;
  subscribe: (listener: VoidFunction) => VoidFunction;
};

type Initializer<T> = T extends unknown ? T | ((prev: T) => T) : never;

/**
 * 스토어를 생성합니다.
 */
const createStore = <State>(initialState: Initializer<State>): Store<State> => {
  let state =
    typeof initialState === "function" ? initialState() : initialState;

  const listeners = new Set<VoidFunction>();

  const subscribe = (listener: VoidFunction) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const getState = () => state;

  const setState = (nextState: State) => {
    state = nextState;
    listeners.forEach((listener) => listener());
  };

  return { getState, setState, subscribe };
};

/**
 * 리액트 컴포넌트에서 스토어를 사용할 수 있게 해주는 훅입니다.
 */
const useStore = <State>(store: Store<State>) => {
  const [state, setState] = useState(() => store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return unsubscribe;
  }, [store]);

  return [state, store.setState] as const;
};

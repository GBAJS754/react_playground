import { ReactNode, createContext } from "react";

type ProviderProps = {
  onClose: () => void;
  children: ReactNode;
};

export const ModalContext = createContext({
  onClose: () => {},
});

export function Provider({ children, onClose }: ProviderProps) {
  return (
    <ModalContext.Provider value={{ onClose }}>
      {children}
    </ModalContext.Provider>
  );
}

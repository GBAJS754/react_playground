import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type DialogContextType = {
  name: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

export const Root = ({ context: Context = DialogContext, children, name }) => {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider value={{ open, setOpen, name }}>
      {children}
    </Context.Provider>
  );
};

export const Trigger = ({ context: Context = DialogContext }) => {
  const contextValue = useContext(Context);
  if (!contextValue) throw new Error("Must be used within Dialog Root");

  return (
    <button onClick={() => contextValue.setOpen(true)}>
      DialogContext: {contextValue.name}
    </button>
  );
};

export const Content = ({
  children,
  context: Context = DialogContext,
}: {
  children: ReactNode;
  context?: React.Context<DialogContextType | null>;
}) => {
  const contextValue = useContext(Context);
  if (!contextValue) throw new Error("Must be used within Dialog Root");

  if (!contextValue.open) return null; // open이 false면 렌더링하지 않음

  return (
    <div>
      <div>Dialog: {contextValue.name}</div>
      {children}
      <button onClick={() => contextValue.setOpen(false)}>Close</button>
    </div>
  );
};

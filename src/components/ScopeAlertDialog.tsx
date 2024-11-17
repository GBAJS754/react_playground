import React, { PropsWithChildren, ReactNode, createContext } from "react";
import * as Dialog from "./ScopeDialog";

type AlertDialogContextType = {
  name: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const AlertDialogContext = createContext<AlertDialogContextType | null>(null);

export const Root = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  return (
    <Dialog.Root name={name} context={AlertDialogContext}>
      {children}
    </Dialog.Root>
  );
};

export const Trigger = () => {
  return <Dialog.Trigger context={AlertDialogContext} />;
};

export const Content = ({ children }: PropsWithChildren) => (
  <Dialog.Content context={AlertDialogContext}>
    {" "}
    // Context 전달
    {children}
  </Dialog.Content>
);

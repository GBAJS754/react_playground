import { createContext, useContext } from "react";

type AlertDialogContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const AlertDialogContext = createContext<
  AlertDialogContextType | undefined
>(undefined);

export const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error("useAlertDialog must be used within an AlertDialog.Root");
  }
  return context;
};

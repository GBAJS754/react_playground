import { ReactNode, useContext, useState } from "react";
import { DialogContext } from "../DialogContext";

const Dialog = {
  Root: ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    return (
      <DialogContext.Provider value={{ open, setOpen }}>
        {children}
      </DialogContext.Provider>
    );
  },

  Trigger: () => {
    const context = useContext(DialogContext);
    if (!context) throw new Error("Must be used within Dialog.Root");

    return <button onClick={() => context.setOpen(true)}>Open Dialog</button>;
  },

  Content: ({ children }: { children: ReactNode }) => {
    const context = useContext(DialogContext);
    if (!context) throw new Error("Must be used within Dialog.Root");

    if (!context.open) return null;

    return (
      <div className="dialog-content">
        {children}
        <button onClick={() => context.setOpen(false)}>Close</button>
      </div>
    );
  },
};
export default Dialog;

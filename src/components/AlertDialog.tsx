import { ReactNode, useContext } from "react";
import Dialog from "./Dialog";
import { DialogContext } from "../DialogContext";

const AlertDialog = {
  Root: ({ children }: { children: ReactNode }) => {
    return <Dialog.Root>{children}</Dialog.Root>;
  },

  // 🚨 문제 발생 지점: 가장 가까운 DialogContext를 참조하게 됨
  Trigger: () => {
    const context = useContext(DialogContext);
    if (!context) throw new Error("Must be used within AlertDialog.Root");

    return (
      <button onClick={() => context.setOpen(true)}>Open Alert Dialog</button>
    );
  },

  Content: ({ children }: { children: ReactNode }) => {
    const context = useContext(DialogContext);
    if (!context) throw new Error("Must be used within AlertDialog.Root");

    if (!context.open) return null;

    return (
      <div className="alert-dialog-content">
        <div>⚠️ Alert</div>
        {children}
        <button onClick={() => context.setOpen(false)}>Confirm</button>
      </div>
    );
  },
};
export default AlertDialog;

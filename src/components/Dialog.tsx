import { useEffect } from "react";

type DialogProps = {
  open: boolean;
  onClose: VoidFunction;
};

function Dialog({ open, onClose }: DialogProps) {
  useEffect(() => {}, [onClose]);

  return (
    open && (
      <div className="dialog-overlay">
        <div className="dialog-content">
          모달창
          <button onClick={onClose}>Close</button>
          {/* Dialog content */}
        </div>
      </div>
    )
  );
}

export default Dialog;

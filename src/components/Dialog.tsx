import React, { useRef } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onExit?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onExit,
}) => {
  const prevIsOpenRef = useRef(isOpen);

  if (isOpen !== prevIsOpenRef.current) {
    prevIsOpenRef.current = isOpen;

    if (prevIsOpenRef.current === false) {
      setTimeout(() => onExit?.(), 300);
    }
  }
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    )
  );
};

export default Dialog;

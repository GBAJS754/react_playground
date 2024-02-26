import { ForwardedRef, forwardRef } from "react";
import { createPortal } from "react-dom";

type BottomSheetProps = {
  isOpen: boolean;
  title: string;
  content: string;
  onClickButton: () => void;
  buttonContent: string;
};

const BottomSheet = forwardRef(
  (
    { isOpen, title, content, onClickButton, buttonContent }: BottomSheetProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    if (!isOpen) return null;
    return createPortal(
      <div className="bottom-sheet" ref={ref}>
        <div className="bottom-sheet-title">{title}</div>
        <div className="bottom-sheet-content">{content}</div>
        <button onClick={onClickButton}>{buttonContent}</button>
      </div>,
      document.body
    );
  }
);

export default BottomSheet;

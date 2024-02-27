import { ForwardedRef, ReactNode, forwardRef } from "react";
import { createPortal } from "react-dom";
import Title from "./Title";
import Content from "./Content";
import Button from "./Button";

type BottomSheetProps = {
  children?: ReactNode;
  isOpen: boolean;
};

const BottomSheetMain = forwardRef(
  (
    { children, isOpen }: BottomSheetProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    if (!isOpen) return null;
    return createPortal(
      <div className="bottom-sheet" ref={ref}>
        {children}
      </div>,
      document.body
    );
  }
);

const BottomSheet = Object.assign(BottomSheetMain, {
  Title: Title,
  Content: Content,
  Button: Button,
});

export default BottomSheet;

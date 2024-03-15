import { ReactNode, useContext } from "react";
import { ModalContext, Provider } from "./ModalContext";
import { createPortal } from "react-dom";

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
};

export const Overlay = () => {
  const { onClose } = useContext(ModalContext);

  return <div className="overlay" onClick={onClose}></div>;
};

Modal.Overlay = Overlay;

export const Content = ({ children }: { children: ReactNode }) => {
  return <div className="content">{children}</div>;
};

Modal.Content = Content;

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    isOpen &&
    createPortal(
      <Provider onClose={onClose}>{children}</Provider>,
      document.body
    )
  );
}

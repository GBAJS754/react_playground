import { ReactNode } from "react";

export type CreateOverlayElement = (props: {
  isOpen: boolean;
  close: () => void;
}) => JSX.Element;

export type OverlayContextType = {
  mount: (id: string, element: ReactNode) => void;
};

export type OverlayRefType = {
  close: () => void;
};

import { useContext, useRef, useState } from "react";
import { OverlayContext } from "./OverlayContext";
import { CreateOverlayElement, OverlayRefType } from "./types";
import OverlayController from "./OverlayController";

let elementId = 1;

const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (context === null) {
    throw new Error("context");
  }
  const { mount } = context;
  const [id] = useState(() => String(elementId++));

  const overlayRef = useRef<OverlayRefType | null>(null);

  return {
    open: (OverlayElement: CreateOverlayElement) => {
      mount(
        id,
        <OverlayController
          key={Date.now()}
          ref={overlayRef}
          OverlayElement={OverlayElement}
        ></OverlayController>
      );
    },
    close: () => {
      overlayRef.current?.close();
    },
  };
};

export default useOverlay;

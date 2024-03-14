import {
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { CreateOverlayElement, OverlayRefType } from "./types";

type OverlayControllerProps = {
  OverlayElement: CreateOverlayElement;
};

const OverlayController = forwardRef(
  ({ OverlayElement }: OverlayControllerProps, ref: Ref<OverlayRefType>) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOverlayClose = () => setIsOpen(false);

    useImperativeHandle(ref, () => {
      return { close: handleOverlayClose };
    });

    useEffect(() => {
      // NOTE: requestAnimationFrame이 없으면 가끔 Open 애니메이션이 실행되지 않는다.
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    }, []);

    return (
      <OverlayElement
        isOpen={isOpen}
        close={handleOverlayClose}
      ></OverlayElement>
    );
  }
);

export default OverlayController;

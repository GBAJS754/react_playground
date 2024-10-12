import { overlay, useOverlayData } from "overlay-kit";

import { Modal } from "./Modal";
import Dialog from "./Dialog";
import { useEffect } from "react";

const OverlayKit = () => {
  useEffect(() => {
    console.log("OverlayKit");
  });

  const data = useOverlayData();
  console.log(data);

  const openFooConfirmDialog = () => {
    return overlay.open(({ isOpen, close, unmount }) => (
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          close();
        }}
      />
    ));
  };

  return (
    <div>
      <p>Demo with overlay-kit</p>
      <button
        onClick={() => {
          overlay.open(({ isOpen, close, unmount }) => {
            return (
              <Modal isOpen={isOpen}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p>MODAL CONTENT</p>
                  <button onClick={close}>close modal</button>
                </div>
              </Modal>
            );
          });
        }}
      >
        Framer Motion Modal
      </button>

      <button onClick={openFooConfirmDialog}>Custom Modal</button>
    </div>
  );
};

export default OverlayKit;

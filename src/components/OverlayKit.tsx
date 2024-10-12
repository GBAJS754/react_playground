import { overlay } from "overlay-kit";

import { Modal } from "./Modal";
import Dialog from "./Dialog";

const OverlayKit = () => {
  const openFooConfirmDialog = () => {
    return overlay.open(({ isOpen, close, unmount }) => (
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          close();
        }}
        onExit={unmount}
        title="이거슨 overlay-kit의 모달입니당"
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
              <Modal isOpen={isOpen} onExit={unmount}>
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

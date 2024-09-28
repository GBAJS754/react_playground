import { overlay } from "./event";
import { OverlayProvider } from "./context/provider";
import Dialog from "./components/Dialog";

function App() {
  return (
    <OverlayProvider>
      <button
        onClick={() => {
          overlay.open(
            ({ isOpen, close }) => {
              return <Dialog open={isOpen} onClose={close} />;
            },
            { overlayId: "overlayid-1" }
          );
        }}
      >
        Open1
      </button>
      <button
        onClick={() => {
          overlay.open(
            ({ isOpen, close }) => {
              return <Dialog open={isOpen} onClose={close} />;
            },
            { overlayId: "overlayid-2" }
          );
        }}
      >
        Open2
      </button>
      <button
        onClick={() => {
          overlay.open(
            ({ isOpen, close }) => {
              return <Dialog open={isOpen} onClose={close} />;
            },
            { overlayId: "overlayid-3" }
          );
        }}
      >
        Open3
      </button>
    </OverlayProvider>
  );
}

export default App;

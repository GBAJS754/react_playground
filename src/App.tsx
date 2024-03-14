import "./App.css";
import Popup from "./components/Popup";
import useOverlay from "./hooks/useOverlay";

function App() {
  const overlay = useOverlay();

  const openPopup = () => {
    return overlay.open(({ isOpen, close }) => {
      return (
        <Popup
          isOpen={isOpen}
          close={() => {
            close();
          }}
        />
      );
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          openPopup();
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;

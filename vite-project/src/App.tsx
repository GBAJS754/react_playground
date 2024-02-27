import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useClickAway from "./hooks/useClickAway";
import BottomSheet from "./component/BottomSheet";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    if (!isOpen) setIsOpen(true);
  };
  const handleButton = () => {
    console.log("안녕");
  };

  return (
    <>
      <div
        onMouseDownCapture={() => {
          console.log("container");
        }}
      >
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 onMouseDownCapture={() => console.log("h1")}>Vite + React</h1>
      </div>
      <div className="card">
        <button onClick={handleOpenModal}>Open the BottomSheet</button>
      </div>

      <BottomSheet isOpen={isOpen} ref={ref}>
        <BottomSheet.Title>타이틀</BottomSheet.Title>
        <BottomSheet.Content>본문</BottomSheet.Content>
        <BottomSheet.Button onClickButton={handleButton}>
          클릭
        </BottomSheet.Button>
      </BottomSheet>
    </>
  );
}

export default App;

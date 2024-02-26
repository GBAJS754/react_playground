import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BottomSheet from "./component/BottomSheet";
import useClickAway from "./hooks/useClickAway";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    if (!isOpen) setIsOpen(true);
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

      <BottomSheet
        ref={ref}
        isOpen={isOpen}
        title="제목"
        content="본문 내용"
        buttonContent="확인"
        onClickButton={() => {
          console.log("click");
        }}
      ></BottomSheet>
    </>
  );
}

export default App;

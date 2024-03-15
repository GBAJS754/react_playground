import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={onOpen}>모달 열기</button>
      <div>{isOpen}</div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Overlay></Modal.Overlay>
        <Modal.Content>안녕하세요</Modal.Content>
      </Modal>
    </>
  );
}

export default App;

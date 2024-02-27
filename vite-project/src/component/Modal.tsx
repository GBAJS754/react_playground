import { FormEvent, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  setAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ isOpen, setAlarm, setIsOpen }: ModalProps) => {
  const answer = "conduct";
  const inputRef = useRef<HTMLInputElement>(null);
  if (!isOpen) return;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current?.value === answer) {
      setAlarm(false);
      setIsOpen(false);
    }
  };
  return (
    <div>
      <h2>영어단어 맞추기</h2>
      <p>(동)실행하다. 수행하다. (명)행위, 경영</p>
      <form onSubmit={onSubmit}>
        <input ref={inputRef}></input>
        <button>확인</button>
      </form>
    </div>
  );
};

export default Modal;

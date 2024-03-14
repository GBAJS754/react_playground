interface PopupInputType {
  isOpen: boolean;
  close: () => void;
}

const Popup = ({ isOpen, close }: PopupInputType) => {
  return (
    <div>
      {isOpen && (
        <div>
          pop!pop!pop!
          <button onClick={() => close()}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default Popup;

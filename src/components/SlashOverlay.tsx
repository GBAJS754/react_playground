import { useOverlay } from "@toss/use-overlay";
import Dialog from "./Dialog";

const SlashOverlay = () => {
  const { open } = useOverlay();

  const openFooConfirmDialog = () => {
    return open(({ isOpen, close }) => (
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          close();
        }}
        title="이거슨 Slash의 useOverlay입니당"
      />
    ));
  };
  return <button onClick={openFooConfirmDialog}>Slash의 useOverlay</button>;
};

export default SlashOverlay;

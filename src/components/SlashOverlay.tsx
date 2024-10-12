import { useOverlay } from "@toss/use-overlay";
import Dialog from "./Dialog";
import { useEffect } from "react";

const SlashOverlay = () => {
  const { open } = useOverlay();

  useEffect(() => {
    console.log("SlashOverlay");
  });

  const openFooConfirmDialog = () => {
    return open(({ isOpen, close }) => (
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          close();
        }}
        title="useOverlay모달"
      />
    ));
  };
  return <button onClick={openFooConfirmDialog}>Slash의 useOverlay</button>;
};

export default SlashOverlay;

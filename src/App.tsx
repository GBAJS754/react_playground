import AlertDialog from "./components/AlertDialog";
import Dialog from "./components/Dialog";

const App = () => {
  return (
    <div>
      <AlertDialog.Root>
        <Dialog.Root>
          <Dialog.Trigger />
          <Dialog.Content>
            <p>
              🚨 아래의 Trigger는 AlertDialog를 열어야 하지만, 실제로는 가장
              가까운 Dialog의 Context를 변경하게 됨.
            </p>

            <AlertDialog.Trigger />
          </Dialog.Content>
        </Dialog.Root>

        <AlertDialog.Content>
          <p>This is an alert dialog content.</p>
        </AlertDialog.Content>
      </AlertDialog.Root>
      {/* <AlertDialog.Root>
        <AlertDialog.Trigger />
        <AlertDialog.Content>hi</AlertDialog.Content>
      </AlertDialog.Root>
      <Dialog.Root>
        <Dialog.Trigger />
        <Dialog.Content>sdf</Dialog.Content>
      </Dialog.Root> */}
    </div>
  );
};

export default App;

import * as Dialog from "./components/ScopeDialog";
import * as AlertDialog from "./components/ScopeAlertDialog";

export default function App() {
  return (
    <AlertDialog.Root name="MyAlertDialog">
      <Dialog.Root name="MyDialog">
        <Dialog.Trigger />
        <Dialog.Content>
          <AlertDialog.Trigger />
        </Dialog.Content>
      </Dialog.Root>

      <AlertDialog.Content />
    </AlertDialog.Root>
  );
}

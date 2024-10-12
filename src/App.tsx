import "./App.css";
import { OverlayProvider as OverlayKitProvider } from "overlay-kit";
import { OverlayProvider as SlashOverlayProvider } from "@toss/use-overlay";
import SlashOverlay from "./components/SlashOverlay";
import OverlayKit from "./components/OverlayKit";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("App");
  });
  return (
    <>
      <OverlayKitProvider>
        <OverlayKit></OverlayKit>
      </OverlayKitProvider>
      <SlashOverlayProvider>
        <SlashOverlay />
      </SlashOverlayProvider>
    </>
  );
}

export default App;

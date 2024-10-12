import { useState } from "react";
import "./App.css";
import { OverlayProvider as OverlayKitProvider } from "overlay-kit";
import { OverlayProvider as SlashOverlayProvider } from "@toss/use-overlay";
import SlashOverlay from "./components/SlashOverlay";
import OverlayKit from "./components/OverlayKit";

function App() {
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

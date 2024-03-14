import { PropsWithChildren, useState } from "react";
import { OverlayContextType } from "./types";
import { OverlayContext } from "./OverlayContext";

const OverlayProvider = ({ children }: PropsWithChildren) => {
  const [overlayById, setOverlayById] = useState(new Map());

  const mount: OverlayContextType["mount"] = (id, element) => {
    setOverlayById((overlayById) => {
      const cloned = new Map(overlayById);
      cloned.set(id, element);
      return cloned;
    });
  };

  const context = { mount };

  return (
    <OverlayContext.Provider value={context}>
      {children}
      {[...overlayById.entries()].map(([id, element]) => (
        <main key={id}>{element}</main>
      ))}
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;

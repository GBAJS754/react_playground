import { useEffect, useRef } from "react";

const events = ["mousedown", "touchstart"];

const useClickAway = (cb: (event: Event) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        cb(e);
      }
    };

    for (const event of events) {
      document.addEventListener(event, handler);
    }

    return () => {
      for (const event of events) {
        document.removeEventListener(event, handler);
      }
    };
  });

  return ref;
};

export default useClickAway;

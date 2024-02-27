import { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  return <div className="bottom-sheet-content">{children}</div>;
};

export default Content;

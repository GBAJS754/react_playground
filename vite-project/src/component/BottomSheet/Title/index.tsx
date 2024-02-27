import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <div className="bottom-sheet-title">{children}</div>;
};
export default Title;

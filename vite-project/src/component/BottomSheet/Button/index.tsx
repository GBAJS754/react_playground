import { ReactNode } from "react";

type ButtonProps = {
  onClickButton: () => void;
  children: ReactNode;
};

const Button = ({ onClickButton, children }: ButtonProps) => {
  return <button onClick={onClickButton}>{children}</button>;
};

export default Button;

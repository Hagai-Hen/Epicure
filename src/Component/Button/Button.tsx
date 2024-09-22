import "./styles.scss";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  style: string;
  arrow?: boolean;
}

export const Button = ({ children, style, arrow = false }: ButtonProps) => {
  const className = `${style || 'navbar_button'}`;

  return (
    <>
      <button className={className}>{children}</button>
      {arrow && <img src="" />}
    </>
  );
};

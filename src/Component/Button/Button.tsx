import "./styles.scss";
import { ReactNode } from "react";
import arrowSymbol from "../../assets/icons/arrow.svg";

interface ButtonProps {
  children: ReactNode;
  style: string;
  arrow?: boolean;
}

export const Button = ({ children, style, arrow = false }: ButtonProps) => {
  const className = `${style || "navbar_button"}`;

  return (
    <>
      <button className={className}>
        {children} {arrow && <img src={arrowSymbol} className="symbol" />}
      </button>
    </>
  );
};

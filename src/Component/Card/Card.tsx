import "./styles.scss";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className="" }: CardProps) => {
  return <div className={`card_container ${className}`}>{children}</div>;
};
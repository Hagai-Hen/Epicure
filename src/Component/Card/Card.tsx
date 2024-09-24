import "./styles.scss";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode; // Define children as ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className="card_container">{children}</div>;
};
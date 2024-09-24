import { ReactNode } from "react";
import "./styles.scss";

interface BasicBannerProps {
  children: ReactNode;
}

export const BasicBanner = ({ children }: BasicBannerProps) => {
  return <div className="basic_banner">{children}</div>;
};

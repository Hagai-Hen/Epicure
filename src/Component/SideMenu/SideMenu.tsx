import "./styles.scss";
import { Button } from "../Button/Button";
import X_Button from "../../assets/icons/X.svg";

interface SideMenuProps {
  setIsMenuOpen: (prev: boolean) => void;
  MenuButtons: { title: string }[];
  FooterButtons: { title: string }[];
}
export const SideMenu = ({
  setIsMenuOpen,
  MenuButtons,
  FooterButtons,
}: SideMenuProps) => {
  const toggleMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="side_menu">
      <section>
        <img src={X_Button} onClick={toggleMenu} />
        <section className="divider" />
      </section>
      <section className="buttons_container">
        {MenuButtons.map((btn, i) => (
          <Button style="side_menu_button" key={i}>
            {btn.title}
          </Button>
        ))}
        <section className="divider" />
        {FooterButtons.map((btn, i) => (
          <Button style="side_menu_button" key={i}>
            {btn.title}
          </Button>
        ))}
      </section>
    </div>
  );
};

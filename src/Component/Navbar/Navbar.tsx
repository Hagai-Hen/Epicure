import "./styles.scss";
import EpicureLogo from "../../assets/icons/logo.svg";
import { Button } from "../Button/Button";
import { BUTTONS, NAVBAR } from "../../resources/content";
import SearchSymbol from "../../assets/icons/search.svg";
import UserSymbol from "../../assets/icons/user.svg";
import BagSymbol from "../../assets/icons/bag.svg";
import HamburSymbol from "../../assets/icons/hambur.svg";
import { useState } from "react";
import { SideMenu } from "../SideMenu/SideMenu";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev: boolean) => !prev);
  };

  return (
    <header className="navbar">
      <div className="left_container">
        <img
          src={HamburSymbol}
          className="hambur_symbol"
          onClick={toggleMenu}
        />
        <img src={EpicureLogo} className="symbol" />
        <h3 className="title">{NAVBAR.TITLE}</h3>
        <section className="button_container">
          {BUTTONS.MENU.map((btn, i) => (
            <Button style="navbar_button" key={i}>
              {btn.title}
            </Button>
          ))}
        </section>
      </div>

      <section className="symbol_container">
        <img src={SearchSymbol} className="symbol" />
        <img src={UserSymbol} className="symbol" />
        <img src={BagSymbol} className="symbol" />
      </section>

      {isMenuOpen && (
        <SideMenu
          setIsMenuOpen={setIsMenuOpen}
          MenuButtons={BUTTONS.MENU}
          FooterButtons={BUTTONS.FOOTER}
        />
      )}
    </header>
  );
};

import "./styles.scss";
import SpicyIcon from "../../assets/icons/spicy.svg";
import VeganIcon from "../../assets/icons/vegan.svg";
import VegitarianIcon from "../../assets/icons/vegitarian.svg";
import { KEY_BANNER } from "../../resources/content";

export const KeyBanner = () => {
  return (
    <div className="key_banner">
      <section className="title">
        <h1>{KEY_BANNER.TITLE}</h1>
      </section>
      <section className="icons">
        <div className="icon_container">
          <img src={SpicyIcon} alt="Spicy" />
          <h3>{KEY_BANNER.SPICY}</h3>
        </div>
        <div className="icon_container">
          <img src={VegitarianIcon} alt="Vegetarian" />
          <h3>{KEY_BANNER.VEGITARIAN}</h3>
        </div>
        <div className="icon_container">
          <img src={VeganIcon} alt="Vegan" />
          <h3>{KEY_BANNER.VEGAN}</h3>
        </div>
      </section>
    </div>
  );
};

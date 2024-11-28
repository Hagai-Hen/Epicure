import { POPULAR_REST } from "../../resources/content";
import { CardInterface } from "../../resources/interfaces";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import nisIcon from "../../assets/icons/nis.svg";
import { SwiperComponent } from "../Swiper/Swiper";
import "./styles.scss";
import { getStars } from "../../resources/utils";

interface SliderProps {
  title: string;
  cards: CardInterface[];
  button?: boolean;
}

export const Slider = ({ title, cards, button = true }: SliderProps) => {
  return (
    <div className="container">
      <section className="title">
        <h1>{title}</h1>
      </section>

      <section className="cards_container">
        {cards.slice(0, 3).map((card, i) => (
          <section className="card" key={i}>
            <Card>
              <img src={card.img} className="pic" />
              <section className="text_container">
                <h1>{card.name}</h1>
                <section className="tags_container">
                {card.tags && card.tags.map((tag, i) => <img key={i} src={`src/assets/icons/${tag}.svg`} className="type_icon" />)}
                </section>
                <section className="desc_container">
                  <h3>{card.ingredients}</h3>
                  <h3>{card.chef_name}</h3>
                  <div className="rating">
                    {card.rate && getStars(card.rate)}
                  </div>
                  {card.price && (
                    <div className="price_container">
                      <span className="line" />
                      <span className="price">
                        <img
                          src={nisIcon}
                          alt="NIS Icon"
                          className="nis-icon"
                        />
                        {card.price}
                      </span>
                      <span className="line" />
                    </div>
                  )}
                </section>
              </section>
            </Card>
          </section>
        ))}
      </section>

      <section className="swiper_container">
        <SwiperComponent cards={cards} />
      </section>
      <section className={`button ${button ? "" : "mobile-only"}`}>
        <Button style="navbar_button" arrow={true}>
          {POPULAR_REST.ALL}
        </Button>
      </section>
    </div>
  );
};

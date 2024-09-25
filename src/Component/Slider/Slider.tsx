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
}

export const Slider = ({ title, cards }: SliderProps) => {
  return (
    <div className="container">
      <section className="title">
        <h1>{title}</h1>
      </section>

      <section className="cards_container">
        {cards.map((card, i) => (
          <section className="card" key={i}>
            <Card>
              <img src={card.pic} className="pic" />
              <section className="text_container">
                <h1>{card.title}</h1>
                {card.type && <img src={card.type} className="type_icon" />}
                <section className="desc_container">
                  <h3>{card.desc}</h3>
                  <div className="rating">
                    {card.rate && getStars(card.rate)}
                  </div>
                  {card.price && (
                    <div className="price_container">
                      <span className="line"></span>
                      <span className="price">
                        <img
                          src={nisIcon}
                          alt="NIS Icon"
                          className="nis-icon"
                        />
                        {card.price}
                      </span>
                      <span className="line"></span>
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
      <section className="button">
        <Button style="navbar_button" arrow={true}>
          {POPULAR_REST.ALL}
        </Button>
      </section>
    </div>
  );
};

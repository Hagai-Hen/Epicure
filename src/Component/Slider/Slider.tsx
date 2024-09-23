import { POPULAR_REST } from "../../resources/content";
import { CardInterface } from "../../resources/interfaces";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { SwiperComponent } from "../Swiper/Swiper";
import "./styles.scss";

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
            <Card
              pic={card.pic}
              title={card.title}
              desc={card?.desc}
              rate={card?.rate}
              price={card?.price}
              type={card?.type}
            />
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

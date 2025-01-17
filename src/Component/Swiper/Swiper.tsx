import { Swiper, SwiperSlide } from "swiper/react";
import { CardInterface } from "../../resources/interfaces";
import "swiper/css";
import { Card } from "../Card/Card";
import nisIcon from "../../assets/icons/nis.svg";
import { getStars } from "../../resources/utils";


interface SwiperProps {
  cards: CardInterface[];
  className?: string;
}

export const SwiperComponent = ({ cards, className = "" }: SwiperProps) => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1.5}>
      {cards.map((card, i) => (
        <SwiperSlide key={i}>
          <Card className={`${className}`}>
            <img src={card.img} className="pic" />
            <section className={`text_container`}>
              <h1>{card.name}</h1>
              <section className="desc_container">
                <h3>{card.chef_name}</h3>
                <h3>{card.ingredients}</h3>
                <div className="rating">{card.rate && getStars(card.rate)}</div>
              {card.type && <img src={card.type} className="type_icon" />}
                {card.price && (
                  <div className="price_container">
                    <span className="price">
                      <img src={nisIcon} alt="NIS Icon" className="nis-icon" />
                      <h3>{card.price}</h3>
                    </span>
                  </div>
                )}
              </section>
            </section>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

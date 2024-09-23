import { Swiper, SwiperSlide } from "swiper/react";
import { CardInterface } from "../../resources/interfaces";
import "swiper/css";
import { Card } from "../Card/Card";

interface SwiperProps {
  cards: CardInterface[];
}

export const SwiperComponent = ({ cards }: SwiperProps) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1.5}>
      {cards.map((card) => (
        <SwiperSlide>
          <Card
            pic={card.pic}
            title={card.title}
            desc={card?.desc}
            rate={card?.rate}
            price={card?.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

import "./styles.scss";
import { CHEF_OF_THE_WEEK, POPULAR_REST } from "../../resources/content";
import { Card } from "../Card/Card";
import { SwiperComponent } from "../Swiper/Swiper";
import { Button } from "../Button/Button";
import useGetChef from "../../hooks/useGetChef";
import useGetRestaurant from "../../hooks/useGetRestaurant";

interface ChefBannerProps {
  chef_id: string;
}

export const ChefBanner = ({ chef_id }: ChefBannerProps) => {
  const { chef } = useGetChef(chef_id);
  const { restaurant } = useGetRestaurant(chef?.restaurants || "");

  return (
    <div className="chef_banner">
      <h1 className="title">{CHEF_OF_THE_WEEK.TITLE}</h1>
      <main className="main_container">
        <section className="chef_img">
          <img src={chef?.img} />
          <h3 className="chef_title">{chef?.name}</h3>
        </section>
        <h5 className="desc">{chef?.description}</h5>
      </main>
      <h4>{chef?.name}{CHEF_OF_THE_WEEK.CHEF_REST}</h4>
      <div className="chef_rest">
        {restaurant.map((card, i) => (
          <section className="rest_card" key={i}>
            <Card>
              <img src={card.img} className="rest_pic" />
              <h3>{card.name}</h3>
            </Card>
          </section>
        ))}
      </div>
      <section className="swiper_container">
        <SwiperComponent cards={restaurant} className="chef_of_the_week"/>
      </section>
      <section className="chef_button">
        <Button style="navbar_button" arrow={true}>
          {POPULAR_REST.ALL}
        </Button>
      </section>
    </div>
  );
};

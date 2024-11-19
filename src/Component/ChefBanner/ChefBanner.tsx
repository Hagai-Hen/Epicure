import "./styles.scss";
import { CHEF_OF_THE_WEEK, POPULAR_REST } from "../../resources/content";
import { Card } from "../Card/Card";
import { SwiperComponent } from "../Swiper/Swiper";
import { Button } from "../Button/Button";

export const ChefBanner = () => {
  return (
    <div className="chef_banner">
      <h1 className="title">{CHEF_OF_THE_WEEK.TITLE}</h1>
      <main className="main_container">
        <section className="chef_img">
          <img src={CHEF_OF_THE_WEEK.IMG} />
          <h3 className="chef_title">{CHEF_OF_THE_WEEK.CHEF_TITLE}</h3>
        </section>
        <h5 className="desc">{CHEF_OF_THE_WEEK.DESC}</h5>
      </main>
      <h4>{CHEF_OF_THE_WEEK.CHEF_REST}</h4>
      <div className="chef_rest">
        {CHEF_OF_THE_WEEK.REST.map((card, i) => (
          <section className="rest_card" key={i}>
            <Card>
              <img src={card.pic} className="rest_pic" />
              <h3>{card.title}</h3>
            </Card>
          </section>
        ))}
      </div>
      <section className="swiper_container">
        <SwiperComponent cards={CHEF_OF_THE_WEEK.REST} />
      </section>
      <section className="chef_button">
        <Button style="navbar_button" arrow={true}>
          {POPULAR_REST.ALL}
        </Button>
      </section>
    </div>
  );
};

import "./styles.scss";
import { CHEF_OF_THE_WEEK } from "../../resources/content";

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
    </div>
  );
};

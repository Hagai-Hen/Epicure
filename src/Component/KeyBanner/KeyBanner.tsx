import "./styles.scss";
import { KEY_BANNER } from "../../resources/content";
import { BasicBanner } from "../BasicBanner/BasicBanner";

export const KeyBanner = () => {
  return (
    <BasicBanner>
      <section className="title">
        <h1>{KEY_BANNER.TITLE}</h1>
      </section>
      <section className="icons">
        {KEY_BANNER.DATA.map((item) => (
          <div className="icon_container" key={item.title}>
            <img src={item.icon} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </section>
    </BasicBanner>
  );
};

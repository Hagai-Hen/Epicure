import "./styles.scss";
import { ABOUT } from "../../resources/content";
import { BasicBanner } from "../BasicBanner/BasicBanner";

export const About = () => {
  return (
    <BasicBanner>
        <div className="about_container">
        <section className="about_logo">
            <img src={ABOUT.LOGO} />
        </section>

        <main className="about_details">
        <section className="mobile">
            <img src={ABOUT.APP_STORE} />
            <img src={ABOUT.GOOGLE_PLAY} />
        </section>
        <section>
            <h1>{ABOUT.TITLE}</h1>
            <h3>{ABOUT.DESC}</h3>
            </section>
        </main>
        </div>
    </BasicBanner>
  );
};

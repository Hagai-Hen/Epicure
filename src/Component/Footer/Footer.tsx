import "./styles.scss";
import { BUTTONS } from "../../resources/content";
import { Button } from "../Button/Button";

export const Footer = () => {
  return (
    <div className="footer_container">
        <section className="buttons_container">
            {BUTTONS.FOOTER.map((btn, i) => (
                <Button style='navbar_button' key={i}>{btn.title}</Button>
            ))}
        </section>
    </div>
  );
};

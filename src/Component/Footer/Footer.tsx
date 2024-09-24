import "./styles.scss";
import { BUTTONS } from "../../resources/content";
import { Button } from "../Button/Button";

export const Footer = () => {
  return (
    <div className="footer_container">
        <section className="buttons_container">
            {BUTTONS.FOOTER.map((btn) => (
                <Button style='navbar_button'>{btn.title}</Button>
            ))}
        </section>
    </div>
  );
};

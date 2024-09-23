import "./styles.scss";
import filledStar from "../../assets/icons/filled_star.svg";
import emptyStar from "../../assets/icons/empty_star.svg";
import { CardInterface } from "../../resources/interfaces";
import nisIcon from "../../assets/icons/nis.svg";

export const Card = ({ pic, title, desc, rate, price, type }: CardInterface) => {
  const stars = [];

  if (rate) {
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        stars.push(<img key={i} src={filledStar} alt="Filled star" />);
      } else {
        stars.push(<img key={i} src={emptyStar} alt="Empty star" />);
      }
    }
  }

  return (
    <div className="card_container">
      <img src={pic} className="pic" />
      <section className="text_container">
        <h1>{title}</h1>
        {type && <img src={type} className="type_icon"/>}
        <h3>{desc}</h3>
        <div className="rating">{stars}</div>
        {price && (
          <div className="price_container">
            <span className="line"></span>
            <span className="price">
              <img src={nisIcon} alt="NIS Icon" className="nis-icon" /> {price}
            </span>
            <span className="line"></span>
          </div>
        )}
      </section>
    </div>
  );
};

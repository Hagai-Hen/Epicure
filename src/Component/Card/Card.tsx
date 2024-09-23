import "./styles.scss";
import filledStar from "../../assets/icons/filled_star.svg";
import emptyStar from "../../assets/icons/empty_star.svg";
import { CardInterface } from "../../resources/interfaces";

export const Card = ({ pic, title, desc, rate = 0, price }: CardInterface) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars.push(<img key={i} src={filledStar} alt="Filled star" />);
    } else {
      stars.push(<img key={i} src={emptyStar} alt="Empty star" />);
    }
  }

  return (
    <div className="card_container">
      <img src={pic} className="pic"/>
      <section className="text_container">
        <h1>{title}</h1>
        <h3>{desc}</h3>
        <div className="rating">{stars}</div>
        {price && <p className="price">{price}</p>}
      </section>
    </div>
  );
};

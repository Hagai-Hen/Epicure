import filledStar from "../assets/icons/filled_star.svg";
import emptyStar from "../assets/icons/empty_star.svg";

export const getStars = (rate: number) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        src={i < rate ? filledStar : emptyStar}
        alt={i < rate ? "Filled star" : "Empty star"}
      />
    );
  }

  return stars;
};
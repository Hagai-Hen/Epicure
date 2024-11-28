import { Fade } from "react-awesome-reveal";
import { About } from "../../Component/About/About";
import { ChefBanner } from "../../Component/ChefBanner/ChefBanner";
import { Footer } from "../../Component/Footer/Footer";
import { KeyBanner } from "../../Component/KeyBanner/KeyBanner";
import { Slider } from "../../Component/Slider/Slider";
import { TopBanner } from "../../Component/TopBanner/TopBanner";
import { DISHES, POPULAR_REST } from "../../resources/content";
import useGetRestaurants from "../../hooks/useGetRestaurants";
import useGetDishes from "../../hooks/useGetDishes";
import useGetChefs from "../../hooks/useGetChefs";

function HomePage() {
  const { restaurants, setRestaurants } = useGetRestaurants();
  const { dishes, setDishes} = useGetDishes();
  const { chefs, setChefs} = useGetChefs();
  console.log("rest", restaurants);
  console.log("dishes", dishes);
  console.log("chefs", chefs);
  return (
    <>
      <Fade delay={150}>
        <TopBanner />
        <Slider title={POPULAR_REST.TITLE} cards={restaurants} />
        <Slider title={DISHES.TITLE} cards={dishes} button={false}/>
        <KeyBanner />
        <ChefBanner />
        <About />
        <Footer />
      </Fade>
    </>
  );
}

export default HomePage;

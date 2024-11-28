import { Fade } from "react-awesome-reveal";
import { About } from "../../Component/About/About";
import { ChefBanner } from "../../Component/ChefBanner/ChefBanner";
import { Footer } from "../../Component/Footer/Footer";
import { KeyBanner } from "../../Component/KeyBanner/KeyBanner";
import { Slider } from "../../Component/Slider/Slider";
import { TopBanner } from "../../Component/TopBanner/TopBanner";
import { CHEF_OF_THE_WEEK, DISHES, POPULAR_REST } from "../../resources/content";
import useGetRestaurants from "../../hooks/useGetRestaurants";
import useGetDishes from "../../hooks/useGetDishes";

function HomePage() {
  const { restaurants } = useGetRestaurants();
  const { dishes } = useGetDishes();

  return (
    <>
      <Fade delay={150}>
        <TopBanner />
        <Slider title={POPULAR_REST.TITLE} cards={restaurants} />
        <Slider title={DISHES.TITLE} cards={dishes} button={false}/>
        <KeyBanner />
        <ChefBanner chef_id={CHEF_OF_THE_WEEK.CHEF_ID} />
        <About />
        <Footer />
      </Fade>
    </>
  );
}

export default HomePage;

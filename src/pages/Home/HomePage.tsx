import { About } from "../../Component/About/About";
import { ChefBanner } from "../../Component/ChefBanner/ChefBanner";
import { Footer } from "../../Component/Footer/Footer";
import { KeyBanner } from "../../Component/KeyBanner/KeyBanner";
import { Slider } from "../../Component/Slider/Slider";
import { TopBanner } from "../../Component/TopBanner/TopBanner";
import { DISHES, POPULAR_REST } from "../../resources/content";

function HomePage() {


  return (
    <>
      <TopBanner/>
      <Slider title={POPULAR_REST.TITLE} cards={POPULAR_REST.DATA} />
      <Slider title={DISHES.TITLE} cards={DISHES.DATA} />
      <KeyBanner />
      <ChefBanner />
      <About />
      <Footer />
    </>
  )
}

export default HomePage;
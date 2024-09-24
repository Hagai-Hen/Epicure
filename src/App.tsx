import { Navbar } from "./Component/Navbar/Navbar";
import { TopBanner } from "./Component/TopBanner/TopBanner";
import { Slider } from "./Component/Slider/Slider";
import { POPULAR_REST, DISHES } from "./resources/content";
import { Fade } from "react-awesome-reveal";
import { ChefBanner } from "./Component/ChefBanner/ChefBanner";
import { About } from "./Component/About/About";
import { Footer } from "./Component/Footer/Footer";
import { KeyBanner } from "./Component/KeyBanner/KeyBanner";

function App() {
  return (
    <>
      <Navbar />
      <TopBanner />
      <Fade delay={200}>
        <Slider title={POPULAR_REST.TITLE} cards={POPULAR_REST.DATA} />
        <Slider title={DISHES.TITLE} cards={DISHES.DATA} />
        <KeyBanner />
        <ChefBanner />
        <About />
        <Footer />
      </Fade>
    </>
  );
}

export default App;

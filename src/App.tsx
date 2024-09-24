import { Navbar } from "./Component/Navbar/Navbar";
import { TopBanner } from "./Component/TopBanner/TopBanner";
import { Slider } from "./Component/Slider/Slider";
import { POPULAR_REST, DISHES } from "./resources/content";
import { KeyBanner } from "./Component/KeyBanner/KeyBanner";
import { ChefBanner } from "./Component/ChefBanner/ChefBanner";

function App() {
  return (
    <>
      <Navbar />
      <TopBanner />
      <Slider title={POPULAR_REST.TITLE} cards={POPULAR_REST.DATA} />
      <Slider title={DISHES.TITLE} cards={DISHES.DATA} />
      <KeyBanner />
      <ChefBanner />
    </>
  );
}

export default App;

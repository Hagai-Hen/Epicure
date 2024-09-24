import { Navbar } from "./Component/Navbar/Navbar";
import { TopBanner } from "./Component/TopBanner/TopBanner";
import { Slider } from "./Component/Slider/Slider";
import { POPULAR_REST, DISHES } from "./resources/content";

function App() {
  return (
    <>
      <Navbar />
      <TopBanner />
      <Slider title={POPULAR_REST.TITLE} cards={POPULAR_REST.DATA} />
      <Slider title={DISHES.TITLE} cards={DISHES.DATA} />
    </>
  );
}

export default App;

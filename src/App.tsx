import { Navbar } from "./Component/Navbar/Navbar";
import { TopBanner } from "./Component/TopBanner/TopBanner";
import "swiper/css";
import { CARDS } from "./resources/content";
import { SwiperComponent } from "./Component/Swiper/Swiper";

function App() {
  return (
    <>
      <Navbar />
      <TopBanner />
      <div style={{width: '400px'}}>
      <SwiperComponent cards={CARDS}/>
      </div>
    </>
  );
}

export default App;

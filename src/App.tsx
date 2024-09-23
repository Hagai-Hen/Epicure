import { Navbar } from "./Component/Navbar/Navbar"
import { TopBanner } from "./Component/TopBanner/TopBanner"
import CardPic from './assets/pictures/card_pic.svg';
import { Card } from "./Component/Card/Card";

function App() {

  return (
    <>
      <Navbar />
      <TopBanner />
      <div style={{width: '245px'}}>
      <Card pic={CardPic} title="Claro" desc="Ran Shmueli" rate={3}/>
      </div>
    </>
  )
}

export default App

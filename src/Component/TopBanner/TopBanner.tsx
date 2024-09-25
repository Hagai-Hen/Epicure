import "./styles.scss";
import TopBannerPic from '../../assets/pictures/topbanner.svg';
import { SearchBanner } from "./SearchBanner";
import { TOP_BANNER } from "../../resources/content";


export const TopBanner = () => {

  return (
    <div className="top_banner">
      <img src={TopBannerPic} />
      <SearchBanner description={TOP_BANNER.DESC}/>
    </div>
  );
};

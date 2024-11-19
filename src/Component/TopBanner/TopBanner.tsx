import "./styles.scss";
import TopBannerPic from "../../assets/pictures/topbanner.svg";
import TopBannerPicLarge from "../../assets/pictures/top_banner.svg";
import { SearchBanner } from "./SearchBanner";
import { TOP_BANNER } from "../../resources/content";

export const TopBanner = () => {
  return (
    <div className="top_banner">
      <img src={TopBannerPicLarge} className="large_pic" />
      <img src={TopBannerPic} className="small_pic" />
      <SearchBanner description={TOP_BANNER.DESC} />
    </div>
  );
};

import "./styles.scss";
import TopBannerPic from "../../assets/pictures/topbanner.svg";
import TopBannerPicLarge from "../../assets/pictures/top_banner.svg";
import { SearchBanner } from "./SearchBanner";
import { TOP_BANNER } from "../../resources/content";
import { useState, useEffect } from "react";

export const TopBanner = () => {
  const [bannerImage, setBannerImage] = useState(TopBannerPic);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 786) {
        setBannerImage(TopBannerPicLarge);
      } else {
        setBannerImage(TopBannerPic);
      }
    };

    // Set initial image based on current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="top_banner">
      <img src={bannerImage} />
      <SearchBanner description={TOP_BANNER.DESC} />
    </div>
  );
};

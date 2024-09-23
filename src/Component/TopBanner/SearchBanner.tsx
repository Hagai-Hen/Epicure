import "./styles.scss";
import SearchIcon from '../../assets/icons/search.svg';
import { TOP_BANNER } from "../../resources/content";


interface TopBannerProps {
    description: string;
}
export const SearchBanner = ({description}: TopBannerProps) => {

  return (

      <section className="search_container">
        <h3 className="search_text">{description}</h3>
        <section>
        <img src={SearchIcon} className="icon"/>
        </section>
        <input className="search_input" placeholder={TOP_BANNER.PLACE_HOLDER}/>
      </section>
  );
};
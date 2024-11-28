import CardPic from "../assets/pictures/card_pic.svg";
import SpicyIcon from "../assets/icons/spicy.svg";
import VeganIcon from "../assets/icons/vegan.svg";
import VegitarianIcon from "../assets/icons/vegetarian.svg";
import ChefPic from '../assets/pictures/chef.svg';
import AboutLogo from '../assets/icons/about_logo.svg';
import AppStoreIcon from '../assets/icons/app_store.svg';
import GooglePlay from '../assets/icons/google_play.svg';
import KitchenMarketPic from '../assets/pictures/kitchen_market.svg';
import OnzaPic from '../assets/pictures/onza.svg';
import MashyaPic from '../assets/pictures/mashya.svg';
import LuminaPic from '../assets/pictures/lumina.svg';
import TigerPic from '../assets/pictures/tiger-lily.svg';
import PadKiPic from '../assets/pictures/pad_ki_mao.svg';
import GarbanzoPic from '../assets/pictures/garbanzo_frito.svg';
import SmokedPizzaPic from '../assets/pictures/smoked_pizza.svg';


export const NAVBAR = {
  TITLE: "EPICURE",
  RESTAURANTS: "Restaurants",
  CHEFS: "Chefs",
};

export const TOP_BANNER = {
  DESC: "Epicure works with the top chef restaurants in Tel Aviv",
  PLACE_HOLDER: "Search for restaurant cuisine, chef",
};

export const BUTTONS = {
  MENU: [{ title: "Restaurants" }, { title: "Chefs" }],
  FOOTER: [
    { title: "Contact Us" },
    { title: "Term of Use" },
    { title: "Privacy Policy" },
  ],
};

export const POPULAR_REST = {
  TITLE: 'POPULAR RESTAURANT IN EPICURE:',
  ALL: 'All Restaurants',
  DATA: [
    {
      pic: CardPic,
      title: "Claro",
      desc: "Ran Shmueli",
      rate: 4,
    },
    {
      pic: LuminaPic,
      title: "Lumina",
      desc: "Meir Adoni",
      rate: 3,
    },
    {
      pic: TigerPic,
      title: "Tiger Lilly",
      desc: "Yanir Green",
      rate: 4,
    },
  ]
}

export const DISHES = {
  TITLE: 'SIGNATURE DISH OF:',
  ALL: 'All Restaurants',
  DATA: [
    {
      pic: PadKiPic,
      title: "Pad Ki Mao",
      desc: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      price: '88',
      type: SpicyIcon
    },
    {
      pic: GarbanzoPic,
      title: "Garbanzo Frito",
      desc: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
      price: '98',
      type: SpicyIcon
    },
    {
      pic: SmokedPizzaPic,
      title: "Smoked Pizza",
      desc: "Basil dough, cashew 'butter', demi-glace, bison & radish",
      price: '65',
      type: VeganIcon
    },
  ]
}

export const KEY_BANNER = {
  TITLE: 'THE MEANING OF OUR ICONS:',
  SPICY: 'Spicy',
  VEGITARIAN: 'Vegitarian',
  VEGAN: 'Vegan',
  DATA: [{title: 'Spicy', icon: SpicyIcon}, {title: 'Vegitarian', icon: VegitarianIcon}, {title: 'Vegan', icon: VeganIcon}],
}

export const CHEF_OF_THE_WEEK = {
  TITLE: 'CHEF OF THE WEEK:',
  CHEF_TITLE: 'Yossi Shitrit',
  DESC: `Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.`,
  IMG: ChefPic,
  CHEF_REST: `Yossi's Restaurants`,
  REST: [{pic: OnzaPic, title: 'Onza'}, {pic: KitchenMarketPic, title: 'Kitchen Market'}, {pic: MashyaPic, title: 'Mashya'}]
}

export const ABOUT = {
  LOGO: AboutLogo,
  APP_STORE: AppStoreIcon,
  GOOGLE_PLAY: GooglePlay,
  TITLE: 'ABOUT US:',
  DESC: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.<br><br>`


}
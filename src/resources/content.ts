import CardPic from "../assets/pictures/card_pic.svg";
import TypeIcon from '../assets/icons/type.svg';
import SpicyIcon from "../assets/icons/spicy.svg";
import VeganIcon from "../assets/icons/vegan.svg";
import VegitarianIcon from "../assets/icons/vegitarian.svg";
import ChefPic from '../assets/pictures/chef.svg';
import AboutLogo from '../assets/icons/about_logo.svg';
import AppStoreIcon from '../assets/icons/app_store.svg';
import GooglePlay from '../assets/icons/google_play.svg';

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
      desc: "descriprion",
      rate: 3,
    },
    {
      pic: CardPic,
      title: "Claro",
      desc: "descriprion",
      rate: 3,
    },
    {
      pic: CardPic,
      title: "Claro",
      desc: "descriprion",
      rate: 3,
    },
  ]
}

export const DISHES = {
  TITLE: 'SIGNATURE DISH OF:',
  ALL: 'All Restaurants',
  DATA: [
    {
      pic: CardPic,
      title: "Pad Ki Mao",
      desc: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      price: '88',
      type: TypeIcon
    },
    {
      pic: CardPic,
      title: "Garbanzo Frito",
      desc: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
      price: '98',
      type: TypeIcon
    },
    {
      pic: CardPic,
      title: "Smoked Pizza",
      desc: "Basil dough, cashew 'butter', demi-glace, bison & radish",
      price: '65',
      type: TypeIcon
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
}

export const ABOUT = {
  LOGO: AboutLogo,
  APP_STORE: AppStoreIcon,
  GOOGLE_PLAY: GooglePlay,
  TITLE: 'ABOUT US:',
  DESC: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.`


}
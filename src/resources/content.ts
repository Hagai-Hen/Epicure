import CardPic from "../assets/pictures/card_pic.svg";
import TypeIcon from '../assets/icons/type.svg';

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
}
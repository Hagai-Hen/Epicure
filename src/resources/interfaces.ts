export interface CardInterface {
  img: string;
  name: string;
  tags?: string[];
  chef_name?: string;
  ingredients?: string;
  chef?: string;
  desc?: string;
  rate?: number;
  price?: string;
  type?: string;
}

export interface DishInterface {
  name: string;
  price: number;
  ingredients: string;
  tags: string[];
  restaurant: string;
  img?: string;
}

export interface RestaurantInterface {
  name: string;
  img: string;
  chef: string;
  dishes: string[];
}

export interface ChefInterface {
  name: string;
  img: string;
  description: string;
  restaurants: string[];
}

export type CardType = DishInterface | RestaurantInterface | ChefInterface;

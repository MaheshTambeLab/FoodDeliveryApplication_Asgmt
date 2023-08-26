import { Restaurant } from './Restaurant';

export class CartItem {
  constructor(public food: Restaurant) {}
  quantity: number = 1;
  price: number = this.food.price;
}

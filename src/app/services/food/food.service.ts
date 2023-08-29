import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllFoodsByRestaurantID(restaurantID: number): Food[] {
    return this.getAll().filter((food) => food.restaurantID === restaurantID);
  }

  constructor() {}

  getAll(): Food[] {
    return [
      {
        id: 1, //foodID
        restaurantID: 1,
        name: 'Classic Cheeseburger',
        price: 9.99,
        cookTime: '15 minutes',
        favorite: true,
        origins: ['American'],
        stars: 4.4,
        imageUrl: '/assets/images/foods/engin-akyurt-g1MG9i0ux8Y-unsplash.jpg',
      },
      {
        id: 2,
        restaurantID: 1,
        name: 'Fish and Chips',
        price: 13.99,
        cookTime: '20 minutes',
        favorite: true,
        origins: ['British'],
        stars: 4.7,
        imageUrl:
          '/assets/images/foods/mai-qu-c-tung-lam-HyuvFrHlJZc-unsplash.jpg',
      },
      {
        id: 3,
        restaurantID: 1,
        name: 'Blueberry Pancakes',
        price: 7.99,
        cookTime: '10 minutes',
        favorite: true,
        origins: ['American'],
        stars: 4.8,
        imageUrl:
          '/assets/images/foods/cleo-stracuzza-I-X7DAAcZns-unsplash.jpg',
      },
      {
        id: 4,
        restaurantID: 1,
        name: 'Caesar Salad',
        price: 8.99,
        cookTime: '10 minutes',
        favorite: false,
        origins: ['Italian'],
        stars: 4.2,
        imageUrl:
          '/assets/images/foods/raphael-nogueira-63mHpYEyjCA-unsplash.jpg',
      },
      {
        id: 5,
        restaurantID: 1,
        name: 'Chocolate Milkshake',
        price: 5.49,
        cookTime: '5 minutes',
        favorite: true,
        origins: ['American'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/victor-rutka-4FujjkcI40g-unsplash.jpg',
      },
      {
        id: 6,
        restaurantID: 1,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/quin-engle-lHUdfk5WGXc-unsplash.jpg',
      },

      {
        id: 7,
        restaurantID: 2,
        name: 'Grilled Chicken Sandwich',
        price: 12.99,
        cookTime: '20 minutes',
        favorite: true,
        origins: ['American'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/victoria-shes-UC0HZdUitWY-unsplash.jpg',
      },
      {
        id: 8,
        restaurantID: 2,
        name: 'Pasta Carbonara',
        price: 15.49,
        cookTime: '25 minutes',
        favorite: false,
        origins: ['Italian'],
        stars: 4.2,
        imageUrl: '/assets/images/foods/ben-lei-flFd8L7_B3g-unsplash.jpg',
      },
      {
        id: 9,
        restaurantID: 2,
        name: 'Sizzling Steak Fajitas',
        price: 18.99,
        cookTime: '30 minutes',
        favorite: true,
        origins: ['Mexican'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/alex-munsell-auIbTAcSH6E-unsplash.jpg',
      },
      {
        id: 9,
        restaurantID: 3,
        name: 'Fried Chicken',
        price: 10.99,
        cookTime: '30 minutes',
        favorite: true,
        origins: ['Southern'],
        stars: 4.6,
        imageUrl: '/assets/images/foods/lucas-andrade-3Uj0GwVmOeY-unsplash.jpg',
      },
      {
        id: 10,
        restaurantID: 3,
        name: 'Shrimp and Grits',
        price: 14.99,
        cookTime: '25 minutes',
        favorite: false,
        origins: ['Southern'],
        stars: 4.3,

        imageUrl:
          '/assets/images/foods/pirata-studio-film-qt6b5042lrw-unsplash.jpg',
      },
      {
        id: 11,
        restaurantID: 3,
        name: 'Biscuits and Gravy',
        price: 8.49,
        cookTime: '20 minutes',
        favorite: true,
        origins: ['Southern'],
        stars: 4.7,
        imageUrl:
          '/assets/images/foods/fernanda-martinez-K0usVR9Iavs-unsplash.jpg',
      },
    ];
  }
}

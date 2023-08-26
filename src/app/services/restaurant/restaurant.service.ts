import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  getRestaurantById(id: number): Restaurant {
    return this.getAllRestaurants().find((food) => food.id == id)!;
  }

  getAllRestaurantsBySearchTerm(searchTerm: string): Restaurant[] {
    return this.getAllRestaurants().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  constructor() {}

  getAllRestaurants(): Restaurant[] {
    return [
      {
        id: 1,
        name: 'Classic Diner Delights',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/restaurant/restaurant-1.jpg',

        restaurantAddress: {
          street: '123 Main St',
          pincode: '12345',
          city: 'Exampleville',
          contact: {
            phone: '555-1234',
            email: 'example@example.com',
          },
        },
      },
      {
        id: 2,
        name: 'Urban Bistro & Grill',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/restaurant/restaurant-2.jpg',
        restaurantAddress: {
          street: '123 Main St',
          pincode: '12345',
          city: 'Exampleville',
          contact: {
            phone: '555-1234',
            email: 'example@example.com',
          },
        },
      },
      {
        id: 3,
        name: 'Southern Comfort Eats',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/restaurant/restaurant-3.jpg',

        restaurantAddress: {
          street: '456 Elm Ave',
          pincode: '67890',
          city: 'Sampleburg',
          contact: {
            phone: '555-5678',
            email: 'sample@example.com',
          },
        },
      },
      {
        id: 4,
        name: 'Coastal Seafood Haven',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/restaurant/restaurant-4.jpg',

        restaurantAddress: {
          street: '789 Oak Rd',
          pincode: '54321',
          city: 'Townsville',
          contact: {
            phone: '555-9876',
            email: 'town@example.com',
          },
        },
      },
      {
        id: 5,
        name: 'Farmhouse Table Fare',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/restaurant/restaurant-5.jpg',
        restaurantAddress: {
          street: '101 Pine Lane',
          pincode: '13579',
          city: 'Villagetown',
          contact: {
            phone: '555-2468',
            email: 'village@example.com',
          },
        },
      },
      {
        id: 6,
        name: 'Big City BBQ House',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/restaurant/restaurant-6.jpg',
        restaurantAddress: {
          street: '222 Maple Street',
          pincode: '86420',
          city: 'Mapleville',
          contact: {
            phone: '555-8888',
            email: 'maple@example.com',
          },
        },
      },
      {
        id: 7,
        name: 'Gourmet Fusion Cafe',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/restaurant/restaurant-7.jpg',
        restaurantAddress: {
          street: '333 Cedar Avenue',
          pincode: '97531',
          city: 'Cedarville',
          contact: {
            phone: '555-5555',
            email: 'cedar@example.com',
          },
        },
      },
      {
        id: 8,
        name: 'Savory Steakhouse Grill',
        price: 9,
        cookTime: '40-50',
        favorite: true,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/restaurant/restaurant-8.jpg',
        restaurantAddress: {
          street: '444 Birch Drive',
          pincode: '24680',
          city: 'Birchwood',
          contact: {
            phone: '555-1111',
            email: 'birch@example.com',
          },
        },
      },
      {
        id: 9,
        name: 'Modern American Tavern',
        price: 9,
        cookTime: '40-50',
        favorite: true,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/restaurant/restaurant-9.jpg',
        restaurantAddress: {
          street: '555 Pine Street',
          pincode: '56789',
          city: 'Pineville',
          contact: {
            phone: '555-7777',
            email: 'pine@example.com',
          },
        },
      },
    ];
  }
}

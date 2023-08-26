import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { Tag } from 'src/app/shared/models/Tag';

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

  getAllRestaurantsByTag(tag: string): Restaurant[] {
    return tag == 'All'
      ? this.getAllRestaurants()
      : this.getAllRestaurants().filter((food) => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  constructor() {}

  // getAll(): Observable<Food[]> {
  //   return this.http.get<Food[]>(FOODS_URL);
  // }

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
        tags: ['FastFood', 'Pizza', 'Lunch'],
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
        tags: ['SlowFood', 'Lunch'],
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
        tags: ['FastFood', 'Hamburger'],
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
        tags: ['FastFood', 'Fry'],
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
        tags: ['SlowFood', 'Soup'],
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
        tags: ['FastFood', 'Pizza', 'Lunch'],
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
        tags: ['FastFood', 'Pizza', 'Lunch'],
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
        tags: ['FastFood', 'Pizza', 'Lunch'],
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
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}

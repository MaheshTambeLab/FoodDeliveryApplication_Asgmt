import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';
import { Order } from 'src/app/shared/models/Order';

const mockRestaurants: Food[] = [
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
    imageUrl: '/assets/images/foods/mai-qu-c-tung-lam-HyuvFrHlJZc-unsplash.jpg',
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
    imageUrl: '/assets/images/foods/cleo-stracuzza-I-X7DAAcZns-unsplash.jpg',
  },
  // Add more mock restaurants as needed
];

// Mock order data
const mockOrders: Order[] = [
  {
    id: 1,
    items: [new CartItem(mockRestaurants[0]), new CartItem(mockRestaurants[1])],
    totalPrice: 35,
    name: 'John Doe',
    address: '123 Main St',
    paymentId: 'payment-123',
    createdAt: '2023-08-23T12:34:56Z',
    status: 'Pending',
  },
  {
    id: 2,
    items: [new CartItem(mockRestaurants[1])],
    totalPrice: 20,
    name: 'Jane Smith',
    address: '456 Elm St',
    paymentId: 'payment-456',
    createdAt: '2023-08-24T10:15:30Z',
    status: 'Delivered',
  },
  // Add more mock orders as needed
];

export const mockData = {
  restaurants: mockRestaurants,
  orders: mockOrders,
};

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  getOrders(): Observable<Order[]> {
    return of(mockOrders);
  }

  trackOrderById(id: number): Observable<Order | undefined> {
    const order = mockOrders.find((order) => order.id === id);
    return of(order);
  }
}

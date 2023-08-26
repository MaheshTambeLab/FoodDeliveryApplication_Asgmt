import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Order } from 'src/app/shared/models/Order';
import { Restaurant } from 'src/app/shared/models/Restaurant';

// const mockOrders: Order[] = [
//   // Your mock order data here
// ];

const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Restaurant A',
    price: 15,
    favorite: false,
    stars: 4,
    imageUrl: 'restaurant-a.jpg',
    origins: ['Italian', 'Mexican'],
    cookTime: '30 minutes',
  },
  {
    id: 2,
    name: 'Restaurant B',
    price: 20,
    favorite: true,
    stars: 5,
    imageUrl: 'restaurant-b.jpg',
    origins: ['Asian'],
    cookTime: '45 minutes',
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

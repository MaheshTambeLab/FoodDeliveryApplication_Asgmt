import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  private getCartFromLocalStorage(): Order {
    const orderJson = localStorage.getItem('Order');
    return orderJson ? JSON.parse(orderJson) : new Order();
  }

  public setOrderToLocalStorage1(orderId: string, order: Order): void {
    const orderJson = JSON.stringify(order);
    localStorage.setItem(orderId, orderJson);
  }

  public getOrderFromLocalStorage(orderId: string): Order {
    const orderJson = localStorage.getItem(orderId);
    if (orderJson) return JSON.parse(orderJson) as Order;
    return new Order();
  }

  generateOrderId(): number {
    const min = 1000; // Minimum 4-digit number
    const max = 9999; // Maximum 4-digit number
    const orderId = Math.floor(Math.random() * (max - min + 1)) + min;
    return orderId;
  }
}

import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/Order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order/order.service';
import { CartService } from '../services/cart/cart.service';

interface OrderStatus {
  text: string;
  icon: string;
}

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css'],
})
export class OrderTrackPageComponent implements OnInit {
  orderStatuses: OrderStatus[] = [
    { text: 'Order Received', icon: 'fa-shopping-cart' },
    { text: 'Preparing', icon: 'fa-cog' },
    { text: 'Out for Delivery', icon: 'fa-truck' },
    { text: 'Delivered', icon: 'fa-check-circle' },
  ];

  currentStatusIndex: number = 1; // Change this value to track the order status

  constructor() {}

  ngOnInit(): void {}
}

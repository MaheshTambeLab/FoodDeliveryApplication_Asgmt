import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { OrderStatus } from '../shared/models/OrderStatus';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css'],
})
export class OrderTrackPageComponent implements OnInit {
  orderStatuses!: OrderStatus[];

  @Input() currentStatus!: number; // Pass the current status index from parent component

  constructor(private orderService: OrderService) {
    this.orderStatuses = this.orderService.orderStatuses;
  }

  ngOnInit(): void {}

  getStatusClass(index: number, currentStatus: number): string {
    currentStatus = 2;

    if (index === currentStatus) {
      return 'current';
    } else if (index < currentStatus) {
      return 'completed';
    } else {
      return 'next';
    }
  }

  toggleCollapse(index: number): void {
    this.orderService.orderStatuses[index].isExpanded =
      !this.orderService.orderStatuses[index].isExpanded;
  }
}

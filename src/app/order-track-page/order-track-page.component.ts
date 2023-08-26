import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/Order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order/order.service';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css'],
})
export class OrderTrackPageComponent implements OnInit {
  order!: Order | undefined;
  constructor(
    activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {
    const params = activatedRoute.snapshot.params;
    if (!params['orderId']) return;
  }

  ngOnInit() {
    const orderId = 1;
    this.trackOrder(orderId);
  }

  trackOrder(id: number) {
    this.orderService.trackOrderById(id).subscribe((order) => {
      this.order = order;
    });
  }
}

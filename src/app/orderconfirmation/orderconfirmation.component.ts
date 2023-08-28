import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/Order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order/order.service';
import { CartService } from '../services/cart/cart.service';
import { AddressService } from '../services/user/address.service';
import { Address } from '../shared/models/Address';

@Component({
  selector: 'app-orderconfirmation',
  templateUrl: './orderconfirmation.component.html',
  styleUrls: ['./orderconfirmation.component.css'],
})
export class OrderconfirmationComponent implements OnInit {
  order!: Order | any;
  orderId!: string;
  address!: Address;
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private cartService: CartService,
    private addressService: AddressService
  ) {
    const params = activatedRoute.snapshot.params;

    if (params['orderId']) {
      this.orderId = params['orderId'];
    }
    this.address = this.addressService.getAddress(1);
  }

  ngOnInit() {
    this.trackOrder(this.orderId);
  }

  trackOrder(id: string) {
    this.order = this.orderService.getOrderFromLocalStorage(id);
    this.cartService.clearCart();
  }
}

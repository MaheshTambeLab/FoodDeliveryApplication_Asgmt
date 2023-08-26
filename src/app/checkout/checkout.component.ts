import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Order } from '../shared/models/Order';
import { AuthService } from '../services/auth/auth.service';
import { OrderService } from '../services/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  constructor(
    cartService: CartService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    let { name, address, email } = this.authService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      email: [email, Validators.required],
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    const orderId = this.orderService.generateOrderId();
    this.order.id = orderId;
    this.orderService.setOrderToLocalStorage1(orderId.toString(), this.order);
    this.router.navigate(['order-confirmed/' + orderId]);
  }
}

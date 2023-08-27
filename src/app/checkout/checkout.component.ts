import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Order } from '../shared/models/Order';
import { AuthService } from '../services/auth/auth.service';
import { OrderService } from '../services/order/order.service';
import { Address } from '../shared/models/Address';
import { AddressService } from '../services/user/address.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  addresses: Address[] = [];
  selectedAddressControl: FormControl;
  constructor(
    cartService: CartService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router,
    private addressService: AddressService
  ) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
    this.addresses = addressService.getAddresses();
    // this.selectedAddressControl = new FormControl(null);
    this.selectedAddressControl = new FormControl(null);
    this.checkoutForm = this.formBuilder.group({
      email: [''],
      newStreet: [''],
      newCity: [''],
      newState: [''],
      newPostalCode: [''],
    });
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

  // createOrder() {
  //   const orderId = this.orderService.generateOrderId();
  //   this.order.id = orderId;
  //   this.orderService.setOrderToLocalStorage1(orderId.toString(), this.order);
  //   this.router.navigate(['order-confirmed/' + orderId]);
  // }

  createOrder() {
    const orderId = this.orderService.generateOrderId();
    this.order.id = orderId;
    this.orderService.setOrderToLocalStorage1(orderId.toString(), this.order);
    const selectedAddressValue = this.selectedAddressControl.value;
    if (selectedAddressValue === 'new') {
      const newAddress: Address = {
        id: orderId,
        street: this.checkoutForm.value.newStreet,
        city: this.checkoutForm.value.newCity,
        state: this.checkoutForm.value.newState,
        postalCode: this.checkoutForm.value.newPostalCode,
      };
      // Handle adding the new address to your addresses array
      this.addresses.push(newAddress);
    } else if (selectedAddressValue) {
      // Process the order with the selected address
    }
    this.router.navigate(['order-confirmed/' + orderId]);
  }
}

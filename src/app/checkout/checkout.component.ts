import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Order } from '../shared/models/Order';
import { AuthService } from '../services/auth/auth.service';

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
    // private toastrService: ToastrService,
    // private orderService: OrderService,
    private router: Router
  ) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    console.log('******** ' + this.order.items);
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
    this.router.navigate(['track/1']);

    if (this.checkoutForm.invalid) {
      // this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    // if(!this.order.addressLatLng){
    //   this.toastrService.warning('Please select your location on the map', 'Location');
    //   return;
    // }

    this.order.name = this.fc['email'].value;
    this.order.address = this.fc['address'].value;

    // this.orderService.create(this.order).subscribe({
    //   next:() => {
    //     this.router.navigateByUrl('/payment');
    //   },
    //   error:(errorResponse: { error: any; }) => {
    //     this.toastrService.error(errorResponse.error, 'Cart');
    //   }
    // })
  }
}
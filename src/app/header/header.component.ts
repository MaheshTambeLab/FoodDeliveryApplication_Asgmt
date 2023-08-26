import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { CartService } from '../services/cart/cart.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;
  user!: User;
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {
    authService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }

  get isAuth() {
    return this.user.uid;
  }
}

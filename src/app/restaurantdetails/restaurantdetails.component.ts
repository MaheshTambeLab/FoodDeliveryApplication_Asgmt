import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../shared/models/Restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant/restaurant.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-restaurantdetails',
  templateUrl: './restaurantdetails.component.html',
  styleUrls: ['./restaurantdetails.component.css'],
})
export class RestaurantdetailsComponent implements OnInit {
  restaurant!: Restaurant;
  activeTab: string = 'menu'; // Initialize the active tab as 'menu'

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private router: Router,
    private cartService: CartService
  ) {
    activatedRoute.params.subscribe((params) => {
      console.log('RestaurantdetailsComponent :' + params['id']);
      if (params['id'])
        this.restaurant = restaurantService.getRestaurantById(params['id']);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.restaurant);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {}
}

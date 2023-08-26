import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  foods: Food[] = [];
  food!: Food;
  route: ActivatedRoute | null | undefined;

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap.subscribe((params) => {
      const restaurantID = params.get('id');
      if (restaurantID) {
        this.foods = this.foodService.getAllFoodsByRestaurantID(+restaurantID);
      }
    });
  }

  addToCart(food: Food) {
    this.activatedRoute.params.subscribe((params) => {
      if (food.id) this.food = this.foodService.getFoodById(food.id);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Router Navigation:', event.url);
      }
    });

    this.cartService.addToCart(this.food);
  }
}

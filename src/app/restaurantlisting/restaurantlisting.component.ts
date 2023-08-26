import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant/restaurant.service';
import { Restaurant } from '../shared/models/Restaurant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurantlisting',
  templateUrl: './restaurantlisting.component.html',
  styleUrls: ['./restaurantlisting.component.css'],
})
export class RestaurantlistingComponent implements OnInit {
  restaurants: Restaurant[] = [];
  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.restaurants = this.restaurantService.getAllRestaurantsBySearchTerm(
          params['searchTerm']
        );
      else if (params['tag'])
        this.restaurants = this.restaurantService.getAllRestaurantsByTag(
          params['tag']
        );
      else this.restaurants = this.restaurantService.getAllRestaurants();
    });
  }
}

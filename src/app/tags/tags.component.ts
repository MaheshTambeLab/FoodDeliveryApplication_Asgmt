import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { RestaurantService } from '../services/restaurant/restaurant.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?: string[];
  tags?: Tag[];
  constructor(private restaurantService: RestaurantService) {}
  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.restaurantService.getAllTags();
  }
}

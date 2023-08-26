import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerReview } from '../shared/models/CustomerReview';
import { CutsomerreviewService } from '../services/cutsomerreview/cutsomerreview.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  customerReview: CustomerReview[] = [];

  constructor(
    private cutsomerreviewService: CutsomerreviewService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap.subscribe((params) => {
      const restaurantID = params.get('id');
      if (restaurantID) {
        this.customerReview =
          this.cutsomerreviewService.getAllCustomerReviewsByRestaurantID(
            +restaurantID
          );
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { CustomerReview } from 'src/app/shared/models/CustomerReview';

@Injectable({
  providedIn: 'root',
})
export class CutsomerreviewService {
  constructor() {}

  getAllCustomerReviewsByRestaurantID(restaurantID: number): CustomerReview[] {
    return this.getAll().filter(
      (restaurant) => restaurant.restaurantID === restaurantID
    );
  }

  getAll(): CustomerReview[] {
    return [
      {
        id: 1, //CustomerReview Id
        restaurantID: 1,
        name: 'Rohan Kapoor',
        stars: 4.5,
        imageUrl: '/assets/images/customer/avatar-3637425_1280.png',
        comment:
          'Effortless online ordering brought the flavors of my favorite restaurant right to my doorstep – a culinary escape at the click of a button.',
      },
      {
        id: 2,
        restaurantID: 1,
        name: 'Priya Patel',
        stars: 4.7,
        imageUrl: '/assets/images/customer/female-296990_1280.png',
        comment:
          'From browsing the menu online to doorstep delivery, the process was seamless, making my dinner a delightful hassle-free experience.',
      },
      {
        id: 3,
        restaurantID: 2,
        name: 'Aryan Sharma',
        stars: 3.5,
        imageUrl: '/assets/images/customer/avatar-3637425_1280.png',
        comment:
          'Savoring restaurant-quality dishes at home was a game-changer, with my taste buds dancing to the tune of freshly delivered delights.',
      },
      {
        id: 4,
        name: 'Nisha Singh',
        restaurantID: 3,
        stars: 3.3,
        imageUrl: '/assets/images/customer/female-296990_1280.png',
        comment:
          'The convenience of ordering food online met my cravings with precision, allowing me to relish a restaurant-style experience from my couch.',
      },
      {
        id: 5,
        name: 'Avtar Human',
        restaurantID: 4,
        stars: 3.0,
        imageUrl: '/assets/images/customer/avatar-3637425_1280.png',
        comment:
          'The online order experience was a flavor-packed journey that bridged the distance between me and the restaurant s delectable offerings',
      },
      {
        id: 6,
        name: 'Rajiv Mehta',
        restaurantID: 4,
        stars: 4.0,
        imageUrl: '/assets/images/customer/avatar-3637425_1280.png',
        comment:
          'With a few clicks, I was transported to a realm of culinary delight, as my online order arrived with flavors that exceeded expectations.',
      },
    ];
  }
}

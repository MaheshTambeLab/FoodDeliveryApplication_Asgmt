export class RestaurantAddress {
  street!: string;
  pincode!: string;
  city!: string;
  contact!: ContactInfo;
}

export class ContactInfo {
  phone!: string;
  email!: string;
}
export class Restaurant {
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
  restaurantAddress!: RestaurantAddress;
}

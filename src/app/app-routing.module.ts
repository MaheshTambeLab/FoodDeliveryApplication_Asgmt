import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantlistingComponent } from './restaurantlisting/restaurantlisting.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MenuComponent } from './menu/menu.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './fotgot-password/fotgot-password.component';
import { OrderTrackPageComponent } from './order-track-page/order-track-page.component';

const routes: Routes = [
  // { path: 'restaurantlist', loadChildren: () => import('./restaurantlisting/restaurantlisting.module').then(m => m.RestaurantlistingModule) }
  { path: '', component: RestaurantlistingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'search/:searchTerm', component: RestaurantlistingComponent },
  { path: 'tag/:tag', component: RestaurantlistingComponent },
  {
    path: 'restaurant-detail/:id',
    component: RestaurantdetailsComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent },
    ],
  },
  { path: 'cart-page', component: ShoppingcartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'track/:orderId', component: OrderTrackPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

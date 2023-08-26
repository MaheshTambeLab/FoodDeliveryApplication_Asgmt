import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';
import { RestaurantlistingComponent } from './restaurantlisting/restaurantlisting.component';
import { StarratingComponent } from './starrating/starrating.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './fotgot-password/fotgot-password.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { TextInputComponentimplements } from './text-input/text-input.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { OrderItemsListComponent } from './order-items-list/order-items-list.component';
import { OrderTrackPageComponent } from './order-track-page/order-track-page.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantdetailsComponent,
    RestaurantlistingComponent,
    StarratingComponent,
    ShoppingcartComponent,
    NotFoundComponent,
    CheckoutComponent,
    TitleComponent,
    MenuComponent,
    ReviewsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MenuComponent,
    InputContainerComponent,
    TextInputComponentimplements,
    InputValidationComponent,
    OrderItemsListComponent,
    OrderTrackPageComponent,
    OrderconfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

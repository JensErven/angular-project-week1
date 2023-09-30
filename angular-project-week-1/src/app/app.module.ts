import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { ShoppingComponent } from './shopping/shopping.component';
import { SuccessComponent } from './success/success.component';
import { CancelPaymentComponent } from './cancel-payment/cancel-payment.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    CartComponent,
    ShoppingComponent,
    SuccessComponent,
    CancelPaymentComponent,
    CheckoutComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { SuccessComponent } from './success/success.component';
import { CancelPaymentComponent } from './cancel-payment/cancel-payment.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'success-payment', component: SuccessComponent },
  { path: 'cancel-payment', component: CancelPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

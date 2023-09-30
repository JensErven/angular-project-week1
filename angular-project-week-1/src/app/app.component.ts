import { Component } from '@angular/core';
import { CartService } from './cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-project-week-1';

  constructor(private cartService: CartService) {}

  get cartItemCount() {
    return this.cartService.getCartItemCount();
  }
}

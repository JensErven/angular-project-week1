import { Injectable } from '@angular/core';
import { ClothingItem } from './models/clothing-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: ClothingItem[] = [];

  constructor() {
    // Retrieve cart items from local storage when the service is initialized
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }
  addToCart(item: ClothingItem) {
    this.cartItems.push(item);
    item.quantity += 1;
    this.updateLocalStorage();
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartItemCount() {
    return this.cartItems.length;
  }

  removeItem(item: ClothingItem) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage() {
    // Store the cart items in local storage as a JSON string
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}

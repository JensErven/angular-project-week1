import { Injectable } from '@angular/core';
import { ClothingItem } from './interfaces/clothingItemModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: ClothingItem[] = [];

  addToCart(item: ClothingItem) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }
}

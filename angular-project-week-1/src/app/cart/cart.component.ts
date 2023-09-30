import { Component } from '@angular/core';
import { ClothingItem } from '../models/clothing-item.model';
import { CartService } from '../cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient and HttpHeaders

import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: ClothingItem[] = [];

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getCartItems();
  }
  /*
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }*/

  incrementQuantity(item: ClothingItem) {
    item.quantity += 1;
  }

  // Function to decrement the quantity of an item
  decrementQuantity(item: ClothingItem) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }
  removeFromCart(item: ClothingItem) {
    this.cartService.removeItem(item);
  }

  formatPrice(price: number): string {
    return (price / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'EUR',
    });
  }

  getTotalPrice(): string {
    const totalAmount = this.cartItems.reduce(
      (total, item) => total + item.price.unit_amount * item.quantity,
      0
    );
    return this.formatPrice(totalAmount);
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }

  onSubmit() {
    // Create an object to hold form data

    // Replace 'priceId' and 'quantity' with actual values from your cart

    // Set the headers for the request
    const headers = {
      'Content-Type': 'application/json', // Adjust this to match your API's expected content type
      // Add other headers if needed
    };

    // Define the URL for your API endpoint
    const apiUrl = 'http://localhost:3000/api/paymentshipping'; // Replace with your API URL

    // Create the request body
    const requestBody = {
      products: this.cartItems.map((item) => ({
        priceId: item.price.id,
        quantity: item.quantity, // Assuming you have a 'quantity' property in your 'ClothingItem' model
      })),
    };
    // Use Axios to send the POST request
    axios
      .post(apiUrl, requestBody, { headers })
      .then((response) => {
        // Handle the success response here
        console.log('Payment success!', response.data);
        window.location.assign(response.data.sessionUrl);
        // Redirect the user to the success URL or perform any other actions
      })
      .catch((error) => {
        // Handle errors here
        console.error('Payment error:', error);
        // You can display an error message to the user or take appropriate actions
      });
  }
}

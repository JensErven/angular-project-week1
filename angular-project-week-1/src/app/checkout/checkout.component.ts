import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient and HttpHeaders
import axios from 'axios';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  name: string = '';
  addressLine1: string = '';
  addressLine2: string = '';
  city: string = '';
  state: string = '';
  postalCode: string = '';
  country: string = '';

  constructor(private apiService: ApiService, private httpClient: HttpClient) {}

  // Create a method to handle form submission
  onSubmit() {
    // Create an object to hold form data
    const shippingAddress = {
      name: this.name,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      city: this.city,
      state: this.state,
      postalCode: this.postalCode,
      country: this.country,
    };
    // Replace 'priceId' and 'quantity' with actual values from your cart
    const priceId = 'price_1Nw4teEsMKMbbRb58GJtT01h';
    const quantity = 1; // Change this based on the quantity in your cart
    console.log('Request Data:', { priceId, quantity, shippingAddress });

    // Set the headers for the request
    const headers = {
      'Content-Type': 'application/json', // Adjust this to match your API's expected content type
      // Add other headers if needed
    };

    // Define the URL for your API endpoint
    const apiUrl = 'http://localhost:3000/api/paymentshipping'; // Replace with your API URL

    // Create the request body
    const requestBody = {
      products: [
        {
          priceId: 'price_1NwApNEsMKMbbRb5jPAAOoJq', // Price ID for product 1
          quantity: 2, // Quantity for product 1
        },
        {
          priceId: 'price_1NuuW2EsMKMbbRb5pSKzFcJJ', // Price ID for product 2
          quantity: 1, // Quantity for product 2
        },
        // Add more products as needed
      ],
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Update with your API URL

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }

  makePayment(data: any) {
    console.log('Making payment with data:', data); // Log the data being sent to the API

    return this.http.post(`${this.apiUrl}/paymentshipping`, data);
  }
}

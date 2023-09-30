import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ClothingItem } from '../models/clothing-item.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  products: ClothingItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Fetch products from the API when the component initializes
    this.apiService.getProducts().subscribe(
      (data: any) => {
        // Handle successful response
        if (Array.isArray(data)) {
          this.products = data as ClothingItem[];
          console.log(this.products);
        } else {
          console.error('Invalid API response structure');
        }
      },
      (error) => {
        // Handle the error response
        console.error('Error fetching products:', error);
      }
    );
  }
}

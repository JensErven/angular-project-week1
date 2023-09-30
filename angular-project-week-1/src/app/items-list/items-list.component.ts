import { Component, Input, OnInit } from '@angular/core';
import { ClothingItem } from '../models/clothing-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  @Input() clothingItems: ClothingItem[] = [];

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    // Log the clothingItems array when the component initializes
    console.log('Clothing Items:', this.clothingItems);
  }
  formatPrice(price: number): string {
    return (price / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'EUR',
    });
  }

  addToCart(item: ClothingItem) {
    this.cartService.addToCart(item);
  }
}

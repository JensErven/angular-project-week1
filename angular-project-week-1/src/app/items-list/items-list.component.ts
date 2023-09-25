import { Component } from '@angular/core';
import { ClothingItem } from '../interfaces/clothingItemModel';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  clothingItems: ClothingItem[] = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      description:
        'A comfortable and stylish white cotton t-shirt for everyday wear.',
      price: 20.0,
      imageUrl: '/assets/t-shirt-white-abstract.jpeg', // Provide image URLs or adjust as needed
    },
    {
      id: 2,
      name: 'Slim Fit Blue Jeans',
      description: 'Classic denim jeans with a slim fit design.',
      price: 40.0,
      imageUrl: '/assets/t-shirt-white-abstract.jpeg',
    },
    {
      id: 3,
      name: 'Casual Sneakers',
      description: 'Versatile sneakers suitable for various occasions.',
      price: 30.0,
      imageUrl: '/assets/t-shirt-white-abstract.jpeg',
    },
    {
      id: 4,
      name: 'Formal Dress Shirt',
      description: 'A formal dress shirt for professional and special events.',
      price: 45.0,
      imageUrl: '/assets/t-shirt-white-abstract.jpeg',
    },
    {
      id: 5,
      name: 'Athletic Shorts',
      description:
        'Comfortable athletic shorts for workouts and sports activities.',
      price: 25.0,
      imageUrl: '/assets/t-shirt-white-abstract.jpeg',
    },
    {
      id: 6,
      name: 'Formal Dress Shirt',
      description: 'A formal dress shirt for professional and special events.',
      price: 45.0,
      imageUrl: '/assets/t-shirt-white-abstract.jpeg',
    },
    {
      id: 5,
      name: 'Athletic Shorts',
      description:
        'Comfortable athletic shorts for workouts and sports activities.',
      price: 25.0,
      imageUrl: '/assets/t-shirt-white-abstract.jpeg',
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(item: ClothingItem) {
    this.cartService.addToCart(item);
  }
}

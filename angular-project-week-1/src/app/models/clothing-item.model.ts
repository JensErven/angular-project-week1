// clothing-item.model.ts
export interface ClothingItem {
  price: {
    unit_amount: number;
    id: string;
    // Other price properties
  };
  product: {
    id: string;
    name: string;
    description: string;
    // Other product properties
  };
  imageUrl: string;
  quantity: number;
  // Other properties
}

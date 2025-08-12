// src/models/CartItem.ts

export interface CartItem {
  id: string;          // Unique product ID
  name: string;        // Product name
  price: number;       // Price per unit
  quantity: number;    // Quantity in cart
  imageUrl?: string;   // Optional product image URL
  slug?: string;       // Optional product slug for linking
  [key: string]: any;  // Optional additional fields (e.g., size, color)
}

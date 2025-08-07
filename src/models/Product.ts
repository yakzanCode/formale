
export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  priceBeforeSale?: number;
  usage?: string;
  size?: string;
  rating?: number;
  images: { asset: { _id: string; url: string } }[];  // array of images
  isFeatured?: boolean;
  isNew?: boolean;
  inStock?: boolean;
  category?: { name?: string; slug?: string };
}



// my-shop/
// │── src/
// │   ├── components/
// │   │   └── Footer.tsx
// │   │   └── Navbar.tsx
// │   │   └── ProductCard.tsx
// │   │   └── Sidebar.tsx
// │   ├── lib/
// │   │   └── sanity.ts
// │   ├── models/
// │   │   └── Category.ts
// │   │   └── Product.ts
// │   ├── pages/
// │   │   └── Home.tsx
// │   │   └── Product.tsx
// │   │   └── Products.tsx
// │   ├── App.tsx
// │   └── main.tsx




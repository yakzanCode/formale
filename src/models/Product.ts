// models/ProductCard.ts
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
// │   │   └── Carousel.tsx
// │   │   └── Footer.tsx
// │   │   └── Navbar.tsx
// │   │   └── ProductCard.tsx
// │   │   └── ProductHighlights.tsx
// │   │   └── Promobar.tsx
// │   │   └── ScrollTop.tsx
// │   │   └── StarRating.tsx
// │   ├── lib/
// │   │   └── sanity.ts
// │   ├── models/
// │   │   └── Category.ts
// │   │   └── Product.ts
// │   ├── pages/
// │   │   └── Home.tsx
// │   │   └── Product.tsx
// │   │   └── Products.tsx
// │   │   ├── Policies/
// │   │   │   └── PrivacyPolicy.tsx
// │   │   │   └── Disclaimer.tsx
// │   │   │   └── Accessibility.tsx
// │   │   │   └── ReturnPolicy.tsx
// │   │   │   └── Shipping.tsx
// │   │   │   └── TemrsOfUse.tsx
// │   ├── App.css
// │   ├── App.tsx
// │   ├── index.css
// │   ├── main.tsx
// │   ├── Router.tsx
// │   ├── vite-env.d.ts
// │── dist/
// │   └──index.html
// │   └── assets/
// │   └── vite.svg
// │── node_modules/
// │── public/









// src/components/PromoBar.tsx

import React from "react";

export default function PromoBar() {
  return (
    <div id="promoCarousel" className="carousel slide small border-bottom border-dark-subtle py-1" style={{backgroundColor: "#d6d2c4"}} data-bs-ride="carousel">
      <div className="carousel-inner text-center py-2">
        <div className="carousel-item active" data-bs-interval="10000">
           Free shipping on orders over $50!
        </div>
        <div className="carousel-item" data-bs-interval="2000">
           20% OFF on selected items – Today only!
        </div>
        <div className="carousel-item">
           Next-day delivery available in select areas.
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import { fetchProducts } from "../lib/sanity";
// import type { Product } from "../models/Product";
// import ProductCard from "../components/ProductCard";

// export default function Products() {
//   const { slug } = useParams<{ slug?: string }>();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [featuredOnly, setFeaturedOnly] = useState(false);
//   const [sortOption, setSortOption] = useState("default");

//   const categorySlug = slug ?? "all";

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     fetchProducts(categorySlug)
//       .then(setProducts)
//       .catch((err) => {
//         console.error(err);
//         setError("Failed to load products");
//       })
//       .finally(() => setLoading(false));
//   }, [categorySlug]);

//   const heading = categorySlug === "all" ? "ALL PRODUCTS" : categorySlug.toUpperCase();

//   // Apply filter and sort locally
//   const filteredAndSortedProducts = useMemo(() => {
//     let filtered = [...products];

//     if (featuredOnly) {
//       filtered = filtered.filter((p) => p.isFeatured);
//     }

//     switch (sortOption) {
//       case "priceLowHigh":
//         filtered.sort((a, b) => a.price - b.price);
//         break;
//       case "priceHighLow":
//         filtered.sort((a, b) => b.price - a.price);
//         break;
//       case "ratingHighLow":
//         filtered.sort((a, b) => b.rating - a.rating);
//         break;
//       default:
//         break;
//     }

//     return filtered;
//   }, [products, featuredOnly, sortOption]);

//   if (loading) return <div className="p-3">Loading products...</div>;
//   if (error) return <div className="p-3 text-danger">{error}</div>;

//   return (
//     <main className="container-fluid p-3">
//       <h1 className="fw-bold fs-3 text-center">{heading}</h1>
//       <div className="mx-auto mb-5 mt-3 bg-warning pt-1" style={{ width: "70px" }}></div>

//       <div className="row">
//         {/* Sidebar */}
//         <aside className="col-12 col-md-3 mb-4">
//             <div className="d-flex">
//               <span className="mb-3" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample1">
//                 <svg className="me-2 icon-svg icon icon-filter" width={20} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
//                   <path fill-rule="evenodd" d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z" fill="currentColor"></path>
//                 </svg>
//                 Filter and sort
//               </span>
//               <span className="text-muted ms-auto">{filteredAndSortedProducts.length} Products</span>
//             </div>
          


// <div className="offcanvas offcanvas-start" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel">
//   <div className="offcanvas-header">
//     <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
//     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//   </div>

//   <div className="offcanvas-body">
// <div className="form-check mb-2">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id="featuredOnly"
//               checked={featuredOnly}
//               onChange={() => setFeaturedOnly((prev) => !prev)}
//             />
//             <label className="form-check-label" htmlFor="featuredOnly">
//               Featured only
//             </label>
//           </div>
//             <div className="d-flex justify-content-between align-items-center mb-3">
//             <select className="form-select w-auto" value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option value="default">Sort by</option>
//               <option value="priceLowHigh">Price: Low to High</option>
//               <option value="priceHighLow">Price: High to Low</option>
//               <option value="ratingHighLow">Rating: High to Low</option>
//             </select>
//           </div>
//   </div>
// </div>
//         </aside>

//         {/* Products section */}
//         <section className="col-12 col-md-9">
//           <div className="row g-3">
//             {filteredAndSortedProducts.map((product) => (
//               <div className="col-12 col-sm-6 col-md-6 col-xl-4" key={product._id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

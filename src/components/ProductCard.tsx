// ProductCard.tsx
import React, { useState } from "react";
import { urlFor } from "../lib/sanity";
import type { Product } from "../models/Product";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const defaultImage = product.images?.[0] ? urlFor(product.images[0]).width(500).height(500).url() : "";
  const hoverImage = product.images?.[1] ? urlFor(product.images[1]).width(500).height(500).url() : defaultImage;

  const showBestSeller = !!product.isFeatured;
  const categorySlug = product.category?.slug?.toLowerCase?.() ?? "";
  const showFreeShipping = categorySlug === "bundles" || (product.category?.name ?? "").toLowerCase().includes("bundle");

  return (
    <Link
      to={`/products/${product.slug}`}
      className="text-decoration-none text-dark"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Make card the positioning context */}
      <div className="card border-0 bg-transparent position-relative">
        <div className="w-100 position-relative" style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
          <img
            src={defaultImage}
            alt={`${product.name} main view`}
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover img-fluid"
            style={{ transition: "opacity 0.3s ease-in-out", opacity: hovered ? 0 : 1 }}
            loading="lazy"
          />
          <img
            src={hoverImage}
            alt={`${product.name} alternate view`}
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover img-fluid"
            style={{ transition: "opacity 0.3s ease-in-out", opacity: hovered ? 1 : 0 }}
            loading="lazy"
          />
        </div>


        <div className="position-absolute top-0 mt-2 fw-semibold text-end" style={{ fontSize: "11px", right: -12 }}>
          {showBestSeller && (
            <div className="bg-secondary-subtle px-2 py-1 d-inline-block">
              BEST SELLER
            </div>
          )}
          {showFreeShipping && (
            <div className={`bg-warning-subtle px-2 py-1 ${!showBestSeller ? "mt-0" : "mt-1"}`}>
              FREE SHIPPING
            </div>
          )}
        </div>


        <div className="mt-2 fw-semibold">
          <p className="small text-muted fw-normal mb-0">{product.category?.name}</p>
          <h2 className="small mb-1">{product.name}</h2>
          <p className="small mb-0">${product.price}</p>
          <p className="small mb-0"><StarRating rating={product.rating ?? 0} /></p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

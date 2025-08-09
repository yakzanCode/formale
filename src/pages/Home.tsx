// Home.tsx
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../lib/sanity";
import type { Product } from "../models/Product";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import ProductHighlights from "../components/ProductHighlights";

const Home: React.FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const products = await fetchProducts();
      setNewProducts(products.filter((p) => p.isNew));
      setFeaturedProducts(products.filter((p) => p.isFeatured));
    }

    loadProducts();
  }, []);

  return (
    <>
    <section style={{height: "50vh", background:"url(/hero1.png)", backgroundSize:"cover", backgroundPosition: "center",backgroundRepeat:"no-repeat"}}>

    </section>

    <section className="container-fluid p-0">
      <h2 className="my-3 ms-2">New Arrivals</h2>
      <Carousel products={newProducts} />
      <Link to={'/collections/all'} className="text-decoration-none text-dark py-2 mb-5 d-flex justify-content-center"><span className="fs-5">View All</span> <i className="bi bi-chevron-right fs-6 mt-1"></i></Link>
    </section>

    <ProductHighlights/>

    <section className="container-fluid p-0">
      <h2 className="my-3 ms-2">Best Sellers</h2>
      <Carousel products={featuredProducts} />
    </section>
    </>
  );
};

export default Home;

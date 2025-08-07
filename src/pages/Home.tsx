// Home.tsx
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../lib/sanity";
import type { Product } from "../models/Product";
import Carousel from "../components/Carousel";

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
    <section className="bg-gray-100 py-16 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to PAPATUI™</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Clean ingredients. Premium formulations. Made for men, without compromise.
      </p>
    </section>
    <div className="container-fluid p-4 mt-4">
      <h2 className="mb-3">New Arrivals</h2>
      <Carousel products={newProducts} />

      <h2 className="mt-5 mb-3">Best Sellers</h2>
      <Carousel products={featuredProducts} />
    </div>
    <section className="bg-white py-12 px-6">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-center">

        {/* Sulfate Free */}
        <div>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/icons/atomic.svg" alt="Atomic symbol" className="w-12 h-12" />
          </div>
          <h3 className="text-lg font-semibold mb-2">FORMULATED WITHOUT SULFATES</h3>
          <p className="text-gray-600">
            Sulfates can compromise the balance of your skin. Our cleansers don’t have them.
          </p>
        </div>

        {/* Paraben Free */}
        <div>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/icons/molecule.svg" alt="Molecular structure" className="w-12 h-12" />
          </div>
          <h3 className="text-lg font-semibold mb-2">PARABEN FREE</h3>
          <p className="text-gray-600">
            Parabens are not good for you. So we formulated without them.
          </p>
        </div>

        {/* Phthalate Free */}
        <div>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/icons/beaker.svg" alt="Science beaker" className="w-12 h-12" />
          </div>
          <h3 className="text-lg font-semibold mb-2">PHTHALATE FREE</h3>
          <p className="text-gray-600">
            Phthalates, aka Potential Hormone Disruptors. You don’t need them, so we don’t use them.
          </p>
        </div>

        {/* Cruelty Free */}
        <div>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/icons/rabbit.svg" alt="Rabbit cartoon" className="w-12 h-12" />
          </div>
          <h3 className="text-lg font-semibold mb-2">CRUELTY FREE</h3>
          <p className="text-gray-600">
            These products were never tested on animals. But lots of humans have tried them. And they like them.
          </p>
        </div>

        {/* Vegan */}
        <div>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/icons/leaf.svg" alt="Leaf" className="w-12 h-12" />
          </div>
          <h3 className="text-lg font-semibold mb-2">VEGAN</h3>
          <p className="text-gray-600">
            You’ll never find animal-derived ingredients in our products. Just premium formulations at the right price.
          </p>
        </div>

      </div>
    </section>
    </>
  );
};

export default Home;

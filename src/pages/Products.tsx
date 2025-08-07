import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../lib/sanity";
import type { Product } from "../models/Product";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { slug } = useParams<{ slug?: string }>();
  const categorySlug = slug ?? "all";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [sortOption, setSortOption] = useState("default");

  const [filterNew, setFilterNew] = useState(false);
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [filterInStock, setFilterInStock] = useState(false);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchProducts(categorySlug)
      .then(setProducts)
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
      })
      .finally(() => setLoading(false));
  }, [categorySlug]);

  useEffect(() => {
  if (products.length === 0) return;

  const prices = products.map(p => p.price);
  setMinPrice(Math.min(...prices));
  setMaxPrice(Math.max(...prices));
}, [products]);

  const heading = categorySlug === "all" ? "ALL PRODUCTS" : categorySlug.toUpperCase();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (filterNew) {
      filtered = filtered.filter((p) => p.isNew);
    }

    if (filterFeatured) {
      filtered = filtered.filter((p) => p.isFeatured);
    }

    if (filterInStock) {
      filtered = filtered.filter((p) => p.inStock);
    }

    filtered = filtered.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    switch (sortOption) {
      case "priceLowHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "ratingHighLow":
        filtered.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
    }

    return filtered;
  }, [products, filterNew, filterFeatured, filterInStock, minPrice, maxPrice, sortOption]);

  if (loading) return <div className="p-3">Loading products...</div>;
  if (error) return <div className="p-3 text-danger">{error}</div>;

  return (
    <main className="container-fluid p-3">
      <h1 className="fw-bold fs-3 text-center">{heading}</h1>
      <div className="mx-auto mb-5 mt-3 bg-warning pt-1" style={{ width: "70px" }}></div>

      <div className="d-flex">
        <span role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" className="mb-3">
          <svg className="me-2 icon-svg" width={20} viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z" fill="currentColor"></path>
          </svg>
          Filter and sort
        </span>
        <span className="text-muted ms-auto">{filteredAndSortedProducts.length} Products</span>
      </div>

      {/* Offcanvas Filter */}
      <div className="offcanvas offcanvas-start pb-3" id="offcanvasExample1">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">FILTER AND SORT</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-3">
          {/* Sort by */}
          <div className="mb-4">
            <h6 className="mb-3">Sort by</h6>
            <select className="form-select rounded-0" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="default">Default</option>
              <option value="priceLowHigh">Lowest Price</option>
              <option value="priceHighLow">Highest Price</option>
              <option value="ratingHighLow">Top Rated</option>
            </select>
          </div>

          {/* Availability */}
          <div className="mb-4">
            <h6>Availability</h6>
            <div className="form-check">
              <input type="checkbox" className="form-check-input rounded-0" id="inStock" checked={filterInStock} onChange={() => setFilterInStock((v) => !v)} />
              <label className="form-check-label" htmlFor="inStock">In Stock</label>
            </div>
          </div>

          {/* Flags */}
          <div className="mb-4">
            <h6>Tags</h6>
            <div className="form-check">
              <input type="checkbox" className="form-check-input rounded-0" id="isNew" checked={filterNew} onChange={() => setFilterNew((v) => !v)} />
              <label className="form-check-label" htmlFor="isNew">New</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input rounded-0" id="isFeatured" checked={filterFeatured} onChange={() => setFilterFeatured((v) => !v)} />
              <label className="form-check-label" htmlFor="isFeatured">Featured</label>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            <h6>Price Range ($)</h6>
            <div className="d-flex gap-2 mb-2">
              <input type="number" className="form-control rounded-0" placeholder="Min" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />
              <input type="number" className="form-control rounded-0" placeholder="Max" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
            </div>
          </div>
        </div>
        
        <hr/>

        {/* Buttons */}
        <div className="row g-0 p-3 gap-3">
            <button
                className="custom-btn-outline col py-2"
                onClick={() => {
                   setSortOption("default");
                   setFilterNew(false);
                   setFilterFeatured(false);
                   setFilterInStock(false);
                }}>Clear All
            </button>
            <button className="custom-btn col" data-bs-dismiss="offcanvas" aria-label="Close">
               View All
            </button>
        </div>
      </div>

      {/* Product Grid */}
      <section className="row g-3">
        {filteredAndSortedProducts.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-xl-3" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </main>
  );
}

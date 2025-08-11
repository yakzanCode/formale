import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../lib/sanity";
import type { Product } from "../models/Product";
import ImageGallery from "../components/ProductCarousel";
import StarRating from "../components/StarRating";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const ProductPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProduct() {
            console.log("slug:", slug);
            if (!slug) return;
            const products = await fetchProducts();
            console.log("fetched products:", products);

            const found = products.find((p) => p.slug === slug);
            console.log("found product:", found);
            setProduct(found ?? null);

            if (found) {
              const related = products.filter(
                (p) => p.category?.name === found.category?.name && p.slug !== found.slug
              );
              setRelatedProducts(related);
              console.log(relatedProducts);
              
            } else {
              setRelatedProducts([]);
            }

            setLoading(false);
        }
        loadProduct();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <>
        <div className="container-fluid p-4 my-4">
            <div className="row">
                <div className="col-12 col-md-6">
                    <ImageGallery images={product.images} />
                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0">
                    <h5>{product.name}</h5>
                    <div className="d-flex fw-semibold my-2">
                        <span className="fs-5">${product.price.toFixed(2)}</span>
                        <del className="text-muted ms-2 fs-5">${product.priceBeforeSale?.toFixed(2)}</del>
                        <span className="fs-5 mx-3 text-warning">|</span>
                        <span className="text-warning fs-6 d-flex"><StarRating rating={product.rating ?? 0} /></span>
                    </div>
                    <hr />
                    <h6>Quantity</h6>
                    <div className="d-flex border border-dark text-center" style={{ width: "100px" }}>
                        <i className="bi bi-dash w-25 py-1"></i>
                        <div className="border border-dark border-top-0 border-bottom-0 w-50 py-1">1</div>
                        <i className="bi bi-plus w-25 float-end py-1"></i>
                    </div>
                    <button className="btn btn-dark rounded-0 my-3 w-100">Add To Cart</button>
                    <div className="w-100 border border-dark py-3 px-4" style={{ backgroundColor: "#d6d2c4" }}>
                        <h6 className="fs-5 fw-bold">
                            <input type="radio"/> Subscribe & save 10%
                            <span className="btn mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">&#9432;</span>
                        </h6>
                        <div className="modal fade rounded-0 col-12" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content" style={{ backgroundColor: "#d6d2c4" }}>
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-3" id="staticBackdropLabel">Email Subscription</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h6>Stay informed <i className="bi bi-bell-fill"></i></h6>
                                        <p>You’ll get a notification when your order is on its way. Plus, be the first to hear about new products, exclusive discounts, and special sales.</p>
                                        <hr />
                                        <h6>Easy & Free Subscription <i className="bi bi-envelope-check-fill"></i></h6>
                                        <p>All you need to do is enter your email. It’s free, and you can remove your subscription anytime — hassle-free.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mb-1">get 10% discount on your first 3 orders</p>
                    </div>
                    {/* <p><strong>Size:</strong> {product.size}</p> */}
                    <h6 className="mt-4">PRODUCT DESCRIPTION</h6>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
        {relatedProducts.length > 0 && (
        <section className="container-fluid p-0">
            <h2 className="my-3 ms-2">Related Products</h2>
            <Carousel products={relatedProducts} />
            <Link to={'/collections/all'} className="text-decoration-none text-dark py-2 mb-5 d-flex justify-content-center"><span className="fs-5">View All</span> <i className="bi bi-chevron-right fs-6 mt-1"></i></Link>
        </section>
        )}
        </>
    );
};

export default ProductPage;

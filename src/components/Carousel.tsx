// Carousel.tsx
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import type { Product } from "../models/Product";
import { urlFor } from "../lib/sanity";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Listen for resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth === null) return null; // wait until we know width

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    slidesToShow:
      windowWidth >= 1200
        ? 4
        : windowWidth >= 770
        ? 3
        : windowWidth >= 670
        ? 2
        : 1,
    centerMode: windowWidth < 670,
    centerPadding:
      windowWidth < 576 ? "100px" : windowWidth < 670 ? "150px" : "0px",
  };

  return (
    <div className="container-fluid px-0 py-1 my-4">
      <Slider {...settings} ref={sliderRef}>
        {products.map((product) => (
          <div className="mb-4" key={product._id} style={{ marginRight: "10px" }}>
            <Link to={`/products/${product.slug}`} className="text-decoration-none text-dark">
              <div className="card border-0 bg-transparent position-relative mx-2 ">
                <div
                  className="w-100 position-relative"
                  style={{ aspectRatio: "1 / 1", overflow: "hidden" }}
                >
                  <img
                    src={
                      product.images?.[0]
                        ? urlFor(product.images[0]).width(500).height(500).url()
                        : ""
                    }
                    alt={product.name}
                    className="w-100 h-100 object-fit-cover img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 fw-semibold">
                  <p className="small text-muted fw-normal mb-0">
                    {product.category?.name}
                  </p>
                  <h2 className="small mb-1">{product.name}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

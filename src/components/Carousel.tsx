import React from "react";
import Slider from "react-slick";
import type { Product } from "../models/Product";
import ProductCard from "./ProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // smaller mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="container-fluid p-0 my-4">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} style={{ marginRight: "10px" }}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

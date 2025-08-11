import React, { useState } from "react";
import type { Product } from "../models/Product";

interface ImageGalleryProps {
  images: Product["images"];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div>
      {/* Large image */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <img
          src={images[selectedIndex].asset.url}
          alt={`Product Image ${selectedIndex + 1}`}
          style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
        />
      </div>

      {/* Thumbnails */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        {images.map((img, idx) => (
          <img
            key={img.asset._id}
            src={img.asset.url}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => setSelectedIndex(idx)}
            style={{
              width: 60,
              height: 60,
              objectFit: "cover",
              cursor: "pointer",
              border: idx === selectedIndex ? "2px solid #000" : "1px solid #ccc",
              borderRadius: 4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

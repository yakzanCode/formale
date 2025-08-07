import React from "react";

const StarRating: React.FC<{ rating?: number; max?: number }> = ({ rating = 0, max = 5 }) => {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = Math.max(0, max - full - (hasHalf ? 1 : 0));

  const stars: React.ReactNode[] = [];

  for (let i = 0; i < full; i++) {
    stars.push(
      <i key={`full-${i}`} className="bi bi-star-fill text-dark me-1" aria-hidden />
    );
  }
  if (hasHalf) {
    stars.push(
      <i key="half" className="bi bi-star-half text-dark me-1" aria-hidden />
    );
  }
  for (let i = 0; i < empty; i++) {
    stars.push(
      <i key={`empty-${i}`} className="bi bi-star text-muted me-1" aria-hidden />
    );
  }

  return (
    <div className="d-inline-flex align-items-center" aria-label={`Rated ${rating} out of ${max}`} style={{fontSize: "12px"}}>
      {stars}
      <span className="visually-hidden">{rating} out of {max} stars</span>
    </div>
  );
};

export default StarRating;

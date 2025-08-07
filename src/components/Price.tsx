// src/components/PriceRangeFilter.tsx
import React from "react";

interface PriceRangeFilterProps {
  min: number;
  max: number;
  selectedRange: [number, number];
  onChange: (range: [number, number]) => void;
}

export default function PriceRangeFilter({
  min,
  max,
  selectedRange,
  onChange,
}: PriceRangeFilterProps) {
  const [minVal, maxVal] = selectedRange;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    if (newMin <= maxVal) {
      onChange([newMin, maxVal]);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    if (newMax >= minVal) {
      onChange([minVal, newMax]);
    }
  };

  return (
    <div className="mb-4">
      <h5 className="fw-bold">Filter by Price</h5>
      <div className="d-flex align-items-center gap-2">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinChange}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleMaxChange}
        />
      </div>
      <div className="mt-2 small text-muted">
        ${minVal} - ${maxVal}
      </div>
    </div>
  );
}

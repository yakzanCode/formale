// ShippingPolicy.tsx
import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Shipping Policy</h2>

      <h5 className="mt-4">Domestic Shipping (Lebanon)</h5>
      <p>
        We offer delivery across Lebanon through local courier services. Delivery typically takes 2–5 business days.
      </p>

      <h5 className="mt-4">Shipping Fees</h5>
      <p>
        - Flat delivery rate: LBP 60,000  
        - Free shipping for orders above LBP 500,000
      </p>

      <h5 className="mt-4">Order Processing</h5>
      <p>
        Orders are processed within 1–2 business days. You will receive a confirmation email and tracking number once your order is shipped.
      </p>

      <h5 className="mt-4">Delays</h5>
      <p>
        Shipping times may vary due to weather, holidays, or political events. We appreciate your understanding in such situations.
      </p>

      <h5 className="mt-4">Delivery Issues</h5>
      <p>
        If you have issues with delivery or your package hasn’t arrived, please contact us at support@yourdomain.com.
      </p>

      <p className="text-muted mt-4">Last updated: August 2025</p>
    </div>
  );
};

export default ShippingPolicy;

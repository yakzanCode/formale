// Accessibility.tsx
import React from 'react';

const Accessibility = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Accessibility Statement</h2>

      <p>
        We are committed to making our website accessible to everyone, including people with disabilities. We aim to follow best practices to provide an inclusive user experience.
      </p>

      <h5 className="mt-4">Measures We’ve Taken</h5>
      <ul>
        <li>Keyboard navigability</li>
        <li>Readable fonts and contrast</li>
        <li>Descriptive alt text on images</li>
      </ul>

      <h5 className="mt-4">Limitations</h5>
      <p>
        Some older features or third-party tools may not be fully optimized. We’re actively working to improve them.
      </p>

      <h5 className="mt-4">Feedback</h5>
      <p>
        If you experience difficulty accessing content on our website, please contact us at support@yourdomain.com.
      </p>

      <p className="text-muted mt-4">Last updated: August 2025</p>
    </div>
  );
};

export default Accessibility;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 mt-5 border-top">
      <div className="container">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">ForMale</h5>
            <p className="text-muted">Premium grooming products for modern men.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
              <li><Link to="/collections/all" className="text-decoration-none text-dark">Shop All</Link></li>
              <li><Link to="/about" className="text-decoration-none text-dark">About</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-dark">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Contact</h6>
            <p className="mb-1">Email: support@formale.com</p>
            <p className="mb-1">Phone: +1 234 567 890</p>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-dark text-decoration-none">Instagram</a>
              <a href="#" className="text-dark text-decoration-none">Twitter</a>
              <a href="#" className="text-dark text-decoration-none">Facebook</a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li><Link to="/policies/privacy-policy" className="text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/policies/terms-of-use" className="text-decoration-none">Terms of Use</Link></li>
              <li><Link to="/policies/return-policy" className="text-decoration-none">Return & Refund Policy</Link></li>
              <li><Link to="/policies/shipping-policy" className="text-decoration-none">Shipping Policy</Link></li>
              <li><Link to="/policies/disclaimer" className="text-decoration-none">Disclaimer</Link></li>
            </ul>
          </div>
        </div>



        <hr />
        <p className="text-center text-muted mb-0">&copy; {new Date().getFullYear()} ForMale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

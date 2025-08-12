import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-5 pb-3 mt-5 border-top" style={{backgroundColor: "#d6d2c4", color: "rgba(56, 39, 31, 1)"}}>
      <div className="container">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">ForMale</h4>
            <p className="text-black">Premium grooming products for modern men.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-black">Home</Link></li>
              <li><Link to="/collections/all" className="text-decoration-none text-black">Shop All</Link></li>
              <li><Link to="/about" className="text-decoration-none text-black">About</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-black">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Contact</h5>
            <p className="mb-1 text-black">Email: support@formale.com</p>
            <p className="mb-1 text-black">Phone: +1 234 567 890</p>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-black text-decoration-none">Instagram</a>
              <a href="#" className="text-black text-decoration-none">Twitter</a>
              <a href="#" className="text-black text-decoration-none">Facebook</a>
            </div>
          </div>

          {/* Policies Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Policies</h5>
            <ul className="list-unstyled">
              <li><Link to="/policies/privacy-policy" className="text-muted">Privacy Policy</Link></li>
              <li><Link to="/policies/terms-of-use" className="text-muted">Terms of Use</Link></li>
              <li><Link to="/policies/return-policy" className="text-muted">Return & Refund Policy</Link></li>
              <li><Link to="/policies/shipping-policy" className="text-muted">Shipping Policy</Link></li>
              <li><Link to="/policies/disclaimer" className="text-muted">Disclaimer</Link></li>
            </ul>
          </div>
        </div>



        <hr />
        <p className="text-center text-black mb-0">&copy; {new Date().getFullYear()} ForMale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

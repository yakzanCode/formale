import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Products from './pages/Products';
// import Product from './pages/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PromoBar from  "./components/Promobar";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import TermsOfUse from "./pages/Policies/TermsOfUse";
import ReturnPolicy from "./pages/Policies/ReturnPolicy";
import ShippingPolicy from "./pages/Policies/ShippingPolicy";
import Disclaimer from "./pages/Policies/Disclaimer";

const AppRouter = () => {
  return (
    <Router>
      <PromoBar />
      <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/collections/all" element={<Products />} />
          <Route path="/collections/:slug" element={<Products />} />
          {/* <Route path="/products/:slug" element={<Product />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;

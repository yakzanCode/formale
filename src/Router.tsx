import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Products from './pages/Products';
// import Product from './pages/Product';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import PromoBar from  "./components/Promobar";

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
        </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default AppRouter;

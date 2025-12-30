import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import HeroSection from './components/HeroSection';
import FeatureProduct from './components/FeatureProduct';
import BannerDiscount from './components/BannerDiscount';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import NavbarWithProductImages from './components/NavbarWithProductImages';
import SearchResults from './components/SearchResults';
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <NavbarWithProductImages />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <FeatureProduct />
                <BannerDiscount />
                <Testimonial />
              </>
            } />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
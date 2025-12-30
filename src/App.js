import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import FeatureProduct from './components/FeatureProduct';
import BannerDiscount from './components/BannerDiscount';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import ModernNavbar from './components/ModernNavbar';
import SearchResults from './components/SearchResults';
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';
import HeroSection from './components/HeroSection';
import Collection from './components/Collection';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <ModernNavbar />
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
            <Route path="/collection" element={<Collection />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
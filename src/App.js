import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureProduct from './components/FeatureProduct';
import BannerDiscount from './components/BannerDiscount';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureProduct = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [wishlist, setWishlist] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Premium Wool Coat",
      price: 289.99,
      originalPrice: 359.99,
      rating: 4.8,
      reviewCount: 142,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "outerwear",
      colors: ["#2C3E50", "#7D8FA1", "#D5D8DC"],
      sizes: ["S", "M", "L", "XL"],
      badge: "Best Seller",
      isNew: true,
      description: "Premium wool blend coat with tailored fit and luxurious finish"
    },
    {
      id: 2,
      name: "Minimalist Sneakers",
      price: 149.99,
      originalPrice: 189.99,
      rating: 4.9,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "footwear",
      colors: ["#1A1A1A", "#FFFFFF", "#E0E0E0"],
      sizes: ["38", "39", "40", "41", "42"],
      badge: "Limited Edition",
      isNew: false,
      description: "Clean design sneakers with premium leather construction"
    },
    {
      id: 3,
      name: "Cashmere Sweater",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.7,
      reviewCount: 67,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "knitwear",
      colors: ["#8B4513", "#D2691E", "#F5DEB3"],
      sizes: ["XS", "S", "M", "L"],
      badge: "Sustainable",
      isNew: true,
      description: "100% cashmere sweater with timeless design"
    },
    {
      id: 4,
      name: "Leather Tote Bag",
      price: 229.99,
      originalPrice: 279.99,
      rating: 4.6,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories",
      colors: ["#1C1C1C", "#8B7355", "#D4B483"],
      sizes: ["One Size"],
      badge: "Handcrafted",
      isNew: false,
      description: "Handcrafted leather tote with multiple compartments"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'new', name: 'New Arrivals', count: products.filter(p => p.isNew).length },
    { id: 'outerwear', name: 'Outerwear', count: products.filter(p => p.category === 'outerwear').length },
    { id: 'footwear', name: 'Footwear', count: products.filter(p => p.category === 'footwear').length }
  ];

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = activeTab === 'all' 
    ? products 
    : activeTab === 'new'
    ? products.filter(p => p.isNew)
    : products.filter(p => p.category === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully selected collection of premium products
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                activeTab === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                        NEW
                      </span>
                    )}
                    {product.badge && (
                      <span className="px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Wishlist Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 z-10 ${
                      wishlist.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill={wishlist.includes(product.id) ? "currentColor" : "none"} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  
                  {/* Quick View Overlay */}
                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Link
                        to={`/products/${product.id}`}
                        className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  {/* Category */}
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                    {product.category}
                  </div>
                  
                  {/* Name with Link */}
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  {/* Color Options */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-gray-500">Colors:</span>
                    <div className="flex gap-1">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 text-center"
                    >
                      View Details
                    </Link>
                    <button className="flex-1 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 gap-2"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
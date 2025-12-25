import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureProduct = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'best', name: 'Best Sellers' },
    { id: 'sale', name: 'On Sale' },
    { id: 'trending', name: 'Trending Now' }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Denim Jacket",
      category: "jackets",
      price: 129.99,
      originalPrice: 159.99,
      discount: 20,
      rating: 4.8,
      reviews: 124,
      images: [
        "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Dark Blue", value: "#2C3E50" },
        { name: "Medium Blue", value: "#34495E" },
        { name: "Light Blue", value: "#7F8C8D" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Classic denim jacket with premium wash and comfortable fit",
      features: [
        "100% Organic Cotton Denim",
        "Premium Vintage Wash",
        "Reinforced Stitching",
        "Metal Button Closure"
      ],
      specifications: {
        material: "100% Organic Cotton",
        weight: "850g",
        care: "Machine wash cold, tumble dry low",
        origin: "Made in USA"
      },
      tags: ["new", "best"]
    },
    {
      id: 2,
      name: "Minimalist White Sneakers",
      category: "footwear",
      price: 89.99,
      originalPrice: 119.99,
      discount: 25,
      rating: 4.9,
      reviews: 89,
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "White", value: "#FFFFFF" },
        { name: "Gray", value: "#ECF0F1" },
        { name: "Black", value: "#BDC3C7" }
      ],
      sizes: ["7", "8", "9", "10", "11"],
      description: "Clean design sneakers for everyday comfort and style",
      features: [
        "Premium Leather",
        "Comfortable Insole",
        "Non-Slip Sole",
        "Breathable Material"
      ],
      specifications: {
        material: "Genuine Leather",
        weight: "650g",
        care: "Wipe clean with damp cloth",
        origin: "Made in Vietnam"
      },
      tags: ["new", "trending"]
    },
    {
      id: 3,
      name: "Casual Linen Shirt",
      category: "tops",
      price: 59.99,
      originalPrice: 79.99,
      discount: 15,
      rating: 4.7,
      reviews: 156,
      images: [
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Beige", value: "#F1C40F" },
        { name: "Cream", value: "#F39C12" },
        { name: "White", value: "#E67E22" }
      ],
      sizes: ["XS", "S", "M", "L"],
      description: "Breathable linen shirt perfect for summer days",
      features: [
        "100% Linen",
        "Breathable Fabric",
        "Button Front",
        "Relaxed Fit"
      ],
      specifications: {
        material: "100% Linen",
        weight: "350g",
        care: "Hand wash cold, air dry",
        origin: "Made in Portugal"
      },
      tags: ["best", "sale"]
    },
    {
      id: 4,
      name: "Leather Crossbody Bag",
      category: "accessories",
      price: 149.99,
      rating: 4.9,
      reviews: 67,
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Brown", value: "#8B4513" },
        { name: "Black", value: "#654321" },
        { name: "Tan", value: "#D2691E" }
      ],
      sizes: ["One Size"],
      description: "Genuine leather bag with adjustable strap",
      features: [
        "Genuine Leather",
        "Adjustable Strap",
        "Multiple Pockets",
        "Zipper Closure"
      ],
      specifications: {
        material: "Genuine Leather",
        weight: "750g",
        care: "Leather conditioner",
        origin: "Made in Italy"
      },
      tags: ["new", "trending"]
    },
    {
      id: 5,
      name: "Oversized Hoodie",
      category: "hoodies",
      price: 74.99,
      originalPrice: 99.99,
      discount: 25,
      rating: 4.6,
      reviews: 203,
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Gray", value: "#2C3E50" },
        { name: "Navy", value: "#34495E" },
        { name: "Black", value: "#7F8C8D" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Comfortable oversized hoodie with premium cotton blend",
      features: [
        "Premium Cotton Blend",
        "Kangaroo Pocket",
        "Adjustable Drawstrings",
        "Ribbed Cuffs"
      ],
      specifications: {
        material: "80% Cotton, 20% Polyester",
        weight: "900g",
        care: "Machine wash cold, tumble dry low",
        origin: "Made in USA"
      },
      tags: ["best", "sale"]
    },
    {
      id: 6,
      name: "Chino Pants",
      category: "bottoms",
      price: 69.99,
      rating: 4.5,
      reviews: 98,
      images: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Khaki", value: "#27AE60" },
        { name: "Olive", value: "#16A085" },
        { name: "Navy", value: "#1ABC9C" }
      ],
      sizes: ["30", "32", "34", "36"],
      description: "Versatile chino pants for casual and smart occasions",
      features: [
        "Stretch Fabric",
        "Classic Fit",
        "Button and Zipper Closure",
        "Four Pockets"
      ],
      specifications: {
        material: "98% Cotton, 2% Spandex",
        weight: "550g",
        care: "Machine wash warm",
        origin: "Made in Bangladesh"
      },
      tags: ["trending"]
    },
    {
      id: 7,
      name: "Silk Scarf",
      category: "accessories",
      price: 39.99,
      originalPrice: 49.99,
      discount: 20,
      rating: 4.8,
      reviews: 45,
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Purple", value: "#9B59B6" },
        { name: "Blue", value: "#8E44AD" },
        { name: "Teal", value: "#3498DB" }
      ],
      sizes: ["One Size"],
      description: "Luxury silk scarf with unique pattern design",
      features: [
        "100% Silk",
        "Hand-rolled Edges",
        "Unique Pattern",
        "Versatile Wear"
      ],
      specifications: {
        material: "100% Silk",
        weight: "120g",
        care: "Dry clean only",
        origin: "Made in France"
      },
      tags: ["new", "sale"]
    },
    {
      id: 8,
      name: "Waterproof Boots",
      category: "footwear",
      price: 129.99,
      rating: 4.7,
      reviews: 112,
      images: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Brown", value: "#2C3E50" },
        { name: "Black", value: "#34495E" },
        { name: "Gray", value: "#7F8C8D" }
      ],
      sizes: ["7", "8", "9", "10", "11"],
      description: "Durable waterproof boots for all weather conditions",
      features: [
        "Waterproof Leather",
        "Anti-Slip Sole",
        "Comfortable Lining",
        "Durable Construction"
      ],
      specifications: {
        material: "Waterproof Leather",
        weight: "1200g",
        care: "Leather conditioner",
        origin: "Made in Germany"
      },
      tags: ["best", "trending"]
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.tags.includes(activeCategory));

  const handleProductClick = (productId) => {
    // Changed from /product/${productId} to /products/${productId}
    navigate(`/products/${productId}`);
  };

  const handleQuickAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent triggering product click
    alert(`Added ${product.name} to cart!`);
    // In real app, you would dispatch to cart state
  };

  const handleAddToWishlist = (product, e) => {
    e.stopPropagation(); // Prevent triggering product click
    alert(`Added ${product.name} to wishlist!`);
    // In real app, you would update wishlist state
  };

  const handleViewDetails = (productId, e) => {
    e.stopPropagation(); // Prevent triggering product card click
    navigate(`/products/${productId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 font-medium text-sm mb-4">
            ✨ Premium Quality
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-gray-900">Featured</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked collection of premium fashion items, carefully curated for style and quality.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    -{product.discount}%
                  </div>
                )}
                
                {/* Quick Action Buttons */}
                <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button 
                    onClick={(e) => handleAddToWishlist(product, e)}
                    className="bg-white p-2.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    title="Add to Wishlist"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button 
                    onClick={(e) => handleQuickAddToCart(product, e)}
                    className="bg-white p-2.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    title="Quick View"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>

                {/* Action Buttons Overlay on Hover */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={(e) => handleQuickAddToCart(product, e)}
                      className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Quick Add to Cart
                    </button>
                    <button 
                      onClick={(e) => handleViewDetails(product.id, e)}
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category and Rating */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 
                  className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 hover:text-purple-600 transition-colors cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Color Options */}
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500 mr-3">Colors:</span>
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-5 h-5 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <>
                          <span className="text-lg text-gray-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        </>
                      )}
                    </div>
                    {product.discount && (
                      <div className="text-sm text-green-600 font-medium">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={(e) => handleQuickAddToCart(product, e)}
                      className="p-2.5 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 rounded-lg hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                      title="Add to Cart"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => handleViewDetails(product.id, e)}
                      className="px-4 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm font-medium flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/products')}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
          >
            View All Products
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Premium Quality</h4>
            <p className="text-gray-600">All products are made from high-quality materials</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Fast Shipping</h4>
            <p className="text-gray-600">Free shipping on orders over $100</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Secure Payment</h4>
            <p className="text-gray-600">100% secure payment processing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
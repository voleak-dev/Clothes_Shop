// In components/ProductDetail.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeImage, setActiveImage] = useState(0);

  // Product database - should match FeatureProduct data
  const productDatabase = [
    {
      id: 1,
      name: "Premium Wool Coat",
      price: 289.99,
      originalPrice: 359.99,
      rating: 4.8,
      reviewCount: 142,
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      category: "outerwear",
      colors: ["#2C3E50", "#7D8FA1", "#D5D8DC"],
      colorNames: ["Charcoal", "Stone Gray", "Light Gray"],
      sizes: ["S", "M", "L", "XL"],
      badge: "Best Seller",
      isNew: true,
      description: "Premium wool blend coat with tailored fit and luxurious finish. Made from 80% wool and 20% cashmere for exceptional warmth and comfort.",
      features: [
        "80% Wool, 20% Cashmere blend",
        "Fully lined interior",
        "Hidden button closure",
        "Two side pockets",
        "Dry clean only"
      ],
      material: "Wool & Cashmere Blend",
      care: "Dry clean only",
      stock: 15
    },
    {
      id: 2,
      name: "Minimalist Sneakers",
      price: 149.99,
      originalPrice: 189.99,
      rating: 4.9,
      reviewCount: 89,
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      category: "footwear",
      colors: ["#1A1A1A", "#FFFFFF", "#E0E0E0"],
      colorNames: ["Black", "White", "Gray"],
      sizes: ["38", "39", "40", "41", "42"],
      badge: "Limited Edition",
      isNew: false,
      description: "Clean design sneakers with premium leather construction. Featuring memory foam insoles and durable rubber soles for all-day comfort.",
      features: [
        "Premium full-grain leather",
        "Memory foam insoles",
        "Non-slip rubber sole",
        "Breathable lining",
        "Handcrafted construction"
      ],
      material: "Premium Leather",
      care: "Wipe clean with damp cloth",
      stock: 8
    },
    {
      id: 3,
      name: "Cashmere Sweater",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.7,
      reviewCount: 67,
      images: [
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      category: "knitwear",
      colors: ["#8B4513", "#D2691E", "#F5DEB3"],
      colorNames: ["Chocolate", "Cinnamon", "Cream"],
      sizes: ["XS", "S", "M", "L"],
      badge: "Sustainable",
      isNew: true,
      description: "100% cashmere sweater with timeless design. Ultra-soft and lightweight, perfect for layering or wearing on its own.",
      features: [
        "100% Grade A Cashmere",
        "Ribbed cuffs and hem",
        "Crew neck design",
        "Made in Italy",
        "Ethically sourced"
      ],
      material: "100% Cashmere",
      care: "Hand wash cold, lay flat to dry",
      stock: 12
    },
    {
      id: 4,
      name: "Leather Tote Bag",
      price: 229.99,
      originalPrice: 279.99,
      rating: 4.6,
      reviewCount: 203,
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      ],
      category: "accessories",
      colors: ["#1C1C1C", "#8B7355", "#D4B483"],
      colorNames: ["Black", "Cognac", "Tan"],
      sizes: ["One Size"],
      badge: "Handcrafted",
      isNew: false,
      description: "Handcrafted leather tote with multiple compartments. Features brass hardware and a detachable shoulder strap.",
      features: [
        "Full-grain vegetable-tanned leather",
        "Brass hardware",
        "Detachable shoulder strap",
        "Multiple interior pockets",
        "Laptop compartment"
      ],
      material: "Full-grain Leather",
      care: "Condition with leather cleaner",
      stock: 6
    }
  ];

  // Find product by ID
  const product = productDatabase.find(p => p.id === parseInt(id)) || productDatabase[0];

  // Set default selections
  useEffect(() => {
    if (product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
    if (product.colorNames.length > 0) {
      setSelectedColor(product.colorNames[0]);
    }
  }, [product]);

  const addToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} × ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <span className="hover:text-gray-900 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-gray-900 cursor-pointer">Products</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-900 text-white text-sm font-bold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-1 aspect-square overflow-hidden rounded-lg border-2 ${
                      activeImage === index ? 'border-gray-900' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
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
                  <span className="text-gray-600">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-green-600 font-medium">
                    {product.stock > 5 ? 'In Stock' : `Only ${product.stock} left`}
                  </span>
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-bold rounded">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Select Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, index) => (
                    <button 
                      key={index}
                      onClick={() => setSelectedColor(product.colorNames[index])}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                        selectedColor === product.colorNames[index]
                          ? 'border-gray-900'
                          : 'border-gray-300 hover:border-gray-600'
                      }`}
                    >
                      <div 
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-sm">{product.colorNames[index]}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity & Add to Cart */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="px-4 py-3 font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <button 
                    onClick={addToCart}
                    className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Add to Cart • ${(product.price * quantity).toFixed(2)}
                  </button>
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Product Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Material:</span>
                  <span className="ml-2 font-medium">{product.material}</span>
                </div>
                <div>
                  <span className="text-gray-500">Care:</span>
                  <span className="ml-2 font-medium">{product.care}</span>
                </div>
                <div>
                  <span className="text-gray-500">SKU:</span>
                  <span className="ml-2 font-medium">PROD-{product.id.toString().padStart(3, '0')}</span>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="ml-2 font-medium">{product.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productDatabase
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <a 
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900 mt-2">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
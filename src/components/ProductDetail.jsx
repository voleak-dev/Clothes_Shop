import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Complete product data with all products from FeatureProduct
  const allProducts = [
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
      description: "Classic denim jacket with premium wash and comfortable fit. Made from 100% organic cotton with reinforced stitching and metal button closure.",
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
      reviewsList: [
        { 
          id: 1,
          name: "Alex Johnson", 
          rating: 5, 
          comment: "Perfect fit and amazing quality!", 
          date: "2024-01-15" 
        },
        { 
          id: 2,
          name: "Sarah Miller", 
          rating: 4, 
          comment: "Love the color and fabric quality.", 
          date: "2024-01-10" 
        }
      ],
      stock: 15,
      sku: "DJ-2024-BLU",
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
      description: "Clean design sneakers for everyday comfort and style. Premium leather construction with comfortable insole.",
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
      reviewsList: [
        { 
          id: 1,
          name: "Michael Chen", 
          rating: 5, 
          comment: "Very comfortable for daily wear!", 
          date: "2024-01-20" 
        }
      ],
      stock: 27,
      sku: "SN-2024-WHT",
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
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Beige", value: "#F5F5DC" },
        { name: "Cream", value: "#FFFDD0" },
        { name: "White", value: "#FFFFFF" }
      ],
      sizes: ["XS", "S", "M", "L"],
      description: "Breathable linen shirt perfect for summer days. 100% linen fabric with relaxed fit.",
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
      reviewsList: [
        { 
          id: 1,
          name: "David Wilson", 
          rating: 5, 
          comment: "Perfect for hot weather!", 
          date: "2024-01-18" 
        }
      ],
      stock: 42,
      sku: "LS-2024-BGE",
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
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Brown", value: "#8B4513" },
        { name: "Black", value: "#000000" },
        { name: "Tan", value: "#D2B48C" }
      ],
      sizes: ["One Size"],
      description: "Genuine leather bag with adjustable strap and multiple compartments.",
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
      reviewsList: [
        { 
          id: 1,
          name: "Emma Davis", 
          rating: 5, 
          comment: "Excellent quality leather!", 
          date: "2024-01-22" 
        }
      ],
      stock: 8,
      sku: "LB-2024-BRN",
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
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Gray", value: "#808080" },
        { name: "Navy", value: "#000080" },
        { name: "Black", value: "#000000" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Comfortable oversized hoodie with premium cotton blend and kangaroo pocket.",
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
      reviewsList: [
        { 
          id: 1,
          name: "James Wilson", 
          rating: 4, 
          comment: "Very comfortable and warm!", 
          date: "2024-01-25" 
        }
      ],
      stock: 32,
      sku: "HD-2024-GRY",
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
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Khaki", value: "#F0E68C" },
        { name: "Olive", value: "#808000" },
        { name: "Navy", value: "#000080" }
      ],
      sizes: ["30", "32", "34", "36"],
      description: "Versatile chino pants for casual and smart occasions. Stretch fabric for comfort.",
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
      reviewsList: [
        { 
          id: 1,
          name: "Robert Taylor", 
          rating: 5, 
          comment: "Great fit and comfortable!", 
          date: "2024-01-19" 
        }
      ],
      stock: 45,
      sku: "CP-2024-KHK",
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
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Purple", value: "#800080" },
        { name: "Blue", value: "#0000FF" },
        { name: "Teal", value: "#008080" }
      ],
      sizes: ["One Size"],
      description: "Luxury silk scarf with unique pattern design and hand-rolled edges.",
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
      reviewsList: [
        { 
          id: 1,
          name: "Sophia Lee", 
          rating: 5, 
          comment: "Beautiful pattern and soft silk!", 
          date: "2024-01-16" 
        }
      ],
      stock: 19,
      sku: "SC-2024-PRP",
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
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      colors: [
        { name: "Brown", value: "#654321" },
        { name: "Black", value: "#000000" },
        { name: "Gray", value: "#808080" }
      ],
      sizes: ["7", "8", "9", "10", "11"],
      description: "Durable waterproof boots for all weather conditions with anti-slip sole.",
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
      reviewsList: [
        { 
          id: 1,
          name: "John Smith", 
          rating: 5, 
          comment: "Great for rainy days!", 
          date: "2024-01-14" 
        }
      ],
      stock: 23,
      sku: "BT-2024-BRN",
      tags: ["best", "trending"]
    }
  ];

  useEffect(() => {
    if (id) {
      setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        
        if (foundProduct && foundProduct.colors && foundProduct.colors.length > 0) {
          setSelectedColor(foundProduct.colors[0].name);
        }
        setSelectedSize('');
        setSelectedImage(0);
        setQuantity(1);
        setLoading(false);
      }, 300);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <svg className="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Product Not Found</h3>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert("Please select size");
      return;
    }
    alert(`Added ${quantity} × ${product.name} (${selectedSize || 'One Size'}, ${selectedColor}) to cart!`);
  };

  const handleBuyNow = () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert("Please select size");
      return;
    }
    alert('Proceeding to checkout with ' + product.name);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900">
                Home
              </button>
            </li>
            <li>
              <span className="mx-2 text-gray-400">/</span>
              <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900">
                Products
              </button>
            </li>
            <li>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600 hover:text-gray-900 capitalize">
                {product.category}
              </span>
            </li>
            <li>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </li>
          </ol>
        </nav>

        {/* Product Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-purple-600' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Stock Status */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">SKU: {product.sku}</span>
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${product.stock > 10 ? 'bg-green-500' : product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                  <span className={`text-sm font-medium ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wide capitalize">
                {product.category}
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && product.discount > 0 && (
                  <>
                    <span className="text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-bold text-sm">
                      -{product.discount}%
                    </span>
                  </>
                )}
              </div>
              {product.discount > 0 && (
                <p className="text-green-600 font-medium mt-2">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </p>
              )}
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color: <span className="text-purple-600">{selectedColor}</span></h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex flex-col items-center p-3 rounded-xl border-2 ${
                        selectedColor === color.name ? 'border-purple-600 bg-purple-50' : 'border-gray-200'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full mb-2 border border-gray-300"
                        style={{ backgroundColor: color.value }}
                      />
                      <span className="text-sm text-gray-700">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && product.sizes[0] !== "One Size" && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size: {selectedSize && <span className="text-purple-600">{selectedSize}</span>}</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg border-2 font-medium ${
                        selectedSize === size
                          ? 'border-purple-600 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <button className="inline-block mt-3 text-purple-600 hover:text-purple-700 text-sm">
                  View size guide →
                </button>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="px-4 py-3 text-gray-600 hover:text-gray-900"
                  >
                    −
                  </button>
                  <span className="px-4 py-3 text-lg font-medium min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-3 text-gray-600 hover:text-gray-900"
                  >
                    +
                  </button>
                </div>
                
                <div className="flex-1 w-full sm:w-auto flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0 || (product.sizes[0] !== "One Size" && !selectedSize)}
                    className="flex-1 px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                  <button
                    onClick={handleBuyNow}
                    disabled={product.stock <= 0 || (product.sizes[0] !== "One Size" && !selectedSize)}
                    className="flex-1 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Shipping Info */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping & Returns</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-medium">Free Shipping</div>
                    <div className="text-sm text-gray-600">On orders over $100</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium">Fast Delivery</div>
                    <div className="text-sm text-gray-600">2-3 business days</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div>
                    <div className="font-medium">30-Day Returns</div>
                    <div className="text-sm text-gray-600">Easy returns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {tab === 'reviews' && ` (${product.reviewsList?.length || 0})`}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h3>
                <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.features && product.features.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.specifications && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Material & Care</h4>
                      <ul className="space-y-2">
                        {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                          <li key={key} className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="font-medium">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'specifications' && product.specifications && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Customer Reviews ({product.reviewsList?.length || 0})
                </h3>
                {product.reviewsList && product.reviewsList.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviewsList.map((review) => (
                      <div key={review.id} className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div className="flex items-center mb-4 sm:mb-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                              <span className="font-bold text-purple-600">
                                {review.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{review.name}</div>
                              <div className="text-sm text-gray-500">{review.date}</div>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <p className="mt-4 text-gray-500">No reviews yet. Be the first to review this product!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div 
                  key={relatedProduct.id}
                  onClick={() => navigate(`/products/${relatedProduct.id}`)}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 truncate">{relatedProduct.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-lg">${relatedProduct.price.toFixed(2)}</span>
                      {relatedProduct.discount > 0 && (
                        <span className="text-sm text-red-600 font-medium">-{relatedProduct.discount}%</span>
                      )}
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({relatedProduct.reviews})</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
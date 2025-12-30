import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NavbarWithProductImages = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const leaveTimer = useRef(null);

  // Product data - make sure this matches your SearchResults data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Denim Jacket",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "jackets",
      rating: 4.8
    },
    {
      id: 2,
      name: "Minimalist White Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "footwear",
      rating: 4.9
    },
    {
      id: 3,
      name: "Casual Linen Shirt",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "tops",
      rating: 4.7
    },
    {
      id: 4,
      name: "Leather Crossbody Bag",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "accessories",
      rating: 4.9
    }
  ];

  const bestSellers = [
    {
      id: 5,
      name: "Oversized Hoodie",
      price: 74.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "hoodies",
      rating: 4.6
    },
    {
      id: 6,
      name: "Chino Pants",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "bottoms",
      rating: 4.5
    }
  ];

  const mainNavLinks = [
    { id: 'home', name: 'Home', path: '/' },
    { id: 'products', name: 'Products', path: '/products', hasDropdown: true },
    { id: 'about', name: 'About', path: '/about' },
    { id: 'contact', name: 'Contact', path: '/contact' },
  ];

  const categoriesWithImages = [
    {
      id: 'jackets',
      name: 'Jackets',
      image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 8
    },
    {
      id: 'footwear',
      name: 'Footwear',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 10
    },
    {
      id: 'tops',
      name: 'Tops',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 14
    },
    {
      id: 'accessories',
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 12
    },
  ];

  // Handle mouse leave from dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        setShowProductsDropdown(false);
      }
    };

    if (showProductsDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (leaveTimer.current) {
        clearTimeout(leaveTimer.current);
      }
    };
  }, [showProductsDropdown]);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
      setShowProductsDropdown(false);
      setIsMenuOpen(false);
      setSearchInput('');
    }
  };

  // Handle mobile search
  const handleMobileSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
      setIsMenuOpen(false);
      setSearchInput('');
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
    setShowProductsDropdown(false);
    setIsMenuOpen(false);
  };

  const handleMouseEnterButton = () => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
    }
    setShowProductsDropdown(true);
  };

  const handleMouseLeaveButton = () => {
    // Set a longer timeout to give user time to move to dropdown
    leaveTimer.current = setTimeout(() => {
      setShowProductsDropdown(false);
    }, 300); // Increased from 100ms to 300ms
  };

  const handleMouseEnterDropdown = () => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
    }
  };

  const handleMouseLeaveDropdown = () => {
    leaveTimer.current = setTimeout(() => {
      setShowProductsDropdown(false);
    }, 200);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
              onClick={() => setActiveLink('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  StyleHub
                </span>
                <p className="text-xs text-gray-500">Premium Fashion Store</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <div key={link.id} className="relative">
                {link.hasDropdown ? (
                  <div className="relative">
                    <button
                      ref={buttonRef}
                      className={`flex items-center space-x-1 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                        activeLink === link.id
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      onMouseEnter={handleMouseEnterButton}
                      onMouseLeave={handleMouseLeaveButton}
                    >
                      <span>{link.name}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${showProductsDropdown ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Products Mega Dropdown WITH IMAGES */}
                    {showProductsDropdown && (
                      <div 
                        ref={dropdownRef}
                        className="absolute left-0 mt-1 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn"
                        onMouseEnter={handleMouseEnterDropdown}
                        onMouseLeave={handleMouseLeaveDropdown}
                      >
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                        
                        <div className="p-6 pt-7">
                          <div className="grid grid-cols-3 gap-8">
                            
                            {/* Column 1: Featured Products */}
                            <div>
                              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                Featured Products
                              </h3>
                              <div className="space-y-4">
                                {featuredProducts.map((product) => (
                                  <div 
                                    key={product.id}
                                    className="group cursor-pointer"
                                    onClick={() => handleProductClick(product.id)}
                                  >
                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                      <div className="relative w-16 h-16 flex-shrink-0">
                                        <img 
                                          src={product.image} 
                                          alt={product.name}
                                          className="w-full h-full object-cover rounded-lg"
                                        />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 line-clamp-1">
                                          {product.name}
                                        </h4>
                                        <div className="flex items-center space-x-2 mt-1">
                                          <div className="flex items-center">
                                            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                                          </div>
                                          <span className="text-xs text-gray-400">•</span>
                                          <span className="text-sm font-bold text-gray-900">${product.price}</span>
                                        </div>
                                        <span className="inline-block mt-1 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                          {product.category}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: Categories with Images */}
                            <div>
                              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                Shop Categories
                              </h3>
                              <div className="grid grid-cols-2 gap-3">
                                {categoriesWithImages.map((category) => (
                                  <Link
                                    key={category.id}
                                    to={`/products?category=${category.id}`}
                                    className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                                    onClick={() => setShowProductsDropdown(false)}
                                  >
                                    <div className="aspect-square overflow-hidden">
                                      <img 
                                        src={category.image} 
                                        alt={category.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                      <div className="flex justify-between items-end">
                                        <span className="text-sm font-medium text-white">
                                          {category.name}
                                        </span>
                                        <span className="text-xs bg-white/90 text-gray-800 px-2 py-1 rounded-full">
                                          {category.count} items
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              
                              {/* Best Sellers */}
                              <div className="mt-6">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                  Best Sellers
                                </h3>
                                <div className="space-y-3">
                                  {bestSellers.map((product) => (
                                    <div 
                                      key={product.id}
                                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors"
                                      onClick={() => handleProductClick(product.id)}
                                    >
                                      <div className="relative w-12 h-12 flex-shrink-0">
                                        <img 
                                          src={product.image} 
                                          alt={product.name}
                                          className="w-full h-full object-cover rounded-lg"
                                        />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 line-clamp-1">
                                          {product.name}
                                        </h4>
                                        <p className="text-sm font-bold text-gray-900 mt-1">${product.price}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Column 3: Collections & Links */}
                            <div>
                              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                Collections
                              </h3>
                              <div className="space-y-4">
                                {/* Sale Banner */}
                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-pink-500 p-4 text-white">
                                  <div className="relative z-10">
                                    <h4 className="font-bold text-lg">Summer Sale</h4>
                                    <p className="text-sm opacity-90 mt-1">Up to 50% OFF</p>
                                    <button 
                                      className="mt-3 px-4 py-2 bg-white text-red-600 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors"
                                      onClick={() => {
                                        navigate('/products?filter=sale');
                                        setShowProductsDropdown(false);
                                      }}
                                    >
                                      Shop Now →
                                    </button>
                                  </div>
                                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full" />
                                </div>

                                {/* Quick Links */}
                                <div className="space-y-2">
                                  <Link
                                    to="/products?filter=new"
                                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 group transition-all"
                                    onClick={() => setShowProductsDropdown(false)}
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                      </div>
                                      <span className="text-sm font-medium text-gray-700">New Arrivals</span>
                                    </div>
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">12</span>
                                  </Link>

                                  <Link
                                    to="/products?filter=trending"
                                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 group transition-all"
                                    onClick={() => setShowProductsDropdown(false)}
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                      </div>
                                      <span className="text-sm font-medium text-gray-700">Trending Now</span>
                                    </div>
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">16</span>
                                  </Link>

                                  <Link
                                    to="/products?filter=sale"
                                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 group transition-all"
                                    onClick={() => setShowProductsDropdown(false)}
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                                        </svg>
                                      </div>
                                      <span className="text-sm font-medium text-gray-700">On Sale</span>
                                    </div>
                                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">18</span>
                                  </Link>
                                </div>

                                {/* View All Button */}
                                <Link
                                  to="/products"
                                  className="block w-full mt-4 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center font-medium hover:shadow-lg transition-all"
                                  onClick={() => setShowProductsDropdown(false)}
                                >
                                  View All Products →
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                      activeLink === link.id
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveLink(link.id)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="hidden md:block relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchInput && (
                <button
                  type="button"
                  onClick={() => setSearchInput('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </form>

            {/* Action Icons */}
            <div className="flex items-center space-x-3">
              <button 
                className="p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200 relative"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
              
              <button 
                className="p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200 relative"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Images */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-xl shadow-xl border border-gray-200 mb-4">
            <div className="p-4">
              
              {/* Mobile Search */}
              <div className="mb-6">
                <form onSubmit={handleMobileSearchSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchInput && (
                      <button
                        type="button"
                        onClick={() => setSearchInput('')}
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Mobile Products with Images */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Featured Products
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {featuredProducts.slice(0, 4).map((product) => (
                    <div 
                      key={product.id}
                      className="group cursor-pointer"
                      onClick={() => {
                        handleProductClick(product.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="relative overflow-hidden rounded-lg border border-gray-200 group-hover:border-purple-300">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-2">
                          <h4 className="text-xs font-medium text-gray-900 line-clamp-1">
                            {product.name}
                          </h4>
                          <p className="text-sm font-bold text-gray-900 mt-1">${product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Categories
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {categoriesWithImages.map((category) => (
                    <Link
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="relative overflow-hidden rounded-lg border border-gray-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-white">
                            {category.name}
                          </span>
                          <span className="text-xs bg-white/90 text-gray-800 px-1.5 py-0.5 rounded-full">
                            {category.count}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl font-medium ${
                      activeLink === link.id
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setActiveLink(link.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* View All Button for Mobile */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  to="/products"
                  className="block w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Products →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add CSS for animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out forwards;
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </nav>
  );
};

export default NavbarWithProductImages;
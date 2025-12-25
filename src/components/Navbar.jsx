import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="bg-gradient-to-r from-white to-gray-50 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                StyleVibe
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {['home', 'shop', 'new', 'sale', 'collection'].map((item) => (
              <a
                key={item}
                href={`/${item === 'home' ? '' : item}`}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeLink === item
                    ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
                onClick={() => setActiveLink(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            
            {/* Categories Dropdown */}
            <div className="relative group ml-2">
              <button className="flex items-center space-x-1 px-5 py-2 text-gray-600 hover:text-gray-900 font-medium rounded-full hover:bg-white transition-all duration-300 group">
                <span>Categories</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <a href="/category/men" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Men</span>
                    </a>
                    <a href="/category/women" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Women</span>
                    </a>
                    <a href="/category/kids" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Kids</span>
                    </a>
                    <a href="/category/accessories" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Accessories</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-3">
              <button className="hidden md:block p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200 relative group">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <p className="text-sm font-medium text-gray-700">Wishlist items</p>
                </div>
              </button>
              
              <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200 relative group">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              
              <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200 relative group">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <p className="text-sm font-medium text-gray-700 mb-2">Shopping Cart</p>
                  <p className="text-xs text-gray-500">3 items • $249.99</p>
                  <button className="mt-3 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                    View Cart
                  </button>
                </div>
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl border border-gray-100 my-4">
            <div className="p-4 space-y-1">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Mobile Links */}
              {['home', 'shop', 'new', 'sale', 'collection'].map((item) => (
                <a
                  key={item}
                  href={`/${item === 'home' ? '' : item}`}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-200 ${
                    activeLink === item
                      ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setActiveLink(item);
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="font-medium">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}

              {/* Mobile Categories */}
              <div className="pt-4 border-t border-gray-100">
                <p className="px-4 text-sm font-medium text-gray-500 mb-2">CATEGORIES</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Men', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', color: 'blue' },
                    { name: 'Women', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'pink' },
                    { name: 'Kids', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', color: 'yellow' },
                    { name: 'Accessories', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'green' }
                  ].map((category) => (
                    <a
                      key={category.name}
                      href={`/category/${category.name.toLowerCase()}`}
                      className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className={`w-12 h-12 bg-${category.color}-100 rounded-full flex items-center justify-center mb-2`}>
                        <svg className={`w-6 h-6 text-${category.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
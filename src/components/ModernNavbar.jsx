import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { id: 'home', name: 'Home', path: '/' },
    { id: 'collection', name: 'Collection', path: '/collection' },
    { id: 'about', name: 'About', path: '/about' },
    { id: 'contact', name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setActiveLink('home')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-900/10 to-gray-700/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                NEO
              </span>
              <p className="text-xs text-gray-500">Modern Essentials</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="relative group"
                onClick={() => setActiveLink(link.id)}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeLink === link.id
                    ? 'text-gray-900 bg-gray-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                }`}>
                  {link.name}
                </div>
                
                {/* Active Indicator */}
                {activeLink === link.id && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-900 rounded-full"></div>
                )}
                
                {/* Hover Effect */}
                {(hoveredLink === link.id && activeLink !== link.id) && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900/5 via-gray-900/10 to-gray-900/5"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Search */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 pl-10 pr-4 py-2.5 bg-gray-50/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-transparent text-sm placeholder-gray-400 transition-all duration-300"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              <button className="p-2.5 hover:bg-gray-100/50 rounded-xl transition-colors duration-300 group">
                <svg className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              
              <button className="p-2.5 hover:bg-gray-100/50 rounded-xl transition-colors duration-300 relative group">
                <svg className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs rounded-full flex items-center justify-center border-2 border-white">
                  3
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2.5 hover:bg-gray-100/50 rounded-xl transition-colors duration-300 group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-5 relative">
                  <span className={`absolute left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
                  <span className={`absolute left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-2'}`}></span>
                  <span className={`absolute left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 mb-4 animate-slideDown">
            <div className="p-6">
              
              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      activeLink === link.id
                        ? 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 border border-gray-200'
                        : 'text-gray-700 hover:bg-gray-50/50'
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

              {/* Mobile Search */}
              <div className="mt-6 pt-6 border-t border-gray-100/50">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-900 text-base"
                  />
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="py-3 px-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                  Sign In
                </button>
                <button className="py-3 px-4 border-2 border-gray-900 text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default ModernNavbar;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Products', count: 68 },
    { id: 'new', name: 'New Arrivals', count: 12 },
    { id: 'best', name: 'Best Sellers', count: 24 },
    { id: 'sale', name: 'On Sale', count: 18 },
    { id: 'trending', name: 'Trending', count: 16 },
    { id: 'jackets', name: 'Jackets', count: 8 },
    { id: 'footwear', name: 'Footwear', count: 10 },
    { id: 'tops', name: 'Tops', count: 14 },
    { id: 'accessories', name: 'Accessories', count: 12 },
    { id: 'hoodies', name: 'Hoodies', count: 6 },
    { id: 'bottoms', name: 'Bottoms', count: 8 },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'newest', name: 'Newest First' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'popular', name: 'Most Popular' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: '0-50', name: 'Under $50' },
    { id: '50-100', name: '$50 - $100' },
    { id: '100-200', name: '$100 - $200' },
    { id: '200+', name: '$200 & Above' },
  ];

  const filterOptions = [
    {
      title: 'Price Range',
      options: priceRanges,
      type: 'radio'
    },
    {
      title: 'Colors',
      options: [
        { id: 'blue', name: 'Blue', color: '#3B82F6' },
        { id: 'black', name: 'Black', color: '#000000' },
        { id: 'white', name: 'White', color: '#FFFFFF' },
        { id: 'gray', name: 'Gray', color: '#6B7280' },
        { id: 'brown', name: 'Brown', color: '#92400E' },
        { id: 'green', name: 'Green', color: '#10B981' },
        { id: 'red', name: 'Red', color: '#EF4444' },
        { id: 'purple', name: 'Purple', color: '#8B5CF6' },
      ],
      type: 'checkbox'
    },
    {
      title: 'Sizes',
      options: [
        { id: 'xs', name: 'XS' },
        { id: 's', name: 'S' },
        { id: 'm', name: 'M' },
        { id: 'l', name: 'L' },
        { id: 'xl', name: 'XL' },
        { id: 'xxl', name: 'XXL' },
      ],
      type: 'checkbox'
    },
    {
      title: 'Availability',
      options: [
        { id: 'in-stock', name: 'In Stock Only' },
        { id: 'new-arrival', name: 'New Arrivals' },
        { id: 'limited', name: 'Limited Edition' },
      ],
      type: 'checkbox'
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSortBy('featured');
    setSearchQuery('');
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // In a real app, you would update the displayed products
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Navbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between py-4 space-y-4 lg:space-y-0">
          
          {/* Left Section: Title and Breadcrumb */}
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Products</h1>
              <p className="text-sm text-gray-500">Browse our premium collection</p>
            </div>
            
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              <span className="text-gray-300">/</span>
              <a href="/products" className="text-purple-600 font-medium">Products</a>
              {selectedCategory !== 'all' && (
                <>
                  <span className="text-gray-300">/</span>
                  <span className="text-gray-700">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Right Section: Search and Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 lg:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <svg 
                  className="absolute left-3 top-3 w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </form>

            {/* Sort Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
                <span className="text-sm font-medium text-gray-700">
                  Sort: {sortOptions.find(s => s.id === sortBy)?.name}
                </span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSortBy(option.id)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        sortBy === option.id ? 'text-purple-600 bg-purple-50' : 'text-gray-700'
                      }`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="font-medium">Filters</span>
            </button>
          </div>
        </div>

        {/* Category Scroller */}
        <div className="overflow-x-auto py-4 scrollbar-hide">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/30'
                    : 'bg-gray-300'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filterOptions.map((section) => (
                  <div key={section.title} className="bg-white rounded-xl p-4 border border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-3">{section.title}</h3>
                    <div className="space-y-2">
                      {section.options.map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                        >
                          {section.type === 'checkbox' ? (
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                            />
                          ) : (
                            <input
                              type="radio"
                              name={section.title}
                              className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                            />
                          )}
                          
                          <div className="flex items-center space-x-2">
                            {option.color && (
                              <div
                                className="w-4 h-4 rounded-full border border-gray-300"
                                style={{ backgroundColor: option.color }}
                              />
                            )}
                            <span className="text-sm text-gray-700">{option.name}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Filter Actions */}
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Active filters:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== 'all' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
                        {categories.find(c => c.id === selectedCategory)?.name}
                        <button className="ml-2 text-purple-500 hover:text-purple-700">
                          ×
                        </button>
                      </span>
                    )}
                    {sortBy !== 'featured' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                        Sort: {sortOptions.find(s => s.id === sortBy)?.name}
                        <button className="ml-2 text-blue-500 hover:text-blue-700">
                          ×
                        </button>
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleClearFilters}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Summary */}
        <div className="py-3 border-t border-gray-200 bg-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              <span className="text-sm text-gray-600">
                Showing <span className="font-medium text-gray-900">1-8</span> of{" "}
                <span className="font-medium text-gray-900">68</span> products
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">View:</span>
              <div className="flex space-x-1">
                <button className="p-2 bg-gray-100 rounded-lg">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNavbar;
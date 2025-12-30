import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Add this import

// Sample product data
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
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Classic denim jacket with premium wash and comfortable fit",
    tags: ["new", "best", "trending"]
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
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Clean design sneakers for everyday comfort and style",
    tags: ["new", "trending", "sale"]
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
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Breathable linen shirt perfect for summer days",
    tags: ["best", "sale"]
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    category: "accessories",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Genuine leather crossbody bag with multiple compartments",
    tags: ["new", "best"]
  },
  {
    id: 5,
    name: "Oversized Hoodie",
    category: "hoodies",
    price: 74.99,
    originalPrice: 89.99,
    discount: 17,
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Comfortable oversized hoodie with premium cotton blend",
    tags: ["trending", "sale"]
  },
  {
    id: 6,
    name: "Chino Pants",
    category: "bottoms",
    price: 69.99,
    originalPrice: 84.99,
    discount: 18,
    rating: 4.5,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Classic chino pants with modern slim fit",
    tags: ["best"]
  },
  {
    id: 7,
    name: "Designer Sunglasses",
    category: "accessories",
    price: 189.99,
    originalPrice: 249.99,
    discount: 24,
    rating: 4.8,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Luxury designer sunglasses with UV protection",
    tags: ["new", "trending"]
  },
  {
    id: 8,
    name: "Wool Blend Coat",
    category: "jackets",
    price: 249.99,
    originalPrice: 299.99,
    discount: 17,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium wool blend coat for winter season",
    tags: ["new", "best"]
  },
  {
    id: 9,
    name: "Running Shoes",
    category: "footwear",
    price: 119.99,
    originalPrice: 149.99,
    discount: 20,
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Performance running shoes with cushion technology",
    tags: ["sale", "trending"]
  },
  {
    id: 10,
    name: "Silk Blouse",
    category: "tops",
    price: 89.99,
    originalPrice: 109.99,
    discount: 18,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Elegant silk blouse for formal occasions",
    tags: ["new"]
  }
];

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Get addToCart function from CartContext
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Parse query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    const category = params.get('category') || 'all';
    const filter = params.get('filter') || '';
    
    setSearchQuery(query);
    
    // Handle filter parameter (new, sale, trending, best)
    if (filter && ['new', 'sale', 'trending', 'best'].includes(filter)) {
      setSelectedCategory(filter);
    } else {
      setSelectedCategory(category);
    }
    
    filterProducts(query, category || filter);
  }, [location.search]);

  const filterProducts = (query = '', category = 'all') => {
    setLoading(true);
    
    setTimeout(() => {
      let results = [...allProducts];
      
      // Filter by search query
      if (query.trim()) {
        const searchTerm = query.toLowerCase().trim();
        results = results.filter(product =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
        );
      }
      
      // Filter by category
      if (category !== 'all') {
        if (['new', 'best', 'sale', 'trending'].includes(category)) {
          results = results.filter(product => 
            product.tags && product.tags.includes(category)
          );
        } else {
          results = results.filter(product => product.category === category);
        }
      }
      
      // Filter by price range
      if (priceRange !== 'all') {
        switch(priceRange) {
          case '0-50':
            results = results.filter(product => product.price <= 50);
            break;
          case '50-100':
            results = results.filter(product => product.price > 50 && product.price <= 100);
            break;
          case '100-200':
            results = results.filter(product => product.price > 100 && product.price <= 200);
            break;
          case '200+':
            results = results.filter(product => product.price > 200);
            break;
        }
      }
      
      // Sort results
      results = sortProducts(results, sortBy);
      
      setFilteredProducts(results);
      setLoading(false);
    }, 300);
  };

  const sortProducts = (products, sortType) => {
    const sorted = [...products];
    switch(sortType) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return sorted.sort((a, b) => b.id - a.id);
      default:
        return sorted;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/products');
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (searchQuery) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}&category=${category}`);
    } else {
      navigate(`/products?category=${category}`);
    }
    filterProducts(searchQuery, category);
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    const sortedProducts = sortProducts(filteredProducts, sortType);
    setFilteredProducts(sortedProducts);
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    filterProducts(searchQuery, selectedCategory);
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSearchQuery('');
    navigate('/products');
    setFilteredProducts(allProducts);
  };

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'new', name: 'New Arrivals', count: allProducts.filter(p => p.tags.includes('new')).length },
    { id: 'best', name: 'Best Sellers', count: allProducts.filter(p => p.tags.includes('best')).length },
    { id: 'sale', name: 'On Sale', count: allProducts.filter(p => p.discount > 0).length },
    { id: 'trending', name: 'Trending', count: allProducts.filter(p => p.tags.includes('trending')).length },
    { id: 'jackets', name: 'Jackets', count: allProducts.filter(p => p.category === 'jackets').length },
    { id: 'footwear', name: 'Footwear', count: allProducts.filter(p => p.category === 'footwear').length },
    { id: 'tops', name: 'Tops', count: allProducts.filter(p => p.category === 'tops').length },
    { id: 'accessories', name: 'Accessories', count: allProducts.filter(p => p.category === 'accessories').length },
    { id: 'hoodies', name: 'Hoodies', count: allProducts.filter(p => p.category === 'hoodies').length },
    { id: 'bottoms', name: 'Bottoms', count: allProducts.filter(p => p.category === 'bottoms').length },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'newest', name: 'Newest First' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: '0-50', name: 'Under $50' },
    { id: '50-100', name: '$50 - $100' },
    { id: '100-200', name: '$100 - $200' },
    { id: '200+', name: '$200 & Above' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {searchQuery 
                ? `Search Results for "${searchQuery}"`
                : selectedCategory !== 'all'
                ? categories.find(c => c.id === selectedCategory)?.name || 'Products'
                : 'All Products'
              }
            </h1>
            <p className="text-gray-600">
              {loading ? 'Searching...' : `${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'} found`}
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
              <svg 
                className="absolute left-4 top-4 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button
                type="submit"
                className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filters Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-lg mb-4"
            >
              <span className="font-semibold text-gray-900">Filters</span>
              <svg 
                className={`w-5 h-5 transform transition-transform ${showFilters ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-50 text-purple-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => handlePriceRangeChange(range.id)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition-colors ${
                        priceRange === range.id
                          ? 'bg-purple-50 text-purple-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{range.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== 'all' || priceRange !== 'all' || searchQuery) && (
                <button
                  onClick={handleClearFilters}
                  className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort Bar */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  {loading ? 'Loading...' : `Showing ${filteredProducts.length} of ${allProducts.length} products`}
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent"></div>
                <p className="mt-4 text-gray-600">Searching products...</p>
              </div>
            ) : (
              <>
                {/* No Results */}
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-600 mb-6">
                      {searchQuery 
                        ? `We couldn't find any products matching "${searchQuery}"`
                        : 'No products match the selected filters'}
                    </p>
                    <button
                      onClick={handleClearFilters}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      View All Products
                    </button>
                  </div>
                ) : (
                  /* Products Grid */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        {/* Product Image */}
                        <div className="relative overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {product.discount > 0 && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-bold">
                              -{product.discount}% OFF
                            </div>
                          )}
                          <div className="absolute top-4 right-4">
                            {product.tags && product.tags.includes('new') && (
                              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">NEW</span>
                            )}
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-medium text-purple-600 uppercase">
                              {product.category}
                            </span>
                            <div className="flex items-center space-x-1">
                              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-sm text-gray-700">{product.rating}</span>
                              <span className="text-sm text-gray-500">({product.reviews})</span>
                            </div>
                          </div>

                          <Link to={`/products/${product.id}`}>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-purple-600 cursor-pointer">
                              {product.name}
                            </h3>
                          </Link>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {product.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-gray-900">
                                  ${product.price.toFixed(2)}
                                </span>
                                {product.originalPrice && product.discount > 0 && (
                                  <span className="text-lg text-gray-400 line-through">
                                    ${product.originalPrice.toFixed(2)}
                                  </span>
                                )}
                              </div>
                              {product.discount > 0 && (
                                <div className="text-sm text-green-600 font-medium">
                                  Save ${(product.originalPrice - product.price).toFixed(2)}
                                </div>
                              )}
                            </div>
                            <div className="flex space-x-2">
                              <button 
                                onClick={(e) => handleAddToCart(product, e)}
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add
                              </button>
                              <Link
                                to={`/products/${product.id}`}
                                className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                              >
                                Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
const Collection = () => {
  const collections = [
    {
      id: 1,
      title: "Summer Collection",
      description: "Lightweight fabrics for warm days",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 24
    },
    {
      id: 2,
      title: "Winter Essentials",
      description: "Stay warm in style",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 18
    },
    {
      id: 3,
      title: "Formal Wear",
      description: "Elegance for special occasions",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 15
    },
    {
      id: 4,
      title: "Casual Comfort",
      description: "Everyday essentials",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 32
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections designed for every occasion and style
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-gray-200 mb-3">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {collection.count} items
                    </span>
                    <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Tops', count: 42, color: 'bg-blue-50' },
              { name: 'Bottoms', count: 36, color: 'bg-green-50' },
              { name: 'Dresses', count: 28, color: 'bg-pink-50' },
              { name: 'Accessories', count: 54, color: 'bg-purple-50' },
            ].map((category, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-xl">{['👕', '👖', '👗', '👜'][index]}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Items */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured in Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Linen Blazer",
                price: 189.99,
                image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                category: "Formal"
              },
              {
                name: "Wool Sweater",
                price: 129.99,
                image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                category: "Winter"
              },
              {
                name: "Cotton Dress",
                price: 89.99,
                image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                category: "Summer"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-gray-500">{item.category}</span>
                  <h3 className="font-bold text-gray-900 mt-1">{item.name}</h3>
                  <p className="text-lg font-bold text-gray-900 mt-2">${item.price}</p>
                  <button className="w-full mt-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
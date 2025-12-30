// In components/ProductsPage.jsx
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 99, image: '...' },
    { id: 2, name: 'Product 2', price: 149, image: '...' },
    // ... more products
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
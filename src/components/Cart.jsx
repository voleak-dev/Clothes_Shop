import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getCartTotal 
  } = useCart();
  
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [shippingMethod, setShippingMethod] = useState('standard');

  // Calculate totals
  const subtotal = getCartTotal();
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount
  const shippingCost = shippingMethod === 'express' ? 15.99 : shippingMethod === 'standard' ? 7.99 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal - discount + shippingCost + tax;

  const handleQuantityChange = (id, size, color, change) => {
    updateQuantity(id, size, color, change);
  };

  const handleRemoveItem = (id, size, color) => {
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      removeFromCart(id, size, color);
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.trim() === 'SAVE10') {
      setPromoApplied(true);
      alert('Promo code applied! 10% discount added.');
    } else if (promoCode.trim() === '') {
      alert('Please enter a promo code');
    } else {
      setPromoApplied(false);
      alert('Invalid promo code. Try "SAVE10" for 10% off.');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    // Check if all items are in stock
    const outOfStockItems = cartItems.filter(item => !item.inStock);
    if (outOfStockItems.length > 0) {
      alert('Some items in your cart are out of stock. Please remove them before checking out.');
      return;
    }
    
    alert('Proceeding to checkout!');
    // In real app, this would navigate to checkout page
  };

  const shippingMethods = [
    { id: 'standard', name: 'Standard Shipping', price: 7.99, duration: '5-7 business days' },
    { id: 'express', name: 'Express Shipping', price: 15.99, duration: '2-3 business days' },
    { id: 'free', name: 'Free Shipping', price: 0, duration: '7-10 business days', minOrder: 100 }
  ];

  const getItemTotal = (item) => {
    return item.price * item.quantity;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            You have {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items Section */}
            <div className="lg:w-2/3">
              {/* Cart Items List */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="border-b border-gray-100 last:border-b-0">
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Product Image */}
                        <div className="sm:w-32 sm:h-32 w-full h-48 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-600">
                                <Link to={`/products/${item.id}`} className="hover:underline">
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                              
                              {/* Size and Color */}
                              <div className="flex gap-4 mt-3">
                                <div>
                                  <span className="text-sm text-gray-600">Size:</span>
                                  <span className="ml-2 text-sm font-medium">{item.size}</span>
                                </div>
                                <div>
                                  <span className="text-sm text-gray-600">Color:</span>
                                  <span className="ml-2 text-sm font-medium">{item.color}</span>
                                </div>
                              </div>

                              {/* Stock Status */}
                              <div className="mt-2">
                                {item.inStock ? (
                                  <span className="text-sm text-green-600">
                                    ✓ In stock • {item.delivery}
                                  </span>
                                ) : (
                                  <span className="text-sm text-red-600">
                                    ✗ Out of stock
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Price and Actions */}
                            <div className="text-right">
                              <div className="mb-2">
                                <span className="text-xl font-bold text-gray-900">
                                  ${getItemTotal(item).toFixed(2)}
                                </span>
                                {item.originalPrice && item.originalPrice > item.price && (
                                  <div className="text-sm text-gray-400 line-through">
                                    ${(item.originalPrice * item.quantity).toFixed(2)}
                                  </div>
                                )}
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center justify-end space-x-3 mb-4">
                                <button 
                                  onClick={() => handleQuantityChange(item.id, item.size, item.color, -1)}
                                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                  disabled={item.quantity <= 1}
                                >
                                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                  </svg>
                                </button>
                                
                                <span className="text-lg font-medium min-w-[2rem] text-center">{item.quantity}</span>
                                
                                <button 
                                  onClick={() => handleQuantityChange(item.id, item.size, item.color, 1)}
                                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                >
                                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                  </svg>
                                </button>
                              </div>

                              {/* Unit Price */}
                              <div className="text-sm text-gray-500 mb-2">
                                ${item.price.toFixed(2)} each
                              </div>

                              {/* Remove Button */}
                              <button 
                                onClick={() => handleRemoveItem(item.id, item.size, item.color)}
                                className="text-sm text-red-600 hover:text-red-800 flex items-center justify-end gap-1 transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping and Clear Cart */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <Link 
                  to="/products"
                  className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </Link>
                
                <div className="flex gap-4">
                  <button 
                    onClick={clearCart}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Security Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-blue-900">Secure shopping</p>
                    <p className="text-xs text-blue-700 mt-1">Your personal information is protected with 256-bit SSL encryption.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                {/* Price Breakdown */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount (SAVE10)</span>
                      <span className="font-medium text-green-600">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</div>
                      <p className="text-sm text-gray-500">Including all taxes</p>
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Shipping Method</h3>
                  <div className="space-y-3">
                    {shippingMethods.map((method) => (
                      <label 
                        key={method.id}
                        className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                          shippingMethod === method.id 
                            ? 'border-purple-500 bg-purple-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            value={method.id}
                            checked={shippingMethod === method.id}
                            onChange={(e) => setShippingMethod(e.target.value)}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <div className="ml-3">
                            <span className="font-medium text-gray-900">{method.name}</span>
                            <p className="text-sm text-gray-500">{method.duration}</p>
                            {method.minOrder && subtotal < method.minOrder && (
                              <p className="text-xs text-red-500">
                                Add ${(method.minOrder - subtotal).toFixed(2)} more for free shipping
                              </p>
                            )}
                          </div>
                        </div>
                        <span className="font-medium text-gray-900">
                          {method.price === 0 ? 'FREE' : `$${method.price.toFixed(2)}`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Promo Code</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={promoCode.trim() === ''}
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-green-600 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Promo code applied! 10% off
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    Try "SAVE10" for 10% off your order
                  </p>
                </div>

                {/* Checkout Button */}
                <div className="mb-6">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition-all hover:from-purple-700 hover:to-blue-700"
                  >
                    Proceed to Checkout
                  </button>
                </div>

                {/* Payment Methods */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 mb-3 text-center">We accept</p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                    <div className="w-10 h-6 bg-yellow-500 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
                    <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-bold">PP</div>
                    <div className="w-10 h-6 bg-blue-300 rounded flex items-center justify-center text-white text-xs font-bold">AE</div>
                  </div>
                </div>

                {/* Return Policy */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">30-Day Return Policy</p>
                      <p className="text-xs text-gray-600 mt-1">Easy returns within 30 days of purchase</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-purple-900">Need help?</p>
                    <p className="text-xs text-purple-700 mt-1">
                      Call us at 1-800-STYLEHUB or{' '}
                      <a href="mailto:support@stylehub.com" className="underline hover:text-purple-900">
                        email support
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <div className="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to find amazing products!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg transition-all hover:from-purple-700 hover:to-blue-700"
              >
                Start Shopping
              </Link>
              <Link
                to="/search?q=best+sellers"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-colors"
              >
                View Best Sellers
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Popular Categories</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['Jackets', 'Footwear', 'Tops', 'Accessories', 'Sale'].map((category) => (
                  <Link
                    key={category}
                    to={`/products?category=${category.toLowerCase()}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { Button } from '../../../components/ui/shared/button';

const CartSidebar = () => {
  const { 
    cart, 
    cartCount, 
    cartSubtotal, 
    cartTax, 
    cartShipping, 
    cartTotal, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-black border-l border-white/10 z-50 flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-neon-green" />
            <h2 className="text-white text-xl font-bold">Shopping Cart</h2>
            <span className="bg-neon-green text-black text-sm font-bold px-2 py-1 rounded-full">
              {cartCount}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-600 mb-4" />
              <p className="text-gray-400 text-lg mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div 
                  key={`${item.product.id}-${item.selectedFlavor}-${item.selectedSize}-${index}`}
                  className="bg-white/5 border border-white/10 rounded-lg p-4"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-400 text-xs mb-2">
                        {item.product.brand}
                      </p>
                      
                      {/* Options */}
                      {(item.selectedFlavor || item.selectedSize) && (
                        <div className="flex gap-2 text-xs text-gray-500 mb-2">
                          {item.selectedFlavor && <span>Flavor: {item.selectedFlavor}</span>}
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        </div>
                      )}

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(
                              item.product.id, 
                              item.selectedFlavor, 
                              item.selectedSize, 
                              item.quantity - 1
                            )}
                            className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-white font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(
                              item.product.id, 
                              item.selectedFlavor, 
                              item.selectedSize, 
                              item.quantity + 1
                            )}
                            className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-neon-green font-bold">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(
                              item.product.id, 
                              item.selectedFlavor, 
                              item.selectedSize
                            )}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Summary & Checkout */}
        {cart.length > 0 && (
          <div className="border-t border-white/10 p-6 space-y-4">
            {/* Price Breakdown */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax (10%)</span>
                <span>${cartTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span>{cartShipping === 0 ? 'FREE' : `$${cartShipping.toFixed(2)}`}</span>
              </div>
              {cartSubtotal < 100 && (
                <p className="text-xs text-neon-green">
                  Add ${(100 - cartSubtotal).toFixed(2)} more for free shipping!
                </p>
              )}
              <div className="flex justify-between text-white text-lg font-bold pt-2 border-t border-white/10">
                <span>Total</span>
                <span className="text-neon-green">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Link to="/store/checkout" onClick={closeCart}>
              <Button className="w-full bg-neon-green text-black hover:bg-neon-green/80 font-bold text-lg py-6">
                Proceed to Checkout
              </Button>
            </Link>

            <button
              onClick={closeCart}
              className="w-full text-gray-400 hover:text-white transition-colors text-sm"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;

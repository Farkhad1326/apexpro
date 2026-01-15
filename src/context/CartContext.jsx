import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('apex_cart');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error('Cart parsing error:', error);
        localStorage.removeItem('apex_cart');
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('apex_cart', JSON.stringify(cart));
  }, [cart]);

  // Calculate cart totals
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const cartTax = cartSubtotal * 0.1; // 10% tax
  const cartShipping = cartSubtotal > 100 ? 0 : 9.99; // Free shipping over $100
  const cartTotal = cartSubtotal + cartTax + cartShipping;

  // Add item to cart
  const addToCart = (product, quantity = 1, options = {}) => {
    const { selectedFlavor, selectedSize } = options;
    
    // Check if item with same options already exists
    const existingItemIndex = cart.findIndex(
      item => 
        item.product.id === product.id && 
        item.selectedFlavor === selectedFlavor && 
        item.selectedSize === selectedSize
    );

    if (existingItemIndex > -1) {
      // Update quantity of existing item
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += quantity;
      setCart(newCart);
      toast.success(`Updated ${product.name} quantity in cart`);
    } else {
      // Add new item
      const newItem = {
        productId: product.id,
        product,
        quantity,
        selectedFlavor: selectedFlavor || (product.specifications?.flavor?.[0] !== 'N/A' ? product.specifications?.flavor?.[0] : null),
        selectedSize: selectedSize || (product.specifications?.size?.[0] !== 'N/A' ? product.specifications?.size?.[0] : null),
        addedAt: new Date().toISOString()
      };
      setCart([...cart, newItem]);
      toast.success(`${product.name} added to cart!`);
    }

    // Auto-open cart sidebar
    setIsCartOpen(true);
  };

  // Remove item from cart
  const removeFromCart = (productId, selectedFlavor, selectedSize) => {
    const newCart = cart.filter(
      item => !(
        item.product.id === productId && 
        item.selectedFlavor === selectedFlavor && 
        item.selectedSize === selectedSize
      )
    );
    setCart(newCart);
    toast.success('Item removed from cart');
  };

  // Update item quantity
  const updateQuantity = (productId, selectedFlavor, selectedSize, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, selectedFlavor, selectedSize);
      return;
    }

    const newCart = cart.map(item => {
      if (
        item.product.id === productId && 
        item.selectedFlavor === selectedFlavor && 
        item.selectedSize === selectedSize
      ) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(newCart);
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared');
  };

  // Open/close cart sidebar
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const value = {
    cart,
    cartCount,
    cartSubtotal,
    cartTax,
    cartShipping,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    openCart,
    closeCart,
    toggleCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

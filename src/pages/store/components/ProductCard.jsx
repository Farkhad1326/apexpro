import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Tag } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { Button } from '../../../components/ui/shared/button';
import { Badge } from '../../../components/ui/shared/badge';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link 
      to={`/store/product/${product.slug}`}
      className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-neon-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/20"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.discount > 0 && (
          <Badge className="bg-red-500 text-white border-none">
            <Tag className="w-3 h-3 mr-1" />
            {product.discount}% OFF
          </Badge>
        )}
        {product.bestseller && (
          <Badge className="bg-neon-green text-black border-none font-bold">
            BESTSELLER
          </Badge>
        )}
        {product.newArrival && (
          <Badge className="bg-blue-500 text-white border-none">
            NEW
          </Badge>
        )}
      </div>

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-black/20">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white text-lg font-bold">OUT OF STOCK</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand & Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400 uppercase tracking-wide">{product.brand}</span>
          <span className="text-xs text-neon-green">{product.subcategory}</span>
        </div>

        {/* Product Name */}
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-neon-green transition-colors">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-neon-green text-neon-green" />
            <span className="text-white font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({product.reviewCount} reviews)</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {product.discount > 0 ? (
              <>
                <span className="text-neon-green font-bold text-2xl">${product.price}</span>
                <span className="text-gray-500 text-sm line-through">${product.originalPrice}</span>
              </>
            ) : (
              <span className="text-neon-green font-bold text-2xl">${product.price}</span>
            )}
          </div>
          
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-neon-green text-black hover:bg-neon-green/80 font-bold"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

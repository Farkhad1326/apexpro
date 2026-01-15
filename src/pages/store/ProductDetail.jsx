import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, ChevronLeft, Check, Package, Truck, Shield } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Button } from '../../components/ui/shared/button';
import { Badge } from '../../components/ui/shared/badge';
import CartSidebar from './components/CartSidebar';
import ReviewsList from './components/ReviewsList';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.slug === slug);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/store" className="text-neon-green hover:underline">
            Back to Store
          </Link>
        </div>
      </div>
    );
  }

  // Set default selections
  React.useEffect(() => {
    if (product.specifications?.flavor && product.specifications.flavor[0] !== 'N/A') {
      setSelectedFlavor(product.specifications.flavor[0]);
    }
    if (product.specifications?.size && product.specifications.size[0] !== 'N/A') {
      setSelectedSize(product.specifications.size[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, quantity, {
      selectedFlavor: selectedFlavor || undefined,
      selectedSize: selectedSize || undefined
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumb */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Store
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Images */}
          <div>
            {/* Main Image */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`border-2 rounded-lg overflow-hidden transition-all ${
                      selectedImage === idx
                        ? 'border-neon-green'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-24 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.bestseller && (
                <Badge className="bg-neon-green text-black">BESTSELLER</Badge>
              )}
              {product.newArrival && (
                <Badge className="bg-blue-500 text-white">NEW ARRIVAL</Badge>
              )}
              {!product.inStock && (
                <Badge className="bg-red-500 text-white">OUT OF STOCK</Badge>
              )}
            </div>

            {/* Brand */}
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">{product.brand}</p>

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-neon-green text-neon-green'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-white font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              {product.discount > 0 ? (
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-neon-green">${product.price}</span>
                  <div>
                    <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                    <Badge className="ml-2 bg-red-500 text-white">Save {product.discount}%</Badge>
                  </div>
                </div>
              ) : (
                <span className="text-5xl font-bold text-neon-green">${product.price}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{product.description}</p>

            {/* Flavor Selection */}
            {product.specifications?.flavor && product.specifications.flavor[0] !== 'N/A' && (
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Flavor</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specifications.flavor.map(flavor => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedFlavor === flavor
                          ? 'border-neon-green bg-neon-green/10 text-neon-green'
                          : 'border-white/20 text-gray-400 hover:border-white/40'
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.specifications?.size && product.specifications.size[0] !== 'N/A' && (
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specifications.size.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? 'border-neon-green bg-neon-green/10 text-neon-green'
                          : 'border-white/20 text-gray-400 hover:border-white/40'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg text-white font-bold"
                >
                  -
                </button>
                <span className="text-white font-bold text-xl w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg text-white font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-neon-green text-black hover:bg-neon-green/80 font-bold text-lg py-6 mb-6"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>

            {/* Features */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-white font-bold text-lg mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <Package className="w-6 h-6 text-neon-green mx-auto mb-2" />
                <p className="text-xs text-gray-400">Secure Packaging</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <Truck className="w-6 h-6 text-neon-green mx-auto mb-2" />
                <p className="text-xs text-gray-400">Fast Shipping</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <Shield className="w-6 h-6 text-neon-green mx-auto mb-2" />
                <p className="text-xs text-gray-400">Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Tabs */}
        <div className="mt-16">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Product Information</h2>
            
            {/* Nutrition Facts */}
            {product.nutritionFacts && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Nutrition Facts</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-black/40 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Serving Size</p>
                    <p className="text-white font-bold">{product.nutritionFacts.servingSize}</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Calories</p>
                    <p className="text-white font-bold">{product.nutritionFacts.calories}</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Protein</p>
                    <p className="text-white font-bold">{product.nutritionFacts.protein}g</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Servings</p>
                    <p className="text-white font-bold">{product.nutritionFacts.servingsPerContainer}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-2">Ingredients:</p>
                  <p className="text-gray-300">{product.nutritionFacts.ingredients.join(', ')}</p>
                </div>
              </div>
            )}

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Specifications</h3>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Category</span>
                  <span className="text-white font-medium">{product.subcategory}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Brand</span>
                  <span className="text-white font-medium">{product.brand}</span>
                </div>
                {product.specifications?.weight && (
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Weight</span>
                    <span className="text-white font-medium">{product.specifications.weight}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <ReviewsList 
            productId={product.id} 
            productRating={product.rating}
            productReviewCount={product.reviewCount}
          />
        </div>
      </div>

      <CartSidebar />
    </div>
  );
};

export default ProductDetail;

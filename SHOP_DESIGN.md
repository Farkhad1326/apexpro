# Apexpro Shop Page - Architecture & Design

## Technology Stack Analysis

**Frontend Framework:** React 19.2.0 with Vite  
**Styling:** TailwindCSS 4.1.18 with custom neon-green accent (#D4F458)  
**UI Components:** Radix UI + Custom shadcn/ui components  
**Routing:** React Router DOM 7.11.0  
**Animations:** Framer Motion 12.26.2  
**State Management:** React Context API (existing: AuthContext, CartContext, ExerciseContext, PlanContext)  
**Icons:** Lucide React + React Icons  
**Toast Notifications:** React Hot Toast  

## Shop Page Architecture

### 1. Data Models

#### Product Model
```javascript
{
  id: string,
  name: string,
  slug: string,
  category: 'protein' | 'pre-workout' | 'creatine' | 'vitamins' | 'equipment' | 'accessories',
  subcategory: string,
  brand: string,
  price: number,
  originalPrice: number, // for discounts
  discount: number, // percentage
  inStock: boolean,
  stockCount: number,
  images: string[], // array of image URLs
  description: string,
  shortDescription: string,
  features: string[],
  nutritionFacts: {
    servingSize: string,
    servingsPerContainer: number,
    calories: number,
    protein: number,
    carbs: number,
    fat: number,
    ingredients: string[]
  },
  specifications: {
    weight: string,
    flavor: string[],
    size: string[]
  },
  rating: number, // average rating
  reviewCount: number,
  reviews: Review[],
  tags: string[],
  featured: boolean,
  bestseller: boolean,
  newArrival: boolean,
  createdAt: string,
  updatedAt: string
}
```

#### Review Model
```javascript
{
  id: string,
  productId: string,
  userId: string,
  userName: string,
  userAvatar: string,
  rating: number, // 1-5
  title: string,
  comment: string,
  verified: boolean, // verified purchase
  helpful: number, // helpful count
  images: string[], // review images
  createdAt: string
}
```

#### Cart Item Model
```javascript
{
  productId: string,
  product: Product,
  quantity: number,
  selectedFlavor: string,
  selectedSize: string,
  addedAt: string
}
```

#### Order Model
```javascript
{
  id: string,
  userId: string,
  items: CartItem[],
  subtotal: number,
  tax: number,
  shipping: number,
  discount: number,
  total: number,
  shippingAddress: Address,
  billingAddress: Address,
  paymentMethod: string,
  paymentStatus: 'pending' | 'completed' | 'failed',
  orderStatus: 'processing' | 'shipped' | 'delivered' | 'cancelled',
  trackingNumber: string,
  createdAt: string,
  updatedAt: string
}
```

### 2. Component Structure

```
src/pages/store/
├── Store.jsx (Main shop page)
├── ProductDetail.jsx (Individual product page)
├── Checkout.jsx (Checkout page)
├── OrderConfirmation.jsx (Order success page)
├── components/
│   ├── ProductCard.jsx (Product grid item)
│   ├── ProductGrid.jsx (Products listing)
│   ├── ProductFilters.jsx (Sidebar filters)
│   ├── SearchBar.jsx (Search component)
│   ├── CategoryTabs.jsx (Category navigation)
│   ├── CartSidebar.jsx (Shopping cart drawer)
│   ├── CartItem.jsx (Cart item component)
│   ├── ReviewCard.jsx (Review display)
│   ├── ReviewForm.jsx (Add review form)
│   ├── ReviewsList.jsx (Reviews listing)
│   ├── RatingStars.jsx (Star rating display)
│   ├── ProductImageGallery.jsx (Image carousel)
│   ├── CheckoutForm.jsx (Checkout form)
│   ├── PaymentForm.jsx (Payment integration)
│   └── OrderSummary.jsx (Order summary)
```

### 3. Context Structure

#### CartContext
```javascript
{
  cart: CartItem[],
  cartCount: number,
  cartTotal: number,
  addToCart: (product, quantity, options) => void,
  removeFromCart: (productId) => void,
  updateQuantity: (productId, quantity) => void,
  clearCart: () => void,
  isCartOpen: boolean,
  openCart: () => void,
  closeCart: () => void
}
```

### 4. Features Implementation

#### Product Filtering & Search
- **Categories:** Protein, Pre-Workout, Creatine, Vitamins, Equipment, Accessories
- **Filters:**
  - Price range slider
  - Brand checkboxes
  - Rating filter
  - In stock only toggle
  - Special tags (Featured, Bestseller, New Arrival)
- **Sorting:** Price (low to high, high to low), Rating, Newest, Bestseller
- **Search:** Real-time search with debouncing

#### Shopping Cart
- Persistent cart using localStorage
- Add/remove/update quantity
- Side drawer with smooth animations
- Cart summary with subtotal
- Quick checkout button

#### Checkout Process
1. Cart review
2. Shipping information
3. Payment method selection
4. Order confirmation

#### Payment Integration
- **Stripe Integration** (recommended for production)
- For MVP: Mock payment with form validation
- Payment methods: Credit Card, PayPal, Apple Pay (future)

#### Reviews & Ratings
- 5-star rating system
- Verified purchase badge
- Helpful/Not helpful voting
- Image upload for reviews
- Sort by: Most recent, Highest rating, Most helpful
- Filter by rating

### 5. Sample Product Categories

**Supplements:**
1. **Protein Powders** - Whey, Casein, Vegan, Isolate
2. **Pre-Workout** - Energy boosters, pump enhancers
3. **Creatine** - Monohydrate, HCL, blends
4. **Vitamins & Minerals** - Multivitamins, Omega-3, Vitamin D
5. **BCAAs & Amino Acids** - Recovery supplements
6. **Fat Burners** - Thermogenics, metabolism boosters

**Equipment:**
1. **Weights** - Dumbbells, kettlebells, weight plates
2. **Resistance Bands** - Loop bands, tube bands
3. **Gym Accessories** - Gloves, straps, belts, shakers
4. **Cardio Equipment** - Jump ropes, resistance trainers
5. **Apparel** - Gym wear, compression gear

### 6. Design System Integration

**Colors:**
- Primary: `#D4F458` (neon-green)
- Background: Dark theme with gradient overlays
- Cards: Semi-transparent dark cards with border glow
- Text: White primary, gray secondary

**Animations:**
- Framer Motion for page transitions
- Hover effects on product cards
- Smooth cart drawer slide-in
- Loading skeletons for products

**Typography:**
- Headings: Bold, large with neon-green accents
- Body: Clean, readable white text
- Prices: Emphasized with larger font and accent color

### 7. Routing Structure

```
/store - Main shop page
/store/category/:category - Category filtered view
/store/product/:slug - Product detail page
/store/cart - Full cart page (optional, using sidebar instead)
/store/checkout - Checkout page
/store/order-confirmation/:orderId - Order success page
```

## Implementation Plan

### Phase 1: Core Shop Page
- Product data structure and mock data
- Product grid with cards
- Basic filtering and search
- Category navigation

### Phase 2: Shopping Cart
- CartContext implementation
- Add to cart functionality
- Cart sidebar with animations
- Cart persistence

### Phase 3: Product Detail & Reviews
- Product detail page with gallery
- Reviews display
- Review submission form
- Rating system

### Phase 4: Checkout & Payment
- Checkout form
- Payment integration (mock)
- Order confirmation
- Order history (future)

## Next Steps

1. Create mock product data (20-30 products)
2. Implement CartContext
3. Build product components
4. Implement filtering and search
5. Build cart functionality
6. Create product detail page
7. Implement reviews system
8. Build checkout flow

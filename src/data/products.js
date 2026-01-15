export const products = [
  // PROTEIN POWDERS
  {
    id: 'prod-001',
    name: 'Whey Protein Isolate Premium',
    slug: 'whey-protein-isolate-premium',
    category: 'protein',
    subcategory: 'Whey Isolate',
    brand: 'ApexPro Nutrition',
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    inStock: true,
    stockCount: 150,
    images: [
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=800',
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800'
    ],
    description: 'Premium whey protein isolate with 25g of protein per serving. Fast-absorbing formula perfect for post-workout recovery. Low in carbs and fat, ideal for lean muscle building.',
    shortDescription: 'Premium whey isolate with 25g protein per serving',
    features: [
      '25g of pure protein per serving',
      'Fast absorption for quick recovery',
      'Low carb and low fat formula',
      'No artificial colors or sweeteners',
      'Mixes easily with water or milk'
    ],
    nutritionFacts: {
      servingSize: '30g',
      servingsPerContainer: 30,
      calories: 120,
      protein: 25,
      carbs: 2,
      fat: 1,
      ingredients: ['Whey Protein Isolate', 'Natural Flavors', 'Stevia', 'Sunflower Lecithin']
    },
    specifications: {
      weight: '900g',
      flavor: ['Chocolate', 'Vanilla', 'Strawberry', 'Unflavored'],
      size: ['900g', '2kg']
    },
    rating: 4.8,
    reviewCount: 234,
    tags: ['bestseller', 'high-protein', 'low-carb'],
    featured: true,
    bestseller: true,
    newArrival: false
  },
  {
    id: 'prod-002',
    name: 'Plant-Based Vegan Protein',
    slug: 'plant-based-vegan-protein',
    category: 'protein',
    subcategory: 'Vegan Protein',
    brand: 'GreenFit',
    price: 39.99,
    originalPrice: 39.99,
    discount: 0,
    inStock: true,
    stockCount: 89,
    images: [
      'https://images.unsplash.com/photo-1622484211941-e1c2e2c39cfd?w=800'
    ],
    description: 'Complete plant-based protein blend from pea, rice, and hemp. Perfect for vegans and those with dairy sensitivities. 22g of protein with all essential amino acids.',
    shortDescription: 'Complete vegan protein with 22g per serving',
    features: [
      '22g plant-based protein',
      'Complete amino acid profile',
      'Dairy-free and soy-free',
      'Easy digestion',
      'Organic ingredients'
    ],
    nutritionFacts: {
      servingSize: '33g',
      servingsPerContainer: 30,
      calories: 130,
      protein: 22,
      carbs: 4,
      fat: 2,
      ingredients: ['Pea Protein', 'Rice Protein', 'Hemp Protein', 'Natural Flavors', 'Stevia']
    },
    specifications: {
      weight: '1kg',
      flavor: ['Vanilla', 'Chocolate', 'Berry'],
      size: ['1kg']
    },
    rating: 4.6,
    reviewCount: 156,
    tags: ['vegan', 'organic', 'dairy-free'],
    featured: true,
    bestseller: false,
    newArrival: false
  },
  
  // PRE-WORKOUT
  {
    id: 'prod-003',
    name: 'Extreme Energy Pre-Workout',
    slug: 'extreme-energy-pre-workout',
    category: 'pre-workout',
    subcategory: 'Energy Booster',
    brand: 'ApexPro Nutrition',
    price: 44.99,
    originalPrice: 54.99,
    discount: 18,
    inStock: true,
    stockCount: 120,
    images: [
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800'
    ],
    description: 'Maximum energy and focus pre-workout formula with 300mg caffeine, beta-alanine, and citrulline malate. Explosive energy for intense training sessions.',
    shortDescription: 'High-stimulant pre-workout with 300mg caffeine',
    features: [
      '300mg caffeine for explosive energy',
      'Beta-alanine for endurance',
      'Citrulline malate for pump',
      'Enhanced focus and concentration',
      'Zero sugar'
    ],
    nutritionFacts: {
      servingSize: '15g',
      servingsPerContainer: 30,
      calories: 10,
      protein: 0,
      carbs: 2,
      fat: 0,
      ingredients: ['Caffeine Anhydrous', 'Beta-Alanine', 'Citrulline Malate', 'L-Tyrosine', 'Natural Flavors']
    },
    specifications: {
      weight: '450g',
      flavor: ['Fruit Punch', 'Blue Raspberry', 'Green Apple'],
      size: ['450g']
    },
    rating: 4.7,
    reviewCount: 189,
    tags: ['high-caffeine', 'energy', 'focus'],
    featured: true,
    bestseller: true,
    newArrival: false
  },
  {
    id: 'prod-004',
    name: 'Pump Matrix Pre-Workout',
    slug: 'pump-matrix-pre-workout',
    category: 'pre-workout',
    subcategory: 'Pump Enhancer',
    brand: 'IronFuel',
    price: 39.99,
    originalPrice: 39.99,
    discount: 0,
    inStock: true,
    stockCount: 75,
    images: [
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800'
    ],
    description: 'Stimulant-free pump formula with nitric oxide boosters. Perfect for evening workouts or those sensitive to caffeine.',
    shortDescription: 'Caffeine-free pump enhancer',
    features: [
      'Zero caffeine',
      'Maximum muscle pump',
      'Nitric oxide boosters',
      'Great for evening workouts',
      'Improved blood flow'
    ],
    nutritionFacts: {
      servingSize: '12g',
      servingsPerContainer: 30,
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0,
      ingredients: ['Citrulline Malate', 'Arginine AKG', 'Beetroot Extract', 'Pine Bark Extract']
    },
    specifications: {
      weight: '360g',
      flavor: ['Watermelon', 'Lemon Lime'],
      size: ['360g']
    },
    rating: 4.5,
    reviewCount: 98,
    tags: ['caffeine-free', 'pump', 'nitric-oxide'],
    featured: false,
    bestseller: false,
    newArrival: true
  },

  // CREATINE
  {
    id: 'prod-005',
    name: 'Micronized Creatine Monohydrate',
    slug: 'micronized-creatine-monohydrate',
    category: 'creatine',
    subcategory: 'Creatine Monohydrate',
    brand: 'ApexPro Nutrition',
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    inStock: true,
    stockCount: 200,
    images: [
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=800'
    ],
    description: 'Pure micronized creatine monohydrate for increased strength and muscle mass. 5g per serving, unflavored and easy to mix.',
    shortDescription: 'Pure creatine monohydrate, 5g per serving',
    features: [
      '5g pure creatine per serving',
      'Micronized for better absorption',
      'Increases strength and power',
      'Supports muscle growth',
      'Unflavored - mix with anything'
    ],
    nutritionFacts: {
      servingSize: '5g',
      servingsPerContainer: 100,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      ingredients: ['Creatine Monohydrate']
    },
    specifications: {
      weight: '500g',
      flavor: ['Unflavored'],
      size: ['500g', '1kg']
    },
    rating: 4.9,
    reviewCount: 412,
    tags: ['bestseller', 'strength', 'muscle-growth'],
    featured: true,
    bestseller: true,
    newArrival: false
  },

  // VITAMINS & MINERALS
  {
    id: 'prod-006',
    name: 'Complete Multivitamin for Athletes',
    slug: 'complete-multivitamin-athletes',
    category: 'vitamins',
    subcategory: 'Multivitamin',
    brand: 'VitalFit',
    price: 29.99,
    originalPrice: 34.99,
    discount: 14,
    inStock: true,
    stockCount: 145,
    images: [
      'https://images.unsplash.com/photo-1550572017-4814c6a4a2e3?w=800'
    ],
    description: 'Comprehensive multivitamin designed for active individuals. Contains all essential vitamins and minerals plus antioxidants.',
    shortDescription: 'Complete daily multivitamin for athletes',
    features: [
      'All essential vitamins and minerals',
      'Antioxidant support',
      'Immune system boost',
      'Energy metabolism support',
      'Easy-to-swallow tablets'
    ],
    nutritionFacts: {
      servingSize: '2 tablets',
      servingsPerContainer: 60,
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0,
      ingredients: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'B-Complex', 'Zinc', 'Magnesium', 'Iron']
    },
    specifications: {
      weight: '120 tablets',
      flavor: ['N/A'],
      size: ['120 tablets']
    },
    rating: 4.6,
    reviewCount: 203,
    tags: ['daily-health', 'immune-support', 'energy'],
    featured: false,
    bestseller: false,
    newArrival: false
  },
  {
    id: 'prod-007',
    name: 'Omega-3 Fish Oil 1000mg',
    slug: 'omega-3-fish-oil-1000mg',
    category: 'vitamins',
    subcategory: 'Omega-3',
    brand: 'PureHealth',
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    inStock: true,
    stockCount: 167,
    images: [
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800'
    ],
    description: 'High-quality fish oil with 1000mg omega-3 fatty acids per serving. Supports heart health, brain function, and reduces inflammation.',
    shortDescription: 'Premium omega-3 fish oil capsules',
    features: [
      '1000mg omega-3 per serving',
      'Supports heart health',
      'Brain function support',
      'Anti-inflammatory properties',
      'Molecularly distilled for purity'
    ],
    nutritionFacts: {
      servingSize: '2 softgels',
      servingsPerContainer: 90,
      calories: 20,
      protein: 0,
      carbs: 0,
      fat: 2,
      ingredients: ['Fish Oil', 'EPA', 'DHA', 'Gelatin', 'Glycerin']
    },
    specifications: {
      weight: '180 softgels',
      flavor: ['N/A'],
      size: ['180 softgels']
    },
    rating: 4.7,
    reviewCount: 178,
    tags: ['heart-health', 'brain-support', 'anti-inflammatory'],
    featured: false,
    bestseller: true,
    newArrival: false
  },

  // BCAA & AMINO ACIDS
  {
    id: 'prod-008',
    name: 'BCAA 2:1:1 Powder',
    slug: 'bcaa-211-powder',
    category: 'bcaa',
    subcategory: 'BCAA',
    brand: 'ApexPro Nutrition',
    price: 34.99,
    originalPrice: 39.99,
    discount: 13,
    inStock: true,
    stockCount: 110,
    images: [
      'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800'
    ],
    description: 'Branch Chain Amino Acids in optimal 2:1:1 ratio. Supports muscle recovery, reduces fatigue, and prevents muscle breakdown.',
    shortDescription: 'BCAA powder for recovery and endurance',
    features: [
      '5g BCAAs per serving',
      'Optimal 2:1:1 ratio',
      'Reduces muscle soreness',
      'Supports recovery',
      'Zero sugar'
    ],
    nutritionFacts: {
      servingSize: '7g',
      servingsPerContainer: 30,
      calories: 0,
      protein: 5,
      carbs: 0,
      fat: 0,
      ingredients: ['L-Leucine', 'L-Isoleucine', 'L-Valine', 'Natural Flavors', 'Citric Acid']
    },
    specifications: {
      weight: '210g',
      flavor: ['Fruit Punch', 'Lemon Lime', 'Watermelon'],
      size: ['210g', '420g']
    },
    rating: 4.5,
    reviewCount: 145,
    tags: ['recovery', 'endurance', 'muscle-protection'],
    featured: false,
    bestseller: false,
    newArrival: false
  },

  // EQUIPMENT - WEIGHTS
  {
    id: 'prod-009',
    name: 'Adjustable Dumbbells Set 5-25kg',
    slug: 'adjustable-dumbbells-5-25kg',
    category: 'equipment',
    subcategory: 'Dumbbells',
    brand: 'IronGrip',
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    inStock: true,
    stockCount: 35,
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800'
    ],
    description: 'Space-saving adjustable dumbbells that replace 15 sets of weights. Quick adjustment mechanism for seamless weight changes.',
    shortDescription: 'Adjustable dumbbells 5-25kg per hand',
    features: [
      'Adjustable from 5kg to 25kg',
      'Replaces 15 sets of dumbbells',
      'Quick-change dial system',
      'Durable steel construction',
      'Compact storage tray included'
    ],
    nutritionFacts: null,
    specifications: {
      weight: '50kg total',
      flavor: ['N/A'],
      size: ['5-25kg']
    },
    rating: 4.8,
    reviewCount: 89,
    tags: ['home-gym', 'space-saving', 'strength-training'],
    featured: true,
    bestseller: false,
    newArrival: false
  },
  {
    id: 'prod-010',
    name: 'Kettlebell Cast Iron 16kg',
    slug: 'kettlebell-cast-iron-16kg',
    category: 'equipment',
    subcategory: 'Kettlebells',
    brand: 'IronGrip',
    price: 49.99,
    originalPrice: 49.99,
    discount: 0,
    inStock: true,
    stockCount: 67,
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800'
    ],
    description: 'Professional-grade cast iron kettlebell with smooth finish. Perfect for swings, snatches, and functional training.',
    shortDescription: 'Cast iron kettlebell 16kg',
    features: [
      'Solid cast iron construction',
      'Smooth finish for comfort',
      'Wide handle for two-hand exercises',
      'Flat base for stability',
      'Professional grade'
    ],
    nutritionFacts: null,
    specifications: {
      weight: '16kg',
      flavor: ['N/A'],
      size: ['8kg', '12kg', '16kg', '20kg', '24kg']
    },
    rating: 4.7,
    reviewCount: 134,
    tags: ['functional-training', 'full-body', 'cardio'],
    featured: false,
    bestseller: false,
    newArrival: false
  },

  // EQUIPMENT - RESISTANCE BANDS
  {
    id: 'prod-011',
    name: 'Resistance Bands Set (5 Levels)',
    slug: 'resistance-bands-set-5-levels',
    category: 'equipment',
    subcategory: 'Resistance Bands',
    brand: 'FlexFit',
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    inStock: true,
    stockCount: 156,
    images: [
      'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800'
    ],
    description: 'Complete resistance bands set with 5 different resistance levels. Includes handles, door anchor, and ankle straps.',
    shortDescription: 'Complete resistance bands set with accessories',
    features: [
      '5 resistance levels (5-30 lbs)',
      'Includes handles and ankle straps',
      'Door anchor for home workouts',
      'Portable carrying bag',
      'Exercise guide included'
    ],
    nutritionFacts: null,
    specifications: {
      weight: '1kg',
      flavor: ['N/A'],
      size: ['Standard']
    },
    rating: 4.6,
    reviewCount: 267,
    tags: ['home-workout', 'portable', 'full-body'],
    featured: true,
    bestseller: true,
    newArrival: false
  },

  // ACCESSORIES
  {
    id: 'prod-012',
    name: 'Premium Lifting Gloves',
    slug: 'premium-lifting-gloves',
    category: 'accessories',
    subcategory: 'Gloves',
    brand: 'GripPro',
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    inStock: true,
    stockCount: 89,
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800'
    ],
    description: 'Padded lifting gloves with wrist support. Breathable material and anti-slip palm for maximum grip and protection.',
    shortDescription: 'Padded lifting gloves with wrist support',
    features: [
      'Extra padding for comfort',
      'Wrist support strap',
      'Breathable mesh material',
      'Anti-slip silicone palm',
      'Easy pull-off tabs'
    ],
    nutritionFacts: null,
    specifications: {
      weight: '100g',
      flavor: ['N/A'],
      size: ['S', 'M', 'L', 'XL']
    },
    rating: 4.4,
    reviewCount: 178,
    tags: ['grip', 'protection', 'comfort'],
    featured: false,
    bestseller: false,
    newArrival: false
  },
  {
    id: 'prod-013',
    name: 'Shaker Bottle 700ml',
    slug: 'shaker-bottle-700ml',
    category: 'accessories',
    subcategory: 'Shakers',
    brand: 'ApexPro Gear',
    price: 12.99,
    originalPrice: 14.99,
    discount: 13,
    inStock: true,
    stockCount: 234,
    images: [
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800'
    ],
    description: 'BPA-free shaker bottle with mixing ball and measurement markings. Leak-proof lid and easy-carry handle.',
    shortDescription: 'BPA-free shaker bottle 700ml',
    features: [
      'BPA-free plastic',
      'Leak-proof screw lid',
      'Mixing ball included',
      'Measurement markings',
      'Dishwasher safe'
    ],
    nutritionFacts: null,
    specifications: {
      weight: '150g',
      flavor: ['N/A'],
      size: ['700ml']
    },
    rating: 4.5,
    reviewCount: 312,
    tags: ['essential', 'portable', 'leak-proof'],
    featured: false,
    bestseller: true,
    newArrival: false
  },
  {
    id: 'prod-014',
    name: 'Weightlifting Belt Leather',
    slug: 'weightlifting-belt-leather',
    category: 'accessories',
    subcategory: 'Belts',
    brand: 'IronGrip',
    price: 59.99,
    originalPrice: 69.99,
    discount: 14,
    inStock: true,
    stockCount: 45,
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800'
    ],
    description: 'Genuine leather weightlifting belt for maximum support during heavy lifts. Double prong buckle for secure fit.',
    shortDescription: 'Genuine leather lifting belt',
    features: [
      'Genuine leather construction',
      '4-inch width for support',
      'Double prong buckle',
      'Reinforced stitching',
      'Ideal for squats and deadlifts'
    ],
    nutritionFacts: null,
    specifications: {
      weight: '500g',
      flavor: ['N/A'],
      size: ['S', 'M', 'L', 'XL']
    },
    rating: 4.8,
    reviewCount: 156,
    tags: ['support', 'heavy-lifting', 'safety'],
    featured: false,
    bestseller: false,
    newArrival: false
  },

  // MORE SUPPLEMENTS
  {
    id: 'prod-015',
    name: 'Casein Protein Slow Release',
    slug: 'casein-protein-slow-release',
    category: 'protein',
    subcategory: 'Casein',
    brand: 'NightFuel',
    price: 54.99,
    originalPrice: 64.99,
    discount: 15,
    inStock: true,
    stockCount: 78,
    images: [
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=800'
    ],
    description: 'Slow-digesting casein protein perfect for nighttime recovery. Provides steady amino acid release for up to 8 hours.',
    shortDescription: 'Slow-release casein for overnight recovery',
    features: [
      '24g protein per serving',
      'Slow digestion (6-8 hours)',
      'Perfect for bedtime',
      'Prevents muscle breakdown',
      'Creamy texture'
    ],
    nutritionFacts: {
      servingSize: '32g',
      servingsPerContainer: 28,
      calories: 130,
      protein: 24,
      carbs: 3,
      fat: 1,
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia', 'Cocoa Powder']
    },
    specifications: {
      weight: '900g',
      flavor: ['Chocolate', 'Vanilla'],
      size: ['900g']
    },
    rating: 4.6,
    reviewCount: 123,
    tags: ['slow-release', 'nighttime', 'recovery'],
    featured: false,
    bestseller: false,
    newArrival: true
  },
  {
    id: 'prod-016',
    name: 'Thermogenic Fat Burner',
    slug: 'thermogenic-fat-burner',
    category: 'fat-burner',
    subcategory: 'Thermogenic',
    brand: 'LeanFit',
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    inStock: true,
    stockCount: 92,
    images: [
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800'
    ],
    description: 'Advanced thermogenic formula to support metabolism and energy. Contains green tea extract, caffeine, and L-carnitine.',
    shortDescription: 'Thermogenic fat burner with metabolism support',
    features: [
      'Boosts metabolism',
      'Increases energy levels',
      'Contains green tea extract',
      'L-carnitine for fat transport',
      'Appetite control support'
    ],
    nutritionFacts: {
      servingSize: '2 capsules',
      servingsPerContainer: 60,
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0,
      ingredients: ['Green Tea Extract', 'Caffeine', 'L-Carnitine', 'CLA', 'Cayenne Pepper']
    },
    specifications: {
      weight: '120 capsules',
      flavor: ['N/A'],
      size: ['120 capsules']
    },
    rating: 4.3,
    reviewCount: 167,
    tags: ['weight-loss', 'metabolism', 'energy'],
    featured: false,
    bestseller: false,
    newArrival: false
  },
  {
    id: 'prod-017',
    name: 'Glutamine Powder 500g',
    slug: 'glutamine-powder-500g',
    category: 'bcaa',
    subcategory: 'Glutamine',
    brand: 'RecoverPro',
    price: 29.99,
    originalPrice: 34.99,
    discount: 14,
    inStock: true,
    stockCount: 134,
    images: [
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=800'
    ],
    description: 'Pure L-Glutamine powder for muscle recovery and immune support. 5g per serving, unflavored and easy to mix.',
    shortDescription: 'Pure glutamine for recovery and immunity',
    features: [
      '5g L-Glutamine per serving',
      'Supports muscle recovery',
      'Immune system support',
      'Gut health benefits',
      'Unflavored'
    ],
    nutritionFacts: {
      servingSize: '5g',
      servingsPerContainer: 100,
      calories: 20,
      protein: 5,
      carbs: 0,
      fat: 0,
      ingredients: ['L-Glutamine']
    },
    specifications: {
      weight: '500g',
      flavor: ['Unflavored'],
      size: ['500g']
    },
    rating: 4.7,
    reviewCount: 98,
    tags: ['recovery', 'immune-support', 'gut-health'],
    featured: false,
    bestseller: false,
    newArrival: false
  },
  {
    id: 'prod-018',
    name: 'Jump Rope Speed Rope',
    slug: 'jump-rope-speed-rope',
    category: 'equipment',
    subcategory: 'Cardio',
    brand: 'CardioFit',
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    inStock: true,
    stockCount: 178,
    images: [
      'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800'
    ],
    description: 'Professional speed rope with ball bearings for smooth rotation. Adjustable length and comfortable foam handles.',
    shortDescription: 'Speed rope for cardio and conditioning',
    features: [
      'Ball bearing system',
      'Adjustable length',
      'Foam grip handles',
      'Lightweight design',
      'Carrying pouch included'
    ],
    nutritionFacts: null,
    specifications: {
      weight: '200g',
      flavor: ['N/A'],
      size: ['Adjustable']
    },
    rating: 4.5,
    reviewCount: 223,
    tags: ['cardio', 'portable', 'conditioning'],
    featured: false,
    bestseller: true,
    newArrival: false
  },
  {
    id: 'prod-019',
    name: 'Vitamin D3 5000 IU',
    slug: 'vitamin-d3-5000-iu',
    category: 'vitamins',
    subcategory: 'Vitamin D',
    brand: 'VitalFit',
    price: 14.99,
    originalPrice: 19.99,
    discount: 25,
    inStock: true,
    stockCount: 267,
    images: [
      'https://images.unsplash.com/photo-1550572017-4814c6a4a2e3?w=800'
    ],
    description: 'High-potency Vitamin D3 for bone health, immune support, and mood regulation. Easy-to-swallow softgels.',
    shortDescription: 'Vitamin D3 5000 IU for immunity and bones',
    features: [
      '5000 IU per softgel',
      'Supports bone health',
      'Immune system boost',
      'Mood support',
      'High absorption formula'
    ],
    nutritionFacts: {
      servingSize: '1 softgel',
      servingsPerContainer: 120,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      ingredients: ['Vitamin D3 (Cholecalciferol)', 'Olive Oil', 'Gelatin']
    },
    specifications: {
      weight: '120 softgels',
      flavor: ['N/A'],
      size: ['120 softgels']
    },
    rating: 4.8,
    reviewCount: 345,
    tags: ['bone-health', 'immune-support', 'mood'],
    featured: false,
    bestseller: true,
    newArrival: false
  },
  {
    id: 'prod-020',
    name: 'Gym Towel Microfiber',
    slug: 'gym-towel-microfiber',
    category: 'accessories',
    subcategory: 'Towels',
    brand: 'ApexPro Gear',
    price: 14.99,
    originalPrice: 14.99,
    discount: 0,
    inStock: true,
    stockCount: 189,
    images: [
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800'
    ],
    description: 'Quick-dry microfiber gym towel with carrying bag. Lightweight, absorbent, and antibacterial.',
    shortDescription: 'Quick-dry microfiber gym towel',
    features: [
      'Ultra-absorbent microfiber',
      'Quick-drying',
      'Antibacterial treatment',
      'Lightweight and compact',
      'Carrying bag included'
    ],
    nutritionFacts: null,
    specifications: {
      weight: '150g',
      flavor: ['N/A'],
      size: ['40x80cm']
    },
    rating: 4.6,
    reviewCount: 156,
    tags: ['essential', 'hygiene', 'portable'],
    featured: false,
    bestseller: false,
    newArrival: false
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'protein', name: 'Protein', count: products.filter(p => p.category === 'protein').length },
  { id: 'pre-workout', name: 'Pre-Workout', count: products.filter(p => p.category === 'pre-workout').length },
  { id: 'creatine', name: 'Creatine', count: products.filter(p => p.category === 'creatine').length },
  { id: 'vitamins', name: 'Vitamins', count: products.filter(p => p.category === 'vitamins').length },
  { id: 'bcaa', name: 'BCAA & Aminos', count: products.filter(p => p.category === 'bcaa').length },
  { id: 'fat-burner', name: 'Fat Burners', count: products.filter(p => p.category === 'fat-burner').length },
  { id: 'equipment', name: 'Equipment', count: products.filter(p => p.category === 'equipment').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
];

export const brands = [...new Set(products.map(p => p.brand))].sort();

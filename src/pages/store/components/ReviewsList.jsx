import React, { useState } from 'react';
import { Star } from 'lucide-react';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import { getProductReviews } from '../../../data/reviews';

const ReviewsList = ({ productId, productRating, productReviewCount }) => {
  const [reviews, setReviews] = useState(getProductReviews(productId));
  const [sortBy, setSortBy] = useState('recent');
  const [filterRating, setFilterRating] = useState(0);

  const handleReviewSubmitted = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  // Filter and sort reviews
  const filteredReviews = reviews
    .filter(review => filterRating === 0 || review.rating === filterRating)
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'highest':
          return b.rating - a.rating;
        case 'helpful':
          return b.helpful - a.helpful;
        default:
          return 0;
      }
    });

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(r => r.rating === rating).length;
    const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
    return { rating, count, percentage };
  });

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Customer Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Overall Rating */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <span className="text-6xl font-bold text-white">{productRating}</span>
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(productRating)
                          ? 'fill-neon-green text-neon-green'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-400">Based on {productReviewCount} reviews</p>
              </div>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <button
                key={rating}
                onClick={() => setFilterRating(filterRating === rating ? 0 : rating)}
                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  filterRating === rating ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <span className="text-white text-sm w-12">{rating} stars</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-neon-green"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-gray-400 text-sm w-8">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Write Review Form */}
      <ReviewForm productId={productId} onReviewSubmitted={handleReviewSubmitted} />

      {/* Reviews List */}
      <div>
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">
            {filteredReviews.length} {filteredReviews.length === 1 ? 'Review' : 'Reviews'}
            {filterRating > 0 && ` (${filterRating} stars)`}
          </h3>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
          >
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rating</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>

        {/* Reviews */}
        {filteredReviews.length > 0 ? (
          <div className="space-y-4">
            {filteredReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center">
            <p className="text-gray-400 text-lg">
              {filterRating > 0
                ? `No ${filterRating}-star reviews yet`
                : 'No reviews yet. Be the first to review this product!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsList;

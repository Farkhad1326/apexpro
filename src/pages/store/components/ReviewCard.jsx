import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle } from 'lucide-react';
import { Button } from '../../../components/ui/shared/button';
import { Badge } from '../../../components/ui/shared/badge';

const ReviewCard = ({ review }) => {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpfulCount(helpfulCount + 1);
      setHasVoted(true);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <img
          src={review.userAvatar}
          alt={review.userName}
          className="w-12 h-12 rounded-full"
        />

        {/* User Info & Rating */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-white font-semibold">{review.userName}</h4>
            {review.verified && (
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 text-xs">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified Purchase
              </Badge>
            )}
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? 'fill-neon-green text-neon-green'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm">{formatDate(review.createdAt)}</span>
          </div>

          {/* Review Title */}
          {review.title && (
            <h5 className="text-white font-semibold mb-2">{review.title}</h5>
          )}
        </div>
      </div>

      {/* Review Content */}
      <p className="text-gray-300 mb-4 leading-relaxed">{review.comment}</p>

      {/* Review Images */}
      {review.images && review.images.length > 0 && (
        <div className="flex gap-2 mb-4">
          {review.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Review ${idx + 1}`}
              className="w-20 h-20 object-cover rounded-lg border border-white/10"
            />
          ))}
        </div>
      )}

      {/* Helpful Button */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <button
          onClick={handleHelpful}
          disabled={hasVoted}
          className={`flex items-center gap-2 text-sm transition-colors ${
            hasVoted
              ? 'text-neon-green'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <ThumbsUp className={`w-4 h-4 ${hasVoted ? 'fill-neon-green' : ''}`} />
          <span>Helpful ({helpfulCount})</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;

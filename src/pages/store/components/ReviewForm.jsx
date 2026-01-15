import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { Button } from '../../../components/ui/shared/button';
import { Input } from '../../../components/ui/shared/input';
import { Label } from '../../../components/ui/shared/label';
import toast from 'react-hot-toast';

const ReviewForm = ({ productId, onReviewSubmitted }) => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error('Please login to submit a review');
      return;
    }

    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    if (!comment.trim()) {
      toast.error('Please write a review');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newReview = {
        id: 'rev-' + Math.random().toString(36).substr(2, 9),
        productId,
        userId: user.id || 'user-' + Math.random().toString(36).substr(2, 9),
        userName: user.name || 'Anonymous',
        userAvatar: user.avatar || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
        rating,
        title,
        comment,
        verified: false,
        helpful: 0,
        images: [],
        createdAt: new Date().toISOString()
      };

      // Reset form
      setRating(0);
      setTitle('');
      setComment('');
      setIsSubmitting(false);

      toast.success('Review submitted successfully!');

      if (onReviewSubmitted) {
        onReviewSubmitted(newReview);
      }
    }, 1000);
  };

  if (!user) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
        <p className="text-gray-400 mb-4">Please login to write a review</p>
        <Button className="bg-neon-green text-black hover:bg-neon-green/80">
          Login
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Write a Review</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div>
          <Label className="text-white mb-3 block">Your Rating *</Label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoverRating || rating)
                      ? 'fill-neon-green text-neon-green'
                      : 'text-gray-600'
                  }`}
                />
              </button>
            ))}
            {rating > 0 && (
              <span className="text-white ml-2 self-center">
                {rating} {rating === 1 ? 'star' : 'stars'}
              </span>
            )}
          </div>
        </div>

        {/* Review Title */}
        <div>
          <Label htmlFor="title" className="text-white">Review Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Sum up your experience..."
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
            maxLength={100}
          />
        </div>

        {/* Review Comment */}
        <div>
          <Label htmlFor="comment" className="text-white">Your Review *</Label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts about this product..."
            rows={5}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-green resize-none"
            maxLength={1000}
          />
          <p className="text-xs text-gray-500 mt-1">
            {comment.length}/1000 characters
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || rating === 0 || !comment.trim()}
          className="w-full bg-neon-green text-black hover:bg-neon-green/80 font-bold"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;

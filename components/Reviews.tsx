import React from 'react';
import SectionWrapper from './SectionWrapper';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <SectionWrapper id="reviews" className="bg-light overflow-hidden py-16">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-primary mb-2">Google Reviews</h2>
        <div className="flex justify-center text-secondary gap-1 text-2xl mb-2">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="font-sans text-xs text-gray-500 uppercase tracking-widest">What Clients Say</p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap py-4">
            {/* Original Set */}
            {REVIEWS.map((review) => (
              <ReviewCard key={`orig-${review.id}`} review={review} />
            ))}
            {/* Duplicate Set for infinite loop */}
            {REVIEWS.map((review) => (
              <ReviewCard key={`dup-${review.id}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

// Helper Component for consistent styling
const ReviewCard: React.FC<{ review: any }> = ({ review }) => (
  <div className="w-[350px] md:w-[450px] bg-white p-8 border border-gray-200 shadow-sm flex-shrink-0 whitespace-normal rounded-sm">
    <div className="flex text-secondary mb-4 text-lg">
      {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
    </div>
    <p className="font-serif text-base text-gray-700 italic mb-6 leading-relaxed min-h-[80px]">"{review.text}"</p>
    <div className="border-t border-gray-100 pt-4">
      <p className="font-sans font-bold text-primary">{review.name}</p>
      <p className="font-sans text-xs text-gray-500 uppercase tracking-widest">{review.role}</p>
    </div>
  </div>
);

export default Reviews;
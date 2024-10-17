import React, { useState } from 'react';
import './App.css'; 

const StarRating = ({ onRatingSelect }) => {
  const [rating, setRating] = useState(0);  
  const [hover, setHover] = useState(0);    

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
    if (onRatingSelect) {
      onRatingSelect(ratingValue); 
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRatingClick(ratingValue)}
            />
            <span
              className="star"
              style={{ color: ratingValue <= (hover || rating) ? 'gold' : 'lightgray' }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
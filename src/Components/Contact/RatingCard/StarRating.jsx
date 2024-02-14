import React, { useState, useEffect } from "react";
import "./StarRating.css";
const StarRating = () => {
  const defaultRatingIndex = 0;
  const [currentRatingIndex, setCurrentRatingIndex] =
    useState(defaultRatingIndex);
  const ratings = [
    { emoji: "", name: "Give us rating" },
    { emoji: "😔", name: "Very Poor" },
    { emoji: "🙁", name: "Poor" },
    { emoji: "🙂", name: "Good" },
    { emoji: "🤩", name: "Very Good" },
    { emoji: "🥰", name: "Excellent" },
  ];

  const Star = ({ index }) => (
    <div
      className={`star ${index === currentRatingIndex ? "selected" : ""}`}
      onMouseOver={() => setCurrentRatingIndex(index)}
      onMouseOut={() => setCurrentRatingIndex(defaultRatingIndex)}
      onClick={() =>
        setCurrentRatingIndex(
          index === currentRatingIndex ? defaultRatingIndex : index
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-star"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </div>
  );

  return (
  
      <div className="container justify-center items-center font-Geologica ">
        <div className="info">
          <div className="emoji">{ratings[currentRatingIndex].emoji}</div>
          <div className="status">{ratings[currentRatingIndex].name}</div>
        </div>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} index={5 - i} />
          ))}
        </div>
      </div>
   
  );
};

export default StarRating;

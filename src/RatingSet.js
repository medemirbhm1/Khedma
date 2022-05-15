import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ratingSet.css";
function RatingSet({ rating, setRating }) {
  return (
    <div className="rating">
      {[...Array(5)].map((star, i) => (
        <span
          key={i}
          onClick={
            setRating
              ? () => {
                  setRating(i + 1);
                }
              : null
          }
          className={`${i < rating ? "active" : null}`}
        >
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
    </div>
  );
}
export default RatingSet;

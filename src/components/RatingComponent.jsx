import React from "react";
import ReactStars from 'react-rating-stars-component';

const RatingComponent = ({ rating }) => {
  return (
    <div>
      <ReactStars
        count={5}
        value={rating} 
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        edit={false}
      />
    </div>
  );
};

export default RatingComponent;

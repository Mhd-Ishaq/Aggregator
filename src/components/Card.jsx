import React from "react";
import LOCATION from "../assests/location.png"
import RATING from "../assests/star.svg"

const Card = ({item,index,handleClick}) => {
    const{ image, title, rating, review, address, feature, price } = item;
  return (
    <div className="card" onClick={()=>handleClick(index)}>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="details-cointainer">
      <div className="details">
        <h4>{title}</h4>
        <div className="ratings">
        <img src={RATING} alt="" />
          {rating}({review} reviews)
        </div>
      </div>
      <div className="location"> 
      <img src={LOCATION} alt="" />
      <p>{ address}</p></div>
      <div className="price">
        <p>{feature}</p>
        <h4> ₹ {price}</h4>
      </div>
    </div>
    </div>
  );
};

export default Card;

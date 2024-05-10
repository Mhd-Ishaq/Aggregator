import React from "react";
import RATING from "../assests/star.svg";

const ProductCard = ({ item, index, handleClick, isworkShop }) => {
  const { image, title, rating, review, price } = item;
  return (
    <div className="container" key={index} onClick={() => handleClick(index)}>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      {isworkShop ? (
        <div className="details-cointainer">
          <div className="ratings ratingss">
            <img src={RATING} alt="" />
            <h4> {rating}k likes</h4>
          </div>
          <h4 style={{ marginBottom: "1rem" }}>{title}</h4>
          <p> {"Genre"}</p>
        </div>
      ) : (
        <div className="details-cointainer">
          <h4>{title}</h4>
          <h4> ₹ {price}</h4>
          <div className="ratings">
            <img src={RATING} alt="" />
            {rating}({review} reviews)
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

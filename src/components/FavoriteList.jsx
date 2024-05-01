import React from "react";
import Card from "./Card";
import Arrow from "../assests/right-arrow-svgrepo-com.svg";

const FavoriteList = ({ header, data, specific = false, handleClick }) => {
  return (
    <div className="favorite-container products-container">
      <div
        className={specific ? "not-visible" : `header-container`}
        onClick={handleClick}
      >
        <h2>{header}</h2>
        <img src={Arrow} alt="" />
      </div>
      <div className="favorite-list">
        {data?.map((item, index) => (
          <div className="favorite-item" key={index}>
            <Card item={item} index={index} handleClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;

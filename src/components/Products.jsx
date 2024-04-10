import React from "react";
import Arrow from "../assests/right-arrow-svgrepo-com.svg";
import ProductCard from "./ProductCard";


const Products = ({ header = "", data, handleClick, specific = false }) => {
  return (
    <div className="products-container">
      <div className={specific ? "not-visible" : `header-container`} onClick={handleClick}>
        <h2>{header}</h2>
        <img src={Arrow} alt="" />
      </div>
      <div className="content">
        {data.map((item, index) => (
          <ProductCard item={item} index={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Products;




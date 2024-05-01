import React from "react";
import Arrow from "../assests/right-arrow-svgrepo-com.svg";
import ProductCard from "./ProductCard";

const Products = ({
  header = "",
  data,
  handleClick,
  specific = false,
  sortedBy = "",
}) => {
  
  const sortProducts = (a, b) => {
    switch (sortedBy) {
      case "popularity":
        return b.rating - a.rating; // Sort by rating (descending)
      case "priceLowToHigh":
        return a.price - b.price; // Sort by price low to high
      case "priceHighToLow":
        return b.price - a.price; // Sort by price high to low
      case "newestFirst":
        return b.id - a.id; // Sort by ID (assuming higher ID means newer product)
      case "discount":
        // Implement your custom sorting logic for discount
        // For example, if you have a discount property in the product object:
        // return b.discount - a.discount; // Sort by discount (descending)
        // If not, you need to adjust this logic based on your data structure
        return 0; // Placeholder for custom logic
      default:
        return 0; // No sorting
    }
  };

  // Sort the products array based on the selected sorting option
  const sortedProducts = data.slice().sort(sortProducts);

  return (
    <div className="products-container">
      <div
        className={specific ? "not-visible" : `header-container`}
        onClick={handleClick}
      >
        <h2>{header}</h2>
        <img src={Arrow} alt="" />
      </div>
      <div className="content">
        {sortedProducts.map((item, index) => (
          <ProductCard item={item} index={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Products;

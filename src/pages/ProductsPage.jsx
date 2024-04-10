import React from "react";
import Carousel from "../components/carousel";
import image from "../assests/model.png";
import { useNavigate } from "react-router-dom";
import { data, data_1 } from "../mockdata/Data";
import Products from "../components/Products";
import image_2 from "../assests/product-1.jpg";
import image_3 from "../assests/product-2.jpg";
import image_4 from "../assests/product-3.jpg";

const ProductsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  const slides = [
    {
      imageUrl: image_2,
      title: "Great products for you skin kkkkkkkkkkk jhhhhhhhhhhhhhhhhh",
      description: "Description for Slide 1",
    },
    {
      imageUrl: image,
      title: "Slide 2",
      description: "Description for Slide 2",
    },
    {
      imageUrl: image_3,
      title: "Slide 3",
      description: "Description for Slide 3",
    },
  ];

  return (
    <div className="shop-container">
      <Carousel slides={slides} handleSliderClick={handleClick} />
      <div className="div"></div>
      <Products
        header={"The Top Sellings"}
        data={data}
        handleClick={handleClick}
      />
      <Products
        header={"All Products"}
        data={data_1}
        handleClick={handleClick}
      />
    </div>
  );
};

export default ProductsPage;

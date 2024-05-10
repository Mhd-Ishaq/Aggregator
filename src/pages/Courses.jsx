import React from "react";
import Carousel from "../components/carousel";

import { useNavigate } from "react-router-dom";
import { Most_Viewed, Live_Events } from "../mockdata/Data";
import Products from "../components/Products";
import image from "../assests/photo-workshop.jpg";
import image_2 from "../assests/lecture-hall.jpg";
import image_3 from "../assests/workshop-training.jpg";

const Courses = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/workshops");
  };
  const slides = [
    {
      imageUrl: image_2,
      title: "Live WorkShops",
      description: "Description for first Slide",
    },
    {
      imageUrl: image,
      title: "Our Most Watched Seminars",
      description: "Description for Slide 2",
    },
    {
      imageUrl: image_3,
      title: "Something Exiting is coming",
      description: "Description for Slide 3",
    },
  ];

  return (
    <div className="shop-container">
      <Carousel slides={slides} handleSliderClick={handleClick} />
      <div className="div"></div>
      <Products
        header={"Most Watched"}
        data={Most_Viewed}
        handleClick={handleClick}
        isworkShop={true}
      />
      <Products
        header={"Live Events"}
        data={Live_Events}
        handleClick={handleClick}
        isworkShop={true}
      />
    </div>
  );
};

export default Courses;

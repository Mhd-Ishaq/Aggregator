import React from "react";
import Card from "./Card";
import Model from "../assests/model.png";
import { useNavigate } from "react-router-dom";


const FavoriteLIst = () => {
const navigate = useNavigate();
const handleClick = (id) =>{
console.log(data[id]);
navigate(`/shop/${id}`)


}
  const data = [
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 45000,
    },
    {
      image: Model,
      title: "This is our best product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 29990,
    },
  ];

  return (
    <div className="favorite-container">
      <h1>OUR BEST PRODUCTS</h1>
      <div className="favorite-list">
        {data.map((item, index) => (
          <div className="favorite-item" key={index}>
            <Card item={item}index={index} handleClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteLIst;

import React from 'react';
import { useParams } from 'react-router-dom';
import Model from "../assests/model.png";


const SpeciicProductPage = () => {
    let { id } = useParams();
    const data = [
        {
          image: Model,
          title: "This is hiiii",
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
      ];
  return (
    <div onClick={()=>console.log(data[id])}>SpeciicProductList</div>
  )
}

export default SpeciicProductPage;
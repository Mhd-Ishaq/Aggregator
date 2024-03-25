import React from "react";
import Model from "../assests/model.png";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const data = [
    {
      image: Model,
      title: "Shop",
      to: "/shop",
    },
    {
      image: Model,
      title: "Bookings",
      to: "/bookings",
    },
    {
      image: Model,
      title: "Workshops",
      to: "/courses",
    },
  ];
  return (
    <div className="services">
      <div className="heading">
        <h1 className="item">What we do ?</h1>
        <p className="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          repellendus optio, obcaecati cupiditate ipsum voluptatibus, recusandae
          facere deleniti alias sit accusamus expedita laudantium molestias.
          Distinctio voluptates modi beatae possimus! Neque?
        </p>
      </div>
      <div className="content">
        {data.map((item, index) => {
          const { image, title, to } = item;
          return (
            <div key={index} className="service-container">
              <div className="item"></div>
              <div className="img-container">
                <img src={image} alt="" />
              </div>
              <button className="title" onClick={() => navigate(to)}>
                {title}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

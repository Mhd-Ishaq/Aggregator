import React from "react";
import Products from "../components/Products";
import { All_Events } from "../mockdata/Data";
import { useNavigate } from "react-router-dom";

const WorkshopsPage = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/workshops/${id}`);
  };

  return (
    <div className="shop-containr">
      <Products
        data={All_Events}
        handleClick={handleClick}
        specific={true}
        isworkShop={true}
      />
    </div>
  );
};
export default WorkshopsPage;

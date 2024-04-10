import React from "react";
import Products from "../components/Products";
import { data_2 } from "../mockdata/Data";
import { useNavigate } from "react-router-dom";

const AllProductsPage = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="shop-containr">
      <Products
        // header={"The Top Sellings"}
        data={data_2}
        handleClick={handleClick}
        specific={true}
      />
    </div>
  );
};

export default AllProductsPage;

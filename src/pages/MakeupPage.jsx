import React from "react";
import FavoriteList from "../components/FavoriteList";
import { Makeup } from "../mockdata/Data";
import { useNavigate } from "react-router-dom";

const MakeupPage = () => {
    const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/makeup/${id}`);
  };
  return (
    <div>
      <FavoriteList data={Makeup} specific={true} handleClick={handleClick} />
    </div>
  );
};

export default MakeupPage;

import React, { useState } from "react";
import SelectComponent from "../components/Select";
import { Bridal, Family } from "../mockdata/Data";
import { useNavigate } from "react-router-dom";
import FavoriteList from "../components/FavoriteList";

const Bookings = () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [selectedOption, setSelectedOption] = useState("select city Hi there");

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/makeup`);
  };

  return (
    
    <div className="main-container">
      <div className="intro-container">
        <h1>Find your way</h1>
        <p>Find the best saloan near you uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>
        <div className="select-container">
          <SelectComponent
            options={options}
            defaultValue={selectedOption}
            onChange={handleSelectChange}
          />
          <SelectComponent
            options={options}
            defaultValue={selectedOption}
            onChange={handleSelectChange}
          />
          <button >Get Started</button>
         
        </div>
        <p className="make-up-links">Popular Searches Bridal Makeup | Family Makeup </p>
      </div>
      <FavoriteList header={"Bridal Makeup"} data={Bridal} handleClick={handleClick}  />
      <FavoriteList header={"Family Makeup"} data={Family} handleClick={handleClick}  />
    </div>
  );
};

export default Bookings;

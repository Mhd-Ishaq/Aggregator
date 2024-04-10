import React, { useState } from "react";
import SelectComponent from "../components/Select";
// import image1 from '../assests/icon-phone.svg';
// import image2 from '../assests/icon-facebook.svg';
// import image3 from '../assests/location.png';
// import Carousel from "../components/carousel";

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

  // const images = [image1, image2, image3];
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
      {/* <Carousel images={images} /> */}
    </div>
  );
};

export default Bookings;

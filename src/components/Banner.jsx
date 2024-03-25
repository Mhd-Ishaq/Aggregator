import React from "react";
import ArrowIcon from "../assests/reshot-icon-right-arrow-button-YAB8GEM7SD-c5f61.svg";
import RightArrowIcon from "../assests/reshot-icon-right-arrow-UCA8NGYZDJ.svg";
import { useNavigate } from "react-router-dom";

const Banner = ({  route }) => {
  const navigate = useNavigate();
  return (
    <div className="banner-container" onClick={() => navigate(route)}>
      {route === "contact" ? (
        <div className="contact">
          <p>
            Helping you Is our duty, Have any Quries, <span> Contact Us </span>
          </p>
          <img src={RightArrowIcon} alt="" />
        </div>
      ) : (
        <div className="banner">
          <p>
            Get your offers upto 50% off. Checkout now aaaaaaaaaaaaaaaa
            adddddddddddddd fffff
          </p>
          <img src={ArrowIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Banner;

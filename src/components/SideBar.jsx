// Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

import HAM from "../assests/icons8-hamburger-menu (1).svg";
import FACEBOOk from "../assests/icon-facebook.svg";
import INSTA from "../assests/icon-instagram.svg";
import LOGO from "../assests/logo.png";
import LocationSelector from "./LocationSelector";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="mobile">
        <div className="mobile-logo">
          <img src={LOGO} alt="" />
        </div>
        <div className="mobile-icon" onClick={toggleSidebar}>
          <img src={HAM} alt="" />
        </div>
      </nav>
      {isOpen && (
        <>
          <div className={`slidebar-container`}>
            <div className="mobile-logo">
              <img src={LOGO} alt="" />
            </div>
            <div className="route-container">
              <Link to="/about">About Us</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/bookings">Bookings</Link>
              <Link to="/courses">WorkShops</Link>
              <Link to="/contact">Contact Us</Link>
              <LocationSelector/>
            </div>
            <div className="bottom">
              <Link to="">
                <img src={FACEBOOk} alt="" />{" "}
              </Link>
              <Link to="">
                <img src={INSTA} alt="" />{" "}
              </Link>
            </div>
          </div>
          <div className="overlay" onClick={toggleSidebar}></div>
        </>
      )}
    </>
  );
};

export default SideBar;

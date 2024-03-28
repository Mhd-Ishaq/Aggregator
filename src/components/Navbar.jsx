import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assests/logo.png";
import LocationSelector from "./LocationSelector";


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <Link className="logo" to="/">
            <img src={LOGO} alt="" />
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/bookings">Bookings</Link>
          <Link to="/courses">WorkShops</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="location">
        <LocationSelector/>
        </div>
      </div>
    </>
  );
};

export default Navbar;

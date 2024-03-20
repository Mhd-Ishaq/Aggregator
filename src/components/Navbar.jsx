import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assests/logo.png";

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
        </div>
      </div>
    </>
  );
};

export default Navbar;

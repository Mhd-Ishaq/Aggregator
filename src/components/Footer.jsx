import React from "react";
import LOGO from "../assests/logo.png";
import PHONE from "../assests/icon-phone.svg";
import LOCATION from "../assests/icon-location.svg";
import EMAIL from "../assests/icon-email.svg";
import FACEBOOK from "../assests/icon-facebook.svg";
import INSTAGRAM from "../assests/icon-instagram.svg";
import TWITTER from "../assests/icon-twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={LOGO} alt="" />
      </div>
      <div className="lists">
        <ul>
          <li>
            <img src={LOCATION} alt="" />
            Lorem ipsum dolor sit
          </li>
          <li>
            <img src={PHONE} alt="" />{" "}
            <span>+1-543-123-4567</span>
          </li>
          <li>
            <img src={EMAIL} alt="" />{" "}
            <span>example@huddle.com</span>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#"></Link>About Us
          </li>
          <li>
            <Link to="#"></Link>What We Do
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#"></Link>FAQ
          </li>
          <li>
            <Link to="#"></Link>Contact Us
          </li>
        </ul>
        <div className="icons">
          <img src={FACEBOOK} alt="" />
          <img src={TWITTER} alt="" />
          <img src={INSTAGRAM} alt="" />
        </div>
      </div>
      <p className="copyright">&copy; Copyright 2024 Thesalonkart. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

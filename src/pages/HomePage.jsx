import React from "react";
import Services from "../components/Services";
import DetailedServices from "../components/DetailedServices ";
import FavoriteList from "../components/FavoriteList";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { data } from "../mockdata/Data";

import Banner from "../components/Banner";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div>
        <div className="section-1">
          <div className="intro">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <button onClick={() => navigate("/shop")} className="btn">
              Shop -&gt;
            </button>
          </div>
          <div className="intro-img">
            <img
              src="https://beautyconnect.in/assets/images/darkmode/parlour.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Services />
      <Banner route="discounts" />
      <DetailedServices />
      <Banner route="contact" />
      <h1 style={{textAlign:"center"}}>Our Best Products</h1>
      <FavoriteList header={"Our Best Products"} data={data} specific={true} />
      <Footer />
    </div>
  );
};

export default HomePage;

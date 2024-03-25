import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import DetailedServices from "../components/DetailedServices ";
import FavoriteLIst from "../components/FavoriteLIst";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Banner from "../components/Banner";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <Navbar />
      <SideBar />
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
      <FavoriteLIst />
      <Footer />
    </div>
  );
};

export default HomePage;

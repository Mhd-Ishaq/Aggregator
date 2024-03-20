import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import DetailedServices from "../components/DetailedServices ";
import FavoriteLIst from "../components/FavoriteLIst";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="main-container">
      <Navbar />
      <div>
      <div className="section-1">
      <div className="intro">
        <h1>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new 
          browser tab and see your sites load instantly. Try it for free.</p>
            <button onClick={()=>navigate("/shop")} className="btn">Shop -&gt;</button>
        </div>
      <div className="intro-img">
        <img src="https://beautyconnect.in/assets/images/darkmode/parlour.png" alt=""/>
      </div>
    </div>
      </div>
      <Services/>
    <DetailedServices/>
    <FavoriteLIst/>
    <Footer/>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import MODEL from "../assests/model.png";
import NavList from "./NavList";
import { useNavigate } from "react-router-dom";

const DetailedServices = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const listItems = ["Shopping", "Booking", "Workshops and Seminars"];
  const handleListItemClick = (index) => {
    setFocusedIndex(
       index === focusedIndex ? focusedIndex : index,
    );
  };
  const navigate = useNavigate();
  return (
    <section className="section-2">
      <div className="features">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <NavList
          navItems={listItems}
          handleListItemClick={handleListItemClick}
          focusedIndex={focusedIndex}
        />
        <div className={focusedIndex === 0 ? "isvisible tab-1" : "isNotVisible"}>
          <div className="tab-1-img">
            <img src={"https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=2048x2048&w=is&k=20&c=vcCiL70ryLoxaGWk59B2cse9h54Yb65Atnd7D8ab1bE="} alt="" />
          </div>
          <div className="tab-details">
            <h2>Explore shop</h2>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button className="btn" onClick={()=> navigate("/shop")}>Explore Shop</button>
          </div>
        </div>

        <div className={focusedIndex === 1 ? "isvisible tab-1" : "isNotVisible"}>
          <div className="tab-1-img">
            <img src={MODEL} alt="" />
          </div>
          <div className="tab-details">
            <h2>BooK Your appointment</h2>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button className="btn" onClick={()=> navigate("/bookings")} > Book Now</button>
          </div>
        </div>
        <div className={focusedIndex === 2 ? "isvisible tab-1" : "isNotVisible"}>
          <div className="tab-1-img">
            <img src={"https://media.istockphoto.com/id/1184658011/vector/people-at-the-seminar-presentation-conference-vector-illustration-business-training-coaching.jpg?s=612x612&w=0&k=20&c=2bUGH65MYIvfMToFtaJrvpbxowMlLiLeNiumyJJvkPM="} alt="" />
          </div>
          <div className="tab-details">
            <h2>Learn From The Best</h2>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button className="btn"onClick={()=> navigate("/courses")} >Explore WorkShops</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;

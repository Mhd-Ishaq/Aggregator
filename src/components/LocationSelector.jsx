import React, { useState } from "react";
import TargetIcon from "../assests/target.svg";

const LocationSelector = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowModal(false);
    setSearchQuery("");
  };

  const handleDetectLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setSelectedLocation(data.address.city));
    });
    setSearchQuery("");
    setTimeout(() => {
      setShowModal(false);

    }, 1000);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    // Implement search functionality here if needed
  };
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      setSelectedLocation(searchQuery);
      setShowModal(false);
      setSearchQuery("");
    }
  };

  const locations = [
    "Bengaluru",
    "Jaipur",
    "Pune",
    "Mumbai",
    "Banaras",
    "Varnasi",
    // Add more predefined options as needed
  ];

  return (
    <div className="location-selector">
      <div className="heading" onClick={handleOpenModal}>
        {selectedLocation ? selectedLocation : "Select Location"}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              placeholder="Enter your city..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleEnterPress}
            />
            <div className="detect-container">
              <h3 className="detect" onClick={handleDetectLocation}>
                <img src={TargetIcon} alt="" />
                Detect My Location
              </h3>
            </div>
            <h3 className="cities">Popular Cities</h3>
            <ul>
              {locations.map((location, index) => (
                <li key={index} onClick={() => handleLocationSelect(location)}>
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;

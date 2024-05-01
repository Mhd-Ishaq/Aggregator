import React, { useState } from "react";
// import "./App.css";

const Filters = ()=> {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const [filterPriceLow, setFilterPriceLow] = useState("");
  const [filterPriceHigh, setFilterPriceHigh] = useState("");

  // Sample data
  const data = [
    { id: 1, title: "This is new product 1", rating: "4.9", price: 4000 },
    { id: 2, title: "This is new product 2", rating: "4.5", price: 3000 },
    { id: 3, title: "This is new product 3", rating: "4.7", price: 4500 },
    { id: 4, title: "This is new product 4", rating: "4.8", price: 5000 },
    { id: 5, title: "This is new product 5", rating: "4.6", price: 3500 }
  ];

  // Filtered data based on search term and filters
  const filteredData = data.filter(item => {
    // Filter by title
    if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    // Filter by rating
    if (filterRating && item.rating !== filterRating) {
      return false;
    }
    // Filter by low price
    if (filterPriceLow && item.price < filterPriceLow) {
      return false;
    }
    // Filter by high price
    if (filterPriceHigh && item.price > filterPriceHigh) {
      return false;
    }
    return true;
  });

  return (
    <div className="container">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterRating} onChange={(e) => setFilterRating(e.target.value)}>
          <option value="">Filter by rating</option>
          <option value="4.9">4.9</option>
          <option value="4.8">4.8</option>
          <option value="4.7">4.7</option>
          {/* Add more rating options as needed */}
        </select>
        <input
          type="number"
          placeholder="Low price"
          value={filterPriceLow}
          onChange={(e) => setFilterPriceLow(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="High price"
          value={filterPriceHigh}
          onChange={(e) => setFilterPriceHigh(parseInt(e.target.value))}
        />
      </div>
      <div className="results">
        {filteredData.map(item => (
          <div key={item.id} className="item">
            <span>{item.title}</span>
            <span>Rating: {item.rating}</span>
            <span>Price: {item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;

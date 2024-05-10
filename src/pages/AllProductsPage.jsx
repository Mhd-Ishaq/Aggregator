import React, { useState } from "react";
import Products from "../components/Products";
import { data_2 } from "../mockdata/Data";
import { useNavigate } from "react-router-dom";
import Sort from "../components/Sort";
import Search from "../components/Search";
import CustomMenu from "../components/CustomMenu";

const values = [
  "Popularity",
  "Price -- Low to High",
  "Price -- High to Low",
  "Newest First",
  "Discount",
];

const AllProductsPage = () => {
  const [sortedBy, setSortedBy] = useState("");
  const [clickedIndex, setClickedIndex] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setShowMenu(false);
  };

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleSort = (index) => {
    switch (index) {
      case 1:
        // Sort by popularity
        setSortedBy("popularity");
        setClickedIndex(index);
        break;
      case 2:
        // Sort by price low to high
        setSortedBy("priceLowToHigh");
        setClickedIndex(index);
        break;
      case 3:
        // Sort by price high to low
        setSortedBy("priceHighToLow");
        setClickedIndex(index);
        break;
      case 4:
        // Sort by newest first
        setSortedBy("newestFirst");
        setClickedIndex(index);
        break;
      case 5:
        // Sort by discount
        setSortedBy("discount");
        setClickedIndex(index);
        break;
      default:
        // Reset sorting
        setSortedBy("");
        setClickedIndex(null);
        break;
    }
  };

  return (
    <div className="shop-containr">
      <div className="search-sort">
        <div className="menu" onClick={() => setShowMenu(!showMenu)}>
          <p style={{ fontSize: "1.2rem" }}>Sort By</p>

          <CustomMenu
            isOpen={showMenu}
            closeModal={closeModal}
            menuOptions={values}
            handleSort={handleSort}
          />
        </div>
        <Sort
          clickedIndex={clickedIndex}
          handleSort={handleSort}
          values={values}
        />
        <Search />
      </div>

      <Products
        sortedBy={sortedBy}
        data={data_2}
        handleClick={handleClick}
        specific={true}
      />
    </div>
  );
};

export default AllProductsPage;

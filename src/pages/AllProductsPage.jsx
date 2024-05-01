import React from "react";
import Products from "../components/Products";
import { data_2 } from "../mockdata/Data";
// import { useNavigate } from "react-router-dom";
// import Sort from "../components/Sort";

const AllProductsPage = () => {
  // const [sortedBy, setSortedBy] = useState("");
  // const [clickedIndex, setClickedIndex] = useState(null);
  // const navigate = useNavigate();
  
  // const handleClick = (id) => {
  //   navigate(`/products/${id}`);
  // };

  // const handleSort = (index) => {
  //   if (index === 0) {
  //     // Skip "Sort By" option
  //     return;
  //   }

  //   // Handle sorting logic based on the index
  //   switch (index) {
  //     case 1:
  //       // Sort by popularity
  //       setSortedBy("popularity");
  //       setClickedIndex(index);
  //       break;
  //     case 2:
  //       // Sort by price low to high
  //       setSortedBy("priceLowToHigh");
  //       setClickedIndex(index);
  //       break;
  //     case 3:
  //       // Sort by price high to low
  //       setSortedBy("priceHighToLow");
  //       setClickedIndex(index);
  //       break;
  //     case 4:
  //       // Sort by newest first
  //       setSortedBy("newestFirst");
  //       setClickedIndex(index);
  //       break;
  //     case 5:
  //       // Sort by discount
  //       setSortedBy("discount");
  //       setClickedIndex(index);
  //       break;
  //     default:
  //       // Reset sorting
  //       setSortedBy("");
  //       setClickedIndex(null);
  //       break;
  //   }
  // };
  return (
    <div className="shop-containr">
      {/* <Sort clickedIndex={clickedIndex} handleSort={handleSort} /> */}
      <Products
        // sortedBy={sortedBy}
        data={data_2}
        // handleClick={handleClick}
        specific={true}
      />
    </div>
  );
};

export default AllProductsPage;

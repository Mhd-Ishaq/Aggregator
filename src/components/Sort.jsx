// import React from "react";

// const Sort = () => {
//   const values = [
//     " Sort By", "Popularity",
//     "Price -- Low to High",
//     "Price -- High to Low",
//     "Newest First ",
//     "Discount",
//   ];
//   return (
//     <div className="sort-container">
//       {values.map((value,index) => (
//         <span className="item" key={index} onClick={()=>console.log(index)}>{value}</span>
//       ))}
//     </div>
//   );
// };

// export default Sort;

import React from "react";

const Sort = ({ handleSort,clickedIndex }) => {
    // const [clickedIndex, setClickedIndex] = useState(null);

    // const handleItemClick = (index) => {
    //   setClickedIndex(index);
    // };
  const values = [
    "Sort By",
    "Popularity",
    "Price -- Low to High",
    "Price -- High to Low",
    "Newest First",
    "Discount",
  ];
//   console.log(clickedIndex,'sortedBy')

  return (
    <div className="sort-container">
      {values.map((value, index) => (
        <span
        className={`item ${clickedIndex === index ? "clicked" : ""}`}
          key={index}
          onClick={() =>{
            console.log(index, clickedIndex, index === clickedIndex,"values"); handleSort(index)}}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Sort;

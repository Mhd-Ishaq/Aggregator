import React from "react";

const Sort = ({ handleSort, clickedIndex, values }) => {
  return (
    <>
      <div className="sort-container">
        {values.map((value, index) => (
          <span
            className={`item ${clickedIndex === index ? "clicked" : ""}`}
            key={index}
            onClick={() => handleSort(index)}
          >
            {value}
          </span>
        ))}
      </div>
    </>
  );
};

export default Sort;

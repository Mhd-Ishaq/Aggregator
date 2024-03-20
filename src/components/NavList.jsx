import React from "react";

const NavList = ({ navItems, handleListItemClick, focusedIndex, style }) => {
  return (
    <ul className={style ? style : "ulStyles"}>
      {navItems.map((item, index) => (
        <li
          key={index}
          className={`listStyles ${index === focusedIndex ? "focusFirst" : ""}`}
          onClick={() => handleListItemClick(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
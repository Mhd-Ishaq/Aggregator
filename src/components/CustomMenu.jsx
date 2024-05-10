import React from "react";

const CustomMenu = ({ menuOptions, isOpen, closeModal, handleSort }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="menu-wrapper">
            {menuOptions.map((item, index) => (
              <div
                className="menu-item"
                key={item}
                onClick={() => {
                  closeModal();
                  handleSort(index);

                  console.log("first", index);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CustomMenu;

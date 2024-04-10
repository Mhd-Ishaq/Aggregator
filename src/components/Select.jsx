import React, { useState } from "react";

const SelectComponent = ({ options, defaultValue, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="select-container">
      <select className="select" value={selectedOption} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;

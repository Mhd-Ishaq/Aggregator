import React, { useState } from 'react';

const Slider = ({ min, max, step, onChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <span>{value}</span>
    </div>
  );
};

export default Slider;

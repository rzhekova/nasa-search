import React from "react";

const CheckBox = ({ type, toggleCheckBoxClick }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={type}
        name={type}
        onClick={event => toggleCheckBoxClick(event.target.name)}
      />
      <label htmlFor={type}>{type}</label>
    </div>
  );
};

export default CheckBox;

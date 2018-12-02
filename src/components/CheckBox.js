import React from "react";

const CheckBox = ({ type, toggleCheckBoxClick, assetTypes }) => {
  return (
    <div className="single-checkbox">
      <input
        type="checkbox"
        defaultChecked={assetTypes.includes(type) ? true : false}
        id={type}
        name={type}
        onClick={event => toggleCheckBoxClick(event.target.name)}
      />
      <label htmlFor={type}>{type[0].toUpperCase() + type.slice(1)}</label>
    </div>
  );
};

export default CheckBox;

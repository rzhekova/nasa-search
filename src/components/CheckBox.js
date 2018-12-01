import React from "react";

const CheckBox = ({ type, toggleCheckBoxClick, assetTypes }) => {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={assetTypes.includes(type) ? true : false}
        id={type}
        name={type}
        onClick={event => toggleCheckBoxClick(event.target.name)}
      />
      <label htmlFor={type}>{type}</label>
    </div>
  );
};

export default CheckBox;

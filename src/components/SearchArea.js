import React from "react";
import CheckBox from "./CheckBox";
import Button from "./Button";

const SearchArea = ({
  toggleCheckBoxClick,
  handleSubmit,
  handleChange,
  assetTypes,
  searchTerm
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={event => handleChange(event.target.value)}
      />
      <Button />
      <CheckBox
        assetTypes={assetTypes}
        type="image"
        toggleCheckBoxClick={toggleCheckBoxClick}
      />
      <CheckBox
        assetTypes={assetTypes}
        type="audio"
        toggleCheckBoxClick={toggleCheckBoxClick}
      />
    </form>
  );
};

export default SearchArea;

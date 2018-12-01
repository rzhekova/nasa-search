import React from "react";
import CheckBox from "./CheckBox";
import Button from "./Button";

const SearchArea = ({ toggleCheckBoxClick }) => {
  return (
    <form>
      <input type="text" name="search" id="" />
      <Button />
      <CheckBox type="image" toggleCheckBoxClick={toggleCheckBoxClick} />
      <CheckBox type="audio" toggleCheckBoxClick={toggleCheckBoxClick} />
    </form>
  );
};

export default SearchArea;

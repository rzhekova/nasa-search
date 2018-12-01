import React from "react";
import CheckBox from "./CheckBox";
import Button from "./Button";

const SearchArea = ({ toggleCheckBoxClick, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id=""
        onChange={event => handleChange(event.target.value)}
      />
      <Button />
      <CheckBox type="image" toggleCheckBoxClick={toggleCheckBoxClick} />
      <CheckBox type="audio" toggleCheckBoxClick={toggleCheckBoxClick} />
    </form>
  );
};

export default SearchArea;

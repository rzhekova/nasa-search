import React from "react";

const SearchField = ({ searchTerm, handleChange }) => {
  return (
    <input
      type="text"
      name="search"
      value={searchTerm}
      onChange={event => handleChange(event.target.value)}
    />
  );
};

export default SearchField;

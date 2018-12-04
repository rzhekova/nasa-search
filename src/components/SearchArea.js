import React from "react";
import CheckBox from "./CheckBox";
import Button from "./Button";
import SearchField from "./SearchField";

const SearchArea = ({
  toggleCheckBoxClick,
  handleSubmit,
  handleChange,
  assetTypes,
  searchTerm,
  searchCompleted
}) => {
  return (
    <form
      className={assetTypes.length || searchCompleted ? "form-slide-up" : null}
      onSubmit={handleSubmit}
    >
      <SearchField searchTerm={searchTerm} handleChange={handleChange} />
      <Button />
      <div className="checkboxes">
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
        <CheckBox
          assetTypes={assetTypes}
          type="video"
          toggleCheckBoxClick={toggleCheckBoxClick}
        />
      </div>
    </form>
  );
};

export default SearchArea;

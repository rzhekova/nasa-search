import React from "react";
import SearchPageHeader from "./SearchPageHeader";
import SearchArea from "./SearchArea";
import ResultsList from "./ResultsList";

const SearchPage = ({
  results,
  toggleCheckBoxClick,
  handleChange,
  handleSubmit,
  assetTypes,
  searchTerm
}) => {
  return (
    <div>
      <SearchPageHeader />
      <SearchArea
        toggleCheckBoxClick={toggleCheckBoxClick}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        assetTypes={assetTypes}
        searchTerm={searchTerm}
      />

      <ResultsList results={results} />
    </div>
  );
};

export default SearchPage;

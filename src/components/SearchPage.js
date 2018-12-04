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
  searchTerm,
  searchCompleted,
  handlePageClick,
  currentPage
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
        searchCompleted={searchCompleted}
      />
      <ResultsList
        results={results}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </div>
  );
};

export default SearchPage;

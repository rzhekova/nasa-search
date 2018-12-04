import React from "react";

const PageNumbers = ({ pageNumbers, currentPage, handlePageClick }) => {
  return (
    <nav>
      {pageNumbers.map((number, index) => {
        return (
          <button
            className={`page-number ${
              currentPage === index + 1 ? "page-number-active" : null
            }`}
            key={number}
            id={number}
            onClick={handlePageClick}
          >
            {number}
          </button>
        );
      })}
    </nav>
  );
};

export default PageNumbers;

import React, { Component } from "react";
import ResultsListItem from "./ResultsListItem";

class ResultsList extends Component {
  render() {
    const { results, currentPage, handlePageClick } = this.props;
    const itemsPerPage = 12;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(results.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return currentItems.length ? (
      <div>
        <ul>
          {currentItems.map(result => {
            const mediaType = result.data[0].media_type;
            return (
              <ResultsListItem
                key={result.data[0].nasa_id}
                title={result.data[0].title}
                id={result.data[0].nasa_id}
                mediaType={mediaType}
                imageUrl={mediaType === "image" ? result.links[0].href : null}
              />
            );
          })}
        </ul>

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
      </div>
    ) : null;
  }
}

export default ResultsList;

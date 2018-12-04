import React, { Component } from "react";
import ResultsListItem from "./ResultsListItem";
import PageNumbers from "./PageNumbers";

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
                assetDetails={result}
                mediaType={mediaType}
                imageUrl={mediaType === "image" ? result.links[0].href : null}
              />
            );
          })}
        </ul>

        <PageNumbers
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </div>
    ) : null;
  }
}

export default ResultsList;

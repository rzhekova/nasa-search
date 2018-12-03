import React, { Component } from "react";
import ResultsListItem from "./ResultsListItem";

class ResultsList extends Component {
  state = {
    currentPage: 1
  };

  render() {
    const { results } = this.props;
    const { currentPage } = this.state;
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
          {pageNumbers.map(number => {
            return (
              <button
                className="page-number"
                key={number}
                id={number}
                onClick={this.handlePageClick}
              >
                {number}
              </button>
            );
          })}
        </nav>
      </div>
    ) : null;
  }

  handlePageClick = event => {
    window.scrollTo({ top: 200, left: 100, behavior: "smooth" });
    this.setState({ currentPage: +event.target.id });
  };
}

export default ResultsList;

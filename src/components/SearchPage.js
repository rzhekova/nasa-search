import React, { Component } from "react";
import SearchPageHeader from "./SearchPageHeader";
import SearchArea from "./SearchArea";
import ResultsList from "./ResultsList";

class SearchPage extends Component {
  state = {
    assetTypes: [],
    searchTerm: "",
    results: []
  };
  render() {
    const { results } = this.state;
    return (
      <div>
        <SearchPageHeader />
        <SearchArea
          toggleCheckBoxClick={this.toggleCheckBoxClick}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <ResultsList results={results} />
      </div>
    );
  }

  toggleCheckBoxClick = value => {
    const { assetTypes } = this.state;
    let modifiedAssetTypes = assetTypes.slice();

    if (!assetTypes.includes(value)) {
      modifiedAssetTypes.push(value);
    } else {
      modifiedAssetTypes.splice(modifiedAssetTypes.indexOf(value), 1);
    }

    this.setState({ assetTypes: modifiedAssetTypes });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { assetTypes, searchTerm } = this.state;
    const URL = `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=${assetTypes.join(
      ","
    )}`;

    if (searchTerm && assetTypes.length) {
      fetch(URL)
        .then(response => response.json())
        .then(data => this.setState({ results: data.collection.items }))
        .catch(error => console.log(error));
    }
  };

  handleChange = searchTerm => {
    this.setState({ searchTerm });
  };
}

export default SearchPage;

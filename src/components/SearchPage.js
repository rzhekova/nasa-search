import React, { Component } from "react";
import SearchPageHeader from "./SearchPageHeader";
import SearchArea from "./SearchArea";
import ResultsList from "./ResultsList";

class SearchPage extends Component {
  state = {
    assetTypes: [],
    searchTerm: ""
  };
  render() {
    return (
      <div>
        <SearchPageHeader />
        <SearchArea toggleCheckBoxClick={this.toggleCheckBoxClick} />
        <ResultsList />
      </div>
    );
  }

  //   toggleCheckBoxClick = value => {
  //     const { assetTypes } = this.state;
  //     let modifiedAssetTypes = assetTypes.slice();

  //     if (!assetTypes.includes(value)) {
  //       modifiedAssetTypes.push(value);
  //     } else {
  //       modifiedAssetTypes.splice(modifiedAssetTypes.indexOf(value), 1);
  //     }

  //     this.setState({ assetTypes: modifiedAssetTypes });
  //   };
}

export default SearchPage;

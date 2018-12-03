import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import RedirectToSearch from "./components/RedirectToSearch";
import SearchPage from "./components/SearchPage";
import AssetPage from "./components/AssetPage";

class App extends Component {
  state = {
    assetTypes: [],
    searchTerm: "",
    results: [],
    searchCompleted: false
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/asset/:id" component={AssetPage} />
          <Route
            path="/search"
            render={() => (
              <SearchPage
                toggleCheckBoxClick={this.toggleCheckBoxClick}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                results={this.state.results}
                searchTerm={this.state.searchTerm}
                assetTypes={this.state.assetTypes}
                searchCompleted={this.state.searchCompleted}
              />
            )}
          />
          <Route exact path="/" component={RedirectToSearch} />
        </Switch>
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
        .then(data =>
          this.setState({
            results: data.collection.items,
            searchCompleted: true
          })
        )
        .catch(error => console.log(error));
    }
  };

  handleChange = searchTerm => {
    this.setState({ searchTerm });
  };
}

export default App;

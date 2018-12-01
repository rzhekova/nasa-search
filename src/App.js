import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import RedirectToSearch from "./components/RedirectToSearch";
import SearchPage from "./components/SearchPage";
import AssetPage from "./components/AssetPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/asset/:id" component={AssetPage} />
          <Route path="/search" component={SearchPage} />
          <Route exact path="/" component={RedirectToSearch} />
        </Switch>
      </div>
    );
  }
}

export default App;

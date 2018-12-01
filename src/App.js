import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import RedirectToSearch from "./components/RedirectToSearch";
import SearchPage from "./components/SearchPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/asset/:id" render={() => <h2>bye</h2>} />
          <Route path="/search" component={SearchPage} />
          <Route exact path="/" component={RedirectToSearch} />
        </Switch>
      </div>
    );
  }
}

export default App;

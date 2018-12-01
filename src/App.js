import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import RedirectToSearch from "./components/RedirectToSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/asset/:id" render={() => <h2>bye</h2>} />
          <Route path="/search" render={() => <h2>Hi</h2>} />
          <Route exact path="/" component={RedirectToSearch} />
        </Switch>
      </div>
    );
  }
}

export default App;

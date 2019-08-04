import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Search from './pages/Search'
import Saved from './pages/Saved'

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Google Books Search</h1>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>
    );
  }
}

export default App
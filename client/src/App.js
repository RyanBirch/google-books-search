import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <div className="container" style={{ paddingTop: "9em" }}>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App
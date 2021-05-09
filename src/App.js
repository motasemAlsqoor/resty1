import React, { Component } from "react";
import Header from "./components/header/Header.js";
import Home from "./Home";
import History from "./components/pages/History/HistoryPage";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./App.scss";

import Help from "./components/pages/Help/Help.js";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header>
          <Router>
            <nav>
              <ul>
                <li>
                  <NavLink
                    activeStyle={{
                      fontWeight: "bold",
                      color: "yellow",
                    }}
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      fontWeight: "bold",
                      color: "yellow",
                    }}
                    to="/history"
                  >
                    HISTORY
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      fontWeight: "bold",
                      color: "yellow",
                    }}
                    to="/help"
                  >
                    HELP
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/history">
                <History />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
            </Switch>
          </Router>
        </Header>
      </div>
    );
  }
}

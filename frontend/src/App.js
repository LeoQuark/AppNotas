import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Sign from "./components/sign/Sign";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/sign">
          <Sign />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Sign from "./components/sign/Sign";
import UserState from "./components/context/User/UserState";

function App() {
  return (
    <UserState>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Sign />
          </Route>
          <Route path="/:id" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserState>
  );
}

export default App;

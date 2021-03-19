import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 

import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

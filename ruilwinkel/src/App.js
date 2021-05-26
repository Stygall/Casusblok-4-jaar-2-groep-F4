import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useMoralis } from "react-moralis";

import "./App.css";
import Header from "./components/header/header";
import Product from "./components/product/product";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <Link className="nav-item" to="/">
            Home
          </Link>
          &nbsp;-&nbsp;
          <Link className="nav-item" to="/product">
            Productregistratie
          </Link>
        </nav>

        <Switch>
          <Route path="/product">
            <div>
              <Product />
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

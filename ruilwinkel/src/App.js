import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header";
import ProductForm from "./components/product/product";
import Return from "./components/productReturn/productReturn";
import Home from "./components/home/home";
import Footer from "./components/appFooter/footer";

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
          &nbsp;-&nbsp;
          <Link className="nav-item" to="/retour">
            Retourneren
          </Link>
        </nav>

        <Switch>
          <Route path="/retour">
            <Return />
          </Route>
          <Route path="/product">
            <ProductForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

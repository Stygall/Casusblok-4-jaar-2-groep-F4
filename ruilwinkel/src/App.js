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
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/product">
                Productregistratie
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/retour">
                Retourneren
              </Link>
            </li>
          </ul>
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

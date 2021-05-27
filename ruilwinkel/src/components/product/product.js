import React from "react";

import "./product.css";
import { useMoralis, useNewMoralisObject } from "react-moralis";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      artNum: null,
      prodName: null,
      categorie: null,
      credits: null,
      amount: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  submit() {
    console.log(this.state);
    alert(this.state.prodName + " is toegevoegd!");
  }

  render() {
    return (
      <div>
        <form className="productForm">
          <label>
            <p className="text">
              Artikelnummer:
              <br />
              <input
                placeholder="Artikelnummer"
                className="input"
                type="number"
                min="0"
                name="artNum"
                required
                onChange={this.handleInputChange}
              />
              <br />
            </p>
          </label>
          <label>
            <p className="text">
              Productnaam:
              <br />
              <input
                placeholder="Productnaam"
                className="input"
                type="text"
                name="prodName"
                required
                onChange={this.handleInputChange}
              />
              <br />
            </p>
          </label>
          <label>
            <p className="text">
              Categorie:
              <br />
              <select
                placeholder="Categorie"
                className="input"
                type="text"
                name="categorie"
                required
                onChange={this.handleInputChange}
              >
                <option value="Undefined"></option>
                <option value="Laptop">Laptop</option>
                <option value="Randapparatuur">Randapparatuur</option>
                <option value="Decoratie">Decoratie</option>
                <option value="Spellen analoog">Spellen analoog</option>
                <option value="Spellen digitaal">Spellen digitaal</option>
                <option value="Keukengerei">Keukengerei</option>
              </select>
              <br />
            </p>
          </label>
          <label>
            <p className="text">
              Credits:
              <br />
              <input
                placeholder="Credits"
                className="input"
                type="number"
                min="0"
                name="credits"
                required
                onChange={this.handleInputChange}
              />
              <br />
            </p>
          </label>
          <label>
            <p className="text">
              Aantal:
              <br />
              <input
                placeholder="Aantal"
                className="input"
                type="number"
                min="1"
                name="amount"
                required
                onChange={this.handleInputChange}
              />
              <br />
            </p>
          </label>
          <label>
            <button
              className="input"
              type="submit"
              onClick={() => this.submit()}
            >
              Toevoegen
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Product;

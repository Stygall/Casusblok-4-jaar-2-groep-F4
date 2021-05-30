import React from "react";
import { Moralis } from "moralis";

import "./productReturn.css";

class Return extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      prodId: null,
    };
  }

  render() {
    return (
      <div>
        <form className="productForm">
          <label>
            <p className="text">Gebruiker</p>
            <input
              className="input "
              placeholder="Gebruiker"
              type="text"
              name="user"
              required
            />
          </label>
          <label>
            <p className="text">Product ID</p>
            <input
              className="input"
              placeholder="productID"
              type="text"
              name="prodId"
              required
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Return;

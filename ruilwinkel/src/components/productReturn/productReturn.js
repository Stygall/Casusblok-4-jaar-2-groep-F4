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
            <p className="text">
              Gebruiker
              <br />
              <input
                className="input "
                placeholder="Gebruiker"
                type="text"
                name="user"
                required
              />
            </p>
          </label>
          <label>
            <p className="text">
              Product ID
              <br />
              <input
                className="input"
                placeholder="productID"
                type="text"
                name="prodId"
                required
              />
            </p>
          </label>
        </form>
      </div>
    );
  }
}

export default Return;

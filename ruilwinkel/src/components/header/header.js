import React from "react";

import RuilwinkelLogo from "./RuilwinkelLogo.png";
import "./header.css";

function Header() {
  return (
    <div className="App-header">
      <p>
        <img src={RuilwinkelLogo} alt="Logo" height="140" width="200" />
        Ruilwinkel Vaals
      </p>
      <i>ruilen - samenwerken - leren - ontmoeten</i>
    </div>
  );
}

export default Header;

import React from "react";

import "./footer.css";

function Footer() {
  return (
    <div className="footer-styling">
      <h3>Contact</h3>
      <p>
        <b>Adres: </b> Kerkstraat 46, Vaals
        <br />
        <b>Tel: </b> +31 6 20 74 98 86
      </p>
      <p>
        <h5>Openingstijden:</h5>
        <li>Dinsdag 10.00-14.00</li>
        <li>Woensdag 12.00-16.00</li>
        <li>Donderdag 10.00-14.00</li>
        <li>Elke eerste zaterdag van de maand 11.00-15.00</li>
      </p>
      <img src="RuilwinkelLogo.png" />
    </div>
  );
}

export default Footer;

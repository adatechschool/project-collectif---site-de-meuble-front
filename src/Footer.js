import React from "react";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";

function Footer() {
  return (
    <footer>
      <a
        className="liens"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        Contact
      </a>
      <a
        className="liens"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        A propos
      </a>
      <a
        className="liens"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        Livraison
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={twitter} alt="twitter" className="logo" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src={instagram} alt="instagram" className="logo" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img src={facebook} alt="facebook" className="logo" />
      </a>
    </footer>
  );
}

export default Footer;

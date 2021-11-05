import React from "react";
import logo from "./images/LogoMarque.png";
import account from "./images/account.png";
import panier from "./images/iconBasket.png";

function Header() {
  return (
    <div className="headerApp">
      <div className="marque">
        <img src={logo} alt="logo" className="logoAF" />

        <h1>ADOPT A FUR(NITURE)</h1>
      </div>
      <div className="menu">
        <nav>
          <img src={panier} alt="panier" className="logo" />
          <a href="/Login">
            <img src={account} alt="profil" className="logo" />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;

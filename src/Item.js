import React from "react";
import twitter from "./images/twitter.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// A relier à votre API
// Créer le bouton qui relie à Modal_description.js

const Item = ({ info }) => (
  <div>
    <img src={twitter} alt="twitter" className="product" />
    <h4 className="name"> {`Nom: ${info.nomproduit}`}</h4>
    <h5 className="category"> {`Catégorie: ${info.libelle_categorie}`}</h5>
    <h5 className="price"> {`Prix: ${info.prix}`}</h5>
    <button type="button" className="button_item">
      Acheter
    </button>
  </div>
);

export default Item;

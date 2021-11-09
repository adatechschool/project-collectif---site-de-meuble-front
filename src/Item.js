import React from "react";
import twitter from "./images/twitter.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ModalDescription from "./Modal_description.js";
// A relier à votre API
// Créer le bouton qui relie à Modal_description.js
function Item({info}) {
  const [show, setShow] = useState(false);

return (
  <div>
    <img src={`${info.photo}`} alt="photo meuble" className="photo" />
    <h4 className="name"> {`Nom: ${info.nomproduit}`}</h4>
    <h5 className="category"> {`Catégorie: ${info.libelle_categorie}`}</h5>
    <h5 className="price"> {`Prix: ${info.prix}`}</h5>
    <button type="button" className="button_style">
      Acheter
    </button>
    <button className="button_style" onClick={() => setShow(true)}>Description</button>
      <ModalDescription onClose={() => setShow(false)} show={show} />
  </div>
);
}

export default Item;

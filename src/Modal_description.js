import React from "react";
import "./Modal_description.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCarouselComponent from "./BootstrapCarouselComponent.js";

// Page description de chaque item / A relier à l'API et à l'Item concerné sur la page accueil

class ModalDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomproduit: this.props.nomproduit,
      libelle_categorie: this.props.libelle_categorie,
      prix: this.props.prix,
      photo: this.props.photo,
    };
    console.log("1-------------");
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal_description" onClick={this.props.onClose}>
        <div
          className="modal_description_content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal_description_header">
            <button onClick={this.props.onClose} className="button-description">
              X
            </button>
          </div>
          <div className="modal_description_body">
            <div className="wrapper_description">
              <div className="sub-wrapper-top">
                <div className="photo_description">
                  <img class="image-produit" src={this.state.photo} />
                  {/*<BootstrapCarouselComponent /> */}
                </div>
                <div className="info_description">
                  <h3>{this.state.nomproduit}</h3>
                  <h3>{this.state.libelle_categorie}</h3>
                  <h3>{this.state.prix} €</h3>
                  <button className="button_description_basket">
                    Ajouter au panier
                  </button>
                </div>
              </div>
              <div className="sub-wrapper-bottom">
                <div className="details_description">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal_description_footer"></div>
        </div>
      </div>
    );
  }
}

export default ModalDescription;
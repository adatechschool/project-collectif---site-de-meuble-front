import React from "react";

// Maquette générique d'une page Modal qui a servi à la construction de la page description
const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={props.onClose} className="button">
            X
          </button>
        </div>
        <div className="modal-body">
          <h1>Modal Body</h1>
        </div>
        <div className="modal-footer">
          <button className="button">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

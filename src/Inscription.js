import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inscription.css";

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Le nom a été soumis : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Inscription">
        <div className="form">
          <h2>Inscrivez vous</h2>
          <label className="form-label">
            Nom{" "}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Prénom
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            E-mail
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Mot de passe
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Adresse postale
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Ville
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Téléphone
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <input className="button" type="submit" value="Envoyer" />
      </form>
    );
  }
}
export default Inscription;

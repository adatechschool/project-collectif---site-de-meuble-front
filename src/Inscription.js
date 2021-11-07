import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


class Inscription extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Le nom a été soumis : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2>Inscrivez vous</h2>
            
              <div>
              <label>
              Nom <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              </div>
              
              <label>
              <br></br>
              <br></br>
              Prénom
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <br></br>
              <br></br>
              E-mail
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <br></br>
              <br></br>
              Mot de passe 
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <br></br>
              <br></br>
              Adresse postale 
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <br></br>
              <br></br>
              Ville
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <br></br>
              <br></br>
              Téléphone
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>
          <br></br>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  }
export default Inscription
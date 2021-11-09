import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemRow from "./ItemRow";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfItems: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/produit", {}).then((response) => {
      console.log(response);
      response.json().then((json) => {
        console.log(json);
        this.setState({
          listOfItems: json,
        });
      });
    });
  }

  render() {
    let { listOfItems } = this.state;

    // Permet de générer les deux colonnes et de dispatcher pairs/impairs - le 2eme if gère les cas ou nous avons un nombre impair d'items au total
    return (
      <div>
        <div className="container">
          <div className="colItems">
            {listOfItems.map((item, index) => {
              if (index % 2 === 0) {
                if (index + 1 < listOfItems.length) {
                  return <ItemRow array={[item, listOfItems[index + 1]]} />;
                } else {
                  return <ItemRow array={[item]} />;
                }
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

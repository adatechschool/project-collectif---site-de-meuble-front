import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminItem from './AdminItem';


class Admin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {itemsArrayFromJson: []};
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => {
            this.setState({
              itemsArrayFromJson: json
            })
          })
      }
      render () {
        let { itemsArrayFromJson } = this.state
        return (
          <div>
            <div>
              <table striped bordered hover>
                <thead>
                    <tr className="tableau">
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
              </table>
            </div>
            <div className="colItemsAdmin">
              {itemsArrayFromJson.map((item) => {
                return <AdminItem itemAdmin ={item}  />
                })
              }
            </div>
          </div>
        )
      }
    }
    
    export default Admin
    
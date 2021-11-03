import React from 'react'
import Item from './Item'

class Main extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            listOfItems: []
        };
    }
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    listOfItems: json,
                });
            })
    }
    render(){
        const {listOfItems} = this.state
        listOfItems.map(item=><Item key={item.id} name={item.name} />)
        return (
        <div>
            <h1>
                Anciens meuble pour une nouvelle vie
            </h1>
            <div className='container'>  
                <div className='column_items' id='column_1'> 
                <Item />
                </div>
            </div>
        </div>
    )}}
    
export default Main
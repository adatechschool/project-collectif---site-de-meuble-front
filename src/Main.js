import React from 'react'
import Item from './Item'
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './App.css';
// import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemRow from './ItemRow';

class Main extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      listOfItems: []
    }
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState({
          listOfItems: json
        })
      })
  }
  render () {
    let { listOfItems } = this.state
    // {listOfItems.pop()}
  //   {function mapingCol1(){
  //     for(let i =0; i<listOfItems.length; i+=2){
  //       return <Item info={listOfItems[i]} />
  //       continue
        
  //   }}
  //   function mapingCol2(){
  //     for(let i =1; i<listOfItems.length; i+=2){
  //       return <Item info={listOfItems[i]} />
  //       continue
  //   }}
  //   // let mapingCol11 = mapingCol1()
  //   // let mapingCol22 = mapingCol2()
  // }
    return (
      
      <div>
        <h1>Anciens meubles pour une nouvelle vie</h1>
        <div className="container">
            <div className="colItems">
            {listOfItems.map((item, index) => {
              if(index%2==0){
                if(index+1<listOfItems.length){
                  return <ItemRow array ={[item, listOfItems[index+1]] }  />
                }else{
                  return <ItemRow array ={[item] }  />
                }
              }
            })}
            </div>
  
            </div>
             {/* </div> */}
             {/* <div className="col" id='col2'>
            // {listOfItems.map((item, index) => {
            //   if(index%2!=0){
            //     return <Item info={item} />
            //   }
            // })}
            // {/* {function mapingCol2(){
            //   for(let i =1; i<listOfItems.length; i++){
            //     <Item info={listOfItems[i]} />
            //     continue;
            // }}} */}
           
            
            
            
            
            
            
          </div>
       
        
     
      
    )
    
  }

}

export default Main

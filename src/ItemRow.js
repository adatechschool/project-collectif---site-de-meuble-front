import React from 'react'
import Item from './Item'
import './App.css'
// import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemRow = ({ array }) => (
  <div className='row'>
      {array.map((item)=>{
          return <div className='col'><Item info={item}/></div>
      })}
  </div>
)

export default ItemRow

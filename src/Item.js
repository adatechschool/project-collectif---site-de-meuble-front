import React from 'react'
import twitter from './twitter.svg'

function Item(props) {
    return (
        <div>
            <img src ={twitter} alt= 'twitter' className ='product'/>
            <h4 className='name'> {props.name}
            </h4>
            <h5 className='category'> Buffet
            </h5>
            <h5 className='price'> 3000Mad
            </h5>
            <button type='button' className='button_item'>
            Acheter 
            </button>
            
        </div>
    )
}


export default Item
import React from 'react'
import twitter from './twitter.svg'

const Item = ({ info }) => 
        <div>
            <img src ={twitter} alt= 'twitter' className ='product'/>
            <h4 className='name'> {`Nom: ${info.name}`}
            </h4>
            <h5 className='category'> {`Catégorie: ${info.username}`}
            </h5>
            <h5 className='price'> {`Prix: ${info.email}`}
            </h5>
            <button type='button' className='button_item'>
            Acheter 
            </button>
            
        </div>



export default Item
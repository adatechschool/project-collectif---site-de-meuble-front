import React from 'react'
import Item from './Item'

function Main () {
    return (
        <div>
            <h1>
                Anciens meuble pour une nouvelle vie
            </h1>
            <div className='container'>  
                <div className='column_items' id='column_1'>  
                <Item />
                </div>
                <div className='column_items' id='column_2'>  
                <Item />
                </div>
                <div className='column_items' id='column_3'>  
                <Item />
                </div>
            </div>
        </div>

    )
}


export default Main
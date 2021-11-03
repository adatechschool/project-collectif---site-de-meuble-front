import React from 'react'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import facebook from './facebook.svg'

function Footer () {
    return (
        <div>
                <p>
                  Contact  
                </p>   
                <p>
                  A propos  
                </p>
                <p>
                  Livraison  
                </p>
                <p>
                  Reseax sociaux  
                </p>         
            <img src ={twitter} alt= 'twitter' className ='logo'/>
            <img src ={instagram} alt= 'instagram' className ='logo'/>
            <img src ={facebook} alt= 'facebook' className ='logo'/>
        </div>
    )
}


export default Footer
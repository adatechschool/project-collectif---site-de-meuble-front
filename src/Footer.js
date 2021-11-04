import React from 'react'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import facebook from './facebook.svg'

function Footer () {
    return (
        <div>
                <a href="https://instagram.com" target="_blank">
                  <p>
                  Contact  
                </p>
                </a>
                <a href="https://instagram.com" target="_blank">
                <p>
                  A propos  
                </p>
                </a>
                <a href="https://instagram.com" target="_blank"></a>
                <p>
                  Livraison  
                </p>
                <p>
                  Reseax sociaux  
                </p>         
                <a href="https://twitter.com" target="_blank">
                  <img src ={twitter} alt= 'twitter' className ='logo'/>
                </a>
                <a href="https://instagram.com" target="_blank">
                  <img src ={instagram} alt= 'instagram' className ='logo'/>
                </a>
                <a href="https://facebook.com" target="_blank">
                <img src ={facebook} alt= 'facebook' className ='logo'/>
                </a>
        </div>
    )
}


export default Footer
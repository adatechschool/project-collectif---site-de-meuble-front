import React from 'react'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import facebook from './facebook.svg'

function Footer () {
    return (
        <footer>
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
                <a href="https://instagram.com" target="_blank" >
                <p>
                  Livraison  
                </p>
                </a>
                <p>
                  Réseaux sociaux  
                </p>         
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src ={twitter} alt= 'twitter' className ='logo'/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <img src ={instagram} alt= 'instagram' className ='logo'/>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src ={facebook} alt= 'facebook' className ='logo'/>
                </a>
        </footer>
    )
}


export default Footer
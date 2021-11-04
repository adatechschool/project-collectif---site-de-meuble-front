import React from 'react'
import logo from './logo.png'
import download from './download.jfif'
import panier from './panier.png'

function Header () {
    return (
        <div>
            <a href="" target="_blank">
            <img src={logo} alt= 'logo' className ='logo' />
            </a>
            <h1>
                Magasin meuble
            </h1>
            <nav>
            <a href="" target="_blank">
            <img src ={panier} alt= 'panier' className ='logo'/>
            </a>
            <a href="" target="_blank">
            <img src ={download} alt= 'profil' className ='logo'/>
            </a>
            </nav>
        </div>
    )
}


export default Header
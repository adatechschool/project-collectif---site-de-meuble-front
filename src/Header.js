import React from 'react'
import logo from './logo.png'
import download from './download.jfif'
import panier from './panier.png'




function Header () {
    return (
        <div>
            <img src={logo} alt= 'logo' className ='logo' />
            <h1>
                Magasin meuble
            </h1>
            <nav>
            <img src ={panier} alt= 'panier' className ='logo'/>
            <a href="/Login">
            <img src ={download} alt= 'profil' className ='logo'/>
            </a>
            </nav>
        </div>
    )
}


export default Header
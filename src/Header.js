import React from 'react'
import logo from './images/LogoMarque.png'
import account from './images/account.png'
import panier from './images/iconBasket.png'
import admin from './images/admin.jpg'




function Header () {
    return (
        <div className="headerApp">
            <div className="marque">
            <a href="" target="_blank">
                <img src={logo} alt= 'logo' className ='logoAF' />
            </a>
            <h1>
                ADOPT A FUR(NITURE)
            </h1>
            </div>
            <div className="menu">
            <nav>

            <img src ={panier} alt= 'panier' className ='logo'/>
            <a href="/Login">
            <img src ={account} alt= 'profil' className ='logo'/>
            </a>
            <a href="/Admin">
                <img src={admin} alt= 'admin' className='logo'/>
            </a>
            </nav>
            </div>
        </div>
    )
}


export default Header
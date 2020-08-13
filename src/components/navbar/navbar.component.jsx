import React from 'react';
import './nabvar.styles.css';
import './navbar.utils'
import { ReactComponent as CartLogo } from "../../Assets/shopping-bag.svg";


const Header = () => (
    <nav className="navbar">
        <ul className="menu">
            <div className=""></div>
            <li className="logo"><a href="#">LOGO</a></li>

            <li className="item"><a href="#">SHOP</a></li>
            <li className="item"><a href="#">CONTACT</a></li>
            <li className="logo "><input class=" form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/></li>

            <li className="button secondary "><a className="logo-container" href="#"><CartLogo /></a></li>
            <li id="toggle" className="toggle"><span class="bars"></span></li>
        </ul>
    </nav>
)

export default Header;
import React from 'react';
import  './nabvar.styles.css';
import './navbar.utils'


const Header = () => (
    <nav className="navbar">
        <ul className="menu">
            <li className="logo"><a href="#">Logo</a></li>
            <li className="item"><a href="#">Shop</a></li>
            <li className="item"><a href="#">Contact</a></li>
            <li className="item button secondary"><a href="#">Cart</a></li>
            <li className="item button"><a href="#">SignIn</a></li>
            <li id="toggle" className="toggle"><span class="bars"></span></li>
        </ul>
    </nav>
)

export default Header;
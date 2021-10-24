import React from "react";
import {NavLink} from 'react-router-dom'
import '../header/index.css';

const Header = () => {
    return (
        <header>
            <NavLink exact to='/articles'>SHARETRADE.com</NavLink>
        </header>
    )
}

export default Header
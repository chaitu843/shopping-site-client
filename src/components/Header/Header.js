import React from 'react'
import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header() {
    return (
        <div className="Header">
            <div className="nav-links">
                <NavLink to='/' className="brand-name">VESTE</NavLink>
                <NavLink to='/home' className="nav-link">HOME</NavLink>
                <NavLink to='/collections' className="nav-link">COLLECTION</NavLink>
                <NavLink to='/' className="nav-link">LOOKBOOK</NavLink>
                <NavLink to='/' className="nav-link">CUSTOMER CARE</NavLink>
                <NavLink to='/' className="nav-link">VISIT US</NavLink>
            </div>
        </div>
    )
}

export default Header;

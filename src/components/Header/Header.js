import React from 'react'
import { NavLink } from 'react-router-dom';
import headerData from './Header.json';

import './Header.scss';

function Header() {
    const { logoInfo,
        navLinks } = headerData;
    const ref = React.createRef();
    const dropdownHandler = (e) => {
        ref.current.classList.toggle('no-hide');
    }
    return (
        <div className="Header">
            <div className="nav-links">
                <div className="brand-link-container">
                    <NavLink to={logoInfo.link} className="brand-name">{logoInfo.name}</NavLink>
                </div>
                {
                    navLinks.map(navLink => {
                        return navLink.secondaryLinks ?
                            <div key={navLink.name} className="nav-link-container" onMouseEnter={dropdownHandler} onMouseLeave = {dropdownHandler}>
                                <span className= 'nav-link-with-secondary'>{navLink.name.toUpperCase()}</span>
                                <div className="secondary-links" ref = {ref}>
                                    {
                                        navLink.secondaryLinks.map(navLink => {
                                            return (
                                                <div className="secondary-link-container" key={navLink.name} >
                                                    <NavLink to={`/products${navLink.link}`} className="nav-link">{navLink.name.toUpperCase()}</NavLink>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> :
                            <div key={navLink.name} className="nav-link-container">
                                <NavLink to={navLink.link} className={navLink.secondaryLinks ? 'nav-link-with-secondary' : 'nav-link'}>{navLink.name.toUpperCase()}</NavLink>

                            </div>
                    })
                }
            </div>
        </div>
    )
}

export default Header;

// Need to implement cart, signIn and signUp

// Product Overview Page
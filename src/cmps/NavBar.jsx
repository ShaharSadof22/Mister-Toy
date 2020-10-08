
import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';


function _NavBar() {
    return (
        <nav className="nav-bar flex">
            <NavLink className="nav-item" to="/">Home</NavLink>
            <NavLink className="nav-item" to="/toy">Toys</NavLink>
            {/* <NavLink className="nav-item" to="/sighin">Sighin</NavLink> */}
        </nav>
    )
}

export const NavBar = withRouter(_NavBar)

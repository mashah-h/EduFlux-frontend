import React from "react";
import {Link} from "react-router-dom";


function Navbar() {
    return(
        <nav className="navbar">
            <h1 className="nav-logo">EduFlux</h1>
            <ul className='nav-links'>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>

        </nav>
    )
}


export default Navbar;
import React from "react";
import '../styles/navbar.css';
import logo from "../imgs/new_logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="nav">
                <ul className="navlinks">
                    <li className="logo">
                        <NavLink to="/" exact activeClassName="active">
                            <img className="logo" src={logo} alt="Sarah's logo" />
                        </NavLink>
                    </li>
                    <li className="pages">
                        <NavLink to="/web" activeClassName="active">
                            Web
                        </NavLink>
                    </li>
                    <li className="contact-page">
                        <NavLink to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div>
                <a className="resume-button" href="../imgs/new_res.pdf" download>Resume</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
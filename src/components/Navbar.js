import React from "react";
import '../styles/navbar.css';
import logo from "../imgs/new_logo.png";
import Resume from "../imgs/new_res.pdf";
import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

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
                <a className="resume-button" href={Resume} download target="_blank" rel="noopener noreferrer">Resume</a>  
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
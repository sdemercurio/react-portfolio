import React from "react";
import '../styles/navbar.css';
import logo from "../imgs/new-logo.svg";
import Resume from "../imgs/Sarah_DeMercurio_WebDev_Resume.pdf";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink to="/" exact activeClassName="active">
                    <img className="logo" src={logo} alt="Sarah's logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
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
                        <li>
                            <a className="resume-button" href={Resume} download target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        // <div className="navbar">
        //     <nav className="nav">
        //         <div className = "logo">
        //                 <NavLink to="/" exact activeClassName="active">
        //                     <img className="logo" src={logo} alt="Sarah's logo" />
        //                 </NavLink>
        //                 <div className = "ham-bars">{FaBars}</div>
        //           </div>
        //         <ul className="navlinks">
        //             <li className="pages">
        //                 <NavLink to="/web" activeClassName="active">
        //                     Web
        //                 </NavLink>
        //             </li>
        //             <li className="contact-page">
        //                 <NavLink to="/contact" activeClassName="active">
        //                     Contact
        //                 </NavLink>
        //             </li>
        //         </ul>
        //         <div>
        //         <a className="resume-button" href={Resume} download target="_blank" rel="noopener noreferrer">Resume</a>  
        //         </div>
        //     </nav>
        // </div>
    );
}

export default Navbar;
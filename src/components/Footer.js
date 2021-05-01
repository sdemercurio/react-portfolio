import React from "react";
import '../styles/footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
             <a className="socials" href="https://github.com/sdemercurio" target="blank"><FaGithub /></a>
             <a className="socials" href="https://www.linkedin.com/in/sarah-demercurio-a8507517/" target="blank"><FaLinkedin /></a>
             <p>&#169; 2021 Sarah L. DeMercurio</p>
        </div>
        
    );
}

export default Footer;
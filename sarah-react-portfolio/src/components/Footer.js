import React from "react";
import '../styles/footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="createdBy">
                <p>&#169; 2021 Sarah L. DeMercurio</p>
            </div>
            <div className="socials">
            <div className="github">
                <a href="https://github.com/sdemercurio" target="blank"><FaGithub /></a>
            </div>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/sarah-demercurio-a8507517/" target="blank"><FaLinkedin /></a>
            </div>
            </div>
        </div>
        
    );
}

export default Footer;
import React from "react";
import Title from '../components/Title';
import '../styles/contact.css';
import '../index.css';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <div>
                <Title title={"Let's Work Together"} />
            </div>

            <div className="contact-body">

                <div className="contact-info">
                    <p>
                        If you are looking for someone to carry out a web project or someone to join your team, please reach out!
                    </p>

                    <a className="btn" href="mailto:sarah.l.demercurio@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>

                </div>
               
            </div>

            <Footer />


        </>
    );
}

export default Contact;
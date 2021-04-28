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
                    If you have an idea and would like a creative mind to help you execute it, I would love to hear about it. Please feel free to reach out!
                </p>
                <a className="email-link" href="mailto:sarah.l.demercurio@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
                </div>
            </div>
            <Footer />
            <div className="shape1"></div>
            

        </>
    );
}

export default Contact;
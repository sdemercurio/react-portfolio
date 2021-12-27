import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
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
            <Container>
                <Row className="contact-body">
                    <Col md={2}></Col>
                    <Col md={8} className="contact-info">
                            <p>
                                If you are looking for someone to carry out a web project or someone to join your team, please reach out!
                            </p>
                        </Col>
                        <Col md={2}></Col>
                </Row>
                <Row className="say-hi">
                <Col md={5}></Col>
                <Col md={2} className="email-link">
                        <a className="btn" href="mailto:sarah.l.demercurio@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
                </Col>
                <Col md={5}></Col>
                </Row>
            </Container>

            <Footer />


        </>
    );
}

export default Contact;
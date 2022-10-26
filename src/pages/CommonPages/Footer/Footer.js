import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaHouzz, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LeftSideNav from '../../../Courses/LeftSideNav/LeftSideNav';


const Footer = () => {
    return (
        <div className='bg-dark text-white mb-0'>
           <div>
<Container>
<Row>
    <Col lg='5'>
        <p>About us</p>
        <p><FaHouzz></FaHouzz> Location:Dhake,Bonani,3/27</p>
        <p><FaPhone></FaPhone>phone:+088349994</p>
        <p><FaEnvelope></FaEnvelope>Email:Jhon@s23ads.com</p>
<div className='d-flex flex-row g-3'>
    <Link to='#'><FaFacebook></FaFacebook></Link>
    <Link to='#'><FaTwitter></FaTwitter></Link>
    <Link to='#'><FaLinkedin></FaLinkedin></Link>
    <Link to='#'><FaInstagram></FaInstagram></Link>
</div>
    </Col>
    <Col lg='5'>
<h3>Quick contact</h3>
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

    </Col>

    <Col lg='2'>
<p>Important link</p>
<LeftSideNav></LeftSideNav>
    </Col>
</Row>
</Container>
           </div>

           <hr></hr>
           <div className='text-center'>
            <p>copy right© 2020-21.All right reservse</p>
           </div>
        </div>
    );
};

export default Footer;
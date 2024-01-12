import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./CustomNavbar.css";
import { Illustration } from './assets';

const CustomNavbar = () => {
  return (
    <div className='navbars'>
    <Navbar className='custom-navbar' variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand><img className='image' src={Illustration.OpenHack} alt='hhh'></img></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-elements">
          <LinkContainer to="/schedule">
            <Nav.Link>Schedule</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sponsor">
            <Nav.Link>Sponsors</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/rules">
            <Nav.Link>Rules</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/faq">
            <Nav.Link>FAQs</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact-us">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <Button variant='primary' className='button'>Log in</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default CustomNavbar;

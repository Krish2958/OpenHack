// CustomNavbar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import  supabase  from '../../supabase';

const CustomNavbar = ({ user, onSignOut }) => {
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      onSignOut();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>OpenHack</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/schedule">
            <Nav.Link>Schedule</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact-us">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sponsor">
            <Nav.Link>Sponsor</Nav.Link>
          </LinkContainer>
          {user ? (
            <>
              <LinkContainer to="/registration">
                <Nav.Link>Registration</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq">
                <Nav.Link>FAQ</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/rules">
                <Nav.Link>Rules</Nav.Link>
              </LinkContainer>
              <Button variant="outline-light" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
            
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./CustomNavbar.css";
import { Assets } from "../../assets";

export const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => {
    setExpanded(false);
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Navbar
      className="custom-navbar"
      bg="dark"
      variant="dark"
      expand="lg"
      expanded={expanded}
    >
      <LinkContainer to="/" onClick={handleNavCollapse}>
        <Navbar.Brand>
          <img alt='OpenHack' className="brand-logo-nav" src={Assets.OpenHack} />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse
        id="basic-navbar-nav"
        onSelect={handleNavCollapse}
      >
        <Nav className="mr-auto">
          <LinkContainer to="/schedule" onClick={handleNavCollapse}>
            <Nav.Link>Schedule</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sponsors" onClick={handleNavCollapse}>
            <Nav.Link>Sponsors</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/rules" onClick={handleNavCollapse}>
            <Nav.Link>Rules</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/faq" onClick={handleNavCollapse}>
            <Nav.Link>FAQ</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact-us" onClick={handleNavCollapse}>
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/registration" onClick={handleNavCollapse}>
            <Button className='nav-button' variant="primary">Registration</Button>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

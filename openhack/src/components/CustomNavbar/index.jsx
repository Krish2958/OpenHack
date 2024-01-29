import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./CustomNavbar.css";
import { Assets } from "../../assets";

export const CustomNavbar = () => {
  return (
    <Navbar className="custom-navbar" bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand><img alt='OpenHack' className="brand-logo-nav" src={Assets.OpenHack} /></Navbar.Brand>
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
          <LinkContainer to="/registration">
            <Nav.Link>Registration</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/faq">
            <Nav.Link>FAQ</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/rules">
            <Nav.Link>Rules</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

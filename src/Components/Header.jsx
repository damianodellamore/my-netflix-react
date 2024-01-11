import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Navbar.Brand href="#">
        <img
          src="assets/logo.png"
          style={{ width: "100px", height: "55px" }}
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#"><i className="fa fa-search icons"></i></Nav.Link>
          <Nav.Link href="#"><div id="kids">KIDS</div></Nav.Link>
          <Nav.Link href="#"><i className="fa fa-bell icons"></i></Nav.Link>
          <Nav.Link href="#"><i className="fa fa-user icons"></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;

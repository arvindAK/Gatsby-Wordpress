import React from "react"
//import hs from "./header.module.scss"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Gatsby-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About us
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

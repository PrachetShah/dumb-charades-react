import React from "react";
import { Container, Navbar } from "react-bootstrap";
import img from "../img/logo.png";

function NavbarComponent() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="fs-1">
          <img
            alt=""
            src={img}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{" "}
          Dumb Charades Movie Generator
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

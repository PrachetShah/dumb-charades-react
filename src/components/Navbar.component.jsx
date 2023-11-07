import React from "react";
import { Navbar } from "react-bootstrap";
import img from "../img/logo.png";

function NavbarComponent() {
  return (
    <Navbar className="bg-body-tertiary">
      <div className="d-flex px-3" style={{ width: "100%" }}>
        <Navbar.Brand className="fs-3">
          <img alt="" src={img} width="50" height="50" className=" align-top" />{" "}
        </Navbar.Brand>
        <h2 className="pt-2">Dumb Charades Movie Generator</h2>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;

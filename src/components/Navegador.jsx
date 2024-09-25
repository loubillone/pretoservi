import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/navegador.css";
import logoPetro from "../assets/img/home/logoPetro.png";
import { Link, NavLink } from "react-router-dom";

const Navegador = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary container-nav">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div classname="container-img-home">
              <img src={logoPetro} alt="logo petroservi" className="img-nav" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-container-items">
              <Nav.Link as={NavLink} to="/" className="nav-items">
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sobreNosotros" className="nav-items">
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/empresasMineras"
                className="nav-items"
              >
                Empresas Mineras
              </Nav.Link>
              <Nav.Link as={NavLink} to="/galeria" className="nav-items">
                Galeria
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contacto" className="nav-items">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navegador;
